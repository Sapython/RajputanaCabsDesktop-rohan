import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class NotificationsModule { }
