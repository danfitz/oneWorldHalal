import React, { useState } from 'react';
import { Box, Image } from 'rebass/styled-components';
import Logo from '../../assets/logo.png';
import Link from '../link';
import SandwichMenu from './sandwichMenu';

const headerSx = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  py: 'sm',
  px: ['md', 'lg'],
};

const navSx = {
  fontFamily: 'heading',
  fontSize: ['1.5rem', '1.1rem'],
  textAlign: ['center', 'left'],
  position: ['fixed', 'static'],
  top: '6rem',
  left: 0,
  right: 0,
  bg: '#fff',
  ul: {
    display: 'flex',
    listStyle: 'none',
    pl: 0,
    flexDirection: ['column', 'row'],
    'li:not(:last-child)': {
      marginRight: [0, 'xl'],
      marginBottom: ['md', 0],
    },
    'li:first-child a': {
      '&:hover, &:focus': {
        color: 'blue',
      },
    },
    'li:nth-child(2) a': {
      '&:hover, &:focus': {
        color: 'orange',
      },
    },
    'li:nth-child(3) a': {
      '&:hover, &:focus': {
        color: 'magenta',
      },
    },
    'li:nth-child(4) a': {
      '&:hover, &:focus': {
        color: 'green',
      },
    },
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box as='header' sx={headerSx}>
      <Link to='/'>
        <Image src={Logo} width='75px' alt='One World Halal' />
      </Link>

      <SandwichMenu
        onClick={() => setMenuOpen(!menuOpen)}
        display={['block', 'none']}
      />

      <Box as='nav' sx={navSx} display={[menuOpen ? 'block' : 'none', 'block']}>
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
    </Box>
  );
};

export default Header;
