import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../interceptor/auth.guard';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: "",
    component: ContainerComponent,
    children: [
      {
        path: "",
        loadChildren: () => import(`../main/main.module`).then(m => m.MainModule),
        canLoad: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
