import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class UsersModule { }
