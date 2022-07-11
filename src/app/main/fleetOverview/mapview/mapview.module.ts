import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapviewRoutingModule } from './mapview-routing.module';
import { MapviewDashboardComponent } from './mapview-dashboard/mapview-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MaterialModules } from 'src/app/config/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';


@NgModule({
  declarations: [MapviewDashboardComponent],
  imports: [
    CommonModule,
    MapviewRoutingModule,
    FormsModule,
    SharedModule,
    NgxDaterangepickerMd.forRoot(),
    MaterialModules,
    NgbModule,
    TranslateModule.forChild({
      extend: true
    }),
    NgxShimmerLoadingModule,
  ]
})
export class MapviewModule { }
