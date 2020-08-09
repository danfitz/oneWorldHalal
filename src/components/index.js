import React from 'react';
import InfoBlock from './infoBlock';
import ClientList from './clientList';
import InstagramFeed from './instagramFeed';

// Layout-related components
export { default as Layout } from './layout';
export { default as SEO } from './seo';

// UI Components
export { default as Logo } from './logo';
export { default as Wrapper } from './wrapper';
export { default as Link } from './link';
export { default as Button } from './button';
export { default as DashedText } from './dashedText';
export { Image, BackgroundImage } from './image';
export { default as Modal } from './modal';

// Custom higher-level components
export { default as SocialIcons } from './socialIcons';
export { default as HeroBanner } from './heroBanner';
export { default as ProductListing } from './productListing';
export { default as ContactForm } from './contactForm';

const componentMapper = {
  infoBlock: InfoBlock,
  clientList: ClientList,
  instagramFeed: InstagramFeed,
};

export const createComponent = (componentData, key) => {
  const Component = componentMapper[componentData.sys.contentType.sys.id];

  if (Component) {
    return <Component key={key} {...componentData} />;
  }

  return null;
};
