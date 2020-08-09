// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  //change later
  constructor(public router: Router) {}
  canActivate = (): boolean => {
    // if (!this.auth.isAuthenticated()) {
    // //   this.router.navigate(['login']);
    //   return false;
    // }
    // return true;
    if (
      !localStorage.getItem('userName') ||
      !localStorage.getItem('passWord')
    ) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  };
}
