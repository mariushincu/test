import {
  Flex,
  Text,
  Box,
  Button,
  Image,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import RadioOptions from '../components/RadioOptions';

const LandingPage = () => {
  const background = useColorModeValue('black.100', 'black.900');

  const settingsTesimonials = {
    className: 'center',
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: '90px',
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '20px',
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '20px',
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '0px',
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Flex height="100vh" direction="column" background={background}>
      <NavBar />
      <Hero />
      <Flex
        p={20}
        background="gray.200"
        justifyContent="center"
        direction="column"
      >
        <Text
          color="black"
          textAlign="center"
          fontSize={28}
          fontWeight="semibold"
        >
          Making our partners and clients heroes
        </Text>
        <HStack mt={20} alignItems="center" justify="center" spacing={100}>
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Airfrance.png"
            alt="client"
            h="40px"
          />
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Avon.png"
            alt="client"
            h="40px"
          />
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Capgemini.png"
            alt="client"
            h="40px"
          />
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Sodexo.png"
            alt="client"
            h="40px"
          />
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Scania.png"
            alt="client"
            h="40px"
          />
        </HStack>
      </Flex>

      <Flex p={20} justifyContent="center" direction="column">
        <Text
          textAlign="center"
          fontSize={28}
          fontWeight="semibold"
          flexWrap="wrap"
          maxWidth={700}
          alignSelf="center"
        >
          It shouldn't be so tough to consistently provide relevant insights and
          learning content to your teams
        </Text>

        <Flex m={20} justifyContent="space-between">
          <Image
            alt="img"
            src="https://static.anderspink.com/pages/new-homepage/ctaMain.png"
            boxSize="sm"
          />
          <VStack
            alignItems="start"
            spacing={5}
            maxWidth="xl"
            justifyContent="end"
          >
            <Text fontSize="lg">
              Would your platform be 'stickier' with integrated content curation
              from day one?
            </Text>
            <Text fontSize="lg">
              Need fresh content to drive engagement within your learning
              ecosystem?
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
              Anders Pink's AI-powered content curation tool delivers up-to-date
              content within your existing learning ecosystem.
            </Text>

            <Button
              mt={10}
              background="#cf0032"
              color="white"
              _hover={{ color: 'white', opacity: 0.7 }}
            >
              Book a Consultation
            </Button>
          </VStack>
        </Flex>
      </Flex>

      <Flex p={20} justifyContent="center" direction="column">
        <Text textAlign="center" fontSize={28} fontWeight="semibold">
          Partnering with the world's leading learning platforms
        </Text>
        <HStack mt={20} alignItems="center" justify="center" spacing={100}>
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Brightspace.png"
            alt="client"
            h="40px"
          />
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Degreed.png"
            alt="client"
            h="40px"
          />
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Docebo.png"
            alt="client"
            h="40px"
          />
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Fuse.png"
            alt="client"
            h="40px"
          />
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Learnamp.png"
            alt="client"
            h="40px"
          />
          <Image
            src="https://static.anderspink.com/pages/new-homepage/Blend.png"
            alt="client"
            h="40px"
          />
        </HStack>
        <Text mt={20} textAlign="center" fontSize={28} fontWeight="semibold">
          What our partners and clients are saying
        </Text>

        <Box my={10}>
          <Slider {...settingsTesimonials}>
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </Slider>
        </Box>

        {/* Test */}
        <RadioOptions />
      </Flex>

      <Footer />
    </Flex>
  );
};

export default LandingPage;
