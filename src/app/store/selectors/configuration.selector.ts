import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ConfigurationState} from '../../../model/state/configuration-state';

export const selectConfiguration = createFeatureSelector<ConfigurationState>('configuration');

export const selectFoo = createSelector(
  selectConfiguration,
  (state) => state.foo
);
