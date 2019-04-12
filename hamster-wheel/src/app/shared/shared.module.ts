import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrimeNgModule } from './modules/prime-ng.module';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    PrimeNgModule,
    NavigationComponent,
    ReactiveFormsModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})

export class SharedModule { }
