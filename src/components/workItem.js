import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby"

const WorkItem = (data) => {
  const { id, image, title, description } = data
  const className = "flex flex-col p-4 hover:opacity-70 hover:duration-500 hover:text-neutral-500 "
  const mdClass = "lg:p-16 md:w-5/12 md:p-6 md:h-fit md:basis-1/2 md:even:relative md:even:transform md:even:translate-y-1/3"
  return (
    <Link
      to={`${id}`}
      className={className + mdClass}
      // state={{ myData: data }}
    >
      <div className="rounded border-2 border-neutral-500/100 p-1">
        <GatsbyImage image={getImage(image)} alt="WY Design" />
        <div className="flex flex-col self-stretch py-3 px-2">
          <p className="flex justify-center text-body-xl tracking-widest pl-4">{title}</p>
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
