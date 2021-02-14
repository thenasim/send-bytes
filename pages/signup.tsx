import { auth } from "../utils/firebase";
import { useForm } from "react-hook-form";
import {
  Flex,
  Box,
  Text,
  Stack,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

type Inputs = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const toast = useToast();

  const submitFunc = async (data: Inputs) => {
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
    <Flex justify="center" align="center" width="full" height="100vh">
      <Box
        p={4}
        m={4}
        maxW="sm"
        width="full"
        borderWidth="1px"
        borderRadius="md"
      >
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
                <Input name="first_name" type="text" ref={register} />
              </Box>
              <Box>
                <Text fontSize="medium" fontWeight="medium">
                  Last Name
                </Text>
                <Input name="last_name" type="text" ref={register} />
              </Box>
            </Flex>
            <Box>
              <Text fontSize="medium" fontWeight="medium">
                Username
              </Text>
              <Input isInvalid name="username" type="text" ref={register} />
              <Text fontSize="xs" color="crimson" letterSpacing="wide">
                Username is too short minimum 2 char needed
              </Text>
            </Box>
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
                Sign Up
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box pt={6}>
          <Text fontSize="xs" color="gray.500" letterSpacing="wide">
            Or sign up with
          </Text>
          <Stack mt={2} direction={["column", "row"]}>
            <Button leftIcon={<AiFillGoogleCircle />} variant="outline">
              Google
            </Button>
            <Button leftIcon={<AiFillFacebook />} variant="outline">
              Facebook
            </Button>
            <Button leftIcon={<AiFillTwitterCircle />} variant="outline">
              Twitter
            </Button>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
