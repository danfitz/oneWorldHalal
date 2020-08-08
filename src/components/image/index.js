import React from 'react';
import { node } from 'prop-types';
import { Image as RebassImage, Box } from 'rebass/styled-components';
import GatsbyImage from 'gatsby-image';
import GatsbyBgImage from 'gatsby-background-image';

export const Image = props => {
  return <RebassImage as={GatsbyImage} {...props} />;
};

export const BackgroundImage = ({ children, ...props }) => {
  return (
    <Box as={GatsbyBgImage} {...props}>
      {children}
    </Box>
  );
};

BackgroundImage.propTypes = {
  children: node.isRequired,
};
