import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Image, Heading, Text } from 'rebass/styled-components';
import styled from 'styled-components';

const DashedText = styled(Text)`
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.5rem;

  ::before {
    content: '';
    position: absolute;
    left: -5rem;
    top: 0.5rem;
    width: 4rem;
    height: 0.2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.mediumGray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  }
  ::after {
    content: '';
    position: absolute;
    right: -4.5rem;
    top: 0.5rem;
    width: 4rem;
    height: 0.2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.mediumGray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  }
`;

const FilterList = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-left: 0;

  li:not(:last-child) {
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
    <Box as='section' py={['xl', '12rem']}>
      <Box textAlign='center' mb='xl'>
        <Heading as='h2' mb='md' fontSize={['subheading', 'heading']}>
          One World Halal Menu
        </Heading>
        <DashedText as='span'>Our Best Stuff</DashedText>
        <Box as='span' className='visuallyHidden'>
          Categories
        </Box>
        <FilterList mt='md'>
          {['Burgers', 'Cheese', 'Deli', 'Jamaican Patties'].map(category => (
            <Box as='li' key={category} fontSize='1.5rem' fontWeight='bold'>
              {category}
            </Box>
          ))}
        </FilterList>
      </Box>

      <Box
        as='ul'
        listStyle='none'
        pl={0}
        display={['block', 'flex']}
        flexWrap='wrap'
      >
        {products.map(product => (
          <Flex
            as='li'
            key={product.name}
            flexDirection='column'
            justifyContent='space-between'
            width={[1, 1 / 6]}
            p='md'
            sx={{
              boxShadow: '0 0 0 1px #959595',
            }}
          >
            <Flex
              flexDirection='column'
              justifyContent='center'
              flex='1 1 auto'
              bg='black'
            >
              <Image src={product.primaryImage.file.url} alt={product.name} />
            </Flex>
            <Heading
              as='h3'
              fontFamily='body'
              fontSize='1.5rem'
              fontWeight='bold'
              textAlign='center'
              mt='lg'
            >
              {product.name}
            </Heading>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default ProductListing;
