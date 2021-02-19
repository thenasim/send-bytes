import { Box, Text, Stack, Button, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schema/validation";
import FormContainer from "../components/form/FormContainer";
import InputField from "../components/common/InputField";
import ProviderAuth from "../components/form/ProviderAuth";
import { useState } from "react";
import { getFirebase } from "../utils/lazyFirebase";

type Inputs = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm<Inputs>({
    // @ts-ignore
    resolver: yupResolver(signUpSchema),
  });
  const toast = useToast();

  const submitFunc = async (data: Inputs) => {
    setIsLoading(true);
    try {
      const { auth } = await getFirebase();
      await auth.createUserWithEmailAndPassword(data.email, data.password);
      console.log(data);

      setIsLoading(false);
      toast({
        title: "Succes creating account",
        description: "Your account has been created successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      setIsLoading(false);
      toast({
        title: "Error occured",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <FormContainer>
      <Box mb={6}>
        <Text fontSize="xl">Sign up</Text>
      </Box>
      <Box as="form" onSubmit={handleSubmit(submitFunc)}>
        <Stack spacing={4} direction="column">
          <Stack direction="row" spacing={2}>
            <InputField
              ref={register}
              msg={errors.first_name?.message}
              label="First Name"
              type="text"
              name="first_name"
            />
            <InputField
              ref={register}
              msg={errors.last_name?.message}
              label="Last Name"
              type="text"
              name="last_name"
            />
          </Stack>

          <InputField
            ref={register}
            msg={errors.username?.message}
            label="Username"
            type="text"
            name="username"
          />
          <InputField
            ref={register}
            msg={errors.email?.message}
            label="Email"
            type="text"
            name="email"
          />
          <InputField
            ref={register}
            msg={errors.password?.message}
            label="Password"
            type="password"
            name="password"
          />
          <Box>
            <Button
              isLoading={isLoading}
              loadingText="signing up"
              colorScheme="teal"
              width="100%"
              type="submit"
            >
              Sign Up
            </Button>
          </Box>
        </Stack>
      </Box>
      <ProviderAuth msg="Or signup with" />
    </FormContainer>
  );
};

export default SignUp;
