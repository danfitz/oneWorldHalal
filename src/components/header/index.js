import React, { useState } from 'react';
import { Box } from 'rebass/styled-components';
import { Wrapper, Link, Logo } from '../index';
import SandwichMenu from './sandwichMenu';

const navSx = {
  fontFamily: 'heading',
  fontSize: ['1.5rem', '1.1rem'],
  textAlign: ['center', 'left'],
  position: ['absolute', 'static'],
  zIndex: 'modal',
  top: '5rem',
  left: 0,
  right: 0,
  bg: 'trueWhite',
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
  const closeMenu = () => setMenuOpen(false);

  return (
    <Box
      as='header'
      py='sm'
      sx={{ boxShadow: '0 0.2rem 0.5rem 0.1rem rgba(240,240,240)' }}
    >
      <Wrapper
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Logo />

        <SandwichMenu
          isOpen={menuOpen}
          onChange={e => setMenuOpen(e.target.checked)}
          display={['block', 'none']}
        />

        <Box
          as='nav'
          sx={navSx}
          display={[menuOpen ? 'block' : 'none', 'block']}
        >
          <ul>
            <li>
              <Link to='/' onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to='/products' onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Header;
