import React from "react";
import PropTypes from "prop-types";

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-row items-center gap-6 md:p-5 p-3 border border-primary-100">
      <img src={icon} width={36} height={36} alt={title} />
      <div className="flex flex-col gap-4 md:text-body-lg text-body-xs">
        {title}
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceItem;
