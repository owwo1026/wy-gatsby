import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Eyebrow from "./eyebrow";
import AwardBadge from "../images/award-badge.svg";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutimage: file(relativePath: { eq: "about-creative.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 592
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div id="#about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="ABOUT US / 關於我們" />
            <h2 className="font-display md:text-display-md text-display-sm font-normal pb-2">
              <span className="font-bol">空間</span>為<span className="font-bol">行為</span>而生<br/>
              <span className="pl-5 md:pl-40">是
                <span className="font-bol">人文主義</span>非<span className="font-bol">行為主義</span>
              </span>
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              我們是間年輕公司，由兩位懷抱著熱忱和想法的年輕設計師於2022年攜手創立。
              維域（維繫各元素空間及場域相互串聯而產生良好效應）
              體現了我們對空間的期待，再結合專業的施工團隊下為屋主打造專屬的空間及居所！
            </p>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              對我們來說每個設計過程中皆是獨特的，使用者的不同便賦予空間意義的差異，聆聽、溝通
              並給予專業的建議，連繫個人想法、觀感與尺度美學間所構成獨有的空間和場域，便是維域。
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative">
            <GatsbyImage
              image={getImage(data.aboutimage)}
              alt="Interior Design"
            />
            <img
              src={AwardBadge}
              alt="Award Badge"
              className="absolute left-[42%] -top-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
