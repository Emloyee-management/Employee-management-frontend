import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from 'src/app/service/SessionService';
import { Router } from '@angular/router';

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

  constructor(private sessionService: SessionService, private router: Router) {}

  onSubmit = async () => {
    this.loaded = !this.loaded;
    if (
      this.loginForm.value.username === '' ||
      this.loginForm.value.password === ''
    ) {
      alert("Can't be empty!");
    }

    const loginInfo: IUserInfo = await this.sessionService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    );

    // localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
    localStorage.setItem('userName', loginInfo.userName);
    localStorage.setItem('email', loginInfo.email);
    localStorage.setItem('personId', loginInfo.personId.toString());

    if (loginInfo.id !== 0) {
      this.router.navigateByUrl('/homepage');
    } else if (loginInfo.id == 0) {
      alert('Wrong credentials!');
      this.loaded = !this.loaded;
      return;
    } else {
      this.router.navigateByUrl('/**');
    }
  };

  ngOnInit(): void {}
}
