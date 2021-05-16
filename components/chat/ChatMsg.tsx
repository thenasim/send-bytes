import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useStore } from "../../store/store";

interface Props {
  name: string;
  lastMessage: string;
  avator: string;
  username: string;
}

const ChatMsg: React.FC<Props> = (props) => {
  const { name, lastMessage, avator } = props;
  const setSelectedChat = useStore((state) => state.setSelectedChat);

  return (
    <Flex
      align="center"
      px={2}
      py={4}
      rounded="lg"
      _hover={{ backgroundColor: "gray.50" }}
      cursor="pointer"
      onClick={() => setSelectedChat(props)}
    >
      <Image w="12" h="12" src={avator} rounded="full" />
      <Box ml={4}>
        <Text>{name}</Text>
        <Text fontSize="smaller" color="grey">
          {lastMessage.slice(0, 30)}
          {lastMessage.length > 30 && "..."}
        </Text>
      </Box>
    </Flex>
  );
};

export default ChatMsg;
