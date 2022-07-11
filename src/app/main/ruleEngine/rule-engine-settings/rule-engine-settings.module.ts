import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuleEngineSettingsRoutingModule } from './rule-engine-settings-routing.module';
import { RuleEngineDashboardComponent } from './rule-engine-dashboard/rule-engine-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModules } from 'src/app/config/material';
import { EditRuleEngineComponent } from './edit-rule-engine/edit-rule-engine.component';
import { AddRuleEngineComponent } from './add-rule-engine/add-rule-engine.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [RuleEngineDashboardComponent, EditRuleEngineComponent, AddRuleEngineComponent],
  imports: [
    CommonModule,
    RuleEngineSettingsRoutingModule,
    MaterialModules,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
    TranslateModule.forChild({
      extend: true
    })
  ]
})
export class RuleEngineSettingsModule { }
