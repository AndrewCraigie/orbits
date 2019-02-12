import React from 'react';
import PropTypes from 'prop-types';

import OrbitDefStrokeWeightInput from './OrbitDefStrokeWeightInput';
import OrbitDefShowElement from './OrbitDefShowElement';

const OrbitDefPenAppearance = ({orbitDef, propPrefix, displayName, onChange, onChecked}) => {

  return (
    <div className="orbit-def-appearance col-12">

        <p className="appearance-control-group-name">{displayName}</p>
      <div className="form-row">
        <div className="col-3">
        <OrbitDefStrokeWeightInput
          displayName={"Pen Size"}
          onChange={onChange}
          name={propPrefix.toLowerCase() + "Size"}
          value={orbitDef[propPrefix.toLowerCase() + "Size"]}/>
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

OrbitDefPenAppearance.propTypes = {
  orbitDef: PropTypes.object.isRequired,
  propPrefix: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired
};

export default OrbitDefPenAppearance;
