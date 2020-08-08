import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SessionService } from 'src/app/service/SessionService';
import * as moment from 'moment';

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
  loginTime = moment(moment.now()).format('MM/DD/YYYY, h:mm:ss a');
  userName: string;
  email: string;

  private userSub: Subscription;
  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.userSub = this.sessionService
      .getUserinfo()
      .subscribe((user: IUserInfo) => {
        if (user) {
          console.info(user);
          this.user = user;
          this.userName = user.userName;
          this.email = user.email;
        } else {
          this.userName = localStorage.getItem('userName');
          this.email = localStorage.getItem('email');
        }
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
}
