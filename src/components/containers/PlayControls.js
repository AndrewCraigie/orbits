import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PlayButtonGroup from '../sketch/PlayButtonGroup';

import * as actions from "../../actions/orbitDefsActions";
import * as appActions from "../../actions/appSettingsActions";


export class PlayControls extends React.Component {

  constructor(props, context) {
    super(props, context);



  }


  render() {
    return (
      <div className="play-controls">
      <PlayButtonGroup
        appSettings={this.props.appSettings}
        play={this.props.play}
        stop={this.props.stop}
        goToStart={this.props.goToStart}
        goToEnd={this.props.goToEnd}/>
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
  goToEnd: PropTypes.func.isRequired
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
)(PlayControls);
