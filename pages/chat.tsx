import { data } from "../data/ChatData";
import { FiEdit } from "react-icons/fi";
import { CgOptions } from "react-icons/cg";
import { IoMdPersonAdd } from "react-icons/io";
import {
  Flex,
  Box,
  Text,
  Image,
  IconButton,
  Input,
  Tooltip,
} from "@chakra-ui/react";

const ChatHeader: React.FC = () => {
  return (
    <Flex px={4} justify="space-between">
      <Flex align="center">
        <Image w="10" h="10" src="https://i.pravatar.cc/100" rounded="full" />
        <Text ml={2} fontSize="x-large" fontWeight="bold">
          Chats
        </Text>
      </Flex>
      <Flex align="center">
        <Tooltip label="add new friends" rounded="md">
          <IconButton
            colorScheme="gray"
            aria-label="add new person"
            size="md"
            rounded="full"
            icon={<IoMdPersonAdd />}
          />
        </Tooltip>
        <Tooltip label="change settings" rounded="md">
          <IconButton
            ml={2}
            colorScheme="gray"
            aria-label="change setting"
            size="md"
            rounded="full"
            icon={<CgOptions />}
          />
        </Tooltip>

        <Tooltip label="new message" rounded="md">
          <IconButton
            ml={2}
            colorScheme="gray"
            aria-label="new message"
            size="md"
            rounded="full"
            icon={<FiEdit />}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

const SearchMessage: React.FC = () => {
  return (
    <Box px={4} mt={6}>
      <Input colorScheme="gray" placeholder="search messages"></Input>
    </Box>
  );
};

interface Props {
  name: string;
  lastMessage: string;
  avator: string;
}

const Message: React.FC<Props> = ({ name, lastMessage, avator }) => {
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

const Messages: React.FC = () => {
  return (
    <Box px={2} mt={6}>
      {data.person.map((msg) => (
        <Message {...msg} key={msg.id} />
      ))}
    </Box>
  );
};

const Chat: React.FC = () => {
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
};

export default Chat;
