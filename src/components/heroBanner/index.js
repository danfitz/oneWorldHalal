import React, { useEffect, useRef } from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import { Button } from '../index';

const HeroImageBox = styled(Box)`
  background: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(75vh - 4rem);
  opacity: 0;
  position: relative;
  transition: opacity 1s ease;
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
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const backgroundImage = window.getComputedStyle(ref.current)
        .backgroundImage;
      const src = backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g, '');
      const image = new Image();
      image.onload = () => {
        ref.current.style.opacity = 1;
      };
      image.src = src;
    }
  }, []);

  return (
    <HeroImageBox ref={ref} url={heroImage}>
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

        {description && (
          <Text
            as='p'
            color='white'
            fontSize='1.25rem'
            mb='lg'
            className={hideHeroContent && 'visuallyHidden'}
          >
            {description}
          </Text>
        )}

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
  description: string,
  buttonText: string,
  buttonSlug: string,
  heroImage: string.isRequired,
  hideHeroContent: bool.isRequired,
};

HeroBanner.defaultProps = {
  description: null,
};

export default HeroBanner;
