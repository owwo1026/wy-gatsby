import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import WorkItem from "./workItem";
import Eyebrow from "./eyebrow";
import Button from "./button";
import { Carousel } from "flowbite-react";

const PortfolioInfo = () => {
  const data = useStaticQuery(graphql`
    {
      portfolioInfo: allFile(filter: { relativeDirectory: { eq: "works" }, extension: { regex: "/(jpg)|(jpeg)|(png)|(gif)|(webp)/" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);
  return (
    <div id="#portfolioInfo">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div div className="lg:col-span-4 flex flex-col gap-6">
              <Eyebrow label="PORTFOLIO / 作品集" />
              <p className="md:text-body-lg text-body-md font-light text-neutral-700">
                我們是間年輕公司，由兩位懷抱著熱忱和想法的年輕設計師於2022年攜手創立。
                維域（維繫各元素空間及場域相互串聯而產生良好效應）
                體現了我們對空間的期待，再結合專業的施工團隊下為屋主打造專屬的空間及居所！
              </p>
            </div>
            {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"> */}
            <div className="lg:col-span-8 flex flex-col gap-8 relative h-96">
              <Carousel
                indicators={false}
                pauseOnHover
                // onSlideChange={(index) => console.log('onSlideChange()', index)}
              >
                {data.portfolioInfo.nodes.map((node) => (
                  <img src={node.publicURL} alt="..." />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
