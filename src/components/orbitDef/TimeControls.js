import React from 'react';
import PropTypes from 'prop-types';

const TimeControls = ({appSettings, onTimeChange, onIntervalChange, onIterationsChange}) => {

  return (
    <div className="col-4">
    <div className="play-time-controls row form-group">
      <div className="col-6 no-gutters">
      <label className="form-group row">
        <span className="col-sm-3 col-form-label label-xs-time">Time</span>
        <div className="col-sm-9">
          <input
            className="form-control input-xs-time"
            type="number"
            step="0.01"
            name="currentT"
            value={appSettings.currentT}
            onChange={onTimeChange}/>
        </div>
      </label>
      <label className="form-group row">
        <span className="col-sm-3 col-form-label label-xs-time">Interval</span>
        <div className="col-sm-9">
          <input
            className="form-control input-xs-time"
            type="number"
            step="0.001"
            name="interval"
            value={appSettings.interval}
            onChange={onIntervalChange}/>
        </div>
      </label>
      </div>
      <div className="col-6 no-gutters">
      <label className="form-group row ">
        <span className="col-sm-3 col-form-label label-xs-time">Iterations</span>
        <div className="col-sm-9">
          <input
            className="form-control input-xs-time"
            type="number"
            step="0.001"
            name="interval"
            value={appSettings.iterations}
            onChange={onIterationsChange}/>
        </div>
      </label>
        <label className="form-group row ">
          <span className="col-sm-3 col-form-label label-xs-time">Current</span>
          <div className="col-sm-9">
            <p
              className="form-control input-xs-time current-iteration"
            >
              {appSettings.currentIteration}
            </p>
          </div>
        </label>
      </div>
    </div>
    </div>
  );

};

TimeControls.propTypes = {
  appSettings: PropTypes.object.isRequired,
  onTimeChange: PropTypes.func.isRequired,
  onIntervalChange: PropTypes.func.isRequired,
  onIterationsChange: PropTypes.func.isRequired,

};

export default TimeControls;
