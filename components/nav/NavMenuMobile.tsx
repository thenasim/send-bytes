import { default as NLink } from "next/link";
import { useToggle } from "react-use";
import { Box, Flex, Button, Link, Slide } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const NavMenuMobile: React.FC = () => {
  const [on, toogle] = useToggle(false);

  return (
    <Box display={{ base: "flex", sm: "none" }}>
      <Button zIndex={20} variant="ghost" onClick={toogle}>
        {on ? <MdClose /> : <FiMenu />}
      </Button>
      <Slide
        direction="top"
        in={on}
        style={{ zIndex: 10, backgroundColor: "white" }}
      >
        <Flex py={4} direction="column" mt={70} w="full">
          <Flex direction="column">
            <NLink href="/">
              <Link
                p={8}
                fontSize="x-large"
                color="gray.600"
                bg="gray.50"
                fontWeight="medium"
              >
                Home
              </Link>
            </NLink>
            <NLink href="/chat">
              <Link
                p={8}
                mt={2}
                fontSize="x-large"
                color="gray.600"
                bg="gray.50"
                fontWeight="medium"
              >
                Chat
              </Link>
            </NLink>
            <NLink href="/login">
              <Link
                p={8}
                mt={2}
                fontSize="x-large"
                color="gray.600"
                bg="gray.50"
                fontWeight="medium"
              >
                Login
              </Link>
            </NLink>
          </Flex>
        </Flex>
      </Slide>
    </Box>
  );
};

export default NavMenuMobile;
