import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ProductListing = () => {
  const { allContentfulProduct } = useStaticQuery(graphql`
    query ProductListing {
      allContentfulProduct {
        edges {
          node {
            category {
              name
            }
            name
            primaryImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);
  const products = allContentfulProduct.edges.map(edge => edge.node);

  return (
    <ul>
      {products.map(product => (
        <li key={product.name}>
          <img src={product.primaryImage.file.url} alt={product.name} />
          {product.name}
        </li>
      ))}
    </ul>
  );
};

export default ProductListing;
