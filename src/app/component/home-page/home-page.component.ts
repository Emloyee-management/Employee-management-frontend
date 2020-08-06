import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SessionService } from 'src/app/service/SessionService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  isShow: boolean = false;
  visa: String = 'visa';
  house: String = 'house';
  user: IUserInfo;
  private userSub: Subscription;
  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.userSub = this.sessionService
      .getUserinfo()
      .subscribe((user: IUserInfo) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

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
    console.info(this.user);
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
