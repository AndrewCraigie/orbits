import React from 'react';
import PropTypes from 'prop-types';
import OrbitDef from './OrbitDef';

const OrbitDefsList = ({ actions, orbitDefs }) => {

  let orbitDefsElements = orbitDefs.map(orbDef => {
    return (
      <OrbitDef key={orbDef.orbitDefId} actions={actions} orbitDef={orbDef}/>
    )
  });

  return (
    <div>
      {orbitDefsElements}
    </div>
  )

};

OrbitDefsList.propTypes = {
  actions: PropTypes.object.isRequired,
  orbitDefs: PropTypes.array.isRequired

};

export default  OrbitDefsList;