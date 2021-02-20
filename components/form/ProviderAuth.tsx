import React from "react";
import { getFirebase } from "../../utils/lazyFirebase";
import { Box, Text, Stack, Button } from "@chakra-ui/react";
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

interface Props {
  msg: string;
}

const ProviderAuth: React.FC<Props> = ({ msg }) => {
  const handleGoogle = async () => {
    const { firebase, auth } = await getFirebase();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user?.email);
      })
      .catch((err) => {
        console.log("Something weird happened", err.message);
      });
  };
  const handleFacebook = () => {};
  const handleTwitter = () => {};

  return (
    <Box pt={6}>
      <Text fontSize="xs" color="gray.500" letterSpacing="wide">
        {msg}
      </Text>
      <Stack mt={2} direction={["column", "row"]}>
        <Button
          onClick={handleGoogle}
          leftIcon={<AiFillGoogleCircle />}
          variant="outline"
        >
          Google
        </Button>
        <Button
          onClick={handleFacebook}
          leftIcon={<AiFillFacebook />}
          variant="outline"
        >
          Facebook
        </Button>
        <Button
          onClick={handleTwitter}
          leftIcon={<AiFillTwitterCircle />}
          variant="outline"
        >
          Twitter
        </Button>
      </Stack>
    </Box>
  );
};

export default ProviderAuth;
