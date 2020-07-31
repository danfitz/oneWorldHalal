import React from 'react';
import { node } from 'prop-types';
import { Box } from 'rebass/styled-components';

const Wrapper = ({ children, ...props }) => (
  <Box width={9 / 10} maxWidth='1280px' mx='auto' {...props}>
    {children}
  </Box>
);

Wrapper.propTypes = {
  children: node.isRequired,
};

export default Wrapper;
