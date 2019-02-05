import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import OrbitDefsList from '../orbitDef/OrbitDefsList';
import OrbitDefAddControl from '../orbitDef/OrbitDefAddControl';
import * as actions from "../../actions/orbitDefsActions";


export class OrbitsPage extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.addOrbit = this.addOrbit.bind(this);
    this.deleteOrbit = this.deleteOrbit.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  addOrbit(){
    // Using this because it seems to work
    // with 'thunk' ???
    this.props.dispatch(actions.addOrbitDef(this.props.appSettings, this.props.orbitDefs));
  }

  deleteOrbit(orbitDefToDelete){
    this.props.dispatch(actions.deleteOrbitDef(
      this.props.appSettings,
      this.props.orbitDefs,
      orbitDefToDelete
      ))
  }

  inputChange(orbitDef, propName, value){
    this.props.dispatch(actions.orbitDefInputChange(
      this.props.appSettings,
      this.props.orbitDefs,
      orbitDef,
      propName,
      value
    ))
  }


  render(){
    return (
      <div className={'orbits-page'}>
        <OrbitDefsList inputChange={this.inputChange} deleteOrbit={this.deleteOrbit} actions={this.props.actions} appSettings={this.props.appSettings} orbitDefs={this.props.orbitDefs}/>
        <OrbitDefAddControl addOrbit={this.addOrbit} />
      </div>
      )
  }


}

OrbitsPage.propTypes = {
  actions: PropTypes.object.isRequired,
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
    dispatch: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(OrbitsPage);


