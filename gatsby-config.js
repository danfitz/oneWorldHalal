/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'One World Halal',
    description: 'Halal for All',
    author: 'One World Halal',
    keywords: ['halal', 'food', 'eating'],
    siteUrl: 'https://oneworldhalal.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '114gubxv8ows',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:400,500'],
        },
        custom: {
          families: ['League Spartan'],
          urls: ['fonts.css'],
        },
      },
    },
    /**
     * head metadata
     * used to add valuable metadata to HTML head
     * learn more: https://www.gatsbyjs.org/tutorial/seo-and-social-sharing-cards-tutorial/
     */
    'gatsby-plugin-react-helmet',
    /**
     * robots.txt
     * tells search engine crawler what can be crawled/indexed (everything by default)
     * tells crawler where to find sitemap
     * learn more: https://support.google.com/webmasters/answer/6062608?hl=en&ref_topic=6061961
     */
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://oneworldhalal.com',
        sitemap: 'https://oneworldhalal.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    /**
     * sitemap.xml
     * provides information about your pages for more intelligent/deliberate crawling
     * learn more: https://support.google.com/webmasters/answer/156184?hl=en&ref_topic=4581190
     */
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        // Add any options here
        // See https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap for list of options
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
        // See https://styled-components.com/docs/tooling#babel-plugin for list of options
      },
    },
  ],
};
