import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeightageRoutingModule } from './weightage-routing.module';
import { WeightageDashboardComponent } from './weightage-dashboard/weightage-dashboard.component';
import { FormsModule } from '@angular/forms';
import { MaterialModules } from 'src/app/config/material';
import { EditWeightageSettingComponent } from './edit-weightage-setting/edit-weightage-setting.component';


@NgModule({
  declarations: [WeightageDashboardComponent, EditWeightageSettingComponent],
  imports: [
    CommonModule,
    WeightageRoutingModule,
    MaterialModules,
    // NgbModule,
    FormsModule,
  ]
})
export class WeightageModule { }
