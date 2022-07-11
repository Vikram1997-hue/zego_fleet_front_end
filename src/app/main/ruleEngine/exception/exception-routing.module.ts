import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExceptionSettingComponent } from './exception-setting/exception-setting.component';


const routes: Routes = [
  {
    path: "",
    component: ExceptionSettingComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionRoutingModule { }
