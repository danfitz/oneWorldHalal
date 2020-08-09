import React from 'react';
import { node, string, object, oneOfType } from 'prop-types';
import { Button as RebassButton } from 'rebass/styled-components';
import { Link } from '../index';

const Button = ({ to, children, ...props }) => {
  if (to) {
    return (
      <Link to={to}>
        <RebassButton {...props}>{children}</RebassButton>
      </Link>
    );
  } else {
    return <RebassButton {...props}>{children}</RebassButton>;
  }
};

Button.propTypes = {
  to: oneOfType([string, object]),
  children: node.isRequired,
};

Button.defaultProps = {
  to: null,
};

export default Button;
