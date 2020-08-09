import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SessionService } from 'src/app/service/SessionService';
import { DomSanitizer } from '@angular/platform-browser';

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
  title: string;
  fullName: string;
  startDate: string;
  cellPhone: string;
  avartar: Blob;
  base64String: string | ArrayBuffer;
  src: string;

  private userSub: Subscription;
  constructor(
    private sessionService: SessionService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.userSub = this.sessionService
      .getUserinfo()
      .subscribe((user: IUserInfo) => {
        if (user) {
          this.user = user;

          this.avartar = user.avartar;
        } else {
          // this.userName = localStorage.getItem('userName');
          // this.email = localStorage.getItem('email');
          this.sessionService
            .login(
              localStorage.getItem('userName'),
              localStorage.getItem('passWord')
            )
            .then((user) => {
              this.user = user;
            });
        }
      });
    // var reader = new FileReader();
    // reader.readAsDataURL(this.avartar);
    // reader.onloadend = () => {
    //   this.base64String = reader.result;
    // };
    // this.sanitizer.bypassSecurityTrustUrl(
    //   (this.src = 'data:image/png;base64,' + this.base64String)
    // );

    //@ts-ignore
    // this.src = 'data:image/jpeg;base64,' + btoa(this.avartar);
    // // var uri = this.createObjectURL(this.avartar);
    // document.getElementById('avartar-img').setAttribute('src', this.src);

    // var img = document.createElement('img');
    // //@ts-ignore
    // img.src = 'data:image/jpeg;base64,' + btoa(this.avartar);
    // document.body.appendChild(img);
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
