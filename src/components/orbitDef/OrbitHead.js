import React from 'react';
import PropTypes from 'prop-types';

const OrbitHead = ({appSettings, onTimeChange, onIntervalChange, onCXChange, onCYChange}) => {

  return (
    <div className="orbit-head">

      <label><span className="orbit-head-t-title">Time</span>
        <input
          type="number"
          step="0.01"
          name="currentT"
          value={appSettings.currentT}
          onChange={onTimeChange}/>
      </label>
      <label><span className="orbit-head-interval-title">Interval</span>
        <input
          type="number"
          step="0.001"
          name="interval"
          value={appSettings.interval}
          onChange={onIntervalChange}/>
      </label>
      <label><span className="orbit-head-c-title">Start X</span>
        <input
          type="number"
          step="1"
          name="cX"
          value={appSettings.cX}
          onChange={onCXChange}/>
      </label>
      <label><span className="orbit-head-c-title">Start Y</span>
        <input
          type="number"
          step="1"
          name="cY"
          value={appSettings.cY}
          onChange={onCYChange}/>
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
