import React from 'react';
import PropTypes from 'prop-types';

const OrbitDefIdInput = ({name, value}) => {

  return (
    <input
      className="orbit-def-id-input"
      name={name}
      type="text"
      value={value}
      readOnly
      hidden
    />
  );

};

export default OrbitDefIdInput;
