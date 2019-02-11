import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import OrbitDefsList from '../orbitDef/OrbitDefsList';
import OrbitDefAddControl from '../orbitDef/OrbitDefAddControl';
import OrbitHead from '../orbitDef/OrbitHead';
import OrbitFoot from '../orbitDef/OrbitFoot';

import * as actions from "../../actions/orbitDefsActions";
import * as appActions from "../../actions/appSettingsActions";


export class OrbitDefsControls extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.addOrbit = this.addOrbit.bind(this);
    this.deleteOrbit = this.deleteOrbit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onIntervalChange = this.onIntervalChange.bind(this);
    this.onCXChange = this.onCXChange.bind(this);
    this.onCYChange = this.onCYChange.bind(this);

  }

  addOrbit(){
    // Using this because it seems to work
    // with 'thunk' ???
    this.props.dispatch(actions.addOrbitDef());
  }

  deleteOrbit(orbitDefToDelete){
    this.props.dispatch(actions.deleteOrbitDef(
      orbitDefToDelete
    ))
  }

  inputChange(orbitDef, propName, value){
    this.props.dispatch(actions.orbitDefInputChange(
      orbitDef,
      propName,
      value
    ))
  }

  onTimeChange(e){
    this.props.dispatch(appActions.timeChange(
      e.target.value
    ));
  }

  onIntervalChange(e) {
    this.props.dispatch(appActions.onIntervalChange(
      e.target.value
    ));
  }


  onCXChange(e){
    this.props.dispatch(appActions.cXChange(
      e.target.value
    ));
  }

  onCYChange(e){
    this.props.dispatch(appActions.cYChange(
      e.target.value
    ));
  }


  render(){
    return (
      <div className={'col orbits-page-left'}>
          <div className="orbits-controls">
            <div className="orbits-head-wrapper">
            <OrbitHead
              onTimeChange={this.onTimeChange}
              onIntervalChange={this.onIntervalChange}
              onCXChange={this.onCXChange}
              onCYChange={this.onCYChange}
              appSettings={this.props.appSettings}
            />
            </div>
            <OrbitDefsList
              inputChange={this.inputChange}
              deleteOrbit={this.deleteOrbit}
              actions={this.props.actions}
              appSettings={this.props.appSettings}
              orbitDefs={this.props.orbitDefs}/>
            <OrbitFoot appSettings={this.props.appSettings}/>
            <OrbitDefAddControl addOrbit={this.addOrbit} />
          </div>
      </div>
    )
  }


}

OrbitDefsControls.propTypes = {
  actions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired,
  appSettings: PropTypes.object.isRequired,
  orbitDefs: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    appSettings: state.appSettings,
    orbitDefs: state.orbitDefs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    appActions: bindActionCreators(appActions, dispatch),
    dispatch: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrbitDefsControls);


