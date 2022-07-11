import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';

const routes: Routes = [
  {
    path: "",
    component: DriverDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: RouteConfig.driverDetail.path,
    component: DriverDetailComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
