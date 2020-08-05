import React from 'react';
import { string, shape } from 'prop-types';
import { Box, Image, Heading, Text } from 'rebass/styled-components';
import { Wrapper, DashedText } from '../index';

const InfoBlock = ({ title, subtitle, content, image }) => {
  return (
    <Box as='section' py='xxl' textAlign='center'>
      <Wrapper width={[9 / 10, 1 / 3]}>
        <Heading as='h2' mb='md' fontSize={['subheading', 'heading']}>
          {title}
        </Heading>
        <DashedText>{subtitle}</DashedText>
        <Text
          as='p'
          my={['lg', 'xl']}
          fontSize={['1.25rem', '1.5rem']}
          lineHeight='1.5'
          fontStyle='italic'
        >
          {content}
        </Text>
        <Image src={image.url} alt='' maxWidth='100px' />
      </Wrapper>
    </Box>
  );
};

InfoBlock.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  content: string.isRequired,
  image: shape({
    url: string.isRequired,
  }),
};

export default InfoBlock;
