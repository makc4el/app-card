import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaygroundComponent} from './playground/playground.component';
import {InfoComponent} from './info/info.component';

const routes: Routes = [
  { path: '', component: PlaygroundComponent },
  { path: 'info', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
