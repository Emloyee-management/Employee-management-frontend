import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-employee-profile-page',
  templateUrl: './employee-profile-page.component.html',
  styleUrls: ['./employee-profile-page.component.scss']
})
export class EmployeeProfilePageComponent implements OnInit
{
  isShow: boolean = false;
  emp: Employee[]
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void
  {
    this.dataService.getPosts().subscribe(employees =>
    {
      this.emp = employees
      this.dataService.emp = employees
    })
  }

  onSelectedOption(e)
  {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList()
  {
    if (this.dataService.searchOption.length > 0)
    {
      this.emp = this.dataService.filteredListOptions();
    } else
    {
      this.emp = this.dataService.emp;
    }
  }

  openNav = () =>
  {
    if (!this.isShow)
    {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementsByClassName(
        'employee-profile__content'
        //@ts-ignore
      )[0].style.marginLeft = '250px';
    } else
    {
      this.closeNav();
    }
    this.isShow = !this.isShow;
  };

  closeNav = () =>
  {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementsByClassName(
      'employee-profile__content'
      //@ts-ignore
    )[0].style.marginLeft = '0';
  };
}
