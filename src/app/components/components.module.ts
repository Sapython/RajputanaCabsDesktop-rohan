import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports:[
    DeleteModalComponent
  ]
})
export class ComponentsModule { }
