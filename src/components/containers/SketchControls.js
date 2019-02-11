import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SketchCanvas from '../sketch/SketchCanvas';
import PlayControls from './PlayControls';
import * as actions from "../../actions/orbitDefsActions";
import * as appActions from "../../actions/appSettingsActions";


export class SketchControls extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      animating: false
    };

    this.updateAnimationState = this.updateAnimationState.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.goToStart = this.goToStart.bind(this);
    this.goToEnd = this.goToEnd.bind(this);

    this.incrementTime = this.incrementTime.bind(this);

  }

  play(){
    this.setState({animating: true});
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  stop(){
    this.setState({animating: false});
    cancelAnimationFrame(this.rAF);
  }

  goToStart(){
    console.log("Go To Start");
  }

  goToEnd(){
    console.log("Go To End");
  }

  componentDidMount() {


  }

  componentWillUnmount() {

    if(this.state.animating){
      cancelAnimationFrame(this.rAF);
    }

  }

  incrementTime(){
    this.props.dispatch(appActions.incrementTime());
  }

  updateAnimationState(){

    if(this.state.animating){

      // increment appSettings currentT
      this.incrementTime();

      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  }


  render() {
    return (
      <div className="sketch-area">
        <SketchCanvas
          appSettings={this.props.appSettings}
          animating={this.state.animating}
          orbitDefs={this.props.orbitDefs}
        />
        <PlayControls
          appSettings={this.props.appSettings}
          orbitDefs={this.props.orbitDefs}
          play={this.play}
          stop={this.stop}
          goToStart={this.goToStart}
          goToEnd={this.goToEnd}
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
