import React from "react";
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
  return (
    <Box pt={6}>
      <Text fontSize="xs" color="gray.500" letterSpacing="wide">
        {msg}
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
  );
};

export default ProviderAuth;
