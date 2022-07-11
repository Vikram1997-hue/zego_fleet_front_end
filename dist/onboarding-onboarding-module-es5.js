(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-onboarding-module"], {
    /***/
    "BJK8":
    /*!*********************************************************!*\
      !*** ./src/app/onboarding/wrapper/wrapper.component.ts ***!
      \*********************************************************/

    /*! exports provided: WrapperComponent */

    /***/
    function BJK8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WrapperComponent", function () {
        return WrapperComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var WrapperComponent = /*#__PURE__*/function () {
        function WrapperComponent(localService) {
          _classCallCheck(this, WrapperComponent);

          this.localService = localService;
        }

        _createClass(WrapperComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentLang = this.localService.getItem('currentlang') || 'en'; // console.log(this.currentLang);
          }
        }, {
          key: "useLanguage",
          value: function useLanguage(language) {
            this.localService.setItem('currentlang', language);
            this.currentLang = language;
            this.localService.setLang();
          }
        }]);

        return WrapperComponent;
      }();

      WrapperComponent.ɵfac = function WrapperComponent_Factory(t) {
        return new (t || WrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_1__["LocalService"]));
      };

      WrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WrapperComponent,
        selectors: [["app-wrapper"]],
        decls: 20,
        vars: 11,
        consts: [[1, "wrapper-header", "p-5"], [1, "d-flex", "justify-content-between"], [1, "logo"], ["src", "assets/images/logo.svg"], [1, "landuageSel"], [3, "value", "ngClass", "selectionChange"], ["value", "en"], ["width", "30", "height", "30", "src", "assets/images/eng.svg"], ["value", "nl"], ["with", "30", "height", "30", "src", "assets/images/netherland.svg"]],
        template: function WrapperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function WrapperComponent_Template_mat_select_selectionChange_7_listener($event) {
              return ctx.useLanguage($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentLang)("ngClass", ctx.currentLang);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.currentLang.substr(0, 2)), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "english"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 9, "netherland"), " ");
          }
        },
        directives: [_angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: [".leftSec[_ngcontent-%COMP%] {\n  max-width: 710px;\n  width: 100%;\n  background-color: #0057ff;\n  min-height: 100vh;\n  padding: 90px 53px;\n}\n@media (max-width: 1250px) {\n  .leftSec[_ngcontent-%COMP%] {\n    padding: 60px 40px 30px;\n    max-width: 520px;\n    width: 100%;\n  }\n}\n@media (max-width: 991px) {\n  .leftSec[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.leftSec[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%] {\n  padding: 160px 0 64px 0;\n}\n@media (max-width: 1440px) {\n  .leftSec[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%] {\n    padding: 100px 0 50px 0;\n  }\n}\n.leftSec[_ngcontent-%COMP%]   .detailSec[_ngcontent-%COMP%] {\n  max-width: 552px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 10px;\n}\n.leftSec[_ngcontent-%COMP%]   .detailSec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font: 700 32px/40px ModernEra;\n}\n.leftSec[_ngcontent-%COMP%]   .detailSec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font: 500 18px/29px ModernEra;\n}\n.rightSec[_ngcontent-%COMP%] {\n  width: calc(100% - 710px);\n  margin: 0 auto;\n  position: relative;\n}\n@media (max-width: 1250px) {\n  .rightSec[_ngcontent-%COMP%] {\n    width: calc(100% - 520px);\n  }\n}\n@media (max-width: 991px) {\n  .rightSec[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.rightSec[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  max-width: 410px;\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.rightSec[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"ModernEra\";\n  font-size: 16px;\n  line-height: 16px;\n  color: #7d8592;\n  margin-bottom: 20px;\n  font: 16px/16px ModernEra;\n}\n.wrapper-header[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.wrapper-header[_ngcontent-%COMP%]   .landuageSel[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 108px;\n  border: 1px solid #e6e7e8;\n  border-radius: 10px;\n  padding: 8px;\n  font: 16.8px/24px ModernEra;\n  color: #001e50;\n}\n.wrapper-header[_ngcontent-%COMP%]     .mat-select-value {\n  padding-left: 35px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJERlE7RUNHUixpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQVBKO0lBUVEsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUFDTjtBQUNGO0FBQ0k7RUFiSjtJQWNRLGFBQUE7RUFFTjtBQUNGO0FBQUk7RUFDSSx1QkFBQTtBQUVSO0FBQVE7RUFISjtJQUlRLHVCQUFBO0VBR1Y7QUFDRjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRVI7QUFBUTtFQUNJLGNENUJKO0VDNkJJLDZCQUFBO0FBRVo7QUFDUTtFQUNJLGNEakNKO0VDa0NJLDZCQUFBO0FBQ1o7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREo7QUFHSTtFQUxKO0lBTVEseUJBQUE7RUFBTjtBQUNGO0FBRUk7RUFUSjtJQVVRLFdBQUE7RUFDTjtBQUNGO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ1E7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNEL0RKO0VDZ0VJLG1CQUFBO0VBQ0EseUJBQUE7QUFDWjtBQU1BO0VBQ0ksdUJBQUE7QUFISjtBQU1RO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGNEbEZNO0FDOEVsQjtBQVFJO0VBQ0ksNkJBQUE7QUFOUiIsImZpbGUiOiJ3cmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypORVcgQ09MT1IgTElTVCovXG5cblxuJGxpZ2h0Ymx1ZTogIzAwNTdmZjtcbiRkcmFrX0JsdWU6ICMyOTYyZmY7XG4kc2JsdWU6ICMxYjE5NGI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHRibGFjazogIzE3MWMyMjtcbiRsaWdodGdyYXk6ICM5MzllYWE7XG4kZmdyYXk6ICM3ZDg1OTI7XG4kU2Vjb25kYXJ5X2JsYWNrOiAjMDAxZTUwO1xuJFByaW1hcnlfQmx1ZTogIzAwNjRmZjtcbiRTZWNvbmRhcnlfQmx1ZTogIzYwNGVmZjtcbiRidG5FeHBvcnRCbHVlOiAjNGM2ZmZmO1xuJGRhbmdlcjogI2ZmNzA3MDtcbiRTZWNvbmRhcnlfQWxlcnRzOiAjMDBjYmEwO1xuJG5vSW5mbzogIzE4YTBmYjtcbiRTZWNvbmRhcnlfRGFyazogIzJhMWU5MTtcbiRkYXJrOiAjMzIzMzM4O1xuJGJvcmRlckNvbG9yOiAjYzVjZGQ0O1xuJGxpZ2h0V2hpdGVjb2xvcjogI2Y5ZmFmYjtcbiRncm91cEJvcmRlckRhdGE6ICNlNmU3ZTg7XG4kbGlnaHRtaXhibHVlV2hpdGVjb2xvcjogI2UwZTNlNztcbiR3aGl0ZVNoYWRvdzogI2U5ZWJmMDtcbiRza3lCbHVlOiAjNGRiZmZmO1xuJHllbGxvdzogI2ZmZWE2YztcbiRvcmFuZ2U6ICNmZjk5NTA7XG4kYm9keUJhY2tHcmF5OiAjZmRmY2ZmO1xuJGxpZ2h0QmxhY2s6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4kZXhwb3J0QnRuOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjEpO1xuJGRhbmdlckJveEJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRncmVlbkJveEJhY2s6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMSk7XG4kdGFibGVPZGRCYWNrOiAjZmJmYmZiO1xuJFNlY29uZGFyeV9CbHVlX2Rhcms6ICM3NTU1Y2Y7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbmlnaHRUZXh0Q29sb3I6ICM0NzRmNWE7XG4kbmlnaHRCYWNrQmxhY2s6ICM2NjcyODA7XG4kd2hpdGVDb2xvcjogI2UxZTFlMTtcbiRyZWRDb2xvcjogI2VkNTAyZTtcbiRkYXJrX2dyYXk6ICNiZGJkYmQ7XG4kaGVscEJ0bl9CbHVlOiAjNjAyYWFjO1xuJGRhdGVDb2xvcjogIzRlNWQ3ODtcbiRkYXlDb2xvcjogIzRlNWQ3ODdhO1xuJHJlZEFjdGl2ZUNvbG9yOiAjZmExNDY0O1xuJHdoaXRlQ29sb3JCYWNrOiAjZjdmY2ZmO1xuJGJsYWNrRGFyazogIzI3MjcyZTtcbiR3aGl0ZUdyYXlCYWNrOiAjZjdmY2ZmO1xuLy9pbnB1dCBjc3NcbiRib3JkZXJDb2xvckxpZ2h0OiAjZThlY2VlO1xuJGJvcmRlckNvbG9yR3JheTogI2VlZWRmMDtcbiRsaWdodFdoaXRlOiAjZTVlZWZmO1xuJGJ0bkRlZmF1bHRXaGl0ZTogI2Y0ZjZmODtcbiRtYXRCb3JkZXI6ICNlNmU3ZTg7XG5cbiR0b2dnbGVBY3RpdmU6ICMzNzE5ODY7XG5cbi8vcmdiYSBjc3NcbiRiZWhhdmlvdXJCYWNrOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjA4KTtcbiRtb250aFNob3dCYWNrOiByZ2JhKDg2LCA2NiwgMjU1LCAwLjEpO1xuJGJveFNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiRiYWNrRGFuZ2VyOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuNCk7XG4kYmFja0dyZWVuOiByZ2IoMCAyMDMgMTYwIC8gMTUlKTtcbiRzYWZlU2NvcmVCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kYmFja0dyYXlDb21tb246IHJnYmEoMTM1LCAxMzUsIDEzNSwgMC4wNSk7XG4kcXVpdGVSb2FkOiAjZmZlYTZjO1xuXG4vL25ldyBjb2xvciB2ZXJzaW9uMlxuJHJlZEV4Y2VwdGlvbjogI2ZhMTQ2NDtcbiRib3hzaGFkb3c6IDBweCA4cHggMjVweCByZ2JhKDk4LCA5OCwgOTgsIDAuMDUpO1xuJHRvb2x0aXBzVGV4dENvbG9yOiAjMTYxOTJjO1xuXG4vL2JveCBncmFkaWFudCBCYWNrZ3JvdW5kXG4kdmVoaWNhbEJveEJhY2s6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICM4MWJiZmYgLTQuMiUsICMwMDg1ZmYgOTkuMzclKTtcbiRkcml2ZW5Cb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM1YTZiZmYgMC42OSUsICM2MDRlZmYgMTAyLjIlKTtcbiRiZWhhdmlvdXJCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM4YzQ2ZmYgMC42OSUsICNmZjgwODAgMTAyLjIlKTtcbiRldkJsb2NrQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICNmZmU5NzcgMTAyLjE3JSk7XG4kaWNlQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG5cbi8vYm94IHYyIGdyYWRpYW50IEJhY2tncm91bmRcbiRpY2VCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG4kZHJpdmVyQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjMzY1NmZmIDEwMi4xNyUpO1xuJGtpbG9tZXRlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTMzLjM5ZGVnLCAjNDk4NWY4IC00LjIyJSwgIzRkYmZmZiAxMDQuMjQlKTtcbiRzYWZlRHJpdmluZ0JveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICM0NWM4ZjEgLTE4LjU2JSwgI2VlZTA5NyAxMDIuMTclKTtcbiRkcml2ZXIxQm94VjI6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzc2ZDZlZSAwLjY5JSwgIzc2OThkYiAxMDIuMiUpO1xuJHRyaXBCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjYzJhM2EwIC0xOC41NiUsICNlOWM4YTcgMTAyLjE3JSk7XG4kdmVoaWNsZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjZGY5ODk1IC00LjIlLCAjYzJhM2EwIDEwOC4xNSUpO1xuXG4vL3Njcm9sbCBiYXIgY29sb3IgY29kZVxuJHNjcm9sbEJsYWNrOiAjODg4O1xuJHNjcm9sbFdoaXRlOiAjZjFmMWYxO1xuJHNjcm9sbEhvdmVyQmxhY2s6ICM1NTU7XG5cbi8vd2hpdGUgbGFiZWwgZmxlYWQgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNFRkE5NTI7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcblxuLy93aGl0ZSBsYWJlbCBkaGwgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNkNDA1MTE7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcbi8vICR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazojRkZDQzAwO1xuXG4vL3doaXRlIGxhYmVsIFplZ28gY29sb3JcbiRXaGl0ZV9sYWJpbmdfQmxhY2s6ICMwMDAwMDA7XG4kV2hpdGVfbGFiaW5nX1llbGxvdzogIzM3MTk4NztcbiRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTogIzRkYmZmZjtcbiRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6ICNlZWY5ZmY7XG4kd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6ICNmZmNjMDA7XG4kY29sb3JfdmlvbGV0OiAjODc3NWI3O1xuJGNvbG9yX3Zpb2xldF9kYXJrOiAjMzIxOTg3O1xuJGNvbG9yX2xpZ2h0X2dyZXk6ICNlNWU1ZTU7XG4kY29sb3ItdmlvbGV0LWxpZ2h0OiAjYWM5NGVlO1xuJGNvbG9yLWJsdWUtbGlnaHQ6ICNmNWY1ZjU7XG4kY29sb3ItdGFibGUtaGVhZGluZzogIzI3MjUyZDtcbiR0cmlwSGlzdEJhY2s6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC4wNSk7XG4kc2FmZUJhY2tDb2xvcjogcmdiYSgwLCAyMDMsIDE2MCwgMC4wNSk7XG4kY29sb3JfbGlnaHRfYmx1ZTogIzQ1Y2JmYztcbiRjb2xvcl9ncmFwaF92b2lsZXQ6ICMzNzFhODc7XG5cbi8vZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGVycm9yR3JhZGlhbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcbiAgKSxcbiAgI2Y0NDMzNjtcblxuQG1peGluIGZsZXgtanVzdGlmeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZmxleC1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbkBtaXhpbiBmbGV4LXNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBlbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQG1peGluICBsaW5lLWNsYW1wIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbn1cblxuQG1peGluIGJ0bkZpbHRlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuQG1peGluIG1zZyB7XG4gIGZvbnQ6IDEycHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDMwcHg7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbkBtaXhpbiBtYWluQm94d2l0aEJhY2sge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDEyM3B4IHJnYmEoODcsIDg0LCAxNjAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4vLyBAbWl4aW4gYnV0dG9uLWdyZWVuIHtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjMTFEMEEyO1xuLy8gYm9yZGVyLXJhZGl1czogMTQ1cHg7XG4vLyBmb250LXdlaWdodCA6IDYwMDtcbi8vIGZvbnQtc2l6ZSA6IDE1cHg7XG4vLyBsaW5lLWhlaWdodCA6IDE4cHg7XG4vLyBjb2xvciA6ICNmZmZmZmY7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tYmx1ZSB7XG4vLyBmb250IDogMTNweC8xNnB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzc1NTVDRiwgIzc1NTVDRiksICM2NDNGQzA7XG4vLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gbWF4LXdpZHRoIDogMTQwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiAzOHB4O1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLXJlZCB7XG4vLyBmb250IDogMTZweC8yMHB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICNGRjY1NjU7XG4vLyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuLmxlZnRTZWMge1xuICAgIG1heC13aWR0aDogNzEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Ymx1ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiA5MHB4IDUzcHg7XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOjEyNTBweCkge1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDQwcHggMzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgQG1lZGlhKG1heC13aWR0aDo5OTFweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5iYW5uZXJJbWcge1xuICAgICAgICBwYWRkaW5nOiAxNjBweCAwIDY0cHggMDtcblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjE0NDBweCkge1xuICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMCA1MHB4IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlsU2VjIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1NTJweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgZm9udDogNzAwIDMycHgvNDBweCBNb2Rlcm5FcmE7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBmb250OiA1MDAgMThweC8yOXB4IE1vZGVybkVyYTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJpZ2h0U2VjIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzEwcHgpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6MTI1MHB4KSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MjBweCk7XG4gICAgfVxuXG4gICAgQG1lZGlhKG1heC13aWR0aDo5OTFweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXgtd2lkdGg6IDQxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vZGVybkVyYVwiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogJGZncmF5O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGZvbnQ6IDE2cHgvMTZweCBNb2Rlcm5FcmE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4ud3JhcHBlci1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgLmxhbmR1YWdlU2VsIHtcbiAgICAgICAgLm1hdC1zZWxlY3Qge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1hdEJvcmRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBmb250OiAxNi44cHgvMjRweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICAgIH1cblxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapperComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-wrapper',
            templateUrl: './wrapper.component.html',
            styleUrls: ['./wrapper.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_1__["LocalService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "bhfF":
    /*!*************************************************************************************!*\
      !*** ./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js ***!
      \*************************************************************************************/

    /*! exports provided: CarouselComponent, CarouselModule, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective, SlideModel, SlidesOutputData, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx */

    /***/
    function bhfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselModule", function () {
        return CarouselModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselSlideDirective", function () {
        return CarouselSlideDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwlRouterLinkDirective", function () {
        return OwlRouterLinkDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwlRouterLinkWithHrefDirective", function () {
        return OwlRouterLinkWithHrefDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideModel", function () {
        return SlideModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidesOutputData", function () {
        return SlidesOutputData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return NavigationService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return CarouselService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return OwlLogger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return AutoplayService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return WINDOW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return WindowRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return BrowserWindowRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵh", function () {
        return windowFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵi", function () {
        return browserWindowProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵj", function () {
        return windowProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵk", function () {
        return WINDOW_PROVIDERS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵl", function () {
        return DOCUMENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵm", function () {
        return DocumentRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵn", function () {
        return BrowserDocumentRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵo", function () {
        return documentFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵp", function () {
        return browserDocumentProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵq", function () {
        return documentProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵr", function () {
        return DOCUMENT_PROVIDERS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵs", function () {
        return LazyLoadService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵt", function () {
        return AnimateService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵu", function () {
        return AutoHeightService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵv", function () {
        return HashService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵw", function () {
        return ResizeService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵx", function () {
        return StageComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var _c0 = function _c0(a0, a1) {
        return {
          "isMouseDragable": a0,
          "isTouchDragable": a1
        };
      };

      function CarouselComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "owl-stage", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("owlDraggable", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isMouseDragable, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isTouchDragable))("stageData", ctx_r1.stageData)("slidesData", ctx_r1.slidesData);
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "active": a0,
          "owl-dot-text": a1
        };
      };

      function CarouselComponent_ng_container_3_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_div_5_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var dot_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.moveByDot(dot_r4.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dot_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, dot_r4.active, dot_r4.showInnerContent));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", dot_r4.innerContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "disabled": a0
        };
      };

      function CarouselComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_Template_div_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_ng_container_3_div_5_Template, 2, 5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.disabled));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.prev == null ? null : ctx_r2.navData.prev.disabled))("innerHTML", ctx_r2.navData == null ? null : ctx_r2.navData.prev == null ? null : ctx_r2.navData.prev.htmlText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.next == null ? null : ctx_r2.navData.next.disabled))("innerHTML", ctx_r2.navData == null ? null : ctx_r2.navData.next == null ? null : ctx_r2.navData.next.htmlText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx_r2.dotsData == null ? null : ctx_r2.dotsData.disabled));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dotsData == null ? null : ctx_r2.dotsData.dots);
        }
      }

      var _c3 = function _c3(a0, a1, a2, a3, a4) {
        return {
          "owl-rtl": a0,
          "owl-loaded": a1,
          "owl-responsive": a2,
          "owl-drag": a3,
          "owl-grab": a4
        };
      };

      function StageComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

      var _c4 = function _c4(a0, a1) {
        return {
          $implicit: a0,
          index: a1
        };
      };

      function StageComponent_ng_container_2_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StageComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var slide_r1 = ctx_r5.$implicit;
          var i_r2 = ctx_r5.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", slide_r1.tplRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, ctx_r3.preparePublicSlide(slide_r1), i_r2));
        }
      }

      var _c5 = function _c5(a0, a1, a2, a3) {
        return {
          "width": a0,
          "margin-left": a1,
          "margin-right": a2,
          "left": a3
        };
      };

      function StageComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationend", function StageComponent_ng_container_2_Template_div_animationend_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var slide_r1 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.clear(slide_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StageComponent_ng_container_2_2_Template, 1, 5, undefined, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var slide_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", slide_r1.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c5, slide_r1.width + "px", slide_r1.marginL ? slide_r1.marginL + "px" : "", slide_r1.marginR ? slide_r1.marginR + "px" : "", slide_r1.left))("@autoHeight", slide_r1.heightState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r1.load);
        }
      }

      var _c6 = function _c6(a0, a1, a2, a3, a4) {
        return {
          "width": a0,
          "transform": a1,
          "transition": a2,
          "padding-left": a3,
          "padding-right": a4
        };
      };

      var ResizeService = /*#__PURE__*/function () {
        function ResizeService(eventManager) {
          _classCallCheck(this, ResizeService);

          this.eventManager = eventManager;
          this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
          this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
        }
        /**
         * Makes resizeSubject become Observable
         * @returns Observable of resizeSubject
         */


        _createClass(ResizeService, [{
          key: "onResize$",
          get: function get() {
            return this.resizeSubject.asObservable();
          }
          /**
           * Handler of 'resize' event. Passes data throw resizeSubject
           * @param event Event Object of 'resize' event
           */

        }, {
          key: "onResize",
          value: function onResize(event) {
            this.resizeSubject.next(event.target);
          }
          /**
           * Handler of 'onload' event. Defines the width of window
           * @param event Event Object of 'onload' event
           */

        }, {
          key: "onLoaded",
          value: function onLoaded(event) {
            this.windowWidth = event.target;
          }
        }]);

        return ResizeService;
      }();

      ResizeService.ɵfac = function ResizeService_Factory(t) {
        return new (t || ResizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["EventManager"]));
      };

      ResizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ResizeService,
        factory: ResizeService.ɵfac
      });

      ResizeService.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["EventManager"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["EventManager"]
          }];
        }, null);
      })();
      /**
       * Defaults value of options
       */


      var OwlCarouselOConfig = /*#__PURE__*/_createClass(function OwlCarouselOConfig() {
        _classCallCheck(this, OwlCarouselOConfig);

        this.items = 3;
        this.skip_validateItems = false;
        this.loop = false;
        this.center = false;
        this.rewind = false;
        this.mouseDrag = true;
        this.touchDrag = true;
        this.pullDrag = true;
        this.freeDrag = false;
        this.margin = 0;
        this.stagePadding = 0;
        this.merge = false;
        this.mergeFit = true;
        this.autoWidth = false;
        this.startPosition = 0;
        this.rtl = false;
        this.smartSpeed = 250;
        this.fluidSpeed = false;
        this.dragEndSpeed = false;
        this.responsive = {};
        this.responsiveRefreshRate = 200; // defaults to Navigation

        this.nav = false;
        this.navText = ['prev', 'next'];
        this.navSpeed = false;
        this.slideBy = 1; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

        this.dots = true;
        this.dotsEach = false;
        this.dotsData = false;
        this.dotsSpeed = false; // defaults to Autoplay

        this.autoplay = false;
        this.autoplayTimeout = 5000;
        this.autoplayHoverPause = false;
        this.autoplaySpeed = false;
        this.autoplayMouseleaveTimeout = 1; // defaults to LazyLoading

        this.lazyLoad = false;
        this.lazyLoadEager = 0; // defaults to Animate

        this.slideTransition = '';
        this.animateOut = false;
        this.animateIn = false; // defaults to AutoHeight

        this.autoHeight = false; // defaults to Hash

        this.URLhashListener = false;
      });
      /**
       * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
       * class below is copy of OwlOptions but its all props have string value showing certain type;
       * this is class is being used just in method _validateOptions() of CarouselService;
       */


      var OwlOptionsMockedTypes = /*#__PURE__*/_createClass(function OwlOptionsMockedTypes() {
        _classCallCheck(this, OwlOptionsMockedTypes);

        this.items = 'number';
        this.skip_validateItems = 'boolean';
        this.loop = 'boolean';
        this.center = 'boolean';
        this.rewind = 'boolean';
        this.mouseDrag = 'boolean';
        this.touchDrag = 'boolean';
        this.pullDrag = 'boolean';
        this.freeDrag = 'boolean';
        this.margin = 'number';
        this.stagePadding = 'number';
        this.merge = 'boolean';
        this.mergeFit = 'boolean';
        this.autoWidth = 'boolean';
        this.startPosition = 'number|string';
        this.rtl = 'boolean';
        this.smartSpeed = 'number';
        this.fluidSpeed = 'boolean';
        this.dragEndSpeed = 'number|boolean';
        this.responsive = {};
        this.responsiveRefreshRate = 'number'; // defaults to Navigation

        this.nav = 'boolean';
        this.navText = 'string[]';
        this.navSpeed = 'number|boolean';
        this.slideBy = 'number|string'; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

        this.dots = 'boolean';
        this.dotsEach = 'number|boolean';
        this.dotsData = 'boolean';
        this.dotsSpeed = 'number|boolean'; // defaults to Autoplay

        this.autoplay = 'boolean';
        this.autoplayTimeout = 'number';
        this.autoplayHoverPause = 'boolean';
        this.autoplaySpeed = 'number|boolean';
        this.autoplayMouseleaveTimeout = 'number'; // defaults to LazyLoading

        this.lazyLoad = 'boolean';
        this.lazyLoadEager = 'number'; // defaults to Animate

        this.slideTransition = 'string';
        this.animateOut = 'string|boolean';
        this.animateIn = 'string|boolean'; // defaults to AutoHeight

        this.autoHeight = 'boolean'; // defaults to Hash

        this.URLhashListener = "boolean";
      });

      var OwlLogger = /*#__PURE__*/function () {
        function OwlLogger(errorHandler) {
          _classCallCheck(this, OwlLogger);

          this.errorHandler = errorHandler;
        }

        _createClass(OwlLogger, [{
          key: "log",
          value: function log(value) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
              var _console;

              for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                rest[_key - 1] = arguments[_key];
              }

              (_console = console).log.apply(_console, [value].concat(rest));
            }
          }
        }, {
          key: "error",
          value: function error(_error) {
            this.errorHandler.handleError(_error);
          }
        }, {
          key: "warn",
          value: function warn(value) {
            var _console2;

            for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              rest[_key2 - 1] = arguments[_key2];
            }

            (_console2 = console).warn.apply(_console2, [value].concat(rest));
          }
        }]);

        return OwlLogger;
      }();

      OwlLogger.ɵfac = function OwlLogger_Factory(t) {
        return new (t || OwlLogger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));
      };

      OwlLogger.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OwlLogger,
        factory: OwlLogger.ɵfac
      });

      OwlLogger.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwlLogger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
          }];
        }, null);
      })();
      /**
       * Current state information and their tags.
       */


      var States = /*#__PURE__*/_createClass(function States() {
        _classCallCheck(this, States);
      });
      /**
       * Enumeration for types.
       * @enum {String}
       */


      var Type;

      (function (Type) {
        Type["Event"] = "event";
        Type["State"] = "state";
      })(Type || (Type = {}));

      ;
      /**
       * Enumeration for width.
       * @enum {String}
       */

      var Width;

      (function (Width) {
        Width["Default"] = "default";
        Width["Inner"] = "inner";
        Width["Outer"] = "outer";
      })(Width || (Width = {}));

      ;
      /**
       * Model for coords of .owl-stage
       */

      var Coords = /*#__PURE__*/_createClass(function Coords() {
        _classCallCheck(this, Coords);
      });
      /**
       * Model for all current data of carousel
       */


      var CarouselCurrentData = /*#__PURE__*/_createClass(function CarouselCurrentData() {
        _classCallCheck(this, CarouselCurrentData);
      });

      var CarouselService = /*#__PURE__*/function () {
        function CarouselService(logger) {
          var _this = this;

          _classCallCheck(this, CarouselService);

          this.logger = logger;
          /**
          * Subject for passing data needed for managing View
          */

          this._viewSettingsShipper$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification when the carousel got initializes
          */

          this._initializedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification when the carousel's settings start changinf
          */

          this._changeSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification when the carousel's settings have changed
          */

          this._changedSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification when the carousel starts translating or moving
          */

          this._translateCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification when the carousel stopped translating or moving
          */

          this._translatedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
          */

          this._resizeCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
          */

          this._resizedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification when the refresh of carousel starts
          */

          this._refreshCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification when the refresh of carousel is ended
          */

          this._refreshedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification when the dragging of carousel starts
          */

          this._dragCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
          * Subject for notification when the dragging of carousel is ended
          */

          this._draggedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * Current settings for the carousel.
           */

          this.settings = {
            items: 0
          };
          /**
          * Initial data for setting classes to element .owl-carousel
          */

          this.owlDOMData = {
            rtl: false,
            isResponsive: false,
            isRefreshed: false,
            isLoaded: false,
            isLoading: false,
            isMouseDragable: false,
            isGrab: false,
            isTouchDragable: false
          };
          /**
          * Initial data of .owl-stage
          */

          this.stageData = {
            transform: 'translate3d(0px,0px,0px)',
            transition: '0s',
            width: 0,
            paddingL: 0,
            paddingR: 0
          };
          /**
           * All real items.
           */

          this._items = []; // is equal to this.slides

          /**
          * Array with width of every slide.
          */

          this._widths = [];
          /**
          * Currently suppressed events to prevent them from beeing retriggered.
          */

          this._supress = {};
          /**
           * References to the running plugins of this carousel.
           */

          this._plugins = {};
          /**
          * Absolute current position.
          */

          this._current = null;
          /**
          * All cloned items.
          */

          this._clones = [];
          /**
           * Merge values of all items.
           * @todo Maybe this could be part of a plugin.
           */

          this._mergers = [];
          /**
          * Animation speed in milliseconds.
          */

          this._speed = null;
          /**
          * Coordinates of all items in pixel.
          * @todo The name of this member is missleading.
          */

          this._coordinates = [];
          /**
          * Current breakpoint.
          * @todo Real media queries would be nice.
          */

          this._breakpoint = null;
          /**
           * Prefix for id of cloned slides
           */

          this.clonedIdPrefix = 'cloned-';
          /**
           * Current options set by the caller including defaults.
           */

          this._options = {};
          /**
           * Invalidated parts within the update process.
           */

          this._invalidated = {};
          /**
           * Current state information and their tags.
           */

          this._states = {
            current: {},
            tags: {
              initializing: ['busy'],
              animating: ['busy'],
              dragging: ['interacting']
            }
          };
          /**
           * Ordered list of workers for the update process.
          */

          this._pipe = [// {
          //   filter: ['width', 'settings'],
          //   run: () => {
          //     this._width = this.carouselWindowWidth;
          //   }
          // },
          {
            filter: ['width', 'items', 'settings'],
            run: function run(cache) {
              cache.current = _this._items && _this._items[_this.relative(_this._current)].id;
            }
          }, // {
          //   filter: ['items', 'settings'],
          //   run: function() {
          //     // this.$stage.children('.cloned').remove();
          //   }
          // },
          {
            filter: ['width', 'items', 'settings'],
            run: function run(cache) {
              var margin = _this.settings.margin || '',
                  grid = !_this.settings.autoWidth,
                  rtl = _this.settings.rtl,
                  css = {
                'margin-left': rtl ? margin : '',
                'margin-right': rtl ? '' : margin
              };

              if (!grid) {
                _this.slidesData.forEach(function (slide) {
                  slide.marginL = css['margin-left'];
                  slide.marginR = css['margin-right'];
                });
              }

              cache.css = css;
            }
          }, {
            filter: ['width', 'items', 'settings'],
            run: function run(cache) {
              var width = +(_this.width() / _this.settings.items).toFixed(3) - _this.settings.margin,
                  grid = !_this.settings.autoWidth,
                  widths = [];
              var merge = null,
                  iterator = _this._items.length;
              cache.items = {
                merge: false,
                width: width
              };

              while (iterator--) {
                merge = _this._mergers[iterator];
                merge = _this.settings.mergeFit && Math.min(merge, _this.settings.items) || merge;
                cache.items.merge = merge > 1 || cache.items.merge;
                widths[iterator] = !grid ? _this._items[iterator].width ? _this._items[iterator].width : width : width * merge;
              }

              _this._widths = widths;

              _this.slidesData.forEach(function (slide, i) {
                slide.width = _this._widths[i];
                slide.marginR = cache.css['margin-right'];
                slide.marginL = cache.css['margin-left'];
              });
            }
          }, {
            filter: ['items', 'settings'],
            run: function run() {
              var clones = [],
                  items = _this._items,
                  settings = _this.settings,
                  // TODO: Should be computed from number of min width items in stage
              view = Math.max(settings.items * 2, 4),
                  size = Math.ceil(items.length / 2) * 2;
              var append = [],
                  prepend = [],
                  repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
              repeat /= 2;

              while (repeat--) {
                // Switch to only using appended clones
                clones.push(_this.normalize(clones.length / 2, true));
                append.push(Object.assign({}, _this.slidesData[clones[clones.length - 1]]));
                clones.push(_this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend.unshift(Object.assign({}, _this.slidesData[clones[clones.length - 1]]));
              }

              _this._clones = clones;
              append = append.map(function (slide) {
                slide.id = "".concat(_this.clonedIdPrefix).concat(slide.id);
                slide.isActive = false;
                slide.isCloned = true;
                return slide;
              });
              prepend = prepend.map(function (slide) {
                slide.id = "".concat(_this.clonedIdPrefix).concat(slide.id);
                slide.isActive = false;
                slide.isCloned = true;
                return slide;
              });
              _this.slidesData = prepend.concat(_this.slidesData).concat(append);
            }
          }, {
            filter: ['width', 'items', 'settings'],
            run: function run() {
              var rtl = _this.settings.rtl ? 1 : -1,
                  size = _this._clones.length + _this._items.length,
                  coordinates = [];
              var iterator = -1,
                  previous = 0,
                  current = 0;

              while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = _this._widths[_this.relative(iterator)] + _this.settings.margin;
                coordinates.push(previous + current * rtl);
              }

              _this._coordinates = coordinates;
            }
          }, {
            filter: ['width', 'items', 'settings'],
            run: function run() {
              var padding = _this.settings.stagePadding,
                  coordinates = _this._coordinates,
                  css = {
                'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                'padding-left': padding || '',
                'padding-right': padding || ''
              };
              _this.stageData.width = css.width; // use this property in *ngIf directive for .owl-stage element

              _this.stageData.paddingL = css['padding-left'];
              _this.stageData.paddingR = css['padding-right'];
            }
          }, {
            //   filter: [ 'width', 'items', 'settings' ],
            //   run: cache => {
            // 		// this method sets the width for every slide, but I set it in different way earlier
            // 		const grid = !this.settings.autoWidth,
            // 		items = this.$stage.children(); // use this.slidesData
            //     let iterator = this._coordinates.length;
            //     if (grid && cache.items.merge) {
            //       while (iterator--) {
            //         cache.css.width = this._widths[this.relative(iterator)];
            //         items.eq(iterator).css(cache.css);
            //       }
            //     } else if (grid) {
            //       cache.css.width = cache.items.width;
            //       items.css(cache.css);
            //     }
            //   }
            // }, {
            //   filter: [ 'items' ],
            //   run: function() {
            //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
            //   }
            // }, {
            filter: ['width', 'items', 'settings'],
            run: function run(cache) {
              var current = cache.current ? _this.slidesData.findIndex(function (slide) {
                return slide.id === cache.current;
              }) : 0;
              current = Math.max(_this.minimum(), Math.min(_this.maximum(), current));

              _this.reset(current);
            }
          }, {
            filter: ['position'],
            run: function run() {
              _this.animate(_this.coordinates(_this._current));
            }
          }, {
            filter: ['width', 'position', 'items', 'settings'],
            run: function run() {
              var rtl = _this.settings.rtl ? 1 : -1,
                  padding = _this.settings.stagePadding * 2,
                  matches = [];
              var begin, end, inner, outer, i, n;
              begin = _this.coordinates(_this.current());

              if (typeof begin === 'number') {
                begin += padding;
              } else {
                begin = 0;
              }

              end = begin + _this.width() * rtl;

              if (rtl === -1 && _this.settings.center) {
                var result = _this._coordinates.filter(function (element) {
                  return _this.settings.items % 2 === 1 ? element >= begin : element > begin;
                });

                begin = result.length ? result[result.length - 1] : begin;
              }

              for (i = 0, n = _this._coordinates.length; i < n; i++) {
                inner = Math.ceil(_this._coordinates[i - 1] || 0);
                outer = Math.ceil(Math.abs(_this._coordinates[i]) + padding * rtl);

                if (_this._op(inner, '<=', begin) && _this._op(inner, '>', end) || _this._op(outer, '<', begin) && _this._op(outer, '>', end)) {
                  matches.push(i);
                }
              }

              _this.slidesData.forEach(function (slide) {
                slide.isActive = false;
                return slide;
              });

              matches.forEach(function (item) {
                _this.slidesData[item].isActive = true;
              });

              if (_this.settings.center) {
                _this.slidesData.forEach(function (slide) {
                  slide.isCentered = false;
                  return slide;
                });

                _this.slidesData[_this.current()].isCentered = true;
              }
            }
          }];
        } // Is needed for tests


        _createClass(CarouselService, [{
          key: "invalidated",
          get: function get() {
            return this._invalidated;
          } // is needed for tests

        }, {
          key: "states",
          get: function get() {
            return this._states;
          }
          /**
           * Makes _viewSettingsShipper$ Subject become Observable
           * @returns Observable of _viewSettingsShipper$ Subject
           */

        }, {
          key: "getViewCurSettings",
          value: function getViewCurSettings() {
            return this._viewSettingsShipper$.asObservable();
          }
          /**
           * Makes _initializedCarousel$ Subject become Observable
           * @returns Observable of _initializedCarousel$ Subject
           */

        }, {
          key: "getInitializedState",
          value: function getInitializedState() {
            return this._initializedCarousel$.asObservable();
          }
          /**
           * Makes _changeSettingsCarousel$ Subject become Observable
           * @returns Observable of _changeSettingsCarousel$ Subject
           */

        }, {
          key: "getChangeState",
          value: function getChangeState() {
            return this._changeSettingsCarousel$.asObservable();
          }
          /**
           * Makes _changedSettingsCarousel$ Subject become Observable
           * @returns Observable of _changedSettingsCarousel$ Subject
           */

        }, {
          key: "getChangedState",
          value: function getChangedState() {
            return this._changedSettingsCarousel$.asObservable();
          }
          /**
           * Makes _translateCarousel$ Subject become Observable
           * @returns Observable of _translateCarousel$ Subject
           */

        }, {
          key: "getTranslateState",
          value: function getTranslateState() {
            return this._translateCarousel$.asObservable();
          }
          /**
           * Makes _translatedCarousel$ Subject become Observable
           * @returns Observable of _translatedCarousel$ Subject
           */

        }, {
          key: "getTranslatedState",
          value: function getTranslatedState() {
            return this._translatedCarousel$.asObservable();
          }
          /**
           * Makes _resizeCarousel$ Subject become Observable
           * @returns Observable of _resizeCarousel$ Subject
           */

        }, {
          key: "getResizeState",
          value: function getResizeState() {
            return this._resizeCarousel$.asObservable();
          }
          /**
           * Makes _resizedCarousel$ Subject become Observable
           * @returns Observable of _resizedCarousel$ Subject
           */

        }, {
          key: "getResizedState",
          value: function getResizedState() {
            return this._resizedCarousel$.asObservable();
          }
          /**
           * Makes _refreshCarousel$ Subject become Observable
           * @returns Observable of _refreshCarousel$ Subject
           */

        }, {
          key: "getRefreshState",
          value: function getRefreshState() {
            return this._refreshCarousel$.asObservable();
          }
          /**
           * Makes _refreshedCarousel$ Subject become Observable
           * @returns Observable of _refreshedCarousel$ Subject
           */

        }, {
          key: "getRefreshedState",
          value: function getRefreshedState() {
            return this._refreshedCarousel$.asObservable();
          }
          /**
           * Makes _dragCarousel$ Subject become Observable
           * @returns Observable of _dragCarousel$ Subject
           */

        }, {
          key: "getDragState",
          value: function getDragState() {
            return this._dragCarousel$.asObservable();
          }
          /**
           * Makes _draggedCarousel$ Subject become Observable
           * @returns Observable of _draggedCarousel$ Subject
           */

        }, {
          key: "getDraggedState",
          value: function getDraggedState() {
            return this._draggedCarousel$.asObservable();
          }
          /**
           * Setups custom options expanding default options
           * @param options custom options
           */

        }, {
          key: "setOptions",
          value: function setOptions(options) {
            var configOptions = new OwlCarouselOConfig();

            var checkedOptions = this._validateOptions(options, configOptions);

            this._options = Object.assign(Object.assign({}, configOptions), checkedOptions);
          }
          /**
           * Checks whether user's option are set properly. Cheking is based on typings;
           * @param options options set by user
           * @param configOptions default options
           * @returns checked and modified (if it's needed) user's options
           *
           * Notes:
           * 	- if user set option with wrong type, it'll be written in console
           */

        }, {
          key: "_validateOptions",
          value: function _validateOptions(options, configOptions) {
            var _this2 = this;

            var checkedOptions = Object.assign({}, options);
            var mockedTypes = new OwlOptionsMockedTypes();

            var setRightOption = function setRightOption(type, key) {
              _this2.logger.log("options.".concat(key, " must be type of ").concat(type, "; ").concat(key, "=").concat(options[key], " skipped to defaults: ").concat(key, "=").concat(configOptions[key]));

              return configOptions[key];
            };

            for (var key in checkedOptions) {
              if (checkedOptions.hasOwnProperty(key)) {
                // condition could be shortened but it gets harder for understanding
                if (mockedTypes[key] === 'number') {
                  if (this._isNumeric(checkedOptions[key])) {
                    checkedOptions[key] = +checkedOptions[key];
                    checkedOptions[key] = key === 'items' ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
                  } else {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                  }
                } else if (mockedTypes[key] === 'boolean' && typeof checkedOptions[key] !== 'boolean') {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                } else if (mockedTypes[key] === 'number|boolean' && !this._isNumberOrBoolean(checkedOptions[key])) {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                } else if (mockedTypes[key] === 'number|string' && !this._isNumberOrString(checkedOptions[key])) {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                } else if (mockedTypes[key] === 'string|boolean' && !this._isStringOrBoolean(checkedOptions[key])) {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                } else if (mockedTypes[key] === 'string[]') {
                  if (Array.isArray(checkedOptions[key])) {
                    var isString = false;
                    checkedOptions[key].forEach(function (element) {
                      isString = typeof element === 'string' ? true : false;
                    });

                    if (!isString) {
                      checkedOptions[key] = setRightOption(mockedTypes[key], key);
                    }

                    ;
                  } else {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                  }
                }
              }
            }

            return checkedOptions;
          }
          /**
           * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
           * @param items option items set by user
           * @param skip_validateItems option `skip_validateItems` set by user
           * @returns right number of items
           */

        }, {
          key: "_validateItems",
          value: function _validateItems(items, skip_validateItems) {
            var result = items;

            if (items > this._items.length) {
              if (skip_validateItems) {
                this.logger.log('The option \'items\' in your options is bigger than the number of slides. The navigation got disabled');
              } else {
                result = this._items.length;
                this.logger.log('The option \'items\' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled');
              }
            } else {
              if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
                this.logger.log('Option \'items\' in your options is equal to the number of slides. So the navigation got disabled');
              }
            }

            return result;
          }
          /**
           * Set current width of carousel
           * @param width width of carousel Window
           */

        }, {
          key: "setCarouselWidth",
          value: function setCarouselWidth(width) {
            this._width = width;
          }
          /**
             * Setups the current settings.
             * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
             * @todo Support for media queries by using `matchMedia` would be nice.
             * @param carouselWidth width of carousel
             * @param slides array of slides
             * @param options options set by user
             */

        }, {
          key: "setup",
          value: function setup(carouselWidth, slides, options) {
            this.setCarouselWidth(carouselWidth);
            this.setItems(slides);

            this._defineSlidesData();

            this.setOptions(options);
            this.settings = Object.assign({}, this._options);
            this.setOptionsForViewport();

            this._trigger('change', {
              property: {
                name: 'settings',
                value: this.settings
              }
            });

            this.invalidate('settings'); // must be call of this function;

            this._trigger('changed', {
              property: {
                name: 'settings',
                value: this.settings
              }
            });
          }
          /**
           * Set options for current viewport
           */

        }, {
          key: "setOptionsForViewport",
          value: function setOptionsForViewport() {
            var _this3 = this;

            var viewport = this._width,
                overwrites = this._options.responsive;
            var match = -1;

            if (!Object.keys(overwrites).length) {
              return;
            }

            if (!viewport) {
              this.settings.items = 1;
              return;
            }

            for (var key in overwrites) {
              if (overwrites.hasOwnProperty(key)) {
                if (+key <= viewport && +key > match) {
                  match = Number(key);
                }
              }
            }

            this.settings = Object.assign(Object.assign(Object.assign({}, this._options), overwrites[match]), {
              items: overwrites[match] && overwrites[match].items ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items
            }); // if (typeof this.settings.stagePadding === 'function') {
            // 	this.settings.stagePadding = this.settings.stagePadding();
            // }

            delete this.settings.responsive;
            this.owlDOMData.isResponsive = true;
            this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
            this.owlDOMData.isTouchDragable = this.settings.touchDrag;
            var mergers = [];

            this._items.forEach(function (item) {
              var mergeN = _this3.settings.merge ? item.dataMerge : 1;
              mergers.push(mergeN);
            });

            this._mergers = mergers;
            this._breakpoint = match;
            this.invalidate('settings');
          }
          /**
           * Initializes the carousel.
           * @param slides array of CarouselSlideDirective
           */

        }, {
          key: "initialize",
          value: function initialize(slides) {
            var _this4 = this;

            this.enter('initializing'); // this.trigger('initialize');

            this.owlDOMData.rtl = this.settings.rtl;

            if (this._mergers.length) {
              this._mergers = [];
            }

            slides.forEach(function (item) {
              var mergeN = _this4.settings.merge ? item.dataMerge : 1;

              _this4._mergers.push(mergeN);
            });
            this._clones = [];
            this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
            this.invalidate('items');
            this.refresh();
            this.owlDOMData.isLoaded = true;
            this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
            this.owlDOMData.isTouchDragable = this.settings.touchDrag;
            this.sendChanges();
            this.leave('initializing');

            this._trigger('initialized');
          }
        }, {
          key: "sendChanges",
          value:
          /**
           * Sends all data needed for View
           */
          function sendChanges() {
            this._viewSettingsShipper$.next({
              owlDOMData: this.owlDOMData,
              stageData: this.stageData,
              slidesData: this.slidesData,
              navData: this.navData,
              dotsData: this.dotsData
            });
          }
          /**
             * Updates option logic if necessery
             */

        }, {
          key: "_optionsLogic",
          value: function _optionsLogic() {
            if (this.settings.autoWidth) {
              this.settings.stagePadding = 0;
              this.settings.merge = false;
            }
          }
          /**
           * Updates the view
           */

        }, {
          key: "update",
          value: function update() {
            var _this5 = this;

            var i = 0;

            var n = this._pipe.length,
                filter = function filter(item) {
              return _this5._invalidated[item];
            },
                cache = {};

            while (i < n) {
              var filteredPipe = this._pipe[i].filter.filter(filter);

              if (this._invalidated.all || filteredPipe.length > 0) {
                this._pipe[i].run(cache);
              }

              i++;
            }

            this.slidesData.forEach(function (slide) {
              return slide.classes = _this5.setCurSlideClasses(slide);
            });
            this.sendChanges();
            this._invalidated = {};

            if (!this.is('valid')) {
              this.enter('valid');
            }
          }
          /**
             * Gets the width of the view.
             * @param [dimension=Width.Default] The dimension to return
             * @returns The width of the view in pixel.
             */

        }, {
          key: "width",
          value: function width(dimension) {
            dimension = dimension || Width.Default;

            switch (dimension) {
              case Width.Inner:
              case Width.Outer:
                return this._width;

              default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
            }
          }
          /**
             * Refreshes the carousel primarily for adaptive purposes.
             */

        }, {
          key: "refresh",
          value: function refresh() {
            this.enter('refreshing');

            this._trigger('refresh');

            this._defineSlidesData();

            this.setOptionsForViewport();

            this._optionsLogic(); // this.$element.addClass(this.options.refreshClass);


            this.update(); // this.$element.removeClass(this.options.refreshClass);

            this.leave('refreshing');

            this._trigger('refreshed');
          }
          /**
             * Checks window `resize` event.
             * @param curWidth width of .owl-carousel
             */

        }, {
          key: "onResize",
          value: function onResize(curWidth) {
            if (!this._items.length) {
              return false;
            }

            this.setCarouselWidth(curWidth);
            this.enter('resizing'); // if (this.trigger('resize').isDefaultPrevented()) {
            // 	this.leave('resizing');
            // 	return false;
            // }

            this._trigger('resize');

            this.invalidate('width');
            this.refresh();
            this.leave('resizing');

            this._trigger('resized');
          }
          /**
             * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
             * @todo Horizontal swipe threshold as option
             * @todo #261
             * @param event - The event arguments.
             * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
             */

        }, {
          key: "prepareDragging",
          value: function prepareDragging(event) {
            var stage = null,
                transformArr; // could be 5 commented lines below; However there's stage transform in stageData and in updates after each move of stage
            // stage = getComputedStyle(this.el.nativeElement).transform.replace(/.*\(|\)| /g, '').split(',');
            // stage = {
            //   x: stage[stage.length === 16 ? 12 : 4],
            //   y: stage[stage.length === 16 ? 13 : 5]
            // };

            transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, '').split(',');
            stage = {
              x: +transformArr[0],
              y: +transformArr[1]
            };

            if (this.is('animating')) {
              this.invalidate('position');
            }

            if (event.type === 'mousedown') {
              this.owlDOMData.isGrab = true;
            }

            this.speed(0);
            return stage;
          }
          /**
           * Enters into a 'dragging' state
           */

        }, {
          key: "enterDragging",
          value: function enterDragging() {
            this.enter('dragging');

            this._trigger('drag');
          }
          /**
             * Defines new coords for .owl-stage while dragging it
             * @todo #261
             * @param event the event arguments.
             * @param dragData initial data got after starting dragging
             * @returns coords or false
             */

        }, {
          key: "defineNewCoordsDrag",
          value: function defineNewCoordsDrag(event, dragData) {
            var minimum = null,
                maximum = null,
                pull = null;
            var delta = this.difference(dragData.pointer, this.pointer(event)),
                stage = this.difference(dragData.stage.start, delta);

            if (!this.is('dragging')) {
              return false;
            }

            if (this.settings.loop) {
              minimum = this.coordinates(this.minimum());
              maximum = +this.coordinates(this.maximum() + 1) - minimum;
              stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
            } else {
              minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
              maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
              pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
              stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
            }

            return stage;
          }
          /**
             * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
             * @todo #261
             * @todo Threshold for click event
             * @param event the event arguments.
             * @param dragObj the object with dragging settings and states
             * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
             */

        }, {
          key: "finishDragging",
          value: function finishDragging(event, dragObj, clickAttacher) {
            var directions = ['right', 'left'],
                delta = this.difference(dragObj.pointer, this.pointer(event)),
                stage = dragObj.stage.current,
                direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
            var currentSlideI, current, newCurrent;

            if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
              this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
              currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
              current = this.current();
              newCurrent = this.current(currentSlideI === -1 ? undefined : currentSlideI);

              if (current !== newCurrent) {
                this.invalidate('position');
                this.update();
              }

              dragObj.direction = direction;

              if (Math.abs(delta.x) > 3 || new Date().getTime() - dragObj.time > 300) {
                clickAttacher();
              }
            }

            if (!this.is('dragging')) {
              return;
            }

            this.leave('dragging');

            this._trigger('dragged');
          }
          /**
             * Gets absolute position of the closest item for a coordinate.
             * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
             * @param coordinate The coordinate in pixel.
             * @param direction The direction to check for the closest item. Ether `left` or `right`.
             * @returns The absolute position of the closest item.
             */

        }, {
          key: "closest",
          value: function closest(coordinate, direction) {
            var pull = 30,
                width = this.width();
            var coordinates = this.coordinates(),
                position = -1;

            if (this.settings.center) {
              coordinates = coordinates.map(function (item) {
                if (item === 0) {
                  item += 0.000001;
                }

                return item;
              });
            } // option 'freeDrag' doesn't have realization and using it here creates problem:
            // variable 'position' stays unchanged (it equals -1 at the begging) and thus method returns -1
            // Returning value is consumed by method current(), which taking -1 as argument calculates the index of new current slide
            // In case of having 5 slides ans 'loop=false; calling 'current(-1)' sets props '_current' as 4. Just last slide remains visible instead of 3 last slides.
            // if (!this.settings.freeDrag) {
            // check closest item


            for (var i = 0; i < coordinates.length; i++) {
              if (direction === 'left' && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
                position = i; // on a right pull, check on previous index
                // to do so, subtract width from value and set position = index + 1
              } else if (direction === 'right' && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
                position = i + 1;
              } else if (this._op(coordinate, '<', coordinates[i]) && this._op(coordinate, '>', coordinates[i + 1] || coordinates[i] - width)) {
                position = direction === 'left' ? i + 1 : i;
              } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
                position = i;
              }

              if (position !== -1) {
                break;
              }

              ;
            } // }


            if (!this.settings.loop) {
              // non loop boundries
              if (this._op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
              } else if (this._op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
              }
            }

            return position;
          }
          /**
             * Animates the stage.
             * @todo #270
             * @param coordinate The coordinate in pixels.
             */

        }, {
          key: "animate",
          value: function animate(coordinate) {
            var animate = this.speed() > 0;

            if (this.is('animating')) {
              this.onTransitionEnd();
            }

            if (animate) {
              this.enter('animating');

              this._trigger('translate');
            }

            this.stageData.transform = 'translate3d(' + coordinate + 'px,0px,0px)';
            this.stageData.transition = this.speed() / 1000 + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''); // also there was transition by means of JQuery.animate or css-changing property left
          }
          /**
             * Checks whether the carousel is in a specific state or not.
             * @param state The state to check.
             * @returns The flag which indicates if the carousel is busy.
             */

        }, {
          key: "is",
          value: function is(state) {
            return this._states.current[state] && this._states.current[state] > 0;
          }
        }, {
          key: "current",
          value:
          /**
             * Sets the absolute position of the current item.
             * @param position The new absolute position or nothing to leave it unchanged.
             * @returns The absolute position of the current item.
             */
          function current(position) {
            if (position === undefined) {
              return this._current;
            }

            if (this._items.length === 0) {
              return undefined;
            }

            position = this.normalize(position);

            if (this._current !== position) {
              var event = this._trigger('change', {
                property: {
                  name: 'position',
                  value: position
                }
              }); // if (event.data !== undefined) {
              // 	position = this.normalize(event.data);
              // }


              this._current = position;
              this.invalidate('position');

              this._trigger('changed', {
                property: {
                  name: 'position',
                  value: this._current
                }
              });
            }

            return this._current;
          }
          /**
             * Invalidates the given part of the update routine.
             * @param part The part to invalidate.
             * @returns The invalidated parts.
             */

        }, {
          key: "invalidate",
          value: function invalidate(part) {
            if (typeof part === 'string') {
              this._invalidated[part] = true;

              if (this.is('valid')) {
                this.leave('valid');
              }
            }

            return Object.keys(this._invalidated);
          }
        }, {
          key: "reset",
          value:
          /**
           * Resets the absolute position of the current item.
           * @param position the absolute position of the new item.
           */
          function reset(position) {
            position = this.normalize(position);

            if (position === undefined) {
              return;
            }

            this._speed = 0;
            this._current = position;

            this._suppress(['translate', 'translated']);

            this.animate(this.coordinates(position));

            this._release(['translate', 'translated']);
          }
          /**
             * Normalizes an absolute or a relative position of an item.
             * @param position The absolute or relative position to normalize.
             * @param relative Whether the given position is relative or not.
             * @returns The normalized position.
             */

        }, {
          key: "normalize",
          value: function normalize(position, relative) {
            var n = this._items.length,
                m = relative ? 0 : this._clones.length;

            if (!this._isNumeric(position) || n < 1) {
              position = undefined;
            } else if (position < 0 || position >= n + m) {
              position = ((position - m / 2) % n + n) % n + m / 2;
            }

            return position;
          }
          /**
             * Converts an absolute position of an item into a relative one.
             * @param position The absolute position to convert.
             * @returns The converted position.
             */

        }, {
          key: "relative",
          value: function relative(position) {
            position -= this._clones.length / 2;
            return this.normalize(position, true);
          }
          /**
             * Gets the maximum position for the current item.
             * @param relative Whether to return an absolute position or a relative position.
             * @returns number of maximum position
             */

        }, {
          key: "maximum",
          value: function maximum() {
            var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var settings = this.settings;
            var maximum = this._coordinates.length,
                iterator,
                reciprocalItemsWidth,
                elementWidth;

            if (settings.loop) {
              maximum = this._clones.length / 2 + this._items.length - 1;
            } else if (settings.autoWidth || settings.merge) {
              iterator = this._items.length;
              reciprocalItemsWidth = this.slidesData[--iterator].width;
              elementWidth = this._width;

              while (iterator--) {
                // it could be use this._items instead of this.slidesData;
                reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;

                if (reciprocalItemsWidth > elementWidth) {
                  break;
                }
              }

              maximum = iterator + 1;
            } else if (settings.center) {
              maximum = this._items.length - 1;
            } else {
              maximum = this._items.length - settings.items;
            }

            if (relative) {
              maximum -= this._clones.length / 2;
            }

            return Math.max(maximum, 0);
          }
          /**
             * Gets the minimum position for the current item.
             * @param relative Whether to return an absolute position or a relative position.
             * @returns number of minimum position
             */

        }, {
          key: "minimum",
          value: function minimum() {
            var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return relative ? 0 : this._clones.length / 2;
          }
          /**
             * Gets an item at the specified relative position.
             * @param position The relative position of the item.
             * @returns The item at the given position or all items if no position was given.
             */

        }, {
          key: "items",
          value: function items(position) {
            if (position === undefined) {
              return this._items.slice();
            }

            position = this.normalize(position, true);
            return [this._items[position]];
          }
          /**
             * Gets an item at the specified relative position.
             * @param position The relative position of the item.
             * @returns The item at the given position or all items if no position was given.
             */

        }, {
          key: "mergers",
          value: function mergers(position) {
            if (position === undefined) {
              return this._mergers.slice();
            }

            position = this.normalize(position, true);
            return this._mergers[position];
          }
          /**
             * Gets the absolute positions of clones for an item.
             * @param position The relative position of the item.
             * @returns The absolute positions of clones for the item or all if no position was given.
             */

        }, {
          key: "clones",
          value: function clones(position) {
            var odd = this._clones.length / 2,
                even = odd + this._items.length,
                map = function map(index) {
              return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
            };

            if (position === undefined) {
              return this._clones.map(function (v, i) {
                return map(i);
              });
            }

            return this._clones.map(function (v, i) {
              return v === position ? map(i) : null;
            }).filter(function (item) {
              return item;
            });
          }
          /**
             * Sets the current animation speed.
             * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
             * @returns The current animation speed in milliseconds.
             */

        }, {
          key: "speed",
          value: function speed(_speed) {
            if (_speed !== undefined) {
              this._speed = _speed;
            }

            return this._speed;
          }
          /**
             * Gets the coordinate of an item.
             * @todo The name of this method is missleanding.
             * @param position The absolute position of the item within `minimum()` and `maximum()`.
             * @returns The coordinate of the item in pixel or all coordinates.
             */

        }, {
          key: "coordinates",
          value: function coordinates(position) {
            var _this6 = this;

            var multiplier = 1,
                newPosition = position - 1,
                coordinate,
                result;

            if (position === undefined) {
              result = this._coordinates.map(function (item, index) {
                return _this6.coordinates(index);
              });
              return result;
            }

            if (this.settings.center) {
              if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
              }

              coordinate = this._coordinates[position];
              coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
            } else {
              coordinate = this._coordinates[newPosition] || 0;
            }

            coordinate = Math.ceil(coordinate);
            return coordinate;
          }
          /**
             * Calculates the speed for a translation.
             * @param from The absolute position of the start item.
             * @param to The absolute position of the target item.
             * @param factor [factor=undefined] - The time factor in milliseconds.
             * @returns The time in milliseconds for the translation.
             */

        }, {
          key: "_duration",
          value: function _duration(from, to, factor) {
            if (factor === 0) {
              return 0;
            }

            return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(+factor || this.settings.smartSpeed);
          }
          /**
             * Slides to the specified item.
             * @param position The position of the item.
             * @param speed The time in milliseconds for the transition.
             */

        }, {
          key: "to",
          value: function to(position, speed) {
            var _this7 = this;

            var current = this.current(),
                revert = null,
                distance = position - this.relative(current),
                maximum = this.maximum(),
                delayForLoop = 0;
            var direction = +(distance > 0) - +(distance < 0),
                items = this._items.length,
                minimum = this.minimum();

            if (this.settings.loop) {
              if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
              }

              position = current + distance;
              revert = ((position - minimum) % items + items) % items + minimum;

              if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                delayForLoop = 30;
                this.reset(current);
                this.sendChanges();
              }
            } else if (this.settings.rewind) {
              maximum += 1;
              position = (position % maximum + maximum) % maximum;
            } else {
              position = Math.max(minimum, Math.min(maximum, position));
            }

            setTimeout(function () {
              _this7.speed(_this7._duration(current, position, speed));

              _this7.current(position);

              _this7.update();
            }, delayForLoop);
          }
          /**
             * Slides to the next item.
             * @param speed The time in milliseconds for the transition.
             */

        }, {
          key: "next",
          value: function next(speed) {
            speed = speed || false;
            this.to(this.relative(this.current()) + 1, speed);
          }
          /**
             * Slides to the previous item.
             * @param speed The time in milliseconds for the transition.
             */

        }, {
          key: "prev",
          value: function prev(speed) {
            speed = speed || false;
            this.to(this.relative(this.current()) - 1, speed);
          }
          /**
             * Handles the end of an animation.
             * @param event - The event arguments.
             */

        }, {
          key: "onTransitionEnd",
          value: function onTransitionEnd(event) {
            // if css2 animation then event object is undefined
            if (event !== undefined) {
              // event.stopPropagation();
              // // Catch only owl-stage transitionEnd event
              // if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)	) {
              // 	return false;
              // }
              return false;
            }

            this.leave('animating');

            this._trigger('translated');
          }
          /**
             * Gets viewport width.
             * @returns - The width in pixel.
             */

        }, {
          key: "_viewport",
          value: function _viewport() {
            var width;

            if (this._width) {
              width = this._width;
            } else {
              this.logger.log('Can not detect viewport width.');
            }

            return width;
          }
          /**
             * Sets _items
             * @param content The list of slides put into CarouselSlideDirectives.
             */

        }, {
          key: "setItems",
          value: function setItems(content) {
            this._items = content;
          }
          /**
           * Sets slidesData using this._items
           */

        }, {
          key: "_defineSlidesData",
          value: function _defineSlidesData() {
            // Maybe creating and using loadMap would be better in LazyLoadService.
            // Hovewer in that case when 'resize' event fires, prop 'load' of all slides will get 'false' and such state of prop will be seen by View during its updating. Accordingly the code will remove slides's content from DOM even if it was loaded before.
            // Thus it would be needed to add that content into DOM again.
            // In order to avoid additional removing/adding loaded slides's content we use loadMap here and set restore state of prop 'load' before the View will get it.
            var loadMap;

            if (this.slidesData && this.slidesData.length) {
              loadMap = new Map();
              this.slidesData.forEach(function (item) {
                if (item.load) {
                  loadMap.set(item.id, item.load);
                }
              });
            }

            this.slidesData = this._items.map(function (slide) {
              return {
                id: "".concat(slide.id),
                isActive: false,
                tplRef: slide.tplRef,
                dataMerge: slide.dataMerge,
                width: 0,
                isCloned: false,
                load: loadMap ? loadMap.get(slide.id) : false,
                hashFragment: slide.dataHash
              };
            });
          }
          /**
           * Sets current classes for slide
           * @param slide Slide of carousel
           * @returns object with names of css-classes which are keys and true/false values
           */

        }, {
          key: "setCurSlideClasses",
          value: function setCurSlideClasses(slide) {
            // CSS classes: added/removed per current state of component properties
            var currentClasses = {
              'active': slide.isActive,
              'center': slide.isCentered,
              'cloned': slide.isCloned,
              'animated': slide.isAnimated,
              'owl-animated-in': slide.isDefAnimatedIn,
              'owl-animated-out': slide.isDefAnimatedOut
            };

            if (this.settings.animateIn) {
              currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
            }

            if (this.settings.animateOut) {
              currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
            }

            return currentClasses;
          }
          /**
             * Operators to calculate right-to-left and left-to-right.
             * @param a - The left side operand.
             * @param o - The operator.
             * @param b - The right side operand.
             * @returns true/false meaning right-to-left or left-to-right
             */

        }, {
          key: "_op",
          value: function _op(a, o, b) {
            var rtl = this.settings.rtl;

            switch (o) {
              case '<':
                return rtl ? a > b : a < b;

              case '>':
                return rtl ? a < b : a > b;

              case '>=':
                return rtl ? a <= b : a >= b;

              case '<=':
                return rtl ? a >= b : a <= b;

              default:
                break;
            }
          }
          /**
             * Triggers a public event.
             * @todo Remove `status`, `relatedTarget` should be used instead.
             * @param name The event name.
             * @param data The event data.
             * @param namespace The event namespace.
             * @param state The state which is associated with the event.
             * @param enter Indicates if the call enters the specified state or not.
             */

        }, {
          key: "_trigger",
          value: function _trigger(name, data, namespace, state, enter) {
            switch (name) {
              case 'initialized':
                this._initializedCarousel$.next(name);

                break;

              case 'change':
                this._changeSettingsCarousel$.next(data);

                break;

              case 'changed':
                this._changedSettingsCarousel$.next(data);

                break;

              case 'drag':
                this._dragCarousel$.next(name);

                break;

              case 'dragged':
                this._draggedCarousel$.next(name);

                break;

              case 'resize':
                this._resizeCarousel$.next(name);

                break;

              case 'resized':
                this._resizedCarousel$.next(name);

                break;

              case 'refresh':
                this._refreshCarousel$.next(name);

                break;

              case 'refreshed':
                this._refreshedCarousel$.next(name);

                break;

              case 'translate':
                this._translateCarousel$.next(name);

                break;

              case 'translated':
                this._translatedCarousel$.next(name);

                break;

              default:
                break;
            }
          }
          /**
           * Enters a state.
           * @param name - The state name.
           */

        }, {
          key: "enter",
          value: function enter(name) {
            var _this8 = this;

            [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
              if (_this8._states.current[stateName] === undefined) {
                _this8._states.current[stateName] = 0;
              }

              _this8._states.current[stateName]++;
            });
          }
        }, {
          key: "leave",
          value:
          /**
             * Leaves a state.
             * @param name - The state name.
             */
          function leave(name) {
            var _this9 = this;

            [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
              if (_this9._states.current[stateName] === 0 || !!_this9._states.current[stateName]) {
                _this9._states.current[stateName]--;
              }
            });
          }
        }, {
          key: "register",
          value:
          /**
             * Registers an event or state.
             * @param object - The event or state to register.
             */
          function register(object) {
            var _this10 = this;

            if (object.type === Type.State) {
              if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
              } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
              }

              this._states.tags[object.name] = this._states.tags[object.name].filter(function (tag, i) {
                return _this10._states.tags[object.name].indexOf(tag) === i;
              });
            }
          }
          /**
             * Suppresses events.
             * @param events The events to suppress.
             */

        }, {
          key: "_suppress",
          value: function _suppress(events) {
            var _this11 = this;

            events.forEach(function (event) {
              _this11._supress[event] = true;
            });
          }
          /**
             * Releases suppressed events.
             * @param events The events to release.
             */

        }, {
          key: "_release",
          value: function _release(events) {
            var _this12 = this;

            events.forEach(function (event) {
              delete _this12._supress[event];
            });
          }
          /**
             * Gets unified pointer coordinates from event.
             * @todo #261
             * @param event The `mousedown` or `touchstart` event.
             * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
             */

        }, {
          key: "pointer",
          value: function pointer(event) {
            var result = {
              x: null,
              y: null
            };
            event = event.originalEvent || event || window.event;
            event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

            if (event.pageX) {
              result.x = event.pageX;
              result.y = event.pageY;
            } else {
              result.x = event.clientX;
              result.y = event.clientY;
            }

            return result;
          }
          /**
             * Determines if the input is a Number or something that can be coerced to a Number
             * @param number The input to be tested
             * @returns An indication if the input is a Number or can be coerced to a Number
             */

        }, {
          key: "_isNumeric",
          value: function _isNumeric(number) {
            return !isNaN(parseFloat(number));
          }
          /**
           * Determines whether value is number or boolean type
           * @param value The input to be tested
           * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
           */

        }, {
          key: "_isNumberOrBoolean",
          value: function _isNumberOrBoolean(value) {
            return this._isNumeric(value) || typeof value === 'boolean';
          }
          /**
           * Determines whether value is number or string type
           * @param value The input to be tested
           * @returns An indication if the input is a Number or can be coerced to a Number, or String
           */

        }, {
          key: "_isNumberOrString",
          value: function _isNumberOrString(value) {
            return this._isNumeric(value) || typeof value === 'string';
          }
          /**
           * Determines whether value is number or string type
           * @param value The input to be tested
           * @returns An indication if the input is a Number or can be coerced to a Number, or String
           */

        }, {
          key: "_isStringOrBoolean",
          value: function _isStringOrBoolean(value) {
            return typeof value === 'string' || typeof value === 'boolean';
          }
          /**
             * Gets the difference of two vectors.
             * @todo #261
             * @param first The first vector.
             * @param second The second vector.
             * @returns The difference.
             */

        }, {
          key: "difference",
          value: function difference(first, second) {
            if (null === first || null === second) {
              return {
                x: 0,
                y: 0
              };
            }

            return {
              x: first.x - second.x,
              y: first.y - second.y
            };
          }
        }]);

        return CarouselService;
      }();

      CarouselService.ɵfac = function CarouselService_Factory(t) {
        return new (t || CarouselService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](OwlLogger));
      };

      CarouselService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CarouselService,
        factory: CarouselService.ɵfac
      });

      CarouselService.ctorParameters = function () {
        return [{
          type: OwlLogger
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: OwlLogger
          }];
        }, null);
      })();

      var NavigationService = /*#__PURE__*/function () {
        function NavigationService(carouselService) {
          _classCallCheck(this, NavigationService);

          this.carouselService = carouselService;
          /**
           * Indicates whether the plugin is initialized or not.
           */

          this._initialized = false;
          /**
           * The current paging indexes.
           */

          this._pages = [];
          /**
           * Data for navigation elements of the user interface.
           */

          this._navData = {
            disabled: false,
            prev: {
              disabled: false,
              htmlText: ''
            },
            next: {
              disabled: false,
              htmlText: ''
            }
          };
          /**
           * Data for dot elements of the user interface.
           */

          this._dotsData = {
            disabled: false,
            dots: []
          };
          this.spyDataStreams();
        }

        _createClass(NavigationService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.navSubscription.unsubscribe();
          }
          /**
           * Defines Observables which service must observe
           */

        }, {
          key: "spyDataStreams",
          value: function spyDataStreams() {
            var _this13 = this;

            var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (state) {
              _this13.initialize();

              _this13._updateNavPages();

              _this13.draw();

              _this13.update();

              _this13.carouselService.sendChanges();
            })); // mostly changes in carouselService and carousel at all causes carouselService.to(). It moves stage right-left by its code and calling needed functions
            // Thus this method by calling carouselService.current(position) notifies about changes

            var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) {
              return data.property.name === 'position';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              _this13.update(); // should be the call of the function written at the end of comment
              // but the method carouselServive.to() has setTimeout(f, 0) which contains carouselServive.update() which calls sendChanges() method.
              // carouselService.navData and carouselService.dotsData update earlier than carouselServive.update() gets called
              // updates of carouselService.navData and carouselService.dotsData are being happening withing carouselService.current(position) method which calls next() of _changedSettingsCarousel$
              // carouselService.current(position) is being calling earlier than carouselServive.update();
              // this.carouselService.sendChanges();

            }));
            var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this13._updateNavPages();

              _this13.draw();

              _this13.update();

              _this13.carouselService.sendChanges();
            }));
            var navMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
            this.navSubscription = navMerge$.subscribe(function () {});
          }
          /**
             * Initializes the layout of the plugin and extends the carousel.
             */

        }, {
          key: "initialize",
          value: function initialize() {
            this._navData.disabled = true;
            this._navData.prev.htmlText = this.carouselService.settings.navText[0];
            this._navData.next.htmlText = this.carouselService.settings.navText[1];
            this._dotsData.disabled = true;
            this.carouselService.navData = this._navData;
            this.carouselService.dotsData = this._dotsData;
          }
          /**
           * Calculates internal states and updates prop _pages
           */

        }, {
          key: "_updateNavPages",
          value: function _updateNavPages() {
            var i, j, k;
            var lower = this.carouselService.clones().length / 2,
                upper = lower + this.carouselService.items().length,
                maximum = this.carouselService.maximum(true),
                pages = [],
                settings = this.carouselService.settings;
            var size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
            size = +size;

            if (settings.slideBy !== 'page') {
              settings.slideBy = Math.min(+settings.slideBy, settings.items);
            }

            if (settings.dots || settings.slideBy === 'page') {
              for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                  pages.push({
                    start: Math.min(maximum, i - lower),
                    end: i - lower + size - 1
                  });

                  if (Math.min(maximum, i - lower) === maximum) {
                    break;
                  }

                  j = 0, ++k;
                }

                j += this.carouselService.mergers(this.carouselService.relative(i));
              }
            }

            this._pages = pages;
          }
          /**
             * Draws the user interface.
             * @todo The option `dotsData` wont work.
             */

        }, {
          key: "draw",
          value: function draw() {
            var _this14 = this;

            var difference;
            var settings = this.carouselService.settings,
                items = this.carouselService.items(),
                disabled = items.length <= settings.items;
            this._navData.disabled = !settings.nav || disabled;
            this._dotsData.disabled = !settings.dots || disabled;

            if (settings.dots) {
              difference = this._pages.length - this._dotsData.dots.length;

              if (settings.dotsData && difference !== 0) {
                this._dotsData.dots = [];
                items.forEach(function (item) {
                  _this14._dotsData.dots.push({
                    active: false,
                    id: "dot-".concat(item.id),
                    innerContent: item.dotContent,
                    showInnerContent: true
                  });
                });
              } else if (difference > 0) {
                var startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;

                for (var i = 0; i < difference; i++) {
                  this._dotsData.dots.push({
                    active: false,
                    id: "dot-".concat(i + startI),
                    innerContent: '',
                    showInnerContent: false
                  });
                }
              } else if (difference < 0) {
                this._dotsData.dots.splice(difference, Math.abs(difference));
              }
            }

            this.carouselService.navData = this._navData;
            this.carouselService.dotsData = this._dotsData;
          }
        }, {
          key: "update",
          value:
          /**
           * Updates navigation buttons's and dots's states
           */
          function update() {
            this._updateNavButtons();

            this._updateDots();
          }
          /**
           * Changes state of nav buttons (disabled, enabled)
           */

        }, {
          key: "_updateNavButtons",
          value: function _updateNavButtons() {
            var settings = this.carouselService.settings,
                loop = settings.loop || settings.rewind,
                index = this.carouselService.relative(this.carouselService.current());

            if (settings.nav) {
              this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
              this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
            }

            this.carouselService.navData = this._navData;
          }
          /**
           * Changes active dot if page becomes changed
           */

        }, {
          key: "_updateDots",
          value: function _updateDots() {
            var curActiveDotI;

            if (!this.carouselService.settings.dots) {
              return;
            }

            this._dotsData.dots.forEach(function (item) {
              if (item.active === true) {
                item.active = false;
              }
            });

            curActiveDotI = this._current();

            if (this._dotsData.dots.length) {
              this._dotsData.dots[curActiveDotI].active = true;
            }

            this.carouselService.dotsData = this._dotsData;
          }
          /**
             * Gets the current page position of the carousel.
             * @returns the current page position of the carousel
             */

        }, {
          key: "_current",
          value: function _current() {
            var current = this.carouselService.relative(this.carouselService.current());
            var finalCurrent;

            var pages = this._pages.filter(function (page, index) {
              return page.start <= current && page.end >= current;
            }).pop();

            finalCurrent = this._pages.findIndex(function (page) {
              return page.start === pages.start && page.end === pages.end;
            });
            return finalCurrent;
          }
        }, {
          key: "_getPosition",
          value:
          /**
             * Gets the current succesor/predecessor position.
           * @param sussessor position of slide
             * @returns the current succesor/predecessor position
             */
          function _getPosition(successor) {
            var position, length;
            var settings = this.carouselService.settings;

            if (settings.slideBy === 'page') {
              position = this._current();
              length = this._pages.length;
              successor ? ++position : --position;
              position = this._pages[(position % length + length) % length].start;
            } else {
              position = this.carouselService.relative(this.carouselService.current());
              length = this.carouselService.items().length;
              successor ? position += +settings.slideBy : position -= +settings.slideBy;
            }

            return position;
          }
        }, {
          key: "next",
          value:
          /**
             * Slides to the next item or page.
             * @param speed The time in milliseconds for the transition.
             */
          function next(speed) {
            this.carouselService.to(this._getPosition(true), speed);
          }
        }, {
          key: "prev",
          value:
          /**
           * Slides to the previous item or page.
           * @param speed The time in milliseconds for the transition.
           */
          function prev(speed) {
            this.carouselService.to(this._getPosition(false), speed);
          }
        }, {
          key: "to",
          value:
          /**
           * Slides to the specified item or page.
           * @param position - The position of the item or page.
           * @param speed - The time in milliseconds for the transition.
           * @param standard - Whether to use the standard behaviour or not. Default meaning false
           */
          function to(position, speed, standard) {
            var length;

            if (!standard && this._pages.length) {
              length = this._pages.length;
              this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
            } else {
              this.carouselService.to(position, speed);
            }
          }
        }, {
          key: "moveByDot",
          value:
          /**
           * Moves carousel after user's clicking on any dots
           */
          function moveByDot(dotId) {
            var index = this._dotsData.dots.findIndex(function (dot) {
              return dotId === dot.id;
            });

            this.to(index, this.carouselService.settings.dotsSpeed);
          }
          /**
           * rewinds carousel to slide with needed id
           * @param id id of slide
           */

        }, {
          key: "toSlideById",
          value: function toSlideById(id) {
            var position = this.carouselService.slidesData.findIndex(function (slide) {
              return slide.id === id && slide.isCloned === false;
            });

            if (position === -1 || position === this.carouselService.current()) {
              return;
            }

            this.carouselService.to(this.carouselService.relative(position), false);
          }
        }]);

        return NavigationService;
      }();

      NavigationService.ɵfac = function NavigationService_Factory(t) {
        return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CarouselService));
      };

      NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavigationService,
        factory: NavigationService.ɵfac
      });

      NavigationService.ctorParameters = function () {
        return [{
          type: CarouselService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: CarouselService
          }];
        }, null);
      })(); // import { Injectable } from '@angular/core';

      /**
       * Create a new injection token for injecting the window into a component.
       */


      var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken');
      /**
       * Define abstract class for obtaining reference to the global window object.
       */

      var WindowRef = /*#__PURE__*/function () {
        function WindowRef() {
          _classCallCheck(this, WindowRef);
        }

        _createClass(WindowRef, [{
          key: "nativeWindow",
          get: function get() {
            throw new Error('Not implemented.');
          }
        }]);

        return WindowRef;
      }();
      /**
       * Define class that implements the abstract class and returns the native window object.
       */


      var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
        _inherits(BrowserWindowRef, _WindowRef);

        var _super = _createSuper(BrowserWindowRef);

        function BrowserWindowRef() {
          _classCallCheck(this, BrowserWindowRef);

          return _super.call(this);
        }
        /**
         * @returns window object
         */


        _createClass(BrowserWindowRef, [{
          key: "nativeWindow",
          get: function get() {
            return window;
          }
        }]);

        return BrowserWindowRef;
      }(WindowRef);

      BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) {
        return new (t || BrowserWindowRef)();
      };

      BrowserWindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BrowserWindowRef,
        factory: BrowserWindowRef.ɵfac
      });

      BrowserWindowRef.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserWindowRef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * Create an factory function that returns the native window object.
       * @param browserWindowRef Native window object
       * @param platformId id of platform
       * @returns type of platform of empty object
       */


      function windowFactory(browserWindowRef, platformId) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
          return browserWindowRef.nativeWindow;
        }

        var obj = {
          setTimeout: function setTimeout(func, time) {},
          clearTimeout: function clearTimeout(a) {}
        };
        return obj;
      }
      /**
       * Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class.
       */


      var browserWindowProvider = {
        provide: WindowRef,
        useClass: BrowserWindowRef
      };
      /**
       * Create an injectable provider that uses the windowFactory function for returning the native window object.
       */

      var windowProvider = {
        provide: WINDOW,
        useFactory: windowFactory,
        deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
      };
      /**
       * Create an array of providers.
       */

      var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
      /**
       * Create a new injection token for injecting the Document into a component.
       */

      var DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DocumentToken');
      /**
       * Define abstract class for obtaining reference to the global Document object.
       */

      var DocumentRef = /*#__PURE__*/function () {
        function DocumentRef() {
          _classCallCheck(this, DocumentRef);
        }

        _createClass(DocumentRef, [{
          key: "nativeDocument",
          get: function get() {
            throw new Error('Not implemented.');
          }
        }]);

        return DocumentRef;
      }();
      /**
       * Define class that implements the abstract class and returns the native Document object.
       */


      var BrowserDocumentRef = /*#__PURE__*/function (_DocumentRef) {
        _inherits(BrowserDocumentRef, _DocumentRef);

        var _super2 = _createSuper(BrowserDocumentRef);

        function BrowserDocumentRef() {
          _classCallCheck(this, BrowserDocumentRef);

          return _super2.call(this);
        }
        /**
         * @returns Document object
         */


        _createClass(BrowserDocumentRef, [{
          key: "nativeDocument",
          get: function get() {
            return document;
          }
        }]);

        return BrowserDocumentRef;
      }(DocumentRef);

      BrowserDocumentRef.ɵfac = function BrowserDocumentRef_Factory(t) {
        return new (t || BrowserDocumentRef)();
      };

      BrowserDocumentRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BrowserDocumentRef,
        factory: BrowserDocumentRef.ɵfac
      });

      BrowserDocumentRef.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserDocumentRef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * Create an factory function that returns the native Document object.
       * @param browserDocumentRef Native Document object
       * @param platformId id of platform
       * @returns type of platform of empty object
       */


      function documentFactory(browserDocumentRef, platformId) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
          return browserDocumentRef.nativeDocument;
        }

        var doc = {
          hidden: false,
          visibilityState: 'visible'
        };
        return doc;
      }
      /**
       * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
       */


      var browserDocumentProvider = {
        provide: DocumentRef,
        useClass: BrowserDocumentRef
      };
      /**
       * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
       */

      var documentProvider = {
        provide: DOCUMENT,
        useFactory: documentFactory,
        deps: [DocumentRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
      };
      /**
       * Create an array of providers.
       */

      var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];

      var AutoplayService = /*#__PURE__*/function () {
        function AutoplayService(carouselService, winRef, docRef, ngZone) {
          _classCallCheck(this, AutoplayService);

          this.carouselService = carouselService;
          this.ngZone = ngZone;
          /**
           * The autoplay timeout.
           */

          this._timeout = null;
          /**
           * Indicates whenever the autoplay is paused.
           */

          this._paused = false;
          /**
           * Shows whether the autoplay is paused for unlimited time by the developer.
           * Use to prevent autoplaying in case of firing `mouseleave` by adding layers to `<body>` like `mat-menu` does
           */

          this._isAutoplayStopped = false;
          this.winRef = winRef;
          this.docRef = docRef;
          this.spyDataStreams();
        }

        _createClass(AutoplayService, [{
          key: "isAutoplayStopped",
          get: function get() {
            return this._isAutoplayStopped;
          },
          set: function set(value) {
            this._isAutoplayStopped = value;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.autoplaySubscription.unsubscribe();
          }
          /**
           * Defines Observables which service must observe
           */

        }, {
          key: "spyDataStreams",
          value: function spyDataStreams() {
            var _this15 = this;

            var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              if (_this15.carouselService.settings.autoplay) {
                _this15.play();
              }
            }));
            var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              _this15._handleChangeObservable(data);
            }));
            var resized$ = this.carouselService.getResizedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              if (_this15.carouselService.settings.autoplay && !_this15._isAutoplayStopped) {
                _this15.play();
              } else {
                _this15.stop();
              }
            })); // original Autoplay Plugin has listeners on play.owl.core and stop.owl.core events.
            // They are triggered by Video Plugin

            var autoplayMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$, resized$);
            this.autoplaySubscription = autoplayMerge$.subscribe(function () {});
          }
          /**
             * Starts the autoplay.
             * @param timeout The interval before the next animation starts.
             * @param speed The animation speed for the animations.
             */

        }, {
          key: "play",
          value: function play(timeout, speed) {
            if (this._paused) {
              this._paused = false;

              this._setAutoPlayInterval(this.carouselService.settings.autoplayMouseleaveTimeout);
            }

            if (this.carouselService.is('rotating')) {
              return;
            }

            this.carouselService.enter('rotating');

            this._setAutoPlayInterval();
          }
        }, {
          key: "_getNextTimeout",
          value:
          /**
             * Gets a new timeout
             * @param timeout - The interval before the next animation starts.
             * @param speed - The animation speed for the animations.
             * @return
             */
          function _getNextTimeout(timeout, speed) {
            var _this16 = this;

            if (this._timeout) {
              this.winRef.clearTimeout(this._timeout);
            }

            this._isArtificialAutoplayTimeout = timeout ? true : false;
            return this.ngZone.runOutsideAngular(function () {
              return _this16.winRef.setTimeout(function () {
                _this16.ngZone.run(function () {
                  if (_this16._paused || _this16.carouselService.is('busy') || _this16.carouselService.is('interacting') || _this16.docRef.hidden) {
                    return;
                  }

                  _this16.carouselService.next(speed || _this16.carouselService.settings.autoplaySpeed);
                });
              }, timeout || _this16.carouselService.settings.autoplayTimeout);
            });
          }
        }, {
          key: "_setAutoPlayInterval",
          value:
          /**
             * Sets autoplay in motion.
             */
          function _setAutoPlayInterval(timeout) {
            this._timeout = this._getNextTimeout(timeout);
          }
        }, {
          key: "stop",
          value:
          /**
           * Stops the autoplay.
           */
          function stop() {
            if (!this.carouselService.is('rotating')) {
              return;
            }

            this._paused = true;
            this.winRef.clearTimeout(this._timeout);
            this.carouselService.leave('rotating');
          }
        }, {
          key: "pause",
          value:
          /**
             * Stops the autoplay.
             */
          function pause() {
            if (!this.carouselService.is('rotating')) {
              return;
            }

            this._paused = true;
          }
        }, {
          key: "_handleChangeObservable",
          value:
          /**
           * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
           * @param data object with current position of carousel and type of change
           */
          function _handleChangeObservable(data) {
            if (data.property.name === 'settings') {
              if (this.carouselService.settings.autoplay) {
                this.play();
              } else {
                this.stop();
              }
            } else if (data.property.name === 'position') {
              //console.log('play?', e);
              if (this.carouselService.settings.autoplay) {
                this._setAutoPlayInterval();
              }
            }
          }
          /**
           * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
           */

        }, {
          key: "_playAfterTranslated",
          value: function _playAfterTranslated() {
            var _this17 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('translated').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
              return _this17.carouselService.getTranslatedState();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
              return _this17._isArtificialAutoplayTimeout;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              return _this17._setAutoPlayInterval();
            })).subscribe(function () {});
          }
          /**
           * Starts pausing
           */

        }, {
          key: "startPausing",
          value: function startPausing() {
            if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
              this.pause();
            }
          }
          /**
           * Starts playing after mouse leaves carousel
           */

        }, {
          key: "startPlayingMouseLeave",
          value: function startPlayingMouseLeave() {
            if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
              this.play();

              this._playAfterTranslated();
            }
          }
          /**
           * Starts playing after touch ends
           */

        }, {
          key: "startPlayingTouchEnd",
          value: function startPlayingTouchEnd() {
            if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
              this.play();

              this._playAfterTranslated();
            }
          }
        }]);

        return AutoplayService;
      }();

      AutoplayService.ɵfac = function AutoplayService_Factory(t) {
        return new (t || AutoplayService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      AutoplayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AutoplayService,
        factory: AutoplayService.ɵfac
      });

      AutoplayService.ctorParameters = function () {
        return [{
          type: CarouselService
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [WINDOW]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DOCUMENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoplayService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: CarouselService
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [WINDOW]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [DOCUMENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();

      var LazyLoadService = /*#__PURE__*/function () {
        function LazyLoadService(carouselService) {
          _classCallCheck(this, LazyLoadService);

          this.carouselService = carouselService;
          this.spyDataStreams();
        }

        _createClass(LazyLoadService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.lazyLoadSubscription.unsubscribe();
          }
          /**
           * Defines Observables which service must observe
           */

        }, {
          key: "spyDataStreams",
          value: function spyDataStreams() {
            var _this18 = this;

            var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              var isLazyLoad = _this18.carouselService.settings && !_this18.carouselService.settings.lazyLoad;

              _this18.carouselService.slidesData.forEach(function (item) {
                return item.load = isLazyLoad ? true : false;
              });
            }));
            var changeSettings$ = this.carouselService.getChangeState();
            var resizedCarousel$ = this.carouselService.getResizedState();
            var lazyLoadMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this18._defineLazyLoadSlides(data);
            }));
            this.lazyLoadSubscription = lazyLoadMerge$.subscribe(function () {});
          }
        }, {
          key: "_defineLazyLoadSlides",
          value: function _defineLazyLoadSlides(data) {
            var _this19 = this;

            if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
              return;
            }

            if (data.property && data.property.name === 'position' || data === 'initialized' || data === "resized") {
              var settings = this.carouselService.settings,
                  clones = this.carouselService.clones().length;
              var n = settings.center && Math.ceil(settings.items / 2) || settings.items,
                  i = settings.center && n * -1 || 0,
                  position = (data.property && data.property.value !== undefined ? data.property.value : this.carouselService.current()) + i; // load = $.proxy(function(i, v) { this.load(v) }, this);
              //TODO: Need documentation for this new option

              if (settings.lazyLoadEager > 0) {
                n += settings.lazyLoadEager; // If the carousel is looping also preload images that are to the "left"

                if (settings.loop) {
                  position -= settings.lazyLoadEager;
                  n++;
                }
              }

              while (i++ < n) {
                this._load(clones / 2 + this.carouselService.relative(position));

                if (clones) {
                  this.carouselService.clones(this.carouselService.relative(position)).forEach(function (value) {
                    return _this19._load(value);
                  });
                }

                position++;
              }
            }
          }
          /**
             * Loads all resources of an item at the specified position.
             * @param position - The absolute position of the item.
             */

        }, {
          key: "_load",
          value: function _load(position) {
            if (this.carouselService.slidesData[position].load) {
              return;
            }

            this.carouselService.slidesData[position].load = true;
          }
        }]);

        return LazyLoadService;
      }();

      LazyLoadService.ɵfac = function LazyLoadService_Factory(t) {
        return new (t || LazyLoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CarouselService));
      };

      LazyLoadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LazyLoadService,
        factory: LazyLoadService.ɵfac
      });

      LazyLoadService.ctorParameters = function () {
        return [{
          type: CarouselService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyLoadService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: CarouselService
          }];
        }, null);
      })();

      var AnimateService = /*#__PURE__*/function () {
        function AnimateService(carouselService) {
          _classCallCheck(this, AnimateService);

          this.carouselService = carouselService;
          /**
           * s
           */

          this.swapping = true;
          /**
           * active slide before translating
           */

          this.previous = undefined;
          /**
           * new active slide after translating
           */

          this.next = undefined;
          this.spyDataStreams();
        }

        _createClass(AnimateService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.animateSubscription.unsubscribe();
          }
          /**
           * Defines Observables which service must observe
           */

        }, {
          key: "spyDataStreams",
          value: function spyDataStreams() {
            var _this20 = this;

            var changeSettings$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              if (data.property.name === 'position') {
                _this20.previous = _this20.carouselService.current();
                _this20.next = data.property.value;
              }
            }));
            var dragCarousel$ = this.carouselService.getDragState();
            var draggedCarousel$ = this.carouselService.getDraggedState();
            var translatedCarousel$ = this.carouselService.getTranslatedState();
            var dragTranslatedMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this20.swapping = data === 'translated';
            }));
            var translateCarousel$ = this.carouselService.getTranslateState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              if (_this20.swapping && (_this20.carouselService._options.animateOut || _this20.carouselService._options.animateIn)) {
                _this20._swap();
              }
            }));
            var animateMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
            this.animateSubscription = animateMerge$.subscribe(function () {});
          }
          /**
             * Toggles the animation classes whenever an translations starts.
             * @returns
             */

        }, {
          key: "_swap",
          value: function _swap() {
            if (this.carouselService.settings.items !== 1) {
              return;
            } // if (!$.support.animation || !$.support.transition) {
            // 	return;
            // }


            this.carouselService.speed(0);
            var left;
            var previous = this.carouselService.slidesData[this.previous],
                next = this.carouselService.slidesData[this.next],
                incoming = this.carouselService.settings.animateIn,
                outgoing = this.carouselService.settings.animateOut;

            if (this.carouselService.current() === this.previous) {
              return;
            }

            if (outgoing) {
              left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
              this.carouselService.slidesData.forEach(function (slide) {
                if (slide.id === previous.id) {
                  slide.left = "".concat(left, "px");
                  slide.isAnimated = true;
                  slide.isDefAnimatedOut = true;
                  slide.isCustomAnimatedOut = true;
                }
              });
            }

            if (incoming) {
              this.carouselService.slidesData.forEach(function (slide) {
                if (slide.id === next.id) {
                  slide.isAnimated = true;
                  slide.isDefAnimatedIn = true;
                  slide.isCustomAnimatedIn = true;
                }
              });
            }
          }
        }, {
          key: "clear",
          value:
          /**
           * Handles the end of 'animationend' event
           * @param id Id of slides
           */
          function clear(id) {
            var _this21 = this;

            this.carouselService.slidesData.forEach(function (slide) {
              if (slide.id === id) {
                slide.left = '';
                slide.isAnimated = false;
                slide.isDefAnimatedOut = false;
                slide.isCustomAnimatedOut = false;
                slide.isDefAnimatedIn = false;
                slide.isCustomAnimatedIn = false;
                slide.classes = _this21.carouselService.setCurSlideClasses(slide);
              }
            });
            this.carouselService.onTransitionEnd();
          }
        }]);

        return AnimateService;
      }();

      AnimateService.ɵfac = function AnimateService_Factory(t) {
        return new (t || AnimateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CarouselService));
      };

      AnimateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AnimateService,
        factory: AnimateService.ɵfac
      });

      AnimateService.ctorParameters = function () {
        return [{
          type: CarouselService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: CarouselService
          }];
        }, null);
      })();

      var AutoHeightService = /*#__PURE__*/function () {
        function AutoHeightService(carouselService) {
          _classCallCheck(this, AutoHeightService);

          this.carouselService = carouselService;
          this.spyDataStreams();
        }

        _createClass(AutoHeightService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.autoHeightSubscription.unsubscribe();
          }
          /**
           * Defines Observables which service must observe
           */

        }, {
          key: "spyDataStreams",
          value: function spyDataStreams() {
            var _this22 = this;

            var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              if (_this22.carouselService.settings.autoHeight) {
                _this22.update();
              } else {
                _this22.carouselService.slidesData.forEach(function (slide) {
                  return slide.heightState = 'full';
                });
              }
            }));
            var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              if (_this22.carouselService.settings.autoHeight && data.property.name === 'position') {
                _this22.update();
              }
            }));
            var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              if (_this22.carouselService.settings.autoHeight) {
                _this22.update();
              }
            }));
            var autoHeight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
            this.autoHeightSubscription = autoHeight$.subscribe(function () {});
          }
          /**
           * Updates the prop 'heightState' of slides
           */

        }, {
          key: "update",
          value: function update() {
            var items = this.carouselService.settings.items;
            var start = this.carouselService.current(),
                end = start + items;

            if (this.carouselService.settings.center) {
              start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
              end = items % 2 === 1 ? start + items : start + items + 1;
            }

            this.carouselService.slidesData.forEach(function (slide, i) {
              slide.heightState = i >= start && i < end ? 'full' : 'nulled';
            });
          }
        }]);

        return AutoHeightService;
      }();

      AutoHeightService.ɵfac = function AutoHeightService_Factory(t) {
        return new (t || AutoHeightService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CarouselService));
      };

      AutoHeightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AutoHeightService,
        factory: AutoHeightService.ɵfac
      });

      AutoHeightService.ctorParameters = function () {
        return [{
          type: CarouselService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoHeightService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: CarouselService
          }];
        }, null);
      })();

      var HashService = /*#__PURE__*/function () {
        function HashService(carouselService, route, router) {
          _classCallCheck(this, HashService);

          this.carouselService = carouselService;
          this.route = route;
          this.router = router;
          this.spyDataStreams();

          if (!this.route) {
            this.route = {
              fragment: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('no route').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            };
          }

          ;

          if (!this.router) {
            this.router = {
              navigate: function navigate(commands, extras) {
                return;
              }
            };
          }
        }

        _createClass(HashService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.hashSubscription.unsubscribe();
          }
          /**
           * Defines Observables which service must observe
           */

        }, {
          key: "spyDataStreams",
          value: function spyDataStreams() {
            var _this23 = this;

            var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              return _this23.listenToRoute();
            }));
            var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              if (_this23.carouselService.settings.URLhashListener && data.property.name === 'position') {
                var newCurSlide = _this23.carouselService.current();

                var newCurFragment = _this23.carouselService.slidesData[newCurSlide].hashFragment;

                if (!newCurFragment || newCurFragment === _this23.currentHashFragment) {
                  return;
                }

                _this23.router.navigate(['./'], {
                  fragment: newCurFragment,
                  relativeTo: _this23.route
                });
              }
            }));
            var hashFragment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$);
            this.hashSubscription = hashFragment$.subscribe(function () {});
          }
          /**
           * rewinds carousel to slide which has the same hashFragment as fragment of current url
           * @param fragment fragment of url
           */

        }, {
          key: "rewind",
          value: function rewind(fragment) {
            var position = this.carouselService.slidesData.findIndex(function (slide) {
              return slide.hashFragment === fragment && slide.isCloned === false;
            });

            if (position === -1 || position === this.carouselService.current()) {
              return;
            }

            this.carouselService.to(this.carouselService.relative(position), false);
          }
          /**
           * Initiate listening to ActivatedRoute.fragment
           */

        }, {
          key: "listenToRoute",
          value: function listenToRoute() {
            var _this24 = this;

            var count = this.carouselService.settings.startPosition === 'URLHash' ? 0 : 2;
            this.route.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skip"])(count)).subscribe(function (fragment) {
              _this24.currentHashFragment = fragment;

              _this24.rewind(fragment);
            });
          }
        }]);

        return HashService;
      }();

      HashService.ɵfac = function HashService_Factory(t) {
        return new (t || HashService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], 8));
      };

      HashService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HashService,
        factory: HashService.ɵfac
      });

      HashService.ctorParameters = function () {
        return [{
          type: CarouselService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HashService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: CarouselService
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();

      var nextId = 0;

      var CarouselSlideDirective = /*#__PURE__*/function () {
        function CarouselSlideDirective(tplRef) {
          _classCallCheck(this, CarouselSlideDirective);

          this.tplRef = tplRef;
          /**
           * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
           * Will be auto-generated if not provided.
           */

          this.id = "owl-slide-".concat(nextId++);
          /**
           * Defines how much widths of common slide will current slide have
           * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
           */

          this._dataMerge = 1;
          /**
           * Width of slide
           */

          this.width = 0;
          /**
           * Inner content of dot for certain slide; can be html-markup
           */

          this.dotContent = '';
          /**
           * Hash (fragment) of url which corresponds to certain slide
           */

          this.dataHash = '';
        }

        _createClass(CarouselSlideDirective, [{
          key: "dataMerge",
          get: function get() {
            return this._dataMerge;
          }
          /**
             * Determines if the input is a Number or something that can be coerced to a Number
             * @param - The input to be tested
             * @returns - An indication if the input is a Number or can be coerced to a Number
             */
          ,
          set: function set(data) {
            this._dataMerge = this.isNumeric(data) ? data : 1;
          }
        }, {
          key: "isNumeric",
          value: function isNumeric(number) {
            return !isNaN(parseFloat(number));
          }
        }]);

        return CarouselSlideDirective;
      }();

      CarouselSlideDirective.ɵfac = function CarouselSlideDirective_Factory(t) {
        return new (t || CarouselSlideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      CarouselSlideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CarouselSlideDirective,
        selectors: [["ng-template", "carouselSlide", ""]],
        inputs: {
          id: "id",
          width: "width",
          dotContent: "dotContent",
          dataHash: "dataHash",
          dataMerge: "dataMerge"
        }
      });

      CarouselSlideDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      CarouselSlideDirective.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dataMerge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dotContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dataHash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselSlideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[carouselSlide]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dotContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dataHash: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dataMerge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Data which will be passed out after ending of transition of carousel
       */


      var SlidesOutputData = /*#__PURE__*/_createClass(function SlidesOutputData() {
        _classCallCheck(this, SlidesOutputData);
      });

      ;

      var CarouselComponent = /*#__PURE__*/function () {
        function CarouselComponent(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
          _classCallCheck(this, CarouselComponent);

          this.el = el;
          this.resizeService = resizeService;
          this.carouselService = carouselService;
          this.navigationService = navigationService;
          this.autoplayService = autoplayService;
          this.lazyLoadService = lazyLoadService;
          this.animateService = animateService;
          this.autoHeightService = autoHeightService;
          this.hashService = hashService;
          this.logger = logger;
          this.changeDetectorRef = changeDetectorRef;
          this.translated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
             *  Data of every slide
             */

          this.slidesData = [];
          /**
           * Shows whether carousel is loaded of not.
           */

          this.carouselLoaded = false;
          this.docRef = docRef;
        }

        _createClass(CarouselComponent, [{
          key: "onVisibilityChange",
          value: function onVisibilityChange(ev) {
            if (!this.carouselService.settings.autoplay) return;

            switch (this.docRef.visibilityState) {
              case 'visible':
                !this.autoplayService.isAutoplayStopped && this.autoplayService.play();
                break;

              case 'hidden':
                this.autoplayService.pause();
                break;

              default:
                break;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.spyDataStreams();
            this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var _a;

            if (this.prevOptions !== this.options) {
              if (this.prevOptions && ((_a = this.slides) === null || _a === void 0 ? void 0 : _a.toArray().length)) {
                this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
                this.carouselService.initialize(this.slides.toArray());
              } else {
                this.carouselLoaded = false;
                this.logger.log("There are no slides to show. So the carousel won't be re-rendered");
              }

              this.prevOptions = this.options;
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this25 = this;

            if (this.slides.toArray().length) {
              this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
              this.carouselService.initialize(this.slides.toArray());

              this._winResizeWatcher();
            } else {
              this.logger.log("There are no slides to show. So the carousel won't be rendered");
            }

            this._slidesChangesSubscription = this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (slides) {
              if (slides.toArray().length) {
                // this.carouselService.setItems(slides.toArray());
                _this25.carouselService.setup(_this25.carouselWindowWidth, slides.toArray(), _this25.options);

                _this25.carouselService.initialize(slides.toArray());
              } else {
                _this25.carouselLoaded = false;

                _this25.logger.log("There are no slides to show. So the carousel won't be re-rendered");
              }
            })).subscribe(function () {});
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.resizeSubscription) {
              this.resizeSubscription.unsubscribe();
            }

            if (this._slidesChangesSubscription) {
              this._slidesChangesSubscription.unsubscribe();
            }

            if (this._allObservSubscription) {
              this._allObservSubscription.unsubscribe();
            }
          }
          /**
           * Joins the observable login in one place: sets values to some observables, merges this observables and
           * subcribes to merge func
           */

        }, {
          key: "spyDataStreams",
          value: function spyDataStreams() {
            var _this26 = this;

            this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              _this26.owlDOMData = data.owlDOMData;
              _this26.stageData = data.stageData;
              _this26.slidesData = data.slidesData;

              if (!_this26.carouselLoaded) {
                _this26.carouselLoaded = true;
              }

              _this26.navData = data.navData;
              _this26.dotsData = data.dotsData;

              _this26.changeDetectorRef.markForCheck();
            }));
            this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this26.gatherTranslatedData();

              _this26.initialized.emit(_this26.slidesOutputData); // this.slidesOutputData = {};

            }));
            this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this26.gatherTranslatedData();

              _this26.translated.emit(_this26.slidesOutputData); // this.slidesOutputData = {};

            }));
            this._changeCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this26.gatherTranslatedData();

              _this26.change.emit(_this26.slidesOutputData); // this.slidesOutputData = {};

            }));
            this._changedCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) {
              var changedPosition = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
                return value.property.name === 'position';
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_this26.slidesData);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skip"])(value.property.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(_this26.carouselService.settings.items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (slide) {
                var clonedIdPrefix = _this26.carouselService.clonedIdPrefix;
                var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
                return Object.assign(Object.assign({}, slide), {
                  id: id,
                  isActive: true
                });
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (slides) {
                return {
                  slides: slides,
                  startPosition: _this26.carouselService.relative(value.property.value)
                };
              })); // const changedSetting: Observable<SlidesOutputData> = of(value).pipe(
              //   filter(() => value.property.name === 'settings'),
              //   map(() => {
              //     return {
              //       slides: [],
              //       startPosition: this.carouselService.relative(value.property.value)
              //     }
              //   })
              // )

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(changedPosition);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (slidesData) {
              _this26.gatherTranslatedData();

              _this26.changed.emit(slidesData.slides.length ? slidesData : _this26.slidesOutputData); // console.log(this.slidesOutputData);
              // this.slidesOutputData = {};

            }));
            this._draggingCarousel$ = this.carouselService.getDragState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this26.gatherTranslatedData();

              _this26.dragging.emit({
                dragging: true,
                data: _this26.slidesOutputData
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
              return _this26.carouselService.getDraggedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return !!_this26.carouselService.is('animating');
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (anim) {
              if (anim) {
                return _this26.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('not animating');
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this26.dragging.emit({
                dragging: false,
                data: _this26.slidesOutputData
              });
            }));
            this._carouselMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
            this._allObservSubscription = this._carouselMerge$.subscribe(function () {});
          }
          /**
           * Init subscription to resize event and attaches handler for this event
           */

        }, {
          key: "_winResizeWatcher",
          value: function _winResizeWatcher() {
            var _this27 = this;

            if (Object.keys(this.carouselService._options.responsive).length) {
              this.resizeSubscription = this.resizeService.onResize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
                return _this27.carouselWindowWidth !== _this27.el.nativeElement.querySelector('.owl-carousel').clientWidth;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(this.carouselService.settings.responsiveRefreshRate)).subscribe(function () {
                _this27.carouselService.onResize(_this27.el.nativeElement.querySelector('.owl-carousel').clientWidth);

                _this27.carouselWindowWidth = _this27.el.nativeElement.querySelector('.owl-carousel').clientWidth;
              });
            }
          }
          /**
           * Handler for transitioend event
           */

        }, {
          key: "onTransitionEnd",
          value: function onTransitionEnd() {
            this.carouselService.onTransitionEnd();
          }
          /**
           * Handler for click event, attached to next button
           */

        }, {
          key: "next",
          value: function next() {
            if (!this.carouselLoaded) return;
            this.navigationService.next(this.carouselService.settings.navSpeed);
          }
          /**
           * Handler for click event, attached to prev button
           */

        }, {
          key: "prev",
          value: function prev() {
            if (!this.carouselLoaded) return;
            this.navigationService.prev(this.carouselService.settings.navSpeed);
          }
          /**
           * Handler for click event, attached to dots
           */

        }, {
          key: "moveByDot",
          value: function moveByDot(dotId) {
            if (!this.carouselLoaded) return;
            this.navigationService.moveByDot(dotId);
          }
          /**
           * rewinds carousel to slide with needed id
           * @param id fragment of url
           */

        }, {
          key: "to",
          value: function to(id) {
            // if (!this.carouselLoaded || ((this.navData && this.navData.disabled) && (this.dotsData && this.dotsData.disabled))) return;
            if (!this.carouselLoaded) return;
            this.navigationService.toSlideById(id);
          }
          /**
           * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
           */

        }, {
          key: "gatherTranslatedData",
          value: function gatherTranslatedData() {
            var startPosition;
            var clonedIdPrefix = this.carouselService.clonedIdPrefix;
            var activeSlides = this.slidesData.filter(function (slide) {
              return slide.isActive === true;
            }).map(function (slide) {
              var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
              return {
                id: id,
                width: slide.width,
                marginL: slide.marginL,
                marginR: slide.marginR,
                center: slide.isCentered
              };
            });
            startPosition = this.carouselService.relative(this.carouselService.current());
            this.slidesOutputData = {
              startPosition: startPosition,
              slides: activeSlides
            };
          }
          /**
           * Starts pausing
           */

        }, {
          key: "startPausing",
          value: function startPausing() {
            this.autoplayService.startPausing();
          }
          /**
           * Starts playing after mouse leaves carousel
           */

        }, {
          key: "startPlayML",
          value: function startPlayML() {
            this.autoplayService.startPlayingMouseLeave();
          }
          /**
           * Starts playing after touch ends
           */

        }, {
          key: "startPlayTE",
          value: function startPlayTE() {
            this.autoplayService.startPlayingTouchEnd();
          }
        }, {
          key: "stopAutoplay",
          value: function stopAutoplay() {
            this.autoplayService.isAutoplayStopped = true;
            this.autoplayService.stop();
          }
        }, {
          key: "startAutoplay",
          value: function startAutoplay() {
            this.autoplayService.isAutoplayStopped = false;
            this.autoplayService.play();
          }
        }]);

        return CarouselComponent;
      }();

      CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ResizeService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AutoplayService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LazyLoadService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AnimateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AutoHeightService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](HashService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](OwlLogger), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DOCUMENT));
      };

      CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CarouselComponent,
        selectors: [["owl-carousel-o"]],
        contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CarouselSlideDirective, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t);
          }
        },
        hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibilitychange", function CarouselComponent_visibilitychange_HostBindingHandler($event) {
              return ctx.onVisibilityChange($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          options: "options"
        },
        outputs: {
          translated: "translated",
          dragging: "dragging",
          change: "change",
          changed: "changed",
          initialized: "initialized"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 4,
        vars: 9,
        consts: [[1, "owl-carousel", "owl-theme", 3, "ngClass", "mouseover", "mouseleave", "touchstart", "touchend"], ["owlCarousel", ""], ["class", "owl-stage-outer", 4, "ngIf"], [4, "ngIf"], [1, "owl-stage-outer"], [3, "owlDraggable", "stageData", "slidesData"], [1, "owl-nav", 3, "ngClass"], [1, "owl-prev", 3, "ngClass", "innerHTML", "click"], [1, "owl-next", 3, "ngClass", "innerHTML", "click"], [1, "owl-dots", 3, "ngClass"], ["class", "owl-dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "owl-dot", 3, "ngClass", "click"], [3, "innerHTML"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
              return ctx.startPausing();
            })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
              return ctx.startPlayML();
            })("touchstart", function CarouselComponent_Template_div_touchstart_0_listener() {
              return ctx.startPausing();
            })("touchend", function CarouselComponent_Template_div_touchend_0_listener() {
              return ctx.startPlayTE();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_div_2_Template, 2, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_ng_container_3_Template, 6, 15, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](3, _c3, ctx.owlDOMData == null ? null : ctx.owlDOMData.rtl, ctx.owlDOMData == null ? null : ctx.owlDOMData.isLoaded, ctx.owlDOMData == null ? null : ctx.owlDOMData.isResponsive, ctx.owlDOMData == null ? null : ctx.owlDOMData.isMouseDragable, ctx.owlDOMData == null ? null : ctx.owlDOMData.isGrab));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carouselLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.toArray().length);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], StageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]];
        },
        styles: [".owl-theme[_ngcontent-%COMP%] { display: block; }"],
        changeDetection: 0
      });

      CarouselComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ResizeService
        }, {
          type: CarouselService
        }, {
          type: NavigationService
        }, {
          type: AutoplayService
        }, {
          type: LazyLoadService
        }, {
          type: AnimateService
        }, {
          type: AutoHeightService
        }, {
          type: HashService
        }, {
          type: OwlLogger
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DOCUMENT]
          }]
        }];
      };

      CarouselComponent.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [CarouselSlideDirective]
        }],
        translated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        initialized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onVisibilityChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:visibilitychange', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'owl-carousel-o',
            template: "\n    <div class=\"owl-carousel owl-theme\" #owlCarousel\n      [ngClass]=\"{'owl-rtl': owlDOMData?.rtl,\n                  'owl-loaded': owlDOMData?.isLoaded,\n                  'owl-responsive': owlDOMData?.isResponsive,\n                  'owl-drag': owlDOMData?.isMouseDragable,\n                  'owl-grab': owlDOMData?.isGrab}\"\n      (mouseover)=\"startPausing()\"\n      (mouseleave)=\"startPlayML()\"\n      (touchstart)=\"startPausing()\"\n      (touchend)=\"startPlayTE()\">\n\n      <div *ngIf=\"carouselLoaded\" class=\"owl-stage-outer\">\n        <owl-stage [owlDraggable]=\"{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}\"\n                    [stageData]=\"stageData\"\n                    [slidesData]=\"slidesData\"></owl-stage>\n      </div> <!-- /.owl-stage-outer -->\n      <ng-container *ngIf=\"slides.toArray().length\">\n        <div class=\"owl-nav\" [ngClass]=\"{'disabled': navData?.disabled}\">\n          <div class=\"owl-prev\" [ngClass]=\"{'disabled': navData?.prev?.disabled}\" (click)=\"prev()\" [innerHTML]=\"navData?.prev?.htmlText\"></div>\n          <div class=\"owl-next\" [ngClass]=\"{'disabled': navData?.next?.disabled}\" (click)=\"next()\" [innerHTML]=\"navData?.next?.htmlText\"></div>\n        </div> <!-- /.owl-nav -->\n        <div class=\"owl-dots\" [ngClass]=\"{'disabled': dotsData?.disabled}\">\n          <div *ngFor=\"let dot of dotsData?.dots\" class=\"owl-dot\" [ngClass]=\"{'active': dot.active, 'owl-dot-text': dot.showInnerContent}\" (click)=\"moveByDot(dot.id)\">\n            <span [innerHTML]=\"dot.innerContent\"></span>\n          </div>\n        </div> <!-- /.owl-dots -->\n      </ng-container>\n    </div> <!-- /.owl-carousel owl-loaded -->\n  ",
            providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".owl-theme { display: block; }"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ResizeService
          }, {
            type: CarouselService
          }, {
            type: NavigationService
          }, {
            type: AutoplayService
          }, {
            type: LazyLoadService
          }, {
            type: AnimateService
          }, {
            type: AutoHeightService
          }, {
            type: HashService
          }, {
            type: OwlLogger
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [DOCUMENT]
            }]
          }];
        }, {
          translated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          initialized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onVisibilityChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:visibilitychange', ['$event']]
          }],
          slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CarouselSlideDirective]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var StageComponent = /*#__PURE__*/function () {
        function StageComponent(zone, el, renderer, carouselService, animateService) {
          var _this28 = this;

          _classCallCheck(this, StageComponent);

          this.zone = zone;
          this.el = el;
          this.renderer = renderer;
          this.carouselService = carouselService;
          this.animateService = animateService;
          /**
           * Object with data needed for dragging
           */

          this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
              start: null,
              current: null
            },
            direction: null,
            active: false,
            moving: false
          };
          /**
           * Subject for notification when the carousel's rebuilding caused by resize event starts
           */

          this._oneDragMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

          this.preparePublicSlide = function (slide) {
            var newSlide = Object.assign({}, slide);
            delete newSlide.tplRef;
            return newSlide;
          };
          /**
           * Passes this to _oneMouseTouchMove();
           */


          this.bindOneMouseTouchMove = function (ev) {
            _this28._oneMouseTouchMove(ev);
          };
          /**
           * Passes this to _onDragMove();
           */


          this.bindOnDragMove = function (ev) {
            _this28._onDragMove(ev);
          };
          /**
           * Passes this to _onDragMove();
           */


          this.bindOnDragEnd = function (ev) {
            // this.zone.run(() => {
            _this28._onDragEnd(ev); // });

          };
          /**
           * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
           */


          this._oneClickHandler = function () {
            _this28.listenerOneClick = _this28.renderer.listen(_this28._drag.target, 'click', function () {
              return false;
            });

            _this28.listenerOneClick();
          };
        }

        _createClass(StageComponent, [{
          key: "onMouseDown",
          value: function onMouseDown(event) {
            if (this.owlDraggable.isMouseDragable) {
              this._onDragStart(event);
            }
          }
        }, {
          key: "onTouchStart",
          value: function onTouchStart(event) {
            if (event.targetTouches.length >= 2) {
              return false;
            }

            if (this.owlDraggable.isTouchDragable) {
              this._onDragStart(event);
            }
          }
        }, {
          key: "onTouchCancel",
          value: function onTouchCancel(event) {
            this._onDragEnd(event);
          }
        }, {
          key: "onDragStart",
          value: function onDragStart() {
            if (this.owlDraggable.isMouseDragable) {
              return false;
            }
          }
        }, {
          key: "onSelectStart",
          value: function onSelectStart() {
            if (this.owlDraggable.isMouseDragable) {
              return false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            this._oneMoveSubsription = this._oneDragMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function () {
              _this29._sendChanges();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._oneMoveSubsription.unsubscribe();
          }
          /**
             * Handles `touchstart` and `mousedown` events.
             * @todo Horizontal swipe threshold as option
             * @todo #261
             * @param event - The event arguments.
             */

        }, {
          key: "_onDragStart",
          value: function _onDragStart(event) {
            var _this30 = this;

            var stage = null;

            if (event.which === 3) {
              return;
            }

            stage = this._prepareDragging(event);
            this._drag.time = new Date().getTime();
            this._drag.target = event.target;
            this._drag.stage.start = stage;
            this._drag.stage.current = stage;
            this._drag.pointer = this._pointer(event);
            this.listenerMouseUp = this.renderer.listen(document, 'mouseup', this.bindOnDragEnd);
            this.listenerTouchEnd = this.renderer.listen(document, 'touchend', this.bindOnDragEnd);
            this.zone.runOutsideAngular(function () {
              _this30.listenerOneMouseMove = _this30.renderer.listen(document, 'mousemove', _this30.bindOneMouseTouchMove);
              _this30.listenerOneTouchMove = _this30.renderer.listen(document, 'touchmove', _this30.bindOneMouseTouchMove);
            });
          }
          /**
           * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
           * @param event event objech of mouse or touch event
           */

        }, {
          key: "_oneMouseTouchMove",
          value: function _oneMouseTouchMove(event) {
            var delta = this._difference(this._drag.pointer, this._pointer(event));

            if (this.listenerATag) {
              this.listenerATag();
            }

            if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is('valid')) {
              return;
            }

            if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is('valid')) {
              return;
            }

            this.listenerOneMouseMove();
            this.listenerOneTouchMove();
            this._drag.moving = true;
            this.blockClickAnchorInDragging(event);
            this.listenerMouseMove = this.renderer.listen(document, 'mousemove', this.bindOnDragMove);
            this.listenerTouchMove = this.renderer.listen(document, 'touchmove', this.bindOnDragMove);
            event.preventDefault();

            this._enterDragging();

            this._oneDragMove$.next(event); // this._sendChanges();

          }
          /**
           * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
           * @param event event object
           */

        }, {
          key: "blockClickAnchorInDragging",
          value: function blockClickAnchorInDragging(event) {
            var target = event.target;

            while (target && !(target instanceof HTMLAnchorElement)) {
              target = target.parentElement;
            }

            if (target instanceof HTMLAnchorElement) {
              this.listenerATag = this.renderer.listen(target, 'click', function () {
                return false;
              });
            }
          }
          /**
           * Handles the `touchmove` and `mousemove` events.
           * @todo #261
           * @param event - The event arguments.
           */

        }, {
          key: "_onDragMove",
          value: function _onDragMove(event) {
            var stage;
            var stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);

            if (stageOrExit === false) {
              return;
            }

            stage = stageOrExit;
            event.preventDefault();
            this._drag.stage.current = stage;

            this._animate(stage.x - this._drag.stage.start.x);
          }
        }, {
          key: "_animate",
          value:
          /**
           * Moves .owl-stage left-right
           * @param coordinate coordinate to be set to .owl-stage
           */
          function _animate(coordinate) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "translate3d(".concat(coordinate, "px,0px,0px"));
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', '0s');
          }
          /**
             * Handles the `touchend` and `mouseup` events.
             * @todo #261
             * @todo Threshold for click event
             * @param event - The event arguments.
             */

        }, {
          key: "_onDragEnd",
          value: function _onDragEnd(event) {
            this.carouselService.owlDOMData.isGrab = false;
            this.listenerOneMouseMove();
            this.listenerOneTouchMove();

            if (this._drag.moving) {
              this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "");
              this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1000 + 's');

              this._finishDragging(event);

              this.listenerMouseMove();
              this.listenerTouchMove();
            }

            this._drag = {
              time: null,
              target: null,
              pointer: null,
              stage: {
                start: null,
                current: null
              },
              direction: null,
              active: false,
              moving: false
            }; // this.carouselService.trigger('dragged');

            this.listenerMouseUp();
            this.listenerTouchEnd();
          }
        }, {
          key: "_prepareDragging",
          value:
          /**
             * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
             * @param event - The event arguments.
             * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
             */
          function _prepareDragging(event) {
            return this.carouselService.prepareDragging(event);
          }
          /**
           * Finishes dragging
           * @param event object event of 'mouseUp' of 'touchend' events
           */

        }, {
          key: "_finishDragging",
          value: function _finishDragging(event) {
            this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
          }
          /**
             * Gets unified pointer coordinates from event.
             * @param event The `mousedown` or `touchstart` event.
             * @returns Contains `x` and `y` coordinates of current pointer position.
             */

        }, {
          key: "_pointer",
          value: function _pointer(event) {
            return this.carouselService.pointer(event);
          }
          /**
             * Gets the difference of two vectors.
             * @param first The first vector.
             * @param second The second vector.
             * @returns The difference.
             */

        }, {
          key: "_difference",
          value: function _difference(firstC, second) {
            return this.carouselService.difference(firstC, second);
          }
          /**
             * Checks whether the carousel is in a specific state or not.
             * @param specificState The state to check.
             * @returns The flag which indicates if the carousel is busy.
             */

        }, {
          key: "_is",
          value: function _is(specificState) {
            return this.carouselService.is(specificState);
          }
          /**
          * Enters a state.
          * @param name The state name.
          */

        }, {
          key: "_enter",
          value: function _enter(name) {
            this.carouselService.enter(name);
          }
          /**
             * Sends all data needed for View.
             */

        }, {
          key: "_sendChanges",
          value: function _sendChanges() {
            this.carouselService.sendChanges();
          }
          /**
           * Handler for transitioend event
           */

        }, {
          key: "onTransitionEnd",
          value: function onTransitionEnd() {
            this.carouselService.onTransitionEnd();
          }
          /**
             * Enters into a 'dragging' state
             */

        }, {
          key: "_enterDragging",
          value: function _enterDragging() {
            this.carouselService.enterDragging();
          }
          /**
           * Handles the end of 'animationend' event
           * @param id Id of slides
           */

        }, {
          key: "clear",
          value: function clear(id) {
            this.animateService.clear(id);
          }
        }]);

        return StageComponent;
      }();

      StageComponent.ɵfac = function StageComponent_Factory(t) {
        return new (t || StageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AnimateService));
      };

      StageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StageComponent,
        selectors: [["owl-stage"]],
        hostBindings: function StageComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function StageComponent_mousedown_HostBindingHandler($event) {
              return ctx.onMouseDown($event);
            })("touchstart", function StageComponent_touchstart_HostBindingHandler($event) {
              return ctx.onTouchStart($event);
            })("touchcancel", function StageComponent_touchcancel_HostBindingHandler($event) {
              return ctx.onTouchCancel($event);
            })("dragstart", function StageComponent_dragstart_HostBindingHandler() {
              return ctx.onDragStart();
            })("selectstart", function StageComponent_selectstart_HostBindingHandler() {
              return ctx.onSelectStart();
            });
          }
        },
        inputs: {
          owlDraggable: "owlDraggable",
          stageData: "stageData",
          slidesData: "slidesData"
        },
        decls: 3,
        vars: 8,
        consts: [[1, "owl-stage", 3, "ngStyle", "transitionend"], [4, "ngFor", "ngForOf"], [1, "owl-item", 3, "ngClass", "ngStyle", "animationend"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
        template: function StageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function StageComponent_Template_div_transitionend_1_listener() {
              return ctx.onTransitionEnd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StageComponent_ng_container_2_Template, 3, 9, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c6, ctx.stageData.width + "px", ctx.stageData.transform, ctx.stageData.transition, ctx.stageData.paddingL ? ctx.stageData.paddingL + "px" : "", ctx.stageData.paddingR ? ctx.stageData.paddingR + "px" : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slidesData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
        encapsulation: 2,
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('autoHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            height: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('full => nulled', [// style({height: '*'}),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('700ms 350ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('nulled => full', [// style({height: 0}),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(350)])])]
        }
      });

      StageComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: CarouselService
        }, {
          type: AnimateService
        }];
      };

      StageComponent.propDecorators = {
        owlDraggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stageData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slidesData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onTouchStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchstart', ['$event']]
        }],
        onTouchCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchcancel', ['$event']]
        }],
        onDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragstart']
        }],
        onSelectStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['selectstart']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'owl-stage',
            template: "\n    <div>\n      <div class=\"owl-stage\" [ngStyle]=\"{'width': stageData.width + 'px',\n                                        'transform': stageData.transform,\n                                        'transition': stageData.transition,\n                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',\n                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }\"\n          (transitionend)=\"onTransitionEnd()\">\n        <ng-container *ngFor=\"let slide of slidesData; let i = index\">\n          <div class=\"owl-item\" [ngClass]=\"slide.classes\"\n                                [ngStyle]=\"{'width': slide.width + 'px',\n                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',\n                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',\n                                            'left': slide.left}\"\n                                (animationend)=\"clear(slide.id)\"\n                                [@autoHeight]=\"slide.heightState\">\n            <ng-template *ngIf=\"slide.load\" [ngTemplateOutlet]=\"slide.tplRef\" [ngTemplateOutletContext]=\"{ $implicit: preparePublicSlide(slide), index: i }\"></ng-template>\n          </div><!-- /.owl-item -->\n        </ng-container>\n      </div><!-- /.owl-stage -->\n    </div>\n  ",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('autoHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              height: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              height: '*'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('full => nulled', [// style({height: '*'}),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('700ms 350ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('nulled => full', [// style({height: 0}),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(350)])])]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: CarouselService
          }, {
            type: AnimateService
          }];
        }, {
          onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
          }],
          onTouchStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart', ['$event']]
          }],
          onTouchCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchcancel', ['$event']]
          }],
          onDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragstart']
          }],
          onSelectStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['selectstart']
          }],
          owlDraggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          stageData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          slidesData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var OwlRouterLinkDirective = /*#__PURE__*/function () {
        function OwlRouterLinkDirective(router, route, tabIndex, renderer, el) {
          _classCallCheck(this, OwlRouterLinkDirective);

          this.router = router;
          this.route = route;
          this.stopLink = false;
          this.commands = [];

          if (tabIndex == null) {
            renderer.setAttribute(el.nativeElement, 'tabindex', '0');
          }
        }

        _createClass(OwlRouterLinkDirective, [{
          key: "owlRouterLink",
          set: function set(commands) {
            if (commands != null) {
              this.commands = Array.isArray(commands) ? commands : [commands];
            } else {
              this.commands = [];
            }
          }
          /**
           * @deprecated 4.0.0 use `queryParamsHandling` instead.
           */

        }, {
          key: "preserveQueryParams",
          set: function set(value) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && console && console.warn) {
              console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
            }

            this.preserve = value;
          }
        }, {
          key: "onClick",
          value: function onClick() {
            var extras = {
              skipLocationChange: attrBoolValue(this.skipLocationChange),
              replaceUrl: attrBoolValue(this.replaceUrl)
            };

            if (this.stopLink) {
              return false;
            }

            this.router.navigateByUrl(this.urlTree, extras);
            return true;
          }
        }, {
          key: "urlTree",
          get: function get() {
            return this.router.createUrlTree(this.commands, {
              relativeTo: this.route,
              queryParams: this.queryParams,
              fragment: this.fragment,
              queryParamsHandling: this.queryParamsHandling,
              preserveFragment: attrBoolValue(this.preserveFragment)
            });
          }
        }]);

        return OwlRouterLinkDirective;
      }();

      OwlRouterLinkDirective.ɵfac = function OwlRouterLinkDirective_Factory(t) {
        return new (t || OwlRouterLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      OwlRouterLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: OwlRouterLinkDirective,
        selectors: [["", "owlRouterLink", "", 5, "a"]],
        hostBindings: function OwlRouterLinkDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwlRouterLinkDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          stopLink: "stopLink",
          owlRouterLink: "owlRouterLink",
          preserveQueryParams: "preserveQueryParams",
          queryParams: "queryParams",
          fragment: "fragment",
          queryParamsHandling: "queryParamsHandling",
          preserveFragment: "preserveFragment",
          skipLocationChange: "skipLocationChange",
          replaceUrl: "replaceUrl"
        }
      });

      OwlRouterLinkDirective.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      OwlRouterLinkDirective.propDecorators = {
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        queryParamsHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        preserveFragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        skipLocationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        replaceUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stopLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        owlRouterLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        preserveQueryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwlRouterLinkDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: ':not(a)[owlRouterLink]'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          stopLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          owlRouterLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          preserveQueryParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          queryParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fragment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          queryParamsHandling: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          preserveFragment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          skipLocationChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          replaceUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       *
       * Lets you link to specific routes in your app.
       *
       * See `RouterLink` for more information.
       *
       * @ngModule RouterModule
       *
       * @publicApi
       */


      var OwlRouterLinkWithHrefDirective = /*#__PURE__*/function () {
        function OwlRouterLinkWithHrefDirective(router, route, locationStrategy) {
          var _this31 = this;

          _classCallCheck(this, OwlRouterLinkWithHrefDirective);

          this.router = router;
          this.route = route;
          this.locationStrategy = locationStrategy;
          this.stopLink = false;
          this.commands = [];
          this.subscription = router.events.subscribe(function (s) {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
              _this31.updateTargetUrlAndHref();
            }
          });
        }

        _createClass(OwlRouterLinkWithHrefDirective, [{
          key: "owlRouterLink",
          set: function set(commands) {
            if (commands != null) {
              this.commands = Array.isArray(commands) ? commands : [commands];
            } else {
              this.commands = [];
            }
          }
        }, {
          key: "preserveQueryParams",
          set: function set(value) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && console && console.warn) {
              console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
            }

            this.preserve = value;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.updateTargetUrlAndHref();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "onClick",
          value: function onClick(button, ctrlKey, metaKey, shiftKey) {
            if (button !== 0 || ctrlKey || metaKey || shiftKey) {
              return true;
            }

            if (typeof this.target === 'string' && this.target !== '_self') {
              return true;
            }

            if (this.stopLink) {
              return false;
            }

            var extras = {
              skipLocationChange: attrBoolValue(this.skipLocationChange),
              replaceUrl: attrBoolValue(this.replaceUrl)
            };
            this.router.navigateByUrl(this.urlTree, extras);
            return false;
          }
        }, {
          key: "updateTargetUrlAndHref",
          value: function updateTargetUrlAndHref() {
            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
          }
        }, {
          key: "urlTree",
          get: function get() {
            return this.router.createUrlTree(this.commands, {
              relativeTo: this.route,
              queryParams: this.queryParams,
              fragment: this.fragment,
              queryParamsHandling: this.queryParamsHandling,
              preserveFragment: attrBoolValue(this.preserveFragment)
            });
          }
        }]);

        return OwlRouterLinkWithHrefDirective;
      }();

      OwlRouterLinkWithHrefDirective.ɵfac = function OwlRouterLinkWithHrefDirective_Factory(t) {
        return new (t || OwlRouterLinkWithHrefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"]));
      };

      OwlRouterLinkWithHrefDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: OwlRouterLinkWithHrefDirective,
        selectors: [["a", "owlRouterLink", ""]],
        hostVars: 2,
        hostBindings: function OwlRouterLinkWithHrefDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwlRouterLinkWithHrefDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("target", ctx.target);
          }
        },
        inputs: {
          stopLink: "stopLink",
          owlRouterLink: "owlRouterLink",
          preserveQueryParams: "preserveQueryParams",
          target: "target",
          queryParams: "queryParams",
          fragment: "fragment",
          queryParamsHandling: "queryParamsHandling",
          preserveFragment: "preserveFragment",
          skipLocationChange: "skipLocationChange",
          replaceUrl: "replaceUrl"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      OwlRouterLinkWithHrefDirective.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"]
        }];
      };

      OwlRouterLinkWithHrefDirective.propDecorators = {
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.target']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        queryParamsHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        preserveFragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        skipLocationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        replaceUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stopLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        href: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"]
        }],
        owlRouterLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        preserveQueryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwlRouterLinkWithHrefDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'a[owlRouterLink]'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"]
          }];
        }, {
          stopLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          owlRouterLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          preserveQueryParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey']]
          }],
          href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"]
          }],
          target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.target']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          queryParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fragment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          queryParamsHandling: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          preserveFragment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          skipLocationChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          replaceUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      function attrBoolValue(s) {
        return s === '' || !!s;
      }

      var routes = [];

      var CarouselModule = /*#__PURE__*/_createClass(function CarouselModule() {
        _classCallCheck(this, CarouselModule);
      });

      CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CarouselModule
      });
      CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CarouselModule_Factory(t) {
          return new (t || CarouselModule)();
        },
        providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarouselModule, {
          declarations: function declarations() {
            return [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
            exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
            providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
          }]
        }], null, null);
      })();

      var SlideModel = /*#__PURE__*/_createClass(function SlideModel() {
        _classCallCheck(this, SlideModel);
      });
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-owl-carousel-o.js.map

      /***/

    },

    /***/
    "cM6f":
    /*!*******************************************************!*\
      !*** ./src/app/onboarding/forget/forget.component.ts ***!
      \*******************************************************/

    /*! exports provided: ForgetComponent */

    /***/
    function cM6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetComponent", function () {
        return ForgetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _shared_directives_no_whitespace_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/directives/no-whitespace.directive */
      "h8Dd");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ForgetComponent_div_2_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetComponent_div_2_div_13_Template_span_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.resetForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.error.msg, " ");
        }
      }

      function ForgetComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForgetComponent_div_2_div_13_Template, 7, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetComponent_div_2_Template_div_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.routeToSignin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetComponent_div_2_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "forget.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "subtitle"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.forgetForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "email"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error.val);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 13, "backtoSign"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 15, "forget.forgetsubmit"));
        }
      }

      function ForgetComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetComponent_div_3_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.routeToSignin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "forget.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "forget.forgettitle"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.forgetForm.value.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "backtoSign"), "");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-image": a0
        };
      };

      var ForgetComponent = /*#__PURE__*/function () {
        function ForgetComponent(fb, router, service) {
          _classCallCheck(this, ForgetComponent);

          this.fb = fb;
          this.router = router;
          this.service = service;
          this.initialPage = true;
          this.error = {
            val: false,
            msg: ''
          };
          this.imageUrl = '/assets/images/Generate_password.png';
        }

        _createClass(ForgetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.innerHeight = window.innerHeight;
            this.innerWidth = window.innerWidth;

            if (this.innerHeight > 1024) {
              this.imageUrl = '/assets/images/signin11.png';
            } else {
              this.imageUrl = '/assets/images/Generate_password.png';
            }

            this.initialPage = true;
            this.createForgetForm();
          }
        }, {
          key: "createForgetForm",
          value: function createForgetForm() {
            this.forgetForm = this.fb.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this32 = this;

            if (this.forgetForm.valid) {
              this.error = {
                val: false,
                msg: ''
              };
              this.service.post('forgot-password', this.forgetForm.value).pipe().subscribe(function (response) {
                if (response.message) {
                  _this32.initialPage = false;
                }
              }, function (error) {
                _this32.error.val = true;
                _this32.error.msg = error.message;
              });
            }
          }
        }, {
          key: "routeToSignin",
          value: function routeToSignin() {
            this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].signin.path]);
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.forgetForm.reset();
            this.error = {
              val: false,
              msg: ''
            };
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.innerHeight = window.innerHeight;
            this.innerWidth = window.innerWidth; // console.log(this.innerHeight, this.innerWidth);

            if (this.innerHeight >= 1024) {
              this.imageUrl = '/assets/images/signin11.png';
            } else {
              this.imageUrl = '/assets/images/Generate_password.png';
            }
          }
        }]);

        return ForgetComponent;
      }();

      ForgetComponent.ɵfac = function ForgetComponent_Factory(t) {
        return new (t || ForgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]));
      };

      ForgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgetComponent,
        selectors: [["app-forget"]],
        hostBindings: function ForgetComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ForgetComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 4,
        vars: 5,
        consts: [[1, "form-wrapper", 3, "ngStyle"], [1, "bg-graphic"], ["class", "card-outer", 4, "ngIf"], [1, "card-outer"], [1, "mb-1"], [1, "subtitle"], [1, "example-form", 3, "formGroup"], ["appearance", "outline"], ["noSpaces", "", "matInput", "", "type", "text", "formControlName", "email", "value", "wadewarren@gmail.com", "autocomplete", "off"], ["class", "error", 4, "ngIf"], [1, "button-onboarding"], [1, "backSignin", "cursor", "text-center", "pt-3", 3, "click"], ["width", "21", "height", "20", "viewBox", "0 0 21 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mr-2"], ["d", "M17.375 10H3.625", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.25 4.375L3.625 10L9.25 15.625", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "d-flex", "justify-content-end"], ["mat-button", "", 1, "button-auth", "w-100", "mb-28", "mt-4", 3, "click"], [1, "error"], ["src", "assets/images/AlertError.svg"], [1, "msg"], [1, "cursor", 3, "click"], ["src", "assets/images/Close.svg"], [1, "forget-email"], [1, "example-form"], [1, "button-onboarding", "d-flex", "justify-content-end"], ["mat-button", "", 1, "button-auth", "w-100", "mb-28", 3, "click"], ["src", "assets/images/back-arrow.svg", 1, "mr-2"]],
        template: function ForgetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgetComponent_div_2_Template, 26, 17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgetComponent_div_3_Template, 16, 10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, " url(" + ctx.imageUrl + ")"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.initialPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.initialPage);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _shared_directives_no_whitespace_directive__WEBPACK_IMPORTED_MODULE_7__["NoSpaceDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\n  letter-spacing: 0.22px;\n  width: 100%;\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: -138px;\n  min-height: calc(100vh + 10px + 4rem);\n}\n.form-wrapper[_ngcontent-%COMP%]   .bg-graphic[_ngcontent-%COMP%] {\n  min-height: auto;\n}\n.form-wrapper[_ngcontent-%COMP%]   .carousel-width[_ngcontent-%COMP%] {\n  padding-left: 64px;\n  max-width: 400px;\n}\n.form-wrapper[_ngcontent-%COMP%]   .backSignin[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.form-wrapper[_ngcontent-%COMP%]   .backSignin[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 16px/10px ModernEra_Bold;\n  margin-top: 6px;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-form-field-label {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill, .form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill:hover, .form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill:focus, .form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill:active {\n  -webkit-text-fill-color: #ffffff !important;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-progress-spinner circle {\n  stroke: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     mat-label {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     input {\n  color: #ffffff !important;\n}\n.forget-email[_ngcontent-%COMP%] {\n  font: 700 20px/26px ModernEra_Bold;\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vZm9yZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FDRUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFBRjtBQUVBO0VBRUUsNEJBQUE7RUFDQSxzQkFBQTtFQUVBLGtCQUFBO0VBQ0EscUNBQUE7QUFERjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQUdFO0VBR0Usa0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFISjtBQUlNO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FBRlI7QUFPTTtFQUNFLGNENUJBO0FDdUJSO0FBU007RUFDRSxjRGpDQTtBQzBCUjtBQVVJO0VBQ0UsY0RyQ0U7QUM2QlI7QUFVSTtFQUNFLGNEeENFO0FDZ0NSO0FBVUk7Ozs7RUFLRSwyQ0FBQTtBQVROO0FBV0k7RUFDRSxlRGxERTtBQ3lDUjtBQWFJO0VBQ0UsY0R2REU7QUM0Q1I7QUFhSTtFQUNFLHlCQUFBO0FBWE47QUFlQTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7QUFaRiIsImZpbGUiOiJmb3JnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0td3JhcHBlciB7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2VuZXJhdGVfcGFzc3dvcmQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyBtYXJnaW4tdG9wOiAtMTFyZW07XG4gIG1hcmdpbi10b3A6IC0xMzhweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCArIDEwcHggKyA0cmVtKTtcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgYm90dG9tIDtcbiAgLmJnLWdyYXBoaWN7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuICAuY2Fyb3VzZWwtd2lkdGgge1xuICAgIC8vICAgbWFyZ2luLXRvcDogMTM4cHg7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxuICAuYmFja1NpZ25pbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHNwYW57XG4gICAgICAgIGZvbnQ6IDE2cHgvMTBweCBNb2Rlcm5FcmFfQm9sZDtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgfVxuICB9XG4gIDo6bmctZGVlcCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgfVxuICAgIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG4gICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xuICAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4ICMxZDc2ZmIgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZXtcbiAgICAgIHN0cm9rZTogJHdoaXRlO1xuICAgIH1cbiAgfVxuICA6Om5nLWRlZXB7XG4gICAgbWF0LWxhYmVse1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLmZvcmdldC1lbWFpbHtcbiAgZm9udDogNzAwIDIwcHgvMjZweCBNb2Rlcm5FcmFfQm9sZDtcbiAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forget',
            templateUrl: './forget.component.html',
            styleUrls: ['./forget.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "eQKf":
    /*!*********************************************************!*\
      !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: OnboardingRoutingModule */

    /***/
    function eQKf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingRoutingModule", function () {
        return OnboardingRoutingModule;
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


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signin/signin.component */
      "pfGW");
      /* harmony import */


      var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wrapper/wrapper.component */
      "BJK8");
      /* harmony import */


      var _config_route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../config/route-config */
      "1r8O");
      /* harmony import */


      var _reset_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reset/reset.component */
      "tmpY");
      /* harmony import */


      var _forget_forget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forget/forget.component */
      "cM6f");
      /* harmony import */


      var _interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../interceptor/auth.guard */
      "596m");

      var routes = [{
        path: "",
        component: _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["WrapperComponent"],
        children: [{
          path: '',
          redirectTo: _config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].signin.path
        }, {
          path: _config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].signin.path,
          component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
          pathMatch: 'full',
          canActivate: [_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_7__["CanLoginActivate"]]
        }, {
          path: _config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].resetPassword.path,
          component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResetComponent"],
          pathMatch: 'full',
          canActivate: [_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_7__["CanLoginActivate"]]
        }, {
          path: _config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].forget.path,
          component: _forget_forget_component__WEBPACK_IMPORTED_MODULE_6__["ForgetComponent"],
          pathMatch: 'full',
          canActivate: [_interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_7__["CanLoginActivate"]]
        }]
      }];

      var OnboardingRoutingModule = /*#__PURE__*/_createClass(function OnboardingRoutingModule() {
        _classCallCheck(this, OnboardingRoutingModule);
      });

      OnboardingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OnboardingRoutingModule
      });
      OnboardingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OnboardingRoutingModule_Factory(t) {
          return new (t || OnboardingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnboardingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingRoutingModule, [{
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
    "kl3K":
    /*!*********************************************************************!*\
      !*** ./src/app/onboarding/text-carousel/text-carousel.component.ts ***!
      \*********************************************************************/

    /*! exports provided: TextCarouselComponent */

    /***/
    function kl3K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextCarouselComponent", function () {
        return TextCarouselComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "bhfF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TextCarouselComponent_ng_container_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1 == null ? null : item_r1.content, " ");
        }
      }

      function TextCarouselComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextCarouselComponent_ng_container_2_ng_template_1_Template, 2, 1, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r2);
        }
      }

      var TextCarouselComponent = /*#__PURE__*/function () {
        function TextCarouselComponent() {
          _classCallCheck(this, TextCarouselComponent);

          this.content = [{
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nulla quam aliquam enim elit etiam. Interdum sit ante facilisis tempus nunc pretium. '
          }, {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nulla quam aliquam enim elit etiam. Interdum sit ante facilisis tempus nunc pretium. '
          }, {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nulla quam aliquam enim elit etiam. Interdum sit ante facilisis tempus nunc pretium. '
          }];
          this.customOptions = {
            loop: false,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: true,
            dots: true,
            autoWidth: true,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
              0: {
                items: 1
              },
              400: {
                items: 1
              },
              740: {
                items: 1
              },
              940: {
                items: 1
              }
            },
            nav: false
          };
        }

        _createClass(TextCarouselComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TextCarouselComponent;
      }();

      TextCarouselComponent.ɵfac = function TextCarouselComponent_Factory(t) {
        return new (t || TextCarouselComponent)();
      };

      TextCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextCarouselComponent,
        selectors: [["app-text-carousel"]],
        decls: 3,
        vars: 2,
        consts: [[1, "carousel-section"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"]],
        template: function TextCarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "owl-carousel-o", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextCarouselComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.content);
          }
        },
        directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselSlideDirective"]],
        styles: [".carousel-section .owl-dot.active span {\n  background: #00cba0 !important;\n}\np[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vdGV4dC1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQ0lZO0VBQ0ksOEJBQUE7QUFGaEI7QUFPQTtFQUNJLGNETEk7QUNDUiIsImZpbGUiOiJ0ZXh0LWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypORVcgQ09MT1IgTElTVCovXG5cblxuJGxpZ2h0Ymx1ZTogIzAwNTdmZjtcbiRkcmFrX0JsdWU6ICMyOTYyZmY7XG4kc2JsdWU6ICMxYjE5NGI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHRibGFjazogIzE3MWMyMjtcbiRsaWdodGdyYXk6ICM5MzllYWE7XG4kZmdyYXk6ICM3ZDg1OTI7XG4kU2Vjb25kYXJ5X2JsYWNrOiAjMDAxZTUwO1xuJFByaW1hcnlfQmx1ZTogIzAwNjRmZjtcbiRTZWNvbmRhcnlfQmx1ZTogIzYwNGVmZjtcbiRidG5FeHBvcnRCbHVlOiAjNGM2ZmZmO1xuJGRhbmdlcjogI2ZmNzA3MDtcbiRTZWNvbmRhcnlfQWxlcnRzOiAjMDBjYmEwO1xuJG5vSW5mbzogIzE4YTBmYjtcbiRTZWNvbmRhcnlfRGFyazogIzJhMWU5MTtcbiRkYXJrOiAjMzIzMzM4O1xuJGJvcmRlckNvbG9yOiAjYzVjZGQ0O1xuJGxpZ2h0V2hpdGVjb2xvcjogI2Y5ZmFmYjtcbiRncm91cEJvcmRlckRhdGE6ICNlNmU3ZTg7XG4kbGlnaHRtaXhibHVlV2hpdGVjb2xvcjogI2UwZTNlNztcbiR3aGl0ZVNoYWRvdzogI2U5ZWJmMDtcbiRza3lCbHVlOiAjNGRiZmZmO1xuJHllbGxvdzogI2ZmZWE2YztcbiRvcmFuZ2U6ICNmZjk5NTA7XG4kYm9keUJhY2tHcmF5OiAjZmRmY2ZmO1xuJGxpZ2h0QmxhY2s6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4kZXhwb3J0QnRuOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjEpO1xuJGRhbmdlckJveEJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRncmVlbkJveEJhY2s6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMSk7XG4kdGFibGVPZGRCYWNrOiAjZmJmYmZiO1xuJFNlY29uZGFyeV9CbHVlX2Rhcms6ICM3NTU1Y2Y7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbmlnaHRUZXh0Q29sb3I6ICM0NzRmNWE7XG4kbmlnaHRCYWNrQmxhY2s6ICM2NjcyODA7XG4kd2hpdGVDb2xvcjogI2UxZTFlMTtcbiRyZWRDb2xvcjogI2VkNTAyZTtcbiRkYXJrX2dyYXk6ICNiZGJkYmQ7XG4kaGVscEJ0bl9CbHVlOiAjNjAyYWFjO1xuJGRhdGVDb2xvcjogIzRlNWQ3ODtcbiRkYXlDb2xvcjogIzRlNWQ3ODdhO1xuJHJlZEFjdGl2ZUNvbG9yOiAjZmExNDY0O1xuJHdoaXRlQ29sb3JCYWNrOiAjZjdmY2ZmO1xuJGJsYWNrRGFyazogIzI3MjcyZTtcbiR3aGl0ZUdyYXlCYWNrOiAjZjdmY2ZmO1xuLy9pbnB1dCBjc3NcbiRib3JkZXJDb2xvckxpZ2h0OiAjZThlY2VlO1xuJGJvcmRlckNvbG9yR3JheTogI2VlZWRmMDtcbiRsaWdodFdoaXRlOiAjZTVlZWZmO1xuJGJ0bkRlZmF1bHRXaGl0ZTogI2Y0ZjZmODtcbiRtYXRCb3JkZXI6ICNlNmU3ZTg7XG5cbiR0b2dnbGVBY3RpdmU6ICMzNzE5ODY7XG5cbi8vcmdiYSBjc3NcbiRiZWhhdmlvdXJCYWNrOiByZ2JhKDk2LCA3OCwgMjU1LCAwLjA4KTtcbiRtb250aFNob3dCYWNrOiByZ2JhKDg2LCA2NiwgMjU1LCAwLjEpO1xuJGJveFNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiRiYWNrRGFuZ2VyOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuNCk7XG4kYmFja0dyZWVuOiByZ2IoMCAyMDMgMTYwIC8gMTUlKTtcbiRzYWZlU2NvcmVCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kYmFja0dyYXlDb21tb246IHJnYmEoMTM1LCAxMzUsIDEzNSwgMC4wNSk7XG4kcXVpdGVSb2FkOiAjZmZlYTZjO1xuXG4vL25ldyBjb2xvciB2ZXJzaW9uMlxuJHJlZEV4Y2VwdGlvbjogI2ZhMTQ2NDtcbiRib3hzaGFkb3c6IDBweCA4cHggMjVweCByZ2JhKDk4LCA5OCwgOTgsIDAuMDUpO1xuJHRvb2x0aXBzVGV4dENvbG9yOiAjMTYxOTJjO1xuXG4vL2JveCBncmFkaWFudCBCYWNrZ3JvdW5kXG4kdmVoaWNhbEJveEJhY2s6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICM4MWJiZmYgLTQuMiUsICMwMDg1ZmYgOTkuMzclKTtcbiRkcml2ZW5Cb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM1YTZiZmYgMC42OSUsICM2MDRlZmYgMTAyLjIlKTtcbiRiZWhhdmlvdXJCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM4YzQ2ZmYgMC42OSUsICNmZjgwODAgMTAyLjIlKTtcbiRldkJsb2NrQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICNmZmU5NzcgMTAyLjE3JSk7XG4kaWNlQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG5cbi8vYm94IHYyIGdyYWRpYW50IEJhY2tncm91bmRcbiRpY2VCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjZjA4MjVkIC0xOC41NiUsICNmZjk5NTAgMTAyLjE3JSk7XG4kZHJpdmVyQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjMzY1NmZmIDEwMi4xNyUpO1xuJGtpbG9tZXRlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTMzLjM5ZGVnLCAjNDk4NWY4IC00LjIyJSwgIzRkYmZmZiAxMDQuMjQlKTtcbiRzYWZlRHJpdmluZ0JveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICM0NWM4ZjEgLTE4LjU2JSwgI2VlZTA5NyAxMDIuMTclKTtcbiRkcml2ZXIxQm94VjI6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzc2ZDZlZSAwLjY5JSwgIzc2OThkYiAxMDIuMiUpO1xuJHRyaXBCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjYzJhM2EwIC0xOC41NiUsICNlOWM4YTcgMTAyLjE3JSk7XG4kdmVoaWNsZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjZGY5ODk1IC00LjIlLCAjYzJhM2EwIDEwOC4xNSUpO1xuXG4vL3Njcm9sbCBiYXIgY29sb3IgY29kZVxuJHNjcm9sbEJsYWNrOiAjODg4O1xuJHNjcm9sbFdoaXRlOiAjZjFmMWYxO1xuJHNjcm9sbEhvdmVyQmxhY2s6ICM1NTU7XG5cbi8vd2hpdGUgbGFiZWwgZmxlYWQgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNFRkE5NTI7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcblxuLy93aGl0ZSBsYWJlbCBkaGwgY29sb3Jcbi8vICRXaGl0ZV9sYWJpbmdfQmxhY2s6IzAwMDAwMDtcbi8vICRXaGl0ZV9sYWJpbmdfWWVsbG93OiNkNDA1MTE7XG4vLyAkV2hpdGVfbGFiaW5nX3NreUJsdWU6IzREQkZGRjtcbi8vICRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6I0VFRjlGRjtcbi8vICR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazojRkZDQzAwO1xuXG4vL3doaXRlIGxhYmVsIFplZ28gY29sb3JcbiRXaGl0ZV9sYWJpbmdfQmxhY2s6ICMwMDAwMDA7XG4kV2hpdGVfbGFiaW5nX1llbGxvdzogIzM3MTk4NztcbiRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTogIzRkYmZmZjtcbiRXaGl0ZV9sYWJpbmdfYmFja0dyYXk6ICNlZWY5ZmY7XG4kd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6ICNmZmNjMDA7XG4kY29sb3JfdmlvbGV0OiAjODc3NWI3O1xuJGNvbG9yX3Zpb2xldF9kYXJrOiAjMzIxOTg3O1xuJGNvbG9yX2xpZ2h0X2dyZXk6ICNlNWU1ZTU7XG4kY29sb3ItdmlvbGV0LWxpZ2h0OiAjYWM5NGVlO1xuJGNvbG9yLWJsdWUtbGlnaHQ6ICNmNWY1ZjU7XG4kY29sb3ItdGFibGUtaGVhZGluZzogIzI3MjUyZDtcbiR0cmlwSGlzdEJhY2s6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC4wNSk7XG4kc2FmZUJhY2tDb2xvcjogcmdiYSgwLCAyMDMsIDE2MCwgMC4wNSk7XG4kY29sb3JfbGlnaHRfYmx1ZTogIzQ1Y2JmYztcbiRjb2xvcl9ncmFwaF92b2lsZXQ6ICMzNzFhODc7XG5cbi8vZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGVycm9yR3JhZGlhbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcbiAgKSxcbiAgI2Y0NDMzNjtcblxuQG1peGluIGZsZXgtanVzdGlmeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZmxleC1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbkBtaXhpbiBmbGV4LXNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBlbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQG1peGluICBsaW5lLWNsYW1wIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbn1cblxuQG1peGluIGJ0bkZpbHRlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuQG1peGluIG1zZyB7XG4gIGZvbnQ6IDEycHgvMThweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDMwcHg7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbkBtaXhpbiBtYWluQm94d2l0aEJhY2sge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDEyM3B4IHJnYmEoODcsIDg0LCAxNjAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4vLyBAbWl4aW4gYnV0dG9uLWdyZWVuIHtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjMTFEMEEyO1xuLy8gYm9yZGVyLXJhZGl1czogMTQ1cHg7XG4vLyBmb250LXdlaWdodCA6IDYwMDtcbi8vIGZvbnQtc2l6ZSA6IDE1cHg7XG4vLyBsaW5lLWhlaWdodCA6IDE4cHg7XG4vLyBjb2xvciA6ICNmZmZmZmY7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tYmx1ZSB7XG4vLyBmb250IDogMTNweC8xNnB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzc1NTVDRiwgIzc1NTVDRiksICM2NDNGQzA7XG4vLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gbWF4LXdpZHRoIDogMTQwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiAzOHB4O1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLXJlZCB7XG4vLyBmb250IDogMTZweC8yMHB4IE1vZGVybkVyYTtcbi8vIGNvbG9yIDogI0ZGRkZGRjtcbi8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICNGRjY1NjU7XG4vLyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcbjo6bmctZGVlcHtcbiAgICAuY2Fyb3VzZWwtc2VjdGlvbntcbiAgICAgICAgLm93bC1kb3QuYWN0aXZle1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkU2Vjb25kYXJ5X0FsZXJ0cyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxucHtcbiAgICBjb2xvcjogJHdoaXRlO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextCarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-text-carousel',
            templateUrl: './text-carousel.component.html',
            styleUrls: ['./text-carousel.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pfGW":
    /*!*******************************************************!*\
      !*** ./src/app/onboarding/signin/signin.component.ts ***!
      \*******************************************************/

    /*! exports provided: SigninComponent */

    /***/
    function pfGW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _config_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../config/route-config */
      "1r8O");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _shared_directives_no_whitespace_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/directives/no-whitespace.directive */
      "h8Dd");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function SigninComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_div_25_Template_span_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.resetForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.error.msg, " ");
        }
      }

      function SigninComponent_mat_spinner_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 26);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-image": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "fill": a0
        };
      };

      var _c2 = function _c2() {
        return {
          standalone: true
        };
      };

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(fb, router, cookieService, service, localService) {
          _classCallCheck(this, SigninComponent);

          this.fb = fb;
          this.router = router;
          this.cookieService = cookieService;
          this.service = service;
          this.localService = localService;
          this.rememberMe = false;
          this.submitted = false;
          this.error = {
            val: false,
            msg: ''
          };
          this.isDataLoading = false;
          this.colors = {
            "speed": '#FF9950',
            "breaking": '#FFEA6C',
            "acceleration": '#4DBFFF',
            "cornering": '#FF7070',
            "idling": '#00CBA0'
          };
          this.imageUrl = '/assets/images/Generate_password.png';
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // console.log(window.innerHeight);
            this.innerHeight = window.innerHeight;
            this.innerWidth = window.innerWidth;

            if (this.innerHeight > 1024) {
              this.imageUrl = '/assets/images/signin11.png';
            } else {
              this.imageUrl = '/assets/images/Generate_password.png';
            }

            this.createSigninForm();

            if (this.cookieService.get('rememberMe')) {
              this.rememberMe = true;
              this.signinForm.get('email').setValue(this.userEmail);
              this.signinForm.get('password').setValue(this.userPass);
            }
          }
        }, {
          key: "createSigninForm",
          value: function createSigninForm() {
            this.signinForm = this.fb.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this33 = this;

            this.submitted = true;

            if (this.signinForm.valid) {
              this.isDataLoading = true;
              this.error = {
                val: false,
                msg: ''
              };
              this.service.post('login', this.signinForm.value).pipe().subscribe(function (response) {
                if (response.data) {
                  _this33.isDataLoading = false;

                  _this33.setColors(response.data.color_code);

                  _this33.localService.setItem('name', JSON.stringify({
                    firstName: response['data']['firstName'],
                    lastName: response['data']['lastName']
                  }));

                  _this33.localService.setItem('data', JSON.stringify(response['data']));

                  _this33.localService.setItem('email', response['data']['email']);

                  _this33.localService.setItem('hmAccessToken', response['data']['token']);

                  _this33.localService.setItem('profileImage', response['data']['profile_image']);

                  if (_this33.rememberMe == true) {
                    _this33.cookieService.set("rememberMe", "true", 1);

                    _this33.cookieService.set("email", _this33.f.email.value, 1);

                    _this33.cookieService.set("password", btoa(_this33.f.password.value), 1);
                  } else {
                    _this33.cookieService.deleteAll();

                    ;
                  } // Dashboard Routing


                  _this33.router.navigate([_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].dashboard.url]);
                } else {
                  _this33.isDataLoading = false;
                  _this33.error.val = true;
                  _this33.error.msg = response.message;
                }
              }, function (error) {
                _this33.isDataLoading = false;
                _this33.error.val = true;
                _this33.error.msg = error.message;
              });
            }
          }
        }, {
          key: "setColors",
          value: function setColors(data) {
            if (data) {
              data = JSON.parse(data); // console.log(data);

              for (var i = 0; i < data.length; i++) {
                if (data[i]['key'] == 'Speeding') {
                  this.colors['speed'] = '#' + data[i]['value'];
                } else if (data[i]['key'] == "Idling") {
                  this.colors['idling'] = '#' + data[i]['value'];
                } else if (data[i]['key'] == "Harsh Acceleration") {
                  this.colors['acceleration'] = '#' + data[i]['value'];
                } else if (data[i]['key'] == "Harsh Cornering") {
                  this.colors['cornering'] = '#' + data[i]['value'];
                } else {
                  this.colors['breaking'] = '#' + data[i]['value'];
                }
              }
            } // console.log(this.colors);


            this.localService.setItem('colors', JSON.stringify(this.colors));
          }
        }, {
          key: "f",
          get: function get() {
            return this.signinForm.controls;
          }
        }, {
          key: "userEmail",
          get: function get() {
            return this.cookieService.get('email');
          }
        }, {
          key: "userPass",
          get: function get() {
            var decPass = this.cookieService.get('password');
            var decodedPass = atob(decPass);
            return decodedPass;
          }
        }, {
          key: "routeToForget",
          value: function routeToForget() {
            this.router.navigate([_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].forget.path]);
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.signinForm.reset();
            this.error = false;
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.innerHeight = window.innerHeight; // this.innerWidth=window.innerWidth;
            // console.log(this.innerHeight, this.innerWidth);

            if (this.innerHeight >= 1024) {
              this.imageUrl = '/assets/images/signin11.png';
            } else {
              this.imageUrl = '/assets/images/Generate_password.png';
            }
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.ɵfac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"]));
      };

      SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SigninComponent,
        selectors: [["app-signin"]],
        hostBindings: function SigninComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SigninComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 38,
        vars: 33,
        consts: [[1, "form-wrapper", 3, "ngStyle"], [1, "bg-image"], [1, "bg-graphic"], [1, "card-outer"], [1, "mb-1", "text-white"], [1, "subtitle", "text-white"], [1, "example-form", 3, "formGroup"], ["appearance", "outline"], ["noSpaces", "", "matInput", "", "type", "text", "formControlName", "email"], ["noSpaces", "", "matInput", "", "type", "password", "formControlName", "password"], ["pPass", ""], ["matSuffix", "", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z", "fill", "#FF7070"], ["class", "error", 4, "ngIf"], [1, "d-flex", "flex-wrap", "justify-content-between", "remsec", "mb-28"], [1, "text-white", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "forget", "cursor", 3, "click"], ["style", "margin: 10px auto;", 3, "diameter", 4, "ngIf"], [1, "button-onboarding", "d-flex", "justify-content-end"], ["mat-button", "", 1, "button-auth", "w-100", 3, "click"], [1, "error"], ["src", "assets/images/AlertError.svg"], [1, "msg"], [1, "cursor", 3, "click"], ["src", "assets/images/Close.svg"], [2, "margin", "10px auto", 3, "diameter"]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_mat_icon_click_22_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

              return _r0.type == "password" ? _r0.type = "text" : _r0.type = "password";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SigninComponent_div_25_Template, 7, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-checkbox", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_mat_checkbox_ngModelChange_27_listener($event) {
              return ctx.rememberMe = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_p_click_30_listener() {
              return ctx.routeToForget();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SigninComponent_mat_spinner_33_Template, 1, 1, "mat-spinner", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_35_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, " url(" + ctx.imageUrl + ")"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, "signin.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 16, "subtitle"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signinForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 18, "email"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 20, "signin.password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, ctx.f.password.touched && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error.val);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rememberMe)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 22, "signin.remember"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 24, "signin.forgot"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 26, "submit"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _shared_directives_no_whitespace_directive__WEBPACK_IMPORTED_MODULE_9__["NoSpaceDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\n  letter-spacing: 0.22px;\n  width: 100%;\n}\n  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #371987 !important;\n}\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,   .mat-checkbox-checked.mat-accent .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background-color: #371987;\n}\n  .mat-checkbox.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #371987 !important;\n}\n.forget[_ngcontent-%COMP%] {\n  font: 700 16px/20px ModernEra !important;\n}\n.remsec[_ngcontent-%COMP%]     .mat-checkbox-label {\n  color: #ffffff !important;\n  font: 700 16px/20px ModernEra !important;\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: -138px;\n  min-height: calc(100vh + 10px + 4rem);\n}\n.form-wrapper[_ngcontent-%COMP%]   .carousel-width[_ngcontent-%COMP%] {\n  margin-top: 138px;\n  max-width: 400px;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-form-field-label {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     input {\n  background-color: transparent !important;\n}\n.form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill, .form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill:hover, .form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill:focus, .form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill:active {\n  -webkit-text-fill-color: #ffffff !important;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-progress-spinner circle {\n  stroke: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]       .mat-checkbox-frame {\n  border-color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]       .mat-checkbox-checked .mat-checkbox-background {\n  background-color: transparent;\n  border-color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     mat-label {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     input {\n  color: #ffffff !important;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n  -webkit-text-fill-color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc2lnbmluLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29tbW9uX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FDR0E7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFERjtBQUtFO0VBQ0Usb0NBQUE7QUFGSjtBQUtFOztFQUVFLHlCQ2RZO0FEV2hCO0FBUUU7RUFDRSxvQ0FBQTtBQUxKO0FBUUE7RUFDRSx3Q0FBQTtBQUxGO0FBU0k7RUFDRSx5QkFBQTtFQUVBLHdDQUFBO0FBUE47QUFXQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLHFDQUFBO0FBVEY7QUFXRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFUSjtBQWFNO0VBQ0UsY0Q1Q0E7QUNpQ1I7QUFlTTtFQUNFLGNEakRBO0FDb0NSO0FBZ0JJO0VBQ0UsY0RyREU7QUN1Q1I7QUFnQkk7RUFDRSxjRHhERTtBQzBDUjtBQWdCSTtFQUNFLHdDQUFBO0FBZE47QUFpQkk7Ozs7RUFLRSwyQ0FBQTtBQWhCTjtBQWtCSTtFQUNFLGVEdEVFO0FDc0RSO0FBa0JJO0VBQ0UscUJEekVFO0FDeURSO0FBd0JJO0VBQ0UsNkJBQUE7RUFDQSxxQkRuRkU7QUM2RFI7QUEwQkk7RUFDRSxjRHhGRTtBQ2dFUjtBQTBCSTtFQUNFLHlCQUFBO0FBeEJOO0FBNkJBOzs7O0VBSUkseURBQUE7RUFBQSxpREFBQTtFQUNBLHdDQUFBO0FBMUJKIiwiZmlsZSI6InNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qTkVXIENPTE9SIExJU1QqL1xuXG5cbiRsaWdodGJsdWU6ICMwMDU3ZmY7XG4kZHJha19CbHVlOiAjMjk2MmZmO1xuJHNibHVlOiAjMWIxOTRiO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGxpZ2h0YmxhY2s6ICMxNzFjMjI7XG4kbGlnaHRncmF5OiAjOTM5ZWFhO1xuJGZncmF5OiAjN2Q4NTkyO1xuJFNlY29uZGFyeV9ibGFjazogIzAwMWU1MDtcbiRQcmltYXJ5X0JsdWU6ICMwMDY0ZmY7XG4kU2Vjb25kYXJ5X0JsdWU6ICM2MDRlZmY7XG4kYnRuRXhwb3J0Qmx1ZTogIzRjNmZmZjtcbiRkYW5nZXI6ICNmZjcwNzA7XG4kU2Vjb25kYXJ5X0FsZXJ0czogIzAwY2JhMDtcbiRub0luZm86ICMxOGEwZmI7XG4kU2Vjb25kYXJ5X0Rhcms6ICMyYTFlOTE7XG4kZGFyazogIzMyMzMzODtcbiRib3JkZXJDb2xvcjogI2M1Y2RkNDtcbiRsaWdodFdoaXRlY29sb3I6ICNmOWZhZmI7XG4kZ3JvdXBCb3JkZXJEYXRhOiAjZTZlN2U4O1xuJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I6ICNlMGUzZTc7XG4kd2hpdGVTaGFkb3c6ICNlOWViZjA7XG4kc2t5Qmx1ZTogIzRkYmZmZjtcbiR5ZWxsb3c6ICNmZmVhNmM7XG4kb3JhbmdlOiAjZmY5OTUwO1xuJGJvZHlCYWNrR3JheTogI2ZkZmNmZjtcbiRsaWdodEJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuJGV4cG9ydEJ0bjogcmdiYSg5NiwgNzgsIDI1NSwgMC4xKTtcbiRkYW5nZXJCb3hCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kZ3JlZW5Cb3hCYWNrOiByZ2JhKDAsIDIwMywgMTYwLCAwLjEpO1xuJHRhYmxlT2RkQmFjazogI2ZiZmJmYjtcbiRTZWNvbmRhcnlfQmx1ZV9kYXJrOiAjNzU1NWNmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJG5pZ2h0VGV4dENvbG9yOiAjNDc0ZjVhO1xuJG5pZ2h0QmFja0JsYWNrOiAjNjY3MjgwO1xuJHdoaXRlQ29sb3I6ICNlMWUxZTE7XG4kcmVkQ29sb3I6ICNlZDUwMmU7XG4kZGFya19ncmF5OiAjYmRiZGJkO1xuJGhlbHBCdG5fQmx1ZTogIzYwMmFhYztcbiRkYXRlQ29sb3I6ICM0ZTVkNzg7XG4kZGF5Q29sb3I6ICM0ZTVkNzg3YTtcbiRyZWRBY3RpdmVDb2xvcjogI2ZhMTQ2NDtcbiR3aGl0ZUNvbG9yQmFjazogI2Y3ZmNmZjtcbiRibGFja0Rhcms6ICMyNzI3MmU7XG4kd2hpdGVHcmF5QmFjazogI2Y3ZmNmZjtcbi8vaW5wdXQgY3NzXG4kYm9yZGVyQ29sb3JMaWdodDogI2U4ZWNlZTtcbiRib3JkZXJDb2xvckdyYXk6ICNlZWVkZjA7XG4kbGlnaHRXaGl0ZTogI2U1ZWVmZjtcbiRidG5EZWZhdWx0V2hpdGU6ICNmNGY2Zjg7XG4kbWF0Qm9yZGVyOiAjZTZlN2U4O1xuXG4kdG9nZ2xlQWN0aXZlOiAjMzcxOTg2O1xuXG4vL3JnYmEgY3NzXG4kYmVoYXZpb3VyQmFjazogcmdiYSg5NiwgNzgsIDI1NSwgMC4wOCk7XG4kbW9udGhTaG93QmFjazogcmdiYSg4NiwgNjYsIDI1NSwgMC4xKTtcbiRib3hTaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4kYmFja0RhbmdlcjogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjQpO1xuJGJhY2tHcmVlbjogcmdiKDAgMjAzIDE2MCAvIDE1JSk7XG4kc2FmZVNjb3JlQmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGJhY2tHcmF5Q29tbW9uOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuMDUpO1xuJHF1aXRlUm9hZDogI2ZmZWE2YztcblxuLy9uZXcgY29sb3IgdmVyc2lvbjJcbiRyZWRFeGNlcHRpb246ICNmYTE0NjQ7XG4kYm94c2hhZG93OiAwcHggOHB4IDI1cHggcmdiYSg5OCwgOTgsIDk4LCAwLjA1KTtcbiR0b29sdGlwc1RleHRDb2xvcjogIzE2MTkyYztcblxuLy9ib3ggZ3JhZGlhbnQgQmFja2dyb3VuZFxuJHZlaGljYWxCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjODFiYmZmIC00LjIlLCAjMDA4NWZmIDk5LjM3JSk7XG4kZHJpdmVuQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNWE2YmZmIDAuNjklLCAjNjA0ZWZmIDEwMi4yJSk7XG4kYmVoYXZpb3VyQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjOGM0NmZmIDAuNjklLCAjZmY4MDgwIDEwMi4yJSk7XG4kZXZCbG9ja0JveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjZmZlOTc3IDEwMi4xNyUpO1xuJGljZUJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuXG4vL2JveCB2MiBncmFkaWFudCBCYWNrZ3JvdW5kXG4kaWNlQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuJGRyaXZlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgIzM2NTZmZiAxMDIuMTclKTtcbiRraWxvbWV0ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzMy4zOWRlZywgIzQ5ODVmOCAtNC4yMiUsICM0ZGJmZmYgMTA0LjI0JSk7XG4kc2FmZURyaXZpbmdCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjNDVjOGYxIC0xOC41NiUsICNlZWUwOTcgMTAyLjE3JSk7XG4kZHJpdmVyMUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM3NmQ2ZWUgMC42OSUsICM3Njk4ZGIgMTAyLjIlKTtcbiR0cmlwQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2MyYTNhMCAtMTguNTYlLCAjZTljOGE3IDEwMi4xNyUpO1xuJHZlaGljbGVCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgI2RmOTg5NSAtNC4yJSwgI2MyYTNhMCAxMDguMTUlKTtcblxuLy9zY3JvbGwgYmFyIGNvbG9yIGNvZGVcbiRzY3JvbGxCbGFjazogIzg4ODtcbiRzY3JvbGxXaGl0ZTogI2YxZjFmMTtcbiRzY3JvbGxIb3ZlckJsYWNrOiAjNTU1O1xuXG4vL3doaXRlIGxhYmVsIGZsZWFkIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojRUZBOTUyO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG5cbi8vd2hpdGUgbGFiZWwgZGhsIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojZDQwNTExO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG4vLyAkd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6I0ZGQ0MwMDtcblxuLy93aGl0ZSBsYWJlbCBaZWdvIGNvbG9yXG4kV2hpdGVfbGFiaW5nX0JsYWNrOiAjMDAwMDAwO1xuJFdoaXRlX2xhYmluZ19ZZWxsb3c6ICMzNzE5ODc7XG4kV2hpdGVfbGFiaW5nX3NreUJsdWU6ICM0ZGJmZmY7XG4kV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiAjZWVmOWZmO1xuJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiAjZmZjYzAwO1xuJGNvbG9yX3Zpb2xldDogIzg3NzViNztcbiRjb2xvcl92aW9sZXRfZGFyazogIzMyMTk4NztcbiRjb2xvcl9saWdodF9ncmV5OiAjZTVlNWU1O1xuJGNvbG9yLXZpb2xldC1saWdodDogI2FjOTRlZTtcbiRjb2xvci1ibHVlLWxpZ2h0OiAjZjVmNWY1O1xuJGNvbG9yLXRhYmxlLWhlYWRpbmc6ICMyNzI1MmQ7XG4kdHJpcEhpc3RCYWNrOiByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuMDUpO1xuJHNhZmVCYWNrQ29sb3I6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMDUpO1xuJGNvbG9yX2xpZ2h0X2JsdWU6ICM0NWNiZmM7XG4kY29sb3JfZ3JhcGhfdm9pbGV0OiAjMzcxYTg3O1xuXG4vL2dyYWRpYW50IEJhY2tncm91bmRcbiRlcnJvckdyYWRpYW50OiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMGRlZyxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXG4gICksXG4gICNmNDQzMzY7XG5cbkBtaXhpbiBmbGV4LWp1c3RpZnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGZsZXgtc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5AbWl4aW4gZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbkBtaXhpbiAgbGluZS1jbGFtcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I7XG59XG5cbkBtaXhpbiBidG5GaWx0ZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbkBtaXhpbiBtc2cge1xuICBmb250OiAxMnB4LzE4cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweCAzMHB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG5AbWl4aW4gbWFpbkJveHdpdGhCYWNrIHtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggLTVweCAxMjNweCByZ2JhKDg3LCA4NCwgMTYwLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLy8gQG1peGluIGJ1dHRvbi1ncmVlbiB7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogIzExRDBBMjtcbi8vIGJvcmRlci1yYWRpdXM6IDE0NXB4O1xuLy8gZm9udC13ZWlnaHQgOiA2MDA7XG4vLyBmb250LXNpemUgOiAxNXB4O1xuLy8gbGluZS1oZWlnaHQgOiAxOHB4O1xuLy8gY29sb3IgOiAjZmZmZmZmO1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLWJsdWUge1xuLy8gZm9udCA6IDEzcHgvMTZweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBiYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM3NTU1Q0YsICM3NTU1Q0YpLCAjNjQzRkMwO1xuLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbi8vIG1heC13aWR0aCA6IDE0MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogMzhweDtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1yZWQge1xuLy8gZm9udCA6IDE2cHgvMjBweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBib3JkZXItcmFkaXVzOiAxMDBweDtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjRkY2NTY1O1xuLy8gfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29tbW9uX3ZhcmlhYmxlcy5zY3NzXCI7XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCB7XG4gIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRDX1ByaW1hcnlfQmx1ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLFxuICAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRDX1ByaW1hcnlfQmx1ZTtcbiAgfVxufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC5tYXQtYWNjZW50IHtcbiAgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJENfUHJpbWFyeV9CbHVlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5mb3JnZXQge1xuICBmb250OiA3MDAgMTZweC8yMHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xufVxuLnJlbXNlYyB7XG4gIDo6bmctZGVlcHtcbiAgICAubWF0LWNoZWNrYm94LWxhYmVse1xuICAgICAgY29sb3IgOiR3aGl0ZSAhaW1wb3J0YW50OyBcbiAgICAgIC8vIGZvbnQ6NzAwIDE2cHgvMjRweCBNb2Rlcm5FcmE7XG4gICAgICBmb250OiA3MDAgMTZweC8yMHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLmZvcm0td3JhcHBlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8vIG1hcmdpbi10b3A6IC0xMXJlbTtcbiAgbWFyZ2luLXRvcDogLTEzOHB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoICsgMTBweCArIDRyZW0pO1xuICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBib3R0b20gO1xuICAuY2Fyb3VzZWwtd2lkdGgge1xuICAgIG1hcmdpbi10b3A6IDEzOHB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gICAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcbiAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCAjMWQ3NmZiIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiAkd2hpdGU7XG4gICAgfVxuICAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgICAvLyAubWF0LWljb257XG4gICAgLy8gICBzdmd7XG4gICAgLy8gICAgIGZpbGw6ICR3aGl0ZTtcbiAgICAvLyAgICAgc3Ryb2tlOiA7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIDo6bmctZGVlcCAgLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjokd2hpdGU7XG4gIH0gXG4gIH1cbiAgOjpuZy1kZWVwe1xuICAgIG1hdC1sYWJlbHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn0iLCIvL3NpZGViYXIgY29sb3IgY29kZVxuJENfUHJpbWFyeV9CbHVlOiMzNzE5ODc7IC8vIzQ5MDA4NlxuJENfcF9CbHVlOiMwMDY0RkY7XG4kQ19TZWNvbmRhcnlfYmxhY2s6IzIzMUYyMDtcbiRDX21lbnVCYWNrOiMzNzE5ODc7XG5cblxuXG4vL2hlYWRlciBjb2xvciBjb2RlXG4kQ193aGl0ZVNoYWRvdzojRTlFQkYwO1xuJENfc2t5Qmx1ZTojNERCRkZGO1xuJENfYm9yZGVyQ29sb3JMaWdodDojRThFQ0VFO1xuJENfU2Vjb25kYXJ5X0JsdWU6IzM3MTk4NztcbiRDX3doaXRlOiNmZmZmZmY7XG4kQ19saWdodG1peGJsdWVXaGl0ZWNvbG9yOiNFMEUzRTc7XG4kQ19ib3JkZXJDb2xvcjojQzVDREQ0O1xuJENfbGlnaHRibGFjazojMTcxQzIyO1xuXG4kQ195ZWxsb3dCYWNrOiNFRkE5NTI7XG5cbi8vY29udGFpbmVyIGNvbG9yIGNvZGVcbiRoZWxwQnRuX0JsdWU6IzYwMkFBQztcbiRsaWdodFdoaXRlOiNFNUVFRkY7XG5cbi8vU2FmZSBEcml2ZXIgVHJpcHMgVmVoaWNsZXMgQm94IEJhY2tDb2xvclxuJENfc2FmZUJveEJhY2s6bGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlEMEZGIC0xOC41NiUsICMzNjU2RkYgMTAyLjE3JSk7XG4kQ19kcml2ZXJCb3hCYWNrOmxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzY1NzRGRiAwLjY5JSwgIzFCMDBGRiAxMDIuMiUpO1xuJENfdHJpcEJveEJhY2s6bGluZWFyLWdyYWRpZW50KDk0LjFkZWcsICNDMjE1MTUgLTIwLjM0JSwgI0ZGOTEyQiAxMDIuMTUlKTtcbiRDX3ZlaGljbGVCb3hCYWNrOmxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICMzQ0ZGRjMgLTQuMiUsICMyODE1RkYgMTA4LjE1JSk7XG5cbi8vYnRuIGNvbGxlY3Rpb25cbiRDX2RyYWtfQmx1ZTojMjk2MkZGO1xuXG5AbWl4aW4gbXNnIHtcbiAgICBmb250OiAxMnB4LzE4cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogM3B4IDMwcHg7XG4gICAgY29sb3I6ICRDX3doaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "tSXo":
    /*!*************************************************!*\
      !*** ./src/app/onboarding/onboarding.module.ts ***!
      \*************************************************/

    /*! exports provided: OnboardingModule */

    /***/
    function tSXo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingModule", function () {
        return OnboardingModule;
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


      var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./onboarding-routing.module */
      "eQKf");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signin/signin.component */
      "pfGW");
      /* harmony import */


      var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wrapper/wrapper.component */
      "BJK8");
      /* harmony import */


      var _reset_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reset/reset.component */
      "tmpY");
      /* harmony import */


      var _forget_forget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forget/forget.component */
      "cM6f");
      /* harmony import */


      var _config_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../config/material */
      "Uo7g");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "bhfF");
      /* harmony import */


      var _text_carousel_text_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./text-carousel/text-carousel.component */
      "kl3K");

      var OnboardingModule = /*#__PURE__*/_createClass(function OnboardingModule() {
        _classCallCheck(this, OnboardingModule);
      });

      OnboardingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OnboardingModule
      });
      OnboardingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OnboardingModule_Factory(t) {
          return new (t || OnboardingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingRoutingModule"], _config_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModules"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
          extend: true
        }), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnboardingModule, {
          declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WrapperComponent"], _reset_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResetComponent"], _forget_forget_component__WEBPACK_IMPORTED_MODULE_6__["ForgetComponent"], _text_carousel_text_carousel_component__WEBPACK_IMPORTED_MODULE_12__["TextCarouselComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingRoutingModule"], _config_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModules"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WrapperComponent"], _reset_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResetComponent"], _forget_forget_component__WEBPACK_IMPORTED_MODULE_6__["ForgetComponent"], _text_carousel_text_carousel_component__WEBPACK_IMPORTED_MODULE_12__["TextCarouselComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingRoutingModule"], _config_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModules"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
              extend: true
            }), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "tmpY":
    /*!*****************************************************!*\
      !*** ./src/app/onboarding/reset/reset.component.ts ***!
      \*****************************************************/

    /*! exports provided: ResetComponent */

    /***/
    function tmpY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetComponent", function () {
        return ResetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _shared_directives_no_whitespace_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/directives/no-whitespace.directive */
      "h8Dd");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ResetComponent_div_2_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_div_2_div_26_Template_span_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.clearForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.error.msg, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          fill: a0
        };
      };

      function ResetComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_div_2_Template_mat_icon_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return _r2.type == "password" ? _r2.type = "text" : _r2.type = "password";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_div_2_Template_mat_icon_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r3.type == "password" ? _r3.type = "text" : _r3.type = "password";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ResetComponent_div_2_div_26_Template, 7, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_div_2_Template_div_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.routeToSignin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_div_2_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, "addnew.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, "subtitle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.resetForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, "addnew.newpassword"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx_r0.f.password.touched && ctx_r0.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, "addnew.cpassword"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx_r0.f.cpassword.touched && ctx_r0.f.cpassword.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error.val);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 18, "backtoSign"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 20, "forget.forgetsubmit"), " ");
        }
      }

      function ResetComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_div_3_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.routeToSignin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "addnew.ptitle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "addnew.your"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "addnew.hmobility"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "addnew.desc"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 13, "backtoSign"), "");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "background-image": a0
        };
      };

      var ResetComponent = /*#__PURE__*/function () {
        function ResetComponent(fb, router, service, activeRoute) {
          _classCallCheck(this, ResetComponent);

          this.fb = fb;
          this.router = router;
          this.service = service;
          this.activeRoute = activeRoute;
          this.initialPage = true;
          this.error = {
            val: false,
            msg: ''
          };
          this.imageUrl = '/assets/images/Generate_password.png';
        }

        _createClass(ResetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.innerHeight = window.innerHeight;
            this.innerWidth = window.innerWidth;

            if (this.innerHeight > 1024) {
              this.imageUrl = '/assets/images/signin11.png';
            } else {
              this.imageUrl = '/assets/images/Generate_password.png';
            }

            this.token = this.activeRoute.snapshot.queryParams.accessKey;

            if (!this.token) {//  this.routeToSignin()
            }

            this.createResetForm();
          }
        }, {
          key: "createResetForm",
          value: function createResetForm() {
            this.resetForm = this.fb.group({
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this34 = this;

            if (this.resetForm.value.password !== this.resetForm.value.cpassword) {
              this.error.val = true;
              this.error.msg = 'Password must match';
              return;
            }

            if (this.resetForm.valid && this.token) {
              this.error = {
                val: false,
                msg: ''
              };
              this.service.post("reset-password?accessKey=".concat(this.token), {
                password: this.resetForm.value.password
              }).pipe().subscribe(function (response) {
                if (response.message) {
                  _this34.initialPage = false;
                }
              }, function (error) {
                _this34.error.val = true;
                _this34.error.msg = error.message;
              });
            }
          }
        }, {
          key: "routeToSignin",
          value: function routeToSignin() {
            this.router.navigate([src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].signin.path]);
          }
        }, {
          key: "clearForm",
          value: function clearForm() {
            this.resetForm.reset();
            this.error = {
              val: false,
              msg: ''
            };
          }
        }, {
          key: "f",
          get: function get() {
            return this.resetForm.controls;
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.innerHeight = window.innerHeight;
            this.innerWidth = window.innerWidth; // console.log(this.innerHeight, this.innerWidth);

            if (this.innerHeight >= 1024) {
              this.imageUrl = '/assets/images/signin11.png';
            } else {
              this.imageUrl = '/assets/images/Generate_password.png';
            }
          }
        }]);

        return ResetComponent;
      }();

      ResetComponent.ɵfac = function ResetComponent_Factory(t) {
        return new (t || ResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      ResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResetComponent,
        selectors: [["app-reset"]],
        hostBindings: function ResetComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ResetComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 4,
        vars: 5,
        consts: [[1, "form-wrapper", 3, "ngStyle"], [1, "bg-graphic"], ["class", "card-outer", 4, "ngIf"], [1, "card-outer"], [1, "mb-1"], [1, "subtitle"], [1, "example-form", 3, "formGroup"], ["appearance", "outline"], ["noSpaces", "", "matInput", "", "type", "password", "formControlName", "password", "autocomplete", "off"], ["cPass", ""], ["matSuffix", "", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z", "fill", "#FF7070"], ["noSpaces", "", "matInput", "", "type", "password", "formControlName", "cpassword"], ["pPass", ""], ["class", "error", 4, "ngIf"], [1, "button-onboarding", "justify-content-between"], [1, "backSignin", "cursor", "text-center", "pt-3", 3, "click"], [1, "d-flex", "justify-content-center"], ["width", "21", "height", "20", "viewBox", "0 0 21 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mr-2"], ["d", "M17.375 10H3.625", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.25 4.375L3.625 10L9.25 15.625", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "d-flex", "justify-content-end", "mt-2"], ["mat-button", "", 1, "button-auth", "w-100", "mb-28", "mt-3", 3, "click"], [1, "error"], ["src", "assets/images/AlertError.svg"], [1, "msg"], [1, "cursor", 3, "click"], ["src", "assets/images/Close.svg"], [1, "button-onboarding"], ["mat-button", "", 1, "button-auth", "w-100", "mb-28", 3, "click"], ["width", "21", "height", "20", "viewBox", "0 0 21 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M17.375 10H3.625", "stroke", "#001E50", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.25 4.375L3.625 10L9.25 15.625", "stroke", "#001E50", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]],
        template: function ResetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetComponent_div_2_Template, 40, 26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetComponent_div_3_Template, 20, 15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, " url(" + ctx.imageUrl + ")"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.initialPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.initialPage);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _shared_directives_no_whitespace_directive__WEBPACK_IMPORTED_MODULE_7__["NoSpaceDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\n  letter-spacing: 0.22px;\n  width: 100%;\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: -138px;\n  min-height: calc(100vh + 10px + 4rem);\n}\n.form-wrapper[_ngcontent-%COMP%]   .bg-graphic[_ngcontent-%COMP%] {\n  min-height: auto;\n}\n.form-wrapper[_ngcontent-%COMP%]   .carousel-width[_ngcontent-%COMP%] {\n  max-width: 400px;\n  padding-left: 64px;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-form-field.mat-focused .mat-form-field-label {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill, .form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill:hover, .form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill:focus, .form-wrapper[_ngcontent-%COMP%]     input:-webkit-autofill:active {\n  -webkit-text-fill-color: #ffffff !important;\n}\n.form-wrapper[_ngcontent-%COMP%]     .mat-progress-spinner circle {\n  stroke: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     mat-label {\n  color: #ffffff;\n}\n.form-wrapper[_ngcontent-%COMP%]     input {\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vcmVzZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNFQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUE7RUFFRSw0QkFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQ0FBQTtBQURGO0FBR0U7RUFDRSxnQkFBQTtBQURKO0FBR0U7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FBRko7QUFNTTtFQUNFLGNEbkJBO0FDZVI7QUFRTTtFQUNFLGNEeEJBO0FDa0JSO0FBU0k7RUFDRSxjRDVCRTtBQ3FCUjtBQVNJO0VBQ0UsY0QvQkU7QUN3QlI7QUFTSTs7OztFQUtFLDJDQUFBO0FBUk47QUFVSTtFQUNFLGVEekNFO0FDaUNSO0FBWUk7RUFDRSxjRDlDRTtBQ29DUjtBQVlJO0VBQ0UseUJBQUE7QUFWTiIsImZpbGUiOiJyZXNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qTkVXIENPTE9SIExJU1QqL1xuXG5cbiRsaWdodGJsdWU6ICMwMDU3ZmY7XG4kZHJha19CbHVlOiAjMjk2MmZmO1xuJHNibHVlOiAjMWIxOTRiO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGxpZ2h0YmxhY2s6ICMxNzFjMjI7XG4kbGlnaHRncmF5OiAjOTM5ZWFhO1xuJGZncmF5OiAjN2Q4NTkyO1xuJFNlY29uZGFyeV9ibGFjazogIzAwMWU1MDtcbiRQcmltYXJ5X0JsdWU6ICMwMDY0ZmY7XG4kU2Vjb25kYXJ5X0JsdWU6ICM2MDRlZmY7XG4kYnRuRXhwb3J0Qmx1ZTogIzRjNmZmZjtcbiRkYW5nZXI6ICNmZjcwNzA7XG4kU2Vjb25kYXJ5X0FsZXJ0czogIzAwY2JhMDtcbiRub0luZm86ICMxOGEwZmI7XG4kU2Vjb25kYXJ5X0Rhcms6ICMyYTFlOTE7XG4kZGFyazogIzMyMzMzODtcbiRib3JkZXJDb2xvcjogI2M1Y2RkNDtcbiRsaWdodFdoaXRlY29sb3I6ICNmOWZhZmI7XG4kZ3JvdXBCb3JkZXJEYXRhOiAjZTZlN2U4O1xuJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I6ICNlMGUzZTc7XG4kd2hpdGVTaGFkb3c6ICNlOWViZjA7XG4kc2t5Qmx1ZTogIzRkYmZmZjtcbiR5ZWxsb3c6ICNmZmVhNmM7XG4kb3JhbmdlOiAjZmY5OTUwO1xuJGJvZHlCYWNrR3JheTogI2ZkZmNmZjtcbiRsaWdodEJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuJGV4cG9ydEJ0bjogcmdiYSg5NiwgNzgsIDI1NSwgMC4xKTtcbiRkYW5nZXJCb3hCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kZ3JlZW5Cb3hCYWNrOiByZ2JhKDAsIDIwMywgMTYwLCAwLjEpO1xuJHRhYmxlT2RkQmFjazogI2ZiZmJmYjtcbiRTZWNvbmRhcnlfQmx1ZV9kYXJrOiAjNzU1NWNmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJG5pZ2h0VGV4dENvbG9yOiAjNDc0ZjVhO1xuJG5pZ2h0QmFja0JsYWNrOiAjNjY3MjgwO1xuJHdoaXRlQ29sb3I6ICNlMWUxZTE7XG4kcmVkQ29sb3I6ICNlZDUwMmU7XG4kZGFya19ncmF5OiAjYmRiZGJkO1xuJGhlbHBCdG5fQmx1ZTogIzYwMmFhYztcbiRkYXRlQ29sb3I6ICM0ZTVkNzg7XG4kZGF5Q29sb3I6ICM0ZTVkNzg3YTtcbiRyZWRBY3RpdmVDb2xvcjogI2ZhMTQ2NDtcbiR3aGl0ZUNvbG9yQmFjazogI2Y3ZmNmZjtcbiRibGFja0Rhcms6ICMyNzI3MmU7XG4kd2hpdGVHcmF5QmFjazogI2Y3ZmNmZjtcbi8vaW5wdXQgY3NzXG4kYm9yZGVyQ29sb3JMaWdodDogI2U4ZWNlZTtcbiRib3JkZXJDb2xvckdyYXk6ICNlZWVkZjA7XG4kbGlnaHRXaGl0ZTogI2U1ZWVmZjtcbiRidG5EZWZhdWx0V2hpdGU6ICNmNGY2Zjg7XG4kbWF0Qm9yZGVyOiAjZTZlN2U4O1xuXG4kdG9nZ2xlQWN0aXZlOiAjMzcxOTg2O1xuXG4vL3JnYmEgY3NzXG4kYmVoYXZpb3VyQmFjazogcmdiYSg5NiwgNzgsIDI1NSwgMC4wOCk7XG4kbW9udGhTaG93QmFjazogcmdiYSg4NiwgNjYsIDI1NSwgMC4xKTtcbiRib3hTaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4kYmFja0RhbmdlcjogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjQpO1xuJGJhY2tHcmVlbjogcmdiKDAgMjAzIDE2MCAvIDE1JSk7XG4kc2FmZVNjb3JlQmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGJhY2tHcmF5Q29tbW9uOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuMDUpO1xuJHF1aXRlUm9hZDogI2ZmZWE2YztcblxuLy9uZXcgY29sb3IgdmVyc2lvbjJcbiRyZWRFeGNlcHRpb246ICNmYTE0NjQ7XG4kYm94c2hhZG93OiAwcHggOHB4IDI1cHggcmdiYSg5OCwgOTgsIDk4LCAwLjA1KTtcbiR0b29sdGlwc1RleHRDb2xvcjogIzE2MTkyYztcblxuLy9ib3ggZ3JhZGlhbnQgQmFja2dyb3VuZFxuJHZlaGljYWxCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjODFiYmZmIC00LjIlLCAjMDA4NWZmIDk5LjM3JSk7XG4kZHJpdmVuQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNWE2YmZmIDAuNjklLCAjNjA0ZWZmIDEwMi4yJSk7XG4kYmVoYXZpb3VyQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjOGM0NmZmIDAuNjklLCAjZmY4MDgwIDEwMi4yJSk7XG4kZXZCbG9ja0JveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjZmZlOTc3IDEwMi4xNyUpO1xuJGljZUJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuXG4vL2JveCB2MiBncmFkaWFudCBCYWNrZ3JvdW5kXG4kaWNlQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuJGRyaXZlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgIzM2NTZmZiAxMDIuMTclKTtcbiRraWxvbWV0ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzMy4zOWRlZywgIzQ5ODVmOCAtNC4yMiUsICM0ZGJmZmYgMTA0LjI0JSk7XG4kc2FmZURyaXZpbmdCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjNDVjOGYxIC0xOC41NiUsICNlZWUwOTcgMTAyLjE3JSk7XG4kZHJpdmVyMUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM3NmQ2ZWUgMC42OSUsICM3Njk4ZGIgMTAyLjIlKTtcbiR0cmlwQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2MyYTNhMCAtMTguNTYlLCAjZTljOGE3IDEwMi4xNyUpO1xuJHZlaGljbGVCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgI2RmOTg5NSAtNC4yJSwgI2MyYTNhMCAxMDguMTUlKTtcblxuLy9zY3JvbGwgYmFyIGNvbG9yIGNvZGVcbiRzY3JvbGxCbGFjazogIzg4ODtcbiRzY3JvbGxXaGl0ZTogI2YxZjFmMTtcbiRzY3JvbGxIb3ZlckJsYWNrOiAjNTU1O1xuXG4vL3doaXRlIGxhYmVsIGZsZWFkIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojRUZBOTUyO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG5cbi8vd2hpdGUgbGFiZWwgZGhsIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojZDQwNTExO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG4vLyAkd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6I0ZGQ0MwMDtcblxuLy93aGl0ZSBsYWJlbCBaZWdvIGNvbG9yXG4kV2hpdGVfbGFiaW5nX0JsYWNrOiAjMDAwMDAwO1xuJFdoaXRlX2xhYmluZ19ZZWxsb3c6ICMzNzE5ODc7XG4kV2hpdGVfbGFiaW5nX3NreUJsdWU6ICM0ZGJmZmY7XG4kV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiAjZWVmOWZmO1xuJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiAjZmZjYzAwO1xuJGNvbG9yX3Zpb2xldDogIzg3NzViNztcbiRjb2xvcl92aW9sZXRfZGFyazogIzMyMTk4NztcbiRjb2xvcl9saWdodF9ncmV5OiAjZTVlNWU1O1xuJGNvbG9yLXZpb2xldC1saWdodDogI2FjOTRlZTtcbiRjb2xvci1ibHVlLWxpZ2h0OiAjZjVmNWY1O1xuJGNvbG9yLXRhYmxlLWhlYWRpbmc6ICMyNzI1MmQ7XG4kdHJpcEhpc3RCYWNrOiByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuMDUpO1xuJHNhZmVCYWNrQ29sb3I6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMDUpO1xuJGNvbG9yX2xpZ2h0X2JsdWU6ICM0NWNiZmM7XG4kY29sb3JfZ3JhcGhfdm9pbGV0OiAjMzcxYTg3O1xuXG4vL2dyYWRpYW50IEJhY2tncm91bmRcbiRlcnJvckdyYWRpYW50OiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMGRlZyxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXG4gICksXG4gICNmNDQzMzY7XG5cbkBtaXhpbiBmbGV4LWp1c3RpZnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGZsZXgtc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5AbWl4aW4gZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbkBtaXhpbiAgbGluZS1jbGFtcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I7XG59XG5cbkBtaXhpbiBidG5GaWx0ZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbkBtaXhpbiBtc2cge1xuICBmb250OiAxMnB4LzE4cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweCAzMHB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG5AbWl4aW4gbWFpbkJveHdpdGhCYWNrIHtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggLTVweCAxMjNweCByZ2JhKDg3LCA4NCwgMTYwLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLy8gQG1peGluIGJ1dHRvbi1ncmVlbiB7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogIzExRDBBMjtcbi8vIGJvcmRlci1yYWRpdXM6IDE0NXB4O1xuLy8gZm9udC13ZWlnaHQgOiA2MDA7XG4vLyBmb250LXNpemUgOiAxNXB4O1xuLy8gbGluZS1oZWlnaHQgOiAxOHB4O1xuLy8gY29sb3IgOiAjZmZmZmZmO1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLWJsdWUge1xuLy8gZm9udCA6IDEzcHgvMTZweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBiYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM3NTU1Q0YsICM3NTU1Q0YpLCAjNjQzRkMwO1xuLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbi8vIG1heC13aWR0aCA6IDE0MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogMzhweDtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1yZWQge1xuLy8gZm9udCA6IDE2cHgvMjBweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBib3JkZXItcmFkaXVzOiAxMDBweDtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjRkY2NTY1O1xuLy8gfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybS13cmFwcGVyIHtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HZW5lcmF0ZV9wYXNzd29yZC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8vIG1hcmdpbi10b3A6IC0xMXJlbTtcbiAgbWFyZ2luLXRvcDogLTEzOHB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoICsgMTBweCArIDRyZW0pO1xuICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBib3R0b207XG4gIC5iZy1ncmFwaGlje1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmNhcm91c2VsLXdpZHRoIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xuICB9XG4gIDo6bmctZGVlcCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgfVxuICAgIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG4gICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xuICAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4ICMxZDc2ZmIgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZXtcbiAgICAgIHN0cm9rZTogJHdoaXRlO1xuICAgIH1cbiAgfVxuICA6Om5nLWRlZXB7XG4gICAgbWF0LWxhYmVse1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reset',
            templateUrl: './reset.component.html',
            styleUrls: ['./reset.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=onboarding-onboarding-module-es5.js.map