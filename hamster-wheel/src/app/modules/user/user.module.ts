import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserPageComponent } from './user-page/user-page.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})

export class UserModule { }
