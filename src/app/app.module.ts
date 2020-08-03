import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorPageComponent } from './component/error-page/error-page.component';
import { UserPageComponent } from './component/user-page/user-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    UserPageComponent,
    LoginPageComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
