import React from 'react';
import PropTypes from 'prop-types';
import OrbitDefTextInput from './OrbitDefTextInput';
import OrbitDefIdInput from './OrbitDefIdInput';


// cX, cY, n, radius, phase, a, b, endX, endY

const OrbitDef = ({ actions,  orbitDef }) => {

  let inputChange = (e) => {
    //this.props.actions.saveFuelSavings(this.props.fuelSavings);
    actions.orbitDefInputChange(
      orbitDef,
      e.target.name,
      e.target.value
      );
  };

  let deleteOrbitDef = (e) => {
    e.preventDefault();
    actions.deleteOrbitDef(
      orbitDef
    )
  };


  return(
    <form
      id={'orbit-def-form-' + orbitDef.orbitDefId}
      className={'orbit-def-form'}
      onSubmit={deleteOrbitDef}
    >
      <input type="submit" name="submit" defaultValue="-"/>
      <OrbitDefIdInput name="orbitDefId" value={orbitDef.orbitDefId}/>
      <OrbitDefTextInput name="n" value={orbitDef.n} onChange={inputChange} hidden={false}/>
      <OrbitDefTextInput name="cX" value={orbitDef.cX} onChange={inputChange} hidden={false}/>
      <OrbitDefTextInput name="cY" value={orbitDef.cY} onChange={inputChange} hidden={false}/>
      <OrbitDefTextInput name="r" value={orbitDef.r} onChange={inputChange} hidden={false}/>
      <OrbitDefTextInput name="phase" value={orbitDef.phase} onChange={inputChange} hidden={false}/>
      <OrbitDefTextInput name="a" value={orbitDef.a} onChange={inputChange} hidden={false}/>
      <OrbitDefTextInput name="b" value={orbitDef.b} onChange={inputChange} hidden={false}/>
      <OrbitDefTextInput name="endX" value={orbitDef.endX} onChange={inputChange} hidden={false}/>
      <OrbitDefTextInput name="endY" value={orbitDef.endY} onChange={inputChange} hidden={false}/>
    </form>
  );

};

OrbitDef.propTypes = {
  orbitDef: PropTypes.object.isRequired
};

export default OrbitDef;

