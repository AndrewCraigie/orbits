import React from 'react';
import PropTypes from 'prop-types';
import * as colorUtils from '../../utils/color';


class SketchCanvas extends React.Component{

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.drawArm = this.drawArm.bind(this);
  }

  drawArm(ctx, orb){

    const strokeRGBA = [...colorUtils.hexToRgb(orb.armColor), orb.armOpacity ].join(', ');

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${strokeRGBA})`;
    ctx.lineWidth = orb.armStrokeWeight;
    ctx.moveTo(orb.cX, orb.cY);
    ctx.lineTo(orb.endX, orb.endY);
    ctx.stroke();
    ctx.restore();

  }

  drawOrb(ctx, orb){

    const strokeRGBA = [...colorUtils.hexToRgb(orb.orbitColor), orb.orbitOpacity ].join(', ');

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${strokeRGBA})`;
    ctx.lineWidth = orb.orbitStrokeWeight;
    ctx.arc(orb.cX, orb.cY, orb.r, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.restore();

  }

  drawPen(ctx, orb){

    const strokeRGBA = [...colorUtils.hexToRgb(orb.curveColor), orb.curveOpacity ].join(', ');


  }

  componentDidUpdate(){
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
    ctx.fillRect(0, 0, width, height);




    for(let orb of this.props.orbitDefs){

      this.drawArm(ctx, orb);
      this.drawOrb(ctx, orb);

    }


  }

  render() {
    return(
      <canvas
        ref={this.canvasRef}
        width={"800"}
        height={"800"}
      >
      </canvas>
    )
  }


  // TODO https://codepen.io/philnash/pen/QVeOrd?editors=0010

}

SketchCanvas.propTypes = {
  appSettings: PropTypes.object.isRequired,
  orbitDefs: PropTypes.array.isRequired,
};


export default SketchCanvas;
