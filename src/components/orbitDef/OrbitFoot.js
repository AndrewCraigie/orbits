import React from 'react';
import PropTypes from 'prop-types';


const OrbitFoot = ({appSettings}) => {

  return (
    <div className="orbit-foot">
      <div className="orbit-foot-end-controls">
        <label><span className="orbit-foot-endx-title">End X</span>
          <input
            type="text"
            name="endX"
            value={appSettings.endX}
          />
        </label>
        <label><span className="orbit-foot-endy-title">End Y</span>
          <input
            type="text"
            name="endY"
            value={appSettings.endY}
          />
        </label>
      </div>
    </div>
  )

};

OrbitFoot.propTypes = {
  appSettings: PropTypes.object.isRequired,
};

export default OrbitFoot;
