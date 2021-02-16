import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const FormContainer: React.FC = ({ children }) => {
  return (
    <Flex
      justify="center"
      align="center"
      width="full"
      height={["full", "100vh"]}
    >
      <Box
        p={4}
        m={4}
        maxW="sm"
        width="full"
        borderWidth="1px"
        borderRadius="md"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default FormContainer;
