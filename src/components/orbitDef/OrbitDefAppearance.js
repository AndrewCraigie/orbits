import React from 'react';
import PropTypes from 'prop-types';
import OrbitDefColorInput from './OrbitDefColorInput';
import OrbitDefOpacityInput from './OrbitDefOpacityInput';
import OrbitDefStrokeWeightInput from './OrbitDefStrokeWeightInput';
import OrbitDefShowElement from './OrbitDefShowElement';


const OrbitDefAppearance = ({orbitDef, propPrefix, displayName, onChange, onChecked}) => {

  return (
    <div className="orbit-def-appearance col-12">
      <p className="appearance-control-group-name">{displayName}</p>
      <div className="form-row">
        <div className="col-3">
        <OrbitDefColorInput
          onChange={onChange}
          name={propPrefix.toLowerCase() + "Color"}
          displayName={"Color"}
          value={orbitDef[propPrefix.toLowerCase() + "Color"]}/>
        </div>
        <div className="col-3">
        <OrbitDefOpacityInput
          displayName={"Opacity"}
          onChange={onChange}
          name={propPrefix.toLowerCase() + "Opacity"}
          value={orbitDef[propPrefix.toLowerCase() + "Opacity"]}/>
        </div>
        <div className="col-3">
        <OrbitDefStrokeWeightInput
          displayName={"Width"}
          onChange={onChange}
          name={propPrefix.toLowerCase() + "StrokeWeight"}
          value={orbitDef[propPrefix.toLowerCase() + "StrokeWeight"]}/>
        </div>
        <div className="col-3">
          <OrbitDefShowElement
            name={propPrefix.toLowerCase() + "Show"}
            displayName={"Show"}
            value={propPrefix.toLowerCase() + "Show"}
            checked={orbitDef[propPrefix.toLowerCase() + "Show"]}
            onChecked={onChecked}
          />
        </div>

      </div>
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
