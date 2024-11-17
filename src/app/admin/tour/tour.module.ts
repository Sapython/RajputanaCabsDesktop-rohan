import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { TourComponent } from './tour.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { AddTourComponent } from './add-tour/add-tour.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    TourComponent,
    TourPageComponent,
    AddTourComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,ComponentsModule
  ]
})
export class TourModule { }
