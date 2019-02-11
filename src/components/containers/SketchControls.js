import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SketchCanvas from '../sketch/SketchCanvas';


import * as actions from "../../actions/orbitDefsActions";
import * as appActions from "../../actions/appSettingsActions";


export class SketchControls extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.updateAnimationState = this.updateAnimationState.bind(this);

  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  updateAnimationState(){
    // Change some state here

    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }


  render() {
    return (
      <div className="sketch-area">
        <SketchCanvas
          appSettings={this.props.appSettings}
          orbitDefs={this.props.orbitDefs}
        />
      </div>
    )
  }

}

SketchControls.propTypes = {
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
)(SketchControls);
