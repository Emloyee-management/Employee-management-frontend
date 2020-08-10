import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/DataService';

@Component({
  selector: 'app-employee-profile-page',
  templateUrl: './employee-profile-page.component.html',
  styleUrls: ['./employee-profile-page.component.scss'],
})
export class EmployeeProfilePageComponent implements OnInit {
  isShow: boolean = false;
  emp: IEmployee[];
  constructor(private dataService: DataService) {}

  async ngOnInit(): Promise<void> {
    (await this.dataService.getPosts()).subscribe((employees: IEmployee[]) => {
      this.emp = employees;
      this.dataService.emp = employees;
      console.log(employees);
    });
  }

  onSelectedOption = (e) => {
    this.getFilteredExpenseList();
  };

  getFilteredExpenseList = () => {
    if (this.dataService.searchOption.length > 0) {
      this.emp = this.dataService.filteredListOptions();
    } else {
      this.emp = this.dataService.emp;
    }
  };

  openNav = () => {
    if (!this.isShow) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementsByClassName(
        'employee-profile__content'
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
      'employee-profile__content'
      //@ts-ignore
    )[0].style.marginLeft = '0';
  };
}
