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
              fluid(maxWidth: 2000) {
                ...GatsbyContentfulFluid_withWebp
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
        heroImage={page.heroImage}
      />
      <InfoBlock
        title='Halal by Hand'
        subtitle='Certified'
        content='All One World Halal products are strictly Halal by Hand. Halal, the simple term used to describe what’s permissible, refers to the specific process involved in ensuring the route from farm to fork, adheres the most stringent controls and quality standards. Specifically, the respect shown for any living object and the process to ensure the complete draining of the animal blood, which leads to a noticeably cleaner and better product than any comparable non-halal cut. Good things take time, and in the case of halal, that time leads to a better, cleaner and healthier product. And that’s something to be proud of.'
        image={{ url: halalByHand }}
      />
    </>
  );
};

export default Home;
