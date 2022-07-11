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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fleetOverview-trip-trip-module"], {
    /***/
    "6pUh":
    /*!************************************************************************************!*\
      !*** ./src/app/main/fleetOverview/trip/trip-dashboard/trip-dashboard.component.ts ***!
      \************************************************************************************/

    /*! exports provided: TripDashboardComponent */

    /***/
    function pUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TripDashboardComponent", function () {
        return TripDashboardComponent;
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


      var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/config/route-config */
      "1r8O");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _shared_components_trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../shared/components/trip-history/trip-history.component */
      "/F38");
      /* harmony import */


      var _shared_components_trip_history_map_trip_history_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../shared/components/trip-history-map/trip-history-map.component */
      "RKq6");

      var _c0 = function _c0(a0) {
        return {
          "color": a0
        };
      };

      function TripDashboardComponent_ng_container_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r10["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.speed || "NA", ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r10 == null ? null : item_r10.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.service.convertToDutch(item_r10.value) || "0", "%");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "background-color": a0
        };
      };

      function TripDashboardComponent_ng_container_5_ng_container_3_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxFlex", item_r12.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r12 == null ? null : item_r12.color));
        }
      }

      function TripDashboardComponent_ng_container_5_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TripDashboardComponent_ng_container_5_ng_container_3_div_3_Template, 1, 4, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.showStackBar);
        }
      }

      function TripDashboardComponent_ng_container_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TripDashboardComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TripDashboardComponent_ng_container_5_div_2_Template, 4, 6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TripDashboardComponent_ng_container_5_ng_container_3_Template, 4, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TripDashboardComponent_ng_container_5_ng_template_4_Template, 3, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.showStackBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.noRoadTypeData)("ngIfElse", _r8);
        }
      }

      function TripDashboardComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 40);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
        }
      }

      function TripDashboardComponent_div_35_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
        }
      }

      function TripDashboardComponent_div_35_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-trip-history", 43);
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx_r15.tripHistory)("toolTipData", ctx_r15.tripToolTipData);
        }
      }

      function TripDashboardComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TripDashboardComponent_div_35_ng_container_1_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TripDashboardComponent_div_35_ng_template_2_Template, 1, 2, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isTripHistoryLoading)("ngIfElse", _r14);
        }
      }

      function TripDashboardComponent_div_36_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
        }
      }

      function TripDashboardComponent_div_36_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-trip-history-map", 46);
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx_r18.tripHistory);
        }
      }

      function TripDashboardComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TripDashboardComponent_div_36_ng_container_1_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TripDashboardComponent_div_36_ng_template_2_Template, 1, 1, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isTripHistoryLoading)("ngIfElse", _r17);
        }
      }

      var TripDashboardComponent = /*#__PURE__*/function () {
        function TripDashboardComponent(router, service, localService, activeRoute, translate) {
          _classCallCheck(this, TripDashboardComponent);

          this.router = router;
          this.service = service;
          this.localService = localService;
          this.activeRoute = activeRoute;
          this.translate = translate;
          this.isCollapsed = true; // GUAGE CHART VARIABLES

          this.hideToggle = false;
          this.gaugeType = "semi";
          this.gaugeValue = 28.3;
          this.thresholdConfig = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].gaugeThreshold;
          this.gaugeMin = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].gaugeMin;
          this.gaugeMax = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].gaugeMax;
          this.maxDate = moment__WEBPACK_IMPORTED_MODULE_1__(); // stacked bar variable

          this.colorBox = ["#ed502e", "#604EFF", "#F0CE00", "#4dbfff", "#2A1E91"];
          this.stackBar = [{
            value: 0,
            "class": "ridOfmax1",
            speed: '0',
            color: '',
            name: ''
          }, {
            value: 0,
            "class": "busyRoad1",
            speed: '0',
            color: '',
            name: ''
          }, {
            value: 0,
            "class": "quietRoad1",
            speed: '0',
            color: '',
            name: ''
          }, {
            value: 0,
            "class": "buildUp1",
            speed: '0',
            color: '',
            name: ''
          }, {
            value: 0,
            "class": "ridOfHighSpeed1",
            speed: '0',
            color: '',
            name: ''
          }];
          this.showStackBar = [];
          this.noRoadTypeData = true;
          this.tableView = 'table';
          this.vehicleCategoryData = [];
          this.vehicleList = [];
          this.driverList = [];
          this.selected = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
          };
          this.selectedShow = {
            startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
            endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
          };
          this.selectedVehicleCategory = 'all';
          this.selectedVehicle = 'all';
          this.selectedDriver = 'all';
          this.tripToolTipData = {};
          this.page = 1;
          this.limit = 5;
          this.pageSizeOptions = [5, 10, 25];
          this.tripHistory = [];
          this.isTripHistoryLoading = true;
          this.tripBehaviour = {}; // 

          this.alertsCount = [];
          this.alertsData = [];
          this.filterCalledTrip = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.customeRange = 'Custom';
          this.setDate = 'Set Date';
          this.cancelDate = 'Cancel';
          this.isRoadTypeLoading = false;
        }

        _createClass(TripDashboardComponent, [{
          key: "changeLangRoadDis",
          value: function changeLangRoadDis() {
            var _this2 = this;

            this.localService.getLang().subscribe(function (val) {
              _this2.translate.get("kmph").subscribe(function (text) {
                for (var i = 0; i < _this2.stackBar.length; i++) {
                  if (_this2.stackBar[i].speed.includes('kmph')) {
                    _this2.stackBar[i].speed = _this2.stackBar[i].speed.replace(/kmph/gi, 'km/u');
                  } else if (_this2.stackBar[i].speed.includes('km/u')) {
                    _this2.stackBar[i].speed = _this2.stackBar[i].speed.split(' ')[0] + " " + 'kmph';
                  }
                }
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.changeLangRoadDis();
            this.filterCalledTrip = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            this.limit = Number(this.localService.getItem("tripLimit")) || 5;
            this.selectedOrgID = this.localService.getItem("selectedOrgs");

            if (this.selectedOrgID) {
              this.selectedOrgID = JSON.parse(this.selectedOrgID);
            }

            this.filterCalledTrip.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500)).subscribe(function (value) {
              if (value) {
                _this3.selectedOrgID = _this3.localService.getItem("selectedOrgs");

                if (_this3.selectedOrgID) {
                  _this3.selectedOrgID = JSON.parse(_this3.selectedOrgID);
                }

                _this3.resetToLastState();

                _this3.filterApply();
              }
            });
            this.localService.getFilter().subscribe(function (val) {
              if (val && _this3.router.url.split('?')[0] == src_app_config_route_config__WEBPACK_IMPORTED_MODULE_3__["RouteConfig"].trip.url) {
                _this3.filterCalledTrip.next(true);
              }
            });

            if (this.selectedOrgID) {
              this.resetToLastState();
              this.updatePageData();
            }
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
          }
        }, {
          key: "getDriverList",
          value: function getDriverList(categoryId, vehicleId) {
            var _this6 = this;

            if (categoryId && categoryId == 'all' || categoryId == undefined) {
              categoryId = '';
            }

            if (vehicleId && vehicleId == 'all' || vehicleId == undefined) {
              vehicleId = '';
            }

            this.searchDriver = '';
            this.service.get("drivers/by-organisation?organisation=".concat(JSON.stringify(this.selectedOrgID))).pipe().subscribe(function (response) {
              if (response.data) {
                _this6.driverList = response.data;
              }
            }, function (error) {});
          }
        }, {
          key: "getTripDashboardData",
          value: function getTripDashboardData(categoryId, vehicleId, driverId, search) {
            var _this7 = this;

            var querryParams = this.createQuerryparams(categoryId, vehicleId, driverId, search, undefined, false);
            this.service.get("trips/report?".concat(querryParams)).pipe().subscribe(function (response) {
              if (response.data) {
                _this7.dashboardData = response.data;
                _this7.dashboardData.driving_behaviour = parseFloat(_this7.formatToFixed(_this7.dashboardData.driving_behaviour, 1));
              } else {
                _this7.dashboardData = {};
              }
            }, function (error) {
              _this7.dashboardData = {};
            });
          }
        }, {
          key: "getRoadTypeDistribution",
          value: function getRoadTypeDistribution(categoryId, vehicleId, driverId, search) {
            var _this8 = this;

            this.isRoadTypeLoading = true;
            var querryParams = this.createQuerryparams(categoryId, vehicleId, driverId, search, undefined, true);
            this.service.get("trips/road-type-distribution?".concat(querryParams)).pipe().subscribe(function (response) {
              _this8.isRoadTypeLoading = false;

              if (response.data && response.data.length) {
                for (var i = 0; i < response.data.length; i++) {
                  if (_this8.stackBar[i]) {
                    _this8.stackBar[i].value = response.data[i].contribution_value.toFixed(1);
                    _this8.stackBar[i].speed = response.data[i].road_factor_name;
                    _this8.stackBar[i].color = _this8.colorBox[i];

                    if (response.data[i].road_factor_name == 'roadFactor1') {
                      _this8.stackBar[i].name = 'Highway';
                    } else {
                      _this8.stackBar[i].name = 'Lorem';
                    }
                  }
                }

                _this8.translate.get("kmph").subscribe(function (text) {
                  for (var i = 0; i < _this8.stackBar.length; i++) {
                    if (_this8.stackBar[i].speed.includes('kmph')) {
                      _this8.stackBar[i].speed = _this8.stackBar[i].speed.replace(/kmph/gi, text);
                    } // else if(this.stackBar[i].speed.includes('km/u')){
                    //   this.stackBar[i].speed= this.stackBar[i].speed.replace(/''/gi,'kmph')
                    // }

                  } //  console.log(this.stackBar);

                });

                _this8.showStackBar = _this8.stackBar.filter(function (x) {
                  return x.value > 0;
                });

                if (!_this8.showStackBar.length) {
                  _this8.noRoadTypeData = true;
                } else {
                  _this8.noRoadTypeData = false;
                }
              } else {
                _this8.noRoadTypeData = true;
              }
            }, function (error) {
              _this8.noRoadTypeData = true;
              _this8.isRoadTypeLoading = false;
            });
          }
        }, {
          key: "getTripHistory",
          value: function getTripHistory(categoryId, vehicleId, driverId, search) {
            var _this9 = this;

            this.isTripHistoryLoading = true;
            this.tripHistory = [];
            var querryParams = this.createQuerryparams(categoryId, vehicleId, driverId, search, 'listing');
            this.service.get("trips?".concat(querryParams)).pipe().subscribe(function (response) {
              if (response.data) {
                _this9.isTripHistoryLoading = false;
                _this9.totalCount = response.data.count;
                _this9.tripHistory = _toConsumableArray(response.data.rows);
                _this9.alertsCount = [];
                response.data.rows.forEach(function (element) {
                  _this9.alertsCount.push(element.id);
                });

                if (_this9.totalCount) {
                  _this9.getexception();

                  _this9.getTooltipInfo(_this9.tripHistory);
                }

                _this9.setPage(_this9.page - 1);
              } else {
                _this9.totalCount = 0;
                _this9.tripHistory = [];
              }
            }, function (error) {
              _this9.isTripHistoryLoading = false;
              _this9.tripHistory = [];
            });
          }
        }, {
          key: "getexception",
          value: function getexception() {
            var _this10 = this;

            var data = {
              "tripId": this.alertsCount
            };
            this.service.post('trips/alerts', data).pipe().subscribe(function (res) {
              if (res.data) {
                _this10.tripHistory.filter(function (ele, i) {
                  for (var k in res.data) {
                    if (ele.id == k) {
                      _this10.tripHistory[i].exception_events = res.data[k];
                    }
                  }
                });
              }
            });
          }
        }, {
          key: "toggleChange",
          value: function toggleChange(value) {
            this.tableView = value;
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
            this.localService.setItem("tripLimit", this.limit);
            this.isCollapsed = true;
            var category = this.localService.getItem("category");
            var vehicle = this.localService.getItem("vehicle");
            var driver = this.localService.getItem("driver");
            var search = this.localService.getItem("search");
            this.getTripHistory(category, vehicle, driver, search);
          }
        }, {
          key: "getTooltipInfo",
          value: function getTooltipInfo(tableData) {
            var _this11 = this;

            var data = {
              "tripId": this.alertsCount
            };
            this.service.post('trips/exception-counts', data).pipe().subscribe(function (res) {
              if (res.data) {
                for (var k in res.data) {
                  _this11.tripToolTipData[k] = _this11.service.convertFormat(res.data[k]);
                }
              }
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
          key: "filterApply",
          value: function filterApply() {
            this.localService.setItem("category", this.selectedVehicleCategory);
            this.localService.setItem("vehicle", this.selectedVehicle);
            this.localService.setItem("driver", this.selectedDriver);
            this.localService.setItem("search", this.searchString);
            this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
            this.selected = this.selectedShow;
            this.updatePageData();
            this.changeState();
          }
        }, {
          key: "updatePageData",
          value: function updatePageData() {
            var _this12 = this;

            // this.page = 1;
            this.activeRoute.queryParams.subscribe(function (params) {
              // const details:any = params.page;
              _this12.page = (params === null || params === void 0 ? void 0 : params.page) || 1;
            }); // this.getTripDashboardData();
            // this.getDashboardData();

            this.totalCount = 0;
            this.searchVehicle = '';
            this.searchCategory = '';
            this.searchDriver = ''; // this.getDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.searchString)

            this.getTripHistory(this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.searchString);
            this.getRoadTypeDistribution(this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.searchString);
          }
        }, {
          key: "resetToLastState",
          value: function resetToLastState() {
            var category = this.localService.getItem("category");
            var vehicle = this.localService.getItem("vehicle");
            var driver = this.localService.getItem("driver");
            var search = this.localService.getItem("search");
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
          key: "createQuerryparams",
          value: function createQuerryparams(categoryId, vehicleId, driverId, search, listing, roadType) {
            var querryParams;

            if (listing) {
              querryParams = "organisation=".concat(JSON.stringify(this.selectedOrgID), "&page=").concat(this.page, "&limit=").concat(this.limit);
            } else {
              querryParams = "organisation=".concat(JSON.stringify(this.selectedOrgID));
            }

            if (roadType) {
              querryParams = querryParams + "&custom_filter=true&filter_value=''";
            } else {
              var val = this.service.checkCustomDate(moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format('YYYY-MM-DD'));

              if (val == undefined) {
                querryParams = querryParams + "&custom_filter=true&filter_value=''";
              } else {
                if (categoryId && categoryId !== 'all' || vehicleId && vehicleId !== 'all' || driverId && driverId !== 'all') {
                  querryParams = querryParams + "&custom_filter=true&filter_value=''";
                } else {
                  querryParams = querryParams + "&custom_filter=false&filter_value=".concat(val);
                }
              }
            }

            if (categoryId && categoryId !== 'all') {
              var arr = [categoryId];
              querryParams = querryParams + "&vehicle_category=".concat(JSON.stringify(arr));
            }

            if (vehicleId && vehicleId !== 'all') {
              var _arr = [vehicleId];
              querryParams = querryParams + "&vehicle=".concat(JSON.stringify(_arr));
            }

            if (driverId && driverId !== 'all') {
              var _arr2 = [driverId];
              querryParams = querryParams + "&driver=".concat(JSON.stringify(_arr2));
            }

            querryParams = querryParams + "&from_date=".concat(moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.startDate).format('YYYY-MM-DD'));
            querryParams = querryParams + "&to_date=".concat(moment__WEBPACK_IMPORTED_MODULE_1__(this.selected.endDate).format('YYYY-MM-DD'));
            return querryParams;
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.selectedVehicleCategory = 'all';
            this.selectedDriver = 'all';
            this.selectedVehicle = 'all';
            this.searchString = '';
            this.selectedShow = {
              startDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
              endDate: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
            };
            this.filterApply();
          }
        }, {
          key: "setPage",
          value: function setPage(index) {
            if (this.paginator) this.paginator.pageIndex = index;
          }
        }]);

        return TripDashboardComponent;
      }();

      TripDashboardComponent.ɵfac = function TripDashboardComponent_Factory(t) {
        return new (t || TripDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]));
      };

      TripDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TripDashboardComponent,
        selectors: [["app-trip-dashboard"]],
        viewQuery: function TripDashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 39,
        vars: 15,
        consts: [[1, "mainBox", "mb-20"], [1, "roadFactorSec"], [1, "typeTitle", "mb-0", "mr-3"], [4, "ngIf", "ngIfElse"], ["elseTemplateSpin", ""], [1, "tripHistory", "mb-20"], [1, "tripHisTop"], [1, "tripHisTopLeft"], [1, "tripTitle", "mb-0", "mr-30"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.64 12.81L13.02 8.43H10.59C10.18 8.43 9.84 8.09 9.84 7.68C9.84 7.27 10.18 6.93 10.59 6.93H14.83C14.93 6.93 15.02 6.95 15.12 6.99C15.3 7.07 15.45 7.21 15.53 7.4C15.57 7.49 15.59 7.59 15.59 7.69V11.93C15.59 12.34 15.25 12.68 14.84 12.68C14.43 12.68 14.09 12.34 14.09 11.93V9.5L9.7 13.87C9.55 14.02 9.36 14.09 9.17 14.09C8.98 14.09 8.79 14.02 8.64 13.87C8.35 13.58 8.35 13.1 8.64 12.81ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z", "fill", "#C5CDD4"], [1, ""], [1, "historyButton", 3, "value", "change"], ["value", "table"], ["width", "20", "height", "21", "viewBox", "0 0 20 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.3332 5.29199C18.3332 5.63717 18.0534 5.91699 17.7082 5.91699H2.29151C1.94633 5.91699 1.6665 5.63717 1.6665 5.29199C1.6665 4.94681 1.94633 4.66699 2.29151 4.66699H17.7082C18.0534 4.66699 18.3332 4.94681 18.3332 5.29199Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.3332 10.5003C18.3332 10.8455 18.0534 11.1253 17.7082 11.1253H2.2915C1.94633 11.1253 1.6665 10.8455 1.6665 10.5003C1.6665 10.1551 1.94633 9.87532 2.2915 9.87532H17.7082C18.0534 9.87532 18.3332 10.1551 18.3332 10.5003Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.3332 15.7087C18.3332 16.0538 18.0534 16.3337 17.7082 16.3337H2.2915C1.94633 16.3337 1.6665 16.0538 1.6665 15.7087C1.6665 15.3635 1.94633 15.0837 2.2915 15.0837H17.7082C18.0534 15.0837 18.3332 15.3635 18.3332 15.7087Z", "fill", "white"], ["value", "map"], ["width", "20", "height", "21", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 20 20", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 20 20"], ["type", "text/css"], ["d", "M13,17.8c-0.4,0-0.7-0.1-1-0.2l-4.4-2.2c-0.3-0.1-0.8-0.1-1,0l-2,1.1C3.9,17,3,17.1,2.3,16.7\n                           c-0.7-0.4-1-1.2-1-2.1V6.5c0-0.7,0.5-1.6,1.1-2l3.6-2.1c0.6-0.3,1.5-0.4,2.1-0.1l4.4,2.2c0.3,0.1,0.8,0.1,1,0l2-1.1\n                           c0.8-0.5,1.7-0.5,2.4-0.2c0.7,0.4,1,1.2,1,2.1v8.1c0,0.7-0.5,1.6-1.1,2l-3.6,2.1C13.9,17.7,13.5,17.8,13,17.8z M7.2,14.1\n                           c0.4,0,0.7,0.1,1,0.2l4.4,2.2c0.3,0.1,0.8,0.1,1,0l3.6-2.1c0.3-0.2,0.5-0.6,0.5-0.9V5.4c0-0.5-0.2-0.9-0.4-1.1\n                           c-0.3-0.2-0.7-0.1-1.2,0.2l-2,1.1C13.6,5.9,12.7,6,12,5.7L7.7,3.5c-0.3-0.1-0.8-0.1-1,0L3,5.6C2.8,5.7,2.5,6.2,2.5,6.5v8.1\n                           c0,0.5,0.2,0.9,0.4,1.1c0.3,0.2,0.7,0.1,1.2-0.2l2-1.1C6.4,14.2,6.8,14.1,7.2,14.1z", 1, "st0"], ["d", "M7.1,14.8c-0.3,0-0.6-0.3-0.6-0.6V3.3c0-0.3,0.3-0.6,0.6-0.6S7.7,3,7.7,3.3v10.8C7.7,14.5,7.5,14.8,7.1,14.8z", 1, "st0"], ["d", "M13.1,17.3c-0.3,0-0.6-0.3-0.6-0.6V5.5c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v11.1\n                           C13.7,17,13.4,17.3,13.1,17.3z", 1, "st0"], ["class", "tripMainBox", 4, "ngIf"], ["class", "tripMap", 4, "ngIf"], [3, "length", "pageSize", "showFirstLastButtons", "pageSizeOptions", "page"], ["paginator", ""], [1, "getRide", "mt-4", "mb-3"], ["class", "border-boxes d-flex justify-content-center", 3, "ngClass", 4, "ngFor", "ngForOf"], ["elseTemplate2", ""], [1, "border-boxes", "d-flex", "justify-content-center", 3, "ngClass"], [1, "msg", 3, "ngStyle"], [1, "roadFactor", "mt-3"], ["fxLayout", "row", 2, "width", "100%", "height", "15px"], ["class", "border-radius", 3, "fxFlex", "ngStyle", 4, "ngFor", "ngForOf"], [1, "border-radius", 3, "fxFlex", "ngStyle"], [1, "noDataMainBox"], [1, "noData"], ["src", "assets/images/nodata.png"], [2, "margin", "0 auto", 3, "diameter"], [1, "tripMainBox"], ["elseTemplate", ""], [3, "tableData", "toolTipData"], [1, "tripMap"], ["elseTemplate1", ""], [3, "tableData"]],
        template: function TripDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TripDashboardComponent_ng_container_5_Template, 6, 3, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TripDashboardComponent_ng_template_6_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-button-toggle-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TripDashboardComponent_Template_mat_button_toggle_group_change_19_listener($event) {
              return ctx.toggleChange($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-button-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-button-toggle", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "style", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " .st0 { fill: #C5CDD4; } ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TripDashboardComponent_div_35_Template, 4, 2, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TripDashboardComponent_div_36_Template, 4, 2, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-paginator", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function TripDashboardComponent_Template_mat_paginator_page_37_listener($event) {
              return ctx.pageChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "vehicleDrivenMost"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRoadTypeLoading)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, "t.tripHistory"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.tableView);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableView == "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableView == "map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.totalCount)("pageSize", ctx.limit)("showFirstLastButtons", true)("pageSizeOptions", ctx.pageSizeOptions);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggle"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultStyleDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _shared_components_trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_16__["TripHistoryComponent"], _shared_components_trip_history_map_trip_history_map_component__WEBPACK_IMPORTED_MODULE_17__["TripHistoryMapComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: [".mainBox[_ngcontent-%COMP%] {\n  padding: 19px 24px;\n  background-color: #ffffff;\n  border-radius: 11px;\n}\n.reading-block[_ngcontent-%COMP%], .reading-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 24px;\n}\n.tripHistory[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px -5px 123px rgba(87, 84, 160, 0.08);\n  border-radius: 8px;\n}\n.tripHistory[_ngcontent-%COMP%]   .tripHisTop[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 0.5px solid #e0e3e7;\n  padding: 18px 24px;\n}\n.tripHistory[_ngcontent-%COMP%]   .tripHisTop[_ngcontent-%COMP%]   .tripHisTopLeft[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: center;\n}\n.tripHistory[_ngcontent-%COMP%]   .tripHisTop[_ngcontent-%COMP%]   .tripHisTopLeft[_ngcontent-%COMP%]     .mat-button-toggle-checked {\n  background-color: #371986 !important;\n}\n.tripHistory[_ngcontent-%COMP%]   .tripHisTop[_ngcontent-%COMP%]   .tripTitle[_ngcontent-%COMP%] {\n  font: 700 16px/20px ModernEra_Bold;\n  color: #001e50;\n}\n.tripHistory[_ngcontent-%COMP%]   .tripMainBox[_ngcontent-%COMP%] {\n  padding: 22px 24px;\n}\n@media (max-width: 1200px) {\n  .tripHistory[_ngcontent-%COMP%]   .tripMainBox[_ngcontent-%COMP%] {\n    padding: 22px 20px;\n  }\n}\n.tripHistory[_ngcontent-%COMP%]   .tripMap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 550px;\n}\n.mat-progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 26px 26px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  letter-spacing: 0.22px;\n  width: 100%;\n}\n.noDataMainBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  .driveFast .mat-progress-bar-fill::after {\n  background-color: #FF7070 !important;\n}\n  .avgSpeed .mat-progress-bar-fill::after {\n  background-color: #00CBA0 !important;\n}\n  ngx-gauge .reading-block {\n  font: 24px/24px ModernEra !important;\n  color: #001e50;\n}\n  .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 13px 0 13px 0;\n}\n  .mat-select-value-text {\n  color: #1b194b;\n  font: 600 14px/17px ModernEra;\n}\n  .tripHisTop .mat-form-field {\n  width: 190px;\n}\n  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 35px;\n}\n  .mat-button-toggle-checked {\n  background-color: #0064ff;\n}\n  .mat-button-toggle-checked svg path {\n  fill: #ffffff !important;\n}\n  .mat-button-toggle-button svg path {\n  fill: #c5cdd4;\n}\n  .mainFilter .mat-expansion-panel-header .mat-expansion-indicator {\n  display: none;\n}\n@media (max-width: 1150px) {\n  .mapImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n}\n@media (min-width: 862px) and (max-width: 1250px) {\n  .behaviourSec[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n  }\n\n  .drivingBeh[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  .roadDistribution[_ngcontent-%COMP%] {\n    width: 205% !important;\n    order: 2 !important;\n  }\n\n  .filterBody[_ngcontent-%COMP%]   .filterBtn.resetBtn[_ngcontent-%COMP%] {\n    margin: 0 10px !important;\n  }\n}\n@media (min-width: 200px) and (max-width: 861px) {\n  .behaviourSec[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n  }\n\n  .drivingBeh[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  .roadDistribution[_ngcontent-%COMP%] {\n    width: 205% !important;\n    order: 2 !important;\n  }\n}\n.tripNoData[_ngcontent-%COMP%] {\n  line-height: 70px;\n  font: 600 16px/16px ModernEra;\n  color: #001e50;\n  margin: auto;\n}\n.border-radius[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  margin-left: -10px;\n}\n.border-radius[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.typeTitle[_ngcontent-%COMP%] {\n  color: #001e50;\n}\n.getRide[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  background: transparent !important;\n  padding: 0px;\n  width: calc(100% - 40px);\n}\n@media (max-width: 992px) {\n  .getRide[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: start;\n  }\n}\n.getRide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font: 600 13px/16px ModernEra !important;\n}\n@media (max-width: 1300px) {\n  .getRide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font: 600 10px/16px ModernEra !important;\n  }\n}\n@media (max-width: 1200px) {\n  .getRide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-right: 8px;\n  }\n}\n.getRide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-right: 0;\n}\n.getRide[_ngcontent-%COMP%]   div.ridOfmax1[_ngcontent-%COMP%] {\n  border: 0.5px solid #ed502e;\n}\n.getRide[_ngcontent-%COMP%]   div.busyRoad1[_ngcontent-%COMP%] {\n  border: 0.5px solid #604eff;\n}\n.getRide[_ngcontent-%COMP%]   div.quietRoad1[_ngcontent-%COMP%] {\n  border: 0.5px solid #ffea6c;\n}\n.getRide[_ngcontent-%COMP%]   div.buildUp1[_ngcontent-%COMP%] {\n  border: 0.5px solid #4dbfff;\n}\n.getRide[_ngcontent-%COMP%]   div.ridOfHighSpeed1[_ngcontent-%COMP%] {\n  border: 0.5px solid #2a1e91;\n}\n.getRide[_ngcontent-%COMP%]   div.black[_ngcontent-%COMP%] {\n  border: 0.5px solid #001e50;\n}\n.getRide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span.msg[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.border-boxes[_ngcontent-%COMP%] {\n  padding: 14px 30px;\n  margin-top: 10px;\n  border-radius: 27px;\n}\n@media (min-width: 1200px) and (max-width: 1398px) {\n  .border-boxes[_ngcontent-%COMP%] {\n    padding: 14px 20px;\n  }\n}\n@media (min-width: 200px) and (max-width: 1199px) {\n  .border-boxes[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n@media (min-width: 1600px) {\n  .border-boxes[_ngcontent-%COMP%] {\n    padding: 14px 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdHJpcC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNLRTtFQUNFLGtCQUFBO0VBQ0EseUJEREk7RUNFSixtQkFBQTtBQUhKO0FBeURBOztFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBdERGO0FBeURBO0VEMkdFLG1CQTFLTTtFQTJLTixrREFBQTtFQUNBLGtCQUFBO0FDaEtGO0FBc0RFO0VEMkRBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUMzREUsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBbERKO0FBb0RJO0VEMkRGLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUMzREksbUJBQUE7QUFoRE47QUFrRFE7RUFDRSxvQ0FBQTtBQWhEVjtBQXFESTtFQUNFLGtDQUFBO0VBQ0EsY0RoRlk7QUM2QmxCO0FBdURFO0VBQ0Usa0JBQUE7QUFyREo7QUFzREk7RUFGRjtJQUdJLGtCQUFBO0VBbkRKO0FBQ0Y7QUFzREU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQXBESjtBQXdEQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQXJERjtBQXdEQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQXJERjtBQXdEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBckRGO0FBeURBO0VBQ0Usb0NBQUE7QUF0REY7QUF5REE7RUFDRSxvQ0FBQTtBQXRERjtBQXlEQTtFQUNFLG9DQUFBO0VBQ0EsY0Q1SGdCO0FDc0VsQjtBQXlEQTtFQUNFLHNCQUFBO0FBdERGO0FBeURBO0VBQ0UsY0R6SU07RUMwSU4sNkJBQUE7QUF0REY7QUF5REE7RUFDRSxZQUFBO0FBdERGO0FBeURBO0VBQ0UsaUJBQUE7QUF0REY7QUF5REE7RUFDRSx5QkRoSmE7QUMwRmY7QUF5REk7RUFDRSx3QkFBQTtBQXZETjtBQStESTtFQUNFLGFBQUE7QUE1RE47QUFpRUE7RUFDRSxhQUFBO0FBOURGO0FBaUVBO0VBRUk7SUFDRSxXQUFBO0VBL0RKO0FBQ0Y7QUFrRUE7RUFDSTtJQUNFLHdCQUFBO0lBQ0EsOEJBQUE7SUFDQSxTQUFBO0VBaEVKOztFQWtFRTtJQUNFLHNCQUFBO0VBL0RKOztFQWlFRTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUE5REo7O0VBZ0VFO0lBQ0UseUJBQUE7RUE3REo7QUFDRjtBQStEQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSw4QkFBQTtJQUNBLFNBQUE7RUE3REY7O0VBK0RBO0lBQ0Usc0JBQUE7RUE1REY7O0VBOERBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQTNERjtBQUNGO0FBOERBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNEak5nQjtFQ2tOaEIsWUFBQTtBQTVERjtBQThEQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUEzREY7QUE0REU7RUFDRSxnQkFBQTtBQTFESjtBQWlFQTtFQUNFLGNEaE9nQjtBQ2tLbEI7QUFrRUE7RURoR0UsYUFBQTtFQUNBLDhCQUFBO0VDaUdBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUE5REY7QUErREU7RUFORjtJQU9JLGVBQUE7SUFDQSxzQkFBQTtFQTVERjtBQUNGO0FBNkRFO0VBQ0ksaUJBQUE7RUFDQSx3Q0FBQTtBQTNETjtBQTZETTtFQUpKO0lBS00sd0NBQUE7RUExRE47QUFDRjtBQTRETTtFQVJKO0lBU1EsaUJBQUE7RUF6RFI7QUFDRjtBQTJETTtFQUNJLGVBQUE7QUF6RFY7QUE0RE07RUFDSSwyQkFBQTtBQTFEVjtBQTZETTtFQUNJLDJCQUFBO0FBM0RWO0FBOERNO0VBQ0ksMkJBQUE7QUE1RFY7QUErRE07RUFDSSwyQkFBQTtBQTdEVjtBQWdFTTtFQUNJLDJCQUFBO0FBOURWO0FBaUVNO0VBQ0UsMkJBQUE7QUEvRFI7QUFrRk07RUFDSSxpQkFBQTtBQWhGVjtBQW9GQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWxGRjtBQW1GRTtFQUxGO0lBTUksa0JBQUE7RUFoRkY7QUFDRjtBQWlGRTtFQVJGO0lBU0ksa0JBQUE7RUE5RUY7QUFDRjtBQStFRTtFQVhGO0lBWUksa0JBQUE7RUE1RUY7QUFDRiIsImZpbGUiOiJ0cmlwLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qTkVXIENPTE9SIExJU1QqL1xuXG5cbiRsaWdodGJsdWU6ICMwMDU3ZmY7XG4kZHJha19CbHVlOiAjMjk2MmZmO1xuJHNibHVlOiAjMWIxOTRiO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGxpZ2h0YmxhY2s6ICMxNzFjMjI7XG4kbGlnaHRncmF5OiAjOTM5ZWFhO1xuJGZncmF5OiAjN2Q4NTkyO1xuJFNlY29uZGFyeV9ibGFjazogIzAwMWU1MDtcbiRQcmltYXJ5X0JsdWU6ICMwMDY0ZmY7XG4kU2Vjb25kYXJ5X0JsdWU6ICM2MDRlZmY7XG4kYnRuRXhwb3J0Qmx1ZTogIzRjNmZmZjtcbiRkYW5nZXI6ICNmZjcwNzA7XG4kU2Vjb25kYXJ5X0FsZXJ0czogIzAwY2JhMDtcbiRub0luZm86ICMxOGEwZmI7XG4kU2Vjb25kYXJ5X0Rhcms6ICMyYTFlOTE7XG4kZGFyazogIzMyMzMzODtcbiRib3JkZXJDb2xvcjogI2M1Y2RkNDtcbiRsaWdodFdoaXRlY29sb3I6ICNmOWZhZmI7XG4kZ3JvdXBCb3JkZXJEYXRhOiAjZTZlN2U4O1xuJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I6ICNlMGUzZTc7XG4kd2hpdGVTaGFkb3c6ICNlOWViZjA7XG4kc2t5Qmx1ZTogIzRkYmZmZjtcbiR5ZWxsb3c6ICNmZmVhNmM7XG4kb3JhbmdlOiAjZmY5OTUwO1xuJGJvZHlCYWNrR3JheTogI2ZkZmNmZjtcbiRsaWdodEJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuJGV4cG9ydEJ0bjogcmdiYSg5NiwgNzgsIDI1NSwgMC4xKTtcbiRkYW5nZXJCb3hCYWNrOiByZ2JhKDI1NSwgMTEyLCAxMTIsIDAuMSk7XG4kZ3JlZW5Cb3hCYWNrOiByZ2JhKDAsIDIwMywgMTYwLCAwLjEpO1xuJHRhYmxlT2RkQmFjazogI2ZiZmJmYjtcbiRTZWNvbmRhcnlfQmx1ZV9kYXJrOiAjNzU1NWNmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJG5pZ2h0VGV4dENvbG9yOiAjNDc0ZjVhO1xuJG5pZ2h0QmFja0JsYWNrOiAjNjY3MjgwO1xuJHdoaXRlQ29sb3I6ICNlMWUxZTE7XG4kcmVkQ29sb3I6ICNlZDUwMmU7XG4kZGFya19ncmF5OiAjYmRiZGJkO1xuJGhlbHBCdG5fQmx1ZTogIzYwMmFhYztcbiRkYXRlQ29sb3I6ICM0ZTVkNzg7XG4kZGF5Q29sb3I6ICM0ZTVkNzg3YTtcbiRyZWRBY3RpdmVDb2xvcjogI2ZhMTQ2NDtcbiR3aGl0ZUNvbG9yQmFjazogI2Y3ZmNmZjtcbiRibGFja0Rhcms6ICMyNzI3MmU7XG4kd2hpdGVHcmF5QmFjazogI2Y3ZmNmZjtcbi8vaW5wdXQgY3NzXG4kYm9yZGVyQ29sb3JMaWdodDogI2U4ZWNlZTtcbiRib3JkZXJDb2xvckdyYXk6ICNlZWVkZjA7XG4kbGlnaHRXaGl0ZTogI2U1ZWVmZjtcbiRidG5EZWZhdWx0V2hpdGU6ICNmNGY2Zjg7XG4kbWF0Qm9yZGVyOiAjZTZlN2U4O1xuXG4kdG9nZ2xlQWN0aXZlOiAjMzcxOTg2O1xuXG4vL3JnYmEgY3NzXG4kYmVoYXZpb3VyQmFjazogcmdiYSg5NiwgNzgsIDI1NSwgMC4wOCk7XG4kbW9udGhTaG93QmFjazogcmdiYSg4NiwgNjYsIDI1NSwgMC4xKTtcbiRib3hTaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4kYmFja0RhbmdlcjogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjQpO1xuJGJhY2tHcmVlbjogcmdiKDAgMjAzIDE2MCAvIDE1JSk7XG4kc2FmZVNjb3JlQmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGJhY2tHcmF5Q29tbW9uOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuMDUpO1xuJHF1aXRlUm9hZDogI2ZmZWE2YztcblxuLy9uZXcgY29sb3IgdmVyc2lvbjJcbiRyZWRFeGNlcHRpb246ICNmYTE0NjQ7XG4kYm94c2hhZG93OiAwcHggOHB4IDI1cHggcmdiYSg5OCwgOTgsIDk4LCAwLjA1KTtcbiR0b29sdGlwc1RleHRDb2xvcjogIzE2MTkyYztcblxuLy9ib3ggZ3JhZGlhbnQgQmFja2dyb3VuZFxuJHZlaGljYWxCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoMTM0LjkyZGVnLCAjODFiYmZmIC00LjIlLCAjMDA4NWZmIDk5LjM3JSk7XG4kZHJpdmVuQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNWE2YmZmIDAuNjklLCAjNjA0ZWZmIDEwMi4yJSk7XG4kYmVoYXZpb3VyQm94QmFjazogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjOGM0NmZmIDAuNjklLCAjZmY4MDgwIDEwMi4yJSk7XG4kZXZCbG9ja0JveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzM5ZDBmZiAtMTguNTYlLCAjZmZlOTc3IDEwMi4xNyUpO1xuJGljZUJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuXG4vL2JveCB2MiBncmFkaWFudCBCYWNrZ3JvdW5kXG4kaWNlQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2YwODI1ZCAtMTguNTYlLCAjZmY5OTUwIDEwMi4xNyUpO1xuJGRyaXZlckJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgIzM2NTZmZiAxMDIuMTclKTtcbiRraWxvbWV0ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzMy4zOWRlZywgIzQ5ODVmOCAtNC4yMiUsICM0ZGJmZmYgMTA0LjI0JSk7XG4kc2FmZURyaXZpbmdCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjNDVjOGYxIC0xOC41NiUsICNlZWUwOTcgMTAyLjE3JSk7XG4kZHJpdmVyMUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTIuNjlkZWcsICM3NmQ2ZWUgMC42OSUsICM3Njk4ZGIgMTAyLjIlKTtcbiR0cmlwQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgI2MyYTNhMCAtMTguNTYlLCAjZTljOGE3IDEwMi4xNyUpO1xuJHZlaGljbGVCb3hWMjogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgI2RmOTg5NSAtNC4yJSwgI2MyYTNhMCAxMDguMTUlKTtcblxuLy9zY3JvbGwgYmFyIGNvbG9yIGNvZGVcbiRzY3JvbGxCbGFjazogIzg4ODtcbiRzY3JvbGxXaGl0ZTogI2YxZjFmMTtcbiRzY3JvbGxIb3ZlckJsYWNrOiAjNTU1O1xuXG4vL3doaXRlIGxhYmVsIGZsZWFkIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojRUZBOTUyO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG5cbi8vd2hpdGUgbGFiZWwgZGhsIGNvbG9yXG4vLyAkV2hpdGVfbGFiaW5nX0JsYWNrOiMwMDAwMDA7XG4vLyAkV2hpdGVfbGFiaW5nX1llbGxvdzojZDQwNTExO1xuLy8gJFdoaXRlX2xhYmluZ19za3lCbHVlOiM0REJGRkY7XG4vLyAkV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiNFRUY5RkY7XG4vLyAkd2hpdGVfbGFiaW5nX3llbGxvd2Rhcms6I0ZGQ0MwMDtcblxuLy93aGl0ZSBsYWJlbCBaZWdvIGNvbG9yXG4kV2hpdGVfbGFiaW5nX0JsYWNrOiAjMDAwMDAwO1xuJFdoaXRlX2xhYmluZ19ZZWxsb3c6ICMzNzE5ODc7XG4kV2hpdGVfbGFiaW5nX3NreUJsdWU6ICM0ZGJmZmY7XG4kV2hpdGVfbGFiaW5nX2JhY2tHcmF5OiAjZWVmOWZmO1xuJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiAjZmZjYzAwO1xuJGNvbG9yX3Zpb2xldDogIzg3NzViNztcbiRjb2xvcl92aW9sZXRfZGFyazogIzMyMTk4NztcbiRjb2xvcl9saWdodF9ncmV5OiAjZTVlNWU1O1xuJGNvbG9yLXZpb2xldC1saWdodDogI2FjOTRlZTtcbiRjb2xvci1ibHVlLWxpZ2h0OiAjZjVmNWY1O1xuJGNvbG9yLXRhYmxlLWhlYWRpbmc6ICMyNzI1MmQ7XG4kdHJpcEhpc3RCYWNrOiByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuMDUpO1xuJHNhZmVCYWNrQ29sb3I6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMDUpO1xuJGNvbG9yX2xpZ2h0X2JsdWU6ICM0NWNiZmM7XG4kY29sb3JfZ3JhcGhfdm9pbGV0OiAjMzcxYTg3O1xuXG4vL2dyYWRpYW50IEJhY2tncm91bmRcbiRlcnJvckdyYWRpYW50OiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMGRlZyxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXG4gICksXG4gICNmNDQzMzY7XG5cbkBtaXhpbiBmbGV4LWp1c3RpZnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGZsZXgtc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5AbWl4aW4gZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWl4aW4gZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbkBtaXhpbiAgbGluZS1jbGFtcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I7XG59XG5cbkBtaXhpbiBidG5GaWx0ZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbkBtaXhpbiBtc2cge1xuICBmb250OiAxMnB4LzE4cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweCAzMHB4O1xuICBjb2xvcjogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG5AbWl4aW4gbWFpbkJveHdpdGhCYWNrIHtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggLTVweCAxMjNweCByZ2JhKDg3LCA4NCwgMTYwLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLy8gQG1peGluIGJ1dHRvbi1ncmVlbiB7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogIzExRDBBMjtcbi8vIGJvcmRlci1yYWRpdXM6IDE0NXB4O1xuLy8gZm9udC13ZWlnaHQgOiA2MDA7XG4vLyBmb250LXNpemUgOiAxNXB4O1xuLy8gbGluZS1oZWlnaHQgOiAxOHB4O1xuLy8gY29sb3IgOiAjZmZmZmZmO1xuLy8gfVxuXG4vLyBAbWl4aW4gYnV0dG9uLWJsdWUge1xuLy8gZm9udCA6IDEzcHgvMTZweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBiYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM3NTU1Q0YsICM3NTU1Q0YpLCAjNjQzRkMwO1xuLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbi8vIG1heC13aWR0aCA6IDE0MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogMzhweDtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1yZWQge1xuLy8gZm9udCA6IDE2cHgvMjBweCBNb2Rlcm5FcmE7XG4vLyBjb2xvciA6ICNGRkZGRkY7XG4vLyBib3JkZXItcmFkaXVzOiAxMDBweDtcbi8vIG1heC13aWR0aCA6IDI1MHB4O1xuLy8gd2lkdGggOiAxMDAlO1xuLy8gaGVpZ2h0IDogNTBweDtcbi8vIGJhY2tncm91bmQgOiAjRkY2NTY1O1xuLy8gfVxuIiwiQGltcG9ydCBcIi4uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4vLyAuYmVoYXZpb3VyU2VjIHtcbi8vICAgQGluY2x1ZGUgZmxleC1qdXN0aWZ5O1xuXG4gIC5tYWluQm94IHtcbiAgICBwYWRkaW5nOiAxOXB4IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gICAgLy8gJi5zY29yZV9jaGFydHtcbiAgICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyB9XG4gICAgLy8gJi5kcml2aW5nQmVoIHtcbiAgICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyAgIGhlaWdodDogMTg2cHg7XG4gICAgLy8gICB3aWR0aDogMjUwcHg7XG4gICAgIFxuXG4gICAgLy8gICAuZGV0YWlsVGl0bGUge1xuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgIGJvdHRvbTogMjBweDtcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vICAgICB3aWR0aDogMjAycHg7XG4gICAgLy8gICAgIGZvbnQ6IDIwcHgvMjRweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgICAvLyAgICAgQGluY2x1ZGUgZWxsaXBzaXM7XG4gICAgLy8gICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIC8vIC5tc2cge1xuICAgIC8vICAgQGluY2x1ZGUgbXNnO1xuICAgIC8vICAgcGFkZGluZzogM3B4IDhweDtcblxuICAgIC8vICAgJi5leHRyYVBhZGRpbmcge1xuICAgIC8vICAgICBwYWRkaW5nOiA0cHggMTRweDtcbiAgICAvLyAgICAgZm9udDogMTRweC8yNHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgICBcbiAgICB9XG4gIFxuXG4gICAgLy8gJi5kcml2aW5nQmVoIHtcblxuICAgIC8vICAgLy8gcGFkZGluZzogNXB4IDA7XG4gICAgLy8gICAuZmlyc3RoYWxkZiB7XG4gICAgLy8gICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAvLyAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgIC8vICAgICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b207XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBoNCB7XG4gICAgLy8gICAgICAgZm9udDogNjAwIDE0cHgvMjRweCBNb2Rlcm5FcmE7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cblxuXG4ucmVhZGluZy1ibG9jayxcbi5yZWFkaW5nLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi50cmlwSGlzdG9yeSB7XG4gIEBpbmNsdWRlIG1haW5Cb3h3aXRoQmFjaztcblxuICAudHJpcEhpc1RvcCB7XG4gICAgQGluY2x1ZGUgZmxleC1qdXN0aWZ5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2UwZTNlNztcbiAgICBwYWRkaW5nOiAxOHB4IDI0cHg7XG5cbiAgICAudHJpcEhpc1RvcExlZnQge1xuICAgICAgQGluY2x1ZGUgZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICA6Om5nLWRlZXB7XG4gICAgICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b2dnbGVBY3RpdmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50cmlwVGl0bGUge1xuICAgICAgZm9udDogNzAwIDE2cHgvMjBweCBNb2Rlcm5FcmFfQm9sZDtcbiAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgIH1cbiAgfVxuXG4gIC50cmlwTWFpbkJveCB7XG4gICAgcGFkZGluZzogMjJweCAyNHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOjEyMDBweCl7XG4gICAgICBwYWRkaW5nOiAyMnB4IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLnRyaXBNYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTUwcHg7XG4gIH1cbn1cblxuLm1hdC1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHggMjZweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBsZXR0ZXItc3BhY2luZzogMC4yMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vRGF0YU1haW5Cb3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gbWluLWhlaWdodDogMTEwcHg7XG59XG5cbjo6bmctZGVlcCAuZHJpdmVGYXN0IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzA3MCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmF2Z1NwZWVkIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQ0JBMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgbmd4LWdhdWdlIC5yZWFkaW5nLWJsb2NrIHtcbiAgZm9udDogMjRweC8yNHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMTNweCAwIDEzcHggMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlLXRleHQge1xuICBjb2xvcjogJHNibHVlO1xuICBmb250OiA2MDAgMTRweC8xN3B4IE1vZGVybkVyYTtcbn1cblxuOjpuZy1kZWVwIC50cmlwSGlzVG9wIC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxOTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRQcmltYXJ5X0JsdWU7XG5cbiAgc3ZnIHtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiB7XG4gIC8vIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgc3ZnIHtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICNjNWNkZDQ7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCAubWFpbkZpbHRlciAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6MTE1MHB4KSB7XG4gIC5tYXBJbWd7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDo4NjJweCkgYW5kIChtYXgtd2lkdGg6MTI1MHB4KSB7XG4gICAgLmJlaGF2aW91clNlY3tcbiAgICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGdhcDogMjBweDtcbiAgICB9XG4gICAgLmRyaXZpbmdCZWh7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucm9hZERpc3RyaWJ1dGlvbntcbiAgICAgIHdpZHRoOiAyMDUlICFpbXBvcnRhbnQ7XG4gICAgICBvcmRlcjogMiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZmlsdGVyQm9keSAuZmlsdGVyQnRuLnJlc2V0QnRue1xuICAgICAgbWFyZ2luOiAwIDEwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDoyMDBweCkgYW5kIChtYXgtd2lkdGg6ODYxcHgpIHtcbiAgLmJlaGF2aW91clNlY3tcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMjBweDtcbiAgfVxuICAuZHJpdmluZ0JlaHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5yb2FkRGlzdHJpYnV0aW9ue1xuICAgIHdpZHRoOiAyMDUlICFpbXBvcnRhbnQ7XG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcbiAgfVxufVxuXG4udHJpcE5vRGF0YXtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIGZvbnQ6IDYwMCAxNnB4LzE2cHggTW9kZXJuRXJhO1xuICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJvcmRlci1yYWRpdXN7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgJjpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC8vICY6bGFzdC1jaGlsZHtcbiAgLy8gICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcbiAgLy8gfVxuXG59XG4udHlwZVRpdGxle1xuICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgLy8gZm9udDogMTRweC8yNHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xufVxuXG4uZ2V0UmlkZSB7XG4gIEBpbmNsdWRlIGZsZXgtc3BhY2UtYmV0d2VlbjsgXG4gIGZsZXgtd3JhcDogbm93cmFwOyAgICAgXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICB9XG4gIGRpdiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIGZvbnQ6IDYwMCAxM3B4LzE2cHggTW9kZXJuRXJhICFpbXBvcnRhbnQ7XG4gICAgICAvLyBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpe1xuICAgICAgICBmb250OiA2MDAgMTBweC8xNnB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgJi5yaWRPZm1heDEge1xuICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgJHJlZENvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmJ1c3lSb2FkMSB7XG4gICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAkU2Vjb25kYXJ5X0JsdWU7XG4gICAgICB9XG5cbiAgICAgICYucXVpZXRSb2FkMSB7XG4gICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAkcXVpdGVSb2FkO1xuICAgICAgfVxuXG4gICAgICAmLmJ1aWxkVXAxIHtcbiAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICRza3lCbHVlO1xuICAgICAgfVxuXG4gICAgICAmLnJpZE9mSGlnaFNwZWVkMSB7XG4gICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAkU2Vjb25kYXJ5X0Rhcms7XG4gICAgICB9XG5cbiAgICAgICYuYmxhY2sge1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgfSAgICAgIFxuXG4gICAgICAvLyAmLmJyYWtpbmcge1xuICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRkYW5nZXI7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vICYud2FybmluZyB7XG4gICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gJi5zcGVlZCB7XG4gICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJFNlY29uZGFyeV9BbGVydHM7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vICYuaWRpbGluZyB7XG4gICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdztcbiAgICAgIC8vIH1cblxuICAgICAgc3Bhbi5tc2cge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICB9XG59XG4uYm9yZGVyLWJveGVze1xuICAvLyBtYXgtd2lkdGg6IDI0MHB4O1xuICBwYWRkaW5nOiAxNHB4IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOThweCl7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOjIwMHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KXtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6MTYwMHB4KSB7XG4gICAgcGFkZGluZzogMTRweCA0NXB4O1xuICB9XG4gIC8vIEBtZWRpYSAobWF4LXdpZHRoOiAxMzk4cHgpe1xuICAvLyAgIHBhZGRpbmc6IDE0cHggMTBweDtcbiAgLy8gfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-trip-dashboard',
            templateUrl: './trip-dashboard.component.html',
            styleUrls: ['./trip-dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
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
    "OQqv":
    /*!******************************************************************************!*\
      !*** ./src/app/main/fleetOverview/trip/trip-detail/trip-detail.component.ts ***!
      \******************************************************************************/

    /*! exports provided: TripDetailComponent, DialogContentExampleDialog */

    /***/
    function OQqv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TripDetailComponent", function () {
        return TripDetailComponent;
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


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! chart.js */
      "m0r1");
      /* harmony import */


      var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! chartjs-plugin-zoom */
      "c3W2");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/config/app-config */
      "Tr6M");
      /* harmony import */


      var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! chartjs-plugin-datalabels */
      "2fpa");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_trip_detail_map_trip_detail_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/components/trip-detail-map/trip-detail-map.component */
      "cb5u");
      /* harmony import */


      var ngx_gauge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-gauge */
      "Mumg");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["firstAccordion"];

      function TripDetailComponent_div_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.service.convertToDutch(ctx_r0.tripDetail == null ? null : ctx_r0.tripDetail.safe_score) || "NA", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "vehScore"));
        }
      }

      function TripDetailComponent_div_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.tripDetail == null ? null : ctx_r1.tripDetail.license_plate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "v.license"));
        }
      }

      function TripDetailComponent_ng_container_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r2.gaugeType)("value", ctx_r2.speed)("thick", 15)("size", 100)("min", ctx_r2.gaugeMin)("max", ctx_r2.gaugeMax)("thresholds", ctx_r2.thresholdConfig);
        }
      }

      function TripDetailComponent_ng_template_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TripDetailComponent_ng_container_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r5.gaugeType)("value", ctx_r5.cornering)("thick", 15)("size", 100)("min", ctx_r5.gaugeMin)("max", ctx_r5.gaugeMax)("thresholds", ctx_r5.thresholdConfig);
        }
      }

      function TripDetailComponent_ng_template_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TripDetailComponent_ng_container_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r8.gaugeType)("value", ctx_r8.acceleration)("thick", 15)("size", 100)("min", ctx_r8.gaugeMin)("max", ctx_r8.gaugeMax)("thresholds", ctx_r8.thresholdConfig);
        }
      }

      function TripDetailComponent_ng_template_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TripDetailComponent_ng_container_137_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r11.gaugeType)("value", ctx_r11.braking)("thick", 15)("size", 100)("min", ctx_r11.gaugeMin)("max", ctx_r11.gaugeMax)("thresholds", ctx_r11.thresholdConfig);
        }
      }

      function TripDetailComponent_ng_template_138_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TripDetailComponent_ng_container_145_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r14.gaugeType)("value", ctx_r14.idling)("thick", 15)("size", 100)("min", ctx_r14.gaugeMin)("max", ctx_r14.gaugeMax)("thresholds", ctx_r14.thresholdConfig);
        }
      }

      function TripDetailComponent_ng_template_146_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TripDetailComponent_div_212_mat_expansion_panel_17_div_14_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r25.formatToFixed(alert_r23 == null ? null : alert_r23.violation_rate, 2) || "0", " km/h > ", ctx_r25.formatToFixed(alert_r23 == null ? null : alert_r23.limit, 2) || "0", "km/h");
        }
      }

      function TripDetailComponent_div_212_mat_expansion_panel_17_div_14_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r26.formatToFixed(alert_r23 == null ? null : alert_r23.violation_rate, 1), " G > ", ctx_r26.formatToFixed(alert_r23 == null ? null : alert_r23.limit, 1), " G ");
        }
      }

      function TripDetailComponent_div_212_mat_expansion_panel_17_div_14_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r27.service.convertHMS(alert_r23 == null ? null : alert_r23.violation_rate), " > ", ctx_r27.service.convertHMS(alert_r23 == null ? null : alert_r23.limit), " ");
        }
      }

      function TripDetailComponent_div_212_mat_expansion_panel_17_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "style", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " .st0 { fill: #474F5A; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TripDetailComponent_div_212_mat_expansion_panel_17_div_14_span_12_Template, 2, 2, "span", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TripDetailComponent_div_212_mat_expansion_panel_17_div_14_span_13_Template, 2, 2, "span", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TripDetailComponent_div_212_mat_expansion_panel_17_div_14_span_14_Template, 2, 2, "span", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TripDetailComponent_div_212_mat_expansion_panel_17_div_14_Template_p_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var alert_r23 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r31.singleExceptionShow(alert_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "style", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " .st0 { fill: #C5CDD4; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r23 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.dateTimeFormat(alert_r23.start_time), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", alert_r23.score_type == "speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", alert_r23.score_type == "acceleration" || alert_r23.score_type == "breaking" || alert_r23.score_type == "cornering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", alert_r23.score_type == "idling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.service.convertHMS(alert_r23 == null ? null : alert_r23.duration_seconds));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r22.formatToFixed(alert_r23.distance, 2), " km");
        }
      }

      function TripDetailComponent_div_212_mat_expansion_panel_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 104, 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TripDetailComponent_div_212_mat_expansion_panel_17_div_14_Template, 29, 6, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r20 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideToggle", ctx_r19.hideToggle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r19.tripDetail == null ? null : ctx_r19.tripDetail.license_plate, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.exceptionTypeObj[item_r20]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r19.service.convertHMS(ctx_r19.exceptionArray[item_r20].total_time), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r19.formatToFixed(ctx_r19.exceptionArray[item_r20].distance, 2), " km");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.exceptionArray[item_r20].length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.exceptionArray[item_r20]);
        }
      }

      function TripDetailComponent_div_212_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-accordion", 101, 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TripDetailComponent_div_212_mat_expansion_panel_17_Template, 15, 7, "mat-expansion-panel", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r17.exceptionCount, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "harshEvent"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMode", ctx_r17.displayMode)("multi", ctx_r17.multi);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.exceptionKeys);
        }
      }

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

      function DialogContentExampleDialog_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "t.accProfile"));
        }
      }

      var _c1 = ".mat-expansion-Common[_ngcontent-%COMP%]   .driverName[_ngcontent-%COMP%] {\n  flex-basis: calc(28% - 10px);\n  max-width: calc(28% - 10px);\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  background: rgba(135, 135, 135, 0.05);\n  border-radius: 6px;\n  padding: 8px 9px;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .driverName[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 22px;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .driverName[_ngcontent-%COMP%]   .dName[_ngcontent-%COMP%] {\n  width: calc(100% - 67px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #474f5a;\n  font: 700 14px/18px ModernEra;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .speedingPoint[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .speedingPoint[_ngcontent-%COMP%]   .speedTitle[_ngcontent-%COMP%] {\n  font: 700 12px/18px ModernEra;\n  color: #474f5a;\n  margin-right: 10px;\n  position: relative;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .speedingPoint[_ngcontent-%COMP%]   .speedTitle[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  content: \"\";\n  border-radius: 50%;\n  height: 13px;\n  width: 13px;\n  margin-right: 6px;\n  background-color: #ed502e;\n  \n  position: absolute;\n  top: 1px;\n  left: -18px;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .speedingPoint[_ngcontent-%COMP%]   .exceptionName[_ngcontent-%COMP%] {\n  font: 600 12px/18px ModernEra;\n  color: #474f5a;\n  width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .speedingPointBody[_ngcontent-%COMP%] {\n  flex-basis: calc(22% - 10px);\n  max-width: calc(22% - 10px);\n  margin-right: 10px;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .timeSec[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #001e50;\n  font: 600 14px/18px ModernEra;\n  margin-right: 5px;\n  text-align: center;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .timeSec.timewithMin[_ngcontent-%COMP%] {\n  width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .lantlong[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  max-width: 35px;\n  width: 100%;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%] {\n  background: rgba(135, 135, 135, 0.05);\n  border-radius: 6px;\n  padding: 11px 10px;\n  margin-bottom: 16px;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-bottom: 0;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .eventName[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: center;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .eventName[_ngcontent-%COMP%]   .exceptiodetail[_ngcontent-%COMP%] {\n  width: 233px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font: 500 11px/24px ModernEra;\n  color: #001e50;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .exceptionTitle[_ngcontent-%COMP%] {\n  color: #474f5a;\n  font: 600 11px/18px ModernEra;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .exceptionTitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 11px/24px ModernEra;\n  color: #001e50;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .exceptionDate[_ngcontent-%COMP%] {\n  color: #474f5a;\n  font: 700 12px/18px ModernEra;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .exceptionDate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  width: 17px;\n  height: 17px;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .exceptionDate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #474f5a;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .matCommon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: center;\n  width: calc(100% - 38px);\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .mapIcon[_ngcontent-%COMP%] {\n  max-width: 38px;\n  width: 100%;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .timeSecBody[_ngcontent-%COMP%] {\n  font: 600 11px/18px ModernEra;\n  color: #001e50;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .timeSecBody[_ngcontent-%COMP%]:nth-last-child(1) {\n  padding: 0 0 0 5px;\n}\n.mat-expansion-Common[_ngcontent-%COMP%]   .mat-expansion-Common-Body[_ngcontent-%COMP%]   .exceptionDetail[_ngcontent-%COMP%]   .timeDateDesc[_ngcontent-%COMP%] {\n  font: 700 12px/18px ModernEra;\n  color: #0064ff;\n  flex-basis: calc(28% - 10px);\n  max-width: calc(28% - 10px);\n  margin-right: 10px;\n}\n.tripHisTop[_ngcontent-%COMP%] {\n  padding: 18px 24px 0;\n}\n.tripHisTop[_ngcontent-%COMP%]   .tripHisTopLeft[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.tripHisTop[_ngcontent-%COMP%]   .tripTitle[_ngcontent-%COMP%] {\n  font: 600 16px/20px ModernEra;\n  color: #474f5a;\n}\n.tripHisTop[_ngcontent-%COMP%]   .tripTitle[_ngcontent-%COMP%]   .countValue[_ngcontent-%COMP%] {\n  font: 600 14px/18px ModernEra;\n  color: #ff7070;\n}\n.relBox[_ngcontent-%COMP%] {\n  min-height: 250px;\n}\n#chartDiv[_ngcontent-%COMP%] {\n  display: block;\n}\n  .mat-button-toggle-button svg path {\n  fill: #c5cdd4;\n}\n  .mat-button-toggle-checked {\n  background-color: #371986;\n}\n  .mat-button-toggle-checked svg path {\n  fill: #ffffff !important;\n}\n  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 35px;\n}\n.naData[_ngcontent-%COMP%] {\n  height: 57%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.selected-box[_ngcontent-%COMP%] {\n  background: rgba(0, 203, 160, 0.1) !important;\n  border-radius: 8px !important;\n}\n.selected-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 700 18px/20px ModernEra_Bold !important;\n  color: #00cba0 !important;\n}\n.selected-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font: 700 14px/20px ModernEra_Bold !important;\n  color: #00cba0 !important;\n}\n@media (max-width: 1160px) {\n  .dayNightSec[_ngcontent-%COMP%] {\n    position: unset !important;\n  }\n}\n\n.detailPageTrip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  margin-bottom: 20px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .mapShow[_ngcontent-%COMP%] {\n  flex-basis: calc(35%);\n  max-width: calc(35%);\n  background: #ffffff;\n  box-shadow: 0px -5px 123px rgba(87, 84, 160, 0.08);\n  border-radius: 8px;\n  background-color: gray;\n  height: 830px;\n  width: 100%;\n}\n@media (max-width: 1400px) {\n  .detailPageTrip[_ngcontent-%COMP%]   .mapShow[_ngcontent-%COMP%] {\n    flex-basis: calc(100%);\n    max-width: calc(100%);\n    height: 500px;\n  }\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%] {\n  flex-basis: calc(65% - 20px);\n  max-width: calc(65% - 20px);\n}\n@media (min-width: 1400px) {\n  .detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%] {\n    max-height: 830px;\n    height: 100%;\n    overflow-y: scroll;\n    margin-right: 20px;\n  }\n}\n@media (max-width: 1400px) {\n  .detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%] {\n    flex-basis: calc(100%);\n    max-width: calc(100%);\n    margin-right: 0;\n  }\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetails[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px -5px 123px rgba(87, 84, 160, 0.08);\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailHead[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0px 0px;\n  padding: 8px 30px;\n  background-color: #604eff;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailHead[_ngcontent-%COMP%]   .tripDetailTitle[_ngcontent-%COMP%] {\n  font: 700 14px/18px ModernEra;\n  color: #ffffff;\n  margin-bottom: 0;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailHead[_ngcontent-%COMP%]   .exportRightIcon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]     mat-expansion-panel-header {\n  padding: 0 7px 0 0px !important;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]     mat-expansion-panel .mat-content {\n  justify-content: space-around !important;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  background-color: #ffffff;\n  padding: 7px 8px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 12px;\n  position: relative;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 13px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #001e50;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \" \";\n  transform: translate(50%);\n  border: 1px dashed #001e50;\n  top: 28px;\n  left: 10px;\n  height: 38px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(1)::after {\n  display: none;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-bottom: 0;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 13px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fromTitle[_ngcontent-%COMP%] {\n  font: 700 12px/18px ModernEra_Bold;\n  color: #001e50;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fromTo[_ngcontent-%COMP%] {\n  width: 36px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .timeDesc[_ngcontent-%COMP%] {\n  font: 700 10px/18px ModernEra_Bold;\n  color: #001e50;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .mt-14[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailTopBox[_ngcontent-%COMP%]   .tripDetailBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .mt3[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  width: calc(100% - 37px);\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailBoxes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailBoxes[_ngcontent-%COMP%]   .tripBoxFields[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #f9fafb;\n  border-radius: 8px;\n  flex-basis: calc(50% - 7px);\n  max-width: calc(50% - 7px);\n  margin: 0 14px 16px 0;\n  padding: 40px 9px;\n  text-align: center;\n  max-height: 123px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailBoxes[_ngcontent-%COMP%]   .tripBoxFields[_ngcontent-%COMP%]:nth-child(2n+0) {\n  margin-right: 0;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailBoxes[_ngcontent-%COMP%]   .tripId[_ngcontent-%COMP%] {\n  font: 700 14px/16px ModernEra_Bold;\n  margin-bottom: 9px;\n  color: #0064ff;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .tripDetailBoxes[_ngcontent-%COMP%]   .tripDesc[_ngcontent-%COMP%] {\n  font: 700 12px/18px ModernEra_Bold;\n  color: #001e50;\n  margin-bottom: 0;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .noData[_ngcontent-%COMP%] {\n  margin: 0 auto 5px;\n  text-align: center;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .maintopBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .maintopBox[_ngcontent-%COMP%]   .tripdetailBox[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  max-width: calc(50% - 10px);\n  margin: 0 20px 0 0;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .maintopBox[_ngcontent-%COMP%]   .tripdetailBox[_ngcontent-%COMP%]:nth-child(even) {\n  margin-right: 0;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .dayNightSec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .dayNightSec[_ngcontent-%COMP%]   .dayNightHeading[_ngcontent-%COMP%] {\n  font: 700 13px/18px ModernEra_Bold;\n  color: #001e50;\n  margin-bottom: 10px;\n  margin-top: 7px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .dayNightSec[_ngcontent-%COMP%]   .dayNightBox[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 15px);\n  max-width: calc(50% - 15px);\n  margin: 0 15px 0 0;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .dayNightSec[_ngcontent-%COMP%]   .dayNightBox.chart[_ngcontent-%COMP%]:hover {\n  border: 1px solid #e0e3e7;\n  border-radius: 8px;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .dayNightSec[_ngcontent-%COMP%]   .dayNightBox[_ngcontent-%COMP%]:nth-child(even) {\n  margin-left: 15px;\n  margin-right: 0;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .dayNightSec[_ngcontent-%COMP%]   .dayNightBox[_ngcontent-%COMP%]   .commonBox[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 16px 10px;\n  max-height: 50px;\n  text-align: center;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .dayNightSec[_ngcontent-%COMP%]   .dayNightBox[_ngcontent-%COMP%]   .commonBox.night[_ngcontent-%COMP%] {\n  background: #667280;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .dayNightSec[_ngcontent-%COMP%]   .dayNightBox[_ngcontent-%COMP%]   .commonBox.night[_ngcontent-%COMP%]   .nightDetail[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font: 700 14px/18px ModernEra_Bold;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .dayNightSec[_ngcontent-%COMP%]   .dayNightBox[_ngcontent-%COMP%]   .commonBox.day[_ngcontent-%COMP%] {\n  background: #e0e3e7;\n  font: 700 14px/18px ModernEra_Bold;\n}\n.detailPageTrip[_ngcontent-%COMP%]   .tripDetailsLeft[_ngcontent-%COMP%]   .dayNightSec[_ngcontent-%COMP%]   .dayNightBox[_ngcontent-%COMP%]   .commonBox.day[_ngcontent-%COMP%]   .nightDetail[_ngcontent-%COMP%] {\n  color: #474f5a;\n  font: 700 14px/18px ModernEra;\n}\n\n.safeScoreBox[_ngcontent-%COMP%] {\n  background: rgba(0, 203, 160, 0.1);\n  border-radius: 6px;\n  margin-bottom: 15px;\n  padding: 9px;\n  font: 600 12px/18px ModernEra;\n  color: #00cba0;\n  text-align: center;\n}\n.safeScoreBox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 9px;\n}\n.safeScoreBox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #00cba0;\n}\n.safeScoreBox[_ngcontent-%COMP%]   .SafeScore[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  font: 700 14px/16px ModernEra;\n}\n.timeDistBox[_ngcontent-%COMP%] {\n  background: #f4f6f8;\n  border-radius: 7px;\n  margin-bottom: 12px;\n  padding: 10px;\n  font: 700 12px/18px ModernEra_Bold;\n  color: #001e50;\n}\n.timeDistBox[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-bottom: 0;\n}\n.timeDistBox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 7px;\n}\n.timeDistBox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #001e50;\n}\n.timeDistBox[_ngcontent-%COMP%]   .timeDistTitle[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font: 700 14px/16px ModernEra;\n}\n.graphTab__checkbox[_ngcontent-%COMP%] {\n  display: flex;\n}\n.graphTab__checkbox__safeScore[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n}\n.graphTab__checkbox__safeScore[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font: 700 10px/12px ModernEra;\n  color: #001e50;\n}\n.graphTab__checkbox__safeScore[_ngcontent-%COMP%]   .checkbox-dynamic[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n  height: 14px;\n  width: 14px;\n  background: #001e50;\n  border-radius: 2px;\n}\n.graphTab__checkbox__safeScore[_ngcontent-%COMP%]   .checkbox-dynamic.activeSafeScore[_ngcontent-%COMP%] {\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.graphTab__checkbox__otherScore[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  margin-left: 10px;\n}\n.graphTab__checkbox__otherScore.limit[_ngcontent-%COMP%]   .checkbox-dynamic-second[_ngcontent-%COMP%] {\n  background: #00cba0 !important;\n}\n.graphTab__checkbox__otherScore.limit[_ngcontent-%COMP%]   .checkbox-dynamic-second.activeOther[_ngcontent-%COMP%] {\n  background-image: url('Check.svg') !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n.graphTab__checkbox__otherScore.limit[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #00cba0;\n}\n.graphTab__checkbox__otherScore[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font: 700 10px/12px ModernEra_Bold;\n  color: #939eaa;\n}\n.graphTab__checkbox__otherScore[_ngcontent-%COMP%]   .checkbox-dynamic-second[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  background: #939eaa;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n.graphTab__checkbox__otherScore[_ngcontent-%COMP%]   .checkbox-dynamic-second.activeOther[_ngcontent-%COMP%] {\n  background-image: url('Check.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.typeTitle[_ngcontent-%COMP%] {\n  font: 700 14px/24px ModernEra_Bold !important;\n  color: #001e50;\n}\n.speedRoadSec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  padding: 10px;\n}\n.speedRoadSec[_ngcontent-%COMP%]   .speedRoadLeft[_ngcontent-%COMP%] {\n  flex-basis: calc(20% - 7px);\n  max-width: calc(20% - 7px);\n}\n.speedRoadSec[_ngcontent-%COMP%]   .speedRoadLeft[_ngcontent-%COMP%]   .scoreBoxGuage[_ngcontent-%COMP%] {\n  flex-basis: calc(100%);\n  max-width: calc(100%);\n  margin: 0 14px 0 0;\n  border: 1px solid #e0e3e7;\n  padding: 14px 14px 0;\n  border-radius: 8px;\n  text-align: center;\n  min-height: 133px;\n}\n.speedRoadSec[_ngcontent-%COMP%]   .speedRoadLeft[_ngcontent-%COMP%]   .scoreBoxGuage[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-right: 0;\n}\n.speedRoadSec[_ngcontent-%COMP%]   .speedGraphTitle[_ngcontent-%COMP%] {\n  font: 700 11px/18px ModernEra_Bold;\n  color: #001e50;\n  margin: 0 auto 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.speedRoadSec[_ngcontent-%COMP%]   .defaultValue[_ngcontent-%COMP%] {\n  font: 500 8px/5px ModernEra;\n  margin-bottom: 0;\n}\n.speedRoadSec[_ngcontent-%COMP%]   .speedRoadRight[_ngcontent-%COMP%] {\n  flex-basis: calc(40% - 5px);\n  max-width: calc(40% - 5px);\n  margin-right: 7px;\n}\n.speedRoadSec[_ngcontent-%COMP%]   .speedRoadRight[_ngcontent-%COMP%]   .scoreBoxRight[_ngcontent-%COMP%] {\n  border: 1px solid #e0e3e7;\n  padding: 14px 14px 0;\n  border-radius: 8px;\n  min-height: 133px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n.speedRoadSec[_ngcontent-%COMP%]   .speedRoadRight[_ngcontent-%COMP%]   .scoreBoxRight[_ngcontent-%COMP%]   .filerHalf[_ngcontent-%COMP%] {\n  flex-basis: calc(50%);\n  max-width: calc(50%);\n  text-align: center;\n}\n.graphTitle[_ngcontent-%COMP%] {\n  font: 600 14px/24px ModernEra;\n  color: #001e50;\n}\n.mainBox[_ngcontent-%COMP%] {\n  padding: 19px 24px;\n  background-color: #ffffff;\n  border-radius: 11px;\n}\n.mainBox[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  font: 12px/18px ModernEra !important;\n  padding: 3px 30px;\n  color: #ffffff;\n  border-radius: 24px;\n  padding: 3px 8px;\n  font: 14px/24px ModernEra !important;\n}\n.mainBox[_ngcontent-%COMP%]   .roadFactor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  border-radius: 40px 0 0 40px;\n}\n.mainBox[_ngcontent-%COMP%]   .roadFactor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 40px 40px 0;\n}\n.mainBox[_ngcontent-%COMP%]   .roadFactor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:only-child {\n  border-radius: 40px 40px 40px 40px;\n}\n.getRide[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background: #f9fafb;\n  border-radius: 4px;\n  width: calc(100% - 125px);\n}\n.getRide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.pr-75[_ngcontent-%COMP%] {\n  padding-right: 7.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdHJpcC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNFQSxpQkFBQTtBQUVFO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNEcURhO0VDcERiLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBQ0Usa0JBQUE7QUFETjtBQUlJO0VBQ0Usd0JBQUE7RURnSUosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VDaElJLGNEY1c7RUNiWCw2QkFBQTtBQUFOO0FBSUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFGSjtBQUdJO0VBQ0UsNkJBQUE7RUFDQSxjRElXO0VDSFgsa0JBQUE7RUFDQSxrQkFBQTtBQUROO0FBRU07RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUEyQixZQUFBO0VBQzNCLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDUjtBQUVJO0VBQ0UsNkJBQUE7RUFDQSxjRGZXO0VDa0JYLFlBQUE7RUQ4RkosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDL0ZGO0FBSUU7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxjRHhEYztFQ3lEZCw2QkFBQTtFQUdBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQU1JO0VBR0UsWUFBQTtFRHdFSixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUM3RUY7QUFRRTtFQUdFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFSSjtBQVdFO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVVJO0VBQ0UsZ0JBQUE7QUFSTjtBQVdJO0VEa0NGLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUNsQ0ksbUJBQUE7QUFQTjtBQVFNO0VBQ0UsZ0JBQUE7QUFOUjtBQVFNO0VEa0NKLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUNsQ00sbUJBQUE7QUFKUjtBQUtRO0VBQ0UsWUFBQTtFRHdDUixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUN4Q1EsNkJBQUE7RUFDQSxjRHBHUTtBQ21HbEI7QUFJTTtFQUNFLGNEL0VTO0VDZ0ZULDZCQUFBO0FBRlI7QUFHUTtFQUNFLDZCQUFBO0VBQ0EsY0Q1R1E7QUMyR2xCO0FBS007RUFTRSxjRGhHUztFQ2lHVCw2QkFBQTtBQVhSO0FBRVE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVY7QUFDVTtFQUNFLGFEN0ZLO0FDOEZqQjtBQU1NO0VERUosYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQ0ZNLG1CQUFBO0VBQ0Esd0JBQUE7QUFGUjtBQUtNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFIUjtBQU1NO0VBQ0UsNkJBQUE7RUFDQSxjRDFJVTtBQ3NJbEI7QUFNUTtFQUNFLGtCQUFBO0FBSlY7QUFRTTtFQUNFLDZCQUFBO0VBQ0EsY0RsSk87RUNzSlAsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBVFI7QUFlQTtFQUNFLG9CQUFBO0FBWkY7QUFjRTtFRHpDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VDeUNFLG1CQUFBO0FBVko7QUFhRTtFQUNFLDZCQUFBO0VBQ0EsY0RoSmE7QUNxSWpCO0FBYUk7RUFDRSw2QkFBQTtFQUNBLGNEektHO0FDOEpUO0FBZ0JBO0VBQ0csaUJBQUE7QUFiSDtBQTBCQTtFQUNFLGNBQUE7QUF2QkY7QUE0Qkk7RUFDRSxhQUFBO0FBekJOO0FBOEJBO0VBQ0UseUJEakthO0FDc0lmO0FBOEJJO0VBQ0Usd0JBQUE7QUE1Qk47QUFpQ0E7RUFHRSxpQkFBQTtBQWhDRjtBQThDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTNDRjtBQTZDQTtFQUNFLDZDQUFBO0VBQ0EsNkJBQUE7QUExQ0Y7QUEyQ0U7RUFDRSw2Q0FBQTtFQUNBLHlCQUFBO0FBekNKO0FBMkNFO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQXpDSjtBQThDQTtFQUNFO0lBQ0UsMEJBQUE7RUEzQ0Y7QUFDRjtBQThDQSx3QkFBQTtBQUNBO0VEbklFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUNtSUEsbUJBQUE7QUExQ0Y7QUE0Q0U7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VEbEdGLG1CQTFLTTtFQTJLTixrREFBQTtFQUNBLGtCQUFBO0VDa0dFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUF4Q0o7QUF5Q0k7RUFQRjtJQVFJLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBO0VBdENKO0FBQ0Y7QUF5Q0U7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0FBdkNKO0FBeUNJO0VBSkY7SUFLSSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBdENKO0FBQ0Y7QUF1Q0k7RUFWRjtJQVdJLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0VBcENKO0FBQ0Y7QUF3Q0k7RURoSUYsbUJBMUtNO0VBMktOLGtEQUFBO0VBQ0Esa0JBQUE7RUNnSUksbUJBQUE7QUFwQ047QUE2Q0k7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJEbFRXO0VBdUhmLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUMyTEksbUJBQUE7QUF6Q047QUEyQ007RUFDRSw2QkFBQTtFQUNBLGNEOVRBO0VDK1RBLGdCQUFBO0FBekNSO0FBNkNRO0VBQ0UsYURwVUY7QUN5UlI7QUFnREk7RUFPRSxhQUFBO0FBcEROO0FBZ0RNO0VBQ0UsK0JBQUE7QUE5Q1I7QUFvRFk7RUFDSSx3Q0FBQTtBQWxEaEI7QUF1RE07RUFFRSxrQkFBQTtFQUNBLHlCRDVWQTtFQzZWQSxnQkFBQTtBQXREUjtBQXdEUTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUF0RFY7QUF3RFU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXREWjtBQXdEWTtFQUNFLGtCQUFBO0FBdERkO0FBd0RjO0VBQ0UsYUR6V0U7QUNtVGxCO0FBMERZO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQXhEZDtBQTJEWTtFQUNFLGFBQUE7QUF6RGQ7QUE0RFk7RUFDRSxnQkFBQTtBQTFEZDtBQTZEWTtFQUNFLGtCQUFBO0FBM0RkO0FBOERZO0VBQ0Usa0NBQUE7RUFDQSxjRHJZSTtBQ3lVbEI7QUFnRVk7RUFDRSxXQUFBO0FBOURkO0FBaUVZO0VBQ0Usa0NBQUE7RUFDQSxjRC9ZSTtBQ2dWbEI7QUFrRVk7RUFDRSxnQkFBQTtBQWhFZDtBQW1FWTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQWpFZDtBQXdFSTtFRGhTRixhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDMk5GO0FBcUZNO0VBQ0UsbUJEeGFVO0VDeWFWLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFuRlI7QUFxRlE7RUFDRSxlQUFBO0FBbkZWO0FBdUZNO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNEbmNPO0FDOFdmO0FBd0ZNO0VBQ0Usa0NBQUE7RUFDQSxjRHpjVTtFQzBjVixnQkFBQTtBQXRGUjtBQTBGSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUF4Rk47QUEyRkk7RURwVkYsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQzRQRjtBQXlGTTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQXZGUjtBQXlGUTtFQUNFLGVBQUE7QUF2RlY7QUE0Rkk7RURsV0YsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ3lRRjtBQTBGTTtFQUNFLGtDQUFBO0VBQ0EsY0R0ZVU7RUN1ZVYsbUJBQUE7RUFDQSxlQUFBO0VEL1ZOLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ3dRRjtBQXlGTTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQXZGUjtBQXlGUTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUF2RlY7QUEwRlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUF4RlY7QUEyRlE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXpGVjtBQTZGVTtFQUNFLG1CRDFlSztBQytZakI7QUE2Rlk7RUFDRSxjRDNnQk47RUM0Z0JNLGtDQUFBO0FBM0ZkO0FBK0ZVO0VBQ0UsbUJEamdCYTtFQ2tnQmIsa0NBQUE7QUE3Rlo7QUErRlk7RUFDRSxjRHhmRztFQ3lmSCw2QkFBQTtBQTdGZDtBQXNHQSx3QkFBQTtBQUVBO0VBQ0Usa0NEemdCYTtFQzBnQmIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGNEOWhCaUI7RUMraEJqQixrQkFBQTtBQXBHRjtBQXNHRTtFQUNFLGlCQUFBO0FBcEdKO0FBc0dJO0VBQ0UsYURyaUJhO0FDaWNuQjtBQXdHRTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUF0R0o7QUEwR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxjRDFqQmdCO0FDbWRsQjtBQXlHRTtFQUNFLGdCQUFBO0FBdkdKO0FBMEdFO0VBQ0UsaUJBQUE7QUF4R0o7QUEwR0k7RUFDRSxhRHBrQlk7QUM0ZGxCO0FBNEdFO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQTFHSjtBQThHSTtFQUNFLGFBQUE7QUEzR047QUE0R007RUFFRSxlQUFBO0VBQ0EsYUFBQTtBQTNHUjtBQTRHUTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNEdmxCUTtBQzZlbEI7QUE0R1E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkQ5bEJRO0VDK2xCUixrQkFBQTtBQTFHVjtBQTJHVTtFQUNFLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQXpHWjtBQTZHTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUEzR1I7QUE2R1U7RUFDRSw4QkFBQTtBQTNHWjtBQTRHWTtFQUNFLDZDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtBQTFHZDtBQTZHVTtFQUNFLGNEaG5CTztBQ3FnQm5CO0FBOEdRO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0Q3bkJFO0FDaWhCWjtBQThHUTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkRub0JFO0VDb29CRixrQkFBQTtFQUNBLGlCQUFBO0FBNUdWO0FBNkdVO0VBQ0Usa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBM0daO0FBaUhFO0VBQ0UsNkNBQUE7RUFDQSxjRC9vQmM7QUNpaUJsQjtBQWlIQTtFRG5oQkUsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQ21oQkEsYUFBQTtBQTVHRjtBQThHRTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7QUE1R0o7QUFnSEk7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBOUdOO0FBZ0hNO0VBQ0UsZUFBQTtBQTlHUjtBQXlIRTtFQUNFLGtDQUFBO0VBQ0EsY0RwckJjO0VDcXJCZCxrQkFBQTtFRDVpQkYsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDc2JGO0FBd0hFO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQXRISjtBQXlIRTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQXZISjtBQXlISTtFQUVFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VEemtCSixhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDa2RGO0FBd0hNO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBdEhSO0FBdUlBO0VBQ0UsNkJBQUE7RUFDQSxjRGp1QmdCO0FDNmxCbEI7QUF1SUE7RUFDRSxrQkFBQTtFQUNBLHlCRDF1Qk07RUMydUJOLG1CQUFBO0FBcElGO0FBc0lFO0VEMWtCQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FyS007RUFzS04sbUJBQUE7RUN5a0JFLGdCQUFBO0VBQ0Esb0NBQUE7QUFqSUo7QUF1SUk7RUFDRSw0QkFBQTtBQXJJTjtBQXdJSTtFQUNFLDRCQUFBO0FBdElOO0FBeUlJO0VBQ0Usa0NBQUE7QUF2SU47QUE0SUE7RUFDRSxrQkFBQTtFQUNBLG1CRHh2QmdCO0VDeXZCaEIsa0JBQUE7RUFDQSx5QkFBQTtBQXpJRjtBQTJJRTtFQUNFLGdCQUFBO0FBeklKO0FBNElBO0VBQ0UscUJBQUE7QUF6SUYiLCJmaWxlIjoidHJpcC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIkBpbXBvcnQgXCIuLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuLyogTWF0QWNjb3JkaWFuICovXG4ubWF0LWV4cGFuc2lvbi1Db21tb24ge1xuICAuZHJpdmVyTmFtZSB7XG4gICAgZmxleC1iYXNpczogY2FsYygyOCUgLSAxMHB4KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMjglIC0gMTBweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmFja0dyYXlDb21tb247XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDhweCA5cHg7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuICAgIH1cblxuICAgIC5kTmFtZSB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjdweCk7XG4gICAgICBAaW5jbHVkZSBlbGxpcHNpcztcbiAgICAgIGNvbG9yOiAkbmlnaHRUZXh0Q29sb3I7XG4gICAgICBmb250OiA3MDAgMTRweC8xOHB4IE1vZGVybkVyYTtcbiAgICB9XG4gIH1cblxuICAuc3BlZWRpbmdQb2ludCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5zcGVlZFRpdGxlIHtcbiAgICAgIGZvbnQ6IDcwMCAxMnB4LzE4cHggTW9kZXJuRXJhO1xuICAgICAgY29sb3I6ICRuaWdodFRleHRDb2xvcjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDUwMmU7IC8qICM0OTAwODYgKi9cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgbGVmdDogLTE4cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5leGNlcHRpb25OYW1lIHtcbiAgICAgIGZvbnQ6IDYwMCAxMnB4LzE4cHggTW9kZXJuRXJhO1xuICAgICAgY29sb3I6ICRuaWdodFRleHRDb2xvcjtcbiAgICAgIC8vIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIEBpbmNsdWRlIGVsbGlwc2lzO1xuICAgIH1cbiAgfVxuXG4gIC5zcGVlZGluZ1BvaW50Qm9keSB7XG4gICAgZmxleC1iYXNpczogY2FsYygyMiUgLSAxMHB4KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMjIlIC0gMTBweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLnRpbWVTZWMge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgIGZvbnQ6IDYwMCAxNHB4LzE4cHggTW9kZXJuRXJhO1xuICAgIC8vIGZsZXgtYmFzaXM6IGNhbGMoMTUlIC0gNXB4KTtcbiAgICAvLyBtYXgtd2lkdGg6IGNhbGMoMTUlIC0gNXB4KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJi50aW1ld2l0aE1pbiB7XG4gICAgICAvLyBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBAaW5jbHVkZSBlbGxpcHNpcztcbiAgICB9XG4gIH1cblxuICAubGFudGxvbmcge1xuICAgIC8vIGZsZXgtYmFzaXM6IGNhbGMoMjAlIC0gNXB4KTtcbiAgICAvLyBtYXgtd2lkdGg6IGNhbGMoMjAlIC0gNXB4KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXgtd2lkdGg6IDM1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1Db21tb24tQm9keSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogMTFweCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgJjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5leGNlcHRpb25EZXRhaWwge1xuICAgICAgQGluY2x1ZGUgZmxleC1qdXN0aWZ5O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgICAgLmV2ZW50TmFtZSB7XG4gICAgICAgIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5leGNlcHRpb2RldGFpbCB7XG4gICAgICAgICAgd2lkdGg6IDIzM3B4O1xuICAgICAgICAgIEBpbmNsdWRlIGVsbGlwc2lzO1xuICAgICAgICAgIGZvbnQ6IDUwMCAxMXB4LzI0cHggTW9kZXJuRXJhO1xuICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZXhjZXB0aW9uVGl0bGUge1xuICAgICAgICBjb2xvcjogJG5pZ2h0VGV4dENvbG9yO1xuICAgICAgICBmb250OiA2MDAgMTFweC8xOHB4IE1vZGVybkVyYTtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udDogNTAwIDExcHgvMjRweCBNb2Rlcm5FcmE7XG4gICAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmV4Y2VwdGlvbkRhdGUge1xuICAgICAgICBzdmcge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICRuaWdodFRleHRDb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29sb3I6ICRuaWdodFRleHRDb2xvcjtcbiAgICAgICAgZm9udDogNzAwIDEycHgvMThweCBNb2Rlcm5FcmE7XG4gICAgICB9XG5cbiAgICAgIC5tYXRDb21tb24ge1xuICAgICAgICBAaW5jbHVkZSBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzhweCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXBJY29uIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzOHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnRpbWVTZWNCb2R5IHtcbiAgICAgICAgZm9udDogNjAwIDExcHgvMThweCBNb2Rlcm5FcmE7XG4gICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuXG4gICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGltZURhdGVEZXNjIHtcbiAgICAgICAgZm9udDogNzAwIDEycHgvMThweCBNb2Rlcm5FcmE7XG4gICAgICAgIGNvbG9yOiAkUHJpbWFyeV9CbHVlO1xuICAgICAgICAvLyBtYXgtd2lkdGg6IDMxNnB4O1xuICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDI4JSAtIDEwcHgpO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMjglIC0gMTBweCk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRyaXBIaXNUb3Age1xuICBwYWRkaW5nOiAxOHB4IDI0cHggMDtcblxuICAudHJpcEhpc1RvcExlZnQge1xuICAgIEBpbmNsdWRlIGZsZXgtanVzdGlmeTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnRyaXBUaXRsZSB7XG4gICAgZm9udDogNjAwIDE2cHgvMjBweCBNb2Rlcm5FcmE7XG4gICAgY29sb3I6ICRuaWdodFRleHRDb2xvcjtcblxuICAgIC5jb3VudFZhbHVlIHtcbiAgICAgIGZvbnQ6IDYwMCAxNHB4LzE4cHggTW9kZXJuRXJhO1xuICAgICAgY29sb3I6ICRkYW5nZXI7XG4gICAgfVxuICB9XG59XG5cbi5yZWxCb3gge1xuICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIG1pbi1oZWlnaHQ6IDUxMHB4O1xuICAgIC8vIGhlaWdodDogMTAwJTtcblxuICAgIC8vIC5kYXlOaWdodFNlYyB7XG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgYm90dG9tOiAzMnB4O1xuICAgIC8vICAgICBsZWZ0OiAyMHB4O1xuICAgIC8vICAgICByaWdodDogMjBweDtcbiAgICAvLyB9XG59XG5cbiNjaGFydERpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiB7XG4gIHN2ZyB7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAjYzVjZGQ0O1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9nZ2xlQWN0aXZlO1xuXG4gIHN2ZyB7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi8vIC5zY29yZUJveFJpZ2h0IHtcbi8vICAgICAuc3BlZWRHcmFwaFRpdGxlIHtcbi8vICAgICAgICAgaGVpZ2h0OiA0M3B4O1xuLy8gICAgIH1cbi8vIH1cblxuLy8gLnNwZWVkUm9hZExlZnQge1xuLy8gICAgIC5zcGVlZEdyYXBoVGl0bGUge1xuLy8gICAgICAgICBoZWlnaHQ6IDMzcHg7XG4vLyAgICAgfVxuLy8gfVxuLm5hRGF0YXtcbiAgaGVpZ2h0OiA1NyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlbGVjdGVkLWJveCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjAzLCAxNjAsIDAuMSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGg0e1xuICAgIGZvbnQ6IDcwMCAxOHB4LzIwcHggTW9kZXJuRXJhX0JvbGQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJFNlY29uZGFyeV9BbGVydHMgIWltcG9ydGFudDtcbiAgfVxuICBwe1xuICAgIGZvbnQ6IDcwMCAxNHB4LzIwcHggTW9kZXJuRXJhX0JvbGQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJFNlY29uZGFyeV9BbGVydHMgIWltcG9ydGFudDtcbiAgfVxuICBcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExNjBweCkge1xuICAuZGF5TmlnaHRTZWMge1xuICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIG5ldyAgY29kZSB1cGRhdGUgdjIgKi9cbi5kZXRhaWxQYWdlVHJpcCB7XG4gIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgLm1hcFNob3cge1xuICAgIGZsZXgtYmFzaXM6IGNhbGMoMzUlKTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMzUlKTtcbiAgICBAaW5jbHVkZSBtYWluQm94d2l0aEJhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBoZWlnaHQ6IDgzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSk7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIH1cbiAgfVxuXG4gIC50cmlwRGV0YWlsc0xlZnQge1xuICAgIGZsZXgtYmFzaXM6IGNhbGMoNjUlIC0gMjBweCk7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDY1JSAtIDIwcHgpO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAgICAgbWF4LWhlaWdodDogODMwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSk7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAvLyBoZWlnaHQ6IGF1dG87XG4gICAgICAvLyBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnRyaXBEZXRhaWxzIHtcbiAgICAgIEBpbmNsdWRlIG1haW5Cb3h3aXRoQmFjaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLy8gJi50cmlwRGV0YWlsRnVsbHdpZHRoIHtcbiAgICAvLyAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAvLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgLy8gfVxuXG4gICAgLnRyaXBEZXRhaWxIZWFkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xuICAgICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkU2Vjb25kYXJ5X0JsdWU7XG4gICAgICBAaW5jbHVkZSBmbGV4LWp1c3RpZnk7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAudHJpcERldGFpbFRpdGxlIHtcbiAgICAgICAgZm9udDogNzAwIDE0cHgvMThweCBNb2Rlcm5FcmE7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIC5leHBvcnRSaWdodEljb24gc3ZnIHtcbiAgICAgICAgcGF0aCB7XG4gICAgICAgICAgZmlsbDogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRyaXBEZXRhaWxUb3BCb3gge1xuICAgICAgLy8gcGFkZGluZzogMTZweCAyMHB4IDAgMjBweDtcbiAgICAgOjpuZy1kZWVwe1xuICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmc6IDAgN3B4IDAgMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgIH1cbiAgICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgICA6Om5nLWRlZXB7XG4gICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWx7XG4gICAgICAgICAgICAubWF0LWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRyaXBEZXRhaWxCb3gge1xuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDdweCA4cHg7XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuXG4gICAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgIGZpbGw6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUpO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgICAgICAgdG9wOiAyOHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSk6OmFmdGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZyb21UaXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQ6IDcwMCAxMnB4LzE4cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mcm9tVG8ge1xuICAgICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpbWVEZXNjIHtcbiAgICAgICAgICAgICAgZm9udDogNzAwIDEwcHgvMThweCBNb2Rlcm5FcmFfQm9sZDtcbiAgICAgICAgICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tdC0xNCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tdDMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudHJpcERldGFpbEJveGVzIHtcbiAgICAgIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XG5cbiAgICAgIC8vIC50cmlwQm94RmllbGRzNTAge1xuICAgICAgLy8gICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICAvLyAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgLy8gICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcbiAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAkbGlnaHRXaGl0ZWNvbG9yO1xuICAgICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodFdoaXRlY29sb3I7XG4gICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgLy8gICAgIHBhZGRpbmc6IDE4cHggOXB4O1xuICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLy8gICAgICY6bnRoLWNoaWxkKDJuKzApIHtcbiAgICAgIC8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vIH1cblxuICAgICAgLnRyaXBCb3hGaWVsZHMge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHRXaGl0ZWNvbG9yO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRXaGl0ZWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gN3B4KTtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDdweCk7XG4gICAgICAgIG1hcmdpbjogMCAxNHB4IDE2cHggMDtcbiAgICAgICAgcGFkZGluZzogNDBweCA5cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWF4LWhlaWdodDogMTIzcHg7XG5cbiAgICAgICAgJjpudGgtY2hpbGQoMm4gKyAwKSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50cmlwSWQge1xuICAgICAgICBmb250OiA3MDAgMTRweC8xNnB4IE1vZGVybkVyYV9Cb2xkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gICAgICAgIGNvbG9yOiAkUHJpbWFyeV9CbHVlO1xuICAgICAgfVxuXG4gICAgICAudHJpcERlc2Mge1xuICAgICAgICBmb250OiA3MDAgMTJweC8xOHB4IE1vZGVybkVyYV9Cb2xkO1xuICAgICAgICBjb2xvcjogJFNlY29uZGFyeV9ibGFjaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm9EYXRhIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubWFpbnRvcEJveCB7XG4gICAgICBAaW5jbHVkZSBmbGV4LXN0YXJ0O1xuXG4gICAgICAudHJpcGRldGFpbEJveCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGF5TmlnaHRTZWMge1xuICAgICAgQGluY2x1ZGUgZmxleC1zdGFydDtcblxuICAgICAgLmRheU5pZ2h0SGVhZGluZyB7XG4gICAgICAgIGZvbnQ6IDcwMCAxM3B4LzE4cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgIEBpbmNsdWRlIGVsbGlwc2lzO1xuICAgICAgfVxuXG4gICAgICAuZGF5TmlnaHRCb3gge1xuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDE1cHgpO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMTVweCk7XG4gICAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcblxuICAgICAgICAmLmNoYXJ0OmhvdmVyIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlM2U3O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbW9uQm94IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgcGFkZGluZzogMTZweCAxMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC8vIEBpbmNsdWRlIGZsZXgtanVzdGlmeTtcbiAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgJi5uaWdodCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbmlnaHRCYWNrQmxhY2s7XG5cbiAgICAgICAgICAgIC5uaWdodERldGFpbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQ6IDcwMCAxNHB4LzE4cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5kYXkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0bWl4Ymx1ZVdoaXRlY29sb3I7XG4gICAgICAgICAgICBmb250OiA3MDAgMTRweC8xOHB4IE1vZGVybkVyYV9Cb2xkO1xuXG4gICAgICAgICAgICAubmlnaHREZXRhaWwge1xuICAgICAgICAgICAgICBjb2xvcjogJG5pZ2h0VGV4dENvbG9yO1xuICAgICAgICAgICAgICBmb250OiA3MDAgMTRweC8xOHB4IE1vZGVybkVyYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogbmV3ICBjb2RlIHVwZGF0ZSB2MiAqL1xuXG4uc2FmZVNjb3JlQm94IHtcbiAgYmFja2dyb3VuZDogJGdyZWVuQm94QmFjaztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nOiA5cHg7XG4gIGZvbnQ6IDYwMCAxMnB4LzE4cHggTW9kZXJuRXJhO1xuICBjb2xvcjogJFNlY29uZGFyeV9BbGVydHM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogOXB4O1xuXG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAkU2Vjb25kYXJ5X0FsZXJ0cztcbiAgICB9XG4gIH1cblxuICAuU2FmZVNjb3JlIHtcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgIGZvbnQ6IDcwMCAxNHB4LzE2cHggTW9kZXJuRXJhO1xuICB9XG59XG5cbi50aW1lRGlzdEJveCB7XG4gIGJhY2tncm91bmQ6ICNmNGY2Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udDogNzAwIDEycHgvMThweCBNb2Rlcm5FcmFfQm9sZDtcbiAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG5cbiAgJjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG5cbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgLnRpbWVEaXN0VGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgZm9udDogNzAwIDE0cHgvMTZweCBNb2Rlcm5FcmE7XG4gIH1cbn1cbi5ncmFwaFRhYiB7XG4gICAgJl9fY2hlY2tib3gge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICZfX3NhZmVTY29yZSB7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQ6IDcwMCAxMHB4LzEycHggTW9kZXJuRXJhO1xuICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgICB9XG4gICAgICAgIC5jaGVja2JveC1keW5hbWljIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICYuYWN0aXZlU2FmZVNjb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQ2hlY2suc3ZnXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICZfX290aGVyU2NvcmUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAmLmxpbWl0e1xuICAgICAgICAgIC5jaGVja2JveC1keW5hbWljLXNlY29uZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkU2Vjb25kYXJ5X0FsZXJ0cyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgJi5hY3RpdmVPdGhlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQ2hlY2suc3ZnXCIpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X0FsZXJ0cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250OiA3MDAgMTBweC8xMnB4IE1vZGVybkVyYV9Cb2xkO1xuICAgICAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgICAgICB9XG4gICAgICAgIC5jaGVja2JveC1keW5hbWljLXNlY29uZCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHRncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAmLmFjdGl2ZU90aGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQ2hlY2suc3ZnXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnR5cGVUaXRsZSB7XG4gICAgZm9udDogNzAwIDE0cHgvMjRweCBNb2Rlcm5FcmFfQm9sZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrXG4gIH1cblxuLnNwZWVkUm9hZFNlYyB7XG4gIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgLnNwZWVkUm9hZExlZnQge1xuICAgIGZsZXgtYmFzaXM6IGNhbGMoMjAlIC0gN3B4KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMjAlIC0gN3B4KTtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAvLyBAaW5jbHVkZSBmbGV4LXN0YXJ0O1xuXG4gICAgLnNjb3JlQm94R3VhZ2Uge1xuICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlKTtcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlKTtcbiAgICAgIG1hcmdpbjogMCAxNHB4IDAgMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xuICAgICAgcGFkZGluZzogMTRweCAxNHB4IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtaW4taGVpZ2h0OiAxMzNweDtcblxuICAgICAgJjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgLy8gLnNwZWVkR3JhcGhUaXRsZSB7XG4gICAgICAvLyAgICAgZm9udDogNjAwIDEycHgvMThweCBNb2Rlcm5FcmE7XG4gICAgICAvLyAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cblxuICAuc3BlZWRHcmFwaFRpdGxlIHtcbiAgICBmb250OiA3MDAgMTFweC8xOHB4IE1vZGVybkVyYV9Cb2xkO1xuICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgIG1hcmdpbjogMCBhdXRvIDhweDtcbiAgICBAaW5jbHVkZSBlbGxpcHNpcztcbiAgfVxuXG4gIC5kZWZhdWx0VmFsdWUge1xuICAgIGZvbnQ6IDUwMCA4cHgvNXB4IE1vZGVybkVyYTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLnNwZWVkUm9hZFJpZ2h0IHtcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDQwJSAtIDVweCk7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDQwJSAtIDVweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG5cbiAgICAuc2NvcmVCb3hSaWdodCB7XG4gICAgICAvLyBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRtaXhibHVlV2hpdGVjb2xvcjtcbiAgICAgIHBhZGRpbmc6IDE0cHggMTRweCAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWluLWhlaWdodDogMTMzcHg7XG4gICAgICBAaW5jbHVkZSBmbGV4LXN0YXJ0O1xuXG4gICAgICAuZmlsZXJIYWxmIHtcbiAgICAgICAgZmxleC1iYXNpczogY2FsYyg1MCUpO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLy8gJjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICAgICAgICAvLyAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIC8vICAgICB0b3A6IDE2cHg7XG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGVDb2xvcjtcbiAgICAgICAgLy8gICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgLy8gICAgIHJpZ2h0OiAwO1xuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5ncmFwaFRpdGxlIHtcbiAgZm9udDogNjAwIDE0cHgvMjRweCBNb2Rlcm5FcmE7XG4gIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xufVxuXG4ubWFpbkJveCB7XG4gIHBhZGRpbmc6IDE5cHggMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuXG4gIC5tc2cge1xuICAgIEBpbmNsdWRlIG1zZztcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgIGZvbnQ6IDE0cHgvMjRweCBNb2Rlcm5FcmEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8vICYucm9hZERpc3RyaWJ1dGlvbiB7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIC5yb2FkRmFjdG9yIHtcbiAgICBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJhZGl1czogNDBweCAwIDAgNDBweDtcbiAgICB9XG5cbiAgICBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDQwcHggNDBweCAwO1xuICAgIH1cblxuICAgIGRpdjpvbmx5LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgfVxuICB9XG59XG5cbi5nZXRSaWRlIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAkbGlnaHRXaGl0ZWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjVweCk7XG5cbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuLnByLTc1IHtcbiAgcGFkZGluZy1yaWdodDogNy41cmVtO1xufVxuIl19 */";

      var TripDetailComponent = /*#__PURE__*/function () {
        function TripDetailComponent(service, localService, activeRoute, elementRef, dialog, translate) {
          var _chart_js__WEBPACK_IM;

          _classCallCheck(this, TripDetailComponent);

          this.service = service;
          this.localService = localService;
          this.activeRoute = activeRoute;
          this.elementRef = elementRef;
          this.dialog = dialog;
          this.translate = translate;
          this.tableView = "table";
          this.tripDetail = []; // GUAGE CHART VARIABLES

          this.hideToggle = false;
          this.gaugeType = "semi";
          this.thresholdConfig = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].gaugeThreshold; //Ng Accordian

          this.hideToggle1 = false;
          this.displayMode = "default";
          this.multi = true;
          this.disabled = false;
          this.mapAlerts = []; // stacked bar variable

          this.colorBox = ["#ed502e", "#604EFF", "#FFEA6C", "#4dbfff", "#2A1E91"];
          this.stackBar = [{
            value: 0,
            "class": "ridOfmax1",
            speed: 0,
            color: ""
          }, {
            value: 0,
            "class": "busyRoad1",
            speed: 0,
            color: ""
          }, {
            value: 0,
            "class": "quietRoad1",
            speed: 0,
            color: ""
          }, {
            value: 0,
            "class": "buildUp1",
            speed: 0,
            color: ""
          }, {
            value: 0,
            "class": "ridOfHighSpeed1",
            speed: 0,
            color: ""
          }];
          this.gaugeMin = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].gaugeMin;
          this.gaugeMax = src_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].gaugeMax;
          this.showStackBar = [];
          this.noRoadTypeData = false;
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
          this.alerts = {};
          this.exceptionTypeObj = {
            speed: "Speeding",
            breaking: "Braking",
            acceleration: "Acceleration",
            cornering: "Cornering",
            idling: "Idiling"
          };
          this.exceptionArray = {};
          this.exceptionCount = 0;
          this.exceptionKeys = [];
          this.exceptionShowOnMap = true;
          this.dayNightScore = {
            dayScore: [],
            nightScore: [],
            date: []
          };
          this.roadTypeLabel = [];
          this.roadTypeData = [];
          this.data = [];
          this.label = [];

          (_chart_js__WEBPACK_IM = chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]).register.apply(_chart_js__WEBPACK_IM, _toConsumableArray(chart_js__WEBPACK_IMPORTED_MODULE_2__["registerables"]));
        }

        _createClass(TripDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.localService.getLang().subscribe(function (val) {
              if (_this13.accProfile && _this13.accProfile.time) {
                setTimeout(function () {
                  _this13.createAccProfileChart();
                }, 200);
              }

              if (_this13.speedProfile && _this13.speedProfile.time) {
                setTimeout(function () {
                  _this13.createSpeedProfileChart();
                }, 200);
              }

              if (_this13.roadTypeData) {
                _this13.newbarChart(_this13.roadTypeData, _this13.roadTypeLabel);
              }
            });
            this.tripId = this.activeRoute.snapshot.queryParams.tripId;
            this.selectedOrgID = this.localService.getItem("selectedOrgs");

            if (this.selectedOrgID) {
              this.selectedOrgID = JSON.parse(this.selectedOrgID);
            }

            this.getAllAlerts();
            this.getTripDetails();
            this.getRoadTypeDistribution();
            this.getTripException(); // this.getDayNightScore();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {}
        }, {
          key: "getDayNightScore",
          value: function getDayNightScore() {
            this.dayNightScore = {
              dayScore: [],
              nightScore: [],
              date: []
            };
            var date = ["01/03", "02/03", "03/03", "04/03", "05/03", "06/03", "07/03", "08/03", "09/03", "10/03", "11/03", "12/03", "13/03", "14/03", "15/03", "16/03", "17/03", "18/03", "19/03", "20/03", "21/03", "22/03", "23/03", "24/03", "25/03", "26/03", "27/03", "28/03", "29/03", "30/03", "31/03"];
            var dayScore = ["6.7", "6.0", "6.9", "6.5", "4.5", "4.5", "3.8", "5.0", "4.9", "5.7", "4.4", "4.9", "5.3", "5.6", "5.5", "4.9", "3.8", "6.0", "4.6", "6.8", "5.0", "4.0", "5.5", "4.3", "5.4", "4.2", "5.4", "5.3", "5.5", "4.3", "5.6"];
            var nightScore = ["5.6", "5.6", "6.5", "6.4", "2.1", "3.5", "4.7", "3.1", "4.5", "5.3", "3.3", "3.3", "2.8", "6.4", "6.1", "3.6", "6.1", "4.1", "6.2", "3.3", "6.4", "7.2", "3.4", "6.1", "7.9", "5.5", "5.0", "4.4"];
            this.lineChartScore(date, dayScore, nightScore, "Day Night"); // let querryParams = this.createQuerryparams();
            // this.service
            //   .get(`dashboard/day-night-score?${querryParams}&is_day_trip=[true,false]`)
            //   .pipe()
            //   .subscribe(
            //     (res: any) => {
            //       res.data.forEach((element: any) => {
            //         if (element.is_day_trip) {
            //           this.dayNightScore.date.push(
            //             moment.utc(element.start_date_time).format("DD/MM")
            //           );
            //           if (!this.naValue.includes(element?.safe_score)) {
            //             this.dayNightScore.dayScore.push(element?.safe_score);
            //           } else {
            //             this.dayNightScore.dayScore.push(null);
            //           }
            //         } else {
            //           if (!this.naValue.includes(element?.safe_score)) {
            //             this.dayNightScore.nightScore.push(element?.safe_score);
            //           } else {
            //             this.dayNightScore.nightScore.push(null);
            //           }
            //         }
            //       });
            //       this.dayNightScore.date.reverse();
            //       this.dayNightScore.dayScore.reverse();
            //       this.dayNightScore.nightScore.reverse();
            //       // console.log(this.dayNightScore);
            //       this.lineChartScore(
            //         this.dayNightScore.date,
            //         this.dayNightScore.dayScore,
            //         this.dayNightScore.nightScore,
            //         "Day Night"
            //       );
            //     },
            //     (err) => { }
            //   );
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
            }]; // if (!this.safeScoreCheckboxsecond) {
            //   dataSet.splice(1, 1);
            // }
            // if (!this.otherCheckboxsecond) {
            //   dataSet.splice(0, 1);
            // }
            // console.log(dataSet);

            this.linemyChartScore = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](htmlRef, {
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
                    max: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].gaugeMax,
                    ticks: {
                      precision: 0
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "getTripDetails",
          value: function getTripDetails() {
            var _this14 = this;

            this.service.get("trips/".concat(this.tripId)).pipe().subscribe(function (response) {
              if (response && response.data) {
                _this14.tripDetail = response.data;

                _this14.getSpeedProfileData();

                _this14.getAccelerationProfileData();

                if (_this14.tripDetail) {
                  _this14.idling = _this14.tripDetail.idling_score;
                  _this14.acceleration = _this14.tripDetail.acceleration_score;
                  _this14.braking = _this14.tripDetail.breaking_score;
                  _this14.cornering = _this14.tripDetail.cornering_score;
                  _this14.speed = _this14.tripDetail.speed_score;
                  document.getElementById('top').scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }
            }, function (error) {
              document.getElementById('top').scrollIntoView({
                behavior: 'smooth'
              });
            });
          }
        }, {
          key: "getRoadTypeDistribution",
          value: function getRoadTypeDistribution() {
            var _this15 = this;

            this.service.get("trips/road-type-distribution?organisation=".concat(JSON.stringify(this.selectedOrgID), "&trip=[").concat(this.tripId, "]&custom_filter=true&filter_value=false")).pipe().subscribe(function (response) {
              _this15.roadTypeLabel = [];
              _this15.roadTypeData = [];

              if (response.data && response.data.length) {
                for (var i = 0; i < response.data.length; i++) {
                  if (_this15.stackBar[i]) {
                    _this15.stackBar[i].value = response.data[i].contribution_value.toFixed(1);
                    _this15.stackBar[i].speed = response.data[i].road_factor_name;
                    _this15.stackBar[i].color = _this15.colorBox[i];
                  }
                }

                _this15.stackBar.forEach(function (x) {
                  if (x.value > 0) {
                    _this15.roadTypeLabel.push(x.speed);

                    _this15.roadTypeData.push(x.value);
                  }
                });

                _this15.newbarChart(_this15.roadTypeData, _this15.roadTypeLabel);
              } else {
                _this15.noRoadTypeData = true;
              }
            }, function (error) {
              _this15.roadTypeLabel = [];
              _this15.roadTypeData = [];
              _this15.noRoadTypeData = true;
            });
          }
        }, {
          key: "newbarChart",
          value: function newbarChart(data, label) {
            var _this16 = this;

            this.translate.get("ratio").subscribe(function (text) {
              _this16.yLabel = text + ' %';
            });
            this.text = '';
            this.translate.get("kmph").subscribe(function (text) {
              label = label.map(function (x) {
                x = x.split(' ')[0] + ' ' + text;
                return x;
              });
            });
            var htmlRef = this.elementRef.nativeElement.querySelector("#roadType");
            if (this.barchartdata) this.barchartdata.destroy();

            var _this = this;

            this.barchartdata = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](htmlRef, {
              type: "bar",
              data: {
                labels: label || ["81 - 100+ kmph", "71 - 80 kmph", "50 - 70 kmph", "00 - 30 kmph"],
                datasets: [{
                  label: this.text,
                  data: data || [20, 30, 25, 54, 24],
                  backgroundColor: ["#46E18C", "#46E18C", "#46E18C", "#46E18C", "#46E18C"]
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                    position: "top"
                  },
                  title: {
                    display: false
                  },
                  datalabels: {
                    font: {
                      size: 10,
                      family: 'ModernEra_Bold'
                    },
                    anchor: 'end',
                    align: 'end',
                    color: '#001E50',
                    formatter: function formatter(value, context) {
                      return _this.service.convertToDutch(value);
                    }
                  }
                },
                scales: {
                  x: {
                    display: true,
                    grid: {
                      drawOnChartArea: false
                    },
                    ticks: {
                      color: '#001E50',
                      font: {
                        size: 10,
                        family: 'ModernEra_Bold',
                        weight: '700'
                      }
                    }
                  },
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: function callback(value, index, values) {
                        return Math.round(Number(value));
                      },
                      color: '#001E50',
                      font: {
                        size: 10,
                        family: 'ModernEra_Bold',
                        weight: '700'
                      }
                    },
                    title: {
                      display: true,
                      text: this.yLabel,
                      color: '#667280',
                      font: {
                        size: 10,
                        family: 'ModernEra',
                        weight: '700'
                      }
                    },
                    grid: {
                      drawOnChartArea: false
                    },
                    max: Math.max.apply(Math, _toConsumableArray(data)) * 1.1
                  }
                }
              },
              plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_6__["default"]]
            });
          }
        }, {
          key: "dateTimeFormat",
          value: function dateTimeFormat(dateTime) {
            if (dateTime) return moment__WEBPACK_IMPORTED_MODULE_1__(dateTime).utc().format("HH:mm D/MM/yyyy");else return "NA";
          }
        }, {
          key: "getSpeedProfileData",
          value: function getSpeedProfileData() {
            var _this17 = this;

            // let isCustom = true;
            // if ((this.tripDetail.provider).trim() == "GEOTAB") {
            //   isCustom = false;
            // &isCustom=${isCustom}
            // }
            this.service.get("trips/trip-telematic-record/".concat(this.tripId, "?type=1")).pipe().subscribe(function (response) {
              if (response.data && response.data.length) {
                response.data.forEach(function (element) {
                  _this17.speedProfile["speed"].push(+element.property_value);

                  _this17.speedProfile["limit"].push(+element.waypoint.road_speed);

                  _this17.speedProfile["time"].push(moment__WEBPACK_IMPORTED_MODULE_1__(element.timestamp).utc().format("D/MM, HH:mm:ss"));
                });
              } else {
                _this17.speedProfile = {
                  speed: [],
                  limit: [],
                  time: []
                };
              }

              _this17.createSpeedProfileChart();
            }, function (error) {
              _this17.speedProfile = {
                speed: [],
                limit: [],
                time: []
              };
            });
          }
        }, {
          key: "getAccelerationProfileData",
          value: function getAccelerationProfileData() {
            var _this18 = this;

            var isCustom = true;

            if (this.tripDetail.provider.trim() == "GEOTAB") {
              isCustom = false;
            }

            this.service.get("trips/trip-telematic-record/".concat(this.tripId, "?type=2&isCustom=").concat(isCustom)).pipe().subscribe(function (response) {
              if (response.data && response.data.length) {
                response.data.forEach(function (element) {
                  if (element.property_id == "AccelerationID") {
                    _this18.accProfile["acc"].push(+element.property_value);

                    _this18.accProfile["deacc"].push("");
                  } else {
                    _this18.accProfile["acc"].push("");

                    _this18.accProfile["deacc"].push(+element.property_value);
                  }

                  _this18.accProfile["time"].push(moment__WEBPACK_IMPORTED_MODULE_1__(element.timestamp).utc().format("D/MM,HH:mm:ss"));
                });
              } else {
                _this18.accProfile = {
                  acc: [],
                  deacc: [],
                  time: []
                };
              }

              _this18.createAccProfileChart();
            }, function (error) {
              _this18.accProfile = {
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
            var htmlRef = this.elementRef.nativeElement.querySelector("#myChart");
            var gradient = this.elementRef.nativeElement.querySelector("#myChart").getContext("2d").createLinearGradient(0, 0, 0, 600);
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

            this.speedChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](htmlRef, {
              type: "line",
              data: {
                labels: labels,
                datasets: [{
                  label: "".concat(speed, " km/h"),
                  data: this.speedProfile['speed'],
                  borderColor: '#001E50',
                  cubicInterpolationMode: 'monotone',
                  tension: 0.4,
                  fill: 'start',
                  backgroundColor: gradient
                }, {
                  label: limit,
                  data: this.speedProfile['limit'],
                  borderColor: "#939EAA",
                  stepped: true
                }]
              },
              options: {
                responsive: true,
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
            this.accChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](htmlRef, {
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
          key: "getTripException",
          value: function getTripException() {
            var _this19 = this;

            this.exceptionCount = 0;
            this.exceptionArray = {};
            this.exceptionKeys = [];
            this.service.get("trips/".concat(this.tripId, "/exceptions")).pipe().subscribe(function (response) {
              if (response.data) {
                var _loop = function _loop(key) {
                  if (response.data[key] && response.data[key].length > 0) {
                    _this19.exceptionKeys.push(key);

                    _this19.exceptionArray[key] = response.data[key];
                    _this19.exceptionArray[key].total_time = 0;
                    _this19.exceptionArray[key].distance = 0;
                    _this19.exceptionCount = _this19.exceptionCount + response.data[key].length;
                    response.data[key].forEach(function (element) {
                      _this19.exceptionArray[key].total_time = _this19.exceptionArray[key].total_time + Number(element.duration_seconds);
                      _this19.exceptionArray[key].distance = _this19.exceptionArray[key].distance + parseFloat(element.distance);
                    });
                  }
                };

                for (var key in response.data) {
                  _loop(key);
                }
              } else {
                _this19.exceptionArray = {};
              }
            }, function (error) {
              _this19.exceptionArray = {};
            });
          }
        }, {
          key: "toggleChange",
          value: function toggleChange(value) {
            this.tableView = value;

            if (this.tableView == "map") {
              this.exceptionShowOnMap = true;
            } else {
              this.exceptionShowOnMap = false;
            }
          }
        }, {
          key: "goToLastPage",
          value: function goToLastPage() {
            window.history.back();
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
          }
        }, {
          key: "getAllAlerts",
          value: function getAllAlerts() {
            var _this20 = this;

            var arr = [];
            arr.push(this.tripId);
            var data = {
              tripId: arr
            };
            this.service.post("trips/alerts", data).pipe().subscribe(function (response) {
              if (response.data) {
                for (var k in response.data) {
                  _this20.mapAlerts = response.data[k];
                }
              }
            }, function (error) {});
          }
        }, {
          key: "calcTime",
          value: function calcTime(stopTime, startTime) {
            if (startTime && stopTime) {
              var duration = moment__WEBPACK_IMPORTED_MODULE_1__["duration"](moment__WEBPACK_IMPORTED_MODULE_1__(stopTime).diff(moment__WEBPACK_IMPORTED_MODULE_1__(startTime)));
              return moment__WEBPACK_IMPORTED_MODULE_1__["utc"](duration.as("milliseconds")).format("HH[h] mm[m]");
            }
          }
        }, {
          key: "singleExceptionShow",
          value: function singleExceptionShow(obj) {
            this.exceptionShowOnMap = false;
            this.singleAlertId = obj.id;
          }
        }]);

        return TripDetailComponent;
      }();

      TripDetailComponent.ɵfac = function TripDetailComponent_Factory(t) {
        return new (t || TripDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_8__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]));
      };

      TripDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TripDetailComponent,
        selectors: [["app-trip-detail"]],
        viewQuery: function TripDetailComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstAccordion = _t.first);
          }
        },
        decls: 215,
        vars: 107,
        consts: [["id", "top", 1, "titleWithBack"], [1, "backBtnImg", "cursor", 3, "click"], ["src", "assets/images/backButton.png"], [1, "BackTitle"], [1, "detailPageTrip"], [1, "tripDetailsLeft"], [1, "maintopBox"], [1, "tripdetailBox"], [1, "tripDetails"], [1, "tripDetailTopBox", "relBox"], [1, "tripDetailBox"], ["width", "24", "height", "24", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 24 24"], ["type", "text/css"], ["d", "M12,20.2c-4.5,0-8.2-3.7-8.2-8.2S7.5,3.8,12,3.8s8.2,3.7,8.2,8.2S16.5,20.2,12,20.2z M12,5.2\n\t\tc-3.7,0-6.8,3-6.8,6.8c0,3.7,3,6.8,6.8,6.8c3.7,0,6.8-3,6.8-6.8C18.8,8.3,15.7,5.2,12,5.2z", 1, "st0"], ["d", "M12,15.8c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C15.8,14.1,14.1,15.8,12,15.8z\n\t\t M12,9.8c-1.2,0-2.2,1-2.2,2.2c0,1.2,1,2.2,2.2,2.2c1.2,0,2.2-1,2.2-2.2C14.2,10.8,13.2,9.8,12,9.8z", 1, "st0"], ["d", "M12,4.8c-0.4,0-0.8-0.3-0.8-0.8V2c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v2C12.8,4.4,12.4,4.8,12,4.8z", 1, "st0"], ["d", "M4,12.8H2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h2c0.4,0,0.8,0.3,0.8,0.8S4.4,12.8,4,12.8z", 1, "st0"], ["d", "M12,22.8c-0.4,0-0.8-0.3-0.8-0.8v-2c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v2C12.8,22.4,12.4,22.8,12,22.8z", 1, "st0"], ["d", "M22,12.8h-2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h2c0.4,0,0.8,0.3,0.8,0.8S22.4,12.8,22,12.8z", 1, "st0"], [1, "d-flex", "mt3"], [1, "fromTitle", "fromTo", "mb-0"], [1, ""], [1, "mb-0", "fromTitle"], [1, "mb-0", "timeDesc"], ["d", "M12,22.8c-1.5,0-3-0.6-4.1-1.7c-2.9-2.8-6.2-7.4-5-12.8v0C4,3.4,8.3,1.2,12,1.2c0,0,0,0,0,0\n\t\tc3.7,0,8,2.2,9.1,7.1c1.2,5.4-2,9.9-5,12.7C15,22.2,13.5,22.8,12,22.8z M4.4,8.7C3.3,13.4,6.2,17.4,8.9,20c1.7,1.7,4.4,1.7,6.2,0\n\t\tc2.7-2.6,5.6-6.6,4.6-11.3c-1-4.4-4.7-5.9-7.6-5.9c0,0,0,0,0,0C9.1,2.8,5.3,4.3,4.4,8.7L4.4,8.7z", 1, "st0"], ["d", "M10.8,13.8c-0.2,0-0.4-0.1-0.5-0.2L8.7,12c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l1,1l3.5-3.5\n\t\tc0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-4,4C11.1,13.7,10.9,13.8,10.8,13.8z", 1, "st0"], [1, "timeDistBox", "mt-14"], ["width", "18", "height", "18", "viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6 1C3.245 1 1 3.245 1 6C1 8.755 3.245 11 6 11C8.755 11 11 8.755 11 6C11 3.245 8.755 1 6 1ZM8.175 7.785C8.105 7.905 7.98 7.97 7.85 7.97C7.785 7.97 7.72 7.955 7.66 7.915L6.11 6.99C5.725 6.76 5.44 6.255 5.44 5.81V3.76C5.44 3.555 5.61 3.385 5.815 3.385C6.02 3.385 6.19 3.555 6.19 3.76V5.81C6.19 5.99 6.34 6.255 6.495 6.345L8.045 7.27C8.225 7.375 8.285 7.605 8.175 7.785Z", "fill", "#474F5A"], [1, "timeDistTitle"], [1, "timeDistBox"], ["width", "20", "height", "20", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 18 18", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 18 18"], ["d", "M4.1,8.1C3.6,8.1,3,7.9,2.6,7.5C1.2,6.2,0.6,4.7,1,3.3c0.4-1.7,1.9-2.4,3.1-2.4c0,0,0,0,0,0\n                                               c1.5,0,2.8,1,3.1,2.4C7.6,4.7,7,6.2,5.6,7.5C5.2,7.9,4.6,8.1,4.1,8.1z M4.1,2.1c-0.8,0-1.7,0.4-2,1.5l0,0c-0.2,1,0.2,2,1.3,3\n                                               c0.4,0.4,1,0.4,1.4,0c0.7-0.7,1.6-1.8,1.3-3C5.8,2.5,4.8,2.1,4.1,2.1z", 1, "st0"], ["d", "M13.9,17.1c-0.5,0-1.1-0.2-1.5-0.6c-1.4-1.3-2-2.8-1.6-4.2c0.4-1.7,1.9-2.4,3.2-2.4c0,0,0,0,0,0\n                                               c1.5,0,2.8,1,3.1,2.4c0.3,1.4-0.2,2.9-1.6,4.2C15,16.9,14.4,17.1,13.9,17.1z M13.9,11.1c-0.8,0-1.7,0.4-2,1.5l0,0\n                                               c-0.3,1.2,0.5,2.3,1.3,3c0.4,0.4,1,0.4,1.4,0c0.7-0.7,1.6-1.8,1.3-3C15.6,11.5,14.6,11.1,13.9,11.1L13.9,11.1z", 1, "st0"], ["d", "M9,14.8H7c-0.9,0-1.7-0.5-2-1.4c-0.3-0.8-0.1-1.7,0.6-2.3l6-5.2c0.4-0.4,0.3-0.9,0.2-1\n                                               c-0.1-0.1-0.3-0.6-0.8-0.6H9c-0.3,0-0.6-0.3-0.6-0.6S8.7,3.1,9,3.1h2c0.9,0,1.7,0.5,2,1.4c0.3,0.8,0.1,1.7-0.6,2.3l-6,5.2\n                                               c-0.4,0.4-0.3,0.9-0.3,1s0.3,0.6,0.8,0.6h2c0.3,0,0.6,0.3,0.6,0.6S9.3,14.8,9,14.8z", 1, "st0"], ["d", "M4.1,4.9c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.7,0.7-0.7h0c0.4,0,0.8,0.3,0.8,0.7S4.5,4.9,4.1,4.9z", 1, "st0"], ["d", "M13.9,13.9c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.7-0.8h0c0.4,0,0.8,0.3,0.8,0.8S14.3,13.9,13.9,13.9z", 1, "st0"], [1, "tripdetailBox", "h-100"], [1, "tripDetails", "h-100"], [1, "tripDetailTopBox", "relBox", "h-100"], [1, "tripDetailBoxes"], ["class", "tripBoxFields selected-box", 4, "ngIf"], ["class", "tripBoxFields ", 4, "ngIf"], [1, "dayNightSec"], [1, "dayNightBox"], [1, "dayNightHeading", 3, "title"], [1, "commonBox", "night"], [1, "nightDetail"], [1, "commonBox", "day"], [1, "speedRoadSec"], [1, "speedRoadRight"], [1, "scoreBoxRight"], [1, "filerHalf"], [1, "speedGraphTitle"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "speedRoadLeft"], [1, "scoreBoxGuage", "h-100"], [1, "tripDetails", 3, "hidden"], [1, "tripDetailTopBox"], [1, "d-flex", "justify-content-between"], [1, "graphTitle"], [1, "graphTab__checkbox"], [1, "graphTab__checkbox__safeScore"], [1, "checkbox-dynamic", "activeSafeScore"], ["for", "flexCheckChecked", 1, "form-check-label"], [1, "graphTab__checkbox__otherScore"], [1, "checkbox-dynamic-second", "activeOther"], ["for", "flexCheckChecked", 1, "form-check-label", "text-capitalize"], ["id", "chartDiv", 3, "click"], ["id", "myChart"], [1, "mainBox", "mb-20", 3, "hidden"], [1, "typeTitle"], [1, "speedChart", 2, "height", "270px"], ["id", "roadType"], ["id", "myChartAcc"], [1, "d-flex", "justify-content-between", "graphTab"], [1, "graphTab__title"], [1, "graphTitle", "text-center", "text-capitalize", "d-inline-block"], [1, "checkbox-dynamic"], [1, "checkbox-dynamic-second"], [2, "height", "250px"], ["id", "lineChartScore"], ["class", "tripDetails", 4, "ngIf"], ["id", "map", 1, "mapShow"], [3, "tripDetail", "alerts", "singleId", "hideShowAlerts"], [1, "tripBoxFields", "selected-box"], [1, "tripId"], [1, "tripDesc"], [1, "tripBoxFields"], [3, "type", "value", "thick", "size", "min", "max", "thresholds"], [1, "naData"], [1, "tripHisTop"], [1, "tripHisTopLeft"], [1, "tripTitle", "mb-0", "mr-30", "d-inline-block"], [1, "countValue"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mb-1"], ["d", "M7.49984 18.3337H12.4998C16.6665 18.3337 18.3332 16.667 18.3332 12.5003V7.50033C18.3332 3.33366 16.6665 1.66699 12.4998 1.66699H7.49984C3.33317 1.66699 1.6665 3.33366 1.6665 7.50033V12.5003C1.6665 16.667 3.33317 18.3337 7.49984 18.3337Z", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8.82471 6.40039H12.358V9.94206", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.3583 6.40039L7.6416 11.1171", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 13.7588C8.24167 14.8421 11.7583 14.8421 15 13.7588", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "newcha", 1, "mat-expansion-Common", 3, "displayMode", "multi"], ["firstAccordion", "matAccordion"], [3, "hideToggle", 4, "ngFor", "ngForOf"], [3, "hideToggle"], ["panel1", ""], [1, "speedingPoint"], [1, "speedTitle"], [1, "exceptionName"], [1, "timeSec", "timewithMin"], [1, "timeSec"], [1, "timeSec", "lantlong"], ["class", "mat-expansion-Common-Body", 4, "ngFor", "ngForOf"], [1, "mat-expansion-Common-Body"], [1, "exceptionDetail"], [1, "exceptionDate"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 20 20", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 20 20"], ["d", "M10,19.1c-5,0-9.1-4.1-9.1-9.1S5,0.9,10,0.9S19.1,5,19.1,10S15,19.1,10,19.1z M10,2.4c-4.2,0-7.6,3.4-7.6,7.6\n                                       s3.4,7.6,7.6,7.6s7.6-3.4,7.6-7.6S14.2,2.4,10,2.4z", 1, "st0"], ["d", "M13.1,13.4c-0.1,0-0.3,0-0.4-0.1l-2.6-1.5c-0.7-0.4-1.2-1.3-1.2-2.1V6.3c0-0.4,0.3-0.8,0.8-0.8\n                                       s0.8,0.3,0.8,0.8v3.4c0,0.3,0.2,0.7,0.4,0.8l2.6,1.5c0.4,0.2,0.5,0.7,0.3,1C13.6,13.3,13.3,13.4,13.1,13.4z", 1, "st0"], [1, "exceptionTitle"], [4, "ngIf"], [1, "cursor", 3, "click"], ["width", "20", "height", "21", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 20 20", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 20 20"], ["d", "M13,17.8c-0.4,0-0.7-0.1-1-0.2l-4.4-2.2c-0.3-0.1-0.8-0.1-1,0l-2,1.1C3.9,17,3,17.1,2.3,16.7\n                                       c-0.7-0.4-1-1.2-1-2.1V6.5c0-0.7,0.5-1.6,1.1-2l3.6-2.1c0.6-0.3,1.5-0.4,2.1-0.1l4.4,2.2c0.3,0.1,0.8,0.1,1,0l2-1.1\n                                       c0.8-0.5,1.7-0.5,2.4-0.2c0.7,0.4,1,1.2,1,2.1v8.1c0,0.7-0.5,1.6-1.1,2l-3.6,2.1C13.9,17.7,13.5,17.8,13,17.8z M7.2,14.1\n                                       c0.4,0,0.7,0.1,1,0.2l4.4,2.2c0.3,0.1,0.8,0.1,1,0l3.6-2.1c0.3-0.2,0.5-0.6,0.5-0.9V5.4c0-0.5-0.2-0.9-0.4-1.1\n                                       c-0.3-0.2-0.7-0.1-1.2,0.2l-2,1.1C13.6,5.9,12.7,6,12,5.7L7.7,3.5c-0.3-0.1-0.8-0.1-1,0L3,5.6C2.8,5.7,2.5,6.2,2.5,6.5v8.1\n                                       c0,0.5,0.2,0.9,0.4,1.1c0.3,0.2,0.7,0.1,1.2-0.2l2-1.1C6.4,14.2,6.8,14.1,7.2,14.1z", 1, "st0"], ["d", "M7.1,14.8c-0.3,0-0.6-0.3-0.6-0.6V3.3c0-0.3,0.3-0.6,0.6-0.6S7.7,3,7.7,3.3v10.8C7.7,14.5,7.5,14.8,7.1,14.8z", 1, "st0"], ["d", "M13.1,17.3c-0.3,0-0.6-0.3-0.6-0.6V5.5c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v11.1\n                                       C13.7,17,13.4,17.3,13.1,17.3z", 1, "st0"]],
        template: function TripDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TripDetailComponent_Template_span_click_1_listener() {
              return ctx.goToLastPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "style", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " .st0 { fill: #001E50; } ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "style", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " .st0 { fill: #604EFF; } ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "svg", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "style", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " .st0 { fill: #001E50; } ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, TripDetailComponent_div_87_Template, 6, 4, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, TripDetailComponent_div_88_Template, 6, 4, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h5", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](102, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, TripDetailComponent_ng_container_114_Template, 2, 7, "ng-container", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, TripDetailComponent_ng_template_115_Template, 2, 0, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, TripDetailComponent_ng_container_121_Template, 2, 7, "ng-container", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, TripDetailComponent_ng_template_122_Template, 2, 0, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](129, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, TripDetailComponent_ng_container_130_Template, 2, 7, "ng-container", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, TripDetailComponent_ng_template_131_Template, 2, 0, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](136, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, TripDetailComponent_ng_container_137_Template, 2, 7, "ng-container", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, TripDetailComponent_ng_template_138_Template, 2, 0, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](144, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, TripDetailComponent_ng_container_145_Template, 2, 7, "ng-container", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, TripDetailComponent_ng_template_146_Template, 2, 0, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](153, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "label", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](159, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](164, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TripDetailComponent_Template_div_click_165_listener() {
              return ctx.openChartPopup(ctx.speedProfile, 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "canvas", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h4", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](170, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "canvas", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](178, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](184, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](189, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TripDetailComponent_Template_div_click_190_listener() {
              return ctx.openChartPopup(ctx.accProfile, 2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "canvas", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h4", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](198, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "label", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](204, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](209, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "canvas", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](212, TripDetailComponent_div_212_Template, 18, 7, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "app-trip-detail-map", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 55, "t.tripDetailInfo"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 57, "from"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 ", (ctx.tripDetail == null ? null : ctx.tripDetail.start_location_address) || "NA", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\xA0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 59, "startedAt"), ": ", ctx.dateTimeFormat(ctx.tripDetail == null ? null : ctx.tripDetail.start_date_time), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 61, "to"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 ", (ctx.tripDetail == null ? null : ctx.tripDetail.stop_location_address) || "NA", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\xA0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 63, "endedAt"), ": ", ctx.dateTimeFormat(ctx.tripDetail == null ? null : ctx.tripDetail.stop_date_time), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 65, "t.totalTime"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.calcTime(ctx.tripDetail == null ? null : ctx.tripDetail.stop_date_time, ctx.tripDetail == null ? null : ctx.tripDetail.start_date_time));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 67, "totalDistance"), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.convertToDutch(ctx.tripDetail == null ? null : ctx.tripDetail.distance), " km");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.tripDetail == null ? null : ctx.tripDetail.driver_detail == null ? null : ctx.tripDetail.driver_detail.first_name) || (ctx.tripDetail == null ? null : ctx.tripDetail.driver_detail == null ? null : ctx.tripDetail.driver_detail.last_name));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tripDetail == null ? null : ctx.tripDetail.license_plate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 69, "t.nightDriving"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](94, 71, "t.nightDriving"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.convertToHoursMin(ctx.tripDetail == null ? null : ctx.tripDetail.tripDayNightCount == null ? null : ctx.tripDetail.tripDayNightCount.nightTripMinute));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 73, "t.dayDriving"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](102, 75, "t.dayDriving"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.convertToHoursMin(ctx.tripDetail == null ? null : ctx.tripDetail.tripDayNightCount == null ? null : ctx.tripDetail.tripDayNightCount.dayTripMinute));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](113, 77, "t.speedScore"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.speed !== "1001.0" && ctx.speed !== 1001 && ctx.speed !== "1001")("ngIfElse", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 79, "t.cornerScore"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cornering !== "1001.0" && ctx.cornering !== 1001 && ctx.cornering !== "1001")("ngIfElse", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](129, 81, "t.accScore"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.acceleration !== "1001.0" && ctx.acceleration !== 1001 && ctx.acceleration !== "1001")("ngIfElse", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](136, 83, "t.deaccScore"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.braking !== "1001.0" && ctx.braking !== 1001 && ctx.braking !== "1001")("ngIfElse", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](144, 85, "idiling"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idling !== "1001.0" && ctx.idling !== 1001 && ctx.idling !== "1001")("ngIfElse", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.speedProfile.time || !ctx.speedProfile.time.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](153, 87, "t.speedProfile"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](159, 89, "speed"), " (km/h)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](164, 91, "limit"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.roadTypeData || !ctx.roadTypeData.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](170, 93, "vehicleDrivenSpeed"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.accProfile.time || !ctx.accProfile.time.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](178, 95, "t.accProfile"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](184, 97, "accelerationprofile"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](189, 99, "breakingprofile"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.dayNightScore.date || !ctx.dayNightScore.date.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](198, 101, "dayvsnightdrivingscore"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](204, 103, "daydriving"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](209, 105, "nightdriving"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exceptionCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tripDetail", ctx.tripDetail)("alerts", ctx.mapAlerts)("singleId", ctx.singleAlertId)("hideShowAlerts", ctx.exceptionShowOnMap);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_components_trip_detail_map_trip_detail_map_component__WEBPACK_IMPORTED_MODULE_12__["TripDetailMapComponent"], ngx_gauge__WEBPACK_IMPORTED_MODULE_13__["ɵa"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionPanelHeader"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: [_c1]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-trip-detail",
            templateUrl: "./trip-detail.component.html",
            styleUrls: ["./trip-detail.component.scss"]
          }]
        }], function () {
          return [{
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_8__["LocalService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
          }];
        }, {
          firstAccordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["firstAccordion"]
          }]
        });
      })();

      var DialogContentExampleDialog = /*#__PURE__*/function () {
        function DialogContentExampleDialog(dialogRef, elementRef, translate, data) {
          var _chart_js__WEBPACK_IM2,
              _this21 = this;

          _classCallCheck(this, DialogContentExampleDialog);

          this.dialogRef = dialogRef;
          this.elementRef = elementRef;
          this.translate = translate;
          this.data = data;
          this.safeScoreCheckbox = true;
          this.otherCheckbox = true;

          (_chart_js__WEBPACK_IM2 = chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]).register.apply(_chart_js__WEBPACK_IM2, _toConsumableArray(chart_js__WEBPACK_IMPORTED_MODULE_2__["registerables"]));

          chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].register(chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_3__["default"]);
          setTimeout(function () {
            if (_this21.data.type == 1) {
              _this21.createSpeedProfileChart(_this21.data.chartData);
            } else {
              _this21.createAccProfileChart(_this21.data.chartData);
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
              borderColor: '#001E50',
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

            this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](htmlRef, {
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
                  borderColor: "#939EAA",
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

            this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](htmlRef, {
              type: "line",
              data: {
                labels: labels,
                datasets: [{
                  label: accelerationprofile,
                  data: data['acc'],
                  borderColor: "#001E50"
                }, {
                  label: breakingprofile,
                  data: data['deacc'],
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
        return new (t || DialogContentExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]));
      };

      DialogContentExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogContentExampleDialog,
        selectors: [["dialog-content-example-dialog"]],
        decls: 10,
        vars: 2,
        consts: [["mat-button", "", 1, "close", 3, "click"], ["src", "assets/images/Close.svg"], ["mat-dialog-content", ""], [1, "chartZoom", "cursor", 3, "click"], [1, "chartDiv"], ["id", "popupChart"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "profileNameDark", "text-center"], [1, "profileNameDark", "text-center", "mb-0"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DialogContentExampleDialog_ng_template_8_Template, 3, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type == 1)("ngIfElse", _r1);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: [_c1]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "dialog-content-example-dialog",
            templateUrl: "./chart-data.html",
            styleUrls: ["./trip-detail.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cv0g":
    /*!****************************************************************!*\
      !*** ./src/app/main/fleetOverview/trip/trip-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: TripRoutingModule */

    /***/
    function cv0g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TripRoutingModule", function () {
        return TripRoutingModule;
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


      var _trip_dashboard_trip_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./trip-dashboard/trip-dashboard.component */
      "6pUh");
      /* harmony import */


      var _trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./trip-detail/trip-detail.component */
      "OQqv");

      var routes = [{
        path: "",
        component: _trip_dashboard_trip_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["TripDashboardComponent"],
        pathMatch: 'full'
      }, {
        path: src_app_config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].tripDetail.path,
        component: _trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_4__["TripDetailComponent"],
        pathMatch: 'full'
      }];

      var TripRoutingModule = /*#__PURE__*/_createClass(function TripRoutingModule() {
        _classCallCheck(this, TripRoutingModule);
      });

      TripRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TripRoutingModule
      });
      TripRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TripRoutingModule_Factory(t) {
          return new (t || TripRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TripRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripRoutingModule, [{
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
    "oFxD":
    /*!********************************************************!*\
      !*** ./src/app/main/fleetOverview/trip/trip.module.ts ***!
      \********************************************************/

    /*! exports provided: TripModule */

    /***/
    function oFxD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TripModule", function () {
        return TripModule;
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


      var _trip_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./trip-routing.module */
      "cv0g");
      /* harmony import */


      var _trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./trip-detail/trip-detail.component */
      "OQqv");
      /* harmony import */


      var _trip_dashboard_trip_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./trip-dashboard/trip-dashboard.component */
      "6pUh");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_config_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/config/material */
      "Uo7g");
      /* harmony import */


      var ngx_gauge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-gauge */
      "Mumg");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-daterangepicker-material */
      "YhS8");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/components/component.module */
      "8OTh");
      /* harmony import */


      var ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-shimmer-loading */
      "+HUQ");

      var TripModule = /*#__PURE__*/_createClass(function TripModule() {
        _classCallCheck(this, TripModule);
      });

      TripModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TripModule
      });
      TripModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TripModule_Factory(t) {
          return new (t || TripModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _trip_routing_module__WEBPACK_IMPORTED_MODULE_2__["TripRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_11__["NgxDaterangepickerMd"].forRoot(), src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], ngx_gauge__WEBPACK_IMPORTED_MODULE_7__["NgxGaugeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
          extend: true
        }), src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_13__["ComponentModule"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__["NgxShimmerLoadingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TripModule, {
          declarations: [_trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_3__["TripDetailComponent"], _trip_dashboard_trip_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["TripDashboardComponent"], _trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_3__["DialogContentExampleDialog"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _trip_routing_module__WEBPACK_IMPORTED_MODULE_2__["TripRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_11__["NgxDaterangepickerMd"], src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], ngx_gauge__WEBPACK_IMPORTED_MODULE_7__["NgxGaugeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_13__["ComponentModule"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__["NgxShimmerLoadingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_3__["TripDetailComponent"], _trip_dashboard_trip_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["TripDashboardComponent"], _trip_detail_trip_detail_component__WEBPACK_IMPORTED_MODULE_3__["DialogContentExampleDialog"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _trip_routing_module__WEBPACK_IMPORTED_MODULE_2__["TripRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_11__["NgxDaterangepickerMd"].forRoot(), src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], ngx_gauge__WEBPACK_IMPORTED_MODULE_7__["NgxGaugeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
              extend: true
            }), src_app_shared_components_component_module__WEBPACK_IMPORTED_MODULE_13__["ComponentModule"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_14__["NgxShimmerLoadingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=fleetOverview-trip-trip-module-es5.js.map