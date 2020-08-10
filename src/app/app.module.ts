import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, Injectable } from '@angular/core';
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
import { HousingPageComponent } from './component/housing-page/housing-page.component';
import { FacilityReportPageComponent } from './component/facility-report-page/facility-report-page.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { DialogComponentComponent } from './component/dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PostService } from './service/PostService';
import { AuthGuardService } from './service/AuthGuardService';
import { DialogValidationComponentComponent } from './component/dialog-validation-component/dialog-validation-component.component';
import { HouseManagementPageComponent } from './component/house-management-page/house-management-page.component';
import { DialogHousingComponent } from './component/dialog-housing/dialog-housing.component';


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
    HousingPageComponent,
    FacilityReportPageComponent,
    SideNavComponent,
    DialogComponentComponent,
    DialogValidationComponentComponent,
    HouseManagementPageComponent,
    DialogHousingComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    DxSelectBoxModule,
    DxListModule,
    HttpClientModule,
    MatDialogModule,
  ],

  providers: [
    SessionService,
    InfoService,
    PostService,
    AuthGuardService,
    DataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
