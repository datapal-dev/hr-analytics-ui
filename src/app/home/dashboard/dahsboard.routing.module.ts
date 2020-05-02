
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DataCleaningComponent } from "./data-cleaning/data-cleaning.component";
import { DataVisualizationComponent } from "./data-visualization/data-visualization.component";
import { DataModelingComponent } from "./data-modeling/data-modeling.component";
const routes: Routes = [
    { path: "", component: DashboardComponent,
        children: [
          { path: "cleaning", component: DataCleaningComponent },
          { path: "visualization", component: DataVisualizationComponent },
          { path: "modeling", component: DataModelingComponent }
        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }