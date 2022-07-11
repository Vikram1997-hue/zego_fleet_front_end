import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { ContactSupportComponent } from './contact-support/contact-support.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModules } from 'src/app/config/material';
import { Ng2TelInputModule } from 'ng2-tel-input';


@NgModule({
  declarations: [ContactSupportComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    MaterialModules,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    TranslateModule.forChild({
      extend: true
    })
  ]
})
export class SupportModule { }
