import {Action, createReducer} from '@ngrx/store';
import {ConfigurationState} from '../../../model/state/configuration-state';

const initialConfigurationState: ConfigurationState = {
  foo: "Hello World"
}

const _reduce = createReducer(
  initialConfigurationState
);


export function reduceConfiguration(state: ConfigurationState | undefined = initialConfigurationState, action: Action) {
  return _reduce(state, action);
}
