import React from 'react';
import PropTypes from 'prop-types';
import OrbitDefColorInput from './OrbitDefColorInput';
import OrbitDefOpacityInput from './OrbitDefOpacityInput';
import OrbitDefStrokeWeightInput from './OrbitDefStrokeWeightInput';
import OrbitDefShowElement from './OrbitDefShowElement';


const OrbitDefAppearance = ({orbitDef, propPrefix, displayName, onChange, onChecked}) => {

  return (
    <div className="orbit-def-appearance">
      <fieldset className="orbit-label-title">
        <legend>{displayName}</legend>
        <OrbitDefColorInput
          onChange={onChange}
          name={propPrefix.toLowerCase() + "Color"}
          displayName={"Color"}
          value={orbitDef[propPrefix.toLowerCase() + "Color"]}/>
        <OrbitDefOpacityInput
          displayName={"Opacity"}
          onChange={onChange}
          name={propPrefix.toLowerCase() + "Opacity"}
          value={orbitDef[propPrefix.toLowerCase() + "Opacity"]}/>
        <OrbitDefStrokeWeightInput
          displayName={"Stroke Weight"}
          onChange={onChange}
          name={propPrefix.toLowerCase() + "StrokeWeight"}
          value={orbitDef[propPrefix.toLowerCase() + "StrokeWeight"]}/>
          <OrbitDefShowElement
            name={propPrefix.toLowerCase() + "Show"}
            displayName={propPrefix.toLowerCase() + "Show"}
            value={propPrefix.toLowerCase() + "Show"}
            checked={orbitDef[propPrefix.toLowerCase() + "Show"]}
            onChecked={onChecked}
          />
      </fieldset>
    </div>
  );

};

OrbitDefAppearance.propTypes = {
  orbitDef: PropTypes.object.isRequired,
  propPrefix: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired
};

export default OrbitDefAppearance;
