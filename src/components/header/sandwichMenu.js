import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

const Label = styled.label`
  display: block;
  height: 2rem;
  width: 3rem;
  position: relative;
  left: 0.5rem;
  float: right;
  z-index: ${({ theme }) => theme.zIndices.fixed};
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
`;

const MenuIcon = styled.span`
  position: absolute;
  width: 60%;
  top: 0.92rem;
  left: 0.4rem;

  content: '';
  display: block;
  height: 0.1rem;
  background: ${({ theme }) => theme.colors.magenta};

  ::before {
    position: absolute;
    width: 100%;
    bottom: 0.4rem;
    content: '';
    display: block;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.blue};
  }
  ::after {
    position: absolute;
    width: 100%;
    top: 0.4rem;
    content: '';
    display: block;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.green};
  }
`;

const MenuContainer = styled(Box)`
  input[type='checkbox']:checked + label > span:nth-child(2) {
    background: none;
  }

  input[type='checkbox']:checked + label > span:nth-child(2)::before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    bottom: 0;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  input[type='checkbox']:checked + label > span:nth-child(2)::after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 0;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  // input[type='checkbox']:focus + label {
  //   -webkit-box-shadow: 0 0 0 0.12rem #f8fb05;
  //   box-shadow: 0 0 0 0.12rem #f8fb05;
  // }
`;

const SandwichMenu = ({ onClick, ...props }) => (
  <MenuContainer {...props}>
    <Input
      type='checkbox'
      className='visuallyHidden'
      id='menuButton'
      name='menuButton'
      onClick={onClick}
    />
    <Label htmlFor='menuButton'>
      <span className='visuallyHidden'>View Menu</span>
      <MenuIcon />
    </Label>
  </MenuContainer>
);

export default SandwichMenu;
