import {
  Flex,
  Box,
  Text,
  Stack,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { auth } from "../utils/firebase";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMsg from "../components/common/ErrorMsg";
import { signUpSchema } from "../schema/validation";
import FormContainer from "../components/form/FormContainer";
import ProviderAuth from "../components/form/ProviderAuth";

type Inputs = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>({
    // @ts-ignore
    resolver: yupResolver(signUpSchema),
  });
  const toast = useToast();

  const submitFunc = async (data: Inputs) => {
    console.log(data);
    try {
      await auth.createUserWithEmailAndPassword(data.email, data.password);

      toast({
        title: "Succes creating account",
        description: "Your account has been created successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
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
          <Flex>
            <Box mr={[1, 2]}>
              <Text fontSize="medium" fontWeight="medium">
                First Name
              </Text>
              <Input
                isInvalid={errors.first_name?.message != undefined}
                name="first_name"
                type="text"
                ref={register}
              />
              <ErrorMsg msg={errors.first_name?.message} />
            </Box>
            <Box>
              <Text fontSize="medium" fontWeight="medium">
                Last Name
              </Text>
              <Input
                isInvalid={errors.last_name?.message != undefined}
                name="last_name"
                type="text"
                ref={register}
              />
              <ErrorMsg msg={errors.last_name?.message} />
            </Box>
          </Flex>
          <Box>
            <Text fontSize="medium" fontWeight="medium">
              Username
            </Text>
            <Input
              isInvalid={errors.username?.message != undefined}
              name="username"
              type="text"
              ref={register}
            />
            <ErrorMsg msg={errors.username?.message} />
          </Box>
          <Box>
            <Text fontSize="medium" fontWeight="medium">
              Email
            </Text>
            <Input
              isInvalid={errors.email?.message != undefined}
              name="email"
              type="email"
              ref={register}
            />
            <ErrorMsg msg={errors.email?.message} />
          </Box>
          <Box>
            <Text fontSize="medium" fontWeight="medium">
              Password
            </Text>
            <Input
              isInvalid={errors.password?.message != undefined}
              name="password"
              type="password"
              ref={register}
            />
            <ErrorMsg msg={errors.password?.message} />
          </Box>
          <Box>
            <Button
              isLoading={false}
              loadingText="signing"
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
