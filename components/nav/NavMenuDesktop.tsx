import { default as NLink } from "next/link";
import { HStack, Link } from "@chakra-ui/react";

const NavMenuDesktop: React.FC = () => {
  return (
    <HStack display={{ base: "none", sm: "flex" }} spacing={6} direction="row">
      <NLink href="/">
        <Link>Home</Link>
      </NLink>
      <NLink href="/chat">
        <Link>Chat</Link>
      </NLink>
      <NLink href="/login">
        <Link>Login</Link>
      </NLink>
    </HStack>
  );
};

export default NavMenuDesktop;
