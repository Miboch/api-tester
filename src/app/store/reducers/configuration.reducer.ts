import {Action, createReducer, on} from '@ngrx/store';
import {ConfigurationState} from '../../model/state/configuration-state';
import {updateFoo} from '../actions/configuration.action';

const initialConfigurationState: ConfigurationState = {
  apiIds: [],
  apiList: [],
  endpoints: []
}

const _reduce = createReducer(
  initialConfigurationState,
  on(updateFoo, (state, {payload}) => ({
    ...state,
  }))
);


export function reduceConfiguration(state: ConfigurationState | undefined = initialConfigurationState, action: Action) {
  return _reduce(state, action);
}
