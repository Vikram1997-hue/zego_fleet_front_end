import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModules } from '../config/material';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ComponentModule } from '../shared/components/component.module';

@NgModule({
  declarations: [ContainerComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    MaterialModules,
    ComponentModule,
    SharedModule,
    FormsModule,
    TranslateModule.forChild({
      extend: true
   })
  ]
})
export class ThemeModule { 
}

