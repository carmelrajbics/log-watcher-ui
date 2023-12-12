import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogErrorDetails } from './shared/models/error-details';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HomePageComponent,
    SettingPageComponent,
    ModalComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    IonicModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
  ],
  providers: [LogErrorDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
