import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderComponent } from './leader/leader.component';
import {LeaderRoutingModule} from "./leader-routing.module";



@NgModule({
  declarations: [
    LeaderComponent
  ],
  imports: [
    CommonModule,
    LeaderRoutingModule
  ],
  bootstrap: [LeaderComponent]
})
export class LeaderModule { }
