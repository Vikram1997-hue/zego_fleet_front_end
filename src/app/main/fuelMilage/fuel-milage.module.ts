import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelMilageRoutingModule } from './fuel-milage-routing.module';
import { FuelDashboardComponent } from './fuel-dashboard/fuel-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MaterialModules } from 'src/app/config/material';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FuelDashboardComponent],
  imports: [
    CommonModule,
    FuelMilageRoutingModule,
    FormsModule,
    SharedModule,
    NgxDaterangepickerMd.forRoot(),
    MaterialModules,
    NgbModule,
    TranslateModule.forChild({
      extend: true
    }),
  ]
})
export class FuelMilageModule { }
