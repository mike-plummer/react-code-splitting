import * as React from 'react';
import './pointerEvents.css';
import { Segment } from "semantic-ui-react";

class PointerEvents extends React.Component {

  canvasRef = React.createRef();

  translateCoordinates = event => {
    const canvasRect = this.canvasRef.current.getBoundingClientRect();
    return {
      x: event.clientX - canvasRect.left,
      y: event.clientY - canvasRect.top
    };
  };

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
    const coordinates = this.translateCoordinates(event);
    context.lineTo(coordinates.x, coordinates.y);
    context.stroke();
  };

  render() {
    return (
      <Segment className="PointerEvents">
        <p>
          Before React v16.4 you'd be stuck with MouseEvents which didn't always work as expected for non-mouse
          interfaces like Touchscreens. With the PointerEvent spec you get better support for non-mouse Pointer
          capabilities.
        </p>
        <canvas
          ref={ this.canvasRef }
          height={ 400 }
          width={ 400 }
          onPointerDown={ this.onClick }
          onPointerUp={ this.onRelease }
          onPointerMove={ this.onMove }
        />
      </Segment>
    );
  }
}

export default PointerEvents;
