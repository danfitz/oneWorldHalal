import React from 'react';
import { node, string, oneOfType } from 'prop-types';
import { Link as RebassLink } from 'rebass/styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, ...props }) => {
  return (
    <RebassLink as={GatsbyLink} {...props}>
      {children}
    </RebassLink>
  );
};

Link.propTypes = {
  children: oneOfType([node, string]).isRequired,
};

export default Link;
