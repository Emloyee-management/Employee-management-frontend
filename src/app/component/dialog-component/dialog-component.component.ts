import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss'],
})
export class DialogComponentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  closeDialog = (): void => {
    this.dialogRef.close('');
  };

  onNoClick = (): void => {
    this.dialogRef.close();
  };
}
