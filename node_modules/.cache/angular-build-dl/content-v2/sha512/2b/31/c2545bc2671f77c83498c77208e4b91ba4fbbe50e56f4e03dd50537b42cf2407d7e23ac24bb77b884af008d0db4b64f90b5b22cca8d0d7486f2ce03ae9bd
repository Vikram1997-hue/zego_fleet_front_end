(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fleetOverview-vehicle-vehicle-module"], {
    /***/
    "7wCK":
    /*!*********************************************************************************************!*\
      !*** ./src/app/main/fleetOverview/vehicle/vehicle-dashboard/vehicle-dashboard.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: VehicleDashboardComponent */

    /***/
    function wCK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleDashboardComponent", function () {
        return VehicleDashboardComponent;
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


      var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/config/route-config */
      "1r8O");
      /* harmony import */


      var src_app_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/modal/modal.component */
      "ajRT");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/components/snackbar/snackbar.component */
      "Ba6F");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _vehicle_cards_vehicle_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../vehicle-cards/vehicle-cards.component */
      "Bt+0");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function VehicleDashboardComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-vehicle-cards", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", "#46E18C")("type", 1)("data", ctx_r0.bestScore);
        }
      }

      function VehicleDashboardComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-vehicle-cards", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", "#F3543F")("type", 2)("data", ctx_r1.worstScore);
        }
      }

      function VehicleDashboardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-vehicle-cards", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", "#FDDBD7")("type", 3)("data", ctx_r2.mostTravelled);
        }
      }

      function VehicleDashboardComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-vehicle-cards", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", "#FDDBD7")("type", 4)("data", ctx_r3.probablyCrashed);
        }
      }

      function VehicleDashboardComponent_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "v.license"), " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDashboardComponent_ng_template_15_td_4_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var element_r32 = ctx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r33.routeToVehicleDetail(element_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32 == null ? null : element_r32.license_plate, " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "v.veh"), " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDashboardComponent_ng_template_15_td_7_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var element_r35 = ctx.$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.routeToVehicleDetail(element_r35);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (element_r35 == null ? null : element_r35.model) || "NA", "");
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "totalkm"), " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDashboardComponent_ng_template_15_td_10_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var element_r38 = ctx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r39.routeToVehicleDetail(element_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r38 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.service.convertToDutch(element_r38 == null ? null : element_r38.total_distance) || "NA", " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "totalTrips"), "");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDashboardComponent_ng_template_15_td_13_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var element_r41 = ctx.$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.routeToVehicleDetail(element_r41);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r41 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.service.convertToDutch(element_r41 == null ? null : element_r41.total_trips) || "NA", " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "harshEvent"), " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDashboardComponent_ng_template_15_td_16_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var element_r44 = ctx.$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r45.routeToVehicleDetail(element_r44);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r44 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.service.convertToDutch(element_r44 == null ? null : element_r44.harsh_event) || "NA", " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "vehScore"), " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDashboardComponent_ng_template_15_td_19_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var element_r47 = ctx.$implicit;

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r48.routeToVehicleDetail(element_r47);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r47 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.service.convertToDutch(element_r47.vehicle_score) || "NA", " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "t.speedScore"), " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDashboardComponent_ng_template_15_td_22_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var element_r50 = ctx.$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r51.routeToVehicleDetail(element_r50);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r50 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.service.convertToDutch(element_r50.speed_score) || "NA", " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "idliScore"), "");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r53 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.service.convertToDutch(element_r53.idiling_score) || "NA", " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "hardAcceleration"), " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDashboardComponent_ng_template_15_td_28_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var element_r54 = ctx.$implicit;

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r55.routeToVehicleDetail(element_r54);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r54 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r25.service.convertToDutch(element_r54.acclaration_score) || "NA", " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "hardBraking"), " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDashboardComponent_ng_template_15_td_31_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var element_r57 = ctx.$implicit;

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r59.routeToVehicleDetail(element_r57);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r57 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r27.service.convertToDutch(element_r57.breaking_score) || "NA", " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_th_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "harshCorner"), "");
        }
      }

      function VehicleDashboardComponent_ng_template_15_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r61 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.service.convertToDutch(element_r61.cornering_score) || "NA", " ");
        }
      }

      function VehicleDashboardComponent_ng_template_15_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 39);
        }
      }

      function VehicleDashboardComponent_ng_template_15_tr_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 40);
        }
      }

      function VehicleDashboardComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function VehicleDashboardComponent_ng_template_15_Template_table_matSortChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r63.sortData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VehicleDashboardComponent_ng_template_15_th_3_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VehicleDashboardComponent_ng_template_15_td_4_Template, 2, 1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VehicleDashboardComponent_ng_template_15_th_6_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VehicleDashboardComponent_ng_template_15_td_7_Template, 3, 1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VehicleDashboardComponent_ng_template_15_th_9_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VehicleDashboardComponent_ng_template_15_td_10_Template, 2, 1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VehicleDashboardComponent_ng_template_15_th_12_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VehicleDashboardComponent_ng_template_15_td_13_Template, 2, 1, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VehicleDashboardComponent_ng_template_15_th_15_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VehicleDashboardComponent_ng_template_15_td_16_Template, 2, 1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VehicleDashboardComponent_ng_template_15_th_18_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VehicleDashboardComponent_ng_template_15_td_19_Template, 2, 1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VehicleDashboardComponent_ng_template_15_th_21_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VehicleDashboardComponent_ng_template_15_td_22_Template, 2, 1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VehicleDashboardComponent_ng_template_15_th_24_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, VehicleDashboardComponent_ng_template_15_td_25_Template, 2, 1, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, VehicleDashboardComponent_ng_template_15_th_27_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, VehicleDashboardComponent_ng_template_15_td_28_Template, 2, 1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VehicleDashboardComponent_ng_template_15_th_30_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VehicleDashboardComponent_ng_template_15_td_31_Template, 2, 1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VehicleDashboardComponent_ng_template_15_th_33_Template, 3, 3, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, VehicleDashboardComponent_ng_template_15_td_34_Template, 2, 1, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, VehicleDashboardComponent_ng_template_15_tr_35_Template, 1, 0, "tr", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, VehicleDashboardComponent_ng_template_15_tr_36_Template, 1, 0, "tr", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r6.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r6.displayedColumns);
        }
      }

      var VehicleDashboardComponent = /*#__PURE__*/function () {
        function VehicleDashboardComponent(router, service, localService, matDialog, activeRoute, _snackBar) {
          _classCallCheck(this, VehicleDashboardComponent);

          this.router = router;
          this.service = service;
          this.localService = localService;
          this.matDialog = matDialog;
          this.activeRoute = activeRoute;
          this._snackBar = _snackBar;
          this.isCollapsed = true;
          this.displayedColumns = ['license_plate', 'model', 'total_distance', 'total_trips', 'harsh_event', 'vehicle_score', 'speed_score', 'idiling_score', 'acclaration_score', 'breaking_score', 'cornering_score'];
          this.page = 1;
          this.limit = 1000;
          this.data = [{}, {}, {}];
          this.pageSizeOptions = [5, 10, 25, 100, 1000];
          this.selectedVehicleCategory = 'all';
          this.selectedVehicle = 'all';
          this.searchCategory = '';
          this.searchVehicle = '';
          this.dashBoardData = {};
          this.vehicleCategoryData = [];
          this.vehicleList = [];
          this.tableDataLoading = true;
          this.filterCalledVehicle = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
          };
          this.selectedShowCopy = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
          };
          this.worstScore = [];
          this.bestScore = [];
          this.probablyCrashed = [];
          this.mostTravelled = [];
          this.horizontalPosition = 'right';
          this.verticalPosition = 'top';
          this.localService.removeItem('vehicleUrl');
          this.selected = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
          };
          this.selectedAgain = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
          };
        }

        _createClass(VehicleDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.filterCalledVehicle = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            this.limit = Number(this.localService.getItem("vehiclePagelimit")) || 1000;

            if (this.activeRoute.snapshot.queryParams.page) {
              this.page = Number(this.activeRoute.snapshot.queryParams.page);
            }

            this.filterCalledVehicle.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500)).subscribe(function (value) {
              if (value) {
                _this.selectedOrgID = _this.localService.getItem("selectedOrgs");

                if (_this.selectedOrgID) {
                  _this.selectedOrgID = JSON.parse(_this.selectedOrgID);
                }

                _this.resetToLastState();

                _this.filterApply();
              }
            });
            this.localService.getFilter().subscribe(function (val) {
              if (val && _this.router.url.split('?')[0] == src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].vehicle.url) {
                _this.filterCalledVehicle.next(true);
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
          }
        }, {
          key: "getVehicleDashboardData",
          value: function getVehicleDashboardData(categoryId, vehicleId, date, search) {
            var _this2 = this;

            var querryParams = this.createQuerryparams(categoryId, vehicleId, search, date);
            this.service.get("vehicles/report?".concat(querryParams)).pipe().subscribe(function (response) {
              if (response.data) {
                _this2.dashboardData = response.data;
              }
            }, function (error) {});
          }
        }, {
          key: "updatePageData",
          value: function updatePageData() {
            var _this3 = this;

            // this.page = 1;
            this.activeRoute.queryParams.subscribe(function (params) {
              // const details:any = params.page;
              _this3.page = (params === null || params === void 0 ? void 0 : params.page) || 1;
            });
            this.totalCount = 0;
            this.searchVehicle = '';
            this.searchCategory = ''; // this.getVehicleDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.selectedShowCopy, this.searchString)
            // this.getDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.selectedShowCopy, this.searchString);

            this.getVehicleList(this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedShowCopy);
            this.getVehicleAnalytics(this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedShowCopy);
          }
        }, {
          key: "getVehicleList",
          value: function getVehicleList(categoryId, vehicleId, search, date) {
            var _this4 = this;

            this.tableDataLoading = true;
            var querryParams = this.createQuerryparams(categoryId, vehicleId, search, date, 'listing');
            this.service.get("vehicle/listing?".concat(querryParams)).pipe().subscribe(function (response) {
              if (response.data) {
                _this4.totalCount = response.data.count;
                response.data.rows.forEach(function (element) {
                  if (element.last_apk_date) {
                    element["class"] = _this4.apkClassCheck(element.last_apk_date);
                  } else {
                    element["class"] = 'noInfo';
                  }
                });
                _this4.dataSource = response.data.rows;
                _this4.tableDataLoading = false;

                _this4.setPage(_this4.page - 1);
              }
            }, function (error) {
              _this4.tableDataLoading = false;
            });
          }
        }, {
          key: "pageChange",
          value: function pageChange(event) {
            if (this.limit !== event.pageSize) {
              var queryParams = {
                page: 1
              };
              this.router.navigate([], {
                queryParams: queryParams,
                queryParamsHandling: 'merge'
              });
              this.page = 1;
            } else {
              var _queryParams = {
                page: event.pageIndex + 1
              };
              this.router.navigate([], {
                queryParams: _queryParams,
                queryParamsHandling: 'merge'
              });
              this.page = event.pageIndex + 1;
            }

            this.limit = event.pageSize;
            this.localService.setItem("vehiclePagelimit", this.limit);
            this.isCollapsed = true;
            var category = this.localService.getItem("category");
            var vehicle = this.localService.getItem("vehicle");
            var search = this.localService.getItem("search");
            this.getVehicleList(category, vehicle, search, this.selectedShowCopy);
          }
        }, {
          key: "apkClassCheck",
          value: function apkClassCheck(date) {
            if (moment__WEBPACK_IMPORTED_MODULE_1__(date).diff(moment__WEBPACK_IMPORTED_MODULE_1__(), 'days') > 30) {
              return 'success';
            } else {
              return 'danger';
            }
          }
        }, {
          key: "changeState",
          value: function changeState() {
            this.isCollapsed = !this.isCollapsed;

            if (!this.isCollapsed) {
              this.resetToLastState();
            }
          }
        }, {
          key: "resetToLastState",
          value: function resetToLastState() {
            var category = this.localService.getItem("category");
            var vehicle = this.localService.getItem("vehicle");
            var search = this.localService.getItem("search");
            var date = this.localService.getItem("dateRange");

            if (date) {
              date = JSON.parse(date);
              this.selectedShowCopy = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.startDate),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.endDate)
              };
              this.selectedShow = this.selectedShowCopy;
            } else {
              this.selectedShow = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
              };
              this.selectedShowCopy = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
              };
            }

            search ? this.searchString = search : this.searchString = '';
            category && category !== 'all' ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = 'all';
            vehicle && vehicle !== 'all' ? this.selectedVehicle = JSON.parse(vehicle) : this.selectedVehicle = 'all';
          }
        }, {
          key: "filterApply",
          value: function filterApply() {
            this.localService.setItem("category", this.selectedVehicleCategory);
            this.localService.setItem("vehicle", this.selectedVehicle);
            this.localService.setItem("search", this.searchString);
            this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
            this.selectedShowCopy = this.selectedShow;
            this.updatePageData();
            this.changeState();
          }
        }, {
          key: "createQuerryparams",
          value: function createQuerryparams(categoryId, vehicleId, search, date, listing) {
            var querryParams;

            if (listing) {
              querryParams = "organisation=".concat(JSON.stringify(this.selectedOrgID), "&page=").concat(this.page, "&limit=").concat(this.limit);
            } else {
              querryParams = "organisation=".concat(JSON.stringify(this.selectedOrgID));
            }

            var val = this.service.checkCustomDate(moment__WEBPACK_IMPORTED_MODULE_1__(date.startDate).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_1__(date.endDate).format('YYYY-MM-DD'));

            if (val == undefined) {
              querryParams = querryParams + "&custom_filter=true&filter_value=''";
            } else {
              if (categoryId && categoryId !== 'all' || vehicleId && vehicleId !== 'all' || search) {
                querryParams = querryParams + "&custom_filter=true&filter_value=''";
              } else {
                querryParams = querryParams + "&custom_filter=false&filter_value=".concat(val);
              }
            }

            if (categoryId && categoryId !== 'all') {
              querryParams = querryParams + "&vehicle_category=[".concat(categoryId, "]");
            }

            if (vehicleId && vehicleId !== 'all') {
              querryParams = querryParams + "&vehicle=[".concat(vehicleId, "]");
            }

            if (search) {
              querryParams = querryParams + "&search=".concat(search);
            }

            querryParams = querryParams + "&from_date=".concat(moment__WEBPACK_IMPORTED_MODULE_1__(date.startDate).format('YYYY-MM-DD'));
            querryParams = querryParams + "&to_date=".concat(moment__WEBPACK_IMPORTED_MODULE_1__(date.endDate).format('YYYY-MM-DD'));
            return querryParams;
          }
        }, {
          key: "routeToVehicleDetail",
          value: function routeToVehicleDetail(data) {
            this.localService.setItem('vehicleId', data.id);
            this.localService.setItem('vehicleUrl', this.router.url);
            this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].vehicleDetail.url]);
          }
        }, {
          key: "getVehicleAnalytics",
          value: function getVehicleAnalytics(categoryId, vehicleId, search, date) {
            var _this5 = this;

            this.worstScore = [];
            this.bestScore = [];
            this.probablyCrashed = [];
            this.mostTravelled = [];
            var querryParams = this.createQuerryparams(categoryId, vehicleId, search, date);
            this.service.get("zego/vehicle/top-listing?".concat(querryParams)).pipe().subscribe(function (res) {
              if (res && res.data) {
                _this5.bestScore = res.data.bestScore;
                _this5.worstScore = res.data.worstScore;
                _this5.probablyCrashed = res.data.probablyCrashed;
                _this5.mostTravelled = res.data.mostTravelled;
              }
            }, function (err) {
              _this5.worstScore = [];
              _this5.bestScore = [];
              _this5.probablyCrashed = [];
              _this5.mostTravelled = [];
            });
          }
        }, {
          key: "formatToFixed",
          value: function formatToFixed(val, precision) {
            if (typeof val == 'string') {
              val = parseFloat(val);
            }

            if (val) {
              return val.toFixed(precision);
            }

            return 0;
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.selectedVehicleCategory = 'all';
            this.selectedVehicle = 'all';
            this.searchString = '';
            this.selectedShow = {
              startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
              endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
            };
            this.filterApply();
          }
        }, {
          key: "openAddModal",
          value: function openAddModal(rowData) {
            var _this6 = this;

            var data = {
              heading: 'Update Category Name',
              content: '',
              data: rowData,
              categoryData: this.vehicleCategoryData
            };
            this.matDialogRef = this.matDialog.open(src_app_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
              data: data,
              disableClose: true
            });
            this.matDialogRef.afterClosed().subscribe(function (res) {
              if (res == true) {
                _this6.getVehicleList(_this6.selectedVehicleCategory, _this6.selectedVehicle, _this6.searchString, _this6.selectedShowCopy);
              }
            });
          }
        }, {
          key: "sortData",
          value: function sortData(sort) {
            var _this7 = this;

            var data = this.dataSource.slice();

            if (!sort.active || sort.direction === '') {
              this.dataSource = data;
              return;
            }

            this.dataSource = data.sort(function (a, b) {
              var isAsc = sort.direction === 'asc';

              switch (sort.active) {
                case 'license_plate':
                  return _this7.compare(a.license_plate, b.license_plate, isAsc);

                case 'model':
                  return _this7.compare(a.model, b.model, isAsc);

                case 'total_distance':
                  return _this7.compare(a.total_distance, b.total_distance, isAsc);

                case 'total_trips':
                  return _this7.compare(a.total_trips, b.total_trips, isAsc);

                case 'model':
                  return _this7.compare(a.model, b.model, isAsc);

                case 'harsh_event':
                  return _this7.compare(a.harsh_event, b.harsh_event, isAsc);

                case 'vehicle_score':
                  return _this7.compare(a.vehicle_score, b.vehicle_score, isAsc);

                case 'speed_score':
                  return _this7.compare(a.speed_score, b.speed_score, isAsc);

                case 'idiling_score':
                  return _this7.compare(a.idiling_score, b.idiling_score, isAsc);

                case 'acclaration_score':
                  return _this7.compare(a.acclaration_score, b.acclaration_score, isAsc);

                case 'breaking_score':
                  return _this7.compare(a.breaking_score, b.breaking_score, isAsc);

                case 'cornering_score':
                  return _this7.compare(a.cornering_score, b.cornering_score, isAsc);

                default:
                  return 0;
              }
            });
          }
        }, {
          key: "compare",
          value: function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
          }
        }, {
          key: "setPage",
          value: function setPage(index) {
            if (this.paginator) this.paginator.pageIndex = index;
          }
        }, {
          key: "openSnackBarmodal",
          value: function openSnackBarmodal(message, panelClass) {
            this._snackBar.openFromComponent(src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"], {
              data: {
                image: false,
                message: message
              },
              panelClass: panelClass,
              duration: 3000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition
            });
          }
        }, {
          key: "exportApi",
          value: function exportApi() {
            var _this8 = this;

            var category = this.localService.getItem("category");
            var vehicle = this.localService.getItem("vehicle");
            var search = this.localService.getItem("search");
            var querryParams = this.createQuerryparams(category, vehicle, search, this.selectedShowCopy);
            this.service.get("vehicles-export?".concat(querryParams)).pipe().subscribe(function (res) {
              _this8.openSnackBarmodal(res.message, 'export-message');

              if (res.data) {}
            }, function (error) {});
          }
        }]);

        return VehicleDashboardComponent;
      }();

      VehicleDashboardComponent.ɵfac = function VehicleDashboardComponent_Factory(t) {
        return new (t || VehicleDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_9__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_10__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]));
      };

      VehicleDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VehicleDashboardComponent,
        selectors: [["app-vehicle-dashboard"]],
        viewQuery: function VehicleDashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 19,
        vars: 13,
        consts: [[1, "vehcileMainBox"], ["class", "boxes25", 4, "ngIf"], [1, "vehicleInfo"], [1, "vehTitle"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "vehimage", 3, "click"], ["d", "M7.49984 18.3337H12.4998C16.6665 18.3337 18.3332 16.667 18.3332 12.5003V7.50033C18.3332 3.33366 16.6665 1.66699 12.4998 1.66699H7.49984C3.33317 1.66699 1.6665 3.33366 1.6665 7.50033V12.5003C1.6665 16.667 3.33317 18.3337 7.49984 18.3337Z", "stroke", "#46E18C", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8.82477 6.40039H12.3581V9.94206", "stroke", "#46E18C", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.3583 6.40039L7.64166 11.1171", "stroke", "#46E18C", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 13.7588C8.24167 14.8421 11.7583 14.8421 15 13.7588", "stroke", "#46E18C", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "length", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"], ["paginator", ""], [1, "boxes25"], [3, "border", "type", "data"], [2, "margin", "0 auto", 3, "diameter"], [1, "table-responsive"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "w-100", "booking-table", 3, "dataSource", "matSortChange"], ["matColumnDef", "license_plate"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "cursor", 3, "click", 4, "matCellDef"], ["matColumnDef", "model"], ["matColumnDef", "total_distance"], ["matColumnDef", "total_trips"], ["mat-cell", "", "class", "cursor category_wrap", 3, "click", 4, "matCellDef"], ["matColumnDef", "harsh_event"], ["matColumnDef", "vehicle_score"], ["matColumnDef", "speed_score"], ["matColumnDef", "idiling_score"], ["mat-cell", "", "class", "cursor", 4, "matCellDef"], ["matColumnDef", "acclaration_score"], ["matColumnDef", "breaking_score"], ["matColumnDef", "cornering_score"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "cursor", 3, "click"], ["mat-cell", "", 1, "cursor", "category_wrap", 3, "click"], ["mat-cell", "", 1, "cursor"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function VehicleDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VehicleDashboardComponent_div_1_Template, 2, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VehicleDashboardComponent_div_2_Template, 2, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VehicleDashboardComponent_div_3_Template, 2, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VehicleDashboardComponent_div_4_Template, 2, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDashboardComponent_Template__svg_svg_click_9_listener() {
              return ctx.exportApi();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, VehicleDashboardComponent_ng_container_14_Template, 2, 1, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VehicleDashboardComponent_ng_template_15_Template, 37, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-paginator", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function VehicleDashboardComponent_Template_mat_paginator_page_17_listener($event) {
              return ctx.pageChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bestScore && ctx.bestScore.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.worstScore && ctx.worstScore.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostTravelled && ctx.mostTravelled.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.probablyCrashed && ctx.probablyCrashed.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, "v.vehicleList"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableDataLoading)("ngIfElse", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.totalCount)("pageSize", ctx.limit)("pageSizeOptions", ctx.pageSizeOptions)("showFirstLastButtons", true);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _vehicle_cards_vehicle_cards_component__WEBPACK_IMPORTED_MODULE_14__["VehicleCardsComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRow"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"]],
        styles: [".behaviour[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px -5px 123px rgba(87, 84, 160, 0.08);\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.behaviour[_ngcontent-%COMP%]   .behTitle[_ngcontent-%COMP%] {\n  font: 600 16px/16px ModernEra;\n  color: #001e50;\n  border-bottom: 0.5px solid #e0e3e7;\n  padding: 19px 24px 24px;\n}\n.vehicleInfo[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #ffffff;\n  box-shadow: 0px -5px 123px rgba(87, 84, 160, 0.08);\n  border-radius: 8px;\n}\n.vehicleInfo[_ngcontent-%COMP%]     table th .mat-sort-header-content {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100px;\n  font: 700 10px/11px ModernEra_Bold !important;\n  color: #27252d !important;\n}\n.vehicleInfo[_ngcontent-%COMP%]   .vehTitle[_ngcontent-%COMP%] {\n  font: 700 16px/16px ModernEra;\n  color: #001e50;\n  margin-bottom: 4px;\n  display: inline-block;\n}\n.vehicleInfo[_ngcontent-%COMP%]   .vehimage[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.booking-table[_ngcontent-%COMP%]   .category_wrap[_ngcontent-%COMP%] {\n  max-width: 106px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.booking-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font: 900 10px/11px ModernEra !important;\n  color: #27252d !important;\n}\n.booking-table[_ngcontent-%COMP%]   .mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #7555cf;\n}\n.booking-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  font: 13px/16px ModernEra;\n  color: #000000;\n}\ntr.mat-header-row[_ngcontent-%COMP%] {\n  height: 34px;\n  background: #f5f5f5;\n  border-radius: 5px;\n  color: #ffffff;\n}\nmat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-color: transparent;\n  font: 400 10px/18px ModernEra !important;\n  color: #001e50 !important;\n}\nmat-row[_ngcontent-%COMP%]:first-child, mat-footer-row[_ngcontent-%COMP%]:first-child, td.mat-cell[_ngcontent-%COMP%]:first-child, td.mat-footer-cell[_ngcontent-%COMP%]:first-child {\n  color: #001e50 !important;\n  font: 700 10px/18px ModernEra_Bold !important;\n  position: relative;\n  padding-left: 30px !important;\n}\nmat-row[_ngcontent-%COMP%]:first-child::after, mat-footer-row[_ngcontent-%COMP%]:first-child::after, td.mat-cell[_ngcontent-%COMP%]:first-child::after, td.mat-footer-cell[_ngcontent-%COMP%]:first-child::after {\n  display: inline-block;\n  content: \"\";\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n  margin-right: 6px;\n  background-color: #371987;\n  position: absolute;\n  top: 12px;\n  left: 13px;\n}\n.date[_ngcontent-%COMP%] {\n  font: 12px/18px ModernEra !important;\n  padding: 3px 30px;\n  color: #ffffff;\n  border-radius: 24px;\n}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%] {\n  border-color: transparent;\n  font: 12px/18px ModernEra !important;\n  color: #ffffff !important;\n}\ntr.mat-row[_ngcontent-%COMP%]:nth-child(odd), tr.mat-footer-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #fbfbfb;\n  border-radius: 8px;\n  height: 34px;\n}\ntr.mat-row[_ngcontent-%COMP%]:nth-child(even), tr.mat-footer-row[_ngcontent-%COMP%]:nth-child(even) {\n  background: #ffffff;\n}\n[_nghost-%COMP%]     .booking-table tr.mat-row, [_nghost-%COMP%]     .booking-table tr.mat-footer-row {\n  height: 34px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  letter-spacing: 0.22px;\n  width: 100%;\n}\n.mat-table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 10px !important;\n}\n@media (min-width: 1020px) and (max-width: 1120px) {\n  .mapImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 73px;\n  }\n}\n@media (max-width: 1019px) {\n  .mapImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 64px;\n  }\n}\n@media (min-width: 862px) and (max-width: 1250px) {\n  .filterBody[_ngcontent-%COMP%]   .filterBtn.cancleBtn[_ngcontent-%COMP%] {\n    margin: 0 10px !important;\n  }\n}\n.boxes25[_ngcontent-%COMP%] {\n  width: 25%;\n  display: inline-block;\n  padding: 0px 10px;\n}\n.boxes25[_ngcontent-%COMP%]:first-child {\n  padding-left: 0px !important;\n}\n.boxes25[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n.vehcileMainBox[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n@media (max-width: 1300px) {\n  .vehcileMainBox[_ngcontent-%COMP%]   .boxes25[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .vehcileMainBox[_ngcontent-%COMP%]   .boxes25[_ngcontent-%COMP%]:nth-child(2) {\n    padding-right: 0px !important;\n  }\n  .vehcileMainBox[_ngcontent-%COMP%]   .boxes25[_ngcontent-%COMP%]:nth-child(3) {\n    padding-left: 0px !important;\n    margin-top: 20px;\n  }\n  .vehcileMainBox[_ngcontent-%COMP%]   .boxes25[_ngcontent-%COMP%]:nth-child(3) {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdmVoaWNsZS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNFQTtFRDhLRSxtQkExS007RUEyS04sa0RBQUE7RUFDQSxrQkFBQTtFQzlLQSxtQkFBQTtBQUVGO0FBQUU7RUFDRSw2QkFBQTtFQUNBLGNERWM7RUNEZCxrQ0FBQTtFQUNBLHVCQUFBO0FBRUo7QUFxREE7RUFDRSxhQUFBO0VEOEdBLG1CQTFLTTtFQTJLTixrREFBQTtFQUNBLGtCQUFBO0FDL0pGO0FBb0RRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0FBbERWO0FBdURFO0VBQ0UsNkJBQUE7RUFDQSxjRDFFYztFQzJFZCxrQkFBQTtFQUNBLHFCQUFBO0FBckRKO0FBdURFO0VBQ0UsaUJBQUE7QUFyREo7QUEwREU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXZESjtBQXlERTtFQUNFLHdDQUFBO0VBQ0EseUJBQUE7QUF2REo7QUFnRUU7RUFDRSxjRC9Fa0I7QUNpQnRCO0FBa0VJO0VBQ0UseUJBQUE7RUFDQSxjRHBGRTtBQ29CUjtBQXNFQTtFQUNFLFlBQUE7RUFDQSxtQkRYaUI7RUNZakIsa0JBQUE7RUFDQSxjRDFITTtBQ3VEUjtBQXNFQTs7OztFQUlFLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQW5FRjtBQW9FRTs7OztFQUNFLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBL0RKO0FBZ0VJOzs7O0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJEM0NnQjtFQzRDaEIsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQTNETjtBQWdFQTtFRFdFLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXJLTTtFQXNLTixtQkFBQTtBQ3ZFRjtBQTZEQTs7OztFQUlFLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQTFERjtBQStERTs7RUFDRSxtQkQ5SVc7RUMrSVgsa0JBQUE7RUFDQSxZQUFBO0FBM0RKO0FBOERFOztFQUNFLG1CRDlLSTtBQ21IUjtBQWtFTTs7RUFFRSxZQUFBO0FBL0RSO0FBcUVBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FBbEVGO0FBcUVBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQWxFRjtBQW9FQTtFQUVJO0lBQ0UsV0FBQTtFQWxFSjtBQUNGO0FBcUVBO0VBRUk7SUFDRSxXQUFBO0VBcEVKO0FBQ0Y7QUF1RUE7RUFDRTtJQUNFLHlCQUFBO0VBckVGO0FBQ0Y7QUF3RUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQXRFRjtBQXVFRTtFQUNFLDRCQUFBO0FBckVKO0FBdUVFO0VBQ0Usa0JBQUE7QUFyRUo7QUF3RUE7RUFDRSxtQkFBQTtBQXJFRjtBQXdFQTtFQUlJO0lBQ0UsVUFBQTtFQXhFSjtFQXlFSTtJQUNFLDZCQUFBO0VBdkVOO0VBeUVJO0lBQ0UsNEJBQUE7SUFDQSxnQkFBQTtFQXZFTjtFQXlFSTtJQUNFLGdCQUFBO0VBdkVOO0FBQ0YiLCJmaWxlIjoidmVoaWNsZS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIkBpbXBvcnQgXCIuLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuLmJlaGF2aW91ciB7XG4gIEBpbmNsdWRlIG1haW5Cb3h3aXRoQmFjaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAuYmVoVGl0bGUge1xuICAgIGZvbnQ6IDYwMCAxNnB4LzE2cHggTW9kZXJuRXJhO1xuICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xuICAgIHBhZGRpbmc6IDE5cHggMjRweCAyNHB4O1xuICB9XG5cbiAgLy8gLmJlaGF2aW9yc2NvcmUge1xuICAvLyAgICAgcGFkZGluZzogMTlweCAyNHB4O1xuICAvLyAgICAgQGluY2x1ZGUgZmxleC1zdGFydDtcblxuICAvLyAgICAgLnctNDkge1xuICAvLyAgICAgICAgIHdpZHRoOiA0OSU7XG5cbiAgLy8gICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gIC8vICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XG4gIC8vICAgICAgICAgfVxuXG4gIC8vICAgICAgICAgLmJlaGF2aW9yQm94IHtcbiAgLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg5NiwgNzgsIDI1NSwgMC4wOCk7XG5cbiAgLy8gICAgICAgICAgICAgJi5zZWxWYWx1ZSB7XG4gIC8vICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIC8vICAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4LWp1c3RpZnk7XG5cbiAgLy8gICAgICAgICAgICAgICAgIC52YWx1ZUJveCB7XG4gIC8vICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyOXB4O1xuICAvLyAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgLy8gICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjE0NDBweCl7XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuICAvLyAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzYwNEVGRjtcblxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWVzLFxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAudHlwZSB7XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICAgICAgICAgICAgfVxuXG4gIC8vICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcyB7XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDYwMCAxOHB4LzIycHggTW9kZXJuRXJhO1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9EYXJrO1xuICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuICAvLyAgICAgICAgICAgICAgICAgICAgIC50eXBlIHtcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogNTAwIDE0cHgvMTdweCBNb2Rlcm5FcmE7XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X0Rhcms7XG4gIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgfVxuICAvLyB9XG59XG5cbi52ZWhpY2xlSW5mbyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIEBpbmNsdWRlIG1haW5Cb3h3aXRoQmFjaztcbiAgOjpuZy1kZWVwIHtcbiAgICB0YWJsZSB7XG4gICAgICB0aCB7XG4gICAgICAgIC5tYXQtc29ydC1oZWFkZXItY29udGVudCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgZm9udDogNzAwIDEwcHgvMTFweCBNb2Rlcm5FcmFfQm9sZCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItdGFibGUtaGVhZGluZyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC52ZWhUaXRsZSB7XG4gICAgZm9udDogNzAwIDE2cHgvMTZweCBNb2Rlcm5FcmE7XG4gICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAudmVoaW1hZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5cbi5ib29raW5nLXRhYmxlIHtcbiAgLmNhdGVnb3J5X3dyYXAge1xuICAgIG1heC13aWR0aDogMTA2cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIHRoIHtcbiAgICBmb250OiA5MDAgMTBweC8xMXB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkY29sb3ItdGFibGUtaGVhZGluZyAhaW1wb3J0YW50O1xuXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2NDNmYzA7XG5cbiAgICAvLyAmW2RhdGEtY29udGVudD1cIm1lbnVcIl0ge1xuICAgIC8vICAgICB3aWR0aDogODBweDtcbiAgICAvLyB9XG4gIH1cblxuICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICBjb2xvcjogJFNlY29uZGFyeV9CbHVlX2Rhcms7XG4gIH1cblxuICB0ZCB7XG4gICAgJi5tYXQtY2VsbCB7XG4gICAgICBmb250OiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgIC8vIHBhZGRpbmctbGVmdDogN3B4O1xuICAgIH1cbiAgfVxufVxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gIGhlaWdodDogMzRweDtcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJsdWUtbGlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxubWF0LXJvdyxcbm1hdC1mb290ZXItcm93LFxudGQubWF0LWNlbGwsXG50ZC5tYXQtZm9vdGVyLWNlbGwge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250OiA0MDAgMTBweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBjb2xvcjogJFNlY29uZGFyeV9ibGFjayAhaW1wb3J0YW50O1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjayAhaW1wb3J0YW50O1xuICAgIGZvbnQ6IDcwMCAxMHB4LzE4cHggTW9kZXJuRXJhX0JvbGQgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJFdoaXRlX2xhYmluZ19ZZWxsb3c7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEycHg7XG4gICAgICBsZWZ0OiAxM3B4O1xuICAgIH1cbiAgfVxufVxuXG4uZGF0ZSB7XG4gIEBpbmNsdWRlIG1zZztcbn1cblxubWF0LXJvdyxcbm1hdC1oZWFkZXItcm93LFxubWF0LWZvb3Rlci1yb3csXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250OiAxMnB4LzE4cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdyxcbnRyLm1hdC1mb290ZXItcm93IHtcbiAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZDogJHRhYmxlT2RkQmFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICB9XG5cbiAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgfVxufVxuXG46aG9zdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgLmJvb2tpbmctdGFibGUge1xuICAgICAgdHIubWF0LXJvdyxcbiAgICAgIHRyLm1hdC1mb290ZXItcm93IHtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkgYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xuICAubWFwSW1nIHtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDczcHg7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAxOXB4KSB7XG4gIC5tYXBJbWcge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogNjRweDtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4NjJweCkgYW5kIChtYXgtd2lkdGg6IDEyNTBweCkge1xuICAuZmlsdGVyQm9keSAuZmlsdGVyQnRuLmNhbmNsZUJ0biB7XG4gICAgbWFyZ2luOiAwIDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYm94ZXMyNSB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgJjpsYXN0LWNoaWxke1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxufVxuLnZlaGNpbGVNYWluQm94e1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KXtcbiAgXG4gIC52ZWhjaWxlTWFpbkJveHtcbiAgIFxuICAgIC5ib3hlczI1e1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICAgICBcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-vehicle-dashboard',
            templateUrl: './vehicle-dashboard.component.html',
            styleUrls: ['./vehicle-dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_9__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_10__["LocalService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "Bt+0":
    /*!*************************************************************************************!*\
      !*** ./src/app/main/fleetOverview/vehicle/vehicle-cards/vehicle-cards.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: VehicleCardsComponent */

    /***/
    function Bt0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleCardsComponent", function () {
        return VehicleCardsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function VehicleCardsComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "topVehicleScore"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "topVehicleScore"));
        }
      }

      function VehicleCardsComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "bottomVehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "bottomVehicle"));
        }
      }

      function VehicleCardsComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "mostTravelled"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "mostTravelled"));
        }
      }

      function VehicleCardsComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "vehicleProbableCrash"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "vehicleProbableCrash"));
        }
      }

      function VehicleCardsComponent_div_7_div_5_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r13.service.convertToDutch(ctx_r13.service.formatToCeil(item_r9 == null ? null : item_r9.total_distance)), " km ");
        }
      }

      function VehicleCardsComponent_div_7_div_5_div_5_span_3_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VehicleCardsComponent_div_7_div_5_div_5_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VehicleCardsComponent_div_7_div_5_div_5_span_3_span_2_Template, 2, 0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 ", ctx_r16.service.convertToDutch(ctx_r16.service.formatToCeil(item_r9 == null ? null : item_r9.safe_score)) || "NA", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.type != 4);
        }
      }

      function VehicleCardsComponent_div_7_div_5_div_5_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0", ctx_r17.service.convertToDutch(item_r9 == null ? null : item_r9.safe_score), "");
        }
      }

      function VehicleCardsComponent_div_7_div_5_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VehicleCardsComponent_div_7_div_5_div_5_span_3_Template, 3, 2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VehicleCardsComponent_div_7_div_5_div_5_span_4_Template, 2, 1, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.type == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.type != 4);
        }
      }

      function VehicleCardsComponent_div_7_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VehicleCardsComponent_div_7_div_5_div_4_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VehicleCardsComponent_div_7_div_5_div_5_Template, 5, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.license_plate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.type == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.type == 1 || ctx_r11.type == 2 || ctx_r11.type == 4);
        }
      }

      function VehicleCardsComponent_div_7_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          border: a0,
          background: a1
        };
      };

      function VehicleCardsComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VehicleCardsComponent_div_7_div_5_Template, 6, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VehicleCardsComponent_div_7_div_6_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, "1px solid " + ctx_r4.border, ctx_r4.background));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r10 + 1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, "1px solid " + ctx_r4.border, ctx_r4.background));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.checkItem(item_r9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.checkItem(item_r9));
        }
      }

      var VehicleCardsComponent = /*#__PURE__*/function () {
        function VehicleCardsComponent(service, cd) {
          _classCallCheck(this, VehicleCardsComponent);

          this.service = service;
          this.cd = cd;
          this.border = 'red';
          this.background = '';
        }

        _createClass(VehicleCardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.border == '#F3543F') {
              this.background = '#FDDBD7';
            } else if (this.border == '#46E18C') {
              this.background = '#DDF8E9';
            } else {
              this.background = '#fff';
            }

            if (this.data && this.data.length < 5 || !this.data) {
              while (this.data.length < 5) {
                this.data.push({});
              }
            }
          }
        }, {
          key: "checkItem",
          value: function checkItem(obj) {
            var key = Object.keys(obj);
            if (key.length) return true;else return false;
          }
        }]);

        return VehicleCardsComponent;
      }();

      VehicleCardsComponent.ɵfac = function VehicleCardsComponent_Factory(t) {
        return new (t || VehicleCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      VehicleCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VehicleCardsComponent,
        selectors: [["app-vehicle-cards"]],
        inputs: {
          border: "border",
          type: "type",
          data: "data"
        },
        decls: 8,
        vars: 5,
        consts: [[1, "card-background"], [1, "card-background__heading", "text-center"], ["placement", "top", "container", "body", 3, "autoClose", "ngbTooltip", 4, "ngIf"], ["class", "d-flex w-100", 4, "ngFor", "ngForOf"], ["placement", "top", "container", "body", 3, "autoClose", "ngbTooltip"], ["tooltip3", "ngbTooltip"], [1, "d-flex", "w-100"], [1, "number", 3, "ngStyle"], [1, "card-background__content", 3, "ngStyle"], ["class", "test d-flex justify-content-center", 4, "ngIf"], ["class", "test", 4, "ngIf"], [1, "test", "d-flex", "justify-content-center"], [1, "left"], ["class", "wrapWord", 4, "ngIf"], ["class", "d-flex wrap-text", 4, "ngIf"], [1, "wrapWord"], [1, "d-flex", "wrap-text"], [1, "wrap-text"], [4, "ngIf"], ["class", "safeScorefont", 4, "ngIf"], [1, "safeScorefont"], [1, "test"]],
        template: function VehicleCardsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VehicleCardsComponent_span_3_Template, 5, 7, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VehicleCardsComponent_span_4_Template, 5, 7, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VehicleCardsComponent_span_5_Template, 5, 7, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VehicleCardsComponent_span_6_Template, 5, 7, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VehicleCardsComponent_div_7_Template, 7, 11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: [".card-background[_ngcontent-%COMP%] {\n  min-height: 330px;\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px 24px;\n  display: inline-block;\n  width: 100%;\n}\n.card-background__heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #001e50;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: 15px;\n  font: 700 14px/16px ModernEra_Bold;\n}\n.card-background[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  width: 20%;\n  margin-top: 29px;\n  height: 36px;\n  width: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card-background__content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n  margin-left: 2%;\n  width: 78%;\n  padding: 12px 20px;\n  border-radius: 27px;\n}\n.card-background__content[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%] {\n  color: #001e50;\n  font: 700 12px/16px ModernEra;\n  margin: 0;\n  justify-content: center;\n}\n.card-background__content[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  color: #001e50;\n  font: 700 12px/16px ModernEra;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-background__content[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 13px/16px ModernEra_semiBold;\n}\n.wrap-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wrapWord[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.safeScorefont[_ngcontent-%COMP%] {\n  font: 800 13px/16px ModernEra_Extrabold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdmVoaWNsZS1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQ0VBO0VBQ0ksaUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUVBLFdBQUE7QUFISjtBQU1RO0VBQ0ksY0RMTTtFQXlJaEIsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VDcElVLGlCQUFBO0VBQ0Esa0NBQUE7QUFGWjtBQUtJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFTSTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVVRO0VBQ0ksY0RuQ007RUNvQ04sNkJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFSWjtBQVNZO0VBRUksY0R6Q0U7RUMwQ0YsNkJBQUE7RUQrRmQsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDdEdGO0FBT2dCO0VBQ0ksc0NBQUE7QUFMcEI7QUFXQTtFRHNGRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUM3RkY7QUFTQTtFRGtGRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN2RkY7QUFPQTtFQUNJLHVDQUFBO0FBSkoiLCJmaWxlIjoidmVoaWNsZS1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qTkVXIENPTE9SIExJU1QqL1xuXG5cbiRsaWdodGJsdWU6ICMwMDU3ZmY7XG4kZHJha19CbHVlOiAjMjk2MmZmO1xuJHNibHVlOiAjMWIxOTRiO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGxpZ2h0YmxhY2s6ICMxNzFjMjI7XG4kbGlnaHRncmF5OiAjOTM5ZWFhO1xuJGZncmF5OiAjN2Q4NTkyO1xuJFNlY29uZGFyeV9ibGFjazogIzAwMWU1MDtcbiRQcmltYXJ5X0JsdWU6ICMwMDY0ZmY7XG4kU2Vjb25kYXJ5X0JsdWU6ICM2MDRlZmY7XG4kYnRuRXhwb3J0Qmx1ZTogIzRjNmZmZjtcbiRkYW5nZXI6ICNmZjcwNzA7XG4kU2Vjb25kYXJ5X0FsZXJ0czogIzAwY2JhMDtcbiRub0luZm86ICMxOGEwZmI7XG4kU2Vjb25kYXJ5X0Rhcms6ICMyYTFlOTE7XG4kZGFyazogIzMyMzMzODtcbiRib3JkZXJDb2xvcjogI2M1Y2RkNDtcbiRsaWdodFdoaXRlY29sb3I6ICNmOWZhZmI7XG4kZ3JvdXBCb3JkZXJEYXRhOiAjZTZlN2U4O1xuJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I6ICNlMGUzZTc7XG4kd2hpdGVTaGFkb3c6ICNlOWViZjA7XG4kc2t5Qmx1ZTogIzRkYmZmZjtcbiR5ZWxsb3c6ICNmZmVhNmM7XG4kb3JhbmdlOiAjZmY5OTUwO1xuJGJvZHlCYWNrR3JheTogI2ZkZmNmZjtcbiRsaWdodEJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuJGV4cG9ydEJ0bjogcmdiYSg5NiwgNzgsIDI1NSwgMC4xKTtcbiRkYW5nZXJCb3hCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kZ3JlZW5Cb3hCYWNrOiByZ2JhKDAsIDIwMywgMTYwLCAwLjEpO1xuJHRhYmxlT2RkQmFjazogI2ZiZmJmYjtcbiRTZWNvbmRhcnlfQmx1ZV9kYXJrOiAjNzU1NWNmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJG5pZ2h0VGV4dENvbG9yOiAjNDc0ZjVhO1xuJG5pZ2h0QmFja0JsYWNrOiAjNjY3MjgwO1xuJHdoaXRlQ29sb3I6ICNlMWUxZTE7XG4kcmVkQ29sb3I6ICNlZDUwMmU7XG4kZGFya19ncmF5OiAjYmRiZGJkO1xuJGhlbHBCdG5fQmx1ZTogIzYwMmFhYztcbiRkYXRlQ29sb3I6ICM0ZTVkNzg7XG4kZGF5Q29sb3I6ICM0ZTVkNzg3YTtcbiRyZWRBY3RpdmVDb2xvcjogI2ZhMTQ2NDtcbiR3aGl0ZUNvbG9yQmFjazogI2Y3ZmNmZjtcbiRibGFja0Rhcms6ICMyNzI3MmU7XG4kd2hpdGVHcmF5QmFjazogI2Y3ZmNmZjtcbi8vaW5wdXQgY3NzXG4kYm9yZGVyQ29sb3JMaWdodDogI2U4ZWNlZTtcbiRib3JkZXJDb2xvckdyYXk6ICNlZWVkZjA7XG4kbGlnaHRXaGl0ZTogI2U1ZWVmZjtcbiRidG5EZWZhdWx0V2hpdGU6ICNmNGY2Zjg7XG4kbWF0Qm9yZGVyOiAjZTZlN2U4O1xuXG4kdG9nZ2xlQWN0aXZlOiAjMzcxOTg2O1xuXG4vL3JnYmEgY3NzXG4kYmVoYXZpb3VyQmFjazogcmdiYSg5NiwgNzgsIDI1NSwgMC4wOCk7XG4kbW9udGhTaG93QmFjazogcmdiYSg4NiwgNjYsIDI1NSwgMC4xKTtcbiRib3hTaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4kYmFja0RhbmdlcjogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjQpO1xuJGJhY2tHcmVlbjogcmdiKDAgMjAzIDE2MCAvIDE1JSk7XG4kc2FmZVNjb3JlQmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGJhY2tHcmF5Q29tbW9uOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuMDUpO1xuJHF1aXRlUm9hZDogI2ZmZWE2YztcblxuLy9uZXcgY29sb3IgdmVyc2lvbjJcbiRyZWRFeGNlcHRpb246ICNmYTE0NjQ7XG4kYm94c2hhZG93OiAwcHggOHB4IDI1cHggcmdiYSg5OCwgOTgsIDk4LCAwLjA1KTtcbiR0b29sdGlwc1RleHRDb2xvcjogIzE2MTkyYztcblxuLy9ib3ggZ3JhZGlhbnQgQmFja2dyb3VuZFxuJHZlaGljYWxCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjODFiYmZmIC00LjIlLCAjMDA4NWZmIDk5LjM3JSk7XG4kZHJpdmVuQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNWE2YmZmIDAuNjklLCAjNjA0ZWZmIDEwMi4yJSk7XG4kYmVoYXZpb3VyQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjOGM0NmZmIDAuNjklLCAjZmY4MDgwIDEwMi4yJSk7XG4kZXZCbG9ja0JveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjZmZlOTc3IDEwMi4xNyUpO1xuJGljZUJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuXG4vL2JveCB2MiBncmFkaWFudCBCYWNrZ3JvdW5kXG4kaWNlQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuJGRyaXZlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgIzM2NTZmZiAxMDIuMTclKTtcbiRraWxvbWV0ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzMy4zOWRlZywgIzQ5ODVmOCAtNC4yMiUsICM0ZGJmZmYgMTA0LjI0JSk7XG4kc2FmZURyaXZpbmdCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjNDVjOGYxIC0xOC41NiUsICNlZWUwOTcgMTAyLjE3JSk7XG4kZHJpdmVyMUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM3NmQ2ZWUgMC42OSUsICM3Njk4ZGIgMTAyLjIlKTtcbiR0cmlwQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2MyYTNhMCAtMTguNTYlLCAjZTljOGE3IDEwMi4xNyUpO1xuJHZlaGljbGVCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgI2RmOTg5NSAtNC4yJSwgI2MyYTNhMCAxMDguMTUlKTtcblxuLy9zY3JvbGwgYmFyIGNvbG9yIGNvZGVcbiRzY3JvbGxCbGFjazogIzg4ODtcbiRzY3JvbGxXaGl0ZTogI2YxZjFmMTtcbiRzY3JvbGxIb3ZlckJsYWNrOiAjNTU1O1xuXG4vL3doaXRlIGxhYmVsIGZsZWFkIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojRUZBOTUyO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG5cbi8vd2hpdGUgbGFiZWwgZGhsIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojZDQwNTExO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG4vLyAkd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6I0ZGQ0MwMDtcblxuLy93aGl0ZSBsYWJlbCBaZWdvIGNvbG9yXG4kV2hpdGVfbGFiaW5nX0JsYWNrOiAjMDAwMDAwO1xuJFdoaXRlX2xhYmluZ19ZZWxsb3c6ICMzNzE5ODc7XG4kV2hpdGVfbGFiaW5nX3NreUJsdWU6ICM0ZGJmZmY7XG4kV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiAjZWVmOWZmO1xuJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiAjZmZjYzAwO1xuJGNvbG9yX3Zpb2xldDogIzg3NzViNztcbiRjb2xvcl92aW9sZXRfZGFyazogIzMyMTk4NztcbiRjb2xvcl9saWdodF9ncmV5OiAjZTVlNWU1O1xuJGNvbG9yLXZpb2xldC1saWdodDogI2FjOTRlZTtcbiRjb2xvci1ibHVlLWxpZ2h0OiAjZjVmNWY1O1xuJGNvbG9yLXRhYmxlLWhlYWRpbmc6ICMyNzI1MmQ7XG4kdHJpcEhpc3RCYWNrOiByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuMDUpO1xuJHNhZmVCYWNrQ29sb3I6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMDUpO1xuJGNvbG9yX2xpZ2h0X2JsdWU6ICM0NWNiZmM7XG4kY29sb3JfZ3JhcGhfdm9pbGV0OiAjMzcxYTg3O1xuXG4vL2dyYWRpYW50IEJhY2tncm91bmRcbiRlcnJvckdyYWRpYW50OiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMGRlZyxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXG4gICksXG4gICNmNDQzMzY7XG5cbkBtaXhpbiBmbGV4LWp1c3RpZnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGZsZXgtc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5AbWl4aW4gZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbkBtaXhpbiAgbGluZS1jbGFtcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I7XG59XG5cbkBtaXhpbiBidG5GaWx0ZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbkBtaXhpbiBtc2cge1xuICBmb250OiAxMnB4LzE4cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweCAzMHB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG5AbWl4aW4gbWFpbkJveHdpdGhCYWNrIHtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggLTVweCAxMjNweCByZ2JhKDg3LCA4NCwgMTYwLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLy8gQG1peGluIGJ1dHRvbi1ncmVlbiB7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogIzExRDBBMjtcbi8vIGJvcmRlci1yYWRpdXM6IDE0NXB4O1xuLy8gZm9udC13ZWlnaHQgOiA2MDA7XG4vLyBmb250LXNpemUgOiAxNXB4O1xuLy8gbGluZS1oZWlnaHQgOiAxOHB4O1xuLy8gY29sb3IgOiAjZmZmZmZmO1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLWJsdWUge1xuLy8gZm9udCA6IDEzcHgvMTZweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBiYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM3NTU1Q0YsICM3NTU1Q0YpLCAjNjQzRkMwO1xuLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbi8vIG1heC13aWR0aCA6IDE0MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogMzhweDtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1yZWQge1xuLy8gZm9udCA6IDE2cHgvMjBweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBib3JkZXItcmFkaXVzOiAxMDBweDtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjRkY2NTY1O1xuLy8gfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jYXJkLWJhY2tncm91bmR7XG4gICAgbWluLWhlaWdodDogMzMwcHg7XG4gICAgLy8gbWF4LXdpZHRoOiAyNjhweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8vIG1heC13aWR0aDogNDglO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICZfX2hlYWRpbmd7XG4gICAgICAgIFxuICAgICAgICBoMntcbiAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICAgICAgQGluY2x1ZGUgZWxsaXBzaXM7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgIGZvbnQ6IDcwMCAxNHB4LzE2cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm51bWJlcntcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19jb250ZW50e1xuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDoyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgIHdpZHRoOiA3OCU7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjdweDtcblxuICAgICAgICAudGVzdHtcbiAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICAgICAgZm9udDogNzAwIDEycHgvMTZweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udDogNzAwIDEycHgvMTZweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udDogNTAwIDEzcHgvMTZweCBNb2Rlcm5FcmFfc2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLndyYXAtdGV4dHtcbiAgICBAaW5jbHVkZSBlbGxpcHNpcztcbiAgICAvLyBtYXgtd2lkdGg6IDUwcHg7XG59XG4ud3JhcFdvcmR7XG4gICAgQGluY2x1ZGUgZWxsaXBzaXM7XG4gICAgLy8gbWFyZ2luLXRvcDogMXB4O1xufVxuLnNhZmVTY29yZWZvbnR7XG4gICAgZm9udDogODAwIDEzcHgvMTZweCBNb2Rlcm5FcmFfRXh0cmFib2xkO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleCardsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-vehicle-cards",
            templateUrl: "./vehicle-cards.component.html",
            styleUrls: ["./vehicle-cards.component.scss"]
          }]
        }], function () {
          return [{
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          border: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Xxx7":
    /*!***************************************************************************************!*\
      !*** ./src/app/main/fleetOverview/vehicle/vehicle-detail/vehicle-detail.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: VehicleDetailComponent, DialogContentExampleDialog */

    /***/
    function Xxx7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleDetailComponent", function () {
        return VehicleDetailComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function () {
        return DialogContentExampleDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chartjs-plugin-zoom */
      "c3W2");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! chart.js */
      "m0r1");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/config/app-config */
      "Tr6M");
      /* harmony import */


      var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/config/route-config */
      "1r8O");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var ngx_gauge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-gauge */
      "Mumg");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function VehicleDetailComponent_ng_container_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.gaugeType)("value", ctx_r0.vehicleData == null ? null : ctx_r0.vehicleData.vehicle_score)("thick", 15)("size", 100)("min", ctx_r0.gaugeMin)("max", ctx_r0.gaugeMax)("thresholds", ctx_r0.thresholdConfig);
        }
      }

      function VehicleDetailComponent_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VehicleDetailComponent_ng_container_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.gaugeType)("value", ctx_r3.vehicleData == null ? null : ctx_r3.vehicleData.speed_score)("thick", 15)("size", 100)("min", ctx_r3.gaugeMin)("max", ctx_r3.gaugeMax)("thresholds", ctx_r3.thresholdConfig);
        }
      }

      function VehicleDetailComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VehicleDetailComponent_ng_container_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r6.gaugeType)("value", ctx_r6.vehicleData == null ? null : ctx_r6.vehicleData.idiling_score)("thick", 15)("size", 100)("min", ctx_r6.gaugeMin)("max", ctx_r6.gaugeMax)("thresholds", ctx_r6.thresholdConfig);
        }
      }

      function VehicleDetailComponent_ng_template_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VehicleDetailComponent_ng_container_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r9.gaugeType)("value", ctx_r9.vehicleData == null ? null : ctx_r9.vehicleData.acclaration_score)("thick", 15)("size", 100)("min", ctx_r9.gaugeMin)("max", ctx_r9.gaugeMax)("thresholds", ctx_r9.thresholdConfig);
        }
      }

      function VehicleDetailComponent_ng_template_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VehicleDetailComponent_ng_container_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r12.gaugeType)("value", ctx_r12.vehicleData == null ? null : ctx_r12.vehicleData.breaking_score)("thick", 15)("size", 100)("min", ctx_r12.gaugeMin)("max", ctx_r12.gaugeMax)("thresholds", ctx_r12.thresholdConfig);
        }
      }

      function VehicleDetailComponent_ng_template_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VehicleDetailComponent_ng_container_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r15.gaugeType)("value", ctx_r15.vehicleData == null ? null : ctx_r15.vehicleData.cornering_score)("thick", 15)("size", 100)("min", ctx_r15.gaugeMin)("max", ctx_r15.gaugeMax)("thresholds", ctx_r15.thresholdConfig);
        }
      }

      function VehicleDetailComponent_ng_template_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VehicleDetailComponent_ng_container_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "loadData"), " ");
        }
      }

      function VehicleDetailComponent_ng_template_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 50);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
        }
      }

      function VehicleDetailComponent_ng_container_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "loadData"), " ");
        }
      }

      function VehicleDetailComponent_ng_template_124_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 50);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          activeSafeScore: a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          activeOther: a0
        };
      };

      function DialogContentExampleDialog_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "t.speedProfile"));
        }
      }

      function DialogContentExampleDialog_ng_template_8_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "t.accProfile"));
        }
      }

      function DialogContentExampleDialog_ng_template_8_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "dayvsnightdrivingscore"));
        }
      }

      function DialogContentExampleDialog_ng_template_8_ng_template_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "vdScore"));
        }
      }

      function DialogContentExampleDialog_ng_template_8_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogContentExampleDialog_ng_template_8_ng_template_1_ng_container_0_Template, 4, 3, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogContentExampleDialog_ng_template_8_ng_template_1_ng_template_1_Template, 3, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.data.type == 3)("ngIfElse", _r7);
        }
      }

      function DialogContentExampleDialog_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogContentExampleDialog_ng_template_8_ng_container_0_Template, 4, 3, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogContentExampleDialog_ng_template_8_ng_template_1_Template, 3, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.data.type == 2)("ngIfElse", _r4);
        }
      }

      var _c2 = ".mat-button-toggle-button svg path {\n  fill: #c5cdd4;\n}\n  .mat-button-toggle-checked {\n  background-color: #371987;\n}\n  .mat-button-toggle-checked svg path {\n  fill: #ffffff !important;\n}\n  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 35px;\n}\n.vech_details[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 4px;\n}\n.vech_details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  min-height: 105px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vech_details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font: 700 12px/18px ModernEra_Bold;\n  color: #001e50;\n}\n.vech_details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 8px;\n  font: 700 14px/16px ModernEra_Bold;\n  color: #001e50;\n}\n.speed-meter[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #ffffff;\n  border-radius: 4px;\n}\n.speed-meter[_ngcontent-%COMP%]     .reading-block {\n  font: 600 13px/24px ModernEra !important;\n  color: #001E50 !important;\n  transform: translateY(36px) !important;\n}\n.speed-meter[_ngcontent-%COMP%]   .meter-details[_ngcontent-%COMP%] {\n  border: 0.664234px solid #e0e3e7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 105px;\n  border-radius: 4px;\n  padding-top: 10px;\n}\n.speed-meter[_ngcontent-%COMP%]   .meter-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 700 10px/16px ModernEra_Bold;\n  color: #001e50;\n  margin: 0;\n}\n.speed-meter[_ngcontent-%COMP%]   .meter-details.active[_ngcontent-%COMP%] {\n  background: rgba(55, 25, 135, 0.2);\n}\n.vehicle-driving-score[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #ffffff;\n  border-radius: 4px;\n}\n.vehicle-driving-score[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 700 14px/16px ModernEra_Bold;\n  color: #001e50;\n}\nngx-gauge[_ngcontent-%COMP%] {\n  height: 63px !important;\n}\n.backpolarGreen[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #ffffff;\n  border-radius: 4px;\n  padding: 12px;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTitle[_ngcontent-%COMP%] {\n  font: 700 14px/23px ModernEra_Bold;\n  color: #001e50;\n  text-align: center;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__safeScore[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__safeScore[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font: 700 10px/12px ModernEra_Bold;\n  color: #001e50;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__safeScore[_ngcontent-%COMP%]   .checkbox-dynamic[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n  height: 10px;\n  width: 10px;\n  background: #001e50;\n  border-radius: 2px;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__safeScore[_ngcontent-%COMP%]   .checkbox-dynamic.activeSafeScore[_ngcontent-%COMP%] {\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  margin-left: 10px;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore.limit[_ngcontent-%COMP%]   .checkbox-dynamic-second[_ngcontent-%COMP%] {\n  background: #00cba0 !important;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore.limit[_ngcontent-%COMP%]   .checkbox-dynamic-second.activeOther[_ngcontent-%COMP%] {\n  background-image: url('Check.svg') !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore.limit[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #00cba0;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font: 700 10px/12px ModernEra;\n  color: #939eaa;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore[_ngcontent-%COMP%]   .checkbox-dynamic-second[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background: #939eaa;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n.backpolarGreen[_ngcontent-%COMP%]   .graphTab__checkbox__otherScore[_ngcontent-%COMP%]   .checkbox-dynamic-second.activeOther[_ngcontent-%COMP%] {\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.mapBox[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 4px;\n  padding: 12px;\n  min-height: 830px;\n}\n.filterHeader[_ngcontent-%COMP%] {\n  padding: 13px 0px 20px !important;\n}\n#map[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 12px;\n  min-height: 830px;\n}\n  .gm-fullscreen-control {\n  background: #0064ff !important;\n  background-image: url(\"/assets/images/fullscreen_map.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  height: 44px !important;\n  width: 44px !important;\n  border-radius: 50% !important;\n}\n  .gm-fullscreen-control img {\n  display: none !important;\n}\n.tripDetailsLeft[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n@media (min-width: 1400px) {\n  .tripDetailsLeft[_ngcontent-%COMP%] {\n    max-height: 830px;\n    height: 100%;\n    overflow-y: scroll;\n    margin-right: 20px;\n  }\n}\n@media (max-width: 1400px) {\n  .tripDetailsLeft[_ngcontent-%COMP%] {\n    flex-basis: calc(100%);\n    max-width: calc(100%);\n    margin-right: 0;\n  }\n}\n.buttonLoad[_ngcontent-%COMP%] {\n  background: rgba(0, 100, 255, 0.05);\n  width: 200px;\n  border: #0064ff;\n  border-radius: 100px;\n  color: #0064ff;\n  padding: 10px;\n  font: 700 13px/22px Montserrat-SemiBold;\n}\n.buttonLoad[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdmVoaWNsZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNJSTtFQUNFLGFEY1E7QUNoQmQ7QUFNQTtFQUNFLHlCRGlHb0I7QUNwR3RCO0FBS0k7RUFDRSx3QkFBQTtBQUhOO0FBT0E7RUFDRSxpQkFBQTtBQUpGO0FBTUE7RUFDRSxtQkRmTTtFQ2dCTixrQkFBQTtBQUhGO0FBSUU7RUFDRSxtQkRKYztFQ0tkLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUdJO0VBQ0UsU0FBQTtFQUVBLGtDQUFBO0VBQ0EsY0R2Qlk7QUNxQmxCO0FBSUk7RURnSEYsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VDaEhJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjRDdCWTtBQzZCbEI7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsbUJEdkNNO0VDd0NOLGtCQUFBO0FBREY7QUFHSTtFQUNFLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQUROO0FBSUU7RUFDRSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRko7QUFHSTtFQUNFLGtDQUFBO0VBQ0EsY0R0RFk7RUN1RFosU0FBQTtBQUROO0FBR0k7RUFDRSxrQ0FBQTtBQUROO0FBS0E7RUFDRSxnQkFBQTtFQUNBLG1CRHBFTTtFQ3FFTixrQkFBQTtBQUZGO0FBR0U7RUFDRSxrQ0FBQTtFQUNBLGNEcEVjO0FDbUVsQjtBQUlBO0VBQ0UsdUJBQUE7QUFERjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkRoRk07RUNpRk4sa0JBQUE7RUFDQSxhQUFBO0FBQUY7QUFDRTtFQUNFLGtDQUFBO0VBQ0EsY0RqRmM7RUNrRmQsa0JBQUE7QUFDSjtBQUdNO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBRFI7QUFFUTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGNENUZRO0FDNEZsQjtBQUVRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJEbkdRO0VDb0dSLGtCQUFBO0FBQVY7QUFDVTtFQUNFLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUNaO0FBR007RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQURSO0FBR1U7RUFDRSw4QkFBQTtBQURaO0FBRVk7RUFDRSw2Q0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7QUFBZDtBQUdVO0VBQ0UsY0RySE87QUNvSG5CO0FBSVE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRGxJRTtBQ2dJWjtBQUlRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CRHhJRTtFQ3lJRixrQkFBQTtFQUNBLGlCQUFBO0FBRlY7QUFHVTtFQUNFLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQURaO0FBUUE7RUFDRSxtQkR4Sk07RUN5Sk4sa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFMRjtBQU9BO0VBQ0UsaUNBQUE7QUFKRjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFKRjtBQU9FO0VBQ0UsOEJBQUE7RUFDQSxxRUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFKSjtBQUtJO0VBQ0Usd0JBQUE7QUFITjtBQVFBO0VBQ0Usa0JBQUE7QUFMRjtBQU1FO0VBRkY7SUFHSSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBSEY7QUFDRjtBQUlFO0VBUkY7SUFTSSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtFQURGO0FBQ0Y7QUFNQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUVBLGVEck1hO0VDc01iLG9CQUFBO0VBQ0EsY0R2TWE7RUN3TWIsYUFBQTtFQUNBLHVDQUFBO0FBSkY7QUFPTTtFQUNJLGFEbE5GO0FDNk1SIiwiZmlsZSI6InZlaGljbGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypORVcgQ09MT1IgTElTVCovXG5cblxuJGxpZ2h0Ymx1ZTogIzAwNTdmZjtcbiRkcmFrX0JsdWU6ICMyOTYyZmY7XG4kc2JsdWU6ICMxYjE5NGI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHRibGFjazogIzE3MWMyMjtcbiRsaWdodGdyYXk6ICM5MzllYWE7XG4kZmdyYXk6ICM3ZDg1OTI7XG4kU2Vjb25kYXJ5X2JsYWNrOiAjMDAxZTUwO1xuJFByaW1hcnlfQmx1ZTogIzAwNjRmZjtcbiRTZWNvbmRhcnlfQmx1ZTogIzYwNGVmZjtcbiRidG5FeHBvcnRCbHVlOiAjNGM2ZmZmO1xuJGRhbmdlcjogI2ZmNzA3MDtcbiRTZWNvbmRhcnlfQWxlcnRzOiAjMDBjYmEwO1xuJG5vSW5mbzogIzE4YTBmYjtcbiRTZWNvbmRhcnlfRGFyazogIzJhMWU5MTtcbiRkYXJrOiAjMzIzMzM4O1xuJGJvcmRlckNvbG9yOiAjYzVjZGQ0O1xuJGxpZ2h0V2hpdGVjb2xvcjogI2Y5ZmFmYjtcbiRncm91cEJvcmRlckRhdGE6ICNlNmU3ZTg7XG4kbGlnaHRtaXhibHVlV2hpdGVjb2xvcjogI2UwZTNlNztcbiR3aGl0ZVNoYWRvdzogI2U5ZWJmMDtcbiRza3lCbHVlOiAjNGRiZmZmO1xuJHllbGxvdzogI2ZmZWE2YztcbiRvcmFuZ2U6ICNmZjk5NTA7XG4kYm9keUJhY2tHcmF5OiAjZmRmY2ZmO1xuJGxpZ2h0QmxhY2s6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4kZXhwb3J0QnRuOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjEpO1xuJGRhbmdlckJveEJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRncmVlbkJveEJhY2s6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMSk7XG4kdGFibGVPZGRCYWNrOiAjZmJmYmZiO1xuJFNlY29uZGFyeV9CbHVlX2Rhcms6ICM3NTU1Y2Y7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbmlnaHRUZXh0Q29sb3I6ICM0NzRmNWE7XG4kbmlnaHRCYWNrQmxhY2s6ICM2NjcyODA7XG4kd2hpdGVDb2xvcjogI2UxZTFlMTtcbiRyZWRDb2xvcjogI2VkNTAyZTtcbiRkYXJrX2dyYXk6ICNiZGJkYmQ7XG4kaGVscEJ0bl9CbHVlOiAjNjAyYWFjO1xuJGRhdGVDb2xvcjogIzRlNWQ3ODtcbiRkYXlDb2xvcjogIzRlNWQ3ODdhO1xuJHJlZEFjdGl2ZUNvbG9yOiAjZmExNDY0O1xuJHdoaXRlQ29sb3JCYWNrOiAjZjdmY2ZmO1xuJGJsYWNrRGFyazogIzI3MjcyZTtcbiR3aGl0ZUdyYXlCYWNrOiAjZjdmY2ZmO1xuLy9pbnB1dCBjc3NcbiRib3JkZXJDb2xvckxpZ2h0OiAjZThlY2VlO1xuJGJvcmRlckNvbG9yR3JheTogI2VlZWRmMDtcbiRsaWdodFdoaXRlOiAjZTVlZWZmO1xuJGJ0bkRlZmF1bHRXaGl0ZTogI2Y0ZjZmODtcbiRtYXRCb3JkZXI6ICNlNmU3ZTg7XG5cbiR0b2dnbGVBY3RpdmU6ICMzNzE5ODY7XG5cbi8vcmdiYSBjc3NcbiRiZWhhdmlvdXJCYWNrOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjA4KTtcbiRtb250aFNob3dCYWNrOiByZ2JhKDg2LCA2NiwgMjU1LCAwLjEpO1xuJGJveFNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiRiYWNrRGFuZ2VyOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuNCk7XG4kYmFja0dyZWVuOiByZ2IoMCAyMDMgMTYwIC8gMTUlKTtcbiRzYWZlU2NvcmVCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kYmFja0dyYXlDb21tb246IHJnYmEoMTM1LCAxMzUsIDEzNSwgMC4wNSk7XG4kcXVpdGVSb2FkOiAjZmZlYTZjO1xuXG4vL25ldyBjb2xvciB2ZXJzaW9uMlxuJHJlZEV4Y2VwdGlvbjogI2ZhMTQ2NDtcbiRib3hzaGFkb3c6IDBweCA4cHggMjVweCByZ2JhKDk4LCA5OCwgOTgsIDAuMDUpO1xuJHRvb2x0aXBzVGV4dENvbG9yOiAjMTYxOTJjO1xuXG4vL2JveCBncmFkaWFudCBCYWNrZ3JvdW5kXG4kdmVoaWNhbEJveEJhY2s6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICM4MWJiZmYgLTQuMiUsICMwMDg1ZmYgOTkuMzclKTtcbiRkcml2ZW5Cb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM1YTZiZmYgMC42OSUsICM2MDRlZmYgMTAyLjIlKTtcbiRiZWhhdmlvdXJCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM4YzQ2ZmYgMC42OSUsICNmZjgwODAgMTAyLjIlKTtcbiRldkJsb2NrQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICNmZmU5NzcgMTAyLjE3JSk7XG4kaWNlQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG5cbi8vYm94IHYyIGdyYWRpYW50IEJhY2tncm91bmRcbiRpY2VCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG4kZHJpdmVyQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjMzY1NmZmIDEwMi4xNyUpO1xuJGtpbG9tZXRlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTMzLjM5ZGVnLCAjNDk4NWY4IC00LjIyJSwgIzRkYmZmZiAxMDQuMjQlKTtcbiRzYWZlRHJpdmluZ0JveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICM0NWM4ZjEgLTE4LjU2JSwgI2VlZTA5NyAxMDIuMTclKTtcbiRkcml2ZXIxQm94VjI6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzc2ZDZlZSAwLjY5JSwgIzc2OThkYiAxMDIuMiUpO1xuJHRyaXBCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjYzJhM2EwIC0xOC41NiUsICNlOWM4YTcgMTAyLjE3JSk7XG4kdmVoaWNsZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjZGY5ODk1IC00LjIlLCAjYzJhM2EwIDEwOC4xNSUpO1xuXG4vL3Njcm9sbCBiYXIgY29sb3IgY29kZVxuJHNjcm9sbEJsYWNrOiAjODg4O1xuJHNjcm9sbFdoaXRlOiAjZjFmMWYxO1xuJHNjcm9sbEhvdmVyQmxhY2s6ICM1NTU7XG5cbi8vd2hpdGUgbGFiZWwgZmxlYWQgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNFRkE5NTI7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcblxuLy93aGl0ZSBsYWJlbCBkaGwgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNkNDA1MTE7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcbi8vICR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazojRkZDQzAwO1xuXG4vL3doaXRlIGxhYmVsIFplZ28gY29sb3JcbiRXaGl0ZV9sYWJpbmdfQmxhY2s6ICMwMDAwMDA7XG4kV2hpdGVfbGFiaW5nX1llbGxvdzogIzM3MTk4NztcbiRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTogIzRkYmZmZjtcbiRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6ICNlZWY5ZmY7XG4kd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6ICNmZmNjMDA7XG4kY29sb3JfdmlvbGV0OiAjODc3NWI3O1xuJGNvbG9yX3Zpb2xldF9kYXJrOiAjMzIxOTg3O1xuJGNvbG9yX2xpZ2h0X2dyZXk6ICNlNWU1ZTU7XG4kY29sb3ItdmlvbGV0LWxpZ2h0OiAjYWM5NGVlO1xuJGNvbG9yLWJsdWUtbGlnaHQ6ICNmNWY1ZjU7XG4kY29sb3ItdGFibGUtaGVhZGluZzogIzI3MjUyZDtcbiR0cmlwSGlzdEJhY2s6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC4wNSk7XG4kc2FmZUJhY2tDb2xvcjogcmdiYSgwLCAyMDMsIDE2MCwgMC4wNSk7XG4kY29sb3JfbGlnaHRfYmx1ZTogIzQ1Y2JmYztcbiRjb2xvcl9ncmFwaF92b2lsZXQ6ICMzNzFhODc7XG5cbi8vZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGVycm9yR3JhZGlhbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcbiAgKSxcbiAgI2Y0NDMzNjtcblxuQG1peGluIGZsZXgtanVzdGlmeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZmxleC1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbkBtaXhpbiBmbGV4LXNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBlbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQG1peGluICBsaW5lLWNsYW1wIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbn1cblxuQG1peGluIGJ0bkZpbHRlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuQG1peGluIG1zZyB7XG4gIGZvbnQ6IDEycHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDMwcHg7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbkBtaXhpbiBtYWluQm94d2l0aEJhY2sge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDEyM3B4IHJnYmEoODcsIDg0LCAxNjAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4vLyBAbWl4aW4gYnV0dG9uLWdyZWVuIHtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjMTFEMEEyO1xuLy8gYm9yZGVyLXJhZGl1czogMTQ1cHg7XG4vLyBmb250LXdlaWdodCA6IDYwMDtcbi8vIGZvbnQtc2l6ZSA6IDE1cHg7XG4vLyBsaW5lLWhlaWdodCA6IDE4cHg7XG4vLyBjb2xvciA6ICNmZmZmZmY7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tYmx1ZSB7XG4vLyBmb250IDogMTNweC8xNnB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzc1NTVDRiwgIzc1NTVDRiksICM2NDNGQzA7XG4vLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gbWF4LXdpZHRoIDogMTQwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiAzOHB4O1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLXJlZCB7XG4vLyBmb250IDogMTZweC8yMHB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICNGRjY1NjU7XG4vLyB9XG4iLCJAaW1wb3J0IFwiLi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYnV0dG9uIHtcbiAgc3ZnIHtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICRib3JkZXJDb2xvcjtcbiAgICB9XG4gIH1cbn1cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRXaGl0ZV9sYWJpbmdfWWVsbG93O1xuICBzdmcge1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cbi52ZWNoX2RldGFpbHMge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLmRldGFpbHMge1xuICAgIGJhY2tncm91bmQ6ICRsaWdodFdoaXRlY29sb3I7XG4gICAgbWluLWhlaWdodDogMTA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGgyIHtcbiAgICAgIG1hcmdpbjogMDtcblxuICAgICAgZm9udDogNzAwIDEycHgvMThweCBNb2Rlcm5FcmFfQm9sZDtcbiAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgIH1cbiAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgIEBpbmNsdWRlIGVsbGlwc2lzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgZm9udDogNzAwIDE0cHgvMTZweCBNb2Rlcm5FcmFfQm9sZDtcbiAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgIH1cbiAgfVxufVxuLnNwZWVkLW1ldGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIDo6bmctZGVlcHtcbiAgICAucmVhZGluZy1ibG9ja3tcbiAgICAgIGZvbnQ6IDYwMCAxM3B4LzI0cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzAwMUU1MCAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDM2cHgpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5tZXRlci1kZXRhaWxzIHtcbiAgICBib3JkZXI6IDAuNjY0MjM0cHggc29saWQgI2UwZTNlNztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGgyIHtcbiAgICAgIGZvbnQ6IDcwMCAxMHB4LzE2cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg1NSwgMjUsIDEzNSwgMC4yKTtcbiAgICB9XG4gIH1cbn1cbi52ZWhpY2xlLWRyaXZpbmctc2NvcmUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaDIge1xuICAgIGZvbnQ6IDcwMCAxNHB4LzE2cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gIH1cbn1cbm5neC1nYXVnZSB7XG4gIGhlaWdodDogNjNweCAhaW1wb3J0YW50O1xufVxuLmJhY2twb2xhckdyZWVuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIC5ncmFwaFRpdGxlIHtcbiAgICBmb250OiA3MDAgMTRweC8yM3B4IE1vZGVybkVyYV9Cb2xkO1xuICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZ3JhcGhUYWIge1xuICAgICZfX2NoZWNrYm94IHtcbiAgICAgICZfX3NhZmVTY29yZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQ6IDcwMCAxMHB4LzEycHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrYm94LWR5bmFtaWMge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgJi5hY3RpdmVTYWZlU2NvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9DaGVjay5zdmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJl9fb3RoZXJTY29yZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgJi5saW1pdHtcbiAgICAgICAgICAuY2hlY2tib3gtZHluYW1pYy1zZWNvbmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJFNlY29uZGFyeV9BbGVydHMgIWltcG9ydGFudDtcbiAgICAgICAgICAgICYuYWN0aXZlT3RoZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0NoZWNrLnN2Z1wiKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9BbGVydHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udDogNzAwIDEwcHgvMTJweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrYm94LWR5bmFtaWMtc2Vjb25kIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICYuYWN0aXZlT3RoZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9DaGVjay5zdmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm1hcEJveCB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBtaW4taGVpZ2h0OiA4MzBweDtcbn1cbi5maWx0ZXJIZWFkZXIge1xuICBwYWRkaW5nOiAxM3B4IDBweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNtYXAge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1pbi1oZWlnaHQ6IDgzMHB4O1xufVxuOjpuZy1kZWVwIHtcbiAgLmdtLWZ1bGxzY3JlZW4tY29udHJvbCB7XG4gICAgYmFja2dyb3VuZDogIzAwNjRmZiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Z1bGxzY3JlZW5fbWFwLnN2Z1wiKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDRweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAgIGltZyB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi50cmlwRGV0YWlsc0xlZnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgICBtYXgtaGVpZ2h0OiA4MzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlKTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIC8vIGhlaWdodDogYXV0bztcbiAgICAvLyBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cbn1cblxuLmJ1dHRvbkxvYWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEwMCwgMjU1LCAwLjA1KTtcbiAgd2lkdGg6IDIwMHB4O1xuICAvLyBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlcjogJFByaW1hcnlfQmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGNvbG9yOiAkUHJpbWFyeV9CbHVlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250OiA3MDAgMTNweC8yMnB4IE1vbnRzZXJyYXQtU2VtaUJvbGQ7XG5cbiAgc3ZnIHtcbiAgICAgIHBhdGgge1xuICAgICAgICAgIGZpbGw6ICR3aGl0ZTtcbiAgICAgIH1cbiAgfVxufVxuIl19 */";

      var VehicleDetailComponent = /*#__PURE__*/function () {
        function VehicleDetailComponent(router, activeRoute, service, localService, elementRef, translate, dialog) {
          var _chart_js__WEBPACK_IM;

          _classCallCheck(this, VehicleDetailComponent);

          this.router = router;
          this.activeRoute = activeRoute;
          this.service = service;
          this.localService = localService;
          this.elementRef = elementRef;
          this.translate = translate;
          this.dialog = dialog;
          this.isCollapsed = true;
          this.dashboardData = {};
          this.vehicleCategoryData = [];
          this.selected = 0;
          this.vehicleList = [];
          this.thresholdConfig = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].gaugeThreshold;
          this.gaugeMin = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].gaugeMin;
          this.gaugeMax = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].gaugeMax;
          this.gaugeType = "semi";
          this.tableView = "table";
          this.isTripHistoryLoading = false;
          this.tripHistory = [];
          this.page = 1;
          this.limit = 5;
          this.pageSizeOptions = [5, 10, 25];
          this.speedProfile = {
            speed: [],
            limit: [],
            time: []
          };
          this.accProfile = {
            acc: [],
            deacc: [],
            time: []
          };
          this.tripToolTipData = {};
          this.selectedVehicleCategory = "all";
          this.selectedVehicle = "all";
          this.searchCategory = "";
          this.searchVehicle = "";
          this.pageSpeed = 1;
          this.speedCount = 0;
          this.pageAcc = 1;
          this.accCount = 0; //CALENDAR

          this.ranges = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].momentRange;
          this.alwaysShowCalendars = true;
          this.showRangeLabelOnInput = true;
          this.keepCalendarOpeningWithRange = true;
          this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_5__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_5__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
          };
          this.selectedShowCopy = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_5__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_5__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
          };
          this.invalidDates = [];
          this.tooltips = [{
            date: moment__WEBPACK_IMPORTED_MODULE_5__(),
            text: "Today is just unselectable"
          }, {
            date: moment__WEBPACK_IMPORTED_MODULE_5__().add(2, "days"),
            text: "Yeeeees!!!"
          }];
          this.alertsCount = [];
          this.safeScoreCheckboxsecond = true;
          this.otherCheckboxsecond = true;
          this.vehicleSafeScore = {
            label: [],
            data: []
          };
          this.dayNightScore = {
            dayScore: [],
            nightScore: [],
            date: []
          };
          this.naValue = ["1001.0", 1001, "1001.0"];
          this.isSpeedDataLoading = false;
          this.isAccDataLoading = false;

          (_chart_js__WEBPACK_IM = chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"]).register.apply(_chart_js__WEBPACK_IM, _toConsumableArray(chart_js__WEBPACK_IMPORTED_MODULE_4__["registerables"]));

          chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"].register(chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }

        _createClass(VehicleDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.vehicleId = this.localService.getItem('vehicleId');
            setTimeout(function () {
              _this9.initMap();
            }, 20);
            this.localService.getLang().subscribe(function (val) {
              setTimeout(function () {
                _this9.createSpeedProfileChart();

                _this9.createAccProfileChart();

                _this9.lineChartScore(_this9.dayNightScore.date, _this9.dayNightScore.dayScore, _this9.dayNightScore.nightScore, "Day Night");
              }, 200);
            });
            this.limit = Number(this.localService.getItem("tripLimit")) || 5;
            this.selectedOrgID = this.localService.getItem("selectedOrgs");

            if (this.selectedOrgID) {
              this.selectedOrgID = JSON.parse(this.selectedOrgID);
            }

            if (this.selectedOrgID) {
              this.resetToLastState(); // this.getVehicleCategory();
              // this.getVehicles();

              this.updatePageData();
            } // this.localService.watchOrgData().subscribe((resp) => {
            //   if (
            //     resp &&
            //     this.router.url.split("?")[0] == RouteConfig.vehicleDetail.url
            //   ) {
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
            //       this.getVehicleCategory();
            //       this.getVehicles();
            //       this.updatePageData();
            //     }
            //   }
            // });

          }
        }, {
          key: "openChartPopup",
          value: function openChartPopup(chartData, type) {
            var chart = {
              chartData: chartData,
              type: type
            };
            var dialogRef = this.dialog.open(DialogContentExampleDialog, {
              disableClose: true,
              panelClass: "custom-dialog-container",
              height: "auto",
              width: "80%",
              data: chart
            });
            dialogRef.afterClosed().subscribe(function (result) {});
          }
        }, {
          key: "changecheckboxValuesecond",
          value: function changecheckboxValuesecond(num) {}
        }, {
          key: "initMap",
          value: function initMap() {
            var neitherLandCordi = new google.maps.LatLng(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].netherlandLat, src_app_config_app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].netherlandLong);
            this.map = new google.maps.Map(document.getElementById('map'), {
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
              }
            });
            this.map.setOptions({
              styles: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].mapStyle
            });
          }
        }, {
          key: "toggleChange",
          value: function toggleChange(value) {
            this.tableView = value;
          }
        }, {
          key: "getVehicleCategory",
          value: function getVehicleCategory() {
            var _this10 = this;

            this.searchCategory = "";
            this.service.get("vehicles/category-by-organisation?organisation=".concat(JSON.stringify(this.selectedOrgID))).pipe().subscribe(function (response) {
              if (response.data && response.data.length) {
                _this10.vehicleCategoryData = response.data;
              }
            }, function (error) {});
          }
        }, {
          key: "getVehicles",
          value: function getVehicles(categoryId) {
            var _this11 = this;

            if (categoryId && categoryId == "all" || categoryId == undefined) {
              categoryId = "";
            }

            this.searchVehicle = "";
            this.service.get("vehicles/by-organisation?organisation=".concat(JSON.stringify(this.selectedOrgID))).pipe().subscribe(function (response) {
              if (response.data && response.data.length) {
                _this11.vehicleList = response.data;
              } // this.getUpdatedStats()

            }, function (error) {});
          }
        }, {
          key: "getVehicleDashboardData",
          value: function getVehicleDashboardData(categoryId, vehicleId, search) {
            var _this12 = this;

            var querryParams = this.createQuerryparams(categoryId, vehicleId, search);
            this.service.get("zego/vehicles/".concat(this.vehicleId, "?").concat(querryParams)).pipe().subscribe(function (response) {
              if (response.data && response.data.rows) {
                _this12.vehicleData = response.data.rows[0];

                if (_this12.vehicleData.last_location && _this12.vehicleData.last_location.length) {
                  var latLong = new google.maps.LatLng(_this12.vehicleData.last_location[0].latitude, _this12.vehicleData.last_location[0].longitude);
                  new google.maps.Marker({
                    position: latLong,
                    icon: {
                      path: google.maps.SymbolPath.CIRCLE,
                      fillColor: '#E35B28',
                      fillOpacity: 1,
                      strokeColor: '#E35B28',
                      scale: 6
                    },
                    map: _this12.map
                  });

                  _this12.map.setCenter(latLong);
                }
              } else {
                _this12.vehicleData = {};
              }
            }, function (error) {
              _this12.vehicleData = {};
            });
          }
        }, {
          key: "getDrivingBehaviour",
          value: function getDrivingBehaviour(categoryId, vehicleId, search) {
            var _this13 = this;

            this.vehicleSafeScore = {
              label: [],
              data: []
            };
            var querryParams = this.createQuerryparams(categoryId, vehicleId, search);
            this.service.get("zego/vehicles/score/".concat(this.vehicleId, "?").concat(querryParams)).pipe().subscribe(function (response) {
              if (response.data) {
                var lastDate;

                for (var i = 0; i < response.data.length; i++) {
                  if (i == 0) {
                    lastDate = moment__WEBPACK_IMPORTED_MODULE_5__["utc"](response.data[i].date);

                    _this13.pushChartData(response.data[i]);
                  } else {
                    if (moment__WEBPACK_IMPORTED_MODULE_5__["utc"](response.data[i].date).diff(lastDate, "days") == 1) {
                      _this13.pushChartData(response.data[i]);

                      lastDate = moment__WEBPACK_IMPORTED_MODULE_5__["utc"](response.data[i].date);
                    } else {
                      var days = moment__WEBPACK_IMPORTED_MODULE_5__["utc"](response.data[i].date).diff(lastDate, "days");
                      var j = 1;

                      while (j < days) {
                        _this13.vehicleSafeScore.label.push(moment__WEBPACK_IMPORTED_MODULE_5__(lastDate).add(j, "days").format("DD/MM"));

                        _this13.vehicleSafeScore.data.push(null);

                        j = j + 1;
                      }

                      _this13.pushChartData(response.data[i]);

                      lastDate = moment__WEBPACK_IMPORTED_MODULE_5__["utc"](response.data[i].date);
                    }
                  }
                }

                _this13.lineChart();
              }
            }, function (error) {});
          }
        }, {
          key: "pushChartData",
          value: function pushChartData(element) {
            this.vehicleSafeScore.label.push(moment__WEBPACK_IMPORTED_MODULE_5__["utc"](element.date).format("DD/MM"));

            if (!this.naValue.includes(element.safe_score)) {
              this.vehicleSafeScore.data.push(this.formatToFixed(element.safe_score, 1));
            } else {
              this.vehicleSafeScore.data.push(null);
            }
          } // getTripHistory(categoryId?, vehicleId?, search?) {
          //   this.isTripHistoryLoading = true;
          //   let querryParams = this.createQuerryparams(
          //     categoryId,
          //     vehicleId,
          //     search,
          //     "listing"
          //   );
          //   this.service
          //     .get(`trips?${querryParams}`)
          //     .pipe()
          //     .subscribe(
          //       (response) => {
          //         if (response.data) {
          //           this.isTripHistoryLoading = false;
          //           this.totalCount = response.data.count;
          //           this.tripHistory = response.data.rows;
          //           this.alertsCount = [];
          //           response.data.rows.forEach((element) => {
          //             this.alertsCount.push(element.id);
          //           });
          //           if (this.totalCount) {
          //             this.getexception();
          //             this.getTooltipInfo(this.tripHistory);
          //           }
          //           this.setPage(this.page - 1);
          //         } else {
          //           this.totalCount = 0;
          //           this.tripHistory = [];
          //         }
          //       },
          //       (error) => {
          //         this.isTripHistoryLoading = false;
          //         this.tripHistory = [];
          //       }
          //     );
          // }
          // getexception() {
          //   const data = {
          //     tripId: this.alertsCount,
          //   };
          //   this.service
          //     .post("trips/alerts", data)
          //     .pipe()
          //     .subscribe((res) => {
          //       if (res.data) {
          //         this.tripHistory.filter((ele, i) => {
          //           for (const k in res.data) {
          //             if (ele.id == k) {
          //               this.tripHistory[i].exception_events = res.data[k];
          //             }
          //           }
          //         });
          //       }
          //     });
          // }

        }, {
          key: "createQuerryparams",
          value: function createQuerryparams(categoryId, vehicleId, search, listing) {
            var querryParams;

            if (listing) {
              querryParams = "organisation=".concat(JSON.stringify(this.selectedOrgID), "&page=").concat(this.page, "&limit=").concat(this.limit);
            } else {
              querryParams = "organisation=".concat(JSON.stringify(this.selectedOrgID));
            }

            var val = this.service.checkCustomDate(moment__WEBPACK_IMPORTED_MODULE_5__(this.selectedShowCopy.startDate).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_5__(this.selectedShowCopy.endDate).format("YYYY-MM-DD"));

            if (val == undefined) {
              querryParams = querryParams + "&custom_filter=true&filter_value=''";
            } else {
              if (categoryId && categoryId !== "all" || vehicleId && vehicleId !== "all" || search) {
                querryParams = querryParams + "&custom_filter=true&filter_value=''";
              } else {
                querryParams = querryParams + "&custom_filter=false&filter_value=".concat(val);
              }
            }

            if (categoryId && categoryId !== "all") {
              querryParams = querryParams + "&vehicle_category=[".concat(categoryId, "]");
            }

            if (vehicleId && vehicleId !== "all") {
              querryParams = querryParams + "&vehicle=[".concat(vehicleId, "]");
            }

            if (search) {
              querryParams = querryParams + "&search=".concat(search);
            }

            querryParams = querryParams + "&from_date=".concat(moment__WEBPACK_IMPORTED_MODULE_5__(this.selectedShowCopy.startDate).format("YYYY-MM-DD"));
            querryParams = querryParams + "&to_date=".concat(moment__WEBPACK_IMPORTED_MODULE_5__(this.selectedShowCopy.endDate).format("YYYY-MM-DD"));
            return querryParams;
          } // getTooltipInfo(tableData) {
          //   const data = {
          //     tripId: this.alertsCount,
          //   };
          //   this.service
          //     .post("trips/exception-counts", data)
          //     .pipe()
          //     .subscribe((res) => {
          //       if (res.data) {
          //         for (const k in res.data) {
          //           this.tripToolTipData[k] = this.service.convertFormat(res.data[k]);
          //         }
          //       }
          //     });
          // }

        }, {
          key: "updatePageData",
          value: function updatePageData() {
            var _this14 = this;

            this.activeRoute.queryParams.subscribe(function (params) {
              // const details:any = params.page;
              _this14.page = (params === null || params === void 0 ? void 0 : params.page) || 1;
            });
            this.getDayNightScore();
            this.getVehicleDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.searchString);
            this.pageSpeed = 1;
            this.speedCount = 0;
            this.pageAcc = 1;
            this.accCount = 0;
            this.totalCount = 0;
            this.speedProfile = {
              speed: [],
              limit: [],
              time: []
            };
            this.accProfile = {
              acc: [],
              deacc: [],
              time: []
            };
            this.getDrivingBehaviour();
            this.getSpeedProfileData();
            this.getAccelerationProfileData();
          }
        }, {
          key: "goToLastPage",
          value: function goToLastPage() {
            if (this.localService.getItem("vehicleUrl")) {
              var url = this.localService.getItem("vehicleUrl");
              var page = url.split("=")[1];
              page = page ? page : "1";
              this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_7__["RouteConfig"].vehicle.url], {
                queryParams: {
                  page: page
                }
              });
            } else {
              this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_7__["RouteConfig"].vehicle.url]);
            }
          }
        }, {
          key: "formatToFixed",
          value: function formatToFixed(val, precision) {
            if (typeof val == "string") {
              val = parseFloat(val);
            }

            if (val) {
              return val.toFixed(precision);
            }

            return 0;
          } // filterApply() {
          //   this.localService.setItem("category", this.selectedVehicleCategory);
          //   this.localService.setItem("vehicleId", this.selectedVehicle);
          //   this.localService.setItem("search", this.searchString);
          //   this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
          //   this.selectedShowCopy = this.selectedShow;
          //   this.updatePageData();
          //   this.changeState();
          // }

        }, {
          key: "resetToLastState",
          value: function resetToLastState() {
            var category = this.localService.getItem("category");
            var vehicle = this.localService.getItem("vehicleId");
            var search = this.localService.getItem("search");
            var date = this.localService.getItem("dateRange");

            if (date) {
              date = JSON.parse(date);
              this.selectedShowCopy = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_5__(date.startDate),
                endDate: moment__WEBPACK_IMPORTED_MODULE_5__(date.endDate)
              };
              this.selectedShow = this.selectedShowCopy;
            } else {
              this.selectedShow = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_5__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_5__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
              this.selectedShowCopy = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_5__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_5__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
            }

            search ? this.searchString = search : this.searchString = "";
            category && category !== "all" ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = "all";
            vehicle && vehicle !== "all" ? this.selectedVehicle = JSON.parse(vehicle) : this.selectedVehicle = "all";
          }
        }, {
          key: "lineChart",
          value: function lineChart() {
            if (this.linemyChart) {
              this.linemyChart.destroy();
            }

            var htmlRef = this.elementRef.nativeElement.querySelector("#drivingScore");
            var gradient = this.elementRef.nativeElement.querySelector("#drivingScore").getContext("2d").createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
            gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
            var dataSet = [{
              data: this.vehicleSafeScore.data,
              borderColor: "#001E50",
              pointBackgroundColor: "#FA1464",
              borderWidth: 3.84,
              fill: false,
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              backgroundColor: gradient
            }];
            this.linemyChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](htmlRef, {
              type: "line",
              data: {
                labels: this.vehicleSafeScore.label,
                datasets: dataSet
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
                    display: false
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
                      labelTextColor: function labelTextColor(context) {
                        return "#1B194B";
                      }
                    }
                  }
                },
                interaction: {
                  intersect: false
                },
                scales: {
                  x: {
                    display: true
                  },
                  y: {
                    display: true,
                    // min: -10,
                    ticks: {
                      precision: 0
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "getDayNightScore",
          value: function getDayNightScore() {
            var _this15 = this;

            this.dayNightScore = {
              dayScore: [],
              nightScore: [],
              date: []
            };
            var querryParams = this.createQuerryparams();
            this.service.get("zego/vehicles/day-night/".concat(this.vehicleId, "?").concat(querryParams, "&is_day_trip=[true,false]")).pipe().subscribe(function (res) {
              res.data.forEach(function (element) {
                if (element.is_day_trip) {
                  _this15.dayNightScore.date.push(moment__WEBPACK_IMPORTED_MODULE_5__["utc"](element.start_date_time).format("DD/MM"));

                  if (!_this15.naValue.includes(element === null || element === void 0 ? void 0 : element.safe_score)) {
                    _this15.dayNightScore.dayScore.push(element === null || element === void 0 ? void 0 : element.safe_score);
                  } else {
                    _this15.dayNightScore.dayScore.push(null);
                  }
                } else {
                  if (!_this15.naValue.includes(element === null || element === void 0 ? void 0 : element.safe_score)) {
                    _this15.dayNightScore.nightScore.push(element === null || element === void 0 ? void 0 : element.safe_score);
                  } else {
                    _this15.dayNightScore.nightScore.push(null);
                  }
                }
              });

              _this15.dayNightScore.date.reverse();

              _this15.dayNightScore.dayScore.reverse();

              _this15.dayNightScore.nightScore.reverse(); // console.log(this.dayNightScore);


              _this15.lineChartScore(_this15.dayNightScore.date, _this15.dayNightScore.dayScore, _this15.dayNightScore.nightScore, "Day Night");
            }, function (err) {});
          }
        }, {
          key: "lineChartScore",
          value: function lineChartScore(label, point, pointsSecond, name) {
            if (this.linemyChartScore) {
              this.linemyChartScore.destroy();
            }

            var labels = label;
            var datapoints = point;
            var dayDrive;
            this.translate.get("daydriving").subscribe(function (text) {
              dayDrive = text;
            });
            var nightDrive;
            this.translate.get("nightdriving").subscribe(function (text) {
              nightDrive = text;
            });
            var htmlRef = this.elementRef.nativeElement.querySelector("#lineChartScore");
            var gradient = this.elementRef.nativeElement.querySelector("#lineChartScore").getContext("2d").createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
            gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
            var dataSet = [{
              data: pointsSecond,
              borderColor: "#939EAA",
              pointBackgroundColor: "#FA1464",
              borderWidth: 3.84,
              fill: false,
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              backgroundColor: gradient,
              label: nightDrive
            }, {
              data: point,
              borderColor: "#001E50",
              pointBackgroundColor: "#FA1464",
              borderWidth: 3.84,
              fill: false,
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              backgroundColor: gradient,
              label: dayDrive
            }]; // console.log(dataSet);

            this.linemyChartScore = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](htmlRef, {
              type: "line",
              data: {
                labels: labels,
                datasets: dataSet
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
                    display: false
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
                      labelTextColor: function labelTextColor(context) {
                        return "#1B194B";
                      }
                    }
                  }
                },
                interaction: {
                  intersect: false
                },
                scales: {
                  x: {
                    display: true
                  },
                  y: {
                    display: true,
                    // min: -10,
                    max: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].gaugeMax,
                    ticks: {
                      precision: 0
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "pageCountUpdate",
          value: function pageCountUpdate() {
            this.pageSpeed = this.pageSpeed + 1;
            this.getSpeedProfileData();
          }
        }, {
          key: "checkPageSize",
          value: function checkPageSize() {
            var totalPage = Math.ceil(this.speedCount / 500);

            if (this.pageSpeed < totalPage) {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "pageCountUpdateAcc",
          value: function pageCountUpdateAcc() {
            this.pageAcc = this.pageAcc + 1;
            this.getAccelerationProfileData();
          }
        }, {
          key: "checkPageSizeAcc",
          value: function checkPageSizeAcc() {
            var totalPage = Math.ceil(this.accCount / 500);

            if (this.pageAcc < totalPage) {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "getSpeedProfileData",
          value: function getSpeedProfileData() {
            var _this16 = this;

            this.isSpeedDataLoading = true;
            var querryParams = this.createQuerryparams();
            this.service.get("zego/vehicles/speed-acceleration-breaking/".concat(this.vehicleId, "?type=1&").concat(querryParams, "&page=").concat(this.pageSpeed)).pipe().subscribe(function (response) {
              if (response.data && response.data.rows && response.data.rows.length) {
                _this16.speedCount = response.data.count;
                response.data.rows.forEach(function (element) {
                  _this16.speedProfile["speed"].push(+element.property_value);

                  _this16.speedProfile["limit"].push(+element.waypoint.road_speed);

                  _this16.speedProfile["time"].push(moment__WEBPACK_IMPORTED_MODULE_5__(element.timestamp).utc().format("D/MM, HH:mm:ss"));
                });
              }

              _this16.isSpeedDataLoading = false;

              _this16.createSpeedProfileChart();
            }, function (error) {
              _this16.speedProfile = {
                speed: [],
                limit: [],
                time: []
              };
            });
          }
        }, {
          key: "getAccelerationProfileData",
          value: function getAccelerationProfileData() {
            var _this17 = this;

            this.isAccDataLoading = true;
            var querryParams = this.createQuerryparams();
            this.service.get("zego/vehicles/speed-acceleration-breaking/".concat(this.vehicleId, "?type=2&").concat(querryParams, "&page=").concat(this.pageAcc)).pipe().subscribe(function (response) {
              if (response.data && response.data.rows && response.data.rows.length) {
                _this17.accCount = response.data.count;
                response.data.rows.forEach(function (element) {
                  if (element.property_id == "AccelerationID") {
                    _this17.accProfile["acc"].push(+element.property_value);

                    _this17.accProfile["deacc"].push("");
                  } else {
                    _this17.accProfile["acc"].push("");

                    _this17.accProfile["deacc"].push(+element.property_value);
                  }

                  _this17.accProfile["time"].push(moment__WEBPACK_IMPORTED_MODULE_5__(element.timestamp).utc().format("D/MM,HH:mm:ss"));
                });
              }

              _this17.isAccDataLoading = false;

              _this17.createAccProfileChart();
            }, function (error) {
              _this17.accProfile = {
                acc: [],
                deacc: [],
                time: []
              };
            });
          }
        }, {
          key: "createSpeedProfileChart",
          value: function createSpeedProfileChart() {
            if (this.speedChart) {
              this.speedChart.destroy();
            }

            var labels = this.speedProfile['time'];
            var speed;
            var limit;
            this.translate.get("speed").subscribe(function (text) {
              speed = text;
            });
            this.translate.get("limit").subscribe(function (text) {
              limit = text;
            });
            var htmlRef = this.elementRef.nativeElement.querySelector("#speedProfile");
            var gradient = this.elementRef.nativeElement.querySelector("#speedProfile").getContext("2d").createLinearGradient(0, 0, 0, 600);
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(0, "rgba(0, 122, 255, 0.33)");
            var dataset1 = this.speedProfile["speed"];
            var dataset2 = this.speedProfile["limit"];

            var up = function up(ctx, value) {
              if (dataset1[ctx.p0DataIndex] > dataset2[ctx.p0DataIndex]) {
                return "#FA1464";
              } else {
                return "#001E50";
              }
            };

            this.speedChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](htmlRef, {
              type: "line",
              data: {
                labels: labels,
                datasets: [{
                  label: "".concat(speed, " km/h"),
                  data: this.speedProfile["speed"],
                  borderColor: '#001E50',
                  cubicInterpolationMode: "monotone",
                  tension: 0.4,
                  fill: "start",
                  backgroundColor: gradient
                }, {
                  label: limit,
                  data: this.speedProfile["limit"],
                  borderColor: "#939EAA",
                  stepped: true
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: false,
                    text: "Stacked scales"
                  },
                  legend: {
                    display: false,
                    labels: {
                      usePointStyle: true
                    }
                  },
                  tooltip: {
                    mode: "nearest",
                    axis: "x",
                    intersect: true,
                    enabled: true,
                    backgroundColor: "#ffffff",
                    titleAlign: "center",
                    footerAlign: "center",
                    bodyAlign: "center",
                    titleColor: "#1B194B",
                    displayColors: false,
                    callbacks: {
                      labelTextColor: function labelTextColor(context) {
                        return "#1B194B";
                      }
                    }
                  }
                },
                scales: {
                  y: {
                    type: "linear",
                    position: "left",
                    stack: "demo",
                    stackWeight: 2,
                    grid: {
                      color: "rgba(0, 0, 0, 0)"
                    }
                  },
                  x: {
                    ticks: {
                      maxTicksLimit: 15
                    },
                    grid: {
                      color: "rgba(0, 0, 0, 0)"
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "createAccProfileChart",
          value: function createAccProfileChart() {
            if (this.accChart) {
              this.accChart.destroy();
            }

            var labels = this.accProfile['time'];
            var breakingprofile;
            var accelerationprofile;
            this.translate.get("breakingprofile").subscribe(function (text) {
              breakingprofile = text;
            });
            this.translate.get("accelerationprofile").subscribe(function (text) {
              accelerationprofile = text;
            });
            var htmlRef = this.elementRef.nativeElement.querySelector("#myChartAcc");
            var gradient = this.elementRef.nativeElement.querySelector("#myChartAcc").getContext("2d").createLinearGradient(0, 0, 0, 600);
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(0, "rgba(0, 122, 255, 0.33)");
            this.accChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](htmlRef, {
              type: "line",
              data: {
                labels: labels,
                datasets: [{
                  label: "".concat(accelerationprofile),
                  data: this.accProfile['acc'],
                  borderColor: '#001E50'
                }, {
                  label: "".concat(breakingprofile),
                  data: this.accProfile['deacc'],
                  borderColor: "#939EAA"
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: false,
                    text: "Stacked scales"
                  },
                  legend: {
                    display: false,
                    labels: {
                      usePointStyle: true
                    }
                  },
                  tooltip: {
                    mode: "nearest",
                    axis: "x",
                    intersect: false,
                    enabled: true,
                    backgroundColor: "#ffffff",
                    titleAlign: "center",
                    footerAlign: "center",
                    bodyAlign: "center",
                    titleColor: "#1B194B",
                    displayColors: false,
                    callbacks: {
                      labelTextColor: function labelTextColor(context) {
                        return "#1B194B";
                      }
                    }
                  }
                },
                scales: {
                  x: {
                    ticks: {
                      maxTicksLimit: 15
                    },
                    grid: {
                      color: "rgba(0, 0, 0, 0)"
                    }
                  },
                  y: {
                    position: "left",
                    stack: "demo",
                    stackWeight: 2,
                    grid: {
                      color: "rgba(0, 0, 0, 0)"
                    }
                  }
                }
              }
            });
          }
        }]);

        return VehicleDetailComponent;
      }();

      VehicleDetailComponent.ɵfac = function VehicleDetailComponent_Factory(t) {
        return new (t || VehicleDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_9__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_10__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
      };

      VehicleDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VehicleDetailComponent,
        selectors: [["app-vehicle-detail"]],
        viewQuery: function VehicleDetailComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 150,
        vars: 79,
        consts: [[1, "mainFilter"], [1, "filterHeader"], [1, "titleWithBack", "cursor", 3, "click"], [1, "backBtnImg"], ["src", "assets/images/backButton.png"], [1, "BackTitle"], [1, "row"], [1, "col-md-8"], [1, "tripDetailsLeft"], [1, "vech_details"], [1, "row", "p-3"], [1, "col-md-4"], [1, "text-center", "details"], [1, "details-name"], [1, "speed-meter"], [1, "col-md-4", "mt-3"], [1, "meter-details", "active"], [1, "text-center"], [4, "ngIf", "ngIfElse"], ["elseTemplate6", ""], [1, "meter-details"], ["elseTemplate5", ""], ["elseTemplate1", ""], ["elseTemplate2", ""], ["elseTemplate3", ""], ["elseTemplate4", ""], [1, "vehicle-driving-score", "py-3", "pl-3", 3, "hidden"], [1, "speedChart", 2, "height", "270px", 3, "click"], ["id", "drivingScore"], [1, "backpolarGreen", 3, "hidden"], [1, "graphSide"], [1, "d-flex", "justify-content-between", "graphTab"], [1, "graphTab__title"], [1, "graphTitle", "text-center", "text-capitalize", "d-inline-block"], [1, "graphTab__checkbox"], ["mat-button", "", 1, "buttonLoad", 3, "disabled", "click"], ["elseTemplate", ""], [2, "height", "250px", 3, "click"], ["id", "speedProfile"], ["id", "myChartAcc"], [1, "graphTab__checkbox__safeScore", 3, "click"], [1, "checkbox-dynamic", 3, "ngClass"], ["for", "flexCheckChecked", 1, "form-check-label"], [1, "graphTab__checkbox__otherScore", 3, "click"], [1, "checkbox-dynamic-second", 3, "ngClass"], ["for", "flexCheckChecked", 1, "form-check-label", "text-capitalize"], ["id", "lineChartScore"], ["id", "map"], [3, "type", "value", "thick", "size", "min", "max", "thresholds"], [1, "naData"], [2, "margin", "0 auto", 3, "diameter"]],
        template: function VehicleDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDetailComponent_Template_div_click_2_listener() {
              return ctx.goToLastPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, VehicleDetailComponent_ng_container_46_Template, 2, 7, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, VehicleDetailComponent_ng_template_47_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, VehicleDetailComponent_ng_container_55_Template, 2, 7, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, VehicleDetailComponent_ng_template_56_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, VehicleDetailComponent_ng_container_64_Template, 2, 7, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, VehicleDetailComponent_ng_template_65_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, VehicleDetailComponent_ng_container_73_Template, 2, 7, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, VehicleDetailComponent_ng_template_74_Template, 2, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, VehicleDetailComponent_ng_container_82_Template, 2, 7, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, VehicleDetailComponent_ng_template_83_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, VehicleDetailComponent_ng_container_91_Template, 2, 7, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, VehicleDetailComponent_ng_template_92_Template, 2, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDetailComponent_Template_div_click_98_listener() {
              return ctx.openChartPopup(ctx.vehicleSafeScore, 4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "canvas", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDetailComponent_Template_button_click_108_listener() {
              return ctx.pageCountUpdate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, VehicleDetailComponent_ng_container_109_Template, 3, 3, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, VehicleDetailComponent_ng_template_110_Template, 1, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDetailComponent_Template_div_click_112_listener() {
              return ctx.openChartPopup(ctx.speedProfile, 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "canvas", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDetailComponent_Template_button_click_122_listener() {
              return ctx.pageCountUpdateAcc();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, VehicleDetailComponent_ng_container_123_Template, 3, 3, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, VehicleDetailComponent_ng_template_124_Template, 1, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDetailComponent_Template_div_click_126_listener() {
              return ctx.openChartPopup(ctx.accProfile, 2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "canvas", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h4", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](134, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDetailComponent_Template_div_click_136_listener() {
              return ctx.changecheckboxValuesecond(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](140, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDetailComponent_Template_div_click_141_listener() {
              return ctx.changecheckboxValuesecond(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](145, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDetailComponent_Template_div_click_146_listener() {
              return ctx.openChartPopup(ctx.dayNightScore, 3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "canvas", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](93);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 43, "v.vehicleDetailInfo"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.vehicleData == null ? null : ctx.vehicleData.license_plate) || "NA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 45, "lic"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.convertToDutch(ctx.service.formatToCeil(ctx.vehicleData == null ? null : ctx.vehicleData.total_distance)) || "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 47, "kmTrav"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.convertToDutch(ctx.vehicleData == null ? null : ctx.vehicleData.total_trips) || "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 49, "t.ride"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 51, "vehScore"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.vehicleData == null ? null : ctx.vehicleData.vehicle_score) !== "1001.0" && (ctx.vehicleData == null ? null : ctx.vehicleData.vehicle_score) !== 1001 && (ctx.vehicleData == null ? null : ctx.vehicleData.vehicle_score) !== "1001")("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 53, "t.speedScore"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.vehicleData == null ? null : ctx.vehicleData.speed_score) !== "1001.0" && (ctx.vehicleData == null ? null : ctx.vehicleData.speed_score) !== 1001 && (ctx.vehicleData == null ? null : ctx.vehicleData.speed_score) !== "1001")("ngIfElse", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 55, "idliScore"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.vehicleData == null ? null : ctx.vehicleData.idiling_score) !== "1001.0" && (ctx.vehicleData == null ? null : ctx.vehicleData.idiling_score) !== 1001 && (ctx.vehicleData == null ? null : ctx.vehicleData.idiling_score) !== "1001")("ngIfElse", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 57, "hardAcceleration"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.vehicleData == null ? null : ctx.vehicleData.acclaration_score) !== "1001.0" && (ctx.vehicleData == null ? null : ctx.vehicleData.acclaration_score) !== 1001 && (ctx.vehicleData == null ? null : ctx.vehicleData.acclaration_score) !== "1001")("ngIfElse", _r10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 59, "hardBraking"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.vehicleData == null ? null : ctx.vehicleData.breaking_score) !== "1001.0" && (ctx.vehicleData == null ? null : ctx.vehicleData.breaking_score) !== 1001 && (ctx.vehicleData == null ? null : ctx.vehicleData.breaking_score) !== "1001")("ngIfElse", _r13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 61, "harshCorner"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.vehicleData == null ? null : ctx.vehicleData.cornering_score) !== "1001.0" && (ctx.vehicleData == null ? null : ctx.vehicleData.cornering_score) !== 1001 && (ctx.vehicleData == null ? null : ctx.vehicleData.cornering_score) !== "1001")("ngIfElse", _r16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.vehicleSafeScore.data || !ctx.vehicleSafeScore.data.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 63, "vdScore"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.speedProfile.time || !ctx.speedProfile.time.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 65, "t.speedProfile"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.checkPageSize() || ctx.isSpeedDataLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSpeedDataLoading)("ngIfElse", _r19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.accProfile.time || !ctx.accProfile.time.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 67, "t.accProfile"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.checkPageSizeAcc() || ctx.isAccDataLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAccDataLoading)("ngIfElse", _r19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.dayNightScore.date || !ctx.dayNightScore.date.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](134, 69, "dayvsnightdrivingscore"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](75, _c0, ctx.safeScoreCheckboxsecond));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](140, 71, "daydriving"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](77, _c1, ctx.otherCheckboxsecond));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](145, 73, "nightdriving"), " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], ngx_gauge__WEBPACK_IMPORTED_MODULE_14__["ɵa"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: [_c2]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-vehicle-detail",
            templateUrl: "./vehicle-detail.component.html",
            styleUrls: ["./vehicle-detail.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_9__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_10__["LocalService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
          }]
        });
      })();

      var DialogContentExampleDialog = /*#__PURE__*/function () {
        function DialogContentExampleDialog(dialogRef, elementRef, translate, data) {
          var _chart_js__WEBPACK_IM2,
              _this18 = this;

          _classCallCheck(this, DialogContentExampleDialog);

          this.dialogRef = dialogRef;
          this.elementRef = elementRef;
          this.translate = translate;
          this.data = data;
          this.safeScoreCheckbox = true;
          this.otherCheckbox = true;

          (_chart_js__WEBPACK_IM2 = chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"]).register.apply(_chart_js__WEBPACK_IM2, _toConsumableArray(chart_js__WEBPACK_IMPORTED_MODULE_4__["registerables"]));

          chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"].register(chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]);
          setTimeout(function () {
            if (_this18.data.type == 1) {
              _this18.createSpeedProfileChart(_this18.data.chartData);
            } else if (_this18.data.type == 2) {
              _this18.createAccProfileChart(_this18.data.chartData);
            } else if (_this18.data.type == 4) {
              _this18.lineChart(_this18.data.chartData.label, _this18.data.chartData.data);
            } else {
              _this18.lineChartScore(_this18.data.chartData.date, _this18.data.chartData.dayScore, _this18.data.chartData.nightScore);
            }
          }, 200);
        }

        _createClass(DialogContentExampleDialog, [{
          key: "createSpeedProfileChart",
          value: function createSpeedProfileChart(data) {
            var labels = data['time'];
            var speed;
            var limit;
            this.translate.get("speed").subscribe(function (text) {
              speed = text;
            });
            this.translate.get("limit").subscribe(function (text) {
              limit = text;
            });
            var htmlRef = this.elementRef.nativeElement.querySelector("#popupChart");
            var gradient = this.elementRef.nativeElement.querySelector("#popupChart").getContext("2d").createLinearGradient(0, 0, 0, 600);
            var dataset1 = data["speed"];
            var dataset2 = data["limit"];

            var up = function up(ctx, value) {
              if (dataset1[ctx.p0DataIndex] > dataset2[ctx.p0DataIndex]) {
                return "#FA1464";
              } else {
                return "#001E50";
              }
            };

            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(0, "rgba(0, 122, 255, 0.33)");
            var dataSet = [{
              label: "Limit",
              data: data["limit"],
              borderColor: "#939EAA",
              stepped: true
            }, {
              label: "Speed km/h",
              data: data["speed"],
              borderColor: "#001E50",
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              fill: "start",
              backgroundColor: gradient,
              segment: {
                borderColor: function borderColor(ctx) {
                  return up(ctx, 'rgb(0,0,0,0.2)');
                }
              }
            }];

            if (!this.safeScoreCheckbox) {
              dataSet.splice(1, 1);
            }

            if (!this.otherCheckbox) {
              dataSet.splice(0, 1);
            }

            this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](htmlRef, {
              type: "line",
              data: {
                labels: labels,
                datasets: [{
                  label: "".concat(speed, " km/h"),
                  data: data['speed'],
                  borderColor: '#001E50',
                  cubicInterpolationMode: 'monotone',
                  tension: 0.4,
                  fill: 'start',
                  backgroundColor: gradient
                }, {
                  label: limit,
                  data: data['limit'],
                  borderColor: '#939EAA',
                  stepped: true
                }]
              },
              options: {
                // responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: false,
                    text: "Stacked scales"
                  },
                  legend: {
                    labels: {
                      usePointStyle: true
                    },
                    display: false
                  },
                  tooltip: {
                    mode: "nearest",
                    axis: "x",
                    intersect: false,
                    enabled: true,
                    backgroundColor: "#ffffff",
                    titleAlign: "center",
                    footerAlign: "center",
                    bodyAlign: "center",
                    titleColor: "#1B194B",
                    displayColors: false,
                    callbacks: {
                      labelTextColor: function labelTextColor(context) {
                        return "#1B194B";
                      }
                    }
                  },
                  zoom: {
                    zoom: {
                      wheel: {
                        enabled: true
                      },
                      pinch: {
                        enabled: true
                      },
                      drag: {
                        enabled: true
                      },
                      mode: "x"
                    }
                  }
                },
                scales: {
                  y: {
                    type: "linear",
                    position: "left",
                    stack: "demo",
                    stackWeight: 2,
                    grid: {
                      color: "rgba(0, 0, 0, 0)"
                    }
                  },
                  x: {
                    grid: {
                      color: "rgba(0, 0, 0, 0)"
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "createAccProfileChart",
          value: function createAccProfileChart(data) {
            var labels = data['time'];
            var breakingprofile;
            var accelerationprofile;
            this.translate.get("breakingprofile").subscribe(function (text) {
              breakingprofile = text;
            });
            this.translate.get("accelerationprofile").subscribe(function (text) {
              accelerationprofile = text;
            });
            var htmlRef = this.elementRef.nativeElement.querySelector("#popupChart");
            var gradient = this.elementRef.nativeElement.querySelector("#popupChart").getContext("2d").createLinearGradient(0, 0, 0, 600);
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(0, "rgba(0, 122, 255, 0.33)");
            var dataSet = [{
              label: "Braking Profile",
              data: data["deacc"],
              borderColor: "#939EAA",
              cubicInterpolationMode: "monotone",
              tension: 0.4
            }, {
              label: "Acceleration profile",
              data: data["acc"],
              borderColor: "#001E50",
              cubicInterpolationMode: "monotone",
              tension: 0.4
            }];

            if (!this.safeScoreCheckbox) {
              dataSet.splice(1, 1);
            }

            if (!this.otherCheckbox) {
              dataSet.splice(0, 1);
            }

            this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](htmlRef, {
              type: "line",
              data: {
                labels: labels,
                datasets: [{
                  label: accelerationprofile,
                  data: data['acc'],
                  borderColor: '#001E50'
                }, {
                  label: breakingprofile,
                  data: data['deacc'],
                  borderColor: '#939EAA'
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: false,
                    text: "Stacked scales"
                  },
                  legend: {
                    labels: {
                      usePointStyle: true
                    },
                    display: false
                  },
                  tooltip: {
                    mode: "nearest",
                    axis: "x",
                    intersect: false,
                    enabled: true,
                    backgroundColor: "#ffffff",
                    titleAlign: "center",
                    footerAlign: "center",
                    bodyAlign: "center",
                    titleColor: "#1B194B",
                    displayColors: false,
                    callbacks: {
                      labelTextColor: function labelTextColor(context) {
                        return "#1B194B";
                      }
                    }
                  },
                  zoom: {
                    zoom: {
                      wheel: {
                        enabled: true
                      },
                      pinch: {
                        enabled: true
                      },
                      drag: {
                        enabled: true
                      },
                      mode: "x"
                    }
                  }
                },
                scales: {
                  x: {
                    grid: {
                      color: "rgba(0, 0, 0, 0)"
                    }
                  },
                  y: {
                    position: "left",
                    stack: "demo",
                    stackWeight: 2,
                    grid: {
                      color: "rgba(0, 0, 0, 0)"
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "lineChartScore",
          value: function lineChartScore(label, point, pointsSecond) {
            // console.log(point,pointsSecond,label)
            if (this.myChart) {
              this.myChart.destroy();
            }

            var labels = label;
            var datapoints = point;
            var dayDrive;
            this.translate.get("daydriving").subscribe(function (text) {
              dayDrive = text;
            });
            var nightDrive;
            this.translate.get("nightdriving").subscribe(function (text) {
              nightDrive = text;
            });
            var htmlRef = this.elementRef.nativeElement.querySelector("#popupChart");
            var gradient = this.elementRef.nativeElement.querySelector("#popupChart").getContext("2d").createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
            gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
            var dataSet = [{
              data: pointsSecond,
              borderColor: "#939EAA",
              pointBackgroundColor: "#FA1464",
              borderWidth: 3.84,
              fill: false,
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              backgroundColor: gradient,
              label: nightDrive
            }, {
              data: point,
              borderColor: "#001E50",
              pointBackgroundColor: "#FA1464",
              borderWidth: 3.84,
              fill: false,
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              backgroundColor: gradient,
              label: dayDrive
            }]; // console.log(dataSet);

            this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](htmlRef, {
              type: "line",
              data: {
                labels: labels,
                datasets: dataSet
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
                    display: true
                  },
                  zoom: {
                    zoom: {
                      wheel: {
                        enabled: true
                      },
                      pinch: {
                        enabled: true
                      },
                      drag: {
                        enabled: true
                      },
                      mode: "x"
                    }
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
                      labelTextColor: function labelTextColor(context) {
                        return "#1B194B";
                      }
                    }
                  }
                },
                interaction: {
                  intersect: false
                },
                scales: {
                  x: {
                    display: true
                  },
                  y: {
                    display: true,
                    // min: -10,
                    max: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].gaugeMax,
                    ticks: {
                      precision: 0
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "lineChart",
          value: function lineChart(label, data) {
            if (this.myChart) {
              this.myChart.destroy();
            }

            var htmlRef = this.elementRef.nativeElement.querySelector("#popupChart");
            var gradient = this.elementRef.nativeElement.querySelector("#popupChart").getContext("2d").createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
            gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
            var dataSet = [{
              data: data,
              borderColor: "#001E50",
              pointBackgroundColor: "#FA1464",
              borderWidth: 3.84,
              fill: false,
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              backgroundColor: gradient
            }];
            this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](htmlRef, {
              type: "line",
              data: {
                labels: label,
                datasets: dataSet
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
                    display: false
                  },
                  zoom: {
                    zoom: {
                      wheel: {
                        enabled: true
                      },
                      pinch: {
                        enabled: true
                      },
                      drag: {
                        enabled: true
                      },
                      mode: "x"
                    }
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
                      labelTextColor: function labelTextColor(context) {
                        return "#1B194B";
                      }
                    }
                  }
                },
                interaction: {
                  intersect: false
                },
                scales: {
                  x: {
                    display: true
                  },
                  y: {
                    display: true,
                    // min: -10,
                    ticks: {
                      precision: 0
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "resetZoom",
          value: function resetZoom() {
            this.myChart.resetZoom();
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "changecheckboxValue",
          value: function changecheckboxValue(num) {
            if (num == 1) {
              this.safeScoreCheckbox = !this.safeScoreCheckbox;
            } else {
              this.otherCheckbox = !this.otherCheckbox;
            }

            if (this.data.type == 1) {
              this.createSpeedProfileChart(this.data.chartData);
            } else {
              this.createAccProfileChart(this.data.chartData);
            } // if (this.title == "Speed score") {
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
        }]);

        return DialogContentExampleDialog;
      }();

      DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) {
        return new (t || DialogContentExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      DialogContentExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogContentExampleDialog,
        selectors: [["dialog-content-example-dialog"]],
        decls: 10,
        vars: 2,
        consts: [["mat-button", "", 1, "close", 3, "click"], ["src", "assets/images/Close.svg"], ["mat-dialog-content", ""], [1, "chartZoom", "cursor", 3, "click"], [1, "chartDiv"], ["id", "popupChart"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "profileNameDark", "text-center"], ["elseTemplate1", ""], [1, "profileNameDark", "text-center", "mb-0"]],
        template: function DialogContentExampleDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogContentExampleDialog_Template_button_click_0_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogContentExampleDialog_Template_span_click_3_listener() {
              return ctx.resetZoom();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zoom Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DialogContentExampleDialog_ng_container_7_Template, 4, 3, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DialogContentExampleDialog_ng_template_8_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type == 1)("ngIfElse", _r1);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: [_c2]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "dialog-content-example-dialog",
            templateUrl: "./chart-data.html",
            styleUrls: ["./vehicle-detail.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "g9yA":
    /*!**********************************************************************!*\
      !*** ./src/app/main/fleetOverview/vehicle/vehicle-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: VehicleRoutingModule */

    /***/
    function g9yA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleRoutingModule", function () {
        return VehicleRoutingModule;
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


      var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/config/route-config */
      "1r8O");
      /* harmony import */


      var _vehicle_dashboard_vehicle_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vehicle-dashboard/vehicle-dashboard.component */
      "7wCK");
      /* harmony import */


      var _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vehicle-detail/vehicle-detail.component */
      "Xxx7");

      var routes = [{
        path: "",
        component: _vehicle_dashboard_vehicle_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["VehicleDashboardComponent"],
        pathMatch: 'full'
      }, {
        path: src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].vehicleDetail.path,
        component: _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_4__["VehicleDetailComponent"],
        pathMatch: 'full'
      }];

      var VehicleRoutingModule = /*#__PURE__*/_createClass(function VehicleRoutingModule() {
        _classCallCheck(this, VehicleRoutingModule);
      });

      VehicleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VehicleRoutingModule
      });
      VehicleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VehicleRoutingModule_Factory(t) {
          return new (t || VehicleRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VehicleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleRoutingModule, [{
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
    "xuaZ":
    /*!**************************************************************!*\
      !*** ./src/app/main/fleetOverview/vehicle/vehicle.module.ts ***!
      \**************************************************************/

    /*! exports provided: VehicleModule */

    /***/
    function xuaZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleModule", function () {
        return VehicleModule;
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


      var _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vehicle-routing.module */
      "g9yA");
      /* harmony import */


      var _vehicle_dashboard_vehicle_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vehicle-dashboard/vehicle-dashboard.component */
      "7wCK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vehicle-detail/vehicle-detail.component */
      "Xxx7");
      /* harmony import */


      var src_app_config_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/config/material */
      "Uo7g");
      /* harmony import */


      var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-daterangepicker-material */
      "YhS8");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/components/component.module */
      "8OTh");
      /* harmony import */


      var _vehicle_cards_vehicle_cards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./vehicle-cards/vehicle-cards.component */
      "Bt+0");
      /* harmony import */


      var ngx_gauge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-gauge */
      "Mumg");
      /* harmony import */


      var ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-shimmer-loading */
      "+HUQ");

      var VehicleModule = /*#__PURE__*/_createClass(function VehicleModule() {
        _classCallCheck(this, VehicleModule);
      });

      VehicleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VehicleModule
      });
      VehicleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VehicleModule_Factory(t) {
          return new (t || VehicleModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__["VehicleRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_11__["ComponentModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(), src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
          extend: true
        }), ngx_gauge__WEBPACK_IMPORTED_MODULE_13__["NgxGaugeModule"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__["NgxShimmerLoadingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VehicleModule, {
          declarations: [_vehicle_dashboard_vehicle_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["VehicleDashboardComponent"], _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_5__["VehicleDetailComponent"], _vehicle_cards_vehicle_cards_component__WEBPACK_IMPORTED_MODULE_12__["VehicleCardsComponent"], _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_5__["DialogContentExampleDialog"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__["VehicleRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_11__["ComponentModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"], src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_13__["NgxGaugeModule"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__["NgxShimmerLoadingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_vehicle_dashboard_vehicle_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["VehicleDashboardComponent"], _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_5__["VehicleDetailComponent"], _vehicle_cards_vehicle_cards_component__WEBPACK_IMPORTED_MODULE_12__["VehicleCardsComponent"], _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_5__["DialogContentExampleDialog"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__["VehicleRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_11__["ComponentModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(), src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
              extend: true
            }), ngx_gauge__WEBPACK_IMPORTED_MODULE_13__["NgxGaugeModule"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__["NgxShimmerLoadingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=fleetOverview-vehicle-vehicle-module-es5.js.map