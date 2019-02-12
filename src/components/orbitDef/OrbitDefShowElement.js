import React from 'react';
import PropTypes from 'prop-types';


const OrbitDefShowElement = ({name, displayName, value, checked, onChecked}) => {

  return (
    <label className="orbit-input-label">
      <span className="orbit-label-title col-form-label label-app-xs">{displayName}</span>
      <input
        className="form-check show-check"
        type="checkbox"
        name={name}
        value={value}
        onChange={onChecked}
        checked={checked}
      />
    </label>
  );

};

OrbitDefShowElement.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChecked: PropTypes.func.isRequired,
};

export default OrbitDefShowElement;
