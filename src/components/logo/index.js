import React from 'react';
import LogoPng from '../../assets/logo.png';
import { Box, Image } from 'rebass/styled-components';
import { Link } from '../index';
import { useSiteMetadata } from '../../utils/queries';

const Logo = styleProps => {
  const siteMetadata = useSiteMetadata();
  return (
    <Link to='/'>
      <Box {...styleProps} display='inline-block'>
        <Image src={LogoPng} width='75px' alt={siteMetadata.title} />
      </Box>
    </Link>
  );
};

export default Logo;
