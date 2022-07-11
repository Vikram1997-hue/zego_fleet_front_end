import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MaterialModules } from 'src/app/config/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { DialogContentExampleDialog, DriverDetailComponent } from './driver-detail/driver-detail.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { GoalSettingComponent } from './goal-setting/goal-setting.component';


@NgModule({
  declarations: [DriverDashboardComponent, DriverDetailComponent,DialogContentExampleDialog, GoalSettingComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    FormsModule,
    SharedModule,
    ComponentModule,
    NgxDaterangepickerMd.forRoot(),
    MaterialModules,
    NgxGaugeModule,
    NgbModule,
    FlexLayoutModule,
    TranslateModule.forChild({
      extend: true
   })
  ]
})
export class DriverModule { 
}
