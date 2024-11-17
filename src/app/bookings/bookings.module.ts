import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [
    BookingsComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class BookingsModule { }
