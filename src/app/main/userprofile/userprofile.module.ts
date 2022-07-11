import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { MaterialModules } from 'src/app/config/material';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  declarations: [ManageProfileComponent,ChangePasswordComponent,ColorPickerComponent],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    SharedModule,
    MaterialModules,
    Ng2TelInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDaterangepickerMd.forRoot(),
    TranslateModule.forChild({
      extend: true
   }),
   ColorPickerModule
  ]
})
export class UserprofileModule {
}

