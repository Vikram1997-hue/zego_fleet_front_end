import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapviewDashboardComponent } from './mapview-dashboard/mapview-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: MapviewDashboardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapviewRoutingModule { }
