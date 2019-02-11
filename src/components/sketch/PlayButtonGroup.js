import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import GoStartIcon from '../icons/GoStartIcon';
import PlayIcon from '../icons/PlayIcon';
import StopIcon from '../icons/StopIcon';
import GoEndIcon from '../icons/GoEndIcon';

const PlayButtonGroup = ({appSettings, play, stop, goToStart, goToEnd}) => {

  return (
    <div className="play-button-group">
      <Button onClick={goToStart}
              variant="primary"
      ><GoStartIcon/> Start</Button>
      <Button onClick={play}
              variant="primary"
      ><PlayIcon/> Play</Button>
      <Button onClick={stop}
              variant="primary"
      ><StopIcon/> Stop</Button>
      <Button onClick={goToEnd}
              variant="primary"
      ><GoEndIcon/> End</Button>
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
