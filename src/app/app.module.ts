import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './User/add-user/add-user.component';
import { ListUserComponent } from './User/list-user/list-user.component';
import { EditUserComponent } from './User/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './view/home/home.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableModule } from 'angular-resizable-element';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { IgxGeographicMapModule } from 'igniteui-angular-maps';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';
import { LoginComponent } from './view/login/login.component';
import { ViewComponent } from './view/view/view.component';
import {MatDialogModule} from "@angular/material";
import { DialogComponent } from './dialog/dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DatasetComponent } from './view/dataset/dataset.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUserComponent,
    EditUserComponent,
    NavMenuComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    ViewComponent,
    DialogComponent,
    DatasetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    DragDropModule,
    ResizableModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    IgxGeographicMapModule,
    IgxDataChartInteractivityModule,
    MatDialogModule,
    MatTabsModule,
    MatSnackBarModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})

export class AppModule {
}
