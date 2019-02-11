import React from 'react';
import PropTypes from 'prop-types';

import OrbitColorInput from '../sketch/OrbitColorInput';


const Orbit = ({inputChange, orbit }) => {

  let __inputChange = (e) => {
    inputChange(
      orbit,
      e.target.name,
      e.target.value
    )
  };


  return(
    <form
      id={'orbit-form-' + orbit.orbitDefId}
      className={'orbit-form'}
    >
      <p className="orbit-id">{orbit.orbitDefId}</p>
      <OrbitColorInput onChange={__inputChange} name="orbitColor"/>
    </form>
  );

};

Orbit.propTypes = {
  orbitDef: PropTypes.object.isRequired,
  orbit: PropTypes.object.isRequired,
  inputChange: PropTypes.func.isRequired
};

export default Orbit;

