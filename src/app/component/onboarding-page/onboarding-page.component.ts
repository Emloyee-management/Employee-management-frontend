import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-onboarding-page',
  templateUrl: './onboarding-page.component.html',
  styleUrls: ['./onboarding-page.component.scss'],
})
export class OnboardingPageComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      personalFirstname: ['', Validators.required],
      personalLastname: ['', Validators.required],
      personalMidname: ['', Validators.required],
      personalPreferredname: ['', Validators.required],
      personalAddress: ['', Validators.required],
      personalPhone: ['', Validators.required],
      personalAvatar: ['', Validators.required],
      personalCar: ['', Validators.required],
      legalEmail: ['', Validators.required],
      legalCitizen1: ['', Validators.required],
      legalCitizen2: ['', Validators.required],
      legalDL: ['', Validators.required],
      legalSSN: ['', Validators.required],
      legalDob: ['', Validators.required],
      referName: ['', Validators.required],
      referPhone: ['', Validators.required],
      referAddress: ['', Validators.required],
      referEmail: ['', Validators.required],
      referRelation: ['', Validators.required],
      emergencyName: ['', Validators.required],
      emergencyPhone: ['', Validators.required],
      emergencyAddress: ['', Validators.required],
      emergencyEmail: ['', Validators.required],
      emergencyRelation: ['', Validators.required],
    });
  }

  onSubmit = () => {
    console.info(this.formGroup);
  };
}
