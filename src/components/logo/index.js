import React from 'react';
import LogoPng from '../../assets/logo.png';
import { Box, Image } from 'rebass/styled-components';
import { Link } from '../index';

const Logo = styleProps => (
  <Link to='/'>
    <Box {...styleProps} display='inline-block'>
      <Image src={LogoPng} width='75px' alt='One World Halal' />
    </Box>
  </Link>
);

export default Logo;
