import { get } from 'lodash';
import { getDataFromTree } from '@apollo/client/react/ssr';
import withApollo from '../../lib/withApollo';
import { useCharacterQuery } from '../../generated';
import { useRouter } from 'next/router';
import { Button, Heading, Text, Box, Image } from '@chakra-ui/react';

const SingleCharacterPage = ({ query }) => {
  const router = useRouter();

  const id = get(query, 'id');

  const { data, loading } = useCharacterQuery({
    variables: {
      id
    }
  });

  if (loading) return <Text>Loading</Text>;

  const { character } = data;
  return (
    <Box p={10}>
      <Box>
        <Image src={character.image} alt={character.name} />
        <Heading>{character.name}</Heading>
        <Text fontSize={16}>Gender: {character.gender}</Text>
        <Text fontSize={16}>Species: {character.species}</Text>
      </Box>

      <Box>
        <Text fontSize={16}>Location: {character.origin.dimension}</Text>
      </Box>

      <Button mt={10} onClick={() => router.back()}>
        Go Back
      </Button>
    </Box>
  );
};

export default withApollo(SingleCharacterPage, { getDataFromTree });
