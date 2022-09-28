import { Flex, Image, Box, Text, Button } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex pt={50} h="100vh" alignItems="center" justifyContent="space-between">
      <Flex pl={150} pr={150} direction="column">
        <Text fontSize={40} fontWeight="bold" lineHeight={10}>
          Making curation easy and integrated for the world's leading
          enterprises.
        </Text>
        <Box>
          <Button
            mt={10}
            background="#cf0032"
            color="white"
            _hover={{ color: 'white', opacity: 0.7 }}
          >
            Book a conslation
          </Button>
        </Box>
      </Flex>
      <Flex p={10}>
        <Image
          alt="hero"
          src="https://static.anderspink.com/pages/new-homepage/laptop-no-logo.png"
          maxWidth="100%"
        />
      </Flex>
    </Flex>
  );
};

export default Hero;
