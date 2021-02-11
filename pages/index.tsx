import styled from "@emotion/styled";
import NavBar from "../components/nav/NavBar";
import { Box, Flex, Text } from "@chakra-ui/react";

const TextGradient = styled(Text)`
  background: -webkit-linear-gradient(0deg, #4265ff, #ff5d88);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const Home: React.FC = () => {
  return (
    <Box px={6}>
      <NavBar />
      <Flex direction="row" justify="space-evenly" wrap="wrap">
        <Box>
          <TextGradient lineHeight="shorter" fontWeight="700" fontSize="3.5rem">
            Hang out anytime, anywhere
          </TextGradient>
          <Text fontSize="md">
            Messenger makes it easy and fun to stay close to your favorite
            people.
          </Text>
        </Box>
        <Flex></Flex>
      </Flex>
    </Box>
  );
};

export default Home;
