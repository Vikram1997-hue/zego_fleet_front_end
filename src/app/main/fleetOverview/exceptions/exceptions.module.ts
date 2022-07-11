import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExceptionsRoutingModule } from './exceptions-routing.module';
import { ExceptionsDashboardComponent, SingleException } from './exceptions-dashboard/exceptions-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MaterialModules } from 'src/app/config/material';
// import { ComponentModule } from 'src/app/shared/components/component.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExceptionMapComponent } from './exception-map/exception-map.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';


@NgModule({
  declarations: [ExceptionsDashboardComponent, ExceptionMapComponent, SingleException],
  imports: [
    CommonModule,
    ExceptionsRoutingModule,
    FormsModule,
    SharedModule,
    NgxDaterangepickerMd.forRoot(),
    MaterialModules,
    NgbModule,
    TranslateModule.forChild({
      extend: true
    }),
    NgxShimmerLoadingModule
    // ComponentModule
  ]
})
export class ExceptionsModule { }
