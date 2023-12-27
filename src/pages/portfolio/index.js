import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

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
    <Layout>
      <div id="#protfolio">
        <div className="container mx-auto">
          <div className="flex flex-col gap-12 lg:py-12 md:py-8 py-4">
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10">
              <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row items-center">
                    <hr className="w-16 text-primary-600"></hr>
                    <p className="text-body-ml font-semibold tracking-widest text-primary-600 pl-4">
                      PORTFOLIO / 作品集
                    </p>
                  </div>
                </div>
                {data.allPortfolioJson.nodes.slice(0, 1).map((node) => (
                  <WorkItem
                    id={node.id}
                    key={node.id}
                    image={getImage(node.image)}
                    title={node.title}
                    description={node.description}
                  />
                ))}
              </div>
              <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
                {data.allPortfolioJson.nodes.slice(1, 3).map((node) => (
                  <WorkItem
                    id={node.id}
                    key={node.id}
                    image={getImage(node.image)}
                    title={node.title}
                    description={node.description}
                    path={node.path}
                  />
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
