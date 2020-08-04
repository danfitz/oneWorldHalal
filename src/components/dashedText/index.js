import React from 'react';
import { Text } from 'rebass/styled-components';
import { node } from 'prop-types';
import styled from 'styled-components';

const StyledText = styled(Text)`
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  white-space: nowrap;

  ::before {
    content: '';
    position: absolute;
    left: -5rem;
    top: 0.5rem;
    width: 4rem;
    height: 0.2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.mediumGray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  }
  ::after {
    content: '';
    position: absolute;
    right: -4.5rem;
    top: 0.5rem;
    width: 4rem;
    height: 0.2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.mediumGray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  }
`;

const DashedText = ({ children, ...props }) => (
  <StyledText as='span' {...props}>
    {children}
  </StyledText>
);

DashedText.propTypes = {
  children: node.isRequired,
};

export default DashedText;
