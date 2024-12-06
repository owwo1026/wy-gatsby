import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Helmet>
        <script src="https://gumroad.com/js/gumroad.js" />
        <script src="flowbite/dist/flowbite.min.js"></script>
      </Helmet>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
