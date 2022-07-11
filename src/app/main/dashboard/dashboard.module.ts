import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxGaugeModule } from 'ngx-gauge';
import { MaterialModules } from 'src/app/config/material';
import { DashboardHomeV2Component } from './dashboard-home-v2/dashboard-home-v2.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
// import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DashboardHomeComponent, DashboardHomeV2Component, DashboardCardComponent, BarChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModules,
    NgbModule,
    NgxGaugeModule,
    FlexLayoutModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    TranslateModule.forChild({
      extend: true
    }),
    NgxShimmerLoadingModule
  ]
})
export class DashboardModule { }
