import { NgModule } from "@angular/core";
import { DataPreprationComponent } from "./data-prepration.component";
import { DataPreprationRoutingModule } from "./data-prepration.routing.module";
import { UploadViewDataComponent } from "./upload-view-data/upload-view-data.component";
import { AnalysisOptionsComponent } from "./analysis-options/analysis-options.component";
import { ColumnSelectionComponent } from "./column-selection/column-selection.component";
import { CommonModule } from "@angular/common";
import {DragDropModule} from 'primeng/dragdrop';

import { FileUploadModule } from 'ng2-file-upload';

import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
  imports: [ DataPreprationRoutingModule,SharedModule,DragDropModule,CommonModule,FileUploadModule],
  declarations: [DataPreprationComponent,UploadViewDataComponent,AnalysisOptionsComponent,ColumnSelectionComponent]
})
export class DataPreprationModule {}