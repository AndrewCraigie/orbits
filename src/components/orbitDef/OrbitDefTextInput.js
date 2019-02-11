import React from 'react';
import PropTypes from 'prop-types';

const OrbitDefTextInput = ({name, value, onChange, hidden}) => {

  return (
    <label className="form-group row">
      <span className="col-sm-3 col-form-label label-xs">{name}</span>
      <div className="col-sm-9">
    <input
      className="form-control input-xs"
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      hidden={hidden}
      />
      </div>
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
