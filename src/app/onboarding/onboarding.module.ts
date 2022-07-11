import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { SigninComponent } from './signin/signin.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ResetComponent } from './reset/reset.component';
import { ForgetComponent } from './forget/forget.component';
import { MaterialModules } from '../config/material';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TextCarouselComponent } from './text-carousel/text-carousel.component';
@NgModule({
  declarations: [SigninComponent, WrapperComponent, ResetComponent, ForgetComponent,TextCarouselComponent],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    MaterialModules,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      extend: true
   }),
   CarouselModule
  ]
})
export class OnboardingModule { 
}
