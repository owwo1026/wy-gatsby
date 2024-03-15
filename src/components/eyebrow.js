import React from "react";
import PropTypes from "prop-types";

const Eyebrow = ({ label }) => {
  return (
    <div className="flex flex-row items-center opacity-80">
      <hr className="w-16 text-primary-600 hidden xl:block"></hr>
      <p className="text-body-lg font-semibold tracking-widest text-primary-600 xl:pl-4">
        {label}
      </p>
    </div>
  );
};

Eyebrow.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Eyebrow;
