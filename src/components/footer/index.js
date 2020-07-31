import React from 'react';
import { Wrapper, Logo } from '../index';
import { Box, Flex, Text, Heading } from 'rebass/styled-components';

const footerSx = {
  bg: 'darkGray',
};

const Footer = () => (
  <Box as='footer' sx={footerSx}>
    <Wrapper display='flex' justifyContent='space-between' py='xxl'>
      <Flex flexDirection='column' justifyContent='space-between'>
        <Logo sx={{ bg: 'white', borderRadius: '180px', p: 'sm' }} />
        <Text as='p' color='mediumGray' mt='md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore
          aut cum illum, voluptates dicta voluptatem explicabo, odit, quidem
          natus mollitia repellendus sunt? Dolore, architecto.
        </Text>
      </Flex>
      <Flex flexDirection='column' justifyContent='space-between'>
        <Heading as='h4' color='white'>
          Contact
        </Heading>
        <Box as='ul' sx={{ listStyle: 'none', pl: 0, color: 'mediumGray' }}>
          <Box as='li'>Phone: 1-800-000-0000</Box>
          <Box as='li'>Email: info@owf.ca</Box>
        </Box>
      </Flex>
    </Wrapper>
    <Box bg='black'>
      <Wrapper py='md'>
        <Text
          as='span'
          display='block'
          color='mediumGray'
          textAlign='center'
          fontWeight='bold'
        >
          Copyright 2020 - One World Halal
        </Text>
      </Wrapper>
    </Box>
  </Box>
);

export default Footer;
