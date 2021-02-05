import { Box, Text, Stack } from "@chakra-ui/react";
import NavMenuMobile from "./NavMenuMobile";
import NavMenuDesktop from "./NavMenuDesktop";

const NavBar: React.FC = () => {
  return (
    <Stack
      py={4}
      direction="row"
      justify="space-between"
      align="center"
      wrap="wrap"
      as="nav"
    >
      <Box>
        <Text fontSize="lg">SEND BYTES</Text>
      </Box>
      <NavMenuDesktop />
      <NavMenuMobile />
    </Stack>
  );
};

export default NavBar;
