import React from 'react';
import PropTypes from 'prop-types';

const OrbitHead = ({appSettings, onTimeChange, onIntervalChange, onCXChange, onCYChange}) => {

  return (
    <div className="orbit-head form-group">
      <label className="form-group row">
        <span className="col-sm-3 col-form-label label-xs">Time</span>
        <div className="col-sm-9">
          <input
            className="form-control input-xs"
            type="number"
            step="0.01"
            name="currentT"
            value={appSettings.currentT}
            onChange={onTimeChange}/>
        </div>
      </label>
      <label className="form-group row">
        <span className="col-sm-3 col-form-label label-xs">Interval</span>
        <div className="col-sm-9">
          <input
            className="form-control input-xs"
            type="number"
            step="0.001"
            name="interval"
            value={appSettings.interval}
            onChange={onIntervalChange}/>
        </div>
      </label>
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
        <span className="col-sm-3 col-form-label label-xs">Start X</span>
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
  onTimeChange: PropTypes.func.isRequired,
  onIntervalChange: PropTypes.func.isRequired,
  onCXChange: PropTypes.func.isRequired,
  onCYChange: PropTypes.func.isRequired
};

export default OrbitHead;
