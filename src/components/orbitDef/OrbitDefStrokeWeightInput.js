import React from 'react';
import PropTypes from 'prop-types';


const OrbitDefStrokeWeightInput = ({name, displayName, value, onChange}) => {

  return (
    <label className="orbit-input-label">
      <span className="orbit-label-title col-form-label label-app-xs">{displayName}</span>
      <input
        className="form-control input-xs number-input-x-narrow"
        name={name}
        type="number"
        min="0.0"
        max="20.0"
        step="0.01"
        value={value}
        onChange={onChange}
      />
    </label>
  );

};

OrbitDefStrokeWeightInput.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
};

export default OrbitDefStrokeWeightInput;
