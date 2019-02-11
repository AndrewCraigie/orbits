import React from 'react';
import PropTypes from 'prop-types';

const OrbitColorInput = ({name, value, onChange}) => {

  return (
    <label className="orbit-input-label">
      <span className="orbit-label-title">{name}</span>
      <input
        className="orbit-text-input"
        name={name}
        type="color"
        value={value}
        onChange={onChange}
      />
    </label>
  );

};

OrbitColorInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
};

export default OrbitColorInput;
