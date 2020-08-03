import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegistrationComponent} from './component/registration/registration.component'

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  {path: 'register', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
