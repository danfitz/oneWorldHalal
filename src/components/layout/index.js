import React from 'react';
import { string, node } from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import SEO from '../seo';
import '../../utils/fontAwesome';

const Layout = ({ pageTitle, children }) => (
  <>
    <SEO title={pageTitle} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  pageTitle: string.isRequired,
  children: node.isRequired,
};

Layout.defaultProps = {
  pageTitle: '404',
};

export default Layout;
