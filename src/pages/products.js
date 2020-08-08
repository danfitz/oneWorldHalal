import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroBanner, ProductListing } from '../components';

const Products = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query ProductsPageQuery {
      allContentfulPage(filter: { slug: { eq: "products" } }) {
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
      <ProductListing />
    </>
  );
};

export default Products;
