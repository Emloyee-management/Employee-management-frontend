import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from 'src/app/service/SessionService';
// import { SessionService } from '../';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
  });
  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {}
  onSubmit = () => {
    if (
      this.registerForm.value.fullname === '' ||
      this.registerForm.value.username === '' ||
      this.registerForm.value.email === '' ||
      this.registerForm.value.password === '' ||
      this.registerForm.value.repassword === ''
    ) {
      alert("Can't be empty!");
    } else if (this.registerForm.value.password !== this.registerForm.value.repassword)
    {
      alert("Passwords don't match");
    }
    else {
      this.sessionService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password);
    }
  };
}
