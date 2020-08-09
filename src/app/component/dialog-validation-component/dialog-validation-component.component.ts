import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-dialog-validation-component',
  templateUrl: './dialog-validation-component.component.html',
  styleUrls: ['./dialog-validation-component.component.scss'],
})
export class DialogValidationComponentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogValidationComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public title: string
  ) {}

  ngOnInit(): void {}

  closeDialog = (): void => {
    this.dialogRef.close('');
  };

  onNoClick = (): void => {
    this.dialogRef.close();
  };
}
