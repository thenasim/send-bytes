import { data } from "../../data/ChatData";
import { Box } from "@chakra-ui/react";
import Message from "./Message";

const Messages: React.FC = () => {
  return (
    <Box px={2} mt={4}>
      {data.person.map((msg) => (
        <Message {...msg} key={msg.id} />
      ))}
    </Box>
  );
};

export default Messages;
