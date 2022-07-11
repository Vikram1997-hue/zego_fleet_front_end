import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { VehicleDashboardComponent } from './vehicle-dashboard/vehicle-dashboard.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

const routes: Routes = [
  {
    path: "",
    component: VehicleDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: RouteConfig.vehicleDetail.path,
    component: VehicleDetailComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
