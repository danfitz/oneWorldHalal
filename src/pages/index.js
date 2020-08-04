import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroBanner, InfoBlock } from '../components';
import halalByHand from '../assets/halal-by-hand.png';

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
    <>
      <HeroBanner
        title={page.heroTitle}
        description={page.heroDescription}
        buttonText={page.buttonText}
        buttonSlug={page.buttonSlug}
        hideHeroContent={page.hideHeroContent}
        heroImage={page.heroImage.file.url}
      />
      <InfoBlock
        title='Halal by Hand'
        subtitle='Certified'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        image={{ url: halalByHand }}
      />
    </>
  );
};

export default Home;
