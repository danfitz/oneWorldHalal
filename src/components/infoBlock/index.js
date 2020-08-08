import React from 'react';
import { string, object, shape } from 'prop-types';
import { Box, Heading, Text } from 'rebass/styled-components';
import { Image, Wrapper, DashedText } from '../index';

const InfoBlock = ({
  title,
  subtitle,
  childContentfulInfoBlockContentTextNode: { content },
  image,
}) => {
  return (
    <Box as='section' py={['xl', 'xxl']} textAlign='center'>
      <Wrapper width={[9 / 10, 1 / 3]}>
        <Heading as='h2' mb='md' fontSize={['subheading', 'heading']}>
          {title}
        </Heading>
        <DashedText mb={['lg', 'xl']}>{subtitle}</DashedText>

        <Text
          as='p'
          my={['lg', 'xl']}
          fontSize={['1.1rem', '1.25rem']}
          lineHeight='1.5'
          fontStyle='italic'
        >
          {content}
        </Text>

        {image && (
          <Image
            fluid={image.fluid}
            alt={image.title}
            maxWidth='100px'
            style={{ margin: '0 auto' }}
          />
        )}
      </Wrapper>
    </Box>
  );
};

InfoBlock.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  childContentfulInfoBlockContentTextNode: shape({
    content: string.isRequired,
  }),
  image: shape({
    fluid: object.isRequired,
    title: string.isRequired,
  }),
};

export default InfoBlock;
