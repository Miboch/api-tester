import {MenuComponent} from './menu/menu.component';
import {ConfigurationTabContainerComponent} from './@container';
import {ConfigurationTabComponent} from './configuration-tab/configuration-tab.component';

export const appComponents = [
  MenuComponent,
  ConfigurationTabContainerComponent,
  ConfigurationTabComponent
];

export * from './@routed'
export * from './@container';
export * from './menu/menu.component';
export * from './configuration-tab/configuration-tab.component';
