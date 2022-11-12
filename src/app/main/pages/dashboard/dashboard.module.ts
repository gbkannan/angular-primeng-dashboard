import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

const dashboardRouting = RouterModule.forChild([
  {
    path: '',
    component: DashboardComponent
  }
]);

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    dashboardRouting
  ]
})
export class DashboardModule { }
