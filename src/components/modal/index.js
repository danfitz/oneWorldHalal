import React from 'react';
import { bool, func, node } from 'prop-types';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';
import { Button } from '../index';

const Overlay = styled(Box)`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices.fixed};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const CloseButton = styled(Button)`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.fixed};
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.magenta};
  }
`;

const Modal = ({ open, onClose, children }) => {
  const handleClose = e => {
    e.stopPropagation();
    onClose(e);
  };

  if (open) {
    return (
      <Overlay onClick={onClose}>
        <Box
          onClick={e => e.stopPropagation()}
          height={['100%', 'auto']}
          width={['100%', 'auto']}
          maxWidth={['100%', '90%']}
          maxHeight={['100%', '90%']}
          bg='trueWhite'
          p={['md', 'xl']}
          sx={{ cursor: 'default', position: 'relative' }}
        >
          <CloseButton variant='none' onClick={handleClose}>
            Close
          </CloseButton>
          {children}
        </Box>
      </Overlay>
    );
  }

  return null;
};

Modal.propTypes = {
  open: bool.isRequired,
  onClose: func.isRequired,
  children: node.isRequired,
};

export default Modal;
