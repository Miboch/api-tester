import {ActionReducerMap} from '@ngrx/store';
import {StateMap} from '../../model/state/state-map';
import {reduceConfiguration} from './reducers/configuration.reducer';

export const applicationReducer: ActionReducerMap<StateMap> = {
  configuration: reduceConfiguration
}
