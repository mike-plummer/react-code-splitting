import * as React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { AsyncContext, AsyncPointerEvents } from '../async.components';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader'

interface AppProps {
}

class AppComponent extends React.Component<AppProps> {

  render(): React.ReactNode {
    return (
      <Container>
        <Button>
          <NavLink to="/context">Context</NavLink>
        </Button>
        <Button>
          <NavLink to="/pointerEvents">Pointer Events</NavLink>
        </Button>
        <Switch>
          <Route path="/context" component={AsyncContext}/>
          <Route path="/pointerEvents" component={AsyncPointerEvents}/>
          <Redirect to="/"/>
        </Switch>
      </Container>
    );
  }
}

export const App = hot(module)(AppComponent);