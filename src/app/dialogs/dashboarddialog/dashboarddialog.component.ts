import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/view/home/home.component';


@Component({
  selector: 'app-dashboarddialog',
  templateUrl: './dashboarddialog.component.html',
  styleUrls: ['./dashboarddialog.component.css']
})
export class DashboarddialogComponent implements OnInit {

  name: String;

  constructor(public dialogRef: MatDialogRef<DashboarddialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onCloseDialog() {
    this.dialogRef.close();
  }
}
