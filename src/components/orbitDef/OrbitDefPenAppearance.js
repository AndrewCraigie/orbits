import React from 'react';
import PropTypes from 'prop-types';

import OrbitDefStrokeWeightInput from './OrbitDefStrokeWeightInput';
import OrbitDefShowElement from './OrbitDefShowElement';

const OrbitDefPenAppearance = ({orbitDef, propPrefix, displayName, onChange, onChecked}) => {

  return (
    <div className="orbit-def-appearance">
      <fieldset className="orbit-label-title">
        <legend>{displayName}</legend>
        <OrbitDefStrokeWeightInput
          displayName={"Pen Size"}
          onChange={onChange}
          name={propPrefix.toLowerCase() + "Size"}
          value={orbitDef[propPrefix.toLowerCase() + "Size"]}/>
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

OrbitDefPenAppearance.propTypes = {
  orbitDef: PropTypes.object.isRequired,
  propPrefix: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired
};

export default OrbitDefPenAppearance;
