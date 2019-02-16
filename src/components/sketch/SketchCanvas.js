import React from 'react';
import PropTypes from 'prop-types';
import * as colorUtils from '../../utils/color';


class SketchCanvas extends React.Component {

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.drawArm = this.drawArm.bind(this);
    this.drawOrb = this.drawOrb.bind(this);
    this.drawPen = this.drawPen.bind(this);
    this.drawCurve = this.drawCurve.bind(this);
  }

  drawArm(ctx, orb) {

    const strokeRGBA = [...colorUtils.hexToRgb(orb.armColor), orb.armOpacity].join(', ');

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${strokeRGBA})`;
    ctx.lineWidth = orb.armStrokeWeight;
    ctx.moveTo(orb.cX, orb.cY);
    ctx.lineTo(orb.endX, orb.endY);
    ctx.stroke();
    ctx.restore();

  }

  drawOrb(ctx, orb) {

    const strokeRGBA = [...colorUtils.hexToRgb(orb.orbitColor), orb.orbitOpacity].join(', ');

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${strokeRGBA})`;
    ctx.lineWidth = orb.orbitStrokeWeight;
    ctx.arc(orb.cX, orb.cY, orb.r, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.restore();

  }

  drawPen(ctx, orb) {

    const penRGBA = [...colorUtils.hexToRgb(orb.curveColor), 1.0].join(', ');

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = `rgba(${penRGBA})`;
    ctx.arc(orb.endX, orb.endY, orb.penSize * 0.5, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

  }

  drawCurve(ctx, points){

    const curveRGBA = [
      ...colorUtils.hexToRgb(this.props.appSettings.curveColor),
      this.props.appSettings.curveOpacity
    ].join(', ');

    if(points.length > 0){

      ctx.save();
      ctx.strokeStyle = `rgba(${curveRGBA})`;
      ctx.lineWidth = this.props.appSettings.curveStrokeWeight;

      for(let i = 1; i < points.length; i++){
        ctx.beginPath();
        ctx.moveTo(points[i-1][0], points[i-1][1]);
        ctx.lineTo(points[i][0], points[i][1]);
        ctx.stroke();
      }

      ctx.restore();
    }


  }

  componentDidUpdate() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
    ctx.fillRect(0, 0, width, height);


    this.props.orbitDefs.forEach((orb) => {

        if (orb.armShow) {
          this.drawArm(ctx, orb)
        }
        if (orb.orbitShow) {
          this.drawOrb(ctx, orb)
        }
        if (orb.penShow) {
          this.drawPen(ctx, orb)
        }

        this.drawCurve(ctx, this.props.curvePoints);

      }
    );


    // for(let orb of this.props.orbitDefs){
    //
    //   if(orb.armShow){this.drawArm(ctx, orb)}
    //   if(orb.orbitShow){this.drawOrb(ctx, orb)}
    //   if(orb.penShow){this.drawPen(ctx, orb)}
    //   // How to optionally show pen and curve?
    //
    // }


  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        className={this.props.animating ? 'canvas-animating' : 'canvas-not-animating'}
        width={"800"}
        height={"700"}
      >
      </canvas>
    )
  }


  // TODO https://codepen.io/philnash/pen/QVeOrd?editors=0010

}

SketchCanvas.propTypes = {
  appSettings: PropTypes.object.isRequired,
  orbitDefs: PropTypes.array.isRequired,
  animating: PropTypes.bool.isRequired,
  curvePoints: PropTypes.array.isRequired
};


export default SketchCanvas;
