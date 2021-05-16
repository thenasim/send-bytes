import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getFirebase } from "../../utils/lazyFirebase";
import ChatHeader from "./ChatHeader";
import ChatLists from "./ChatLists";
import ChatSearch from "./ChatSearch";
import type firebase from "firebase";
import { cityConverter } from "../../utils/dataConvert";

const SideBar: React.FC = () => {
  useEffect(() => {
    let unsubscribe: firebase.Unsubscribe | undefined;

    async function getMsgs() {
      // const { db } = await getFirebase();
      // unsubscribe = db
      //   .collection("users")
      //   .doc("thenasim")
      //   .collection("chats")
      //   .onSnapshot((snapshot) => {
      //     const data = snapshot.docs.map((doc) => ({
      //       id: doc.id,
      //       ...doc.data(),
      //     }));
      //     console.log(data);
      //   });
    }
    getMsgs();
    return () => unsubscribe && unsubscribe();
  }, []);

  return (
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
      <ChatSearch />
      <ChatLists />
    </Box>
  );
};

export default SideBar;
