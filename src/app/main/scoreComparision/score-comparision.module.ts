import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreComparisionRoutingModule } from './score-comparision-routing.module';
import { ScoreComparisionDashboardComponent } from './score-comparision-dashboard/score-comparision-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModules } from 'src/app/config/material';
import { TranslateModule } from '@ngx-translate/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [ScoreComparisionDashboardComponent],
  imports: [
    CommonModule,
    ScoreComparisionRoutingModule,
    MaterialModules,
    NgbModule,
    NgxGaugeModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    TranslateModule.forChild({
      extend: true
    }),
  ]
})
export class ScoreComparisionModule { }
