import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  isShow: boolean = false;
  visa: String = 'visa';
  house: String = 'house';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openNav = () => {
    if (!this.isShow) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementsByClassName(
        'content'
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
      'content'
      //@ts-ignore
    )[0].style.marginLeft = '0';
  };

  onHover = (value: String) => {
    document.getElementsByClassName(
      `sidenav--${value}`
      //@ts-ignore
    )[0].style.height = 'auto';
    document.getElementsByClassName(
      `sidenav--${value}`
      //@ts-ignore
    )[0].style.opacity = '1';
  };

  onHoverout = (value: String) => {
    document.getElementsByClassName(
      `sidenav--${value}`
      //@ts-ignore
    )[0].style.height = '0';
    document.getElementsByClassName(
      `sidenav--${value}`
      //@ts-ignore
    )[0].style.opacity = '0';
  };

  onLogout = () => {
    localStorage.clear();
    this.router.navigateByUrl('');
  };
}
