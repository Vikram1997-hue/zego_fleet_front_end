import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleTypeRoutingModule } from './vehicle-type-routing.module';
import { VehicleTypeSettingComponent } from './vehicle-type-setting/vehicle-type-setting.component';
import { MaterialModules } from 'src/app/config/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [VehicleTypeSettingComponent],
  imports: [
    CommonModule,
    VehicleTypeRoutingModule,
    MaterialModules,
    NgbModule,
    FormsModule,
    TranslateModule.forChild({
      extend: true
   })
  ]
})
export class VehicleTypeModule { }
