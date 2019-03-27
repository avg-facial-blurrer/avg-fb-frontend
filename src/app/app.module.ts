import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule, MatInputModule, MatFormFieldModule,
  MatExpansionModule, MatCheckboxModule, MatSidenavModule
} from '@angular/material';
import {ChildComponent} from './child/child.component';
import {ChildService} from './services/child.service';
import {StateService} from './services/state.service';
import {PermissionsComponent} from './permissions/permissions.component';
import {ClassesComponent} from './classes/classes.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChildComponent,
    PermissionsComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  providers: [LoginService, ChildService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
