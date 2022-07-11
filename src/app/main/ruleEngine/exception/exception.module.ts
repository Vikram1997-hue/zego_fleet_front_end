import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExceptionRoutingModule } from './exception-routing.module';
import { MaterialModules } from 'src/app/config/material';
import { ExceptionSettingComponent } from './exception-setting/exception-setting.component';


@NgModule({
  declarations: [ ExceptionSettingComponent],
  imports: [
    CommonModule,
    ExceptionRoutingModule,
    MaterialModules
  ]
})
export class ExceptionModule { }
