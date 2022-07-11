(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scoreComparision-score-comparision-module"], {
    /***/
    "4HGt":
    /*!***************************************************************************!*\
      !*** ./src/app/main/scoreComparision/score-comparision-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ScoreComparisionRoutingModule */

    /***/
    function HGt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScoreComparisionRoutingModule", function () {
        return ScoreComparisionRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _score_comparision_dashboard_score_comparision_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./score-comparision-dashboard/score-comparision-dashboard.component */
      "eHjk");

      var routes = [{
        path: "",
        component: _score_comparision_dashboard_score_comparision_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["ScoreComparisionDashboardComponent"],
        pathMatch: 'full'
      }];

      var ScoreComparisionRoutingModule = /*#__PURE__*/_createClass(function ScoreComparisionRoutingModule() {
        _classCallCheck(this, ScoreComparisionRoutingModule);
      });

      ScoreComparisionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ScoreComparisionRoutingModule
      });
      ScoreComparisionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ScoreComparisionRoutingModule_Factory(t) {
          return new (t || ScoreComparisionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScoreComparisionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreComparisionRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "7Nu/":
    /*!*******************************************************************!*\
      !*** ./src/app/main/scoreComparision/score-comparision.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ScoreComparisionModule */

    /***/
    function Nu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScoreComparisionModule", function () {
        return ScoreComparisionModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _score_comparision_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./score-comparision-routing.module */
      "4HGt");
      /* harmony import */


      var _score_comparision_dashboard_score_comparision_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./score-comparision-dashboard/score-comparision-dashboard.component */
      "eHjk");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_config_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/config/material */
      "Uo7g");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var ngx_gauge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-gauge */
      "Mumg");
      /* harmony import */


      var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-daterangepicker-material */
      "YhS8");

      var ScoreComparisionModule = /*#__PURE__*/_createClass(function ScoreComparisionModule() {
        _classCallCheck(this, ScoreComparisionModule);
      });

      ScoreComparisionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ScoreComparisionModule
      });
      ScoreComparisionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ScoreComparisionModule_Factory(t) {
          return new (t || ScoreComparisionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _score_comparision_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScoreComparisionRoutingModule"], src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_8__["NgxGaugeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_9__["NgxDaterangepickerMd"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
          extend: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScoreComparisionModule, {
          declarations: [_score_comparision_dashboard_score_comparision_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ScoreComparisionDashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _score_comparision_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScoreComparisionRoutingModule"], src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_8__["NgxGaugeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_9__["NgxDaterangepickerMd"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreComparisionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_score_comparision_dashboard_score_comparision_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ScoreComparisionDashboardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _score_comparision_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScoreComparisionRoutingModule"], src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_8__["NgxGaugeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_9__["NgxDaterangepickerMd"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
              extend: true
            })]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "eHjk":
    /*!************************************************************************************************************!*\
      !*** ./src/app/main/scoreComparision/score-comparision-dashboard/score-comparision-dashboard.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ScoreComparisionDashboardComponent */

    /***/
    function eHjk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScoreComparisionDashboardComponent", function () {
        return ScoreComparisionDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/config/app-config */
      "Tr6M");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-daterangepicker-material */
      "YhS8");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var ngx_gauge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-gauge */
      "Mumg");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ScoreComparisionDashboardComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Harsh Acceleration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Harsh Braking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Harsh Cornering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Speeding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Idiling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ScoreComparisionDashboardComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Safe score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Speeding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Idiling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hash Acceleration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hash Braking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Hash Cornering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ScoreComparisionDashboardComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Caculated Exception");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Harsh Acceleration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-gauge", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Harsh Braking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngx-gauge", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Harsh Cornering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngx-gauge", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Speeding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ngx-gauge", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Idiling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ngx-gauge", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "TSP Exception ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Harsh Acceleration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ngx-gauge", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Harsh Braking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ngx-gauge", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Harsh Cornering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "ngx-gauge", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Speeding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "ngx-gauge", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Idiling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "ngx-gauge", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.idling)("thick", 15)("size", 100)("thresholds", ctx_r3.thresholdConfig)("min", -10)("max", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.speed)("thick", 15)("size", 100)("thresholds", ctx_r3.thresholdConfig)("min", -10)("max", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.cornering)("thick", 15)("size", 100)("thresholds", ctx_r3.thresholdConfig)("min", -10)("max", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.acceleration)("thick", 15)("size", 100)("thresholds", ctx_r3.thresholdConfig)("min", -10)("max", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.braking)("thick", 15)("size", 100)("thresholds", ctx_r3.thresholdConfig)("min", -10)("max", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.idling)("thick", 15)("size", 100)("thresholds", ctx_r3.thresholdConfig)("min", -10)("max", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.speed)("thick", 15)("size", 100)("thresholds", ctx_r3.thresholdConfig)("min", -10)("max", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.cornering)("thick", 15)("size", 100)("thresholds", ctx_r3.thresholdConfig)("min", -10)("max", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.acceleration)("thick", 15)("size", 100)("thresholds", ctx_r3.thresholdConfig)("min", -10)("max", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.braking)("thick", 15)("size", 100)("thresholds", ctx_r3.thresholdConfig)("min", -10)("max", 10);
        }
      }

      function ScoreComparisionDashboardComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Caculated Exception");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "TSP Exception");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          applyLabel: "Set Date"
        };
      };

      var ScoreComparisionDashboardComponent = /*#__PURE__*/function () {
        function ScoreComparisionDashboardComponent() {
          var _this = this;

          _classCallCheck(this, ScoreComparisionDashboardComponent);

          this.tableView = 'table';
          this.isCollapsed = true; // GUAGE CHART VARIABLES

          this.hideToggle = false;
          this.gaugeType = "semi";
          this.thresholdConfig = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].gaugeThreshold; // stacked bar variable

          this.colorBox = ["#ed502e", "#604EFF", "#FFEA6C", "#4dbfff", "#2A1E91"];
          this.stackBar = [{
            value: 0,
            "class": "ridOfmax1",
            speed: 0,
            color: ''
          }, {
            value: 0,
            "class": "busyRoad1",
            speed: 0,
            color: ''
          }, {
            value: 0,
            "class": "quietRoad1",
            speed: 0,
            color: ''
          }, {
            value: 0,
            "class": "buildUp1",
            speed: 0,
            color: ''
          }, {
            value: 0,
            "class": "ridOfHighSpeed1",
            speed: 0,
            color: ''
          }];
          this.showStackBar = [];
          this.noRoadTypeData = false;
          this.speedProfile = {
            'speed': [],
            "limit": [],
            'time': []
          };
          this.accProfile = {
            'acc': [],
            "deacc": [],
            'time': []
          };
          this.alerts = {};
          this.exceptionTypeObj = {
            "speed": "Speeding",
            "breaking": "Braking",
            "acceleration": "Acceleration",
            "cornering": "Cornering",
            "idling": "Idiling"
          };
          this.exceptionArray = {};
          this.exceptionCount = 0;
          this.exceptionKeys = [];
          this.exceptionShowOnMap = false; //Ng Accordian 

          this.hideToggle1 = false;
          this.displayMode = 'default';
          this.multi = true;
          this.disabled = false;
          this.selected = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, 'days').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().set('hours', 23).set('minutes', 59)
          };
          this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, 'days').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().set('hours', 23).set('minutes', 59)
          }; // CALENDAR

          this.ranges = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].momentRange;
          this.alwaysShowCalendars = true;
          this.showRangeLabelOnInput = true;
          this.keepCalendarOpeningWithRange = true;
          this.invalidDates = [];
          this.tooltips = [{
            date: moment__WEBPACK_IMPORTED_MODULE_1__(),
            text: 'Today is just unselectable'
          }, {
            date: moment__WEBPACK_IMPORTED_MODULE_1__().add(2, 'days'),
            text: 'Yeeeees!!!'
          }];

          this.isInvalidDate = function (m) {
            return _this.invalidDates.some(function (d) {
              return d.isSame(m, 'day');
            });
          };

          this.isTooltipDate = function (m) {
            var tooltip = _this.tooltips.find(function (tt) {
              return tt.date.isSame(m, 'day');
            });

            if (tooltip) {
              return tooltip.text;
            } else {
              return false;
            }
          };
        }

        _createClass(ScoreComparisionDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleChange",
          value: function toggleChange(value) {
            this.tableView = value;
          }
        }, {
          key: "rangeClicked",
          value: function rangeClicked(label) {// console.log('[rangeClicked] range is : ', label);
          }
        }, {
          key: "datesUpdated",
          value: function datesUpdated(range) {//  console.log('[datesUpdated] range is : ', range);
          } // toggleChange(value) {
          //   this.tableView = value;
          // }

        }, {
          key: "changeState",
          value: function changeState() {
            this.isCollapsed = !this.isCollapsed; // if (!this.isCollapsed) {
            //   this.resetToLastState();
            // }
          }
        }]);

        return ScoreComparisionDashboardComponent;
      }();

      ScoreComparisionDashboardComponent.ɵfac = function ScoreComparisionDashboardComponent_Factory(t) {
        return new (t || ScoreComparisionDashboardComponent)();
      };

      ScoreComparisionDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScoreComparisionDashboardComponent,
        selectors: [["app-score-comparision-dashboard"]],
        decls: 63,
        vars: 27,
        consts: [[1, "mainFilter"], [1, "filterHeader"], ["aria-controls", "collapseExample", 1, "btn", "btnFiliter", 3, "click"], ["src", "assets/images/filter.svg"], [1, "btn", "btnFilterExport", "enable-click-event"], ["src", "assets/images/export.svg"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "filterBody"], [1, "filterBodyTitle"], ["src", "assets/images/close-circle.svg"], [1, "filterSearch", "fields", "mb-20"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "filterSearchIcon"], ["src", "assets/images/search.svg"], [1, "profileBox"], ["appearance", "outline", 1, "ngx-daterangepicker-action-left", "fields", "fileld50"], ["matInput", "", "ngxDaterangepickerMd", "", "readonly", "", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ranges", "showClearButton", "showCancel", "linkedCalendars", "isTooltipDate", "isInvalidDate", "locale", "keepCalendarOpeningWithRange", "showRangeLabelOnInput", "ngModelChange", "rangeClicked", "datesUpdated"], [1, "calIconRight"], ["src", "assets/images/calendar.svg"], [1, "d-flex", "flex-wrap", "justify-content-between", "mt-2"], [1, "d-flex", "flex-wrap"], ["mat-button", "", 1, "filterBtn", "cancleBtn"], ["mat-button", "", 1, "filterBtn", "applyBtn"], [1, "detailPage"], [1, "tripDetails", "tripDetailFullwidth", "pb-4"], [1, "scoreHisTop"], ["class", "getRide pt-1 pb-1", 4, "ngIf"], ["class", "ruleTab", 4, "ngIf"], [1, "scoreTopLeft"], [1, ""], [1, "historyButton", 3, "value", "change"], ["value", "table"], ["width", "20", "height", "21", "viewBox", "0 0 20 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.3332 5.29199C18.3332 5.63717 18.0534 5.91699 17.7082 5.91699H2.29151C1.94633 5.91699 1.6665 5.63717 1.6665 5.29199C1.6665 4.94681 1.94633 4.66699 2.29151 4.66699H17.7082C18.0534 4.66699 18.3332 4.94681 18.3332 5.29199Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.3332 10.5003C18.3332 10.8455 18.0534 11.1253 17.7082 11.1253H2.2915C1.94633 11.1253 1.6665 10.8455 1.6665 10.5003C1.6665 10.1551 1.94633 9.87532 2.2915 9.87532H17.7082C18.0534 9.87532 18.3332 10.1551 18.3332 10.5003Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.3332 15.7087C18.3332 16.0538 18.0534 16.3337 17.7082 16.3337H2.2915C1.94633 16.3337 1.6665 16.0538 1.6665 15.7087C1.6665 15.3635 1.94633 15.0837 2.2915 15.0837H17.7082C18.0534 15.0837 18.3332 15.3635 18.3332 15.7087Z", "fill", "white"], ["value", "map"], ["width", "20", "height", "21", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 20 20", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 20 20"], ["type", "text/css"], ["d", "M13,17.8c-0.4,0-0.7-0.1-1-0.2l-4.4-2.2c-0.3-0.1-0.8-0.1-1,0l-2,1.1C3.9,17,3,17.1,2.3,16.7\n                               c-0.7-0.4-1-1.2-1-2.1V6.5c0-0.7,0.5-1.6,1.1-2l3.6-2.1c0.6-0.3,1.5-0.4,2.1-0.1l4.4,2.2c0.3,0.1,0.8,0.1,1,0l2-1.1\n                               c0.8-0.5,1.7-0.5,2.4-0.2c0.7,0.4,1,1.2,1,2.1v8.1c0,0.7-0.5,1.6-1.1,2l-3.6,2.1C13.9,17.7,13.5,17.8,13,17.8z M7.2,14.1\n                               c0.4,0,0.7,0.1,1,0.2l4.4,2.2c0.3,0.1,0.8,0.1,1,0l3.6-2.1c0.3-0.2,0.5-0.6,0.5-0.9V5.4c0-0.5-0.2-0.9-0.4-1.1\n                               c-0.3-0.2-0.7-0.1-1.2,0.2l-2,1.1C13.6,5.9,12.7,6,12,5.7L7.7,3.5c-0.3-0.1-0.8-0.1-1,0L3,5.6C2.8,5.7,2.5,6.2,2.5,6.5v8.1\n                               c0,0.5,0.2,0.9,0.4,1.1c0.3,0.2,0.7,0.1,1.2-0.2l2-1.1C6.4,14.2,6.8,14.1,7.2,14.1z", 1, "st0"], ["d", "M7.1,14.8c-0.3,0-0.6-0.3-0.6-0.6V3.3c0-0.3,0.3-0.6,0.6-0.6S7.7,3,7.7,3.3v10.8C7.7,14.5,7.5,14.8,7.1,14.8z", 1, "st0"], ["d", "M13.1,17.3c-0.3,0-0.6-0.3-0.6-0.6V5.5c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v11.1\n                               C13.7,17,13.4,17.3,13.1,17.3z", 1, "st0"], [4, "ngIf"], ["class", "tripDetailTopBox", 4, "ngIf"], [1, "getRide", "pt-1", "pb-1"], [1, "ridOfmax1"], [1, "braking"], [1, "warning"], [1, "speed"], [1, "idiling"], [1, "ruleTab"], [1, "active"], [1, "tripDetailTopBox"], [1, "scroreTitle"], [1, "speedRoadSec"], [1, "speedRoadLeft"], [1, "scoreBoxGuage"], [1, "speedGraphTitle"], [3, "type", "value", "thick", "size", "thresholds", "min", "max"], [1, "speedRoadRight"], [1, "scoreBoxRight"], [1, "filerHalf"], ["id", "chartDiv"], ["id", "myChart"], [1, "scroreTitle", "text-center"], ["id", "myChartAcc"]],
        template: function ScoreComparisionDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Score comparision ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreComparisionDashboardComponent_Template_button_click_4_listener() {
              return ctx.changeState();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function ScoreComparisionDashboardComponent_Template_div_ngbCollapseChange_8_listener($event) {
              return ctx.isCollapsed = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Filters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScoreComparisionDashboardComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.searchString = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScoreComparisionDashboardComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.selectedShow = $event;
            })("rangeClicked", function ScoreComparisionDashboardComponent_Template_input_rangeClicked_25_listener($event) {
              return ctx.rangeClicked($event);
            })("datesUpdated", function ScoreComparisionDashboardComponent_Template_input_datesUpdated_25_listener($event) {
              return ctx.datesUpdated($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ScoreComparisionDashboardComponent_div_41_Template, 11, 0, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ScoreComparisionDashboardComponent_div_42_Template, 13, 0, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-button-toggle-group", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScoreComparisionDashboardComponent_Template_mat_button_toggle_group_change_45_listener($event) {
              return ctx.toggleChange($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-button-toggle", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-button-toggle", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "svg", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "style", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " .st0 { fill: #C5CDD4; } ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ScoreComparisionDashboardComponent_div_61_Template, 55, 70, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ScoreComparisionDashboardComponent_div_62_Template, 11, 0, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchString);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 22, "selectRange"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedShow)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx.alwaysShowCalendars)("ranges", ctx.ranges)("showClearButton", false)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx.isTooltipDate)("isInvalidDate", ctx.isInvalidDate)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0))("keepCalendarOpeningWithRange", ctx.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx.showRangeLabelOnInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 24, "apply"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableView == "map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableView == "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.tableView);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableView == "map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableView == "table");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["DaterangepickerDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggle"], ngx_gauge__WEBPACK_IMPORTED_MODULE_11__["ɵa"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]],
        styles: [".scoreHisTop[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 24px;\n}\n.scoreHisTop[_ngcontent-%COMP%]   .getRide[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.scoreHisTop[_ngcontent-%COMP%]   .getRide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.scoreHisTop[_ngcontent-%COMP%]   .scoreTopLeft[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: center;\n}\n.scoreHisTop[_ngcontent-%COMP%]   .ruleTab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n.scoreHisTop[_ngcontent-%COMP%]   .ruleTab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 6px 24px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 40px;\n  color: #939EAA;\n  font: 600 15px/18px ModernEra;\n  margin: 12px 16px 12px 0;\n}\n.scoreHisTop[_ngcontent-%COMP%]   .ruleTab[_ngcontent-%COMP%]   p.active[_ngcontent-%COMP%] {\n  color: #0064FF;\n}\n.scroreTitle[_ngcontent-%COMP%] {\n  font: 600 14px/24px ModernEra;\n  color: #001e50;\n}\n.ruleTab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n.ruleTab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 6px 24px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 40px;\n  color: #939EAA;\n  font: 600 15px/18px ModernEra;\n  margin: 12px 16px 12px 0;\n}\n.ruleTab[_ngcontent-%COMP%]   p.active[_ngcontent-%COMP%] {\n  color: #0064FF;\n}\n  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 35px;\n}\n  .mat-button-toggle-checked {\n  background-color: #0064ff;\n}\n  .mat-button-toggle-checked svg path {\n  fill: #ffffff !important;\n}\n  .mat-button-toggle-button svg path {\n  fill: #c5cdd4;\n}\n.graph[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #ffffff;\n  box-shadow: 0px -5px 123px rgba(87, 84, 160, 0.08);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc2NvcmUtY29tcGFyaXNpb24tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FDRUE7RURpSUUsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQ2pJQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUY7QUFBRTtFQUNFLGNBQUE7QUFFSjtBQURJO0VBQ0UsZ0JBQUE7QUFHTjtBQUNFO0VEMkhBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUMzSEUsbUJBQUE7QUFHSjtBQUFFO0VEc0hBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNuSEY7QUFGSTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FBSU47QUFGTTtFQUNFLGNBQUE7QUFJUjtBQUVBO0VBQ0UsNkJBQUE7RUFDQSxjRDdCZ0I7QUM4QmxCO0FBZ0JBO0VEaUZFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUM3RkY7QUFhRTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FBWEo7QUFhSTtFQUNFLGNBQUE7QUFYTjtBQWlCQTtFQUNFLGlCQUFBO0FBZEY7QUFpQkE7RUFDRSx5QkRwRWE7QUNzRGY7QUFpQkk7RUFDRSx3QkFBQTtBQWZOO0FBc0JJO0VBQ0UsYUFBQTtBQW5CTjtBQXdCQTtFQUNFLGdCQUFBO0VEK0VBLG1CQTFLTTtFQTJLTixrREFBQTtFQUNBLGtCQUFBO0FDbkdGIiwiZmlsZSI6InNjb3JlLWNvbXBhcmlzaW9uLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qTkVXIENPTE9SIExJU1QqL1xuXG5cbiRsaWdodGJsdWU6ICMwMDU3ZmY7XG4kZHJha19CbHVlOiAjMjk2MmZmO1xuJHNibHVlOiAjMWIxOTRiO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGxpZ2h0YmxhY2s6ICMxNzFjMjI7XG4kbGlnaHRncmF5OiAjOTM5ZWFhO1xuJGZncmF5OiAjN2Q4NTkyO1xuJFNlY29uZGFyeV9ibGFjazogIzAwMWU1MDtcbiRQcmltYXJ5X0JsdWU6ICMwMDY0ZmY7XG4kU2Vjb25kYXJ5X0JsdWU6ICM2MDRlZmY7XG4kYnRuRXhwb3J0Qmx1ZTogIzRjNmZmZjtcbiRkYW5nZXI6ICNmZjcwNzA7XG4kU2Vjb25kYXJ5X0FsZXJ0czogIzAwY2JhMDtcbiRub0luZm86ICMxOGEwZmI7XG4kU2Vjb25kYXJ5X0Rhcms6ICMyYTFlOTE7XG4kZGFyazogIzMyMzMzODtcbiRib3JkZXJDb2xvcjogI2M1Y2RkNDtcbiRsaWdodFdoaXRlY29sb3I6ICNmOWZhZmI7XG4kZ3JvdXBCb3JkZXJEYXRhOiAjZTZlN2U4O1xuJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I6ICNlMGUzZTc7XG4kd2hpdGVTaGFkb3c6ICNlOWViZjA7XG4kc2t5Qmx1ZTogIzRkYmZmZjtcbiR5ZWxsb3c6ICNmZmVhNmM7XG4kb3JhbmdlOiAjZmY5OTUwO1xuJGJvZHlCYWNrR3JheTogI2ZkZmNmZjtcbiRsaWdodEJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuJGV4cG9ydEJ0bjogcmdiYSg5NiwgNzgsIDI1NSwgMC4xKTtcbiRkYW5nZXJCb3hCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kZ3JlZW5Cb3hCYWNrOiByZ2JhKDAsIDIwMywgMTYwLCAwLjEpO1xuJHRhYmxlT2RkQmFjazogI2ZiZmJmYjtcbiRTZWNvbmRhcnlfQmx1ZV9kYXJrOiAjNzU1NWNmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJG5pZ2h0VGV4dENvbG9yOiAjNDc0ZjVhO1xuJG5pZ2h0QmFja0JsYWNrOiAjNjY3MjgwO1xuJHdoaXRlQ29sb3I6ICNlMWUxZTE7XG4kcmVkQ29sb3I6ICNlZDUwMmU7XG4kZGFya19ncmF5OiAjYmRiZGJkO1xuJGhlbHBCdG5fQmx1ZTogIzYwMmFhYztcbiRkYXRlQ29sb3I6ICM0ZTVkNzg7XG4kZGF5Q29sb3I6ICM0ZTVkNzg3YTtcbiRyZWRBY3RpdmVDb2xvcjogI2ZhMTQ2NDtcbiR3aGl0ZUNvbG9yQmFjazogI2Y3ZmNmZjtcbiRibGFja0Rhcms6ICMyNzI3MmU7XG4kd2hpdGVHcmF5QmFjazogI2Y3ZmNmZjtcbi8vaW5wdXQgY3NzXG4kYm9yZGVyQ29sb3JMaWdodDogI2U4ZWNlZTtcbiRib3JkZXJDb2xvckdyYXk6ICNlZWVkZjA7XG4kbGlnaHRXaGl0ZTogI2U1ZWVmZjtcbiRidG5EZWZhdWx0V2hpdGU6ICNmNGY2Zjg7XG4kbWF0Qm9yZGVyOiAjZTZlN2U4O1xuXG4kdG9nZ2xlQWN0aXZlOiAjMzcxOTg2O1xuXG4vL3JnYmEgY3NzXG4kYmVoYXZpb3VyQmFjazogcmdiYSg5NiwgNzgsIDI1NSwgMC4wOCk7XG4kbW9udGhTaG93QmFjazogcmdiYSg4NiwgNjYsIDI1NSwgMC4xKTtcbiRib3hTaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4kYmFja0RhbmdlcjogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjQpO1xuJGJhY2tHcmVlbjogcmdiKDAgMjAzIDE2MCAvIDE1JSk7XG4kc2FmZVNjb3JlQmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGJhY2tHcmF5Q29tbW9uOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuMDUpO1xuJHF1aXRlUm9hZDogI2ZmZWE2YztcblxuLy9uZXcgY29sb3IgdmVyc2lvbjJcbiRyZWRFeGNlcHRpb246ICNmYTE0NjQ7XG4kYm94c2hhZG93OiAwcHggOHB4IDI1cHggcmdiYSg5OCwgOTgsIDk4LCAwLjA1KTtcbiR0b29sdGlwc1RleHRDb2xvcjogIzE2MTkyYztcblxuLy9ib3ggZ3JhZGlhbnQgQmFja2dyb3VuZFxuJHZlaGljYWxCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjODFiYmZmIC00LjIlLCAjMDA4NWZmIDk5LjM3JSk7XG4kZHJpdmVuQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNWE2YmZmIDAuNjklLCAjNjA0ZWZmIDEwMi4yJSk7XG4kYmVoYXZpb3VyQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjOGM0NmZmIDAuNjklLCAjZmY4MDgwIDEwMi4yJSk7XG4kZXZCbG9ja0JveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjZmZlOTc3IDEwMi4xNyUpO1xuJGljZUJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuXG4vL2JveCB2MiBncmFkaWFudCBCYWNrZ3JvdW5kXG4kaWNlQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuJGRyaXZlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgIzM2NTZmZiAxMDIuMTclKTtcbiRraWxvbWV0ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzMy4zOWRlZywgIzQ5ODVmOCAtNC4yMiUsICM0ZGJmZmYgMTA0LjI0JSk7XG4kc2FmZURyaXZpbmdCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjNDVjOGYxIC0xOC41NiUsICNlZWUwOTcgMTAyLjE3JSk7XG4kZHJpdmVyMUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM3NmQ2ZWUgMC42OSUsICM3Njk4ZGIgMTAyLjIlKTtcbiR0cmlwQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2MyYTNhMCAtMTguNTYlLCAjZTljOGE3IDEwMi4xNyUpO1xuJHZlaGljbGVCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgI2RmOTg5NSAtNC4yJSwgI2MyYTNhMCAxMDguMTUlKTtcblxuLy9zY3JvbGwgYmFyIGNvbG9yIGNvZGVcbiRzY3JvbGxCbGFjazogIzg4ODtcbiRzY3JvbGxXaGl0ZTogI2YxZjFmMTtcbiRzY3JvbGxIb3ZlckJsYWNrOiAjNTU1O1xuXG4vL3doaXRlIGxhYmVsIGZsZWFkIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojRUZBOTUyO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG5cbi8vd2hpdGUgbGFiZWwgZGhsIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojZDQwNTExO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG4vLyAkd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6I0ZGQ0MwMDtcblxuLy93aGl0ZSBsYWJlbCBaZWdvIGNvbG9yXG4kV2hpdGVfbGFiaW5nX0JsYWNrOiAjMDAwMDAwO1xuJFdoaXRlX2xhYmluZ19ZZWxsb3c6ICMzNzE5ODc7XG4kV2hpdGVfbGFiaW5nX3NreUJsdWU6ICM0ZGJmZmY7XG4kV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiAjZWVmOWZmO1xuJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiAjZmZjYzAwO1xuJGNvbG9yX3Zpb2xldDogIzg3NzViNztcbiRjb2xvcl92aW9sZXRfZGFyazogIzMyMTk4NztcbiRjb2xvcl9saWdodF9ncmV5OiAjZTVlNWU1O1xuJGNvbG9yLXZpb2xldC1saWdodDogI2FjOTRlZTtcbiRjb2xvci1ibHVlLWxpZ2h0OiAjZjVmNWY1O1xuJGNvbG9yLXRhYmxlLWhlYWRpbmc6ICMyNzI1MmQ7XG4kdHJpcEhpc3RCYWNrOiByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuMDUpO1xuJHNhZmVCYWNrQ29sb3I6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMDUpO1xuJGNvbG9yX2xpZ2h0X2JsdWU6ICM0NWNiZmM7XG4kY29sb3JfZ3JhcGhfdm9pbGV0OiAjMzcxYTg3O1xuXG4vL2dyYWRpYW50IEJhY2tncm91bmRcbiRlcnJvckdyYWRpYW50OiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMGRlZyxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXG4gICksXG4gICNmNDQzMzY7XG5cbkBtaXhpbiBmbGV4LWp1c3RpZnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGZsZXgtc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5AbWl4aW4gZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbkBtaXhpbiAgbGluZS1jbGFtcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I7XG59XG5cbkBtaXhpbiBidG5GaWx0ZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbkBtaXhpbiBtc2cge1xuICBmb250OiAxMnB4LzE4cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweCAzMHB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG5AbWl4aW4gbWFpbkJveHdpdGhCYWNrIHtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggLTVweCAxMjNweCByZ2JhKDg3LCA4NCwgMTYwLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLy8gQG1peGluIGJ1dHRvbi1ncmVlbiB7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogIzExRDBBMjtcbi8vIGJvcmRlci1yYWRpdXM6IDE0NXB4O1xuLy8gZm9udC13ZWlnaHQgOiA2MDA7XG4vLyBmb250LXNpemUgOiAxNXB4O1xuLy8gbGluZS1oZWlnaHQgOiAxOHB4O1xuLy8gY29sb3IgOiAjZmZmZmZmO1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLWJsdWUge1xuLy8gZm9udCA6IDEzcHgvMTZweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBiYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM3NTU1Q0YsICM3NTU1Q0YpLCAjNjQzRkMwO1xuLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbi8vIG1heC13aWR0aCA6IDE0MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogMzhweDtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1yZWQge1xuLy8gZm9udCA6IDE2cHgvMjBweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBib3JkZXItcmFkaXVzOiAxMDBweDtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjRkY2NTY1O1xuLy8gfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5zY29yZUhpc1RvcCB7XG4gIEBpbmNsdWRlIGZsZXgtanVzdGlmeTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMThweCAyNHB4O1xuXG4gIC5nZXRSaWRlIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgLnNjb3JlVG9wTGVmdCB7XG4gICAgQGluY2x1ZGUgZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnJ1bGVUYWIge1xuICAgIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XG5cbiAgICBwIHtcbiAgICAgIHBhZGRpbmc6IDZweCAyNHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICBjb2xvcjogIzkzOUVBQTtcbiAgICAgIGZvbnQ6IDYwMCAxNXB4LzE4cHggTW9kZXJuRXJhO1xuICAgICAgbWFyZ2luOiAxMnB4IDE2cHggMTJweCAwO1xuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjMDA2NEZGO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2Nyb3JlVGl0bGUge1xuICBmb250OiA2MDAgMTRweC8yNHB4IE1vZGVybkVyYTtcbiAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG59XG5cbi8vIC5maWx0ZXJCb2R5IC5maWx0ZXJTZWFyY2h7XG4vLyAgIGlucHV0e1xuLy8gICAgIGhlaWdodDogNTFweDtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4vLyAgIH1cbi8vICAgLmZpbHRlclNlYXJjaEljb24ge1xuLy8gICAgIGxlZnQ6IDI3cHg7XG4vLyAgICAgdG9wOiAxM3B4O1xuLy8gICAgIGltZ3tcbi8vICAgICB3aWR0aDogMjZweDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0gXG5cbi5ydWxlVGFiIHtcbiAgQGluY2x1ZGUgZmxleC1zdGFydDtcblxuICBwIHtcbiAgICBwYWRkaW5nOiA2cHggMjRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgY29sb3I6ICM5MzlFQUE7XG4gICAgZm9udDogNjAwIDE1cHgvMThweCBNb2Rlcm5FcmE7XG4gICAgbWFyZ2luOiAxMnB4IDE2cHggMTJweCAwO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6ICMwMDY0RkY7XG4gICAgfVxuICB9XG59XG5cblxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRQcmltYXJ5X0JsdWU7XG5cbiAgc3ZnIHtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiB7XG4gIHN2ZyB7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAjYzVjZGQ0O1xuICAgIH1cbiAgfVxufVxuXG4uZ3JhcGgge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBAaW5jbHVkZSBtYWluQm94d2l0aEJhY2s7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreComparisionDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-score-comparision-dashboard',
            templateUrl: './score-comparision-dashboard.component.html',
            styleUrls: ['./score-comparision-dashboard.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=scoreComparision-score-comparision-module-es5.js.map