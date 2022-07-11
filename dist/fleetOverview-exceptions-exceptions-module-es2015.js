(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fleetOverview-exceptions-exceptions-module"],{

/***/ "CcJo":
/*!****************************************************************************!*\
  !*** ./src/app/main/fleetOverview/exceptions/exceptions-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ExceptionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionsRoutingModule", function() { return ExceptionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _exceptions_dashboard_exceptions_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exceptions-dashboard/exceptions-dashboard.component */ "j7MH");





const routes = [
    {
        path: "",
        component: _exceptions_dashboard_exceptions_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["ExceptionsDashboardComponent"],
        pathMatch: 'full'
    }
];
class ExceptionsRoutingModule {
}
ExceptionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExceptionsRoutingModule });
ExceptionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExceptionsRoutingModule_Factory(t) { return new (t || ExceptionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExceptionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExceptionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Tb/1":
/*!********************************************************************!*\
  !*** ./src/app/main/fleetOverview/exceptions/exceptions.module.ts ***!
  \********************************************************************/
/*! exports provided: ExceptionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionsModule", function() { return ExceptionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _exceptions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exceptions-routing.module */ "CcJo");
/* harmony import */ var _exceptions_dashboard_exceptions_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exceptions-dashboard/exceptions-dashboard.component */ "j7MH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-daterangepicker-material */ "YhS8");
/* harmony import */ var src_app_config_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/config/material */ "Uo7g");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _exception_map_exception_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exception-map/exception-map.component */ "nRjq");
/* harmony import */ var ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-shimmer-loading */ "+HUQ");









// import { ComponentModule } from 'src/app/shared/components/component.module';






class ExceptionsModule {
}
ExceptionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExceptionsModule });
ExceptionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExceptionsModule_Factory(t) { return new (t || ExceptionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _exceptions_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExceptionsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(),
            src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                extend: true
            }),
            ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_11__["NgxShimmerLoadingModule"]
            // ComponentModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExceptionsModule, { declarations: [_exceptions_dashboard_exceptions_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ExceptionsDashboardComponent"], _exception_map_exception_map_component__WEBPACK_IMPORTED_MODULE_10__["ExceptionMapComponent"], _exceptions_dashboard_exceptions_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["SingleException"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _exceptions_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExceptionsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"], src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_11__["NgxShimmerLoadingModule"]
        // ComponentModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExceptionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_exceptions_dashboard_exceptions_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ExceptionsDashboardComponent"], _exception_map_exception_map_component__WEBPACK_IMPORTED_MODULE_10__["ExceptionMapComponent"], _exceptions_dashboard_exceptions_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["SingleException"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _exceptions_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExceptionsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(),
                    src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                        extend: true
                    }),
                    ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_11__["NgxShimmerLoadingModule"]
                    // ComponentModule
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "j7MH":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/fleetOverview/exceptions/exceptions-dashboard/exceptions-dashboard.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ExceptionsDashboardComponent, SingleException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionsDashboardComponent", function() { return ExceptionsDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleException", function() { return SingleException; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/app-config */ "Tr6M");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/route-config */ "1r8O");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/main.service */ "c/rV");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/local.service */ "s3jE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _exception_map_exception_map_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../exception-map/exception-map.component */ "nRjq");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



















function ExceptionsDashboardComponent_div_69_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function ExceptionsDashboardComponent_div_69_ng_template_2_div_0_div_26_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r11.service.convertToDutch(data_r9 == null ? null : data_r9.violation_rate) || "0", " km/h > ", ctx_r11.service.convertToDutch(data_r9 == null ? null : data_r9.limit) || "0", " km/h ");
} }
function ExceptionsDashboardComponent_div_69_ng_template_2_div_0_div_26_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r12.formatToFixed(data_r9 == null ? null : data_r9.violation_rate, 1), " G > ", ctx_r12.formatToFixed(data_r9 == null ? null : data_r9.limit, 1), " G");
} }
function ExceptionsDashboardComponent_div_69_ng_template_2_div_0_div_26_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r13.service.convertHMS(data_r9 == null ? null : data_r9.violation_rate), " > ", ctx_r13.service.convertHMS(data_r9 == null ? null : data_r9.limit), "");
} }
function ExceptionsDashboardComponent_div_69_ng_template_2_div_0_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "style", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " .st0 { fill: #474F5A; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExceptionsDashboardComponent_div_69_ng_template_2_div_0_div_26_div_16_Template, 2, 2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExceptionsDashboardComponent_div_69_ng_template_2_div_0_div_26_div_17_Template, 2, 2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExceptionsDashboardComponent_div_69_ng_template_2_div_0_div_26_div_18_Template, 2, 2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExceptionsDashboardComponent_div_69_ng_template_2_div_0_div_26_Template_span_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const data_r9 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r17.openTripListPage(data_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r8.service.formatTime(data_r9 == null ? null : data_r9.start_time), " . ", ctx_r8.exceptionTypeObj[data_r9.score_type], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r9 == null ? null : data_r9.vehicle == null ? null : data_r9.vehicle.license_plate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r9 == null ? null : data_r9.score_type) == "speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r9 == null ? null : data_r9.score_type) == "acceleration" || (data_r9 == null ? null : data_r9.score_type) == "breaking" || (data_r9 == null ? null : data_r9.score_type) == "cornering");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r9 == null ? null : data_r9.score_type) == "idling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.service.convertHMSupdate(data_r9 == null ? null : data_r9.duration_seconds));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.service.convertToDutch(ctx_r8.formatToFixed(data_r9 == null ? null : data_r9.distance, 2)) || "0", "km ");
} }
function ExceptionsDashboardComponent_div_69_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " .st0 { fill: #FFFFFF; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ExceptionsDashboardComponent_div_69_ng_template_2_div_0_div_26_Template, 29, 8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7 == null ? null : item_r7.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r7 == null ? null : item_r7.data);
} }
function ExceptionsDashboardComponent_div_69_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExceptionsDashboardComponent_div_69_ng_template_2_div_0_Template, 27, 2, "div", 40);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.filterException);
} }
function ExceptionsDashboardComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExceptionsDashboardComponent_div_69_ng_container_1_Template, 2, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExceptionsDashboardComponent_div_69_ng_template_2_Template, 1, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDataLoading)("ngIfElse", _r4);
} }
function ExceptionsDashboardComponent_div_70_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function ExceptionsDashboardComponent_div_70_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-exception-map", 75);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx_r21.exceptionArray)("singleMarker", ctx_r21.singleShowIndex);
} }
function ExceptionsDashboardComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExceptionsDashboardComponent_div_70_ng_container_1_Template, 2, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExceptionsDashboardComponent_div_70_ng_template_2_Template, 1, 2, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isDataLoading)("ngIfElse", _r20);
} }
function SingleException_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
const _c0 = ".tripHisTop[_ngcontent-%COMP%] {\n  padding: 18px 24px 0;\n}\n.tripHisTop[_ngcontent-%COMP%]   .tripHisTopLeft[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: center;\n}\n.tripHisTop[_ngcontent-%COMP%]   .tripTitle[_ngcontent-%COMP%] {\n  font: 700 16px/16px ModernEra_Bold;\n  color: #001e50;\n}\n.expSec[_ngcontent-%COMP%]   .expDate[_ngcontent-%COMP%] {\n  background: #474f5a;\n  border-radius: 31px;\n  display: inline-block;\n  padding: 10px 15px;\n  font: 700 16px/18px ModernEra_Bold;\n  color: #ffffff;\n}\n.expSec[_ngcontent-%COMP%]   .expDate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  width: 25px;\n}\n@media (max-width: 1200px) {\n  .expSec[_ngcontent-%COMP%]   .expDate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 18px;\n  }\n}\n.expSec[_ngcontent-%COMP%]   .expDate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n@media (max-width: 1200px) {\n  .expSec[_ngcontent-%COMP%]   .expDate[_ngcontent-%COMP%] {\n    font: 700 11px/15px ModernEra_Bold;\n  }\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%] {\n  background: #FBFBFB;\n  border: 1px solid #F1F1F5;\n  border-radius: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: center;\n  padding: 20px 25px;\n  margin-bottom: 16px;\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .driverName[_ngcontent-%COMP%] {\n  font: 700 14px/18px ModernEra_Bold;\n  color: #474f5a;\n  max-width: 280px;\n}\n@media (max-width: 1300px) {\n  .expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .driverName[_ngcontent-%COMP%] {\n    font: 700 12px/15px ModernEra_Bold;\n  }\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .driverName[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 20px;\n  height: 20px;\n}\n@media (max-width: 1300px) {\n  .expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .driverName[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 15px;\n    height: 15px;\n    margin-right: 4px;\n  }\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .driverName[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #474f5a;\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .driverdetails[_ngcontent-%COMP%] {\n  flex-basis: calc(25% - 10px);\n  max-width: calc(25% - 10px);\n  margin-right: 10px;\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .speedingPoint[_ngcontent-%COMP%] {\n  font: 700 14px/18px ModernEra_Bold;\n  color: #474F5A;\n  display: inline-block;\n  flex-basis: calc(30% - 10px);\n  max-width: calc(30% - 10px);\n  margin-right: 10px;\n}\n@media (max-width: 1300px) {\n  .expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .speedingPoint[_ngcontent-%COMP%] {\n    font: 700 11px/15px ModernEra_Bold;\n  }\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .speedingPoint[_ngcontent-%COMP%]   .cirlce[_ngcontent-%COMP%] {\n  display: inline-block;\n  content: \"\";\n  margin-top: 2px;\n  border-radius: 50%;\n  height: 13px;\n  width: 13px;\n  min-width: 13px;\n  margin-right: 6px;\n  background-color: #ED502E;\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .speedingPoint[_ngcontent-%COMP%]   .driver[_ngcontent-%COMP%] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .map-icon[_ngcontent-%COMP%] {\n  flex-basis: calc(5%);\n  max-width: calc(5%);\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .timeSec[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  color: #001e50;\n  font: 700 14px/18px ModernEra_Bold;\n}\n@media (max-width: 1300px) {\n  .expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .timeSec[_ngcontent-%COMP%] {\n    font: 700 11px/12px ModernEra_Bold;\n  }\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .timeSec.field50Lat[_ngcontent-%COMP%] {\n  flex-basis: calc(20% - 10px);\n  max-width: calc(20% - 10px);\n  margin-right: 10px;\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .timeSec.field25[_ngcontent-%COMP%] {\n  width: 50%;\n  flex-basis: calc(10% - 10px);\n  max-width: calc(10% - 10px);\n  margin-right: 10px;\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .timeSec[_ngcontent-%COMP%]:nth-last-child(1) {\n  padding-right: 0;\n}\n@media (max-width: 1300px) {\n  .expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .timeSec[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n}\n@media (min-width: 1301px) and (max-width: 1400px) {\n  .expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .timeSec[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n@media (min-width: 1401px) and (max-width: 1500px) {\n  .expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .timeSec[_ngcontent-%COMP%] {\n    padding: 0 25px;\n  }\n}\n.expSec[_ngcontent-%COMP%]   .exceptionSec[_ngcontent-%COMP%]   .timeSec[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #c5cdd4;\n}\n  .mat-button-toggle-button svg path {\n  fill: #c5cdd4;\n}\n  .mat-button-toggle-checked {\n  background-color: #371986;\n}\n  .mat-button-toggle-checked svg path {\n  fill: #ffffff !important;\n}\n  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 35px;\n}\n@media (min-width: 862px) and (max-width: 1250px) {\n  .filterBody[_ngcontent-%COMP%]   .filterBtn.cancleBtn[_ngcontent-%COMP%] {\n    margin: 0 10px !important;\n  }\n}\n.custom-dialog-container[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.inner[_ngcontent-%COMP%] {\n  color: white;\n  padding: 12px;\n}\n.attention[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font: 700 14px/17px ModernEra_Bold;\n  color: #1b194b;\n  margin-bottom: 0;\n}\n@media (max-width: 1200px) {\n  .attention[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font: 600 11px/13px ModernEra;\n  }\n}\n.attention[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border: 1px solid #00cba0;\n  box-shadow: 0px 9px 7px rgba(0, 0, 0, 0.12);\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .dataBoxes[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  padding: 28px 13px;\n  background: #ffffff;\n  cursor: pointer;\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .dataBoxes[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-right: 0;\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .databoxescolors[_ngcontent-%COMP%] {\n  color: #001e50;\n  font: 700 32px/24px ModernEra_Bold;\n  text-align: center;\n}\n@media (max-width: 1200px) {\n  .attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .databoxescolors[_ngcontent-%COMP%] {\n    font: 700 18px/20px ModernEra_Bold;\n  }\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .databoxescolors[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 700 14px/17px ModernEra_Bold;\n}\n@media (max-width: 1200px) {\n  .attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .databoxescolors[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font: 700 11px/13px ModernEra_Bold;\n  }\n}\n.countException[_ngcontent-%COMP%] {\n  color: #ff7070;\n}\n.tripHistory[_ngcontent-%COMP%]   .tripHisTop[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZXhjZXB0aW9ucy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNFQTtFQUNFLG9CQUFBO0FBQUY7QUFFRTtFRG9JQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VDcElFLG1CQUFBO0FBRUo7QUFDRTtFQUNFLGtDQUFBO0VBQ0EsY0RGYztBQ0dsQjtBQUtFO0VBQ0UsbUJEZ0JhO0VDZmIsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBZUEsa0NBQUE7RUFDQSxjRGhDSTtBQ2dCUjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBQU47QUFFTTtFQUpGO0lBS0ksV0FBQTtFQUNOO0FBQ0Y7QUFDTTtFQUNFLGFEM0JBO0FDNEJSO0FBTUk7RUF0QkY7SUF1Qkksa0NBQUE7RUFISjtBQUNGO0FBTUU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUR5RkYsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQ3pGRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBQ0Usa0NBQUE7RUFDQSxjRHJCVztFQ3NCWCxnQkFBQTtBQUZOO0FBR007RUFKRjtJQUtJLGtDQUFBO0VBQU47QUFDRjtBQUVNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFSO0FBQ1E7RUFKRjtJQUtJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUFFUjtBQUNGO0FBQVE7RUFDRSxhRHRDTztBQ3dDakI7QUFHSTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUk7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUZOO0FBR007RUFQRjtJQVFJLGtDQUFBO0VBQU47QUFDRjtBQUVNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUFSO0FBT007RUFDRSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQU5SO0FBVUk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBUk47QUFXSTtFQUNFLGVBQUE7RUFDQSxjRHRIWTtFQ3VIWixrQ0FBQTtBQVROO0FBVU07RUFKRjtJQUtJLGtDQUFBO0VBUE47QUFDRjtBQVNNO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBUFI7QUFVTTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFSUjtBQVdNO0VBQ0UsZ0JBQUE7QUFUUjtBQVlNO0VBekJGO0lBMEJJLGVBQUE7RUFUTjtBQUNGO0FBV007RUE3QkY7SUE4QkksZUFBQTtFQVJOO0FBQ0Y7QUFVTTtFQWpDRjtJQWtDSSxlQUFBO0VBUE47QUFDRjtBQVVRO0VBQ0UsYURsSkk7QUMwSWQ7QUFpQkk7RUFDRSxhQUFBO0FBZE47QUFtQkE7RUFDRSx5QkQvSGE7QUMrR2Y7QUFtQkk7RUFDRSx3QkFBQTtBQWpCTjtBQXNCQTtFQUNFLGlCQUFBO0FBbkJGO0FBc0JBO0VBRUU7SUFDRSx5QkFBQTtFQXBCRjtBQUNGO0FBdUJBO0VBQ0UsbUJBQUE7QUFyQkY7QUF3QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBckJGO0FBd0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBckJGO0FBd0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFyQkY7QUEwQkU7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBdkJKO0FBeUJJO0VBTkY7SUFPSSxnQkFBQTtJQUNBLDZCQUFBO0VBdEJKO0FBQ0Y7QUEyQkU7RUFDRSxpQkFBQTtBQXpCSjtBQWdDRTtFQUdFLFdBQUE7QUFoQ0o7QUFrQ0k7RUFDRSx5QkFBQTtFQUNBLDJDQUFBO0FBaENOO0FBd0NJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRG5RRTtFQ3NRRixlQUFBO0FBeENOO0FBMENNO0VBQ0UsZUFBQTtBQXhDUjtBQTRDSTtFQUNFLGNEMVFZO0VDMlFaLGtDQUFBO0VBQ0Esa0JBQUE7QUExQ047QUE0Q007RUFMRjtJQU1JLGtDQUFBO0VBekNOO0FBQ0Y7QUEyQ007RUFDRSxrQ0FBQTtBQXpDUjtBQTJDUTtFQUhGO0lBSUksa0NBQUE7RUF4Q1I7QUFDRjtBQWlEQTtFQUNFLGNEN1JPO0FDK09UO0FBaURBO0VBQ0UsbUJBQUE7QUE5Q0YiLCJmaWxlIjoiZXhjZXB0aW9ucy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIkBpbXBvcnQgXCIuLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuLnRyaXBIaXNUb3Age1xuICBwYWRkaW5nOiAxOHB4IDI0cHggMDtcblxuICAudHJpcEhpc1RvcExlZnQge1xuICAgIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC50cmlwVGl0bGUge1xuICAgIGZvbnQ6IDcwMCAxNnB4LzE2cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gIH1cbn1cblxuLmV4cFNlYyB7XG5cbiAgLmV4cERhdGUge1xuICAgIGJhY2tncm91bmQ6ICRuaWdodFRleHRDb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogMjVweDtcblxuICAgICAgQG1lZGlhKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvbnQ6IDcwMCAxNnB4LzE4cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgY29sb3I6ICR3aGl0ZTtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgZm9udDogNzAwIDExcHgvMTVweCBNb2Rlcm5FcmFfQm9sZDtcbiAgICB9XG4gIH1cblxuICAuZXhjZXB0aW9uU2VjIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMUYxRjU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgIC5kcml2ZXJOYW1lIHtcbiAgICAgIGZvbnQ6IDcwMCAxNHB4LzE4cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICBjb2xvcjogJG5pZ2h0VGV4dENvbG9yO1xuICAgICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6MTMwMHB4KXtcbiAgICAgICAgZm9udDogNzAwIDEycHgvMTVweCBNb2Rlcm5FcmFfQm9sZDtcbiAgICAgIH1cblxuICAgICAgc3ZnIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6MTMwMHB4KXtcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXRoIHtcbiAgICAgICAgICBmaWxsOiAkbmlnaHRUZXh0Q29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJpdmVyZGV0YWlscyB7XG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDI1JSAtIDEwcHgpO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDI1JSAtIDEwcHgpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5zcGVlZGluZ1BvaW50IHtcbiAgICAgIGZvbnQ6IDcwMCAxNHB4LzE4cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICBjb2xvcjogIzQ3NEY1QTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMzAlIC0gMTBweCk7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMzAlIC0gMTBweCk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOjEzMDBweCl7XG4gICAgICAgIGZvbnQ6IDcwMCAxMXB4LzE1cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICB9XG5cbiAgICAgIC5jaXJsY2Uge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgbWluLXdpZHRoOiAxM3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VENTAyRTtcbiAgICAgIH1cbiAgICAgIC8vIC5saWNlbnNlUGxhdGV7XG4gICAgICAvLyAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgIC8vICAgd2lkdGg6IDEwMCU7XG4gICAgICAvLyB9XG5cbiAgICAgIC5kcml2ZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hcC1pY29uIHtcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNSUpO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDUlKTtcbiAgICB9XG5cbiAgICAudGltZVNlYyB7XG4gICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgIGZvbnQ6IDcwMCAxNHB4LzE4cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOjEzMDBweCl7XG4gICAgICAgIGZvbnQ6IDcwMCAxMXB4LzEycHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICB9XG5cbiAgICAgICYuZmllbGQ1MExhdCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjAlIC0gMTBweCk7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygyMCUgLSAxMHB4KTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmLmZpZWxkMjUge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwJSAtIDEwcHgpO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAlIC0gMTBweCk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgJjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDoxMzAxcHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDoxNDAxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgfVxuXG4gICAgICBzdmcge1xuICAgICAgICBwYXRoIHtcbiAgICAgICAgICBmaWxsOiAkYm9yZGVyQ29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xuICBzdmcge1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogI2M1Y2RkNDtcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRvZ2dsZUFjdGl2ZTtcblxuICBzdmcge1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo4NjJweCkgYW5kIChtYXgtd2lkdGg6MTI1MHB4KSB7XG5cbiAgLmZpbHRlckJvZHkgLmZpbHRlckJ0bi5jYW5jbGVCdG4ge1xuICAgIG1hcmdpbjogMCAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmN1c3RvbS1kaWFsb2ctY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlubmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4vLyBleGNlcHRpb24gdGlsZXMgY3NzIFxuLmF0dGVudGlvbiB7XG4gIGg0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGZvbnQ6IDcwMCAxNHB4LzE3cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgY29sb3I6ICMxYjE5NGI7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6MTIwMHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZm9udDogNjAwIDExcHgvMTNweCBNb2Rlcm5FcmE7XG4gICAgfVxuXG4gICAgLy8gQGluY2x1ZGUgZWxsaXBzaXM7XG4gIH1cblxuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbiAgLy8gLmFjdGl2ZSB7XG4gIC8vICAgYm9yZGVyOiAxcHggc29saWQgI2ZhMTQ2NDtcbiAgLy8gICBib3gtc2hhZG93OiAwcHggOXB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAvLyB9XG4gIC5nb2luZ0dvb2Qge1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSAxNjcgMTY1IC8gMTUlKTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBjYmEwO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDlweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyAgIGgyIHtcbiAgICAvLyAgICAgY29sb3I6ICMwMGNiYTA7XG4gICAgLy8gICAgIGZvbnQ6IDYwMCAxNHB4LzE3cHggTW9kZXJuRXJhO1xuICAgIC8vICAgfVxuXG4gICAgLmRhdGFCb3hlcyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICBwYWRkaW5nOiAyOHB4IDEzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICAvLyBmbGV4LWJhc2lzOiBjYWxjKDIwJSAtIDEwcHgpO1xuICAgICAgLy8gbWF4LXdpZHRoOiBjYWxjKDIwJSAtIDEwcHgpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kYXRhYm94ZXNjb2xvcnMge1xuICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICBmb250OiA3MDAgMzJweC8yNHB4IE1vZGVybkVyYV9Cb2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOjEyMDBweCkge1xuICAgICAgICBmb250OiA3MDAgMThweC8yMHB4IE1vZGVybkVyYV9Cb2xkO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udDogNzAwIDE0cHgvMTdweCBNb2Rlcm5FcmFfQm9sZDtcblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjEyMDBweCkge1xuICAgICAgICAgIGZvbnQ6IDcwMCAxMXB4LzEzcHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5cblxuLmNvdW50RXhjZXB0aW9ue1xuICBjb2xvcjogJGRhbmdlcjtcbn1cblxuLnRyaXBIaXN0b3J5IC50cmlwSGlzVG9we1xuICBib3JkZXItYm90dG9tOiBub25lO1xufSJdfQ== */";
class ExceptionsDashboardComponent {
    constructor(service, localService, dialog, cd, router, activeRoute) {
        this.service = service;
        this.localService = localService;
        this.dialog = dialog;
        this.cd = cd;
        this.router = router;
        this.activeRoute = activeRoute;
        this.isCollapsed = true;
        this.vehicleCategoryData = [];
        this.vehicleList = [];
        this.driverList = [];
        this.selectedVehicleCategory = 'all';
        this.selectedVehicle = 'all';
        this.selectedDriver = 'all';
        this.selectedException = 'all';
        this.filterException = [];
        this.tableView = 'tableView';
        this.page = 1;
        this.limit = 1000;
        this.pageSizeOptions = [5, 10, 25, 100, 1000];
        this.exceptionArray = [];
        //Ng Accordian 
        this.hideToggle1 = false;
        this.displayMode = 'default';
        this.multi = true;
        this.disabled = false;
        this.singleShowIndex = { index: '', trip_id: '' };
        this.isDataLoading = false;
        this.exceptionTypeObj = {
            "speed": "Speeding",
            "breaking": "Harsh braking",
            "acceleration": "Harsh Acceleration",
            "cornering": "Harsh Cornering",
            "idling": "Idiling"
        };
        this.exceptions = [{ name: 'Speeding', value: 'speed' }, { name: 'Harsh braking', value: 'breaking' }, { name: 'Harsh Acceleration', value: 'acceleration' }, { name: 'Harsh Cornering', value: 'cornering' }, { name: 'Idiling', value: 'idling' }];
        this.selected = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
        };
        this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
        };
        this.filterCalledException = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.exceptionRatio = {};
        this.polarObject = {
            speed: 0,
            idling: 0,
            acceleration: 0,
            breaking: 0,
            cornering: 0,
        };
        this.groupBy = (array, key) => {
            // Return the end result
            return array.reduce((result, currentValue) => {
                // If an array already present for key, push it to the array. Else create an array and push the object
                (result[moment__WEBPACK_IMPORTED_MODULE_1__["utc"](currentValue[key]).format('DD/MM/yyyy')] = result[moment__WEBPACK_IMPORTED_MODULE_1__["utc"](currentValue[key]).format('DD/MM/yyyy')] || []).push(currentValue);
                // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
                return result;
            }, {}); // empty object is the initial value for result object
        };
    }
    ngOnInit() {
        this.filterCalledException = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        const lang = this.localService.getItem('currentlang') || 'en';
        if (lang == 'en') {
            this.exceptionTypeObj = {
                "speed": "Speeding",
                "breaking": "Harsh braking",
                "acceleration": "Harsh Acceleration",
                "cornering": "Harsh Cornering",
                "idling": "Idiling"
            };
        }
        else {
            this.exceptionTypeObj = {
                "speed": "Te hard rijden",
                "breaking": "Te Hard remmen",
                "acceleration": "Te Hard optrekken",
                "cornering": "Te hard door de bocht",
                "idling": "Stationair draaien"
            };
        }
        this.filterCalledException.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500)).subscribe(value => {
            if (value) {
                this.selectedOrgID = this.localService.getItem("selectedOrgs");
                if (this.selectedOrgID) {
                    this.selectedOrgID = JSON.parse(this.selectedOrgID);
                }
                this.resetToLastState();
                // this.polardata()
                this.filterApply();
            }
        });
        this.localService.getLang().subscribe((val) => {
            const lang = this.localService.getItem('currentlang') || 'en';
            if (lang == 'en') {
                this.exceptionTypeObj = {
                    "speed": "Speeding",
                    "breaking": "Harsh braking",
                    "acceleration": "Harsh Acceleration",
                    "cornering": "Harsh Cornering",
                    "idling": "Idiling"
                };
            }
            else {
                this.exceptionTypeObj = {
                    "speed": "Te hard rijden",
                    "breaking": "Te Hard remmen",
                    "acceleration": "Te Hard optrekken",
                    "cornering": "Te hard door de bocht",
                    "idling": "Stationair draaien"
                };
            }
        });
        this.limit = Number(this.localService.getItem("exceptionLimit")) || 1000;
        this.selectedOrgID = this.localService.getItem("selectedOrgs");
        if (this.selectedOrgID) {
            this.selectedOrgID = JSON.parse(this.selectedOrgID);
        }
        this.localService.getFilter().subscribe((val) => {
            if (val && this.router.url.split('?')[0] == src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].exceptions.url) {
                this.filterCalledException.next(true);
            }
        });
        if (this.selectedOrgID) {
            this.resetToLastState();
            // this.polardata()
            this.updatePageData();
        }
    }
    polardata() {
        let querryParams = this.createQuerryparams();
        this.service
            .get(`dashboard/exception-ratio?${querryParams}`)
            .pipe()
            .subscribe((response) => {
            if (response.data && response.data.length) {
                this.exceptionRatio = response.data;
                let total = this.exceptionRatio.reduce((previousValue, currentValue) => previousValue + Number(currentValue.score_type_count), 0);
                for (let i = 0; i < this.exceptionRatio.length; i++) {
                    this.polarObject[this.exceptionRatio[i].score_type] = ((this.exceptionRatio[i].score_type_count) *
                        1).toFixed(1);
                }
            }
            else {
                this.exceptionRatio = {};
                this.polarObject = {
                    speed: 0,
                    idling: 0,
                    acceleration: 0,
                    breaking: 0,
                    cornering: 0,
                };
            }
            this.cd.detectChanges();
        }, (error) => {
            this.exceptionRatio = {};
            this.polarObject = {
                speed: 0,
                idling: 0,
                acceleration: 0,
                breaking: 0,
                cornering: 0,
            };
            this.cd.detectChanges();
        });
    }
    pageChange(event) {
        if (this.limit !== event.pageSize) {
            const queryParams = { page: 1 };
            this.router.navigate([], {
                queryParams: queryParams,
                queryParamsHandling: 'merge',
            });
            this.page = 1;
        }
        else {
            const queryParams = { page: event.pageIndex + 1 };
            this.router.navigate([], {
                queryParams: queryParams,
                queryParamsHandling: 'merge',
            });
            this.page = event.pageIndex + 1;
        }
        this.limit = event.pageSize;
        this.localService.setItem("exceptionLimit", this.limit);
        this.isCollapsed = true;
        let category = this.localService.getItem("category");
        let vehicle = this.localService.getItem("vehicle");
        let driver = this.localService.getItem("driver");
        let search = this.localService.getItem("search");
        let exception = this.localService.getItem("exception");
        this.getAllException(category, vehicle, driver, search, exception);
    }
    getAllException(categoryId, vehicleId, driverId, search, exception) {
        this.isDataLoading = true;
        let querryParams = this.createQuerryparams(categoryId, vehicleId, driverId, search, exception);
        this.exceptionArray = [];
        this.service.get(`exceptions?${querryParams}`).pipe().subscribe(response => {
            if (response.data) {
                this.totalCount = response.data.count;
                this.exceptionArray = [...response.data.rows];
                this.filterException = [];
                let data = this.groupBy(this.exceptionArray, 'start_time');
                for (let key in data) {
                    var obj = {
                        date: key,
                        data: data[key]
                    };
                    this.filterException.push(obj);
                }
                this.setPage(this.page - 1);
                this.isDataLoading = false;
                this.cd.detectChanges();
            }
            else {
                this.isDataLoading = false;
                this.exceptionArray = [];
                this.filterException = [];
                this.cd.detectChanges();
            }
        }, (error) => {
            this.isDataLoading = false;
            this.exceptionArray = [];
            this.filterException = [];
            this.cd.detectChanges();
        });
    }
    toggleChange(value) {
        this.tableView = value;
        if (this.tableView == 'tableView') {
            this.singleShowIndex = { index: '', trip_id: '' };
        }
    }
    updatePageData() {
        // this.page = 1;
        this.activeRoute.queryParams
            .subscribe(params => {
            // const details:any = params.page;
            this.page = (params === null || params === void 0 ? void 0 : params.page) || 1;
        });
        this.totalCount = 0;
        this.searchVehicle = '';
        this.searchCategory = '';
        this.searchDriver = '';
        // this.getDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.searchString, this.selectedException)
        this.getAllException(this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.searchString, this.selectedException);
    }
    resetToLastState() {
        let category = this.localService.getItem("category");
        let vehicle = this.localService.getItem("vehicle");
        let driver = this.localService.getItem("driver");
        let search = this.localService.getItem("search");
        let date = this.localService.getItem("dateRange");
        let exception = this.localService.getItem("exception");
        if (date) {
            date = JSON.parse(date);
            this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.startDate),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.endDate)
            };
            this.selectedShow = this.selected;
        }
        else {
            this.selectedShow = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
            };
            this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
            };
        }
        search ? this.searchString = search : this.searchString = '';
        category && category !== 'all' ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = 'all';
        vehicle && vehicle !== 'all' ? this.selectedVehicle = JSON.parse(vehicle) : this.selectedVehicle = 'all';
        driver && driver !== 'all' ? this.selectedDriver = JSON.parse(driver) : this.selectedDriver = 'all';
        exception && exception !== 'all' ? this.selectedException = exception : this.selectedException = 'all';
    }
    createQuerryparams(categoryId, vehicleId, driverId, search, exception) {
        let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}&page=${this.page}&limit=${this.limit}`;
        let val = this.service.checkCustomDate(moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format('YYYY-MM-DD'));
        if (val == undefined) {
            querryParams = querryParams + `&custom_filter=true&filter_value=''`;
        }
        else {
            if ((categoryId && categoryId !== 'all') || (vehicleId && vehicleId !== 'all') || (driverId && driverId !== 'all') || (exception && exception !== 'all') || search) {
                querryParams = querryParams + `&custom_filter=true&filter_value=''`;
            }
            else {
                querryParams = querryParams + `&custom_filter=false&filter_value=${val}`;
            }
        }
        if ((categoryId && categoryId !== 'all')) {
            let arr = [categoryId];
            querryParams = querryParams + `&vehicle_category=${JSON.stringify(arr)}`;
        }
        if ((vehicleId && vehicleId !== 'all')) {
            let arr = [vehicleId];
            querryParams = querryParams + `&vehicle=${JSON.stringify(arr)}`;
        }
        if ((driverId && driverId !== 'all')) {
            let arr = [driverId];
            querryParams = querryParams + `&driver=${JSON.stringify(arr)}`;
        }
        if (search) {
            querryParams = querryParams + `&search=${search}`;
        }
        if (exception && exception !== 'all') {
            let arr = [exception];
            querryParams = querryParams + `&exception_type=${exception}`;
        }
        querryParams = querryParams + `&from_date=${moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format('YYYY-MM-DD')}`;
        querryParams = querryParams + `&to_date=${moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format('YYYY-MM-DD')}`;
        return querryParams;
    }
    resetFilter() {
        this.selectedVehicleCategory = 'all';
        this.selectedDriver = 'all';
        this.selectedVehicle = 'all';
        this.selectedException = 'all';
        this.searchString = '';
        this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
        };
        this.filterApply();
    }
    filterApply() {
        this.localService.setItem("category", this.selectedVehicleCategory);
        this.localService.setItem("vehicle", this.selectedVehicle);
        this.localService.setItem("driver", this.selectedDriver);
        this.localService.setItem("search", this.searchString);
        this.localService.setItem("exception", this.selectedException);
        this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
        this.selected = this.selectedShow;
        this.updatePageData();
    }
    formatToFixed(val, precision) {
        if (typeof val == 'string') {
            val = parseFloat(val);
        }
        if (val) {
            return val.toFixed(precision);
        }
        return 0;
    }
    openChartPopup(tripid, alertdata) {
        let data = { trip: tripid, alertData: alertdata };
        const dialogRef = this.dialog.open(SingleException, {
            panelClass: 'custom-dialog-container',
            height: '95%',
            width: '95%',
            data: data,
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log(`Dialog result: ${result}`);
        });
    }
    setPage(index) {
        if (this.paginator)
            this.paginator.pageIndex = index;
    }
    openTripListPage(data) {
        this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].tripDetail.url], { queryParams: { tripId: data.trip_id } });
    }
}
ExceptionsDashboardComponent.ɵfac = function ExceptionsDashboardComponent_Factory(t) { return new (t || ExceptionsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"])); };
ExceptionsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExceptionsDashboardComponent, selectors: [["app-exceptions-dashboard"]], viewQuery: function ExceptionsDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 74, vars: 31, consts: [[1, "d-flex", "mb-3", "attention"], [1, "goingGood"], [1, "d-flex"], [1, "dataBoxes", "w-100"], [1, "databoxescolors"], [1, "text-center", "mt-2"], [1, "p-0", "m-0"], [1, "detailPage"], [1, "tripDetails", "tripDetailFullwidth", "tripHistory"], [1, "tripHisTop"], [1, "tripHisTopLeft"], [1, "tripTitle", "mb-0"], [1, "countException"], [1, "pl-3"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.49984 18.3332H12.4998C16.6665 18.3332 18.3332 16.6665 18.3332 12.4998V7.49984C18.3332 3.33317 16.6665 1.6665 12.4998 1.6665H7.49984C3.33317 1.6665 1.6665 3.33317 1.6665 7.49984V12.4998C1.6665 16.6665 3.33317 18.3332 7.49984 18.3332Z", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8.82471 6.3999H12.358V9.94157", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.3583 6.3999L7.6416 11.1166", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 13.7583C8.24167 14.8416 11.7583 14.8416 15 13.7583", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "historyButton", 3, "value", "change"], ["value", "tableView"], ["width", "20", "height", "21", "viewBox", "0 0 20 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.3332 5.29199C18.3332 5.63717 18.0534 5.91699 17.7082 5.91699H2.29151C1.94633 5.91699 1.6665 5.63717 1.6665 5.29199C1.6665 4.94681 1.94633 4.66699 2.29151 4.66699H17.7082C18.0534 4.66699 18.3332 4.94681 18.3332 5.29199Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.3332 10.5003C18.3332 10.8455 18.0534 11.1253 17.7082 11.1253H2.2915C1.94633 11.1253 1.6665 10.8455 1.6665 10.5003C1.6665 10.1551 1.94633 9.87532 2.2915 9.87532H17.7082C18.0534 9.87532 18.3332 10.1551 18.3332 10.5003Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.3332 15.7087C18.3332 16.0538 18.0534 16.3337 17.7082 16.3337H2.2915C1.94633 16.3337 1.6665 16.0538 1.6665 15.7087C1.6665 15.3635 1.94633 15.0837 2.2915 15.0837H17.7082C18.0534 15.0837 18.3332 15.3635 18.3332 15.7087Z", "fill", "white"], ["value", "map"], ["width", "20", "height", "21", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 20 20", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 20 20"], ["type", "text/css"], ["d", "M13,17.8c-0.4,0-0.7-0.1-1-0.2l-4.4-2.2c-0.3-0.1-0.8-0.1-1,0l-2,1.1C3.9,17,3,17.1,2.3,16.7\n                           c-0.7-0.4-1-1.2-1-2.1V6.5c0-0.7,0.5-1.6,1.1-2l3.6-2.1c0.6-0.3,1.5-0.4,2.1-0.1l4.4,2.2c0.3,0.1,0.8,0.1,1,0l2-1.1\n                           c0.8-0.5,1.7-0.5,2.4-0.2c0.7,0.4,1,1.2,1,2.1v8.1c0,0.7-0.5,1.6-1.1,2l-3.6,2.1C13.9,17.7,13.5,17.8,13,17.8z M7.2,14.1\n                           c0.4,0,0.7,0.1,1,0.2l4.4,2.2c0.3,0.1,0.8,0.1,1,0l3.6-2.1c0.3-0.2,0.5-0.6,0.5-0.9V5.4c0-0.5-0.2-0.9-0.4-1.1\n                           c-0.3-0.2-0.7-0.1-1.2,0.2l-2,1.1C13.6,5.9,12.7,6,12,5.7L7.7,3.5c-0.3-0.1-0.8-0.1-1,0L3,5.6C2.8,5.7,2.5,6.2,2.5,6.5v8.1\n                           c0,0.5,0.2,0.9,0.4,1.1c0.3,0.2,0.7,0.1,1.2-0.2l2-1.1C6.4,14.2,6.8,14.1,7.2,14.1z", 1, "st0"], ["d", "M7.1,14.8c-0.3,0-0.6-0.3-0.6-0.6V3.3c0-0.3,0.3-0.6,0.6-0.6S7.7,3,7.7,3.3v10.8C7.7,14.5,7.5,14.8,7.1,14.8z", 1, "st0"], ["d", "M13.1,17.3c-0.3,0-0.6-0.3-0.6-0.6V5.5c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v11.1\n                           C13.7,17,13.4,17.3,13.1,17.3z", 1, "st0"], ["class", "tripDetailTopBox", 4, "ngIf"], ["class", "tripMap mt-3", 4, "ngIf"], [1, "paginate"], [3, "length", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"], ["paginator", ""], [1, "tripDetailTopBox"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [2, "margin", "0 auto", 3, "diameter"], ["class", "expSec", 4, "ngFor", "ngForOf"], [1, "expSec"], [1, "expDate", "mb-20"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 25 25", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 25 25"], ["d", "M8.5,6.2c-0.4,0-0.8-0.3-0.8-0.8v-3c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v3C9.2,5.9,8.9,6.2,8.5,6.2z", 1, "st0"], ["d", "M16.5,6.2c-0.4,0-0.8-0.3-0.8-0.8v-3c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v3C17.2,5.9,16.9,6.2,16.5,6.2z", 1, "st0"], ["d", "M21,10.3H4c-0.4,0-0.8-0.3-0.8-0.8S3.6,8.8,4,8.8h17c0.4,0,0.8,0.3,0.8,0.8S21.4,10.3,21,10.3z", 1, "st0"], ["d", "M16.5,23.2h-8c-3.7,0-5.8-2.1-5.8-5.8V9c0-3.7,2.1-5.8,5.8-5.8h8c3.7,0,5.8,2.1,5.8,5.8v8.5\n                           C22.2,21.2,20.2,23.2,16.5,23.2z M8.5,4.8C5.6,4.8,4.2,6.1,4.2,9v8.5c0,2.9,1.4,4.2,4.2,4.2h8c2.9,0,4.2-1.4,4.2-4.2V9\n                           c0-2.9-1.4-4.2-4.2-4.2H8.5z", 1, "st0"], ["d", "M16.2,15.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h0c0.6,0,1,0.4,1,1S16.8,15.2,16.2,15.2z", 1, "st0"], ["d", "M16.2,18.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h0c0.6,0,1,0.4,1,1S16.8,18.2,16.2,18.2z", 1, "st0"], ["d", "M12.5,15.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h0c0.6,0,1,0.4,1,1S13.1,15.2,12.5,15.2z", 1, "st0"], ["d", "M12.5,18.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h0c0.6,0,1,0.4,1,1S13.1,18.2,12.5,18.2z", 1, "st0"], ["d", "M8.8,15.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h0c0.6,0,1,0.4,1,1S9.4,15.2,8.8,15.2z", 1, "st0"], ["d", "M8.8,18.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h0c0.6,0,1,0.4,1,1S9.4,18.2,8.8,18.2z", 1, "st0"], ["class", "exceptionSec", 4, "ngFor", "ngForOf"], [1, "exceptionSec"], [1, "driverdetails"], [1, "driverName"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 20 20", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 20 20"], ["d", "M10,19.1c-5,0-9.1-4.1-9.1-9.1S5,0.9,10,0.9S19.1,5,19.1,10S15,19.1,10,19.1z M10,2.4c-4.2,0-7.6,3.4-7.6,7.6\n                                   s3.4,7.6,7.6,7.6s7.6-3.4,7.6-7.6S14.2,2.4,10,2.4z", 1, "st0"], ["d", "M13.1,13.4c-0.1,0-0.3,0-0.4-0.1l-2.6-1.5c-0.7-0.4-1.2-1.3-1.2-2.1V6.3c0-0.4,0.3-0.8,0.8-0.8\n                                   s0.8,0.3,0.8,0.8v3.4c0,0.3,0.2,0.7,0.4,0.8l2.6,1.5c0.4,0.2,0.5,0.7,0.3,1C13.6,13.3,13.3,13.4,13.1,13.4z", 1, "st0"], [1, "speedingPoint"], [1, "cirlce"], [1, "licensePlate"], ["class", "timeSec field50Lat", 4, "ngIf"], [1, "timeSec", "field25"], [1, "map-icon"], [1, "timeSec", "cursor", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.62906 3.56969C7.80845 3.47184 7.99906 3.62237 7.99906 3.8267V17.3825C7.99906 17.6058 7.84665 17.7946 7.64926 17.8988C7.64249 17.9024 7.63576 17.906 7.62906 17.9097L5.27906 19.2497C3.63906 20.1897 2.28906 19.4097 2.28906 17.5097V7.77969C2.28906 7.14969 2.73906 6.36969 3.29906 6.04969L7.62906 3.56969Z", "fill", "#604EFF"], ["d", "M14.7219 6.1029C14.8922 6.18725 15 6.36089 15 6.55096V19.7041C15 20.0726 14.615 20.3145 14.283 20.1546L10.033 18.107C9.85998 18.0236 9.75 17.8485 9.75 17.6565V4.4462C9.75 4.07534 10.1396 3.83355 10.4719 3.99814L14.7219 6.1029Z", "fill", "#604EFF"], ["d", "M22 6.49006V16.2201C22 16.8501 21.55 17.6301 20.99 17.9501L17.4986 19.951C17.1653 20.1421 16.75 19.9014 16.75 19.5172V6.33038C16.75 6.15087 16.8462 5.98513 17.0021 5.89615L19.01 4.75006C20.65 3.81006 22 4.59006 22 6.49006Z", "fill", "#604EFF"], [1, "timeSec", "field50Lat"], [1, "tripMap", "mt-3"], ["elseTemplate1", ""], [3, "tableData", "singleMarker"]], template: function ExceptionsDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-button-toggle-group", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExceptionsDashboardComponent_Template_mat_button_toggle_group_change_53_listener($event) { return ctx.toggleChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-button-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-button-toggle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "style", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " .st0 { fill: #C5CDD4; } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ExceptionsDashboardComponent_div_69_Template, 4, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ExceptionsDashboardComponent_div_70_Template, 4, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-paginator", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ExceptionsDashboardComponent_Template_mat_paginator_page_72_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.convertToDutch(ctx.polarObject == null ? null : ctx.polarObject.speed) || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 19, "speeding"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.convertToDutch(ctx.polarObject == null ? null : ctx.polarObject.idling) || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 21, "idiling"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.convertToDutch(ctx.polarObject == null ? null : ctx.polarObject.breaking) || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 23, "hardBraking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.convertToDutch(ctx.polarObject == null ? null : ctx.polarObject.cornering) || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 25, "harshCorner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.convertToDutch(ctx.polarObject == null ? null : ctx.polarObject.acceleration) || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 27, "hardAcceleration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.service.convertToDutch(ctx.totalCount), ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 29, "harshEvent"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.tableView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableView == "tableView");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableView == "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.totalCount)("pageSize", ctx.limit)("pageSizeOptions", ctx.pageSizeOptions)("showFirstLastButtons", true);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _exception_map_exception_map_component__WEBPACK_IMPORTED_MODULE_14__["ExceptionMapComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: [_c0], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExceptionsDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exceptions-dashboard',
                templateUrl: './exceptions-dashboard.component.html',
                styleUrls: ['./exceptions-dashboard.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]]
        }] }); })();
class SingleException {
    constructor(dialogRef, data, service, local, cd) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.local = local;
        this.cd = cd;
        this.isMapLoading = true;
        this.exceptionColors = {
            "speed": '#FF9950',
            "breaking": '#FFEA6C',
            "acceleration": '#4DBFFF',
            "cornering": '#FF7070',
            "idling": '#00CBA0'
        };
        this.polylines = [];
        this.exceptionStartArray = [];
        this.exceptionColors = JSON.parse(this.local.getItem('colors'));
        this.getTripDetails();
    }
    getTripDetails() {
        this.service.get(`trips/${this.data.trip}`).pipe().subscribe(response => {
            if (response && response.data) {
                this.tripDetail = response.data;
                this.initMap(this.tripDetail, this.data.alertData);
                this.isMapLoading = false;
                this.cd.detectChanges();
            }
        }, (error) => {
            this.isMapLoading = false;
            this.cd.detectChanges();
        });
    }
    initMap(routes, alerts) {
        var routes = routes;
        var waypoints = [];
        this.alertMarkers = [];
        var neitherLandCordi = new google.maps.LatLng(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].netherlandLat, src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].netherlandLong);
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            maxZoom: 18,
            center: neitherLandCordi,
            disableDefaultUI: true,
            draggable: true,
            scaleControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            fullscreenControl: false,
        });
        // map.setOptions({ styles: AppConfig.mapStyle });
        var infowindow = new google.maps.InfoWindow({
            content: '',
            minWidth: 333,
        });
        var bounds = new google.maps.LatLngBounds();
        // Plot Points
        if (routes) {
            if (alerts.points && alerts.points.length) {
                this.alertMarkers = new google.maps.Marker({
                    position: new google.maps.LatLng(alerts.points[0].latitude, alerts.points[0].longitude),
                    map: map,
                    icon: {
                        path: 'M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z',
                        fillColor: this.exceptionColors[alerts.score_type],
                        fillOpacity: 1,
                        strokeColor: '#fff',
                        scale: 1
                    }
                });
                bounds.extend(this.alertMarkers.position);
            }
            alerts.changedDate = this.convertDateFormat(alerts.start_time);
            if (routes) {
                var extendedHtml = '';
                var unit = '';
                if (alerts.score_type == 'idling') {
                    if (!alerts.duration_seconds.includes(":"))
                        alerts.duration_seconds = this.service.convertHMS(alerts.duration_seconds);
                    unit = 's';
                    extendedHtml =
                        `<div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
              <div style="font: 600 14px/20px ModernEra; color:#FA1464; ">
              <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
              </svg>
              
              Idiling</div>
              <div>
                  <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
          border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                      Violation: <span style="color:#FA1464"> ${alerts.duration_seconds}</span>
                  </div>
              </div>
            </div>`;
                }
                else if (alerts.score_type == 'speed') {
                    unit = 'km/h';
                    extendedHtml = `
              <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                  <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">
                  <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
                 </svg>
                          Speeding</div>
                  <div>
                      <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
              border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                          Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} km/h</span>
                      </div>
                  </div>
              </div>`;
                }
                else if (alerts.score_type == 'cornering') {
                    unit = `G`;
                    extendedHtml = `
          <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
          <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">
          <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
         </svg>
         Harsh cornering</div>
          <div>
              <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
      border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                  Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
              </div>
          </div>
      </div>
              `;
                }
                else if (alerts.score_type == 'acceleration') {
                    unit = `G`;
                    extendedHtml = `
          <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
          <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">
          <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
         </svg>
         Harsh acceleration</div>
          <div>
              <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
      border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                  Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
              </div>
          </div>
      </div>
              `;
                }
                else {
                    unit = `G`;
                    extendedHtml = `
          <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
          <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">
          <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
         </svg>
         Harsh braking</div>
          <div>
              <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
      border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                  Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
              </div>
          </div>
      </div>
              `;
                }
                var html = `<div style="display:flex">
                <div style=" flex-basis: calc(50% - 10px);
                      max-width: calc(50% - 10px); margin-right:20px;">
                    <div style="display:flex; align-items: center; padding-bottom:16px;">
                        <div style="margin-right:10px"><img src="../../../../assets/images/location-tick.svg"> </div>
                        <div style="width:135px">
                            <div style="font: 700 12px/18px ModernEra; color:#604EFF"> ${alerts.changedDate}</div>
                            <div style="font: 600 11px/18px ModernEra; color:#001E50;   white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;"></div>
                        </div>
                    </div>
                </div>
                <div style="flex-basis: calc(50% - 10px);
                max-width: calc(50% - 10px);">
                    <div style=" min-width:145px;text-align:center; padding:10px 9px; background: rgba(0,240,156, 0.05);
                border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50; text-align:center">
                        Limit: <span style="color:#00F09C"> ${this.service.convertToDutch(alerts.limit)} ${unit}</span>
                    </div>
                </div>
            </div>
            ` + extendedHtml;
                this.bindInfoWindow(this.alertMarkers, map, infowindow, html);
                this.cd.detectChanges();
            }
            map.fitBounds(bounds);
            google.maps.event.addDomListener(window, "resize", function () {
                google.maps.event.trigger(map, "resize");
                map.fitBounds(bounds);
            });
        }
    }
    bindInfoWindow(marker, map, infowindow, html) {
        google.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.setContent(html);
            infowindow.open(map, marker);
        });
        google.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
        });
    }
    convertDateFormat(date) {
        if (date) {
            return moment__WEBPACK_IMPORTED_MODULE_1__(date).utc().format("HH:mm [•] DD/MM/yyyy");
        }
        else {
            return 'NA';
        }
    }
    convertToFixed(val) {
        val = String(val);
        return val.split('.')[0] + '.' + val.split('.')[1].substring(0, 3);
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
SingleException.ɵfac = function SingleException_Factory(t) { return new (t || SingleException)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
SingleException.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleException, selectors: [["signle-exception"]], decls: 2, vars: 1, consts: [["class", "wrapper", 4, "ngIf"], ["id", "map"], [1, "wrapper"], [1, "inner"], [2, "margin", "auto", 3, "diameter"]], template: function SingleException_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SingleException_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMapLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], styles: [_c0], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleException, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'signle-exception',
                templateUrl: './single-exception.html',
                styleUrls: ['./exceptions-dashboard.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "nRjq":
/*!****************************************************************************************!*\
  !*** ./src/app/main/fleetOverview/exceptions/exception-map/exception-map.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ExceptionMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionMapComponent", function() { return ExceptionMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/app-config */ "Tr6M");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ "c/rV");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local.service */ "s3jE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








const _c0 = function (a0) { return { "background": a0 }; };
class ExceptionMapComponent {
    constructor(service, local) {
        this.service = service;
        this.local = local;
        this.tableData = [];
        this.singleMarker = {};
        this.exceptionColors = {
            "speed": '#FF9950',
            "breaking": '#FFEA6C',
            "acceleration": '#4DBFFF',
            "cornering": '#FF7070',
            "idling": '#00CBA0'
        };
        this.alertExceptionWise = {
            'speed': [],
            'idling': [],
            'acceleration': [],
            'cornering': [],
            'breaking': []
        };
        this.alertMarkers = [];
        this.getGoogleClusterInlineSvg = function (color) {
            var encoded = window.btoa(`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="${color}" stroke="white" stroke-width="4"/>
    </svg>
    `);
            return ('data:image/svg+xml;base64,' + encoded);
        };
        this.exceptionColors = JSON.parse(this.local.getItem('colors'));
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.tableData) {
            this.initMap(changes.tableData.currentValue);
        }
    }
    initMap(routes) {
        var routes = routes;
        var neitherLandCordi = new google.maps.LatLng(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].netherlandLat, src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].netherlandLong);
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: neitherLandCordi,
            disableDefaultUI: true,
            draggable: true,
            scaleControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            fullscreenControl: true,
            fullscreenControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.BOTTOM_RIGHT
            },
        });
        map.setOptions({ styles: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].mapStyle });
        var infowindow = new google.maps.InfoWindow({
            content: ''
        });
        var bounds = new google.maps.LatLngBounds();
        var oms = new OverlappingMarkerSpiderfier(map, {
            markersWontMove: true,
            markersWontHide: true,
            basicFormatEvents: true // allow the library to skip calculating advanced formatting information
        });
        if (routes && routes.length > 0) {
            // Plot Points        
            for (var i = 0; i < routes.length; i++) {
                let alerts = routes[i];
                if (alerts && alerts.points) {
                    this.alertMarkers[i] = new google.maps.Marker({
                        position: new google.maps.LatLng(alerts.points[0].latitude, alerts.points[0].longitude),
                        map: map,
                        icon: {
                            path: 'M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z',
                            fillColor: this.exceptionColors[alerts.score_type],
                            fillOpacity: 1,
                            strokeColor: '#fff',
                            scale: 1
                        }
                    });
                    this.alertExceptionWise[alerts.score_type].push(this.alertMarkers[i]);
                    bounds.extend(this.alertMarkers[i].position);
                    // alerts[this.singleMarker.index].changedDate = this.convertDateFormat(alerts[this.singleMarker.index].alerts[0].date)
                    if (routes) {
                        var extendedHtml = '';
                        var unit = '';
                        if (alerts.score_type == 'idling') {
                            if (!alerts.duration_seconds.includes(":"))
                                alerts.duration_seconds = this.service.convertHMS(alerts.duration_seconds);
                            unit = `s`;
                            extendedHtml =
                                `<div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                <div style="font: 600 14px/20px ModernEra_Bold; color:#FA1464; ">
                <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
            </svg>Idiling</div>
                <div>
                    <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
            border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50;">
                        Violation: <span style="color:#FA1464">${alerts.duration_seconds} </span>
                    </div>
                </div>
              </div>`;
                        }
                        else if (alerts.score_type == 'speed') {
                            unit = 'km/h';
                            extendedHtml = `
                <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                    <div style="font: 600 14px/20px ModernEra_Bold; color:#FA1464; padding:16px 0;"><svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
                  </svg>Speeding</div>
                    <div>
                        <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
                border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50;">
                            Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} km/h</span>
                        </div>
                    </div>
                </div>`;
                        }
                        else if (alerts.score_type == 'cornering') {
                            unit = `G`;
                            extendedHtml = `
              <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
              <div style="font: 600 14px/20px ModernEra_Bold; color:#FA1464; padding:16px 0;"><svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
            </svg>Harsh cornering</div>
              <div>
                  <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
          border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50;">
                      Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
                  </div>
              </div>
          </div>
                `;
                        }
                        else if (alerts.score_type == 'acceleration') {
                            unit = `G`;
                            extendedHtml = `
              <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
              <div style="font: 600 14px/20px ModernEra_Bold; color:#FA1464; padding:16px 0;"><svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
            </svg>Harsh acceleration</div>
              <div>
                  <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
          border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50;">
                      Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
                  </div>
              </div>
          </div>
                `;
                        }
                        else {
                            unit = `G`;
                            extendedHtml = `
              <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
              <div style="font: 600 14px/20px ModernEra_Bold; color:#FA1464; padding:16px 0;"><svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
            </svg>Harsh braking</div>
              <div>
                  <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
          border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50;">
                      Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
                  </div>
              </div>
          </div>
                `;
                        }
                        var html = `<div>
                        <div style="display:flex">
                            <div style=" flex-basis: calc(50% - 10px);
                                  max-width: calc(50% - 10px); margin-right:20px;">
                                <div style="display:flex; align-items: center; padding-bottom:16px;">
                                    <div style="margin-right:10px"><img src="../../../../assets/images/mapgroup.svg"> </div>
                                    <div style="width:135px">
                                        <div style="font: 700 12px/18px ModernEra_Bold; color:#001E50"> ${alerts.vehicle.license_plate}</div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex-basis: calc(50% - 10px);
                            max-width: calc(50% - 10px);">
                                <div style="  padding:10px 9px; 
                            border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50; text-align:center">
                                    <div style="width:135px">
                                        <div style="font: 600 11px/18px ModernEra_Bold; color:#001E50;   white-space: nowrap;
                                      overflow: hidden;
                                      text-overflow: ellipsis;">
                                            </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div style="display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        align-items: center;
                        padding: 5px 0; padding-top:10px;">
                            <div style="margin-right:20px;">
                                <div style="display:flex; align-items: center;">
                                    <div style="margin-right:10px; width:17px; height:20px;"><img src="../../../../assets/images/location-tick.svg"> </div>
                                    <div style="width:135px">
                                        <div style="font: 700 12px/18px ModernEra_Bold; color:#001E50">${this.convertDateFormat(alerts.start_time)}</div>
                                        <div style="font: 600 11px/18px ModernEra_Bold; color:#001E50;   white-space: nowrap;
                                      overflow: hidden;
                                      text-overflow: ellipsis;"></div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div style="min-width:145px;text-align:center;  padding:10px 4px; background: rgba(0,240,156, 0.05);
                            border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50; text-align:center">
                                    Limit: <span style="color:#00F09C">${this.service.convertToDutch(alerts.limit)} ${unit} </span>
                                </div>
                            </div>
                        </div>
                    </div>
              ` + extendedHtml;
                        this.bindInfoWindow(this.alertMarkers[i], map, infowindow, html, oms);
                    }
                }
            }
            var speedCluster = new MarkerClusterer(map, this.alertExceptionWise['speed'], {
                styles: [{
                        height: 60,
                        url: this.getGoogleClusterInlineSvg(this.exceptionColors['speed']),
                        textColor: 'black',
                        width: 60,
                        textSize: 12
                    }]
            });
            speedCluster.setMaxZoom(14);
            var idlingCluster = new MarkerClusterer(map, this.alertExceptionWise['idling'], {
                styles: [{
                        height: 60,
                        url: this.getGoogleClusterInlineSvg(this.exceptionColors['idling']),
                        textColor: 'black',
                        width: 60,
                        textSize: 12
                    }]
            });
            idlingCluster.setMaxZoom(14);
            var accCluster = new MarkerClusterer(map, this.alertExceptionWise['acceleration'], {
                styles: [{
                        height: 60,
                        url: this.getGoogleClusterInlineSvg(this.exceptionColors['acceleration']),
                        textColor: 'black',
                        width: 60,
                        textSize: 12
                    }]
            });
            accCluster.setMaxZoom(14);
            var corneringCluster = new MarkerClusterer(map, this.alertExceptionWise['cornering'], {
                styles: [{
                        height: 60,
                        url: this.getGoogleClusterInlineSvg(this.exceptionColors['cornering']),
                        textColor: 'black',
                        width: 60,
                        textSize: 12
                    }]
            });
            corneringCluster.setMaxZoom(14);
            var brakingCluster = new MarkerClusterer(map, this.alertExceptionWise['breaking'], {
                styles: [{
                        height: 60,
                        url: this.getGoogleClusterInlineSvg(this.exceptionColors['breaking']),
                        textColor: 'black',
                        width: 60,
                        textSize: 12
                    }]
            });
            brakingCluster.setMaxZoom(14);
            map.fitBounds(bounds);
            // google.maps.event.addDomListener(window, "resize", function () {
            //   google.maps.event.trigger(map, "resize");
            //   map.fitBounds(bounds);
            // });
        }
    }
    bindInfoWindow(marker, map, infowindow, html, oms) {
        google.maps.event.addListener(marker, 'spider_click', function (e) {
            infowindow.setContent(html);
            infowindow.open(map, marker);
        });
        oms.addMarker(marker);
        google.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.setContent(html);
            infowindow.open(map, marker);
        });
        google.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
        });
    }
    convertToFixed(val) {
        val = String(val);
        return val.split('.')[0] + '.' + val.split('.')[1].substring(0, 3);
    }
    convertDateFormat(date) {
        if (date) {
            return moment__WEBPACK_IMPORTED_MODULE_1__(date).utc().format("hh:mm [-] DD/MM/yyyy");
        }
        else {
            return 'NA';
        }
    }
}
ExceptionMapComponent.ɵfac = function ExceptionMapComponent_Factory(t) { return new (t || ExceptionMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"])); };
ExceptionMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExceptionMapComponent, selectors: [["app-exception-map"]], inputs: { tableData: "tableData", singleMarker: "singleMarker" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 24, vars: 30, consts: [[1, "px-3"], [1, "color-differentiation"], [1, "colors"], [1, "dots", 3, "ngStyle"], [1, "colors", "pl-3"], [1, "mapDiv"], ["id", "map"]], template: function ExceptionMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.exceptionColors.speed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, "speeding"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.exceptionColors.idling));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, "idiling"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.exceptionColors.breaking));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 14, "hardBraking"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.exceptionColors.cornering));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 16, "harshCorner"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.exceptionColors.acceleration));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 18, "hardAcceleration"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".mapDiv[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 515px;\n  margin: 0px;\n  padding: 0px;\n  border-radius: 8px;\n}\n  .main_exception_portion .exception_map_hover_card_plate {\n  color: #000000;\n}\n  .main_exception_portion svg path {\n  fill: #ffffff;\n  stroke: #000000;\n}\n  .gm-fullscreen-control {\n  background: #0064FF !important;\n  background-image: url(\"/assets/images/fullscreen_map.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  height: 44px !important;\n  width: 44px !important;\n  border-radius: 50% !important;\n}\n  .gm-fullscreen-control img {\n  display: none !important;\n}\n  .location-tick path {\n  fill: #001e50;\n}\n.color-differentiation[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.color-differentiation[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font: 700 16px/19px ModernEra_Bold;\n  color: #001e50;\n  position: relative;\n}\n.color-differentiation[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.color-differentiation[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 13px;\n  width: 13px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZXhjZXB0aW9uLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQ0VBO0VBQ0UsYUFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUtRO0VBQ0ksY0R5RlM7QUMzRnJCO0FBS1k7RUFDRSxhRGZOO0VDZ0JNLGVEb0ZPO0FDdkZyQjtBQVdJO0VBQ0ksOEJBQUE7RUFDQSxxRUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFSUjtBQVNRO0VBQ0ksd0JBQUE7QUFQWjtBQVdNO0VBQ0UsYURsQ1U7QUN5QmxCO0FBY0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBWEY7QUFZRTtFQUNFLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjRDlDYztFQytDZCxrQkFBQTtBQVZKO0FBV0k7RUFDRSxnQkFBQTtBQVROO0FBV0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFUTiIsImZpbGUiOiJleGNlcHRpb24tbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypORVcgQ09MT1IgTElTVCovXG5cblxuJGxpZ2h0Ymx1ZTogIzAwNTdmZjtcbiRkcmFrX0JsdWU6ICMyOTYyZmY7XG4kc2JsdWU6ICMxYjE5NGI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHRibGFjazogIzE3MWMyMjtcbiRsaWdodGdyYXk6ICM5MzllYWE7XG4kZmdyYXk6ICM3ZDg1OTI7XG4kU2Vjb25kYXJ5X2JsYWNrOiAjMDAxZTUwO1xuJFByaW1hcnlfQmx1ZTogIzAwNjRmZjtcbiRTZWNvbmRhcnlfQmx1ZTogIzYwNGVmZjtcbiRidG5FeHBvcnRCbHVlOiAjNGM2ZmZmO1xuJGRhbmdlcjogI2ZmNzA3MDtcbiRTZWNvbmRhcnlfQWxlcnRzOiAjMDBjYmEwO1xuJG5vSW5mbzogIzE4YTBmYjtcbiRTZWNvbmRhcnlfRGFyazogIzJhMWU5MTtcbiRkYXJrOiAjMzIzMzM4O1xuJGJvcmRlckNvbG9yOiAjYzVjZGQ0O1xuJGxpZ2h0V2hpdGVjb2xvcjogI2Y5ZmFmYjtcbiRncm91cEJvcmRlckRhdGE6ICNlNmU3ZTg7XG4kbGlnaHRtaXhibHVlV2hpdGVjb2xvcjogI2UwZTNlNztcbiR3aGl0ZVNoYWRvdzogI2U5ZWJmMDtcbiRza3lCbHVlOiAjNGRiZmZmO1xuJHllbGxvdzogI2ZmZWE2YztcbiRvcmFuZ2U6ICNmZjk5NTA7XG4kYm9keUJhY2tHcmF5OiAjZmRmY2ZmO1xuJGxpZ2h0QmxhY2s6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4kZXhwb3J0QnRuOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjEpO1xuJGRhbmdlckJveEJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRncmVlbkJveEJhY2s6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMSk7XG4kdGFibGVPZGRCYWNrOiAjZmJmYmZiO1xuJFNlY29uZGFyeV9CbHVlX2Rhcms6ICM3NTU1Y2Y7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbmlnaHRUZXh0Q29sb3I6ICM0NzRmNWE7XG4kbmlnaHRCYWNrQmxhY2s6ICM2NjcyODA7XG4kd2hpdGVDb2xvcjogI2UxZTFlMTtcbiRyZWRDb2xvcjogI2VkNTAyZTtcbiRkYXJrX2dyYXk6ICNiZGJkYmQ7XG4kaGVscEJ0bl9CbHVlOiAjNjAyYWFjO1xuJGRhdGVDb2xvcjogIzRlNWQ3ODtcbiRkYXlDb2xvcjogIzRlNWQ3ODdhO1xuJHJlZEFjdGl2ZUNvbG9yOiAjZmExNDY0O1xuJHdoaXRlQ29sb3JCYWNrOiAjZjdmY2ZmO1xuJGJsYWNrRGFyazogIzI3MjcyZTtcbiR3aGl0ZUdyYXlCYWNrOiAjZjdmY2ZmO1xuLy9pbnB1dCBjc3NcbiRib3JkZXJDb2xvckxpZ2h0OiAjZThlY2VlO1xuJGJvcmRlckNvbG9yR3JheTogI2VlZWRmMDtcbiRsaWdodFdoaXRlOiAjZTVlZWZmO1xuJGJ0bkRlZmF1bHRXaGl0ZTogI2Y0ZjZmODtcbiRtYXRCb3JkZXI6ICNlNmU3ZTg7XG5cbiR0b2dnbGVBY3RpdmU6ICMzNzE5ODY7XG5cbi8vcmdiYSBjc3NcbiRiZWhhdmlvdXJCYWNrOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjA4KTtcbiRtb250aFNob3dCYWNrOiByZ2JhKDg2LCA2NiwgMjU1LCAwLjEpO1xuJGJveFNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiRiYWNrRGFuZ2VyOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuNCk7XG4kYmFja0dyZWVuOiByZ2IoMCAyMDMgMTYwIC8gMTUlKTtcbiRzYWZlU2NvcmVCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kYmFja0dyYXlDb21tb246IHJnYmEoMTM1LCAxMzUsIDEzNSwgMC4wNSk7XG4kcXVpdGVSb2FkOiAjZmZlYTZjO1xuXG4vL25ldyBjb2xvciB2ZXJzaW9uMlxuJHJlZEV4Y2VwdGlvbjogI2ZhMTQ2NDtcbiRib3hzaGFkb3c6IDBweCA4cHggMjVweCByZ2JhKDk4LCA5OCwgOTgsIDAuMDUpO1xuJHRvb2x0aXBzVGV4dENvbG9yOiAjMTYxOTJjO1xuXG4vL2JveCBncmFkaWFudCBCYWNrZ3JvdW5kXG4kdmVoaWNhbEJveEJhY2s6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICM4MWJiZmYgLTQuMiUsICMwMDg1ZmYgOTkuMzclKTtcbiRkcml2ZW5Cb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM1YTZiZmYgMC42OSUsICM2MDRlZmYgMTAyLjIlKTtcbiRiZWhhdmlvdXJCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM4YzQ2ZmYgMC42OSUsICNmZjgwODAgMTAyLjIlKTtcbiRldkJsb2NrQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICNmZmU5NzcgMTAyLjE3JSk7XG4kaWNlQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG5cbi8vYm94IHYyIGdyYWRpYW50IEJhY2tncm91bmRcbiRpY2VCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG4kZHJpdmVyQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjMzY1NmZmIDEwMi4xNyUpO1xuJGtpbG9tZXRlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTMzLjM5ZGVnLCAjNDk4NWY4IC00LjIyJSwgIzRkYmZmZiAxMDQuMjQlKTtcbiRzYWZlRHJpdmluZ0JveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICM0NWM4ZjEgLTE4LjU2JSwgI2VlZTA5NyAxMDIuMTclKTtcbiRkcml2ZXIxQm94VjI6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzc2ZDZlZSAwLjY5JSwgIzc2OThkYiAxMDIuMiUpO1xuJHRyaXBCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjYzJhM2EwIC0xOC41NiUsICNlOWM4YTcgMTAyLjE3JSk7XG4kdmVoaWNsZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjZGY5ODk1IC00LjIlLCAjYzJhM2EwIDEwOC4xNSUpO1xuXG4vL3Njcm9sbCBiYXIgY29sb3IgY29kZVxuJHNjcm9sbEJsYWNrOiAjODg4O1xuJHNjcm9sbFdoaXRlOiAjZjFmMWYxO1xuJHNjcm9sbEhvdmVyQmxhY2s6ICM1NTU7XG5cbi8vd2hpdGUgbGFiZWwgZmxlYWQgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNFRkE5NTI7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcblxuLy93aGl0ZSBsYWJlbCBkaGwgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNkNDA1MTE7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcbi8vICR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazojRkZDQzAwO1xuXG4vL3doaXRlIGxhYmVsIFplZ28gY29sb3JcbiRXaGl0ZV9sYWJpbmdfQmxhY2s6ICMwMDAwMDA7XG4kV2hpdGVfbGFiaW5nX1llbGxvdzogIzM3MTk4NztcbiRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTogIzRkYmZmZjtcbiRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6ICNlZWY5ZmY7XG4kd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6ICNmZmNjMDA7XG4kY29sb3JfdmlvbGV0OiAjODc3NWI3O1xuJGNvbG9yX3Zpb2xldF9kYXJrOiAjMzIxOTg3O1xuJGNvbG9yX2xpZ2h0X2dyZXk6ICNlNWU1ZTU7XG4kY29sb3ItdmlvbGV0LWxpZ2h0OiAjYWM5NGVlO1xuJGNvbG9yLWJsdWUtbGlnaHQ6ICNmNWY1ZjU7XG4kY29sb3ItdGFibGUtaGVhZGluZzogIzI3MjUyZDtcbiR0cmlwSGlzdEJhY2s6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC4wNSk7XG4kc2FmZUJhY2tDb2xvcjogcmdiYSgwLCAyMDMsIDE2MCwgMC4wNSk7XG4kY29sb3JfbGlnaHRfYmx1ZTogIzQ1Y2JmYztcbiRjb2xvcl9ncmFwaF92b2lsZXQ6ICMzNzFhODc7XG5cbi8vZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGVycm9yR3JhZGlhbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcbiAgKSxcbiAgI2Y0NDMzNjtcblxuQG1peGluIGZsZXgtanVzdGlmeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZmxleC1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbkBtaXhpbiBmbGV4LXNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBlbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQG1peGluICBsaW5lLWNsYW1wIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbn1cblxuQG1peGluIGJ0bkZpbHRlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuQG1peGluIG1zZyB7XG4gIGZvbnQ6IDEycHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDMwcHg7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbkBtaXhpbiBtYWluQm94d2l0aEJhY2sge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDEyM3B4IHJnYmEoODcsIDg0LCAxNjAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4vLyBAbWl4aW4gYnV0dG9uLWdyZWVuIHtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjMTFEMEEyO1xuLy8gYm9yZGVyLXJhZGl1czogMTQ1cHg7XG4vLyBmb250LXdlaWdodCA6IDYwMDtcbi8vIGZvbnQtc2l6ZSA6IDE1cHg7XG4vLyBsaW5lLWhlaWdodCA6IDE4cHg7XG4vLyBjb2xvciA6ICNmZmZmZmY7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tYmx1ZSB7XG4vLyBmb250IDogMTNweC8xNnB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzc1NTVDRiwgIzc1NTVDRiksICM2NDNGQzA7XG4vLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gbWF4LXdpZHRoIDogMTQwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiAzOHB4O1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLXJlZCB7XG4vLyBmb250IDogMTZweC8yMHB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICNGRjY1NjU7XG4vLyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuLm1hcERpdntcbiAgcGFkZGluZzogMTZweDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUxNXB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG46Om5nLWRlZXAge1xuICAgIC5tYWluX2V4Y2VwdGlvbl9wb3J0aW9ue1xuXG4gICAgICAgIC5leGNlcHRpb25fbWFwX2hvdmVyX2NhcmRfcGxhdGUge1xuICAgICAgICAgICAgY29sb3I6ICRXaGl0ZV9sYWJpbmdfQmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgICAgZmlsbDogJHdoaXRlO1xuICAgICAgICAgICAgICBzdHJva2U6ICRXaGl0ZV9sYWJpbmdfQmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgfVxuICBcbn1cbjo6bmctZGVlcHtcbiAgICAuZ20tZnVsbHNjcmVlbi1jb250cm9se1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2NEZGICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZnVsbHNjcmVlbl9tYXAuc3ZnJykgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvY2F0aW9uLXRpY2t7XG4gICAgICBwYXRoe1xuICAgICAgICBmaWxsOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgfVxuICAgIH1cbn1cblxuLmNvbG9yLWRpZmZlcmVudGlhdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLmNvbG9ycyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udDogNzAwIDE2cHgvMTlweCBNb2Rlcm5FcmFfQm9sZDtcbiAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIH1cbiAgICAuZG90cyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBoZWlnaHQ6IDEzcHg7XG4gICAgICB3aWR0aDogMTNweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAvLyAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB9XG4gIH1cblxuICBcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExceptionMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exception-map',
                templateUrl: './exception-map.component.html',
                styleUrls: ['./exception-map.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"] }]; }, { tableData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["tableData"]
        }], singleMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["singleMarker"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=fleetOverview-exceptions-exceptions-module-es2015.js.map