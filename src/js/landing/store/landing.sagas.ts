import { takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import LandingActions, { LandingActionTypes } from './landing.actions';
import { createWatchers, WatcherConfig } from '../../util/saga.utils';

function* loaded(action: LandingActionTypes.Loaded): SagaIterator {
}

const watchers = createWatchers({
  [LandingActions.TYPES.LOADED]: { saga: loaded, effect: takeLatest }
});

export default watchers;