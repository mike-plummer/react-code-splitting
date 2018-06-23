import * as React from 'react';
import './pointerEvents.css';
import { List, Segment } from "semantic-ui-react";

type CanvasPointerEvent = React.PointerEvent<HTMLCanvasElement>;

type Coordinate = {
  x: number;
  y: number;
}

interface PointerEventsProps {
}

interface PointerEventsState {
  pointerCaptured: boolean;
  pointerDownTimestamp?: number;
  pointerDownOrigin?: Coordinate;
}

class PointerEvents extends React.Component<PointerEventsProps, PointerEventsState> {

  private canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();

  readonly state: PointerEventsState = {
    pointerCaptured: false
  };

  private getDrawingContext = (): CanvasRenderingContext2D =>
    this.canvasRef.current!.getContext('2d')!;

  private reset = (): void => {
    const context = this.getDrawingContext();
    context.clearRect(0, 0, this.canvasRef.current!.width, this.canvasRef.current!.height);
    context.closePath();
    context.beginPath();
    this.setState({
      pointerDownOrigin: undefined,
      pointerDownTimestamp: undefined
    });
  };

  private translateCoordinates = (event: CanvasPointerEvent): Coordinate => {
    const canvasRect = this.canvasRef.current!.getBoundingClientRect();
    return {
      x: event.clientX - canvasRect.left,
      y: event.clientY - canvasRect.top
    };
  };

  private isClearAction = (event: CanvasPointerEvent): boolean => {
    const { pointerDownTimestamp, pointerDownOrigin } = this.state;
    if (!pointerDownOrigin || !pointerDownTimestamp) {
      return false;
    }

    if (new Date().getTime() - pointerDownTimestamp < 1000) {
      return false;
    }

    const coordinate = this.translateCoordinates(event);
    return Math.abs(coordinate.x - pointerDownOrigin.x) < 10 && Math.abs(coordinate.y - pointerDownOrigin.y) < 10;
  };

  private onDown = (event: CanvasPointerEvent): void => {
    this.canvasRef.current!.setPointerCapture(event.pointerId);

    this.getDrawingContext().strokeStyle = '#FF0000';

    this.setState({
      pointerDownTimestamp: new Date().getTime(),
      pointerDownOrigin: this.translateCoordinates(event)
    });
  };

  private onRelease = (event: CanvasPointerEvent): void => {
    this.getDrawingContext().strokeStyle = '#000000';
    if (this.isClearAction(event)) {
      this.reset();
    }
  };

  private onMove = (event: CanvasPointerEvent): void => {
    const context = this.getDrawingContext();
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
      <Segment
        color={this.state.pointerCaptured ? 'blue' : undefined}
      >
        <p>
          Before React v16.4 you'd be stuck with MouseEvents which didn't always work as expected for non-mouse
          interfaces like Touchscreens. With the PointerEvent spec you get better support for non-mouse Pointer
          capabilities.
        </p>
        <List>
          <List.Item>Press different points to connect them with a line.</List.Item>
          <List.Item>Drag to draw a line while changing the color.</List.Item>
          <List.Item>Press and hold for one second to clear.</List.Item>
        </List>
        <canvas
          ref={this.canvasRef}
          onPointerDown={this.onDown}
          onPointerUp={this.onRelease}
          onPointerMove={this.onMove}
          onGotPointerCapture={this.onCapture}
          onLostPointerCapture={this.onLoss}
        />
      </Segment>
    );
  }
}

export default PointerEvents;
