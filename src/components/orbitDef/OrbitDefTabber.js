import React from 'react';
import PropTypes from 'prop-types';

import OrbitDefNumberInput from './OrbitDefNumberInput';
import OrbitDefIdInput from './OrbitDefIdInput';
import OrbitDefAppearance from './OrbitDefAppearance';
import OrbitDefPenAppearance from './OrbitDefPenAppearance';
import OrbitDefNumberDelete from './OrbitDefNumberDelete';
import {OrbitDefFunctionInput} from './OrbitDefFunctionInput';

import SettingsIcon from '../icons/SettingsIcon';
import PaletteIcon from '../icons/PaletteIcon';

import * as display from '../../constants/orbDefDisplay';

export class OrbitDefTabber extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.state = {
      display: display.SETTINGS
    };

    this.inputChange = this.inputChange.bind(this);
    this.checkChange = this.checkChange.bind(this);
    this.deleteOrbitDef = this.deleteOrbitDef.bind(this);
    this.showSettings = this.showSettings.bind(this);
    this.showAppearance = this.showAppearance.bind(this);
    this.funcChange = this.funcChange.bind(this);
  }

  inputChange(e) {
    this.props.inputChange(
      this.props.orbitDef,
      e.target.name,
      e.target.value
    )
  }

  funcChange(orbitDef, fName, fValue){
    this.props.inputChange(
      orbitDef,
      fName,
      fValue
    )
  }


  checkChange(e){
    this.props.inputChange(
      this.props.orbitDef,
      e.target.name,
      e.target.checked
    )
  }

  deleteOrbitDef(e){
    e.preventDefault();
    this.props.deleteOrbit(this.props.orbitDef);
  }

  showSettings(){
    this.setState({
      display: display.SETTINGS
    })
  }

  showAppearance(){
    this.setState({
      display: display.APPEARANCE
    })
  }

  render() {

    const orbitDef = this.props.orbitDef;

    const controlsLeft = (
      <div className="orbit-def-controls-left form-group">
        <div
          className={"orbit-def-settings-back"}>

        <OrbitDefIdInput name="orbitDefId" value={orbitDef.orbitDefId} onChange={this.inputChange}/>
        <OrbitDefNumberInput name="cX"  value={orbitDef.cX} onChange={this.inputChange} hidden={true} readonly/>
        <OrbitDefNumberInput name="cY" value={orbitDef.cY} onChange={this.inputChange} hidden={true} readonly/>
        <OrbitDefNumberDelete name="n"
                              index={this.props.index}
                              deleteFunc={this.deleteOrbitDef}
                              value={orbitDef.n}
                              onChange={this.inputChange}
                              hidden={false}/>
        <OrbitDefNumberInput name="r" value={orbitDef.r} onChange={this.inputChange} hidden={false}/>
        <OrbitDefNumberInput name="phase" value={orbitDef.phase} onChange={this.inputChange} hidden={false}/>
        <OrbitDefNumberInput name="a" value={orbitDef.a} onChange={this.inputChange} hidden={false}/>
        <OrbitDefNumberInput name="b" value={orbitDef.b} onChange={this.inputChange} hidden={false}/>
        <OrbitDefFunctionInput name="fX" orbitDef={orbitDef} value={orbitDef.fX} onChange={this.funcChange} hidden={false}/>
        <OrbitDefFunctionInput name="fY" orbitDef={orbitDef} value={orbitDef.fY} onChange={this.funcChange} hidden={false}/>
        <OrbitDefNumberInput name="endX" value={orbitDef.endX} onChange={this.inputChange} hidden={false} readonly/>
        <OrbitDefNumberInput name="endY" value={orbitDef.endY} onChange={this.inputChange} hidden={false} readonly/>

        </div>
      </div>
    );

    const controlsRight = (
      <div className="orbit-def-controls-right">
        <div className="orbit-def-palette-back">
        <OrbitDefAppearance
          displayName={"Orbit"}
          orbitDef={orbitDef}
          propPrefix={"Orbit"}
          onChange={this.inputChange}
          onChecked={this.checkChange}/>
        <OrbitDefAppearance
          displayName={"Arm"}
          orbitDef={orbitDef}
          propPrefix={"Arm"}
          onChange={this.inputChange}
          onChecked={this.checkChange}/>
        <OrbitDefAppearance
          displayName={"Curve"}
          orbitDef={orbitDef}
          propPrefix={"Curve"}
          onChange={this.inputChange}
          onChecked={this.checkChange}/>
        <OrbitDefPenAppearance
          displayName={"Pen"}
          orbitDef={orbitDef}
          propPrefix={"Pen"}
          onChange={this.inputChange}
          onChecked={this.checkChange}/>
        </div>
      </div>
    );


    return (
      <form
        id={'orbit-def-form-' + orbitDef.orbitDefId}
        className={'orbit-def-form'}
      >
        <div className="tabber-btns ">
          <div
            className={(this.state.display === display.SETTINGS) ? "tabber-settings tabber-active" : "tabber-settings"}
            onClick={this.showSettings}>
            <SettingsIcon/>
          </div>
          <div className={(this.state.display === display.APPEARANCE) ? "tabber-appearance tabber-active" : "tabber-appearance"} onClick={this.showAppearance}>
            <PaletteIcon/>
          </div>
        </div>
        {((this.state.display === display.SETTINGS) || (this.state.display === display.BOTH)) ? controlsLeft : null}
        {((this.state.display === display.APPEARANCE) || (this.state.display === display.BOTH)) ? controlsRight : null}
      </form>
    )
  }

}

OrbitDefTabber.propTypes = {
  index: PropTypes.number.isRequired,
  inputChange: PropTypes.func.isRequired,
  deleteOrbit: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  orbitDef: PropTypes.object.isRequired
};


export default OrbitDefTabber;


