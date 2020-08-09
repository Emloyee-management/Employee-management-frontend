import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/service/PostService';
@Component({
  selector: 'app-onboarding-page',
  templateUrl: './onboarding-page.component.html',
  styleUrls: ['./onboarding-page.component.scss'],
})
export class OnboardingPageComponent implements OnInit {
  waitingApprove: boolean = false;
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

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      personalFirstname: ['', Validators.required],
      personalLastname: ['', Validators.required],
      personalMidname: ['', Validators.required],
      personalAddress1: ['', Validators.required],
      personalAddress2: ['', Validators.required],
      personalPhone: ['', Validators.required],
      personalAlterPhone: ['', Validators.required],
      personalAvatar: ['', Validators.required],
      personalGender: ['', Validators.required],
      personalCar: ['', Validators.required],
      legalEmail: ['', Validators.required],
      legalCity: ['', Validators.required],
      legalStatename: ['', Validators.required],
      legalStateabbr: ['', Validators.required],
      legalZip: ['', Validators.required],
      legalCitizen1: ['', Validators.required],
      legalCitizen2: ['', Validators.required],
      visaStartDate: ['', Validators.required],
      visaEndDate: ['', Validators.required],
      legalDL: ['', Validators.required],
      legalSSN: ['', Validators.required],
      legalDob: ['', Validators.required],
      referFirstname: ['', Validators.required],
      referLastname: ['', Validators.required],
      referPhone: ['', Validators.required],
      referAddress: ['', Validators.required],
      referEmail: ['', Validators.required],
      referRelation: ['', Validators.required],
      emergencyFirstname: ['', Validators.required],
      emergencyLastname: ['', Validators.required],
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
    console.info(this.formGroup.value);
    this.postService
      .postOnboardingForm(
        this.formGroup.value.personalFirstname,
        this.formGroup.value.personalLastname,
        this.formGroup.value.personalMidname,
        this.formGroup.value.personalPhone,
        this.formGroup.value.personalAlterPhone,
        this.formGroup.value.legalSSN,
        this.formGroup.value.legalDob,
        this.formGroup.value.personalGender,
        this.formGroup.value.legalEmail,
        // this.formGroup.value.personalFirstname,
        '0',
        this.formGroup.value.personalCar,
        this.formGroup.value.visaStartDate,
        this.formGroup.value.visaEndDate,
        this.formGroup.value.dlNum,
        this.formGroup.value.exp,
        this.formGroup.value.selectedOption,
        this.formGroup.value.personalAddress1,
        this.formGroup.value.personalAddress2,
        this.formGroup.value.legalCity,
        this.formGroup.value.legalZip,
        this.formGroup.value.legalStatename,
        this.formGroup.value.legalStateAbbr,
        this.formGroup.value.referFirstname,
        this.formGroup.value.referLastname,
        // this.formGroup.value.referName.split(' ')[1],
        ' ',
        this.formGroup.value.referPhone,
        this.formGroup.value.referEmail,
        this.formGroup.value.referAddress,
        // this.formGroup.value.personalFirstname,
        ' ',
        // this.formGroup.value.personalFirstname,
        ' ',
        // this.formGroup.value.personalFirstname,
        ' ',
        // this.formGroup.value.personalFirstname,
        ' ',
        // this.formGroup.value.personalFirstname,
        ' ',
        this.formGroup.value.referRelation,
        this.formGroup.value.emergencyFirstname,
        this.formGroup.value.emergencyLastname,
        // this.formGroup.value.personalFirstname,
        ' ',
        this.formGroup.value.emergencyPhone,
        this.formGroup.value.emergencyEmail,
        this.formGroup.value.emergencyRelation,
        localStorage.getItem('userName')
      )
      .then(() => {
        this.waitingApprove = !this.waitingApprove;
      });
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
