import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopbarComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopbarComponent,
    SidemenuComponent
  ]
})
export class LayoutModule { }
