import React from 'react';
import PropTypes from 'prop-types';

import * as fValidator from '../../models/FunctionValidator';


export class OrbitDefFunctionInput extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      fValue: this.props.value,
      valid: true
    };
    this.prevFValue = this.props.value;

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus = (e) => {
    this.prevFValue = e.target.value;
  };

  onBlur = (e) => {
    if(!this.state.valid){
      e.target.value = this.prevFValue;
    }
  };


  onChange = (e) => {

    // Get the value
    const fValue = e.target.value;

    // Set state (allows text being entered to be seen by user)
    this.setState({
      fValue: fValue
    });

    // Check validity of the value
    const isValid = fValidator.validateFunction(e.target.value, this.props.orbitDef);

    this.setState({
      valid: isValid
    });

    //console.log(e.target.name + " is valid: " + isValid);

    // If valid call inputChange and pass to actions
    if(isValid){
      this.props.onChange(this.props.orbitDef, e.target.name, e.target.value );
    }

  };

  render() {
    return (
      <label className="form-group row">
        <span className="col-sm-3 col-form-label label-xs">{this.props.name}</span>
        <div className="col-sm-9">
          <input
            className={(this.state.valid) ? "form-control input-xs valid" : "form-control input-xs invalid"}
            name={this.props.name}
            type="text"
            value={this.state.fValue}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            hidden={this.props.hidden}
          />
        </div>
      </label>
    )
  }

}

OrbitDefFunctionInput.propTypes = {
  orbitDef: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired
};


export default OrbitDefFunctionInput;


