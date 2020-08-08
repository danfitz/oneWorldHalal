import React from 'react';
import { string, object, node, shape } from 'prop-types';
import { Box, Heading } from 'rebass/styled-components';
import styled from 'styled-components';
import { BackgroundImage, Wrapper, DashedText } from '../index';

const BackgroundOverlay = styled(Box)`
  background: rgba(0, 0, 0, 0.7);
`;

const Grid = styled(Box)`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }
`;

const ListBlock = ({ title, subtitle, backgroundImage, children }) => {
  return (
    <Box as='section' textAlign='center'>
      <BackgroundImage fluid={backgroundImage.fluid}>
        <BackgroundOverlay py={['xl', 'xxl']}>
          <Wrapper>
            <Heading
              as='h2'
              mb='md'
              fontSize={['subheading', 'heading']}
              color='trueWhite'
            >
              {title}
            </Heading>
            <DashedText mb={['lg', 'xl']} mode='white'>
              {subtitle}
            </DashedText>

            <Grid as='ul' mt={['lg', 'xl']}>
              {children}
            </Grid>
          </Wrapper>
        </BackgroundOverlay>
      </BackgroundImage>
    </Box>
  );
};

ListBlock.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  backgroundImage: shape({
    fluid: object.isRequired,
  }),
  children: node.isRequired,
};

export default ListBlock;
