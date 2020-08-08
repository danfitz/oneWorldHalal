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
              ... on ContentfulInfoBlock {
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
                  title
                  fluid(maxWidth: 100) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
              }
              ... on ContentfulClientList {
                sys {
                  contentType {
                    sys {
                      id
                    }
                  }
                }
                title
                subtitle
                backgroundImage {
                  fluid(maxWidth: 2000) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
                clients {
                  name
                  logo {
                    fixed(width: 200) {
                      ...GatsbyContentfulFixed_withWebp
                    }
                  }
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
