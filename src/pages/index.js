import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Services from "../components/services";
import About from "../components/about";
import PortfolioCarousel from "../components/portfolioCarousel";
import Top from "../components/top";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Top />
    <About />
    <Services />
    <PortfolioCarousel/>
  </Layout>
);

export default IndexPage;
