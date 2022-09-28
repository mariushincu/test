import { Flex, Box, Text, Image, HStack } from '@chakra-ui/react';

const Testimonial = () => {
  return (
    <Flex alignSelf="center" direction="column" maxW={250}>
      <HStack alignItems="center" spacing={3}>
        <Box w={100} h={0.5} background="#cf0032" />
        <Image
          src="https://static.anderspink.com/pages/new-homepage/quote-marks.png"
          alt="alt"
          w={10}
        />
        <Box w={100} h={0.5} background="#cf0032" />
      </HStack>

      <Text my={10} textAlign="center">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>

      <Text color="#cf0032" textAlign="center">
        Scania
      </Text>
    </Flex>
  );
};

export default Testimonial;
