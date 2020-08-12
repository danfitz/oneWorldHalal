import React from 'react';
import { Heading, Text, Box } from 'rebass/styled-components';
import { Button, Wrapper, Image } from '../components';
import { useStaticQuery, graphql } from 'gatsby';

const FourOhFour = () => {
  const { contentfulPage } = useStaticQuery(graphql`
    query FourOhFourPageQuery {
      contentfulPage(slug: { eq: "404" }) {
        ...PageFields
      }
    }
  `);

  const {
    heroImage,
    heroTitle,
    heroDescription,
    buttonText,
    buttonSlug,
  } = contentfulPage;

  return (
    <Wrapper>
      <Box mt='xl' textAlign='center'>
        <Heading
          as='h1'
          fontSize={['heading', 'superheading']}
          mb='md'
          color='orange'
        >
          {heroTitle}
        </Heading>
        <Text as='p' mb='md' fontSize='1.25rem' textAlign='center'>
          {heroDescription}
        </Text>
        <Button to={buttonSlug === '/' ? buttonSlug : `/${buttonSlug}`} my='md'>
          {buttonText}
        </Button>
        <Box width={[1, 1 / 2]} mx='auto'>
          <Image fluid={heroImage.fluid} />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default FourOhFour;
