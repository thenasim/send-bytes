import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCurrentUser } from "../hooks/useCurrentUser";
import Message from "../components/chat/Message";
import SideBar from "../components/chat/SideBar";
import PageLoader from "../components/common/PageLoader";

const Chat: React.FC = () => {
  const user = useCurrentUser();
  const router = useRouter();

  if (user === null) {
    router.push("/login");
  }

  if (user) {
    return (
      <Flex>
        <SideBar />
        <Message />
      </Flex>
    );
  }

  return <PageLoader />;
};

export default Chat;
