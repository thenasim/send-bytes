import { useForm } from "react-hook-form";
import { Box, Text, Stack, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import FormContainer from "../components/form/FormContainer";
import InputField from "../components/common/InputField";
import ProviderAuth from "../components/form/ProviderAuth";
import { getFirebase } from "../utils/lazyFirebase";
import { useRouter } from "next/router";
import { useCurrentUser } from "../hooks/useCurrentUser";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const user = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const toast = useToast();

  const submitFunc = async (data: Inputs) => {
    setIsLoading(true);
    try {
      const firebase = await getFirebase();
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);

      router.push("/chat");
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

  if (user) {
    router.push("/chat");
  }

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
