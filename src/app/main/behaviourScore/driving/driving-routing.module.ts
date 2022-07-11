import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrivingbehaviourscoreComponent } from './VehiclesDrivingBehaviour/drivingbehaviourscore.component';

const routes: Routes = [
  {
    path: "",
    component: DrivingbehaviourscoreComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrivingRoutingModule { }
