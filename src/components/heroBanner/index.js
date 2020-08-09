import React from 'react';
import { string, bool, object } from 'prop-types';
import styled from 'styled-components';
import { Flex, Heading, Text } from 'rebass/styled-components';
import { Button, BackgroundImage } from '../index';

const HeroBackgroundImage = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 4rem);
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: calc(80vh - 4rem);
  }
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
    <HeroBackgroundImage fluid={heroImage.fluid}>
      <HeroOverlay p={['lg', 'xl']} hideHeroContent={hideHeroContent}>
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
            fontWeight='subheading'
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
    </HeroBackgroundImage>
  );
};

HeroBanner.propTypes = {
  title: string.isRequired,
  description: string,
  buttonText: string,
  buttonSlug: string,
  heroImage: object.isRequired,
  hideHeroContent: bool.isRequired,
};

HeroBanner.defaultProps = {
  description: null,
};

export default HeroBanner;
