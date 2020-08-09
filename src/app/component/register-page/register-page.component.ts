import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from 'src/app/service/SessionService';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogValidationComponentComponent } from '../dialog-validation-component/dialog-validation-component.component';
// import { SessionService } from '../';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegistrationComponent implements OnInit {
  loaded: boolean = false;
  registerForm = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
  });
  constructor(
    private sessionService: SessionService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  onSubmit = async () => {
    this.loaded = !this.loaded;
    if (
      this.registerForm.value.fullname === '' ||
      this.registerForm.value.username === '' ||
      this.registerForm.value.email === '' ||
      this.registerForm.value.password === '' ||
      this.registerForm.value.repassword === ''
    ) {
      const dialogRef = this.dialog.open(DialogValidationComponentComponent, {
        panelClass: 'custom-modalbox',
        data: 'Please fill out all required fields!',
      });
      this.loaded = !this.loaded;
      return;
    } else if (
      this.registerForm.value.password !== this.registerForm.value.repassword
    ) {
      const dialogRef = this.dialog.open(DialogValidationComponentComponent, {
        panelClass: 'custom-modalbox',
        data: `Passwords don't match!`,
      });
      this.loaded = !this.loaded;
      return;
    } else {
      const registerInfo: IUserInfo = await this.sessionService.register(
        this.registerForm.value.username,
        this.registerForm.value.email,
        this.registerForm.value.password
      );
      if (registerInfo.id !== 0) {
        this.router.navigateByUrl('/onboarding');
      } else {
        const dialogRef = this.dialog.open(DialogValidationComponentComponent, {
          panelClass: 'custom-modalbox',
          data: 'User already exists!',
        });
        this.loaded = !this.loaded;
        return;
      }
    }
  };
}
