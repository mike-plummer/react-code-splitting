import { Action, AnyAction, Reducer } from 'redux';

type ReducerConfig<S> = {
  [actionType: string]: Reducer<S, AnyAction>
}

export const buildReducer = <S>(initialState: S, config: ReducerConfig<S>): Reducer<S, AnyAction> => {
  return (state: S = initialState, action: Action): S => {
    if (config[action.type]) {
      return config[action.type](state, action);
    }
    return state;
  }
};