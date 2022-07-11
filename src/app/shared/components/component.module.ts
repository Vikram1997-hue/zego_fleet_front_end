import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripHistoryMapComponent } from './trip-history-map/trip-history-map.component';
import { TripHistoryComponent } from './trip-history/trip-history.component';
import { TranslateModule } from '@ngx-translate/core';
import { TripDetailMapComponent } from './trip-detail-map/trip-detail-map.component';
import { SharedModule } from '../shared.module';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MaterialModules } from 'src/app/config/material';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { TopBoxComponent } from './top-box/top-box.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [TripHistoryComponent, TripHistoryMapComponent, TripDetailMapComponent, SnackbarComponent, ModalComponent, TopBoxComponent],
  imports: [
    SharedModule,
    CommonModule,
    MaterialModules,
    NgbModule,
    NgxDaterangepickerMd.forRoot(),
    NgxShimmerLoadingModule,
    TranslateModule.forChild({
        extend: true
      }),
      FormsModule
  ],
  exports: [TripHistoryComponent, TripHistoryMapComponent,TripDetailMapComponent,TopBoxComponent],
})
export class ComponentModule { }
