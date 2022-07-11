import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from '../config/route-config';

const routes: Routes = [
  {
    path: '',
    redirectTo: RouteConfig.trip.path
  },
  {
    path: RouteConfig.dashboard.path,
    loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
  },
  {
    path: RouteConfig.profile.path,
    loadChildren: () => import(`./userprofile/userprofile.module`).then(m => m.UserprofileModule)
  },
  {
    path: RouteConfig.vehicle.path,
    loadChildren: () => import(`./fleetOverview/vehicle/vehicle.module`).then(m => m.VehicleModule)
  },
  {
    path: RouteConfig.trip.path,
    loadChildren: () => import(`./fleetOverview/trip/trip.module`).then(m => m.TripModule)
  },
  // {
  //   path: RouteConfig.driver.path,
  //   loadChildren: () => import(`./fleetOverview/driver/driver.module`).then(m => m.DriverModule)
  // },
  {
    path: RouteConfig.exceptions.path,
    loadChildren: () => import(`./fleetOverview/exceptions/exceptions.module`).then(m => m.ExceptionsModule)
  },
  {
    path: RouteConfig.mapview.path,
    loadChildren: () => import(`./fleetOverview/mapview/mapview.module`).then(m => m.MapviewModule)
  },

  {
    path: RouteConfig.exception.path,
    loadChildren: () => import(`./ruleEngine/exception/exception.module`).then(m => m.ExceptionModule)
  },

  {
    path: RouteConfig.vehiclesetting.path,
    loadChildren: () => import(`./ruleEngine/vehicle-type/vehicle-type.module`).then(m => m.VehicleTypeModule)
  },

  {
    path: RouteConfig.weightage.path,
    loadChildren: () => import(`./ruleEngine/weightage/weightage.module`).then(m => m.WeightageModule)
  },

  {
    path: RouteConfig.ruleengine.path,
    loadChildren: () => import(`./ruleEngine/rule-engine-settings/rule-engine-settings.module`).then(m => m.RuleEngineSettingsModule)
  },

  {
    path: RouteConfig.drivingBehaviour.path,
    loadChildren: () => import(`./behaviourScore/driving/driving.module`).then(m => m.DrivingModule)
  },

  {
    path: RouteConfig.vechiledrivingBehaviour.path,
    loadChildren: () => import(`./behaviourScore/vechile-driving/vechile-driving.module`).then(m => m.VechileDrivingModule)
  },

  {
    path: RouteConfig.scrorecomparision.path,
    loadChildren: () => import(`./scoreComparision/score-comparision.module`).then(m => m.ScoreComparisionModule)
  },
  {
    path: RouteConfig.groups.path,
    loadChildren: () => import(`./groups/groups.module`).then(m => m.GroupsModule)
  },
  {
    path: RouteConfig.fuelmilage.path,
    loadChildren: () => import(`./fuelMilage/fuel-milage.module`).then(m => m.FuelMilageModule)
  },
  {
    path: RouteConfig.support.path,
    loadChildren: () => import(`./contactSupport/support.module`).then(m => m.SupportModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
