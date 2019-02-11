import React from 'react';
import PropTypes from 'prop-types';


const PlayButtonGroup = ({appSettings, play, stop,  goToStart, goToEnd}) => {

  return (
    <div className="play-button-group">
      <button onClick={goToStart}>Start</button>
      <button onClick={play}>Play</button>
      <button onClick={stop}>Stop</button>
      <button onClick={goToEnd}>End</button>
    </div>
  )

};

PlayButtonGroup.propTypes = {
  appSettings: PropTypes.object.isRequired,
  play: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  goToStart: PropTypes.func.isRequired,
  goToEnd: PropTypes.func.isRequired
};

export default PlayButtonGroup;
