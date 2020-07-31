import React from 'react';
import { string, node } from 'prop-types';
import Header from '../header';
import SEO from '../seo';

const Layout = ({ pageTitle, children }) => (
  <>
    <SEO title={pageTitle} />
    <Header />
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

Layout.propTypes = {
  pageTitle: string.isRequired,
  children: node.isRequired,
};

export default Layout;
