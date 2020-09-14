import React from 'react';
import { string, object, shape } from 'prop-types';
import { Box, Heading } from 'rebass/styled-components';
import { Image, Wrapper, DashedText } from '../index';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const StyledRichText = styled(Box)`
  p {
    line-height: 1.5;
    font-size: 1.1rem;
  }

  blockquote {
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    p {
      font-size: 1.25rem;
    }
  }
`;

const InfoBlock = ({ title, subtitle, content, image }) => {
  return (
    <Box as='section' py={['xl', 'xxl']} textAlign='center'>
      <Wrapper width={[9 / 10, 2 / 5]}>
        <Box mb={['md', 'lg']}>
          <Heading as='h2' mb='md' fontSize={['subheading', 'heading']}>
            {title}
          </Heading>
          <DashedText>{subtitle}</DashedText>
        </Box>

        <StyledRichText>
          {documentToReactComponents(content.json)}
        </StyledRichText>

        {image && (
          <Image
            fluid={image.fluid}
            alt={image.title}
            maxWidth='100px'
            style={{ margin: '0 auto', marginTop: '3rem' }}
          />
        )}
      </Wrapper>
    </Box>
  );
};

InfoBlock.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  content: shape({
    json: object.isRequired,
  }).isRequired,
  image: shape({
    fluid: object.isRequired,
    title: string.isRequired,
  }),
};

export default InfoBlock;
