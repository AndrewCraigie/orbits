import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import OrbitDefsList from '../orbitDef/OrbitDefsList';
import OrbitDefAddControl from '../orbitDef/OrbitDefAddControl';
import * as actions from "../../actions/orbitsSettingsActions";


export class OrbitsPage extends React.Component{



  render(){
    return (
      <div className={'orbit-page'}>
        <p>Placeholder</p>
        <OrbitDefsList actions={this.props.actions} orbitDefs={this.props.orbitsSettings.orbitDefs}/>
        <OrbitDefAddControl actions={this.props.actions} settings={this.props.orbitsSettings}/>
      </div>
      )
  }


}

OrbitsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  orbitsSettings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    orbitsSettings: state.orbitsSettings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(OrbitsPage);


