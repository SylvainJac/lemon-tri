import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeammateComponent } from './teammate/teammate.component';
import {TeammateRoutingModule} from "./teammate-routing.module";
import { EditWasteComponent } from './modal/edit-waste/edit-waste.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TeammateComponent,
    EditWasteComponent
  ],
  imports: [
    CommonModule,
    TeammateRoutingModule,
    FormsModule
  ],
  bootstrap: [TeammateComponent]
})
export class TeammateModule { }
