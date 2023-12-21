import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby"

const WorkItem = (data) => {
  const { id, image, title, description, path } = data
  const myData = data
  console.log('key', path)
  return (
    <Link to={`${id}`} className="flex basis-1/2 flex-col" state={{ myData }}>
      <GatsbyImage image={image} alt={title} />
      <div className="flex flex-col self-stretch pt-6">
        <h3 className="font-display text-display-sm pb-4">{title}</h3>
        <p className="text-body-lg font-light text-neutral-700">
          {description}
        </p>
      </div>
    </Link>
  );
};

WorkItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WorkItem;
