import React from 'react';
import { node, string, object, oneOfType } from 'prop-types';
import { Button as RebassButton } from 'rebass/styled-components';
import { Link } from '../index';

const Button = ({ to, children, variant, ...props }) => {
  if (to) {
    return (
      <Link to={to} variant={`${variant}Button`} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <RebassButton variant={variant} {...props}>
        {children}
      </RebassButton>
    );
  }
};

Button.propTypes = {
  to: oneOfType([string, object]),
  children: node.isRequired,
  variant: string,
};

Button.defaultProps = {
  to: null,
  variant: 'primary',
};

export default Button;
