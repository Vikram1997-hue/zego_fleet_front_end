import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExceptionsDashboardComponent } from './exceptions-dashboard/exceptions-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: ExceptionsDashboardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionsRoutingModule { }
