import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCurrentUser } from "../hooks/useCurrentUser";
import Message from "../components/chat/Message";
import SideBar from "../components/chat/SideBar";
import PageLoader from "../components/common/PageLoader";
import { useStore } from "../store/store";
import { getUsername } from "../utils/db";

const Chat: React.FC = () => {
  const user = useCurrentUser();
  const router = useRouter();
  const setUsername = useStore((state) => state.setUsername);

  async function setUsernameToState() {
    if (user?.email) {
      const username = await getUsername(user.email);
      setUsername(username);
    }
  }

  if (user === null) {
    router.push("/login");
  }

  if (user) {
    setUsernameToState();

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
