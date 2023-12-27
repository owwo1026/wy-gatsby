import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby"

const WorkItem = (data) => {
  const { id, image, title, description, path } = data
  const myData = data
  return (
    <Link to={`${id}`} className="flex basis-1/2 flex-col hover:opacity-70 hover:duration-500 hover:text-neutral-500" state={{ myData }}>
      <div className="border-4 border-neutral-500/100 p-1">
        <GatsbyImage image={image} alt={title} />
        <div className="flex flex-col self-stretch pt-3 pl-2">
          <h3 className="font-display text-display-xs pb-4">{title}</h3>
          { description != "" && description != null &&
            <p className="text-body-lg font-light text-neutral-700">
              {description}
            </p>
          }
        </div>
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
