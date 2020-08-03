import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
 });
  constructor() { }

  ngOnInit(): void
  {
  }
  onSubmit = () => {
        if (
          this.registerForm.value.fullname=== '' ||
          this.registerForm.value.username=== '' ||
          this.registerForm.value.email=== '' ||
          this.registerForm.value.password === '' ||
          this.registerForm.value.repassword === ''
        ) {
          alert("Can't be empty!");
        }
        console.info(this.registerForm.value);
  };
}
