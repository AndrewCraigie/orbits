import React from 'react';
import PropTypes from 'prop-types';


const OrbitDefAddControl = ({ addOrbit }) => {


  return (
    <div className="orbit-add-controls">
      <button
        className="btn btn-success playback-btn"
        onClick={addOrbit}>Add Orbit</button>
    </div>
  );

};

OrbitDefAddControl.propTypes = {
  addOrbit: PropTypes.func.isRequired,
};

export default OrbitDefAddControl;
