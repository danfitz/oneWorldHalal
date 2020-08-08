import React from 'react';
import { Flex, Heading, Text } from 'rebass/styled-components';
import { Button, Wrapper } from '../components';

const Thanks = () => {
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
          color='green'
        >
          Success!
        </Heading>
        <Text as='p' mb='md' fontSize='1.25rem' textAlign='center'>
          We've received your message and are looking forward to getting back to
          you!
        </Text>
        <Text as='p' mb='lg' fontSize='1.25rem' textAlign='center'>
          In the meantime, come take a look at our products
        </Text>
        <Button to='/'>View Our Products</Button>
      </Flex>
    </Wrapper>
  );
};

export default Thanks;
