import React from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import { Button } from '../index';

const HeroImageBox = styled(Box)`
  background: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 4rem);
  position: relative;
`;

const HeroOverlay = styled(Flex)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ${({ hideHeroContent }) =>
    !hideHeroContent && 'background: rgba(0, 0, 0, 0.5);'}
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroBanner = ({
  title,
  description,
  buttonText,
  buttonSlug,
  heroImage,
  hideHeroContent,
}) => {
  return (
    <HeroImageBox url={heroImage}>
      <HeroOverlay px={['lg', 'xl']} hideHeroContent={hideHeroContent}>
        <Heading
          as='h1'
          color='trueWhite'
          fontSize={['heading', 'superheading']}
          mb='md'
          className={hideHeroContent && 'visuallyHidden'}
        >
          {title}
        </Heading>
        <Text
          as='p'
          color='white'
          fontSize='1.25rem'
          mb='lg'
          className={hideHeroContent && 'visuallyHidden'}
        >
          {description}
        </Text>
        {buttonText && buttonSlug && !hideHeroContent && (
          <Button variant='dark' to={`/${buttonSlug}`}>
            {buttonText}
          </Button>
        )}
      </HeroOverlay>
    </HeroImageBox>
  );
};

HeroBanner.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  buttonText: string.isRequired,
  buttonSlug: string.isRequired,
  heroImage: string.isRequired,
  imageOnly: bool,
};

HeroBanner.defaultProps = {
  imageOnly: false,
};

export default HeroBanner;
