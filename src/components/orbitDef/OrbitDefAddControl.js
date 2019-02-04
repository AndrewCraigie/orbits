import React from 'react';
import PropTypes from 'prop-types';
import { generateId } from '../../utils/generateId';

const OrbitDefAddControl = ({ actions, settings }) => {

  let addOrbit = () => {
    //this.props.actions.saveFuelSavings(this.props.fuelSavings);
    actions.addNewOrbit(
      settings.defaultId1,
      settings.defaultId2,
      generateId
    );
  };

  return (
    <div className="orbit-add-controls">
      <button className="orbit-add-button" onClick={addOrbit}>Add</button>
    </div>
  );

};

OrbitDefAddControl.propTypes = {
  actions: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

export default OrbitDefAddControl;
