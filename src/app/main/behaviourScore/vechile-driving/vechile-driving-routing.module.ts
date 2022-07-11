import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VechiledrivingbehaviourscoreComponent } from "./vechiledrivingbehaviourscore/vechiledrivingbehaviourscore.component";

const routes: Routes = [
  {
    path: "",
    component: VechiledrivingbehaviourscoreComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VechileDrivingRoutingModule {}
