import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroBanner } from '../components';

const Home = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query HomepageQuery {
      allContentfulPage(filter: { slug: { eq: "/" } }) {
        edges {
          node {
            heroTitle
            heroImage {
              file {
                url
              }
            }
            heroDescription
            buttonText
            buttonSlug
            hideHeroContent
          }
        }
      }
    }
  `);

  const page = allContentfulPage.edges[0].node;

  return (
    <HeroBanner
      title={page.heroTitle}
      description={page.heroDescription}
      buttonText={page.buttonText}
      buttonSlug={page.buttonSlug}
      hideHeroContent={page.hideHeroContent}
      heroImage={page.heroImage.file.url}
    />
  );
};

export default Home;
