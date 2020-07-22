import React from 'react';
import styled from 'styled-components';
import { Box, Image, Link } from 'rebass/styled-components';
import Logo from '../../assets/logo.png';
// import Link from '../link';

const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
`;

const Nav = styled(Box)`
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;

    li:not(:last-child) {
      margin-right: ${({ theme }) => theme.space.xl};
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Link to='/'>
      <Image src={Logo} width='75px' alt='One World Halal' />
    </Link>

    <Box as={Nav}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </Box>
  </HeaderContainer>
);

export default Header;
