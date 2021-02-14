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
import { useEffect } from "react";
import { GesturesFeature } from "framer-motion";

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
        <Box pt={6}>
          <Text fontSize="xs" color="gray.500" letterSpacing="wide">
            Or login with
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

export default Login;
