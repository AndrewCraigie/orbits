import React from 'react';
import PropTypes from 'prop-types';

const OrbitHead = ({appSettings, onCXChange, onCYChange}) => {

  return (
    <div className="orbit-head form-group">
      <label className="form-group row">
        <span className="col-sm-3 col-form-label label-xs">Start X</span>
        <div className="col-sm-9">
          <input
            className="form-control input-xs"
            type="number"
            step="1"
            name="cX"
            value={appSettings.cX}
            onChange={onCXChange}/>
        </div>
      </label>
      <label className="form-group row">
        <span className="col-sm-3 col-form-label label-xs">Start Y</span>
        <div className="col-sm-9">
          <input
            className="form-control input-xs"
            type="number"
            step="1"
            name="cY"
            value={appSettings.cY}
            onChange={onCYChange}/>
        </div>
      </label>
    </div>
  );

};

OrbitHead.propTypes = {
  appSettings: PropTypes.object.isRequired,
  onCXChange: PropTypes.func.isRequired,
  onCYChange: PropTypes.func.isRequired
};

export default OrbitHead;
