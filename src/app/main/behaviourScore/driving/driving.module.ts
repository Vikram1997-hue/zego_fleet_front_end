import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrivingRoutingModule } from './driving-routing.module';
import { DrivingbehaviourscoreComponent } from './VehiclesDrivingBehaviour/drivingbehaviourscore.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MaterialModules } from 'src/app/config/material';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DrivingbehaviourscoreComponent],
  imports: [
    CommonModule,
    DrivingRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    ComponentModule,
    NgxDaterangepickerMd.forRoot(),
    MaterialModules,
    TranslateModule.forChild({
      extend: true
   })
  ]
})
export class DrivingModule { }
