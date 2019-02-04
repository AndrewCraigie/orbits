import React from 'react';
import PropTypes from 'prop-types';

const OrbitDefTextInput = ({name, value, onChange, hidden}) => {

  return (
    <label className="orbit-def-input-label">
      {name}:
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

export default OrbitDefTextInput;
