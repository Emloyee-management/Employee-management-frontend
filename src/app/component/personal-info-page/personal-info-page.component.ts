import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info-page',
  templateUrl: './personal-info-page.component.html',
  styleUrls: ['./personal-info-page.component.scss']
})
export class PersonalInfoPageComponent implements OnInit {

  isShow: boolean = false;
  visa: String = 'visa';
  house: String = 'house';

  constructor() {}

  ngOnInit(): void {}

  openNav = () => {
    if (!this.isShow) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementsByClassName(
        'home-page__content'
        //@ts-ignore
      )[0].style.marginLeft = '250px';
    } else {
      this.closeNav();
    }
    this.isShow = !this.isShow;
  };

  closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
    //@ts-ignore
    document.getElementsByClassName('home-page__content')[0].style.marginLeft =
      '0';
  };

  onHover = (value: String) => {
    document.getElementsByClassName(
      `home-page__sidenav--${value}`
      //@ts-ignore
    )[0].style.height = 'auto';
    document.getElementsByClassName(
      `home-page__sidenav--${value}`
      //@ts-ignore
    )[0].style.opacity = '1';
  };

  onHoverout = (value: String) => {
    document.getElementsByClassName(
      `home-page__sidenav--${value}`
      //@ts-ignore
    )[0].style.height = '0';
    document.getElementsByClassName(
      `home-page__sidenav--${value}`
      //@ts-ignore
    )[0].style.opacity = '0';
  };

}
