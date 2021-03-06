import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/app';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
