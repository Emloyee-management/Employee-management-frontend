import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/service/InfoService';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from 'src/app/service/PostService';
import { FormGroup, FormControl } from '@angular/forms';
import { DialogHousingComponent } from '../dialog-housing/dialog-housing.component'
@Component({
  selector: 'app-house-management-page',
  templateUrl: './house-management-page.component.html',
  styleUrls: ['./house-management-page.component.scss']
})
export class HouseManagementPageComponent implements OnInit
{
  isShow: boolean = false;
  houseId: number;
  loaded: boolean = false;
  facilityInfo: IHouseInfo[];
  houseDetails: IFacilityInfo;
  reportForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(
    private infoService: InfoService,
    public dialog: MatDialog)
  {

  }
  // ngOnInit(): void { }

  async ngOnInit(): Promise<void>
  {
    // this.houseId = parseInt(localStorage.getItem('hid'));
    this.facilityInfo = await this.infoService.getFacilityInfo();

    this.loaded = !this.loaded;
    // this.facilityInfo.houseInfoResponse[0].houseId
    console.info(this.facilityInfo);
  }


  openNav = () =>
  {
    if (!this.isShow)
    {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementsByClassName(
        'facility-report-page__content'
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
      'facility-report-page__content'
      //@ts-ignore
    )[0].style.marginLeft = '0';
  };

  // onCancel = () => { };


  onReportClick = async (id: number) =>
  {
    this.houseDetails = await this.infoService.getHouseDetails(id);
    console.info(this.houseDetails);

    const dialogRef = this.dialog.open(DialogHousingComponent, {
      width: '500px',

      data: this.houseDetails

    });
    dialogRef.afterClosed().subscribe((result) =>
    {
      console.log('The dialog was closed');

      //  this.animal = result;
    });
  }
}
