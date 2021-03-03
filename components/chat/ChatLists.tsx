import { data } from "../../data/ChatData";
import { Box } from "@chakra-ui/react";
import ChatMsg from "./ChatMsg";

const ChatList: React.FC = () => {
  return (
    <Box px={2} mt={4}>
      {data.person.map((msg) => (
        <ChatMsg {...msg} key={msg.id} />
      ))}
    </Box>
  );
};

export default ChatList;
