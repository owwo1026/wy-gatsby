import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Top = () => {
  const data = useStaticQuery(graphql`
    {
      heroimage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 5120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div>
      <div className="relative">
        <GatsbyImage image={getImage(data.heroimage)} alt="Interior Design" />
      </div>
    </div>
  );
};

export default Top;
