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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["behaviourScore-driving-driving-module"], {
    /***/
    "9UlC":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/main/behaviourScore/driving/VehiclesDrivingBehaviour/drivingbehaviourscore.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: DrivingbehaviourscoreComponent */

    /***/
    function UlC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivingbehaviourscoreComponent", function () {
        return DrivingbehaviourscoreComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chart.js */
      "m0r1");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/config/app-config */
      "Tr6M");
      /* harmony import */


      var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/config/route-config */
      "1r8O");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-daterangepicker-material */
      "YhS8");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _shared_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../shared/pipe/filter.pipe */
      "AOmN");

      function DrivingbehaviourscoreComponent_mat_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r7 == null ? null : item_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (item_r7 == null ? null : item_r7.name) || "NA", "");
        }
      }

      function DrivingbehaviourscoreComponent_mat_option_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r8 == null ? null : item_r8.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r8 == null ? null : item_r8.license_plate, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function DrivingbehaviourscoreComponent_div_87_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_87_div_22_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            ctx_r10.active = 4;
            ctx_r10.graphname = "breaking_score";
            return ctx_r10.updategraph("breaking_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_87_div_22_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            ctx_r12.active = 5;
            ctx_r12.graphname = "cornering_score";
            return ctx_r12.updategraph("cornering_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_87_div_22_Template_div_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            ctx_r13.active = 6;
            ctx_r13.graphname = "idling_score";
            return ctx_r13.updategraph("idling_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c0, ctx_r9.active == 4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r9.service.convertToDutch(ctx_r9.formatToFixed(ctx_r9.drivingBehaviourLeft == null ? null : ctx_r9.drivingBehaviourLeft.breaking, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 9, "decelerate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](17, _c0, ctx_r9.active == 5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r9.service.convertToDutch(ctx_r9.formatToFixed(ctx_r9.drivingBehaviourLeft == null ? null : ctx_r9.drivingBehaviourLeft.cornering, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 11, "cornerning"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](19, _c0, ctx_r9.active == 6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r9.service.convertToDutch(ctx_r9.formatToFixed(ctx_r9.drivingBehaviourLeft == null ? null : ctx_r9.drivingBehaviourLeft.idling, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 13, "idiling"));
        }
      }

      function DrivingbehaviourscoreComponent_div_87_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_87_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r14.active = 1;
            ctx_r14.graphname = "safe_score";
            return ctx_r14.updategraph("safe_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_87_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r16.active = 2;
            ctx_r16.graphname = "speed_score";
            return ctx_r16.updategraph("speed_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_87_Template_div_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r17.active = 3;
            ctx_r17.graphname = "acceleration_score";
            return ctx_r17.updategraph("acceleration_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, DrivingbehaviourscoreComponent_div_87_div_22_Template, 19, 21, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](16, _c0, ctx_r3.active == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r3.service.convertToDutch(ctx_r3.formatToFixed(ctx_r3.drivingBehaviourLeft == null ? null : ctx_r3.drivingBehaviourLeft.safe_score, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 10, "t.safeScore"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](18, _c0, ctx_r3.active == 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r3.service.convertToDutch(ctx_r3.formatToFixed(ctx_r3.drivingBehaviourLeft == null ? null : ctx_r3.drivingBehaviourLeft.speed, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 12, "speed"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](20, _c0, ctx_r3.active == 3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r3.service.convertToDutch(ctx_r3.formatToFixed(ctx_r3.drivingBehaviourLeft == null ? null : ctx_r3.drivingBehaviourLeft.acceleration, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 14, "accelerate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.drivingBehaviourLeft != null);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "activeRight": a0
        };
      };

      function DrivingbehaviourscoreComponent_div_98_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_98_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r18.active = 1;
            ctx_r18.graphname = "safe_score";
            return ctx_r18.updategraph("safe_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_98_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r20.active = 2;
            ctx_r20.graphname = "speed_score";
            return ctx_r20.updategraph("speed_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_98_Template_div_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r21.active = 3;
            ctx_r21.graphname = "acceleration_score";
            return ctx_r21.updategraph("acceleration_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c1, ctx_r4.active == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.service.convertToDutch(ctx_r4.formatToFixed(ctx_r4.drivingBehaviourRight == null ? null : ctx_r4.drivingBehaviourRight.safe_score, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 9, "t.safeScore"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](17, _c1, ctx_r4.active == 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.service.convertToDutch(ctx_r4.formatToFixed(ctx_r4.drivingBehaviourRight == null ? null : ctx_r4.drivingBehaviourRight.speed, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 11, "speed"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](19, _c1, ctx_r4.active == 3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.service.convertToDutch(ctx_r4.formatToFixed(ctx_r4.drivingBehaviourRight == null ? null : ctx_r4.drivingBehaviourRight.acceleration, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 13, "accelerate"));
        }
      }

      function DrivingbehaviourscoreComponent_div_101_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_101_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r22.active = 4;
            ctx_r22.graphname = "breaking_score";
            return ctx_r22.updategraph("breaking_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_101_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r24.active = 5;
            ctx_r24.graphname = "cornering_score";
            return ctx_r24.updategraph("cornering_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_div_101_Template_div_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r25.active = 6;
            ctx_r25.graphname = "idling_score";
            return ctx_r25.updategraph("idling_score");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c1, ctx_r5.active == 4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r5.service.convertToDutch(ctx_r5.formatToFixed(ctx_r5.drivingBehaviourRight == null ? null : ctx_r5.drivingBehaviourRight.breaking, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 9, "decelerate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](17, _c1, ctx_r5.active == 5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r5.service.convertToDutch(ctx_r5.formatToFixed(ctx_r5.drivingBehaviourRight == null ? null : ctx_r5.drivingBehaviourRight.cornering, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 11, "cornerning"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](19, _c1, ctx_r5.active == 6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r5.service.convertToDutch(ctx_r5.formatToFixed(ctx_r5.drivingBehaviourRight == null ? null : ctx_r5.drivingBehaviourRight.idling, 1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 13, "idiling"));
        }
      }

      function DrivingbehaviourscoreComponent_div_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "mat-spinner", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 50);
        }
      }

      var _c2 = function _c2() {
        return {
          standalone: true
        };
      };

      var _c3 = function _c3() {
        return {
          applyLabel: "Set Date"
        };
      };

      var DrivingbehaviourscoreComponent = /*#__PURE__*/function () {
        function DrivingbehaviourscoreComponent(router, service, localService, elementRef, locale) {
          var _this = this,
              _chart_js__WEBPACK_IM;

          _classCallCheck(this, DrivingbehaviourscoreComponent);

          this.router = router;
          this.service = service;
          this.localService = localService;
          this.elementRef = elementRef;
          this.locale = locale;
          this.isCollapsed = true;
          this.active = 1;
          this.displayedColumns = ['license_plate', 'vin', 'vehicle_category.name', 'model', 'fuel_type', 'vehicle_summarised_data[0].fuel_consumption', 'mileage', 'vehicle_summarised_data[0].last_apk_date'];
          this.page = 1;
          this.limit = 50;
          this.count = 2;
          this.pageSizeOptions = [5, 10, 25, 100];
          this.isTripHistoryLoading = false;
          this.speedProfile = {
            'weight': [],
            "date": []
          };
          this.accProfile = {
            'weight': [],
            'date': []
          }; // CALENDAR

          this.graphname = "safe_score";
          this.ranges = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].momentRange;
          this.alwaysShowCalendars = true;
          this.showRangeLabelOnInput = true;
          this.keepCalendarOpeningWithRange = true;
          this.selectedVehicleCategory = 'all';
          this.selectedVehicle = 'all';
          this.searchCategory = '';
          this.searchVehicle = '';
          this.invalidDates = [];
          this.tooltips = [{
            date: moment__WEBPACK_IMPORTED_MODULE_2__(),
            text: 'Today is just unselectable'
          }, {
            date: moment__WEBPACK_IMPORTED_MODULE_2__().add(2, 'days'),
            text: 'Yeeeees!!!'
          }];
          this.vehicleCategoryData = [];
          this.vehicleList = [];
          this.tableDataLoading = true;
          this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(29, 'days').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__().set('hours', 23).set('minutes', 59)
          };
          this.selectedShowCopy = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(29, 'days').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__().set('hours', 23).set('minutes', 59)
          };

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

          (_chart_js__WEBPACK_IM = chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]).register.apply(_chart_js__WEBPACK_IM, _toConsumableArray(chart_js__WEBPACK_IMPORTED_MODULE_1__["registerables"]));

          this.selected = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(3, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
          };
          this.selectedAgain = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(29, 'days').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__().set('hours', 23).set('minutes', 59)
          };
        }

        _createClass(DrivingbehaviourscoreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

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

            this.localService.watchOrgData().subscribe(function (resp) {
              if (resp && _this2.router.url.split('?')[0] == src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].drivingBehaviour.url) {
                // console.log('')
                var orgId = _this2.localService.getItem("selectedOrgs");

                if (orgId) {
                  orgId = JSON.parse(orgId);
                }

                var isEqual = true;

                if (_this2.selectedOrgID && _this2.selectedOrgID.length && orgId && orgId.length) {
                  isEqual = orgId.length === _this2.selectedOrgID.length && orgId.every(function (val) {
                    return _this2.selectedOrgID.includes(val);
                  });
                } else {
                  isEqual = false;
                }

                if (!isEqual) {
                  _this2.selectedOrgID = _toConsumableArray(orgId);

                  _this2.resetToLastState();

                  _this2.getVehicleCategory();

                  _this2.getVehicles();

                  _this2.updatePageData();
                }
              }
            });
          }
        }, {
          key: "getVehicleDashboardData",
          value: function getVehicleDashboardData(categoryId, vehicleId, date, search) {
            var _this3 = this;

            var querryParams = this.createQuerryparams(categoryId, vehicleId, search, date);
            this.service.get("vehicles/report?".concat(querryParams)).pipe().subscribe(function (response) {
              if (response.data) {
                _this3.dashboardData = response.data;
              }
            }, function (error) {});
          }
        }, {
          key: "getVehicleCategory",
          value: function getVehicleCategory() {
            var _this4 = this;

            this.searchCategory = '';
            this.service.get("vehicles/category-by-organisation?organisation=".concat(JSON.stringify(this.selectedOrgID))).pipe().subscribe(function (response) {
              if (response.data && response.data.length) {
                _this4.vehicleCategoryData = response.data;
              }
            }, function (error) {});
          }
        }, {
          key: "getVehicles",
          value: function getVehicles(categoryId) {
            var _this5 = this;

            if (categoryId && categoryId == 'all' || categoryId == undefined) {
              categoryId = '';
            }

            this.searchVehicle = '';
            this.service.get("vehicles/by-organisation?organisation=".concat(JSON.stringify(this.selectedOrgID))).pipe().subscribe(function (response) {
              if (response.data && response.data.length) {
                _this5.vehicleList = response.data;
              } // this.getUpdatedStats()

            }, function (error) {});
          } // // 1. Yesterday, 2. last 7 Days, 3. last 30 days, 4. last 3 Months, 5. last 12 months

        }, {
          key: "getDrivingBehaviour",
          value: function getDrivingBehaviour(side, categoryId, vehicleId, search, date) {
            var _this6 = this;

            this.isTripHistoryLoading = true;
            var querryParams = this.createQuerryparams(categoryId, vehicleId, search, date);
            this.service.get("driving-analytics?".concat(querryParams)).pipe().subscribe(function (response) {
              if (response.data) {
                _this6.isTripHistoryLoading = false;

                if (side == 1) {
                  _this6.drivingBehaviourLeft = response.data;
                } else {
                  _this6.drivingBehaviourRight = response.data;
                }
              } else {
                _this6.isTripHistoryLoading = false;

                if (side == 1) {
                  _this6.drivingBehaviourLeft = {};
                } else {
                  _this6.drivingBehaviourRight = {};
                }
              }
            }, function (error) {
              _this6.isTripHistoryLoading = false;
            });
          }
        }, {
          key: "updategraph",
          value: function updategraph(name) {
            this.graphname = name;
            this.creategraphArray(1, this.graphname);
            this.creategraphArray(2, this.graphname);
          }
        }, {
          key: "getDrivingBehaviourgraph",
          value: function getDrivingBehaviourgraph(side, categoryId, vehicleId, search, date, graphname) {
            var _this7 = this;

            this.isTripHistoryLoading = true;
            var querryParams = this.createQuerryparams(categoryId, vehicleId, search, date, "aa", graphname);
            this.service.get("driving-analytics-graph?".concat(querryParams)).pipe().subscribe(function (response) {
              if (response.data) {
                _this7.isTripHistoryLoading = false;

                if (side == 1) {
                  _this7.speedProfile = {
                    'weight': [],
                    "date": []
                  };
                  _this7.drivingBehaviourLeftgraph = response.data;

                  _this7.creategraphArray(side, _this7.graphname);
                } else if (side == 2) {
                  _this7.drivingBehaviourRightgraph = response.data;

                  _this7.creategraphArray(side, _this7.graphname);
                }
              } else {
                _this7.isTripHistoryLoading = false;

                if (side == 1) {
                  if (_this7.myChartleft) {
                    _this7.myChartleft.destroy();
                  }

                  _this7.drivingBehaviourLeftgraph = {};
                } else {
                  _this7.drivingBehaviourRightgraph = {};
                }
              }
            }, function (error) {
              if (side == 1) {
                if (_this7.myChartright) {
                  _this7.myChartleft.destroy();
                }

                _this7.speedProfile = {
                  'weight': [],
                  "date": []
                }; // this.createleftChart()
              } else {
                if (_this7.myChartright) {
                  _this7.myChartright.destroy();
                }

                _this7.accProfile = {
                  'weight': [],
                  'date': []
                }; // this.createrightChart()
              }

              _this7.isTripHistoryLoading = false;
            });
          }
        }, {
          key: "updatePageData",
          value: function updatePageData() {
            this.page = 1;
            this.limit = 5;
            this.totalCount = 0;
            this.searchVehicle = '';
            this.searchCategory = '';
            this.getVehicleDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.selectedShowCopy, this.searchString);
            this.getDrivingBehaviour(1, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selected);
            this.getDrivingBehaviour(2, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedAgain);
            this.getDrivingBehaviourgraph(1, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selected, this.graphname);
            this.getDrivingBehaviourgraph(2, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedAgain, this.graphname);
          }
        }, {
          key: "rangeClicked",
          value: function rangeClicked(label) {// console.log('[rangeClicked] range is : ', label);
          }
        }, {
          key: "datesUpdatedDashboard",
          value: function datesUpdatedDashboard(range) {}
        }, {
          key: "datesUpdated",
          value: function datesUpdated(range, side) {
            if (this.count > 0) {
              this.count = this.count - 1;
              return;
            } else {
              if (side == 1) {
                this.getDrivingBehaviour(1, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selected);
                this.getDrivingBehaviourgraph(1, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selected, this.graphname);
              } else {
                this.getDrivingBehaviour(2, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedAgain);
                this.getDrivingBehaviourgraph(2, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedAgain, this.graphname);
              }
            } // console.log('[datesUpdated] range is : ', range);

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
            this.graphname = 'safe_score';
            this.active = 1;

            if (date) {
              date = JSON.parse(date);
              this.selectedShowCopy = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_2__(date.startDate),
                endDate: moment__WEBPACK_IMPORTED_MODULE_2__(date.endDate)
              };
              this.selectedShow = this.selectedShowCopy;
            } else {
              this.selectedShow = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(29, 'days').set('hours', 0).set('minutes', 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_2__().set('hours', 23).set('minutes', 59)
              };
              this.selectedShowCopy = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(29, 'days').set('hours', 0).set('minutes', 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_2__().set('hours', 23).set('minutes', 59)
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
          value: function createQuerryparams(categoryId, vehicleId, search, date, listing, graphname) {
            var querryParams;

            if (listing) {
              querryParams = "organisation=".concat(JSON.stringify(this.selectedOrgID), "&page=").concat(this.page, "&limit=").concat(this.limit);
            } else {
              querryParams = "organisation=".concat(JSON.stringify(this.selectedOrgID));
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

            if (graphname) {
              querryParams = querryParams + "&score_type=".concat(graphname);
            }

            querryParams = querryParams + "&from_date=".concat(moment__WEBPACK_IMPORTED_MODULE_2__(date.startDate).format('YYYY-MM-DD'));
            querryParams = querryParams + "&to_date=".concat(moment__WEBPACK_IMPORTED_MODULE_2__(date.endDate).format('YYYY-MM-DD'));
            var val = this.service.checkCustomDate(moment__WEBPACK_IMPORTED_MODULE_2__(date.startDate).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_2__(date.endDate).format('YYYY-MM-DD'));

            if (val == undefined) {
              querryParams = querryParams + "&custom_filter=true&filter_value=''";
            } else {
              if (categoryId && categoryId !== 'all' || vehicleId && vehicleId !== 'all' || search) {
                querryParams = querryParams + "&custom_filter=true&filter_value=''";
              } else {
                querryParams = querryParams + "&custom_filter=false&filter_value=".concat(val);
              }
            }

            return querryParams;
          }
        }, {
          key: "routeToVehicleDetail",
          value: function routeToVehicleDetail(id) {
            this.localService.setItem('vehicleId', id);
            this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].vehicleDetail.url]);
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
              startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(29, 'days').set('hours', 0).set('minutes', 0),
              endDate: moment__WEBPACK_IMPORTED_MODULE_2__().set('hours', 23).set('minutes', 59)
            };
            this.filterApply();
          }
        }, {
          key: "creategraphArray",
          value: function creategraphArray(side, graphname) {
            var _this8 = this;

            // console.log(this.drivingBehaviourRightgraph)
            if (side == 1) {
              this.speedProfile = {
                'weight': [],
                "date": []
              };

              if (this.myChartleft) {
                this.myChartleft.destroy();
              } // console.log(array)


              this.drivingBehaviourLeftgraph.forEach(function (element) {
                if (element[graphname] !== '1001' && element[graphname] !== 1001 && element[graphname] !== '1001.0') {
                  _this8.speedProfile.weight.push(Number(element[graphname]).toFixed(1));
                } else {
                  _this8.speedProfile.weight.push(null);
                }

                _this8.speedProfile.date.push(moment__WEBPACK_IMPORTED_MODULE_2__["utc"](element.date).format('DD/MM'));
              }); // console.log(this.speedProfile)

              this.createleftChart();
            } else {
              this.accProfile = {
                'weight': [],
                'date': []
              };

              if (this.myChartright) {
                this.myChartright.destroy();
              } // console.log(array)


              this.drivingBehaviourRightgraph.forEach(function (element) {
                if (element[graphname] !== '1001' && element[graphname] !== 1001 && element[graphname] !== '1001.0') {
                  _this8.accProfile.weight.push(Number(element[graphname]).toFixed(1));
                } else {
                  _this8.accProfile.weight.push(null);
                }

                _this8.accProfile.date.push(moment__WEBPACK_IMPORTED_MODULE_2__["utc"](element.date).format('DD/MM'));
              }); // console.log(this.speedProfile)

              this.createrightChart();
            }
          }
        }, {
          key: "createleftChart",
          value: function createleftChart() {
            var labels = this.speedProfile['date'];
            var htmlRef = this.elementRef.nativeElement.querySelector("#myChartleft");
            var gradient = this.elementRef.nativeElement.querySelector("#myChartleft").getContext('2d').createLinearGradient(0, 0, 0, 600);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(0, 'rgba(0, 122, 255, 0.33)');
            this.myChartleft = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](htmlRef, {
              type: 'line',
              data: {
                labels: labels,
                datasets: [{
                  label: "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.selected.startDate._d, 'dd-MM-yyyy', this.locale), " - ").concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.selected.endDate._d, 'dd-MM-yyyy', this.locale)),
                  data: this.speedProfile['weight'],
                  borderColor: '#0064FF',
                  cubicInterpolationMode: 'monotone',
                  tension: 0.4,
                  fill: 'start',
                  backgroundColor: gradient
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1,
                plugins: {
                  title: {
                    display: false,
                    text: 'Stacked scales'
                  },
                  legend: {
                    align: 'end',
                    labels: {
                      usePointStyle: true,
                      pointStyle: 'rect'
                    }
                  },
                  tooltip: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                  }
                },
                scales: {
                  y: {
                    type: 'linear',
                    position: 'left',
                    stack: 'demo',
                    stackWeight: 2,
                    grid: {
                      color: 'rgba(0, 0, 0, 0)'
                    },
                    ticks: {
                      precision: 0
                    }
                  },
                  x: {
                    grid: {
                      color: 'rgba(0, 0, 0, 0)'
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "createrightChart",
          value: function createrightChart() {
            var labels = this.accProfile['date'];
            var htmlRef = this.elementRef.nativeElement.querySelector("#myChartright");
            var gradient = this.elementRef.nativeElement.querySelector("#myChartright").getContext('2d').createLinearGradient(0, 0, 0, 600);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(0, 'rgba(0, 122, 255, 0.33)');
            this.myChartright = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](htmlRef, {
              type: 'line',
              data: {
                labels: labels,
                datasets: [{
                  label: "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.selectedAgain.startDate._d, 'dd-MM-yyyy', this.locale), " - ").concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.selectedAgain.endDate._d, 'dd-MM-yyyy', this.locale)),
                  data: this.accProfile['weight'],
                  borderColor: '#4DBFFF',
                  cubicInterpolationMode: 'monotone',
                  tension: 0.4,
                  fill: 'start',
                  backgroundColor: gradient
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1,
                plugins: {
                  title: {
                    display: false,
                    text: 'Stacked scales'
                  },
                  legend: {
                    align: 'end',
                    labels: {
                      usePointStyle: true,
                      pointStyle: 'rect'
                    }
                  },
                  tooltip: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                  }
                },
                scales: {
                  y: {
                    type: 'linear',
                    position: 'left',
                    stack: 'demo',
                    stackWeight: 2,
                    grid: {
                      color: 'rgba(0, 0, 0, 0)'
                    },
                    ticks: {
                      precision: 0
                    }
                  },
                  x: {
                    grid: {
                      color: 'rgba(0, 0, 0, 0)'
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.myChartleft.destroy();
          }
        }]);

        return DrivingbehaviourscoreComponent;
      }();

      DrivingbehaviourscoreComponent.??fac = function DrivingbehaviourscoreComponent_Factory(t) {
        return new (t || DrivingbehaviourscoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_8__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
      };

      DrivingbehaviourscoreComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DrivingbehaviourscoreComponent,
        selectors: [["app-drivingbehaviourscore"]],
        decls: 110,
        vars: 92,
        consts: [[1, "behaviour", "mb-20"], [1, "mainFilter"], [1, "filterHeader"], [1, "behTitle", "mb-0"], ["aria-controls", "collapseExample", 1, "btn", "btnFiliter", 3, "click"], ["src", "assets/images/filter.svg"], [1, "btn", "btnFilterExport", "enable-click-event"], ["src", "assets/images/export.svg"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "filterBody"], [1, "filterBodyTitle"], [3, "click"], ["src", "assets/images/close-circle.svg"], [1, "filterSearch", "mb-20"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "filterSearchIcon"], ["src", "assets/images/search.svg"], [1, "profileBox"], ["appearance", "outline", 1, "fields", "fileld50"], ["panelClass", "customSelect", 3, "ngModel", "ngModelOptions", "disableOptionCentering", "placeholder", "ngModelChange"], [1, "searchSelect", "border-bottom"], ["type", "text", 1, "searchDropdown", 3, "placeholder", "ngModel", "ngModelChange"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.58973 9.59067C9.76496 9.41543 10.0491 9.41543 10.2243 9.59067L12.7013 12.0677C12.8765 12.2429 12.8765 12.527 12.7013 12.7022C12.526 12.8775 12.2419 12.8775 12.0667 12.7022L9.58973 10.2253C9.4145 10.05 9.4145 9.7659 9.58973 9.59067Z", "fill", "#848588"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.46094 2.06443C4.03226 2.06443 2.06344 4.03328 2.06344 6.46198C2.06344 8.89069 4.03226 10.8595 6.46094 10.8595C8.88961 10.8595 10.8584 8.89069 10.8584 6.46198C10.8584 4.03328 8.88961 2.06443 6.46094 2.06443ZM1.16602 6.46198C1.16602 3.53764 3.53663 1.16699 6.46094 1.16699C9.38524 1.16699 11.7559 3.53764 11.7559 6.46198C11.7559 9.38633 9.38524 11.757 6.46094 11.757C3.53663 11.757 1.16602 9.38633 1.16602 6.46198Z", "fill", "#848588"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-wrap", "justify-content-between", "mt-2"], ["mat-button", "", 1, "filterBtn", "exportBtn"], ["src", "assets/images/exportBtn.svg", 1, "exprtBtnImg"], [1, "d-flex", "flex-wrap"], ["mat-button", "", 1, "filterBtn", "cancleBtn", 3, "click"], ["mat-button", "", 1, "filterBtn", "applyBtn", 3, "click"], [1, "behaviorscore"], [1, "w-100"], [1, "w-49"], [1, "ngx-daterangepicker-action-left", "mondata"], [1, "calIcon"], ["src", "assets/images/calendar.svg"], [1, "cursor", "closeIcon"], ["src", "assets/images/Close.svg"], ["ngxDaterangepickerMd", "", "placeholder", "Select please...", 1, "form-control", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ranges", "showClearButton", "showCancel", "linkedCalendars", "isTooltipDate", "isInvalidDate", "locale", "keepCalendarOpeningWithRange", "showRangeLabelOnInput", "ngModelChange", "rangeClicked", "datesUpdated"], ["class", "behaviorBox", 4, "ngIf"], [1, "w-6"], [1, "ngx-daterangepicker-action", "mondata"], ["type", "text", "ngxDaterangepickerMd", "", "placeholder", "Select please...", 1, "form-control", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ranges", "showClearButton", "showCancel", "linkedCalendars", "isTooltipDate", "isInvalidDate", "locale", "keepCalendarOpeningWithRange", "showRangeLabelOnInput", "ngModelChange", "rangeClicked", "datesUpdated"], [1, "behaviorBox"], ["class", " selValue", 4, "ngIf"], [1, "margin-bottom"], ["class", "w-100 d-flex justify-content-center", 4, "ngIf"], [1, "graph"], ["id", "myChartleft"], [1, "text-center", "text-color", "text-capitalize"], ["id", "myChartright"], [1, "selValue"], [1, "valueBox", 3, "ngClass", "click"], [1, "values", "mb-0"], [1, "type", "mb-0"], ["class", " selValue ", 4, "ngIf"], [1, "w-100", "d-flex", "justify-content-center"], [2, "margin", "0 auto", 3, "diameter"]],
        template: function DrivingbehaviourscoreComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_Template_button_click_7_listener() {
              return ctx.changeState();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngbCollapseChange", function DrivingbehaviourscoreComponent_Template_div_ngbCollapseChange_11_listener($event) {
              return ctx.isCollapsed = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Filters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_Template_span_click_17_listener() {
              return ctx.changeState();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DrivingbehaviourscoreComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.searchString = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DrivingbehaviourscoreComponent_Template_mat_select_ngModelChange_28_listener($event) {
              return ctx.selectedVehicleCategory = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DrivingbehaviourscoreComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.searchCategory = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "svg", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "path", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "path", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](39, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](40, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, DrivingbehaviourscoreComponent_mat_option_41_Template, 2, 2, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](42, "filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](46, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DrivingbehaviourscoreComponent_Template_mat_select_ngModelChange_47_listener($event) {
              return ctx.selectedVehicle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DrivingbehaviourscoreComponent_Template_input_ngModelChange_50_listener($event) {
              return ctx.searchVehicle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](51, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "svg", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "path", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "path", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](58, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](59, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, DrivingbehaviourscoreComponent_mat_option_60_Template, 2, 2, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](61, "filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Export ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_Template_button_click_69_listener() {
              ctx.resetToLastState();
              return ctx.resetFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DrivingbehaviourscoreComponent_Template_button_click_72_listener() {
              ctx.filterApply();
              return ctx.destroy();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](74, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](79, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DrivingbehaviourscoreComponent_Template_input_ngModelChange_86_listener($event) {
              return ctx.selected = $event;
            })("rangeClicked", function DrivingbehaviourscoreComponent_Template_input_rangeClicked_86_listener($event) {
              return ctx.rangeClicked($event);
            })("datesUpdated", function DrivingbehaviourscoreComponent_Template_input_datesUpdated_86_listener($event) {
              return ctx.datesUpdated($event, 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](87, DrivingbehaviourscoreComponent_div_87_Template, 23, 22, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " vs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "input", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DrivingbehaviourscoreComponent_Template_input_ngModelChange_94_listener($event) {
              return ctx.selectedAgain = $event;
            })("rangeClicked", function DrivingbehaviourscoreComponent_Template_input_rangeClicked_94_listener($event) {
              return ctx.rangeClicked($event);
            })("datesUpdated", function DrivingbehaviourscoreComponent_Template_input_datesUpdated_94_listener($event) {
              return ctx.datesUpdated($event, 2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](98, DrivingbehaviourscoreComponent_div_98_Template, 19, 21, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](101, DrivingbehaviourscoreComponent_div_101_Template, 19, 21, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](102, DrivingbehaviourscoreComponent_div_102_Template, 3, 1, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "canvas", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, " vs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "canvas", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 54, "sidebar.vehicleScoreComp"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbCollapse", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchString);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](27, 56, "v.vehicleCategory"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 58, "v.vehicleCategory"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectedVehicleCategory)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](88, _c2))("disableOptionCentering", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](32, 60, "search"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchCategory);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](39, 62, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](40, 64, "all")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](42, 66, ctx.vehicleCategoryData, ctx.searchCategory, "vehicleCategory"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](46, 70, "v.selectVehicle"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](48, 72, "v.selectVehicle"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectedVehicle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](89, _c2))("disableOptionCentering", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](51, 74, "search"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchVehicle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](58, 76, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](59, 78, "all")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](61, 80, ctx.vehicleList, ctx.searchVehicle, "vehicle"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](74, 84, "apply"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](79, 86, "sidebar.vehicleScoreComp"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selected)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx.alwaysShowCalendars)("ranges", ctx.ranges)("showClearButton", false)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx.isTooltipDate)("isInvalidDate", ctx.isInvalidDate)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](90, _c3))("keepCalendarOpeningWithRange", ctx.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx.showRangeLabelOnInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.drivingBehaviourLeft != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectedAgain)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx.alwaysShowCalendars)("ranges", ctx.ranges)("showClearButton", false)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx.isTooltipDate)("isInvalidDate", ctx.isInvalidDate)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](91, _c3))("keepCalendarOpeningWithRange", ctx.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx.showRangeLabelOnInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.drivingBehaviourRight != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.drivingBehaviourRight != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isTripHistoryLoading);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_16__["DaterangepickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _shared_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterPipe"]],
        styles: [".behaviour[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.behaviour[_ngcontent-%COMP%]   .behTitle[_ngcontent-%COMP%] {\n  font: 600 16px/16px ModernEra;\n  color: #001e50;\n  padding: 19px 24px 24px;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px -5px 123px rgba(87, 84, 160, 0.08);\n  border-radius: 8px;\n  padding: 12px 24px 50px 24px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: rgba(96, 78, 255, 0.08);\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px 29px;\n  border-radius: 7px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1440px) {\n  .behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n  }\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%]   .valueBox.active[_ngcontent-%COMP%] {\n  background: #371987;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%]   .valueBox.active[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%], .behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%]   .valueBox.active[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%]   .valueBox.activeRight[_ngcontent-%COMP%] {\n  background: #000000;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%]   .valueBox.activeRight[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%], .behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%]   .valueBox.activeRight[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%] {\n  font: 600 18px/22px ModernEra;\n  color: #2a1e91;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .selValue[_ngcontent-%COMP%]   .valueBox[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  font: 500 14px/17px ModernEra;\n  color: #2a1e91;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .margin-bottom[_ngcontent-%COMP%] {\n  padding: 0px 50px;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-49[_ngcontent-%COMP%]   .behaviorBox[_ngcontent-%COMP%]   .margin-bottom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ffffff;\n  width: 100%;\n}\n.behaviour[_ngcontent-%COMP%]   .behaviorscore[_ngcontent-%COMP%]   .w-6[_ngcontent-%COMP%] {\n  width: 10%;\n  text-align: center;\n  padding-top: 120px;\n  font: 600 18px/24px Montserrat-Normal;\n  color: #001e50;\n}\n.behaviour[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #ffffff;\n  box-shadow: 0px -5px 123px rgba(87, 84, 160, 0.08);\n  border-radius: 8px;\n}\n.behaviour[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .text-color[_ngcontent-%COMP%] {\n  font: 700 16px/24px Montserrat-Normal;\n  color: #001e50;\n}\n@media (min-width: 862px) and (max-width: 1250px) {\n  .filterBody[_ngcontent-%COMP%]   .filterBtn.cancleBtn[_ngcontent-%COMP%] {\n    margin: 0 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZHJpdmluZ2JlaGF2aW91cnNjb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FDQ0E7RUFFTSxtQkFBQTtBQUFOO0FBRU07RUFDSSw2QkFBQTtFQUNBLGNER1E7RUNGUix1QkFBQTtBQUFWO0FBR007RURxS0osbUJBMUtNO0VBMktOLGtEQUFBO0VBQ0Esa0JBQUE7RUNyS1EsNEJBQUE7RUQ0SFIsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQzFIRjtBQURVO0VBQ0ksVUFBQTtBQUdkO0FBR2M7RUFDSSxtQkFBQTtFQUNBLG1DRGdDRjtBQ2pDaEI7QUFHa0I7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQUR0QjtBQUdzQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRDFCO0FBRTBCO0VBVEo7SUFVUSxpQkFBQTtFQUM1QjtBQUNGO0FBQzBCO0VBQ0ksbUJENkRSO0FDNUR0QjtBQUM4Qjs7RUFFSSxjRDVDMUI7QUM2Q1I7QUFFMEI7RUFDRSxtQkRvRFA7QUNwRHJCO0FBRTRCOztFQUVJLGNEcER4QjtBQ29EUjtBQUkwQjtFQUNJLDZCQUFBO0VBQ0EsY0QvQ2I7QUM2Q2pCO0FBSzBCO0VBQ0ksNkJBQUE7RUFDQSxjRHBEYjtBQ2lEakI7QUFPa0I7RUFDSSxpQkFBQTtBQUx0QjtBQU1zQjtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtBQUoxQjtBQVVVO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGNEOUVJO0FDc0VsQjtBQVdNO0VBQ0ksZ0JBQUE7RURvRlIsbUJBMUtNO0VBMktOLGtEQUFBO0VBQ0Esa0JBQUE7QUM1RkY7QUFRUTtFQUNJLHFDQUFBO0VBQ0EsY0R0Rk07QUNnRmxCO0FBV0U7RUFFRTtJQUNFLHlCQUFBO0VBVEo7QUFDRiIsImZpbGUiOiJkcml2aW5nYmVoYXZpb3Vyc2NvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIkBpbXBvcnQgXCIuLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcbi5iZWhhdmlvdXIge1xuICAgIFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgXG4gICAgICAuYmVoVGl0bGUge1xuICAgICAgICAgIGZvbnQ6IDYwMCAxNnB4LzE2cHggTW9kZXJuRXJhO1xuICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICAgIHBhZGRpbmc6IDE5cHggMjRweCAyNHB4O1xuICAgICAgfVxuICBcbiAgICAgIC5iZWhhdmlvcnNjb3JlIHtcbiAgICAgICAgQGluY2x1ZGUgbWFpbkJveHdpdGhCYWNrO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjRweCA1MHB4IDI0cHg7XG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1zdGFydDtcbiAgXG4gICAgICAgICAgLnctNDkge1xuICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICBcbiAgICAgICAgICAgIC8vICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgLy8gICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICAgICAgICAgIC8vICAgfVxuICBcbiAgICAgICAgICAgICAgLmJlaGF2aW9yQm94IHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmVoYXZpb3VyQmFjaztcbiAgXG4gICAgICAgICAgICAgICAgICAuc2VsVmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIFxuICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZUJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDI5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDoxNDQwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJFdoaXRlX2xhYmluZ19ZZWxsb3c7XG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlUmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJFdoaXRlX2xhYmluZ19CbGFjaztcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDYwMCAxOHB4LzIycHggTW9kZXJuRXJhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfRGFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogNTAwIDE0cHgvMTdweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9EYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm1hcmdpbi1ib3R0b217XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAudy02e1xuICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgICAgICAgICAgICAgZm9udDogNjAwIDE4cHgvMjRweCBNb250c2VycmF0LU5vcm1hbDtcbiAgICAgICAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmdyYXBoe1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIEBpbmNsdWRlIG1haW5Cb3h3aXRoQmFjaztcbiAgICAgICAgLnRleHQtY29sb3J7XG4gICAgICAgICAgICBmb250OiA3MDAgMTZweC8yNHB4IE1vbnRzZXJyYXQtTm9ybWFsO1xuICAgICAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6ODYycHgpIGFuZCAobWF4LXdpZHRoOjEyNTBweCkge1xuICAgIFxuICAgIC5maWx0ZXJCb2R5IC5maWx0ZXJCdG4uY2FuY2xlQnRue1xuICAgICAgbWFyZ2luOiAwIDEwcHggIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DrivingbehaviourscoreComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-drivingbehaviourscore',
            templateUrl: './drivingbehaviourscore.component.html',
            styleUrls: ['./drivingbehaviourscore.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_8__["LocalService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IcgC":
    /*!***************************************************************!*\
      !*** ./src/app/main/behaviourScore/driving/driving.module.ts ***!
      \***************************************************************/

    /*! exports provided: DrivingModule */

    /***/
    function IcgC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivingModule", function () {
        return DrivingModule;
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


      var _driving_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./driving-routing.module */
      "r2Zn");
      /* harmony import */


      var _VehiclesDrivingBehaviour_drivingbehaviourscore_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./VehiclesDrivingBehaviour/drivingbehaviourscore.component */
      "9UlC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-daterangepicker-material */
      "YhS8");
      /* harmony import */


      var src_app_config_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/config/material */
      "Uo7g");
      /* harmony import */


      var src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/components/component.module */
      "8OTh");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");

      var DrivingModule = /*#__PURE__*/_createClass(function DrivingModule() {
        _classCallCheck(this, DrivingModule);
      });

      DrivingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DrivingModule
      });
      DrivingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DrivingModule_Factory(t) {
          return new (t || DrivingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _driving_routing_module__WEBPACK_IMPORTED_MODULE_2__["DrivingRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_9__["ComponentModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(), src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
          extend: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DrivingModule, {
          declarations: [_VehiclesDrivingBehaviour_drivingbehaviourscore_component__WEBPACK_IMPORTED_MODULE_3__["DrivingbehaviourscoreComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _driving_routing_module__WEBPACK_IMPORTED_MODULE_2__["DrivingRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_9__["ComponentModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"], src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DrivingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_VehiclesDrivingBehaviour_drivingbehaviourscore_component__WEBPACK_IMPORTED_MODULE_3__["DrivingbehaviourscoreComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _driving_routing_module__WEBPACK_IMPORTED_MODULE_2__["DrivingRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_9__["ComponentModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(), src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
              extend: true
            })]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "r2Zn":
    /*!***********************************************************************!*\
      !*** ./src/app/main/behaviourScore/driving/driving-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: DrivingRoutingModule */

    /***/
    function r2Zn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivingRoutingModule", function () {
        return DrivingRoutingModule;
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


      var _VehiclesDrivingBehaviour_drivingbehaviourscore_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./VehiclesDrivingBehaviour/drivingbehaviourscore.component */
      "9UlC");

      var routes = [{
        path: "",
        component: _VehiclesDrivingBehaviour_drivingbehaviourscore_component__WEBPACK_IMPORTED_MODULE_2__["DrivingbehaviourscoreComponent"],
        pathMatch: 'full'
      }];

      var DrivingRoutingModule = /*#__PURE__*/_createClass(function DrivingRoutingModule() {
        _classCallCheck(this, DrivingRoutingModule);
      });

      DrivingRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DrivingRoutingModule
      });
      DrivingRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DrivingRoutingModule_Factory(t) {
          return new (t || DrivingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DrivingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DrivingRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=behaviourScore-driving-driving-module-es5.js.map