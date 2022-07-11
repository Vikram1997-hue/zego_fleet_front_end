import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { TripDashboardComponent } from './trip-dashboard/trip-dashboard.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';

const routes: Routes = [
  {
    path: "",
    component: TripDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: RouteConfig.tripDetail.path,
    component: TripDetailComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }
