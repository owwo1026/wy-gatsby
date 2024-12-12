import React from 'react';
import PropTypes from 'prop-types';

const Eyebrow = ({ label }) => {
  return (
    <div className="flex flex-row items-center">
      <hr className="w-16 text-primary-600 hidden md:block"></hr>
      <p className="text-body-md md:text-body-lg font-semibold tracking-widest text-primary-600 md:pl-4">{label}</p>
    </div>
  );
};

Eyebrow.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Eyebrow;
