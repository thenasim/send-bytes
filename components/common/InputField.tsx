import React, { forwardRef } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import ErrorMsg from "./ErrorMsg";

interface PropType {
  msg?: string;
  label: string;
  name: string;
  type: string;
}

const InputField = forwardRef<any, PropType>((props, ref) => {
  return (
    <Box>
      <Text fontSize="medium" fontWeight="medium">
        {props.label}
      </Text>
      <Input
        isInvalid={props.msg != undefined}
        name={props.name}
        type={props.type}
        ref={ref}
      />
      {props.msg && <ErrorMsg msg={props.msg} />}
    </Box>
  );
});

export default InputField;
