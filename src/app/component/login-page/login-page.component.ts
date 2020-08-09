import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from 'src/app/service/SessionService';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogValidationComponentComponent } from '../dialog-validation-component/dialog-validation-component.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loaded: boolean = false;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private sessionService: SessionService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  onSubmit = async () => {
    if (
      this.loginForm.value.username === '' ||
      this.loginForm.value.password === ''
    ) {
      const dialogRef = this.dialog.open(DialogValidationComponentComponent, {
        panelClass: 'custom-modalbox',
        data: 'Please fill out all required fields!',
      });
      return;
    } else {
      this.loaded = !this.loaded;
      const loginInfo: IUserInfo = await this.sessionService.login(
        this.loginForm.value.username,
        this.loginForm.value.password
      );

      if (loginInfo.id !== 0) {
        localStorage.setItem('userName', loginInfo.userName);
        localStorage.setItem('passWord', loginInfo.password);
        localStorage.setItem('title', loginInfo.title);
        localStorage.setItem('personId', loginInfo.personId.toString());
        localStorage.setItem('eId', loginInfo.eid.toString());
        this.router.navigateByUrl('/homepage');
      } else if (loginInfo.id == 0) {
        const dialogRef = this.dialog.open(DialogValidationComponentComponent, {
          panelClass: 'custom-modalbox',
          data: 'Wrong username and password combination!',
        });
        this.loaded = !this.loaded;
        return;
      } else {
        this.router.navigateByUrl('/**');
      }
    }
  };

  ngOnInit(): void {}
}
