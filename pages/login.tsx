import { Flex, Box, Text, Stack, Input, Button } from "@chakra-ui/react";
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Login: React.FC = () => {
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
        <Box as="form">
          <Stack spacing={4} direction="column">
            <Box>
              <Text fontSize="medium" fontWeight="medium">
                Email
              </Text>
              <Input name="email" type="email" />
            </Box>
            <Box>
              <Text fontSize="medium" fontWeight="medium">
                Password
              </Text>
              <Input name="email" type="password" />
            </Box>
            <Box>
              <Button
                isLoading={false}
                loadingText="signing"
                colorScheme="teal"
                width="100%"
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
