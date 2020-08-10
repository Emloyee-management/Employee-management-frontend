import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
// import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire';
import { SessionService } from 'src/app/service/SessionService';
import { FileService } from 'src/app/service/FileService';

import { Observable } from 'rxjs';
import { redirectErrorPage } from 'src/app/config/config';
@Component({
  selector: 'app-visa-status-component',
  templateUrl: './visa-status-page.component.html',
  styleUrls: ['./visa-status-page.component.scss'],
})
export class VisaStatusComponent implements OnInit {
  loaded: boolean = true;
  isShow: boolean = false;
  visa: String = 'visa';
  house: String = 'house';
  user: IUserInfo;
  doc: IDocData;
  visaStatus: String = 'optEad';
  remainingEadDate = 99;
  i983underReview = false;
  sampleTemplateLink =
    'http://10.0.0.102:8080/download?id=1&fileName=.gitignore';
  emptyTemplateLink = '/notprovidedyet';
  documents = [] as IDocData[];
  msg: String = 'Your current visa status is: ';

  downloadURL: Observable<string>;
  fileToUpload: File = null;
  fileName: string;
  formData: FormData;
  Form = new FormGroup({
    docType: new FormControl('docType'),
    file: new FormControl(''),
  });
  private fileSub: Subscription;

  constructor(
    private fileService: FileService,
    private sessionService: SessionService
  ) {}

  async ngOnInit(): Promise<void> {
    this.documents = await this.fileService.getDoc(
      parseInt(localStorage.getItem('eId'))
    );
    this.loaded = !this.loaded;
  }

  ngOnDestroy(): void {
    this.fileSub.unsubscribe();
  }

  openNav = () => {
    if (!this.isShow) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementsByClassName(
        'visa-status__content'
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
    document.getElementsByClassName(
      'visa-status__content'
      //@ts-ignore
    )[0].style.marginLeft = '0';
  };

  onHover = (value: String) => {
    document.getElementsByClassName(
      `visa-status__sidenav--${value}`
      //@ts-ignore
    )[0].style.height = 'auto';
    document.getElementsByClassName(
      `visa-status__sidenav--${value}`
      //@ts-ignore
    )[0].style.opacity = '1';
  };

  onHoverout = (value: String) => {
    document.getElementsByClassName(
      `visa-status__sidenav--${value}`
      //@ts-ignore
    )[0].style.height = '0';
    document.getElementsByClassName(
      `visa-status__sidenav--${value}`
      //@ts-ignore
    )[0].style.opacity = '0';
  };

  onFileUpload(files: FileList) {
    const formData = new FormData();
    this.fileToUpload = files.item(0);
    formData.append('file', this.fileToUpload);
    this.fileName = files.item(0).name;
    this.formData = formData;
  }

  onSubmit = async (event: any) => {
    this.loaded = !this.loaded;
    this.fileService
      .upload(this.formData)
      .then(() => {
        location.reload();
      })
      .catch(() => {
        redirectErrorPage(500);
      });
  };
  onDownloadClick = (fileName: string) => {
    this.fileService.downLoad(fileName, parseInt(localStorage.getItem('eId')));
  };

  returnLocal = () => {
    return localStorage.getItem('eId');
  };
}
