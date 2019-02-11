import React from 'react';
import PropTypes from 'prop-types';
import OrbitDefTabber from './OrbitDefTabber';


const OrbitDefsList = ({ inputChange, deleteOrbit, actions, appSettings, orbitDefs }) => {

  let orbitDefsElements = orbitDefs.map((orbDef, index) => {
    return (
      <OrbitDefTabber
        key={orbDef.orbitDefId}
        index={index}
        inputChange={inputChange}
        deleteOrbit={deleteOrbit}
        actions={actions}
        orbitDef={orbDef}/>
    )
  });

  return (
    <div className="orbits-defs-list">
      {orbitDefsElements}
    </div>
  )

};

OrbitDefsList.propTypes = {
  actions: PropTypes.object.isRequired,
  appSettings: PropTypes.object.isRequired,
  orbitDefs: PropTypes.array.isRequired,
  deleteOrbit: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired
};


export default  OrbitDefsList;
