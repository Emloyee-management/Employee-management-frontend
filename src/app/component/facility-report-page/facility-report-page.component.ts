import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InfoService } from 'src/app/service/InfoService';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from 'src/app/service/PostService';
import { DialogValidationComponentComponent } from '../dialog-validation-component/dialog-validation-component.component';

@Component({
  selector: 'app-facility-report-page',
  templateUrl: './facility-report-page.component.html',
  styleUrls: ['./facility-report-page.component.scss'],
})
export class FacilityReportPageComponent implements OnInit {
  isShow: boolean = false;
  loaded: boolean = true;
  personId: number;
  visa: String = 'visa';
  house: String = 'house';
  facilityIssue: IFacilityIssueResponse;

  reportForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(
    private infoService: InfoService,
    public dialog: MatDialog,
    private postService: PostService
  ) {}

  async ngOnInit(): Promise<void> {
    this.personId = parseInt(localStorage.getItem('personId'));
    this.facilityIssue = await this.infoService.getFacilityReport(
      this.personId
    );
    this.loaded = !this.loaded;
    console.info(this.facilityIssue);
  }

  openNav = () => {
    if (!this.isShow) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementsByClassName(
        'facility-report-page__content'
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
      'facility-report-page__content'
      //@ts-ignore
    )[0].style.marginLeft = '0';
  };

  onCancel = () => {};

  onSubmit = async () => {
    const result = await this.postService.postFacilityReport(
      this.reportForm.value.title,
      this.reportForm.value.description,
      parseInt(localStorage.getItem('eId'))
    );
    if (result) {
      const dialogRef = this.dialog.open(DialogValidationComponentComponent, {
        panelClass: 'custom-modalbox',
        data: 'Successfully submmited!',
      });
      location.reload();
    }
  };

  onReportClick = (id: number) => {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '500px',
      data: this.facilityIssue.commentResponse.filter(
        (item: ICommentResponse) => {
          return item.reportID === id;
        }
      ),
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  };
}
