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
