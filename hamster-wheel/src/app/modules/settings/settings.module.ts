import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [
    SettingsPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})

export class SettingsModule { }
