import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DialogData } from '../view/home/home.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, DialogData  {
  
  name: String;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

}
