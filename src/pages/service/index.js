import React from 'react';

import Layout from '@/components/layout';
import Eyebrow from '@/components/eyebrow';

const IndexPage = () => {
  return (
    <Layout pageTitle="服務流程">
      <div id="#contact">
        <div className="container mx-auto">
          <div className="flex flex-col gap-12 lg:py-12 md:py-8 py-4 mb-56">
            <Eyebrow label="SERVICE / 服務流程" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
