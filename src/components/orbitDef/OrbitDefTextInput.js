import React from 'react';
import PropTypes from 'prop-types';

const OrbitDefTextInput = ({name, value, onChange, hidden}) => {

  return (
    <label className="orbit-def-input-label">
      <span className="orbit-def-label-title">{name}</span>
    <input
      className="orbit-def-text-input"
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      hidden={hidden}
      />
    </label>
  );

};

OrbitDefTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired
};

export default OrbitDefTextInput;
