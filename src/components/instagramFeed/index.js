import React from 'react';
import { string, object, shape } from 'prop-types';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import ListBlock from '../listBlock';
import { useStaticQuery, graphql } from 'gatsby';
import { useSiteMetadata } from '../../utils/queries';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

const InstagramFeed = ({ title, subtitle, backgroundImage }) => {
  const { allInstaNode } = useStaticQuery(graphql`
    query InstagramQuery {
      allInstaNode(limit: 12, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            likes
            timestamp
            thumbnails {
              src
            }
            caption
          }
        }
      }
    }
  `);

  const { instagramUrl } = useSiteMetadata();

  const posts = allInstaNode.edges.map(edge => ({
    ...edge.node,
    src: edge.node.thumbnails[1].src, // thumbnails are an array of increasingly larger-sized images
  }));

  return (
    <ListBlock
      title={title}
      subtitle={subtitle}
      backgroundImage={backgroundImage}
      cta={{
        to: instagramUrl,
        text: 'View Full Feed',
      }}
    >
      {posts.map(post => (
        <Box
          as='li'
          key={post.timestamp}
          bg='trueWhite'
          sx={{
            boxShadow: !backgroundImage && '0 0 0.25rem 0.05rem #eee',
          }}
        >
          <Image src={post.src} alt='' width={1} />
          <Box p='md'>
            <Flex justifyContent='space-between'>
              <Box>
                <Box as='span' className='visuallyHidden'>
                  Likes:
                </Box>
                <Box as='span' color='magenta'>
                  <Icon icon='heart' />
                </Box>{' '}
                <Box
                  as='span'
                  display={['block', 'inline']}
                  fontWeight='subheading'
                >
                  {post.likes}
                </Box>
              </Box>
              <Box>
                <Box as='span' className='visuallyHidden'>
                  Date posted:
                </Box>
                <Box as='span' color='blue'>
                  <Icon icon='clock' />
                </Box>{' '}
                <Box
                  as='span'
                  display={['block', 'inline']}
                  fontWeight='subheading'
                >
                  {moment.unix(post.timestamp).format('MMM D')}
                </Box>
              </Box>
            </Flex>
            <Text as='p' textAlign='left' mt='md'>
              {post.caption.split(' ').slice(0, 20).join(' ')}...
            </Text>
          </Box>
        </Box>
      ))}
    </ListBlock>
  );
};

InstagramFeed.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  backgroundImage: shape({
    fluid: object.isRequired,
  }),
};

export default InstagramFeed;
