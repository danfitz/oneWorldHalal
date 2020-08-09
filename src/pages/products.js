import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroBanner, ProductListing, createComponent } from '../components';

const Products = () => {
  const { contentfulPage } = useStaticQuery(graphql`
    query ProductsPageQuery {
      contentfulPage(slug: { eq: "products" }) {
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
      <ProductListing />
    </>
  );
};

export default Products;
