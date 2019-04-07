import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
  ]
})

export class SharedModule { }
