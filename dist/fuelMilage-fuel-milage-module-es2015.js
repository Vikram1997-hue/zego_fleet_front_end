(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fuelMilage-fuel-milage-module"],{

/***/ "Cqmk":
/*!****************************************************************************!*\
  !*** ./src/app/main/fuelMilage/fuel-dashboard/fuel-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: FuelDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelDashboardComponent", function() { return FuelDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/app-config */ "Tr6M");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "m0r1");
/* harmony import */ var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/route-config */ "1r8O");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/main.service */ "c/rV");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local.service */ "s3jE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-daterangepicker-material */ "YhS8");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/pipe/filter.pipe */ "AOmN");

























function FuelDashboardComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r10 == null ? null : item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (item_r10 == null ? null : item_r10.name) || "NA", "");
} }
function FuelDashboardComponent_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r11 == null ? null : item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r11 == null ? null : item_r11.license_plate, " ");
} }
function FuelDashboardComponent_span_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "km/ltr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function FuelDashboardComponent_span_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "km/kWh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function FuelDashboardComponent_mat_spinner_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-spinner", 59);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 50);
} }
function FuelDashboardComponent_ng_container_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-spinner", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 50);
} }
function FuelDashboardComponent_ng_template_121_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "v.license"), " ");
} }
function FuelDashboardComponent_ng_template_121_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r24.license_plate || "NA", " ");
} }
function FuelDashboardComponent_ng_template_121_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "v.category"), " ");
} }
function FuelDashboardComponent_ng_template_121_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r25.category_name || "NA", " ");
} }
function FuelDashboardComponent_ng_template_121_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "v.vehicle"), " ");
} }
function FuelDashboardComponent_ng_template_121_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r26.vehicle_model || "NA", " ");
} }
function FuelDashboardComponent_ng_template_121_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "v.fuel"), " ");
} }
function FuelDashboardComponent_ng_template_121_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r27.fuel_type || "NA", " ");
} }
function FuelDashboardComponent_ng_template_121_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "v.consumption"), "");
} }
function FuelDashboardComponent_ng_template_121_td_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const element_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r29.service.convertToDutch(element_r28.consumption100km), " ");
} }
function FuelDashboardComponent_ng_template_121_td_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " NA ");
} }
function FuelDashboardComponent_ng_template_121_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, FuelDashboardComponent_ng_template_121_td_16_ng_container_1_Template, 2, 1, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, FuelDashboardComponent_ng_template_121_td_16_ng_template_2_Template, 1, 0, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", element_r28.consumption100km !== "NA")("ngIfElse", _r30);
} }
function FuelDashboardComponent_ng_template_121_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 77);
} }
function FuelDashboardComponent_ng_template_121_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 78);
} }
function FuelDashboardComponent_ng_template_121_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "table", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("matSortChange", function FuelDashboardComponent_ng_template_121_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r34.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, FuelDashboardComponent_ng_template_121_th_3_Template, 3, 3, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, FuelDashboardComponent_ng_template_121_td_4_Template, 2, 1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](5, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, FuelDashboardComponent_ng_template_121_th_6_Template, 3, 3, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, FuelDashboardComponent_ng_template_121_td_7_Template, 2, 1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, FuelDashboardComponent_ng_template_121_th_9_Template, 3, 3, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, FuelDashboardComponent_ng_template_121_td_10_Template, 2, 1, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, FuelDashboardComponent_ng_template_121_th_12_Template, 3, 3, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, FuelDashboardComponent_ng_template_121_td_13_Template, 2, 1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](14, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, FuelDashboardComponent_ng_template_121_th_15_Template, 3, 3, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, FuelDashboardComponent_ng_template_121_td_16_Template, 4, 2, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, FuelDashboardComponent_ng_template_121_tr_17_Template, 1, 0, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, FuelDashboardComponent_ng_template_121_tr_18_Template, 1, 0, "tr", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r8.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r8.displayedColumns);
} }
const _c0 = function () { return { standalone: true }; };
const _c1 = function () { return { applyLabel: "Set Date" }; };
class FuelDashboardComponent {
    constructor(service, localService, elementRef, router) {
        this.service = service;
        this.localService = localService;
        this.elementRef = elementRef;
        this.router = router;
        //table
        this.displayedColumns = ['license_plate', 'category_name', 'vehicle_model', 'fuel_type', 'consumption100km'];
        this.isCollapsed = true;
        this.vehicleCategoryData = [];
        this.vehicleList = [];
        this.driverList = [];
        this.selectedVehicleCategory = 'all';
        this.selectedVehicle = 'all';
        this.page = 1;
        this.limit = 1000;
        this.pageSizeOptions = [5, 10, 25, 100, 1000];
        this.toggleType = 'ice';
        this.dashboardData = {};
        this.isFuelListLoading = false;
        this.selected = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
        };
        this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
        };
        // CALENDAR
        this.ranges = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].momentRange;
        this.alwaysShowCalendars = true;
        this.showRangeLabelOnInput = true;
        this.keepCalendarOpeningWithRange = true;
        this.invalidDates = [];
        this.fuelChart = { licensePlate: [], mileage: [] };
        this.tooltips = [
            { date: moment__WEBPACK_IMPORTED_MODULE_1__(), text: 'Today is just unselectable' },
            { date: moment__WEBPACK_IMPORTED_MODULE_1__().add(2, 'days'), text: 'Yeeeees!!!' }
        ];
        this.isInvalidDate = (m) => {
            return this.invalidDates.some(d => d.isSame(m, 'day'));
        };
        this.isTooltipDate = (m) => {
            const tooltip = this.tooltips.find(tt => tt.date.isSame(m, 'day'));
            if (tooltip) {
                return tooltip.text;
            }
            else {
                return false;
            }
        };
        chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"].register(...chart_js__WEBPACK_IMPORTED_MODULE_3__["registerables"]);
    }
    ngOnInit() {
        this.limit = Number(this.localService.getItem("fuelLimit")) || 1000;
        this.selectedOrgID = this.localService.getItem("selectedOrgs");
        if (this.selectedOrgID) {
            this.selectedOrgID = JSON.parse(this.selectedOrgID);
        }
        if (this.selectedOrgID) {
            this.resetToLastState();
            this.getVehicleCategory();
            this.getVehicles();
            this.updatePageData();
        }
        this.localService.watchOrgData().subscribe((resp) => {
            if (resp && this.router.url.split('?')[0] == src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].fuelmilage.url) {
                // console.log('')
                let orgId = this.localService.getItem("selectedOrgs");
                if (orgId) {
                    orgId = JSON.parse(orgId);
                }
                let isEqual = true;
                if (this.selectedOrgID && this.selectedOrgID.length && orgId && orgId.length) {
                    isEqual = (orgId.length === this.selectedOrgID.length) && (orgId.every(val => this.selectedOrgID.includes(val)));
                }
                else {
                    isEqual = false;
                }
                if (!isEqual) {
                    this.selectedOrgID = [...orgId];
                    this.resetToLastState();
                    this.getVehicleCategory();
                    this.getVehicles();
                    this.updatePageData();
                }
            }
        });
    }
    getFuelDashboardData(categoryId, vehicleId, search) {
        let querryParams = this.createQuerryparams(categoryId, vehicleId, search, 'listing');
        this.service.get(`fuel-report?${querryParams}`).pipe().subscribe(response => {
            if (response.data) {
                this.dashboardData = response.data;
            }
            else {
                this.dashboardData = {};
            }
        }, (error) => {
            this.dashboardData = {};
        });
    }
    rangeClicked(label) {
        // console.log('[rangeClicked] range is : ', label);
    }
    datesUpdated(range) {
        //  console.log('[datesUpdated] range is : ', range);
    }
    getVehicleCategory() {
        this.searchCategory = '';
        this.service.get(`vehicles/category-by-organisation?organisation=${JSON.stringify(this.selectedOrgID)}`).pipe().subscribe(response => {
            if (response.data && response.data.length) {
                this.vehicleCategoryData = response.data;
                this.selectedVehicleCategory = 'all';
            }
        }, (error) => {
        });
    }
    getVehicles(categoryId) {
        if ((categoryId && categoryId == 'all') || categoryId == undefined) {
            categoryId = '';
        }
        this.searchVehicle = '';
        this.service.get(`vehicles/by-organisation?organisation=${JSON.stringify(this.selectedOrgID)}`).pipe().subscribe(response => {
            if (response.data && response.data.length) {
                this.vehicleList = response.data;
                this.selectedVehicle = 'all';
            }
            // this.getUpdatedStats()
        }, (error) => {
        });
    }
    changeState() {
        this.isCollapsed = !this.isCollapsed;
        if (!this.isCollapsed) {
            this.resetToLastState();
        }
    }
    updatePageData() {
        this.page = 1;
        this.totalCount = 0;
        this.searchVehicle = '';
        this.searchCategory = '';
        this.getFuelDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.searchString);
        this.getFuelListing(this.selectedVehicleCategory, this.selectedVehicle, this.searchString);
    }
    getFuelListing(categoryId, vehicleId, search) {
        this.isFuelListLoading = true;
        this.fuelChart = { licensePlate: [], mileage: [] };
        let querryParams = this.createQuerryparams(categoryId, vehicleId, search, 'listing');
        this.service.get(`fuel-list?${querryParams}&listFor=ice`).pipe().subscribe(response => {
            this.isFuelListLoading = false;
            if (response.data) {
                this.totalCount = response.data.count;
                if (this.totalCount) {
                    response.data.rows.sort(function (a, b) {
                        if (a.consumption100km > 200)
                            a.consumption100km = 0;
                        if (b.consumption100km > 200)
                            b.consumption100km = 0;
                        return b.consumption100km - a.consumption100km;
                    });
                    response.data.rows.forEach(element => {
                        if (element.consumption100km && element.consumption100km <= 200) {
                            element.consumption100km = parseFloat(element.consumption100km).toFixed(1);
                        }
                        else {
                            element.consumption100km = 'NA';
                        }
                        this.fuelChart.licensePlate.push(element.license_plate);
                        this.fuelChart.mileage.push(element.consumption100km == 'NA' ? 0 : element.consumption100km);
                    });
                    this.dataSource = response.data.rows;
                }
                this.createFuelChart();
            }
            else {
                this.fuelChart = { licensePlate: [], mileage: [] };
                this.totalCount = 0;
                this.dataSource = [];
            }
        }, (error) => {
            this.isFuelListLoading = false;
            this.dataSource = [];
        });
    }
    pageChange(event) {
        this.page = event.pageIndex + 1;
        this.limit = event.pageSize;
        this.localService.setItem("fuelLimit", this.limit);
        this.isCollapsed = true;
        let category = this.localService.getItem("category");
        let vehicle = this.localService.getItem("vehicle");
        let search = this.localService.getItem("search");
        this.getFuelListing(category, vehicle, search);
    }
    resetToLastState() {
        let category = this.localService.getItem("category");
        let vehicle = this.localService.getItem("vehicle");
        let search = this.localService.getItem("search");
        let date = this.localService.getItem("dateRange");
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
    }
    resetFilter() {
        this.selectedVehicleCategory = 'all';
        this.selectedVehicle = 'all';
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
        this.localService.setItem("search", this.searchString);
        this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
        this.selected = this.selectedShow;
        this.updatePageData();
        this.changeState();
    }
    createQuerryparams(categoryId, vehicleId, search, listing) {
        let querryParams;
        if (listing) {
            querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}&page=${this.page}&limit=${this.limit}`;
        }
        else {
            querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
        }
        if ((categoryId && categoryId !== 'all')) {
            let arr = [categoryId];
            querryParams = querryParams + `&vehicle_category=${JSON.stringify(arr)}`;
        }
        if ((vehicleId && vehicleId !== 'all')) {
            let arr = [vehicleId];
            querryParams = querryParams + `&vehicle=${JSON.stringify(arr)}`;
        }
        if (search) {
            querryParams = querryParams + `&search=${search}`;
        }
        querryParams = querryParams + `&from_date=${moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format('YYYY-MM-DD')}`;
        querryParams = querryParams + `&to_date=${moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format('YYYY-MM-DD')}`;
        let val = this.service.checkCustomDate(moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format('YYYY-MM-DD'));
        if (val == undefined) {
            querryParams = querryParams + `&custom_filter=true&filter_value=''`;
        }
        else {
            if ((categoryId && categoryId !== 'all') || (vehicleId && vehicleId !== 'all') || search) {
                querryParams = querryParams + `&custom_filter=true&filter_value=''`;
            }
            else {
                querryParams = querryParams + `&custom_filter=false&filter_value=${val}`;
            }
        }
        return querryParams;
    }
    selectFuelType(event) {
        event.checked ? this.toggleType = 'ev' : this.toggleType = 'ice';
        this.updatePageData();
    }
    createFuelChart() {
        const labels = this.fuelChart.licensePlate;
        let background = Array(this.fuelChart.licensePlate.length).fill('#4DBFFF');
        let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
        if (this.myChart)
            this.myChart.destroy();
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Mileage (ltr/100km)',
                        data: this.fuelChart.mileage,
                        borderColor: background,
                        backgroundColor: background,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Mileage'
                    }
                },
                scales: {
                    x: {
                        display: false
                    }
                }
            }
        });
        var dataset = this.myChart.data.datasets[0];
        for (var i = 0; i < dataset.data.length; i++) {
            if (dataset.data[i] < 35) {
                dataset.backgroundColor[i] = 'green';
            }
            else if (dataset.data[i] < 45) {
                dataset.backgroundColor[i] = 'yellow';
            }
            else if (dataset.data[i] < 60) {
                dataset.backgroundColor[i] = 'Orange';
            }
            else {
                dataset.backgroundColor[i] = 'red';
            }
        }
        this.myChart.update();
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
    sortData(sort) {
        const data = this.dataSource.slice();
        if (!sort.active || sort.direction === '') {
            this.dataSource = data;
            return;
        }
        this.dataSource = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'license_plate':
                    return this.compare(a.license_plate, b.license_plate, isAsc);
                case 'category_name':
                    return this.compare(a.category_name, b.category_name, isAsc);
                case 'vehicle_model':
                    return this.compare(a.vehicle_model, b.vehicle_model, isAsc);
                case 'fuel_type':
                    return this.compare(a.fuel_type, b.fuel_type, isAsc);
                case 'consumption100km':
                    return this.compare(a.consumption100km, b.consumption100km, isAsc);
                default:
                    return 0;
            }
        });
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
FuelDashboardComponent.??fac = function FuelDashboardComponent_Factory(t) { return new (t || FuelDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
FuelDashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FuelDashboardComponent, selectors: [["app-fuel-dashboard"]], decls: 125, vars: 108, consts: [[1, "mainFilter"], [1, "filterHeader"], ["aria-controls", "collapseExample", 1, "btn", "btnFiliter", 3, "click"], ["src", "assets/images/filter.svg"], [1, "btn", "btnFilterExport", "enable-click-event"], ["src", "assets/images/export.svg"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "filterBody"], [1, "filterBodyTitle"], [3, "click"], ["src", "assets/images/close-circle.svg"], [1, "filterSearch", "mb-20"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "filterSearchIcon"], ["src", "assets/images/search.svg"], [1, "profileBox"], ["appearance", "outline", 1, "fields", "fileld33"], ["panelClass", "customSelect", 3, "ngModel", "ngModelOptions", "disableOptionCentering", "placeholder", "ngModelChange"], [1, "searchSelect", "border-bottom"], ["type", "text", 1, "searchDropdown", 3, "placeholder", "ngModel", "ngModelChange"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.58973 9.59067C9.76496 9.41543 10.0491 9.41543 10.2243 9.59067L12.7013 12.0677C12.8765 12.2429 12.8765 12.527 12.7013 12.7022C12.526 12.8775 12.2419 12.8775 12.0667 12.7022L9.58973 10.2253C9.4145 10.05 9.4145 9.7659 9.58973 9.59067Z", "fill", "#848588"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.46094 2.06443C4.03226 2.06443 2.06344 4.03328 2.06344 6.46198C2.06344 8.89069 4.03226 10.8595 6.46094 10.8595C8.88961 10.8595 10.8584 8.89069 10.8584 6.46198C10.8584 4.03328 8.88961 2.06443 6.46094 2.06443ZM1.16602 6.46198C1.16602 3.53764 3.53663 1.16699 6.46094 1.16699C9.38524 1.16699 11.7559 3.53764 11.7559 6.46198C11.7559 9.38633 9.38524 11.757 6.46094 11.757C3.53663 11.757 1.16602 9.38633 1.16602 6.46198Z", "fill", "#848588"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "fields", "fileld33", "ngx-daterangepicker-action"], ["matInput", "", "ngxDaterangepickerMd", "", "readonly", "", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ranges", "showClearButton", "showCancel", "linkedCalendars", "isTooltipDate", "isInvalidDate", "locale", "keepCalendarOpeningWithRange", "showRangeLabelOnInput", "ngModelChange", "rangeClicked", "datesUpdated"], [1, "calIconRight"], ["src", "assets/images/calendar.svg"], [1, "d-flex", "flex-wrap", "justify-content-end", "mt-2"], ["mat-button", "", 1, "filterBtn", "cancleBtn", 3, "click"], ["mat-button", "", 1, "filterBtn", "applyBtn", 3, "click"], [1, "vehicalSec"], [1, "box", "vehicalBox"], [1, "leftsec"], [1, "title", 3, "title"], [1, "value"], [1, "mapImg"], ["src", "assets/images/delivery-truck.png"], [1, "box", "driven"], [1, "valueFuel"], [4, "ngIf"], [1, "truckImg"], ["src", "assets/images/truck.png"], [1, "box", "behaviour", "evBlock"], ["src", "assets/images/evCharge.png"], [1, "vehicleInfo", "mb-20"], ["style", "margin: 0 auto;", 3, "diameter", 4, "ngIf"], [1, "speedChart", 2, "height", "400px"], ["id", "myChart"], [1, "vehicleInfo"], [1, "d-flex", "flex-wrap", "justify-content-between"], [1, "d-flex"], [1, "vehTitle"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "length", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"], ["paginator", ""], [2, "margin", "0 auto", 3, "diameter"], [1, "table-responsive"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "mat-elevation-z8", "w-100", "booking-table", 3, "dataSource", "matSortChange"], ["matColumnDef", "license_plate"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category_name"], ["matColumnDef", "vehicle_model"], ["class", "pl-3", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "pl-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fuel_type"], ["matColumnDef", "consumption100km"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "pl-3"], ["mat-cell", "", 1, "pl-3"], ["mat-header-row", ""], ["mat-row", ""]], template: function FuelDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FuelDashboardComponent_Template_button_click_5_listener() { return ctx.changeState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngbCollapseChange", function FuelDashboardComponent_Template_div_ngbCollapseChange_9_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FuelDashboardComponent_Template_span_click_15_listener() { return ctx.changeState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FuelDashboardComponent_Template_input_ngModelChange_18_listener($event) { return ctx.searchString = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FuelDashboardComponent_Template_mat_select_ngModelChange_26_listener($event) { return ctx.selectedVehicleCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FuelDashboardComponent_Template_input_ngModelChange_29_listener($event) { return ctx.searchCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](37, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, FuelDashboardComponent_mat_option_39_Template, 2, 2, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](40, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FuelDashboardComponent_Template_mat_select_ngModelChange_45_listener($event) { return ctx.selectedVehicle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FuelDashboardComponent_Template_input_ngModelChange_48_listener($event) { return ctx.searchVehicle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](56, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, FuelDashboardComponent_mat_option_58_Template, 2, 2, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](59, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FuelDashboardComponent_Template_input_ngModelChange_64_listener($event) { return ctx.selectedShow = $event; })("rangeClicked", function FuelDashboardComponent_Template_input_rangeClicked_64_listener($event) { return ctx.rangeClicked($event); })("datesUpdated", function FuelDashboardComponent_Template_input_datesUpdated_64_listener($event) { return ctx.datesUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FuelDashboardComponent_Template_button_click_69_listener() { ctx.resetToLastState(); return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FuelDashboardComponent_Template_button_click_72_listener() { return ctx.filterApply(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h4", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](94, FuelDashboardComponent_span_94_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "h4", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](105, FuelDashboardComponent_span_105_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](109, FuelDashboardComponent_mat_spinner_109_Template, 1, 1, "mat-spinner", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "canvas", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](120, FuelDashboardComponent_ng_container_120_Template, 2, 1, "ng-container", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](121, FuelDashboardComponent_ng_template_121_Template, 19, 3, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "mat-paginator", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("page", function FuelDashboardComponent_Template_mat_paginator_page_123_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 57, "sidebar.milage"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 59, "v.vehicleCategory"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](27, 61, "v.vehicleCategory"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectedVehicleCategory)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](105, _c0))("disableOptionCentering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](30, 63, "search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](37, 65, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](38, 67, "all")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](40, 69, ctx.vehicleCategoryData, ctx.searchCategory, "vehicleCategory"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](44, 73, "v.selectVehicle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](46, 75, "v.selectVehicle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectedVehicle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](106, _c0))("disableOptionCentering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](49, 77, "search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchVehicle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](56, 79, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](57, 81, "all")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](59, 83, ctx.vehicleList, ctx.searchVehicle, "vehicle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](63, 87, "selectRange"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectedShow)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx.alwaysShowCalendars)("ranges", ctx.ranges)("showClearButton", false)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx.isTooltipDate)("isInvalidDate", ctx.isInvalidDate)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](107, _c1))("keepCalendarOpeningWithRange", ctx.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx.showRangeLabelOnInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](74, 89, "apply"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](79, 91, "t.ride"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](81, 93, "t.ride"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.service.convertToDutch(ctx.dashboardData == null ? null : ctx.dashboardData.total_trips));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("title", " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](89, 95, "averageMileageIce"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](91, 97, "averageMileageIce"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.service.convertToDutch(ctx.dashboardData == null ? null : ctx.dashboardData.average_milage_ice), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.dashboardData == null ? null : ctx.dashboardData.average_milage_ice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](100, 99, "averageMileageEv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](102, 101, "averageMileageEv"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.service.convertToDutch(ctx.dashboardData == null ? null : ctx.dashboardData.average_milage_ev), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.dashboardData == null ? null : ctx.dashboardData.average_milage_ev);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isFuelListLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](117, 103, "mileageInfo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isFuelListLoading)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("length", ctx.totalCount)("pageSize", ctx.limit)("pageSizeOptions", ctx.pageSizeOptions)("showFirstLastButtons", true);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_16__["DaterangepickerDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatRow"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["TitleCasePipe"], _shared_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterPipe"]], styles: [".vehicleInfo[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #ffffff;\n  box-shadow: 0px -5px 123px rgba(87, 84, 160, 0.08);\n  border-radius: 8px;\n}\n.vehicleInfo[_ngcontent-%COMP%]   .vehTitle[_ngcontent-%COMP%] {\n  font: 600 18px/25px ModernEra;\n  color: #001e50;\n  margin-bottom: 5px;\n  margin-right: 16px;\n}\n.valueFuel[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-bottom: 5px;\n  font: 800 24px/24px ModernEra;\n}\n@media (max-width: 1440px) {\n  .valueFuel[_ngcontent-%COMP%] {\n    font: 800 20px/20px ModernEra;\n  }\n}\n.booking-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font: 500 12px/18px ModernEra;\n  color: #ffffff;\n  padding-right: 30px;\n}\n.booking-table[_ngcontent-%COMP%]   .mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #7555cf;\n}\n.booking-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  font: 13px/16px ModernEra;\n  color: #000000;\n  max-width: 106px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\ntr.mat-header-row[_ngcontent-%COMP%] {\n  height: 34px;\n  background: #000000;\n  border-radius: 5px;\n  color: #ffffff;\n}\nmat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-color: transparent;\n  font: 12px/18px ModernEra !important;\n  color: #001e50 !important;\n}\n.date[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  font: 12px/18px ModernEra !important;\n  padding: 3px 30px;\n  color: #ffffff;\n  border-radius: 24px;\n}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%] {\n  border-color: transparent;\n  font: 12px/18px ModernEra !important;\n  color: #ffffff !important;\n}\ntr.mat-row[_ngcontent-%COMP%]:nth-child(odd), tr.mat-footer-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #fbfbfb;\n  border-radius: 8px;\n  height: 34px;\n}\ntr.mat-row[_ngcontent-%COMP%]:nth-child(even), tr.mat-footer-row[_ngcontent-%COMP%]:nth-child(even) {\n  background: #ffffff;\n}\n[_nghost-%COMP%]     .booking-table tr.mat-row, [_nghost-%COMP%]     .booking-table tr.mat-footer-row {\n  height: 34px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  letter-spacing: 0.22px;\n  width: 100%;\n}\n.mat-table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 10px !important;\n}\n.evToggle[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 0 18px;\n}\n.evToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 14px/18px ModernEra !important;\n  color: #c5cdd4;\n}\n.evToggle[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #0064ff;\n}\n  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(18, 103, 250, 0.65);\n}\n  .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #0064ff;\n}\n@media (min-width: 1020px) and (max-width: 1120px) {\n  .mapImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 83px;\n  }\n}\n@media (max-width: 1019px) {\n  .mapImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 64px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vZnVlbC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNFQTtFQUNJLGFBQUE7RUQ2S0YsbUJBMUtNO0VBMktOLGtEQUFBO0VBQ0Esa0JBQUE7QUM1S0Y7QUFBSTtFQUNJLDZCQUFBO0VBQ0EsY0RFVTtFQ0RWLGtCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUVBO0VBQ0ksY0RUSTtFQ1VKLGtCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUNJO0VBTEo7SUFNUSw2QkFBQTtFQUVOO0FBQ0Y7QUFFSTtFQUNJLDZCQUFBO0VBQ0EsY0RyQkE7RUNzQkEsbUJBQUE7QUFDUjtBQUVJO0VBQ0ksY0RDYztBQ0R0QjtBQUlRO0VBQ0kseUJBQUE7RUFDQSxjREpKO0VDS0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFGWjtBQU9BO0VBQ0ksWUFBQTtFQUNBLG1CRHlEaUI7RUN4RGpCLGtCQUFBO0VBQ0EsY0Q3Q0k7QUN5Q1I7QUFPQTs7OztFQUlJLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQUpKO0FBUUE7RUFDSSxrQkFBQTtFRHdHRixvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FyS007RUFzS04sbUJBQUE7QUM1R0Y7QUFLQTs7OztFQUlJLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQUZKO0FBT0k7O0VBQ0ksbUJEakRPO0VDa0RQLGtCQUFBO0VBQ0EsWUFBQTtBQUhSO0FBTUk7O0VBQ0ksbUJEakZBO0FDOEVSO0FBV1k7O0VBRUksWUFBQTtBQVJoQjtBQWNBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FBWEo7QUFjQTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7QUFYSjtBQWVJO0VBQ0csY0FBQTtBQVpQO0FBY0k7RUFDSSx3Q0FBQTtFQUNBLGNEcEdNO0FDd0ZkO0FBYVE7RUFDSSxjRDlHRztBQ21HZjtBQWlCSTtFQUNJLDBDQUFBO0FBZFI7QUFpQkk7RUFDSSx5QkR6SE87QUMwR2Y7QUFtQkE7RUFFTTtJQUNFLFdBQUE7RUFqQk47QUFDRjtBQW9CRTtFQUVJO0lBQ0UsV0FBQTtFQW5CTjtBQUNGIiwiZmlsZSI6ImZ1ZWwtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypORVcgQ09MT1IgTElTVCovXG5cblxuJGxpZ2h0Ymx1ZTogIzAwNTdmZjtcbiRkcmFrX0JsdWU6ICMyOTYyZmY7XG4kc2JsdWU6ICMxYjE5NGI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHRibGFjazogIzE3MWMyMjtcbiRsaWdodGdyYXk6ICM5MzllYWE7XG4kZmdyYXk6ICM3ZDg1OTI7XG4kU2Vjb25kYXJ5X2JsYWNrOiAjMDAxZTUwO1xuJFByaW1hcnlfQmx1ZTogIzAwNjRmZjtcbiRTZWNvbmRhcnlfQmx1ZTogIzYwNGVmZjtcbiRidG5FeHBvcnRCbHVlOiAjNGM2ZmZmO1xuJGRhbmdlcjogI2ZmNzA3MDtcbiRTZWNvbmRhcnlfQWxlcnRzOiAjMDBjYmEwO1xuJG5vSW5mbzogIzE4YTBmYjtcbiRTZWNvbmRhcnlfRGFyazogIzJhMWU5MTtcbiRkYXJrOiAjMzIzMzM4O1xuJGJvcmRlckNvbG9yOiAjYzVjZGQ0O1xuJGxpZ2h0V2hpdGVjb2xvcjogI2Y5ZmFmYjtcbiRncm91cEJvcmRlckRhdGE6ICNlNmU3ZTg7XG4kbGlnaHRtaXhibHVlV2hpdGVjb2xvcjogI2UwZTNlNztcbiR3aGl0ZVNoYWRvdzogI2U5ZWJmMDtcbiRza3lCbHVlOiAjNGRiZmZmO1xuJHllbGxvdzogI2ZmZWE2YztcbiRvcmFuZ2U6ICNmZjk5NTA7XG4kYm9keUJhY2tHcmF5OiAjZmRmY2ZmO1xuJGxpZ2h0QmxhY2s6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4kZXhwb3J0QnRuOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjEpO1xuJGRhbmdlckJveEJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRncmVlbkJveEJhY2s6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMSk7XG4kdGFibGVPZGRCYWNrOiAjZmJmYmZiO1xuJFNlY29uZGFyeV9CbHVlX2Rhcms6ICM3NTU1Y2Y7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbmlnaHRUZXh0Q29sb3I6ICM0NzRmNWE7XG4kbmlnaHRCYWNrQmxhY2s6ICM2NjcyODA7XG4kd2hpdGVDb2xvcjogI2UxZTFlMTtcbiRyZWRDb2xvcjogI2VkNTAyZTtcbiRkYXJrX2dyYXk6ICNiZGJkYmQ7XG4kaGVscEJ0bl9CbHVlOiAjNjAyYWFjO1xuJGRhdGVDb2xvcjogIzRlNWQ3ODtcbiRkYXlDb2xvcjogIzRlNWQ3ODdhO1xuJHJlZEFjdGl2ZUNvbG9yOiAjZmExNDY0O1xuJHdoaXRlQ29sb3JCYWNrOiAjZjdmY2ZmO1xuJGJsYWNrRGFyazogIzI3MjcyZTtcbiR3aGl0ZUdyYXlCYWNrOiAjZjdmY2ZmO1xuLy9pbnB1dCBjc3NcbiRib3JkZXJDb2xvckxpZ2h0OiAjZThlY2VlO1xuJGJvcmRlckNvbG9yR3JheTogI2VlZWRmMDtcbiRsaWdodFdoaXRlOiAjZTVlZWZmO1xuJGJ0bkRlZmF1bHRXaGl0ZTogI2Y0ZjZmODtcbiRtYXRCb3JkZXI6ICNlNmU3ZTg7XG5cbiR0b2dnbGVBY3RpdmU6ICMzNzE5ODY7XG5cbi8vcmdiYSBjc3NcbiRiZWhhdmlvdXJCYWNrOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjA4KTtcbiRtb250aFNob3dCYWNrOiByZ2JhKDg2LCA2NiwgMjU1LCAwLjEpO1xuJGJveFNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiRiYWNrRGFuZ2VyOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuNCk7XG4kYmFja0dyZWVuOiByZ2IoMCAyMDMgMTYwIC8gMTUlKTtcbiRzYWZlU2NvcmVCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kYmFja0dyYXlDb21tb246IHJnYmEoMTM1LCAxMzUsIDEzNSwgMC4wNSk7XG4kcXVpdGVSb2FkOiAjZmZlYTZjO1xuXG4vL25ldyBjb2xvciB2ZXJzaW9uMlxuJHJlZEV4Y2VwdGlvbjogI2ZhMTQ2NDtcbiRib3hzaGFkb3c6IDBweCA4cHggMjVweCByZ2JhKDk4LCA5OCwgOTgsIDAuMDUpO1xuJHRvb2x0aXBzVGV4dENvbG9yOiAjMTYxOTJjO1xuXG4vL2JveCBncmFkaWFudCBCYWNrZ3JvdW5kXG4kdmVoaWNhbEJveEJhY2s6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICM4MWJiZmYgLTQuMiUsICMwMDg1ZmYgOTkuMzclKTtcbiRkcml2ZW5Cb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM1YTZiZmYgMC42OSUsICM2MDRlZmYgMTAyLjIlKTtcbiRiZWhhdmlvdXJCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM4YzQ2ZmYgMC42OSUsICNmZjgwODAgMTAyLjIlKTtcbiRldkJsb2NrQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICNmZmU5NzcgMTAyLjE3JSk7XG4kaWNlQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG5cbi8vYm94IHYyIGdyYWRpYW50IEJhY2tncm91bmRcbiRpY2VCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG4kZHJpdmVyQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjMzY1NmZmIDEwMi4xNyUpO1xuJGtpbG9tZXRlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTMzLjM5ZGVnLCAjNDk4NWY4IC00LjIyJSwgIzRkYmZmZiAxMDQuMjQlKTtcbiRzYWZlRHJpdmluZ0JveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICM0NWM4ZjEgLTE4LjU2JSwgI2VlZTA5NyAxMDIuMTclKTtcbiRkcml2ZXIxQm94VjI6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzc2ZDZlZSAwLjY5JSwgIzc2OThkYiAxMDIuMiUpO1xuJHRyaXBCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjYzJhM2EwIC0xOC41NiUsICNlOWM4YTcgMTAyLjE3JSk7XG4kdmVoaWNsZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjZGY5ODk1IC00LjIlLCAjYzJhM2EwIDEwOC4xNSUpO1xuXG4vL3Njcm9sbCBiYXIgY29sb3IgY29kZVxuJHNjcm9sbEJsYWNrOiAjODg4O1xuJHNjcm9sbFdoaXRlOiAjZjFmMWYxO1xuJHNjcm9sbEhvdmVyQmxhY2s6ICM1NTU7XG5cbi8vd2hpdGUgbGFiZWwgZmxlYWQgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNFRkE5NTI7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcblxuLy93aGl0ZSBsYWJlbCBkaGwgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNkNDA1MTE7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcbi8vICR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazojRkZDQzAwO1xuXG4vL3doaXRlIGxhYmVsIFplZ28gY29sb3JcbiRXaGl0ZV9sYWJpbmdfQmxhY2s6ICMwMDAwMDA7XG4kV2hpdGVfbGFiaW5nX1llbGxvdzogIzM3MTk4NztcbiRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTogIzRkYmZmZjtcbiRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6ICNlZWY5ZmY7XG4kd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6ICNmZmNjMDA7XG4kY29sb3JfdmlvbGV0OiAjODc3NWI3O1xuJGNvbG9yX3Zpb2xldF9kYXJrOiAjMzIxOTg3O1xuJGNvbG9yX2xpZ2h0X2dyZXk6ICNlNWU1ZTU7XG4kY29sb3ItdmlvbGV0LWxpZ2h0OiAjYWM5NGVlO1xuJGNvbG9yLWJsdWUtbGlnaHQ6ICNmNWY1ZjU7XG4kY29sb3ItdGFibGUtaGVhZGluZzogIzI3MjUyZDtcbiR0cmlwSGlzdEJhY2s6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC4wNSk7XG4kc2FmZUJhY2tDb2xvcjogcmdiYSgwLCAyMDMsIDE2MCwgMC4wNSk7XG4kY29sb3JfbGlnaHRfYmx1ZTogIzQ1Y2JmYztcbiRjb2xvcl9ncmFwaF92b2lsZXQ6ICMzNzFhODc7XG5cbi8vZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGVycm9yR3JhZGlhbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcbiAgKSxcbiAgI2Y0NDMzNjtcblxuQG1peGluIGZsZXgtanVzdGlmeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZmxleC1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbkBtaXhpbiBmbGV4LXNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBlbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQG1peGluICBsaW5lLWNsYW1wIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbn1cblxuQG1peGluIGJ0bkZpbHRlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuQG1peGluIG1zZyB7XG4gIGZvbnQ6IDEycHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDMwcHg7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbkBtaXhpbiBtYWluQm94d2l0aEJhY2sge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDEyM3B4IHJnYmEoODcsIDg0LCAxNjAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4vLyBAbWl4aW4gYnV0dG9uLWdyZWVuIHtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjMTFEMEEyO1xuLy8gYm9yZGVyLXJhZGl1czogMTQ1cHg7XG4vLyBmb250LXdlaWdodCA6IDYwMDtcbi8vIGZvbnQtc2l6ZSA6IDE1cHg7XG4vLyBsaW5lLWhlaWdodCA6IDE4cHg7XG4vLyBjb2xvciA6ICNmZmZmZmY7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tYmx1ZSB7XG4vLyBmb250IDogMTNweC8xNnB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzc1NTVDRiwgIzc1NTVDRiksICM2NDNGQzA7XG4vLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gbWF4LXdpZHRoIDogMTQwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiAzOHB4O1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLXJlZCB7XG4vLyBmb250IDogMTZweC8yMHB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICNGRjY1NjU7XG4vLyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuLnZlaGljbGVJbmZvIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIEBpbmNsdWRlIG1haW5Cb3h3aXRoQmFjaztcblxuICAgIC52ZWhUaXRsZSB7XG4gICAgICAgIGZvbnQ6IDYwMCAxOHB4LzI1cHggTW9kZXJuRXJhO1xuICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxufVxuXG4udmFsdWVGdWVsIHtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250OiA4MDAgMjRweC8yNHB4IE1vZGVybkVyYTtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6MTQ0MHB4KSB7XG4gICAgICAgIGZvbnQ6IDgwMCAyMHB4LzIwcHggTW9kZXJuRXJhO1xuICAgIH1cbn1cblxuLmJvb2tpbmctdGFibGUge1xuICAgIHRoIHtcbiAgICAgICAgZm9udDogNTAwIDEycHgvMThweCBNb2Rlcm5FcmE7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MzBweDtcbiAgICB9XG5cbiAgICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfQmx1ZV9kYXJrO1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgICAgJi5tYXQtY2VsbCB7XG4gICAgICAgICAgICBmb250OiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgICAgIG1heC13aWR0aDogMTA2cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGJhY2tncm91bmQ6ICRXaGl0ZV9sYWJpbmdfQmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAkd2hpdGU7XG59XG5cbm1hdC1yb3csXG5tYXQtZm9vdGVyLXJvdyxcbnRkLm1hdC1jZWxsLFxudGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQ6IDEycHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjayAhaW1wb3J0YW50O1xuXG59XG5cbi5kYXRlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgQGluY2x1ZGUgbXNnO1xufVxuXG5tYXQtcm93LFxubWF0LWhlYWRlci1yb3csXG5tYXQtZm9vdGVyLXJvdyxcbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250OiAxMnB4LzE4cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG50ci5tYXQtcm93LFxudHIubWF0LWZvb3Rlci1yb3cge1xuICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFibGVPZGRCYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICB9XG59XG5cbjpob3N0IHtcbiAgICA6Om5nLWRlZXAge1xuICAgICAgICAuYm9va2luZy10YWJsZSB7XG5cbiAgICAgICAgICAgIHRyLm1hdC1yb3csXG4gICAgICAgICAgICB0ci5tYXQtZm9vdGVyLXJvdyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4yMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbn1cblxuLmV2VG9nZ2xle1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xle1xuICAgICAgIG1hcmdpbjogMCAxOHB4O1xuICAgIH1cbiAgICBzcGFue1xuICAgICAgICBmb250OiA2MDAgMTRweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogJGJvcmRlckNvbG9yO1xuICAgICAgICAmLmFjdGl2ZXtcbiAgICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeV9CbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG46Om5nLWRlZXAge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCAxMDMgMjUwIC8gNjUlKTtcbiAgICB9XG5cbiAgICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRQcmltYXJ5X0JsdWU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDoxMDIwcHgpIGFuZCAobWF4LXdpZHRoOjExMjBweCkge1xuICAgIC5tYXBJbWd7XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA4M3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWVkaWEgIChtYXgtd2lkdGg6MTAxOXB4KSB7XG4gICAgLm1hcEltZ3tcbiAgICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICB9XG4gICAgfVxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FuelDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fuel-dashboard',
                templateUrl: './fuel-dashboard.component.html',
                styleUrls: ['./fuel-dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "howR":
/*!*******************************************************!*\
  !*** ./src/app/main/fuelMilage/fuel-milage.module.ts ***!
  \*******************************************************/
/*! exports provided: FuelMilageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelMilageModule", function() { return FuelMilageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fuel_milage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fuel-milage-routing.module */ "to5i");
/* harmony import */ var _fuel_dashboard_fuel_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel-dashboard/fuel-dashboard.component */ "Cqmk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-daterangepicker-material */ "YhS8");
/* harmony import */ var src_app_config_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/config/material */ "Uo7g");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");













class FuelMilageModule {
}
FuelMilageModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: FuelMilageModule });
FuelMilageModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function FuelMilageModule_Factory(t) { return new (t || FuelMilageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fuel_milage_routing_module__WEBPACK_IMPORTED_MODULE_2__["FuelMilageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(),
            src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                extend: true
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FuelMilageModule, { declarations: [_fuel_dashboard_fuel_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["FuelDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fuel_milage_routing_module__WEBPACK_IMPORTED_MODULE_2__["FuelMilageRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"], src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FuelMilageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_fuel_dashboard_fuel_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["FuelDashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fuel_milage_routing_module__WEBPACK_IMPORTED_MODULE_2__["FuelMilageRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(),
                    src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                        extend: true
                    }),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "to5i":
/*!***************************************************************!*\
  !*** ./src/app/main/fuelMilage/fuel-milage-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FuelMilageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelMilageRoutingModule", function() { return FuelMilageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fuel_dashboard_fuel_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fuel-dashboard/fuel-dashboard.component */ "Cqmk");





const routes = [
    {
        path: "",
        component: _fuel_dashboard_fuel_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["FuelDashboardComponent"],
        pathMatch: 'full'
    }
];
class FuelMilageRoutingModule {
}
FuelMilageRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: FuelMilageRoutingModule });
FuelMilageRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function FuelMilageRoutingModule_Factory(t) { return new (t || FuelMilageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FuelMilageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FuelMilageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=fuelMilage-fuel-milage-module-es2015.js.map