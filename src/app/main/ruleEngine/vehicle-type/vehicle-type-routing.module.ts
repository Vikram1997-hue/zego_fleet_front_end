import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleTypeSettingComponent } from './vehicle-type-setting/vehicle-type-setting.component';

const routes: Routes = [
  {
    path: "",
    component: VehicleTypeSettingComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleTypeRoutingModule { }
