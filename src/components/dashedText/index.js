import React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { node, oneOf } from 'prop-types';
import styled from 'styled-components';

const StyledText = styled(Text)`
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  white-space: nowrap;
  color: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.trueWhite : theme.colors.trueBlack};

  ::before {
    content: '';
    position: absolute;
    left: -5rem;
    top: 0.5rem;
    width: 4rem;
    height: 0.2rem;
    border-top: 1px solid
      ${({ theme, darkMode }) =>
        !darkMode ? theme.colors.mediumGray : theme.colors.trueWhite};
    border-bottom: 1px solid
      ${({ theme, darkMode }) =>
        !darkMode ? theme.colors.mediumGray : theme.colors.trueWhite};
  }
  ::after {
    content: '';
    position: absolute;
    right: -4.5rem;
    top: 0.5rem;
    width: 4rem;
    height: 0.2rem;
    border-top: 1px solid
      ${({ theme, darkMode }) =>
        !darkMode ? theme.colors.mediumGray : theme.colors.trueWhite};
    border-bottom: 1px solid
      ${({ theme, darkMode }) =>
        !darkMode ? theme.colors.mediumGray : theme.colors.trueWhite};
  }
`;

const DashedText = ({ children, mode, ...props }) => {
  return (
    <Box
      sx={{ overflow: 'hidden' }}
      color={mode === 'black' ? 'trueBlack' : 'trueWhite'}
    >
      <StyledText as='span' darkMode={mode === 'white'} {...props}>
        {children}
      </StyledText>
    </Box>
  );
};

DashedText.propTypes = {
  children: node.isRequired,
  mode: oneOf(['black', 'white']),
};

DashedText.defaultProps = {
  mode: 'black',
};

export default DashedText;
