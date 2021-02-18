import { Flex, Box, Text } from "@chakra-ui/react";
import { PuffLoader } from "react-spinners";
import ChatHeader from "../components/chat/ChatHeader";
import SearchMessage from "../components/chat/SearchMessage";
import Messages from "../components/chat/Messages";
import { useRouter } from "next/router";
import { useCurrentUser } from "../hooks/useCurrentUser";

const Chat: React.FC = () => {
  const user = useCurrentUser();
  const router = useRouter();

  if (user === null) {
    router.push("/login");
  }

  if (user) {
    return (
      <Flex>
        <Box
          py={4}
          borderRightColor="gray.100"
          borderRightWidth="1px"
          w={["full", 360]}
          h="100vh"
          overflowY="scroll"
          flexShrink={0}
        >
          <ChatHeader />
          <SearchMessage />
          <Messages />
        </Box>
        <Box p={4} w="full" display={["none", "flex"]}>
          <Text>Chat Details</Text>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="full"
    >
      <PuffLoader />
    </Flex>
  );
};

export default Chat;
