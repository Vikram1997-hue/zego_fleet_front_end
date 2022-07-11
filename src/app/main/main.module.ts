import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MaterialModules } from '../config/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModules,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModule { }
