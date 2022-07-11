import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactSupportComponent } from './contact-support/contact-support.component';

const routes: Routes = [
  {
  path: "",
  component: ContactSupportComponent,
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
