import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VechileDrivingRoutingModule } from './vechile-driving-routing.module';
import { VechiledrivingbehaviourscoreComponent } from './vechiledrivingbehaviourscore/vechiledrivingbehaviourscore.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MaterialModules } from 'src/app/config/material';
import { ComponentModule } from 'src/app/shared/components/component.module';

@NgModule({
  declarations: [VechiledrivingbehaviourscoreComponent],
  imports: [
    CommonModule,
    VechileDrivingRoutingModule,
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
export class VechileDrivingModule { }
