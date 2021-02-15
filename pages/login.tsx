import { auth } from "../utils/firebase";
import { useForm } from "react-hook-form";
import { Box, Text, Stack, Input, Button, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import FormContainer from "../components/form/FormContainer";
import ProviderAuth from "../components/form/ProviderAuth";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const toast = useToast();

  const submitFunc = async (data: Inputs) => {
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password);

      toast({
        title: `Success`,
        description: "Login successfully to account",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Error occured",
        description: "Email or password does not match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    async function getUser() {
      const user = await auth.currentUser;
      console.log(user?.email);
    }
    getUser();
  }, []);

  return (
    <FormContainer>
      <Box mb={6}>
        <Text fontSize="xl">Login page</Text>
      </Box>
      <Box as="form" onSubmit={handleSubmit(submitFunc)}>
        <Stack spacing={4} direction="column">
          <Box>
            <Text fontSize="medium" fontWeight="medium">
              Email
            </Text>
            <Input name="email" type="email" ref={register} />
          </Box>
          <Box>
            <Text fontSize="medium" fontWeight="medium">
              Password
            </Text>
            <Input name="password" type="password" ref={register} />
          </Box>
          <Box>
            <Button
              isLoading={false}
              loadingText="signing"
              colorScheme="teal"
              width="100%"
              type="submit"
            >
              Sign in
            </Button>
          </Box>
        </Stack>
      </Box>
      <ProviderAuth msg="Or login with" />
    </FormContainer>
  );
};

export default Login;
