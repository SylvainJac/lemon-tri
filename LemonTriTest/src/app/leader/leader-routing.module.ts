import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeaderComponent} from "./leader/leader.component";

const routes: Routes = [
  {
    path: '',
    component: LeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderRoutingModule { }
