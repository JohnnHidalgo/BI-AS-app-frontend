import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './UIelement/nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './view/home/home.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableModule } from 'angular-resizable-element';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IgxGeographicMapModule } from 'igniteui-angular-maps';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';
import { LoginComponent } from './view/login/login.component';
import { ViewComponent } from './view/view/view.component';
import {MatDialogModule} from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DatasetComponent } from './view/dataset/dataset.component';
import { DashboarddialogComponent } from './UIelement/dialogs/dashboarddialog/dashboarddialog.component';
import { ViewdialogComponent } from './UIelement/dialogs/viewdialog/viewdialog.component';
import { AddUserComponent } from './UIelement/User/add-user/add-user.component';
import { EditUserComponent } from './UIelement/User/edit-user/edit-user.component';
import { ListUserComponent } from './UIelement/User/list-user/list-user.component';
import { LoginGuard } from './login.guard';
import { NologinGuard } from './nologin.guard';
import {MatMenuModule} from '@angular/material/menu';
import { PresentationComponent } from './view/presentation/presentation.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts";
// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    NavMenuComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    ViewComponent,
    DatasetComponent,
    ViewdialogComponent,
    DashboarddialogComponent,
    PresentationComponent,
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
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    ResizableModule,
    IgxGeographicMapModule,
    IgxDataChartInteractivityModule,
    MatDialogModule,
    MatTabsModule,
    MatSnackBarModule,
    MatMenuModule,
    NgxChartsModule
  ],
  providers: [ServiceService, LoginGuard, NologinGuard],
  bootstrap: [AppComponent],
  entryComponents: [DashboarddialogComponent, ViewdialogComponent]
})

export class AppModule {
}
