import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuelDashboardComponent } from './fuel-dashboard/fuel-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: FuelDashboardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelMilageRoutingModule { }
