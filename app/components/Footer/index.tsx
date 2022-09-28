import { Flex, Box, Text, Image, Icon, IconButton } from '@chakra-ui/react';
import { HStack, VStack } from '@chakra-ui/layout';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      h="100vh"
      p={20}
      background="#cf0032"
      direction="column"
      alignItems="center"
    >
      <Flex direction="row">
        <HStack spacing={150} alignItems="start">
          <Image
            src="https://static.anderspink.com/pages/new-homepage/ap-logo-white.png"
            alt="logo"
            w={50}
            h={50}
          />
          <VStack alignItems="start">
            <Text color="white">Success Stories</Text>
            <Text color="white">About</Text>
            <Text color="white">Blog</Text>
            <Text color="white">Custom curation app </Text>
            <Text color="white">Pre-defined bundles</Text>
            <Text color="white">Multi-language features</Text>
            <Text color="white">APIs and integrations</Text>
            <Text color="white">Partner showcase</Text>
          </VStack>
          <VStack alignItems="start">
            <Text color="white">Platforms</Text>
            <Text color="white">Enterprise</Text>
            <Text color="white">Contact</Text>
            <Text color="white">Support</Text>
            <Text color="white">Privacy policy</Text>
            <Text color="white">Cookie policy</Text>
            <Text color="white">Terms & conditions</Text>
          </VStack>

          <VStack alignItems="start">
            <Text fontWeight="bold" color="white">
              Follow Us
            </Text>
            <HStack>
              <Icon as={FaTwitter} w={8} h={8} color="white" />
              <Icon as={FaLinkedin} w={8} h={8} color="white" />
            </HStack>
          </VStack>
          <VStack spacing={50}>
            <Image
              alt="l"
              src="https://static.anderspink.com/pages/new-homepage/2020_iil_award.png"
              w={100}
            />
            <Image
              alt="l"
              src="https://static.anderspink.com/pages/new-homepage/NQA_ISO27001_CMYK.jpg"
              w={100}
            />
          </VStack>
        </HStack>
      </Flex>
      <Text fontSize="xs" color="white">
        © Anders Pink 2022
      </Text>
    </Flex>
  );
};

export default Footer;
