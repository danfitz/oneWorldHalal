import React from 'react';
import { Wrapper, Logo, SocialIcons } from '../index';
import { Box, Flex, Text, Heading, Link } from 'rebass/styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <Box as='footer' bg='darkGray'>
    <Wrapper
      display={['display', 'flex']}
      justifyContent='space-between'
      py='xxl'
      textAlign={['center', 'left']}
    >
      <Flex
        flexDirection='column'
        justifyContent='space-between'
        mb={['lg', 0]}
        width={[1, 1 / 2]}
      >
        <Logo sx={{ bg: 'trueWhite', borderRadius: '180px', p: 3 }} />
        <Text as='p' color='mediumGray' mt='lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore
          aut cum illum, voluptates dicta voluptatem explicabo, odit, quidem
          natus mollitia repellendus sunt? Dolore, architecto.
        </Text>
      </Flex>

      <Flex
        flexDirection='column'
        justifyContent='space-between'
        width={[1, 1 / 2]}
        mt={['xxl', 0]}
      >
        <Heading as='h4' color='white' textAlign={['center', 'right']}>
          Contact
        </Heading>
        <Flex
          flexDirection={['column', 'row']}
          justifyContent={['space-between', 'flex-end']}
        >
          <Box
            as='ul'
            sx={{
              listStyle: 'none',
              pl: 0,
              color: 'mediumGray',
              mr: [0, 'xl'],
              my: ['md', 0],
            }}
          >
            <Box as='li'>
              <Box as={Icon} icon='phone' color='orange' mr='sm' />{' '}
              <Text as='span' color='orange' fontWeight='bold'>
                Phone:{' '}
              </Text>
              <Link
                href={`tel:18000000000`}
                color='mediumGray'
                sx={{ ':hover, :focus': { color: 'white' } }}
              >
                1-800-000-0000
              </Link>
            </Box>
            <Box as='li'>
              <Box as={Icon} icon='envelope' color='orange' mr='sm' />{' '}
              <Text as='span' color='orange' fontWeight='bold'>
                Email:{' '}
              </Text>
              <Link
                href={`info@owf.ca`}
                color='mediumGray'
                sx={{ ':hover, :focus': { color: 'white' } }}
              >
                info@owf.ca
              </Link>
            </Box>
          </Box>

          <SocialIcons
            brands={[
              { url: 'https://facebook.com/oneworldhalal', name: 'facebook' },
              {
                url: 'https://twitter.com/oneworldhalal',
                name: 'twitter',
              },
              {
                url: 'https://pinterest.com/oneworldhalal',
                name: 'pinterest',
              },
            ]}
          />
        </Flex>
      </Flex>
    </Wrapper>

    <Box bg='black'>
      <Wrapper py={5}>
        <Text
          as='span'
          display='block'
          color='darkishGray'
          textAlign='center'
          fontWeight='bold'
        >
          Copyright 2020 © One World Halal
        </Text>
      </Wrapper>
    </Box>
  </Box>
);

export default Footer;
