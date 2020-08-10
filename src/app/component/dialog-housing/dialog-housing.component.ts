import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-housing.component.html',
  styleUrls: ['./dialog-housing.component.scss'],
})
export class DialogHousingComponent implements OnInit
{
  constructor(
    public dialogRef: MatDialogRef<DialogHousingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFacilityInfo
  ) { }

  ngOnInit(): void { }

  closeDialog = (): void =>
  {
    this.dialogRef.close('');
  };

  onNoClick = (): void =>
  {
    this.dialogRef.close();
  };
}
