import { IoPersonCircle } from "react-icons/io5";
import { AiOutlineSend } from "react-icons/ai";
import { Box, Flex, IconButton, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {}

type Msg = {
  msg: string;
  isme: boolean;
  timestamp: number;
};
type MsgList = Msg[];

const data: MsgList = [
  { msg: "Hello what's up", isme: true, timestamp: 1 },
  { msg: "I am good", isme: false, timestamp: 2 },
  { msg: "Wanna go outside?", isme: true, timestamp: 3 },
  { msg: "Sure, I am free now", isme: false, timestamp: 4 },
];

const MsgText: React.FC<Msg> = ({ msg, isme }) => {
  return (
    <Text
      px="12px"
      py="7px"
      my={1}
      rounded="lg"
      maxW="70%"
      alignSelf={isme ? "flex-end" : "flex-start"}
      backgroundColor={isme ? "blue.400" : "#eee"}
      color={isme ? "white" : "black"}
    >
      {msg}
    </Text>
  );
};

const Message: React.FC<Props> = () => {
  const [typed, setTyped] = useState<string>("");

  const handelSubmit = (e: any) => {
    e.preventDefault();
    setTyped("");
  };

  return (
    <Box p={4} flexDirection="column" w="full" display={["none", "flex"]}>
      <Flex pb={3} borderBottom="1px solid #eee">
        <Flex alignItems="center">
          <IoPersonCircle style={{ fontSize: "1.4rem" }} />
          <Text ml="4">Mehedi Hasan</Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-end"
        py={3}
        flexGrow={1}
      >
        {data.map((m, i) => (
          <MsgText {...m} key={i} />
        ))}
      </Flex>
      <Flex>
        <form
          onSubmit={handelSubmit}
          style={{ display: "flex", width: "100%" }}
        >
          <Input
            onChange={(e) => setTyped(e.currentTarget.value)}
            value={typed}
            placeholder="Aa"
            focusBorderColor="none"
            background="blackAlpha.50"
            rounded="lg"
            size="md"
          />
          <IconButton
            type="submit"
            ml="3"
            colorScheme="gray"
            variant="ghost"
            isRound
            aria-label="Send message"
            icon={<AiOutlineSend />}
          />
        </form>
      </Flex>
    </Box>
  );
};

export default Message;
