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

  }


  render(){
    return (
      <div className={'orbits-page'}>
        <OrbitDefsList actions={this.props.actions} orbitDefs={this.props.orbitDefs}/>
        <OrbitDefAddControl actions={this.props.actions} appSettings={this.props.appSettings} />
      </div>
      )
  }


}

OrbitsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appSettings: PropTypes.object.isRequired,
  orbitDefs: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    appSettings: state.appSettings,
    orbitDefs: state.orbitDefs,
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


