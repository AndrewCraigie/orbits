import React from 'react';
import PropTypes from 'prop-types';

const OrbitDefColorInput = ({name, displayName, value, onChange}) => {

  return (
    <label className="orbit-input-label">
      <span className="orbit-label-title col-form-label label-app-xs">{displayName}</span>
      <input
        className="form-control input-xs number-input-x-narrow"
        name={name}
        type="color"
        value={value}
        onChange={onChange}
      />
    </label>
  );

};

OrbitDefColorInput.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OrbitDefColorInput;
