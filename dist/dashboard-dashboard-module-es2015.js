(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "DQdU":
/*!***************************************************************************!*\
  !*** ./src/app/main/dashboard/dashboard-home/dashboard-home.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHomeComponent", function() { return DashboardHomeComponent; });
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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-daterangepicker-material */ "YhS8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function DashboardHomeComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.service.convertToDutch(ctx_r1.dashBoardData == null ? null : ctx_r1.dashBoardData.safeScoreChange) || "0", "%");
} }
function DashboardHomeComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r3.service.convertToDutch(ctx_r3.dashBoardData == null ? null : ctx_r3.dashBoardData.safeScoreChange) || "0", "%");
} }
function DashboardHomeComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r4.service.convertToDutch(ctx_r4.dashBoardData == null ? null : ctx_r4.dashBoardData.driverChange) || "0", "%");
} }
function DashboardHomeComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r6.service.convertToDutch(ctx_r6.dashBoardData == null ? null : ctx_r6.dashBoardData.driverChange) || "0", "%");
} }
function DashboardHomeComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r7.service.convertToDutch(ctx_r7.dashBoardData == null ? null : ctx_r7.dashBoardData.tripChange) || "0", "%");
} }
function DashboardHomeComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r9.service.convertToDutch(ctx_r9.dashBoardData == null ? null : ctx_r9.dashBoardData.tripChange) || "0", "%");
} }
function DashboardHomeComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r10.service.convertToDutch(ctx_r10.dashBoardData == null ? null : ctx_r10.dashBoardData.vehicleChange) || "0", "%");
} }
function DashboardHomeComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r12.service.convertToDutch(ctx_r12.dashBoardData == null ? null : ctx_r12.dashBoardData.vehicleChange) || "0", "%");
} }
function DashboardHomeComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r13.service.convertToDutch(ctx_r13.dashBoardData == null ? null : ctx_r13.dashBoardData.speedChange) || "0", "% ");
} }
function DashboardHomeComponent_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r15.service.convertToDutch(ctx_r15.dashBoardData == null ? null : ctx_r15.dashBoardData.speedChange) || "0", "% ");
} }
function DashboardHomeComponent_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r16.service.convertToDutch(ctx_r16.dashBoardData == null ? null : ctx_r16.dashBoardData.idilingChange) || "0", "% ");
} }
function DashboardHomeComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r18.service.convertToDutch(ctx_r18.dashBoardData == null ? null : ctx_r18.dashBoardData.idilingChange) || "0", "% ");
} }
function DashboardHomeComponent_ng_container_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r19.service.convertToDutch(ctx_r19.dashBoardData == null ? null : ctx_r19.dashBoardData.accChange) || "0", "% ");
} }
function DashboardHomeComponent_ng_template_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r21.service.convertToDutch(ctx_r21.dashBoardData == null ? null : ctx_r21.dashBoardData.accChange) || "0", "% ");
} }
function DashboardHomeComponent_ng_container_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r22.service.convertToDutch(ctx_r22.dashBoardData == null ? null : ctx_r22.dashBoardData.brakingChange) || "0", "% ");
} }
function DashboardHomeComponent_ng_template_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r24.service.convertToDutch(ctx_r24.dashBoardData == null ? null : ctx_r24.dashBoardData.brakingChange) || "0", "% ");
} }
function DashboardHomeComponent_ng_container_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r25.service.convertToDutch(ctx_r25.dashBoardData == null ? null : ctx_r25.dashBoardData.cornerChange) || "0", "% ");
} }
function DashboardHomeComponent_ng_template_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r27.service.convertToDutch(ctx_r27.dashBoardData == null ? null : ctx_r27.dashBoardData.cornerChange) || "0", "% ");
} }
function DashboardHomeComponent_th_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "d.driverName"), " ");
} }
function DashboardHomeComponent_td_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const transaction_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", transaction_r41 == null ? null : transaction_r41.driver_detail == null ? null : transaction_r41.driver_detail.first_name, " ", transaction_r41 == null ? null : transaction_r41.driver_detail == null ? null : transaction_r41.driver_detail.last_name, " ");
} }
function DashboardHomeComponent_th_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "t.ride"), "");
} }
function DashboardHomeComponent_td_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const transaction_r42 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r31.service.convertToDutch(transaction_r42 == null ? null : transaction_r42.total_trips), " ");
} }
function DashboardHomeComponent_th_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "safeDrivingScore"), " ");
} }
function DashboardHomeComponent_td_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const transaction_r43 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r33.service.convertToDutch(transaction_r43 == null ? null : transaction_r43.safe_score) || "0", " ");
} }
function DashboardHomeComponent_tr_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 82);
} }
function DashboardHomeComponent_tr_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 83);
} }
function DashboardHomeComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "mat-progress-bar", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_div_157_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r45.routeToDriver(ctx_r45.RULE_ID.RulePostedSpeedingId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 5, "speedAverage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r36.service.convertToDutch(ctx_r36.formatToFixed(ctx_r36.exceptionData == null ? null : ctx_r36.exceptionData.avg_speed, 2)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 7, "t.avgSpeed"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r36.exceptionData == null ? null : ctx_r36.exceptionData.avg_speed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 9, "top5speeding"), " ");
} }
function DashboardHomeComponent_div_158_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h4", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_div_158_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r47.routeToDriver(ctx_r47.RULE_ID.RulePostedAccelerationId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 7, "harshAccException"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 9, "totalNumDrivers"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r37.service.convertToDutch((ctx_r37.dashBoardData == null ? null : ctx_r37.dashBoardData.total_drivers) || "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 11, "driverWhoViolated"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r37.service.convertToDutch(ctx_r37.exceptionData.violated_drivers), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r37.service.convertToDutch(ctx_r37.exceptionData.ratio), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 13, "top5acc"), " ");
} }
function DashboardHomeComponent_div_159_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h4", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_div_159_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r49.routeToDriver(ctx_r49.RULE_ID.RulePostedBreakingId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 7, "harshBrakingException"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 9, "totalNumDrivers"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r38.service.convertToDutch((ctx_r38.dashBoardData == null ? null : ctx_r38.dashBoardData.total_drivers) || "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 11, "driverWhoViolated"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r38.service.convertToDutch(ctx_r38.exceptionData.violated_drivers), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r38.service.convertToDutch(ctx_r38.exceptionData.ratio), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 13, "top5braking"), " ");
} }
function DashboardHomeComponent_div_160_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h4", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_div_160_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r51.routeToDriver(ctx_r51.RULE_ID.RulePostedCorneringId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 7, "harshCorneringException"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 9, "totalNumDrivers"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r39.service.convertToDutch((ctx_r39.dashBoardData == null ? null : ctx_r39.dashBoardData.total_drivers) || "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 11, "driverWhoViolated"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r39.service.convertToDutch(ctx_r39.exceptionData == null ? null : ctx_r39.exceptionData.violated_drivers), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r39.service.convertToDutch(ctx_r39.exceptionData == null ? null : ctx_r39.exceptionData.ratio), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 13, "top5cornering"), " ");
} }
function DashboardHomeComponent_div_161_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " EV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " ICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_div_161_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r53.routeToDriver(ctx_r53.RULE_ID.RulePostedIdlingId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 4, "consumptionWhileidiling"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r40.service.convertToDutch(ctx_r40.exceptionData == null ? null : ctx_r40.exceptionData.ev), " kWh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r40.service.convertToDutch(ctx_r40.exceptionData == null ? null : ctx_r40.exceptionData.ice), " ltr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](24, 6, "top5idling"), " ");
} }
const _c0 = function () { return { applyLabel: "Set Date" }; };
const _c1 = function (a0) { return { "active": a0 }; };
class DashboardHomeComponent {
    constructor(elementRef, service, localService, route) {
        this.elementRef = elementRef;
        this.service = service;
        this.localService = localService;
        this.route = route;
        this.boxVal = 1;
        this.isCollapsed = true;
        this.dashBoardData = {};
        this.dashBoardScore = {};
        this.chartData = { date: [], speed: [], acc: [], braking: [], idiling: [], cornering: [] };
        this.exceptionData = {};
        this.RULE_ID = {
            RulePostedSpeedingId: 'SpeedViolation',
            RulePostedBreakingId: 'BreakingViolation',
            RulePostedAccelerationId: 'AccelerationViolation',
            RulePostedIdlingId: 'IdlingViolation',
            RulePostedCorneringId: 'CorneringViolation'
        };
        //table
        this.displayedColumns = ['item', 'cost', 'score'];
        this.title = 'Speed score';
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
        this.polarObject = { speed: 0, idling: 0, acceleration: 0, breaking: 0, cornering: 0 };
        this.exceptionObject = {
            'speed': 'Speeding',
            'idling': 'Idiling',
            'acceleration': 'Harsh Acceleration',
            'cornering': 'Harsh Cornering',
            'breaking': 'Harsh Braking'
        };
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
        this.miniChartObj = {};
        chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"].register(...chart_js__WEBPACK_IMPORTED_MODULE_3__["registerables"]);
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.selectedOrgID = this.localService.getItem("selectedOrgs");
        if (this.selectedOrgID) {
            this.selectedOrgID = JSON.parse(this.selectedOrgID);
        }
        if (this.selectedOrgID) {
            this.resetToLastState();
            this.updatePageData();
        }
        this.localService.watchOrgData().subscribe((resp) => {
            if (resp) {
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
                    this.updatePageData();
                }
            }
        });
    }
    rangeClicked(label) {
        // console.log('[rangeClicked] range is : ', label);
    }
    datesUpdated(range) {
        //  console.log('[datesUpdated] range is : ', range);
    }
    changeState() {
        this.isCollapsed = !this.isCollapsed;
        if (!this.isCollapsed) {
            this.resetToLastState();
        }
    }
    polarGraph(dataPoints, label) {
        const data = {
            labels: label,
            datasets: [{
                    label: 'My First Dataset',
                    data: dataPoints,
                    backgroundColor: [
                        '	rgb(0, 203, 160)',
                        'rgb(255, 234, 108)',
                        'rgb(250, 20, 100)',
                        '	rgb(255, 153, 80)',
                        '	rgb(255, 112, 112)',
                        'rgb(255, 205, 86)',
                    ],
                }]
        };
        let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
        if (this.polarChart)
            this.polarChart.destroy();
        this.polarChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 0,
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'left',
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: "white",
                        callbacks: {
                            labelTextColor: (context) => {
                                return 'black';
                            }
                        }
                    },
                }
            }
        });
    }
    lineChart(labels, point, title) {
        var labels = labels;
        const datapoints = point;
        let htmlRef = this.elementRef.nativeElement.querySelector(`#myLineChart`);
        if (this.mainLineChart)
            this.mainLineChart.destroy();
        this.mainLineChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: title,
                        data: datapoints,
                        borderColor: '#4DBFFF',
                        fill: false,
                        cubicInterpolationMode: 'monotone',
                        tension: 0.4,
                        pointBackgroundColor: "#FA1464",
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 0
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: "#001E50",
                        titleAlign: 'center',
                        footerAlign: 'center',
                        bodyAlign: 'center',
                        callbacks: {
                            labelTextColor: (context) => {
                                return '#fff';
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                    },
                    y: {
                        display: true,
                        // min: -10, 
                        max: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].gaugeMax,
                        ticks: {
                            precision: 0
                            // stepSize: 10,
                            // callback: (value, index, values) => {
                            //   return (index == (values.length-1)) ?  undefined :  value
                            // }
                        }
                    }
                }
            },
        });
    }
    miniChart(id, color, label, dataPoint) {
        var labels = label;
        var datapoints = dataPoint;
        let ids = '#' + id;
        let htmlRef = this.elementRef.nativeElement.querySelector(ids);
        var gradient = htmlRef.getContext('2d').createLinearGradient(0, 0, 0, 600);
        if (color == '#00CBA0') {
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(0, 'rgba(0, 203, 160, 0.1)');
        }
        else {
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.9)');
            gradient.addColorStop(0, 'rgba(255, 112, 112, 0.25)');
        }
        if (this.miniChartObj[id])
            this.miniChartObj[id].destroy();
        this.miniChartObj[id] = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        data: datapoints,
                        borderColor: color,
                        fill: true,
                        cubicInterpolationMode: 'monotone',
                        tension: 0.4,
                        pointBackgroundColor: "#FA1464",
                        backgroundColor: gradient
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 0
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                        backgroundColor: '#001E50',
                        titleAlign: 'center',
                        footerAlign: 'center',
                        bodyAlign: 'center',
                        callbacks: {
                            labelTextColor: (context) => {
                                return '#fff';
                            }
                        }
                    },
                    title: {
                        display: true,
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: false,
                        title: {
                            display: true
                        }
                    },
                    y: {
                        display: false,
                        title: {
                            display: true,
                        }
                    }
                }
            },
        });
    }
    changeBoxValue(num) {
        this.boxVal = num;
        if (num == 1) {
            this.title = 'Speed score';
            this.lineChart(this.chartData.date, this.chartData.speed, this.title);
            this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedSpeedingId);
            this.worstDriver(this.RULE_ID.RulePostedSpeedingId);
        }
        else if (num == 2) {
            this.title = 'Acceleration score';
            this.lineChart(this.chartData.date, this.chartData.acc, this.title);
            this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedAccelerationId);
            this.worstDriver(this.RULE_ID.RulePostedAccelerationId);
        }
        else if (num == 3) {
            this.title = 'Braking score';
            this.lineChart(this.chartData.date, this.chartData.braking, this.title);
            this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedBreakingId);
            this.worstDriver(this.RULE_ID.RulePostedBreakingId);
        }
        else if (num == 4) {
            this.title = 'Cornering score';
            this.lineChart(this.chartData.date, this.chartData.cornering, this.title);
            this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedCorneringId);
            this.worstDriver(this.RULE_ID.RulePostedCorneringId);
        }
        else {
            this.title = 'Idiling score';
            this.lineChart(this.chartData.date, this.chartData.idiling, this.title);
            this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedIdlingId);
            this.worstDriver(this.RULE_ID.RulePostedIdlingId);
        }
    }
    resetToLastState() {
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
    }
    resetFilter() {
        this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
        };
        this.filterApply();
    }
    filterApply() {
        this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
        this.selected = this.selectedShow;
        this.updatePageData();
        this.changeState();
    }
    updatePageData() {
        this.getDashboardData();
        this.worstDriver(this.RULE_ID.RulePostedSpeedingId);
        this.polardata();
    }
    polardata() {
        let querryParams = this.createQuerryparams();
        this.service.get(`dashboard/exception-ratio?${querryParams}`).pipe().subscribe(response => {
            if (response.data) {
                this.exceptionRatio = response.data;
                let total = this.exceptionRatio.reduce((previousValue, currentValue) => previousValue + Number(currentValue.score_type_count), 0);
                for (let i = 0; i < this.exceptionRatio.length; i++) {
                    this.polarObject[this.exceptionRatio[i].score_type] = ((this.exceptionRatio[i].score_type_count / total) * 100).toFixed(1);
                }
                let data = [];
                let label = [];
                for (let keys in this.polarObject) {
                    if (this.polarObject[keys] && this.polarObject[keys] !== '0.0') {
                        data.push(this.polarObject[keys]);
                        label.push(this.exceptionObject[keys]);
                    }
                }
                // console.log(data,label)
                this.polarGraph(data, label);
            }
        }, (error) => {
            this.dashBoardData = {};
        });
    }
    worstDriver(id) {
        let querryParams = this.createQuerryparams();
        this.service.get(`dashboard/worst-driver?${querryParams}`).pipe().subscribe(response => {
            if (response.data) {
                this.worstDriverdetail = response.data;
            }
        }, (error) => {
            this.dashBoardData = {};
        });
    }
    getDashboardData() {
        let querryParams = this.createQuerryparams();
        this.service.get(`zego/dashboard/activity-count-v2?${querryParams}`).pipe().subscribe(response => {
            if (response.data) {
                this.dashBoardData = response.data;
                this.dashBoardData['safeScoreChange'] = parseFloat(this.dashBoardData.pre_safe_score) ? ((parseFloat(this.dashBoardData.safe_score) - parseFloat(this.dashBoardData.pre_safe_score)) / parseFloat(this.dashBoardData.pre_safe_score)) * 100 : 0;
                this.dashBoardData['driverChange'] = parseFloat(this.dashBoardData.pre_total_drivers) ? ((parseFloat(this.dashBoardData.total_drivers) - parseFloat(this.dashBoardData.pre_total_drivers)) / parseFloat(this.dashBoardData.pre_total_drivers)) * 100 : 0;
                this.dashBoardData['tripChange'] = parseFloat(this.dashBoardData.pre_total_trips) ? ((parseFloat(this.dashBoardData.total_trips) - parseFloat(this.dashBoardData.pre_total_trips)) / parseFloat(this.dashBoardData.pre_total_trips)) * 100 : 0;
                this.dashBoardData['vehicleChange'] = parseFloat(this.dashBoardData.pre_total_vehicles) ? ((parseFloat(this.dashBoardData.total_vehicles) - parseFloat(this.dashBoardData.pre_total_vehicles)) / parseFloat(this.dashBoardData.pre_total_vehicles)) * 100 : 0;
                this.dashBoardData['speedChange'] = parseFloat(this.dashBoardData.pre_speed_score) ? ((parseFloat(this.dashBoardData.speed_score) - parseFloat(this.dashBoardData.pre_speed_score)) / parseFloat(this.dashBoardData.pre_speed_score)) * 100 : 0;
                this.dashBoardData['idilingChange'] = parseFloat(this.dashBoardData.pre_idling_score) ? ((parseFloat(this.dashBoardData.idling_score) - parseFloat(this.dashBoardData.pre_idling_score)) / parseFloat(this.dashBoardData.pre_idling_score)) * 100 : 0;
                this.dashBoardData['accChange'] = parseFloat(this.dashBoardData.pre_acceleration_score) ? ((parseFloat(this.dashBoardData.acceleration_score) - parseFloat(this.dashBoardData.pre_acceleration_score)) / parseFloat(this.dashBoardData.pre_acceleration_score)) * 100 : 0;
                this.dashBoardData['brakingChange'] = parseFloat(this.dashBoardData.pre_breaking_score) ? ((parseFloat(this.dashBoardData.breaking_score) - parseFloat(this.dashBoardData.pre_breaking_score)) / parseFloat(this.dashBoardData.pre_breaking_score)) * 100 : 0;
                this.dashBoardData['cornerChange'] = parseFloat(this.dashBoardData.pre_cornering_score) ? ((parseFloat(this.dashBoardData.cornering_score) - parseFloat(this.dashBoardData.pre_cornering_score)) / parseFloat(this.dashBoardData.pre_cornering_score)) * 100 : 0;
                this.getChartData();
            }
        }, (error) => {
            this.dashBoardData = {};
        });
    }
    getChartData() {
        let querryParams = this.createQuerryparams();
        this.chartData = { date: [], speed: [], acc: [], braking: [], idiling: [], cornering: [] };
        this.service.get(`driving-analytics-graph?${querryParams}&score_type=safe_score`).pipe().subscribe(response => {
            if (response.data && response.data.length) {
                response.data.forEach(element => {
                    this.chartData.date.push(moment__WEBPACK_IMPORTED_MODULE_1__["utc"](element.date).format('DD/MM'));
                    this.chartData.speed.push(this.formatToFixed(element.speed_score, 1));
                    this.chartData.acc.push(this.formatToFixed(element.acceleration_score, 1));
                    this.chartData.braking.push(this.formatToFixed(element.breaking_score, 1));
                    this.chartData.idiling.push(this.formatToFixed(element.idling_score, 1));
                    this.chartData.cornering.push(this.formatToFixed(element.cornering_score, 1));
                });
            }
            this.miniChart('speedingChart', this.dashBoardData['speedChange'] >= 0 ? '#00CBA0' : '#FF7070', this.chartData.date, this.chartData.speed);
            this.miniChart('idilingChart', this.dashBoardData['idilingChange'] >= 0 ? '#00CBA0' : '#FF7070', this.chartData.date, this.chartData.idiling);
            this.miniChart('accelerationChart', this.dashBoardData['accChange'] >= 0 ? '#00CBA0' : '#FF7070', this.chartData.date, this.chartData.acc);
            this.miniChart('brakingChart', this.dashBoardData['brakingChange'] >= 0 ? '#00CBA0' : '#FF7070', this.chartData.date, this.chartData.braking);
            this.miniChart('corneringChart', this.dashBoardData['cornerChange'] >= 0 ? '#00CBA0' : '#FF7070', this.chartData.date, this.chartData.cornering);
            this.boxVal = 1;
            this.title = 'Speed score';
            this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedSpeedingId);
            this.lineChart(this.chartData.date, this.chartData.speed, this.title);
        }, (error) => {
        });
    }
    getExceptionCategoryWiseData(id) {
        let querryParams = this.createQuerryparams();
        this.service.get(`dashboard/exception-type-ratio?${querryParams}&rule_id=${id}`).pipe().subscribe(response => {
            if (response.data) {
                this.exceptionData = response.data;
                this.exceptionData.violated_drivers = Number(this.exceptionData.violated_drivers);
                if (this.exceptionData.violated_drivers)
                    this.exceptionData['ratio'] = ((this.exceptionData.violated_drivers / this.dashBoardData.total_drivers) * 100).toFixed(1);
                else
                    this.exceptionData['ratio'] = 0;
            }
        }, (error) => {
            this.dashBoardScore = {};
        });
    }
    createQuerryparams() {
        let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
        querryParams = querryParams + `&from_date=${moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format('YYYY-MM-DD')}`;
        querryParams = querryParams + `&to_date=${moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format('YYYY-MM-DD')}`;
        // querryParams = querryParams + `&custom_filter=true`
        // console.log(this.selected.startDate,this.selected.enddate)
        // console.log(this.service.checkCustomDate(moment(this.selected.startDate).format('YYYY-MM-DD'),moment(this.selected.endDate).format('YYYY-MM-DD')))
        let val = this.service.checkCustomDate(moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format('YYYY-MM-DD'));
        if (val == undefined) {
            querryParams = querryParams + `&custom_filter=true&filter_value=''`;
        }
        else {
            querryParams = querryParams + `&custom_filter=false&filter_value=${val}`;
        }
        return querryParams;
    }
    routeToDriver(id) {
        this.route.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].driver.url], { queryParams: { rule: id } });
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
    onResize(event) {
        this.innerWidth = event.target.innerWidth;
        if (this.innerWidth <= 992) {
        }
    }
}
DashboardHomeComponent.??fac = function DashboardHomeComponent_Factory(t) { return new (t || DashboardHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
DashboardHomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardHomeComponent, selectors: [["app-dashboard-home"]], hostBindings: function DashboardHomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("resize", function DashboardHomeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
    } }, decls: 162, vars: 105, consts: [[1, "mainFilter"], [1, "filterHeader"], ["aria-controls", "collapseExample", 1, "btn", "btnFiliter", 3, "click"], ["src", "assets/images/filter.svg"], [1, "btn", "btnFilterExport", "enable-click-event"], ["src", "assets/images/export.svg"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "filterBody"], [1, "filterBodyTitle"], [3, "click"], ["src", "assets/images/close-circle.svg"], [1, "profileBox"], ["appearance", "outline", 1, "ngx-daterangepicker-action-left", "fields", "fileld50"], ["matInput", "", "ngxDaterangepickerMd", "", "readonly", "", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ranges", "showClearButton", "showCancel", "linkedCalendars", "isTooltipDate", "isInvalidDate", "locale", "keepCalendarOpeningWithRange", "showRangeLabelOnInput", "ngModelChange", "rangeClicked", "datesUpdated"], [1, "calIconRight"], ["src", "assets/images/calendar.svg"], [1, "d-flex", "flex-wrap", "justify-content-between", "mt-2"], [1, "d-flex", "flex-wrap"], ["mat-button", "", 1, "filterBtn", "cancleBtn", 3, "click"], ["mat-button", "", 1, "filterBtn", "applyBtn", 3, "click"], [1, "dashboardBox"], [1, "box"], [1, "title"], [1, "value"], [4, "ngIf", "ngIfElse"], ["elseTemplate11", ""], [1, "box", "driver"], ["elseTemplate12", ""], [1, "box", "trips"], ["elseTemplate13", ""], [1, "box", "vehicles"], ["elseTemplate14", ""], [1, "exceptionBox", "mt-3"], [1, "exBox", 3, "ngClass", "click"], [1, "valueBox"], ["elseTemplate15", ""], [1, "speedChart", 2, "height", "100px"], ["id", "speedingChart"], [1, "expName"], ["elseTemplate16", ""], ["id", "idilingChart"], ["elseTemplate17", ""], ["id", "accelerationChart"], ["elseTemplate18", ""], ["id", "brakingChart"], ["elseTemplate19", ""], ["id", "corneringChart"], [1, "dashGraphBox"], [1, "boxBack", "left60"], ["id", "myLineChart"], [1, "graphTitle"], [1, "boxBack", "right40"], [1, "exceptionTitle", "mb-0"], [1, "graphSide"], ["id", "myChart", "height", "250"], [1, "tableTitle"], [1, "table-responsive"], ["mat-table", "", 1, "mat-elevation-z8", "w-100", "booking-table", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cost"], ["matColumnDef", "score"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "boxBack", "right40-second", "p-5"], ["class", "speedingAverage", 4, "ngIf"], ["class", "harshAcceleration", 4, "ngIf"], ["class", "harshBraking", 4, "ngIf"], ["class", "harshCornering", 4, "ngIf"], ["class", "idilingBox", 4, "ngIf"], [1, "danger"], ["src", "assets/images/down-arrow.svg"], [1, "success"], ["src", "assets/images/send.svg"], [1, "green"], ["src", "assets/images/Iconsup.png"], [1, "red"], ["src", "assets/images/IconsDown.png"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "speedingAverage"], [1, "exceptionTitle", "speedtitle"], [1, "firsthaldf"], [1, "msg", "speedAvg"], [1, "mb-0", "avgspeed"], ["mode", "determinate", 1, "avgSpeed", 3, "value"], [1, "show5", "w-100", "cursor", 3, "click"], [1, "harshAcceleration"], [1, "exceptionTitle"], [1, "dashboardBox", "dataBox"], [1, "box", "box100", "grayBox"], [1, "leftData"], [1, "value", "noDrivers"], [1, "value", "dViolated", "align-items-center"], [1, "msg", "driveTooFast", "textWhite"], [1, "harshBraking"], [1, "harshCornering"], [1, "idilingBox"], [1, ""], [1, "box", "box100"], ["src", "assets/images/evCharge.png"], [1, "box", "box100", "iceBox"], ["src", "assets/images/ice.png"]], template: function DashboardHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_Template_button_click_4_listener() { return ctx.changeState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngbCollapseChange", function DashboardHomeComponent_Template_div_ngbCollapseChange_8_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_Template_span_click_14_listener() { return ctx.changeState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DashboardHomeComponent_Template_input_ngModelChange_21_listener($event) { return ctx.selectedShow = $event; })("rangeClicked", function DashboardHomeComponent_Template_input_rangeClicked_21_listener($event) { return ctx.rangeClicked($event); })("datesUpdated", function DashboardHomeComponent_Template_input_datesUpdated_21_listener($event) { return ctx.datesUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_Template_button_click_28_listener() { ctx.resetToLastState(); return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_Template_button_click_31_listener() { return ctx.filterApply(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, DashboardHomeComponent_ng_container_41_Template, 4, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, DashboardHomeComponent_ng_template_42_Template, 3, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, DashboardHomeComponent_ng_container_50_Template, 4, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, DashboardHomeComponent_ng_template_51_Template, 3, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, DashboardHomeComponent_ng_container_59_Template, 4, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, DashboardHomeComponent_ng_template_60_Template, 3, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, DashboardHomeComponent_ng_container_68_Template, 4, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, DashboardHomeComponent_ng_template_69_Template, 3, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_Template_div_click_72_listener() { return ctx.changeBoxValue(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, DashboardHomeComponent_ng_container_75_Template, 4, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, DashboardHomeComponent_ng_template_76_Template, 3, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "canvas", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_Template_div_click_83_listener() { return ctx.changeBoxValue(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, DashboardHomeComponent_ng_container_86_Template, 4, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](87, DashboardHomeComponent_ng_template_87_Template, 3, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "canvas", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_Template_div_click_94_listener() { return ctx.changeBoxValue(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](97, DashboardHomeComponent_ng_container_97_Template, 4, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](98, DashboardHomeComponent_ng_template_98_Template, 3, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "canvas", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_Template_div_click_105_listener() { return ctx.changeBoxValue(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](108, DashboardHomeComponent_ng_container_108_Template, 4, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](109, DashboardHomeComponent_ng_template_109_Template, 3, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "canvas", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeComponent_Template_div_click_116_listener() { return ctx.changeBoxValue(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](119, DashboardHomeComponent_ng_container_119_Template, 4, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](120, DashboardHomeComponent_ng_template_120_Template, 3, 1, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "canvas", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](126, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "canvas", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "h4", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "canvas", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](142, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "table", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](145, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](146, DashboardHomeComponent_th_146_Template, 3, 3, "th", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](147, DashboardHomeComponent_td_147_Template, 2, 2, "td", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](148, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](149, DashboardHomeComponent_th_149_Template, 3, 3, "th", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](150, DashboardHomeComponent_td_150_Template, 2, 1, "td", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](151, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](152, DashboardHomeComponent_th_152_Template, 3, 3, "th", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](153, DashboardHomeComponent_td_153_Template, 2, 1, "td", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](154, DashboardHomeComponent_tr_154_Template, 1, 0, "tr", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](155, DashboardHomeComponent_tr_155_Template, 1, 0, "tr", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](157, DashboardHomeComponent_div_157_Template, 15, 11, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](158, DashboardHomeComponent_div_158_Template, 24, 15, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](159, DashboardHomeComponent_div_159_Template, 24, 15, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](160, DashboardHomeComponent_div_160_Template, 24, 15, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](161, DashboardHomeComponent_div_161_Template, 25, 8, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](43);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](52);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](61);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](70);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](77);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](88);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](99);
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](110);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](20, 68, "selectRange"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectedShow)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx.alwaysShowCalendars)("ranges", ctx.ranges)("showClearButton", false)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx.isTooltipDate)("isInvalidDate", ctx.isInvalidDate)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](94, _c0))("keepCalendarOpeningWithRange", ctx.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx.showRangeLabelOnInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 70, "apply"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](38, 72, "safeDrivingScore"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.service.convertToDutch(ctx.dashBoardData == null ? null : ctx.dashBoardData.safe_score) || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.dashBoardData.safeScoreChange < 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](47, 74, "driver"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.service.convertToDutch((ctx.dashBoardData == null ? null : ctx.dashBoardData.total_drivers) || "0"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.dashBoardData.driverChange < 0)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](56, 76, "sidebar.trip"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.service.convertToDutch(ctx.dashBoardData == null ? null : ctx.dashBoardData.total_trips), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.dashBoardData.tripChange < 0)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](65, 78, "v.vehicle"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.service.convertToDutch(ctx.dashBoardData == null ? null : ctx.dashBoardData.total_vehicles), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.dashBoardData.vehicleChange < 0)("ngIfElse", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](95, _c1, ctx.boxVal == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.convertToDutch(ctx.dashBoardData == null ? null : ctx.dashBoardData.speed_score), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.dashBoardData == null ? null : ctx.dashBoardData.speedChange) >= 0)("ngIfElse", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](82, 80, "speeding"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](97, _c1, ctx.boxVal == 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.convertToDutch(ctx.dashBoardData == null ? null : ctx.dashBoardData.idling_score), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.dashBoardData == null ? null : ctx.dashBoardData.idilingChange) >= 0)("ngIfElse", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](93, 82, "idiling"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](99, _c1, ctx.boxVal == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.convertToDutch(ctx.dashBoardData == null ? null : ctx.dashBoardData.acceleration_score), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.dashBoardData == null ? null : ctx.dashBoardData.accChange) >= 0)("ngIfElse", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](104, 84, "hardAcceleration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](101, _c1, ctx.boxVal == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.convertToDutch(ctx.dashBoardData == null ? null : ctx.dashBoardData.breaking_score), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.dashBoardData == null ? null : ctx.dashBoardData.brakingChange) >= 0)("ngIfElse", _r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](115, 86, "hardBraking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](103, _c1, ctx.boxVal == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.convertToDutch(ctx.dashBoardData == null ? null : ctx.dashBoardData.cornering_score), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.dashBoardData == null ? null : ctx.dashBoardData.cornerChange) >= 0)("ngIfElse", _r26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](126, 88, "harshCorner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](135, 90, "exceptionRatio"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](142, 92, "top5Worstdriver"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.worstDriverdetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.boxVal == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.boxVal == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.boxVal == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.boxVal == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.boxVal == 5);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapse"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_11__["DaterangepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRow"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBar"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"]], styles: [".exceptionBox[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  gap: 20px;\n  max-width: 100%;\n  margin-bottom: 30px;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%] {\n  background: #ffffff;\n  flex-basis: calc(20% - 15px);\n  max-width: 98%;\n  border-radius: 12px;\n  padding: 14px 0 5px 0;\n  min-height: 117px;\n  height: 100%;\n  position: relative;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]:nth-child(5n+0) {\n  margin-right: 0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.active[_ngcontent-%COMP%] {\n  border: 5px solid #FFEA6C;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 20px;\n  color: #1b194b;\n  font: 600 24px/24px ModernEra;\n  margin-bottom: 0;\n  align-items: center;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 14px/17px ModernEra;\n  color: #00cba0;\n  margin-left: 5px;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%]   span.green[_ngcontent-%COMP%] {\n  color: #00cba0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%]   span.red[_ngcontent-%COMP%] {\n  color: #ff7070;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]   .expName[_ngcontent-%COMP%] {\n  text-align: center;\n  font: 600 14px/24px ModernEra;\n  color: #1b194b;\n  margin-bottom: 0;\n}\n.textWhite[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.dashboardBox[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 20px;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  background: linear-gradient(93.52deg, #39D0FF -18.56%, #FFE977 102.17%);\n  border-radius: 12px;\n  padding: 20px 24px 15px;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box.iceBox[_ngcontent-%COMP%] {\n  background: linear-gradient(93.52deg, #F0825D -18.56%, #FF9950 102.17%);\n}\n.dashboardBox[_ngcontent-%COMP%]   .box.grayBox[_ngcontent-%COMP%] {\n  background: #F9FAFB;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box.grayBox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #1b194b;\n  font: 500 20px/24px ModernEra;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box.box100[_ngcontent-%COMP%] {\n  flex-basis: calc(100%);\n  max-width: calc(100%);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 0;\n  margin: 0 0 15px 0;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box.box100[_ngcontent-%COMP%]   .leftData[_ngcontent-%COMP%] {\n  padding: 20px 24px 15px;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(4n+0) {\n  margin-right: 0;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box.driver[_ngcontent-%COMP%] {\n  background: linear-gradient(92.69deg, #5A6BFF 0.69%, #604EFF 102.2%);\n}\n.dashboardBox[_ngcontent-%COMP%]   .box.trips[_ngcontent-%COMP%] {\n  background: linear-gradient(92.69deg, #8C46FF 0.69%, #FF8080 102.2%);\n}\n.dashboardBox[_ngcontent-%COMP%]   .box.vehicles[_ngcontent-%COMP%] {\n  background: linear-gradient(134.92deg, #81BBFF -4.2%, #0085FF 99.37%);\n}\n.dashboardBox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font: 600 20px/24px ModernEra;\n  margin-bottom: 4px;\n  color: #ffffff;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font: 800 24px/24px ModernEra;\n  color: #ffffff;\n  margin-bottom: 0;\n  align-items: center;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .value.noDrivers[_ngcontent-%COMP%] {\n  color: #00cba0;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .value.dViolated[_ngcontent-%COMP%] {\n  color: #ff7070;\n}\n.dashboardBox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 700 16px/24px ModernEra;\n  padding: 3px 20px;\n  border-radius: 25px;\n  margin-left: 10px;\n}\n.show5[_ngcontent-%COMP%] {\n  font: 600 16px/22px ModernEra;\n  color: #0064ff;\n  text-align: center;\n  border: 1px solid #0064ff;\n  border: 1px solid #0064FF;\n  padding: 10px;\n  border-radius: 20px;\n}\n.dashGraphBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 16px 18px;\n  margin-bottom: 20px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left60[_ngcontent-%COMP%] {\n  flex-basis: calc(60% - 10px);\n  max-width: calc(60% - 10px);\n  margin-right: 10px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left60[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  widows: 100% !important;\n  height: 280px !important;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left60[_ngcontent-%COMP%]   .tableTitle[_ngcontent-%COMP%] {\n  font: 700 16px/24px ModernEra;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left60[_ngcontent-%COMP%]   .graphTitle[_ngcontent-%COMP%] {\n  font: 700 14px/24px ModernEra;\n  color: #001e50;\n  text-align: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40[_ngcontent-%COMP%] {\n  flex-basis: calc(40% - 10px);\n  max-width: calc(40% - 10px);\n  margin-left: 10px;\n  padding: 16px 0px !important;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40[_ngcontent-%COMP%]   .exceptionTitle[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  font: 700 16px/24px ModernEra;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40[_ngcontent-%COMP%]   .graphSide[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40[_ngcontent-%COMP%]   .firsthaldf[_ngcontent-%COMP%] {\n  margin: 10px 0 25px;\n  padding: 10px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40[_ngcontent-%COMP%]   .firsthaldf[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  font: 12px/18px ModernEra !important;\n  padding: 3px 30px;\n  color: #ffffff;\n  border-radius: 24px;\n  padding: 4px 14px;\n  font: 14px/24px ModernEra !important;\n  color: #ffffff;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40[_ngcontent-%COMP%]   .firsthaldf[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 600 14px/24px ModernEra;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40-second[_ngcontent-%COMP%] {\n  flex-basis: calc(40% - 10px);\n  max-width: calc(40% - 10px);\n  margin-left: 10px;\n  padding: 16px 20px !important;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40-second[_ngcontent-%COMP%]   .exceptionTitle[_ngcontent-%COMP%] {\n  font: 700 16px/24px ModernEra;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40-second[_ngcontent-%COMP%]   .graphSide[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40-second[_ngcontent-%COMP%]   .firsthaldf[_ngcontent-%COMP%] {\n  margin: 10px 0 25px;\n  padding: 10px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40-second[_ngcontent-%COMP%]   .firsthaldf[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  font: 12px/18px ModernEra !important;\n  padding: 3px 30px;\n  color: #ffffff;\n  border-radius: 24px;\n  padding: 4px 14px;\n  font: 14px/24px ModernEra !important;\n  color: #ffffff;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right40-second[_ngcontent-%COMP%]   .firsthaldf[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 600 14px/24px ModernEra;\n}\ntr.mat-header-row[_ngcontent-%COMP%] {\n  height: 34px;\n  background: #604EFF;\n  border-radius: 5px;\n  color: #fff;\n  margin-bottom: 8px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  letter-spacing: 0.22px;\n  width: 100%;\n}\n.mat-table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 10px !important;\n}\n[_nghost-%COMP%]     .booking-table tr.mat-row, [_nghost-%COMP%]     .booking-table tr.mat-footer-row {\n  height: 34px;\n}\n.mat-progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 26px 26px;\n}\n  .driveFast .mat-progress-bar-fill::after {\n  background-color: #FF7070 !important;\n}\n  .avgSpeed .mat-progress-bar-fill::after {\n  background-color: #00CBA0 !important;\n}\n@media (min-width: 768px) and (max-width: 1210px) {\n  .dashboardBox[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n  }\n  .dashboardBox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    padding: 20px 15px 15px 12px;\n  }\n\n  .exceptionBox[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .right40[_ngcontent-%COMP%]   .graphSide[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n\n  .avgspeed[_ngcontent-%COMP%] {\n    font: 600 9px/24px ModernEra !important;\n  }\n\n  .speedtitle[_ngcontent-%COMP%] {\n    font: 600 12px/24px ModernEra !important;\n  }\n\n  .driventitle[_ngcontent-%COMP%] {\n    font: 600 10px/24px ModernEra !important;\n  }\n}\n@media (min-width: 200px) and (max-width: 767px) {\n  .dashboardBox[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n\n  .exceptionBox[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .right40[_ngcontent-%COMP%]   .graphSide[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n\n  .avgspeed[_ngcontent-%COMP%] {\n    font: 600 9px/24px ModernEra !important;\n  }\n\n  .speedtitle[_ngcontent-%COMP%] {\n    font: 600 12px/24px ModernEra !important;\n  }\n\n  .driventitle[_ngcontent-%COMP%] {\n    font: 600 10px/24px ModernEra !important;\n  }\n}\n.dataBox[_ngcontent-%COMP%] {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vZGFzaGJvYXJkLWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNFQTtFQUlJLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUlJO0VBQ0ksbUJETkE7RUNPQSw0QkFBQTtFQUdBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU1RO0VBQ0ksZUFBQTtBQUpaO0FBT1E7RUFDSSx5QkFBQTtBQUxaO0FBUVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0Q5Qko7RUMrQkksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTlo7QUFRWTtFQUNJLDZCQUFBO0VBQ0EsY0QzQkc7RUM0QkgsZ0JBQUE7QUFOaEI7QUFRZ0I7RUFDSSxjRC9CRDtBQ3lCbkI7QUFTZ0I7RUFDSSxjRHBDWDtBQzZCVDtBQWFRO0VBS0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNEMURKO0VDMkRJLGdCQUFBO0FBZlo7QUFvQkE7RUFDSSxjRGhFSTtBQytDUjtBQW9CQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFNBQUE7QUFqQko7QUFtQkk7RUFDSSx1RUFBQTtFQUlBLG1CQUFBO0VBQ0EsdUJBQUE7QUFwQlI7QUFzQlE7RUFDSSx1RUFBQTtBQXBCWjtBQXVCUTtFQUNJLG1CQUFBO0FBckJaO0FBdUJZO0VBQ0ksY0R6RlI7RUMwRlEsNkJBQUE7QUFyQmhCO0FBeUJRO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFRDhCVixhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VDOUJVLFVBQUE7RUFDQSxrQkFBQTtBQXJCWjtBQXVCWTtFQUNJLHVCQUFBO0FBckJoQjtBQXlCUTtFQUNJLGVBQUE7QUF2Qlo7QUEwQlE7RUFDSSxvRUFBQTtBQXhCWjtBQTJCUTtFQUNJLG9FQUFBO0FBekJaO0FBNEJRO0VBQ0kscUVBQUE7QUExQlo7QUE2QlE7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0Q1SEo7QUNpR1I7QUE4QlE7RUFDSSw2QkFBQTtFQUNBLGNEaklKO0VDa0lJLGdCQUFBO0VBQ0EsbUJBQUE7QUE1Qlo7QUE4Qlk7RUFDSSxjRDdIRztBQ2lHbkI7QUErQlk7RUFDSSxjRGxJUDtBQ3FHVDtBQWdDWTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBOUJoQjtBQW9DQTtFQUNJLDZCQUFBO0VBQ0EsY0RwSlc7RUNxSlgsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBakNKO0FBb0NBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQWpDSjtBQW1DSTtFQUNJLG1CRHZLQTtFQ3dLQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFqQ1I7QUFvQ0k7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFsQ1I7QUFvQ1E7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0FBbENaO0FBcUNRO0VBQ0ksNkJBQUE7RUFDQSxjRHJMTTtBQ2tKbEI7QUFzQ1E7RUFDSSw2QkFBQTtFQUNBLGNEMUxNO0VDMkxOLGtCQUFBO0FBcENaO0FBMENJO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUF4Q1I7QUF5Q1E7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0R6TU07QUNrS2xCO0FBK0NRO0VBRUksYUFBQTtBQTlDWjtBQWtEUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQWhEWjtBQWtEWTtFRDVEVixvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FyS007RUFzS04sbUJBQUE7RUMyRGMsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNEbk9SO0FDc0xSO0FBZ0RZO0VBQ0ksNkJBQUE7QUE5Q2hCO0FBa0RJO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFoRFI7QUFpRFE7RUFDSSw2QkFBQTtFQUNBLGNEOU9NO0FDK0xsQjtBQXVEUTtFQUVJLGFBQUE7QUF0RFo7QUEwRFE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUF4RFo7QUEwRFk7RURqR1Ysb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBcktNO0VBc0tOLG1CQUFBO0VDZ0djLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjRHhRUjtBQ21OUjtBQXdEWTtFQUNJLDZCQUFBO0FBdERoQjtBQTREQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBekRKO0FBNERBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FBekRKO0FBNERBO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtBQXpESjtBQWdFWTs7RUFFSSxZQUFBO0FBN0RoQjtBQW1FQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtBQWhFSjtBQW1FQTtFQUNJLG9DQUFBO0FBaEVKO0FBbUVBO0VBQ0ksb0NBQUE7QUFoRUo7QUFrRUE7RUFDSTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLFNBQUE7RUEvRE47RUFnRU07SUFDSSw0QkFBQTtFQTlEVjs7RUFpRUU7SUFDSSw4QkFBQTtFQTlETjs7RUFpRU07SUFDSSxxQkFBQTtFQTlEVjs7RUFpRUU7SUFDSSx1Q0FBQTtFQTlETjs7RUFnRUU7SUFDSSx3Q0FBQTtFQTdETjs7RUErREU7SUFDSSx3Q0FBQTtFQTVETjtBQUNGO0FBa0VBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsMEJBQUE7SUFDQSxTQUFBO0VBaEVOOztFQWtFRTtJQUNJLDhCQUFBO0VBL0ROOztFQWtFTTtJQUNJLHFCQUFBO0VBL0RWOztFQWtFRTtJQUNJLHVDQUFBO0VBL0ROOztFQWlFRTtJQUNJLHdDQUFBO0VBOUROOztFQWdFRTtJQUNJLHdDQUFBO0VBN0ROO0FBQ0Y7QUErREE7RUFDSSx5QkFBQTtBQTdESiIsImZpbGUiOiJkYXNoYm9hcmQtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qTkVXIENPTE9SIExJU1QqL1xuXG5cbiRsaWdodGJsdWU6ICMwMDU3ZmY7XG4kZHJha19CbHVlOiAjMjk2MmZmO1xuJHNibHVlOiAjMWIxOTRiO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGxpZ2h0YmxhY2s6ICMxNzFjMjI7XG4kbGlnaHRncmF5OiAjOTM5ZWFhO1xuJGZncmF5OiAjN2Q4NTkyO1xuJFNlY29uZGFyeV9ibGFjazogIzAwMWU1MDtcbiRQcmltYXJ5X0JsdWU6ICMwMDY0ZmY7XG4kU2Vjb25kYXJ5X0JsdWU6ICM2MDRlZmY7XG4kYnRuRXhwb3J0Qmx1ZTogIzRjNmZmZjtcbiRkYW5nZXI6ICNmZjcwNzA7XG4kU2Vjb25kYXJ5X0FsZXJ0czogIzAwY2JhMDtcbiRub0luZm86ICMxOGEwZmI7XG4kU2Vjb25kYXJ5X0Rhcms6ICMyYTFlOTE7XG4kZGFyazogIzMyMzMzODtcbiRib3JkZXJDb2xvcjogI2M1Y2RkNDtcbiRsaWdodFdoaXRlY29sb3I6ICNmOWZhZmI7XG4kZ3JvdXBCb3JkZXJEYXRhOiAjZTZlN2U4O1xuJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I6ICNlMGUzZTc7XG4kd2hpdGVTaGFkb3c6ICNlOWViZjA7XG4kc2t5Qmx1ZTogIzRkYmZmZjtcbiR5ZWxsb3c6ICNmZmVhNmM7XG4kb3JhbmdlOiAjZmY5OTUwO1xuJGJvZHlCYWNrR3JheTogI2ZkZmNmZjtcbiRsaWdodEJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuJGV4cG9ydEJ0bjogcmdiYSg5NiwgNzgsIDI1NSwgMC4xKTtcbiRkYW5nZXJCb3hCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kZ3JlZW5Cb3hCYWNrOiByZ2JhKDAsIDIwMywgMTYwLCAwLjEpO1xuJHRhYmxlT2RkQmFjazogI2ZiZmJmYjtcbiRTZWNvbmRhcnlfQmx1ZV9kYXJrOiAjNzU1NWNmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJG5pZ2h0VGV4dENvbG9yOiAjNDc0ZjVhO1xuJG5pZ2h0QmFja0JsYWNrOiAjNjY3MjgwO1xuJHdoaXRlQ29sb3I6ICNlMWUxZTE7XG4kcmVkQ29sb3I6ICNlZDUwMmU7XG4kZGFya19ncmF5OiAjYmRiZGJkO1xuJGhlbHBCdG5fQmx1ZTogIzYwMmFhYztcbiRkYXRlQ29sb3I6ICM0ZTVkNzg7XG4kZGF5Q29sb3I6ICM0ZTVkNzg3YTtcbiRyZWRBY3RpdmVDb2xvcjogI2ZhMTQ2NDtcbiR3aGl0ZUNvbG9yQmFjazogI2Y3ZmNmZjtcbiRibGFja0Rhcms6ICMyNzI3MmU7XG4kd2hpdGVHcmF5QmFjazogI2Y3ZmNmZjtcbi8vaW5wdXQgY3NzXG4kYm9yZGVyQ29sb3JMaWdodDogI2U4ZWNlZTtcbiRib3JkZXJDb2xvckdyYXk6ICNlZWVkZjA7XG4kbGlnaHRXaGl0ZTogI2U1ZWVmZjtcbiRidG5EZWZhdWx0V2hpdGU6ICNmNGY2Zjg7XG4kbWF0Qm9yZGVyOiAjZTZlN2U4O1xuXG4kdG9nZ2xlQWN0aXZlOiAjMzcxOTg2O1xuXG4vL3JnYmEgY3NzXG4kYmVoYXZpb3VyQmFjazogcmdiYSg5NiwgNzgsIDI1NSwgMC4wOCk7XG4kbW9udGhTaG93QmFjazogcmdiYSg4NiwgNjYsIDI1NSwgMC4xKTtcbiRib3hTaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4kYmFja0RhbmdlcjogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjQpO1xuJGJhY2tHcmVlbjogcmdiKDAgMjAzIDE2MCAvIDE1JSk7XG4kc2FmZVNjb3JlQmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGJhY2tHcmF5Q29tbW9uOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuMDUpO1xuJHF1aXRlUm9hZDogI2ZmZWE2YztcblxuLy9uZXcgY29sb3IgdmVyc2lvbjJcbiRyZWRFeGNlcHRpb246ICNmYTE0NjQ7XG4kYm94c2hhZG93OiAwcHggOHB4IDI1cHggcmdiYSg5OCwgOTgsIDk4LCAwLjA1KTtcbiR0b29sdGlwc1RleHRDb2xvcjogIzE2MTkyYztcblxuLy9ib3ggZ3JhZGlhbnQgQmFja2dyb3VuZFxuJHZlaGljYWxCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjODFiYmZmIC00LjIlLCAjMDA4NWZmIDk5LjM3JSk7XG4kZHJpdmVuQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNWE2YmZmIDAuNjklLCAjNjA0ZWZmIDEwMi4yJSk7XG4kYmVoYXZpb3VyQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjOGM0NmZmIDAuNjklLCAjZmY4MDgwIDEwMi4yJSk7XG4kZXZCbG9ja0JveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjZmZlOTc3IDEwMi4xNyUpO1xuJGljZUJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuXG4vL2JveCB2MiBncmFkaWFudCBCYWNrZ3JvdW5kXG4kaWNlQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuJGRyaXZlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgIzM2NTZmZiAxMDIuMTclKTtcbiRraWxvbWV0ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzMy4zOWRlZywgIzQ5ODVmOCAtNC4yMiUsICM0ZGJmZmYgMTA0LjI0JSk7XG4kc2FmZURyaXZpbmdCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjNDVjOGYxIC0xOC41NiUsICNlZWUwOTcgMTAyLjE3JSk7XG4kZHJpdmVyMUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM3NmQ2ZWUgMC42OSUsICM3Njk4ZGIgMTAyLjIlKTtcbiR0cmlwQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2MyYTNhMCAtMTguNTYlLCAjZTljOGE3IDEwMi4xNyUpO1xuJHZlaGljbGVCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgI2RmOTg5NSAtNC4yJSwgI2MyYTNhMCAxMDguMTUlKTtcblxuLy9zY3JvbGwgYmFyIGNvbG9yIGNvZGVcbiRzY3JvbGxCbGFjazogIzg4ODtcbiRzY3JvbGxXaGl0ZTogI2YxZjFmMTtcbiRzY3JvbGxIb3ZlckJsYWNrOiAjNTU1O1xuXG4vL3doaXRlIGxhYmVsIGZsZWFkIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojRUZBOTUyO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG5cbi8vd2hpdGUgbGFiZWwgZGhsIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojZDQwNTExO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG4vLyAkd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6I0ZGQ0MwMDtcblxuLy93aGl0ZSBsYWJlbCBaZWdvIGNvbG9yXG4kV2hpdGVfbGFiaW5nX0JsYWNrOiAjMDAwMDAwO1xuJFdoaXRlX2xhYmluZ19ZZWxsb3c6ICMzNzE5ODc7XG4kV2hpdGVfbGFiaW5nX3NreUJsdWU6ICM0ZGJmZmY7XG4kV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiAjZWVmOWZmO1xuJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiAjZmZjYzAwO1xuJGNvbG9yX3Zpb2xldDogIzg3NzViNztcbiRjb2xvcl92aW9sZXRfZGFyazogIzMyMTk4NztcbiRjb2xvcl9saWdodF9ncmV5OiAjZTVlNWU1O1xuJGNvbG9yLXZpb2xldC1saWdodDogI2FjOTRlZTtcbiRjb2xvci1ibHVlLWxpZ2h0OiAjZjVmNWY1O1xuJGNvbG9yLXRhYmxlLWhlYWRpbmc6ICMyNzI1MmQ7XG4kdHJpcEhpc3RCYWNrOiByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuMDUpO1xuJHNhZmVCYWNrQ29sb3I6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMDUpO1xuJGNvbG9yX2xpZ2h0X2JsdWU6ICM0NWNiZmM7XG4kY29sb3JfZ3JhcGhfdm9pbGV0OiAjMzcxYTg3O1xuXG4vL2dyYWRpYW50IEJhY2tncm91bmRcbiRlcnJvckdyYWRpYW50OiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMGRlZyxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXG4gICksXG4gICNmNDQzMzY7XG5cbkBtaXhpbiBmbGV4LWp1c3RpZnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGZsZXgtc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5AbWl4aW4gZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbkBtaXhpbiAgbGluZS1jbGFtcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I7XG59XG5cbkBtaXhpbiBidG5GaWx0ZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbkBtaXhpbiBtc2cge1xuICBmb250OiAxMnB4LzE4cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweCAzMHB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG5AbWl4aW4gbWFpbkJveHdpdGhCYWNrIHtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggLTVweCAxMjNweCByZ2JhKDg3LCA4NCwgMTYwLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLy8gQG1peGluIGJ1dHRvbi1ncmVlbiB7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogIzExRDBBMjtcbi8vIGJvcmRlci1yYWRpdXM6IDE0NXB4O1xuLy8gZm9udC13ZWlnaHQgOiA2MDA7XG4vLyBmb250LXNpemUgOiAxNXB4O1xuLy8gbGluZS1oZWlnaHQgOiAxOHB4O1xuLy8gY29sb3IgOiAjZmZmZmZmO1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLWJsdWUge1xuLy8gZm9udCA6IDEzcHgvMTZweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBiYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM3NTU1Q0YsICM3NTU1Q0YpLCAjNjQzRkMwO1xuLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbi8vIG1heC13aWR0aCA6IDE0MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogMzhweDtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1yZWQge1xuLy8gZm9udCA6IDE2cHgvMjBweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBib3JkZXItcmFkaXVzOiAxMDBweDtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjRkY2NTY1O1xuLy8gfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5leGNlcHRpb25Cb3gge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIC5leEJveCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygyMCUgLSAxNXB4KTtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiBjYWxjKDIwJSAtIDE1cHgpO1xuICAgICAgICAvLyBtYXJnaW46IDAgMTguNXB4IDIwcHggMDtcbiAgICAgICAgbWF4LXdpZHRoOiA5OCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMCA1cHggMDtcbiAgICAgICAgbWluLWhlaWdodDogMTE3cHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKDVuKzApIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZle1xuICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI0ZGRUE2QztcbiAgICAgICAgfVxuXG4gICAgICAgIC52YWx1ZUJveCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDE0cHg7XG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICRzYmx1ZTtcbiAgICAgICAgICAgIGZvbnQ6IDYwMCAyNHB4LzI0cHggTW9kZXJuRXJhO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDUwMCAxNHB4LzE3cHggTW9kZXJuRXJhO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X0FsZXJ0cztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuXG4gICAgICAgICAgICAgICAgJi5ncmVlbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X0FsZXJ0cztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLnJlZCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFuZ2VyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmV4cE5hbWUge1xuICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgLy8gYm90dG9tOiAwO1xuICAgICAgICAgICAgLy8gbGVmdDogMzAlO1xuICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQ6IDYwMCAxNHB4LzI0cHggTW9kZXJuRXJhO1xuICAgICAgICAgICAgY29sb3I6ICRzYmx1ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50ZXh0V2hpdGUge1xuICAgIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5kYXNoYm9hcmRCb3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIFxuICAgIC5ib3gge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOUQwRkYgLTE4LjU2JSwgI0ZGRTk3NyAxMDIuMTclKTtcbiAgICAgICAgLy8gZmxleC1iYXNpczogY2FsYygyNSUgLSAxNXB4KTtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiBjYWxjKDI1JSAtIDE1cHgpO1xuICAgICAgICAvLyBtYXJnaW46IDAgMjBweCAyMHB4IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjRweCAxNXB4O1xuXG4gICAgICAgICYuaWNlQm94IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI0YwODI1RCAtMTguNTYlLCAjRkY5OTUwIDEwMi4xNyUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5ncmF5Qm94IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGOUZBRkI7XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRzYmx1ZTtcbiAgICAgICAgICAgICAgICBmb250OiA1MDAgMjBweC8yNHB4IE1vZGVybkVyYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYm94MTAwIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSk7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LWp1c3RpZnk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xuXG4gICAgICAgICAgICAubGVmdERhdGEge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjRweCAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtY2hpbGQoNG4rMCkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5kcml2ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNUE2QkZGIDAuNjklLCAjNjA0RUZGIDEwMi4yJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnRyaXBzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhDNDZGRiAwLjY5JSwgI0ZGODA4MCAxMDIuMiUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi52ZWhpY2xlcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjODFCQkZGIC00LjIlLCAjMDA4NUZGIDk5LjM3JSk7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udDogNjAwIDIwcHgvMjRweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIGZvbnQ6IDgwMCAyNHB4LzI0cHggTW9kZXJuRXJhO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAmLm5vRHJpdmVycyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfQWxlcnRzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmRWaW9sYXRlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYW5nZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDcwMCAxNnB4LzI0cHggTW9kZXJuRXJhO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zaG93NSB7XG4gICAgZm9udDogNjAwIDE2cHgvMjJweCBNb2Rlcm5FcmE7XG4gICAgY29sb3I6ICRQcmltYXJ5X0JsdWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRQcmltYXJ5X0JsdWU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwNjRGRjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5kYXNoR3JhcGhCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cbiAgICAuYm94QmFjayB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTZweCAxOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5sZWZ0NjAge1xuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDYwJSAtIDEwcHgpO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNjAlIC0gMTBweCk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgICAgd2lkb3dzOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGVUaXRsZSB7XG4gICAgICAgICAgICBmb250OiA3MDAgMTZweC8yNHB4IE1vZGVybkVyYTtcbiAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyYXBoVGl0bGUge1xuICAgICAgICAgICAgZm9udDogNzAwIDE0cHgvMjRweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAucmlnaHQ0MCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNDAlIC0gMTBweCk7XG4gICAgICAgIG1heC13aWR0aDogY2FsYyg0MCUgLSAxMHB4KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5leGNlcHRpb25UaXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBmb250OiA3MDAgMTZweC8yNHB4IE1vZGVybkVyYTtcbiAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLmV4Y2VwdGlvblNpZGUge1xuICAgICAgICAvLyAgICAgbWF4LXdpZHRoOiAxOTBweDtcbiAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLmdyYXBoU2lkZSB7XG4gICAgICAgICAgICAvLyB3aWR0aDogY2FsYygxMDAlIC0gMTkwcHgpO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZHJpdmVuIHRvbyBmYXN0XG4gICAgICAgIC5maXJzdGhhbGRmIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDI1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgICAgICAubXNnIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtc2c7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udDogMTRweC8yNHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250OiA2MDAgMTRweC8yNHB4IE1vZGVybkVyYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmlnaHQ0MC1zZWNvbmQge1xuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDQwJSAtIDEwcHgpO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNDAlIC0gMTBweCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgLmV4Y2VwdGlvblRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQ6IDcwMCAxNnB4LzI0cHggTW9kZXJuRXJhO1xuICAgICAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAuZXhjZXB0aW9uU2lkZSB7XG4gICAgICAgIC8vICAgICBtYXgtd2lkdGg6IDE5MHB4O1xuICAgICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAuZ3JhcGhTaWRlIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSAxOTBweCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9kcml2ZW4gdG9vIGZhc3RcbiAgICAgICAgLmZpcnN0aGFsZGYge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgICAgIC5tc2cge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1zZztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTRweDtcbiAgICAgICAgICAgICAgICBmb250OiAxNHB4LzI0cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDYwMCAxNHB4LzI0cHggTW9kZXJuRXJhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGJhY2tncm91bmQ6ICM2MDRFRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIGxldHRlci1zcGFjaW5nOiAuMjJweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICBib3JkZXItc3BhY2luZzogMCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IHtcbiAgICA6Om5nLWRlZXAge1xuICAgICAgICAuYm9va2luZy10YWJsZSB7XG5cbiAgICAgICAgICAgIHRyLm1hdC1yb3csXG4gICAgICAgICAgICB0ci5tYXQtZm9vdGVyLXJvdyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWF0LXByb2dyZXNzLWJhciB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHggMjZweDtcbn1cblxuOjpuZy1kZWVwIC5kcml2ZUZhc3QgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjcwNzAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hdmdTcGVlZCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQ0JBMCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjEwcHgpe1xuICAgIC5kYXNoYm9hcmRCb3gge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICAgICAgLmJveHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTVweCAxNXB4IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmV4Y2VwdGlvbkJveHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIH1cbiAgICAucmlnaHQ0MHtcbiAgICAgICAgLmdyYXBoU2lkZXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXZnc3BlZWR7XG4gICAgICAgIGZvbnQ6IDYwMCA5cHgvMjRweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNwZWVkdGl0bGV7XG4gICAgICAgIGZvbnQ6IDYwMCAxMnB4LzI0cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kcml2ZW50aXRsZXtcbiAgICAgICAgZm9udDogNjAwIDEwcHgvMjRweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG59XG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xuICAgIFxufVxuQG1lZGlhIChtaW4td2lkdGg6MjAwcHgpIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcbiAgICAuZGFzaGJvYXJkQm94IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICB9XG4gICAgLmV4Y2VwdGlvbkJveHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIH1cbiAgICAucmlnaHQ0MHtcbiAgICAgICAgLmdyYXBoU2lkZXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXZnc3BlZWR7XG4gICAgICAgIGZvbnQ6IDYwMCA5cHgvMjRweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNwZWVkdGl0bGV7XG4gICAgICAgIGZvbnQ6IDYwMCAxMnB4LzI0cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kcml2ZW50aXRsZXtcbiAgICAgICAgZm9udDogNjAwIDEwcHgvMjRweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICB9XG59XG4uZGF0YUJveHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-home',
                templateUrl: './dashboard-home.component.html',
                styleUrls: ['./dashboard-home.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "GEmG":
/*!****************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "I7pW");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "DQdU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-daterangepicker-material */ "YhS8");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-gauge */ "Mumg");
/* harmony import */ var src_app_config_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/config/material */ "Uo7g");
/* harmony import */ var _dashboard_home_v2_dashboard_home_v2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-home-v2/dashboard-home-v2.component */ "IIKY");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-card/dashboard-card.component */ "GOjz");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "P5uQ");
/* harmony import */ var ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-shimmer-loading */ "+HUQ");


















// import { FlexLayoutModule } from '@angular/flex-layout';
class DashboardModule {
}
DashboardModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: DashboardModule });
DashboardModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
            src_app_config_material__WEBPACK_IMPORTED_MODULE_9__["MaterialModules"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_gauge__WEBPACK_IMPORTED_MODULE_8__["NgxGaugeModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                extend: true
            }),
            ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__["NgxShimmerLoadingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardModule, { declarations: [_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__["DashboardHomeComponent"], _dashboard_home_v2_dashboard_home_v2_component__WEBPACK_IMPORTED_MODULE_10__["DashboardHomeV2Component"], _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_12__["DashboardCardComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_13__["BarChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
        src_app_config_material__WEBPACK_IMPORTED_MODULE_9__["MaterialModules"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ngx_gauge__WEBPACK_IMPORTED_MODULE_8__["NgxGaugeModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__["NgxShimmerLoadingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__["DashboardHomeComponent"], _dashboard_home_v2_dashboard_home_v2_component__WEBPACK_IMPORTED_MODULE_10__["DashboardHomeV2Component"], _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_12__["DashboardCardComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_13__["BarChartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                    src_app_config_material__WEBPACK_IMPORTED_MODULE_9__["MaterialModules"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    ngx_gauge__WEBPACK_IMPORTED_MODULE_8__["NgxGaugeModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                        extend: true
                    }),
                    ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__["NgxShimmerLoadingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "GOjz":
/*!***************************************************************************!*\
  !*** ./src/app/main/dashboard/dashboard-card/dashboard-card.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardComponent", function() { return DashboardCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/main.service */ "c/rV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function DashboardCardComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 3, "topVehicleScore"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 5, "topVehicleScore"));
} }
function DashboardCardComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 3, "bottomVehicle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 5, "bottomVehicle"));
} }
function DashboardCardComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 3, "mostTravelled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 5, "mostTravelled"));
} }
function DashboardCardComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 3, "vehicleProbableCrash"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 5, "vehicleProbableCrash"));
} }
function DashboardCardComponent_div_7_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" - ", ctx_r13.service.convertToDutch(ctx_r13.service.formatToCeil(item_r9 == null ? null : item_r9.total_distance)), " km ");
} }
function DashboardCardComponent_div_7_div_5_div_5_span_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DashboardCardComponent_div_7_div_5_div_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DashboardCardComponent_div_7_div_5_div_5_span_3_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u00A0", ctx_r16.service.convertToDutch(ctx_r16.service.formatToCeil(item_r9 == null ? null : item_r9.safe_score)) || "NA", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.type != 4);
} }
function DashboardCardComponent_div_7_div_5_div_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A0\u00A0", ctx_r17.service.convertToDutch(item_r9 == null ? null : item_r9.safe_score), "");
} }
function DashboardCardComponent_div_7_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " \u00A0- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DashboardCardComponent_div_7_div_5_div_5_span_3_Template, 3, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardCardComponent_div_7_div_5_div_5_span_4_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.type == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.type != 4);
} }
function DashboardCardComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardCardComponent_div_7_div_5_div_4_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardCardComponent_div_7_div_5_div_5_Template, 5, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r9 == null ? null : item_r9.license_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.type == 1 || ctx_r11.type == 2 || ctx_r11.type == 4);
} }
function DashboardCardComponent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a0, a1) { return { border: a0, background: a1 }; };
function DashboardCardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardCardComponent_div_7_div_5_Template, 6, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DashboardCardComponent_div_7_div_6_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](5, _c0, "1px solid " + ctx_r4.border, ctx_r4.background));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r10 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](8, _c0, "1px solid " + ctx_r4.border, ctx_r4.background));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.checkItem(item_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r4.checkItem(item_r9));
} }
const _c1 = function (a0) { return { "safari": a0 }; };
class DashboardCardComponent {
    constructor(service, cd) {
        this.service = service;
        this.cd = cd;
        this.border = 'red';
        this.background = '';
        this.browsername = '';
        this.browsername = this.service.detectBrowserName();
    }
    ngOnInit() {
        if (this.border == '#F3543F') {
            this.background = '#FDDBD7';
        }
        else if (this.border == '#46E18C') {
            this.background = '#DDF8E9';
        }
        else {
            this.background = '#fff';
        }
        if ((this.data && this.data.length < 5) || !this.data) {
            while (this.data.length < 5) {
                this.data.push({});
            }
        }
    }
    checkItem(obj) {
        let key = Object.keys(obj);
        if (key.length)
            return true;
        else
            return false;
    }
}
DashboardCardComponent.??fac = function DashboardCardComponent_Factory(t) { return new (t || DashboardCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DashboardCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardCardComponent, selectors: [["app-dashboard-card"]], inputs: { border: "border", type: "type", data: "data" }, decls: 8, vars: 8, consts: [[1, "card-background"], [1, "card-background__heading", "text-center"], [3, "ngClass"], ["placement", "top", "container", "body", 3, "autoClose", "ngbTooltip", 4, "ngIf"], ["class", "d-flex w-100", 4, "ngFor", "ngForOf"], ["placement", "top", "container", "body", 3, "autoClose", "ngbTooltip"], ["tooltip3", "ngbTooltip"], [1, "d-flex", "w-100"], [1, "number", 3, "ngStyle"], [1, "card-background__content", 3, "ngStyle"], ["class", "test d-flex", 4, "ngIf"], ["class", "test", 4, "ngIf"], [1, "test", "d-flex"], [1, "left"], ["class", "wrapWord", 4, "ngIf"], ["class", "d-flex wrapWord", 4, "ngIf"], [1, "wrapWord"], [1, "d-flex", "wrapWord"], [1, "wrap-text"], [4, "ngIf"], ["class", "safeScorefont", 4, "ngIf"], [1, "safeScorefont"], [1, "test"]], template: function DashboardCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DashboardCardComponent_span_3_Template, 5, 7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardCardComponent_span_4_Template, 5, 7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardCardComponent_span_5_Template, 5, 7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DashboardCardComponent_span_6_Template, 5, 7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, DashboardCardComponent_div_7_Template, 7, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c1, ctx.browsername == "safari"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.type == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.type == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultStyleDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".card-background[_ngcontent-%COMP%] {\n  min-height: 330px;\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px 24px;\n  display: inline-block;\n  width: 100%;\n}\n.card-background__heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #001e50;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: 15px;\n  font: 700 14px/16px ModernEra_Bold;\n}\n.card-background__heading[_ngcontent-%COMP%]   h2.safari[_ngcontent-%COMP%] {\n  font: 600 14px/24px ModernEra_semiBold !important;\n}\n.card-background[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  width: 20%;\n  margin-top: 29px;\n  height: 36px;\n  width: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card-background__content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n  margin-left: 2%;\n  width: 78%;\n  padding: 12px 6px;\n  border-radius: 27px;\n}\n.card-background__content[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%] {\n  color: #001e50;\n  font: 700 12px/16px ModernEra;\n  margin: 0;\n  justify-content: center;\n}\n.card-background__content[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  color: #001e50;\n  font: 700 12px/16px ModernEra;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-background__content[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 13px/16px ModernEra_semiBold;\n}\n.wrap-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wrapWord[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.safeScorefont[_ngcontent-%COMP%] {\n  font: 800 13px/16px ModernEra_Extrabold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vZGFzaGJvYXJkLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNFQTtFQUNFLGlCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7RUFFQSxXQUFBO0FBSEY7QUFPSTtFQUNFLGNETlk7RUF5SWhCLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQ25JSSxpQkFBQTtFQUNBLGtDQUFBO0FBSE47QUFJTTtFQUNFLGlEQUFBO0FBRlI7QUFNRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpKO0FBU0U7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBUko7QUFVSTtFQUNFLGNEdENZO0VDdUNaLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBUk47QUFTTTtFQUVFLGNENUNVO0VDNkNWLDZCQUFBO0VENEZOLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ25HRjtBQU9RO0VBQ0Usc0NBQUE7QUFMVjtBQWdCQTtFRDhFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUMxRkY7QUFjQTtFRDBFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNwRkY7QUFZQTtFQUNFLHVDQUFBO0FBVEYiLCJmaWxlIjoiZGFzaGJvYXJkLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uY2FyZC1iYWNrZ3JvdW5kIHtcbiAgbWluLWhlaWdodDogMzMwcHg7XG4gIC8vIG1heC13aWR0aDogMjY4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBtYXgtd2lkdGg6IDQ4JTtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuXG4gICZfX2hlYWRpbmcge1xuICAgIGgyIHtcbiAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgQGluY2x1ZGUgZWxsaXBzaXM7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIGZvbnQ6IDcwMCAxNHB4LzE2cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICAmLnNhZmFyaSB7XG4gICAgICAgIGZvbnQ6IDYwMCAxNHB4LzI0cHggTW9kZXJuRXJhX3NlbWlCb2xkICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5udW1iZXIge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBzcGFue1xuXG4gICAgLy8gfVxuICB9XG4gICZfX2NvbnRlbnQge1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgd2lkdGg6IDc4JTtcbiAgICBwYWRkaW5nOiAxMnB4IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xuXG4gICAgLnRlc3Qge1xuICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICBmb250OiA3MDAgMTJweC8xNnB4IE1vZGVybkVyYTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLmxlZnQge1xuICAgICAgICAvLyB3aWR0aDogNjAlO1xuICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgZm9udDogNzAwIDEycHgvMTZweCBNb2Rlcm5FcmE7XG4gICAgICAgIEBpbmNsdWRlIGVsbGlwc2lzO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250OiA1MDAgMTNweC8xNnB4IE1vZGVybkVyYV9zZW1pQm9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNzNweCl7XG4gICAgLmNhcmQtYmFja2dyb3VuZHtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiA0NyU7XG4gICAgfVxuICB9XG4ud3JhcC10ZXh0IHtcbiAgQGluY2x1ZGUgZWxsaXBzaXM7XG4gIC8vIG1heC13aWR0aDogNTBweDtcbn1cbi53cmFwV29yZCB7XG4gIEBpbmNsdWRlIGVsbGlwc2lzO1xuICAvLyBtYXJnaW4tdG9wOiAxcHg7XG59XG4uc2FmZVNjb3JlZm9udCB7XG4gIGZvbnQ6IDgwMCAxM3B4LzE2cHggTW9kZXJuRXJhX0V4dHJhYm9sZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-card',
                templateUrl: './dashboard-card.component.html',
                styleUrls: ['./dashboard-card.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { border: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "I7pW":
/*!************************************************************!*\
  !*** ./src/app/main/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_home_v2_dashboard_home_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-home-v2/dashboard-home-v2.component */ "IIKY");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "DQdU");






const routes = [
    {
        path: "d",
        component: _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__["DashboardHomeComponent"],
        pathMatch: 'full'
    },
    {
        path: "",
        component: _dashboard_home_v2_dashboard_home_v2_component__WEBPACK_IMPORTED_MODULE_2__["DashboardHomeV2Component"],
        pathMatch: 'full'
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "IIKY":
/*!*********************************************************************************!*\
  !*** ./src/app/main/dashboard/dashboard-home-v2/dashboard-home-v2.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DashboardHomeV2Component, DialogContentdashboardDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHomeV2Component", function() { return DashboardHomeV2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentdashboardDialog", function() { return DialogContentdashboardDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/app-config */ "Tr6M");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "m0r1");
/* harmony import */ var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chartjs-plugin-zoom */ "c3W2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config/route-config */ "1r8O");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/main.service */ "c/rV");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/local.service */ "s3jE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../bar-chart/bar-chart.component */ "P5uQ");
/* harmony import */ var _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dashboard-card/dashboard-card.component */ "GOjz");





















function DashboardHomeV2Component_div_6_div_1_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r21.service.convertToDutch(ctx_r21.dashBoardData == null ? null : ctx_r21.dashBoardData.speedChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_1_div_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r23.service.convertToDutch(ctx_r23.dashBoardData == null ? null : ctx_r23.dashBoardData.speedChange) || "0", "% ");
} }
const _c0 = function (a0) { return { "max-width": a0 }; };
const _c1 = function (a0) { return { "active": a0 }; };
function DashboardHomeV2Component_div_6_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_div_6_div_1_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r25.changeBoxValue(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_1_div_2_ng_container_4_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_1_div_2_ng_template_5_Template, 3, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "canvas", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 51, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, (100 - 5) / ctx_r16.leftCount + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c1, ctx_r16.boxVal == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r16.service.convertToDutch(ctx_r16.dashBoardData == null ? null : ctx_r16.dashBoardData.speed_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r16.dashBoardData == null ? null : ctx_r16.dashBoardData.speedChange) >= 0)("ngIfElse", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 8, "speeding"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 10, "speeding"));
} }
function DashboardHomeV2Component_div_6_div_1_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r27.service.convertToDutch(ctx_r27.dashBoardData == null ? null : ctx_r27.dashBoardData.idilingChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_1_div_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r29.service.convertToDutch(ctx_r29.dashBoardData == null ? null : ctx_r29.dashBoardData.idilingChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_div_6_div_1_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r31.changeBoxValue(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_1_div_3_ng_container_4_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_1_div_3_ng_template_5_Template, 3, 1, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "canvas", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 51, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, (100 - 5) / ctx_r17.leftCount + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c1, ctx_r17.boxVal == 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r17.service.convertToDutch(ctx_r17.dashBoardData == null ? null : ctx_r17.dashBoardData.idling_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r17.dashBoardData == null ? null : ctx_r17.dashBoardData.idilingChange) >= 0)("ngIfElse", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 8, "idiling"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 10, "idiling"));
} }
function DashboardHomeV2Component_div_6_div_1_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r33.service.convertToDutch(ctx_r33.dashBoardData == null ? null : ctx_r33.dashBoardData.brakingChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_1_div_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r35.service.convertToDutch(ctx_r35.dashBoardData == null ? null : ctx_r35.dashBoardData.brakingChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_div_6_div_1_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r37.changeBoxValue(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_1_div_4_ng_container_4_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_1_div_4_ng_template_5_Template, 3, 1, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "canvas", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 51, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, (100 - 5) / ctx_r18.leftCount + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c1, ctx_r18.boxVal == 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r18.service.convertToDutch(ctx_r18.dashBoardData == null ? null : ctx_r18.dashBoardData.breaking_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r18.dashBoardData == null ? null : ctx_r18.dashBoardData.brakingChange) >= 0)("ngIfElse", _r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 8, "hardBraking"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 10, "hardBraking"));
} }
function DashboardHomeV2Component_div_6_div_1_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r39.service.convertToDutch(ctx_r39.dashBoardData == null ? null : ctx_r39.dashBoardData.cornerChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_1_div_5_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r41.service.convertToDutch(ctx_r41.dashBoardData == null ? null : ctx_r41.dashBoardData.cornerChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_div_6_div_1_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r43.changeBoxValue(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_1_div_5_ng_container_4_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_1_div_5_ng_template_5_Template, 3, 1, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "canvas", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 51, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, (100 - 5) / ctx_r19.leftCount + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c1, ctx_r19.boxVal == 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r19.service.convertToDutch(ctx_r19.dashBoardData == null ? null : ctx_r19.dashBoardData.cornering_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r19.dashBoardData == null ? null : ctx_r19.dashBoardData.cornerChange) >= 0)("ngIfElse", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 8, "harshCorner"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 10, "harshCorner"));
} }
function DashboardHomeV2Component_div_6_div_1_div_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r45.service.convertToDutch(ctx_r45.dashBoardData == null ? null : ctx_r45.dashBoardData.accChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_1_div_6_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r47.service.convertToDutch(ctx_r47.dashBoardData == null ? null : ctx_r47.dashBoardData.accChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_div_6_div_1_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r48.changeBoxValue(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_1_div_6_ng_container_4_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_1_div_6_ng_template_5_Template, 3, 1, "ng-template", null, 62, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "canvas", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, (100 - 5) / ctx_r20.leftCount + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c1, ctx_r20.boxVal == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r20.service.convertToDutch(ctx_r20.dashBoardData == null ? null : ctx_r20.dashBoardData.acceleration_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r20.dashBoardData == null ? null : ctx_r20.dashBoardData.accChange) >= 0)("ngIfElse", _r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 6, "hardAcceleration"));
} }
const _c2 = function (a0) { return { "width": a0 }; };
const _c3 = function (a0) { return { "check": a0 }; };
function DashboardHomeV2Component_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DashboardHomeV2Component_div_6_div_1_div_2_Template, 15, 16, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DashboardHomeV2Component_div_6_div_1_div_3_Template, 15, 16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_1_div_4_Template, 15, 16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_1_div_5_Template, 15, 16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DashboardHomeV2Component_div_6_div_1_div_6_Template, 13, 12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c2, ctx_r14.leftWidth + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c3, ctx_r14.leftCount == 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r14.dashBoardData == null ? null : ctx_r14.dashBoardData.speed_score) < ctx_r14.attentionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r14.dashBoardData == null ? null : ctx_r14.dashBoardData.idling_score) < ctx_r14.attentionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r14.dashBoardData == null ? null : ctx_r14.dashBoardData.breaking_score) < ctx_r14.attentionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r14.dashBoardData == null ? null : ctx_r14.dashBoardData.cornering_score) < ctx_r14.attentionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r14.dashBoardData == null ? null : ctx_r14.dashBoardData.acceleration_score) < ctx_r14.attentionValue);
} }
function DashboardHomeV2Component_div_6_div_2_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r55.service.convertToDutch(ctx_r55.dashBoardData == null ? null : ctx_r55.dashBoardData.speedChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_2_div_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r57.service.convertToDutch(ctx_r57.dashBoardData == null ? null : ctx_r57.dashBoardData.speedChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_div_6_div_2_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r58.changeBoxValue(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_2_div_2_ng_container_4_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_2_div_2_ng_template_5_Template, 3, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "canvas", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, (100 - 5) / (5 - ctx_r50.leftCount) + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c1, ctx_r50.boxVal == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r50.service.convertToDutch(ctx_r50.dashBoardData == null ? null : ctx_r50.dashBoardData.speed_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r50.dashBoardData == null ? null : ctx_r50.dashBoardData.speedChange) >= 0)("ngIfElse", _r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 6, "speeding"));
} }
function DashboardHomeV2Component_div_6_div_2_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r60.service.convertToDutch(ctx_r60.dashBoardData == null ? null : ctx_r60.dashBoardData.idilingChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_2_div_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r62.service.convertToDutch(ctx_r62.dashBoardData == null ? null : ctx_r62.dashBoardData.idilingChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_div_6_div_2_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r63.changeBoxValue(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_2_div_3_ng_container_4_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_2_div_3_ng_template_5_Template, 3, 1, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "canvas", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, (100 - 5) / (5 - ctx_r51.leftCount) + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c1, ctx_r51.boxVal == 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r51.service.convertToDutch(ctx_r51.dashBoardData == null ? null : ctx_r51.dashBoardData.idling_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r51.dashBoardData == null ? null : ctx_r51.dashBoardData.idilingChange) >= 0)("ngIfElse", _r61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 6, "idiling"));
} }
function DashboardHomeV2Component_div_6_div_2_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r65.service.convertToDutch(ctx_r65.dashBoardData == null ? null : ctx_r65.dashBoardData.brakingChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_2_div_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r67.service.convertToDutch(ctx_r67.dashBoardData == null ? null : ctx_r67.dashBoardData.brakingChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_div_6_div_2_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r68.changeBoxValue(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_2_div_4_ng_container_4_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_2_div_4_ng_template_5_Template, 3, 1, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "canvas", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, (100 - 5) / (5 - ctx_r52.leftCount) + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c1, ctx_r52.boxVal == 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r52.service.convertToDutch(ctx_r52.dashBoardData == null ? null : ctx_r52.dashBoardData.breaking_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r52.dashBoardData == null ? null : ctx_r52.dashBoardData.brakingChange) >= 0)("ngIfElse", _r66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 6, "hardBraking"));
} }
function DashboardHomeV2Component_div_6_div_2_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r70.service.convertToDutch(ctx_r70.dashBoardData == null ? null : ctx_r70.dashBoardData.cornerChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_2_div_5_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r72.service.convertToDutch(ctx_r72.dashBoardData == null ? null : ctx_r72.dashBoardData.cornerChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_div_6_div_2_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r73.changeBoxValue(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_2_div_5_ng_container_4_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_2_div_5_ng_template_5_Template, 3, 1, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "canvas", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, (100 - 5) / (5 - ctx_r53.leftCount) + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c1, ctx_r53.boxVal == 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r53.service.convertToDutch(ctx_r53.dashBoardData == null ? null : ctx_r53.dashBoardData.cornering_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r53.dashBoardData == null ? null : ctx_r53.dashBoardData.cornerChange) >= 0)("ngIfElse", _r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 6, "harshCorner"));
} }
function DashboardHomeV2Component_div_6_div_2_div_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r75.service.convertToDutch(ctx_r75.dashBoardData == null ? null : ctx_r75.dashBoardData.accChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_2_div_6_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r77.service.convertToDutch(ctx_r77.dashBoardData == null ? null : ctx_r77.dashBoardData.accChange) || "0", "% ");
} }
function DashboardHomeV2Component_div_6_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_div_6_div_2_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r78.changeBoxValue(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_2_div_6_ng_container_4_Template, 4, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_2_div_6_ng_template_5_Template, 3, 1, "ng-template", null, 62, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "canvas", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, (100 - 5) / (5 - ctx_r54.leftCount) + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c1, ctx_r54.boxVal == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r54.service.convertToDutch(ctx_r54.dashBoardData == null ? null : ctx_r54.dashBoardData.acceleration_score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r54.dashBoardData == null ? null : ctx_r54.dashBoardData.accChange) >= 0)("ngIfElse", _r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 6, "hardAcceleration"));
} }
function DashboardHomeV2Component_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DashboardHomeV2Component_div_6_div_2_div_2_Template, 13, 12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DashboardHomeV2Component_div_6_div_2_div_3_Template, 13, 12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardHomeV2Component_div_6_div_2_div_4_Template, 13, 12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardHomeV2Component_div_6_div_2_div_5_Template, 13, 12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DashboardHomeV2Component_div_6_div_2_div_6_Template, 13, 12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c2, ctx_r15.rightWidth + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r15.dashBoardData == null ? null : ctx_r15.dashBoardData.speed_score) >= ctx_r15.attentionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r15.dashBoardData == null ? null : ctx_r15.dashBoardData.idling_score) >= ctx_r15.attentionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r15.dashBoardData == null ? null : ctx_r15.dashBoardData.breaking_score) >= ctx_r15.attentionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r15.dashBoardData == null ? null : ctx_r15.dashBoardData.cornering_score) >= ctx_r15.attentionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r15.dashBoardData == null ? null : ctx_r15.dashBoardData.acceleration_score) >= ctx_r15.attentionValue);
} }
function DashboardHomeV2Component_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DashboardHomeV2Component_div_6_div_1_Template, 7, 11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DashboardHomeV2Component_div_6_div_2_Template, 7, 8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.leftSide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.rightSide);
} }
function DashboardHomeV2Component_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "mat-spinner", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 50);
} }
const _c4 = function (a0) { return { "safari": a0 }; };
function DashboardHomeV2Component_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 69, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-bar-chart", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 8, "harshType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c4, ctx_r3.browsername == "safari"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 10, "harshType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "barchart1")("type", 1)("data", ctx_r3.exceptionData)("label", ctx_r3.exceptionLabel);
} }
function DashboardHomeV2Component_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 69, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-bar-chart", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 8, "vehicleDrivenSpeed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c4, ctx_r4.browsername == "safari"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 10, "vehicleDrivenSpeed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "barchart2")("type", 2)("data", ctx_r4.roadTypeData)("label", ctx_r4.roadTypeLabel);
} }
function DashboardHomeV2Component_div_52_app_dashboard_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-dashboard-card", 74);
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("border", "#46E18C")("type", 1)("data", ctx_r82.bestScore);
} }
function DashboardHomeV2Component_div_52_app_dashboard_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-dashboard-card", 75);
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("border", "#F3543F")("type", 2)("data", ctx_r83.worstScore);
} }
function DashboardHomeV2Component_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DashboardHomeV2Component_div_52_app_dashboard_card_1_Template, 1, 3, "app-dashboard-card", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DashboardHomeV2Component_div_52_app_dashboard_card_2_Template, 1, 3, "app-dashboard-card", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.bestScore.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.worstScore.length);
} }
function DashboardHomeV2Component_div_53_app_dashboard_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-dashboard-card", 74);
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("border", "#FDDBD7")("type", 3)("data", ctx_r84.mostTravelled);
} }
function DashboardHomeV2Component_div_53_app_dashboard_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-dashboard-card", 75);
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("border", "#FDDBD7")("type", 4)("data", ctx_r85.probablyCrashed);
} }
function DashboardHomeV2Component_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DashboardHomeV2Component_div_53_app_dashboard_card_1_Template, 1, 3, "app-dashboard-card", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DashboardHomeV2Component_div_53_app_dashboard_card_2_Template, 1, 3, "app-dashboard-card", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.mostTravelled.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.probablyCrashed.length);
} }
function DashboardHomeV2Component_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 69, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-bar-chart", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 8, "speedHarshEvent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c4, ctx_r7.browsername == "safari"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 10, "speedHarshEvent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "barchart3")("type", 3)("data", ctx_r7.speed_distribution.data)("label", ctx_r7.speed_distribution.label);
} }
function DashboardHomeV2Component_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 69, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-bar-chart", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 8, "brakingHarshEvent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c4, ctx_r8.browsername == "safari"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 10, "brakingHarshEvent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "barchart4")("type", 4)("data", ctx_r8.breaking_distribution.data)("label", ctx_r8.breaking_distribution.label);
} }
function DashboardHomeV2Component_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 69, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-bar-chart", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 8, "accHarshEvent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c4, ctx_r9.browsername == "safari"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 10, "accHarshEvent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "barchart5")("type", 5)("data", ctx_r9.acceleration_distribution.data)("label", ctx_r9.acceleration_distribution.label);
} }
function DashboardHomeV2Component_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-bar-chart", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c4, ctx_r10.browsername == "safari"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 6, "cornerHarshEvent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "barchart6")("type", 6)("data", ctx_r10.cornering_distribution.data)("label", ctx_r10.cornering_distribution.label);
} }
function DashboardHomeV2Component_div_81_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r90.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r90.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function DashboardHomeV2Component_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Tuesday, 12 April 2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "26\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "16\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "22\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "09:18 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "09:18 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Driving in bad weather");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "56h 32m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Wind");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "10.23 km/h");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Humidity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "56%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "14.83 km");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "UV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Lowest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h3", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Hourly Forecast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](78, DashboardHomeV2Component_div_81_div_78_Template, 5, 2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r12.items);
} }
function DashboardHomeV2Component_div_82_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r92.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r92.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function DashboardHomeV2Component_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Tuesday, 12 April 2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "26\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "16\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "22\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "09:18 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "09:18 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Driving in bad weather");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "56h 32m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Wind");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "10.23 km/h");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "14.83 km");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Humidity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "56 %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "UV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Lowest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Hourly Forecast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, DashboardHomeV2Component_div_82_div_63_Template, 5, 2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r13.items);
} }
const _c5 = function (a0) { return { activeSafeScore: a0 }; };
const _c6 = function (a0) { return { activeOther: a0 }; };
const _c7 = ".exceptionBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%] {\n  background: #ffffff;\n  flex-basis: calc(25% - 15px);\n  max-width: calc(25% - 15px);\n  margin: 0 18.5px 20px 0;\n  border-radius: 12px;\n  padding: 14px 11px;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.active[_ngcontent-%COMP%] {\n  border: 1px solid #fa1464;\n  box-shadow: 0px 9px 7px rgba(0, 0, 0, 0.12);\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]:nth-child(4n+0) {\n  margin-right: 0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.exBox50[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 9px);\n  max-width: calc(50% - 9px);\n  margin: 0 17.5px 20px 0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.exBox50[_ngcontent-%COMP%]:nth-child(2n+0) {\n  margin-right: 0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.exBox33[_ngcontent-%COMP%] {\n  flex-basis: calc(33.33% - 12px);\n  max-width: calc(33.33% - 12px);\n  margin: 0 17.5px 20px 0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.exBox33[_ngcontent-%COMP%]:nth-child(3n+0) {\n  margin-right: 0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.exBox20[_ngcontent-%COMP%] {\n  flex-basis: calc(20% - 10px);\n  max-width: calc(20% - 10px);\n  margin: 0 12.5px 20px 0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.exBox20[_ngcontent-%COMP%]:nth-child(5n+0) {\n  margin-right: 0;\n}\n@media (max-width: 1300px) {\n  .exceptionBox[_ngcontent-%COMP%]   .exBox.exBox20[_ngcontent-%COMP%] {\n    flex-basis: calc(33.33% - 12px);\n    max-width: calc(33.33% - 12px);\n    margin: 0 17.5px 20px 0;\n  }\n  .exceptionBox[_ngcontent-%COMP%]   .exBox.exBox20[_ngcontent-%COMP%]:nth-child(3n+0) {\n    margin-right: 0;\n  }\n  .exceptionBox[_ngcontent-%COMP%]   .exBox.exBox20[_ngcontent-%COMP%]:nth-child(5n+0) {\n    margin-right: 0;\n  }\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.exBox17[_ngcontent-%COMP%] {\n  flex-basis: calc(16.66% - 10px);\n  max-width: calc(16.66% - 10px);\n  margin: 0 11.5px 20px 0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.exBox17[_ngcontent-%COMP%]:nth-child(6n+0) {\n  margin-right: 0;\n}\n@media (max-width: 1300px) {\n  .exceptionBox[_ngcontent-%COMP%]   .exBox.exBox17[_ngcontent-%COMP%] {\n    flex-basis: calc(33.33% - 12px);\n    max-width: calc(33.33% - 12px);\n    margin: 0 17.5px 20px 0;\n  }\n  .exceptionBox[_ngcontent-%COMP%]   .exBox.exBox17[_ngcontent-%COMP%]:nth-child(3n+0) {\n    margin-right: 0;\n  }\n  .exceptionBox[_ngcontent-%COMP%]   .exBox.exBox17[_ngcontent-%COMP%]:nth-child(6n+0) {\n    margin-right: 0;\n  }\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox.exBox100[_ngcontent-%COMP%] {\n  flex-basis: calc(100%);\n  max-width: calc(100%);\n  margin: 0 0 20px 0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%] {\n  color: #ff7070;\n  font: 600 24px/24px ModernEra;\n  margin-bottom: 12px;\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 14px/17px ModernEra;\n  color: #00cba0;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.exceptionBox[_ngcontent-%COMP%]   .exBox[_ngcontent-%COMP%]   .expName[_ngcontent-%COMP%] {\n  text-align: center;\n  font: 600 14px/17px ModernEra;\n  color: #1b194b;\n  margin-bottom: 0;\n}\n.graphTitle[_ngcontent-%COMP%] {\n  font: 700 14px/19px ModernEra;\n  color: #001e50;\n  text-align: center;\n}\n.green[_ngcontent-%COMP%] {\n  color: #00cba0 !important;\n}\n.red[_ngcontent-%COMP%] {\n  color: #ff7070 !important;\n}\n.textWhite[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.show5[_ngcontent-%COMP%] {\n  font: 600 16px/22px ModernEra;\n  color: #0064ff;\n  text-align: center;\n  border: 1px solid #0064ff;\n  border: 1px solid #0064ff;\n  padding: 10px;\n  border-radius: 20px;\n}\n.dashGraphBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 16px 18px 20px 18px;\n  margin-bottom: 20px;\n  position: relative;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack.fixHeight[_ngcontent-%COMP%] {\n  min-height: 330px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .vehicleInfo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 500 14px/17px ModernEra;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .viewRight[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  bottom: 5px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .barChartHead[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .barChartHead[_ngcontent-%COMP%]   .btnExport[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  padding: 0px;\n  background: #4c6fff;\n  border: #4c6fff;\n  border-radius: 36px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .exbixTitle[_ngcontent-%COMP%] {\n  font: 600 14px/17px ModernEra;\n  color: #fa1464;\n  margin-bottom: 10px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .exbixTitle.greenText[_ngcontent-%COMP%] {\n  color: #00cba0;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__safeScore[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__safeScore[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font: 700 10px/12px ModernEra_Bold;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__safeScore[_ngcontent-%COMP%]   .checkbox-dynamic-score[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n  height: 10px;\n  width: 10px;\n  background: #45cbfc;\n  border-radius: 2px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__safeScore[_ngcontent-%COMP%]   .checkbox-dynamic-score.activeSafeScore[_ngcontent-%COMP%] {\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  margin-left: 10px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font: 700 10px/12px ModernEra_Bold;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore[_ngcontent-%COMP%]   .checkbox-dynamic-second[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background: #371a87;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore[_ngcontent-%COMP%]   .checkbox-dynamic-second.activeOther[_ngcontent-%COMP%] {\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__safeScoreSecond[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__safeScoreSecond[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  cursor: pointer;\n  font: 800 11px/12px ModernEra_Extrabold;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__safeScoreSecond[_ngcontent-%COMP%]   label.safari[_ngcontent-%COMP%] {\n  font: 700 11px/12px ModernEra_semiBold;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__safeScoreSecond[_ngcontent-%COMP%]   .checkbox-dynamic[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n  height: 14px;\n  width: 14px;\n  border: 1px solid #001e50;\n  border-radius: 2px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__safeScoreSecond[_ngcontent-%COMP%]   .checkbox-dynamic.activeSafeScore[_ngcontent-%COMP%] {\n  border: none;\n  background: #001e50;\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__speeding[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__speeding[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  cursor: pointer;\n  font: 700 10px/12px ModernEra;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__speeding[_ngcontent-%COMP%]   .checkbox-dynamic-second[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  border-radius: 2px;\n  margin-right: 5px;\n  border: 1px solid #ff9950;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__speeding[_ngcontent-%COMP%]   .checkbox-dynamic-second.activeOther[_ngcontent-%COMP%] {\n  border: none;\n  background: #ff9950;\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__idiling[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__idiling[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  cursor: pointer;\n  font: 700 10px/12px ModernEra;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__idiling[_ngcontent-%COMP%]   .checkbox-dynamic-second[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  border-radius: 2px;\n  margin-right: 5px;\n  border: 1px solid #00cba0;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__idiling[_ngcontent-%COMP%]   .checkbox-dynamic-second.activeOther[_ngcontent-%COMP%] {\n  border: none;\n  background: #00cba0;\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__acc[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__acc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  cursor: pointer;\n  font: 700 10px/12px ModernEra;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__acc[_ngcontent-%COMP%]   .checkbox-dynamic-second[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  border-radius: 2px;\n  margin-right: 5px;\n  border: 1px solid #4dbfff;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__acc[_ngcontent-%COMP%]   .checkbox-dynamic-second.activeOther[_ngcontent-%COMP%] {\n  background: #4dbfff;\n  border: none;\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__braking[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__braking[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 2px;\n  font: 700 10px/12px ModernEra;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__braking[_ngcontent-%COMP%]   .checkbox-dynamic-second[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  border-radius: 2px;\n  margin-right: 5px;\n  border: 1px solid #FF7070;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__braking[_ngcontent-%COMP%]   .checkbox-dynamic-second.activeOther[_ngcontent-%COMP%] {\n  border: none;\n  background: #FF7070;\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__cornering[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__cornering[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  cursor: pointer;\n  font: 700 10px/12px ModernEra;\n  color: #001e50;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__cornering[_ngcontent-%COMP%]   .checkbox-dynamic-second[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  border: 1px solid #FFEA6C;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .boxBack[_ngcontent-%COMP%]   .graphTab__checkbox__cornering[_ngcontent-%COMP%]   .checkbox-dynamic-second.activeOther[_ngcontent-%COMP%] {\n  border: none;\n  background: #FFEA6C;\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .backDanger[_ngcontent-%COMP%] {\n  background-color: rgba(255, 112, 112, 0.4);\n}\n.dashGraphBox[_ngcontent-%COMP%]   .backGreen[_ngcontent-%COMP%] {\n  background-color: rgba(0, 203, 160, 0.15);\n}\n.dashGraphBox[_ngcontent-%COMP%]   .backpolarGreen[_ngcontent-%COMP%] {\n  border-radius: 9.799px;\n  padding: 12px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left50[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  max-width: calc(50% - 10px);\n}\n@media (max-width: 1300px) {\n  .dashGraphBox[_ngcontent-%COMP%]   .left50[_ngcontent-%COMP%] {\n    flex-basis: calc(100%);\n    max-width: calc(100%);\n  }\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left50-box[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  max-width: calc(50% - 10px);\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left83[_ngcontent-%COMP%] {\n  flex-basis: calc(83% - 10px);\n  max-width: calc(83% - 10px);\n}\n@media (max-width: 1300px) {\n  .dashGraphBox[_ngcontent-%COMP%]   .left83[_ngcontent-%COMP%] {\n    flex-basis: calc(67% - 10px);\n    max-width: calc(67% - 10px);\n  }\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left67[_ngcontent-%COMP%] {\n  flex-basis: calc(67% - 10px);\n  max-width: calc(67% - 10px);\n}\n@media (max-width: 1300px) {\n  .dashGraphBox[_ngcontent-%COMP%]   .left67[_ngcontent-%COMP%] {\n    flex-basis: calc(100%);\n    max-width: calc(100%);\n  }\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left67[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  widows: 100% !important;\n  height: 280px !important;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left67[_ngcontent-%COMP%]   .graphTitle[_ngcontent-%COMP%] {\n  font: 600 15px/19px ModernEra;\n  color: #001e50;\n  text-align: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left100[_ngcontent-%COMP%] {\n  flex-basis: calc(100%);\n  max-width: calc(100%);\n}\n@media (max-width: 1300px) {\n  .dashGraphBox[_ngcontent-%COMP%]   .left100[_ngcontent-%COMP%] {\n    flex-basis: calc(100%);\n    max-width: calc(100%);\n  }\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left100[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  widows: 100% !important;\n  height: 280px !important;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left100[_ngcontent-%COMP%]   .graphTitle[_ngcontent-%COMP%] {\n  font: 600 15px/19px ModernEra;\n  color: #001e50;\n  text-align: center;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .exceptionTitle[_ngcontent-%COMP%] {\n  font: 600 16px/24px ModernEra;\n  color: #001e50;\n  margin-bottom: 12px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .left17[_ngcontent-%COMP%] {\n  flex-basis: calc(17% - 10px);\n  max-width: calc(17% - 10px);\n}\n@media (max-width: 1300px) {\n  .dashGraphBox[_ngcontent-%COMP%]   .left17[_ngcontent-%COMP%] {\n    flex-basis: calc(33.33% - 12px);\n    max-width: calc(33.33% - 12px);\n    margin: 0 17.5px 20px 0;\n  }\n  .dashGraphBox[_ngcontent-%COMP%]   .left17[_ngcontent-%COMP%]:nth-child(3n+0) {\n    margin-right: 0;\n  }\n  .dashGraphBox[_ngcontent-%COMP%]   .left17[_ngcontent-%COMP%]:nth-child(6n+0) {\n    margin-right: 0;\n  }\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right33[_ngcontent-%COMP%] {\n  flex-basis: calc(33% - 10px);\n  max-width: calc(33% - 10px);\n}\n@media (max-width: 1300px) {\n  .dashGraphBox[_ngcontent-%COMP%]   .right33[_ngcontent-%COMP%] {\n    flex-basis: calc(100%);\n    max-width: calc(100%);\n  }\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right33[_ngcontent-%COMP%]   .polarException[_ngcontent-%COMP%] {\n  padding: 18px 0;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right33[_ngcontent-%COMP%]   .firsthaldf[_ngcontent-%COMP%] {\n  margin: 10px 0 25px;\n  padding: 10px;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right33[_ngcontent-%COMP%]   .firsthaldf[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  font: 12px/18px ModernEra !important;\n  padding: 3px 30px;\n  color: #ffffff;\n  border-radius: 24px;\n  padding: 4px 14px;\n  font: 14px/24px ModernEra !important;\n  color: #ffffff;\n}\n.dashGraphBox[_ngcontent-%COMP%]   .right33[_ngcontent-%COMP%]   .firsthaldf[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 600 14px/24px ModernEra;\n}\n.suddenScroreTitle[_ngcontent-%COMP%] {\n  font: 600 14px/17px ModernEra;\n  color: #001e50;\n  margin-bottom: 10px;\n}\n.suddenScroreBox[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 8px 25px rgba(98, 98, 98, 0.05);\n  border-radius: 8px;\n  margin-bottom: 8px;\n}\n.suddenScroreBox.active[_ngcontent-%COMP%] {\n  border: 1px solid #0064ff;\n}\n.suddenScroreBox[_ngcontent-%COMP%]   .getRide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font: 600 12px/14px ModernEra !important;\n  margin-right: 0;\n  margin-top: 2px;\n  color: #27272e;\n}\n.suddenScroreBox[_ngcontent-%COMP%]   .suddenBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  align-items: center;\n  padding: 6px 26px 6px 14px;\n}\n.suddenScroreBox[_ngcontent-%COMP%]   .suddenBox[_ngcontent-%COMP%]:nth-child(1) {\n  border-bottom: 1px solid #c5cdd4;\n}\n.suddenScroreBox[_ngcontent-%COMP%]   .suddenBox[_ngcontent-%COMP%]   .suddenLeftRight[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: center;\n}\n.suddenScroreBox[_ngcontent-%COMP%]   .suddenBox[_ngcontent-%COMP%]   .suddenLeftRight[_ngcontent-%COMP%]   .exceptionName[_ngcontent-%COMP%] {\n  font: 600 10px/18px ModernEra;\n  color: #fa1464;\n  margin: 0 5px 0 6px;\n}\n.suddenScroreBox[_ngcontent-%COMP%]   .suddenBox[_ngcontent-%COMP%]   .suddenLeftRight[_ngcontent-%COMP%]   .pastScoreTitle[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font: 600 10px/18px ModernEra;\n  color: #939eaa;\n  margin: 0 6px 0;\n}\n.suddenScroreBox[_ngcontent-%COMP%]   .suddenBox[_ngcontent-%COMP%]   .suddenLeftRight[_ngcontent-%COMP%]   .safeScore[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n}\n.suddenScroreBox[_ngcontent-%COMP%]   .suddenBox[_ngcontent-%COMP%]   .suddenLeftRight[_ngcontent-%COMP%]   .safeScore.dangerbox[_ngcontent-%COMP%] {\n  color: #ff7070;\n  background: rgba(255, 112, 112, 0.1);\n}\n.suddenScroreBox[_ngcontent-%COMP%]   .suddenBox[_ngcontent-%COMP%]   .suddenLeftRight[_ngcontent-%COMP%]   .safeScore.successbox[_ngcontent-%COMP%] {\n  color: #00cba0;\n  background: rgba(0, 203, 160, 0.1);\n}\n.viwlAll[_ngcontent-%COMP%] {\n  text-align: end;\n  font: 600 13px/22px ModernEra;\n  margin-bottom: 10px;\n  color: #0064ff;\n}\n.viwlAll[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.viwlAll[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #0064ff;\n}\n.mat-progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 26px 26px;\n}\n  .driveFast .mat-progress-bar-fill::after {\n  background-color: #ff7070 !important;\n}\n  .avgSpeed .mat-progress-bar-fill::after {\n  background-color: #00cba0 !important;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.attention[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n  border-radius: 4px;\n  background: #ffffff;\n  position: relative;\n}\n.attention[_ngcontent-%COMP%]   .border-text[_ngcontent-%COMP%] {\n  font: 700 18px/16px ModernEra;\n  color: #001e50;\n}\n.attention[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font: 700 14px/17px ModernEra;\n  color: #1b194b;\n  margin-bottom: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n.attention[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  display: inline-block;\n  margin-top: 15px;\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #001e50;\n  font: 600 14px/17px ModernEra;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .dataBoxes[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  padding: 18px 13px;\n  background: rgba(54, 25, 135, 0.2);\n  cursor: pointer;\n  border-radius: 12px;\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .dataBoxes[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-right: 0;\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .databoxescolors[_ngcontent-%COMP%] {\n  color: #1b194b;\n  font: 700 24px/24px ModernEra;\n}\n.attention[_ngcontent-%COMP%]   .goingGood[_ngcontent-%COMP%]   .databoxescolors[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 400 14px/17px ModernEra;\n}\n.attention[_ngcontent-%COMP%]   .needAttention[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-top: 15px;\n  display: inline-block;\n}\n.attention[_ngcontent-%COMP%]   .needAttention.check[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.attention[_ngcontent-%COMP%]   .needAttention[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #001e50;\n  font: 600 14px/17px ModernEra;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.attention[_ngcontent-%COMP%]   .needAttention[_ngcontent-%COMP%]   .databoxescolors[_ngcontent-%COMP%] {\n  color: #1b194b;\n  font: 600 24px/24px ModernEra;\n}\n.attention[_ngcontent-%COMP%]   .needAttention[_ngcontent-%COMP%]   .databoxescolors[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 14px/17px ModernEra;\n}\n.attention[_ngcontent-%COMP%]   .needAttention[_ngcontent-%COMP%]   .dataBoxes[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 18px 13px;\n  background: rgba(54, 25, 135, 0.2);\n  border-radius: 12px;\n  cursor: pointer;\n}\n.attention[_ngcontent-%COMP%]   .needAttention[_ngcontent-%COMP%]   .dataBoxes[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-right: 0;\n}\n.mainBox.mainBox_card[_ngcontent-%COMP%] {\n  background: transparent !important;\n  padding: 0 !important;\n}\n.mainBox[_ngcontent-%COMP%]   .typeTitle[_ngcontent-%COMP%] {\n  font: 700 14px/24px ModernEra_Bold !important;\n  color: #001e50;\n}\n.mainBox[_ngcontent-%COMP%]   .typeTitle.safari[_ngcontent-%COMP%] {\n  font: 600 14px/24px ModernEra_semiBold !important;\n}\n.mainBox[_ngcontent-%COMP%]   .roadFactor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font: 600 13px/16px ModernEra !important;\n  padding: 10px;\n  text-align: center;\n  border: 1px solid #001e50;\n  border-radius: 27px;\n}\n.mainBox[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  font: 12px/18px ModernEra !important;\n  padding: 3px 30px;\n  color: #ffffff;\n  border-radius: 24px;\n  padding: 3px 8px;\n}\n.mainBox[_ngcontent-%COMP%]   .msg.extraPadding[_ngcontent-%COMP%] {\n  padding: 4px 14px;\n  font: 14px/24px ModernEra !important;\n}\n.mainBox[_ngcontent-%COMP%]   .roadFactor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  border-radius: 40px 0 0 40px;\n}\n.mainBox[_ngcontent-%COMP%]   .roadFactor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 40px 40px 0;\n}\n.mainBox[_ngcontent-%COMP%]   .roadFactor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:only-child {\n  border-radius: 40px 40px 40px 40px;\n}\n.getRide[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background: #f9fafb;\n  border-radius: 4px;\n  width: calc(100% - 135px);\n}\n.getRide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.weather-forcast[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 4px;\n  padding: 21px;\n}\n.weather-forcast_middle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #616161;\n  font: 600 12px/14px ModernEra;\n}\n.weather-forcast_middle[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #001e50;\n  font: 600 15px/14px ModernEra;\n  padding-top: 5px;\n}\n.weather-forcast_last[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #616161;\n  font: 20px ModernEra !important;\n}\n.weather-forcast_last[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 12px/14px ModernEra !important;\n  color: #000000;\n}\n.weather-forcast_left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font: 17px ModernEra !important;\n  color: #001e50;\n}\n.weather-forcast_left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #001e50;\n  font: 56px ModernEra !important;\n}\n.weather-forcast_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #616161;\n}\n.weather-forcast_left[_ngcontent-%COMP%]   .down-img[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.weather-forcast[_ngcontent-%COMP%]   .col-xl[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-auto[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-12[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-11[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-10[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-9[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-8[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-7[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-6[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-5[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-3[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-2[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-xl-1[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-auto[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-11[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-10[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-9[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-7[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-5[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-lg-1[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-auto[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-11[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-10[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-9[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-md-1[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-auto[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-12[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-11[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-10[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-9[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-8[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-7[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-5[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-3[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-sm-1[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-auto[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-11[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-10[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-9[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .weather-forcast[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  padding-left: 11px !important;\n}\n.weather-forcast[_ngcontent-%COMP%]   .dark-text[_ngcontent-%COMP%] {\n  font: 14px ModernEra !important;\n  color: #001e50;\n}\n.weather-forcast[_ngcontent-%COMP%]   .light-text[_ngcontent-%COMP%] {\n  font: 12px ModernEra !important;\n  color: #616161;\n}\n.weather-forcast[_ngcontent-%COMP%]   .black-text[_ngcontent-%COMP%] {\n  font: 14px ModernEra !important;\n  color: #000;\n}\n.margin-left-space[_ngcontent-%COMP%] {\n  margin-left: 26px;\n}\n@media (max-width: 1723px) {\n  .margin-left-space[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vZGFzaGJvYXJkLWhvbWUtdjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUlFO0VBQ0UsbUJESkk7RUNLSiw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUNFLHlCQUFBO0VBQ0EsMkNBQUE7QUFGTjtBQUtJO0VBQ0UsZUFBQTtBQUhOO0FBTUk7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUFKTjtBQU1NO0VBQ0UsZUFBQTtBQUpSO0FBUUk7RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFOTjtBQVFNO0VBQ0UsZUFBQTtBQU5SO0FBVUk7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUFSTjtBQVVNO0VBQ0UsZUFBQTtBQVJSO0FBV007RUFURjtJQVVJLCtCQUFBO0lBQ0EsOEJBQUE7SUFDQSx1QkFBQTtFQVJOO0VBVU07SUFDRSxlQUFBO0VBUlI7RUFXTTtJQUNFLGVBQUE7RUFUUjtBQUNGO0FBYUk7RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFYTjtBQWFNO0VBQ0UsZUFBQTtBQVhSO0FBY007RUFURjtJQVVJLCtCQUFBO0lBQ0EsOEJBQUE7SUFDQSx1QkFBQTtFQVhOO0VBYU07SUFDRSxlQUFBO0VBWFI7RUFjTTtJQUNFLGVBQUE7RUFaUjtBQUNGO0FBZ0JJO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBZE47QUFpQkk7RUFDRSxjRHZGRztFQ3dGSCw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUQyQkosYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ3pDRjtBQWVNO0VBQ0UsNkJBQUE7RUFDQSxjRDlGVztBQ2lGbkI7QUFlUTtFQUNFLGlCQUFBO0FBYlY7QUFrQkk7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0RuSEU7RUNvSEYsZ0JBQUE7QUFoQk47QUFvQkE7RUFDRSw2QkFBQTtFQUNBLGNEckhnQjtFQ3NIaEIsa0JBQUE7QUFqQkY7QUFtQkE7RUFDRSx5QkFBQTtBQWhCRjtBQW1CQTtFQUNFLHlCQUFBO0FBaEJGO0FBbUJBO0VBQ0UsY0RySU07QUNxSFI7QUFtQkE7RUFDRSw2QkFBQTtFQUNBLGNEcklhO0VDc0liLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWhCRjtBQW1CQTtFRHJCRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDTUY7QUFnQkU7RUFDRSxtQkR0Skk7RUN1SkosbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFkSjtBQWVJO0VBQ0UsaUJBQUE7QUFiTjtBQWdCTTtFQUNFLDZCQUFBO0VBQ0EsY0Q3SlU7QUMrSWxCO0FBaUJJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWZOO0FBa0JJO0VEN0NGLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUM2Q0ksbUJBQUE7RUFDQSxtQkFBQTtBQWROO0FBZ0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFkUjtBQWtCSTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBaEJOO0FBa0JNO0VBQ0UsY0FBQTtBQWhCUjtBQXFCUTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQW5CVjtBQW9CVTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGNEdE1NO0FDb0xsQjtBQW9CVTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CRGhHTztFQ2lHUCxrQkFBQTtBQWxCWjtBQW1CWTtFQUNFLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQWpCZDtBQXFCUTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBbkJWO0FBb0JVO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0Q3Tk07QUMyTWxCO0FBb0JVO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CRHJIUztFQ3NIVCxrQkFBQTtFQUNBLGlCQUFBO0FBbEJaO0FBbUJZO0VBQ0Usa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBakJkO0FBeUJNO0VEeEhKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNrR0Y7QUF1QlE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBckJWO0FBc0JVO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLGNENVBNO0FDd09sQjtBQXFCWTtFQUNFLHNDQUFBO0FBbkJkO0FBc0JVO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXBCWjtBQXFCWTtFQUNFLFlBQUE7RUFDQSxtQkQxUUk7RUMyUUosa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBbkJkO0FBdUJRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBckJWO0FBc0JVO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNEMVJNO0FDc1FsQjtBQXNCVTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFyQlo7QUFzQlk7RUFDRSxZQUFBO0VBQ0EsbUJEdFJMO0VDdVJLLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQXBCZDtBQXdCUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXRCVjtBQXVCVTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRHRUTTtBQ2lTbEI7QUF1QlU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBdEJaO0FBdUJZO0VBQ0UsWUFBQTtFQUNBLG1CRDdUSztFQzhUTCxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFyQmQ7QUF5QlE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7QUF6QlY7QUEwQlU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0RwVk07QUM0VGxCO0FBMEJVO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQXpCWjtBQTBCWTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQXhCZDtBQTRCUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtBQTVCVjtBQTZCVTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRGxYTTtBQ3VWbEI7QUE2QlU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBNUJaO0FBNkJZO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBM0JkO0FBK0JRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBN0JWO0FBOEJVO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNEOVlNO0FDa1hsQjtBQThCVTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE1Qlo7QUE2Qlk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUEzQmQ7QUFtQ0U7RUFDRSwwQ0FBQTtBQWpDSjtBQW9DRTtFQUNFLHlDQUFBO0FBbENKO0FBcUNFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FBbkNKO0FBc0NFO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtBQXBDSjtBQXNDSTtFQUpGO0lBS0ksc0JBQUE7SUFDQSxxQkFBQTtFQW5DSjtBQUNGO0FBcUNFO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtBQW5DSjtBQXVDRTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7QUFyQ0o7QUF1Q0k7RUFKRjtJQUtJLDRCQUFBO0lBQ0EsMkJBQUE7RUFwQ0o7QUFDRjtBQXVDRTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7QUFyQ0o7QUF3Q0k7RUFMRjtJQU1JLHNCQUFBO0lBQ0EscUJBQUE7RUFyQ0o7QUFDRjtBQXVDSTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUFyQ047QUF3Q0k7RUFDRSw2QkFBQTtFQUNBLGNEM2RZO0VDNGRaLGtCQUFBO0FBdENOO0FBeUNFO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQXZDSjtBQTBDSTtFQUxGO0lBTUksc0JBQUE7SUFDQSxxQkFBQTtFQXZDSjtBQUNGO0FBeUNJO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQXZDTjtBQTBDSTtFQUNFLDZCQUFBO0VBQ0EsY0RoZlk7RUNpZlosa0JBQUE7QUF4Q047QUE0Q0U7RUFDRSw2QkFBQTtFQUNBLGNEdmZjO0VDd2ZkLG1CQUFBO0FBMUNKO0FBNkNFO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtBQTNDSjtBQTZDSTtFQUpGO0lBS0ksK0JBQUE7SUFDQSw4QkFBQTtJQUNBLHVCQUFBO0VBMUNKO0VBNENJO0lBQ0UsZUFBQTtFQTFDTjtFQTZDSTtJQUNFLGVBQUE7RUEzQ047QUFDRjtBQStDRTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7QUE3Q0o7QUErQ0k7RUFKRjtJQUtJLHNCQUFBO0lBQ0EscUJBQUE7RUE1Q0o7QUFDRjtBQThDSTtFQUNFLGVBQUE7QUE1Q047QUFnREk7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUE5Q047QUFnRE07RURqWUosb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBcktNO0VBc0tOLG1CQUFBO0VDZ1lNLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjRHhpQkE7QUM2ZlI7QUE4Q007RUFDRSw2QkFBQTtBQTVDUjtBQWtEQTtFQUNFLDZCQUFBO0VBQ0EsY0RoakJnQjtFQ2lqQmhCLG1CQUFBO0FBL0NGO0FBa0RBO0VBQ0UsbUJEempCTTtFQzBqQk4sK0NENWZVO0VDNmZWLGtCQUFBO0VBQ0Esa0JBQUE7QUEvQ0Y7QUFpREU7RUFDRSx5QkFBQTtBQS9DSjtBQWtESTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjRC9oQk07QUMrZVo7QUFtREU7RUQ1Y0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQzRjRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUEvQ0o7QUFpREk7RUFDRSxnQ0FBQTtBQS9DTjtBQXlESTtFRHZkRixhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VDdWRJLG1CQUFBO0FBckROO0FBdURNO0VBQ0UsNkJBQUE7RUFDQSxjRG5pQk87RUNvaUJQLG1CQUFBO0FBckRSO0FBd0RNO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNEcm1CSTtFQ3NtQkosZUFBQTtBQXREUjtBQXlETTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUF2RFI7QUF5RFE7RUFDRSxjRHhtQkQ7RUN5bUJDLG9DRHpsQk07QUNraUJoQjtBQTBEUTtFQUNFLGNENW1CUztFQzZtQlQsa0NEN2xCSztBQ3FpQmY7QUErREE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNENW5CYTtBQ2drQmY7QUE4REU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTVESjtBQTZESTtFQUNFLGFEbG9CUztBQ3VrQmY7QUErRUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUE1RUY7QUErRUE7RUFDRSxvQ0FBQTtBQTVFRjtBQStFQTtFQUNFLG9DQUFBO0FBNUVGO0FBK0dBO0VBQ0Usa0JBQUE7QUE1R0Y7QUFzSEE7RUFHRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJEeHRCTTtFQ3l0Qk4sa0JBQUE7QUFySEY7QUFzSEU7RUFDRSw2QkFBQTtFQUNBLGNEeHRCYztBQ29tQmxCO0FBc0hFO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNEbHVCSTtFQ211QkosZ0JBQUE7RURybEJGLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQ3FsQkUsZUFBQTtBQWxISjtBQW9IRTtFQUNFLGlCQUFBO0FBbEhKO0FBd0hFO0VBRUUsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBdkhKO0FBK0hJO0VBQ0UsY0R0dkJZO0VDdXZCWiw2QkFBQTtFRDltQkosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDa2ZGO0FBOEhJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBNUhOO0FBNkhNO0VBQ0UsZUFBQTtBQTNIUjtBQThISTtFQUNFLGNEM3dCRTtFQzR3QkYsNkJBQUE7QUE1SE47QUE2SE07RUFDRSw2QkFBQTtBQTNIUjtBQStIRTtFQUVFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtBQS9ISjtBQWdJSTtFQUNFLGVBQUE7QUE5SE47QUFpSUk7RUFDRSxjRHh4Qlk7RUN5eEJaLDZCQUFBO0VEaHBCSixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNraEJGO0FBK0hJO0VBQ0UsY0RseUJFO0VDbXlCRiw2QkFBQTtBQTdITjtBQThITTtFQUNFLDZCQUFBO0FBNUhSO0FBK0hJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBN0hOO0FBOEhNO0VBQ0UsZUFBQTtBQTVIUjtBQXNJRTtFQUNFLGtDQUFBO0VBQ0EscUJBQUE7QUFuSUo7QUFxSUU7RUFDRSw2Q0FBQTtFQUNBLGNEMXpCYztBQ3VyQmxCO0FBb0lJO0VBQ0UsaURBQUE7QUFsSU47QUFzSUk7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXBJTjtBQXVJRTtFRDFxQkEsb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBcktNO0VBc0tOLG1CQUFBO0VDeXFCRSxnQkFBQTtBQWxJSjtBQW9JSTtFQUNFLGlCQUFBO0VBQ0Esb0NBQUE7QUFsSU47QUF5SUk7RUFDRSw0QkFBQTtBQXZJTjtBQTBJSTtFQUNFLDRCQUFBO0FBeElOO0FBMklJO0VBQ0Usa0NBQUE7QUF6SU47QUE4SUE7RUFDRSxrQkFBQTtFQUNBLG1CRDUxQmdCO0VDNjFCaEIsa0JBQUE7RUFDQSx5QkFBQTtBQTNJRjtBQThJRTtFQUNFLGdCQUFBO0FBNUlKO0FBbUtBO0VBQ0UsbUJEeDRCTTtFQ3k0Qk4sa0JBQUE7RUFDQSxhQUFBO0FBaEtGO0FBbUtJO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0FBaktOO0FBb0tJO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFsS047QUF1S0k7RUFFRSxjQUFBO0VBQ0EsK0JBQUE7QUF0S047QUF5S0k7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUF2S047QUE0S0k7RUFDRSwrQkFBQTtFQUNBLGNBQUE7QUExS047QUE0S0k7RUFDRSxjQUFBO0VBQ0EsK0JBQUE7QUExS047QUE2S0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQTNLTjtBQTZLSTtFQUNFLHlCQUFBO0FBM0tOO0FBZ0xFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0VFLDZCQUFBO0VBQ0EsNkJBQUE7QUE3S0o7QUErS0U7RUFDRSwrQkFBQTtFQUNBLGNEamdDYztBQ28xQmxCO0FBK0tFO0VBQ0UsK0JBQUE7RUFDQSxjQUFBO0FBN0tKO0FBK0tFO0VBQ0UsK0JBQUE7RUFDQSxXQUFBO0FBN0tKO0FBZ0xBO0VBQ0UsaUJBQUE7QUE3S0Y7QUErS0E7RUFDRTtJQUNFLGlCQUFBO0VBNUtGO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLWhvbWUtdjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG5cblxuLmV4Y2VwdGlvbkJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcblxuICAuZXhCb3gge1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDI1JSAtIDE1cHgpO1xuICAgIG1heC13aWR0aDogY2FsYygyNSUgLSAxNXB4KTtcbiAgICBtYXJnaW46IDAgMTguNXB4IDIwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDE0cHggMTFweDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYTE0NjQ7XG4gICAgICBib3gtc2hhZG93OiAwcHggOXB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDRuICsgMCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICYuZXhCb3g1MCB7XG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDlweCk7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gOXB4KTtcbiAgICAgIG1hcmdpbjogMCAxNy41cHggMjBweCAwO1xuXG4gICAgICAmOm50aC1jaGlsZCgybiArIDApIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuZXhCb3gzMyB7XG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzJSAtIDEycHgpO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDMzLjMzJSAtIDEycHgpO1xuICAgICAgbWFyZ2luOiAwIDE3LjVweCAyMHB4IDA7XG5cbiAgICAgICY6bnRoLWNoaWxkKDNuICsgMCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5leEJveDIwIHtcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjAlIC0gMTBweCk7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMjAlIC0gMTBweCk7XG4gICAgICBtYXJnaW46IDAgMTIuNXB4IDIwcHggMDtcblxuICAgICAgJjpudGgtY2hpbGQoNW4gKyAwKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzJSAtIDEycHgpO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMzMuMzMlIC0gMTJweCk7XG4gICAgICAgIG1hcmdpbjogMCAxNy41cHggMjBweCAwO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKDNuICsgMCkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKDVuICsgMCkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuZXhCb3gxNyB7XG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDE2LjY2JSAtIDEwcHgpO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDE2LjY2JSAtIDEwcHgpO1xuICAgICAgbWFyZ2luOiAwIDExLjVweCAyMHB4IDA7XG5cbiAgICAgICY6bnRoLWNoaWxkKDZuICsgMCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygzMy4zMyUgLSAxMnB4KTtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDMzLjMzJSAtIDEycHgpO1xuICAgICAgICBtYXJnaW46IDAgMTcuNXB4IDIwcHggMDtcblxuICAgICAgICAmOm50aC1jaGlsZCgzbiArIDApIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1jaGlsZCg2biArIDApIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmV4Qm94MTAwIHtcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSk7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgfVxuXG4gICAgLnZhbHVlQm94IHtcbiAgICAgIGNvbG9yOiAkZGFuZ2VyO1xuICAgICAgZm9udDogNjAwIDI0cHgvMjRweCBNb2Rlcm5FcmE7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIEBpbmNsdWRlIGZsZXgtanVzdGlmeTtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQ6IDUwMCAxNHB4LzE3cHggTW9kZXJuRXJhO1xuICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9BbGVydHM7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5leHBOYW1lIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQ6IDYwMCAxNHB4LzE3cHggTW9kZXJuRXJhO1xuICAgICAgY29sb3I6ICRzYmx1ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4uZ3JhcGhUaXRsZSB7XG4gIGZvbnQ6IDcwMCAxNHB4LzE5cHggTW9kZXJuRXJhO1xuICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyZWVuIHtcbiAgY29sb3I6ICRTZWNvbmRhcnlfQWxlcnRzICFpbXBvcnRhbnQ7XG59XG5cbi5yZWQge1xuICBjb2xvcjogJGRhbmdlciAhaW1wb3J0YW50O1xufVxuXG4udGV4dFdoaXRlIHtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuLnNob3c1IHtcbiAgZm9udDogNjAwIDE2cHgvMjJweCBNb2Rlcm5FcmE7XG4gIGNvbG9yOiAkUHJpbWFyeV9CbHVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRQcmltYXJ5X0JsdWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDY0ZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5kYXNoR3JhcGhCb3gge1xuICBAaW5jbHVkZSBmbGV4LWp1c3RpZnk7XG5cbiAgLmJveEJhY2sge1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMThweCAyMHB4IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJi5maXhIZWlnaHQge1xuICAgICAgbWluLWhlaWdodDogMzMwcHg7XG4gICAgfVxuICAgIC52ZWhpY2xlSW5mbyB7XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQ6IDUwMCAxNHB4LzE3cHggTW9kZXJuRXJhO1xuICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgIH1cbiAgICB9XG4gICAgLnZpZXdSaWdodCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTVweDtcbiAgICAgIGJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5iYXJDaGFydEhlYWQge1xuICAgICAgQGluY2x1ZGUgZmxleC1qdXN0aWZ5O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAgIC5idG5FeHBvcnQge1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0YzZmZmY7XG4gICAgICAgIGJvcmRlcjogIzRjNmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZXhiaXhUaXRsZSB7XG4gICAgICBmb250OiA2MDAgMTRweC8xN3B4IE1vZGVybkVyYTtcbiAgICAgIGNvbG9yOiAjZmExNDY0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgJi5ncmVlblRleHQge1xuICAgICAgICBjb2xvcjogIzAwY2JhMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmdyYXBoVGFiIHtcbiAgICAgICZfX2NoZWNrYm94IHtcbiAgICAgICAgJl9fc2FmZVNjb3JlIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQ6IDcwMCAxMHB4LzEycHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrYm94LWR5bmFtaWMtc2NvcmUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcl9saWdodF9ibHVlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgJi5hY3RpdmVTYWZlU2NvcmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0NoZWNrLnN2Z1wiKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19vdGhlclNjb3JlIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQ6IDcwMCAxMHB4LzEycHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrYm94LWR5bmFtaWMtc2Vjb25kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yX2dyYXBoX3ZvaWxldDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgJi5hY3RpdmVPdGhlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQ2hlY2suc3ZnXCIpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmdyYXBoVGFiIHtcbiAgICAgICZfX2NoZWNrYm94IHtcbiAgICAgICAgQGluY2x1ZGUgZmxleC1qdXN0aWZ5O1xuXG4gICAgICAgICZfX3NhZmVTY29yZVNlY29uZCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250OiA4MDAgMTFweC8xMnB4IE1vZGVybkVyYV9FeHRyYWJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgICAgICYuc2FmYXJpe1xuICAgICAgICAgICAgICBmb250OiA3MDAgMTFweC8xMnB4IE1vZGVybkVyYV9zZW1pQm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrYm94LWR5bmFtaWMge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAmLmFjdGl2ZVNhZmVTY29yZSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9DaGVjay5zdmdcIik7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJl9fc3BlZWRpbmcge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udDogNzAwIDEwcHgvMTJweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrYm94LWR5bmFtaWMtc2Vjb25kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRvcmFuZ2U7XG4gICAgICAgICAgICAmLmFjdGl2ZU90aGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0NoZWNrLnN2Z1wiKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19pZGlsaW5nIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQ6IDcwMCAxMHB4LzEycHggTW9kZXJuRXJhO1xuICAgICAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGVja2JveC1keW5hbWljLXNlY29uZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRTZWNvbmRhcnlfQWxlcnRzO1xuICAgICAgICAgICAgJi5hY3RpdmVPdGhlciB7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJFNlY29uZGFyeV9BbGVydHM7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQ2hlY2suc3ZnXCIpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICZfX2FjYyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udDogNzAwIDEwcHgvMTJweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrYm94LWR5bmFtaWMtc2Vjb25kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZGJmZmY7XG4gICAgICAgICAgICAmLmFjdGl2ZU90aGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkYmZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0NoZWNrLnN2Z1wiKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19icmFraW5nIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICBmb250OiA3MDAgMTBweC8xMnB4IE1vZGVybkVyYTtcbiAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hlY2tib3gtZHluYW1pYy1zZWNvbmQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNzA3MDtcbiAgICAgICAgICAgICYuYWN0aXZlT3RoZXIge1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRjcwNzA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQ2hlY2suc3ZnXCIpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICZfX2Nvcm5lcmluZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250OiA3MDAgMTBweC8xMnB4IE1vZGVybkVyYTtcbiAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hlY2tib3gtZHluYW1pYy1zZWNvbmQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZFQTZDO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAmLmFjdGl2ZU90aGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZFQTZDO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0NoZWNrLnN2Z1wiKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5iYWNrRGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuNCk7XG4gIH1cblxuICAuYmFja0dyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAyMDMgMTYwIC8gMTUlKTtcbiAgfVxuXG4gIC5iYWNrcG9sYXJHcmVlbiB7XG4gICAgYm9yZGVyLXJhZGl1czogOS43OTlweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgLmxlZnQ1MCB7XG4gICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUpO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUpO1xuICAgIH1cbiAgfVxuICAubGVmdDUwLWJveHtcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgfVxuICBcblxuICAubGVmdDgzIHtcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDgzJSAtIDEwcHgpO1xuICAgIG1heC13aWR0aDogY2FsYyg4MyUgLSAxMHB4KTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNjclIC0gMTBweCk7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoNjclIC0gMTBweCk7XG4gICAgfVxuICB9XG5cbiAgLmxlZnQ2NyB7XG4gICAgZmxleC1iYXNpczogY2FsYyg2NyUgLSAxMHB4KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoNjclIC0gMTBweCk7XG5cbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlKTtcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlKTtcbiAgICB9XG5cbiAgICBjYW52YXMge1xuICAgICAgd2lkb3dzOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDI4MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmdyYXBoVGl0bGUge1xuICAgICAgZm9udDogNjAwIDE1cHgvMTlweCBNb2Rlcm5FcmE7XG4gICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgLmxlZnQxMDAge1xuICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSk7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUpO1xuXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSk7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgfVxuXG4gICAgY2FudmFzIHtcbiAgICAgIHdpZG93czogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5ncmFwaFRpdGxlIHtcbiAgICAgIGZvbnQ6IDYwMCAxNXB4LzE5cHggTW9kZXJuRXJhO1xuICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmV4Y2VwdGlvblRpdGxlIHtcbiAgICBmb250OiA2MDAgMTZweC8yNHB4IE1vZGVybkVyYTtcbiAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG5cbiAgLmxlZnQxNyB7XG4gICAgZmxleC1iYXNpczogY2FsYygxNyUgLSAxMHB4KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTclIC0gMTBweCk7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzJSAtIDEycHgpO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDMzLjMzJSAtIDEycHgpO1xuICAgICAgbWFyZ2luOiAwIDE3LjVweCAyMHB4IDA7XG5cbiAgICAgICY6bnRoLWNoaWxkKDNuICsgMCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWNoaWxkKDZuICsgMCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJpZ2h0MzMge1xuICAgIGZsZXgtYmFzaXM6IGNhbGMoMzMlIC0gMTBweCk7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDMzJSAtIDEwcHgpO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlKTtcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlKTtcbiAgICB9XG5cbiAgICAucG9sYXJFeGNlcHRpb24ge1xuICAgICAgcGFkZGluZzogMThweCAwO1xuICAgIH1cblxuICAgIC8vZHJpdmVuIHRvbyBmYXN0XG4gICAgLmZpcnN0aGFsZGYge1xuICAgICAgbWFyZ2luOiAxMHB4IDAgMjVweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgIC5tc2cge1xuICAgICAgICBAaW5jbHVkZSBtc2c7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxNHB4O1xuICAgICAgICBmb250OiAxNHB4LzI0cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIGg0IHtcbiAgICAgICAgZm9udDogNjAwIDE0cHgvMjRweCBNb2Rlcm5FcmE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zdWRkZW5TY3JvcmVUaXRsZSB7XG4gIGZvbnQ6IDYwMCAxNHB4LzE3cHggTW9kZXJuRXJhO1xuICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN1ZGRlblNjcm9yZUJveCB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogJGJveHNoYWRvdztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgJi5hY3RpdmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRQcmltYXJ5X0JsdWU7XG4gIH1cbiAgLmdldFJpZGUge1xuICAgIHAge1xuICAgICAgZm9udDogNjAwIDEycHgvMTRweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIGNvbG9yOiAkYmxhY2tEYXJrO1xuICAgIH1cbiAgfVxuICAuc3VkZGVuQm94IHtcbiAgICBAaW5jbHVkZSBmbGV4LWp1c3RpZnk7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHggMjZweCA2cHggMTRweDtcblxuICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgfVxuXG4gICAgLy8gLmdldFJpZGVkYXNoIHAge1xuICAgIC8vICAgZm9udDogNjAwIDEycHgvMTRweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICAvLyAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAvLyAgIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xuICAgIC8vICAgY29sb3I6ICRibGFja0Rhcms7XG4gICAgLy8gfVxuXG4gICAgLnN1ZGRlbkxlZnRSaWdodCB7XG4gICAgICBAaW5jbHVkZSBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLmV4Y2VwdGlvbk5hbWUge1xuICAgICAgICBmb250OiA2MDAgMTBweC8xOHB4IE1vZGVybkVyYTtcbiAgICAgICAgY29sb3I6ICRyZWRFeGNlcHRpb247XG4gICAgICAgIG1hcmdpbjogMCA1cHggMCA2cHg7XG4gICAgICB9XG5cbiAgICAgIC5wYXN0U2NvcmVUaXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQ6IDYwMCAxMHB4LzE4cHggTW9kZXJuRXJhO1xuICAgICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcbiAgICAgICAgbWFyZ2luOiAwIDZweCAwO1xuICAgICAgfVxuXG4gICAgICAuc2FmZVNjb3JlIHtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAgICAgICAmLmRhbmdlcmJveCB7XG4gICAgICAgICAgY29sb3I6ICRkYW5nZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogJGRhbmdlckJveEJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmLnN1Y2Nlc3Nib3gge1xuICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X0FsZXJ0cztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW5Cb3hCYWNrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi52aXdsQWxsIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBmb250OiA2MDAgMTNweC8yMnB4IE1vZGVybkVyYTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICRQcmltYXJ5X0JsdWU7XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAkUHJpbWFyeV9CbHVlO1xuICAgIH1cbiAgfVxufVxuXG4vLyAuZHJpdmVyVGFibGUge1xuLy8gICAgIC52aWV3UHJvZmlsZSB7XG4vLyAgICAgICAgIHBhZGRpbmc6IDZweCAxOHB4O1xuLy8gICAgICAgICBjb2xvcjogJHdoaXRlO1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkZGFuZ2VyO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuLy8gICAgIH1cblxuLy8gICAgIC5nZXRSaWRlIHAge1xuLy8gICAgICAgICBmb250OiA2MDAgMTBweC8xNHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4vLyAgICAgfVxuXG4vLyB9XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNnB4IDI2cHg7XG59XG5cbjo6bmctZGVlcCAuZHJpdmVGYXN0IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzA3MCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmF2Z1NwZWVkIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2JhMCAhaW1wb3J0YW50O1xufVxuXG4vLyB0ci5tYXQtaGVhZGVyLXJvdyB7XG4vLyAgICAgaGVpZ2h0OiAzNHB4O1xuLy8gICAgIGJhY2tncm91bmQ6ICMwMDY0RkY7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDhweDtcbi8vICAgICBib3JkZXItYm90dG9tOiAwLjZweCBzb2xpZCAjMDA2NEZGICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIG1hdC1mb3JtLWZpZWxkIHtcbi8vICAgICBsZXR0ZXItc3BhY2luZzogLjIycHg7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyB9XG5cbi8vIC5tYXQtdGFibGUge1xuLy8gICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4vLyAgICAgYm9yZGVyLXNwYWNpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIDpob3N0IHtcbi8vICAgICA6Om5nLWRlZXAge1xuLy8gICAgICAgICAuYm9va2luZy10YWJsZSB7XG5cbi8vICAgICAgICAgICAgIHRyLm1hdC1yb3csXG4vLyAgICAgICAgICAgICB0ci5tYXQtZm9vdGVyLXJvdyB7XG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuLy8gICAgICAgICAgICAgICAgIGJvcmRlcjogMC42cHggc29saWQgI0UwRTNFNztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vLyB0YWJsZSB0aDpmaXJzdC1jaGlsZCB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMjBweDtcbi8vIH1cblxuLy8gdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbi8vIH1cbi5hdHRlbnRpb24ge1xuICAvLyBtYXJnaW4tdG9wOiAyNHB4O1xuICAvLyBib3JkZXI6IDFweCBkYXNoZWQgJGJsYWNrRGFyaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuYm9yZGVyLXRleHQge1xuICAgIGZvbnQ6IDcwMCAxOHB4LzE2cHggTW9kZXJuRXJhO1xuICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICB9XG4gIGg0IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGZvbnQ6IDcwMCAxNHB4LzE3cHggTW9kZXJuRXJhO1xuICAgIGNvbG9yOiAkc2JsdWU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBAaW5jbHVkZSBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAvLyAuYWN0aXZlIHtcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZmExNDY0O1xuICAvLyAgIGJveC1zaGFkb3c6IDBweCA5cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC8vIH1cbiAgLmdvaW5nR29vZCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDMsIDE2MCwgMC4xNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAvLyB3aWR0aDogMTAwJTtcblxuICAgIC8vIC5hY3RpdmUge1xuICAgIC8vICAgYm9yZGVyOiAxcHggc29saWQgIzAwY2JhMDtcbiAgICAvLyAgIGJveC1zaGFkb3c6IDBweCA5cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgLy8gfVxuXG4gICAgaDIge1xuICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICBmb250OiA2MDAgMTRweC8xN3B4IE1vZGVybkVyYTtcbiAgICAgIEBpbmNsdWRlIGVsbGlwc2lzO1xuICAgIH1cblxuICAgIC5kYXRhQm94ZXMge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgcGFkZGluZzogMThweCAxM3B4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg1NCwgMjUsIDEzNSwgMC4yKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAmOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAuZGF0YWJveGVzY29sb3JzIHtcbiAgICAgIGNvbG9yOiAkc2JsdWU7XG4gICAgICBmb250OiA3MDAgMjRweC8yNHB4IE1vZGVybkVyYTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250OiA0MDAgMTRweC8xN3B4IE1vZGVybkVyYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm5lZWRBdHRlbnRpb24ge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAmLmNoZWNrIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgaDIge1xuICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICBmb250OiA2MDAgMTRweC8xN3B4IE1vZGVybkVyYTtcbiAgICAgIEBpbmNsdWRlIGVsbGlwc2lzO1xuICAgIH1cbiAgICAuZGF0YWJveGVzY29sb3JzIHtcbiAgICAgIGNvbG9yOiAkc2JsdWU7XG4gICAgICBmb250OiA2MDAgMjRweC8yNHB4IE1vZGVybkVyYTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250OiA1MDAgMTRweC8xN3B4IE1vZGVybkVyYTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmRhdGFCb3hlcyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxOHB4IDEzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCAyNSwgMTM1LCAwLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tYWluQm94IHtcbiAgLy8gcGFkZGluZzogMTlweCAyNHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gICYubWFpbkJveF9jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAudHlwZVRpdGxlIHtcbiAgICBmb250OiA3MDAgMTRweC8yNHB4IE1vZGVybkVyYV9Cb2xkICAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICYuc2FmYXJpe1xuICAgICAgZm9udDogNjAwIDE0cHgvMjRweCBNb2Rlcm5FcmFfc2VtaUJvbGQgICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5yb2FkRmFjdG9yIHtcbiAgICBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBmb250OiA2MDAgMTNweC8xNnB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDFlNTA7XG4gICAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICAgIH1cbiAgfVxuICAubXNnIHtcbiAgICBAaW5jbHVkZSBtc2c7XG4gICAgcGFkZGluZzogM3B4IDhweDtcblxuICAgICYuZXh0cmFQYWRkaW5nIHtcbiAgICAgIHBhZGRpbmc6IDRweCAxNHB4O1xuICAgICAgZm9udDogMTRweC8yNHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC8vICYucm9hZERpc3RyaWJ1dGlvbiB7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICAucm9hZEZhY3RvciB7XG4gICAgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHggMCAwIDQwcHg7XG4gICAgfVxuXG4gICAgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCA0MHB4IDQwcHggMDtcbiAgICB9XG5cbiAgICBkaXY6b25seS1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggNDBweCA0MHB4O1xuICAgIH1cbiAgfVxufVxuXG4uZ2V0UmlkZSB7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYmFja2dyb3VuZDogJGxpZ2h0V2hpdGVjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTM1cHgpO1xuICAvLyAtd2Via2l0LXdpZHRoOmNhbGMoMTAwJSAtIDEzNXB4KTtcbiAgLy8gLW1vei13aWR0aDpjYWxjKDEwMCUgLSAxMjhweCk7XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuLy8gLmdldFJpZGVkYXNoe1xuLy8gICBwIHtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgZm9udDogNjAwIDEycHgvMTRweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMnB4O1xuLy8gICAgIGNvbG9yOiAkYmxhY2tEYXJrO1xuLy8gICB9XG4vLyB9XG5cbi8vIDo6bmctZGVlcCAubWF0LXRvb2x0aXAge1xuLy8gICAvKiB5b3VyIG93biBjdXN0b20gc3R5bGVzIGhlcmUgKi9cbi8vICAgLyogZS5nLiAqL1xuLy8gICBjb2xvcjogeWVsbG93O1xuLy8gfVxuLy8gLnJlZC10b29sdGlwe1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbi8vIH1cblxuLndlYXRoZXItZm9yY2FzdCB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAyMXB4O1xuXG4gICZfbWlkZGxlIHtcbiAgICAudGl0bGUge1xuICAgICAgY29sb3I6ICM2MTYxNjE7XG4gICAgICBmb250OiA2MDAgMTJweC8xNHB4IE1vZGVybkVyYTtcbiAgICB9XG5cbiAgICAudGltZSB7XG4gICAgICBjb2xvcjogIzAwMWU1MDtcbiAgICAgIGZvbnQ6IDYwMCAxNXB4LzE0cHggTW9kZXJuRXJhO1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4gIH1cblxuICAmX2xhc3Qge1xuICAgIGgzIHtcbiAgICAgIC8vIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjNjE2MTYxO1xuICAgICAgZm9udDogMjBweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQ6IDEycHgvMTRweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbiAgfVxuXG4gICZfbGVmdCB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQ6IDE3cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzAwMWU1MDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzAwMWU1MDtcbiAgICAgIGZvbnQ6IDU2cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzYxNjE2MTtcbiAgICB9XG4gICAgLmRvd24taW1nIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuICB9XG59XG4ud2VhdGhlci1mb3JjYXN0IHtcbiAgLmNvbC14bCxcbiAgLmNvbC14bC1hdXRvLFxuICAuY29sLXhsLTEyLFxuICAuY29sLXhsLTExLFxuICAuY29sLXhsLTEwLFxuICAuY29sLXhsLTksXG4gIC5jb2wteGwtOCxcbiAgLmNvbC14bC03LFxuICAuY29sLXhsLTYsXG4gIC5jb2wteGwtNSxcbiAgLmNvbC14bC00LFxuICAuY29sLXhsLTMsXG4gIC5jb2wteGwtMixcbiAgLmNvbC14bC0xLFxuICAuY29sLWxnLFxuICAuY29sLWxnLWF1dG8sXG4gIC5jb2wtbGctMTIsXG4gIC5jb2wtbGctMTEsXG4gIC5jb2wtbGctMTAsXG4gIC5jb2wtbGctOSxcbiAgLmNvbC1sZy04LFxuICAuY29sLWxnLTcsXG4gIC5jb2wtbGctNixcbiAgLmNvbC1sZy01LFxuICAuY29sLWxnLTQsXG4gIC5jb2wtbGctMyxcbiAgLmNvbC1sZy0yLFxuICAuY29sLWxnLTEsXG4gIC5jb2wtbWQsXG4gIC5jb2wtbWQtYXV0byxcbiAgLmNvbC1tZC0xMixcbiAgLmNvbC1tZC0xMSxcbiAgLmNvbC1tZC0xMCxcbiAgLmNvbC1tZC05LFxuICAuY29sLW1kLTgsXG4gIC5jb2wtbWQtNyxcbiAgLmNvbC1tZC02LFxuICAuY29sLW1kLTUsXG4gIC5jb2wtbWQtNCxcbiAgLmNvbC1tZC0zLFxuICAuY29sLW1kLTIsXG4gIC5jb2wtbWQtMSxcbiAgLmNvbC1zbSxcbiAgLmNvbC1zbS1hdXRvLFxuICAuY29sLXNtLTEyLFxuICAuY29sLXNtLTExLFxuICAuY29sLXNtLTEwLFxuICAuY29sLXNtLTksXG4gIC5jb2wtc20tOCxcbiAgLmNvbC1zbS03LFxuICAuY29sLXNtLTYsXG4gIC5jb2wtc20tNSxcbiAgLmNvbC1zbS00LFxuICAuY29sLXNtLTMsXG4gIC5jb2wtc20tMixcbiAgLmNvbC1zbS0xLFxuICAuY29sLFxuICAuY29sLWF1dG8sXG4gIC5jb2wtMTIsXG4gIC5jb2wtMTEsXG4gIC5jb2wtMTAsXG4gIC5jb2wtOSxcbiAgLmNvbC04LFxuICAuY29sLTcsXG4gIC5jb2wtNixcbiAgLmNvbC01LFxuICAuY29sLTQsXG4gIC5jb2wtMyxcbiAgLmNvbC0yLFxuICAuY29sLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMTFweCAhaW1wb3J0YW50O1xuICB9XG4gIC5kYXJrLXRleHQge1xuICAgIGZvbnQ6IDE0cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gIH1cbiAgLmxpZ2h0LXRleHQge1xuICAgIGZvbnQ6IDEycHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM2MTYxNjE7XG4gIH1cbiAgLmJsYWNrLXRleHQge1xuICAgIGZvbnQ6IDE0cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbn1cbi5tYXJnaW4tbGVmdC1zcGFjZXtcbiAgbWFyZ2luLWxlZnQ6IDI2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDoxNzIzcHgpe1xuICAubWFyZ2luLWxlZnQtc3BhY2V7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn0iXX0= */";
class DashboardHomeV2Component {
    constructor(route, elementRef, service, dialog, localService, translate) {
        this.route = route;
        this.elementRef = elementRef;
        this.service = service;
        this.dialog = dialog;
        this.localService = localService;
        this.translate = translate;
        this.showSpeedingBox = true;
        this.showIdilingBox = false;
        this.showAccelerationBox = false;
        this.showBrakingBox = false;
        this.showCorneringBox = false;
        this.isTripHistoryLoading = false;
        this.tableView = "table";
        this.noRoadTypeData = true;
        this.isCollapsed = true;
        //checkoboxes
        this.safeScoreCheckbox = true;
        this.otherCheckbox = true;
        this.speedingCheckbox = false;
        this.idilingCheckbox = false;
        this.accCheckbox = false;
        this.brakingCheckbox = false;
        this.corneringCheckbox = false;
        this.removeArr = [];
        this.safeScoreCheckboxsecond = true;
        this.otherCheckboxsecond = true;
        this.data = [{}, {}, {}];
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_1__();
        //table
        this.displayedColumns = ["item", "score", "cost"];
        this.transactions = [
            { item: "Drivers name", cost: "View profile", score: "-10" },
            { item: "Drivers name", cost: "View profile", score: "-10" },
            { item: "Drivers name", cost: "View profile", score: "-10" },
            { item: "Drivers name", cost: "View profile", score: "-10" },
            { item: "Drivers name", cost: "View profile", score: "-10" },
        ];
        this.items = [
            { name: "10:00", imagePath: "assets/images/Drizzle.svg" },
            { name: "11:00", imagePath: "assets/images/Drizzle.svg" },
            { name: "12:00", imagePath: "assets/images/Drizzle.svg" },
            { name: "13:00", imagePath: "assets/images/Drizzle.svg" },
            { name: "14:00", imagePath: "assets/images/sun.svg" },
            { name: "15:00", imagePath: "assets/images/sun.svg" },
            { name: "16:00", imagePath: "assets/images/sun.svg" },
            { name: "17:00", imagePath: "assets/images/sun.svg" },
        ];
        this.selected = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, "days").set("hours", 0).set("minutes", 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().set("hours", 23).set("minutes", 59),
        };
        this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, "days").set("hours", 0).set("minutes", 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().set("hours", 23).set("minutes", 59),
        };
        this.isFuelListLoading = false;
        // dashboard new variables
        this.RULE_ID = {
            RulePostedSpeedingId: "SpeedViolation",
            RulePostedBreakingId: "BreakingViolation",
            RulePostedAccelerationId: "AccelerationViolation",
            RulePostedIdlingId: "IdlingViolation",
            RulePostedCorneringId: "CorneringViolation",
        };
        this.title = "Safe score";
        this.chartData = {
            date: [],
            speed: [],
            acc: [],
            braking: [],
            idiling: [],
            cornering: [],
            safe_score: [],
            tsp_speed: [],
            tsp_acc: [],
            tsp_braking: [],
            tsp_idiling: [],
            tsp_cornering: [],
            tsp_safe_score: [],
        };
        this.dashBoardData = {};
        this.boxVal = 1;
        this.leftSide = false;
        this.rightSide = false;
        this.leftCount = 0;
        this.leftWidth = 0;
        this.rightWidth = 0;
        this.fuelChart = { licensePlate: [], mileage: [] };
        this.polarObject = {
            speed: 0,
            idling: 0,
            acceleration: 0,
            breaking: 0,
            cornering: 0,
        };
        this.exceptionObject = {
            speed: "Speeding",
            idling: "Idiling",
            acceleration: "Harsh Acceleration",
            cornering: "Harsh Cornering",
            breaking: "Harsh Braking",
        };
        this.stackBar = [
            { value: 0, class: "ridOfmax1", speed: 0, color: "" },
            { value: 0, class: "busyRoad1", speed: 0, color: "" },
            { value: 0, class: "quietRoad1", speed: 0, color: "" },
            { value: 0, class: "buildUp1", speed: 0, color: "" },
            { value: 0, class: "ridOfHighSpeed1", speed: 0, color: "" },
        ];
        this.colorBox = ["#ed502e", "#604EFF", "#F0CE00", "#4dbfff", "#2A1E91"];
        this.showStackBar = [];
        this.filterCalledDashboard = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.isLoadingshimmer = false;
        this.customeRange = "Custom";
        this.setDate = "Set Date";
        this.cancelDate = "Cancel";
        this.dayNightScore = { dayScore: [], nightScore: [], date: [] };
        this.speed_distribution = { label: [], data: [] };
        this.breaking_distribution = { label: [], data: [] };
        this.acceleration_distribution = { label: [], data: [] };
        this.cornering_distribution = { label: [], data: [] };
        this.worstScore = [];
        this.bestScore = [];
        this.probablyCrashed = [];
        this.mostTravelled = [];
        this.totalCount = 0;
        this.roadTypeLabel = [];
        this.roadTypeData = [];
        this.attentionValue = 5;
        this.naValue = ["1001.0", 1001, "1001.0"];
        this.exceptionData = [];
        this.exceptionLabel = [];
        this.totalException = 0;
        this.miniChartObj = {};
        this.speedingDriver = [];
        this.idlingingDriver = [];
        chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"].register(...chart_js__WEBPACK_IMPORTED_MODULE_3__["registerables"]);
        this.browsername = this.service.detectBrowserName();
        // console.log(this.browsername);
    }
    ngOnInit() {
        this.filterCalledDashboard = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.localService.getFilter().subscribe((val) => {
            if (val && this.route.url == src_app_config_route_config__WEBPACK_IMPORTED_MODULE_6__["RouteConfig"].dashboard.url) {
                this.filterCalledDashboard.next(true);
            }
        });
        this.filterCalledDashboard.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500)).subscribe(value => {
            if (value) {
                this.selectedOrgID = this.localService.getItem("selectedOrgs");
                if (this.selectedOrgID) {
                    this.selectedOrgID = JSON.parse(this.selectedOrgID);
                }
                this.isTripHistoryLoading = true;
                this.resetToLastState();
                this.filterApply();
            }
        });
        this.localService.getdashboardData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500)).subscribe((val) => {
            if (val && Object.keys(val).length && this.route.url == src_app_config_route_config__WEBPACK_IMPORTED_MODULE_6__["RouteConfig"].dashboard.url) {
                this.selectedOrgID = this.localService.getItem("selectedOrgs");
                if (this.selectedOrgID) {
                    this.selectedOrgID = JSON.parse(this.selectedOrgID);
                }
                if ('error' in val) {
                    this.isTripHistoryLoading = true;
                    this.rightSide = false;
                    this.leftSide = true;
                    this.leftWidth = 100;
                    this.leftCount = 5;
                    this.dashBoardData.speed_score = 0;
                    this.dashBoardData.idling_score = 0;
                    this.dashBoardData.acceleration_score = 0;
                    this.dashBoardData.breaking_score = 0;
                    this.dashBoardData.cornering_score = 0;
                    this.isTripHistoryLoading = false;
                    this.getChartData();
                }
                else {
                    this.resetToLastState();
                    this.isTripHistoryLoading = true;
                    this.leftWidth = 0;
                    this.rightWidth = 0;
                    this.leftCount = 0;
                    this.leftSide = false;
                    this.rightSide = false;
                    this.dashBoardData = val;
                    this.calcWidth();
                    this.getChartData();
                }
            }
        });
        this.localService.getLang().subscribe((val) => {
            if (this.chartData && this.chartData.date) {
                setTimeout(() => {
                    this.lineChart(this.chartData.date);
                    this.lineChartScore(this.dayNightScore.date, this.dayNightScore.dayScore, this.dayNightScore.nightScore, "Day Night");
                }, 200);
            }
        });
        this.selectedOrgID = this.localService.getItem("selectedOrgs");
        if (this.selectedOrgID) {
            this.selectedOrgID = JSON.parse(this.selectedOrgID);
        }
        if (this.selectedOrgID) {
            this.resetToLastState();
            this.updatePageData();
        }
        // this.localService.watchOrgData().subscribe((resp) => {
        //   if (resp && this.route.url == RouteConfig.dashboard.url) {
        //     // console.log('')
        //     let orgId: any = this.localService.getItem("selectedOrgs");
        //     if (orgId) {
        //       orgId = JSON.parse(orgId);
        //     }
        //     let isEqual = true;
        //     if (
        //       this.selectedOrgID &&
        //       this.selectedOrgID.length &&
        //       orgId &&
        //       orgId.length
        //     ) {
        //       isEqual =
        //         orgId.length === this.selectedOrgID.length &&
        //         orgId.every((val) => this.selectedOrgID.includes(val));
        //     } else {
        //       isEqual = false;
        //     }
        //     if (!isEqual) {
        //       this.selectedOrgID = [...orgId];
        //       this.resetToLastState();
        //       this.updatePageData();
        //     }
        //   }
        // });
    }
    resetToLastState() {
        let date = this.localService.getItem("dateRange");
        if (date) {
            date = JSON.parse(date);
            this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.startDate),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.endDate),
            };
            this.selectedShow = this.selected;
        }
        else {
            this.selectedShow = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__()
                    .subtract(1, "month")
                    .startOf("month")
                    .set("hours", 0)
                    .set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__()
                    .subtract(1, "month")
                    .endOf("month")
                    .set("hours", 23)
                    .set("minutes", 59),
            };
            this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__()
                    .subtract(1, "month")
                    .startOf("month")
                    .set("hours", 0)
                    .set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__()
                    .subtract(1, "month")
                    .endOf("month")
                    .set("hours", 23)
                    .set("minutes", 59),
            };
        }
    }
    filterApply() {
        this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
        this.selected = this.selectedShow;
        this.updatePageData();
    }
    updatePageData() {
        this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
        this.polardata();
        this.getRoadTypeDistribution();
        // this.getFuelListing();
        this.getDayNightScore();
        // this.getDriverList(this.RULE_ID.RulePostedSpeedingId);
        // this.getDriverList(this.RULE_ID.RulePostedIdlingId);
        // this.worstDriver();
        this.getExceptionOnRule();
        this.getVehicleAnalytics();
    }
    getDayNightScore() {
        this.dayNightScore = { dayScore: [], nightScore: [], date: [] };
        let querryParams = this.createQuerryparams();
        this.service
            .get(`dashboard/day-night-score?${querryParams}&is_day_trip=[true,false]`)
            .pipe()
            .subscribe((res) => {
            res.data.forEach((element) => {
                if (element.is_day_trip) {
                    this.dayNightScore.date.push(moment__WEBPACK_IMPORTED_MODULE_1__["utc"](element.start_date_time).format("DD/MM"));
                    if (!this.naValue.includes(element === null || element === void 0 ? void 0 : element.safe_score)) {
                        this.dayNightScore.dayScore.push(element === null || element === void 0 ? void 0 : element.safe_score);
                    }
                    else {
                        this.dayNightScore.dayScore.push(null);
                    }
                }
                else {
                    if (!this.naValue.includes(element === null || element === void 0 ? void 0 : element.safe_score)) {
                        this.dayNightScore.nightScore.push(element === null || element === void 0 ? void 0 : element.safe_score);
                    }
                    else {
                        this.dayNightScore.nightScore.push(null);
                    }
                }
            });
            this.dayNightScore.date.reverse();
            this.dayNightScore.dayScore.reverse();
            this.dayNightScore.nightScore.reverse();
            this.lineChartScore(this.dayNightScore.date, this.dayNightScore.dayScore, this.dayNightScore.nightScore, "Day Night");
        }, (err) => { });
    }
    getExceptionOnRule() {
        this.speed_distribution = { label: [], data: [] };
        this.breaking_distribution = { label: [], data: [] };
        this.acceleration_distribution = { label: [], data: [] };
        this.cornering_distribution = { label: [], data: [] };
        let querryParams = this.createQuerryparams();
        this.service
            .get(`dashboard/event-type-distribution?${querryParams}`)
            .pipe()
            .subscribe((res) => {
            if (res && res.data) {
                let response = res.data;
                response["speed_distribution"].forEach((element) => {
                    if (element.contribution_value > 0) {
                        this.speed_distribution.label.push(element.road_factor_name);
                        this.speed_distribution.data.push(element.contribution_value);
                    }
                });
                response["breaking_distribution"].forEach((element) => {
                    if (element.contribution_value > 0) {
                        this.breaking_distribution.label.push(element.road_factor_name);
                        this.breaking_distribution.data.push(element.contribution_value);
                    }
                });
                response["cornering_distribution"].forEach((element) => {
                    if (element.contribution_value > 0) {
                        this.cornering_distribution.label.push(element.road_factor_name);
                        this.cornering_distribution.data.push(element.contribution_value);
                    }
                });
                response["acceleration_distribution"].forEach((element) => {
                    if (element.contribution_value > 0) {
                        this.acceleration_distribution.label.push(element.road_factor_name);
                        this.acceleration_distribution.data.push(element.contribution_value);
                    }
                });
            }
        }, (err) => {
            this.speed_distribution = { label: [], data: [] };
            this.breaking_distribution = { label: [], data: [] };
            this.acceleration_distribution = { label: [], data: [] };
            this.cornering_distribution = { label: [], data: [] };
        });
    }
    getVehicleAnalytics() {
        this.worstScore = [];
        this.bestScore = [];
        this.probablyCrashed = [];
        this.mostTravelled = [];
        let querryParams = this.createQuerryparams();
        this.service
            .get(`zego/vehicle/top-listing?${querryParams}`)
            .pipe()
            .subscribe((res) => {
            if (res && res.data) {
                this.bestScore = res.data.bestScore;
                this.worstScore = res.data.worstScore;
                this.probablyCrashed = res.data.probablyCrashed;
                this.mostTravelled = res.data.mostTravelled;
            }
        }, (err) => {
            this.worstScore = [];
            this.bestScore = [];
            this.probablyCrashed = [];
            this.mostTravelled = [];
        });
    }
    getFuelListing() {
        this.isFuelListLoading = true;
        this.fuelChart = { licensePlate: [], mileage: [] };
        let querryParams = this.createQuerryparams();
        this.service
            .get(`fuel-list?${querryParams}&listFor=ice&page=1&limit=1000`)
            .pipe()
            .subscribe((response) => {
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
                    response.data.rows.forEach((element) => {
                        if (element.consumption100km &&
                            element.consumption100km <= 200) {
                            element.consumption100km = parseFloat(element.consumption100km).toFixed(1);
                        }
                        else {
                            element.consumption100km = "NA";
                        }
                        this.fuelChart.licensePlate.push(element.license_plate);
                        this.fuelChart.mileage.push(element.consumption100km == "NA"
                            ? 0
                            : element.consumption100km);
                    });
                    // this.dataSource = response.data.rows;
                }
                // this.createFuelChart();
            }
            else {
                this.fuelChart = { licensePlate: [], mileage: [] };
                this.totalCount = 0;
                // this.dataSource = [];
            }
        }, (error) => {
            this.isFuelListLoading = false;
            // this.dataSource = [];
        });
    }
    createFuelChart() {
        const labels = this.fuelChart.licensePlate;
        let background = Array(this.fuelChart.licensePlate.length).fill("#4DBFFF");
        let htmlRef = this.elementRef.nativeElement
            .querySelector(`#fuelChart`)
            .getContext("2d");
        // let htmlRef= document.getElementById('')
        if (this.myChart)
            this.myChart.destroy();
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Mileage (ltr/100km)",
                        data: this.fuelChart.mileage,
                        borderColor: background,
                        backgroundColor: background,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        position: "top",
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: "#ffffff",
                        titleAlign: "center",
                        footerAlign: "center",
                        bodyAlign: "center",
                        titleColor: "#1B194B",
                        displayColors: false,
                        callbacks: {
                            labelTextColor: (context) => {
                                return "#1B194B";
                            },
                        },
                    },
                    title: {
                        display: false,
                        text: "Mileage",
                    },
                },
                scales: {
                    x: {
                        display: false,
                    },
                },
            },
        });
        var dataset = this.myChart.data.datasets[0];
        for (var i = 0; i < dataset.data.length; i++) {
            if (dataset.data[i] < 35) {
                dataset.backgroundColor[i] = "green";
            }
            else if (dataset.data[i] < 45) {
                dataset.backgroundColor[i] = "yellow";
            }
            else if (dataset.data[i] < 60) {
                dataset.backgroundColor[i] = "Orange";
            }
            else {
                dataset.backgroundColor[i] = "red";
            }
        }
        this.myChart.update();
    }
    getRoadTypeDistribution() {
        this.roadTypeLabel = [];
        this.roadTypeData = [];
        let querryParams = this.createQuerryparams("Distribution");
        this.service
            .get(`trips/road-type-distribution?${querryParams}`)
            .pipe()
            .subscribe((response) => {
            let apiData = response;
            if (apiData.data && apiData.data.length) {
                for (let i = 0; i < apiData.data.length; i++) {
                    if (apiData.data[i].road_factor_name.split(' ').length - 1 > 1) {
                        // console.log((apiData.data[i].road_factor_name.split(' ')).join(''));
                        let k = apiData.data[i].road_factor_name.split(' ');
                        apiData.data[i].road_factor_name = k[0] + k[1] + k[2] + ' kmph';
                    }
                    if (this.stackBar[i]) {
                        this.stackBar[i].value =
                            apiData.data[i].contribution_value.toFixed(1);
                        this.stackBar[i].speed = apiData.data[i].road_factor_name;
                        this.stackBar[i].color = this.colorBox[i];
                    }
                }
                this.stackBar.forEach((x) => {
                    if (x.value > 0) {
                        this.roadTypeLabel.push(x.speed);
                        this.roadTypeData.push(x.value);
                    }
                });
            }
            else {
                this.noRoadTypeData = true;
            }
        }, (error) => {
            this.roadTypeLabel = [];
            this.roadTypeData = [];
            this.noRoadTypeData = true;
        });
    }
    createQuerryparams(type) {
        let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
        querryParams =
            querryParams +
                `&from_date=${moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format("YYYY-MM-DD")}`;
        querryParams =
            querryParams +
                `&to_date=${moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format("YYYY-MM-DD")}`;
        let val = this.service.checkCustomDate(moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format("YYYY-MM-DD"));
        if (type) {
            querryParams = querryParams + `&custom_filter=true&filter_value=''`;
        }
        else {
            if (val == undefined) {
                querryParams = querryParams + `&custom_filter=true&filter_value=''`;
            }
            else {
                querryParams =
                    querryParams + `&custom_filter=false&filter_value=${val}`;
            }
        }
        return querryParams;
    }
    calcWidth() {
        if (this.dashBoardData.speed_score < this.attentionValue) {
            this.leftCount += 1;
            this.leftWidth += 20;
        }
        else {
            this.rightWidth += 20;
        }
        if (this.dashBoardData.idling_score < this.attentionValue) {
            this.leftCount += 1;
            this.leftWidth += 20;
        }
        else {
            this.rightWidth += 20;
        }
        if (this.dashBoardData.acceleration_score < this.attentionValue) {
            this.leftCount += 1;
            this.leftWidth += 20;
        }
        else {
            this.rightWidth += 20;
        }
        if (this.dashBoardData.breaking_score < this.attentionValue) {
            this.leftCount += 1;
            this.leftWidth += 20;
        }
        else {
            this.rightWidth += 20;
        }
        if (this.dashBoardData.cornering_score < this.attentionValue) {
            this.leftCount += 1;
            this.leftWidth += 20;
        }
        else {
            this.rightWidth += 20;
        }
        if (this.leftCount != 0 && this.leftCount != 5) {
            this.rightSide = true;
            this.leftSide = true;
        }
        if (this.leftCount == 5) {
            this.rightSide = false;
            this.leftSide = true;
        }
        if (this.leftCount == 0) {
            this.rightSide = true;
            this.leftSide = false;
        }
        this.isTripHistoryLoading = false;
    }
    toggleChange(value) {
        this.tableView = value;
    }
    lineChart(label) {
        if (this.linemyChart) {
            this.linemyChart.destroy();
        }
        var labels = label;
        this.translate.get("fleetscore").subscribe((text) => {
            this.fleetScore = text;
        });
        this.translate.get("speeding").subscribe((text) => {
            this.speed = text;
        });
        this.translate.get("idiling").subscribe((text) => {
            this.idling = text;
        });
        this.translate.get("hardAcceleration").subscribe((text) => {
            this.safeAcc = text;
        });
        this.translate.get("hardBraking").subscribe((text) => {
            this.deAcc = text;
        });
        this.translate.get("harshCorner").subscribe((text) => {
            this.corner = text;
        });
        let htmlRef = this.elementRef.nativeElement.querySelector(`#lineChart`);
        const gradient = this.elementRef.nativeElement
            .querySelector(`#lineChart`)
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
        gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
        const dataSet = [
            {
                data: this.chartData.safe_score,
                borderColor: "#371987",
                pointBackgroundColor: "#FA1464",
                borderWidth: 2.66,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: this.fleetScore,
                borderDash: [10, 5],
            },
            {
                data: this.chartData.speed,
                borderColor: "#FF9950",
                pointBackgroundColor: "#FA1464",
                borderWidth: 2.66,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: this.speed,
            },
            {
                data: this.chartData.idiling,
                borderColor: "#00CBA0",
                pointBackgroundColor: "#FA1464",
                borderWidth: 2.66,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: this.idling,
            },
            {
                data: this.chartData.acc,
                borderColor: "#4DBFFF",
                pointBackgroundColor: "#FA1464",
                borderWidth: 2.66,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: this.safeAcc,
            },
            {
                data: this.chartData.braking,
                borderColor: "#FF7070",
                pointBackgroundColor: "#FA1464",
                borderWidth: 3.84,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: this.deAcc,
            },
            {
                data: this.chartData.cornering,
                borderColor: "#FFEA6C",
                pointBackgroundColor: "#FA1464",
                borderWidth: 3.84,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: this.corner,
            },
        ];
        let data = [];
        if (this.safeScoreCheckbox) {
            data.push(dataSet[0]);
        }
        if (this.speedingCheckbox) {
            data.push(dataSet[1]);
        }
        if (this.idilingCheckbox) {
            data.push(dataSet[2]);
        }
        if (this.accCheckbox) {
            data.push(dataSet[3]);
        }
        if (this.brakingCheckbox) {
            data.push(dataSet[4]);
        }
        if (this.corneringCheckbox) {
            data.push(dataSet[5]);
        }
        this.linemyChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: data,
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: "#ffffff",
                        titleAlign: "center",
                        footerAlign: "center",
                        bodyAlign: "center",
                        titleColor: "#1B194B",
                        displayColors: false,
                        callbacks: {
                            labelTextColor: (context) => {
                                return "#1B194B";
                            },
                        },
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                    },
                    y: {
                        display: true,
                        // min: -10,
                        max: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].gaugeMax,
                        ticks: {
                            precision: 0,
                        },
                    },
                },
            },
        });
    }
    lineChartScore(label, point, pointsSecond, name) {
        if (this.linemyChartScore) {
            this.linemyChartScore.destroy();
        }
        var labels = label;
        const datapoints = point;
        let dayDrive;
        this.translate.get("daydriving").subscribe((text) => {
            dayDrive = text;
        });
        let nightDrive;
        this.translate.get("nightdriving").subscribe((text) => {
            nightDrive = text;
        });
        let htmlRef = this.elementRef.nativeElement.querySelector(`#lineChartScore`);
        const gradient = this.elementRef.nativeElement
            .querySelector(`#lineChartScore`)
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
        gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
        const dataSet = [
            {
                data: pointsSecond,
                borderColor: "#371A87",
                pointBackgroundColor: "#FA1464",
                borderWidth: 3,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: nightDrive,
            },
            {
                data: point,
                borderColor: "#45CBFC",
                pointBackgroundColor: "#FA1464",
                borderWidth: 3,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: dayDrive,
            },
        ];
        if (!this.safeScoreCheckboxsecond) {
            dataSet.splice(1, 1);
        }
        if (!this.otherCheckboxsecond) {
            dataSet.splice(0, 1);
        }
        // console.log(dataSet);
        this.linemyChartScore = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: dataSet,
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: "#ffffff",
                        titleAlign: "center",
                        footerAlign: "center",
                        bodyAlign: "center",
                        titleColor: "#1B194B",
                        displayColors: false,
                        callbacks: {
                            labelTextColor: (context) => {
                                return "#1B194B";
                            },
                        },
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                    },
                    y: {
                        display: true,
                        // min: -10,
                        max: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].gaugeMax,
                        ticks: {
                            precision: 0,
                        },
                    },
                },
            },
        });
    }
    barChart() {
        // console.log(this.chartData);
        const dataSum = {
            speed: 0,
            acc: 0,
            braking: 0,
            idiling: 0,
            cornering: 0,
            safe_score: 0,
            tsp_speed: 0,
            tsp_acc: 0,
            tsp_braking: 0,
            tsp_idiling: 0,
            tsp_cornering: 0,
            tsp_safe_score: 0,
        };
        this.chartData.date.forEach((element, index) => {
            dataSum.speed = dataSum.speed + Number(this.chartData.speed[index]);
            dataSum.acc = dataSum.acc + Number(this.chartData.acc[index]);
            dataSum.braking = dataSum.braking + Number(this.chartData.braking[index]);
            dataSum.idiling = dataSum.idiling + Number(this.chartData.idiling[index]);
            dataSum.cornering =
                dataSum.cornering + Number(this.chartData.cornering[index]);
            dataSum.safe_score =
                dataSum.safe_score + Number(this.chartData.safe_score[index]);
            dataSum.tsp_speed =
                dataSum.tsp_speed + Number(this.chartData.tsp_speed[index]);
            dataSum.tsp_acc = dataSum.tsp_acc + Number(this.chartData.tsp_acc[index]);
            dataSum.tsp_braking =
                dataSum.tsp_braking + Number(this.chartData.tsp_braking[index]);
            dataSum.tsp_idiling =
                dataSum.tsp_idiling + Number(this.chartData.tsp_idiling[index]);
            dataSum.tsp_cornering =
                dataSum.tsp_cornering + Number(this.chartData.tsp_cornering[index]);
            dataSum.tsp_safe_score =
                dataSum.tsp_safe_score + Number(this.chartData.tsp_safe_score[index]);
        });
        dataSum.speed = this.formatToFixed(dataSum.speed / this.chartData.date.length, 1);
        dataSum.acc = this.formatToFixed(dataSum.acc / this.chartData.date.length, 1);
        dataSum.braking = this.formatToFixed(dataSum.braking / this.chartData.date.length, 1);
        dataSum.idiling = this.formatToFixed(dataSum.idiling / this.chartData.date.length, 1);
        dataSum.cornering = this.formatToFixed(dataSum.cornering / this.chartData.date.length, 1);
        dataSum.safe_score = this.formatToFixed(dataSum.safe_score / this.chartData.date.length, 1);
        dataSum.tsp_speed = this.formatToFixed(dataSum.tsp_speed / this.chartData.date.length, 1);
        dataSum.tsp_acc = this.formatToFixed(dataSum.tsp_acc / this.chartData.date.length, 1);
        dataSum.tsp_braking = this.formatToFixed(dataSum.tsp_braking / this.chartData.date.length, 1);
        dataSum.tsp_idiling = this.formatToFixed(dataSum.tsp_idiling / this.chartData.date.length, 1);
        dataSum.tsp_cornering = this.formatToFixed(dataSum.tsp_cornering / this.chartData.date.length, 1);
        dataSum.tsp_safe_score = this.formatToFixed(dataSum.tsp_safe_score / this.chartData.date.length, 1);
        // console.log(dataSum);
        if (this.barChartmyChart) {
            this.barChartmyChart.destroy();
        }
        var labels = [
            "Safe score",
            "Speeding",
            "Idiling",
            "Acceleration",
            "Braking",
            "Cornering",
        ];
        // for (let i = 0; i < 6; ++i) {
        //   labels.push(i.toString());
        // }
        const datapoints = [
            dataSum.safe_score,
            dataSum.speed,
            dataSum.idiling,
            dataSum.acc,
            dataSum.braking,
            dataSum.cornering,
        ];
        const datapoints1 = [
            dataSum.tsp_safe_score,
            dataSum.tsp_speed,
            dataSum.tsp_idiling,
            dataSum.tsp_acc,
            dataSum.tsp_braking,
            dataSum.tsp_cornering,
        ];
        let htmlRef = this.elementRef.nativeElement.querySelector(`#barChart`);
        // const gradient = this.elementRef.nativeElement.querySelector(`#barChart`).getContext('2d').createLinearGradient(0, 0, 0, 600);
        // gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        // gradient.addColorStop(0, 'rgba(0, 203, 160, 0.1)');
        this.barChartmyChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Your score",
                        data: datapoints,
                        borderColor: "#0064FF",
                        // fill: false,
                        // cubicInterpolationMode: 'monotone',
                        // tension: 0.4,
                        // pointBackgroundColor: "#FA1464",
                        backgroundColor: "#0064FF",
                    },
                    {
                        label: "Fleets score",
                        data: datapoints1,
                        borderColor: "#0064FF",
                        // fill: false,
                        // cubicInterpolationMode: 'monotone',
                        // tension: 0.4,
                        // pointBackgroundColor: "#FA1464",
                        backgroundColor: "#4DBFFF",
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                plugins: {
                    legend: {
                        display: true,
                        position: "bottom",
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: "#ffffff",
                        titleAlign: "center",
                        footerAlign: "center",
                        bodyAlign: "center",
                        titleColor: "#1B194B",
                        callbacks: {
                            labelTextColor: (context) => {
                                return "#1B194B";
                            },
                        },
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                    },
                    y: {
                        display: true,
                        suggestedMin: 0,
                        suggestedMax: 10,
                    },
                },
            },
        });
    }
    //speedingChart
    changeBoxValue(num) {
        this.boxVal = num;
        // if (num == 1) {
        //   this.title = "Speed score";
        //   this.lineChart(this.chartData.date, this.chartData.speed, this.title);
        //   // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedSpeedingId)
        //   // this.worstDriver(this.RULE_ID.RulePostedSpeedingId)
        // } else if (num == 2) {
        //   this.title = "Acceleration score";
        //   this.lineChart(this.chartData.date, this.chartData.acc, this.title);
        //   // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedAccelerationId)
        //   // this.worstDriver(this.RULE_ID.RulePostedAccelerationId)
        // } else if (num == 3) {
        //   this.title = "Braking score";
        //   this.lineChart(this.chartData.date, this.chartData.braking, this.title);
        //   // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedBreakingId)
        //   // this.worstDriver(this.RULE_ID.RulePostedBreakingId)
        // } else if (num == 4) {
        //   this.title = "Cornering score";
        //   this.lineChart(this.chartData.date, this.chartData.cornering, this.title);
        //   // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedCorneringId)
        //   // this.worstDriver(this.RULE_ID.RulePostedCorneringId)
        // } else if (num == 6) {
        //   this.title = "Safe Score";
        //   this.lineChart(
        //     this.chartData.date,
        //     this.chartData.safe_score,
        //     this.title
        //   );
        // } else {
        //   this.title = "Idiling score";
        //   this.lineChart(this.chartData.date, this.chartData.idiling, this.title);
        //   // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedIdlingId)
        //   // this.worstDriver(this.RULE_ID.RulePostedIdlingId);
        // }
    }
    changecheckboxValue(num) {
        switch (num) {
            case 1:
                this.safeScoreCheckbox = !this.safeScoreCheckbox;
                break;
            case 2:
                this.speedingCheckbox = !this.speedingCheckbox;
                break;
            case 3:
                this.idilingCheckbox = !this.idilingCheckbox;
                break;
            case 4:
                this.accCheckbox = !this.accCheckbox;
                break;
            case 5:
                this.brakingCheckbox = !this.brakingCheckbox;
                break;
            case 6:
                this.corneringCheckbox = !this.corneringCheckbox;
                break;
        }
        this.lineChart(this.chartData.date);
        // // console.log(this.title);
        // if (this.title == "Speed score") {
        //   this.lineChart(this.chartData.date, this.chartData.speed, this.title);
        // } else if (this.title == "Acceleration score") {
        //   this.lineChart(this.chartData.date, this.chartData.acc, this.title);
        // } else if (this.title == "Braking score") {
        //   this.lineChart(this.chartData.date, this.chartData.braking, this.title);
        // } else if (this.title == "Cornering score") {
        //   this.lineChart(this.chartData.date, this.chartData.cornering, this.title);
        // } else {
        //   this.lineChart(this.chartData.date, this.chartData.idiling, this.title);
        // }
    }
    changecheckboxValuesecond(num) {
        // if (num == 1) {
        //   this.safeScoreCheckboxsecond = !this.safeScoreCheckboxsecond;
        // } else {
        //   this.otherCheckboxsecond = !this.otherCheckboxsecond;
        // }
        // // console.log(this.title);
        // this.lineChartScore(this.dayNightScore.date,this.dayNightScore.dayScore,this.dayNightScore.nightScore,'Day Night')
        // if (this.title == 'Speed score') {
        //   this.lineChart(this.chartData.date, this.chartData.speed, this.title)
        // }
        // else if (this.title == 'Acceleration score') {
        //   this.lineChart(this.chartData.date, this.chartData.acc, this.title)
        // }
        // else if (this.title == 'Braking score') {
        //   this.lineChart(this.chartData.date, this.chartData.braking, this.title)
        // }
        // else if (this.title == 'Cornering score') {
        //   this.lineChart(this.chartData.date, this.chartData.cornering, this.title)
        // }
        // else {
        //   this.lineChart(this.chartData.date, this.chartData.idiling, this.title)
        // }
    }
    getChartData() {
        let querryParams = this.createQuerryparams();
        this.chartData = {
            date: [],
            speed: [],
            acc: [],
            braking: [],
            idiling: [],
            cornering: [],
            safe_score: [],
            tsp_speed: [],
            tsp_acc: [],
            tsp_braking: [],
            tsp_idiling: [],
            tsp_cornering: [],
            tsp_safe_score: [],
        };
        this.service
            .get(`driving-analytics-graph?${querryParams}&score_type=safe_score`)
            .pipe()
            .subscribe((response) => {
            if (response.data && response.data.length) {
                let lastDate;
                for (let i = 0; i < response.data.length; i++) {
                    if (i == 0) {
                        lastDate = moment__WEBPACK_IMPORTED_MODULE_1__["utc"](response.data[i].date);
                        this.pushChartData(response.data[i]);
                    }
                    else {
                        if (moment__WEBPACK_IMPORTED_MODULE_1__["utc"](response.data[i].date).diff(lastDate, "days") == 1) {
                            this.pushChartData(response.data[i]);
                            lastDate = moment__WEBPACK_IMPORTED_MODULE_1__["utc"](response.data[i].date);
                        }
                        else {
                            let days = moment__WEBPACK_IMPORTED_MODULE_1__["utc"](response.data[i].date)
                                .diff(lastDate, "days");
                            let j = 1;
                            while (j < days) {
                                this.chartData.date.push(moment__WEBPACK_IMPORTED_MODULE_1__(lastDate).add(j, "days").format("DD/MM"));
                                this.chartData.speed.push(0);
                                this.chartData.acc.push(0);
                                this.chartData.braking.push(0);
                                this.chartData.idiling.push(0);
                                this.chartData.cornering.push(0);
                                this.chartData.safe_score.push(0);
                                this.chartData.tsp_speed.push(0);
                                this.chartData.tsp_acc.push(0);
                                this.chartData.tsp_braking.push(0);
                                this.chartData.tsp_idiling.push(0);
                                this.chartData.tsp_cornering.push(0);
                                this.chartData.tsp_safe_score.push(0);
                                j = j + 1;
                            }
                            this.pushChartData(response.data[i]);
                            lastDate = moment__WEBPACK_IMPORTED_MODULE_1__["utc"](response.data[i].date);
                        }
                    }
                }
            }
            // console.log(this.chartData);
            this.miniChart("speedingChart", this.dashBoardData.speed_score >= this.attentionValue
                ? "#00CBA0"
                : "#FF7070", this.chartData.date, this.chartData.speed);
            this.miniChart("idilingChart", this.dashBoardData.idling_score >= this.attentionValue
                ? "#00CBA0"
                : "#FF7070", this.chartData.date, this.chartData.idiling);
            this.miniChart("accelerationChart", this.dashBoardData.acceleration_score >= this.attentionValue
                ? "#00CBA0"
                : "#FF7070", this.chartData.date, this.chartData.acc);
            this.miniChart("brakingChart", this.dashBoardData.breaking_score >= this.attentionValue
                ? "#00CBA0"
                : "#FF7070", this.chartData.date, this.chartData.braking);
            this.miniChart("corneringChart", this.dashBoardData.cornering_score >= this.attentionValue
                ? "#00CBA0"
                : "#FF7070", this.chartData.date, this.chartData.cornering);
            this.boxVal = 1;
            this.title = "Speed score";
            // console.log(this.chartData);
            // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedSpeedingId)
            this.lineChart(this.chartData.date);
            // this.barChart();
        }, (error) => { });
    }
    pushChartData(element) {
        this.chartData.date.push(moment__WEBPACK_IMPORTED_MODULE_1__["utc"](element.date).format("DD/MM"));
        if (!this.naValue.includes(element.speed_score)) {
            this.chartData.speed.push(this.formatToFixed(element.speed_score, 1));
        }
        else {
            this.chartData.speed.push(null);
        }
        if (!this.naValue.includes(element.acceleration_score)) {
            this.chartData.acc.push(this.formatToFixed(element.acceleration_score, 1));
        }
        else {
            this.chartData.acc.push(null);
        }
        if (!this.naValue.includes(element.breaking_score)) {
            this.chartData.braking.push(this.formatToFixed(element.breaking_score, 1));
        }
        else {
            this.chartData.braking.push(null);
        }
        if (!this.naValue.includes(element.idling_score)) {
            this.chartData.idiling.push(this.formatToFixed(element.idling_score, 1));
        }
        else {
            this.chartData.idiling.push(null);
        }
        if (!this.naValue.includes(element.cornering_score)) {
            this.chartData.cornering.push(this.formatToFixed(element.cornering_score, 1));
        }
        else {
            this.chartData.cornering.push(null);
        }
        if (!this.naValue.includes(element.safe_score)) {
            this.chartData.safe_score.push(this.formatToFixed(element.safe_score, 1));
        }
        else {
            this.chartData.safe_score.push(null);
        }
        if (!this.naValue.includes(element.tsp_speed_score)) {
            this.chartData.tsp_speed.push(this.formatToFixed(element.tsp_speed_score, 1));
        }
        else {
            this.chartData.tsp_speed.push(null);
        }
        if (!this.naValue.includes(element.tsp_acceleration_score)) {
            this.chartData.tsp_acc.push(this.formatToFixed(element.tsp_acceleration_score, 1));
        }
        else {
            this.chartData.tsp_acc.push(null);
        }
        if (!this.naValue.includes(element.tsp_breaking_score)) {
            this.chartData.tsp_braking.push(this.formatToFixed(element.tsp_breaking_score, 1));
        }
        else {
            this.chartData.tsp_braking.push(null);
        }
        if (!this.naValue.includes(element.tsp_idling_score)) {
            this.chartData.tsp_idiling.push(this.formatToFixed(element.tsp_idling_score, 1));
        }
        else {
            this.chartData.tsp_idiling.push(null);
        }
        if (!this.naValue.includes(element.tsp_cornering_score)) {
            this.chartData.tsp_cornering.push(this.formatToFixed(element.tsp_cornering_score, 1));
        }
        else {
            this.chartData.tsp_cornering.push(null);
        }
        if (!this.naValue.includes(element.tsp_safe_score)) {
            this.chartData.tsp_safe_score.push(this.formatToFixed(element.tsp_safe_score, 1));
        }
        else {
            this.chartData.tsp_safe_score.push(null);
        }
    }
    formatToFixed(val, precision) {
        if (val == null) {
            return null;
        }
        if (typeof val == "string") {
            val = parseFloat(val);
        }
        if (val) {
            return val.toFixed(precision);
        }
        return 0;
    }
    openChartPopup() {
        let chart = {
            speed: this.chartData.safe_score,
        };
        chart.chartdate = this.chartData.date;
        chart.name = this.title;
        chart.safeScore = true;
        chart.chartData = this.chartData;
        const dialogRef = this.dialog.open(DialogContentdashboardDialog, {
            disableClose: true,
            panelClass: "custom-dialog-container",
            height: "auto",
            width: "80%",
            data: chart,
        });
        dialogRef.afterClosed().subscribe((result) => {
            // console.log(`Dialog result: ${result}`);
        });
    }
    openChartPopupSecondChart() {
        let chart = {
            speed: this.dayNightScore.dayScore,
        };
        chart.chartdate = this.dayNightScore.date;
        chart.name = "Day vs Night Driving Score";
        chart.safeScore = false;
        chart.chartdata = this.dayNightScore.nightScore;
        const dialogRef = this.dialog.open(DialogContentdashboardDialog, {
            disableClose: true,
            panelClass: "custom-dialog-container",
            height: "auto",
            width: "80%",
            data: chart,
        });
        dialogRef.afterClosed().subscribe((result) => {
            // console.log(`Dialog result: ${result}`);
        });
    }
    polardata() {
        this.exceptionData = [];
        this.exceptionLabel = [];
        let querryParams = this.createQuerryparams();
        this.service
            .get(`dashboard/exception-ratio?${querryParams}`)
            .pipe()
            .subscribe((response) => {
            if (response.data) {
                this.exceptionRatio = response.data;
                let total = this.exceptionRatio.reduce((previousValue, currentValue) => previousValue + Number(currentValue.score_type_count), 0);
                this.totalException = total;
                for (let i = 0; i < this.exceptionRatio.length; i++) {
                    this.polarObject[this.exceptionRatio[i].score_type] = ((this.exceptionRatio[i].score_type_count / total) *
                        100).toFixed(1);
                }
                for (let keys in this.polarObject) {
                    if (this.polarObject[keys] && this.polarObject[keys] !== "0.0") {
                        this.exceptionData.push(this.polarObject[keys]);
                        this.exceptionLabel.push(this.exceptionObject[keys]);
                    }
                }
            }
            // this.polarGraph(data, label);
        }, (error) => {
            this.exceptionData = [];
            this.exceptionLabel = [];
            this.totalException = 0;
        });
    }
    miniChart(id, color, label, dataPoint) {
        var labels = label;
        var datapoints = dataPoint;
        let ids = "#" + id;
        let htmlRef = this.elementRef.nativeElement.querySelector(ids);
        var gradient = htmlRef.getContext("2d").createLinearGradient(0, 0, 0, 600);
        if (color == "#00CBA0") {
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(0, "rgba(0, 203, 160, 0.1)");
        }
        else {
            gradient.addColorStop(1, "rgba(255, 255, 255, 0.9)");
            gradient.addColorStop(0, "rgba(255, 112, 112, 0.25)");
        }
        if (this.miniChartObj[id])
            this.miniChartObj[id].destroy();
        this.miniChartObj[id] = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        data: datapoints,
                        borderColor: color,
                        fill: true,
                        cubicInterpolationMode: "monotone",
                        tension: 0.4,
                        pointBackgroundColor: "#FA1464",
                        backgroundColor: "#d6d1e7",
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                        backgroundColor: "#001E50",
                        titleAlign: "center",
                        footerAlign: "center",
                        bodyAlign: "center",
                        callbacks: {
                            labelTextColor: (context) => {
                                return "#fff";
                            },
                        },
                    },
                    title: {
                        display: true,
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: false,
                        title: {
                            display: true,
                        },
                    },
                    y: {
                        display: false,
                        title: {
                            display: true,
                        },
                    },
                },
            },
        });
    }
    getDriverList(ruleId) {
        if (ruleId == this.RULE_ID.RulePostedSpeedingId) {
            this.speedingDriver = [];
        }
        else if (ruleId == this.RULE_ID.RulePostedIdlingId) {
            this.idlingingDriver = [];
        }
        let querryParams = this.createQuerryparams();
        this.service
            .get(`drivers?${querryParams}&rule_id=${ruleId}&page=1&limit=5`)
            .pipe()
            .subscribe((response) => {
            if (response.data) {
                if (ruleId == this.RULE_ID.RulePostedSpeedingId) {
                    this.speedingDriver = response.data.rows;
                }
                else if (ruleId == this.RULE_ID.RulePostedIdlingId) {
                    this.idlingingDriver = response.data.rows;
                }
            }
            else {
            }
        }, (error) => {
            if (ruleId == this.RULE_ID.RulePostedSpeedingId) {
                this.speedingDriver = [];
            }
            else if (ruleId == this.RULE_ID.RulePostedIdlingId) {
                this.idlingingDriver = [];
            }
        });
    }
    worstDriver() {
        this.worstDriverdetail = [];
        let querryParams = this.createQuerryparams();
        this.service
            .get(`dashboard/worst-driver?${querryParams}`)
            .pipe()
            .subscribe((response) => {
            if (response.data) {
                this.worstDriverdetail = response.data;
            }
        }, (error) => {
            this.worstDriverdetail = [];
        });
    }
}
DashboardHomeV2Component.??fac = function DashboardHomeV2Component_Factory(t) { return new (t || DashboardHomeV2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_10__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_11__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"])); };
DashboardHomeV2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardHomeV2Component, selectors: [["app-dashboard-home-v2"]], decls: 83, vars: 93, consts: [[1, "attention", "p-3", "mb-3"], ["placement", "top", "container", "body", 1, "border-text", 3, "autoClose", "ngbTooltip"], ["tooltip3", "ngbTooltip"], ["class", "d-flex", 4, "ngIf"], ["class", "w-100 d-flex justify-content-center mb-5", 4, "ngIf"], [1, "dashGraphBox"], [1, "boxBack", "left100"], [1, "graphTab", "mb-4"], [1, "graphTab__checkbox"], [1, "d-flex"], [1, "graphTab__checkbox__safeScoreSecond", 3, "click"], [1, "checkbox-dynamic", 3, "ngClass"], ["for", "flexCheckChecked", 1, "form-check-label", 3, "ngClass"], [1, "graphTab__checkbox__speeding", 3, "click"], [1, "checkbox-dynamic-second", 3, "ngClass"], ["for", "flexCheckChecked", 1, "form-check-label", "text-capitalize", 3, "ngClass"], [1, "graphTab__checkbox__idiling", 3, "click"], [1, "graphTab__checkbox__acc", 3, "click"], [1, "graphTab__checkbox__braking", 3, "click"], [1, "graphTab__checkbox__cornering", 3, "click"], [1, "graphTab__checkbox__export"], ["src", "assets/images/newIcons/export.svg", 1, "pl-3"], [1, "graphTab__title"], [3, "click"], ["id", "lineChart", 2, "height", "350px"], ["class", "boxBack left50 mainBox fixHeight", 4, "ngIf"], ["class", "boxBack left50 mainBox fixHeight mainBox_card d-flex justify-content-between", 4, "ngIf"], [1, "boxBack", "left50", "mainBox", "fixHeight", 3, "hidden"], [1, "backpolarGreen"], [1, "graphSide"], [1, "d-flex", "justify-content-between", "graphTab"], ["placement", "top", "container", "body", 1, "graphTitle", "text-center", "d-inline-block", 3, "autoClose", "ngbTooltip"], [1, "graphTab__checkbox__safeScore", 3, "click"], [1, "checkbox-dynamic-score", 3, "ngClass"], ["for", "flexCheckChecked", 1, "form-check-label"], [1, "graphTab__checkbox__otherScore", 3, "click"], [2, "height", "250px", 3, "click"], ["id", "lineChartScore"], ["class", "weather-forcast", 4, "ngIf"], ["class", " needAttention ", 3, "ngStyle", "ngClass", 4, "ngIf"], ["class", " goingGood ", 3, "ngStyle", 4, "ngIf"], [1, "needAttention", 3, "ngStyle", "ngClass"], ["class", "dataBoxes w-100 ", 3, "ngStyle", "ngClass", "click", 4, "ngIf"], ["class", "dataBoxes w-100", 3, "ngStyle", "ngClass", "click", 4, "ngIf"], [1, "dataBoxes", "w-100", 3, "ngStyle", "ngClass", "click"], [1, "d-flex", "justify-content-between", "databoxescolors"], [4, "ngIf", "ngIfElse"], ["elseTemplate15", ""], [1, "speedChart", 2, "height", "100px"], ["id", "speedingChart"], [1, "text-center", "mt-2"], ["placement", "top", "container", "body", 1, "p-0", "m-0", 3, "autoClose", "ngbTooltip"], [1, "green"], ["src", "assets/images/Iconsup.png"], [1, "red"], ["src", "assets/images/IconsDown.png"], ["elseTemplate16", ""], ["id", "idilingChart"], ["elseTemplate18", ""], ["id", "brakingChart"], ["elseTemplate19", ""], ["id", "corneringChart"], ["elseTemplate17", ""], ["id", "accelerationChart"], [1, "p-0", "m-0"], [1, "goingGood", 3, "ngStyle"], [1, "w-100", "d-flex", "justify-content-center", "mb-5"], [2, "margin", "0 auto", 3, "diameter"], [1, "boxBack", "left50", "mainBox", "fixHeight"], ["placement", "top", "container", "body", 1, "typeTitle", 3, "autoClose", "ngbTooltip", "ngClass"], [3, "id", "type", "data", "label"], [1, "boxBack", "left50", "mainBox", "fixHeight", "mainBox_card", "d-flex", "justify-content-between"], ["class", "w-100 left50-box", 3, "border", "type", "data", 4, "ngIf"], ["class", "margin-left-space w-100 left50-box", 3, "border", "type", "data", 4, "ngIf"], [1, "w-100", "left50-box", 3, "border", "type", "data"], [1, "margin-left-space", "w-100", "left50-box", 3, "border", "type", "data"], [1, "typeTitle", 3, "ngClass"], [1, "weather-forcast"], [1, "row"], [1, "col-md-12"], [1, "weather-forcast_left"], [1, "title"], [1, "d-flex", "align-items-center"], ["src", "assets/images/arrow-weather.svg"], [1, "m-0", "pl-1"], ["src", "assets/images/arrow-weather.svg", 1, "down-img"], [1, "ml-3"], [1, "col-md-12", "mt-2"], [1, "col-md-7"], [1, "col-md-5"], ["src", "assets/images/sunrise.svg", "alt", ""], [1, "ml-3", "light-text"], [1, "light-text"], [1, "dark-text"], [1, "col-md-6"], [1, "ml-3", "dark-text"], [1, "col-md-12", "mt-3"], [1, "col-md-3"], [1, "mt-3"], [1, "black-text"], [1, "col-md-9"], [1, "weather-forcast_last"], [1, "mb-4"], [1, "d-flex", "justify-content-between"], [4, "ngFor", "ngForOf"], [3, "src"], [1, "col-md-2"], [1, "weather-forcast_middle"], ["src", "assets/images/sunrise.svg"], [1, "title", "ml-2"], [1, "d-flex", "ml-4"], ["src", "assets/images/sunset.svg"], [1, "time"], [1, "weather-forcast_middle", "d-flex", "justify-content-around"], [1, "col-md-4"]], template: function DashboardHomeV2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DashboardHomeV2Component_div_6_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, DashboardHomeV2Component_div_8_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_Template_div_click_14_listener() { return ctx.changecheckboxValue(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_Template_div_click_19_listener() { return ctx.changecheckboxValue(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_Template_div_click_24_listener() { return ctx.changecheckboxValue(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_Template_div_click_29_listener() { return ctx.changecheckboxValue(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_Template_div_click_34_listener() { return ctx.changecheckboxValue(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_Template_div_click_39_listener() { return ctx.changecheckboxValue(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_Template_div_click_47_listener() { return ctx.openChartPopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "canvas", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, DashboardHomeV2Component_div_50_Template, 8, 14, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, DashboardHomeV2Component_div_51_Template, 7, 14, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, DashboardHomeV2Component_div_52_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, DashboardHomeV2Component_div_53_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, DashboardHomeV2Component_div_54_Template, 7, 14, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, DashboardHomeV2Component_div_55_Template, 7, 14, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, DashboardHomeV2Component_div_56_Template, 7, 14, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, DashboardHomeV2Component_div_57_Template, 5, 10, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h4", 31, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_Template_div_click_69_listener() { return ctx.changecheckboxValuesecond(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_Template_div_click_74_listener() { return ctx.changecheckboxValuesecond(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardHomeV2Component_Template_div_click_79_listener() { return ctx.openChartPopupSecondChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "canvas", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](81, DashboardHomeV2Component_div_81_Template, 79, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, DashboardHomeV2Component_div_82_Template, 64, 1, "div", 38);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 41, "Fleetscorebreakdown"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 43, "Fleetscorebreakdown"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.leftSide || ctx.rightSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isTripHistoryLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](65, _c5, ctx.safeScoreCheckbox));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](67, _c4, ctx.browsername == "safari"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 45, "t.safeScore"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](69, _c6, ctx.speedingCheckbox));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](71, _c4, ctx.browsername == "safari"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 47, "speeding"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](73, _c6, ctx.idilingCheckbox));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](75, _c4, ctx.browsername == "safari"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](28, 49, "idiling"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](77, _c6, ctx.accCheckbox));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](79, _c4, ctx.browsername == "safari"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 51, "hardAcceleration"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](81, _c6, ctx.brakingCheckbox));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](83, _c4, ctx.browsername == "safari"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](38, 53, "hardBraking"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](85, _c6, ctx.corneringCheckbox));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](87, _c4, ctx.browsername == "safari"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](43, 55, "harshCorner"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.exceptionData && ctx.exceptionData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.roadTypeData && ctx.roadTypeData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.bestScore.length || ctx.worstScore.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.mostTravelled.length || ctx.probablyCrashed.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.speed_distribution.data && ctx.speed_distribution.data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.breaking_distribution.data && ctx.breaking_distribution.data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.acceleration_distribution.data && ctx.acceleration_distribution.data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cornering_distribution.data && ctx.cornering_distribution.data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.dayNightScore.date || !ctx.dayNightScore.date.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](65, 57, "dayvsnightdrivingscore"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](67, 59, "dayvsnightdrivingscore"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](89, _c5, ctx.safeScoreCheckboxsecond));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](73, 61, "daydriving"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](91, _c6, ctx.otherCheckboxsecond));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](78, 63, "nightdriving"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", false);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultStyleDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_17__["BarChartComponent"], _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_18__["DashboardCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [_c7] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardHomeV2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-dashboard-home-v2",
                templateUrl: "./dashboard-home-v2.component.html",
                styleUrls: ["./dashboard-home-v2.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_10__["MainService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_11__["LocalService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }]; }, null); })();
class DialogContentdashboardDialog {
    constructor(dialogRef, elementRef, translate, data) {
        this.dialogRef = dialogRef;
        this.elementRef = elementRef;
        this.translate = translate;
        this.data = data;
        chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"].register(...chart_js__WEBPACK_IMPORTED_MODULE_3__["registerables"]);
        chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"].register(chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_4__["default"]);
        setTimeout(() => {
            // console.log(data);
            let labelfirst;
            let labelsecond;
            if (data.safeScore) {
                this.lineChartAll(data.chartdate, data.chartData);
            }
            else {
                (labelfirst = "Day Score"), (labelsecond = "Night Score");
                this.lineChart(data.chartdate, data.chartdata, data.speed, data.name, labelfirst, labelsecond);
            }
        }, 200);
    }
    lineChartAll(label, chartData) {
        if (this.linemyChart) {
            this.linemyChart.destroy();
        }
        var labels = label;
        let htmlRef = this.elementRef.nativeElement.querySelector(`#lineChart`);
        const gradient = this.elementRef.nativeElement
            .querySelector(`#lineChart`)
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
        gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
        let fleetScore;
        this.translate.get("fleetscore").subscribe((text) => {
            fleetScore = text;
        });
        let speed;
        this.translate.get("speeding").subscribe((text) => {
            speed = text;
        });
        let idling;
        this.translate.get("idiling").subscribe((text) => {
            idling = text;
        });
        let safeAcc;
        this.translate.get("hardAcceleration").subscribe((text) => {
            safeAcc = text;
        });
        let deAcc;
        this.translate.get("hardBraking").subscribe((text) => {
            deAcc = text;
        });
        let corner;
        this.translate.get("harshCorner").subscribe((text) => {
            corner = text;
        });
        const dataSet = [
            {
                data: chartData.safe_score,
                borderColor: "#371987",
                pointBackgroundColor: "#FA1464",
                borderWidth: 2.66,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: fleetScore,
                borderDash: [10, 5],
            },
            {
                data: chartData.speed,
                borderColor: "#FF9950",
                pointBackgroundColor: "#FA1464",
                borderWidth: 2.66,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: speed,
            },
            {
                data: chartData.idiling,
                borderColor: "#00CBA0",
                pointBackgroundColor: "#FA1464",
                borderWidth: 2.66,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: idling,
            },
            {
                data: chartData.acc,
                borderColor: "#4DBFFF",
                pointBackgroundColor: "#FA1464",
                borderWidth: 2.66,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: safeAcc,
            },
            {
                data: chartData.braking,
                borderColor: "#C5CDD4",
                pointBackgroundColor: "#FA1464",
                borderWidth: 3.84,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: deAcc,
            },
            {
                data: chartData.cornering,
                borderColor: "#C5CDD4",
                pointBackgroundColor: "#FA1464",
                borderWidth: 3.84,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
                backgroundColor: gradient,
                label: corner,
            },
        ];
        this.linemyChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: dataSet,
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                plugins: {
                    legend: {
                        display: true,
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: "#ffffff",
                        titleAlign: "center",
                        footerAlign: "center",
                        bodyAlign: "center",
                        titleColor: "#1B194B",
                        displayColors: false,
                        callbacks: {
                            labelTextColor: (context) => {
                                return "#1B194B";
                            },
                        },
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true,
                            },
                            drag: {
                                enabled: true,
                            },
                            mode: "x",
                        },
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                    },
                    y: {
                        display: true,
                        max: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].gaugeMax,
                        ticks: {
                            precision: 0,
                        },
                    },
                },
            },
        });
    }
    lineChart(label, point, safe, name, labelfirst, labelsecond) {
        if (this.linemyChart) {
            this.linemyChart.destroy();
        }
        var labels = label;
        const datapoints = point;
        let htmlRef = this.elementRef.nativeElement.querySelector(`#lineChart`);
        const gradient = this.elementRef.nativeElement
            .querySelector(`#lineChart`)
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
        gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
        let dayDrive;
        this.translate.get("daydriving").subscribe((text) => {
            dayDrive = text;
        });
        let nightDrive;
        this.translate.get("nightdriving").subscribe((text) => {
            nightDrive = text;
        });
        this.linemyChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](htmlRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        data: safe,
                        borderColor: "#45CBFC",
                        pointBackgroundColor: "#FA1464",
                        borderWidth: 3,
                        fill: false,
                        cubicInterpolationMode: "monotone",
                        tension: 0.4,
                        backgroundColor: "#001E50",
                        label: dayDrive,
                    },
                    {
                        data: datapoints,
                        borderColor: "#371A87",
                        pointBackgroundColor: "#FA1464",
                        borderWidth: 3,
                        fill: false,
                        cubicInterpolationMode: "monotone",
                        tension: 0.4,
                        backgroundColor: "#939EAA",
                        label: nightDrive,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                plugins: {
                    legend: {
                        display: true,
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: "#ffffff",
                        titleAlign: "center",
                        footerAlign: "center",
                        bodyAlign: "center",
                        titleColor: "#1B194B",
                        displayColors: false,
                        callbacks: {
                            labelTextColor: (context) => {
                                return "#1B194B";
                            },
                        },
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true,
                            },
                            drag: {
                                enabled: true,
                            },
                            mode: "x",
                        },
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                    },
                    y: {
                        display: true,
                        max: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].gaugeMax,
                        ticks: {
                            precision: 0,
                        },
                    },
                },
            },
        });
    }
    resetZoom() {
        this.linemyChart.resetZoom();
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogContentdashboardDialog.??fac = function DialogContentdashboardDialog_Factory(t) { return new (t || DialogContentdashboardDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])); };
DialogContentdashboardDialog.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DialogContentdashboardDialog, selectors: [["dialog-content-dashboard-dialog"]], decls: 10, vars: 1, consts: [["mat-button", "", 1, "close", 3, "click"], ["src", "assets/images/Close.svg"], ["mat-dialog-content", ""], [1, "chartZoom", "cursor", 3, "click"], ["id", "chartDiv", 2, "height", "450px"], ["id", "lineChart"], [1, "profileNameDark", "text-center", "text-capitalize"]], template: function DialogContentdashboardDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogContentdashboardDialog_Template_button_click_0_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogContentdashboardDialog_Template_span_click_3_listener() { return ctx.resetZoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Zoom Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "canvas", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data.name == "Speed score" ? "" : ctx.data.name);
    } }, styles: [_c7] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DialogContentdashboardDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "dialog-content-dashboard-dialog",
                templateUrl: "./chart-dashboard.html",
                styleUrls: ["./dashboard-home-v2.component.scss"],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "P5uQ":
/*!*****************************************************************!*\
  !*** ./src/app/main/dashboard/bar-chart/bar-chart.component.ts ***!
  \*****************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "m0r1");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "2fpa");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local.service */ "s3jE");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/main.service */ "c/rV");







class BarChartComponent {
    constructor(elementRef, translate, localService, service) {
        this.elementRef = elementRef;
        this.translate = translate;
        this.localService = localService;
        this.service = service;
        this.data = [];
        this.label = [];
        chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].register(...chart_js__WEBPACK_IMPORTED_MODULE_1__["registerables"]);
        this.browsername = this.service.detectBrowserName();
    }
    ngOnInit() {
        if (this.label[0].includes("kmph")) {
            this.label.forEach((element, index) => {
                if (element.split(" ").length - 1 > 1) {
                    let arr = element.split(' ');
                }
            });
        }
        this.localService.getLang().subscribe((val) => {
            if (this.data && this.label) {
                setTimeout(() => {
                    this.newbarChart();
                }, 200);
            }
        });
        setTimeout(() => {
            this.newbarChart();
        }, 20);
    }
    newbarChart() {
        // console.log(this.id, this.data, this.label);
        let label = [...this.label];
        if (this.type == 1) {
            this.translate.get("harshEvent").subscribe((text) => {
                this.text = text;
            });
            this.translate.get("ratio").subscribe((text) => {
                this.yLabel = text + " %";
            });
            label.map((x, i) => {
                if (x == "Speeding") {
                    this.translate.get("speeding").subscribe((text) => {
                        label[i] = text;
                    });
                }
                else if (x == "Idiling") {
                    this.translate.get("idiling").subscribe((text) => {
                        label[i] = text;
                    });
                }
                else if (x == "Harsh Acceleration") {
                    this.translate.get("hardAcceleration").subscribe((text) => {
                        label[i] = text;
                    });
                }
                else if (x == "Harsh Braking") {
                    this.translate.get("hardBraking").subscribe((text) => {
                        label[i] = text;
                    });
                }
                else {
                    this.translate.get("harshCorner").subscribe((text) => {
                        label[i] = text;
                    });
                }
            });
        }
        else if (this.type == 2) {
            this.translate.get("ratio").subscribe((text) => {
                this.yLabel = text + " %";
            });
            this.text = "";
        }
        else if (this.type == 3) {
            this.translate.get("speedEvent").subscribe((text) => {
                this.yLabel = text;
            });
            this.text = "";
        }
        else if (this.type == 4) {
            this.translate.get("brakingEvent").subscribe((text) => {
                this.yLabel = text;
            });
            this.text = "";
        }
        else if (this.type == 5) {
            this.translate.get("accEvent").subscribe((text) => {
                this.yLabel = text;
            });
            this.text = "";
        }
        else if (this.type == 6) {
            this.translate.get("cornerEvent").subscribe((text) => {
                this.yLabel = text;
            });
            this.text = "";
        }
        if (label[0].includes('kmph')) {
            this.translate.get("kmph").subscribe((text) => {
                label = label.map((x) => {
                    x = x.split(' ')[0] + ' ' + text;
                    return x;
                });
            });
        }
        let fontFamily = "";
        let fontW = "";
        if (this.browsername == "safari") {
            fontFamily = "ModernEra";
            fontW = "600";
        }
        else {
            fontFamily = "ModernEra_Bold";
            fontW = "700";
        }
        let htmlRef = this.elementRef.nativeElement.querySelector(`#${this.id}`);
        if (this.barchartdata)
            this.barchartdata.destroy();
        let _this = this;
        this.barchartdata = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](htmlRef, {
            type: "bar",
            data: {
                labels: label || [
                    "81 - 100+ kmph",
                    "71 - 80 kmph",
                    "50 - 70 kmph",
                    "00 - 30 kmph",
                ],
                datasets: [
                    {
                        label: this.text,
                        data: this.data || [20, 30, 25, 54, 24],
                        backgroundColor: [
                            "#46E18C",
                            "#46E18C",
                            "#46E18C",
                            "#46E18C",
                            "#46E18C",
                        ],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        position: "top",
                    },
                    title: {
                        display: false,
                    },
                    datalabels: {
                        font: {
                            size: 10,
                            family: "ModernEra_Bold",
                        },
                        anchor: "end",
                        align: "end",
                        color: "#001E50",
                        formatter: function (value, context) {
                            return _this.service.convertToDutch(value);
                        },
                    },
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (index, labels) {
                                if (/\s/.test(label[index])) {
                                    return label[index].split(" ");
                                }
                                else {
                                    return label[index];
                                }
                            },
                            color: "#001E50",
                            font: {
                                size: 10,
                                family: fontFamily,
                                weight: fontW,
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#001E50",
                            font: {
                                size: 12,
                                family: fontFamily,
                                weight: fontW,
                            },
                            callback: function (value, index, values) {
                                return Math.round(Number(value));
                            },
                        },
                        title: {
                            display: true,
                            text: this.yLabel,
                            color: "#667280",
                            font: {
                                size: 10,
                                family: "ModernEra",
                                weight: "700",
                            },
                        },
                        grid: {
                            drawOnChartArea: false,
                        },
                        max: Math.max(...this.data) * 1.1,
                    },
                },
            },
            plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__["default"]],
        });
    }
}
BarChartComponent.??fac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"])); };
BarChartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], inputs: { id: "id", data: "data", label: "label", type: "type" }, decls: 2, vars: 1, consts: [[1, "speedChart", 2, "height", "270px"], [3, "id"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", ctx.id);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-bar-chart",
                templateUrl: "./bar-chart.component.html",
                styleUrls: ["./bar-chart.component.scss"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map