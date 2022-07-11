(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fleetOverview-mapview-mapview-module"], {
    /***/
    "+SWF":
    /*!**********************************************************************!*\
      !*** ./src/app/main/fleetOverview/mapview/mapview-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: MapviewRoutingModule */

    /***/
    function SWF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapviewRoutingModule", function () {
        return MapviewRoutingModule;
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


      var _mapview_dashboard_mapview_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mapview-dashboard/mapview-dashboard.component */
      "xWwU");

      var routes = [{
        path: "",
        component: _mapview_dashboard_mapview_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["MapviewDashboardComponent"],
        pathMatch: 'full'
      }];

      var MapviewRoutingModule = /*#__PURE__*/_createClass(function MapviewRoutingModule() {
        _classCallCheck(this, MapviewRoutingModule);
      });

      MapviewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MapviewRoutingModule
      });
      MapviewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MapviewRoutingModule_Factory(t) {
          return new (t || MapviewRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapviewRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapviewRoutingModule, [{
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
    "ZyhS":
    /*!**************************************************************!*\
      !*** ./src/app/main/fleetOverview/mapview/mapview.module.ts ***!
      \**************************************************************/

    /*! exports provided: MapviewModule */

    /***/
    function ZyhS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapviewModule", function () {
        return MapviewModule;
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


      var _mapview_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mapview-routing.module */
      "+SWF");
      /* harmony import */


      var _mapview_dashboard_mapview_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mapview-dashboard/mapview-dashboard.component */
      "xWwU");
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


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-shimmer-loading */
      "+HUQ");

      var MapviewModule = /*#__PURE__*/_createClass(function MapviewModule() {
        _classCallCheck(this, MapviewModule);
      });

      MapviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MapviewModule
      });
      MapviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MapviewModule_Factory(t) {
          return new (t || MapviewModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _mapview_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapviewRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(), src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
          extend: true
        }), ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_10__["NgxShimmerLoadingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapviewModule, {
          declarations: [_mapview_dashboard_mapview_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["MapviewDashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _mapview_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapviewRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"], src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_10__["NgxShimmerLoadingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapviewModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_mapview_dashboard_mapview_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["MapviewDashboardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _mapview_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapviewRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_7__["NgxDaterangepickerMd"].forRoot(), src_app_config_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
              extend: true
            }), ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_10__["NgxShimmerLoadingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xWwU":
    /*!*********************************************************************************************!*\
      !*** ./src/app/main/fleetOverview/mapview/mapview-dashboard/mapview-dashboard.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: MapviewDashboardComponent */

    /***/
    function xWwU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapviewDashboardComponent", function () {
        return MapviewDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/config/app-config */
      "Tr6M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      "AytR");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/config/route-config */
      "1r8O");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var MapviewDashboardComponent = /*#__PURE__*/function () {
        function MapviewDashboardComponent(cd, service, router, localService) {
          _classCallCheck(this, MapviewDashboardComponent);

          this.cd = cd;
          this.service = service;
          this.router = router;
          this.localService = localService;
          this.isCollapsed = true;
          this.vehicleCategoryData = [];
          this.vehicleList = [];
          this.selectedVehicleCategory = 'all';
          this.selectedVehicle = 'all';
          this.bounds = new google.maps.LatLngBounds();
          this.vehicleMarkerList = {};
          this.customeRange = 'Custom';
          this.setDate = 'Set Date';
          this.cancelDate = 'Cancel';
          this.filterCalledMap = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.listernerArray = {};
        }

        _createClass(MapviewDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.filterCalledMap = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            setTimeout(function () {
              _this2.initMap();
            }, 20);
            this.filterCalledMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500)).subscribe(function (value) {
              if (value) {
                _this2.selectedOrgID = _this2.localService.getItem("selectedOrgs");

                if (_this2.selectedOrgID) {
                  _this2.selectedOrgID = JSON.parse(_this2.selectedOrgID);
                }

                _this2.resetToLastState();

                _this2.filterApply();
              }
            });
            this.getSocketToken();
            this.localService.getFilter().subscribe(function (val) {
              if (val && _this2.router.url.split('?')[0] == src_app_config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].mapview.url) {
                _this2.filterCalledMap.next(true);
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
          key: "getSocketToken",
          value: function getSocketToken() {
            var _this3 = this;

            this.service.get("validateSocket").pipe().subscribe(function (response) {
              if (response.access_token) {
                var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].socketUrl + '?token=' + response.access_token;
                _this3.socket = new WebSocket(url);
                var _this = _this3;

                _this3.socket.addEventListener('message', function (event) {
                  _this.dataParse(event.data);
                });

                _this3.socket.addEventListener('close', function (event) {// console.log('The connection has been closed');
                });
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
                _this4.selectedVehicleCategory = 'all';
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
                _this5.selectedVehicle = 'all';
              }
            }, function (error) {});
          }
        }, {
          key: "initMap",
          value: function initMap() {
            var neitherLandCordi = new google.maps.LatLng(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].netherlandLat, src_app_config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].netherlandLong);
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
              styles: src_app_config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].mapStyle
            });
          }
        }, {
          key: "createMarker",
          value: function createMarker(data) {
            var infowindow = new google.maps.InfoWindow({
              content: ''
            });
            var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

            if (!data.license_plate || data.license_plate == 'null') {
              data.license_plate = 'NA';
            }

            data.driver_name = data.driver_name ? data.driver_name : "NA";
            data.road_type = data.road_type ? data.road_type : "NA";
            var html = "\n    <div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n    <div style=\"padding:10px; width:145px; text-align:center; background: rgba(71, 79, 90, 0.05);\n    border-radius: 8px; font: 600 12px/18px ModernEra; color:#474F5A; margin-right:10px\">\n        License: <span style=\"color:#474F5A; font: 600 14px/18px ModernEra; margin-left:6px\">".concat(data.license_plate, "</span>\n    </div>\n    ");
            var extendedHtml = "\n    <div>\n        <div style=\"padding:10px; width:185px; text-align:center; background: rgba(71, 79, 90, 0.05);\n    border-radius: 8px; font: 600 12px/18px ModernEra; color:#474F5A\">\n        Speed: <span style=\"color:#474F5A; font: 600 14px/18px ModernEra; margin-left:6px\">".concat(this.service.convertToDutch(data.current_speed), " kmph</span>\n    </div>\n    </div>");
            var latLng = new google.maps.LatLng(data.current_lat, data.current_long);

            if (data.pre_lat == data.current_lat && data.pre_long == data.current_long || data.idle_time > 120) {
              html = html + "</div>";
              this.vehicleMarkerList[data.vehicle_id] = new google.maps.Marker({
                position: latLng,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  fillColor: color,
                  fillOpacity: 1,
                  strokeColor: color,
                  scale: 6
                },
                map: this.map
              });
            } else {
              html = html + extendedHtml + "</div>";
              this.vehicleMarkerList[data.vehicle_id] = new google.maps.Marker({
                position: latLng,
                icon: {
                  path: 'M21.134 4.5C21.5189 3.83333 22.4811 3.83333 22.866 4.5L31.134 18.8205C31.5189 19.4872 31.0378 20.3205 30.268 20.3205H13.7321C12.9622 20.3205 12.4811 19.4872 12.866 18.8205L21.134 4.5Z',
                  fillColor: color,
                  fillOpacity: 1,
                  strokeColor: color,
                  scale: 1
                },
                map: this.map
              });
            }

            this.bindInfoWindow(this.vehicleMarkerList[data.vehicle_id], this.map, infowindow, html, data.vehicle_id);
            this.bounds.extend(latLng);
            this.map.fitBounds(this.bounds);
          }
        }, {
          key: "updateMarker",
          value: function updateMarker(data) {
            var latlng = new google.maps.LatLng(data.current_lat, data.current_long);
            var color = this.vehicleMarkerList[data.vehicle_id].icon.fillColor;
            var infowindow = new google.maps.InfoWindow({
              content: ''
            });

            if (!data.license_plate || data.license_plate == 'null') {
              data.license_plate = 'NA';
            }

            data.driver_name = data.driver_name ? data.driver_name : "NA";
            data.road_type = data.road_type ? data.road_type : "NA";
            var html = "\n    <div style=\"display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;\">\n    <div style=\"padding:10px; width:145px; text-align:center; background: rgba(71, 79, 90, 0.05);\n    border-radius: 8px; font: 600 12px/18px ModernEra; color:#474F5A; margin-right:10px\">\n        License: <span style=\"color:#474F5A; font: 600 14px/18px ModernEra; margin-left:6px\">".concat(data.license_plate, "</span>\n    </div>\n    ");
            var extendedHtml = "\n    <div>\n        <div style=\"padding:10px; width:185px; text-align:center; background: rgba(71, 79, 90, 0.05);\n    border-radius: 8px; font: 600 12px/18px ModernEra; color:#474F5A\">\n    Speed: <span style=\"color:#474F5A; font: 600 14px/18px ModernEra; margin-left:6px\">".concat(this.service.convertToDutch(data.current_speed), " kmph</span>\n    </div>\n    </div>");

            if (data.pre_lat == data.current_lat && data.pre_long == data.current_long || data.idle_time > 120) {
              html = html + "</div>";
              this.vehicleMarkerList[data.vehicle_id].setIcon({
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: color,
                fillOpacity: 1,
                strokeColor: color,
                scale: 6
              });
              this.vehicleMarkerList[data.vehicle_id].setPosition(latlng);
            } else {
              html = html + extendedHtml + "</div>";
              this.vehicleMarkerList[data.vehicle_id].setIcon({
                path: 'M21.134 4.5C21.5189 3.83333 22.4811 3.83333 22.866 4.5L31.134 18.8205C31.5189 19.4872 31.0378 20.3205 30.268 20.3205H13.7321C12.9622 20.3205 12.4811 19.4872 12.866 18.8205L21.134 4.5Z',
                fillColor: color,
                fillOpacity: 1,
                strokeColor: color,
                scale: 1
              });
              this.animatedMove(this.vehicleMarkerList[data.vehicle_id], .5, this.vehicleMarkerList[data.vehicle_id].position, latlng);
            }

            this.bindInfoWindow(this.vehicleMarkerList[data.vehicle_id], this.map, infowindow, html, data.vehicle_id); // this.bounds.extend(latlng);
            // this.map.fitBounds(this.bounds);
          }
        }, {
          key: "bindInfoWindow",
          value: function bindInfoWindow(marker, map, infowindow, html, vehicleId) {
            if (this.listernerArray[vehicleId]) {
              google.maps.event.removeListener(this.listernerArray[vehicleId]);
            }

            this.listernerArray[vehicleId] = google.maps.event.addListener(marker, 'mouseover', function () {
              infowindow.setContent(html);
              infowindow.open(map, marker);
            });
            google.maps.event.addListener(marker, 'mouseout', function () {
              infowindow.close();
            });
            google.maps.event.addListener(marker, 'dblclick', function () {
              map.setZoom(12);
              map.setCenter(marker.getPosition());
            });
          }
        }, {
          key: "resetToLastState",
          value: function resetToLastState() {
            var category = this.localService.getItem("category");
            var vehicle = this.localService.getItem("vehicle");
            category && category !== 'all' ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = 'all';
            vehicle && vehicle !== 'all' ? this.selectedVehicle = vehicle : this.selectedVehicle = 'all';
          }
        }, {
          key: "filterApply",
          value: function filterApply() {
            this.localService.setItem("category", this.selectedVehicleCategory);
            this.localService.setItem("vehicle", this.selectedVehicle);
            this.clearOverlays();
            this.updatePageData();
          }
        }, {
          key: "clearOverlays",
          value: function clearOverlays() {
            var key = Object.keys(this.vehicleMarkerList);

            for (var i = 0; i < key.length; i++) {
              this.vehicleMarkerList[key[i]].setMap(null);
            }

            this.vehicleMarkerList = {};
          }
        }, {
          key: "waitForSocketConnection",
          value: function waitForSocketConnection(socket, callback) {
            var _this = this;

            setTimeout(function () {
              if (socket && socket.readyState === 1) {
                // console.log("Connection is made")
                if (callback != null) {
                  callback();
                }
              } else {
                // console.log("wait for connection...")
                _this.waitForSocketConnection(socket, callback);
              }
            }, 5); // wait 5 milisecond for the connection...
          }
        }, {
          key: "updatePageData",
          value: function updatePageData() {
            var _this6 = this;

            var _this = this;

            var category = [];
            var vehicle = [];

            if (this.selectedVehicle && this.selectedVehicle !== 'all') {
              vehicle = [this.selectedVehicle];
            } else {
              if (this.selectedVehicleCategory && this.selectedVehicleCategory !== 'all') {
                category = [this.selectedVehicleCategory];
              }
            } // this.getDashboardData();


            var timestamp = '';

            if (this.map) {
              this.map.setCenter(new google.maps.LatLng(src_app_config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].netherlandLat, src_app_config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].netherlandLong));
              this.map.setZoom(8);
            }

            clearInterval(this.interval);
            var val = 0; // this.listernerArray = {};

            if (this.selectedOrgID.length) {
              // Wait until the state of the socket is not ready and send the message when it is...
              this.interval = setInterval(function () {
                _this6.waitForSocketConnection(_this6.socket, function () {
                  var data = {
                    "action": "liveFeed",
                    "orgId": _this.selectedOrgID,
                    "vehicleCategory": category,
                    "licensePlate": vehicle,
                    "message": "testing",
                    "timestamp": timestamp
                  };

                  if (val == 0) {
                    _this.clearOverlays();
                  }

                  val = val + 1; // console.log("message sent!!!", data);

                  timestamp = moment__WEBPACK_IMPORTED_MODULE_3__().utc().format("yyyy-M-D hh:mm:ss");

                  _this.socket.send(JSON.stringify(data));
                });
              }, 2000);
            }
          } // dashBoardData: any = {}
          // isLoadingshimmer = false;
          // getDashboardData() {
          //   this.isLoadingshimmer = true;
          //   let querryParams = this.createQuerryparams()
          //   this.service.get(`zego/dashboard/activity-count-v2?${querryParams}`).pipe().subscribe(response => {
          //     if (response.data) {
          //       this.dashBoardData = response.data;
          //       this.dashBoardData["safeScoreChange"] = parseFloat(
          //         this.dashBoardData.pre_safe_score
          //       ) !== 1001 && parseFloat(
          //         this.dashBoardData.pre_safe_score
          //       ) !== 0 && parseFloat(
          //         this.dashBoardData.safe_score
          //       ) !== 1001
          //         ? ((parseFloat(this.dashBoardData.safe_score) -
          //           parseFloat(this.dashBoardData.pre_safe_score)) /
          //           parseFloat(this.dashBoardData.pre_safe_score)) *
          //         100
          //         : 0;
          //       this.dashBoardData["driverChange"] = parseFloat(
          //         this.dashBoardData.pre_total_drivers
          //       ) !== 1001 && parseFloat(
          //         this.dashBoardData.pre_total_drivers
          //       ) !== 0 && parseFloat(
          //         this.dashBoardData.total_drivers
          //       ) !== 1001
          //         ? ((parseFloat(this.dashBoardData.total_drivers) -
          //           parseFloat(this.dashBoardData.pre_total_drivers)) /
          //           parseFloat(this.dashBoardData.pre_total_drivers)) *
          //         100
          //         : 0;
          //       this.dashBoardData["tripChange"] = parseFloat(
          //         this.dashBoardData.pre_total_trips
          //       ) !== 1001 && parseFloat(
          //         this.dashBoardData.pre_total_trips
          //       ) !== 0 && parseFloat(
          //         this.dashBoardData.total_trips
          //       ) !== 1001
          //         ? ((parseFloat(this.dashBoardData.total_trips) -
          //           parseFloat(this.dashBoardData.pre_total_trips)) /
          //           parseFloat(this.dashBoardData.pre_total_trips)) *
          //         100
          //         : 0;
          //       this.dashBoardData["vehicleChange"] = parseFloat(
          //         this.dashBoardData.pre_total_drivers
          //       ) !== 1001 && parseFloat(
          //         this.dashBoardData.pre_total_drivers
          //       ) !== 0 && parseFloat(
          //         this.dashBoardData.total_vehicles
          //       ) !== 1001
          //         ? ((parseFloat(this.dashBoardData.total_vehicles) -
          //           parseFloat(this.dashBoardData.pre_total_vehicles)) /
          //           parseFloat(this.dashBoardData.pre_total_vehicles)) *
          //         100
          //         : 0;
          //       this.dashBoardData["exceptionChange"] = parseFloat(
          //         this.dashBoardData.pre_exception
          //       ) !== 1001 && parseFloat(
          //         this.dashBoardData.pre_exception
          //       ) !== 0 && parseFloat(
          //         this.dashBoardData.exception
          //       ) !== 1001
          //         ? ((parseFloat(this.dashBoardData.exception) -
          //           parseFloat(this.dashBoardData.pre_exception)) /
          //           parseFloat(this.dashBoardData.pre_exception)) *
          //         100
          //         : 0;
          //       this.dashBoardData["distanceChange"] = parseFloat(
          //         this.dashBoardData.pre_total_distance
          //       ) !== 1001 && parseFloat(
          //         this.dashBoardData.pre_total_distance
          //       ) !== 0 && parseFloat(
          //         this.dashBoardData.total_distance
          //       ) !== 1001
          //         ? ((parseFloat(this.dashBoardData.total_distance) -
          //           parseFloat(this.dashBoardData.pre_total_distance)) /
          //           parseFloat(this.dashBoardData.pre_total_distance)) *
          //         100
          //         : 0;
          //     }
          //     this.isLoadingshimmer = false;
          //     this.cd.detectChanges();
          //   }, (error) => {
          //     this.dashBoardData = {};
          //     this.isLoadingshimmer = false;
          //     this.cd.detectChanges();
          //   })
          // }
          // createQuerryparams() {
          //   let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
          //   querryParams = querryParams + `&from_date=${moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD')}`
          //   querryParams = querryParams + `&to_date=${moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')}`
          //   querryParams = querryParams + `&custom_filter=false&filter_value=4`
          //   return querryParams;
          // }

        }, {
          key: "dataParse",
          value: function dataParse(event) {
            event = JSON.parse(event);

            if (event.action && event.action == 'liveFeed' && event.data) {
              var data = event.data;

              for (var i = 0; i < data.length; i++) {
                if (this.interval) {
                  var key = Object.keys(this.vehicleMarkerList); // if(data[i]['license_plate']=='VBB-92-F')
                  // console.log(data[i])

                  if (key.includes(String(data[i]['vehicle_id']))) {
                    this.updateMarker(data[i]); // console.log(data[i]);
                  } else {
                    this.createMarker(data[i]); // console.log(data[i]);
                  }
                } else {
                  break;
                }
              }
            }
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.selectedVehicleCategory = 'all';
            this.selectedVehicle = 'all';
            this.filterApply();
          }
        }, {
          key: "animatedMove",
          value: function animatedMove(marker, t, current, moveto) {
            var deltalat = (moveto.lat() - current.lat()) / 100;
            var deltalng = (moveto.lng() - current.lng()) / 100;
            var delay = 10 * t;

            for (var i = 0; i < 100; i++) {
              (function (ind) {
                setTimeout(function () {
                  var lat = marker.position.lat();
                  var lng = marker.position.lng();
                  lat += deltalat;
                  lng += deltalng;
                  var latlng = new google.maps.LatLng(lat, lng);
                  marker.setPosition(latlng);
                }, delay * ind);
              })(i);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            //Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
            // this.webSocket.removeListener();
            clearInterval(this.interval);
            if (this.socket) this.socket.removeEventListener('message', function (event) {
              console.log('removed');
            });
          }
        }]);

        return MapviewDashboardComponent;
      }();

      MapviewDashboardComponent.ɵfac = function MapviewDashboardComponent_Factory(t) {
        return new (t || MapviewDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"]));
      };

      MapviewDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MapviewDashboardComponent,
        selectors: [["app-mapview-dashboard"]],
        decls: 13,
        vars: 3,
        consts: [[1, "mapSec"], [1, "mapTitle"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.49984 18.3332H12.4998C16.6665 18.3332 18.3332 16.6665 18.3332 12.4998V7.49984C18.3332 3.33317 16.6665 1.6665 12.4998 1.6665H7.49984C3.33317 1.6665 1.6665 3.33317 1.6665 7.49984V12.4998C1.6665 16.6665 3.33317 18.3332 7.49984 18.3332Z", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8.82471 6.3999H12.358V9.94157", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.3583 6.3999L7.6416 11.1166", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 13.7583C8.24167 14.8416 11.7583 14.8416 15 13.7583", "stroke", "#667280", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mapBox"], ["id", "map"]],
        template: function MapviewDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "sidebar.mapView"));
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: ["#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 650px;\n  margin: 0px;\n  padding: 0px;\n  border-radius: 12px;\n}\n.mapSec[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 9.60114px;\n  padding: 23px 20px;\n}\n.mapSec[_ngcontent-%COMP%]   .mapTitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.mapSec[_ngcontent-%COMP%]   .mapTitle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 700 16px/19px ModernEra_Bold;\n  margin-bottom: 0;\n  margin-right: 5px;\n  color: #001e50;\n}\n.mapSec[_ngcontent-%COMP%]   .mapBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 700px;\n  background-color: #ffffff;\n}\n  .gm-fullscreen-control {\n  background: #0064ff !important;\n  background-image: url(\"/assets/images/fullscreen_map.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  height: 44px !important;\n  width: 44px !important;\n  border-radius: 50% !important;\n}\n  .gm-fullscreen-control img {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbWFwdmlldy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUNFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxtQkRMTTtFQ01OLHdCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUNFO0VEMkhBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUMzSEUsbUJBQUE7RUFDQSxtQkFBQTtBQUdKO0FBRkk7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRFpZO0FDZ0JsQjtBQURFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFHQSx5QkR4Qkk7QUN5QlI7QUFRRTtFQUNFLDhCQUFBO0VBQ0EscUVBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBTEo7QUFNSTtFQUNFLHdCQUFBO0FBSk4iLCJmaWxlIjoibWFwdmlldy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIkBpbXBvcnQgXCIuLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY1MHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4ubWFwU2VjIHtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5LjYwMTE0cHg7XG4gIHBhZGRpbmc6IDIzcHggMjBweDtcbiAgLm1hcFRpdGxlIHtcbiAgICBAaW5jbHVkZSBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBoNCB7XG4gICAgICBmb250OiA3MDAgMTZweC8xOXB4IE1vZGVybkVyYV9Cb2xkO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgfVxuICB9XG4gIC5tYXBCb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgLy8gbWF4LWhlaWdodDogNzAwcHg7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAvLyBpbWd7XG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gfVxuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC5nbS1mdWxsc2NyZWVuLWNvbnRyb2wge1xuICAgIGJhY2tncm91bmQ6ICMwMDY0ZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9mdWxsc2NyZWVuX21hcC5zdmdcIikgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgICBpbWcge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapviewDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mapview-dashboard',
            templateUrl: './mapview-dashboard.component.html',
            styleUrls: ['./mapview-dashboard.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_9__["LocalService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=fleetOverview-mapview-mapview-module-es5.js.map