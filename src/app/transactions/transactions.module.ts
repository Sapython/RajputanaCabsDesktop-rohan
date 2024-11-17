import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class TransactionsModule { }
