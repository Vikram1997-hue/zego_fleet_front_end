import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { AddRuleEngineComponent } from './add-rule-engine/add-rule-engine.component';
import { EditRuleEngineComponent } from './edit-rule-engine/edit-rule-engine.component';
import { RuleEngineDashboardComponent } from './rule-engine-dashboard/rule-engine-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: RuleEngineDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: RouteConfig.editruleengine.path,
    component: EditRuleEngineComponent,
    pathMatch: 'full'
  },
  {
    path: RouteConfig.addruleengine.path,
    component: AddRuleEngineComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuleEngineSettingsRoutingModule { }
