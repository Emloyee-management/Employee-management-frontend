import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housing-page',
  templateUrl: './housing-page.component.html',
  styleUrls: ['./housing-page.component.scss'],
})
export class HousingPageComponent implements OnInit {
  users: IUserInfo[] = [
    {
      id: 1,
      userName: 'user1',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 2,
      userName: 'user2',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
    {
      id: 3,
      userName: 'user3',
      email: 'a@b.com',
      password: '123',
      personId: 1,
      createDate: '01-01-2020',
      modificationDate: '01-01-2020',
    },
  ] as IUserInfo[];
  isShow: boolean = false;
  visa: String = 'visa';
  house: String = 'house';
  constructor() {}

  ngOnInit(): void {}

  openNav = () => {
    if (!this.isShow) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementsByClassName(
        'housing-page__content'
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
      'housing-page__content'
      //@ts-ignore
    )[0].style.marginLeft = '0';
  };
}
