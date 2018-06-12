import { Action } from 'redux';
import { createAction } from '../../util/redux.utils';

export namespace LandingActionTypes {
  export interface Loaded extends Action {}
}

const TYPES = {
  LOADED: 'LANDING.LOADED'
};

const CREATORS = {
  loaded: createAction(TYPES.LOADED, {})
};

export default {
  TYPES,
  CREATORS
};
