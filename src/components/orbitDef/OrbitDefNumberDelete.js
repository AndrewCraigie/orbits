import React from 'react';
import PropTypes from 'prop-types';

const OrbitDefNumberDelete = ({name, index, deleteFunc, value, onChange, hidden}) => {

  const deleteBtn = () => {
    if(index != 0){
      return (
        <input type="button" className="btn btn-danger btn-sm delete-orb-def-btn" name="delete" defaultValue="X"
               onClick={deleteFunc}/>
      )
    } else {
      return null;
    }
  };

  return (
    <label className={"form-group row" +  ((hidden) ? " hidden-true": "")}>
      <span className="col-sm-3 col-form-label label-xs">{name}</span>
      <div className={"col-sm-7"}>
        <input
          className={"form-control input-xs"}
          name={name}
          type="number"
          value={value}
          onChange={onChange}
          hidden={hidden}
        />
      </div>
      <div className={"col-sm-2"}>
        {deleteBtn()}
      </div>
    </label>
  );

};

OrbitDefNumberDelete.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired
};

export default OrbitDefNumberDelete;
