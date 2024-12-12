import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '@/components/layout';
import Eyebrow from '@/components/eyebrow';
import WorkItem from '@/components/workItem';

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
              gatsbyImageData(width: 592, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `);
  return (
    <Layout pageTitle="作品集">
      <div id="#portfolio">
        <div className="container mx-auto h-full">
          <div className="flex flex-col gap-12 lg:py-12 md:py-8 py-4 mb-56">
            <Eyebrow label="PORTFOLIO / 作品集" />
            <div className="flex flex-wrap ">
              {data.allPortfolioJson.nodes.map((node, index) => (
                <WorkItem id={node.id} key={node.id} image={node.image} title={node.title} description={node.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
