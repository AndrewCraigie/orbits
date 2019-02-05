import React from 'react';
import PropTypes from 'prop-types';


const OrbitDefAddControl = ({ addOrbit }) => {


  return (
    <div className="orbit-add-controls">
      <button className="orbit-add-button" onClick={addOrbit}>Add</button>
    </div>
  );

};

OrbitDefAddControl.propTypes = {
  addOrbit: PropTypes.func.isRequired,
};

export default OrbitDefAddControl;
