import { useState } from 'react';
import {
  Flex,
  Stack,
  Button,
  Image,
  useColorMode,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';

const NavBar = () => {
  const [display, changeDisplay] = useState('none');

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == 'dark';

  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  const background = useColorModeValue('black.100', 'black.900');

  const menuBackground = useColorModeValue('white', 'black');
  return (
    <Flex
      // pos="fixed"
      w="100%"
      boxShadow="md"
      backgroundColor={background}
      justifyContent="space-between"
      alignItems="center"
    >
      {/* <Box p={5} alignSelf="center"> */}
      <Image
        src={
          isDark
            ? 'https://static.anderspink.com/pages/new-homepage/ap-logo-white.png'
            : 'https://static.anderspink.com/pages/new-homepage/ap-logo-pink.png'
        }
        alt="logo"
        m={5}
        w={50}
        h={50}
      />
      {/* </Box> */}
      <Flex alignItems="center">
        <Flex display={isLargerThan600 ? 'flex' : 'none'} p={5} w="100%">
          <Stack direction="row" alignItems="center">
            <Button background="none">For Enterprise</Button>
            <Button background="none">For Platforms</Button>
            <Button background="none">Success Stories</Button>
            <Button
              background="#cf0032"
              color="white"
              _hover={{ color: 'white', opacity: 0.7 }}
            >
              Book Consultation
            </Button>
            <Button
              background="#cf0032"
              color="white"
              _hover={{ color: 'white', opacity: 0.7 }}
            >
              Login
            </Button>
          </Stack>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          size="md"
          mr={2}
          icon={<GiHamburgerMenu />}
          display={isLargerThan600 ? 'none' : 'flex'}
          onClick={() => changeDisplay('flex')}
        />
        <IconButton
          aria-label="toggle"
          mr={5}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        />
      </Flex>

      <Flex
        w="100vw"
        backgroundColor={menuBackground}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top={0}
        left={0}
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justifyContent="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={<AiOutlineClose />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="For Enterprise"
              my={5}
              w="100%"
            >
              For Enterprise
            </Button>
          </Link>
          <Link href="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="For platforms"
              my={5}
              w="100%"
            >
              For Platforms
            </Button>
          </Link>
          <Link href="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="For platforms"
              my={5}
              w="100%"
            >
              Success Stories
            </Button>
          </Link>
          <Link href="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="For platforms"
              my={5}
              w="100%"
            >
              Login
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
