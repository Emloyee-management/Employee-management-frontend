import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {}

  onSubmit = () => {
    if (
      this.loginForm.value.username === '' ||
      this.loginForm.value.password === ''
    ) {
      alert("Can't be empty!");
    }
    console.info(this.loginForm.value);
  };

  ngOnInit(): void {}
}
