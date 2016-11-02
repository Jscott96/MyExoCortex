import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import components
import { AppComponent }   from './app.component';
import{LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';

//import routing module
import { AppRoutingModule }     from './app-routing.module';
@NgModule({
    imports:      [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
