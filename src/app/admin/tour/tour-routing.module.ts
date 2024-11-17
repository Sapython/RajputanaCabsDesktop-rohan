import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { TourComponent } from './tour.component';

const routes: Routes = [{
  path: '',
  component: TourComponent,
},
{
  path: 'add',
  component: AddTourComponent,
},
{
  path: 'edit/:id',
  component: AddTourComponent,
},
{
  path: ':id',
  component: TourPageComponent, 
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
