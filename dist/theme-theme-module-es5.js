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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-theme-module"], {
    /***/
    "/F38":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/trip-history/trip-history.component.ts ***!
      \**************************************************************************/

    /*! exports provided: TripHistoryComponent */

    /***/
    function F38(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TripHistoryComponent", function () {
        return TripHistoryComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function TripHistoryComponent_div_0_div_85_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 3, "hardAcceleration"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r5.toolTipData[item_r1.id]["acceleration"] || "0", " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 5, "Times"), "");
        }
      }

      function TripHistoryComponent_div_0_div_85_div_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 3, "harshCorner"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r6.toolTipData[item_r1.id]["cornering"] || "0", " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 5, "Times"), "");
        }
      }

      function TripHistoryComponent_div_0_div_85_div_3_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 3, "speeding"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r7.toolTipData[item_r1.id]["speed"] || "0", " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 5, "Times"), "");
        }
      }

      function TripHistoryComponent_div_0_div_85_div_3_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 3, "idiling"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r8.toolTipData[item_r1.id]["idling"] || "0", " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 5, "Times"), "");
        }
      }

      function TripHistoryComponent_div_0_div_85_div_3_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 3, "hardBraking"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r9.toolTipData[item_r1.id]["breaking"] || "0", " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 5, "Times"), "");
        }
      }

      function TripHistoryComponent_div_0_div_85_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TripHistoryComponent_div_0_div_85_div_3_div_1_Template, 7, 7, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TripHistoryComponent_div_0_div_85_div_3_div_2_Template, 7, 7, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TripHistoryComponent_div_0_div_85_div_3_div_3_Template, 7, 7, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TripHistoryComponent_div_0_div_85_div_3_div_4_Template, 7, 7, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, TripHistoryComponent_div_0_div_85_div_3_div_5_Template, 7, 7, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.toolTipData[item_r1.id]["acceleration"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.toolTipData[item_r1.id]["cornering"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.toolTipData[item_r1.id]["speed"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.toolTipData[item_r1.id]["idling"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.toolTipData[item_r1.id]["breaking"]);
        }
      }

      function TripHistoryComponent_div_0_div_85_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("mouseenter", function TripHistoryComponent_div_0_div_85_Template_span_mouseenter_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var item_r1 = ctx_r17.$implicit;
            var i_r2 = ctx_r17.index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.onMouseEnter(item_r1, i_r2);
          })("mouseleave", function TripHistoryComponent_div_0_div_85_Template_span_mouseleave_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var item_r1 = ctx_r20.$implicit;
            var i_r2 = ctx_r20.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.onMouseEnter(item_r1, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TripHistoryComponent_div_0_div_85_div_3_Template, 6, 5, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.showPopupIndex == i_r2);
        }
      }

      function TripHistoryComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TripHistoryComponent_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var item_r1 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.routeToTripDetailInfo(item_r1 == null ? null : item_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "circle", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "ul", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "svg", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "style", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " .st0 { fill: #001E50; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "svg", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "style", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " .st0 { fill: #604EFF; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](82, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](85, TripHistoryComponent_div_0_div_85_Template, 4, 1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "svg", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 18, "sidebar.singleTrip"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 20, "licenseText"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", (item_r1 == null ? null : item_r1.license_plate) || "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]((item_r1 == null ? null : item_r1.license_plate) || "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", ctx_r0.dateTimeFormat(item_r1 == null ? null : item_r1.start_date_time));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.dateTimeFormat(item_r1 == null ? null : item_r1.start_date_time));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", (item_r1 == null ? null : item_r1.start_location_address) || "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]((item_r1 == null ? null : item_r1.start_location_address) || "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.calcTime(item_r1 == null ? null : item_r1.stop_date_time, item_r1 == null ? null : item_r1.start_date_time), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.service.convertToDutch(item_r1 == null ? null : item_r1.distance), "km");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", ctx_r0.dateTimeFormat(item_r1 == null ? null : item_r1.stop_date_time));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.dateTimeFormat(item_r1 == null ? null : item_r1.stop_date_time));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", (item_r1 == null ? null : item_r1.stop_location_address) || "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]((item_r1 == null ? null : item_r1.stop_location_address) || "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.service.convertToDutch(item_r1 == null ? null : item_r1.safe_score));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](82, 22, "t.safeScore"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.checkKeyPresent(ctx_r0.toolTipData[item_r1.id]));
        }
      }

      var TripHistoryComponent = /*#__PURE__*/function () {
        function TripHistoryComponent(router, service, localService) {
          _classCallCheck(this, TripHistoryComponent);

          this.router = router;
          this.service = service;
          this.localService = localService;
          this.tableData = [];
          this.toolTipData = {};
        }

        _createClass(TripHistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "calcTime",
          value: function calcTime(stopTime, startTime) {
            var duration = moment__WEBPACK_IMPORTED_MODULE_1__["duration"](moment__WEBPACK_IMPORTED_MODULE_1__(stopTime).diff(moment__WEBPACK_IMPORTED_MODULE_1__(startTime)));
            var lang = this.localService.getItem('currentlang') || 'en';

            if (lang == 'en') {
              return moment__WEBPACK_IMPORTED_MODULE_1__["utc"](duration.as('milliseconds')).format('HH[h] mm[m]');
            } else {
              return moment__WEBPACK_IMPORTED_MODULE_1__["utc"](duration.as('milliseconds')).format('HH[u] mm[m]');
            }
          }
        }, {
          key: "dateTimeFormat",
          value: function dateTimeFormat(dateTime) {
            if (dateTime) return moment__WEBPACK_IMPORTED_MODULE_1__(dateTime).utc().format("HH:mm [???] DD/MM/yyyy");else return 'NA';
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter(selectedObj, index) {
            if (index == this.showPopupIndex) this.showPopupIndex = null;else this.showPopupIndex = index;
          }
        }, {
          key: "routeToTripDetailInfo",
          value: function routeToTripDetailInfo(id) {
            this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].tripDetail.url], {
              queryParams: {
                tripId: id
              }
            });
          }
        }, {
          key: "checkKeyPresent",
          value: function checkKeyPresent(obj) {
            if (obj) {
              var key = Object.keys(obj);
              if (key.length) return true;else return false;
            } else {
              return false;
            }
          }
        }, {
          key: "routeToDriverDetail",
          value: function routeToDriverDetail(id) {
            this.localService.setItem('driverId', id);
            this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].driverDetail.url]);
          }
        }]);

        return TripHistoryComponent;
      }();

      TripHistoryComponent.??fac = function TripHistoryComponent_Factory(t) {
        return new (t || TripHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_5__["LocalService"]));
      };

      TripHistoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TripHistoryComponent,
        selectors: [["app-trip-history"]],
        inputs: {
          tableData: "tableData",
          toolTipData: "toolTipData"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "tripSubBox"], [1, "w-21"], [1, "tripMainBox", "d-block"], [1, "tripBox"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M17.1834 7.04183C16.3084 3.19183 12.9501 1.4585 10.0001 1.4585C10.0001 1.4585 10.0001 1.4585 9.99175 1.4585C7.05008 1.4585 3.68341 3.1835 2.80841 7.0335C1.83341 11.3335 4.46675 14.9752 6.85008 17.2668C7.73341 18.1168 8.86675 18.5418 10.0001 18.5418C11.1334 18.5418 12.2667 18.1168 13.1417 17.2668C15.5251 14.9752 18.1584 11.3418 17.1834 7.04183Z", "fill", "#474F5A"], ["cx", "9.99967", "cy", "9.16667", "r", "4.16667", "fill", "white"], [1, "tripTitle"], [1, "tripId"], [1, "seprator"], ["src", "assets/images/border-right.svg", 1, "img-fluid"], ["d", "M17.9165 12.9167C18.1498 12.9167 18.3332 13.1001 18.3332 13.3334V14.1667C18.3332 15.5501 17.2165 16.6667 15.8332 16.6667C15.8332 15.2917 14.7082 14.1667 13.3332 14.1667C11.9582 14.1667 10.8332 15.2917 10.8332 16.6667H9.1665C9.1665 15.2917 8.0415 14.1667 6.6665 14.1667C5.2915 14.1667 4.1665 15.2917 4.1665 16.6667C2.78317 16.6667 1.6665 15.5501 1.6665 14.1667V12.5001C1.6665 12.0417 2.0415 11.6667 2.49984 11.6667H10.4165C11.5665 11.6667 12.4998 10.7334 12.4998 9.58341V5.00008C12.4998 4.54175 12.8748 4.16675 13.3332 4.16675H14.0332C14.6332 4.16675 15.1832 4.49175 15.4832 5.00841L16.0165 5.94175C16.0915 6.07508 15.9915 6.25008 15.8332 6.25008C14.6832 6.25008 13.7498 7.18341 13.7498 8.33341V10.8334C13.7498 11.9834 14.6832 12.9167 15.8332 12.9167H17.9165Z", "fill", "#474F5A"], ["d", "M6.66667 18.3333C7.58714 18.3333 8.33333 17.5871 8.33333 16.6667C8.33333 15.7462 7.58714 15 6.66667 15C5.74619 15 5 15.7462 5 16.6667C5 17.5871 5.74619 18.3333 6.66667 18.3333Z", "fill", "#474F5A"], ["d", "M13.3332 18.3333C14.2536 18.3333 14.9998 17.5871 14.9998 16.6667C14.9998 15.7462 14.2536 15 13.3332 15C12.4127 15 11.6665 15.7462 11.6665 16.6667C11.6665 17.5871 12.4127 18.3333 13.3332 18.3333Z", "fill", "#474F5A"], ["d", "M18.3333 10.4417V11.6667H15.8333C15.375 11.6667 15 11.2917 15 10.8333V8.33333C15 7.875 15.375 7.5 15.8333 7.5H16.9083L18.1167 9.61667C18.2583 9.86667 18.3333 10.15 18.3333 10.4417Z", "fill", "#474F5A"], ["d", "M10.9003 1.66675H4.74199C3.25033 1.66675 2.00033 2.73341 1.72533 4.15008H5.36699C5.68366 4.15008 5.93366 4.40841 5.93366 4.72508C5.93366 5.04175 5.68366 5.29175 5.36699 5.29175H1.66699V6.44175H3.83366C4.15033 6.44175 4.40866 6.70008 4.40866 7.01675C4.40866 7.33342 4.15033 7.58342 3.83366 7.58342H1.66699V8.73341H2.30866C2.62533 8.73341 2.88366 8.99175 2.88366 9.30841C2.88366 9.62508 2.62533 9.87508 2.30866 9.87508H1.66699V10.0667C1.66699 10.5251 2.04199 10.9001 2.50033 10.9001H10.1253C10.9753 10.9001 11.667 10.2084 11.667 9.35841V2.43341C11.667 2.00841 11.3253 1.66675 10.9003 1.66675Z", "fill", "#474F5A"], ["d", "M1.72516 4.15015H1.60016H0.783496C0.466829 4.15015 0.208496 4.40848 0.208496 4.72515C0.208496 5.04181 0.466829 5.29181 0.783496 5.29181H1.54183H1.66683V4.74181C1.66683 4.54181 1.69183 4.34181 1.72516 4.15015Z", "fill", "#474F5A"], ["d", "M1.54183 6.44165H0.783496C0.466829 6.44165 0.208496 6.69998 0.208496 7.01665C0.208496 7.33332 0.466829 7.58332 0.783496 7.58332H1.54183H1.66683V6.44165H1.54183Z", "fill", "#474F5A"], ["d", "M1.54183 8.7334H0.783496C0.466829 8.7334 0.208496 8.99173 0.208496 9.3084C0.208496 9.62507 0.466829 9.87507 0.783496 9.87507H1.54183H1.66683V8.7334H1.54183Z", "fill", "#474F5A"], ["matTooltipPosition", "below", "width", "22", "height", "22", 1, "licPlate", 3, "matTooltip"], [1, "tripMiddeleBox"], [1, "locationLeft"], ["matTooltipPosition", "above", "width", "22", "height", "22", 1, "date", 3, "matTooltip"], ["matTooltipPosition", "below", "width", "22", "height", "22", 1, "detail", "fromAddress", 3, "matTooltip"], [1, "text-center", "centerBox"], [1, "hrsSec"], ["src", "assets/images/newIcons/clock.svg"], [1, ""], [1, "img-gps"], ["width", "24", "height", "24", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 24 24"], ["type", "text/css"], ["d", "M12,20.2c-4.5,0-8.2-3.7-8.2-8.2S7.5,3.8,12,3.8s8.2,3.7,8.2,8.2S16.5,20.2,12,20.2z M12,5.2\n            c-3.7,0-6.8,3-6.8,6.8c0,3.7,3,6.8,6.8,6.8c3.7,0,6.8-3,6.8-6.8C18.8,8.3,15.7,5.2,12,5.2z", 1, "st0"], ["d", "M12,15.8c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C15.8,14.1,14.1,15.8,12,15.8z\n             M12,9.8c-1.2,0-2.2,1-2.2,2.2c0,1.2,1,2.2,2.2,2.2c1.2,0,2.2-1,2.2-2.2C14.2,10.8,13.2,9.8,12,9.8z", 1, "st0"], ["d", "M12,4.8c-0.4,0-0.8-0.3-0.8-0.8V2c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v2C12.8,4.4,12.4,4.8,12,4.8z", 1, "st0"], ["d", "M4,12.8H2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h2c0.4,0,0.8,0.3,0.8,0.8S4.4,12.8,4,12.8z", 1, "st0"], ["d", "M12,22.8c-0.4,0-0.8-0.3-0.8-0.8v-2c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v2C12.8,22.4,12.4,22.8,12,22.8z", 1, "st0"], ["d", "M22,12.8h-2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h2c0.4,0,0.8,0.3,0.8,0.8S22.4,12.8,22,12.8z", 1, "st0"], [1, "dot"], ["width", "18", "height", "20", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 24 24"], ["d", "M12,22.8c-1.5,0-3-0.6-4.1-1.7c-2.9-2.8-6.2-7.4-5-12.8v0C4,3.4,8.3,1.2,12,1.2c0,0,0,0,0,0\n            c3.7,0,8,2.2,9.1,7.1c1.2,5.4-2,9.9-5,12.7C15,22.2,13.5,22.8,12,22.8z M4.4,8.7C3.3,13.4,6.2,17.4,8.9,20c1.7,1.7,4.4,1.7,6.2,0\n            c2.7-2.6,5.6-6.6,4.6-11.3c-1-4.4-4.7-5.9-7.6-5.9c0,0,0,0,0,0C9.1,2.8,5.3,4.3,4.4,8.7L4.4,8.7z", 1, "st0"], ["d", "M10.8,13.8c-0.2,0-0.4-0.1-0.5-0.2L8.7,12c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l1,1l3.5-3.5\n            c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-4,4C11.1,13.7,10.9,13.8,10.8,13.8z", 1, "st0"], ["src", "assets/images/newIcons/routing.svg"], ["matTooltipPosition", "below", "width", "22", "height", "22", 1, "detail", "toAddress", 3, "matTooltip"], [1, "safeBox"], [1, "safeTitle"], [1, "safeDesc"], [1, "tripRight"], [1, "warningImg"], ["class", "warningDrop ", 4, "ngIf"], [1, "export"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.64 12.81L13.02 8.43H10.59C10.18 8.43 9.84 8.09 9.84 7.68C9.84 7.27 10.18 6.93 10.59 6.93H14.83C14.93 6.93 15.02 6.95 15.12 6.99C15.3 7.07 15.45 7.21 15.53 7.4C15.57 7.49 15.59 7.59 15.59 7.69V11.93C15.59 12.34 15.25 12.68 14.84 12.68C14.43 12.68 14.09 12.34 14.09 11.93V9.5L9.7 13.87C9.55 14.02 9.36 14.09 9.17 14.09C8.98 14.09 8.79 14.02 8.64 13.87C8.35 13.58 8.35 13.1 8.64 12.81ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z", "fill", "#C5CDD4"], [1, "warningDrop"], [1, "cursor", 3, "mouseenter", "mouseleave"], ["src", "assets/images/warning-2.png"], ["class", "waringDropDown", 4, "ngIf"], [1, "waringDropDown"], ["class", "dataAcceleration", 4, "ngIf"], [1, "dataAcceleration"], [1, "warningTitle"], [1, "warningCount"]],
        template: function TripHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, TripHistoryComponent_div_0_Template, 89, 24, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tableData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: [".tripSubBox[_ngcontent-%COMP%] {\n  border: 0.5px solid #939eaa;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  padding: 15px 12px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n.tripSubBox[_ngcontent-%COMP%]   .w-21[_ngcontent-%COMP%] {\n  max-width: 21%;\n}\n@media (min-width: 200px) and (max-width: 991px) {\n  .tripSubBox[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripMainBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  padding: 9px 12px;\n  background: rgba(151, 151, 151, 0.05);\n  margin-right: 12px;\n  align-items: center;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripMiddeleBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  padding: 9px 12px;\n  background: rgba(151, 151, 151, 0.05);\n  margin-right: 12px;\n  align-items: center;\n  max-width: 62%;\n  width: 100%;\n}\n@media (min-width: 992px) and (max-width: 1460px) {\n  .tripSubBox[_ngcontent-%COMP%]   .tripMiddeleBox[_ngcontent-%COMP%] {\n    max-width: 51%;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n  }\n}\n@media (min-width: 200px) and (max-width: 991px) {\n  .tripSubBox[_ngcontent-%COMP%]   .tripMiddeleBox[_ngcontent-%COMP%] {\n    order: 4;\n    margin-top: 20px;\n    max-width: 100%;\n  }\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripBoxDriver[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  max-width: 300px;\n  width: 100%;\n  align-items: center;\n  padding: 9px 12px;\n  background: rgba(151, 151, 151, 0.05);\n  margin-right: 12px;\n}\n.tripSubBox[_ngcontent-%COMP%]   .hrsSec[_ngcontent-%COMP%] {\n  font: 700 8px/16px ModernEra_Bold !important;\n  color: #474f5a;\n  background: #e0e3e7;\n  border-radius: 24px;\n  padding: 3px 12px;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripBox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripBox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripBox[_ngcontent-%COMP%]   .tripTitle[_ngcontent-%COMP%] {\n  font: 700 12px/16px ModernEra_Bold !important;\n  color: #474f5a;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripBox[_ngcontent-%COMP%]   .tripId[_ngcontent-%COMP%] {\n  color: #474f5a;\n  margin-left: 6px;\n  font: 700 14px/16px ModernEra_Bold !important;\n  max-width: 44px;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripBox[_ngcontent-%COMP%]   .licPlate[_ngcontent-%COMP%] {\n  color: #474f5a;\n  margin-left: 6px;\n  font: 700 14px/16px ModernEra !important;\n  max-width: 64px;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripBox[_ngcontent-%COMP%]   .driverName[_ngcontent-%COMP%] {\n  color: #474f5a;\n  margin-left: 6px;\n  font: 700 14px/16px ModernEra !important;\n  width: 120px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tripSubBox[_ngcontent-%COMP%]   .seprator[_ngcontent-%COMP%] {\n  margin: 0 22px 0px 0px;\n}\n.tripSubBox[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font: 700 12px/18px ModernEra_Bold !important;\n  color: #001e50;\n  margin-bottom: 4px;\n}\n.tripSubBox[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  font: 700 11px/18px ModernEra_Bold !important;\n  color: #001e50;\n  margin-bottom: 0;\n}\n.tripSubBox[_ngcontent-%COMP%]   .detail.fromAddress[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.tripSubBox[_ngcontent-%COMP%]   .detail.toAddress[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.tripSubBox[_ngcontent-%COMP%]   .safeBox[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: rgba(0, 203, 160, 0.05);\n  text-align: center;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1460px) {\n  .tripSubBox[_ngcontent-%COMP%]   .safeBox[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n}\n.tripSubBox[_ngcontent-%COMP%]   .safeBox[_ngcontent-%COMP%]   .safeTitle[_ngcontent-%COMP%] {\n  font: 700 18px/16px ModernEra_Bold !important;\n  color: #00cba0;\n  margin-bottom: 8px;\n}\n.tripSubBox[_ngcontent-%COMP%]   .safeBox[_ngcontent-%COMP%]   .safeDesc[_ngcontent-%COMP%] {\n  font: 700 12px/18px ModernEra !important;\n  color: #00cba0;\n  max-width: 90px;\n  width: 100%;\n  margin-bottom: 0;\n}\n@media (max-width: 1460px) {\n  .tripSubBox[_ngcontent-%COMP%]   .safeBox[_ngcontent-%COMP%]   .safeDesc[_ngcontent-%COMP%] {\n    max-width: 100px;\n    width: 100%;\n  }\n}\n.tripSubBox[_ngcontent-%COMP%]   .centerBox[_ngcontent-%COMP%] {\n  margin: 0 34px;\n}\n.tripSubBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: center;\n  padding: 0;\n  margin: 0 auto;\n  flex-wrap: nowrap;\n}\n.tripSubBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.dot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #001e50;\n  width: 135px;\n}\n@media (max-width: 1500px) {\n  .tripSubBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.dot[_ngcontent-%COMP%] {\n    width: 69px;\n  }\n}\n.tripSubBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.dot[_ngcontent-%COMP%]   .detailNumber[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font: 12px/18px ModernEra !important;\n  color: #001e50;\n}\n.tripSubBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.dot[_ngcontent-%COMP%]   .detailNumber.safeScore[_ngcontent-%COMP%] {\n  max-width: 195px;\n  width: 100%;\n  padding-right: 30px;\n}\n@media (max-width: 1200px) {\n  .tripSubBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.dot[_ngcontent-%COMP%]   .detailNumber.totalTime[_ngcontent-%COMP%] {\n    padding-right: 20px;\n  }\n}\n.tripSubBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.dot[_ngcontent-%COMP%]   .detailNumber[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0064ff;\n  margin-left: 8px;\n}\n.tripSubBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .img-gps[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #001e50;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%] {\n  position: relative;\n  width: 30px;\n}\n@media (max-width: 1460px) {\n  .tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%]   .export[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%]   .warningImg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%]   .warningDrop[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%]   .warningDrop[_ngcontent-%COMP%]   .waringDropDown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  right: 0;\n  background: #ffffff;\n  box-shadow: 0px -5px 123px rgba(87, 84, 160, 0.08);\n  border-radius: 8px;\n  width: 333px;\n  max-height: 242px;\n  overflow-y: auto;\n  padding: 10px 0;\n  z-index: 3;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%]   .warningDrop[_ngcontent-%COMP%]   .waringDropDown[_ngcontent-%COMP%]   .dataAcceleration[_ngcontent-%COMP%] {\n  padding: 12px 32px 12px 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  border-bottom: 0.5px solid #e0e3e7;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%]   .warningDrop[_ngcontent-%COMP%]   .waringDropDown[_ngcontent-%COMP%]   .dataAcceleration[_ngcontent-%COMP%]:nth-last-child(1) {\n  border: none;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%]   .warningDrop[_ngcontent-%COMP%]   .waringDropDown[_ngcontent-%COMP%]   .dataAcceleration[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font: 600 14px/20px ModernEra !important;\n  margin-bottom: 0;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%]   .warningDrop[_ngcontent-%COMP%]   .waringDropDown[_ngcontent-%COMP%]   .dataAcceleration[_ngcontent-%COMP%]   .warningTitle[_ngcontent-%COMP%] {\n  color: #ff7070;\n}\n.tripSubBox[_ngcontent-%COMP%]   .tripRight[_ngcontent-%COMP%]   .warningDrop[_ngcontent-%COMP%]   .waringDropDown[_ngcontent-%COMP%]   .dataAcceleration[_ngcontent-%COMP%]   .warningCount[_ngcontent-%COMP%] {\n  color: #0064ff;\n}\n  .mat-tooltip {\n  background: #ffffff;\n  color: #474f5a !important;\n  font: 700 14px/16px ModernEra !important;\n  box-shadow: 6px 12px 12px rgba(0, 0, 0, 0.31) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vdHJpcC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FDRUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFRDZIQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VDN0hBLGlCQUFBO0FBRUY7QUFFRTtFQUNFLGNBQUE7QUFBSjtBQUVFO0VBYkY7SUFjSSxlQUFBO0VBQ0Y7QUFDRjtBQUFFO0VEdUhBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUN2SEUsaUJBQUE7RUFDQSxxQ0RnR1c7RUMvRlgsa0JBQUE7RUFDQSxtQkFBQTtBQUlKO0FBRkU7RURxSEEsYUFBQTtFQUNBLDhCQUFBO0VDcEhFLGlCQUFBO0VBRUEsaUJBQUE7RUFDQSxxQ0R1Rlc7RUN0Rlgsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSUo7QUFISTtFQVZGO0lBWUksY0FBQTtJQUVBLFdBQUE7SUQ0RkosYUFBQTtJQUNBLGVBQUE7SUFDQSw4QkFBQTtJQzVGSSxpQkFBQTtFQU1KO0FBQ0Y7QUFMSTtFQWxCRjtJQW1CSSxRQUFBO0lBQ0EsZ0JBQUE7SUFFQSxlQUFBO0VBT0o7QUFDRjtBQUxFO0VEaUZBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUNqRkUsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDRDZEVztFQzVEWCxrQkFBQTtBQVNKO0FBUEU7RUFDRSw0Q0FBQTtFQUNBLGNEMUJhO0VDMkJiLG1CRHhDcUI7RUN5Q3JCLG1CQUFBO0VBQ0EsaUJBQUE7QUFTSjtBQU5FO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0FBT0o7QUFOSTtFQUNFLGlCQUFBO0FBUU47QUFOSTtFQUNFLDZDQUFBO0VBQ0EsY0R6Q1c7QUNpRGpCO0FBTkk7RUFDRSxjRDVDVztFQzZDWCxnQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RURnRUosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDdkRGO0FBUkk7RUFDRSxjRHBEVztFQ3FEWCxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUR3REosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDN0NGO0FBVkk7RUFDRSxjRDVEVztFQzZEWCxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFRGlESixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNwQ0Y7QUFWRTtFQUNFLHNCQUFBO0FBWUo7QUFORTtFRDBDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQzNDRSw2Q0FBQTtFQUNBLGNEdkdjO0VDd0dkLGtCQUFBO0FBV0o7QUFURTtFQUNFLDZDQUFBO0VBQ0EsY0Q1R2M7RUM2R2QsZ0JBQUE7QUFXSjtBQVZJO0VBRUUsV0FBQTtFRDhCSixvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ2xCRjtBQVpJO0VBRUUsV0FBQTtFRHlCSixvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ1hGO0FBYkU7RUFDRSxrQkFBQTtFQUNBLG1DRGZZO0VDZ0JaLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFlSjtBQWRJO0VBUEY7SUFRSSxjQUFBO0VBaUJKO0FBQ0Y7QUFoQkk7RUFDRSw2Q0FBQTtFQUNBLGNEaElhO0VDaUliLGtCQUFBO0FBa0JOO0FBaEJJO0VBQ0Usd0NBQUE7RUFDQSxjRHJJYTtFQ3NJYixlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBa0JOO0FBakJNO0VBTkY7SUFPSSxnQkFBQTtJQUNBLFdBQUE7RUFvQk47QUFDRjtBQWpCRTtFQUNFLGNBQUE7QUFtQko7QUFqQkU7RUFDRSxnQkFBQTtFRHpCRixhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VDeUJFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXFCSjtBQWxCTTtFQUNFLGlDQUFBO0VBQ0EsWUFBQTtBQW9CUjtBQW5CUTtFQUhGO0lBSUksV0FBQTtFQXNCUjtBQUNGO0FBckJRO0VBQ0UsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNEektRO0FDZ01sQjtBQXJCVTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBdUJaO0FBcEJZO0VBREY7SUFFSSxtQkFBQTtFQXVCWjtBQUNGO0FBZlU7RUFDRSxjRDNMRztFQzRMSCxnQkFBQTtBQWlCWjtBQUpRO0VBQ0UsYUQzTVE7QUNpTmxCO0FBNkRFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBM0RKO0FBNERJO0VBSEY7SUFJSSxXQUFBO0VBekRKO0FBQ0Y7QUEyREk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBekROO0FBNERJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQTFETjtBQTZESTtFQUNFLGtCQUFBO0FBM0ROO0FBNkRNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFRGpJTixtQkExS007RUEyS04sa0RBQUE7RUFDQSxrQkFBQTtFQ2lJTSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBekRSO0FBMkRRO0VBQ0UsNEJBQUE7RUR2TFIsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQTBCQSxrQ0FBQTtBQ3NHRjtBQXlEVTtFQUNFLFlBQUE7QUF2RFo7QUEwRFU7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0FBeERaO0FBMkRVO0VBQ0UsY0QxVEg7QUNpUVQ7QUE0RFU7RUFDRSxjRGpVRztBQ3VRZjtBQTZGQTtFQUNFLG1CRDFXTTtFQzJXTix5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esd0RBQUE7QUExRkYiLCJmaWxlIjoidHJpcC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypORVcgQ09MT1IgTElTVCovXG5cblxuJGxpZ2h0Ymx1ZTogIzAwNTdmZjtcbiRkcmFrX0JsdWU6ICMyOTYyZmY7XG4kc2JsdWU6ICMxYjE5NGI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHRibGFjazogIzE3MWMyMjtcbiRsaWdodGdyYXk6ICM5MzllYWE7XG4kZmdyYXk6ICM3ZDg1OTI7XG4kU2Vjb25kYXJ5X2JsYWNrOiAjMDAxZTUwO1xuJFByaW1hcnlfQmx1ZTogIzAwNjRmZjtcbiRTZWNvbmRhcnlfQmx1ZTogIzYwNGVmZjtcbiRidG5FeHBvcnRCbHVlOiAjNGM2ZmZmO1xuJGRhbmdlcjogI2ZmNzA3MDtcbiRTZWNvbmRhcnlfQWxlcnRzOiAjMDBjYmEwO1xuJG5vSW5mbzogIzE4YTBmYjtcbiRTZWNvbmRhcnlfRGFyazogIzJhMWU5MTtcbiRkYXJrOiAjMzIzMzM4O1xuJGJvcmRlckNvbG9yOiAjYzVjZGQ0O1xuJGxpZ2h0V2hpdGVjb2xvcjogI2Y5ZmFmYjtcbiRncm91cEJvcmRlckRhdGE6ICNlNmU3ZTg7XG4kbGlnaHRtaXhibHVlV2hpdGVjb2xvcjogI2UwZTNlNztcbiR3aGl0ZVNoYWRvdzogI2U5ZWJmMDtcbiRza3lCbHVlOiAjNGRiZmZmO1xuJHllbGxvdzogI2ZmZWE2YztcbiRvcmFuZ2U6ICNmZjk5NTA7XG4kYm9keUJhY2tHcmF5OiAjZmRmY2ZmO1xuJGxpZ2h0QmxhY2s6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4kZXhwb3J0QnRuOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjEpO1xuJGRhbmdlckJveEJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRncmVlbkJveEJhY2s6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMSk7XG4kdGFibGVPZGRCYWNrOiAjZmJmYmZiO1xuJFNlY29uZGFyeV9CbHVlX2Rhcms6ICM3NTU1Y2Y7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbmlnaHRUZXh0Q29sb3I6ICM0NzRmNWE7XG4kbmlnaHRCYWNrQmxhY2s6ICM2NjcyODA7XG4kd2hpdGVDb2xvcjogI2UxZTFlMTtcbiRyZWRDb2xvcjogI2VkNTAyZTtcbiRkYXJrX2dyYXk6ICNiZGJkYmQ7XG4kaGVscEJ0bl9CbHVlOiAjNjAyYWFjO1xuJGRhdGVDb2xvcjogIzRlNWQ3ODtcbiRkYXlDb2xvcjogIzRlNWQ3ODdhO1xuJHJlZEFjdGl2ZUNvbG9yOiAjZmExNDY0O1xuJHdoaXRlQ29sb3JCYWNrOiAjZjdmY2ZmO1xuJGJsYWNrRGFyazogIzI3MjcyZTtcbiR3aGl0ZUdyYXlCYWNrOiAjZjdmY2ZmO1xuLy9pbnB1dCBjc3NcbiRib3JkZXJDb2xvckxpZ2h0OiAjZThlY2VlO1xuJGJvcmRlckNvbG9yR3JheTogI2VlZWRmMDtcbiRsaWdodFdoaXRlOiAjZTVlZWZmO1xuJGJ0bkRlZmF1bHRXaGl0ZTogI2Y0ZjZmODtcbiRtYXRCb3JkZXI6ICNlNmU3ZTg7XG5cbiR0b2dnbGVBY3RpdmU6ICMzNzE5ODY7XG5cbi8vcmdiYSBjc3NcbiRiZWhhdmlvdXJCYWNrOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjA4KTtcbiRtb250aFNob3dCYWNrOiByZ2JhKDg2LCA2NiwgMjU1LCAwLjEpO1xuJGJveFNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiRiYWNrRGFuZ2VyOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuNCk7XG4kYmFja0dyZWVuOiByZ2IoMCAyMDMgMTYwIC8gMTUlKTtcbiRzYWZlU2NvcmVCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kYmFja0dyYXlDb21tb246IHJnYmEoMTM1LCAxMzUsIDEzNSwgMC4wNSk7XG4kcXVpdGVSb2FkOiAjZmZlYTZjO1xuXG4vL25ldyBjb2xvciB2ZXJzaW9uMlxuJHJlZEV4Y2VwdGlvbjogI2ZhMTQ2NDtcbiRib3hzaGFkb3c6IDBweCA4cHggMjVweCByZ2JhKDk4LCA5OCwgOTgsIDAuMDUpO1xuJHRvb2x0aXBzVGV4dENvbG9yOiAjMTYxOTJjO1xuXG4vL2JveCBncmFkaWFudCBCYWNrZ3JvdW5kXG4kdmVoaWNhbEJveEJhY2s6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICM4MWJiZmYgLTQuMiUsICMwMDg1ZmYgOTkuMzclKTtcbiRkcml2ZW5Cb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM1YTZiZmYgMC42OSUsICM2MDRlZmYgMTAyLjIlKTtcbiRiZWhhdmlvdXJCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM4YzQ2ZmYgMC42OSUsICNmZjgwODAgMTAyLjIlKTtcbiRldkJsb2NrQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICNmZmU5NzcgMTAyLjE3JSk7XG4kaWNlQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG5cbi8vYm94IHYyIGdyYWRpYW50IEJhY2tncm91bmRcbiRpY2VCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG4kZHJpdmVyQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjMzY1NmZmIDEwMi4xNyUpO1xuJGtpbG9tZXRlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTMzLjM5ZGVnLCAjNDk4NWY4IC00LjIyJSwgIzRkYmZmZiAxMDQuMjQlKTtcbiRzYWZlRHJpdmluZ0JveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICM0NWM4ZjEgLTE4LjU2JSwgI2VlZTA5NyAxMDIuMTclKTtcbiRkcml2ZXIxQm94VjI6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzc2ZDZlZSAwLjY5JSwgIzc2OThkYiAxMDIuMiUpO1xuJHRyaXBCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjYzJhM2EwIC0xOC41NiUsICNlOWM4YTcgMTAyLjE3JSk7XG4kdmVoaWNsZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjZGY5ODk1IC00LjIlLCAjYzJhM2EwIDEwOC4xNSUpO1xuXG4vL3Njcm9sbCBiYXIgY29sb3IgY29kZVxuJHNjcm9sbEJsYWNrOiAjODg4O1xuJHNjcm9sbFdoaXRlOiAjZjFmMWYxO1xuJHNjcm9sbEhvdmVyQmxhY2s6ICM1NTU7XG5cbi8vd2hpdGUgbGFiZWwgZmxlYWQgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNFRkE5NTI7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcblxuLy93aGl0ZSBsYWJlbCBkaGwgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNkNDA1MTE7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcbi8vICR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazojRkZDQzAwO1xuXG4vL3doaXRlIGxhYmVsIFplZ28gY29sb3JcbiRXaGl0ZV9sYWJpbmdfQmxhY2s6ICMwMDAwMDA7XG4kV2hpdGVfbGFiaW5nX1llbGxvdzogIzM3MTk4NztcbiRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTogIzRkYmZmZjtcbiRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6ICNlZWY5ZmY7XG4kd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6ICNmZmNjMDA7XG4kY29sb3JfdmlvbGV0OiAjODc3NWI3O1xuJGNvbG9yX3Zpb2xldF9kYXJrOiAjMzIxOTg3O1xuJGNvbG9yX2xpZ2h0X2dyZXk6ICNlNWU1ZTU7XG4kY29sb3ItdmlvbGV0LWxpZ2h0OiAjYWM5NGVlO1xuJGNvbG9yLWJsdWUtbGlnaHQ6ICNmNWY1ZjU7XG4kY29sb3ItdGFibGUtaGVhZGluZzogIzI3MjUyZDtcbiR0cmlwSGlzdEJhY2s6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC4wNSk7XG4kc2FmZUJhY2tDb2xvcjogcmdiYSgwLCAyMDMsIDE2MCwgMC4wNSk7XG4kY29sb3JfbGlnaHRfYmx1ZTogIzQ1Y2JmYztcbiRjb2xvcl9ncmFwaF92b2lsZXQ6ICMzNzFhODc7XG5cbi8vZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGVycm9yR3JhZGlhbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcbiAgKSxcbiAgI2Y0NDMzNjtcblxuQG1peGluIGZsZXgtanVzdGlmeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZmxleC1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbkBtaXhpbiBmbGV4LXNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBlbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQG1peGluICBsaW5lLWNsYW1wIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbn1cblxuQG1peGluIGJ0bkZpbHRlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuQG1peGluIG1zZyB7XG4gIGZvbnQ6IDEycHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDMwcHg7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbkBtaXhpbiBtYWluQm94d2l0aEJhY2sge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDEyM3B4IHJnYmEoODcsIDg0LCAxNjAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4vLyBAbWl4aW4gYnV0dG9uLWdyZWVuIHtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjMTFEMEEyO1xuLy8gYm9yZGVyLXJhZGl1czogMTQ1cHg7XG4vLyBmb250LXdlaWdodCA6IDYwMDtcbi8vIGZvbnQtc2l6ZSA6IDE1cHg7XG4vLyBsaW5lLWhlaWdodCA6IDE4cHg7XG4vLyBjb2xvciA6ICNmZmZmZmY7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tYmx1ZSB7XG4vLyBmb250IDogMTNweC8xNnB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzc1NTVDRiwgIzc1NTVDRiksICM2NDNGQzA7XG4vLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gbWF4LXdpZHRoIDogMTQwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiAzOHB4O1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLXJlZCB7XG4vLyBmb250IDogMTZweC8yMHB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICNGRjY1NjU7XG4vLyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuLnRyaXBTdWJCb3gge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICM5MzllYWE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogMTVweCAxMnB4O1xuICBAaW5jbHVkZSBmbGV4LWp1c3RpZnk7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICAvLyBtYXgtd2lkdGg6IDE0NDBweDtcbiAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAvLyAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAudy0yMSB7XG4gICAgbWF4LXdpZHRoOiAyMSU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6MjAwcHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLnRyaXBNYWluQm94IHtcbiAgICBAaW5jbHVkZSBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDlweCAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICR0cmlwSGlzdEJhY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnRyaXBNaWRkZWxlQm94IHtcbiAgICBAaW5jbHVkZSBmbGV4LXNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAgICBwYWRkaW5nOiA5cHggMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAkdHJpcEhpc3RCYWNrO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogNjIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSBhbmQgKG1heC13aWR0aDogMTQ2MHB4KSB7XG4gICAgICAvLyBvcmRlcjogNDtcbiAgICAgIG1heC13aWR0aDogNTElO1xuICAgICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgQGluY2x1ZGUgZmxleC1qdXN0aWZ5O1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOjIwMHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCl7XG4gICAgICBvcmRlcjogNDtcbiAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgLnRyaXBCb3hEcml2ZXIge1xuICAgIEBpbmNsdWRlIGZsZXgtanVzdGlmeTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOXB4IDEycHg7XG4gICAgYmFja2dyb3VuZDogJHRyaXBIaXN0QmFjaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbiAgLmhyc1NlYyB7XG4gICAgZm9udDogNzAwIDhweC8xNnB4IE1vZGVybkVyYV9Cb2xkICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICRuaWdodFRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHBhZGRpbmc6IDNweCAxMnB4O1xuICB9XG5cbiAgLnRyaXBCb3gge1xuICAgIC8vIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICB9XG4gICAgLnRyaXBUaXRsZSB7XG4gICAgICBmb250OiA3MDAgMTJweC8xNnB4IE1vZGVybkVyYV9Cb2xkICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogJG5pZ2h0VGV4dENvbG9yO1xuICAgIH1cbiAgICAudHJpcElkIHtcbiAgICAgIGNvbG9yOiAkbmlnaHRUZXh0Q29sb3I7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgZm9udDogNzAwIDE0cHgvMTZweCBNb2Rlcm5FcmFfQm9sZCAhaW1wb3J0YW50O1xuICAgICAgbWF4LXdpZHRoOiA0NHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBAaW5jbHVkZSBlbGxpcHNpcztcbiAgICB9XG4gICAgLmxpY1BsYXRlIHtcbiAgICAgIGNvbG9yOiAkbmlnaHRUZXh0Q29sb3I7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgZm9udDogNzAwIDE0cHgvMTZweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICAgIG1heC13aWR0aDogNjRweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgQGluY2x1ZGUgZWxsaXBzaXM7XG4gICAgfVxuICAgIC5kcml2ZXJOYW1lIHtcbiAgICAgIGNvbG9yOiAkbmlnaHRUZXh0Q29sb3I7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgZm9udDogNzAwIDE0cHgvMTZweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgQGluY2x1ZGUgZWxsaXBzaXM7XG4gICAgfVxuICB9XG4gIC5zZXByYXRvciB7XG4gICAgbWFyZ2luOiAwIDIycHggMHB4IDBweDtcbiAgICAvLyBpbWd7XG4gICAgLy8gICBoZWlnaHQ6IDJweFxuICAgIC8vIH1cbiAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gIH1cbiAgLmRhdGUge1xuICAgIEBpbmNsdWRlIGxpbmUtY2xhbXA7XG4gICAgZm9udDogNzAwIDEycHgvMThweCBNb2Rlcm5FcmFfQm9sZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICAuZGV0YWlsIHtcbiAgICBmb250OiA3MDAgMTFweC8xOHB4IE1vZGVybkVyYV9Cb2xkICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAmLmZyb21BZGRyZXNzIHtcbiAgICAgIC8vIG1heC13aWR0aDogMTU3cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIEBpbmNsdWRlIGxpbmUtY2xhbXA7XG4gICAgfVxuICAgICYudG9BZGRyZXNzIHtcbiAgICAgIC8vIG1heC13aWR0aDogMTkwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIEBpbmNsdWRlIGxpbmUtY2xhbXA7XG4gICAgfVxuICB9XG4gIC5zYWZlQm94IHtcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgYmFja2dyb3VuZDogJHNhZmVCYWNrQ29sb3I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NjBweCkge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgfVxuICAgIC5zYWZlVGl0bGUge1xuICAgICAgZm9udDogNzAwIDE4cHgvMTZweCBNb2Rlcm5FcmFfQm9sZCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICRTZWNvbmRhcnlfQWxlcnRzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICAuc2FmZURlc2Mge1xuICAgICAgZm9udDogNzAwIDEycHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X0FsZXJ0cztcbiAgICAgIG1heC13aWR0aDogOTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDYwcHgpIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jZW50ZXJCb3gge1xuICAgIG1hcmdpbjogMCAzNHB4O1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICAgbGkge1xuICAgICAgJi5kb3Qge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgIHdpZHRoOiAxMzVweDtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAgICAgICAgIHdpZHRoOiA2OXB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWxOdW1iZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuXG4gICAgICAgICAgJi5zYWZlU2NvcmUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxOTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi50b3RhbFRpbWUge1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZHJpdmVyTmFtZVRleHQge1xuICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiAyNzBweDtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5X0JsdWU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgLy8gICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICAgICAgLy8gICBib3JkZXI6IDFweCBzb2xpZCAkU2Vjb25kYXJ5X0JsdWU7XG4gICAgICAgIC8vICAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH1cbiAgICAuaW1nLWdwcyB7XG4gICAgICBzdmcge1xuICAgICAgICBwYXRoIHtcbiAgICAgICAgICBmaWxsOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gICAudHJpcEZpcnN0Qm94IHtcbiAgLy8gICAgIEBpbmNsdWRlIGZsZXgtanVzdGlmeTtcbiAgLy8gICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b207XG4gIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgcGFkZGluZzogMjRweCAxN3B4IDE3cHg7XG4gIC8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLy8gICAgIHAge1xuICAvLyAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAuZGV0YWlsTnVtYmVyIHtcbiAgLy8gICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLy8gICAgICAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAvLyAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcblxuICAvLyAgICAgICAmLnNhZmVTY29yZSB7XG4gIC8vICAgICAgICAgbWF4LXdpZHRoOiAxOTVweDtcbiAgLy8gICAgICAgICB3aWR0aDogMTAwJTtcbiAgLy8gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgJi5kcml2ZXJOYW1lVGV4dCB7XG4gIC8vICAgICAgICAgLy8gbWF4LXdpZHRoOiAyNzBweDtcbiAgLy8gICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIHNwYW4ge1xuICAvLyAgICAgICAgIGNvbG9yOiAkUHJpbWFyeV9CbHVlO1xuICAvLyAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG5cbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuXG4gIC8vICAgICAmLnRyaXBTZWNvbmRCb3gge1xuICAvLyAgICAgICBwYWRkaW5nOiA4cHggMTdweCAxN3B4O1xuICAvLyAgICAgICBib3JkZXI6IG5vbmU7XG5cbiAgLy8gICAgICAgdWwge1xuICAvLyAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIC8vICAgICAgICAgQGluY2x1ZGUgZmxleC1zdGFydDtcbiAgLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgICAgIHBhZGRpbmc6IDA7XG4gIC8vICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgLy8gICAgICAgICBsaSB7XG4gIC8vICAgICAgICAgICAmLmRvdCB7XG4gIC8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgJFNlY29uZGFyeV9CbHVlO1xuICAvLyAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgLy8gICAgICAgICAgIH1cblxuICAvLyAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAvLyAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgLy8gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJFNlY29uZGFyeV9CbHVlO1xuICAvLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICAudHJpcFJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NjBweCkge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIC5leHBvcnQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIGJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC53YXJuaW5nSW1nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICB0b3A6IDVweDtcbiAgICB9XG5cbiAgICAud2FybmluZ0Ryb3Age1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAud2FyaW5nRHJvcERvd24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIEBpbmNsdWRlIG1haW5Cb3h3aXRoQmFjaztcbiAgICAgICAgd2lkdGg6IDMzM3B4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNDJweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICB6LWluZGV4OiAzO1xuXG4gICAgICAgIC5kYXRhQWNjZWxlcmF0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDMycHggMTJweCAyMHB4O1xuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtanVzdGlmeTtcbiAgICAgICAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tO1xuXG4gICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250OiA2MDAgMTRweC8yMHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud2FybmluZ1RpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZGFuZ2VyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53YXJuaW5nQ291bnQge1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5X0JsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLmZpbGVsZDMzIHtcbiAgLy8gICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzJSAtIDEwcHgpO1xuICAvLyAgIG1heC13aWR0aDogY2FsYygzMy4zMyUgLSAxMHB4KTtcbiAgLy8gICBtYXJnaW46IDAgNnB4IDA7XG4gIC8vIH1cblxuICAvLyAuZmlsZWxkMzAge1xuICAvLyAgIGZsZXgtYmFzaXM6IGNhbGMoMzAlIC0gMTBweCk7XG4gIC8vICAgbWF4LXdpZHRoOiBjYWxjKDMwJSAtIDEwcHgpO1xuICAvLyAgIG1hcmdpbjogMCA2cHggMDtcbiAgLy8gfVxuXG4gIC8vIC5maWxlbGQyNSB7XG4gIC8vICAgZmxleC1iYXNpczogY2FsYygyNyUgLSAxMHB4KTtcbiAgLy8gICBtYXgtd2lkdGg6IGNhbGMoMjclIC0gMTBweCk7XG4gIC8vICAgbWFyZ2luOiAwIDZweCAwO1xuICAvLyB9XG4gIC8vIEBtZWRpYSAobWF4LXdpZHRoOjEzMDJweCl7XG4gIC8vICAgICAuaW1nLWdwc3tcbiAgLy8gICAgICAgZGlzcGxheTogbm9uZTtcbiAgLy8gICAgIH1cbiAgLy8gfVxuICAvLyBAbWVkaWEgKG1heC13aWR0aDoxMjM4cHgpe1xuICAvLyAgIC5kb3R7XG4gIC8vICAgICBkaXNwbGF5OiBub25lO1xuICAvLyAgIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgY29sb3I6ICRuaWdodFRleHRDb2xvciAhaW1wb3J0YW50O1xuICBmb250OjcwMCAxNHB4LzE2cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDYuMHB4IDEyLjBweCAxMi4wcHggaHNsKDBkZWcgMCUgMCUgLyAwLjMxKSAhaW1wb3J0YW50O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TripHistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-trip-history',
            templateUrl: './trip-history.component.html',
            styleUrls: ['./trip-history.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_5__["LocalService"]
          }];
        }, {
          tableData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["tableData"]
          }],
          toolTipData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["toolTipData"]
          }]
        });
      })();
      /***/

    },

    /***/
    "0EnM":
    /*!***********************************************************************************!*\
      !*** ./node_modules/ngx-daterangepicker-material/node_modules/tslib/tslib.es6.js ***!
      \***********************************************************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function EnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function __exportStar(m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "2amO":
    /*!****************************************************!*\
      !*** ./src/app/theme/sidebar/sidebar.component.ts ***!
      \****************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function amO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["firstAccordion"];

      var _c1 = function _c1() {
        return ["dashboard"];
      };

      var _c2 = function _c2(a0) {
        return {
          "safari": a0
        };
      };

      var _c3 = function _c3() {
        return ["vehicle"];
      };

      var _c4 = function _c4() {
        return ["trip"];
      };

      var _c5 = function _c5() {
        return ["exceptions"];
      };

      var _c6 = function _c6() {
        return ["mapview"];
      };

      var _c7 = function _c7() {
        return ["profile/colorpicker"];
      };

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(service) {
          _classCallCheck(this, SidebarComponent);

          this.service = service;
          this.displayMode = 'default';
          this.displayMode1 = 'default';
          this.multi = true;
          this.hideToggle = false;
          this.hideToggle1 = false;
          this.disabled = false;
          this.showPanel3 = true;
          this.panel11 = false;
          this.browsername = this.service.detectBrowserName();
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openAllFirst",
          value: function openAllFirst() {
            this.firstAccordion.openAll();
          }
        }, {
          key: "closeAllFirst",
          value: function closeAllFirst() {
            this.firstAccordion.closeAll();
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.??fac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]));
      };

      SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        viewQuery: function SidebarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.firstAccordion = _t.first);
          }
        },
        decls: 80,
        vars: 55,
        consts: [[1, "sidebar"], [1, "logoSec"], ["src", "assets/images/zego/zego.svg"], [1, "sideMenu"], [1, "subMenu"], ["routerLinkActive", "active", 1, "cursor", 3, "routerLink", "ngClass"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16.2 16.18"], ["d", "M13.34,17.09H4.66A3.77,3.77,0,0,1,.9,13.33V7.77a4.18,4.18,0,0,1,1.45-3L6.4,1.66h0a3.93,3.93,0,0,1,4.46-.11L15.5,4.8a4.16,4.16,0,0,1,1.6,3.08v5.46A3.76,3.76,0,0,1,13.34,17.09ZM7.13,2.6l-4,3.15a3,3,0,0,0-1,2v5.56a2.56,2.56,0,0,0,2.56,2.56h8.68a2.56,2.56,0,0,0,2.56-2.55V7.88a3,3,0,0,0-1.09-2.1L10.17,2.53a2.77,2.77,0,0,0-3,.07Z", "transform", "translate(-0.9 -0.91)", 1, "cls-1"], ["d", "M5.62,13a.58.58,0,0,1-.42-.17.61.61,0,0,1,0-.85l2.4-2.4a.59.59,0,0,1,.48-.17.6.6,0,0,1,.44.26l.8,1.19L12,8.2a.6.6,0,0,1,.85.85L9.65,12.2a.59.59,0,0,1-.48.17.6.6,0,0,1-.44-.26l-.8-1.19L6.05,12.8A.59.59,0,0,1,5.62,13Z", "transform", "translate(-0.9 -0.91)", 1, "cls-1"], ["d", "M12.38,10.72a.59.59,0,0,1-.6-.59V9.22h-.9a.59.59,0,0,1-.6-.6.6.6,0,0,1,.6-.6h1.5a.59.59,0,0,1,.59.6v1.51A.58.58,0,0,1,12.38,10.72Z", "transform", "translate(-0.9 -0.91)", 1, "cls-1"], ["id", "newcha", 1, "mat-expansion-demo-width", 3, "displayMode", "multi"], ["firstAccordion", "matAccordion"], [3, "hideToggle", "expanded"], ["panel1", ""], ["width", "20", "height", "16", "viewBox", "0 0 20 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.871 3H3.4295C2.975 3 2.5775 3.3065 2.4625 3.746L1.5425 7.252L0.59 7.6805C0.231 7.842 0 8.199 0 8.5925V12C0 12.265 0.1055 12.5195 0.293 12.707C0.355 12.7695 0.425 12.8225 0.5 12.866V14.44C0.5 14.854 0.6645 15.2505 0.957 15.543C1.2495 15.8355 1.646 16 2.06 16H2.94C3.354 16 3.7505 15.8355 4.043 15.543C4.3355 15.2505 4.5 14.854 4.5 14.44V13H9.5V14.44C9.5 14.854 9.6645 15.2505 9.957 15.543C10.2495 15.8355 10.646 16 11.06 16H11.94C12.354 16 12.7505 15.8355 13.043 15.543C13.3355 15.2505 13.5 14.854 13.5 14.44V12.866C13.575 12.8225 13.645 12.7695 13.707 12.707C13.8945 12.5195 14 12.265 14 12V10H15.5V11.44C15.5 11.854 15.6645 12.2505 15.957 12.543C16.2495 12.8355 16.646 13 17.06 13H17.94C18.354 13 18.7505 12.8355 19.043 12.543C19.3355 12.2505 19.5 11.854 19.5 11.44V9.866C19.575 9.8225 19.645 9.7695 19.707 9.707C19.8945 9.5195 20 9.265 20 9V5.5925C20 5.199 19.769 4.842 19.41 4.6805L18.2125 4.142L17.3215 0.746C17.206 0.3065 16.809 0 16.354 0C15.0395 0 10.744 0 9.4295 0C8.975 0 8.5775 0.3065 8.4625 0.746L7.871 3ZM3.5 13V14.44C3.5 14.5885 3.441 14.731 3.336 14.836C3.231 14.941 3.0885 15 2.94 15H2.06C1.9115 15 1.769 14.941 1.664 14.836C1.559 14.731 1.5 14.5885 1.5 14.44V13H3.5ZM12.5 13V14.44C12.5 14.5885 12.441 14.731 12.336 14.836C12.231 14.941 12.0885 15 11.94 15H11.06C10.9115 15 10.769 14.941 10.664 14.836C10.559 14.731 10.5 14.5885 10.5 14.44V13H12.5ZM11.682 8H2.318L1 8.5925V12H13V8.5925L11.682 8ZM18.5 10V11.44C18.5 11.5885 18.441 11.731 18.336 11.836C18.231 11.941 18.0885 12 17.94 12H17.06C16.9115 12 16.769 11.941 16.664 11.836C16.559 11.731 16.5 11.5885 16.5 11.44V10H18.5ZM9.5 10.5H11.5C11.776 10.5 12 10.276 12 10C12 9.724 11.776 9.5 11.5 9.5H9.5C9.224 9.5 9 9.724 9 10C9 10.276 9.224 10.5 9.5 10.5ZM2.5 10.5H4.5C4.776 10.5 5 10.276 5 10C5 9.724 4.776 9.5 4.5 9.5H2.5C2.224 9.5 2 9.724 2 10C2 10.276 2.224 10.5 2.5 10.5ZM17.682 5H11.6505L12.2125 7.142L13.41 7.6805C13.769 7.842 14 8.199 14 8.5925V9H19V5.5925L17.682 5ZM15.5 7.5H17.5C17.776 7.5 18 7.276 18 7C18 6.724 17.776 6.5 17.5 6.5H15.5C15.224 6.5 15 6.724 15 7C15 7.276 15.224 7.5 15.5 7.5ZM2.6425 7L3.4295 4H10.3545L11.1415 7H2.6425ZM8.905 3H10.354C10.809 3 11.206 3.3065 11.3215 3.746L11.388 4H17.1415L16.3545 1H9.4295L8.905 3Z", "fill", "#001E50"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 18 18", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 18 18"], ["type", "text/css"], ["d", "M4.1,8.1C3.6,8.1,3,7.9,2.6,7.5C1.2,6.2,0.6,4.7,1,3.3c0.4-1.7,1.9-2.4,3.1-2.4c0,0,0,0,0,0\n              c1.5,0,2.8,1,3.1,2.4C7.6,4.7,7,6.2,5.6,7.5C5.2,7.9,4.6,8.1,4.1,8.1z M4.1,2.1c-0.8,0-1.7,0.4-2,1.5l0,0c-0.2,1,0.2,2,1.3,3\n              c0.4,0.4,1,0.4,1.4,0c0.7-0.7,1.6-1.8,1.3-3C5.8,2.5,4.8,2.1,4.1,2.1z", 1, "st0"], ["d", "M13.9,17.1c-0.5,0-1.1-0.2-1.5-0.6c-1.4-1.3-2-2.8-1.6-4.2c0.4-1.7,1.9-2.4,3.2-2.4c0,0,0,0,0,0\n              c1.5,0,2.8,1,3.1,2.4c0.3,1.4-0.2,2.9-1.6,4.2C15,16.9,14.4,17.1,13.9,17.1z M13.9,11.1c-0.8,0-1.7,0.4-2,1.5l0,0\n              c-0.3,1.2,0.5,2.3,1.3,3c0.4,0.4,1,0.4,1.4,0c0.7-0.7,1.6-1.8,1.3-3C15.6,11.5,14.6,11.1,13.9,11.1L13.9,11.1z", 1, "st0"], ["d", "M9,14.8H7c-0.9,0-1.7-0.5-2-1.4c-0.3-0.8-0.1-1.7,0.6-2.3l6-5.2c0.4-0.4,0.3-0.9,0.2-1\n              c-0.1-0.1-0.3-0.6-0.8-0.6H9c-0.3,0-0.6-0.3-0.6-0.6S8.7,3.1,9,3.1h2c0.9,0,1.7,0.5,2,1.4c0.3,0.8,0.1,1.7-0.6,2.3l-6,5.2\n              c-0.4,0.4-0.3,0.9-0.3,1s0.3,0.6,0.8,0.6h2c0.3,0,0.6,0.3,0.6,0.6S9.3,14.8,9,14.8z", 1, "st0"], ["d", "M4.1,4.9c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.7,0.7-0.7h0c0.4,0,0.8,0.3,0.8,0.7S4.5,4.9,4.1,4.9z", 1, "st0"], ["d", "M13.9,13.9c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.7-0.8h0c0.4,0,0.8,0.3,0.8,0.8S14.3,13.9,13.9,13.9z", 1, "st0"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 20 20", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 20 20"], ["d", "M10,11.4c-0.3,0-0.6-0.3-0.6-0.6V6.5c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v4.4C10.6,11.2,10.3,11.4,10,11.4z\n             ", 1, "st0"], ["d", "M10,18.9c-0.6,0-1.1-0.1-1.6-0.4l-5-2.9c-1-0.6-1.6-1.6-1.6-2.8V7.1c0-1.1,0.6-2.2,1.6-2.8l5-2.9\n             c1-0.6,2.2-0.6,3.2,0l5,2.9c1,0.6,1.6,1.7,1.6,2.8v5.7c0,1.1-0.6,2.2-1.6,2.8l-5,2.9C11.1,18.8,10.6,18.9,10,18.9z M10,2.3\n             c-0.4,0-0.7,0.1-1,0.3L4,5.4c-0.6,0.4-1,1-1,1.8v5.7c0,0.7,0.4,1.4,1,1.8L9,17.5c0.6,0.4,1.4,0.4,2,0l4.9-2.9c0.6-0.4,1-1,1-1.8\n             V7.1c0-0.7-0.4-1.4-1-1.8L11,2.5C10.7,2.4,10.3,2.3,10,2.3z", 1, "st0"], ["d", "M10,14.2c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6s0.6,0.2,0.6,0.6v0.1C10.6,13.9,10.3,14.2,10,14.2z", 1, "st0"], ["d", "M15.3,15.8c-0.1,0-0.3-0.1-0.4-0.1l-4.8-4.8c-0.1-0.1-0.1-0.2-0.1-0.4s0.1-0.3,0.1-0.4l5.8-5.8\n\t\tc0.1-0.1,0.3-0.2,0.5-0.1c0.2,0.1,0.3,0.2,0.3,0.4C16.9,5.2,17,5.9,17,6.8v4.5c0,2.1-0.4,3.5-1.4,4.4\n\t\tC15.5,15.7,15.4,15.8,15.3,15.8L15.3,15.8z M11.2,10.5l4,4c0.5-0.7,0.7-1.8,0.7-3.3V6.8c0-0.4,0-0.7,0-1L11.2,10.5z", 1, "st0"], ["d", "M4.7,16.8c0,0-0.1,0-0.1,0C2.1,16.2,1,14.5,1,11.3V6.7C1,2.7,2.7,1,6.8,1h4.5c3.3,0,5,1.1,5.5,3.6\n\t\tc0,0.2,0,0.3-0.1,0.5L5.1,16.7C5,16.7,4.8,16.8,4.7,16.8z M6.8,2C3.3,2,2,3.3,2,6.7v4.5c0,2.7,0.7,4,2.6,4.5L15.7,4.6\n\t\tC15.2,2.7,13.9,2,11.2,2H6.8z", 1, "st0"], ["d", "M11.3,17H6.8c-0.8,0-1.5-0.1-2.2-0.2c-0.2,0-0.3-0.2-0.4-0.3c-0.1-0.2,0-0.4,0.1-0.5l5.8-5.8\n\t\tc0.2-0.2,0.5-0.2,0.7,0l4.8,4.8c0.1,0.1,0.1,0.2,0.1,0.4s-0.1,0.3-0.1,0.4C14.7,16.6,13.3,17,11.3,17z M5.8,16c0.3,0,0.6,0,1,0h4.5\n\t\tc1.5,0,2.6-0.2,3.3-0.7l-4-4L5.8,16z", 1, "st0"], ["d", "M6.8,10.4c-0.6,0-1.2-0.2-1.6-0.6C4.3,8.9,3.8,7.9,3.6,6.9L3.4,7.1l0.3-1.4l0,0l0.1-0.4c0.5-1.4,1.8-2,3-2h1.5\n\t\tL8,3.6c0.8,0.3,1.5,0.9,1.8,1.8h0L10,5.8c0.3,1.4-0.2,2.8-1.5,4C8,10.2,7.4,10.4,6.8,10.4z M4.6,6.4C4.5,7.5,5.3,8.4,5.9,9\n\t\tc0.5,0.5,1.3,0.5,1.9,0c0.6-0.6,1.4-1.6,1.3-2.7L4.6,6.4z M5.7,5.4l2.4,0L6.8,4.5L5.7,5.4z", 1, "st0"], ["d", "M6.8,7.5c-0.6,0-1-0.4-1-1s0.4-1,1-1h0c0.6,0,1,0.4,1,1S7.4,7.5,6.8,7.5z", 1, "st0"], ["routerLinkActive", "active", 1, "cursor", "sumenuMain", "mainMenu", 3, "routerLink", "ngClass"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "svg", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "style");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " .cls-1 { fill: #001e50; } ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "path", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-accordion", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-expansion-panel", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "svg", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "path", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "svg", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "style", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " .st0 { fill: #001E50; } ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "path", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "path", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "path", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "path", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "path", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](45, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "svg", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "style", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " .st0 { fill: #001E50; } ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "path", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "path", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "path", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](58, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "svg", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "style", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " .st0 { fill: #001E50; } ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "path", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "path", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "path", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "path", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "path", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](75, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](79, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](37, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](38, _c2, ctx.browsername == "safari"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 23, "sidebar.dashboard"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("displayMode", ctx.displayMode)("multi", ctx.multi);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hideToggle", ctx.hideToggle)("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](22, 25, "sidebar.fleet"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](40, _c3))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](41, _c2, ctx.browsername == "safari"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 27, "v.veh"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](43, _c4))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](44, _c2, ctx.browsername == "safari"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](45, 29, "sidebar.trip"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](46, _c5))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](47, _c2, ctx.browsername == "safari"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](58, 31, "harshEvent"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](49, _c6))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](50, _c2, ctx.browsername == "safari"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](75, 33, "sidebar.mapView"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](52, _c7))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](53, _c2, ctx.browsername == "safari"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](79, 35, "sidebar.exception_colors"), " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: [".sidebar[_ngcontent-%COMP%]   .logoSec[_ngcontent-%COMP%] {\n  background-color: #371987;\n  padding: 29.5px 40px 14.5px 24px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.sidebar[_ngcontent-%COMP%]     .mat-expansion-panel-header {\n  font: 700 14px/18px ModernEra;\n  color: #ffffff;\n}\n.sidebar[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%] {\n  height: calc(100vh - 70px);\n  overflow-y: auto;\n  padding-top: 20px;\n  background: #371987;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font: 400 13px/18px ModernEra !important;\n  opacity: 0.8;\n  color: #ffffff;\n  padding: 10px 24px;\n  margin-bottom: 6px;\n  align-items: center;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li.mainMenu[_ngcontent-%COMP%] {\n  font: 700 14px/18px ModernEra_Bold !important;\n  opacity: 1 !important;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li.sumenuMain[_ngcontent-%COMP%] {\n  font: 400 13px/18px ModernEra;\n  color: #ffffff;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li.sumenuMain.active[_ngcontent-%COMP%] {\n  background: #8775b7;\n  padding: 14px 24px 14px 20px;\n  color: #ffffff;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li.sumenuMain.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  opacity: 0.8;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li.sumenuMain.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #371987;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 11px;\n  width: 20px;\n  height: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: calc(100% - 31px);\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: #8775b7;\n  color: #ffffff;\n  opacity: 1;\n  font: 700 13px/18px ModernEra_Bold !important;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  opacity: 1;\n}\n.sidebar[_ngcontent-%COMP%]   .subMenu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n  .mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n  .sideMenu .mat-expansion-panel-header.mat-expanded {\n  height: 46px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbW1vbl92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQ1FJO0VBQ0kseUJDUlE7RURTUixnQ0FBQTtFQUNBLGtCQUFBO0FBTlI7QUFXSTtFQUNJLHVCQUFBO0FBVFI7QUFhUTtFQUNJLDZCQUFBO0VBQ0EsY0RqQko7QUNNUjtBQWVJO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJENEVjO0FDekZ0QjtBQWdCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQWRSO0FBaUJRO0VBQ0ksd0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0RwQ0o7RUNxQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBZlo7QUFnQlk7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0FBZGhCO0FBZ0JZO0VBRUksNkJBQUE7RUFFQSxjRGxEUjtBQ2tDUjtBQWlCZ0I7RUFDSSxtQkRxREw7RUNwREssNEJBQUE7RUFDQSxjRHREWjtBQ3VDUjtBQWlCb0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFmeEI7QUFnQndCO0VBQ0ksYUNqRVo7QURtRGhCO0FBb0JZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFsQmhCO0FBb0JnQjtFQUNJLGFEekVaO0FDdURSO0FBcUJZO0VBQ0ksd0JBQUE7QUFuQmhCO0FBc0JZO0VBQ0ksbUJEd0JEO0VDckJDLGNDN0VQO0VEOEVPLFVBQUE7RUFDQSw2Q0FBQTtBQXRCaEI7QUF3QmdCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBdEJwQjtBQXVCb0I7RUFDSSxhQ3JGZjtBRGdFVDtBQTZCQTtFQUNJLGVBQUE7QUExQko7QUErQkE7RUFDSSxnQkFBQTtBQTVCSjtBQStCQTtFQUNJLHVCQUFBO0FBNUJKIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIi8vIEBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29tbW9uX3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0XCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4vLyAubWF0LWRyYXdlci1jb250YWluZXJ7XG4vLyAgICAgbWluLWhlaWdodDogMTAwdmg7XG4vLyB9LlxuLnNpZGViYXIge1xuICAgIC5sb2dvU2VjIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJENfUHJpbWFyeV9CbHVlO1xuICAgICAgICBwYWRkaW5nOiAyOS41cHggNDBweCAxNC41cHggMjRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDExMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIG1hdC1leHBhbnNpb24tcGFuZWx7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBcbiAgICB9XG4gICAgOjpuZy1kZWVwe1xuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICAgICAgICAgZm9udDogNzAwIDE0cHgvMThweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGVNZW51IHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkV2hpdGVfbGFiaW5nX1llbGxvdztcbiAgICB9XG5cbiAgICAuc3ViTWVudSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgICBcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZm9udDogNDAwIDEzcHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAmLm1haW5NZW51e1xuICAgICAgICAgICAgICAgIGZvbnQ6IDcwMCAxNHB4LzE4cHggTW9kZXJuRXJhX0JvbGQgIWltcG9ydGFudDsgXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5zdW1lbnVNYWluIHtcbiAgICAgICAgICAgICAgICAvLyBmb250OiA3MDAgMTRweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQ6IDQwMCAxM3B4LzE4cHggTW9kZXJuRXJhO1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcl92aW9sZXQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjRweCAxNHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJENfUHJpbWFyeV9CbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMXB4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcl92aW9sZXQ7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAkQ19QcmltYXJ5X0JsdWU7XG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMTBweCAyNHB4IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJENfd2hpdGU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICBmb250OiA3MDAgMTNweC8xOHB4IE1vZGVybkVyYV9Cb2xkICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJENfd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cblxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9XCJtYXQtZWxldmF0aW9uLXpcIl0pIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG46Om5nLWRlZXAgLnNpZGVNZW51IC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQge1xuICAgIGhlaWdodDogNDZweCAhaW1wb3J0YW50O1xufVxuIiwiLy9zaWRlYmFyIGNvbG9yIGNvZGVcbiRDX1ByaW1hcnlfQmx1ZTojMzcxOTg3OyAvLyM0OTAwODZcbiRDX3BfQmx1ZTojMDA2NEZGO1xuJENfU2Vjb25kYXJ5X2JsYWNrOiMyMzFGMjA7XG4kQ19tZW51QmFjazojMzcxOTg3O1xuXG5cblxuLy9oZWFkZXIgY29sb3IgY29kZVxuJENfd2hpdGVTaGFkb3c6I0U5RUJGMDtcbiRDX3NreUJsdWU6IzREQkZGRjtcbiRDX2JvcmRlckNvbG9yTGlnaHQ6I0U4RUNFRTtcbiRDX1NlY29uZGFyeV9CbHVlOiMzNzE5ODc7XG4kQ193aGl0ZTojZmZmZmZmO1xuJENfbGlnaHRtaXhibHVlV2hpdGVjb2xvcjojRTBFM0U3O1xuJENfYm9yZGVyQ29sb3I6I0M1Q0RENDtcbiRDX2xpZ2h0YmxhY2s6IzE3MUMyMjtcblxuJENfeWVsbG93QmFjazojRUZBOTUyO1xuXG4vL2NvbnRhaW5lciBjb2xvciBjb2RlXG4kaGVscEJ0bl9CbHVlOiM2MDJBQUM7XG4kbGlnaHRXaGl0ZTojRTVFRUZGO1xuXG4vL1NhZmUgRHJpdmVyIFRyaXBzIFZlaGljbGVzIEJveCBCYWNrQ29sb3JcbiRDX3NhZmVCb3hCYWNrOmxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5RDBGRiAtMTguNTYlLCAjMzY1NkZGIDEwMi4xNyUpO1xuJENfZHJpdmVyQm94QmFjazpsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM2NTc0RkYgMC42OSUsICMxQjAwRkYgMTAyLjIlKTtcbiRDX3RyaXBCb3hCYWNrOmxpbmVhci1ncmFkaWVudCg5NC4xZGVnLCAjQzIxNTE1IC0yMC4zNCUsICNGRjkxMkIgMTAyLjE1JSk7XG4kQ192ZWhpY2xlQm94QmFjazpsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjM0NGRkYzIC00LjIlLCAjMjgxNUZGIDEwOC4xNSUpO1xuXG4vL2J0biBjb2xsZWN0aW9uXG4kQ19kcmFrX0JsdWU6IzI5NjJGRjtcblxuQG1peGluIG1zZyB7XG4gICAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDNweCAzMHB4O1xuICAgIGNvbG9yOiAkQ193aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG5cbkBtaXhpbiBlbGxpcHNpcyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]
          }];
        }, {
          firstAccordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['firstAccordion']
          }]
        });
      })();
      /***/

    },

    /***/
    "8OTh":
    /*!*******************************************************!*\
      !*** ./src/app/shared/components/component.module.ts ***!
      \*******************************************************/

    /*! exports provided: ComponentModule */

    /***/
    function OTh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentModule", function () {
        return ComponentModule;
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


      var _trip_history_map_trip_history_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./trip-history-map/trip-history-map.component */
      "RKq6");
      /* harmony import */


      var _trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./trip-history/trip-history.component */
      "/F38");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _trip_detail_map_trip_detail_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./trip-detail-map/trip-detail-map.component */
      "cb5u");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared.module */
      "PCNd");
      /* harmony import */


      var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./snackbar/snackbar.component */
      "Ba6F");
      /* harmony import */


      var src_app_config_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/config/material */
      "Uo7g");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modal/modal.component */
      "ajRT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _top_box_top_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./top-box/top-box.component */
      "SlV2");
      /* harmony import */


      var ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-shimmer-loading */
      "+HUQ");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-daterangepicker-material */
      "YhS8");

      var ComponentModule = /*#__PURE__*/_createClass(function ComponentModule() {
        _classCallCheck(this, ComponentModule);
      });

      ComponentModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ComponentModule
      });
      ComponentModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ComponentModule_Factory(t) {
          return new (t || ComponentModule)();
        },
        imports: [[_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_14__["NgxDaterangepickerMd"].forRoot(), ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_12__["NgxShimmerLoadingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
          extend: true
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ComponentModule, {
          declarations: [_trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_3__["TripHistoryComponent"], _trip_history_map_trip_history_map_component__WEBPACK_IMPORTED_MODULE_2__["TripHistoryMapComponent"], _trip_detail_map_trip_detail_map_component__WEBPACK_IMPORTED_MODULE_5__["TripDetailMapComponent"], _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _top_box_top_box_component__WEBPACK_IMPORTED_MODULE_11__["TopBoxComponent"]],
          imports: [_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_14__["NgxDaterangepickerMd"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_12__["NgxShimmerLoadingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
          exports: [_trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_3__["TripHistoryComponent"], _trip_history_map_trip_history_map_component__WEBPACK_IMPORTED_MODULE_2__["TripHistoryMapComponent"], _trip_detail_map_trip_detail_map_component__WEBPACK_IMPORTED_MODULE_5__["TripDetailMapComponent"], _top_box_top_box_component__WEBPACK_IMPORTED_MODULE_11__["TopBoxComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ComponentModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_3__["TripHistoryComponent"], _trip_history_map_trip_history_map_component__WEBPACK_IMPORTED_MODULE_2__["TripHistoryMapComponent"], _trip_detail_map_trip_detail_map_component__WEBPACK_IMPORTED_MODULE_5__["TripDetailMapComponent"], _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _top_box_top_box_component__WEBPACK_IMPORTED_MODULE_11__["TopBoxComponent"]],
            imports: [_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_14__["NgxDaterangepickerMd"].forRoot(), ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_12__["NgxShimmerLoadingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
              extend: true
            }), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
            exports: [_trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_3__["TripHistoryComponent"], _trip_history_map_trip_history_map_component__WEBPACK_IMPORTED_MODULE_2__["TripHistoryMapComponent"], _trip_detail_map_trip_detail_map_component__WEBPACK_IMPORTED_MODULE_5__["TripDetailMapComponent"], _top_box_top_box_component__WEBPACK_IMPORTED_MODULE_11__["TopBoxComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "BLWB":
    /*!***************************************!*\
      !*** ./src/app/theme/theme.module.ts ***!
      \***************************************/

    /*! exports provided: ThemeModule */

    /***/
    function BLWB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
        return ThemeModule;
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


      var _theme_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme-routing.module */
      "Cj8Q");
      /* harmony import */


      var _container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./container/container.component */
      "IzRa");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./header/header.component */
      "wRU9");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "2amO");
      /* harmony import */


      var _config_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../config/material */
      "Uo7g");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _shared_components_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/components/component.module */
      "8OTh");

      var ThemeModule = /*#__PURE__*/_createClass(function ThemeModule() {
        _classCallCheck(this, ThemeModule);
      });

      ThemeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ThemeModule
      });
      ThemeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ThemeModule_Factory(t) {
          return new (t || ThemeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _theme_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThemeRoutingModule"], _config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _shared_components_component_module__WEBPACK_IMPORTED_MODULE_10__["ComponentModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
          extend: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ThemeModule, {
          declarations: [_container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _theme_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThemeRoutingModule"], _config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _shared_components_component_module__WEBPACK_IMPORTED_MODULE_10__["ComponentModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ThemeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _theme_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThemeRoutingModule"], _config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _shared_components_component_module__WEBPACK_IMPORTED_MODULE_10__["ComponentModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
              extend: true
            })]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Ba6F":
    /*!******************************************************************!*\
      !*** ./src/app/shared/components/snackbar/snackbar.component.ts ***!
      \******************************************************************/

    /*! exports provided: SnackbarComponent */

    /***/
    function Ba6F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function () {
        return SnackbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SnackbarComponent_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 5);
        }
      }

      var SnackbarComponent = /*#__PURE__*/function () {
        function SnackbarComponent(snackBarRef, data) {
          _classCallCheck(this, SnackbarComponent);

          this.snackBarRef = snackBarRef;
          this.data = data;
        }

        _createClass(SnackbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SnackbarComponent;
      }();

      SnackbarComponent.??fac = function SnackbarComponent_Factory(t) {
        return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]));
      };

      SnackbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SnackbarComponent,
        selectors: [["app-snackbar"]],
        decls: 9,
        vars: 2,
        consts: [[1, "d-flex", "justify-content-between", "main-snack"], [1, "data"], ["src", "/assets/images/snackbar.png", "alt", "", 4, "ngIf"], [1, "dismiss"], ["mat-icon-button", "", 3, "click"], ["src", "/assets/images/snackbar.png", "alt", ""]],
        template: function SnackbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SnackbarComponent_img_2_Template, 1, 0, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_6_listener() {
              return ctx.snackBarRef.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data == null ? null : ctx.data.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data == null ? null : ctx.data.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        styles: [".data[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.main-snack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #001E50;\n  font-size: 14px;\n}\n\n.main-snack[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     mat-icon {\n  color: #001E50;\n}\n\n.main-snack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NuYWNrYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUtJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGUjs7QUFNWTtFQUNJLGNBQUE7QUFKaEI7O0FBUUk7RUFDSSxpQkFBQTtBQU5SIiwiZmlsZSI6InNuYWNrYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGF7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm1haW4tc25hY2t7XG4gICAgLy8gcGFkZGluZzoxMHB4IDIwcHg7XG5cbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkpLCAjRjQ0MzM2O1xuICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiAgIzAwMUU1MDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIDo6bmctZGVlcHtcbiAgICAgICAgICAgIG1hdC1pY29ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAxRTUwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SnackbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-snackbar',
            templateUrl: './snackbar.component.html',
            styleUrls: ['./snackbar.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Cj8Q":
    /*!***********************************************!*\
      !*** ./src/app/theme/theme-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: ThemeRoutingModule */

    /***/
    function Cj8Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function () {
        return ThemeRoutingModule;
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


      var _interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../interceptor/auth.guard */
      "596m");
      /* harmony import */


      var _container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./container/container.component */
      "IzRa");

      var routes = [{
        path: "",
        component: _container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"],
        children: [{
          path: "",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | main-main-module */
            "main-main-module").then(__webpack_require__.bind(null,
            /*! ../main/main.module */
            "XpXM")).then(function (m) {
              return m.MainModule;
            });
          },
          canLoad: [_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
        }]
      }];

      var ThemeRoutingModule = /*#__PURE__*/_createClass(function ThemeRoutingModule() {
        _classCallCheck(this, ThemeRoutingModule);
      });

      ThemeRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ThemeRoutingModule
      });
      ThemeRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ThemeRoutingModule_Factory(t) {
          return new (t || ThemeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ThemeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ThemeRoutingModule, [{
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
    "IzRa":
    /*!********************************************************!*\
      !*** ./src/app/theme/container/container.component.ts ***!
      \********************************************************/

    /*! exports provided: ContainerComponent */

    /***/
    function IzRa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContainerComponent", function () {
        return ContainerComponent;
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


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../sidebar/sidebar.component */
      "2amO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../header/header.component */
      "wRU9");
      /* harmony import */


      var _shared_components_top_box_top_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/components/top-box/top-box.component */
      "SlV2");

      var ContainerComponent = /*#__PURE__*/function () {
        function ContainerComponent(router) {
          _classCallCheck(this, ContainerComponent);

          this.router = router;
          this.routeList = ['/main/dashboard', '/main/vehicle', '/main/trip', '/main/exceptions', '/main/mapview'];
          this.showFilter = false;
        }

        _createClass(ContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkRouteChange();
            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {//do something on start activity
              }

              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {// Handle error
                // console.error(event.error);
              }

              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (document.getElementById('head')) document.getElementById('head').scrollIntoView(); //do something on end activity
              }
            });
          }
        }, {
          key: "checkRouteChange",
          value: function checkRouteChange() {
            var _this2 = this;

            if (this.routeList.includes(this.router.url.split('?')[0])) {
              this.showFilter = true;
            } else {
              this.showFilter = false;
            }

            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (_this2.routeList.includes(event.url.split('?')[0])) {
                  _this2.showFilter = true;
                } else {
                  _this2.showFilter = false;
                }
              }
            });
          }
        }]);

        return ContainerComponent;
      }();

      ContainerComponent.??fac = function ContainerComponent_Factory(t) {
        return new (t || ContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ContainerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ContainerComponent,
        selectors: [["app-container"]],
        decls: 15,
        vars: 1,
        consts: [["autosize", "", 1, "example-container", "mat-typography"], ["mode", "side", "opened", "true", 1, "example-sidenav"], ["drawer", ""], [1, "btnExpand"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["aria-label", "Menu"], [1, "main-sec"], [1, "header-wrapper"], [1, "content-wrapper"], ["id", "head"], [3, "hidden"]],
        template: function ContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-drawer-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-drawer", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ContainerComponent_Template_button_click_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "chevron_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "app-top-box", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.showFilter);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _shared_components_top_box_top_box_component__WEBPACK_IMPORTED_MODULE_7__["TopBoxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".mat-drawer-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: relative;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .mat-drawer-content {\n  overflow: hidden !important;\n}\n.btnExpand[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 80px;\n  left: 0;\n}\n.btnExpand[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n.main-sec[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.main-sec[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  background-color: #efedf5;\n  padding: 24px 44px;\n  height: calc(100vh - 75px);\n  overflow-y: scroll;\n}\n@media (max-width: 1300px) {\n  .main-sec[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n    padding: 15px 16px;\n  }\n}\n.main-sec[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .helpBtn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n}\n.main-sec[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .helpBtn[_ngcontent-%COMP%]   .btn-help[_ngcontent-%COMP%] {\n  font: 600 18px/20px ModernEra;\n  padding: 13px 30px 13px 13px;\n  background: #602aac;\n  border-radius: 30px 6px 30px 30px;\n  color: #ffffff;\n}\n  .mat-flat-button.mat-warn, .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FDRUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVJO0VBQ0ksMkJBQUE7QUFBUjtBQUtBO0VBQ0Usa0JBQUE7RUFHQSxZQUFBO0VBQ0EsT0FBQTtBQUpGO0FBS0U7RUFDRSxZQUFBO0FBSEo7QUFPQTtFQUNFLGlCQUFBO0FBSkY7QUFNRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFLSTtFQUxGO0lBTUksa0JBQUE7RUFGSjtBQUNGO0FBSUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGTjtBQUlNO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CREhPO0VDSVAsaUNBQUE7RUFDQSxjRHZDQTtBQ3FDUjtBQVFBOzs7O0VBSUUseUJEbURtQjtBQ3hEckIiLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypORVcgQ09MT1IgTElTVCovXG5cblxuJGxpZ2h0Ymx1ZTogIzAwNTdmZjtcbiRkcmFrX0JsdWU6ICMyOTYyZmY7XG4kc2JsdWU6ICMxYjE5NGI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHRibGFjazogIzE3MWMyMjtcbiRsaWdodGdyYXk6ICM5MzllYWE7XG4kZmdyYXk6ICM3ZDg1OTI7XG4kU2Vjb25kYXJ5X2JsYWNrOiAjMDAxZTUwO1xuJFByaW1hcnlfQmx1ZTogIzAwNjRmZjtcbiRTZWNvbmRhcnlfQmx1ZTogIzYwNGVmZjtcbiRidG5FeHBvcnRCbHVlOiAjNGM2ZmZmO1xuJGRhbmdlcjogI2ZmNzA3MDtcbiRTZWNvbmRhcnlfQWxlcnRzOiAjMDBjYmEwO1xuJG5vSW5mbzogIzE4YTBmYjtcbiRTZWNvbmRhcnlfRGFyazogIzJhMWU5MTtcbiRkYXJrOiAjMzIzMzM4O1xuJGJvcmRlckNvbG9yOiAjYzVjZGQ0O1xuJGxpZ2h0V2hpdGVjb2xvcjogI2Y5ZmFmYjtcbiRncm91cEJvcmRlckRhdGE6ICNlNmU3ZTg7XG4kbGlnaHRtaXhibHVlV2hpdGVjb2xvcjogI2UwZTNlNztcbiR3aGl0ZVNoYWRvdzogI2U5ZWJmMDtcbiRza3lCbHVlOiAjNGRiZmZmO1xuJHllbGxvdzogI2ZmZWE2YztcbiRvcmFuZ2U6ICNmZjk5NTA7XG4kYm9keUJhY2tHcmF5OiAjZmRmY2ZmO1xuJGxpZ2h0QmxhY2s6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4kZXhwb3J0QnRuOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjEpO1xuJGRhbmdlckJveEJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRncmVlbkJveEJhY2s6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMSk7XG4kdGFibGVPZGRCYWNrOiAjZmJmYmZiO1xuJFNlY29uZGFyeV9CbHVlX2Rhcms6ICM3NTU1Y2Y7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbmlnaHRUZXh0Q29sb3I6ICM0NzRmNWE7XG4kbmlnaHRCYWNrQmxhY2s6ICM2NjcyODA7XG4kd2hpdGVDb2xvcjogI2UxZTFlMTtcbiRyZWRDb2xvcjogI2VkNTAyZTtcbiRkYXJrX2dyYXk6ICNiZGJkYmQ7XG4kaGVscEJ0bl9CbHVlOiAjNjAyYWFjO1xuJGRhdGVDb2xvcjogIzRlNWQ3ODtcbiRkYXlDb2xvcjogIzRlNWQ3ODdhO1xuJHJlZEFjdGl2ZUNvbG9yOiAjZmExNDY0O1xuJHdoaXRlQ29sb3JCYWNrOiAjZjdmY2ZmO1xuJGJsYWNrRGFyazogIzI3MjcyZTtcbiR3aGl0ZUdyYXlCYWNrOiAjZjdmY2ZmO1xuLy9pbnB1dCBjc3NcbiRib3JkZXJDb2xvckxpZ2h0OiAjZThlY2VlO1xuJGJvcmRlckNvbG9yR3JheTogI2VlZWRmMDtcbiRsaWdodFdoaXRlOiAjZTVlZWZmO1xuJGJ0bkRlZmF1bHRXaGl0ZTogI2Y0ZjZmODtcbiRtYXRCb3JkZXI6ICNlNmU3ZTg7XG5cbiR0b2dnbGVBY3RpdmU6ICMzNzE5ODY7XG5cbi8vcmdiYSBjc3NcbiRiZWhhdmlvdXJCYWNrOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjA4KTtcbiRtb250aFNob3dCYWNrOiByZ2JhKDg2LCA2NiwgMjU1LCAwLjEpO1xuJGJveFNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiRiYWNrRGFuZ2VyOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuNCk7XG4kYmFja0dyZWVuOiByZ2IoMCAyMDMgMTYwIC8gMTUlKTtcbiRzYWZlU2NvcmVCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kYmFja0dyYXlDb21tb246IHJnYmEoMTM1LCAxMzUsIDEzNSwgMC4wNSk7XG4kcXVpdGVSb2FkOiAjZmZlYTZjO1xuXG4vL25ldyBjb2xvciB2ZXJzaW9uMlxuJHJlZEV4Y2VwdGlvbjogI2ZhMTQ2NDtcbiRib3hzaGFkb3c6IDBweCA4cHggMjVweCByZ2JhKDk4LCA5OCwgOTgsIDAuMDUpO1xuJHRvb2x0aXBzVGV4dENvbG9yOiAjMTYxOTJjO1xuXG4vL2JveCBncmFkaWFudCBCYWNrZ3JvdW5kXG4kdmVoaWNhbEJveEJhY2s6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICM4MWJiZmYgLTQuMiUsICMwMDg1ZmYgOTkuMzclKTtcbiRkcml2ZW5Cb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM1YTZiZmYgMC42OSUsICM2MDRlZmYgMTAyLjIlKTtcbiRiZWhhdmlvdXJCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM4YzQ2ZmYgMC42OSUsICNmZjgwODAgMTAyLjIlKTtcbiRldkJsb2NrQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICNmZmU5NzcgMTAyLjE3JSk7XG4kaWNlQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG5cbi8vYm94IHYyIGdyYWRpYW50IEJhY2tncm91bmRcbiRpY2VCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG4kZHJpdmVyQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjMzY1NmZmIDEwMi4xNyUpO1xuJGtpbG9tZXRlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTMzLjM5ZGVnLCAjNDk4NWY4IC00LjIyJSwgIzRkYmZmZiAxMDQuMjQlKTtcbiRzYWZlRHJpdmluZ0JveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICM0NWM4ZjEgLTE4LjU2JSwgI2VlZTA5NyAxMDIuMTclKTtcbiRkcml2ZXIxQm94VjI6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzc2ZDZlZSAwLjY5JSwgIzc2OThkYiAxMDIuMiUpO1xuJHRyaXBCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjYzJhM2EwIC0xOC41NiUsICNlOWM4YTcgMTAyLjE3JSk7XG4kdmVoaWNsZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjZGY5ODk1IC00LjIlLCAjYzJhM2EwIDEwOC4xNSUpO1xuXG4vL3Njcm9sbCBiYXIgY29sb3IgY29kZVxuJHNjcm9sbEJsYWNrOiAjODg4O1xuJHNjcm9sbFdoaXRlOiAjZjFmMWYxO1xuJHNjcm9sbEhvdmVyQmxhY2s6ICM1NTU7XG5cbi8vd2hpdGUgbGFiZWwgZmxlYWQgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNFRkE5NTI7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcblxuLy93aGl0ZSBsYWJlbCBkaGwgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNkNDA1MTE7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcbi8vICR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazojRkZDQzAwO1xuXG4vL3doaXRlIGxhYmVsIFplZ28gY29sb3JcbiRXaGl0ZV9sYWJpbmdfQmxhY2s6ICMwMDAwMDA7XG4kV2hpdGVfbGFiaW5nX1llbGxvdzogIzM3MTk4NztcbiRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTogIzRkYmZmZjtcbiRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6ICNlZWY5ZmY7XG4kd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6ICNmZmNjMDA7XG4kY29sb3JfdmlvbGV0OiAjODc3NWI3O1xuJGNvbG9yX3Zpb2xldF9kYXJrOiAjMzIxOTg3O1xuJGNvbG9yX2xpZ2h0X2dyZXk6ICNlNWU1ZTU7XG4kY29sb3ItdmlvbGV0LWxpZ2h0OiAjYWM5NGVlO1xuJGNvbG9yLWJsdWUtbGlnaHQ6ICNmNWY1ZjU7XG4kY29sb3ItdGFibGUtaGVhZGluZzogIzI3MjUyZDtcbiR0cmlwSGlzdEJhY2s6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC4wNSk7XG4kc2FmZUJhY2tDb2xvcjogcmdiYSgwLCAyMDMsIDE2MCwgMC4wNSk7XG4kY29sb3JfbGlnaHRfYmx1ZTogIzQ1Y2JmYztcbiRjb2xvcl9ncmFwaF92b2lsZXQ6ICMzNzFhODc7XG5cbi8vZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGVycm9yR3JhZGlhbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcbiAgKSxcbiAgI2Y0NDMzNjtcblxuQG1peGluIGZsZXgtanVzdGlmeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZmxleC1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbkBtaXhpbiBmbGV4LXNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBlbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQG1peGluICBsaW5lLWNsYW1wIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbn1cblxuQG1peGluIGJ0bkZpbHRlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuQG1peGluIG1zZyB7XG4gIGZvbnQ6IDEycHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDMwcHg7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbkBtaXhpbiBtYWluQm94d2l0aEJhY2sge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDEyM3B4IHJnYmEoODcsIDg0LCAxNjAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4vLyBAbWl4aW4gYnV0dG9uLWdyZWVuIHtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjMTFEMEEyO1xuLy8gYm9yZGVyLXJhZGl1czogMTQ1cHg7XG4vLyBmb250LXdlaWdodCA6IDYwMDtcbi8vIGZvbnQtc2l6ZSA6IDE1cHg7XG4vLyBsaW5lLWhlaWdodCA6IDE4cHg7XG4vLyBjb2xvciA6ICNmZmZmZmY7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tYmx1ZSB7XG4vLyBmb250IDogMTNweC8xNnB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzc1NTVDRiwgIzc1NTVDRiksICM2NDNGQzA7XG4vLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gbWF4LXdpZHRoIDogMTQwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiAzOHB4O1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLXJlZCB7XG4vLyBmb250IDogMTZweC8yMHB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICNGRjY1NjU7XG4vLyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICA6Om5nLWRlZXB7XG4gICAgLm1hdC1kcmF3ZXItY29udGVudHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIH1cbiB9XG59XG5cbi5idG5FeHBhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIHRvcDogIDUwcHg7XG4gIC8vIGxlZnQ6IC0xMHB4O1xuICBib3R0b206IDgwcHg7XG4gIGxlZnQ6IDA7XG4gIGJ1dHRvbntcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbn1cblxuLm1haW4tc2VjIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRmNTtcbiAgICBwYWRkaW5nOiAyNHB4IDQ0cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIEBtZWRpYShtYXgtd2lkdGg6MTMwMHB4KXtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTZweDtcbiAgICB9XG5cbiAgICAuaGVscEJ0biB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDUwcHg7XG4gICAgICByaWdodDogNTBweDtcblxuICAgICAgLmJ0bi1oZWxwIHtcbiAgICAgICAgZm9udDogNjAwIDE4cHgvMjBweCBNb2Rlcm5FcmE7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMzBweCAxM3B4IDEzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRoZWxwQnRuX0JsdWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggNnB4IDMwcHggMzBweDtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sXG4ubWF0LWZhYi5tYXQtd2Fybixcbi5tYXQtbWluaS1mYWIubWF0LXdhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkV2hpdGVfbGFiaW5nX0JsYWNrO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RKq6":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/trip-history-map/trip-history-map.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: TripHistoryMapComponent */

    /***/
    function RKq6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TripHistoryMapComponent", function () {
        return TripHistoryMapComponent;
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


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");

      var TripHistoryMapComponent = /*#__PURE__*/function () {
        function TripHistoryMapComponent(service, local, cd) {
          _classCallCheck(this, TripHistoryMapComponent);

          this.service = service;
          this.local = local;
          this.cd = cd;
          this.tableData = [];
          this.i = 0;
          this.timeOutInterval = 0;
          this.exceptionColors = {
            "speed": '#FF9950',
            "breaking": '#FFEA6C',
            "acceleration": '#4DBFFF',
            "cornering": '#FF7070',
            "idling": '#00CBA0'
          };
          this.exceptionStartObj = {};
          this.alertMarkers = [];
        }

        _createClass(TripHistoryMapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exceptionColors = JSON.parse(this.local.getItem('colors'));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.tableData) {
              this.initMap(changes.tableData.currentValue);
            }
          }
        }, {
          key: "renderDirections",
          value: function renderDirections(result, map, k) {
            var legs = result.routes[0].legs;
            var polylines = [];
            var colors = "#FF0000";
            var bounds;
            bounds = new google.maps.LatLngBounds();
            var polylineOptions = {
              strokeColor: '#C83939',
              strokeOpacity: 1,
              strokeWeight: 3
            };

            for (var i = 0; i < legs.length; i++) {
              var str = this.convertToFixed(legs[i].start_location.lat()) + ', ' + this.convertToFixed(legs[i].start_location.lng());

              if (this.exceptionStartObj[k].includes(str)) {
                colors = "#FF0000";
              } else {
                colors = "#604EFF";
              }

              var steps = legs[i].steps;

              for (var j = 0; j < steps.length; j++) {
                var nextSegment = steps[j].path;
                var stepPolyline = new google.maps.Polyline(polylineOptions);
                stepPolyline.setOptions({
                  strokeColor: colors,
                  icons: [{
                    icon: {
                      path: "M -2,0 0,-2 2,0 0,0 z",
                      strokeColor: 'black',
                      fillColor: 'black',
                      fillOpacity: 1,
                      scale: 2
                    },
                    offset: '30px',
                    repeat: '500px'
                  }]
                });

                for (var l = 0; l < nextSegment.length; l++) {
                  stepPolyline.getPath().push(nextSegment[l]);
                  bounds.extend(nextSegment[l]);
                }

                polylines.push(stepPolyline);
                stepPolyline.setMap(map);
                this.cd.detectChanges();
              }
            }
          }
        }, {
          key: "initMap",
          value: function initMap(routes) {
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
              }
            });
            map.setOptions({
              styles: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].mapStyle
            });
            var infowindow = new google.maps.InfoWindow({
              content: ''
            });
            var bounds = new google.maps.LatLngBounds();
            this.myLoop(routes, map, bounds, infowindow);
          }
        }, {
          key: "myLoop",
          value: function myLoop(routes, map, bounds, infowindow) {
            var _this = this;

            if (routes && routes.length > 0) {
              setTimeout(function () {
                if (_this.i < routes.length) {
                  _this.drawRoute(routes, _this.i, map, bounds, infowindow);
                }

                _this.i = _this.i + 1;

                if (_this.i > 9) {
                  _this.timeOutInterval = 1000;
                }

                if (_this.i < routes.length) {
                  _this.myLoop(routes, map, bounds, infowindow);
                }
              }, _this.timeOutInterval);
            }
          }
        }, {
          key: "drawRoute",
          value: function drawRoute(routes, i, map, bounds, infowindow) {
            var _this3 = this;

            var waypoints = [];
            this.exceptionStartObj[i] = [];
            var alerts = routes[i].exception_events; // Exception Markers

            if (alerts && alerts.length) {
              alerts.forEach(function (element, i) {
                if (element.points && element.points.length) {
                  var obj = {
                    location: element.points[0].latitude + ', ' + element.points[0].longitude,
                    stopover: true
                  };

                  if (waypoints.length < 25) {
                    waypoints.push(obj);
                  }

                  if (element.score_type == 'speed') {
                    obj = {
                      location: element.points[1].latitude + ', ' + element.points[1].longitude,
                      stopover: true
                    };

                    if (waypoints.length < 25) {
                      waypoints.push(obj);
                    }
                  }

                  if (_this3.exceptionStartObj[i] && element.score_type == 'speed') _this3.exceptionStartObj[i].push(_this3.convertToFixed(element.points[0].latitude) + ', ' + _this3.convertToFixed(element.points[0].longitude));
                  _this3.alertMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(element.points[0].latitude, element.points[0].longitude),
                    map: map,
                    icon: {
                      path: 'M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z',
                      fillColor: _this3.exceptionColors[element.score_type],
                      fillOpacity: 1,
                      strokeColor: '#fff',
                      scale: 1
                    }
                  });
                  bounds.extend(_this3.alertMarkers[i].position);
                  element.changedDate = _this3.convertDateFormat(element.start_time);

                  if (routes) {
                    var extendedHtml = '';
                    var unit = '';

                    if (element.score_type == 'idling') {
                      if (!element.duration_seconds.includes(":")) element.duration_seconds = _this3.service.convertHMS(element.duration_seconds);
                      unit = 's';
                      extendedHtml = "<div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n              <div style=\"font: 600 14px/20px ModernEra; color:#FA1464; \">\n              <svg  style=\"margin-right:10px\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z\" fill=\"".concat(_this3.exceptionColors[element.score_type], "\"/>\n            </svg>Idiling</div>\n              <div>\n                  <div style=\"min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);\n          border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;\">\n                      Violation: <span style=\"color:#FA1464\"> ").concat(element.duration_seconds, "</span>\n                  </div>\n              </div>\n            </div>");
                    } else if (element.score_type == 'speed') {
                      unit = 'km/h';
                      extendedHtml = "\n              <div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n                  <div style=\"font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;\">\n                  <svg  style=\"margin-right:10px\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z\" fill=\"".concat(_this3.exceptionColors[element.score_type], "\"/>\n                </svg>Speeding</div>\n                  <div>\n                      <div style=\"min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);\n              border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;\">\n                          Violation: <span style=\"color:#FA1464\"> ").concat(_this3.service.convertToDutch(element.violation_rate), " km/h</span>\n                      </div>\n                  </div>\n              </div>");
                    } else if (element.score_type == 'cornering') {
                      unit = 'G';
                      extendedHtml = "\n                <div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n                <div style=\"font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;\">\n                <svg  style=\"margin-right:10px\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z\" fill=\"".concat(_this3.exceptionColors[element.score_type], "\"/>\n              </svg>Harsh cornering</div>\n                <div>\n                    <div style=\"min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);\n            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;\">\n                        Violation: <span style=\"color:#FA1464\"> ").concat(_this3.service.convertToDutch(element.violation_rate), " G</span>\n                    </div>\n                </div>\n            </div>\n              ");
                    } else if (element.score_type == 'acceleration') {
                      unit = 'G';
                      extendedHtml = "\n                <div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n                <div style=\"font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;\">\n                <svg  style=\"margin-right:10px\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z\" fill=\"".concat(_this3.exceptionColors[element.score_type], "\"/>\n              </svg>Harsh acceleration</div>\n                <div>\n                    <div style=\"min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);\n            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;\">\n                        Violation: <span style=\"color:#FA1464\"> ").concat(_this3.service.convertToDutch(element.violation_rate), " G</span>\n                    </div>\n                </div>\n            </div>\n              ");
                    } else {
                      unit = 'G';
                      extendedHtml = "\n                <div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n                <div style=\"font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;\">\n                <svg  style=\"margin-right:10px\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z\" fill=\"".concat(_this3.exceptionColors[element.score_type], "\"/>\n              </svg>Harsh braking</div>\n                <div>\n                    <div style=\"min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);\n            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;\">\n                        Violation: <span style=\"color:#FA1464\"> ").concat(_this3.service.convertToDutch(element.violation_rate), " G</span>\n                    </div>\n                </div>\n            </div>\n              ");
                    }

                    var html = "<div style=\"display:flex\">\n                <div style=\" flex-basis: calc(50% - 10px);\n                      max-width: calc(50% - 10px); margin-right:20px;\">\n                    <div style=\"display:flex; align-items: center; padding-bottom:16px;\">\n                        <div style=\"margin-right:10px\"><img src=\"../../../../assets/images/location-tick.svg\"> </div>\n                        <div style=\"width:135px\">\n                            <div style=\"font: 700 12px/18px ModernEra; color:#EFA952\"> ".concat(element.changedDate, "</div>\n                            <div style=\"font: 600 11px/18px ModernEra; color:#001E50;   white-space: nowrap;\n                          overflow: hidden;\n                          text-overflow: ellipsis;\">\n                                 </div>\n                        </div>\n                    </div>\n                </div>\n                <div style=\"flex-basis: calc(50% - 10px);\n                max-width: calc(50% - 10px);\">\n                    <div style=\"min-width:145px;text-align:center;  padding:10px 9px; background: rgba(0,240,156, 0.05);\n                border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50; text-align:center\">\n                        Limit: <span style=\"color:#00F09C\"> ").concat(_this3.service.convertToDutch(element.limit), " ").concat(unit, "</span>\n                    </div>\n                </div>\n            </div>\n            ") + extendedHtml;

                    _this3.bindInfoWindow(_this3.alertMarkers[i], map, infowindow, html);
                  }
                }
              });
            }

            var startPoint = new google.maps.LatLng(routes[i].start_latitude, routes[i].start_longitude);
            var endPoint = new google.maps.LatLng(routes[i].finish_latitude, routes[i].finish_longitude); // Each route

            var startAdd = routes[i]['start_location_address'];
            var labelText = String(i + 1);
            var startMarker = new google.maps.Marker({
              position: startPoint,
              map: map,
              title: startAdd,
              icon: {
                url: '../../../assets/images/location.svg',
                scaledSize: new google.maps.Size(30, 30)
              },
              label: {
                color: '##0064FF',
                fontSize: '8px',
                text: labelText
              }
            });
            bounds.extend(startMarker.position);
            this.bindInfoWindow(startMarker, map, infowindow, "<p>" + startAdd + "</p>");
            var endAdd = routes[i]['stop_location_address'];
            var endMarker = new google.maps.Marker({
              position: endPoint,
              map: map,
              title: endAdd,
              icon: {
                url: '../../../assets/images/destination.svg',
                scaledSize: new google.maps.Size(30, 30)
              }
            });
            bounds.extend(endMarker.position);
            this.bindInfoWindow(endMarker, map, infowindow, "<p>" + endAdd + "</p>");
            var request = {
              origin: startPoint,
              destination: endPoint,
              travelMode: 'DRIVING',
              waypoints: waypoints,
              optimizeWaypoints: true
            };
            var directionsService = new google.maps.DirectionsService();

            var _this = this;

            directionsService.route(request, function (response, status) {
              if (status == 'OK') {
                // Display the route on the map.
                _this.renderDirections(response, map, i);
              }
            });
            map.fitBounds(bounds); // google.maps.event.addDomListener(window, "resize", function () {
            //   google.maps.event.trigger(map, "resize");
            //   map.fitBounds(bounds);
            // });
          }
        }, {
          key: "bindInfoWindow",
          value: function bindInfoWindow(marker, map, infowindow, html) {
            google.maps.event.addListener(marker, 'mouseover', function () {
              infowindow.setContent(html);
              infowindow.open(map, marker);
            });
            google.maps.event.addListener(marker, 'mouseout', function () {
              infowindow.close();
            });
          }
        }, {
          key: "convertToFixed",
          value: function convertToFixed(val) {
            val = String(val);
            return val.split('.')[0] + '.' + val.split('.')[1].substring(0, 3);
          }
        }, {
          key: "convertDateFormat",
          value: function convertDateFormat(date) {
            if (date) {
              return moment__WEBPACK_IMPORTED_MODULE_1__(date).utc().format("HH:mm [???] DD/MM/yyyy");
            } else {
              return 'NA';
            }
          }
        }]);

        return TripHistoryMapComponent;
      }();

      TripHistoryMapComponent.??fac = function TripHistoryMapComponent_Factory(t) {
        return new (t || TripHistoryMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      TripHistoryMapComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TripHistoryMapComponent,
        selectors: [["app-trip-history-map"]],
        inputs: {
          tableData: "tableData"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
        decls: 1,
        vars: 0,
        consts: [["id", "map"]],
        template: function TripHistoryMapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 0);
          }
        },
        styles: ["#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 550px;\n  margin: 0px;\n  padding: 0px;\n}\n\n  .gm-fullscreen-control {\n  background: #0064FF !important;\n  background-image: url(\"/assets/images/fullscreen_map.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  height: 44px !important;\n  width: 44px !important;\n  border-radius: 50% !important;\n}\n\n  .gm-fullscreen-control img {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RyaXAtaGlzdG9yeS1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUk7RUFDSSw4QkFBQTtFQUNBLHFFQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUNSOztBQUFRO0VBQ0ksd0JBQUE7QUFFWiIsImZpbGUiOiJ0cmlwLWhpc3RvcnktbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHhcbn1cbjo6bmctZGVlcHtcbiAgICAuZ20tZnVsbHNjcmVlbi1jb250cm9se1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2NEZGICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZnVsbHNjcmVlbl9tYXAuc3ZnJykgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TripHistoryMapComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-trip-history-map',
            templateUrl: './trip-history-map.component.html',
            styleUrls: ['./trip-history-map.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          tableData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["tableData"]
          }]
        });
      })();
      /***/

    },

    /***/
    "SlV2":
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/top-box/top-box.component.ts ***!
      \****************************************************************/

    /*! exports provided: TopBoxComponent */

    /***/
    function SlV2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopBoxComponent", function () {
        return TopBoxComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/config/app-config */
      "Tr6M");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-shimmer-loading */
      "+HUQ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-daterangepicker-material */
      "YhS8");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../pipe/filter.pipe */
      "AOmN");

      function TopBoxComponent_div_1_div_1_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r18.service.convertToDutch(ctx_r18.dashBoardData == null ? null : ctx_r18.dashBoardData.safeScoreChange) || "0", "%");
        }
      }

      function TopBoxComponent_div_1_div_1_ng_template_8_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 35);
        }
      }

      function TopBoxComponent_div_1_div_1_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TopBoxComponent_div_1_div_1_ng_template_8_img_1_Template, 1, 0, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r20.dashBoardData.safeScoreChange > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r20.service.convertToDutch(ctx_r20.dashBoardData == null ? null : ctx_r20.dashBoardData.safeScoreChange) || "0", "%");
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "flex-basis": a0,
          "max-width": a1
        };
      };

      function TopBoxComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TopBoxComponent_div_1_div_1_ng_container_7_Template, 4, 1, "ng-container", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, TopBoxComponent_div_1_div_1_ng_template_8_Template, 3, 2, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "svg", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](8, _c0, "calc(" + 100 / ctx_r8.totalBoxes + "% - 14px)", "calc(" + 100 / ctx_r8.totalBoxes + "% - 14px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 6, "safeDrivingScore"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r8.service.convertToDutch(ctx_r8.dashBoardData == null ? null : ctx_r8.dashBoardData.safe_score) || "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.dashBoardData.safeScoreChange < 0)("ngIfElse", _r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", ctx_r8.eyeIconMessage.fleetScore);
        }
      }

      function TopBoxComponent_div_1_ngx_shimmer_loading_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ngx-shimmer-loading", 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("shape", "square")("width", "100%");
        }
      }

      function TopBoxComponent_div_1_div_3_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r22.service.convertToDutch(ctx_r22.dashBoardData == null ? null : ctx_r22.dashBoardData.tripChange) || "0", "%");
        }
      }

      function TopBoxComponent_div_1_div_3_ng_template_8_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 35);
        }
      }

      function TopBoxComponent_div_1_div_3_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TopBoxComponent_div_1_div_3_ng_template_8_img_1_Template, 1, 0, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r24.dashBoardData.tripChange > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r24.service.convertToDutch(ctx_r24.dashBoardData == null ? null : ctx_r24.dashBoardData.tripChange) || "0", "%");
        }
      }

      function TopBoxComponent_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TopBoxComponent_div_1_div_3_ng_container_7_Template, 4, 1, "ng-container", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, TopBoxComponent_div_1_div_3_ng_template_8_Template, 3, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "svg", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](8, _c0, "calc(" + 100 / ctx_r10.totalBoxes + "% - 14px)", "calc(" + 100 / ctx_r10.totalBoxes + "% - 14px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 6, "sidebar.trip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r10.service.convertToDutch(ctx_r10.dashBoardData == null ? null : ctx_r10.dashBoardData.total_trips));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.dashBoardData.tripChange < 0)("ngIfElse", _r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", ctx_r10.eyeIconMessage.trips);
        }
      }

      function TopBoxComponent_div_1_ngx_shimmer_loading_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ngx-shimmer-loading", 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("shape", "square")("width", "100%");
        }
      }

      function TopBoxComponent_div_1_div_5_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r26.service.convertToDutch(ctx_r26.dashBoardData == null ? null : ctx_r26.dashBoardData.distanceChange) || "0", "%");
        }
      }

      function TopBoxComponent_div_1_div_5_ng_template_7_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 35);
        }
      }

      function TopBoxComponent_div_1_div_5_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TopBoxComponent_div_1_div_5_ng_template_7_img_1_Template, 1, 0, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r28.dashBoardData.distanceChange > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r28.service.convertToDutch(ctx_r28.dashBoardData == null ? null : ctx_r28.dashBoardData.distanceChange) || "0", "%");
        }
      }

      function TopBoxComponent_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Kilometers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, TopBoxComponent_div_1_div_5_ng_container_6_Template, 4, 1, "ng-container", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TopBoxComponent_div_1_div_5_ng_template_7_Template, 3, 2, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "svg", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](5, _c0, "calc(" + 100 / ctx_r12.totalBoxes + "% - 14px)", "calc(" + 100 / ctx_r12.totalBoxes + "% - 14px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r12.service.convertToDutch(ctx_r12.service.formatToCeil(ctx_r12.dashBoardData == null ? null : ctx_r12.dashBoardData.total_distance)) || "0", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.dashBoardData.distanceChange < 0)("ngIfElse", _r27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", ctx_r12.eyeIconMessage.kilometers);
        }
      }

      function TopBoxComponent_div_1_ngx_shimmer_loading_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ngx-shimmer-loading", 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("shape", "square")("width", "100%");
        }
      }

      function TopBoxComponent_div_1_div_7_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r30.service.convertToDutch(ctx_r30.dashBoardData == null ? null : ctx_r30.dashBoardData.vehicleChange) || "0", "%");
        }
      }

      function TopBoxComponent_div_1_div_7_ng_template_8_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 35);
        }
      }

      function TopBoxComponent_div_1_div_7_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TopBoxComponent_div_1_div_7_ng_template_8_img_1_Template, 1, 0, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r32.dashBoardData.vehicleChange > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r32.service.convertToDutch(ctx_r32.dashBoardData == null ? null : ctx_r32.dashBoardData.vehicleChange) || "0", "%");
        }
      }

      function TopBoxComponent_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TopBoxComponent_div_1_div_7_ng_container_7_Template, 4, 1, "ng-container", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, TopBoxComponent_div_1_div_7_ng_template_8_Template, 3, 2, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "svg", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](8, _c0, "calc(" + 100 / ctx_r14.totalBoxes + "% - 14px)", "calc(" + 100 / ctx_r14.totalBoxes + "% - 14px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 6, "v.vehicle"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r14.service.convertToDutch(ctx_r14.dashBoardData == null ? null : ctx_r14.dashBoardData.total_vehicles));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.dashBoardData.vehicleChange < 0)("ngIfElse", _r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", ctx_r14.eyeIconMessage.vehicles);
        }
      }

      function TopBoxComponent_div_1_ngx_shimmer_loading_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ngx-shimmer-loading", 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("shape", "square")("width", "100%");
        }
      }

      function TopBoxComponent_div_1_div_9_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r34.service.convertToDutch(ctx_r34.dashBoardData == null ? null : ctx_r34.dashBoardData.exceptionChange) || "0", "%");
        }
      }

      function TopBoxComponent_div_1_div_9_ng_template_8_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 35);
        }
      }

      function TopBoxComponent_div_1_div_9_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TopBoxComponent_div_1_div_9_ng_template_8_img_1_Template, 1, 0, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r36.dashBoardData.exceptionChange > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r36.service.convertToDutch(ctx_r36.dashBoardData == null ? null : ctx_r36.dashBoardData.exceptionChange) || "0", "%");
        }
      }

      function TopBoxComponent_div_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TopBoxComponent_div_1_div_9_ng_container_7_Template, 4, 1, "ng-container", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, TopBoxComponent_div_1_div_9_ng_template_8_Template, 3, 2, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "svg", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](8, _c0, "calc(" + 100 / ctx_r16.totalBoxes + "% - 14px)", "calc(" + 100 / ctx_r16.totalBoxes + "% - 14px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 6, "harshEvent"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r16.service.convertToDutch((ctx_r16.dashBoardData == null ? null : ctx_r16.dashBoardData.exception) || "0"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.dashBoardData.exceptionChange < 0)("ngIfElse", _r35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", ctx_r16.eyeIconMessage.harshevent);
        }
      }

      function TopBoxComponent_div_1_ngx_shimmer_loading_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ngx-shimmer-loading", 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("shape", "square")("width", "100%");
        }
      }

      function TopBoxComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TopBoxComponent_div_1_div_1_Template, 13, 11, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TopBoxComponent_div_1_ngx_shimmer_loading_2_Template, 1, 2, "ngx-shimmer-loading", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TopBoxComponent_div_1_div_3_Template, 13, 11, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TopBoxComponent_div_1_ngx_shimmer_loading_4_Template, 1, 2, "ngx-shimmer-loading", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, TopBoxComponent_div_1_div_5_Template, 12, 8, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, TopBoxComponent_div_1_ngx_shimmer_loading_6_Template, 1, 2, "ngx-shimmer-loading", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TopBoxComponent_div_1_div_7_Template, 13, 11, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, TopBoxComponent_div_1_ngx_shimmer_loading_8_Template, 1, 2, "ngx-shimmer-loading", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, TopBoxComponent_div_1_div_9_Template, 13, 11, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, TopBoxComponent_div_1_ngx_shimmer_loading_10_Template, 1, 2, "ngx-shimmer-loading", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.isLoadingshimmer && (ctx_r0.dashBoardData == null ? null : ctx_r0.dashBoardData.safe_score) > ctx_r0.compareBoxes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isLoadingshimmer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.isLoadingshimmer && (ctx_r0.dashBoardData == null ? null : ctx_r0.dashBoardData.total_trips) > ctx_r0.compareBoxes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isLoadingshimmer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.isLoadingshimmer && (ctx_r0.dashBoardData == null ? null : ctx_r0.dashBoardData.total_distance) > ctx_r0.compareBoxes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isLoadingshimmer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.isLoadingshimmer && (ctx_r0.dashBoardData == null ? null : ctx_r0.dashBoardData.total_vehicles) > ctx_r0.compareBoxes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isLoadingshimmer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.isLoadingshimmer && (ctx_r0.dashBoardData == null ? null : ctx_r0.dashBoardData.exception) > ctx_r0.compareBoxes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isLoadingshimmer);
        }
      }

      function TopBoxComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_2_Template_img_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r38.updatePageData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c1 = function _c1(a0, a1, a2, a3, a4) {
        return {
          customRangeLabel: a0,
          applyLabel: a1,
          cancelLabel: a2,
          daysOfWeek: a3,
          monthNames: a4
        };
      };

      function TopBoxComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_16_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r40.selectedShow = $event;
          })("rangeClicked", function TopBoxComponent_div_16_Template_input_rangeClicked_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r42.rangeClicked($event);
          })("datesUpdated", function TopBoxComponent_div_16_Template_input_datesUpdated_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r43.datesUpdated($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_16_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r44.resetToLastStateDashboard();
            return ctx_r44.resetFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_16_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r45.filterApply();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 16, "selectRange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.selectedShow)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx_r3.alwaysShowCalendars)("ranges", ctx_r3.ranges)("showClearButton", false)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx_r3.isTooltipDate)("isInvalidDate", ctx_r3.isInvalidDate)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction5"](22, _c1, ctx_r3.customeRange, ctx_r3.setDate, ctx_r3.cancelDate, ctx_r3.dayWeek, ctx_r3.month))("keepCalendarOpeningWithRange", ctx_r3.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx_r3.showRangeLabelOnInput)("maxDate", ctx_r3.maxDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](21, 18, "filterreset"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 20, "apply"), " ");
        }
      }

      function TopBoxComponent_div_17_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r48 == null ? null : item_r48.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (item_r48 == null ? null : item_r48.name) || "NA", "");
        }
      }

      function TopBoxComponent_div_17_mat_option_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r49 == null ? null : item_r49.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r49 == null ? null : item_r49.license_plate, " ");
        }
      }

      var _c2 = function _c2() {
        return {
          standalone: true
        };
      };

      function TopBoxComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_17_Template_span_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r50.changeState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-select", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_17_Template_mat_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r52.selectedVehicleCategory = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_17_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r53.searchCategory = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "svg", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, TopBoxComponent_div_17_mat_option_24_Template, 2, 2, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-form-field", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-select", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_17_Template_mat_select_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r54.selectedVehicle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_17_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r55.searchVehicle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "svg", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](41, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, TopBoxComponent_div_17_mat_option_43_Template, 2, 2, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-form-field", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_17_Template_input_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r56.selectedShow = $event;
          })("rangeClicked", function TopBoxComponent_div_17_Template_input_rangeClicked_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r57.rangeClicked($event);
          })("datesUpdated", function TopBoxComponent_div_17_Template_input_datesUpdated_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r58.datesUpdated($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_17_Template_button_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r59.resetToLastStateVehicle();
            return ctx_r59.resetFilterVehicle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_17_Template_button_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r60.filterApply();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](59, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 35, "v.vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 37, "v.vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.selectedVehicleCategory)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](67, _c2))("disableOptionCentering", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 39, "search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.searchCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](22, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 43, "all")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](25, 45, ctx_r4.vehicleCategoryData, ctx_r4.searchCategory, "vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 49, "v.selectVehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](31, 51, "v.selectVehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.selectedVehicle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](68, _c2))("disableOptionCentering", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](34, 53, "search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.searchVehicle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](41, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](42, 57, "all")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](44, 59, ctx_r4.vehicleList, ctx_r4.searchVehicle, "vehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](48, 63, "selectRange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.selectedShow)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx_r4.alwaysShowCalendars)("ranges", ctx_r4.ranges)("showClearButton", false)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx_r4.isTooltipDate)("isInvalidDate", ctx_r4.isInvalidDate)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction5"](69, _c1, ctx_r4.customeRange, ctx_r4.setDate, ctx_r4.cancelDate, ctx_r4.dayWeek, ctx_r4.month))("keepCalendarOpeningWithRange", ctx_r4.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx_r4.showRangeLabelOnInput)("maxDate", ctx_r4.maxDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](59, 65, "apply"));
        }
      }

      function TopBoxComponent_div_18_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r63 == null ? null : item_r63.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (item_r63 == null ? null : item_r63.name) || "NA", "");
        }
      }

      function TopBoxComponent_div_18_mat_option_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r64 == null ? null : item_r64.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r64 == null ? null : item_r64.license_plate, " ");
        }
      }

      function TopBoxComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_18_Template_span_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r65.changeState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-select", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_18_Template_mat_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r67.selectedVehicleCategory = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_18_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r68.searchCategory = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "svg", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, TopBoxComponent_div_18_mat_option_24_Template, 2, 2, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-form-field", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-select", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_18_Template_mat_select_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r69.selectedVehicle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_18_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r70.searchVehicle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "svg", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](41, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, TopBoxComponent_div_18_mat_option_43_Template, 2, 2, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-form-field", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_18_Template_input_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r71.selectedShow = $event;
          })("rangeClicked", function TopBoxComponent_div_18_Template_input_rangeClicked_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r72.rangeClicked($event);
          })("datesUpdated", function TopBoxComponent_div_18_Template_input_datesUpdated_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r73.datesUpdated($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_18_Template_button_click_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r74.resetToLastStateTrip();
            return ctx_r74.resetFilterTrip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_18_Template_button_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r75.filterApply();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](57, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 35, "v.vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 37, "v.vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r5.selectedVehicleCategory)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](67, _c2))("disableOptionCentering", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 39, "search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r5.searchCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](22, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 43, "all")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](25, 45, ctx_r5.vehicleCategoryData, ctx_r5.searchCategory, "vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 49, "v.selectVehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](31, 51, "v.selectVehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r5.selectedVehicle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](68, _c2))("disableOptionCentering", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](34, 53, "search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r5.searchVehicle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](41, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](42, 57, "all")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](44, 59, ctx_r5.vehicleList, ctx_r5.searchVehicle, "vehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](48, 63, "selectRange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r5.selectedShow)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx_r5.alwaysShowCalendars)("ranges", ctx_r5.ranges)("showClearButton", false)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx_r5.isTooltipDate)("isInvalidDate", ctx_r5.isInvalidDate)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction5"](69, _c1, ctx_r5.customeRange, ctx_r5.setDate, ctx_r5.cancelDate, ctx_r5.dayWeek, ctx_r5.month))("keepCalendarOpeningWithRange", ctx_r5.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx_r5.showRangeLabelOnInput)("maxDate", ctx_r5.maxDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](57, 65, "apply"));
        }
      }

      function TopBoxComponent_div_19_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r79 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r79 == null ? null : item_r79.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (item_r79 == null ? null : item_r79.name) || "NA", "");
        }
      }

      function TopBoxComponent_div_19_mat_option_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r80 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r80 == null ? null : item_r80.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r80 == null ? null : item_r80.license_plate, " ");
        }
      }

      function TopBoxComponent_div_19_mat_option_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r81 == null ? null : item_r81.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r81 == null ? null : item_r81.name);
        }
      }

      function TopBoxComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_19_Template_span_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r82.changeState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-select", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_19_Template_mat_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r84.selectedVehicleCategory = $event;
          })("selectionChange", function TopBoxComponent_div_19_Template_mat_select_selectionChange_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r85.getVehicles(ctx_r85.selectedVehicleCategory);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_19_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r86.searchCategory = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "svg", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, TopBoxComponent_div_19_mat_option_24_Template, 2, 2, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-form-field", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-select", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_19_Template_mat_select_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r87.selectedVehicle = $event;
          })("selectionChange", function TopBoxComponent_div_19_Template_mat_select_selectionChange_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r88.getDriverList(ctx_r88.selectedVehicleCategory, ctx_r88.selectedVehicle);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_19_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r89.searchVehicle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "svg", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](41, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, TopBoxComponent_div_19_mat_option_43_Template, 2, 2, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-form-field", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_19_Template_input_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r90.selectedShow = $event;
          })("rangeClicked", function TopBoxComponent_div_19_Template_input_rangeClicked_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r91.rangeClicked($event);
          })("datesUpdated", function TopBoxComponent_div_19_Template_input_datesUpdated_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r92.datesUpdated($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-form-field", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Select exception type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-select", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_19_Template_mat_select_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r93.selectedException = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](58, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](59, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, TopBoxComponent_div_19_mat_option_60_Template, 2, 2, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_19_Template_button_click_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r94.resetToLastStateException();
            return ctx_r94.resetFilterException();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_19_Template_button_click_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r95.filterApply();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](66, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 41, "v.vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 43, "v.vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.selectedVehicleCategory)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](77, _c2))("disableOptionCentering", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 45, "search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.searchCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](22, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 49, "all")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](25, 51, ctx_r6.vehicleCategoryData, ctx_r6.searchCategory, "vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 55, "v.selectVehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](31, 57, "v.selectVehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.selectedVehicle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](78, _c2))("disableOptionCentering", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](34, 59, "search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.searchVehicle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](41, 61, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](42, 63, "all")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](44, 65, ctx_r6.vehicleList, ctx_r6.searchVehicle, "vehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](48, 69, "selectRange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.selectedShow)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx_r6.alwaysShowCalendars)("ranges", ctx_r6.ranges)("showClearButton", false)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx_r6.isTooltipDate)("isInvalidDate", ctx_r6.isInvalidDate)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction5"](79, _c1, ctx_r6.customeRange, ctx_r6.setDate, ctx_r6.cancelDate, ctx_r6.dayWeek, ctx_r6.month))("keepCalendarOpeningWithRange", ctx_r6.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx_r6.showRangeLabelOnInput)("maxDate", ctx_r6.maxDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.selectedException)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](85, _c2))("disableOptionCentering", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](58, 71, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](59, 73, "all")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r6.exceptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](66, 75, "apply"));
        }
      }

      function TopBoxComponent_div_20_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r98 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r98 == null ? null : item_r98.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (item_r98 == null ? null : item_r98.name) || "NA", "");
        }
      }

      function TopBoxComponent_div_20_mat_option_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r99 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r99 == null ? null : item_r99.license_plate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r99 == null ? null : item_r99.license_plate, " ");
        }
      }

      function TopBoxComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_20_Template_span_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r100.changeState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-select", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_20_Template_mat_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101);

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r102.selectedVehicleCategory = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_20_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r103.searchCategory = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "svg", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, TopBoxComponent_div_20_mat_option_24_Template, 2, 2, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-form-field", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-select", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_20_Template_mat_select_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101);

            var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r104.selectedVehicle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopBoxComponent_div_20_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101);

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r105.searchVehicle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "svg", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](41, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, TopBoxComponent_div_20_mat_option_43_Template, 2, 2, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_20_Template_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101);

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r106.resetToLastStateMap();
            return ctx_r106.resetFilterMap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_div_20_Template_button_click_48_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101);

            var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r107.filterApply();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](50, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 21, "v.vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 23, "v.vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r7.selectedVehicleCategory)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](51, _c2))("disableOptionCentering", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 25, "search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r7.searchCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](22, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 29, "all")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](25, 31, ctx_r7.vehicleCategoryData, ctx_r7.searchCategory, "vehicleCategory"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 35, "v.selectVehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](31, 37, "v.selectVehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r7.selectedVehicle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](52, _c2))("disableOptionCentering", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](34, 39, "search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r7.searchVehicle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](41, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](42, 43, "all")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](44, 45, ctx_r7.vehicleList, ctx_r7.searchVehicle, "vehicle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](50, 49, "apply"), " ");
        }
      }

      var TopBoxComponent = /*#__PURE__*/function () {
        function TopBoxComponent(translate, localService, service, route) {
          var _this4 = this;

          _classCallCheck(this, TopBoxComponent);

          this.translate = translate;
          this.localService = localService;
          this.service = service;
          this.route = route;
          this.dashBoardData = {};
          this.isCollapsed = true;
          this.isLoadingshimmer = false;
          this.selectedDriver = "all";
          this.selectedException = "all";
          this.customeRange = "Custom";
          this.setDate = "Set Date";
          this.cancelDate = "Cancel";
          this.exceptions = [{
            name: "Speeding",
            value: "speed"
          }, {
            name: "Harsh braking",
            value: "breaking"
          }, {
            name: "Harsh Acceleration",
            value: "acceleration"
          }, {
            name: "Harsh Cornering",
            value: "cornering"
          }, {
            name: "Idiling",
            value: "idling"
          }];
          this.selected = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, "days").set("hours", 0).set("minutes", 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().set("hours", 23).set("minutes", 59)
          };
          this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, "days").set("hours", 0).set("minutes", 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().set("hours", 23).set("minutes", 59)
          };
          this.eyeIconMessage = {
            fleetScore: "",
            trips: "",
            kilometers: "",
            vehicles: "",
            harshevent: ""
          };
          this.ranges = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].momentRange;
          this.alwaysShowCalendars = true;
          this.showRangeLabelOnInput = true;
          this.keepCalendarOpeningWithRange = true;
          this.invalidDates = [];
          this.tooltips = [{
            date: moment__WEBPACK_IMPORTED_MODULE_1__(),
            text: "Today is just unselectable"
          }, {
            date: moment__WEBPACK_IMPORTED_MODULE_1__().add(2, "days"),
            text: "Yeeeees!!!"
          }];
          this.maxDate = moment__WEBPACK_IMPORTED_MODULE_1__();
          this.vehicleCategoryData = [];
          this.vehicleList = [];
          this.searchCategory = "";
          this.searchVehicle = "";
          this.routeList = ["/main/dashboard", "/main/vehicle", "/main/trip", "/main/exceptions", "/main/mapview"];
          this.showFilter = 0;

          this.isInvalidDate = function (m) {
            return _this4.invalidDates.some(function (d) {
              return d.isSame(m, "day");
            });
          };

          this.isTooltipDate = function (m) {
            var tooltip = _this4.tooltips.find(function (tt) {
              return tt.date.isSame(m, "day");
            });

            if (tooltip) {
              return tooltip.text;
            } else {
              return false;
            }
          };

          this.dashBoardPre = {};
          this.totalBoxes = 5;
          this.compareBoxes = 0; // vehicle data

          this.selectedVehicleCategory = "all";
          this.selectedVehicle = "all";
        }

        _createClass(TopBoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            var lang = this.localService.getItem("currentlang") || "en";
            this.ranges = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).range;
            this.customeRange = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).customLabel;
            this.setDate = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).apply;
            this.cancelDate = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).cancel;
            this.dayWeek = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).dayWeek;
            this.month = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).month;
            this.changeIconlang(lang);

            if (lang == "en") {
              this.exceptions = [{
                name: "Speeding",
                value: "speed"
              }, {
                name: "Harsh braking",
                value: "breaking"
              }, {
                name: "Harsh Acceleration",
                value: "acceleration"
              }, {
                name: "Harsh Cornering",
                value: "cornering"
              }, {
                name: "Idiling",
                value: "idling"
              }];
            } else {
              this.exceptions = [{
                name: "Te hard rijden",
                value: "speed"
              }, {
                name: "Te Hard remmen",
                value: "breaking"
              }, {
                name: "Te hard optrekken",
                value: "acceleration"
              }, {
                name: "Te hard door de bocht",
                value: "cornering"
              }, {
                name: "Stationair draaien",
                value: "idling"
              }];
            }

            this.localService.getLang().subscribe(function (val) {
              _this5.resetToLastState();

              var lang = _this5.localService.getItem("currentlang") || "en"; // console.log(lang)

              _this5.ranges = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).range;
              _this5.customeRange = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).customLabel;
              _this5.setDate = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).apply;
              _this5.cancelDate = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).cancel;
              _this5.dayWeek = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).dayWeek;
              _this5.month = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].changelang(lang).month;

              if (lang == "en") {
                _this5.exceptions = [{
                  name: "Speeding",
                  value: "speed"
                }, {
                  name: "Harsh braking",
                  value: "breaking"
                }, {
                  name: "Harsh Acceleration",
                  value: "acceleration"
                }, {
                  name: "Harsh Cornering",
                  value: "cornering"
                }, {
                  name: "Idiling",
                  value: "idling"
                }];
              } else {
                _this5.exceptions = [{
                  name: "Te hard rijden",
                  value: "speed"
                }, {
                  name: "Te Hard remmen",
                  value: "breaking"
                }, {
                  name: "Te hard optrekken",
                  value: "acceleration"
                }, {
                  name: "Te hard door de bocht",
                  value: "cornering"
                }, {
                  name: "Stationair draaien",
                  value: "idling"
                }];
              }

              _this5.changeIconlang(lang);
            });
            this.checkRouteChange();
            this.selectedOrgID = this.localService.getItem("selectedOrgs");

            if (this.selectedOrgID) {
              this.selectedOrgID = JSON.parse(this.selectedOrgID);
            }

            if (this.selectedOrgID) {
              this.getVehicleCategory();
              this.getVehicles();
              this.updatePageData();
            }

            this.localService.watchOrgData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200)).subscribe(function (resp) {
              if (resp) {
                // console.log('')
                var orgId = _this5.localService.getItem("selectedOrgs");

                if (orgId) {
                  orgId = JSON.parse(orgId);
                }

                var isEqual = true;

                if (_this5.selectedOrgID && _this5.selectedOrgID.length && orgId && orgId.length) {
                  isEqual = orgId.length === _this5.selectedOrgID.length && orgId.every(function (val) {
                    return _this5.selectedOrgID.includes(val);
                  });
                } else {
                  isEqual = false;
                }

                if (!isEqual) {
                  _this5.selectedOrgID = _toConsumableArray(orgId);

                  _this5.getVehicleCategory();

                  _this5.getVehicles();

                  _this5.updatePageData(); // this.resetToLastState();
                  // this.updatePageData();

                }
              }
            });
          }
        }, {
          key: "changeIconlang",
          value: function changeIconlang(lang) {
            // this.translate.get("iconFleetScore").subscribe((text: string) => {
            //   this.eyeIconMessage.fleetScore = text;
            // });
            // this.translate.get("iconVehciles").subscribe((text: string) => {
            //   this.eyeIconMessage.vehicles = text;
            // });
            // this.translate.get("iconKilometers").subscribe((text: string) => {
            //   this.eyeIconMessage.kilometers = text;
            // });
            // this.translate.get("iconTrips").subscribe((text: string) => {
            //   this.eyeIconMessage.trips = text;
            // });
            // this.translate.get("iconException").subscribe((text: string) => {
            //   this.eyeIconMessage.harshevent = text;
            // });
            if (lang == 'en') {
              this.eyeIconMessage.fleetScore = 'This card show the overall fleet score in the date range you have set from filter, or of 30 days by default.';
              this.eyeIconMessage.vehicles = 'This card show the total number of vehicles in the fleet you have selected.';
              this.eyeIconMessage.kilometers = 'This card show the total kilometres driven by the fleet you have selected in the date range you have set from filter, or of 30 days by default.';
              this.eyeIconMessage.trips = 'This card show the total number of trips of the fleet you have selected in the date range you have set from filter, or of 30 days by default.';
              this.eyeIconMessage.harshevent = 'This card show the total number of exceptions/harsh events done by the fleet you have selected in the date range you have set from filter, or of 30 days by default.';
            } else if (lang == 'nl') {
              this.eyeIconMessage.fleetScore = 'De totale wagenparkscore in de geselecteerde periode. Geen periode geselecteerd? Dan pakken we standaard 30 dagen.';
              this.eyeIconMessage.vehicles = 'Het totaal aantal voertuigen in het door jou geselecteerde wagenpark.';
              this.eyeIconMessage.kilometers = 'Het totaal aantal gereden kilometers van het door jou geselecteerde wagenpark binnen de geselecteerde periode. Geen periode geselecteerd? Dan pakken we standaard 30 dagen.';
              this.eyeIconMessage.trips = 'Het totaal aantal ritten van het door jou geselecteerde wagenpark binnen de geselecteerde periode. Geen periode geselecteerd? Dan pakken we standaard 30 dagen.';
              this.eyeIconMessage.harshevent = 'Het totaal aantal situaties met onveilig rijgedag van het door jou geselecteerde wagenpark binnen de geselecteerde periode. Geen periode geselecteerd? Dan pakken we standaard 30 dagen.';
            }
          }
        }, {
          key: "getVehicleCategory",
          value: function getVehicleCategory() {
            var _this6 = this;

            this.searchCategory = "";
            this.service.get("vehicles/category-by-organisation?organisation=".concat(JSON.stringify(this.selectedOrgID))).pipe().subscribe(function (response) {
              if (response.data && response.data.length) {
                _this6.vehicleCategoryData = response.data;
              }
            }, function (error) {});
          }
        }, {
          key: "getVehicles",
          value: function getVehicles(categoryId) {
            var _this7 = this;

            if (categoryId && categoryId == "all" || categoryId == undefined) {
              categoryId = "";
            }

            this.searchVehicle = "";
            this.service.get("vehicles/by-organisation?organisation=".concat(JSON.stringify(this.selectedOrgID))).pipe().subscribe(function (response) {
              if (response.data && response.data.length) {
                _this7.vehicleList = response.data;
              } // this.getUpdatedStats()

            }, function (error) {});
          }
        }, {
          key: "checkRouteChange",
          value: function checkRouteChange() {
            var _this8 = this;

            for (var i = 0; i < this.routeList.length; i++) {
              if (this.route.url.includes(this.routeList[i])) {
                this.showFilter = i;
                break;
              }
            }

            this.route.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this8.isCollapsed = true;
                var url = event.url.split("?")[0];

                for (var _i = 0; _i < _this8.routeList.length; _i++) {
                  if (url.includes(_this8.routeList[_i])) {
                    _this8.showFilter = _i;

                    var categoryId = _this8.localService.getItem("category");

                    var vehicleId = _this8.localService.getItem("vehicle");

                    var driverId = _this8.localService.getItem("driver");

                    var exception = _this8.localService.getItem("exception");

                    if (categoryId && categoryId !== "all" || vehicleId && vehicleId !== "all" || driverId && driverId !== "all" || exception && exception !== "all" || _this8.dashBoardData["error"] == true) {
                      _this8.updatePageData();
                    }

                    break;
                  }
                }
              }
            });
          }
        }, {
          key: "rangeClicked",
          value: function rangeClicked(label) {// console.log('[rangeClicked] range is : ', label);
          }
        }, {
          key: "datesUpdated",
          value: function datesUpdated(range) {//  console.log('[datesUpdated] range is : ', range);
          }
        }, {
          key: "updatePageData",
          value: function updatePageData() {
            this.localService.setFilter();

            if (this.showFilter == 0) {
              this.resetToLastStateDashboard();
              this.getDashboardData(false);
            } else if (this.showFilter == 1) {
              this.resetToLastStateVehicle();
              this.getDashboardData(false, this.selectedVehicleCategory, this.selectedVehicle);
            } else if (this.showFilter == 2) {
              this.resetToLastStateTrip();
              this.getDashboardData(false, this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver);
            } else if (this.showFilter == 3) {
              this.resetToLastStateException();
              this.getDashboardData(false, this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.selectedException);
            } else if (this.showFilter == 4) {
              this.resetToLastStateMap();
              this.getDashboardData(false);
            }
          }
        }, {
          key: "getDashboardData",
          value: function getDashboardData(secondCall, categoryId, vehicleId, driverId, exception) {
            var _this9 = this;

            if (!secondCall) {
              this.isLoadingshimmer = true;
              this.dashBoardData = {};
              this.dashBoardPre = {};
            }

            var querryParams = this.createQuerryparams(categoryId, vehicleId, driverId, exception, secondCall);
            this.service.get("zego/dashboard/activity-count-v2?".concat(querryParams)).pipe().subscribe(function (response) {
              if (response.data) {
                if (!secondCall) {
                  _this9.dashBoardData = response.data;

                  _this9.getDashboardData(true, categoryId, vehicleId, driverId, exception);
                } else {
                  _this9.dashBoardPre = response.data;

                  _this9.calcChange();
                }
              }
            }, function (error) {
              _this9.totalBoxes = 0;

              if (!secondCall) {
                _this9.dashBoardData = {};
                _this9.isLoadingshimmer = false;
                _this9.dashBoardData["error"] = true;
              } else {
                _this9.dashBoardPre = {};

                _this9.localService.setdashboardData(_this9.dashBoardData);
              }
            });
          }
        }, {
          key: "calcChange",
          value: function calcChange() {
            this.dashBoardData["safeScoreChange"] = parseFloat(this.dashBoardPre.safe_score) !== 1001 && parseFloat(this.dashBoardPre.safe_score) !== 0 && parseFloat(this.dashBoardData.safe_score) !== 1001 ? (parseFloat(this.dashBoardData.safe_score) - parseFloat(this.dashBoardPre.safe_score)) / parseFloat(this.dashBoardPre.safe_score) * 100 : 0; // this.dashBoardData["driverChange"] = parseFloat(
            //   this.dashBoardPre.total_drivers
            // ) !== 1001 && parseFloat(
            //   this.dashBoardPre.total_drivers
            // ) !== 0 && parseFloat(
            //   this.dashBoardData.total_drivers
            // ) !== 1001
            //   ? ((parseFloat(this.dashBoardData.total_drivers) -
            //     parseFloat(this.dashBoardPre.total_drivers)) /
            //     parseFloat(this.dashBoardPre.total_drivers)) *
            //   100
            //   : 0;

            this.dashBoardData["tripChange"] = parseFloat(this.dashBoardPre.total_trips) !== 1001 && parseFloat(this.dashBoardPre.total_trips) !== 0 && parseFloat(this.dashBoardData.total_trips) !== 1001 ? (parseFloat(this.dashBoardData.total_trips) - parseFloat(this.dashBoardPre.total_trips)) / parseFloat(this.dashBoardPre.total_trips) * 100 : 0;
            this.dashBoardData["vehicleChange"] = parseFloat(this.dashBoardPre.total_vehicles) !== 1001 && parseFloat(this.dashBoardPre.total_vehicles) !== 0 && parseFloat(this.dashBoardData.total_vehicles) !== 1001 ? (parseFloat(this.dashBoardData.total_vehicles) - parseFloat(this.dashBoardPre.total_vehicles)) / parseFloat(this.dashBoardPre.total_vehicles) * 100 : 0;
            this.dashBoardData["exceptionChange"] = parseFloat(this.dashBoardPre.exception) !== 1001 && parseFloat(this.dashBoardPre.exception) !== 0 && parseFloat(this.dashBoardData.exception) !== 1001 ? (parseFloat(this.dashBoardData.exception) - parseFloat(this.dashBoardPre.exception)) / parseFloat(this.dashBoardPre.exception) * 100 : 0;
            this.dashBoardData["speedChange"] = parseFloat(this.dashBoardPre.speed_score) !== 1001 && parseFloat(this.dashBoardPre.speed_score) !== 0 && parseFloat(this.dashBoardData.speed_score) !== 1001 ? (parseFloat(this.dashBoardData.speed_score) - parseFloat(this.dashBoardPre.speed_score)) / parseFloat(this.dashBoardPre.speed_score) * 100 : 0;
            this.dashBoardData["idilingChange"] = parseFloat(this.dashBoardPre.idling_score) !== 1001 && parseFloat(this.dashBoardPre.idling_score) !== 0 && parseFloat(this.dashBoardData.idling_score) !== 1001 ? (parseFloat(this.dashBoardData.idling_score) - parseFloat(this.dashBoardPre.idling_score)) / parseFloat(this.dashBoardPre.idling_score) * 100 : 0;
            this.dashBoardData["accChange"] = parseFloat(this.dashBoardPre.acceleration_score) !== 1001 && parseFloat(this.dashBoardPre.acceleration_score) !== 0 && parseFloat(this.dashBoardData.acceleration_score) !== 1001 ? (parseFloat(this.dashBoardData.acceleration_score) - parseFloat(this.dashBoardPre.acceleration_score)) / parseFloat(this.dashBoardPre.acceleration_score) * 100 : 0;
            this.dashBoardData["brakingChange"] = parseFloat(this.dashBoardPre.breaking_score) !== 1001 && parseFloat(this.dashBoardPre.breaking_score) !== 0 && parseFloat(this.dashBoardData.breaking_score) !== 1001 ? (parseFloat(this.dashBoardData.breaking_score) - parseFloat(this.dashBoardPre.breaking_score)) / parseFloat(this.dashBoardPre.breaking_score) * 100 : 0;
            this.dashBoardData["cornerChange"] = parseFloat(this.dashBoardPre.cornering_score) !== 1001 && parseFloat(this.dashBoardPre.cornering_score) !== 0 && parseFloat(this.dashBoardData.cornering_score) !== 1001 ? (parseFloat(this.dashBoardData.cornering_score) - parseFloat(this.dashBoardPre.cornering_score)) / parseFloat(this.dashBoardPre.cornering_score) * 100 : 0;
            this.dashBoardData["distanceChange"] = parseFloat(this.dashBoardPre.total_distance) !== 1001 && parseFloat(this.dashBoardPre.total_distance) !== 0 && parseFloat(this.dashBoardData.total_distance) !== 1001 ? (parseFloat(this.dashBoardData.total_distance) - parseFloat(this.dashBoardPre.total_distance)) / parseFloat(this.dashBoardPre.total_distance) * 100 : 0;
            this.localService.setdashboardData(this.dashBoardData);
            this.totalBoxes = 5;

            if (Number(this.dashBoardData["safe_score"]) == 0) {
              this.totalBoxes -= 1;
            }

            if (Number(this.dashBoardData["total_trips"]) == 0) {
              this.totalBoxes -= 1;
            }

            if (Number(this.dashBoardData["total_distance"]) == 0) {
              this.totalBoxes -= 1;
            }

            if (Number(this.dashBoardData["total_vehicles"]) == 0) {
              this.totalBoxes -= 1;
            }

            if (Number(this.dashBoardData["exception"]) == 0) {
              this.totalBoxes -= 1;
            }

            this.isLoadingshimmer = false; // console.log(this.totalBoxes);
          }
        }, {
          key: "createQuerryparams",
          value: function createQuerryparams(categoryId, vehicleId, driverId, exception, secondCall) {
            var querryParams = "organisation=".concat(JSON.stringify(this.selectedOrgID));

            if (!secondCall) {
              var val = this.service.checkCustomDate(moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format("YYYY-MM-DD"));

              if (val == undefined) {
                querryParams = querryParams + "&custom_filter=true&filter_value=''";
              } else {
                if (categoryId && categoryId !== "all" || vehicleId && vehicleId !== "all" || driverId && driverId !== "all" || exception && exception !== "all") {
                  querryParams = querryParams + "&custom_filter=true&filter_value=''";
                } else {
                  querryParams = querryParams + "&custom_filter=false&filter_value=".concat(val);
                }
              }
            }

            if (categoryId && categoryId !== "all") {
              var arr = [categoryId];
              querryParams = querryParams + "&vehicle_category=".concat(JSON.stringify(arr));
            }

            if (vehicleId && vehicleId !== "all") {
              var _arr = [vehicleId];
              querryParams = querryParams + "&vehicle=".concat(JSON.stringify(_arr));
            }

            if (driverId && driverId !== "all") {
              var _arr2 = [driverId];
              querryParams = querryParams + "&driver=".concat(JSON.stringify(_arr2));
            }

            if (exception && exception !== "all") {
              var _arr3 = [exception];
              querryParams = querryParams + "&exception_type=".concat(exception);
            }

            if (!secondCall) {
              querryParams = querryParams + "&from_date=".concat(moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format("YYYY-MM-DD"));
              querryParams = querryParams + "&to_date=".concat(moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format("YYYY-MM-DD"));
            } else {
              var date = this.service.calcLastDate();
              querryParams = querryParams + "&from_date=".concat(date[0]);
              querryParams = querryParams + "&to_date=".concat(date[1]);
            }

            return querryParams;
          }
        }, {
          key: "changeState",
          value: function changeState() {
            this.isCollapsed = !this.isCollapsed;

            if (!this.isCollapsed) {
              if (this.showFilter == 0) {
                this.resetToLastStateDashboard();
              } else if (this.showFilter == 1) {
                this.resetToLastStateVehicle();
              } else if (this.showFilter == 2) {
                this.resetToLastStateTrip();
              } else if (this.showFilter == 3) {
                this.resetToLastStateException();
              } else if (this.showFilter == 4) {
                this.resetToLastStateMap();
              }
            }
          } // Dashboard data

        }, {
          key: "resetToLastStateDashboard",
          value: function resetToLastStateDashboard() {
            var date = this.localService.getItem("dateRange");

            if (date) {
              date = JSON.parse(date);
              this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.startDate),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.endDate)
              };
              this.selectedShow = this.selected;
            } else {
              this.selectedShow = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
              this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
            }
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.selectedShow = {
              startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
              endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
            };
            this.filterApply();
          }
        }, {
          key: "resetToLastState",
          value: function resetToLastState() {
            var date = this.localService.getItem("dateRange");

            if (date) {
              date = JSON.parse(date);
              this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.startDate),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.endDate)
              };
              this.selectedShow = this.selected;
            } else {
              this.selectedShow = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
              this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
            }
          }
        }, {
          key: "resetToLastStateVehicle",
          value: function resetToLastStateVehicle() {
            var category = this.localService.getItem("category");
            var vehicle = this.localService.getItem("vehicle");
            var date = this.localService.getItem("dateRange");

            if (date) {
              date = JSON.parse(date);
              this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.startDate),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.endDate)
              };
              this.selectedShow = this.selected;
            } else {
              this.selectedShow = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
              this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
            }

            category && category !== "all" ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = "all";
            vehicle && vehicle !== "all" ? this.selectedVehicle = JSON.parse(vehicle) : this.selectedVehicle = "all";
          }
        }, {
          key: "resetFilterVehicle",
          value: function resetFilterVehicle() {
            this.selectedVehicleCategory = "all";
            this.selectedVehicle = "all";
            this.selectedShow = {
              startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
              endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
            };
            this.filterApply();
          } // trip data

        }, {
          key: "resetToLastStateTrip",
          value: function resetToLastStateTrip() {
            var category = this.localService.getItem("category");
            var vehicle = this.localService.getItem("vehicle");
            var driver = this.localService.getItem("driver");
            var date = this.localService.getItem("dateRange");

            if (date) {
              date = JSON.parse(date);
              this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.startDate),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.endDate)
              };
              this.selectedShow = this.selected;
            } else {
              this.selectedShow = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
              this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
            }

            category && category !== "all" ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = "all";
            vehicle && vehicle !== "all" ? this.selectedVehicle = JSON.parse(vehicle) : this.selectedVehicle = "all";
            driver && driver !== "all" ? this.selectedDriver = JSON.parse(driver) : this.selectedDriver = "all";
          }
        }, {
          key: "resetFilterTrip",
          value: function resetFilterTrip() {
            this.selectedVehicleCategory = "all";
            this.selectedDriver = "all";
            this.selectedVehicle = "all";
            this.selectedShow = {
              startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
              endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
            };
            this.filterApply();
          } // exception data

        }, {
          key: "resetToLastStateException",
          value: function resetToLastStateException() {
            var category = this.localService.getItem("category");
            var vehicle = this.localService.getItem("vehicle");
            var driver = this.localService.getItem("driver");
            var date = this.localService.getItem("dateRange");
            var exception = this.localService.getItem("exception");

            if (date) {
              date = JSON.parse(date);
              this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.startDate),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__(date.endDate)
              };
              this.selectedShow = this.selected;
            } else {
              this.selectedShow = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
              this.selected = {
                startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
                endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
              };
            }

            category && category !== "all" ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = "all";
            vehicle && vehicle !== "all" ? this.selectedVehicle = JSON.parse(vehicle) : this.selectedVehicle = "all";
            driver && driver !== "all" ? this.selectedDriver = JSON.parse(driver) : this.selectedDriver = "all";
            exception && exception !== "all" ? this.selectedException = exception : this.selectedException = "all";
          }
        }, {
          key: "resetFilterException",
          value: function resetFilterException() {
            this.selectedVehicleCategory = "all";
            this.selectedDriver = "all";
            this.selectedVehicle = "all";
            this.selectedException = "all";
            this.selectedShow = {
              startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").startOf("month").set("hours", 0).set("minutes", 0),
              endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, "month").endOf("month").set("hours", 23).set("minutes", 59)
            };
            this.filterApply();
          } // Map data

        }, {
          key: "resetToLastStateMap",
          value: function resetToLastStateMap() {
            var category = this.localService.getItem("mapCategory");
            var vehicle = this.localService.getItem("mapVehicle");
            category && category !== "all" ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = "all";
            vehicle && vehicle !== "all" ? this.selectedVehicle = vehicle : this.selectedVehicle = "all";
          }
        }, {
          key: "resetFilterMap",
          value: function resetFilterMap() {
            this.selectedVehicleCategory = "all";
            this.selectedVehicle = "all";
            this.filterApply();
          }
        }, {
          key: "filterApply",
          value: function filterApply() {
            if (this.showFilter == 4) {
              this.localService.setItem("mapCategory", this.selectedVehicleCategory);
              this.localService.setItem("mapVehicle", this.selectedVehicle);
            } else {
              this.localService.setItem("category", this.selectedVehicleCategory);
              this.localService.setItem("vehicle", this.selectedVehicle);
            }

            this.localService.setItem("driver", this.selectedDriver);
            this.localService.setItem("exception", this.selectedException);
            this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
            this.selected = this.selectedShow;
            this.changeState();
            this.updatePageData();
          }
        }]);

        return TopBoxComponent;
      }();

      TopBoxComponent.??fac = function TopBoxComponent_Factory(t) {
        return new (t || TopBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      TopBoxComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TopBoxComponent,
        selectors: [["app-top-box"]],
        decls: 21,
        vars: 9,
        consts: [[1, "dashboardBoxWithFilter"], ["class", "dashboardBox", 4, "ngIf"], ["aria-controls", "collapseExample", 1, "filterBtnBackGray", "cursor", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M19 22V11", "stroke", "#001E50", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M19 7V2", "stroke", "#001E50", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22V17", "stroke", "#001E50", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 13V2", "stroke", "#001E50", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 22V11", "stroke", "#001E50", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 7V2", "stroke", "#001E50", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 11H7", "stroke", "#001E50", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17 11H21", "stroke", "#001E50", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10 13H14", "stroke", "#001E50", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], ["class", "filterBody", 4, "ngIf"], [1, "dashboardBox"], ["class", "box safeDriving", 3, "ngStyle", 4, "ngIf"], [3, "shape", "width", 4, "ngIf"], ["class", "box trips", 3, "ngStyle", 4, "ngIf"], ["class", "box kiloMeter", 3, "ngStyle", 4, "ngIf"], ["class", "box vehicles", 3, "ngStyle", 4, "ngIf"], [1, "box", "safeDriving", 3, "ngStyle"], [1, "title"], [1, "valueSec"], [1, "value"], [4, "ngIf", "ngIfElse"], ["elseTemplate11", ""], [1, "infoCircle"], ["matTooltipPosition", "below", "width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "matTooltip"], ["d", "M9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5ZM9.5625 12C9.5625 12.3075 9.3075 12.5625 9 12.5625C8.6925 12.5625 8.4375 12.3075 8.4375 12L8.4375 8.25C8.4375 7.9425 8.6925 7.6875 9 7.6875C9.3075 7.6875 9.5625 7.9425 9.5625 8.25L9.5625 12ZM8.31 5.715C8.3475 5.6175 8.4 5.5425 8.4675 5.4675C8.5425 5.4 8.625 5.3475 8.715 5.31C8.805 5.2725 8.9025 5.25 9 5.25C9.0975 5.25 9.195 5.2725 9.285 5.31C9.375 5.3475 9.4575 5.4 9.5325 5.4675C9.6 5.5425 9.6525 5.6175 9.69 5.715C9.7275 5.805 9.75 5.9025 9.75 6C9.75 6.0975 9.7275 6.195 9.69 6.285C9.6525 6.375 9.6 6.4575 9.5325 6.5325C9.4575 6.6 9.375 6.6525 9.285 6.69C9.105 6.765 8.895 6.765 8.715 6.69C8.625 6.6525 8.5425 6.6 8.4675 6.5325C8.4 6.4575 8.3475 6.375 8.31 6.285C8.2725 6.195 8.25 6.0975 8.25 6C8.25 5.9025 8.2725 5.805 8.31 5.715Z", "fill", "white"], [1, "valueRight", "danger"], ["src", "assets/images/arrowdown.png"], [1, "valueRight", "success"], ["src", "assets/images/arrowup.png", 4, "ngIf"], ["src", "assets/images/arrowup.png"], [3, "shape", "width"], [1, "box", "trips", 3, "ngStyle"], ["elseTemplate13", ""], [1, "box", "kiloMeter", 3, "ngStyle"], ["elseTemplate21", ""], [1, "box", "vehicles", 3, "ngStyle"], ["elseTemplate14", ""], ["elseTemplate12", ""], [1, "d-flex", "w-100", "justify-content-center", "align-items-center"], ["src", "../../../../assets/images/zego/refresh (1).png", "alt", "", 1, "cursor", 3, "click"], [1, "filterBody"], [1, "filterBodyTitle"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "mr-2"], [1, "mb-3"], ["d", "M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.64 12.81L13.02 8.43H10.59C10.18 8.43 9.84 8.09 9.84 7.68C9.84 7.27 10.18 6.93 10.59 6.93H14.83C14.93 6.93 15.02 6.95 15.12 6.99C15.3 7.07 15.45 7.21 15.53 7.4C15.57 7.49 15.59 7.59 15.59 7.69V11.93C15.59 12.34 15.25 12.68 14.84 12.68C14.43 12.68 14.09 12.34 14.09 11.93V9.5L9.7 13.87C9.55 14.02 9.36 14.09 9.17 14.09C8.98 14.09 8.79 14.02 8.64 13.87C8.35 13.58 8.35 13.1 8.64 12.81ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z", "fill", "#C5CDD4"], [1, "profileBox"], ["appearance", "outline", 1, "ngx-daterangepicker-action-left", "fields", "fileld50"], ["matInput", "", "ngxDaterangepickerMd", "", "readonly", "", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ranges", "showClearButton", "showCancel", "linkedCalendars", "isTooltipDate", "isInvalidDate", "locale", "keepCalendarOpeningWithRange", "showRangeLabelOnInput", "maxDate", "ngModelChange", "rangeClicked", "datesUpdated"], [1, "calIconRight"], ["src", "assets/images/calendar.svg"], [1, "fields", "fileld50"], [1, "d-flex", "justify-content-end"], ["mat-button", "", 1, "filterBtn", "resetBtn", 3, "click"], ["mat-button", "", 1, "filterBtn", "applyBtn", 3, "click"], [3, "click"], ["src", "assets/images/close-circle.svg"], ["appearance", "outline", 1, "fields", "fileld33"], ["panelClass", "customSelect", 3, "ngModel", "ngModelOptions", "disableOptionCentering", "placeholder", "ngModelChange"], [1, "searchSelect", "border-bottom"], ["type", "text", 1, "searchDropdown", 3, "placeholder", "ngModel", "ngModelChange"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.58973 9.59067C9.76496 9.41543 10.0491 9.41543 10.2243 9.59067L12.7013 12.0677C12.8765 12.2429 12.8765 12.527 12.7013 12.7022C12.526 12.8775 12.2419 12.8775 12.0667 12.7022L9.58973 10.2253C9.4145 10.05 9.4145 9.7659 9.58973 9.59067Z", "fill", "#848588"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.46094 2.06443C4.03226 2.06443 2.06344 4.03328 2.06344 6.46198C2.06344 8.89069 4.03226 10.8595 6.46094 10.8595C8.88961 10.8595 10.8584 8.89069 10.8584 6.46198C10.8584 4.03328 8.88961 2.06443 6.46094 2.06443ZM1.16602 6.46198C1.16602 3.53764 3.53663 1.16699 6.46094 1.16699C9.38524 1.16699 11.7559 3.53764 11.7559 6.46198C11.7559 9.38633 9.38524 11.757 6.46094 11.757C3.53663 11.757 1.16602 9.38633 1.16602 6.46198Z", "fill", "#848588"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "fields", "fileld33", "ngx-daterangepicker-action"], [1, "d-flex", "flex-wrap", "justify-content-end", "mt-2"], ["appearance", "outline", 1, "fields", "ngx-daterangepicker-action", "fileld33"], ["appearance", "outline", 1, "fields", "fileld50"], ["panelClass", "customSelect", 3, "ngModel", "ngModelOptions", "disableOptionCentering", "placeholder", "ngModelChange", "selectionChange"], ["appearance", "outline", 1, "fields", "fileld50", "ngx-daterangepicker-action-left"], ["panelClass", "customSelect", 3, "ngModel", "ngModelOptions", "disableOptionCentering", "ngModelChange"]],
        template: function TopBoxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TopBoxComponent_div_1_Template, 11, 10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TopBoxComponent_div_2_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBoxComponent_Template_div_click_3_listener() {
              return ctx.changeState();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "path", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "path", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "path", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "path", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngbCollapseChange", function TopBoxComponent_Template_div_ngbCollapseChange_14_listener($event) {
              return ctx.isCollapsed = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, TopBoxComponent_div_16_Template, 26, 28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, TopBoxComponent_div_17_Template, 60, 75, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, TopBoxComponent_div_18_Template, 58, 75, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, TopBoxComponent_div_19_Template, 67, 86, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, TopBoxComponent_div_20_Template, 51, 53, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.totalBoxes != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.totalBoxes == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbCollapse", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showFilter == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showFilter == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showFilter == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showFilter == 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showFilter == 4);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_11__["??a"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_14__["DaterangepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_20__["FilterPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtYm94LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TopBoxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-top-box",
            templateUrl: "./top-box.component.html",
            styleUrls: ["./top-box.component.scss"]
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Tr6M":
    /*!**************************************!*\
      !*** ./src/app/config/app-config.ts ***!
      \**************************************/

    /*! exports provided: AppConfig */

    /***/
    function Tr6M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConfig", function () {
        return AppConfig;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__); // Define application level configuration


      var AppConfig = {
        dayTimeStart: "6:00",
        dayTimeEnd: "17:00",
        momentRange: {
          Yesterday: [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days')],
          'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__()],
          'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__()],
          'Last 1 Month': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')],
          'Last 3 Months': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(3, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')],
          'Last 12 Months': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(12, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')]
        },
        netherlandLat: 52.1326,
        netherlandLong: 5.2913,
        mapStyle: [{
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "stylers": [{
            "visibility": "off"
          }]
        }],
        gaugeMin: 0,
        gaugeMax: 10,
        gaugeThreshold: {
          '0': {
            color: 'red'
          },
          '2.5': {
            color: 'orange'
          },
          '5': {
            color: '#FFEA6C'
          },
          '7.5': {
            color: '#00CBA0'
          }
        },
        roleBasedAccess: [{
          tab: "Analytics",
          value: '1'
        }, {
          tab: "Dashboard",
          value: '2'
        }, {
          tab: "Vehicle",
          value: '3'
        }, {
          tab: "Trips",
          value: '4'
        }, {
          tab: "Drivers",
          value: '5'
        }, {
          tab: "Exceptions",
          value: '6'
        }, {
          tab: "Map View",
          value: '7'
        }, {
          tab: "Mileage",
          value: '8'
        }, {
          tab: "Score Settings",
          value: '9'
        }, {
          tab: "Score Comparision",
          value: '10'
        }, {
          tab: "Groups",
          value: '11'
        }, {
          tab: "Export",
          value: '12'
        }, {
          tab: "Driver Queries",
          value: '13'
        }, {
          tab: "Set Exception Color",
          value: '14'
        }],
        changelang: function changelang(lang) {
          if (lang == 'en') {
            return {
              customLabel: 'Custom',
              apply: 'Set Date',
              cancel: 'Cancel',
              range: {
                Yesterday: [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days')],
                'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__()],
                'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__()],
                'Last 1 Month': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')],
                'Last 3 Months': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(3, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')],
                'Last 12 Months': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(12, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')]
              },
              dayWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
              month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            };
          } else {
            return {
              customLabel: 'Zelf een periode selecteren',
              apply: 'Selecteer periode',
              cancel: 'Annuleer',
              range: {
                Gisteren: [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days')],
                'Afgelopen 7 dagen': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__()],
                'Afgelopen 30 dagen ': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_0__()],
                'Afgelopen maand': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')],
                'Afgelopen 3 maanden': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(3, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')],
                'Afgelopen 12 maanden': [moment__WEBPACK_IMPORTED_MODULE_0__().subtract(12, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'month').endOf('month')]
              },
              dayWeek: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
              month: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
            };
          }
        }
      };
      /***/
    },

    /***/
    "YhS8":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/ngx-daterangepicker-material/__ivy_ngcc__/fesm2015/ngx-daterangepicker-material.js ***!
      \*********************************************************************************************************/

    /*! exports provided: DaterangepickerComponent, DaterangepickerDirective, DefaultLocaleConfig, LOCALE_CONFIG, LocaleService, NgxDaterangepickerMd */

    /***/
    function YhS8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DaterangepickerComponent", function () {
        return DaterangepickerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DaterangepickerDirective", function () {
        return DaterangepickerDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLocaleConfig", function () {
        return DefaultLocaleConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOCALE_CONFIG", function () {
        return LOCALE_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocaleService", function () {
        return LocaleService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDaterangepickerMd", function () {
        return NgxDaterangepickerMd;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "0EnM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

      var _c0 = ["pickerContainer"];

      var _c1 = function _c1(a0) {
        return {
          "active": a0
        };
      };

      function DaterangepickerComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_li_4_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r7);

            var range_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r6.clickRange($event, range_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var range_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r1.disableRange(range_r5))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](3, _c1, range_r5 === ctx_r1.chosenRange));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](range_r5);
        }
      }

      function DaterangepickerComponent_div_5_table_2_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "th");
        }
      }

      function DaterangepickerComponent_div_5_table_2_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_div_5_table_2_ng_container_4_Template_th_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r20.clickPrev(ctx_r20.sideEnum.left);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }
      }

      function DaterangepickerComponent_div_5_table_2_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }
      }

      function DaterangepickerComponent_div_5_table_2_ng_container_7_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var m_r24 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r22.calendarVariables.left.dropdowns.inMinYear && m_r24 < ctx_r22.calendarVariables.left.minDate.month() || ctx_r22.calendarVariables.left.dropdowns.inMaxYear && m_r24 > ctx_r22.calendarVariables.left.maxDate.month())("value", m_r24)("selected", ctx_r22.calendarVariables.left.dropdowns.currentMonth == m_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r22.locale.monthNames[m_r24], " ");
        }
      }

      function DaterangepickerComponent_div_5_table_2_ng_container_7_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var y_r25 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", y_r25 === ctx_r23.calendarVariables.left.dropdowns.currentYear);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", y_r25, " ");
        }
      }

      function DaterangepickerComponent_div_5_table_2_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function DaterangepickerComponent_div_5_table_2_ng_container_7_Template_select_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r26.monthChanged($event, ctx_r26.sideEnum.left);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, DaterangepickerComponent_div_5_table_2_ng_container_7_option_4_Template, 2, 4, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function DaterangepickerComponent_div_5_table_2_ng_container_7_Template_select_change_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r28.yearChanged($event, ctx_r28.sideEnum.left);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, DaterangepickerComponent_div_5_table_2_ng_container_7_option_8_Template, 2, 2, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r13.locale.monthNames[ctx_r13.calendarVariables == null ? null : ctx_r13.calendarVariables.left == null ? null : ctx_r13.calendarVariables.left.calendar[1][1].month()], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r13.calendarVariables.left.dropdowns.monthArrays);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r13.calendarVariables == null ? null : ctx_r13.calendarVariables.left == null ? null : ctx_r13.calendarVariables.left.calendar[1][1].format(" YYYY"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r13.calendarVariables.left.dropdowns.yearArrays);
        }
      }

      function DaterangepickerComponent_div_5_table_2_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate2"](" ", ctx_r14.locale.monthNames[ctx_r14.calendarVariables == null ? null : ctx_r14.calendarVariables.left == null ? null : ctx_r14.calendarVariables.left.calendar[1][1].month()], " ", ctx_r14.calendarVariables == null ? null : ctx_r14.calendarVariables.left == null ? null : ctx_r14.calendarVariables.left.calendar[1][1].format(" YYYY"), " ");
        }
      }

      function DaterangepickerComponent_div_5_table_2_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_div_5_table_2_ng_container_9_Template_th_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r29.clickNext(ctx_r29.sideEnum.left);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }
      }

      function DaterangepickerComponent_div_5_table_2_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }
      }

      function DaterangepickerComponent_div_5_table_2_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r17.locale.weekLabel);
        }
      }

      function DaterangepickerComponent_div_5_table_2_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var dayofweek_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](dayofweek_r31);
        }
      }

      function DaterangepickerComponent_div_5_table_2_tr_15_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r33.calendarVariables.left.calendar[row_r32][0].week());
        }
      }

      function DaterangepickerComponent_div_5_table_2_tr_15_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r34.calendarVariables.left.calendar[row_r32][0].isoWeek());
        }
      }

      function DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template_td_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r40);

            var col_r38 = ctx.$implicit;

            var row_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r39.clickDate($event, ctx_r39.sideEnum.left, row_r32, col_r38);
          })("mouseenter", function DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template_td_mouseenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r40);

            var col_r38 = ctx.$implicit;

            var row_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r42.hoverDate($event, ctx_r42.sideEnum.left, row_r32, col_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var col_r38 = ctx.$implicit;

          var row_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classMap"](ctx_r35.calendarVariables.left.classes[row_r32][col_r38]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r35.calendarVariables.left.calendar[row_r32][col_r38].date());
        }
      }

      function DaterangepickerComponent_div_5_table_2_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, DaterangepickerComponent_div_5_table_2_tr_15_td_1_Template, 3, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, DaterangepickerComponent_div_5_table_2_tr_15_td_2_Template, 3, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template, 3, 3, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r32 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classMap"](ctx_r19.calendarVariables.left.classes[row_r32].classList);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r19.showWeekNumbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r19.showISOWeekNumbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r19.calendarVariables.left.calCols);
        }
      }

      function DaterangepickerComponent_div_5_table_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, DaterangepickerComponent_div_5_table_2_th_3_Template, 1, 0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, DaterangepickerComponent_div_5_table_2_ng_container_4_Template, 2, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, DaterangepickerComponent_div_5_table_2_ng_container_5_Template, 2, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, DaterangepickerComponent_div_5_table_2_ng_container_7_Template, 9, 4, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, DaterangepickerComponent_div_5_table_2_ng_container_8_Template, 2, 2, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, DaterangepickerComponent_div_5_table_2_ng_container_9_Template, 2, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, DaterangepickerComponent_div_5_table_2_ng_container_10_Template, 2, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, DaterangepickerComponent_div_5_table_2_th_12_Template, 3, 1, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, DaterangepickerComponent_div_5_table_2_th_13_Template, 3, 1, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "tbody", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, DaterangepickerComponent_div_5_table_2_tr_15_Template, 4, 5, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r8.showWeekNumbers || ctx_r8.showISOWeekNumbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r8.calendarVariables.left.minDate || ctx_r8.calendarVariables.left.minDate.isBefore(ctx_r8.calendarVariables.left.calendar.firstDay) && (!ctx_r8.linkedCalendars || true));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !(!ctx_r8.calendarVariables.left.minDate || ctx_r8.calendarVariables.left.minDate.isBefore(ctx_r8.calendarVariables.left.calendar.firstDay) && (!ctx_r8.linkedCalendars || true)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r8.showDropdowns && ctx_r8.calendarVariables.left.dropdowns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r8.showDropdowns || !ctx_r8.calendarVariables.left.dropdowns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (!ctx_r8.calendarVariables.left.maxDate || ctx_r8.calendarVariables.left.maxDate.isAfter(ctx_r8.calendarVariables.left.calendar.lastDay)) && (!ctx_r8.linkedCalendars || ctx_r8.singleDatePicker));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !((!ctx_r8.calendarVariables.left.maxDate || ctx_r8.calendarVariables.left.maxDate.isAfter(ctx_r8.calendarVariables.left.calendar.lastDay)) && (!ctx_r8.linkedCalendars || ctx_r8.singleDatePicker)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r8.showWeekNumbers || ctx_r8.showISOWeekNumbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r8.locale.daysOfWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r8.calendarVariables.left.calRows);
        }
      }

      function DaterangepickerComponent_div_5_div_3_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r49 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", i_r49)("disabled", ctx_r45.timepickerVariables.left.disabledHours.indexOf(i_r49) > -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](i_r49);
        }
      }

      function DaterangepickerComponent_div_5_div_3_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r50 = ctx.$implicit;
          var index_r51 = ctx.index;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", i_r50)("disabled", ctx_r46.timepickerVariables.left.disabledMinutes.indexOf(i_r50) > -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r46.timepickerVariables.left.minutesLabel[index_r51]);
        }
      }

      function DaterangepickerComponent_div_5_div_3_select_10_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r53 = ctx.$implicit;
          var index_r54 = ctx.index;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", i_r53)("disabled", ctx_r52.timepickerVariables.left.disabledSeconds.indexOf(i_r53) > -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r52.timepickerVariables.left.secondsLabel[index_r54]);
        }
      }

      function DaterangepickerComponent_div_5_div_3_select_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_10_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r55.timepickerVariables.left.selectedSecond = $event;
          })("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_10_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r56);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r57.timeChanged($event, ctx_r57.sideEnum.left);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, DaterangepickerComponent_div_5_div_3_select_10_option_1_Template, 2, 3, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx_r47.startDate)("ngModel", ctx_r47.timepickerVariables.left.selectedSecond);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r47.timepickerVariables.left.seconds);
        }
      }

      function DaterangepickerComponent_div_5_div_3_select_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_14_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r58.timepickerVariables.left.ampmModel = $event;
          })("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_14_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r59);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r60.timeChanged($event, ctx_r60.sideEnum.left);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx_r48.timepickerVariables.left.ampmModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r48.timepickerVariables.left.amDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r48.timepickerVariables.left.pmDisabled);
        }
      }

      function DaterangepickerComponent_div_5_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r61.timepickerVariables.left.selectedHour = $event;
          })("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r62);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r63.timeChanged($event, ctx_r63.sideEnum.left);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, DaterangepickerComponent_div_5_div_3_option_3_Template, 2, 3, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r62);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r64.timepickerVariables.left.selectedMinute = $event;
          })("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r62);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r65.timeChanged($event, ctx_r65.sideEnum.left);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, DaterangepickerComponent_div_5_div_3_option_6_Template, 2, 3, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, DaterangepickerComponent_div_5_div_3_select_10_Template, 2, 3, "select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, DaterangepickerComponent_div_5_div_3_select_14_Template, 5, 3, "select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx_r9.startDate)("ngModel", ctx_r9.timepickerVariables.left.selectedHour);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r9.timepickerVariables.left.hours);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx_r9.startDate)("ngModel", ctx_r9.timepickerVariables.left.selectedMinute);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r9.timepickerVariables.left.minutes);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r9.timePickerSeconds);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r9.timePicker24Hour);
        }
      }

      var _c2 = function _c2(a0, a1) {
        return {
          right: a0,
          left: a1
        };
      };

      function DaterangepickerComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, DaterangepickerComponent_div_5_table_2_Template, 16, 10, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, DaterangepickerComponent_div_5_div_3_Template, 17, 8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](3, _c2, ctx_r2.singleDatePicker, !ctx_r2.singleDatePicker));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.calendarVariables);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.timePicker);
        }
      }

      function DaterangepickerComponent_div_6_table_2_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "th");
        }
      }

      function DaterangepickerComponent_div_6_table_2_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_div_6_table_2_ng_container_4_Template_th_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r78.clickPrev(ctx_r78.sideEnum.right);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }
      }

      function DaterangepickerComponent_div_6_table_2_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }
      }

      function DaterangepickerComponent_div_6_table_2_ng_container_7_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var m_r82 = ctx.$implicit;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r80.calendarVariables.right.dropdowns.inMinYear && ctx_r80.calendarVariables.right.minDate && m_r82 < ctx_r80.calendarVariables.right.minDate.month() || ctx_r80.calendarVariables.right.dropdowns.inMaxYear && ctx_r80.calendarVariables.right.maxDate && m_r82 > ctx_r80.calendarVariables.right.maxDate.month())("value", m_r82)("selected", ctx_r80.calendarVariables.right.dropdowns.currentMonth == m_r82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r80.locale.monthNames[m_r82], " ");
        }
      }

      function DaterangepickerComponent_div_6_table_2_ng_container_7_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var y_r83 = ctx.$implicit;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", y_r83 === ctx_r81.calendarVariables.right.dropdowns.currentYear);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", y_r83, " ");
        }
      }

      function DaterangepickerComponent_div_6_table_2_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function DaterangepickerComponent_div_6_table_2_ng_container_7_Template_select_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r85);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r84.monthChanged($event, ctx_r84.sideEnum.right);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, DaterangepickerComponent_div_6_table_2_ng_container_7_option_4_Template, 2, 4, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function DaterangepickerComponent_div_6_table_2_ng_container_7_Template_select_change_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r85);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r86.yearChanged($event, ctx_r86.sideEnum.right);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, DaterangepickerComponent_div_6_table_2_ng_container_7_option_8_Template, 2, 2, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r71.locale.monthNames[ctx_r71.calendarVariables == null ? null : ctx_r71.calendarVariables.right == null ? null : ctx_r71.calendarVariables.right.calendar[1][1].month()], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r71.calendarVariables.right.dropdowns.monthArrays);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r71.calendarVariables == null ? null : ctx_r71.calendarVariables.right == null ? null : ctx_r71.calendarVariables.right.calendar[1][1].format(" YYYY"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r71.calendarVariables.right.dropdowns.yearArrays);
        }
      }

      function DaterangepickerComponent_div_6_table_2_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate2"](" ", ctx_r72.locale.monthNames[ctx_r72.calendarVariables == null ? null : ctx_r72.calendarVariables.right == null ? null : ctx_r72.calendarVariables.right.calendar[1][1].month()], " ", ctx_r72.calendarVariables == null ? null : ctx_r72.calendarVariables.right == null ? null : ctx_r72.calendarVariables.right.calendar[1][1].format(" YYYY"), " ");
        }
      }

      function DaterangepickerComponent_div_6_table_2_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_div_6_table_2_ng_container_9_Template_th_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r88);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r87.clickNext(ctx_r87.sideEnum.right);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }
      }

      function DaterangepickerComponent_div_6_table_2_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }
      }

      function DaterangepickerComponent_div_6_table_2_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r75.locale.weekLabel);
        }
      }

      function DaterangepickerComponent_div_6_table_2_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var dayofweek_r89 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](dayofweek_r89);
        }
      }

      function DaterangepickerComponent_div_6_table_2_tr_15_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r91.calendarVariables.right.calendar[row_r90][0].week());
        }
      }

      function DaterangepickerComponent_div_6_table_2_tr_15_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r92.calendarVariables.right.calendar[row_r90][0].isoWeek());
        }
      }

      function DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template_td_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r98);

            var col_r96 = ctx.$implicit;

            var row_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r97.clickDate($event, ctx_r97.sideEnum.right, row_r90, col_r96);
          })("mouseenter", function DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template_td_mouseenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r98);

            var col_r96 = ctx.$implicit;

            var row_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r100.hoverDate($event, ctx_r100.sideEnum.right, row_r90, col_r96);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var col_r96 = ctx.$implicit;

          var row_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classMap"](ctx_r93.calendarVariables.right.classes[row_r90][col_r96]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r93.calendarVariables.right.calendar[row_r90][col_r96].date());
        }
      }

      function DaterangepickerComponent_div_6_table_2_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, DaterangepickerComponent_div_6_table_2_tr_15_td_1_Template, 3, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, DaterangepickerComponent_div_6_table_2_tr_15_td_2_Template, 3, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template, 3, 3, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r90 = ctx.$implicit;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classMap"](ctx_r77.calendarVariables.right.classes[row_r90].classList);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r77.showWeekNumbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r77.showISOWeekNumbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r77.calendarVariables.right.calCols);
        }
      }

      function DaterangepickerComponent_div_6_table_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, DaterangepickerComponent_div_6_table_2_th_3_Template, 1, 0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, DaterangepickerComponent_div_6_table_2_ng_container_4_Template, 2, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, DaterangepickerComponent_div_6_table_2_ng_container_5_Template, 2, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, DaterangepickerComponent_div_6_table_2_ng_container_7_Template, 9, 4, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, DaterangepickerComponent_div_6_table_2_ng_container_8_Template, 2, 2, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, DaterangepickerComponent_div_6_table_2_ng_container_9_Template, 2, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, DaterangepickerComponent_div_6_table_2_ng_container_10_Template, 2, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, DaterangepickerComponent_div_6_table_2_th_12_Template, 3, 1, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, DaterangepickerComponent_div_6_table_2_th_13_Template, 3, 1, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, DaterangepickerComponent_div_6_table_2_tr_15_Template, 4, 5, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r66.showWeekNumbers || ctx_r66.showISOWeekNumbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (!ctx_r66.calendarVariables.right.minDate || ctx_r66.calendarVariables.right.minDate.isBefore(ctx_r66.calendarVariables.right.calendar.firstDay)) && !ctx_r66.linkedCalendars);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !((!ctx_r66.calendarVariables.right.minDate || ctx_r66.calendarVariables.right.minDate.isBefore(ctx_r66.calendarVariables.right.calendar.firstDay)) && !ctx_r66.linkedCalendars));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r66.showDropdowns && ctx_r66.calendarVariables.right.dropdowns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r66.showDropdowns || !ctx_r66.calendarVariables.right.dropdowns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r66.calendarVariables.right.maxDate || ctx_r66.calendarVariables.right.maxDate.isAfter(ctx_r66.calendarVariables.right.calendar.lastDay) && (!ctx_r66.linkedCalendars || ctx_r66.singleDatePicker || true));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !(!ctx_r66.calendarVariables.right.maxDate || ctx_r66.calendarVariables.right.maxDate.isAfter(ctx_r66.calendarVariables.right.calendar.lastDay) && (!ctx_r66.linkedCalendars || ctx_r66.singleDatePicker || true)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r66.showWeekNumbers || ctx_r66.showISOWeekNumbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r66.locale.daysOfWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r66.calendarVariables.right.calRows);
        }
      }

      function DaterangepickerComponent_div_6_div_3_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r107 = ctx.$implicit;

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", i_r107)("disabled", ctx_r103.timepickerVariables.right.disabledHours.indexOf(i_r107) > -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](i_r107);
        }
      }

      function DaterangepickerComponent_div_6_div_3_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r108 = ctx.$implicit;
          var index_r109 = ctx.index;

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", i_r108)("disabled", ctx_r104.timepickerVariables.right.disabledMinutes.indexOf(i_r108) > -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r104.timepickerVariables.right.minutesLabel[index_r109]);
        }
      }

      function DaterangepickerComponent_div_6_div_3_select_12_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r111 = ctx.$implicit;
          var index_r112 = ctx.index;

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", i_r111)("disabled", ctx_r110.timepickerVariables.right.disabledSeconds.indexOf(i_r111) > -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r110.timepickerVariables.right.secondsLabel[index_r112]);
        }
      }

      function DaterangepickerComponent_div_6_div_3_select_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_12_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r114);

            var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r113.timepickerVariables.right.selectedSecond = $event;
          })("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_12_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r114);

            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r115.timeChanged($event, ctx_r115.sideEnum.right);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, DaterangepickerComponent_div_6_div_3_select_12_option_1_Template, 2, 3, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx_r105.startDate)("ngModel", ctx_r105.timepickerVariables.right.selectedSecond);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r105.timepickerVariables.right.seconds);
        }
      }

      function DaterangepickerComponent_div_6_div_3_select_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_16_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r117);

            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r116.timepickerVariables.right.ampmModel = $event;
          })("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_16_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r117);

            var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r118.timeChanged($event, ctx_r118.sideEnum.right);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx_r106.timepickerVariables.right.ampmModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r106.timepickerVariables.right.amDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r106.timepickerVariables.right.pmDisabled);
        }
      }

      function DaterangepickerComponent_div_6_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "select", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r120);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r119.timepickerVariables.right.selectedHour = $event;
          })("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r120);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r121.timeChanged($event, ctx_r121.sideEnum.right);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, DaterangepickerComponent_div_6_div_3_option_3_Template, 2, 3, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r120);

            var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r122.timepickerVariables.right.selectedMinute = $event;
          })("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r120);

            var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r123.timeChanged($event, ctx_r123.sideEnum.right);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, DaterangepickerComponent_div_6_div_3_option_8_Template, 2, 3, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, DaterangepickerComponent_div_6_div_3_select_12_Template, 2, 3, "select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, DaterangepickerComponent_div_6_div_3_select_16_Template, 5, 3, "select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx_r67.startDate)("ngModel", ctx_r67.timepickerVariables.right.selectedHour);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r67.timepickerVariables.right.hours);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx_r67.startDate)("ngModel", ctx_r67.timepickerVariables.right.selectedMinute);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r67.timepickerVariables.right.minutes);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r67.timePickerSeconds);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r67.timePicker24Hour);
        }
      }

      function DaterangepickerComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, DaterangepickerComponent_div_6_table_2_Template, 16, 10, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, DaterangepickerComponent_div_6_div_3_Template, 19, 8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.calendarVariables);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.timePicker);
        }
      }

      function DaterangepickerComponent_div_7_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_div_7_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r127);

            var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r126.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "svg", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "path", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", ctx_r124.locale.clearLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r124.locale.clearLabel, " ");
        }
      }

      function DaterangepickerComponent_div_7_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_div_7_button_3_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r129);

            var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r128.clickCancel($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r125.locale.cancelLabel);
        }
      }

      function DaterangepickerComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, DaterangepickerComponent_div_7_button_2_Template, 4, 2, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, DaterangepickerComponent_div_7_button_3_Template, 2, 1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_div_7_Template_button_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r131);

            var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r130.clickApply($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r4.showClearButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r4.showCancel);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r4.applyBtn.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r4.locale.applyLabel);
        }
      }

      var _c3 = function _c3(a0, a1, a2, a3, a4, a5, a6) {
        return {
          ltr: a0,
          rtl: a1,
          "shown": a2,
          "hidden": a3,
          "inline": a4,
          "double": a5,
          "show-ranges": a6
        };
      };

      var moment = moment__WEBPACK_IMPORTED_MODULE_4__;
      var LOCALE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('daterangepicker.config');
      /**
       *  DefaultLocaleConfig
       */

      var DefaultLocaleConfig = {
        direction: 'ltr',
        separator: ' - ',
        weekLabel: 'W',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        clearLabel: 'Clear',
        customRangeLabel: 'Custom range',
        daysOfWeek: moment.weekdaysMin(),
        monthNames: moment.monthsShort(),
        firstDay: moment.localeData().firstDayOfWeek()
      };

      var LocaleService = /*#__PURE__*/function () {
        function LocaleService(_config) {
          _classCallCheck(this, LocaleService);

          this._config = _config;
        }

        _createClass(LocaleService, [{
          key: "config",
          get: function get() {
            if (!this._config) {
              return DefaultLocaleConfig;
            }

            return Object.assign({}, DefaultLocaleConfig, this._config);
          }
        }]);

        return LocaleService;
      }();

      LocaleService.??fac = function LocaleService_Factory(t) {
        return new (t || LocaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](LOCALE_CONFIG));
      };

      LocaleService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: LocaleService,
        factory: function factory(t) {
          return LocaleService.??fac(t);
        }
      });

      LocaleService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [LOCALE_CONFIG]
          }]
        }];
      };

      LocaleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(LOCALE_CONFIG))], LocaleService);
      var DaterangepickerComponent_1;
      var moment$1 = moment__WEBPACK_IMPORTED_MODULE_4__;
      var SideEnum;

      (function (SideEnum) {
        SideEnum["left"] = "left";
        SideEnum["right"] = "right";
      })(SideEnum || (SideEnum = {}));

      var DaterangepickerComponent = DaterangepickerComponent_1 = /*#__PURE__*/function () {
        function DaterangepickerComponent(el, _ref, _localeService) {
          _classCallCheck(this, DaterangepickerComponent);

          this.el = el;
          this._ref = _ref;
          this._localeService = _localeService;
          this._old = {
            start: null,
            end: null
          };
          this.calendarVariables = {
            left: {},
            right: {}
          };
          this.tooltiptext = []; // for storing tooltiptext

          this.timepickerVariables = {
            left: {},
            right: {}
          };
          this.daterangepicker = {
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
          };
          this.applyBtn = {
            disabled: false
          };
          this.startDate = moment$1().startOf('day');
          this.endDate = moment$1().endOf('day');
          this.dateLimit = null; // used in template for compile time support of enum values.

          this.sideEnum = SideEnum;
          this.minDate = null;
          this.maxDate = null;
          this.autoApply = false;
          this.singleDatePicker = false;
          this.showDropdowns = false;
          this.showWeekNumbers = false;
          this.showISOWeekNumbers = false;
          this.linkedCalendars = false;
          this.autoUpdateInput = true;
          this.alwaysShowCalendars = false;
          this.maxSpan = false;
          this.lockStartDate = false; // timepicker variables

          this.timePicker = false;
          this.timePicker24Hour = false;
          this.timePickerIncrement = 1;
          this.timePickerSeconds = false; // end of timepicker variables

          this.showClearButton = false;
          this.firstMonthDayClass = null;
          this.lastMonthDayClass = null;
          this.emptyWeekRowClass = null;
          this.emptyWeekColumnClass = null;
          this.firstDayOfNextMonthClass = null;
          this.lastDayOfPreviousMonthClass = null;
          this._locale = {}; // custom ranges

          this._ranges = {};
          this.showCancel = false;
          this.keepCalendarOpeningWithRange = false;
          this.showRangeLabelOnInput = false;
          this.customRangeDirection = false;
          this.rangesArray = []; // some state information

          this.isShown = false;
          this.inline = true;
          this.leftCalendar = {};
          this.rightCalendar = {};
          this.showCalInRanges = false;
          this.nowHoveredDate = null;
          this.pickingDate = false;
          this.options = {}; // should get some opt from user

          this.closeOnAutoApply = true;
          this.choosedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.rangeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.datesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.startDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.endDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }

        _createClass(DaterangepickerComponent, [{
          key: "locale",
          get: function get() {
            return this._locale;
          },
          set: function set(value) {
            this._locale = Object.assign({}, this._localeService.config, value);
          }
        }, {
          key: "ranges",
          get: function get() {
            return this._ranges;
          },
          set: function set(value) {
            this._ranges = value;
            this.renderRanges();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._buildLocale();

            var daysOfWeek = _toConsumableArray(this.locale.daysOfWeek);

            this.locale.firstDay = this.locale.firstDay % 7;

            if (this.locale.firstDay !== 0) {
              var iterator = this.locale.firstDay;

              while (iterator > 0) {
                daysOfWeek.push(daysOfWeek.shift());
                iterator--;
              }
            }

            this.locale.daysOfWeek = daysOfWeek;

            if (this.inline) {
              this._old.start = this.startDate ? this.startDate.clone() : null;
              this._old.end = this.endDate ? this.endDate.clone() : null;
            }

            if (this.startDate && this.timePicker) {
              this.setStartDate(this.startDate);
              this.renderTimePicker(SideEnum.left);
            }

            if (this.endDate && this.timePicker) {
              this.setEndDate(this.endDate);
              this.renderTimePicker(SideEnum.right);
            }

            this.updateMonthsInView();
            this.renderCalendar(SideEnum.left);
            this.renderCalendar(SideEnum.right);
            this.renderRanges();
          }
        }, {
          key: "renderRanges",
          value: function renderRanges() {
            this.rangesArray = [];
            var start, end;

            if (typeof this.ranges === 'object') {
              for (var range in this.ranges) {
                if (this.ranges[range]) {
                  if (typeof this.ranges[range][0] === 'string') {
                    start = moment$1(this.ranges[range][0], this.locale.format);
                  } else {
                    start = moment$1(this.ranges[range][0]);
                  }

                  if (typeof this.ranges[range][1] === 'string') {
                    end = moment$1(this.ranges[range][1], this.locale.format);
                  } else {
                    end = moment$1(this.ranges[range][1]);
                  } // If the start or end date exceed those allowed by the minDate or maxSpan
                  // options, shorten the range to the allowable period.


                  if (this.minDate && start.isBefore(this.minDate)) {
                    start = this.minDate.clone();
                  }

                  var maxDate = this.maxDate;

                  if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) {
                    maxDate = start.clone().add(this.maxSpan);
                  }

                  if (maxDate && end.isAfter(maxDate)) {
                    end = maxDate.clone();
                  } // If the end of the range is before the minimum or the start of the range is
                  // after the maximum, don't display this range option at all.


                  if (this.minDate && end.isBefore(this.minDate, this.timePicker ? 'minute' : 'day') || maxDate && start.isAfter(maxDate, this.timePicker ? 'minute' : 'day')) {
                    continue;
                  } // Support unicode chars in the range names.


                  var elem = document.createElement('textarea');
                  elem.innerHTML = range;
                  var rangeHtml = elem.value;
                  this.ranges[rangeHtml] = [start, end];
                }
              }

              for (var _range in this.ranges) {
                if (this.ranges[_range]) {
                  this.rangesArray.push(_range);
                }
              }

              if (this.showCustomRangeLabel) {
                this.rangesArray.push(this.locale.customRangeLabel);
              }

              this.showCalInRanges = !this.rangesArray.length || this.alwaysShowCalendars;

              if (!this.timePicker) {
                this.startDate = this.startDate.startOf('day');
                this.endDate = this.endDate.endOf('day');
              }
            }
          }
        }, {
          key: "renderTimePicker",
          value: function renderTimePicker(side) {
            var selected, minDate;
            var maxDate = this.maxDate;

            if (side === SideEnum.left) {
              selected = this.startDate.clone(), minDate = this.minDate;
            } else if (side === SideEnum.right && this.endDate) {
              selected = this.endDate.clone(), minDate = this.startDate;
            } else if (side === SideEnum.right && !this.endDate) {
              // don't have an end date, use the start date then put the selected time for the right side as the time
              selected = this._getDateWithTime(this.startDate, SideEnum.right);

              if (selected.isBefore(this.startDate)) {
                selected = this.startDate.clone(); //set it back to the start date the time was backwards
              }

              minDate = this.startDate;
            }

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;
            this.timepickerVariables[side] = {
              hours: [],
              minutes: [],
              minutesLabel: [],
              seconds: [],
              secondsLabel: [],
              disabledHours: [],
              disabledMinutes: [],
              disabledSeconds: [],
              selectedHour: 0,
              selectedMinute: 0,
              selectedSecond: 0
            }; // generate hours

            for (var i = start; i <= end; i++) {
              var i_in_24 = i;

              if (!this.timePicker24Hour) {
                i_in_24 = selected.hour() >= 12 ? i === 12 ? 12 : i + 12 : i === 12 ? 0 : i;
              }

              var time = selected.clone().hour(i_in_24);
              var disabled = false;

              if (minDate && time.minute(59).isBefore(minDate)) {
                disabled = true;
              }

              if (maxDate && time.minute(0).isAfter(maxDate)) {
                disabled = true;
              }

              this.timepickerVariables[side].hours.push(i);

              if (i_in_24 === selected.hour() && !disabled) {
                this.timepickerVariables[side].selectedHour = i;
              } else if (disabled) {
                this.timepickerVariables[side].disabledHours.push(i);
              }
            } // generate minutes


            for (var _i2 = 0; _i2 < 60; _i2 += this.timePickerIncrement) {
              var padded = _i2 < 10 ? '0' + _i2 : _i2;

              var _time = selected.clone().minute(_i2);

              var _disabled = false;

              if (minDate && _time.second(59).isBefore(minDate)) {
                _disabled = true;
              }

              if (maxDate && _time.second(0).isAfter(maxDate)) {
                _disabled = true;
              }

              this.timepickerVariables[side].minutes.push(_i2);
              this.timepickerVariables[side].minutesLabel.push(padded);

              if (selected.minute() === _i2 && !_disabled) {
                this.timepickerVariables[side].selectedMinute = _i2;
              } else if (_disabled) {
                this.timepickerVariables[side].disabledMinutes.push(_i2);
              }
            } // generate seconds


            if (this.timePickerSeconds) {
              for (var _i3 = 0; _i3 < 60; _i3++) {
                var _padded = _i3 < 10 ? '0' + _i3 : _i3;

                var _time2 = selected.clone().second(_i3);

                var _disabled2 = false;

                if (minDate && _time2.isBefore(minDate)) {
                  _disabled2 = true;
                }

                if (maxDate && _time2.isAfter(maxDate)) {
                  _disabled2 = true;
                }

                this.timepickerVariables[side].seconds.push(_i3);
                this.timepickerVariables[side].secondsLabel.push(_padded);

                if (selected.second() === _i3 && !_disabled2) {
                  this.timepickerVariables[side].selectedSecond = _i3;
                } else if (_disabled2) {
                  this.timepickerVariables[side].disabledSeconds.push(_i3);
                }
              }
            } // generate AM/PM


            if (!this.timePicker24Hour) {
              var am_html = '';
              var pm_html = '';

              if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) {
                this.timepickerVariables[side].amDisabled = true;
              }

              if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) {
                this.timepickerVariables[side].pmDisabled = true;
              }

              if (selected.hour() >= 12) {
                this.timepickerVariables[side].ampmModel = 'PM';
              } else {
                this.timepickerVariables[side].ampmModel = 'AM';
              }
            }

            this.timepickerVariables[side].selected = selected;
          }
        }, {
          key: "renderCalendar",
          value: function renderCalendar(side) {
            var mainCalendar = side === SideEnum.left ? this.leftCalendar : this.rightCalendar;
            var month = mainCalendar.month.month();
            var year = mainCalendar.month.year();
            var hour = mainCalendar.month.hour();
            var minute = mainCalendar.month.minute();
            var second = mainCalendar.month.second();
            var daysInMonth = moment$1([year, month]).daysInMonth();
            var firstDay = moment$1([year, month, 1]);
            var lastDay = moment$1([year, month, daysInMonth]);
            var lastMonth = moment$1(firstDay).subtract(1, 'month').month();
            var lastYear = moment$1(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment$1([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day(); // initialize a 6 rows x 7 columns array for the calendar

            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
              calendar[i] = [];
            } // populate the calendar with date objects


            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;

            if (startDay > daysInLastMonth) {
              startDay -= 7;
            }

            if (dayOfWeek === this.locale.firstDay) {
              startDay = daysInLastMonth - 6;
            }

            var curDate = moment$1([lastYear, lastMonth, startDay, 12, minute, second]);

            for (var _i4 = 0, col = 0, row = 0; _i4 < 42; _i4++, col++, curDate = moment$1(curDate).add(24, 'hour')) {
              if (_i4 > 0 && col % 7 === 0) {
                col = 0;
                row++;
              }

              calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
              curDate.hour(12);

              if (this.minDate && calendar[row][col].format('YYYY-MM-DD') === this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side === 'left') {
                calendar[row][col] = this.minDate.clone();
              }

              if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') === this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side === 'right') {
                calendar[row][col] = this.maxDate.clone();
              }
            } // make the calendar object available to hoverDate/clickDate


            if (side === SideEnum.left) {
              this.leftCalendar.calendar = calendar;
            } else {
              this.rightCalendar.calendar = calendar;
            } //
            // Display the calendar
            //


            var minDate = side === 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate; // adjust maxDate to reflect the dateLimit setting in order to
            // grey out end dates beyond the dateLimit

            if (this.endDate === null && this.dateLimit) {
              var maxLimit = this.startDate.clone().add(this.dateLimit, 'day').endOf('day');

              if (!maxDate || maxLimit.isBefore(maxDate)) {
                maxDate = maxLimit;
              }
            }

            this.calendarVariables[side] = {
              month: month,
              year: year,
              hour: hour,
              minute: minute,
              second: second,
              daysInMonth: daysInMonth,
              firstDay: firstDay,
              lastDay: lastDay,
              lastMonth: lastMonth,
              lastYear: lastYear,
              daysInLastMonth: daysInLastMonth,
              dayOfWeek: dayOfWeek,
              // other vars
              calRows: Array.from(Array(6).keys()),
              calCols: Array.from(Array(7).keys()),
              classes: {},
              minDate: minDate,
              maxDate: maxDate,
              calendar: calendar
            };

            if (this.showDropdowns) {
              var currentMonth = calendar[1][1].month();
              var currentYear = calendar[1][1].year();
              var realCurrentYear = moment$1().year();
              var maxYear = maxDate && maxDate.year() || realCurrentYear + 5;
              var minYear = minDate && minDate.year() || realCurrentYear - 50;
              var inMinYear = currentYear === minYear;
              var inMaxYear = currentYear === maxYear;
              var years = [];

              for (var y = minYear; y <= maxYear; y++) {
                years.push(y);
              }

              this.calendarVariables[side].dropdowns = {
                currentMonth: currentMonth,
                currentYear: currentYear,
                maxYear: maxYear,
                minYear: minYear,
                inMinYear: inMinYear,
                inMaxYear: inMaxYear,
                monthArrays: Array.from(Array(12).keys()),
                yearArrays: years
              };
            }

            this._buildCells(calendar, side);
          }
        }, {
          key: "setStartDate",
          value: function setStartDate(startDate) {
            if (typeof startDate === 'string') {
              this.startDate = moment$1(startDate, this.locale.format);
            }

            if (typeof startDate === 'object') {
              this.pickingDate = true;
              this.startDate = moment$1(startDate);
            }

            if (!this.timePicker) {
              this.pickingDate = true;
              this.startDate = this.startDate.startOf('day');
            }

            if (this.timePicker && this.timePickerIncrement) {
              this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
              this.startDate = this.minDate.clone();

              if (this.timePicker && this.timePickerIncrement) {
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
              }
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
              this.startDate = this.maxDate.clone();

              if (this.timePicker && this.timePickerIncrement) {
                this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
              }
            }

            if (!this.isShown) {
              this.updateElement();
            }

            this.startDateChanged.emit({
              startDate: this.startDate
            });
            this.updateMonthsInView();
          }
        }, {
          key: "setEndDate",
          value: function setEndDate(endDate) {
            if (typeof endDate === 'string') {
              this.endDate = moment$1(endDate, this.locale.format);
            }

            if (typeof endDate === 'object') {
              this.pickingDate = false;
              this.endDate = moment$1(endDate);
            }

            if (!this.timePicker) {
              this.pickingDate = false;
              this.endDate = this.endDate.add(1, 'd').startOf('day').subtract(1, 'second');
            }

            if (this.timePicker && this.timePickerIncrement) {
              this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.endDate.isBefore(this.startDate)) {
              this.endDate = this.startDate.clone();
            }

            if (this.maxDate && this.endDate.isAfter(this.maxDate)) {
              this.endDate = this.maxDate.clone();
            }

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit, 'day').isBefore(this.endDate)) {
              this.endDate = this.startDate.clone().add(this.dateLimit, 'day');
            }

            if (!this.isShown) {// this.updateElement();
            }

            this.endDateChanged.emit({
              endDate: this.endDate
            });
            this.updateMonthsInView();
          }
        }, {
          key: "isInvalidDate",
          value: function isInvalidDate(date) {
            return false;
          }
        }, {
          key: "isCustomDate",
          value: function isCustomDate(date) {
            return false;
          }
        }, {
          key: "isTooltipDate",
          value: function isTooltipDate(date) {
            return null;
          }
        }, {
          key: "updateView",
          value: function updateView() {
            if (this.timePicker) {
              this.renderTimePicker(SideEnum.left);
              this.renderTimePicker(SideEnum.right);
            }

            this.updateMonthsInView();
            this.updateCalendars();
          }
        }, {
          key: "updateMonthsInView",
          value: function updateMonthsInView() {
            if (this.endDate) {
              // if both dates are visible already, do nothing
              if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate && this.leftCalendar && this.startDate.format('YYYY-MM') === this.leftCalendar.month.format('YYYY-MM') || this.startDate && this.rightCalendar && this.startDate.format('YYYY-MM') === this.rightCalendar.month.format('YYYY-MM')) && (this.endDate.format('YYYY-MM') === this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') === this.rightCalendar.month.format('YYYY-MM'))) {
                return;
              }

              if (this.startDate) {
                this.leftCalendar.month = this.startDate.clone().date(2);

                if (!this.linkedCalendars && (this.endDate.month() !== this.startDate.month() || this.endDate.year() !== this.startDate.year())) {
                  this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                  this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
              }
            } else {
              if (this.leftCalendar.month.format('YYYY-MM') !== this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') !== this.startDate.format('YYYY-MM')) {
                this.leftCalendar.month = this.startDate.clone().date(2);
                this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
              }
            }

            if (this.maxDate) {
              if (this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
                this.rightCalendar.month = this.maxDate.clone().date(2);
                this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
              }

              if (this.minDate) {
                this.leftCalendar.month = this.minDate.clone().date(2);
                this.rightCalendar.month = this.minDate.clone().date(2).add(1, 'month');
              }
            }
          }
          /**
           *  This is responsible for updating the calendars
           */

        }, {
          key: "updateCalendars",
          value: function updateCalendars() {
            this.renderCalendar(SideEnum.left);
            this.renderCalendar(SideEnum.right);

            if (this.endDate === null) {
              return;
            }

            this.calculateChosenLabel();
          }
        }, {
          key: "updateElement",
          value: function updateElement() {
            var format = this.locale.displayFormat ? this.locale.displayFormat : this.locale.format;

            if (!this.singleDatePicker && this.autoUpdateInput) {
              if (this.startDate && this.endDate) {
                // if we use ranges and should show range label on input
                if (this.rangesArray.length && this.showRangeLabelOnInput === true && this.chosenRange && this.locale.customRangeLabel !== this.chosenRange) {
                  this.chosenLabel = this.chosenRange;
                } else {
                  this.chosenLabel = this.startDate.format(format) + this.locale.separator + this.endDate.format(format);
                }
              }
            } else if (this.autoUpdateInput) {
              this.chosenLabel = this.startDate.format(format);
            }
          }
        }, {
          key: "remove",
          value: function remove() {
            this.isShown = false;
          }
          /**
           * this should calculate the label
           */

        }, {
          key: "calculateChosenLabel",
          value: function calculateChosenLabel() {
            if (!this.locale || !this.locale.separator) {
              this._buildLocale();
            }

            var customRange = true;
            var i = 0;

            if (this.rangesArray.length > 0) {
              for (var range in this.ranges) {
                if (this.ranges[range]) {
                  if (this.timePicker) {
                    var format = this.timePickerSeconds ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm'; // ignore times when comparing dates if time picker seconds is not enabled

                    if (this.startDate.format(format) === this.ranges[range][0].format(format) && this.endDate.format(format) === this.ranges[range][1].format(format)) {
                      customRange = false;
                      this.chosenRange = this.rangesArray[i];
                      break;
                    }
                  } else {
                    // ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') === this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') === this.ranges[range][1].format('YYYY-MM-DD')) {
                      customRange = false;
                      this.chosenRange = this.rangesArray[i];
                      break;
                    }
                  }

                  i++;
                }
              }

              if (customRange) {
                if (this.showCustomRangeLabel) {
                  this.chosenRange = this.locale.customRangeLabel;
                } else {
                  this.chosenRange = null;
                } // if custom label: show calendar


                this.showCalInRanges = true;
              }
            }

            this.updateElement();
          }
        }, {
          key: "clickApply",
          value: function clickApply(e) {
            if (!this.singleDatePicker && this.startDate && !this.endDate) {
              this.endDate = this._getDateWithTime(this.startDate, SideEnum.right);
              this.calculateChosenLabel();
            }

            if (this.isInvalidDate && this.startDate && this.endDate) {
              // get if there are invalid date between range
              var d = this.startDate.clone();

              while (d.isBefore(this.endDate)) {
                if (this.isInvalidDate(d)) {
                  this.endDate = d.subtract(1, 'days');
                  this.calculateChosenLabel();
                  break;
                }

                d.add(1, 'days');
              }
            }

            if (this.chosenLabel) {
              this.choosedDate.emit({
                chosenLabel: this.chosenLabel,
                startDate: this.startDate,
                endDate: this.endDate
              });
            }

            this.datesUpdated.emit({
              startDate: this.startDate,
              endDate: this.endDate
            });

            if (e || this.closeOnAutoApply && !e) {
              this.hide();
            }
          }
        }, {
          key: "clickCancel",
          value: function clickCancel(e) {
            this.startDate = this._old.start;
            this.endDate = this._old.end;

            if (this.inline) {
              this.updateView();
            }

            this.hide();
          }
          /**
           * called when month is changed
           * @param monthEvent get value in event.target.value
           * @param side left or right
           */

        }, {
          key: "monthChanged",
          value: function monthChanged(monthEvent, side) {
            var year = this.calendarVariables[side].dropdowns.currentYear;
            var month = parseInt(monthEvent.target.value, 10);
            this.monthOrYearChanged(month, year, side);
          }
          /**
           * called when year is changed
           * @param yearEvent get value in event.target.value
           * @param side left or right
           */

        }, {
          key: "yearChanged",
          value: function yearChanged(yearEvent, side) {
            var month = this.calendarVariables[side].dropdowns.currentMonth;
            var year = parseInt(yearEvent.target.value, 10);
            this.monthOrYearChanged(month, year, side);
          }
          /**
           * called when time is changed
           * @param timeEvent  an event
           * @param side left or right
           */

        }, {
          key: "timeChanged",
          value: function timeChanged(timeEvent, side) {
            var hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
            var minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
            var second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;

            if (!this.timePicker24Hour) {
              var ampm = this.timepickerVariables[side].ampmModel;

              if (ampm === 'PM' && hour < 12) {
                hour += 12;
              }

              if (ampm === 'AM' && hour === 12) {
                hour = 0;
              }
            }

            if (side === SideEnum.left) {
              var start = this.startDate.clone();
              start.hour(hour);
              start.minute(minute);
              start.second(second);
              this.setStartDate(start);

              if (this.singleDatePicker) {
                this.endDate = this.startDate.clone();
              } else if (this.endDate && this.endDate.format('YYYY-MM-DD') === start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                this.setEndDate(start.clone());
              } else if (!this.endDate && this.timePicker) {
                var startClone = this._getDateWithTime(start, SideEnum.right);

                if (startClone.isBefore(start)) {
                  this.timepickerVariables[SideEnum.right].selectedHour = hour;
                  this.timepickerVariables[SideEnum.right].selectedMinute = minute;
                  this.timepickerVariables[SideEnum.right].selectedSecond = second;
                }
              }
            } else if (this.endDate) {
              var end = this.endDate.clone();
              end.hour(hour);
              end.minute(minute);
              end.second(second);
              this.setEndDate(end);
            } // update the calendars so all clickable dates reflect the new time component


            this.updateCalendars(); // re-render the time pickers because changing one selection can affect what's enabled in another

            this.renderTimePicker(SideEnum.left);
            this.renderTimePicker(SideEnum.right);

            if (this.autoApply) {
              this.clickApply();
            }
          }
          /**
           *  call when month or year changed
           * @param month month number 0 -11
           * @param year year eg: 1995
           * @param side left or right
           */

        }, {
          key: "monthOrYearChanged",
          value: function monthOrYearChanged(month, year, side) {
            var isLeft = side === SideEnum.left;

            if (!isLeft) {
              if (year < this.startDate.year() || year === this.startDate.year() && month < this.startDate.month()) {
                month = this.startDate.month();
                year = this.startDate.year();
              }
            }

            if (this.minDate) {
              if (year < this.minDate.year() || year === this.minDate.year() && month < this.minDate.month()) {
                month = this.minDate.month();
                year = this.minDate.year();
              }
            }

            if (this.maxDate) {
              if (year > this.maxDate.year() || year === this.maxDate.year() && month > this.maxDate.month()) {
                month = this.maxDate.month();
                year = this.maxDate.year();
              }
            }

            this.calendarVariables[side].dropdowns.currentYear = year;
            this.calendarVariables[side].dropdowns.currentMonth = month;

            if (isLeft) {
              this.leftCalendar.month.month(month).year(year);

              if (this.linkedCalendars) {
                this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
              }
            } else {
              this.rightCalendar.month.month(month).year(year);

              if (this.linkedCalendars) {
                this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
              }
            }

            this.updateCalendars();
          }
          /**
           * Click on previous month
           * @param side left or right calendar
           */

        }, {
          key: "clickPrev",
          value: function clickPrev(side) {
            if (side === SideEnum.left) {
              this.leftCalendar.month.subtract(1, 'month');

              if (this.linkedCalendars) {
                this.rightCalendar.month.subtract(1, 'month');
              }
            } else {
              this.rightCalendar.month.subtract(1, 'month');
            }

            this.updateCalendars();
          }
          /**
           * Click on next month
           * @param side left or right calendar
           */

        }, {
          key: "clickNext",
          value: function clickNext(side) {
            if (side === SideEnum.left) {
              this.leftCalendar.month.add(1, 'month');
            } else {
              this.rightCalendar.month.add(1, 'month');

              if (this.linkedCalendars) {
                this.leftCalendar.month.add(1, 'month');
              }
            }

            this.updateCalendars();
          }
          /**
           * When hovering a date
           * @param e event: get value by e.target.value
           * @param side left or right
           * @param row row position of the current date clicked
           * @param col col position of the current date clicked
           */

        }, {
          key: "hoverDate",
          value: function hoverDate(e, side, row, col) {
            var leftCalDate = this.calendarVariables.left.calendar[row][col];
            var rightCalDate = this.calendarVariables.right.calendar[row][col];

            if (this.pickingDate) {
              this.nowHoveredDate = side === SideEnum.left ? leftCalDate : rightCalDate;
              this.renderCalendar(SideEnum.left);
              this.renderCalendar(SideEnum.right);
            }

            var tooltip = side === SideEnum.left ? this.tooltiptext[leftCalDate] : this.tooltiptext[rightCalDate];

            if (tooltip.length > 0) {
              e.target.setAttribute('title', tooltip);
            }
          }
          /**
           * When selecting a date
           * @param e event: get value by e.target.value
           * @param side left or right
           * @param row row position of the current date clicked
           * @param col col position of the current date clicked
           */

        }, {
          key: "clickDate",
          value: function clickDate(e, side, row, col) {
            if (e.target.tagName === 'TD') {
              if (!e.target.classList.contains('available')) {
                return;
              }
            } else if (e.target.tagName === 'SPAN') {
              if (!e.target.parentElement.classList.contains('available')) {
                return;
              }
            }

            if (this.rangesArray.length) {
              this.chosenRange = this.locale.customRangeLabel;
            }

            var date = side === SideEnum.left ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if ((this.endDate || date.isBefore(this.startDate, 'day') && this.customRangeDirection === false) && this.lockStartDate === false) {
              // picking start
              if (this.timePicker) {
                date = this._getDateWithTime(date, SideEnum.left);
              }

              this.endDate = null;
              this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate) && this.customRangeDirection === false) {
              // special case: clicking the same date for start/end,
              // but the time of the end date is before the start date
              this.setEndDate(this.startDate.clone());
            } else {
              // picking end
              if (this.timePicker) {
                date = this._getDateWithTime(date, SideEnum.right);
              }

              if (date.isBefore(this.startDate, 'day') === true && this.customRangeDirection === true) {
                this.setEndDate(this.startDate);
                this.setStartDate(date.clone());
              } else {
                this.setEndDate(date.clone());
              }

              if (this.autoApply) {
                this.calculateChosenLabel();
              }
            }

            if (this.singleDatePicker) {
              this.setEndDate(this.startDate);
              this.updateElement();

              if (this.autoApply) {
                this.clickApply();
              }
            }

            this.updateView();

            if (this.autoApply && this.startDate && this.endDate) {
              this.clickApply();
            } // This is to cancel the blur event handler if the mouse was in one of the inputs


            e.stopPropagation();
          }
          /**
           *  Click on the custom range
           * @param e: Event
           * @param label
           */

        }, {
          key: "clickRange",
          value: function clickRange(e, label) {
            this.chosenRange = label;

            if (label === this.locale.customRangeLabel) {
              this.isShown = true; // show calendars

              this.showCalInRanges = true;
            } else {
              var dates = this.ranges[label];
              this.startDate = dates[0].clone();
              this.endDate = dates[1].clone();

              if (this.showRangeLabelOnInput && label !== this.locale.customRangeLabel) {
                this.chosenLabel = label;
              } else {
                this.calculateChosenLabel();
              }

              this.showCalInRanges = !this.rangesArray.length || this.alwaysShowCalendars;

              if (!this.timePicker) {
                this.startDate.startOf('day');
                this.endDate.endOf('day');
              }

              if (!this.alwaysShowCalendars) {
                this.isShown = false; // hide calendars
              }

              this.rangeClicked.emit({
                label: label,
                dates: dates
              });

              if (!this.keepCalendarOpeningWithRange || this.autoApply) {
                this.clickApply();
              } else {
                if (!this.alwaysShowCalendars) {
                  return this.clickApply();
                }

                if (this.maxDate && this.maxDate.isSame(dates[0], 'month')) {
                  this.rightCalendar.month.month(dates[0].month());
                  this.rightCalendar.month.year(dates[0].year());
                  this.leftCalendar.month.month(dates[0].month() - 1);
                  this.leftCalendar.month.year(dates[1].year());
                } else {
                  this.leftCalendar.month.month(dates[0].month());
                  this.leftCalendar.month.year(dates[0].year()); // get the next year

                  var nextMonth = dates[0].clone().add(1, 'month');
                  this.rightCalendar.month.month(nextMonth.month());
                  this.rightCalendar.month.year(nextMonth.year());
                }

                this.updateCalendars();

                if (this.timePicker) {
                  this.renderTimePicker(SideEnum.left);
                  this.renderTimePicker(SideEnum.right);
                }
              }
            }
          }
        }, {
          key: "show",
          value: function show(e) {
            if (this.isShown) {
              return;
            }

            this._old.start = this.startDate.clone();
            this._old.end = this.endDate.clone();
            this.isShown = true;
            this.updateView();
          }
        }, {
          key: "hide",
          value: function hide(e) {
            if (!this.isShown) {
              return;
            } // incomplete date selection, revert to last values


            if (!this.endDate) {
              if (this._old.start) {
                this.startDate = this._old.start.clone();
              }

              if (this._old.end) {
                this.endDate = this._old.end.clone();
              }
            } // if a new date range was selected, invoke the user callback function


            if (!this.startDate.isSame(this._old.start) || !this.endDate.isSame(this._old.end)) {// this.callback(this.startDate, this.endDate, this.chosenLabel);
            } // if picker is attached to a text input, update it


            this.updateElement();
            this.isShown = false;

            this._ref.detectChanges();
          }
          /**
           * handle click on all element in the component, useful for outside of click
           * @param e event
           */

        }, {
          key: "handleInternalClick",
          value: function handleInternalClick(e) {
            e.stopPropagation();
          }
          /**
           * update the locale options
           * @param locale
           */

        }, {
          key: "updateLocale",
          value: function updateLocale(locale) {
            for (var key in locale) {
              if (locale.hasOwnProperty(key)) {
                this.locale[key] = locale[key];

                if (key === 'customRangeLabel') {
                  this.renderRanges();
                }
              }
            }
          }
          /**
           *  clear the daterange picker
           */

        }, {
          key: "clear",
          value: function clear() {
            this.startDate = moment$1().startOf('day');
            this.endDate = moment$1().endOf('day');
            this.choosedDate.emit({
              chosenLabel: '',
              startDate: null,
              endDate: null
            });
            this.datesUpdated.emit({
              startDate: null,
              endDate: null
            });
            this.hide();
          }
          /**
           * Find out if the selected range should be disabled if it doesn't
           * fit into minDate and maxDate limitations.
           */

        }, {
          key: "disableRange",
          value: function disableRange(range) {
            var _this10 = this;

            if (range === this.locale.customRangeLabel) {
              return false;
            }

            var rangeMarkers = this.ranges[range];
            var areBothBefore = rangeMarkers.every(function (date) {
              if (!_this10.minDate) {
                return false;
              }

              return date.isBefore(_this10.minDate);
            });
            var areBothAfter = rangeMarkers.every(function (date) {
              if (!_this10.maxDate) {
                return false;
              }

              return date.isAfter(_this10.maxDate);
            });
            return areBothBefore || areBothAfter;
          }
          /**
           *
           * @param date the date to add time
           * @param side left or right
           */

        }, {
          key: "_getDateWithTime",
          value: function _getDateWithTime(date, side) {
            var hour = parseInt(this.timepickerVariables[side].selectedHour, 10);

            if (!this.timePicker24Hour) {
              var ampm = this.timepickerVariables[side].ampmModel;

              if (ampm === 'PM' && hour < 12) {
                hour += 12;
              }

              if (ampm === 'AM' && hour === 12) {
                hour = 0;
              }
            }

            var minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
            var second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;
            return date.clone().hour(hour).minute(minute).second(second);
          }
          /**
           *  build the locale config
           */

        }, {
          key: "_buildLocale",
          value: function _buildLocale() {
            this.locale = Object.assign({}, this._localeService.config, this.locale);

            if (!this.locale.format) {
              if (this.timePicker) {
                this.locale.format = moment$1.localeData().longDateFormat('lll');
              } else {
                this.locale.format = moment$1.localeData().longDateFormat('L');
              }
            }
          }
        }, {
          key: "_buildCells",
          value: function _buildCells(calendar, side) {
            var _this11 = this;

            var _loop = function _loop(row) {
              _this11.calendarVariables[side].classes[row] = {};
              var rowClasses = [];

              if (_this11.emptyWeekRowClass && Array.from(Array(7).keys()).some(function (i) {
                return calendar[row][i].month() !== _this11.calendarVariables[side].month;
              })) {
                rowClasses.push(_this11.emptyWeekRowClass);
              }

              for (var col = 0; col < 7; col++) {
                var classes = []; // empty week row class

                if (_this11.emptyWeekColumnClass) {
                  if (calendar[row][col].month() !== _this11.calendarVariables[side].month) {
                    classes.push(_this11.emptyWeekColumnClass);
                  }
                } // highlight today's date


                if (calendar[row][col].isSame(new Date(), 'day')) {
                  classes.push('today');
                } // highlight weekends


                if (calendar[row][col].isoWeekday() > 5) {
                  classes.push('weekend');
                } // grey out the dates in other months displayed at beginning and end of this calendar


                if (calendar[row][col].month() !== calendar[1][1].month()) {
                  classes.push('off'); // mark the last day of the previous month in this calendar

                  if (_this11.lastDayOfPreviousMonthClass && (calendar[row][col].month() < calendar[1][1].month() || calendar[1][1].month() === 0) && calendar[row][col].date() === _this11.calendarVariables[side].daysInLastMonth) {
                    classes.push(_this11.lastDayOfPreviousMonthClass);
                  } // mark the first day of the next month in this calendar


                  if (_this11.firstDayOfNextMonthClass && (calendar[row][col].month() > calendar[1][1].month() || calendar[row][col].month() === 0) && calendar[row][col].date() === 1) {
                    classes.push(_this11.firstDayOfNextMonthClass);
                  }
                } // mark the first day of the current month with a custom class


                if (_this11.firstMonthDayClass && calendar[row][col].month() === calendar[1][1].month() && calendar[row][col].date() === calendar.firstDay.date()) {
                  classes.push(_this11.firstMonthDayClass);
                } // mark the last day of the current month with a custom class


                if (_this11.lastMonthDayClass && calendar[row][col].month() === calendar[1][1].month() && calendar[row][col].date() === calendar.lastDay.date()) {
                  classes.push(_this11.lastMonthDayClass);
                } // don't allow selection of dates before the minimum date


                if (_this11.minDate && calendar[row][col].isBefore(_this11.minDate, 'day')) {
                  classes.push('off', 'disabled');
                } // don't allow selection of dates after the maximum date


                if (_this11.calendarVariables[side].maxDate && calendar[row][col].isAfter(_this11.calendarVariables[side].maxDate, 'day')) {
                  classes.push('off', 'disabled');
                } // don't allow selection of date if a custom function decides it's invalid


                if (_this11.isInvalidDate(calendar[row][col])) {
                  classes.push('off', 'disabled', 'invalid');
                } // highlight the currently selected start date


                if (_this11.startDate && calendar[row][col].format('YYYY-MM-DD') === _this11.startDate.format('YYYY-MM-DD')) {
                  classes.push('active', 'start-date');
                } // highlight the currently selected end date


                if (_this11.endDate != null && calendar[row][col].format('YYYY-MM-DD') === _this11.endDate.format('YYYY-MM-DD')) {
                  classes.push('active', 'end-date');
                } // highlight dates in-between the selected dates


                if ((_this11.nowHoveredDate != null && _this11.pickingDate || _this11.endDate != null) && calendar[row][col] > _this11.startDate && (calendar[row][col] < _this11.endDate || calendar[row][col] < _this11.nowHoveredDate && _this11.pickingDate) && !classes.find(function (el) {
                  return el === 'off';
                })) {
                  classes.push('in-range');
                } // apply custom classes for this date


                var isCustom = _this11.isCustomDate(calendar[row][col]);

                if (isCustom !== false) {
                  if (typeof isCustom === 'string') {
                    classes.push(isCustom);
                  } else {
                    Array.prototype.push.apply(classes, isCustom);
                  }
                } // apply custom tooltip for this date


                var isTooltip = _this11.isTooltipDate(calendar[row][col]);

                if (isTooltip) {
                  if (typeof isTooltip === 'string') {
                    _this11.tooltiptext[calendar[row][col]] = isTooltip; // setting tooltiptext for custom date
                  } else {
                    _this11.tooltiptext[calendar[row][col]] = 'Put the tooltip as the returned value of isTooltipDate';
                  }
                } else {
                  _this11.tooltiptext[calendar[row][col]] = '';
                } // store classes var


                var cname = '',
                    disabled = false;

                for (var i = 0; i < classes.length; i++) {
                  cname += classes[i] + ' ';

                  if (classes[i] === 'disabled') {
                    disabled = true;
                  }
                }

                if (!disabled) {
                  cname += 'available';
                }

                _this11.calendarVariables[side].classes[row][col] = cname.replace(/^\s+|\s+$/g, '');
              }

              _this11.calendarVariables[side].classes[row].classList = rowClasses.join(' ');
            };

            for (var row = 0; row < 6; row++) {
              _loop(row);
            }
          }
          /**
           * Find out if the current calendar row has current month days
           * (as opposed to consisting of only previous/next month days)
           */

        }, {
          key: "hasCurrentMonthDays",
          value: function hasCurrentMonthDays(currentMonth, row) {
            for (var day = 0; day < 7; day++) {
              if (row[day].month() === currentMonth) {
                return true;
              }
            }

            return false;
          }
        }]);

        return DaterangepickerComponent;
      }();

      DaterangepickerComponent.??fac = function DaterangepickerComponent_Factory(t) {
        return new (t || DaterangepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](LocaleService));
      };

      DaterangepickerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: DaterangepickerComponent,
        selectors: [["ngx-daterangepicker-material"]],
        viewQuery: function DaterangepickerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.pickerContainer = _t.first);
          }
        },
        hostBindings: function DaterangepickerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DaterangepickerComponent_click_HostBindingHandler($event) {
              return ctx.handleInternalClick($event);
            });
          }
        },
        inputs: {
          startDate: "startDate",
          endDate: "endDate",
          dateLimit: "dateLimit",
          minDate: "minDate",
          maxDate: "maxDate",
          autoApply: "autoApply",
          singleDatePicker: "singleDatePicker",
          showDropdowns: "showDropdowns",
          showWeekNumbers: "showWeekNumbers",
          showISOWeekNumbers: "showISOWeekNumbers",
          linkedCalendars: "linkedCalendars",
          autoUpdateInput: "autoUpdateInput",
          alwaysShowCalendars: "alwaysShowCalendars",
          maxSpan: "maxSpan",
          lockStartDate: "lockStartDate",
          timePicker: "timePicker",
          timePicker24Hour: "timePicker24Hour",
          timePickerIncrement: "timePickerIncrement",
          timePickerSeconds: "timePickerSeconds",
          showClearButton: "showClearButton",
          firstMonthDayClass: "firstMonthDayClass",
          lastMonthDayClass: "lastMonthDayClass",
          emptyWeekRowClass: "emptyWeekRowClass",
          emptyWeekColumnClass: "emptyWeekColumnClass",
          firstDayOfNextMonthClass: "firstDayOfNextMonthClass",
          lastDayOfPreviousMonthClass: "lastDayOfPreviousMonthClass",
          showCancel: "showCancel",
          keepCalendarOpeningWithRange: "keepCalendarOpeningWithRange",
          showRangeLabelOnInput: "showRangeLabelOnInput",
          customRangeDirection: "customRangeDirection",
          closeOnAutoApply: "closeOnAutoApply",
          locale: "locale",
          ranges: "ranges",
          isInvalidDate: "isInvalidDate",
          isCustomDate: "isCustomDate",
          isTooltipDate: "isTooltipDate",
          showCustomRangeLabel: "showCustomRangeLabel",
          drops: "drops",
          opens: "opens"
        },
        outputs: {
          choosedDate: "choosedDate",
          rangeClicked: "rangeClicked",
          datesUpdated: "datesUpdated",
          startDateChanged: "startDateChanged",
          endDateChanged: "endDateChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????ProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
            return DaterangepickerComponent_1;
          }),
          multi: true
        }])],
        decls: 8,
        vars: 15,
        consts: [[1, "md-drppicker", 3, "ngClass"], ["pickerContainer", ""], [1, "ranges"], [4, "ngFor", "ngForOf"], ["class", "calendar", 3, "ngClass", 4, "ngIf"], ["class", "calendar right", 4, "ngIf"], ["class", "buttons", 4, "ngIf"], ["type", "button", 3, "disabled", "ngClass", "click"], [1, "calendar", 3, "ngClass"], [1, "calendar-table"], ["class", "table-condensed", 4, "ngIf"], ["class", "calendar-time", 4, "ngIf"], [1, "table-condensed"], [4, "ngIf"], ["colspan", "5", 1, "month", "drp-animate"], [1, "week-days"], ["class", "week", 4, "ngIf"], [1, "drp-animate"], [3, "class", 4, "ngFor", "ngForOf"], [1, "prev", "available", 3, "click"], [1, "dropdowns"], [1, "monthselect", 3, "change"], [3, "disabled", "value", "selected", 4, "ngFor", "ngForOf"], [1, "yearselect", 3, "change"], [3, "selected", 4, "ngFor", "ngForOf"], [3, "disabled", "value", "selected"], [3, "selected"], [1, "next", "available", 3, "click"], [1, "week"], [3, "class", "click", "mouseenter", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter"], [1, "calendar-time"], [1, "select"], [1, "hourselect", "select-item", 3, "disabled", "ngModel", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "select-item", "minuteselect", 3, "disabled", "ngModel", "ngModelChange"], [1, "select-highlight"], [1, "select-bar"], ["class", "select-item secondselect", 3, "disabled", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "select-item ampmselect", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "value", "disabled"], [1, "select-item", "secondselect", 3, "disabled", "ngModel", "ngModelChange"], [1, "select-item", "ampmselect", 3, "ngModel", "ngModelChange"], ["value", "AM", 3, "disabled"], ["value", "PM", 3, "disabled"], [1, "calendar", "right"], ["colspan", "5", 1, "month"], [1, "select-item", "hourselect", 3, "disabled", "ngModel", "ngModelChange"], [1, "buttons"], [1, "buttons_input"], ["class", "btn btn-default clear", "type", "button", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-default", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-default", "clear", 3, "title", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "viewBox", "0 -5 24 24"], ["d", "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"], ["type", "button", 1, "btn", "btn-default", 3, "click"]],
        template: function DaterangepickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, DaterangepickerComponent_li_4_Template, 3, 5, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, DaterangepickerComponent_div_5_Template, 4, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, DaterangepickerComponent_div_6_Template, 4, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, DaterangepickerComponent_div_7_Template, 6, 4, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classMap"]("drops-" + ctx.drops + "-" + ctx.opens);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction7"](7, _c3, ctx.locale.direction === "ltr", ctx.locale.direction === "rtl", ctx.isShown || ctx.inline, !ctx.isShown && !ctx.inline, ctx.inline, !ctx.singleDatePicker && ctx.showCalInRanges, ctx.rangesArray.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.rangesArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.showCalInRanges);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.showCalInRanges && !ctx.singleDatePicker);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.autoApply && (!ctx.rangesArray.length || ctx.showCalInRanges && !ctx.singleDatePicker));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        styles: [".md-drppicker{position:absolute;font-family:Roboto,sans-serif;color:inherit;border-radius:4px;width:278px;padding:4px;margin-top:-10px;overflow:hidden;z-index:1000;font-size:14px;background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 8px 0 rgba(0,0,0,.12)}.md-drppicker.double{width:auto}.md-drppicker.inline{position:relative;display:inline-block}.md-drppicker:after,.md-drppicker:before{position:absolute;display:inline-block;border-bottom-color:rgba(0,0,0,.2);content:''}.md-drppicker.openscenter:after,.md-drppicker.openscenter:before{left:0;right:0;width:0;margin-left:auto;margin-right:auto}.md-drppicker.single .calendar,.md-drppicker.single .ranges{float:none}.md-drppicker.shown{transform:scale(1);transition:.1s ease-in-out;transform-origin:0 0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-drppicker.shown.drops-up-left{transform-origin:100% 100%}.md-drppicker.shown.drops-up-right{transform-origin:0 100%}.md-drppicker.shown.drops-down-left{transform-origin:100% 0}.md-drppicker.shown.drops-down-right{transform-origin:0 0}.md-drppicker.shown.drops-down-center{transform-origin:NaN}.md-drppicker.shown.drops-up-center{transform-origin:50%}.md-drppicker.shown .calendar{display:block}.md-drppicker.hidden{transition:.1s;transform:scale(0);transform-origin:0 0;cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-drppicker.hidden.drops-up-left{transform-origin:100% 100%}.md-drppicker.hidden.drops-up-right{transform-origin:0 100%}.md-drppicker.hidden.drops-down-left{transform-origin:100% 0}.md-drppicker.hidden.drops-down-right{transform-origin:0 0}.md-drppicker.hidden.drops-down-center{transform-origin:NaN}.md-drppicker.hidden.drops-up-center{transform-origin:50%}.md-drppicker.hidden .calendar{display:none}.md-drppicker .calendar{max-width:270px;margin:4px}.md-drppicker .calendar.single .calendar-table{border:none}.md-drppicker .calendar td,.md-drppicker .calendar th{padding:0;white-space:nowrap;text-align:center;min-width:32px}.md-drppicker .calendar td span,.md-drppicker .calendar th span{pointer-events:none}.md-drppicker .calendar-table{border:1px solid #fff;padding:4px;border-radius:4px;background-color:#fff}.md-drppicker table{width:100%;margin:0}.md-drppicker th{color:#988c8c}.md-drppicker td,.md-drppicker th{text-align:center;border-radius:4px;border:1px solid transparent;white-space:nowrap;cursor:pointer;height:2em;width:2em}.md-drppicker td.available.prev,.md-drppicker th.available.prev{display:block;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K);background-repeat:no-repeat;background-size:.5em;background-position:center;opacity:.8;transition:background-color .2s;border-radius:2em}.md-drppicker td.available.prev:hover,.md-drppicker th.available.prev:hover{margin:0}.md-drppicker td.available.next,.md-drppicker th.available.next{transform:rotate(180deg);display:block;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K);background-repeat:no-repeat;background-size:.5em;background-position:center;opacity:.8;transition:background-color .2s;border-radius:2em}.md-drppicker td.available.next:hover,.md-drppicker th.available.next:hover{margin:0;transform:rotate(180deg)}.md-drppicker td.available:hover,.md-drppicker th.available:hover{background-color:#eee;border-color:transparent;color:inherit;background-repeat:no-repeat;background-size:.5em;background-position:center;margin:.25em 0;opacity:.8;border-radius:2em;transform:scale(1);transition:450ms cubic-bezier(.23,1,.32,1)}.md-drppicker td.week,.md-drppicker th.week{font-size:80%;color:#ccc}.md-drppicker td{margin:.25em 0;opacity:.8;transition:450ms cubic-bezier(.23,1,.32,1);border-radius:2em;transform:scale(1)}.md-drppicker td.off,.md-drppicker td.off.end-date,.md-drppicker td.off.in-range,.md-drppicker td.off.start-date{background-color:#fff;border-color:transparent;color:#999}.md-drppicker td.in-range{background-color:#dde2e4;border-color:transparent;color:#000;border-radius:0}.md-drppicker td.start-date{border-radius:2em 0 0 2em}.md-drppicker td.end-date{border-radius:0 2em 2em 0}.md-drppicker td.start-date.end-date{border-radius:4px}.md-drppicker td.active{transition:background .3s ease-out;background:rgba(0,0,0,.1)}.md-drppicker td.active,.md-drppicker td.active:hover{background-color:#3f51b5;border-color:transparent;color:#fff}.md-drppicker th.month{width:auto}.md-drppicker option.disabled,.md-drppicker td.disabled{color:#999;cursor:not-allowed;text-decoration:line-through}.md-drppicker .dropdowns{background-repeat:no-repeat;background-size:10px;background-position-y:center;background-position-x:right;width:50px;background-image:url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI1NSAyNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NSAyNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iYXJyb3ctZHJvcC1kb3duIj4KCQk8cG9seWdvbiBwb2ludHM9IjAsNjMuNzUgMTI3LjUsMTkxLjI1IDI1NSw2My43NSAgICIgZmlsbD0iIzk4OGM4YyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)}.md-drppicker .dropdowns select{display:inline-block;background-color:rgba(255,255,255,.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.md-drppicker .dropdowns select.ampmselect,.md-drppicker .dropdowns select.hourselect,.md-drppicker .dropdowns select.minuteselect,.md-drppicker .dropdowns select.secondselect{width:50px;margin:0 auto;background:#eee;border:1px solid #eee;padding:2px;outline:0;font-size:12px}.md-drppicker .dropdowns select.monthselect,.md-drppicker .dropdowns select.yearselect{font-size:12px;height:auto;cursor:pointer;opacity:0;position:absolute;top:0;left:0;margin:0;padding:0}.md-drppicker th.month>div{position:relative;display:inline-block}.md-drppicker .calendar-time{text-align:center;margin:4px auto 0;line-height:30px;position:relative}.md-drppicker .calendar-time .select{display:inline}.md-drppicker .calendar-time .select .select-item{display:inline-block;width:auto;position:relative;font-family:inherit;background-color:transparent;padding:10px 10px 10px 0;font-size:18px;border-radius:0;border:none;border-bottom:1px solid rgba(0,0,0,.12)}.md-drppicker .calendar-time .select .select-item:after{position:absolute;top:18px;right:10px;width:0;height:0;padding:0;content:'';border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid rgba(0,0,0,.12);pointer-events:none}.md-drppicker .calendar-time .select .select-item:focus{outline:0}.md-drppicker .calendar-time .select .select-item .select-label{color:rgba(0,0,0,.26);font-size:16px;font-weight:400;position:absolute;pointer-events:none;left:0;top:10px;transition:.2s}.md-drppicker .calendar-time select.disabled{color:#ccc;cursor:not-allowed}.md-drppicker .label-input{border:1px solid #ccc;border-radius:4px;color:#555;height:30px;line-height:30px;display:block;vertical-align:middle;margin:0 auto 5px;padding:0 0 0 28px;width:100%}.md-drppicker .label-input.active{border:1px solid #08c;border-radius:4px}.md-drppicker .md-drppicker_input{position:relative;padding:0 30px 0 0}.md-drppicker .md-drppicker_input i,.md-drppicker .md-drppicker_input svg{position:absolute;left:8px;top:8px}.md-drppicker.rtl .label-input{padding-right:28px;padding-left:6px}.md-drppicker.rtl .md-drppicker_input i,.md-drppicker.rtl .md-drppicker_input svg{left:auto;right:8px}.md-drppicker .show-ranges .drp-calendar.left{border-left:1px solid #ddd}.md-drppicker .ranges{float:none;text-align:left;margin:0}.md-drppicker .ranges ul{list-style:none;margin:0 auto;padding:0;width:100%}.md-drppicker .ranges ul li{font-size:12px}.md-drppicker .ranges ul li button{padding:8px 12px;width:100%;background:0 0;border:none;text-align:left;cursor:pointer}.md-drppicker .ranges ul li button.active{background-color:#3f51b5;color:#fff}.md-drppicker .ranges ul li button[disabled]{opacity:.3}.md-drppicker .ranges ul li button:active{background:0 0}.md-drppicker .ranges ul li:hover{background-color:#eee}.md-drppicker .show-calendar .ranges{margin-top:8px}.md-drppicker [hidden]{display:none}.md-drppicker .buttons{text-align:right;margin:0 5px 5px 0}.md-drppicker .btn{position:relative;overflow:hidden;border-width:0;outline:0;padding:0 6px;cursor:pointer;border-radius:2px;box-shadow:0 1px 4px rgba(0,0,0,.6);background-color:#3f51b5;color:#ecf0f1;transition:background-color .4s;height:auto;text-transform:uppercase;line-height:36px;border:none}.md-drppicker .btn:focus,.md-drppicker .btn:hover{background-color:#3f51b5}.md-drppicker .btn>*{position:relative}.md-drppicker .btn span{display:block;padding:12px 24px}.md-drppicker .btn:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}.md-drppicker .btn:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}.md-drppicker .btn:disabled{opacity:.5}.md-drppicker .btn.btn-default{color:#000;background-color:#dcdcdc}.md-drppicker .clear{box-shadow:none;background-color:#fff!important}.md-drppicker .clear svg{color:#eb3232;fill:currentColor}@media (min-width:564px){.md-drppicker{width:auto}.md-drppicker.single .calendar.left{clear:none}.md-drppicker.ltr{direction:ltr;text-align:left}.md-drppicker.ltr .calendar.left{clear:left}.md-drppicker.ltr .calendar.left .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;padding-right:12px}.md-drppicker.ltr .calendar.right{margin-left:0}.md-drppicker.ltr .calendar.right .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.md-drppicker.ltr .left .md-drppicker_input,.md-drppicker.ltr .right .md-drppicker_input{padding-right:35px}.md-drppicker.ltr .calendar,.md-drppicker.ltr .ranges{float:left}.md-drppicker.rtl{direction:rtl;text-align:right}.md-drppicker.rtl .calendar.left{clear:right;margin-left:0}.md-drppicker.rtl .calendar.left .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.md-drppicker.rtl .calendar.right{margin-right:0}.md-drppicker.rtl .calendar.right .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0}.md-drppicker.rtl .calendar.left .calendar-table,.md-drppicker.rtl .left .md-drppicker_input{padding-left:12px}.md-drppicker.rtl .calendar,.md-drppicker.rtl .ranges{text-align:right;float:right}.drp-animate{transform:translate(0);transition:transform .2s,opacity .2s}.drp-animate.drp-picker-site-this{transition-timing-function:linear}.drp-animate.drp-animate-right{transform:translateX(10%);opacity:0}.drp-animate.drp-animate-left{transform:translateX(-10%);opacity:0}}@media (min-width:730px){.md-drppicker .ranges{width:auto}.md-drppicker.ltr .ranges{float:left}.md-drppicker.rtl .ranges{float:right}.md-drppicker .calendar.left{clear:none!important}}"],
        encapsulation: 2
      });

      DaterangepickerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: LocaleService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "startDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "endDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "dateLimit", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "minDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "maxDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "autoApply", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "singleDatePicker", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showDropdowns", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showWeekNumbers", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showISOWeekNumbers", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "linkedCalendars", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "autoUpdateInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "alwaysShowCalendars", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "maxSpan", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "lockStartDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "timePicker", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "timePicker24Hour", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "timePickerIncrement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "timePickerSeconds", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showClearButton", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "firstMonthDayClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "lastMonthDayClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "emptyWeekRowClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "emptyWeekColumnClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "firstDayOfNextMonthClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "lastDayOfPreviousMonthClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "locale", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "ranges", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showCustomRangeLabel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showCancel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "keepCalendarOpeningWithRange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "showRangeLabelOnInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "customRangeDirection", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "drops", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "opens", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "closeOnAutoApply", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerComponent.prototype, "choosedDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerComponent.prototype, "rangeClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerComponent.prototype, "datesUpdated", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerComponent.prototype, "startDateChanged", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerComponent.prototype, "endDateChanged", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('pickerContainer')], DaterangepickerComponent.prototype, "pickerContainer", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "isInvalidDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "isCustomDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerComponent.prototype, "isTooltipDate", null);
      var DaterangepickerDirective_1;
      var moment$2 = moment__WEBPACK_IMPORTED_MODULE_4__;

      var DaterangepickerDirective = DaterangepickerDirective_1 = /*#__PURE__*/function () {
        function DaterangepickerDirective(viewContainerRef, _changeDetectorRef, _componentFactoryResolver, _el, _renderer, differs, _localeService, elementRef) {
          _classCallCheck(this, DaterangepickerDirective);

          this.viewContainerRef = viewContainerRef;
          this._changeDetectorRef = _changeDetectorRef;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._el = _el;
          this._renderer = _renderer;
          this.differs = differs;
          this._localeService = _localeService;
          this.elementRef = elementRef;
          this._onChange = Function.prototype;
          this._onTouched = Function.prototype;
          this._validatorChange = Function.prototype;
          this.dateLimit = null;
          this.showCancel = false;
          this.lockStartDate = false; // timepicker variables

          this.timePicker = false;
          this.timePicker24Hour = false;
          this.timePickerIncrement = 1;
          this.timePickerSeconds = false;
          this.closeOnAutoApply = true;
          this._locale = {};
          this._endKey = 'endDate';
          this._startKey = 'startDate';
          this.notForChangesProperty = ['locale', 'endKey', 'startKey'];
          this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.rangeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.datesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.startDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.endDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.drops = 'down';
          this.opens = 'auto';

          var componentFactory = this._componentFactoryResolver.resolveComponentFactory(DaterangepickerComponent);

          viewContainerRef.clear();
          var componentRef = viewContainerRef.createComponent(componentFactory);
          this.picker = componentRef.instance;
          this.picker.inline = false; // set inline to false for all directive usage
        }

        _createClass(DaterangepickerDirective, [{
          key: "locale",
          get: function get() {
            return this._locale;
          },
          set: function set(value) {
            this._locale = Object.assign({}, this._localeService.config, value);
          }
        }, {
          key: "startKey",
          set: function set(value) {
            if (value !== null) {
              this._startKey = value;
            } else {
              this._startKey = 'startDate';
            }
          }
        }, {
          key: "endKey",
          set: function set(value) {
            if (value !== null) {
              this._endKey = value;
            } else {
              this._endKey = 'endDate';
            }
          }
        }, {
          key: "value",
          get: function get() {
            return this._value || null;
          },
          set: function set(val) {
            this._value = val;

            this._onChange(val);

            this._changeDetectorRef.markForCheck();
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.picker.startDateChanged.asObservable().subscribe(function (itemChanged) {
              _this12.startDateChanged.emit(itemChanged);
            });
            this.picker.endDateChanged.asObservable().subscribe(function (itemChanged) {
              _this12.endDateChanged.emit(itemChanged);
            });
            this.picker.rangeClicked.asObservable().subscribe(function (range) {
              _this12.rangeClicked.emit(range);
            });
            this.picker.datesUpdated.asObservable().subscribe(function (range) {
              _this12.datesUpdated.emit(range);
            });
            this.picker.choosedDate.asObservable().subscribe(function (change) {
              if (change) {
                var value = {};
                value[_this12._startKey] = change.startDate;
                value[_this12._endKey] = change.endDate;
                _this12.value = value;

                _this12.onChange.emit(value);

                if (typeof change.chosenLabel === 'string') {
                  _this12._el.nativeElement.value = change.chosenLabel;
                }
              }
            });
            this.picker.firstMonthDayClass = this.firstMonthDayClass;
            this.picker.lastMonthDayClass = this.lastMonthDayClass;
            this.picker.emptyWeekRowClass = this.emptyWeekRowClass;
            this.picker.emptyWeekColumnClass = this.emptyWeekColumnClass;
            this.picker.firstDayOfNextMonthClass = this.firstDayOfNextMonthClass;
            this.picker.lastDayOfPreviousMonthClass = this.lastDayOfPreviousMonthClass;
            this.picker.drops = this.drops;
            this.picker.opens = this.opens;
            this.localeDiffer = this.differs.find(this.locale).create();
            this.picker.closeOnAutoApply = this.closeOnAutoApply;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var change in changes) {
              if (changes.hasOwnProperty(change)) {
                if (this.notForChangesProperty.indexOf(change) === -1) {
                  this.picker[change] = changes[change].currentValue;
                }
              }
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.localeDiffer) {
              var changes = this.localeDiffer.diff(this.locale);

              if (changes) {
                this.picker.updateLocale(this.locale);
              }
            }
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            this._onTouched();
          }
        }, {
          key: "open",
          value: function open(event) {
            var _this13 = this;

            if (this.disabled) {
              return;
            }

            this.picker.show(event);
            setTimeout(function () {
              _this13.setPosition();
            });
          }
        }, {
          key: "hide",
          value: function hide(e) {
            this.picker.hide(e);
          }
        }, {
          key: "toggle",
          value: function toggle(e) {
            if (this.picker.isShown) {
              this.hide(e);
            } else {
              this.open(e);
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.picker.clear();
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.setValue(value);
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(state) {
            this._disabled = state;
          }
        }, {
          key: "setValue",
          value: function setValue(val) {
            if (val) {
              this.value = val;

              if (val[this._startKey]) {
                this.picker.setStartDate(val[this._startKey]);
              }

              if (val[this._endKey]) {
                this.picker.setEndDate(val[this._endKey]);
              }

              this.picker.calculateChosenLabel();

              if (this.picker.chosenLabel) {
                this._el.nativeElement.value = this.picker.chosenLabel;
              }
            } else {
              this.picker.clear();
            }
          }
          /**
           * Set position of the calendar
           */

        }, {
          key: "setPosition",
          value: function setPosition() {
            var style;
            var containerTop;
            var container = this.picker.pickerContainer.nativeElement;
            var element = this._el.nativeElement;

            if (this.drops && this.drops === 'up') {
              containerTop = element.offsetTop - container.clientHeight + 'px';
            } else {
              containerTop = 'auto';
            }

            if (this.opens === 'left') {
              style = {
                top: containerTop,
                left: element.offsetLeft - container.clientWidth + element.clientWidth + 'px',
                right: 'auto'
              };
            } else if (this.opens === 'center') {
              style = {
                top: containerTop,
                left: element.offsetLeft + element.clientWidth / 2 - container.clientWidth / 2 + 'px',
                right: 'auto'
              };
            } else if (this.opens === 'right') {
              style = {
                top: containerTop,
                left: element.offsetLeft + 'px',
                right: 'auto'
              };
            } else {
              var position = element.offsetLeft + element.clientWidth / 2 - container.clientWidth / 2;

              if (position < 0) {
                style = {
                  top: containerTop,
                  left: element.offsetLeft + 'px',
                  right: 'auto'
                };
              } else {
                style = {
                  top: containerTop,
                  left: position + 'px',
                  right: 'auto'
                };
              }
            }

            if (style) {
              this._renderer.setStyle(container, 'top', style.top);

              this._renderer.setStyle(container, 'left', style.left);

              this._renderer.setStyle(container, 'right', style.right);
            }
          }
        }, {
          key: "inputChanged",
          value: function inputChanged(e) {
            if (e.target.tagName.toLowerCase() !== 'input') {
              return;
            }

            if (!e.target.value.length) {
              return;
            }

            var dateString = e.target.value.split(this.picker.locale.separator);
            var start = null,
                end = null;

            if (dateString.length === 2) {
              start = moment$2(dateString[0], this.picker.locale.format);
              end = moment$2(dateString[1], this.picker.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
              start = moment$2(e.target.value, this.picker.locale.format);
              end = start;
            }

            if (!start.isValid() || !end.isValid()) {
              return;
            }

            this.picker.setStartDate(start);
            this.picker.setEndDate(end);
            this.picker.updateView();
          }
          /**
           * For click outside of the calendar's container
           * @param event event object
           */

        }, {
          key: "outsideClick",
          value: function outsideClick(event) {
            if (!event.target) {
              return;
            }

            if (event.target.classList.contains('ngx-daterangepicker-action')) {
              return;
            }

            if (!this.elementRef.nativeElement.contains(event.target)) {
              this.hide();
            }
          }
        }]);

        return DaterangepickerDirective;
      }();

      DaterangepickerDirective.??fac = function DaterangepickerDirective_Factory(t) {
        return new (t || DaterangepickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](LocaleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      DaterangepickerDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({
        type: DaterangepickerDirective,
        selectors: [["input", "ngxDaterangepickerMd", ""]],
        hostVars: 1,
        hostBindings: function DaterangepickerDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("keyup.esc", function DaterangepickerDirective_keyup_esc_HostBindingHandler() {
              return ctx.hide();
            })("blur", function DaterangepickerDirective_blur_HostBindingHandler() {
              return ctx.onBlur();
            })("click", function DaterangepickerDirective_click_HostBindingHandler() {
              return ctx.open();
            })("keyup", function DaterangepickerDirective_keyup_HostBindingHandler($event) {
              return ctx.inputChanged($event);
            })("click", function DaterangepickerDirective_click_HostBindingHandler($event) {
              return ctx.outsideClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveDocument"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????hostProperty"]("disabled", ctx.disabled);
          }
        },
        inputs: {
          dateLimit: "dateLimit",
          showCancel: "showCancel",
          lockStartDate: "lockStartDate",
          timePicker: "timePicker",
          timePicker24Hour: "timePicker24Hour",
          timePickerIncrement: "timePickerIncrement",
          timePickerSeconds: "timePickerSeconds",
          closeOnAutoApply: "closeOnAutoApply",
          _endKey: "_endKey",
          drops: "drops",
          opens: "opens",
          locale: "locale",
          startKey: "startKey",
          endKey: "endKey",
          minDate: "minDate",
          maxDate: "maxDate",
          autoApply: "autoApply",
          alwaysShowCalendars: "alwaysShowCalendars",
          showCustomRangeLabel: "showCustomRangeLabel",
          linkedCalendars: "linkedCalendars",
          singleDatePicker: "singleDatePicker",
          showWeekNumbers: "showWeekNumbers",
          showISOWeekNumbers: "showISOWeekNumbers",
          showDropdowns: "showDropdowns",
          isInvalidDate: "isInvalidDate",
          isCustomDate: "isCustomDate",
          isTooltipDate: "isTooltipDate",
          showClearButton: "showClearButton",
          customRangeDirection: "customRangeDirection",
          ranges: "ranges",
          lastMonthDayClass: "lastMonthDayClass",
          emptyWeekRowClass: "emptyWeekRowClass",
          emptyWeekColumnClass: "emptyWeekColumnClass",
          firstDayOfNextMonthClass: "firstDayOfNextMonthClass",
          lastDayOfPreviousMonthClass: "lastDayOfPreviousMonthClass",
          keepCalendarOpeningWithRange: "keepCalendarOpeningWithRange",
          showRangeLabelOnInput: "showRangeLabelOnInput"
        },
        outputs: {
          onChange: "change",
          rangeClicked: "rangeClicked",
          datesUpdated: "datesUpdated",
          startDateChanged: "startDateChanged",
          endDateChanged: "endDateChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????ProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
            return DaterangepickerDirective_1;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????NgOnChangesFeature"]]
      });

      DaterangepickerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]
        }, {
          type: LocaleService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "minDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "maxDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "autoApply", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "alwaysShowCalendars", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showCustomRangeLabel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "linkedCalendars", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "dateLimit", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "singleDatePicker", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showWeekNumbers", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showISOWeekNumbers", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showDropdowns", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "isInvalidDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "isCustomDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "isTooltipDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showClearButton", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "customRangeDirection", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "ranges", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "opens", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "drops", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "lastMonthDayClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "emptyWeekRowClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "emptyWeekColumnClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "firstDayOfNextMonthClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "lastDayOfPreviousMonthClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "keepCalendarOpeningWithRange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showRangeLabelOnInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "showCancel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "lockStartDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "timePicker", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "timePicker24Hour", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "timePickerIncrement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "timePickerSeconds", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "closeOnAutoApply", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "locale", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "_endKey", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "startKey", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DaterangepickerDirective.prototype, "endKey", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('change')], DaterangepickerDirective.prototype, "onChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('rangeClicked')], DaterangepickerDirective.prototype, "rangeClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('datesUpdated')], DaterangepickerDirective.prototype, "datesUpdated", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerDirective.prototype, "startDateChanged", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], DaterangepickerDirective.prototype, "endDateChanged", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('disabled')], DaterangepickerDirective.prototype, "disabled", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:click', ['$event'])], DaterangepickerDirective.prototype, "outsideClick", null);
      var NgxDaterangepickerMd_1;

      var NgxDaterangepickerMd = NgxDaterangepickerMd_1 = /*#__PURE__*/function () {
        function NgxDaterangepickerMd() {
          _classCallCheck(this, NgxDaterangepickerMd);
        }

        _createClass(NgxDaterangepickerMd, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: NgxDaterangepickerMd_1,
              providers: [{
                provide: LOCALE_CONFIG,
                useValue: config
              }, {
                provide: LocaleService,
                useClass: LocaleService,
                deps: [LOCALE_CONFIG]
              }]
            };
          }
        }]);

        return NgxDaterangepickerMd;
      }();

      NgxDaterangepickerMd.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: NgxDaterangepickerMd
      });
      NgxDaterangepickerMd.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        factory: function NgxDaterangepickerMd_Factory(t) {
          return new (t || NgxDaterangepickerMd)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](LocaleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [LOCALE_CONFIG]
            }]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](DaterangepickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'ngx-daterangepicker-material',
            template: "<div class=\"md-drppicker\" #pickerContainer\n[ngClass]=\"{\n    ltr: locale.direction === 'ltr',\n    rtl: this.locale.direction === 'rtl',\n    'shown': isShown || inline,\n    'hidden': !isShown && !inline,\n    'inline': inline,\n    'double': !singleDatePicker && showCalInRanges,\n    'show-ranges': rangesArray.length\n}\" [class]=\"'drops-' + drops + '-' + opens\">\n    <div class=\"ranges\">\n        <ul>\n          <li *ngFor=\"let range of rangesArray\">\n            <button type=\"button\"\n                    (click)=\"clickRange($event, range)\"\n                    [disabled]=\"disableRange(range)\"\n                    [ngClass]=\"{'active': range === chosenRange}\">{{range}}</button>\n          </li>\n        </ul>\n    </div>\n    <div class=\"calendar\" [ngClass]=\"{right: singleDatePicker, left: !singleDatePicker}\"\n        *ngIf=\"showCalInRanges\">\n        <div class=\"calendar-table\">\n            <table class=\"table-condensed\" *ngIf=\"calendarVariables\">\n                <thead>\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\"></th>\n                        <ng-container *ngIf=\"!calendarVariables.left.minDate || calendarVariables.left.minDate.isBefore(calendarVariables.left.calendar.firstDay) && (!this.linkedCalendars || true)\">\n                            <th (click)=\"clickPrev(sideEnum.left)\" class=\"prev available\" >\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!(!calendarVariables.left.minDate || calendarVariables.left.minDate.isBefore(calendarVariables.left.calendar.firstDay) && (!this.linkedCalendars || true))\">\n                            <th></th>\n                        </ng-container>\n                        <th colspan=\"5\" class=\"month drp-animate\">\n                            <ng-container *ngIf=\"showDropdowns && calendarVariables.left.dropdowns\">\n                                <div class=\"dropdowns\">\n                                        {{this.locale.monthNames[calendarVariables?.left?.calendar[1][1].month()]}}\n                                        <select class=\"monthselect\" (change)=\"monthChanged($event, sideEnum.left)\">\n                                                <option\n                                                [disabled]=\"(calendarVariables.left.dropdowns.inMinYear && m < calendarVariables.left.minDate.month()) || (calendarVariables.left.dropdowns.inMaxYear && m > calendarVariables.left.maxDate.month())\"\n                                                *ngFor=\"let m of calendarVariables.left.dropdowns.monthArrays\" [value]=\"m\" [selected]=\"calendarVariables.left.dropdowns.currentMonth == m\">\n                                                    {{locale.monthNames[m]}}\n                                                </option>\n                                        </select>\n                                </div>\n                                <div class=\"dropdowns\">\n                                    {{ calendarVariables?.left?.calendar[1][1].format(\" YYYY\")}}\n                                    <select class=\"yearselect\"  (change)=\"yearChanged($event, sideEnum.left)\">\n                                        <option *ngFor=\"let y of calendarVariables.left.dropdowns.yearArrays\" [selected]=\"y === calendarVariables.left.dropdowns.currentYear\">\n                                            {{y}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!showDropdowns || !calendarVariables.left.dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.left?.calendar[1][1].month()]}}  {{ calendarVariables?.left?.calendar[1][1].format(\" YYYY\")}}\n                            </ng-container>\n                        </th>\n                        <ng-container *ngIf=\"(!calendarVariables.left.maxDate || calendarVariables.left.maxDate.isAfter(calendarVariables.left.calendar.lastDay)) && (!linkedCalendars || singleDatePicker )\">\n                            <th class=\"next available\" (click)=\"clickNext(sideEnum.left)\">\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!((!calendarVariables.left.maxDate || calendarVariables.left.maxDate.isAfter(calendarVariables.left.calendar.lastDay)) && (!linkedCalendars || singleDatePicker ))\">\n                            <th></th>\n                        </ng-container>\n                    </tr>\n                    <tr class='week-days'>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\" class=\"week\"><span>{{this.locale.weekLabel}}</span></th>\n                        <th *ngFor=\"let dayofweek of locale.daysOfWeek\"><span>{{dayofweek}}</span></th>\n                    </tr>\n                </thead>\n                <tbody class=\"drp-animate\">\n                    <tr *ngFor=\"let row of calendarVariables.left.calRows\" [class]=\"calendarVariables.left.classes[row].classList\">\n                        <!-- add week number -->\n                        <td  class=\"week\" *ngIf=\"showWeekNumbers\">\n                            <span>{{calendarVariables.left.calendar[row][0].week()}}</span>\n                        </td>\n                        <td class=\"week\" *ngIf=\"showISOWeekNumbers\">\n                            <span>{{calendarVariables.left.calendar[row][0].isoWeek()}}</span>\n                        </td>\n                        <!-- cal -->\n                        <td *ngFor=\"let col of calendarVariables.left.calCols\" [class]=\"calendarVariables.left.classes[row][col]\" (click)=\"clickDate($event, sideEnum.left, row, col)\" (mouseenter)=\"hoverDate($event, sideEnum.left, row, col)\">\n                            <span>{{calendarVariables.left.calendar[row][col].date()}}</span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"calendar-time\" *ngIf=\"timePicker\">\n            <div class=\"select\">\n                <select class=\"hourselect select-item\" [disabled]=\"!startDate\" [(ngModel)]=\"timepickerVariables.left.selectedHour\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option *ngFor=\"let i of timepickerVariables.left.hours\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.left.disabledHours.indexOf(i) > -1\">{{i}}</option>\n                </select>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item minuteselect\" [disabled]=\"!startDate\" [(ngModel)]=\"timepickerVariables.left.selectedMinute\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option *ngFor=\"let i of timepickerVariables.left.minutes; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.left.disabledMinutes.indexOf(i) > -1\">{{timepickerVariables.left.minutesLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item secondselect\" *ngIf=\"timePickerSeconds\" [disabled]=\"!startDate\" [(ngModel)]=\"timepickerVariables.left.selectedSecond\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option *ngFor=\"let i of timepickerVariables.left.seconds; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.left.disabledSeconds.indexOf(i) > -1\">{{timepickerVariables.left.secondsLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item ampmselect\" *ngIf=\"!timePicker24Hour\" [(ngModel)]=\"timepickerVariables.left.ampmModel\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option value=\"AM\" [disabled]=\"timepickerVariables.left.amDisabled\">AM</option>\n                    <option value=\"PM\"  [disabled]=\"timepickerVariables.left.pmDisabled\">PM</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"calendar right\"\n        *ngIf=\"showCalInRanges && !singleDatePicker\"\n        >\n        <div class=\"calendar-table\">\n            <table class=\"table-condensed\" *ngIf=\"calendarVariables\">\n                <thead>\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\"></th>\n                        <ng-container *ngIf=\"(!calendarVariables.right.minDate || calendarVariables.right.minDate.isBefore(calendarVariables.right.calendar.firstDay)) && (!this.linkedCalendars)\">\n                            <th (click)=\"clickPrev(sideEnum.right)\" class=\"prev available\" >\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!((!calendarVariables.right.minDate || calendarVariables.right.minDate.isBefore(calendarVariables.right.calendar.firstDay)) && (!this.linkedCalendars))\">\n                            <th></th>\n                        </ng-container>\n                        <th colspan=\"5\" class=\"month\">\n                            <ng-container *ngIf=\"showDropdowns && calendarVariables.right.dropdowns\">\n                                <div class=\"dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.right?.calendar[1][1].month()]}}\n                                    <select class=\"monthselect\" (change)=\"monthChanged($event, sideEnum.right)\">\n                                            <option\n                                            [disabled]=\"(calendarVariables.right.dropdowns.inMinYear && calendarVariables.right.minDate && m < calendarVariables.right.minDate.month()) || (calendarVariables.right.dropdowns.inMaxYear && calendarVariables.right.maxDate && m > calendarVariables.right.maxDate.month())\"\n                                            *ngFor=\"let m of calendarVariables.right.dropdowns.monthArrays\" [value]=\"m\" [selected]=\"calendarVariables.right.dropdowns.currentMonth == m\">\n                                                {{locale.monthNames[m]}}\n                                            </option>\n                                    </select>\n                                </div>\n                                <div class=\"dropdowns\">\n                                        {{ calendarVariables?.right?.calendar[1][1].format(\" YYYY\")}}\n                                        <select class=\"yearselect\" (change)=\"yearChanged($event, sideEnum.right)\">\n                                        <option *ngFor=\"let y of calendarVariables.right.dropdowns.yearArrays\" [selected]=\"y === calendarVariables.right.dropdowns.currentYear\">\n                                            {{y}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!showDropdowns || !calendarVariables.right.dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.right?.calendar[1][1].month()]}}  {{ calendarVariables?.right?.calendar[1][1].format(\" YYYY\")}}\n                            </ng-container>\n                        </th>\n                            <ng-container *ngIf=\"!calendarVariables.right.maxDate || calendarVariables.right.maxDate.isAfter(calendarVariables.right.calendar.lastDay) && (!linkedCalendars || singleDatePicker || true)\">\n                                <th class=\"next available\" (click)=\"clickNext(sideEnum.right)\">\n                                </th>\n                            </ng-container>\n                            <ng-container *ngIf=\"!(!calendarVariables.right.maxDate || calendarVariables.right.maxDate.isAfter(calendarVariables.right.calendar.lastDay) && (!linkedCalendars || singleDatePicker || true))\">\n                                <th></th>\n                            </ng-container>\n                    </tr>\n\n                    <tr class='week-days'>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\" class=\"week\"><span>{{this.locale.weekLabel}}</span></th>\n                        <th *ngFor=\"let dayofweek of locale.daysOfWeek\"><span>{{dayofweek}}</span></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let row of calendarVariables.right.calRows\" [class]=\"calendarVariables.right.classes[row].classList\">\n                        <td class=\"week\" *ngIf=\"showWeekNumbers\">\n                            <span>{{calendarVariables.right.calendar[row][0].week()}}</span>\n                        </td>\n                        <td class=\"week\" *ngIf=\"showISOWeekNumbers\">\n                            <span>{{calendarVariables.right.calendar[row][0].isoWeek()}}</span>\n                        </td>\n                        <td *ngFor=\"let col of calendarVariables.right.calCols\" [class]=\"calendarVariables.right.classes[row][col]\" (click)=\"clickDate($event, sideEnum.right, row, col)\" (mouseenter)=\"hoverDate($event, sideEnum.right, row, col)\">\n                            <span>{{calendarVariables.right.calendar[row][col].date()}}</span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"calendar-time\" *ngIf=\"timePicker\">\n            <div class=\"select\">\n                <select class=\"select-item hourselect\" [disabled]=\"!startDate\" [(ngModel)]=\"timepickerVariables.right.selectedHour\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option *ngFor=\"let i of timepickerVariables.right.hours\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.right.disabledHours.indexOf(i) > -1\">{{i}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item minuteselect\" [disabled]=\"!startDate\" [(ngModel)]=\"timepickerVariables.right.selectedMinute\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option *ngFor=\"let i of timepickerVariables.right.minutes; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.right.disabledMinutes.indexOf(i) > -1\">{{timepickerVariables.right.minutesLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select *ngIf=\"timePickerSeconds\" class=\"select-item secondselect\" [disabled]=\"!startDate\" [(ngModel)]=\"timepickerVariables.right.selectedSecond\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option *ngFor=\"let i of timepickerVariables.right.seconds; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.right.disabledSeconds.indexOf(i) > -1\">{{timepickerVariables.right.secondsLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select *ngIf=\"!timePicker24Hour\" class=\"select-item ampmselect\" [(ngModel)]=\"timepickerVariables.right.ampmModel\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option value=\"AM\" [disabled]=\"timepickerVariables.right.amDisabled\">AM</option>\n                    <option value=\"PM\"  [disabled]=\"timepickerVariables.right.pmDisabled\">PM</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"buttons\" *ngIf=\"!autoApply && ( !rangesArray.length || (showCalInRanges && !singleDatePicker))\">\n        <div class=\"buttons_input\">\n            <button  *ngIf=\"showClearButton\" class=\"btn btn-default clear\" type=\"button\" (click)=\"clear()\" [title]=\"locale.clearLabel\">\n                {{locale.clearLabel}}\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 -5 24 24\"><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"/></svg>\n            </button>\n            <button class=\"btn btn-default\" *ngIf=\"showCancel\" type=\"button\" (click)=\"clickCancel($event)\">{{locale.cancelLabel}}</button>\n            <button class=\"btn\"  [disabled]=\"applyBtn.disabled\" type=\"button\" (click)=\"clickApply($event)\">{{locale.applyLabel}}</button>\n        </div>\n    </div>\n</div>\n",
            host: {
              '(click)': 'handleInternalClick($event)'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
                return DaterangepickerComponent_1;
              }),
              multi: true
            }],
            styles: [".md-drppicker{position:absolute;font-family:Roboto,sans-serif;color:inherit;border-radius:4px;width:278px;padding:4px;margin-top:-10px;overflow:hidden;z-index:1000;font-size:14px;background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 8px 0 rgba(0,0,0,.12)}.md-drppicker.double{width:auto}.md-drppicker.inline{position:relative;display:inline-block}.md-drppicker:after,.md-drppicker:before{position:absolute;display:inline-block;border-bottom-color:rgba(0,0,0,.2);content:''}.md-drppicker.openscenter:after,.md-drppicker.openscenter:before{left:0;right:0;width:0;margin-left:auto;margin-right:auto}.md-drppicker.single .calendar,.md-drppicker.single .ranges{float:none}.md-drppicker.shown{transform:scale(1);transition:.1s ease-in-out;transform-origin:0 0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-drppicker.shown.drops-up-left{transform-origin:100% 100%}.md-drppicker.shown.drops-up-right{transform-origin:0 100%}.md-drppicker.shown.drops-down-left{transform-origin:100% 0}.md-drppicker.shown.drops-down-right{transform-origin:0 0}.md-drppicker.shown.drops-down-center{transform-origin:NaN}.md-drppicker.shown.drops-up-center{transform-origin:50%}.md-drppicker.shown .calendar{display:block}.md-drppicker.hidden{transition:.1s;transform:scale(0);transform-origin:0 0;cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-drppicker.hidden.drops-up-left{transform-origin:100% 100%}.md-drppicker.hidden.drops-up-right{transform-origin:0 100%}.md-drppicker.hidden.drops-down-left{transform-origin:100% 0}.md-drppicker.hidden.drops-down-right{transform-origin:0 0}.md-drppicker.hidden.drops-down-center{transform-origin:NaN}.md-drppicker.hidden.drops-up-center{transform-origin:50%}.md-drppicker.hidden .calendar{display:none}.md-drppicker .calendar{max-width:270px;margin:4px}.md-drppicker .calendar.single .calendar-table{border:none}.md-drppicker .calendar td,.md-drppicker .calendar th{padding:0;white-space:nowrap;text-align:center;min-width:32px}.md-drppicker .calendar td span,.md-drppicker .calendar th span{pointer-events:none}.md-drppicker .calendar-table{border:1px solid #fff;padding:4px;border-radius:4px;background-color:#fff}.md-drppicker table{width:100%;margin:0}.md-drppicker th{color:#988c8c}.md-drppicker td,.md-drppicker th{text-align:center;border-radius:4px;border:1px solid transparent;white-space:nowrap;cursor:pointer;height:2em;width:2em}.md-drppicker td.available.prev,.md-drppicker th.available.prev{display:block;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K);background-repeat:no-repeat;background-size:.5em;background-position:center;opacity:.8;transition:background-color .2s;border-radius:2em}.md-drppicker td.available.prev:hover,.md-drppicker th.available.prev:hover{margin:0}.md-drppicker td.available.next,.md-drppicker th.available.next{transform:rotate(180deg);display:block;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K);background-repeat:no-repeat;background-size:.5em;background-position:center;opacity:.8;transition:background-color .2s;border-radius:2em}.md-drppicker td.available.next:hover,.md-drppicker th.available.next:hover{margin:0;transform:rotate(180deg)}.md-drppicker td.available:hover,.md-drppicker th.available:hover{background-color:#eee;border-color:transparent;color:inherit;background-repeat:no-repeat;background-size:.5em;background-position:center;margin:.25em 0;opacity:.8;border-radius:2em;transform:scale(1);transition:450ms cubic-bezier(.23,1,.32,1)}.md-drppicker td.week,.md-drppicker th.week{font-size:80%;color:#ccc}.md-drppicker td{margin:.25em 0;opacity:.8;transition:450ms cubic-bezier(.23,1,.32,1);border-radius:2em;transform:scale(1)}.md-drppicker td.off,.md-drppicker td.off.end-date,.md-drppicker td.off.in-range,.md-drppicker td.off.start-date{background-color:#fff;border-color:transparent;color:#999}.md-drppicker td.in-range{background-color:#dde2e4;border-color:transparent;color:#000;border-radius:0}.md-drppicker td.start-date{border-radius:2em 0 0 2em}.md-drppicker td.end-date{border-radius:0 2em 2em 0}.md-drppicker td.start-date.end-date{border-radius:4px}.md-drppicker td.active{transition:background .3s ease-out;background:rgba(0,0,0,.1)}.md-drppicker td.active,.md-drppicker td.active:hover{background-color:#3f51b5;border-color:transparent;color:#fff}.md-drppicker th.month{width:auto}.md-drppicker option.disabled,.md-drppicker td.disabled{color:#999;cursor:not-allowed;text-decoration:line-through}.md-drppicker .dropdowns{background-repeat:no-repeat;background-size:10px;background-position-y:center;background-position-x:right;width:50px;background-image:url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI1NSAyNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NSAyNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iYXJyb3ctZHJvcC1kb3duIj4KCQk8cG9seWdvbiBwb2ludHM9IjAsNjMuNzUgMTI3LjUsMTkxLjI1IDI1NSw2My43NSAgICIgZmlsbD0iIzk4OGM4YyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)}.md-drppicker .dropdowns select{display:inline-block;background-color:rgba(255,255,255,.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.md-drppicker .dropdowns select.ampmselect,.md-drppicker .dropdowns select.hourselect,.md-drppicker .dropdowns select.minuteselect,.md-drppicker .dropdowns select.secondselect{width:50px;margin:0 auto;background:#eee;border:1px solid #eee;padding:2px;outline:0;font-size:12px}.md-drppicker .dropdowns select.monthselect,.md-drppicker .dropdowns select.yearselect{font-size:12px;height:auto;cursor:pointer;opacity:0;position:absolute;top:0;left:0;margin:0;padding:0}.md-drppicker th.month>div{position:relative;display:inline-block}.md-drppicker .calendar-time{text-align:center;margin:4px auto 0;line-height:30px;position:relative}.md-drppicker .calendar-time .select{display:inline}.md-drppicker .calendar-time .select .select-item{display:inline-block;width:auto;position:relative;font-family:inherit;background-color:transparent;padding:10px 10px 10px 0;font-size:18px;border-radius:0;border:none;border-bottom:1px solid rgba(0,0,0,.12)}.md-drppicker .calendar-time .select .select-item:after{position:absolute;top:18px;right:10px;width:0;height:0;padding:0;content:'';border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid rgba(0,0,0,.12);pointer-events:none}.md-drppicker .calendar-time .select .select-item:focus{outline:0}.md-drppicker .calendar-time .select .select-item .select-label{color:rgba(0,0,0,.26);font-size:16px;font-weight:400;position:absolute;pointer-events:none;left:0;top:10px;transition:.2s}.md-drppicker .calendar-time select.disabled{color:#ccc;cursor:not-allowed}.md-drppicker .label-input{border:1px solid #ccc;border-radius:4px;color:#555;height:30px;line-height:30px;display:block;vertical-align:middle;margin:0 auto 5px;padding:0 0 0 28px;width:100%}.md-drppicker .label-input.active{border:1px solid #08c;border-radius:4px}.md-drppicker .md-drppicker_input{position:relative;padding:0 30px 0 0}.md-drppicker .md-drppicker_input i,.md-drppicker .md-drppicker_input svg{position:absolute;left:8px;top:8px}.md-drppicker.rtl .label-input{padding-right:28px;padding-left:6px}.md-drppicker.rtl .md-drppicker_input i,.md-drppicker.rtl .md-drppicker_input svg{left:auto;right:8px}.md-drppicker .show-ranges .drp-calendar.left{border-left:1px solid #ddd}.md-drppicker .ranges{float:none;text-align:left;margin:0}.md-drppicker .ranges ul{list-style:none;margin:0 auto;padding:0;width:100%}.md-drppicker .ranges ul li{font-size:12px}.md-drppicker .ranges ul li button{padding:8px 12px;width:100%;background:0 0;border:none;text-align:left;cursor:pointer}.md-drppicker .ranges ul li button.active{background-color:#3f51b5;color:#fff}.md-drppicker .ranges ul li button[disabled]{opacity:.3}.md-drppicker .ranges ul li button:active{background:0 0}.md-drppicker .ranges ul li:hover{background-color:#eee}.md-drppicker .show-calendar .ranges{margin-top:8px}.md-drppicker [hidden]{display:none}.md-drppicker .buttons{text-align:right;margin:0 5px 5px 0}.md-drppicker .btn{position:relative;overflow:hidden;border-width:0;outline:0;padding:0 6px;cursor:pointer;border-radius:2px;box-shadow:0 1px 4px rgba(0,0,0,.6);background-color:#3f51b5;color:#ecf0f1;transition:background-color .4s;height:auto;text-transform:uppercase;line-height:36px;border:none}.md-drppicker .btn:focus,.md-drppicker .btn:hover{background-color:#3f51b5}.md-drppicker .btn>*{position:relative}.md-drppicker .btn span{display:block;padding:12px 24px}.md-drppicker .btn:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}.md-drppicker .btn:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}.md-drppicker .btn:disabled{opacity:.5}.md-drppicker .btn.btn-default{color:#000;background-color:#dcdcdc}.md-drppicker .clear{box-shadow:none;background-color:#fff!important}.md-drppicker .clear svg{color:#eb3232;fill:currentColor}@media (min-width:564px){.md-drppicker{width:auto}.md-drppicker.single .calendar.left{clear:none}.md-drppicker.ltr{direction:ltr;text-align:left}.md-drppicker.ltr .calendar.left{clear:left}.md-drppicker.ltr .calendar.left .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;padding-right:12px}.md-drppicker.ltr .calendar.right{margin-left:0}.md-drppicker.ltr .calendar.right .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.md-drppicker.ltr .left .md-drppicker_input,.md-drppicker.ltr .right .md-drppicker_input{padding-right:35px}.md-drppicker.ltr .calendar,.md-drppicker.ltr .ranges{float:left}.md-drppicker.rtl{direction:rtl;text-align:right}.md-drppicker.rtl .calendar.left{clear:right;margin-left:0}.md-drppicker.rtl .calendar.left .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.md-drppicker.rtl .calendar.right{margin-right:0}.md-drppicker.rtl .calendar.right .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0}.md-drppicker.rtl .calendar.left .calendar-table,.md-drppicker.rtl .left .md-drppicker_input{padding-left:12px}.md-drppicker.rtl .calendar,.md-drppicker.rtl .ranges{text-align:right;float:right}.drp-animate{transform:translate(0);transition:transform .2s,opacity .2s}.drp-animate.drp-picker-site-this{transition-timing-function:linear}.drp-animate.drp-animate-right{transform:translateX(10%);opacity:0}.drp-animate.drp-animate-left{transform:translateX(-10%);opacity:0}}@media (min-width:730px){.md-drppicker .ranges{width:auto}.md-drppicker.ltr .ranges{float:left}.md-drppicker.rtl .ranges{float:right}.md-drppicker .calendar.left{clear:none!important}}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: LocaleService
          }];
        }, {
          startDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          endDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          dateLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          autoApply: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          singleDatePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showDropdowns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showWeekNumbers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showISOWeekNumbers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          linkedCalendars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          autoUpdateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          alwaysShowCalendars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          maxSpan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          lockStartDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          timePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          timePicker24Hour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          timePickerIncrement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          timePickerSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showClearButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          firstMonthDayClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          lastMonthDayClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          emptyWeekRowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          emptyWeekColumnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          firstDayOfNextMonthClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          lastDayOfPreviousMonthClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          keepCalendarOpeningWithRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showRangeLabelOnInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          customRangeDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          closeOnAutoApply: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          choosedDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          rangeClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          datesUpdated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          startDateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          endDateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          ranges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          isInvalidDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          isCustomDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          isTooltipDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showCustomRangeLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          drops: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          opens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pickerContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['pickerContainer']
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](DaterangepickerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'input[ngxDaterangepickerMd]',
            host: {
              '(keyup.esc)': 'hide()',
              '(blur)': 'onBlur()',
              '(click)': 'open()',
              '(keyup)': 'inputChanged($event)'
            },
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
                return DaterangepickerDirective_1;
              }),
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]
          }, {
            type: LocaleService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, {
          dateLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          lockStartDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          timePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          timePicker24Hour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          timePickerIncrement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          timePickerSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          closeOnAutoApply: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          _endKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['change']
          }],
          rangeClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['rangeClicked']
          }],
          datesUpdated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['datesUpdated']
          }],
          startDateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          endDateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          drops: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          opens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          startKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          endKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['disabled']
          }],

          /**
           * For click outside of the calendar's container
           * @param event event object
           */
          outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['document:click', ['$event']]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          autoApply: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          alwaysShowCalendars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showCustomRangeLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          linkedCalendars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          singleDatePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showWeekNumbers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showISOWeekNumbers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showDropdowns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          isInvalidDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          isCustomDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          isTooltipDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showClearButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          customRangeDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          ranges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          lastMonthDayClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          emptyWeekRowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          emptyWeekColumnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          firstDayOfNextMonthClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          lastDayOfPreviousMonthClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          keepCalendarOpeningWithRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showRangeLabelOnInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](NgxDaterangepickerMd, {
          declarations: function declarations() {
            return [DaterangepickerComponent, DaterangepickerDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]];
          },
          exports: function exports() {
            return [DaterangepickerComponent, DaterangepickerDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](NgxDaterangepickerMd, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [DaterangepickerComponent, DaterangepickerDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            providers: [],
            exports: [DaterangepickerComponent, DaterangepickerDirective],
            entryComponents: [DaterangepickerComponent]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-daterangepicker-material.js.map

      /***/

    },

    /***/
    "ajRT":
    /*!************************************************************!*\
      !*** ./src/app/shared/components/modal/modal.component.ts ***!
      \************************************************************/

    /*! exports provided: ModalComponent */

    /***/
    function ajRT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/config/route-config */
      "1r8O");
      /* harmony import */


      var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../snackbar/snackbar.component */
      "Ba6F");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function ModalComponent_div_8_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r3 == null ? null : item_r3.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r3 == null ? null : item_r3.name);
        }
      }

      function ModalComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "License Plate :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Select Organisation :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ModalComponent_div_8_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.category_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ModalComponent_div_8_option_10_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.data == null ? null : ctx_r0.data.data == null ? null : ctx_r0.data.data.license_plate, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.category_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.data == null ? null : ctx_r0.data.categoryData);
        }
      }

      function ModalComponent_mat_spinner_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-spinner", 13);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 50);
        }
      }

      var ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(_mdr, data, router, service, localService, _snackBar, translate) {
          var _this14 = this;

          _classCallCheck(this, ModalComponent);

          this._mdr = _mdr;
          this.router = router;
          this.service = service;
          this.localService = localService;
          this._snackBar = _snackBar;
          this.translate = translate;
          this.apiLogout = true;
          this.isApiLoading = false;
          this.isUpdate = false;
          this.category_name = 1;
          this.horizontalPosition = "center";
          this.verticalPosition = "bottom";
          this.data = data;

          if (this.data.heading.includes("Contact support")) {
            this.apiLogout = false;
            this.translate.get("contactSupport").subscribe(function (text) {
              _this14.data.heading = text;
            });
            this.translate.get("areYouSure").subscribe(function (text) {
              _this14.data.content = text;
            });
          } else if (this.data.heading.includes("Update Category Name")) {
            // console.log('aaa');
            this.category_name = data.categoryData[0].id;
            this.apiLogout = false;
            this.isUpdate = true;
          } else if (this.data.heading.includes("Logout")) {
            this.translate.get("logout").subscribe(function (text) {
              _this14.data.heading = text;
            });
            this.translate.get("logoutmessage").subscribe(function (text) {
              _this14.data.content = text;
            });
          }
        }

        _createClass(ModalComponent, [{
          key: "getCategory",
          value: function getCategory() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// console.log(this.data);
          }
        }, {
          key: "CloseDialog",
          value: function CloseDialog() {
            this._mdr.close(false);
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this15 = this;

            this.isApiLoading = true;

            if (this.apiLogout) {
              this.service.get("logout").pipe().subscribe(function (response) {
                _this15.isApiLoading = false;

                if (response.message) {
                  _this15.localService.setdashboardData({});

                  var currentlng = _this15.localService.getItem('currentlang') || 'en';

                  _this15.localService.removeAllItem();

                  _this15.localService.setItem('currentlang', currentlng);

                  _this15.CloseDialog();

                  _this15.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].signin.path]);
                }
              }, function (error) {
                _this15.isApiLoading = false;

                _this15.localService.setdashboardData({});

                var currentlng = _this15.localService.getItem('currentlang') || 'en';

                _this15.localService.removeAllItem();

                _this15.localService.setItem('currentlang', currentlng);

                _this15.CloseDialog();

                _this15.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].signin.path]);
              });
            } else if (this.isUpdate) {
              // console.log(this.category_name);
              var body = {
                category_id: this.category_name.toString()
              }; // console.log(JSON.stringify(body));

              this.service.patch("vehicles/".concat(this.data.data.id, "/update-category"), body).pipe().subscribe(function (res) {
                _this15.isApiLoading = false;

                _this15._mdr.close(true);
              }, function (err) {
                _this15._mdr.close(false);
              });
            } else {
              var images = JSON.parse(this.data.body.screenshot);
              var imagesFinal = images.join(' , ');
              var des;
              des = "Name: " + this.data.body.name;
              des = des + "\\n Phone: " + this.data.body.phone;
              des = des + "\\n Email: " + this.data.body.email;
              des = des + "\\n Designation: " + this.data.body.designation;
              des = des + "\\n Portal Url: " + this.data.body.urlPortal;
              des = des + "\\n Operating System: " + this.data.body.os;
              des = des + "\\n Browser: " + this.data.body.browser;
              des = des + "\\n Browser Version: " + this.data.body.browserVersion;
              des = des + "\\n feedback: " + this.data.body.feedback;

              if (images.length > 0) {
                des = des + "\\n file_url: " + imagesFinal;
              } // console.log(des)


              var data = {
                summary: this.data.body.subject,
                description: des || "",
                issue_type: "Task"
              };
              this.service.post("jira-ticket", data).pipe().subscribe(function (res) {
                _this15.isApiLoading = false;

                _this15.CloseDialog();

                if (res.data) {
                  _this15.openSnackBarmodal("Successfully submitted", "contact_support");

                  window.history.back();
                }
              }, function (error) {
                _this15.isApiLoading = false;

                _this15.CloseDialog();
              });
            }
          }
        }, {
          key: "openSnackBarmodal",
          value: function openSnackBarmodal(message, panelClass) {
            this._snackBar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"], {
              data: {
                image: true,
                message: message
              },
              panelClass: panelClass,
              duration: 3000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition
            });
          }
        }]);

        return ModalComponent;
      }();

      ModalComponent.??fac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]));
      };

      ModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ModalComponent,
        selectors: [["app-modal"]],
        decls: 17,
        vars: 10,
        consts: [[1, "heading", "text-center"], [1, "content", "text-center", "px-5", "mt-3", "mb-3"], [4, "ngIf"], ["style", "margin:0 auto;", 3, "diameter", 4, "ngIf"], [1, "filterBody", "p-0", "mt-3", "mb-0", "d-flex", "justify-content-center"], [1, "filterBtn", "cancleBtn", 3, "click"], [1, "filterBtn", "applyBtn", 3, "click"], [1, "d-flex", "justify-content-center"], [1, "color"], [1, "category-update-number", "color"], [1, "form-control", "color", 3, "ngModel", "ngModelChange"], ["class", "text-capitalize", 3, "value", 4, "ngFor", "ngForOf"], [1, "text-capitalize", 3, "value"], [2, "margin", "0 auto", 3, "diameter"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ModalComponent_div_8_Template, 11, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ModalComponent_mat_spinner_9_Template, 1, 1, "mat-spinner", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalComponent_Template_button_click_11_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalComponent_Template_button_click_14_listener() {
              return ctx.CloseDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data == null ? null : ctx.data.heading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data == null ? null : ctx.data.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isApiLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 6, "yes"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 8, "no"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["??angular_packages_forms_forms_x"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: [".heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 600 24px/21px ModernEra;\n  color: #001e50;\n}\n.content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font: 400 18px/21px ModernEra;\n  color: #001e50;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n.category-update-number[_ngcontent-%COMP%] {\n  padding: 3px 0px 0px 5px;\n}\n.color[_ngcontent-%COMP%] {\n  color: #001e50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNFSTtFQUNJLDZCQUFBO0VBQ0EsY0RNVTtBQ05sQjtBQUtJO0VBQ0ksNkJBQUE7RUFDQSxjRERVO0VDRVYsZ0JBQUE7RUFDQSxtQkFBQTtBQUZSO0FBS0E7RUFDSSx3QkFBQTtBQUZKO0FBSUE7RUFDSSxjRFZjO0FDU2xCIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypORVcgQ09MT1IgTElTVCovXG5cblxuJGxpZ2h0Ymx1ZTogIzAwNTdmZjtcbiRkcmFrX0JsdWU6ICMyOTYyZmY7XG4kc2JsdWU6ICMxYjE5NGI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHRibGFjazogIzE3MWMyMjtcbiRsaWdodGdyYXk6ICM5MzllYWE7XG4kZmdyYXk6ICM3ZDg1OTI7XG4kU2Vjb25kYXJ5X2JsYWNrOiAjMDAxZTUwO1xuJFByaW1hcnlfQmx1ZTogIzAwNjRmZjtcbiRTZWNvbmRhcnlfQmx1ZTogIzYwNGVmZjtcbiRidG5FeHBvcnRCbHVlOiAjNGM2ZmZmO1xuJGRhbmdlcjogI2ZmNzA3MDtcbiRTZWNvbmRhcnlfQWxlcnRzOiAjMDBjYmEwO1xuJG5vSW5mbzogIzE4YTBmYjtcbiRTZWNvbmRhcnlfRGFyazogIzJhMWU5MTtcbiRkYXJrOiAjMzIzMzM4O1xuJGJvcmRlckNvbG9yOiAjYzVjZGQ0O1xuJGxpZ2h0V2hpdGVjb2xvcjogI2Y5ZmFmYjtcbiRncm91cEJvcmRlckRhdGE6ICNlNmU3ZTg7XG4kbGlnaHRtaXhibHVlV2hpdGVjb2xvcjogI2UwZTNlNztcbiR3aGl0ZVNoYWRvdzogI2U5ZWJmMDtcbiRza3lCbHVlOiAjNGRiZmZmO1xuJHllbGxvdzogI2ZmZWE2YztcbiRvcmFuZ2U6ICNmZjk5NTA7XG4kYm9keUJhY2tHcmF5OiAjZmRmY2ZmO1xuJGxpZ2h0QmxhY2s6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4kZXhwb3J0QnRuOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjEpO1xuJGRhbmdlckJveEJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRncmVlbkJveEJhY2s6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMSk7XG4kdGFibGVPZGRCYWNrOiAjZmJmYmZiO1xuJFNlY29uZGFyeV9CbHVlX2Rhcms6ICM3NTU1Y2Y7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbmlnaHRUZXh0Q29sb3I6ICM0NzRmNWE7XG4kbmlnaHRCYWNrQmxhY2s6ICM2NjcyODA7XG4kd2hpdGVDb2xvcjogI2UxZTFlMTtcbiRyZWRDb2xvcjogI2VkNTAyZTtcbiRkYXJrX2dyYXk6ICNiZGJkYmQ7XG4kaGVscEJ0bl9CbHVlOiAjNjAyYWFjO1xuJGRhdGVDb2xvcjogIzRlNWQ3ODtcbiRkYXlDb2xvcjogIzRlNWQ3ODdhO1xuJHJlZEFjdGl2ZUNvbG9yOiAjZmExNDY0O1xuJHdoaXRlQ29sb3JCYWNrOiAjZjdmY2ZmO1xuJGJsYWNrRGFyazogIzI3MjcyZTtcbiR3aGl0ZUdyYXlCYWNrOiAjZjdmY2ZmO1xuLy9pbnB1dCBjc3NcbiRib3JkZXJDb2xvckxpZ2h0OiAjZThlY2VlO1xuJGJvcmRlckNvbG9yR3JheTogI2VlZWRmMDtcbiRsaWdodFdoaXRlOiAjZTVlZWZmO1xuJGJ0bkRlZmF1bHRXaGl0ZTogI2Y0ZjZmODtcbiRtYXRCb3JkZXI6ICNlNmU3ZTg7XG5cbiR0b2dnbGVBY3RpdmU6ICMzNzE5ODY7XG5cbi8vcmdiYSBjc3NcbiRiZWhhdmlvdXJCYWNrOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjA4KTtcbiRtb250aFNob3dCYWNrOiByZ2JhKDg2LCA2NiwgMjU1LCAwLjEpO1xuJGJveFNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiRiYWNrRGFuZ2VyOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuNCk7XG4kYmFja0dyZWVuOiByZ2IoMCAyMDMgMTYwIC8gMTUlKTtcbiRzYWZlU2NvcmVCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kYmFja0dyYXlDb21tb246IHJnYmEoMTM1LCAxMzUsIDEzNSwgMC4wNSk7XG4kcXVpdGVSb2FkOiAjZmZlYTZjO1xuXG4vL25ldyBjb2xvciB2ZXJzaW9uMlxuJHJlZEV4Y2VwdGlvbjogI2ZhMTQ2NDtcbiRib3hzaGFkb3c6IDBweCA4cHggMjVweCByZ2JhKDk4LCA5OCwgOTgsIDAuMDUpO1xuJHRvb2x0aXBzVGV4dENvbG9yOiAjMTYxOTJjO1xuXG4vL2JveCBncmFkaWFudCBCYWNrZ3JvdW5kXG4kdmVoaWNhbEJveEJhY2s6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICM4MWJiZmYgLTQuMiUsICMwMDg1ZmYgOTkuMzclKTtcbiRkcml2ZW5Cb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM1YTZiZmYgMC42OSUsICM2MDRlZmYgMTAyLjIlKTtcbiRiZWhhdmlvdXJCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM4YzQ2ZmYgMC42OSUsICNmZjgwODAgMTAyLjIlKTtcbiRldkJsb2NrQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICNmZmU5NzcgMTAyLjE3JSk7XG4kaWNlQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG5cbi8vYm94IHYyIGdyYWRpYW50IEJhY2tncm91bmRcbiRpY2VCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG4kZHJpdmVyQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjMzY1NmZmIDEwMi4xNyUpO1xuJGtpbG9tZXRlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTMzLjM5ZGVnLCAjNDk4NWY4IC00LjIyJSwgIzRkYmZmZiAxMDQuMjQlKTtcbiRzYWZlRHJpdmluZ0JveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICM0NWM4ZjEgLTE4LjU2JSwgI2VlZTA5NyAxMDIuMTclKTtcbiRkcml2ZXIxQm94VjI6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzc2ZDZlZSAwLjY5JSwgIzc2OThkYiAxMDIuMiUpO1xuJHRyaXBCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjYzJhM2EwIC0xOC41NiUsICNlOWM4YTcgMTAyLjE3JSk7XG4kdmVoaWNsZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjZGY5ODk1IC00LjIlLCAjYzJhM2EwIDEwOC4xNSUpO1xuXG4vL3Njcm9sbCBiYXIgY29sb3IgY29kZVxuJHNjcm9sbEJsYWNrOiAjODg4O1xuJHNjcm9sbFdoaXRlOiAjZjFmMWYxO1xuJHNjcm9sbEhvdmVyQmxhY2s6ICM1NTU7XG5cbi8vd2hpdGUgbGFiZWwgZmxlYWQgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNFRkE5NTI7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcblxuLy93aGl0ZSBsYWJlbCBkaGwgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNkNDA1MTE7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcbi8vICR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazojRkZDQzAwO1xuXG4vL3doaXRlIGxhYmVsIFplZ28gY29sb3JcbiRXaGl0ZV9sYWJpbmdfQmxhY2s6ICMwMDAwMDA7XG4kV2hpdGVfbGFiaW5nX1llbGxvdzogIzM3MTk4NztcbiRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTogIzRkYmZmZjtcbiRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6ICNlZWY5ZmY7XG4kd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6ICNmZmNjMDA7XG4kY29sb3JfdmlvbGV0OiAjODc3NWI3O1xuJGNvbG9yX3Zpb2xldF9kYXJrOiAjMzIxOTg3O1xuJGNvbG9yX2xpZ2h0X2dyZXk6ICNlNWU1ZTU7XG4kY29sb3ItdmlvbGV0LWxpZ2h0OiAjYWM5NGVlO1xuJGNvbG9yLWJsdWUtbGlnaHQ6ICNmNWY1ZjU7XG4kY29sb3ItdGFibGUtaGVhZGluZzogIzI3MjUyZDtcbiR0cmlwSGlzdEJhY2s6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC4wNSk7XG4kc2FmZUJhY2tDb2xvcjogcmdiYSgwLCAyMDMsIDE2MCwgMC4wNSk7XG4kY29sb3JfbGlnaHRfYmx1ZTogIzQ1Y2JmYztcbiRjb2xvcl9ncmFwaF92b2lsZXQ6ICMzNzFhODc7XG5cbi8vZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGVycm9yR3JhZGlhbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcbiAgKSxcbiAgI2Y0NDMzNjtcblxuQG1peGluIGZsZXgtanVzdGlmeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZmxleC1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbkBtaXhpbiBmbGV4LXNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBlbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQG1peGluICBsaW5lLWNsYW1wIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbn1cblxuQG1peGluIGJ0bkZpbHRlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuQG1peGluIG1zZyB7XG4gIGZvbnQ6IDEycHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDMwcHg7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbkBtaXhpbiBtYWluQm94d2l0aEJhY2sge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDEyM3B4IHJnYmEoODcsIDg0LCAxNjAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4vLyBAbWl4aW4gYnV0dG9uLWdyZWVuIHtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjMTFEMEEyO1xuLy8gYm9yZGVyLXJhZGl1czogMTQ1cHg7XG4vLyBmb250LXdlaWdodCA6IDYwMDtcbi8vIGZvbnQtc2l6ZSA6IDE1cHg7XG4vLyBsaW5lLWhlaWdodCA6IDE4cHg7XG4vLyBjb2xvciA6ICNmZmZmZmY7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tYmx1ZSB7XG4vLyBmb250IDogMTNweC8xNnB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzc1NTVDRiwgIzc1NTVDRiksICM2NDNGQzA7XG4vLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gbWF4LXdpZHRoIDogMTQwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiAzOHB4O1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLXJlZCB7XG4vLyBmb250IDogMTZweC8yMHB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICNGRjY1NjU7XG4vLyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcbi5oZWFkaW5ne1xuICAgIGg0eyBcbiAgICAgICAgZm9udDogNjAwIDI0cHgvMjFweCBNb2Rlcm5FcmE7O1xuICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgXG4gICAgfVxufVxuLmNvbnRlbnR7XG4gICAgaDV7XG4gICAgICAgIGZvbnQ6IDQwMCAxOHB4LzIxcHggTW9kZXJuRXJhO1xuICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB9XG59XG4uY2F0ZWdvcnktdXBkYXRlLW51bWJlcntcbiAgICBwYWRkaW5nOiAzcHggMHB4IDBweCA1cHg7XG59XG4uY29sb3J7XG4gICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-modal",
            templateUrl: "./modal.component.html",
            styleUrls: ["./modal.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cb5u":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/components/trip-detail-map/trip-detail-map.component.ts ***!
      \********************************************************************************/

    /*! exports provided: TripDetailMapComponent */

    /***/
    function cb5u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TripDetailMapComponent", function () {
        return TripDetailMapComponent;
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


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");

      var TripDetailMapComponent = /*#__PURE__*/function () {
        function TripDetailMapComponent(service, local, cd) {
          _classCallCheck(this, TripDetailMapComponent);

          this.service = service;
          this.local = local;
          this.cd = cd;
          this.tripDetail = {};
          this.alerts = [];
          this.hideShowAlerts = true;
          this.exceptionColors = {
            "speed": '#FF9950',
            "breaking": '#FFEA6C',
            "acceleration": '#4DBFFF',
            "cornering": '#FF7070',
            "idling": '#00CBA0'
          };
          this.polylines = [];
          this.alertMarkers = [];
          this.exceptionStartArray = [];
          this.polylineOptions = {
            strokeColor: '#C83939',
            strokeOpacity: 1,
            strokeWeight: 3
          };
        }

        _createClass(TripDetailMapComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this16 = this;

            setTimeout(function () {
              _this16.exceptionColors = JSON.parse(_this16.local.getItem('colors'));

              if (changes.tripDetail) {
                _this16.initMap(changes.tripDetail.currentValue, _this16.alerts);
              }

              if (changes.alerts) {
                _this16.initMap(_this16.tripDetail, changes.alerts.currentValue);
              }

              if (changes.hideShowAlerts) {
                _this16.toggleGroup(changes.hideShowAlerts.currentValue);
              }

              if (changes.singleId) {
                _this16.toggleSingleGroup(changes.singleId.currentValue);
              }
            }, 200);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "renderDirectionsPolylines",
          value: function renderDirectionsPolylines(response, map) {
            var colors = "#FF0000";
            var bounds = new google.maps.LatLngBounds();

            for (var i = 0; i < this.polylines.length; i++) {
              this.polylines[i].setMap(null);
            }

            var legs = response.routes[0].legs;

            for (var _i5 = 0; _i5 < legs.length; _i5++) {
              var str = this.convertToFixed(legs[_i5].start_location.lat()) + ', ' + this.convertToFixed(legs[_i5].start_location.lng());

              if (this.exceptionStartArray.includes(str)) {
                colors = "#FF0000";
              } else {
                colors = "#604EFF";
              }

              var steps = legs[_i5].steps;

              for (var j = 0; j < steps.length; j++) {
                var nextSegment = steps[j].path;
                var stepPolyline = new google.maps.Polyline(this.polylineOptions);
                stepPolyline.setOptions({
                  strokeColor: colors,
                  icons: [{
                    icon: {
                      path: "M -2,0 0,-2 2,0 0,0 z",
                      strokeColor: 'black',
                      fillColor: 'black',
                      fillOpacity: 1,
                      scale: 2
                    },
                    offset: '30px',
                    repeat: '500px'
                  }]
                });

                for (var k = 0; k < nextSegment.length; k++) {
                  stepPolyline.getPath().push(nextSegment[k]);
                  bounds.extend(nextSegment[k]);
                }

                this.polylines.push(stepPolyline);
                stepPolyline.setMap(map);
                this.cd.detectChanges(); // route click listeners, different one on each step
                // google.maps.event.addListener(stepPolyline, 'click', function(evt) {
                //   infowindow.setContent("you clicked on the route<br>" + evt.latLng.toUrlValue(6));
                //   infowindow.setPosition(evt.latLng);
                //   infowindow.open(map);
                // })
              }
            }

            map.fitBounds(bounds);
          }
        }, {
          key: "initMap",
          value: function initMap(routes, alerts) {
            var _this17 = this;

            var routes = routes;
            var waypoints = [];
            this.alertMarkers = [];
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
                position: google.maps.ControlPosition.TOP_LEFT
              }
            }); // map.setOptions({ styles: AppConfig.mapStyle });

            var infowindow = new google.maps.InfoWindow({
              content: '',
              minWidth: 333
            });
            var infowindowMarker = new google.maps.InfoWindow({
              content: ''
            });
            var bounds = new google.maps.LatLngBounds(); // Plot Points

            if (routes) {
              var _this = this;

              this.exceptionStartArray = [];

              if (alerts && alerts.length) {
                alerts.forEach(function (element, i) {
                  // console.log(element)
                  if (element && element.points) {
                    var obj = {
                      location: element.points[0].latitude + ', ' + element.points[0].longitude,
                      stopover: true
                    };
                    if (waypoints.length < 25) waypoints.push(obj);

                    if (element.score_type == 'speed') {
                      obj = {
                        location: element.points[1].latitude + ', ' + element.points[1].longitude,
                        stopover: true
                      };
                      if (waypoints.length < 25) waypoints.push(obj);
                    }

                    if (element.score_type == 'speed') {
                      _this17.exceptionStartArray.push(_this17.convertToFixed(element.points[0].latitude) + ', ' + _this17.convertToFixed(element.points[0].longitude));
                    }

                    _this17.alertMarkers[i] = new google.maps.Marker({
                      position: new google.maps.LatLng(element.points[0].latitude, element.points[0].longitude),
                      map: map,
                      icon: {
                        path: 'M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z',
                        fillColor: _this17.exceptionColors[element.score_type],
                        fillOpacity: 1,
                        strokeColor: '#fff',
                        scale: 1
                      }
                    });

                    _this17.alertMarkers[i].set("id", element.id);

                    bounds.extend(_this17.alertMarkers[i].position);
                    element.changedDate = _this17.convertDateFormat(element.start_time);

                    if (routes) {
                      var extendedHtml = '';
                      var unit = '';

                      if (element.score_type == 'idling') {
                        if (!element.duration_seconds.includes(":")) element.duration_seconds = _this17.service.convertHMS(element.duration_seconds);
                        unit = 's';
                        extendedHtml = "<div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n                <div style=\"font: 600 14px/20px ModernEra; color:#FA1464; \">\n                <svg  style=\"margin-right:10px\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z\" fill=\"".concat(_this17.exceptionColors[element.score_type], "\"/>\n              </svg>Idiling</div>\n                <div>\n                    <div style=\"min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);\n            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;\">\n                        Violation: <span style=\"color:#FA1464\"> ").concat(element.duration_seconds, "</span>\n                    </div>\n                </div>\n              </div>");
                      } else if (element.score_type == 'speed') {
                        unit = 'km/h';
                        extendedHtml = "\n                <div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n                    <div style=\"font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;\">  <svg  style=\"margin-right:10px\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z\" fill=\"".concat(_this17.exceptionColors[element.score_type], "\"/>\n                  </svg>Speeding</div>\n                    <div>\n                        <div style=\"min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);\n                border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;\">\n                            Violation: <span style=\"color:#FA1464\"> ").concat(_this17.service.convertToDutch(element.violation_rate), " km/h</span>\n                        </div>\n                    </div>\n                </div>");
                      } else if (element.score_type == 'cornering') {
                        unit = "G";
                        extendedHtml = "\n                <div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n                <div style=\"font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;\">  <svg  style=\"margin-right:10px\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z\" fill=\"".concat(_this17.exceptionColors[element.score_type], "\"/>\n              </svg>Harsh cornering</div>\n                <div>\n                    <div style=\"min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);\n            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;\">\n                        Violation: <span style=\"color:#FA1464\"> ").concat(_this17.service.convertToDutch(element.violation_rate), " G</span>\n                    </div>\n                </div>\n            </div>\n                ");
                      } else if (element.score_type == 'acceleration') {
                        unit = "G";
                        extendedHtml = "\n                <div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n                <div style=\"font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;\">  <svg  style=\"margin-right:10px\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z\" fill=\"".concat(_this17.exceptionColors[element.score_type], "\"/>\n              </svg>Harsh acceleration</div>\n                <div>\n                    <div style=\"min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);\n            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;\">\n                        Violation: <span style=\"color:#FA1464\"> ").concat(_this17.service.convertToDutch(element.violation_rate), " G</span>\n                    </div>\n                </div>\n            </div>\n                ");
                      } else {
                        unit = "G";
                        extendedHtml = "\n                <div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n                <div style=\"font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;\">  <svg  style=\"margin-right:10px\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z\" fill=\"".concat(_this17.exceptionColors[element.score_type], "\"/>\n              </svg>Harsh braking</div>\n                <div>\n                    <div style=\"min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);\n            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;\">\n                        Violation: <span style=\"color:#FA1464\"> ").concat(_this17.service.convertToDutch(element.violation_rate), " G</span>\n                    </div>\n                </div>\n            </div>\n                ");
                      }

                      var html = "<div style=\"display:flex\">\n                  <div style=\" flex-basis: calc(50% - 10px);\n                        max-width: calc(50% - 10px); margin-right:20px;\">\n                      <div style=\"display:flex; align-items: center; padding-bottom:16px;\">\n                          <div style=\"margin-right:10px\"><img src=\"../../../../assets/images/location-tick.svg\"> </div>\n                          <div style=\"width:135px\">\n                              <div style=\"font: 700 12px/18px ModernEra; color:#604EFF\"> ".concat(element.changedDate, "</div>\n                              <div style=\"font: 600 11px/18px ModernEra; color:#001E50;   white-space: nowrap;\n                            overflow: hidden;\n                            text-overflow: ellipsis;\"></div>\n                          </div>\n                      </div>\n                  </div>\n                  <div style=\"flex-basis: calc(50% - 10px);\n                  max-width: calc(50% - 10px);\">\n                      <div style=\"  padding:10px 9px; background: rgba(0,240,156, 0.05);\n                  border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50; text-align:center\">\n                          Limit: <span style=\"color:#00F09C\"> ").concat(_this17.service.convertToDutch(element.limit), " ").concat(unit, "</span>\n                      </div>\n                  </div>\n              </div>\n              ") + extendedHtml;

                      _this17.bindInfoWindow(_this17.alertMarkers[i], map, infowindow, html);
                    }

                    var html = "<div style=\"display:flex\">\n                <div style=\" flex-basis: calc(50% - 10px);\n                      max-width: calc(50% - 10px); margin-right:20px;\">\n                    <div style=\"display:flex; align-items: center; padding-bottom:16px;\">\n                        <div style=\"margin-right:10px\"><img src=\"../../../../assets/images/location-tick.svg\"> </div>\n                        <div style=\"width:135px\">\n                            <div style=\"font: 700 12px/18px ModernEra; color:#EFA952\"> ".concat(element.changedDate, "</div>\n                            <div style=\"font: 600 11px/18px ModernEra; color:#001E50;   white-space: nowrap;\n                          overflow: hidden;\n                          text-overflow: ellipsis;\">\n                                 </div>\n                        </div>\n                    </div>\n                </div>\n                <div style=\"flex-basis: calc(50% - 10px);\n                max-width: calc(50% - 10px);\">\n                    <div style=\"  padding:10px 9px; background: rgba(0,240,156, 0.05);\n                border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50; text-align:center\">\n                        Limit: <span style=\"color:#00F09C\"> ").concat(_this17.service.convertToDutch(element.limit), " ").concat(unit, "</span>\n                    </div>\n                </div>\n            </div>\n            ") + extendedHtml;

                    _this17.bindInfoWindow(_this17.alertMarkers[i], map, infowindow, html);
                  }
                });
              }

              if (routes.start_latitude) {
                // this.toggleGroup(false)
                var startPoint = new google.maps.LatLng(routes.start_latitude, routes.start_longitude);
                var endPoint = new google.maps.LatLng(routes.finish_latitude, routes.finish_longitude); // Each route

                var startAdd = routes['start_location_address'];
                var startMarker = new google.maps.Marker({
                  position: startPoint,
                  map: map,
                  title: startAdd,
                  icon: {
                    url: '../../../assets/images/location.svg',
                    scaledSize: new google.maps.Size(30, 30)
                  }
                });
                bounds.extend(startMarker.position);
                this.bindInfoWindow(startMarker, map, infowindowMarker, "<p>" + startAdd + "</p>");
                var endAdd = routes['stop_location_address'];
                var endMarker = new google.maps.Marker({
                  position: endPoint,
                  map: map,
                  title: endAdd,
                  icon: {
                    url: '../../../assets/images/destination.svg',
                    scaledSize: new google.maps.Size(30, 30)
                  }
                });
                bounds.extend(endMarker.position);
                this.bindInfoWindow(endMarker, map, infowindowMarker, "<p>" + endAdd + "</p>");
                var request = {
                  origin: startPoint,
                  destination: endPoint,
                  waypoints: waypoints,
                  optimizeWaypoints: true,
                  travelMode: 'DRIVING'
                };
                var directionsService = new google.maps.DirectionsService();
                directionsService.route(request, function (response, status) {
                  if (status == 'OK') {
                    // Display the route on the map.
                    _this.renderDirectionsPolylines(response, map);
                  }
                });
                map.fitBounds(bounds);
                google.maps.event.addDomListener(window, "resize", function () {
                  google.maps.event.trigger(map, "resize");
                  map.fitBounds(bounds);
                });
              }
            }
          }
        }, {
          key: "bindInfoWindow",
          value: function bindInfoWindow(marker, map, infowindow, html) {
            google.maps.event.addListener(marker, 'mouseover', function () {
              infowindow.setContent(html);
              infowindow.open(map, marker);
            });
            google.maps.event.addListener(marker, 'mouseout', function () {
              infowindow.close();
            });
          }
        }, {
          key: "convertDateFormat",
          value: function convertDateFormat(date) {
            if (date) {
              return moment__WEBPACK_IMPORTED_MODULE_1__(date).utc().format("HH:mm [???] DD/MM/yyyy");
            } else {
              return 'NA';
            }
          }
        }, {
          key: "toggleGroup",
          value: function toggleGroup(val) {
            for (var i = 0; i < this.alertMarkers.length; i++) {
              var marker = this.alertMarkers[i];
              marker.setVisible(val);
            }
          }
        }, {
          key: "toggleSingleGroup",
          value: function toggleSingleGroup(val) {
            for (var i = 0; i < this.alertMarkers.length; i++) {
              var marker = this.alertMarkers[i];

              if (marker.get("id") == val) {
                marker.setVisible(true);
              } else {
                marker.setVisible(false);
              }
            }
          }
        }, {
          key: "convertToFixed",
          value: function convertToFixed(val) {
            val = String(val);
            return val.split('.')[0] + '.' + val.split('.')[1].substring(0, 3);
          }
        }]);

        return TripDetailMapComponent;
      }();

      TripDetailMapComponent.??fac = function TripDetailMapComponent_Factory(t) {
        return new (t || TripDetailMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      TripDetailMapComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TripDetailMapComponent,
        selectors: [["app-trip-detail-map"]],
        inputs: {
          tripDetail: "tripDetail",
          alerts: "alerts",
          hideShowAlerts: "hideShowAlerts",
          singleId: "singleId"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
        decls: 1,
        vars: 0,
        consts: [["id", "map"]],
        template: function TripDetailMapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 0);
          }
        },
        styles: ["#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n\n  .gm-fullscreen-control {\n  background: #0064FF !important;\n  background-image: url(\"/assets/images/fullscreen_map.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  height: 44px !important;\n  width: 44px !important;\n  border-radius: 50% !important;\n}\n\n  .gm-fullscreen-control img {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RyaXAtZGV0YWlsLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFSTtFQUNJLDhCQUFBO0VBQ0EscUVBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ1I7O0FBQVE7RUFDSSx3QkFBQTtBQUVaIiwiZmlsZSI6InRyaXAtZGV0YWlsLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOjpuZy1kZWVwe1xuICAgIC5nbS1mdWxsc2NyZWVuLWNvbnRyb2x7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDY0RkYgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9mdWxsc2NyZWVuX21hcC5zdmcnKSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TripDetailMapComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-trip-detail-map',
            templateUrl: './trip-detail-map.component.html',
            styleUrls: ['./trip-detail-map.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_4__["LocalService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          tripDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["tripDetail"]
          }],
          alerts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["alerts"]
          }],
          hideShowAlerts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["hideShowAlerts"]
          }],
          singleId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["singleId"]
          }]
        });
      })();
      /***/

    },

    /***/
    "wRU9":
    /*!**************************************************!*\
      !*** ./src/app/theme/header/header.component.ts ***!
      \**************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function wRU9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/config/route-config */
      "1r8O");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var src_app_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/components/modal/modal.component */
      "ajRT");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _shared_directives_clickoutside_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../shared/directives/clickoutside.directive */
      "C+MK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function HeaderComponent_div_10_mat_tree_node_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-tree-node", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-checkbox", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function HeaderComponent_div_10_mat_tree_node_23_Template_mat_checkbox_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

            var node_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r6.todoItemSelectionToggle($event.checked, node_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var node_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", !ctx_r1.search || node_r5.ok ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", node_r5.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", node_r5.name, "");
        }
      }

      function HeaderComponent_div_10_mat_nested_tree_node_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-nested-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-checkbox", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function HeaderComponent_div_10_mat_nested_tree_node_24_Template_mat_checkbox_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var node_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r9.todoItemSelectionToggle($event.checked, node_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](9, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var node_r8 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", !ctx_r2.search || node_r8.ok ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", "toggle " + node_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r2.treeControl.isExpanded(node_r8) ? "expand_more" : "chevron_right", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", node_r8.selected)("indeterminate", node_r8.indeterminate && !node_r8.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](node_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("example-tree-invisible", !ctx_r2.treeControl.isExpanded(node_r8));
        }
      }

      function HeaderComponent_div_10_button_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_div_10_button_26_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r11.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "headerapplyall"));
        }
      }

      function HeaderComponent_div_10_button_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_div_10_button_27_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r13.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "apply"));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "hide": a0
        };
      };

      function HeaderComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("clickOutside", function HeaderComponent_div_10_Template_div_clickOutside_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r15.popupToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "svg", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HeaderComponent_div_10_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r17.search = $event;
            return ctx_r17.setChildOk($event, ctx_r17.dataSource.data);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_div_10_Template_span_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r18.clearAllFiscal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-checkbox", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function HeaderComponent_div_10_Template_mat_checkbox_change_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.selectAllFiscal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Select All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-tree", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, HeaderComponent_div_10_mat_tree_node_23_Template, 5, 4, "mat-tree-node", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, HeaderComponent_div_10_mat_nested_tree_node_24_Template, 10, 9, "mat-nested-tree-node", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, HeaderComponent_div_10_button_26_Template, 3, 3, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, HeaderComponent_div_10_button_27_Template, 3, 3, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 15, "searchheader"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](23, _c0, ctx_r0.countSelected() == 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r0.countSelected(), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 17, "selected"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](25, _c0, ctx_r0.countSelected() > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 19, "selectAll"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](27, _c0, ctx_r0.countSelected() == 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 21, "clearAll"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](29, _c0, ctx_r0.countSelected() > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r0.dataSource)("treeControl", ctx_r0.treeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTreeNodeDefWhen", ctx_r0.hasChild);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.countSelected() > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.countSelected() <= 1);
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, service, matDialog, localService, translate) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.service = service;
          this.matDialog = matDialog;
          this.localService = localService;
          this.translate = translate;
          this.showPopup = false;
          this.orgData = [];
          this.orgSelected = [];
          this.selectAllCheckbox = true;
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["NestedTreeControl"](function (node) {
            return node.children;
          });
          this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNestedDataSource"]();

          this.hasChild = function (_, node) {
            return !!node.children && node.children.length > 0;
          };
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.selectedDateRange = this.localService.getItem('dateRange');
            this.formatDateRange(this.selectedDateRange);
            this.namedetails = JSON.parse(this.localService.getItem('data'));
            this.currentLang = this.localService.getItem('currentlang') || 'en';
            this.orgSelected = this.localService.getItem('selectedOrgs');
            this.profileImage = this.localService.getItem('profileImage') || 'assets/images/profile.png';
            this.localService.getImage().subscribe(function (val) {
              if (val) {
                _this18.profileImage = _this18.localService.getItem('profileImage') || 'assets/images/profile.png';
              }
            });
            this.localService.getDateRange().subscribe(function (val) {
              if (val) {
                _this18.selectedDateRange = _this18.localService.getItem('dateRange');

                _this18.formatDateRange(_this18.selectedDateRange);
              }
            });

            if (this.orgSelected) {
              this.orgSelected = JSON.parse(this.orgSelected);
            }

            this.getAllOrganization();
          }
        }, {
          key: "getAllOrganization",
          value: function getAllOrganization() {
            var _this19 = this;

            this.service.get('organisations').pipe().subscribe(function (response) {
              if (response.data && response.data.length) {
                _this19.orgData = response.data;

                _this19.localService.setItem('orgname', JSON.stringify(_this19.orgData));

                _this19.dataSource.data = _toConsumableArray(_this19.orgData);
                Object.keys(_this19.dataSource.data).forEach(function (x) {
                  _this19.setParent(_this19.dataSource.data[x], null);
                });

                if (_this19.orgSelected && _this19.orgSelected.length) {
                  _this19.dataSource.data.forEach(function (node) {
                    _this19.toggleSelection(true, node, _this19.orgSelected);
                  });
                } else {
                  _this19.selectAllFiscal(); // this.todoItemSelectionToggle(true,this.dataSource.data[0]);

                }

                _this19.submit(true);
              }
            }, function (error) {});
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this20 = this;

            this.service.get('logout').pipe().subscribe(function (response) {
              if (response.message) {
                _this20.localService.removeAllItem();

                _this20.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_1__["RouteConfig"].signin.path]);

                _this20.localService.setdashboardData({});
              }
            }, function (error) {
              _this20.localService.removeAllItem();

              _this20.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_1__["RouteConfig"].signin.path]);

              _this20.localService.setdashboardData({});
            });
          }
        }, {
          key: "useLanguage",
          value: function useLanguage(language) {
            this.localService.setItem('currentlang', language);
            this.currentLang = language;
            this.localService.setLang();
          }
        }, {
          key: "setParent",
          value: function setParent(data, parent) {
            var _this21 = this;

            data.parent = parent;

            if (data.children) {
              data.children.forEach(function (x) {
                _this21.setParent(x, data);
              });
            }
          }
        }, {
          key: "checkAllParents",
          value: function checkAllParents(node) {
            if (node.parent) {
              var descendants = this.treeControl.getDescendants(node.parent);
              node.parent.selected = descendants.every(function (child) {
                return child.selected;
              });
              node.parent.indeterminate = descendants.some(function (child) {
                return child.selected;
              });
              this.checkAllParents(node.parent);
            }
          }
        }, {
          key: "todoItemSelectionToggle",
          value: function todoItemSelectionToggle(checked, node) {
            var _this22 = this;

            node.selected = checked;
            this.selectAllCheckbox = checked == false ? checked : this.selectAllCheckbox;

            if (node.children) {
              node.children.forEach(function (x) {
                _this22.todoItemSelectionToggle(checked, x);
              });
            }

            this.checkAllParents(node);
          }
        }, {
          key: "setChildOk",
          value: function setChildOk(text, node) {
            var _this23 = this;

            node.forEach(function (x) {
              x.ok = x.name.indexOf(text) >= 0;
              if (x.parent) _this23.setParentOk(text, x.parent, x.ok);
              if (x.children) _this23.setChildOk(text, x.children);
            });
          }
        }, {
          key: "setParentOk",
          value: function setParentOk(text, node, ok) {
            node.ok = ok || node.ok || node.name.indexOf(text) >= 0;
            if (node.parent) this.setParentOk(text, node.parent, node.ok);
          }
        }, {
          key: "submit",
          value: function submit(openPopup) {
            var _this24 = this;

            var result = [];
            this.dataSource.data.forEach(function (node) {
              result = result.concat(_this24.treeControl.getDescendants(node).filter(function (x) {
                return x.selected && (x.id || x.indeterminate);
              }).map(function (x) {
                return x.id;
              }));

              if ((node.selected || node.indeterminate) && node.id) {
                result = result.concat(node.id);
              }
            });
            this.orgSelected = result;
            this.localService.setItem("selectedOrgs", JSON.stringify(result));
            this.selOrgName();
            if (!openPopup) this.popupToggle();
          } //For check the values

        }, {
          key: "getList2",
          value: function getList2(node) {
            var _this25 = this;

            var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            result = result || {};
            node.forEach(function (x) {
              result[x.name] = {};
              result[x.name].ok = x.ok;
              if (x.children) result[x.name].children = _this25.getList2(x.children);
            });
            return result;
          } //Another way to check the values, we can not use {{datasource.node}}

        }, {
          key: "getList",
          value: function getList(node) {
            var _this26 = this;

            return node.map(function (x) {
              var r = {
                name: x.name + " - " + x.ok,
                children: x.children ? _this26.getList(x.children) : null
              };
              if (!r.children) delete r.children;
              return r;
            });
          }
        }, {
          key: "selectAllFiscal",
          value: function selectAllFiscal() {
            var _this27 = this;

            this.dataSource.data.forEach(function (node) {
              _this27.todoItemSelectionToggle(true, node);
            });
            this.selectAllCheckbox = true;
          }
        }, {
          key: "clearAllFiscal",
          value: function clearAllFiscal() {
            var _this28 = this;

            this.dataSource.data.forEach(function (node) {
              _this28.todoItemSelectionToggle(false, node);
            });
          }
        }, {
          key: "toggleSelection",
          value: function toggleSelection(checked, node, selectedOrg) {
            var _this29 = this;

            if (selectedOrg.includes(node.id)) {
              node.selected = checked;

              if (node.children) {
                node.children.forEach(function (x) {
                  _this29.todoItemSelectionToggle(checked, x);
                });
              }

              this.checkAllParents(node);
            }
          }
        }, {
          key: "popupToggle",
          value: function popupToggle() {
            var _this30 = this;

            this.showPopup = !this.showPopup;

            if (this.showPopup) {
              if (this.orgSelected.length) {
                this.dataSource.data.forEach(function (node) {
                  _this30.toggleSelection(true, node, _this30.orgSelected);
                });
              }
            } else {
              this.clearAllFiscal();
            }
          }
        }, {
          key: "countSelected",
          value: function countSelected() {
            var _this31 = this;

            var result = [];
            this.dataSource.data.forEach(function (node) {
              result = result.concat(_this31.treeControl.getDescendants(node).filter(function (x) {
                return x.selected && (x.id || x.indeterminate);
              }).map(function (x) {
                return x.id;
              }));

              if ((node.selected || node.indeterminate) && node.id) {
                result = result.concat(node.id);
              }
            });
            return result.length;
          }
        }, {
          key: "selOrgName",
          value: function selOrgName() {
            var _this32 = this;

            if (this.orgSelected.length) {
              var data = this.orgData.find(function (x) {
                return x.id == _this32.orgSelected[0];
              });
              this.placeHolderValue = data.name;
            } else {
              this.placeHolderValue = "";
            }
          }
        }, {
          key: "routeToProfile",
          value: function routeToProfile() {
            this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_1__["RouteConfig"].profile.url]);
          }
        }, {
          key: "routeToSupport",
          value: function routeToSupport() {
            this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_1__["RouteConfig"].support.url]);
          }
        }, {
          key: "OpenModal",
          value: function OpenModal() {
            var heading;
            var logout;
            this.translate.get("logoutmessage").subscribe(function (text) {
              heading = text;
            });
            this.translate.get("logout").subscribe(function (text) {
              logout = text;
            });
            var data = {
              heading: logout,
              content: heading
            }; // let data ={
            //   heading:'Logout',
            //   content:'Are you sure you want to logout your ZEGO account?'
            // }

            this.matDialogRef = this.matDialog.open(src_app_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
              data: data,
              disableClose: true
            }); // this.matDialogRef.afterClosed().subscribe(res => {
            //   if ((res == true)) {
            //     // this.name = "";
            //   }
            // });
          }
        }, {
          key: "formatDateRange",
          value: function formatDateRange(dateRange) {
            if (dateRange) {
              dateRange = JSON.parse(dateRange);
              this.showRange = moment__WEBPACK_IMPORTED_MODULE_5__(dateRange.startDate).format("DD-MM-YYYY") + ' - ' + moment__WEBPACK_IMPORTED_MODULE_5__(dateRange.endDate).format("DD-MM-YYYY");
            }
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]));
      };

      HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 54,
        vars: 34,
        consts: [[1, "headerSec"], [1, "matSelect"], ["appearance", "outline", 1, "matsel"], ["matInput", "", "type", "text", "placeholder", "Select Organization", "readonly", "", 3, "ngModel", "ngModelChange", "click"], [1, "dropUpIcon", 3, "click"], ["width", "11", "height", "6", "viewBox", "0 0 11 6", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1.5 0.875L5.75 5.125L10 0.875", "stroke", "#474F5A", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "orgzationpop", 3, "clickOutside", 4, "ngIf"], [1, "dateTimepicker"], [1, "d-flex", "flex-wrap"], [1, "landuageSel"], [3, "value", "ngClass", "selectionChange"], ["value", "en"], ["width", "30", "height", "30", "src", "assets/images/eng.svg"], ["value", "nl"], ["with", "30", "height", "30", "src", "assets/images/netherland.svg"], [1, "profileSec"], [1, "profile"], [3, "src"], [1, "userDetail"], [1, "mb-0", "text-capitalize"], [1, "mb-0"], [1, "matSelectDropDown"], ["panelClass", "myPanelClass", 3, "disableOptionCentering"], [3, "click"], ["src", "assets/images/profile-circle.svg"], ["src", "assets/images/support.svg"], ["src", "assets/images/logout.svg"], [1, "orgzationpop", 3, "clickOutside"], [1, "search", "border-bottom"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.58973 9.59067C9.76496 9.41543 10.0491 9.41543 10.2243 9.59067L12.7013 12.0677C12.8765 12.2429 12.8765 12.527 12.7013 12.7022C12.526 12.8775 12.2419 12.8775 12.0667 12.7022L9.58973 10.2253C9.4145 10.05 9.4145 9.7659 9.58973 9.59067Z", "fill", "#848588"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.46094 2.06443C4.03226 2.06443 2.06344 4.03328 2.06344 6.46198C2.06344 8.89069 4.03226 10.8595 6.46094 10.8595C8.88961 10.8595 10.8584 8.89069 10.8584 6.46198C10.8584 4.03328 8.88961 2.06443 6.46094 2.06443ZM1.16602 6.46198C1.16602 3.53764 3.53663 1.16699 6.46094 1.16699C9.38524 1.16699 11.7559 3.53764 11.7559 6.46198C11.7559 9.38633 9.38524 11.757 6.46094 11.757C3.53663 11.757 1.16602 9.38633 1.16602 6.46198Z", "fill", "#848588"], ["matInput", "", 1, "search", 3, "ngModel", "placeholder", "ngModelChange"], [1, "d-flex", "flex-wrap", "justify-content-between", "border-bottom", "selAll"], [1, "sel-title", 3, "ngClass"], [1, "clearAll", "cursor", 3, "ngClass", "click"], [3, "ngClass", "change"], [1, "example-tree", "tree-main", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 3, "display", 4, "matTreeNodeDef"], [3, "display", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [1, "appAll", "d-flex", "justify-content-end"], ["mat-button", "", "class", "button-auth w-100", 3, "click", 4, "ngIf"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "disabled", "", 1, "hide"], [1, "checklist-leaf-node", "hiddenCheckbox", 3, "checked", "change"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["matTreeNodeOutlet", ""], ["mat-button", "", 1, "button-auth", "w-100", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.placeHolderValue = $event;
            })("click", function HeaderComponent_Template_input_click_6_listener() {
              return ctx.popupToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_span_click_7_listener() {
              return ctx.popupToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, HeaderComponent_div_10_Template, 28, 31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectionChange", function HeaderComponent_Template_mat_select_selectionChange_17_listener($event) {
              return ctx.useLanguage($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_mat_option_click_39_listener() {
              return ctx.routeToProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_mat_option_click_44_listener() {
              return ctx.routeToSupport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_mat_option_click_49_listener() {
              return ctx.OpenModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 18, "header.selectOrg"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.placeHolderValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showPopup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 20, "header.daterange"), ": ", ctx.showRange, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.currentLang)("ngClass", ctx.currentLang);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](20, 22, ctx.currentLang.substr(0, 2)), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](24, 24, "english"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](28, 26, "netherland"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.namedetails == null ? null : ctx.namedetails.firstName, " ", ctx.namedetails == null ? null : ctx.namedetails.lastName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.namedetails == null ? null : ctx.namedetails.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disableOptionCentering", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](43, 28, "header.manageProfile"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](48, 30, "header.support"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](53, 32, "header.logout"), " ");
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _shared_directives_clickoutside_directive__WEBPACK_IMPORTED_MODULE_18__["ClickOutsideDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckbox"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodeToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatNestedTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodeOutlet"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"]],
        styles: [".headerSec[_ngcontent-%COMP%] {\n  background: #371987;\n  box-shadow: inset 0px -1px 0px #E9EBF0;\n  padding: 16px 33px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.headerSec[_ngcontent-%COMP%]   .dateTimepicker[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #ac94ee;\n  border-radius: 38px;\n  padding: 10px 40px 10px 15px;\n}\n.headerSec[_ngcontent-%COMP%]   .dateTimepicker[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #371987;\n  font: 700 12px/22px ModernEra;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%] {\n  position: relative;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]     mat-label {\n  color: #ffffff !important;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]     input {\n  color: #ffffff !important;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]     .mat-form-field-flex .mat-form-field-outline {\n  color: #ffffff !important;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .dropUpIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .dropUpIcon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  fill: #ffffff;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .mat-form-field-label-wrapper[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  color: #231F20;\n  font-size: 14px;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%] {\n  width: 334px;\n  display: inline-block;\n  background: #ffffff;\n  box-shadow: 0px 25px 250px 46px rgba(7, 6, 37, 0.25);\n  border-radius: 12px;\n  padding: 20px 0;\n  position: absolute;\n  left: 0;\n  top: 50px;\n  pointer-events: auto;\n  z-index: 1000;\n  transform-origin: left top;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .button-auth[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .tree-main[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  padding: 0 32px 6px 10px;\n  position: relative;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3px;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #231F20;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 28px;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .selAll[_ngcontent-%COMP%] {\n  padding: 9px 20px 10px 18px;\n  height: 41px;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .selAll[_ngcontent-%COMP%]   .sel-title[_ngcontent-%COMP%] {\n  font: 14px/20px ModernEra;\n  color: #231F20;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .selAll[_ngcontent-%COMP%]   .clearAll[_ngcontent-%COMP%] {\n  font: 12px/18px ModernEra !important;\n  padding: 3px 30px;\n  color: #ffffff;\n  border-radius: 24px;\n  background: #371987;\n  padding: 3px 10px;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .appAll[_ngcontent-%COMP%] {\n  padding: 12px 20px 20px;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .appAll[_ngcontent-%COMP%]   .button-auth[_ngcontent-%COMP%] {\n  padding: 9px;\n  font: 600 14px/22px ModernEra;\n  background: #371987;\n  border: #371987;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.headerSec[_ngcontent-%COMP%]   .matSelect[_ngcontent-%COMP%]   .orgzationpop[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n}\n.headerSec[_ngcontent-%COMP%]   .landuageSel[_ngcontent-%COMP%] {\n  margin-right: 35px;\n}\n.headerSec[_ngcontent-%COMP%]   .landuageSel[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 10px;\n  padding: 8px 16px;\n  font: 16.8px/24px ModernEra;\n  color: #231F20;\n}\n.headerSec[_ngcontent-%COMP%]   .landuageSel[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]     .mat-select-trigger .mat-select-arrow-wrapper {\n  display: none !important;\n}\n.headerSec[_ngcontent-%COMP%]   .profileSec[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.headerSec[_ngcontent-%COMP%]   .profileSec[_ngcontent-%COMP%]   .matSelectDropDown[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]     .mat-select-arrow-wrapper {\n  background-image: url('menu.svg');\n  height: 43px;\n  background-repeat: no-repeat;\n  background-position: center;\n  padding: 0px 10px 0px 0px;\n}\n.headerSec[_ngcontent-%COMP%]   .profileSec[_ngcontent-%COMP%]   .matSelectDropDown[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]     .mat-select-arrow-wrapper .mat-select-arrow {\n  color: transparent;\n}\n.headerSec[_ngcontent-%COMP%]   .profileSec[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.headerSec[_ngcontent-%COMP%]   .profileSec[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 25px;\n}\n.headerSec[_ngcontent-%COMP%]   .userDetail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 600 14px/18px ModernEra;\n  color: #ffffff;\n}\n.headerSec[_ngcontent-%COMP%]   .userDetail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #371987;\n  border-radius: 43px;\n  padding: 4px 30px 4px 0px;\n  font: 700 13px/18px ModernEra;\n  opacity: 0.6;\n  color: #ffffff;\n}\n.example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #E0E3E7;\n}\n.example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n  .landuageSel .mat-select-value {\n  padding-left: 35px !important;\n}\n  .matSelect .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0 !important;\n  padding-bottom: 0;\n}\n  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #371987 !important;\n}\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,   .mat-checkbox-checked.mat-accent .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background-color: #371987;\n}\n  .mat-checkbox.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #371987 !important;\n}\n  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #371987 !important;\n}\n  .mat-checkbox-frame {\n  border-color: 0.7px solid #C5CDD4;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.hiddenCheckbox[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n  .matSelect .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 5px 20px 5px 0 !important;\n}\n  .matSelect .mat-form-field-label-wrapper {\n  top: -1.45em !important;\n}\n  .matSelect .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label, .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1em) scale(0.75);\n}\n  .mat-option-text {\n  font: 600 14px/20px ModernEra !important;\n  color: #001e50 !important;\n}\n  .mat-checkbox-layout .mat-checkbox-label {\n  color: #171C22;\n}\n@media (max-width: 910px) {\n  .userDetail[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29tbW9uX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FDSUE7RUFDRSxtQkRzR29CO0VDckdwQixzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFJRTtFQUNFLG1CRFJJO0VDU0oseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBRko7QUFHSTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQUROO0FBSUU7RUFDRSxrQkFBQTtBQUZKO0FBSU07RUFDRSx5QkFBQTtBQUZSO0FBS007RUFDRSx5QkFBQTtBQUhSO0FBTVE7RUFDRSx5QkFBQTtBQUpWO0FBUUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBTk47QUFPTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUR4Q0E7QUNtQ1I7QUFTSTtFQUNFLGVBQUE7QUFQTjtBQVNJO0VBQ0UsY0NuRGE7RURvRGIsZUFBQTtBQVBOO0FBVUk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkNoREc7RURpREgsb0RBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFFQSxhQUFBO0VBRUEsMEJBQUE7QUFWTjtBQVlNO0VBQ0UseUJBQUE7QUFWUjtBQVlNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVlI7QUFhTTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQWFRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBWFY7QUFZVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBVlo7QUFZWTtFQUNFLGFDNUZLO0FEa0ZuQjtBQWNRO0VBQ0Usa0JBQUE7QUFaVjtBQWdCTTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQWRSO0FBZ0JRO0VBQ0UseUJBQUE7RUFDQSxjQzNHUztBRDZGbkI7QUFpQlE7RUR3RE4sb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBcktNO0VBc0tOLG1CQUFBO0VDekRRLG1CRFJZO0VDU1osaUJBQUE7QUFaVjtBQWdCTTtFQUNFLHVCQUFBO0FBZFI7QUFnQlE7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkMxSEU7RUQySEYsZUMzSEU7QUQ2R1o7QUFtQlE7RUFDRSxpQkFBQTtBQWpCVjtBQW9CWTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtBQWxCZDtBQTBCRTtFQUNFLGtCQUFBO0FBeEJKO0FBMEJJO0VBQ0UscUJBQUE7RUFHQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQ3pKYTtBRCtIbkI7QUE2QlU7RUFDRSx3QkFBQTtBQTNCWjtBQWtDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWhDSjtBQXFDVTtFQUNFLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQW5DWjtBQW9DWTtFQUNFLGtCQUFBO0FBbENkO0FBd0NJO0VBQ0Usa0JBQUE7QUF0Q047QUF3Q007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdENSO0FBNENJO0VBQ0UsNkJBQUE7RUFDQSxjRG5NRTtBQ3lKUjtBQTZDSTtFQUNFLG1CQ2pNWTtFRGtNWixtQkFBQTtFQUVBLHlCQUFBO0VBRUEsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsY0N2TUc7QUQwSlQ7QUFrREE7RUFDRSxhQUFBO0FBL0NGO0FBa0RBOztFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBL0NGO0FBa0RBO0VBQ0Usa0NBQUE7QUEvQ0Y7QUFpREU7RUFDRSxnQkFBQTtBQS9DSjtBQW1EQTtFQUNFLDZCQUFBO0FBaERGO0FBbURBO0VBSUUsb0JBQUE7RUFDQSxpQkFBQTtBQW5ERjtBQXVERTtFQUNFLG9DQUFBO0FBcERKO0FBdURFOztFQUVFLHlCRHBKa0I7QUMrRnRCO0FBMERFO0VBQ0Usb0NBQUE7QUF2REo7QUEyREE7O0VBRUUsb0NBQUE7QUF4REY7QUEyREE7RUFDRSxpQ0FBQTtBQXhERjtBQTJEQTtFQUNFLGFBQUE7QUF4REY7QUEyREE7RUFDRSxrQkFBQTtBQXhERjtBQTJEQTtFQUNFLGtDQUFBO0FBeERGO0FBMERBO0VBQ0UsdUJBQUE7QUF2REY7QUF5REE7O0VBUUUsdUNBQUE7QUE1REY7QUE4REE7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0FBM0RGO0FBOERBO0VBQ0UsY0NoU1k7QURxT2Q7QUE2REE7RUFDRTtJQUNFLGFBQUE7RUExREY7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIi8vIEBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbW1vbl92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5oZWFkZXJTZWMge1xuICBiYWNrZ3JvdW5kOiAkV2hpdGVfbGFiaW5nX1llbGxvdztcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0xcHggMHB4ICRDX3doaXRlU2hhZG93O1xuICBwYWRkaW5nOiAxNnB4IDMzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgLmRhdGVUaW1lcGlja2VyIHtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXZpb2xldC1saWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAzOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDE1cHg7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzM3MTk4NztcbiAgICAgIGZvbnQ6NzAwIDEycHgvMjJweCBNb2Rlcm5FcmE7XG4gICAgfVxuICB9XG4gIC5tYXRTZWxlY3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICA6Om5nLWRlZXB7XG4gICAgICBtYXQtbGFiZWx7XG4gICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW5wdXQge1xuICAgICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRyb3BVcEljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGZpbGw6ICR3aGl0ZTtcbiAgICAgIH1cblxuICAgIH1cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgICBjb2xvcjogJENfU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5vcmd6YXRpb25wb3Age1xuICAgICAgd2lkdGg6IDMzNHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogJENfd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwcHggMjVweCAyNTBweCA0NnB4IHJnYig3IDYgMzcgLyAyNSUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDUwcHg7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcblxuICAgICAgei1pbmRleDogMTAwMDtcblxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgICBcbiAgICAgIC5idXR0b24tYXV0aHtcbiAgICAgICAgY29sb3I6JHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAudHJlZS1tYWluIHtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweCA2cHggMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG5cbiAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICBmaWxsOiAkQ19TZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlbEFsbCB7XG4gICAgICAgIHBhZGRpbmc6IDlweCAyMHB4IDEwcHggMThweDtcbiAgICAgICAgaGVpZ2h0OiA0MXB4O1xuXG4gICAgICAgIC5zZWwtdGl0bGUge1xuICAgICAgICAgIGZvbnQ6IDE0cHgvMjBweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgY29sb3I6ICRDX1NlY29uZGFyeV9ibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbGVhckFsbCB7XG4gICAgICAgICAgQGluY2x1ZGUgbXNnO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRXaGl0ZV9sYWJpbmdfWWVsbG93O1xuICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hcHBBbGwge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHggMjBweDtcblxuICAgICAgICAuYnV0dG9uLWF1dGgge1xuICAgICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICAgICAgICBmb250OiA2MDAgMTRweC8yMnB4IE1vZGVybkVyYTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkQ19tZW51QmFjaztcbiAgICAgICAgICBib3JkZXI6ICRDX21lbnVCYWNrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcblxuICAgICAgICAgIC5tYXQtdHJlZS1ub2RlIHtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxhbmR1YWdlU2VsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG5cbiAgICAubWF0LXNlbGVjdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAvLyB3aWR0aDogMTA4cHg7XG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkQ19ib3JkZXJDb2xvckxpZ2h0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgZm9udDogMTYuOHB4LzI0cHggTW9kZXJuRXJhO1xuICAgICAgY29sb3I6ICRDX1NlY29uZGFyeV9ibGFjaztcbiAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgICAgICAgIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wcm9maWxlU2VjIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAubWF0U2VsZWN0RHJvcERvd24ge1xuICAgICAgLm1hdC1zZWxlY3Qge1xuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tZW51LnN2Z1wiKTtcbiAgICAgICAgICAgIGhlaWdodDogNDNweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xuICAgICAgICAgICAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5wcm9maWxlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNlckRldGFpbCB7XG4gICAgaDQge1xuICAgICAgZm9udDogNjAwIDE0cHgvMThweCBNb2Rlcm5FcmE7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgYmFja2dyb3VuZDogJENfU2Vjb25kYXJ5X0JsdWU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0M3B4O1xuXG4gICAgICBwYWRkaW5nOiA0cHggMzBweCA0cHggMHB4O1xuXG4gICAgICBmb250OjcwMCAxM3B4LzE4cHggTW9kZXJuRXJhO1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgY29sb3I6ICRDX3doaXRlO1xuICAgIH1cbiAgfVxufVxuXG4uZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5leGFtcGxlLXRyZWUgdWwsXG4uZXhhbXBsZS10cmVlIGxpIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uZXhhbXBsZS10cmVlIGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgJENfbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcblxuICB1bCBsaSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxufVxuXG46Om5nLWRlZXAgLmxhbmR1YWdlU2VsIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcFxuICAubWF0U2VsZWN0XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmVcbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCB7XG4gIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRXaGl0ZV9sYWJpbmdfWWVsbG93ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsXG4gIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJFdoaXRlX2xhYmluZ19ZZWxsb3c7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gubWF0LWFjY2VudCB7XG4gIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRXaGl0ZV9sYWJpbmdfWWVsbG93ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCxcbi5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRDX1ByaW1hcnlfQmx1ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gIGJvcmRlci1jb2xvcjogMC43cHggc29saWQgJENfYm9yZGVyQ29sb3I7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGRlbkNoZWNrYm94IHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdFNlbGVjdCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdFNlbGVjdCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIHRvcDogLTEuNDVlbSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwXG4gIC5tYXRTZWxlY3RcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0XG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0XG4gIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzXG4gICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xZW0pIHNjYWxlKDAuNzUpO1xufVxuOjpuZy1kZWVwIC5tYXQtb3B0aW9uLXRleHQge1xuICBmb250OiA2MDAgMTRweC8yMHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBjb2xvcjogJFNlY29uZGFyeV9ibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGNvbG9yOiAkQ19saWdodGJsYWNrO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkxMHB4KSB7XG4gIC51c2VyRGV0YWlsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIvL3NpZGViYXIgY29sb3IgY29kZVxuJENfUHJpbWFyeV9CbHVlOiMzNzE5ODc7IC8vIzQ5MDA4NlxuJENfcF9CbHVlOiMwMDY0RkY7XG4kQ19TZWNvbmRhcnlfYmxhY2s6IzIzMUYyMDtcbiRDX21lbnVCYWNrOiMzNzE5ODc7XG5cblxuXG4vL2hlYWRlciBjb2xvciBjb2RlXG4kQ193aGl0ZVNoYWRvdzojRTlFQkYwO1xuJENfc2t5Qmx1ZTojNERCRkZGO1xuJENfYm9yZGVyQ29sb3JMaWdodDojRThFQ0VFO1xuJENfU2Vjb25kYXJ5X0JsdWU6IzM3MTk4NztcbiRDX3doaXRlOiNmZmZmZmY7XG4kQ19saWdodG1peGJsdWVXaGl0ZWNvbG9yOiNFMEUzRTc7XG4kQ19ib3JkZXJDb2xvcjojQzVDREQ0O1xuJENfbGlnaHRibGFjazojMTcxQzIyO1xuXG4kQ195ZWxsb3dCYWNrOiNFRkE5NTI7XG5cbi8vY29udGFpbmVyIGNvbG9yIGNvZGVcbiRoZWxwQnRuX0JsdWU6IzYwMkFBQztcbiRsaWdodFdoaXRlOiNFNUVFRkY7XG5cbi8vU2FmZSBEcml2ZXIgVHJpcHMgVmVoaWNsZXMgQm94IEJhY2tDb2xvclxuJENfc2FmZUJveEJhY2s6bGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlEMEZGIC0xOC41NiUsICMzNjU2RkYgMTAyLjE3JSk7XG4kQ19kcml2ZXJCb3hCYWNrOmxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzY1NzRGRiAwLjY5JSwgIzFCMDBGRiAxMDIuMiUpO1xuJENfdHJpcEJveEJhY2s6bGluZWFyLWdyYWRpZW50KDk0LjFkZWcsICNDMjE1MTUgLTIwLjM0JSwgI0ZGOTEyQiAxMDIuMTUlKTtcbiRDX3ZlaGljbGVCb3hCYWNrOmxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICMzQ0ZGRjMgLTQuMiUsICMyODE1RkYgMTA4LjE1JSk7XG5cbi8vYnRuIGNvbGxlY3Rpb25cbiRDX2RyYWtfQmx1ZTojMjk2MkZGO1xuXG5AbWl4aW4gbXNnIHtcbiAgICBmb250OiAxMnB4LzE4cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogM3B4IDMwcHg7XG4gICAgY29sb3I6ICRDX3doaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=theme-theme-module-es5.js.map