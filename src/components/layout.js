import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { z } from 'zod';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { customErrorMap } from '@/utils/zod-extend';

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

  useEffect(() => {
    // 設定全局錯誤訊息
    z.setErrorMap(customErrorMap);
  }, []);

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
