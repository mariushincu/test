import { get } from 'lodash';
import Link from 'next/link';
import { getDataFromTree } from '@apollo/client/react/ssr';
import withApollo from '../lib/withApollo';
import {
  LocationsQuery,
  useLocationsQuery,
  CharactersQuery,
  useCharactersQuery
} from '../generated';

import {
  Button,
  Flex,
  Heading,
  Text,
  Box,
  Image,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';

function Home() {
  const { data } = useCharactersQuery();

  const { toggleColorMode } = useColorMode();
  const background = useColorModeValue('gray.100', 'gray.700');

  const characters = get(
    data,
    'characters.results',
    []
  ) as CharactersQuery['characters']['results'];

  // const locations = get(
  //   data,
  //   'locations.results',
  //   []
  // ) as LocationsQuery['locations']['results'];

  return (
    <div>
      <Flex margin={0}>
        {characters.map((character) => (
          <Box
            key={character.id}
            background={background}
            margin={5}
            p={5}
            rounded={6}
          >
            <Box>
              <Image src={character.image} alt={character.name} />
              <Heading fontSize={14} pt={5}>
                {character.name}
              </Heading>
            </Box>
            <Box p={5}>
              <Link href="/characters/[id]" as={`/characters/${character.id}`}>
                <Button mt={5} mb={6} colorScheme="red">
                  View Character
                </Button>
              </Link>
            </Box>
          </Box>
        ))}

        {/* {locations.map((location) => (
          <Flex
            key={location.id}
            width={300}
            direction="column"
            background={background}
            margin={5}
            p={10}
            rounded={6}
          >
            <Heading size="sm" mb={6}>
              {location.name}
            </Heading>
            <Link href="/locations/[id]" as={`/locations/${location.id}`}>
              <Button mb={6} colorScheme="red">
                View More
              </Button>
            </Link>
          </Flex>
        ))}*/}
      </Flex>
      <Flex margin={5}>
        <Button mb={6} colorScheme="linkedin" onClick={toggleColorMode}>
          Change color theme
        </Button>
      </Flex>
    </div>
  );
}

export default withApollo(Home, { getDataFromTree });
