import * as React from 'react';
import { SemanticCOLORS } from 'semantic-ui-react';

export interface Colorable {
  color?: SemanticCOLORS;
}

class UpdateSensitiveComponent<P, S extends Colorable> extends React.Component<P, S> {
  readonly state: S = {
    color: undefined
  } as S;

  componentDidUpdate(prevProps: P, prevState: S) {
    if (this.state.color !== prevState.color) {
      return;
    }
    this.setState({
      color: 'red'
    });
    window.setTimeout(() => {
      this.setState({
        color: undefined
      });
    }, 50);
  }
}

export default UpdateSensitiveComponent;