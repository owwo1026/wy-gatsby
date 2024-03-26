import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Eyebrow from "./eyebrow";
import { Carousel } from "flowbite-react";

const PortfolioCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      portfolioCarousel: allFile(filter: { relativeDirectory: { eq: "best-portfolio" }, extension: { regex: "/(jpg)|(jpeg)|(png)|(gif)|(webp)/" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);
  return (
    <div id="#portfolioCarousel">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 md:gap-8 items-center">
            <div div className="lg:col-span-5 flex flex-col gap-6">
              <Eyebrow label="BEST / 精選集" />
              <p className="md:text-body-lg text-body-md font-light text-neutral-700 text-justify">
                ＜每個人都應該要有專屬且獨特的生活空間和使用空間＞<br/>
                重視人與空間的對話與連結和空間帶給使用者的感受與效應，因為好的設計元素及手法，使人產生正向感受與氛圍，所以追求各設計元素間的和諧與比例，因為好的設計元素及手法，能促使人與人產生更多的情感連結與互動，所以追求各設計元素間的配置與定位帶給使用者的意義。
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-8 relative h-72 sm:h-[29rem] lg:h-[40rem] xl:h-[29rem]">
              <Carousel
                indicators={false}
                slideInterval={3000}
                pauseOnHover
              >
                {data.portfolioCarousel.nodes.map((node) => (
                  <img
                    src={node.publicURL}
                    alt={node.name}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
