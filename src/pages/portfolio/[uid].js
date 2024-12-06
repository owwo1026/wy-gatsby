import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { Breadcrumb, Modal } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import Layout from '../../components/layout';
import MyCarousel from '../../components/MyCarousel';
import { HiOutlineX } from 'react-icons/hi';

const IndexPage = ({ location, pageContext, data }) => {
  data.allFile.nodes.sort(function (a, b) {
    return parseInt(a.name) - parseInt(b.name);
  });
  const { id, image, title, description, relativeDirectory } = pageContext;
  const [activeIndex, setActiveIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);
  const handleShow = () => setOpenModal(true);

  function imageClick(e, id) {
    setActiveIndex(id);
    handleShow();
  }

  const breadcrumb = {
    parentName: 'portfolio',
    parentPath: '/portfolio/',
    name: title,
    path: `/portfolio/${id}`,
  };

  return (
    <Layout breadcrumb={breadcrumb} pageTitle={breadcrumb.name}>
      <div id="#protfolioList" className="container mx-auto md:py-20">
        {breadcrumb && (
          <Breadcrumb className="text-body-xl pb-10">
            <Breadcrumb.Item href="/" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href={breadcrumb.parentPath}>{breadcrumb.parentName}</Breadcrumb.Item>
            <Breadcrumb.Item>{breadcrumb.name}</Breadcrumb.Item>
          </Breadcrumb>
        )}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.allFile.nodes.map((node, idx) => (
            <a
              key={node.id}
              id={node.id}
              role="button"
              style={{ cursor: 'pointer' }}
              onClick={(e) => imageClick(e, idx)}
              className="overflow-hidden h-52 rounded-lg"
            >
              <img id={idx} className="w-full min-h-full" src={node.publicURL} alt={node.name} />
            </a>
          ))}
        </div>
      </div>
      <Modal id="modal" position="center" show={openModal} onClose={handleClose} dismissible>
        <MyCarousel onClose={handleClose} data={data.allFile.nodes} activeIndex={activeIndex} />
      </Modal>
    </Layout>
  );
};

export const pageQuery = graphql`
  query DataQuery($relativeDirectory: String! = "") {
    allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: $relativeDirectory }, name: { ne: "index" } }) {
      nodes {
        publicURL
        id
        name
      }
    }
  }
`;

export default IndexPage;
