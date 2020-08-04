import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Image, Heading } from 'rebass/styled-components';
import { Label } from '@rebass/forms/styled-components';
import styled from 'styled-components';
import { Wrapper, DashedText } from '../index';

const FilterList = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-left: 0;

  input[type='radio'] {
    position: absolute;
    left: 10000px;
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
`;

const ImageWithShadow = styled(Image)`
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
              file {
                url
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
  const products = allContentfulProduct.edges.map(edge => edge.node);
  const productCategories = allContentfulProductCategory.nodes
    .map(node => node.name)
    .sort();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const handleCategoryChange = event => {
    if (event.target.checked) {
      setSelectedCategory(event.target.value);
    }
  };

  const filteredProducts =
    selectedCategory !== 'All'
      ? products.filter(product => product.category.name === selectedCategory)
      : products;

  return (
    <Box as='section' py={['xl', '12rem']}>
      <Wrapper textAlign='center' mb='xl'>
        <Heading as='h2' mb='md' fontSize={['subheading', 'heading']}>
          Our Menu
        </Heading>
        <DashedText>Halal by Hand</DashedText>
        <Box as='span' className='visuallyHidden'>
          Categories
        </Box>
        <FilterList mt='lg'>
          <Box>
            <input
              type='radio'
              name='category'
              id='all'
              value='All'
              checked={selectedCategory === 'All'}
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
        {filteredProducts.map(product => (
          <Flex
            as='li'
            key={product.name}
            flexDirection='column'
            justifyContent='space-between'
            width={[1 / 2, 1 / 6]}
            p={['md', 5]}
            sx={{
              boxShadow: '0 0 0 1px #ddd',
            }}
          >
            <Flex
              flexDirection='column'
              justifyContent='center'
              flex='1 1 auto'
            >
              <ImageWithShadow
                src={product.primaryImage.file.url}
                alt={product.name}
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
        ))}
      </Flex>
    </Box>
  );
};

export default ProductListing;
