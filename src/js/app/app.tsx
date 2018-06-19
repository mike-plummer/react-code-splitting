import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { AsyncContext, AsyncPointerEvents } from '../async.components';
import Landing from '../landing';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader'
import './app.css';

interface AppProps {
}

class AppComponent extends React.Component<AppProps> {

  render(): React.ReactNode {
    return (
      <Container>
        <Menu secondary pointing>
          <Menu.Item
            content={<div><NavLink to="/context">Context</NavLink></div>}
          />
          <Menu.Item
            content={<div><NavLink to="/pointerEvents">Pointer Events</NavLink></div>}
          />
        </Menu>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/context" component={AsyncContext}/>
          <Route path="/pointerEvents" component={AsyncPointerEvents}/>
          <Redirect to="/"/>
        </Switch>
      </Container>
    );
  }
}

export const App = hot(module)(AppComponent);