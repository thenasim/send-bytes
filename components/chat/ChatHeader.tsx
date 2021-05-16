import { FiLogOut } from "react-icons/fi";
import { CgOptions } from "react-icons/cg";
import { IoMdPersonAdd } from "react-icons/io";
import { Flex, Text, Image, IconButton, Tooltip } from "@chakra-ui/react";
import { getFirebase } from "../../utils/lazyFirebase";
import { useRouter } from "next/router";

const ChatHeader: React.FC = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const { auth } = await getFirebase();
    auth
      .signOut()
      .then(() => {
        router.push("/login");
      })
      .catch(() => {
        console.error("Something weird happened");
      });
  };

  return (
    <Flex px={4} justify="space-between">
      <Flex align="center">
        <Image
          w="10"
          h="10"
          src="https://i.ibb.co/3TGxn9S/me.png"
          rounded="full"
        />
        <Text ml={3} fontSize="x-large" fontWeight="bold">
          Chats
        </Text>
      </Flex>
      <Flex align="center">
        <Tooltip label="add new friends" rounded="md">
          <IconButton
            colorScheme="gray"
            aria-label="add new person"
            size="md"
            rounded="full"
            icon={<IoMdPersonAdd />}
          />
        </Tooltip>
        <Tooltip label="change settings" rounded="md">
          <IconButton
            ml={2}
            colorScheme="gray"
            aria-label="change setting"
            size="md"
            rounded="full"
            icon={<CgOptions />}
          />
        </Tooltip>

        {/* <Tooltip label="new message" rounded="md">
          <IconButton
            ml={2}
            colorScheme="gray"
            aria-label="new message"
            size="md"
            rounded="full"
            icon={<FiEdit />}
          />
        </Tooltip> */}
        <Tooltip label="Logout" rounded="md">
          <IconButton
            ml={2}
            colorScheme="gray"
            aria-label="new message"
            size="md"
            rounded="full"
            onClick={handleLogout}
            icon={<FiLogOut />}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default ChatHeader;
