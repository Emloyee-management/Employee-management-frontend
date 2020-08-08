import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { OnboardingPageComponent } from './component/onboarding-page/onboarding-page.component';
import { RegistrationComponent } from './component/register-page/register-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PersonalInfoPageComponent } from './component/personal-info-page/personal-info-page.component';
import { HousingPageComponent } from './component/housing-page/housing-page.component';
import { FacilityReportPageComponent } from './component/facility-report-page/facility-report-page.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { AuthGuardService as AuthGuard } from './service/AuthGuardService';
import { EmployeeProfilePageComponent } from './component/employee-profile-page/employee-profile-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'onboarding', component: OnboardingPageComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'homepage', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'housing', component: HousingPageComponent },
  { path: 'personal-info', component: PersonalInfoPageComponent },
  { path: 'facility-report', component: FacilityReportPageComponent },
  { path: '**', component: ErrorPageComponent },
  { path: 'employee-profile', component: EmployeeProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
