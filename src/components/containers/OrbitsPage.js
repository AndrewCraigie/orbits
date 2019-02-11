import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import OrbitDefsControls from './OrbitDefsControls';
import SketchControls from './SketchControls';

import * as actions from "../../actions/orbitDefsActions";
import * as appActions from "../../actions/appSettingsActions";


export class OrbitsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <div className="row orbits-page">
        <div className="col-3">
          <OrbitDefsControls
            appSettings={this.props.appSettings}
            actions={this.props.actions}
            appActions={this.props.appActions}
            orbitDefs={this.props.orbitDefs}
            dispatch={this.props.dispatch}
          />
        </div>
        <div className={"col-9 ml-auto"}>
          <SketchControls
            appSettings={this.props.appSettings}
            appActions={this.props.appActions}
            orbitDefs={this.props.orbitDefs}
            dispatch={this.props.dispatch}
          />
        </div>
      </div>
    )
  }

}

OrbitsPage.propTypes = {
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
)(OrbitsPage);


