import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RouteConfig } from '../config/route-config';
import { ResetComponent } from './reset/reset.component';
import { ForgetComponent } from './forget/forget.component';
import { CanLoginActivate } from '../interceptor/auth.guard';

const routes: Routes = [{
  path: "",
  component: WrapperComponent,
  children: [
    {
      path: '',
      redirectTo: RouteConfig.signin.path   
    },
    {
      path: RouteConfig.signin.path,
      component: SigninComponent,
      pathMatch: 'full',
      canActivate : [CanLoginActivate] 
    },
    {
      path: RouteConfig.resetPassword.path,
      component: ResetComponent,
      pathMatch: 'full',
      canActivate : [CanLoginActivate] 
    },
    {
      path: RouteConfig.forget.path,
      component: ForgetComponent,
      pathMatch: 'full',
      canActivate : [CanLoginActivate] 
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
