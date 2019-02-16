import React from 'react';
import PropTypes from 'prop-types';

import GoStartIcon from '../icons/GoStartIcon';
import PlayIcon from '../icons/PlayIcon';
import StopIcon from '../icons/StopIcon';
//import GoEndIcon from '../icons/GoEndIcon';
import DeleteIcon from '../icons/DeleteIcon';

const PlayButtonGroup = ({ play, stop, goToStart, deleteCurve}) => {

  return (
    <div className="play-button-group col-8">
      <button
        className="btn btn-primary playback-btn"
        onClick={goToStart}
      ><GoStartIcon/> Start
      </button>
      <button
        className="btn btn-primary playback-btn"
        onClick={play}
      ><PlayIcon/> Play
      </button>
      <button
        className="btn btn-primary playback-btn"
        onClick={stop}
      ><StopIcon/> Stop
      </button>
      {/*<button*/}
        {/*className="btn btn-primary playback-btn"*/}
        {/*onClick={goToEnd}*/}
      {/*><GoEndIcon/> End*/}
      {/*</button>*/}
      <button
        className="btn btn-danger playback-btn"
        onClick={deleteCurve}
      ><DeleteIcon/> Delete
      </button>
    </div>
  )

};

PlayButtonGroup.propTypes = {
  appSettings: PropTypes.object.isRequired,
  play: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  goToStart: PropTypes.func.isRequired,
  goToEnd: PropTypes.func.isRequired,
  deleteCurve: PropTypes.func.isRequired
};

export default PlayButtonGroup;
