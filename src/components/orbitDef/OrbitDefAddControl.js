import React from 'react';
import PropTypes from 'prop-types';

const OrbitDefAddControl = ({ actions, settings }) => {

  let addOrbit = (e) => {
    //this.props.actions.saveFuelSavings(this.props.fuelSavings);
    actions.addNewOrbit(
      settings.defaultId1,
      settings.defaultId2
    );
  };

  return (
    <div className="orbit-add-controls">
      <button onClick={addOrbit}>Add</button>
    </div>
  );

};

export default OrbitDefAddControl;
