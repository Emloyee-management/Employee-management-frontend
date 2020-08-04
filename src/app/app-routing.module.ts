import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { OnboardingPageComponent } from './component/onboarding-page/onboarding-page.component';
import { RegistrationComponent } from './component/register-page/register-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'onboarding', component: OnboardingPageComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'homepage', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
