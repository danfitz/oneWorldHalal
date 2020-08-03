import React from 'react';
import { node, string } from 'prop-types';
import { Button as RebassButton } from 'rebass/styled-components';
import { Link } from '../index';

const Button = ({ to, children, ...props }) => (
  <Link to={to}>
    <RebassButton {...props}>{children}</RebassButton>
  </Link>
);

Button.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
};

export default Button;
