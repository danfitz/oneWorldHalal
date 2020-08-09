import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroBanner, ContactForm, createComponent } from '../components';

const Contact = () => {
  const { contentfulPage } = useStaticQuery(graphql`
    query ContactPageQuery {
      contentfulPage(slug: { eq: "contact" }) {
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
      <ContactForm />
      {contentfulPage.components &&
        contentfulPage.components.map(createComponent)}
    </>
  );
};

export default Contact;
