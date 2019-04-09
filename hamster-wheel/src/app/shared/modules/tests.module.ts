import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpErrorHandlerService } from '../../core/services/http-error-handler.service';
import { PrimeNgModule } from './prime-ng.module';

@NgModule({
    exports: [
        BrowserModule,
        RouterModule,
        RouterTestingModule,
        ReactiveFormsModule,
        PrimeNgModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        HttpErrorHandlerService
    ]
})

export class TestsModule { }
