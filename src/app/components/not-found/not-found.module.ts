import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';

const notFoundRouting = RouterModule.forChild([
  {
    path: '',
    component: NotFoundComponent
  }
]);


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    notFoundRouting
  ]
})
export class NotFoundModule { }
