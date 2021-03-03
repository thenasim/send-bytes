import { Flex, Box, Text, Image } from "@chakra-ui/react";

interface Props {
  name: string;
  lastMessage: string;
  avator: string;
}

const ChatMsg: React.FC<Props> = ({ name, lastMessage, avator }) => {
  return (
    <Flex
      align="center"
      px={2}
      py={4}
      rounded="lg"
      _hover={{ backgroundColor: "gray.50" }}
      cursor="pointer"
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
