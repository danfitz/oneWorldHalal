import React from 'react';
import { string, bool, object, shape } from 'prop-types';
import styled from 'styled-components';
import { Box, Flex, Heading } from 'rebass/styled-components';
import { Button, BackgroundImage } from '../index';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HeroBackgroundImage = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 4rem);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

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
  }}
`;

const ContentBox = styled(Box)`
  height: 100%;
  position: relative;
  z-index: 1;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: center;
    text-align: center;
    padding-left: 20%;
    padding-right: 20%;
  }
`;

const StyledRichText = styled(Box)`
  color: ${({ theme }) => theme.colors.white};

  p {
    font-size: 1.15rem;
    margin-bottom: ${({ theme }) => theme.space.lg};
  }

  blockquote {
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    p {
      font-size: 1.4rem;
    }
  }
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
    <HeroBackgroundImage fluid={heroImage.fluid} p={['lg', 'xl']} pt='xl'>
      <HeroOverlay
        hideHeroContent={hideHeroContent}
        richTextFound={description && description.json}
      />

      <ContentBox>
        <Heading
          as='h1'
          color='trueWhite'
          fontSize={['heading', 'superheading']}
          mb='md'
          className={hideHeroContent && 'visuallyHidden'}
        >
          {title}
        </Heading>

        {description && description.json && (
          <StyledRichText className={hideHeroContent && 'visuallyHidden'}>
            {documentToReactComponents(description.json)}
          </StyledRichText>
        )}

        {buttonText && buttonSlug && !hideHeroContent && (
          <Button
            variant='dark'
            to={buttonSlug === '/' ? buttonSlug : `/${buttonSlug}`}
          >
            {buttonText}
          </Button>
        )}
      </ContentBox>
    </HeroBackgroundImage>
  );
};

HeroBanner.propTypes = {
  title: string.isRequired,
  description: shape({ json: object.isRequired }),
  buttonText: string,
  buttonSlug: string,
  heroImage: object.isRequired,
  hideHeroContent: bool.isRequired,
};

HeroBanner.defaultProps = {
  description: null,
};

export default HeroBanner;
