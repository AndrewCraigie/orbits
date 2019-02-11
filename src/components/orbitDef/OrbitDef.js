import React from 'react';
import PropTypes from 'prop-types';
import OrbitDefTextInput from './OrbitDefTextInput';
import OrbitDefNumberInput from './OrbitDefNumberInput';
import OrbitDefIdInput from './OrbitDefIdInput';
import OrbitDefAppearance from './OrbitDefAppearance';
import OrbitDefPenAppearance from './OrbitDefPenAppearance';
import OrbitDefNumberDelete from './OrbitDefNumberDelete';

// cX, cY, n, radius, phase, a, b, endX, endY

const OrbitDef = ({index, inputChange, deleteOrbit, orbitDef}) => {


  let __inputChange = (e) => {

    inputChange(
      orbitDef,
      e.target.name,
      e.target.value
    )

  };

  let __checkChange = (e) => {
    inputChange(
      orbitDef,
      e.target.name,
      e.target.checked
    )
  };

  let deleteOrbitDef = (e) => {
    e.preventDefault();
    deleteOrbit(orbitDef);
  };


  return (
    <form
      id={'orbit-def-form-' + orbitDef.orbitDefId}
      className={'orbit-def-form'}
    >
      <div className="orbit-def-controls-left form-group">
        <OrbitDefIdInput name="orbitDefId" value={orbitDef.orbitDefId} onChange={__inputChange}/>
        <OrbitDefNumberInput name="cX"  value={orbitDef.cX} onChange={__inputChange} hidden={true} readonly/>
        <OrbitDefNumberInput name="cY" value={orbitDef.cY} onChange={__inputChange} hidden={true} readonly/>
        <OrbitDefNumberDelete name="n" index={index} deleteFunc={deleteOrbitDef} value={orbitDef.n} onChange={__inputChange} hidden={false}/>
        <OrbitDefNumberInput name="r" value={orbitDef.r} onChange={__inputChange} hidden={false}/>
        <OrbitDefNumberInput name="phase" value={orbitDef.phase} onChange={__inputChange} hidden={false}/>
        <OrbitDefNumberInput name="a" value={orbitDef.a} onChange={__inputChange} hidden={false}/>
        <OrbitDefNumberInput name="b" value={orbitDef.b} onChange={__inputChange} hidden={false}/>
        <OrbitDefTextInput name="fX" value={orbitDef.fX} onChange={__inputChange} hidden={false}/>
        <OrbitDefTextInput name="fY" value={orbitDef.fY} onChange={__inputChange} hidden={false}/>
        <OrbitDefNumberInput name="endX" value={orbitDef.endX} onChange={__inputChange} hidden={false} readonly/>
        <OrbitDefNumberInput name="endY" value={orbitDef.endY} onChange={__inputChange} hidden={false} readonly/>
      </div>
      <div className="orbit-def-controls-right">
        <OrbitDefAppearance displayName={"Orbit"}
                            orbitDef={orbitDef}
                            propPrefix={"Orbit"}
                            onChange={__inputChange}
                            onChecked={__checkChange}/>
        <OrbitDefAppearance displayName={"Arm"}
                            orbitDef={orbitDef}
                            propPrefix={"Arm"}
                            onChange={__inputChange}
                            onChecked={__checkChange}/>
        <OrbitDefAppearance displayName={"Curve"}
                            orbitDef={orbitDef}
                            propPrefix={"Curve"}
                            onChange={__inputChange}
                            onChecked={__checkChange}/>
        <OrbitDefPenAppearance displayName={"Pen"}
                               orbitDef={orbitDef}
                               propPrefix={"Pen"}
                               onChange={__inputChange}
                               onChecked={__checkChange}/>
      </div>
    </form>
  );

};

OrbitDef.propTypes = {
  index: PropTypes.number.isRequired,
  inputChange: PropTypes.func.isRequired,
  deleteOrbit: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  orbitDef: PropTypes.object.isRequired
};

export default OrbitDef;

