import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
// import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire';
import { SessionService } from 'src/app/service/SessionService';
import { FileService } from 'src/app/service/FileService';
import { async } from '@angular/core/testing';
import Axios from 'axios';
import { config } from 'process';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-visa-status-component',
  templateUrl: './visa-status-page.component.html',
  styleUrls: ['./visa-status-page.component.scss']
})
export class VisaStatusComponent implements OnInit {

  isShow: boolean = false;
  visa: String = 'visa';
  house: String = 'house';
  user: IUserInfo;
  doc: IDocData;
  visaStatus :String ='optEad';
  remainingEadDate = 99;
  i983underReview = false;
  sampleTemplateLink = "http://10.0.0.102:8080/download?id=1&fileName=.gitignore";
  emptyTemplateLink = "/notprovidedyet";
  documents = [] as IDocData[];
  msg: String = "Your current visa status is: ";
//    ref: AngularFireStorageReference;
//     task: AngularFireUploadTask;
    downloadURL: Observable<string>;
    fileToUpload: File = null;
    fileName: string;
  formData: FormData;
  Form = new FormGroup({
    docType: new FormControl('docType'),
    file: new FormControl(''),
  });
  private fileSub: Subscription;
  private userSub: Subscription;
  private docSub: Subscription;

  
  constructor(private fileService: FileService,private sessionService: SessionService) {}

  async ngOnInit(): Promise<void> {
  
    console.info("yoyo");
    this.documents = await this.fileService.getDoc(parseInt(localStorage.getItem("eId")));
    console.log(this.documents);
  };

  ngOnDestroy(): void {
    this.fileSub.unsubscribe();
  };

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
    //@ts-ignore
    document.getElementsByClassName('visa-status__content')[0].style.marginLeft =
      '0';
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
    // console.info(event.target.files);

    const formData = new FormData();
    this.fileToUpload = files.item(0);
    formData.append('file',this.fileToUpload);
    this.fileName = files.item(0).name;
    this.formData=formData;
    // console.info(this.fileToUpload);

  }

  onSubmit = async (event: any) => {

    this.fileService.upload( this.formData);
    // console.info(event.target.files);
  }
  onDownloadClick =(fileName: string) =>{
    this.fileService.downLoad(fileName, parseInt(localStorage.getItem('eId')));
  }

  returnLocal =()=>{
    return localStorage.getItem('eId');
  }
}

