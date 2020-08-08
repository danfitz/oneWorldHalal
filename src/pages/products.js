import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroBanner, ProductListing, createComponent } from '../components';

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
      <ProductListing />
    </>
  );
};

export default Products;
