import React from "react";
import { BiError } from "react-icons/bi";
import { Text } from "@chakra-ui/react";

interface Props {
  msg: string | undefined;
}

const ErrorMsg: React.FC<Props> = ({ msg }) => {
  return (
    <Text
      display={msg ? "flex" : "none"}
      fontSize="xs"
      color="crimson"
      letterSpacing="wide"
      alignItems="center"
    >
      <BiError style={{ marginRight: "2px" }} /> {msg}
    </Text>
  );
};

export default ErrorMsg;
