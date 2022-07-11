import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { DialogContentExampleDialog, TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripDashboardComponent } from './trip-dashboard/trip-dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModules } from 'src/app/config/material';
import { NgxGaugeModule } from 'ngx-gauge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';


@NgModule({
  declarations: [TripDetailComponent, TripDashboardComponent, DialogContentExampleDialog],
  imports: [
    CommonModule,
    TripRoutingModule,
    FormsModule,
    SharedModule,
    NgxDaterangepickerMd.forRoot(),
    MaterialModules,
    NgxGaugeModule,
    NgbModule,
    FlexLayoutModule,
    TranslateModule.forChild({
      extend: true
    }),
    ComponentModule,
    NgxShimmerLoadingModule
  ],
  
})


export class TripModule {
}