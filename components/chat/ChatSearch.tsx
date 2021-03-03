import { Box, Input } from "@chakra-ui/react";

const ChatSearch: React.FC = () => {
  return (
    <Box px={4} mt={6}>
      <Input colorScheme="gray" placeholder="search messages"></Input>
    </Box>
  );
};

export default ChatSearch;
