import React from 'react';
import PropTypes from 'prop-types';


const OrbitDefAddControl = ({ actions, appSettings }) => {

  let addOrbit = () => {
    //this.props.actions.saveFuelSavings(this.props.fuelSavings);
    actions.addNewOrbit(appSettings.defaultOrbit);
  };

  return (
    <div className="orbit-add-controls">
      <button className="orbit-add-button" onClick={addOrbit}>Add</button>
    </div>
  );

};

OrbitDefAddControl.propTypes = {
  actions: PropTypes.object.isRequired,
  appSettings: PropTypes.object.isRequired
};

export default OrbitDefAddControl;
