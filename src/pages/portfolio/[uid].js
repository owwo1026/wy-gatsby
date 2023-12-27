import React, { useState  } from 'react'
import { graphql } from "gatsby";
import { Breadcrumb, Modal, Button, Carousel } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import Layout from "../../components/layout";

const IndexPage = ({location, pageContext, data}) => {
  const myData = location.state.myData
  console.log('props-mydata', location.state.myData)
  console.log('props-pageContext', pageContext)
  console.log('props-data', data)
  const [openModal, setOpenModal] = useState(false);
  const breadcrumb = { 
    parentName: "portfolio",
    parentPath: "/portfolio/",
    name: myData.title,
    path: `/portfolio/${pageContext.id}`,
  };
  return (
    <Layout breadcrumb={breadcrumb}>
      <div id="#protfolioList"  className="container mx-auto md:py-20">
        {breadcrumb && (
          <Breadcrumb className="pb-10">
            <Breadcrumb.Item href="/" icon={HiHome}>Home</Breadcrumb.Item>
            <Breadcrumb.Item href={breadcrumb.parentPath}>{breadcrumb.parentName}</Breadcrumb.Item>
            <Breadcrumb.Item>{breadcrumb.name}</Breadcrumb.Item>
          </Breadcrumb>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.allFile.nodes.map((node) => (
            <a role="button" style={{ cursor: "pointer" }} onClick={() => setOpenModal(true)}>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src={node.publicURL}
                  alt={node.name}
                />
            </a>
          ))}
        </div>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
        <Modal.Body>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            </Carousel>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};

export const pageQuery = graphql`
  query DataQuery($relativeDirectory: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" },
        relativeDirectory: { eq: $relativeDirectory },
        name: { ne: "index" }
      }
    ) {
      nodes {
        publicURL
        id
        name
      }
    }
  }
`;

export default IndexPage;
