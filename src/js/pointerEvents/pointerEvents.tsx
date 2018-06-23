import * as React from 'react';
import './pointerEvents.css';
import { Segment } from "semantic-ui-react";

interface PointerEventsProps {}
interface PointerEventsState {
  pointerCaptured: boolean;
}

class PointerEvents extends React.Component<PointerEventsProps, PointerEventsState> {

  private canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();

  readonly state: PointerEventsState = {
    pointerCaptured: false
  };

  private translateCoordinates = (event: React.PointerEvent<HTMLCanvasElement>): { x: number, y: number } => {
    const canvasRect = this.canvasRef.current!.getBoundingClientRect();
    return {
      x: event.clientX - canvasRect.left,
      y: event.clientY - canvasRect.top
    };
  };

  private onDown = (event: React.PointerEvent<HTMLCanvasElement>): void => {
    this.canvasRef.current!.setPointerCapture(event.pointerId);

    const context = this.canvasRef.current!.getContext('2d')!;
    context.strokeStyle = '#FF0000';
  };

  private onRelease = (): void => {
    const context = this.canvasRef.current!.getContext('2d')!;
    context.strokeStyle = '#000000';
  };

  private onMove = (event: React.PointerEvent<HTMLCanvasElement>): void => {
    const context = this.canvasRef.current!.getContext('2d')!;
    const coordinates = this.translateCoordinates(event);
    context.lineTo(coordinates.x, coordinates.y);
    context.stroke();
  };

  private onCapture = (): void => {
    this.setState({
      pointerCaptured: true
    });
  };

  private onLoss = (): void => {
    this.setState({
      pointerCaptured: false
    });
  };

  render(): React.ReactNode {
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
