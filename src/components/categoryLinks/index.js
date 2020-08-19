import React from 'react';
import { Link, BackgroundImage } from '../index';
import { Flex, Box, Text } from 'rebass/styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;

  :hover,
  :focus {
    .bgOverlay {
      background: rgba(255, 255, 255, 0.6);
      transition: all 0.3s ease;
    }

    .categoryText {
      color: ${({ theme }) => theme.colors.magenta};
      transition: all 0.3s ease;
    }
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 7.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 15rem;
  }
`;

const BgOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const CategoryLinks = () => {
  const { allContentfulProductCategory } = useStaticQuery(graphql`
    query ProductCategoryQuery {
      allContentfulProductCategory(sort: { fields: name }) {
        nodes {
          name
          categoryImage {
            fluid(maxWidth: 250) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const categories = allContentfulProductCategory.nodes.map(node => ({
    ...node,
    name: node.name.toLowerCase().trim(),
  }));

  return (
    <Flex
      as='ul'
      sx={{
        listStyle: 'none',
        p: 0,
        m: 0,
        mt: 'md',
      }}
      flexDirection={['column', 'row']}
    >
      {categories.map(category => (
        <Box as='li' width={[1, 1 / categories.length]}>
          <StyledLink to={`/products?category=${category.name}`}>
            <StyledBackgroundImage
              fluid={category.categoryImage.fluid}
              key={category.name}
            >
              <BgOverlay className='bgOverlay' />
              <Text
                className='categoryText'
                fontWeight='heading'
                fontSize={['subheading', '2.5rem']}
                color='white'
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  textTransform: 'capitalize',
                }}
              >
                {category.name}
              </Text>
            </StyledBackgroundImage>
          </StyledLink>
        </Box>
      ))}
    </Flex>
  );
};

export default CategoryLinks;
