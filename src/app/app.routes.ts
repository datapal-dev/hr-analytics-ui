import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { DataPreprationComponent } from "./home/data-prepration/data-prepration.component";
import { DashboardComponent } from "./home/dashboard/dashboard.component";

import { DataCleaningComponent } from "./home/dashboard/data-cleaning/data-cleaning.component";
import { DataVisualizationComponent } from "./home/dashboard/data-visualization/data-visualization.component";
import { DataModelingComponent } from "./home/dashboard/data-modeling/data-modeling.component";
import { SavedModelsComponent } from "./home/saved-models/saved-models.component";
const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "new",
        loadChildren: "./home/data-prepration/data-prepration.module#DataPreprationModule"
      },
      { path: "savedModels", component: SavedModelsComponent },
      {
        path: "dashboard",
        loadChildren: "./home/dashboard/dashboard.module#DashboardModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
