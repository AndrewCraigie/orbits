import React from 'react';
import PropTypes from 'prop-types';


const OrbitFoot = ({appSettings}) => {

  return (
    <div className="orbit-foot form-group">
      <div className="orbit-foot-end-controls">
        <label className="form-group row">
          <span className="col-sm-3 col-form-label label-xs">End X</span>
          <input
            type="text"
            name="endX"
            value={appSettings.endX}
          />
        </label>
        <label className="form-group row">
          <span className="col-sm-3 col-form-label label-xs">End Y</span>
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
