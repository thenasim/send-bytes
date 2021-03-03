import { Box } from "@chakra-ui/react";
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatLists from "./ChatLists";
import ChatSearch from "./ChatSearch";

const SideBar: React.FC = () => {
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
