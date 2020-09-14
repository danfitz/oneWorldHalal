import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useSiteMetadata } from '../../utils/queries';
import { Wrapper, Logo, SocialIcons, Link } from '../index';
import { Box, Flex, Text, Heading } from 'rebass/styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const StyledRichText = styled(Box)`
  margin-top: ${({ theme }) => theme.space.lg};

  p {
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: ${({ theme }) => theme.fontSizes.body};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    p {
      font-size: 1.1rem;
    }
  }
`;

const Footer = () => {
  const siteMetadata = useSiteMetadata();
  const { contentfulFooter } = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        text {
          json
        }
        phoneNumber
        email
        socialMedia {
          url
          name
        }
      }
    }
  `);
  const { text, phoneNumber, email, socialMedia } = contentfulFooter;

  return (
    <Box as='footer' bg='darkGray'>
      <Wrapper
        display={['display', 'flex']}
        justifyContent='space-between'
        py={['xl', 'xxl']}
        textAlign={['center', 'left']}
      >
        <Flex
          flexDirection='column'
          justifyContent='space-between'
          mb={['lg', 0]}
          width={[1, 1 / 2]}
        >
          <Logo sx={{ bg: 'trueWhite', borderRadius: '180px', p: 3 }} />
          <StyledRichText>
            {documentToReactComponents(text.json)}
          </StyledRichText>
        </Flex>

        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          width={[1, 1 / 2]}
          mt={['xl', 0]}
        >
          <Heading
            as='h4'
            color='white'
            mb={[5, 'xxl']}
            fontSize={['subheading', 'heading']}
            textAlign={['center', 'right']}
          >
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
              <Box as='li' mb='md'>
                <Box as={Icon} icon='phone' color='orange' mr='sm' />{' '}
                <Text as='span' color='orange' fontWeight='bold'>
                  Phone:{' '}
                </Text>
                <Link
                  to={`tel:${phoneNumber}`}
                  color='mediumGray'
                  sx={{
                    ':hover, :focus': { color: 'white' },
                    ':visited': { color: 'mediumGray' },
                  }}
                >
                  {phoneNumber}
                </Link>
              </Box>
              <Box as='li'>
                <Box as={Icon} icon='envelope' color='orange' mr='sm' />{' '}
                <Text as='span' color='orange' fontWeight='bold'>
                  Email:{' '}
                </Text>
                <Link
                  to={`mailto:${email}`}
                  color='mediumGray'
                  sx={{
                    ':hover, :focus': { color: 'white' },
                    ':visited': { color: 'mediumGray' },
                  }}
                >
                  {email}
                </Link>
              </Box>
            </Box>

            <SocialIcons brands={socialMedia} />
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
            Copyright 2020 © {siteMetadata.title}
          </Text>
        </Wrapper>
      </Box>
    </Box>
  );
};

export default Footer;
