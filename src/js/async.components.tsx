import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Dimmer, Loader } from 'semantic-ui-react';

const DELAY = 200;

const Loading: React.SFC<LoadableExport.LoadingComponentProps> = ({ pastDelay }) => {
  if (pastDelay) {
    return (
      <Dimmer>
        <Loader />
      </Dimmer>
    );
  }
  return null;
};

export const AsyncContext = Loadable({
    loader: () => import(/* webpackChunkName: "context" */ './context/context'),
    loading: Loading,
    delay: DELAY
  });

export const AsyncPointerEvents = Loadable({
  loader: () => import(/* webpackChunkName: "pointerEvents" */ './pointerEvents/pointerEvents' as any),
  loading: Loading,
  delay: DELAY
});