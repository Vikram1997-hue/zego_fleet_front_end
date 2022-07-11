import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { DashboardHomeV2Component } from './dashboard-home-v2/dashboard-home-v2.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: "d",
    component: DashboardHomeComponent,
    pathMatch: 'full'
  },
  {
    path: "",
    component: DashboardHomeV2Component,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
