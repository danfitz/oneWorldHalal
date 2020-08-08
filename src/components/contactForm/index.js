import React, { useState } from 'react';
import { Box, Heading } from 'rebass/styled-components';
import { Label, Input, Textarea } from '@rebass/forms/styled-components';
import { Wrapper, Button } from '../index';
import styled from 'styled-components';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Box as='section' py={['xl', 'xxl']}>
      <Wrapper>
        <Heading as='h2' fontSize={['2.5rem', 'heading']}>
          Contact form
        </Heading>
        <Dash />
        <Box
          as='form'
          width={[1, 1 / 2]}
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
      </Wrapper>
    </Box>
  );
};

export default ContactForm;
