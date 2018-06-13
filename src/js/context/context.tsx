import * as React from 'react';

interface ContextProps {}

class Context extends React.Component<ContextProps> {

  render(): React.ReactNode {
    return (
      <p>Context</p>
    );
  }
}

export default Context;