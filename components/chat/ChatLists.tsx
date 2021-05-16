import { Box } from "@chakra-ui/react";
import ChatMsg from "./ChatMsg";
import { useStore } from "../../store/store";

const ChatList: React.FC = () => {
  const chats = useStore((state) => state.chatlists);

  return (
    <Box px={2} mt={4}>
      {chats.map((msg) => (
        <ChatMsg {...msg} key={msg.username} />
      ))}
    </Box>
  );
};

export default ChatList;
