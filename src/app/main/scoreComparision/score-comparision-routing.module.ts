import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreComparisionDashboardComponent } from './score-comparision-dashboard/score-comparision-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: ScoreComparisionDashboardComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreComparisionRoutingModule { }
