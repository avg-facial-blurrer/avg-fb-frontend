import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
