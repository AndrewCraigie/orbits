import React from 'react';
import PropTypes from 'prop-types';

const OrbitDefAddControl = ({ actions, settings }) => {

  return (
    <div className="orbit-add-controls">
      <button onClick={actions.addNewOrbit(settings)}>Add</button>
    </div>
  );

};

export default OrbitDefAddControl;
