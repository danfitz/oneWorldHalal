import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { contentfulSiteMetadata } = useStaticQuery(
    graphql`
      query SiteMetadata {
        contentfulSiteMetadata {
          title
          description
          author
          keywords
          siteUrl
          instagramUrl
        }
      }
    `
  );
  return contentfulSiteMetadata;
};

/**
 * Fragments
 */
export const pageFields = graphql`
  fragment PageFields on ContentfulPage {
    heroTitle
    heroImage {
      fluid(maxWidth: 2000) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    heroDescription {
      json
    }
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
            fluid(maxWidth: 200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      ... on ContentfulInstagramFeed {
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
      }
    }
  }
`;
