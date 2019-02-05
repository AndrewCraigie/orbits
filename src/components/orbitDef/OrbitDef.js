import React from 'react';
import PropTypes from 'prop-types';
import OrbitDefTextInput from './OrbitDefTextInput';
import OrbitDefIdInput from './OrbitDefIdInput';


// cX, cY, n, radius, phase, a, b, endX, endY

const OrbitDef = ({inputChange, deleteOrbit, actions,  orbitDef }) => {

  let __inputChange = (e) => {

    inputChange(
      orbitDef,
      e.target.name,
      e.target.value
    )

  };

  let deleteOrbitDef = (e) => {
    e.preventDefault();
    deleteOrbit(orbitDef);
  };


  return(
    <form
      id={'orbit-def-form-' + orbitDef.orbitDefId}
      className={'orbit-def-form'}
      onSubmit={deleteOrbitDef}
    >
      <p className="orbit-def-id">{orbitDef.orbitDefId}</p>
      <input type="submit" name="submit" defaultValue="-" />
      <OrbitDefIdInput name="orbitDefId" value={orbitDef.orbitDefId} onChange={__inputChange}/>
      <OrbitDefTextInput name="cX" value={orbitDef.cX} onChange={__inputChange} hidden={false}/>
      <OrbitDefTextInput name="cY" value={orbitDef.cY} onChange={__inputChange} hidden={false}/>
      <OrbitDefTextInput name="n" value={orbitDef.n} onChange={__inputChange} hidden={false}/>
      <OrbitDefTextInput name="r" value={orbitDef.r} onChange={__inputChange} hidden={false}/>
      <OrbitDefTextInput name="phase" value={orbitDef.phase} onChange={__inputChange} hidden={false}/>
      <OrbitDefTextInput name="a" value={orbitDef.a} onChange={__inputChange} hidden={false}/>
      <OrbitDefTextInput name="b" value={orbitDef.b} onChange={__inputChange} hidden={false}/>
      <OrbitDefTextInput name="fX" value={orbitDef.fX} onChange={__inputChange} hidden={false}/>
      <OrbitDefTextInput name="fY" value={orbitDef.fY} onChange={__inputChange} hidden={false}/>
      <OrbitDefTextInput name="endX" value={orbitDef.endX} onChange={__inputChange} hidden={false}/>
      <OrbitDefTextInput name="endY" value={orbitDef.endY} onChange={__inputChange} hidden={false}/>
    </form>
  );

};

OrbitDef.propTypes = {
  actions: PropTypes.object.isRequired,
  orbitDef: PropTypes.object.isRequired,
  deleteOrbit: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired
};

export default OrbitDef;

