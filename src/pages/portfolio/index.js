import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../../components/layout";
import WorkItem from "../../components/workItem";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allPortfolioJson {
        nodes {
          id
          title
          description
          path
          image {
            childImageSharp {
              gatsbyImageData(
                width: 592
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);
  return (
    <Layout pageTitle="作品集">
      <div id="#protfolio">
        <div className="container mx-auto h-lvh">
          <div className="flex flex-col gap-12 lg:py-12 md:py-8 py-4 mb-56">
            <div className="flex flex-col xl:gap-20 md:gap-18 gap-10">
              <div className="flex flex-row items-center">
                <hr className="w-16 text-primary-600"></hr>
                <p className="text-body-md md:text-body-xl font-semibold tracking-widest text-primary-600 pl-4">
                  PORTFOLIO / 作品集
                </p>
              </div>
              <div
                className="flex flex-wrap "
              >
                { 
                  data.allPortfolioJson.nodes.map((node, index) => (
                    <WorkItem
                      id={node.id}
                      key={node.id}
                      image={node.image}
                      title={node.title}
                      description={node.description}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
