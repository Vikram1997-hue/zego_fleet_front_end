(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "3hl/":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/route-config */ "1r8O");





const routes = [
    {
        path: '',
        redirectTo: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].trip.path
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].dashboard.path,
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~behaviourScore-driving-driving-module~behaviourScore-vechile-driving-vechile-driving-module~~8fbbda33"), __webpack_require__.e("default~dashboard-dashboard-module~fleetOverview-trip-trip-module~fleetOverview-vehicle-vehicle-modu~fba2ee9c"), __webpack_require__.e("default~dashboard-dashboard-module~fleetOverview-trip-trip-module~fleetOverview-vehicle-vehicle-module"), __webpack_require__.e("default~dashboard-dashboard-module~fleetOverview-trip-trip-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "GEmG")).then(m => m.DashboardModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].profile.path,
        loadChildren: () => Promise.all(/*! import() | userprofile-userprofile-module */[__webpack_require__.e("default~contactSupport-support-module~groups-groups-module~userprofile-userprofile-module"), __webpack_require__.e("default~contactSupport-support-module~userprofile-userprofile-module"), __webpack_require__.e("userprofile-userprofile-module")]).then(__webpack_require__.bind(null, /*! ./userprofile/userprofile.module */ "LnuZ")).then(m => m.UserprofileModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].vehicle.path,
        loadChildren: () => Promise.all(/*! import() | fleetOverview-vehicle-vehicle-module */[__webpack_require__.e("default~behaviourScore-driving-driving-module~behaviourScore-vechile-driving-vechile-driving-module~~8fbbda33"), __webpack_require__.e("default~dashboard-dashboard-module~fleetOverview-trip-trip-module~fleetOverview-vehicle-vehicle-modu~fba2ee9c"), __webpack_require__.e("default~dashboard-dashboard-module~fleetOverview-trip-trip-module~fleetOverview-vehicle-vehicle-module"), __webpack_require__.e("fleetOverview-vehicle-vehicle-module")]).then(__webpack_require__.bind(null, /*! ./fleetOverview/vehicle/vehicle.module */ "xuaZ")).then(m => m.VehicleModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].trip.path,
        loadChildren: () => Promise.all(/*! import() | fleetOverview-trip-trip-module */[__webpack_require__.e("default~behaviourScore-driving-driving-module~behaviourScore-vechile-driving-vechile-driving-module~~8fbbda33"), __webpack_require__.e("default~dashboard-dashboard-module~fleetOverview-trip-trip-module~fleetOverview-vehicle-vehicle-modu~fba2ee9c"), __webpack_require__.e("default~dashboard-dashboard-module~fleetOverview-trip-trip-module~fleetOverview-vehicle-vehicle-module"), __webpack_require__.e("default~dashboard-dashboard-module~fleetOverview-trip-trip-module"), __webpack_require__.e("fleetOverview-trip-trip-module")]).then(__webpack_require__.bind(null, /*! ./fleetOverview/trip/trip.module */ "oFxD")).then(m => m.TripModule)
    },
    // {
    //   path: RouteConfig.driver.path,
    //   loadChildren: () => import(`./fleetOverview/driver/driver.module`).then(m => m.DriverModule)
    // },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].exceptions.path,
        loadChildren: () => __webpack_require__.e(/*! import() | fleetOverview-exceptions-exceptions-module */ "fleetOverview-exceptions-exceptions-module").then(__webpack_require__.bind(null, /*! ./fleetOverview/exceptions/exceptions.module */ "Tb/1")).then(m => m.ExceptionsModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].mapview.path,
        loadChildren: () => __webpack_require__.e(/*! import() | fleetOverview-mapview-mapview-module */ "fleetOverview-mapview-mapview-module").then(__webpack_require__.bind(null, /*! ./fleetOverview/mapview/mapview.module */ "ZyhS")).then(m => m.MapviewModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].exception.path,
        loadChildren: () => __webpack_require__.e(/*! import() | ruleEngine-exception-exception-module */ "ruleEngine-exception-exception-module").then(__webpack_require__.bind(null, /*! ./ruleEngine/exception/exception.module */ "ic1c")).then(m => m.ExceptionModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].vehiclesetting.path,
        loadChildren: () => __webpack_require__.e(/*! import() | ruleEngine-vehicle-type-vehicle-type-module */ "ruleEngine-vehicle-type-vehicle-type-module").then(__webpack_require__.bind(null, /*! ./ruleEngine/vehicle-type/vehicle-type.module */ "NR7f")).then(m => m.VehicleTypeModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].weightage.path,
        loadChildren: () => __webpack_require__.e(/*! import() | ruleEngine-weightage-weightage-module */ "ruleEngine-weightage-weightage-module").then(__webpack_require__.bind(null, /*! ./ruleEngine/weightage/weightage.module */ "ozB2")).then(m => m.WeightageModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ruleengine.path,
        loadChildren: () => __webpack_require__.e(/*! import() | ruleEngine-rule-engine-settings-rule-engine-settings-module */ "ruleEngine-rule-engine-settings-rule-engine-settings-module").then(__webpack_require__.bind(null, /*! ./ruleEngine/rule-engine-settings/rule-engine-settings.module */ "JAmX")).then(m => m.RuleEngineSettingsModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].drivingBehaviour.path,
        loadChildren: () => Promise.all(/*! import() | behaviourScore-driving-driving-module */[__webpack_require__.e("default~behaviourScore-driving-driving-module~behaviourScore-vechile-driving-vechile-driving-module~~8fbbda33"), __webpack_require__.e("behaviourScore-driving-driving-module")]).then(__webpack_require__.bind(null, /*! ./behaviourScore/driving/driving.module */ "IcgC")).then(m => m.DrivingModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].vechiledrivingBehaviour.path,
        loadChildren: () => Promise.all(/*! import() | behaviourScore-vechile-driving-vechile-driving-module */[__webpack_require__.e("default~behaviourScore-driving-driving-module~behaviourScore-vechile-driving-vechile-driving-module~~8fbbda33"), __webpack_require__.e("behaviourScore-vechile-driving-vechile-driving-module")]).then(__webpack_require__.bind(null, /*! ./behaviourScore/vechile-driving/vechile-driving.module */ "xngT")).then(m => m.VechileDrivingModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].scrorecomparision.path,
        loadChildren: () => Promise.all(/*! import() | scoreComparision-score-comparision-module */[__webpack_require__.e("default~dashboard-dashboard-module~fleetOverview-trip-trip-module~fleetOverview-vehicle-vehicle-modu~fba2ee9c"), __webpack_require__.e("scoreComparision-score-comparision-module")]).then(__webpack_require__.bind(null, /*! ./scoreComparision/score-comparision.module */ "7Nu/")).then(m => m.ScoreComparisionModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].groups.path,
        loadChildren: () => Promise.all(/*! import() | groups-groups-module */[__webpack_require__.e("default~contactSupport-support-module~groups-groups-module~userprofile-userprofile-module"), __webpack_require__.e("groups-groups-module")]).then(__webpack_require__.bind(null, /*! ./groups/groups.module */ "naKD")).then(m => m.GroupsModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].fuelmilage.path,
        loadChildren: () => Promise.all(/*! import() | fuelMilage-fuel-milage-module */[__webpack_require__.e("default~behaviourScore-driving-driving-module~behaviourScore-vechile-driving-vechile-driving-module~~8fbbda33"), __webpack_require__.e("fuelMilage-fuel-milage-module")]).then(__webpack_require__.bind(null, /*! ./fuelMilage/fuel-milage.module */ "howR")).then(m => m.FuelMilageModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].support.path,
        loadChildren: () => Promise.all(/*! import() | contactSupport-support-module */[__webpack_require__.e("default~contactSupport-support-module~groups-groups-module~userprofile-userprofile-module"), __webpack_require__.e("default~contactSupport-support-module~userprofile-userprofile-module"), __webpack_require__.e("contactSupport-support-module")]).then(__webpack_require__.bind(null, /*! ./contactSupport/support.module */ "EyFP")).then(m => m.SupportModule)
    },
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "3hl/");
/* harmony import */ var _config_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/material */ "Uo7g");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
            _config_material__WEBPACK_IMPORTED_MODULE_3__["MaterialModules"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
        _config_material__WEBPACK_IMPORTED_MODULE_3__["MaterialModules"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                    _config_material__WEBPACK_IMPORTED_MODULE_3__["MaterialModules"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map