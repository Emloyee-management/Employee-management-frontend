import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-facility-report-page',
  templateUrl: './facility-report-page.component.html',
  styleUrls: ['./facility-report-page.component.scss'],
})
export class FacilityReportPageComponent implements OnInit {
  isShow: boolean = false;
  visa: String = 'visa';
  house: String = 'house';
  //@ts-ignore
  reports: [] = [
    {
      title: 'No Power',
      createdBy: 'user1',
      reportDate: '01-01-2020',
      status: 'open',
    },
    {
      title: 'No Electricity',
      createdBy: 'user1',
      reportDate: '01-01-2020',
      status: 'closed',
    },
    {
      title: 'No Electricity',
      createdBy: 'user1',
      reportDate: '01-01-2020',
      status: 'closed',
    },
    {
      title: 'No Electricity',
      createdBy: 'user1',
      reportDate: '01-01-2020',
      status: 'closed',
    },
    {
      title: 'No Electricity',
      createdBy: 'user1',
      reportDate: '01-01-2020',
      status: 'closed',
    },
    {
      title: 'No Electricity',
      createdBy: 'user1',
      reportDate: '01-01-2020',
      status: 'closed',
    },
    {
      title: 'No Electricity',
      createdBy: 'user1',
      reportDate: '01-01-2020',
      status: 'closed',
    },
    {
      title: 'No Electricity',
      createdBy: 'user1',
      reportDate: '01-01-2020',
      status: 'closed',
    },
    {
      title: 'No Electricity',
      createdBy: 'user1',
      reportDate: '01-01-2020',
      status: 'closed',
    },
  ];
  reportForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}

  openNav = () => {
    if (!this.isShow) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementsByClassName(
        'facility-report-page__content'
        //@ts-ignore
      )[0].style.marginLeft = '250px';
    } else {
      this.closeNav();
    }
    this.isShow = !this.isShow;
  };

  closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementsByClassName(
      'facility-report-page__content'
      //@ts-ignore
    )[0].style.marginLeft = '0';
  };

  onCancel = () => {};

  onSubmit = async () => {};
}
