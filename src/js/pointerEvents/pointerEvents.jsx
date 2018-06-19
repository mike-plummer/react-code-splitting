import * as React from 'react';
import './pointerEvents.css';
import { Segment } from "semantic-ui-react";

class PointerEvents extends React.Component {

  canvasRef = React.createRef();

  constructor() {
    super();
    this.state = {
      pointerCaptured: false
    };
  }

  translateCoordinates = event => {
    const canvasRect = this.canvasRef.current.getBoundingClientRect();
    return {
      x: event.clientX - canvasRect.left,
      y: event.clientY - canvasRect.top
    };
  };

  onDown = event => {
    event.target.setPointerCapture(event.pointerId);

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

  onCapture = () => {
    this.setState({
      pointerCaptured: true
    });
  };

  onLoss = () => {
    this.setState({
      pointerCaptured: false
    });
  };

  render() {
    return (
      <Segment className="PointerEvents" color={this.state.pointerCaptured ? 'blue' : undefined}>
        <p>
          Before React v16.4 you'd be stuck with MouseEvents which didn't always work as expected for non-mouse
          interfaces like Touchscreens. With the PointerEvent spec you get better support for non-mouse Pointer
          capabilities.
        </p>
        <canvas
          ref={ this.canvasRef }
          height={ 400 }
          width={ 400 }
          onPointerDown={ this.onDown }
          onPointerUp={ this.onRelease }
          onPointerMove={ this.onMove }
          onGotPointerCapture={this.onCapture}
          onLostPointerCapture={this.onLoss}
        />
      </Segment>
    );
  }
}

export default PointerEvents;
