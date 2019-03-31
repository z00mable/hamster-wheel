import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimeNgModule } from './prime-ng.module';

@NgModule({
    exports: [
        BrowserModule,
        RouterModule,
        RouterTestingModule,
        PrimeNgModule,
        FormsModule,
        HttpClientModule
    ],
    providers: []
})

export class TestsModule {
}