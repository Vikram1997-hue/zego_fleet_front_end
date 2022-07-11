import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RouteConfig } from './config/route-config';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import(`./onboarding/onboarding.module`).then(m => m.OnboardingModule)
  },
  {
    path: RouteConfig.main.path,
    loadChildren: () => import(`./theme/theme.module`).then(m => m.ThemeModule),
  },
  {
    path: "**",
    redirectTo: RouteConfig.signin.path
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true , preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
