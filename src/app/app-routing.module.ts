import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigureComponent, MainComponent} from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'configuration',
    pathMatch: 'full'
  },
  {
    path: 'api',
    component: MainComponent
  },
  {
    path: 'configuration',
    component: ConfigureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
