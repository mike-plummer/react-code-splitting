import * as React from 'react';
import { Segment } from 'semantic-ui-react';

const Landing: React.SFC = () => (
  <Segment>
    <p>Select <strong>Code Splitting</strong> to see Webpack code splitting in action</p>
    <p>Select <strong>Context</strong> to try out the new Context API from React 16.3</p>
    <p>Select <strong>Pointer Events</strong> to try out the new support for PointerEvents from React 16.4</p>
  </Segment>
);

export default Landing;