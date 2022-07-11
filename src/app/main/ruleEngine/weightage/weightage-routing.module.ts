import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { EditWeightageSettingComponent } from './edit-weightage-setting/edit-weightage-setting.component';
import { WeightageDashboardComponent } from './weightage-dashboard/weightage-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: WeightageDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: RouteConfig.editweightage.path,
    component: EditWeightageSettingComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeightageRoutingModule { }
