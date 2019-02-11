import React from 'react';
import PropTypes from 'prop-types';

const OrbitDefNumberInput = ({name, value, onChange, hidden}) => {

  return (
    <label className={"form-group row" +  ((hidden) ? " hidden-true": "")}>
      <span className="col-sm-3 col-form-label label-xs">{name}</span>
      <div className={"col-sm-9"}>
      <input
        className={"form-control input-xs" + (name === "n" ? " number-input-narrow" : "")}
        name={name}
        type="number"
        value={value}
        onChange={onChange}
        hidden={hidden}
      />
      </div>
    </label>
  );

};

OrbitDefNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired
};

export default OrbitDefNumberInput;
