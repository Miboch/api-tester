import {createAction, props} from '@ngrx/store';

export enum ConfigurationActionEnum {
  UPDATE_FOO = "[Configuration][Update] Foo"
}

export const updateFoo = createAction(
  ConfigurationActionEnum.UPDATE_FOO,
  props<{ payload: string }>()
);
