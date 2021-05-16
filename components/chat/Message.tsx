import { IoPersonCircle } from "react-icons/io5";
import { AiOutlineSend } from "react-icons/ai";
import { Box, Flex, IconButton, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { getFirebase } from "../../utils/lazyFirebase";
import type firebase from "firebase";
import { useStore } from "../../store/store";

interface Props {}

type Msg = {
  msg: string;
  isme: boolean;
  timestamp: number;
};
type MsgList = Msg[];

const dummy: MsgList = [
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
  const [data, setData] = useState<MsgList>(dummy);
  const selectedChat = useStore((state) => state.selectedChat);

  const saveData = async (msg: string) => {
    // const { db } = await getFirebase();
    // await db.collection("users").doc("cooldude").collection("messages").add({
    //   msg: msg,
    //   from: "thenasim",
    //   time: Date.now().toString(),
    // });
  };

  /*React.useEffect(() => {
    let unsubscribe: firebase.Unsubscribe | undefined;
    async function getLastTwoMsg() {
      const { db } = await getFirebase();
      unsubscribe = await db
        .collection("users")
        // .doc("cooldude")
        // .collection("messages")
        // .orderBy("time", "desc")
        // .limit(2)
        .where("email", "==", "thenasim100@gmail.com")
        .onSnapshot((doc: any) => {
          console.log(doc.docs.map((d: any) => d.data()));
        });
    }
    getLastTwoMsg();
    return () => unsubscribe && unsubscribe();
  });*/

  const handelSubmit = (e: any) => {
    e.preventDefault();
    const msg = e.target[0].value;
    setData(data.concat({ msg: msg, isme: true, timestamp: Date.now() }));
    saveData(msg);
    setTyped("");
  };

  if (!selectedChat) {
    return (
      <div>
        <h1>No Chat selected</h1>
      </div>
    );
  }

  return (
    <Box p={4} flexDirection="column" w="full" display={["none", "flex"]}>
      <Flex pb={3} borderBottom="1px solid #eee">
        <Flex alignItems="center">
          <IoPersonCircle style={{ fontSize: "1.4rem" }} />
          <Text ml="4">{selectedChat.name}</Text>
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
