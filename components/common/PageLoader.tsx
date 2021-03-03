import { Flex } from "@chakra-ui/react";
import React from "react";
import { PuffLoader } from "react-spinners";

const PageLoader: React.FC = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="full"
    >
      <PuffLoader />
    </Flex>
  );
};

export default PageLoader;
