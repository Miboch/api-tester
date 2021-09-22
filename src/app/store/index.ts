import {ActionReducerMap} from '@ngrx/store';
import {reduceConfiguration} from './reducers/configuration.reducer';
import {StateMap} from '../model/state/state-map';

export const applicationReducer: ActionReducerMap<StateMap> = {
  configuration: reduceConfiguration
}
