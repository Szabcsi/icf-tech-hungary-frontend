import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './login';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        appRoutingModule,
        ReactiveFormsModule,
        BrowserModule,
        RecaptchaModule,
        RecaptchaFormsModule
    ],
    declarations: [
        AppComponent,
        // tslint:disable-next-line:no-trailing-whitespace
        LoginComponent        
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
