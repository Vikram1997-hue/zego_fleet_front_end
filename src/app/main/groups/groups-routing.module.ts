import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { GroupaddComponent } from './groupadd/groupadd.component';
import { GroupdataComponent } from './groupdata/groupdata.component';
import { GroupeditComponent } from './groupedit/groupedit.component';

const routes: Routes = [
  {
    path:'',
    component:GroupdataComponent
  },
  {
    path: RouteConfig.editgroups.path,
    component: GroupeditComponent,
    pathMatch: 'full'
  },
  {
    path: RouteConfig.addgroups.path,
    component: GroupaddComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
