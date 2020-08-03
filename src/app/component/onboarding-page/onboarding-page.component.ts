import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-onboarding-page',
  templateUrl: './onboarding-page.component.html',
  styleUrls: ['./onboarding-page.component.scss'],
})
export class OnboardingPageComponent implements OnInit {
  formGroup: FormGroup;
  selectedOption: string;
  citizenYesclick: Boolean = false;
  citizenNoclick: Boolean = false;
  dlClick: Boolean = false;
  visaOptions = [
    { name: 'H1B', value: 1 },
    { name: 'L2', value: 2 },
    { name: 'F1(CPT/OPT)', value: 3 },
    { name: 'H4', value: 4 },
  ];
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
      greenCard: ['', Validators.required],
      citizen: ['', Validators.required],
      dlNum: ['', Validators.required],
      exp: ['', Validators.required],
      copy: ['', Validators.required],
      selectedOption: [this.visaOptions],
    });
  }

  onSubmit = () => {
    console.info(this.formGroup);
  };

  onDLYes = (event: Event): void => {
    this.dlClick = !this.dlClick;
  };

  onCitizenYes = (event: Event): void => {
    this.citizenYesclick = !this.citizenYesclick;
    if (this.citizenNoclick) {
      this.citizenNoclick = !this.citizenNoclick;
    }

    //@ts-ignore
    document.getElementById('input2').checked = false;
  };
  onCitizenNo = (event: Event): void => {
    this.citizenNoclick = !this.citizenNoclick;
    if (this.citizenYesclick) {
      this.citizenYesclick = !this.citizenYesclick;
    }
    //@ts-ignore
    document.getElementById('input1').checked = false;
  };
}
