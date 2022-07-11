import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleDashboardComponent } from './vehicle-dashboard/vehicle-dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { DialogContentExampleDialog, VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { MaterialModules } from 'src/app/config/material';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { DashboardModule } from '../../dashboard/dashboard.module';
import { VehicleCardsComponent } from './vehicle-cards/vehicle-cards.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';


@NgModule({
  declarations: [VehicleDashboardComponent, VehicleDetailComponent, VehicleCardsComponent,DialogContentExampleDialog],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    ComponentModule,
    NgxDaterangepickerMd.forRoot(),
    MaterialModules,
    TranslateModule.forChild({
      extend: true
   }),
   NgxGaugeModule,
   NgxShimmerLoadingModule
  ]
})
export class VehicleModule { 
}
