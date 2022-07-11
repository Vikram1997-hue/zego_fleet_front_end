import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteConfig } from "src/app/config/route-config";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ColorPickerComponent } from "./color-picker/color-picker.component";
import { ManageProfileComponent } from "./manage-profile/manage-profile.component";

const routes: Routes = [
  {
    path: "",
    component: ManageProfileComponent,
    pathMatch: "full",
  },
  {
    path: RouteConfig.changepassword.path,
    component: ChangePasswordComponent,
    pathMatch: "full",
  },
  {
    path: RouteConfig.colorpicker.path,
    component: ColorPickerComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserprofileRoutingModule {}
