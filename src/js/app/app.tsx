import * as React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { AsyncContext, AsyncPointerEvents } from '../async.components';
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

interface AppProps {}

class AppComponent extends React.Component<AppProps> {

  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Container>
          <Button>
            <NavLink to="/context" >Context</NavLink>
          </Button>
          <Button>
            <NavLink to="/pointerEvents" >Pointer Events</NavLink>
          </Button>
          <Switch>
            <Route path="/context" component={AsyncContext} />
            <Route path="/pointerEvents" component={AsyncPointerEvents} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export const App = AppComponent;