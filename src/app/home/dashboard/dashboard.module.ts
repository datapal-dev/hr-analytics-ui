import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponent } from "src/app/home/dashboard/dashboard.component";
import { DataCleaningComponent } from "src/app/home/dashboard/data-cleaning/data-cleaning.component";
import { DataVisualizationComponent } from "src/app/home/dashboard/data-visualization/data-visualization.component";
import { DataModelingComponent } from "src/app/home/dashboard/data-modeling/data-modeling.component";
import { CustomFormComponent } from "src/app/common-component/custom-form/custom-form.component";
import { ModelDescrptionComponent } from "src/app/home/dashboard/data-modeling/model-descrption/model-descrption.component";
import { DashboardRoutingModule } from "./dahsboard.routing.module";


import {OrganizationChartModule} from 'primeng/organizationchart';
//*****  add .src to the following imports that won't import otherwise  ********
import * as more from 'highcharts/highcharts-more.src'; 
import * as exporting from 'highcharts/modules/exporting.src';
import * as highstock  from 'highcharts/modules/stock.src';
import * as highmaps from 'highcharts/modules/map.src';
import { ChartComponent } from "src/app/common-component/chart/chart.component";
import { ChartModule, HIGHCHARTS_MODULES  } from 'angular-highcharts';

@NgModule({
  imports: [ DashboardRoutingModule,SharedModule,CommonModule,OrganizationChartModule,ChartModule],
  declarations: [DashboardComponent,ModelDescrptionComponent,ChartComponent,DataCleaningComponent,DataVisualizationComponent,DataModelingComponent,CustomFormComponent],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, highstock, highmaps ] } 
    ],
})
export class DashboardModule {}