import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeammateComponent} from "./teammate/teammate.component";

const routes: Routes = [
  {
    path: '',
    component: TeammateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeammateRoutingModule { }
