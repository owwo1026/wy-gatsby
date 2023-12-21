const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const data = await graphql(`
    query {
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
  data.data.allPortfolioJson.nodes.forEach(node => {
    createPage({
      path: `/portfolio/${node.id}`,
      component: path.resolve('./src/pages/portfolio/[uid].js'),
      context: {
        id: node.id,
        image: node.image,
        relativeDirectory: node.path,
      },
    });
  });
};
