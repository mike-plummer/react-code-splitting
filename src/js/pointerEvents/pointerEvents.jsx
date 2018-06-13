import * as React from 'react';
import './pointerEvents.css';

class PointerEvents extends React.Component {

  canvasRef = React.createRef();
  coordinate = [0, 0];

  onClick = event => {
    // const context = this.canvasRef.current.getContext('2d');
    // context.fillStyle = "#FF0000";
  };

  onRelease = event => {

  };

  onMove = event => {
    console.log(this.coordinate);
    const context = this.canvasRef.current.getContext('2d');
    context.moveTo(this.coordinate[0], this.coordinate[1]);
    context.lineTo(event.pageX, event.pageY);
    context.stroke();
    this.coordinate = [event.pageX, event.pageY];
    console.log(this.coordinate);
  };

  render() {
    return (
      <div className="PointerEvents">
        <canvas
          className="pe-canvas"
          ref={this.canvasRef}
          onPointerDown={this.onClick}
          onPointerUp={this.onRelease}
          onPointerMove={this.onMove}
        />
      </div>
    );
  }
}

export default PointerEvents;