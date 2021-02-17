import { useForm } from "react-hook-form";
import { Box, Text, Stack, Button, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FormContainer from "../components/form/FormContainer";
import InputField from "../components/common/InputField";
import ProviderAuth from "../components/form/ProviderAuth";
import { getFirebase } from "../utils/lazyFirebase";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const toast = useToast();

  const submitFunc = async (data: Inputs) => {
    setIsLoading(true);
    try {
      await (await getFirebase())
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);

      setIsLoading(false);
      toast({
        title: `Success`,
        description: "Login successfully to account",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch {
      setIsLoading(false);
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
      const user = await (await getFirebase()).auth().currentUser;
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
          <InputField ref={register} label="Email" type="text" name="email" />
          <InputField
            ref={register}
            label="Password"
            type="password"
            name="password"
          />
          <Box>
            <Button
              isLoading={isLoading}
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
