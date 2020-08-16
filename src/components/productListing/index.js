import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Heading } from 'rebass/styled-components';
import { Label } from '@rebass/forms/styled-components';
import styled from 'styled-components';
import { Wrapper, DashedText } from '../index';
import ModalImage from 'react-modal-image';
import { parse } from 'query-string';
import { useLocation, createHistory } from '@reach/router';

const FilterList = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-left: 0;

  input[type='radio'] {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  input[type='radio']:checked + label {
    color: ${({ theme }) => theme.colors.orange};
  }

  label {
    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  > div:not(:last-child) {
    position: relative;
    margin-right: 2rem;

    ::before {
      content: '';
      position: absolute;
      right: -1rem;
      top: 10%;
      height: 80%;
      width: 1px;
      background: ${({ theme }) => theme.colors.black};
      transform: rotate(15deg);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    > div:not(:last-child) {
      margin-right: 4rem;

      ::before {
        right: -2rem;
      }
    }
  }
`;

const ModalImageWithShadow = styled(ModalImage)`
  width: 100%;
  filter: drop-shadow(
    0.5rem 0.5rem 0.5rem ${({ theme }) => theme.colors.mediumGray}
  );
`;

const ProductListing = () => {
  const {
    allContentfulProduct,
    allContentfulProductCategory,
  } = useStaticQuery(graphql`
    query ProductListing {
      allContentfulProduct(sort: { order: ASC, fields: name }) {
        edges {
          node {
            category {
              name
            }
            name
            primaryImage {
              small: fixed(width: 300, quality: 25) {
                src
              }
              medium: fixed(width: 800, quality: 50) {
                src
              }
              large: fixed(width: 800, quality: 100) {
                src
              }
            }
          }
        }
      }
      allContentfulProductCategory {
        nodes {
          name
        }
      }
    }
  `);

  const location = useLocation();
  const history = typeof window !== 'undefined' ? createHistory(window) : null;

  const products = allContentfulProduct.edges.map(edge => edge.node);
  const productCategories = allContentfulProductCategory.nodes
    .map(node => node.name.toLowerCase().trim())
    .sort();

  const [selectedCategory, setSelectedCategory] = useState(
    parse(location.search).category || 'all'
  );
  const handleCategoryChange = event => {
    if (event.target.checked) {
      const newCategory = event.target.value;

      setSelectedCategory(newCategory);

      const url =
        newCategory === 'all'
          ? '/products'
          : `/products?category=${newCategory}`;

      if (history) {
        history.navigate(url, {
          replace: true,
        });
      }
    }
  };

  const filteredProducts =
    selectedCategory !== 'all'
      ? products.filter(
          product =>
            product.category.name.toLowerCase().trim() === selectedCategory
        )
      : products;

  return (
    <Box as='section' py={['xl', 'xxl']}>
      <Wrapper textAlign='center' mb='xl'>
        <Heading as='h2' mb='md' fontSize={['subheading', 'heading']}>
          Our Menu
        </Heading>
        <DashedText>On Our Shelves</DashedText>
        <Box as='span' className='visuallyHidden'>
          Categories
        </Box>
        <FilterList mt='lg'>
          <Box>
            <input
              type='radio'
              name='category'
              id='all'
              value='all'
              checked={selectedCategory === 'all'}
              onChange={handleCategoryChange}
            />
            <Label
              tabIndex={0}
              htmlFor='all'
              fontSize={['1.25rem', '1.5rem']}
              fontWeight='bold'
              width='auto'
            >
              All
            </Label>
          </Box>
          {productCategories.map(category => (
            <Box key={category}>
              <input
                type='radio'
                name='category'
                id={category}
                value={category}
                checked={selectedCategory === category}
                onChange={handleCategoryChange}
              />
              <Label
                tabIndex={0}
                htmlFor={category}
                fontSize={['1.25rem', '1.5rem']}
                fontWeight='bold'
                width='auto'
                sx={{
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {category}
              </Label>
            </Box>
          ))}
        </FilterList>
      </Wrapper>

      <Flex
        as='ul'
        flexWrap='wrap'
        listStyle='none'
        pl={0}
        justifyContent={[
          filteredProducts.length < 2 ? 'center' : 'flex-start',
          filteredProducts.length < 6 ? 'center' : 'flex-start',
        ]}
      >
        {filteredProducts.map(product => {
          return (
            <Flex
              as='li'
              key={product.name}
              flexDirection='column'
              justifyContent='space-between'
              width={[1 / 2, 1 / 6]}
              p={['md', 5]}
              sx={{
                boxShadow: '0 0 0 1px #eee',
              }}
            >
              <Flex
                flexDirection='column'
                justifyContent='center'
                flex='1 1 auto'
              >
                <ModalImageWithShadow
                  small={product.primaryImage.small.src}
                  medium={product.primaryImage.medium.src}
                  large={product.primaryImage.large.src}
                  alt={product.name}
                  hideDownload
                  imageBackgroundColor='white'
                />
              </Flex>
              <Heading
                as='h3'
                fontFamily='body'
                fontSize={['1.25rem', '1.4rem']}
                fontWeight='bold'
                textAlign='center'
                mt={['md', 'lg']}
              >
                {product.name}
              </Heading>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ProductListing;
