import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app.routes';
import { BreadcrumbComponent } from './common-component/breadcrumb/breadcrumb.component';
import {GrowlModule} from 'primeng/growl';

import { HttpClientModule } from '@angular/common/http';


import { SavedModelsComponent } from './home/saved-models/saved-models.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BreadcrumbComponent,
    SavedModelsComponent
  ],
  imports: [
     AppRoutingModule ,SharedModule,CommonModule,BrowserAnimationsModule,
    HttpClientModule ,GrowlModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
