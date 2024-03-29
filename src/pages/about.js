import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroBanner, createComponent } from '../components';

const About = () => {
  const { contentfulPage } = useStaticQuery(graphql`
    query AboutPageQuery {
      contentfulPage(slug: { eq: "about" }) {
        ...PageFields
      }
    }
  `);

  return (
    <>
      <HeroBanner
        title={contentfulPage.heroTitle}
        description={contentfulPage.heroDescription}
        buttonText={contentfulPage.buttonText}
        buttonSlug={contentfulPage.buttonSlug}
        hideHeroContent={contentfulPage.hideHeroContent}
        heroImage={contentfulPage.heroImage}
      />
      {contentfulPage.components &&
        contentfulPage.components.map(createComponent)}
    </>
  );
};

export default About;
