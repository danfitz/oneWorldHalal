import React from 'react';
import { Flex, Heading, Text } from 'rebass/styled-components';
import { Button, Wrapper } from '../components';

const FourOhFour = () => {
  return (
    <Wrapper>
      <Flex
        sx={{ minHeight: ['80vh', '80vh'] }}
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Heading
          as='h1'
          fontSize={['heading', 'superheading']}
          mb='md'
          color='orange'
        >
          404
        </Heading>
        <Text as='p' fontSize='1.25rem' mb='lg' textAlign='center'>
          This page is missing or you took a wrong turn!
        </Text>
        <Button to='/'>Go Home</Button>
      </Flex>
    </Wrapper>
  );
};

export default FourOhFour;
