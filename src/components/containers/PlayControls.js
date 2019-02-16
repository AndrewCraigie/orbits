import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PlayButtonGroup from '../sketch/PlayButtonGroup';
import TimeControls from '../orbitDef/TimeControls';

import * as actions from "../../actions/orbitDefsActions";
import * as appActions from "../../actions/appSettingsActions";


export class PlayControls extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onTimeChange = this.onTimeChange.bind(this);
    this.onIntervalChange = this.onIntervalChange.bind(this);
    this.onIterationsChange = this.onIterationsChange.bind(this);

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

  onIterationsChange(e){
    this.props.dispatch(appActions.iterationsChange(
      e.target.value
    ));
  }


  render() {
    return (
      <div className="play-controls row">
      <TimeControls
        onTimeChange={this.onTimeChange}
        onIterationsChange={this.onIterationsChange}
        onIntervalChange={this.onIntervalChange}
        appSettings={this.props.appSettings}
      />
      <PlayButtonGroup
        appSettings={this.props.appSettings}
        play={this.props.play}
        stop={this.props.stop}
        goToStart={this.props.goToStart}
        goToEnd={this.props.goToEnd}
        deleteCurve={this.props.deleteCurve}

      />
      </div>
    )
  }

}

PlayControls.propTypes = {
  appSettings: PropTypes.object.isRequired,
  orbitDefs: PropTypes.array.isRequired,
  play: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  goToStart: PropTypes.func.isRequired,
  goToEnd: PropTypes.func.isRequired,
  deleteCurve: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
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
)(PlayControls);
