import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

const Option = ({ isActive, id, onClick, title, subtitle }) => {
  return (
    <Box
      borderWidth={1}
      borderColor={isActive ? '#cf0032' : 'black'}
      p={5}
      rounded={10}
      onClick={() => onClick(id)}
      w={450}
      cursor="pointer"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Text fontSize={14} fontWeight="semibold">
            {title}
          </Text>
          <Text fontSize={14} fontWeight="regular">
            {subtitle}
          </Text>
        </Box>
        <Box>
          <Icon
            as={AiFillCheckCircle}
            w={5}
            h={5}
            color={isActive ? '#cf0032' : 'black'}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Option;
