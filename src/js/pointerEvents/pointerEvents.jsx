import * as React from 'react';
import './pointerEvents.css';

class PointerEvents extends React.Component {

  canvasRef = React.createRef();

  onClick = () => {
    const context = this.canvasRef.current.getContext('2d');
    context.strokeStyle = '#FF0000';
  };

  onRelease = () => {
    const context = this.canvasRef.current.getContext('2d');
    context.strokeStyle = '#000000';
  };

  onMove = event => {
    const context = this.canvasRef.current.getContext('2d');
    context.lineTo(event.pageX, event.pageY);
    context.stroke();
  };

  render() {
    return (
      <div className="PointerEvents">
        <canvas
          className="pe-canvas"
          ref={this.canvasRef}
          height={window.innerHeight - 20}
          width={window.innerWidth}
          onPointerDown={this.onClick}
          onPointerUp={this.onRelease}
          onPointerMove={this.onMove}
        />
      </div>
    );
  }
}

export default PointerEvents;
