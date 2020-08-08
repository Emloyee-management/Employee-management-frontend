import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/service/SessionService';
import { Subscription } from 'rxjs';
import { InfoService } from 'src/app/service/InfoService';
import * as moment from 'moment';
@Component({
  selector: 'app-personal-info-page',
  templateUrl: './personal-info-page.component.html',
  styleUrls: ['./personal-info-page.component.scss'],
})
export class PersonalInfoPageComponent implements OnInit {
  isShow: boolean = false;
  visa: String = 'visa';
  house: String = 'house';
  personId: number;
  personalInfo: IPersonalInfoResponse;
  age: number;

  loaded: boolean = true;
  private userSub: Subscription;

  constructor(
    private sessionService: SessionService,
    private infoService: InfoService
  ) {}

  async ngOnInit(): Promise<void> {
    // this.userSub = this.sessionService
    //   .getUserinfo()
    //   .subscribe((user: IUserInfo) => {
    //     this.personId = user.personId;
    //   });
    this.personId = parseInt(localStorage.getItem('personId'));
    this.personalInfo = await this.infoService.getPersonalInfo(this.personId);
    this.age = moment().diff(this.personalInfo.dob, 'years');
    this.loaded = !this.loaded;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  openNav = () => {
    if (!this.isShow) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementsByClassName(
        'personal-info__content'
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
      'personal-info__content'
      //@ts-ignore
    )[0].style.marginLeft = '0';
  };
}
