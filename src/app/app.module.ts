import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorPageComponent } from './component/error-page/error-page.component';
import { UserPageComponent } from './component/user-page/user-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';

import { OnboardingPageComponent } from './component/onboarding-page/onboarding-page.component';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './component/home-page/home-page.component';
import { RegistrationComponent } from './component/register-page/register-page.component';
import { SessionService } from './service/SessionService';
import { PersonalInfoPageComponent } from './component/personal-info-page/personal-info-page.component';
import { InfoService } from './service/InfoService';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    UserPageComponent,
    LoginPageComponent,
    RegistrationComponent,
    OnboardingPageComponent,
    HomePageComponent,
    RegistrationComponent,
    PersonalInfoPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],

  providers: [SessionService, InfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
