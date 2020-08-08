import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroBanner, createComponent } from '../components';

const About = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query AboutPageQuery {
      allContentfulPage(filter: { slug: { eq: "about" } }) {
        edges {
          node {
            heroTitle
            heroImage {
              fluid(maxWidth: 2000) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            heroDescription
            buttonText
            buttonSlug
            hideHeroContent
            components {
              sys {
                contentType {
                  sys {
                    id
                  }
                }
              }
              title
              subtitle
              childContentfulInfoBlockContentTextNode {
                content
              }
              image {
                fluid(maxWidth: 100) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  const page = allContentfulPage.edges[0].node;

  return (
    <>
      <HeroBanner
        title={page.heroTitle}
        description={page.heroDescription}
        buttonText={page.buttonText}
        buttonSlug={page.buttonSlug}
        hideHeroContent={page.hideHeroContent}
        heroImage={page.heroImage}
      />
      {page.components && page.components.map(createComponent)}
    </>
  );
};

export default About;
