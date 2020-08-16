import React, { useState } from 'react';
import { Flex, Box, Heading, Text } from 'rebass/styled-components';
import { Label, Input, Textarea } from '@rebass/forms/styled-components';
import { Wrapper, Button, Image, Link } from '../index';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const InputBox = styled(Box)`
  position: relative;
  margin-top: 2rem;

  label {
    color: ${({ theme }) => theme.colors.mediumGray};
    position: absolute;
    left: 1rem;
    ${({ theme, isEmpty }) =>
      isEmpty
        ? `
      top: 1rem;
      color: ${theme.colors.mediumGray};
    `
        : `
      top: -1.25rem;
      color: ${theme.colors.trueBlack};
    `}
    transition: all 0.2s ease;
  }

  input:focus + label,
  textarea:focus + label {
    top: -1.25rem;
    color: ${({ theme }) => theme.colors.trueBlack};
  }
`;

const Dash = styled.span`
  display: inline-block;
  width: 6rem;
  height: 0.3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
`;

const ContactForm = () => {
  const {
    contentfulAsset: heroAsset,
    contentfulFooter: contactInfo,
  } = useStaticQuery(graphql`
    query ContactFormQuery {
      contentfulAsset(title: { eq: "Transparent Burger" }) {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      contentfulFooter {
        phoneNumber
        email
        socialMedia {
          url
          name
        }
      }
    }
  `);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Box as='section' pt={['xl', 'xxl']}>
      <Wrapper>
        <Box
          sx={{
            display: ['block', 'grid'],
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <Box pb={[0, 'xxl']}>
            <Heading as='h2' fontSize={['2.5rem', 'heading']}>
              Contact form
            </Heading>
            <Dash />
            <Box
              as='form'
              mt='md'
              name='contact'
              method='post'
              data-netlify='true'
              data-netlify-honeypot='bot-field'
              action='/thanks'
            >
              <Input type='hidden' name='form-name' value='contact' />

              <InputBox isEmpty={!name}>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  required
                  p='md'
                  onChange={e => setName(e.target.value)}
                />
                <Label htmlFor='name'>Your name (required)</Label>
              </InputBox>

              <InputBox isEmpty={!email}>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  required
                  p='md'
                  onChange={e => setEmail(e.target.value)}
                />
                <Label htmlFor='email'>Email (required)</Label>
              </InputBox>

              <InputBox isEmpty={!message}>
                <Textarea
                  id='message'
                  name='message'
                  sx={{ resize: 'none', height: '10rem' }}
                  p='md'
                  onChange={e => setMessage(e.target.value)}
                />
                <Label htmlFor='message'>Message</Label>
              </InputBox>

              <Button type='submit' mt='2rem'>
                Send message
              </Button>
            </Box>
          </Box>

          <Flex flexDirection='column' justifyContent='space-between'>
            <Box
              as='ul'
              textAlign='center'
              fontSize={['1.25rem', '1.35rem']}
              sx={{
                listStyle: 'none',
                pl: 0,
                color: 'mediumGray',
                mr: [0, 'xl'],
                mt: ['xl', '7rem'],
              }}
            >
              <Box as='li' mb='md'>
                <Box as={Icon} icon='phone' color='magenta' mr='sm' />{' '}
                <Text as='span' color='magenta' fontWeight='bold'>
                  Phone:{' '}
                </Text>
                <Link
                  to={`tel:${contactInfo.phoneNumber}`}
                  color='mediumGray'
                  sx={{
                    ':hover, :focus': { color: 'darkGray' },
                    ':visited': { color: 'mediumGray' },
                  }}
                >
                  {contactInfo.phoneNumber}
                </Link>
              </Box>
              <Box as='li'>
                <Box as={Icon} icon='envelope' color='magenta' mr='sm' />{' '}
                <Text as='span' color='magenta' fontWeight='bold'>
                  Email:{' '}
                </Text>
                <Link
                  to={`mailto:${contactInfo.email}`}
                  color='mediumGray'
                  sx={{
                    ':hover, :focus': { color: 'darkGray' },
                    ':visited': { color: 'mediumGray' },
                  }}
                >
                  {contactInfo.email}
                </Link>
              </Box>
            </Box>

            <Image fluid={heroAsset.fluid} alt='' />
          </Flex>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default ContactForm;
