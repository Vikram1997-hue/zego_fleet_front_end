import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupdataComponent } from './groupdata/groupdata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModules } from 'src/app/config/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { GroupaddComponent } from './groupadd/groupadd.component';
import { GroupeditComponent } from './groupedit/groupedit.component';
import { BED3OrgchartModule } from 'be-d3-orgchart';
import { Ng2TelInputModule } from 'ng2-tel-input';


@NgModule({
  declarations: [GroupdataComponent, GroupaddComponent, GroupeditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GroupsRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModules,
    BED3OrgchartModule,
    Ng2TelInputModule,
    TranslateModule.forChild({
      extend: true
   })
  ]
})
export class GroupsModule { }
