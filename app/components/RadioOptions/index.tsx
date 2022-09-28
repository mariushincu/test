import { useState } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import Option from './option';

const RadioOptions = () => {
  const [isActive, setIsActive] = useState(0);

  const options = [
    {
      id: 0,
      title: 'Option One',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
    },
    {
      id: 1,
      title: 'Option Two',
      subtitle: 'Sed do eiusmod tempor incididunt ut labore.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
    },
    {
      id: 2,
      title: 'Option Three',
      subtitle: 'Labore et dolore magna aliqua. Ut enim ad minim.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
    }
  ];

  return (
    <Flex h="100vh">
      <VStack spacing={3}>
        {options.map((item, index) => (
          <Option
            key={index}
            isActive={isActive === item.id}
            onClick={(value) => {
              setIsActive(value);
            }}
            {...item}
          />
        ))}
      </VStack>
    </Flex>
  );
};

export default RadioOptions;
