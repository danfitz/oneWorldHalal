import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroBanner, createComponent } from '../components';

const Home = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query HomepageQuery {
      allContentfulPage(filter: { slug: { eq: "/" } }) {
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

export default Home;
