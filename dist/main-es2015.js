(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Downloads/hm-portal/src/main.ts */"zUnb");


/***/ }),

/***/ "1r8O":
/*!****************************************!*\
  !*** ./src/app/config/route-config.ts ***!
  \****************************************/
/*! exports provided: RouteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfig", function() { return RouteConfig; });
// Define all the route urls for the whole app
const RouteConfig = {
    signin: { path: 'signin', url: '/signin' },
    forget: { path: 'forget', url: '/forget' },
    resetPassword: { path: 'reset-password', url: '/reset-password' },
    main: { path: 'main', url: '/main' },
    profile: { path: 'profile', url: '/main/profile' },
    // dashboard
    dashboard: { path: 'dashboard', url: '/main/dashboard' },
    // dashboard v2
    dashboardv2: { path: 'dashboardv2', url: '/main/dashboardv2' },
    // Vehicle Route
    vehicle: { path: 'vehicle', url: '/main/vehicle' },
    vehicleDetail: { path: 'vehicleDetail', url: '/main/vehicle/vehicleDetail' },
    //Trip Route
    trip: { path: 'trip', url: '/main/trip' },
    tripDetail: { path: 'tripDetail', url: '/main/trip/tripDetail' },
    //Driver Route
    driver: { path: 'driver', url: '/main/driver' },
    driverDetail: { path: 'driverDetail', url: '/main/driver/driverDetail' },
    //exceptions Route
    exceptions: { path: 'exceptions', url: '/main/exceptions' },
    //exceptions Route
    mapview: { path: 'mapview', url: '/main/mapview' },
    //exceptions Route
    exception: { path: 'exception-setting', url: '/main/exception-setting' },
    //vehicle Route
    vehiclesetting: { path: 'vehiclesetting', url: '/main/vehiclesetting' },
    //weightage Route
    weightage: { path: 'weightage', url: '/main/weightage' },
    editweightage: { path: 'editweightage', url: '/main/weightage/editweightage' },
    //driving Score Comparison
    drivingBehaviour: { path: 'drivingbehaviour', url: '/main/drivingbehaviour' },
    //Rule engine settings
    ruleengine: { path: 'ruleengine', url: '/main/ruleengine' },
    editruleengine: { path: 'editruleengine', url: '/main/ruleengine/editruleengine' },
    addruleengine: { path: 'addruleengine', url: '/main/ruleengine/addruleengine' },
    //vechile driving score Comparison
    vechiledrivingBehaviour: { path: 'vechiledrivingbehaviour', url: '/main/vechiledrivingbehaviour' },
    //Scrore Comparison
    scrorecomparision: { path: 'scrorecomparision', url: '/main/scrorecomparision' },
    //group
    groups: { path: 'groups', url: '/main/groups' },
    editgroups: { path: 'group-edit', url: '/main/groups/group-edit' },
    addgroups: { path: 'group-add', url: '/main/groups/group-add' },
    //Scrore Comparison
    fuelmilage: { path: 'fuelmilage', url: '/main/fuelmilage' },
    support: { path: 'support', url: '/main/support' },
    // change password
    changepassword: { path: 'changepassword', url: '/main/profile/changepassword' },
    //colorPicker
    colorpicker: { path: 'colorpicker', url: 'main/profile/colorpicker' }
};


/***/ }),

/***/ "596m":
/*!*******************************************!*\
  !*** ./src/app/interceptor/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: CanLoginActivate, AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLoginActivate", function() { return CanLoginActivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_route_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/route-config */ "1r8O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local.service */ "s3jE");





/****************************************************************************
@PURPOSE      : Dont allow public pages to get accessed. (After Login) (APPLY ON PUBLIC PAGES)
@PARAMETERS   : N/A
@RETURN       : <boolean>
/****************************************************************************/
class CanLoginActivate {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    canActivate() {
        if (!this.storageService.getItem('hmAccessToken')) {
            return true;
        }
        else {
            this.router.navigate([_config_route_config__WEBPACK_IMPORTED_MODULE_1__["RouteConfig"].vehicle.url]);
            return false;
        }
    }
}
CanLoginActivate.ɵfac = function CanLoginActivate_Factory(t) { return new (t || CanLoginActivate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"])); };
CanLoginActivate.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanLoginActivate, factory: CanLoginActivate.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLoginActivate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"] }]; }, null); })();
/****************************************************************************/
class AuthGuardService {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    canActivate(route, state) {
        let url = state.url;
        return this.checkLogin(url);
    }
    canLoad(route) {
        let url = route.path;
        return this.checkLogin(url);
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    checkLogin(url) {
        if (this.storageService.getItem('hmAccessToken')) {
            return true;
        }
        this.router.navigate([_config_route_config__WEBPACK_IMPORTED_MODULE_1__["RouteConfig"].signin.url]);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    // apiUrl: 'https://devapi.hellomobility.nl/',
    // bucket: 'merlin-image-upload-dev',
    // socketUrl: 'wss://wsdev.hellomobility.nl',  
    // PREPROD SERVER URL
    // apiUrl: "https://ppapi.hellomobility.nl/",
    // bucket: 'merlin-image-upload-preprod',
    // socketUrl: 'wss://wspp.hellomobility.nl',  
    //TEST SERVER URL
    // apiUrl: 'https://q9qssyviwf.execute-api.eu-central-1.amazonaws.com/testing/',
    // bucket: 'merlin-image-upload-preprod',
    // socketUrl: ' wss://dhc3ecz0ea.execute-api.eu-central-1.amazonaws.com/testing',  
    //PROD URL
    apiUrl: 'https://api.hellomobility.nl/',
    bucket: 'merlin-image-upload-prod',
    socketUrl: 'wss://ws.hellomobility.nl',
    // image upload
    image: "U2FsdGVkX199t0MKI/+Ibv4Ewn8rngXJzDSglRf8dgpAYboGZxBkHUZHv0fDW/Kk",
    imageSecret: "U2FsdGVkX18AWYa0wbJVpMBNR0pmntN31ENwX/RQzd8LT+RtORPsMLl0MO9ifb8kQu7x5hme0KCGHxf+jnaySw==",
    region: "eu-central-1",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/local.service */ "s3jE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(translate, localService) {
        this.translate = translate;
        this.localService = localService;
        this.title = 'mobility';
        translate.use(localStorage.getItem('currentlang') || 'en');
    }
    ngOnInit() {
        this.localService.getLang().subscribe((val) => {
            this.translate.use(localStorage.getItem('currentlang'));
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_service__WEBPACK_IMPORTED_MODULE_2__["LocalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__["LocalService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _interceptor_AppHttpInterceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptor/AppHttpInterceptor */ "uE/d");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptor/auth.guard */ "596m");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-color-picker */ "InnR");
/* harmony import */ var ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-shimmer-loading */ "+HUQ");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"],
        _interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"],
        _interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_11__["CanLoginActivate"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _interceptor_AppHttpInterceptor__WEBPACK_IMPORTED_MODULE_9__["AppHttpInterceptor"], multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                }
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"],
            ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_13__["NgxShimmerLoadingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"],
        ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_13__["NgxShimmerLoadingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                        }
                    }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"],
                    ngx_shimmer_loading__WEBPACK_IMPORTED_MODULE_13__["NgxShimmerLoadingModule"]
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"],
                    _interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"],
                    _interceptor_auth_guard__WEBPACK_IMPORTED_MODULE_11__["CanLoginActivate"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _interceptor_AppHttpInterceptor__WEBPACK_IMPORTED_MODULE_9__["AppHttpInterceptor"], multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, '/../assets/i18n/', '.json');
}


/***/ }),

/***/ "s3jE":
/*!*******************************************!*\
  !*** ./src/app/services/local.service.ts ***!
  \*******************************************/
/*! exports provided: LocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalService", function() { return LocalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class LocalService {
    constructor() {
        this.orgUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.langUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.imageUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dateRangeUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filterApplied = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dashboard = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
    }
    watchOrgData() {
        return this.orgUpdated.asObservable();
    }
    setItem(key, data) {
        localStorage.setItem(key, data);
        if (key == 'selectedOrgs') {
            this.orgUpdated.next(true);
        }
        if (key == 'dateRange') {
            this.dateRangeUpdated.next(true);
        }
    }
    getDateRange() {
        return this.dateRangeUpdated.asObservable();
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    removeAllItem() {
        localStorage.clear();
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    storageclear() {
        localStorage.clear();
    }
    storeinSession(key, data) {
        sessionStorage.setItem(key, data);
    }
    getdatafromSession(key) {
        return sessionStorage.getItem(key);
    }
    sessionStorageclear() {
        sessionStorage.clear();
    }
    checkLoggedIn() {
        return localStorage.getItem('hmAccessToken') ? true : false;
    }
    getLang() {
        return this.langUpdated.asObservable();
    }
    setLang() {
        this.langUpdated.next(true);
    }
    getImage() {
        return this.imageUpdated.asObservable();
    }
    setImage() {
        this.imageUpdated.next(true);
    }
    getFilter() {
        return this.filterApplied.asObservable();
    }
    setFilter() {
        this.filterApplied.next(true);
    }
    getdashboardData() {
        return this.dashboard.asObservable();
    }
    setdashboardData(data) {
        this.dashboard.next(data);
    }
}
LocalService.ɵfac = function LocalService_Factory(t) { return new (t || LocalService)(); };
LocalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalService, factory: LocalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uE/d":
/*!***************************************************!*\
  !*** ./src/app/interceptor/AppHttpInterceptor.ts ***!
  \***************************************************/
/*! exports provided: AppHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpInterceptor", function() { return AppHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _config_route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/route-config */ "1r8O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/local.service */ "s3jE");








class AppHttpInterceptor {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    intercept(request, next) {
        let apiToken = this.storageService.getItem('hmAccessToken');
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        if (!request.headers.has('Accept')) {
            request = request.clone({ headers: request.headers.set('Accept', '*/*') });
        }
        if (apiToken) {
            request = request.clone({ headers: request.headers.set('Authorization', apiToken) });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(25000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // console.log('event--->>>', event);
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            if (error.error.message.includes('Invalid token')) {
                this.logout();
            }
            if (error.error.status == 403) {
                this.logout();
            }
            if (error.error.status == 401) {
                this.logout();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
    logout() {
        this.storageService.setdashboardData({});
        const currentlng = this.storageService.getItem('currentlang') || 'en';
        this.storageService.removeAllItem();
        this.storageService.setItem('currentlang', currentlng);
        this.router.navigate([_config_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].signin.url]);
    }
}
AppHttpInterceptor.ɵfac = function AppHttpInterceptor_Factory(t) { return new (t || AppHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"])); };
AppHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppHttpInterceptor, factory: AppHttpInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/route-config */ "1r8O");





const routes = [
    {
        path: "",
        loadChildren: () => Promise.all(/*! import() | onboarding-onboarding-module */[__webpack_require__.e("default~onboarding-onboarding-module~theme-theme-module"), __webpack_require__.e("onboarding-onboarding-module")]).then(__webpack_require__.bind(null, /*! ./onboarding/onboarding.module */ "tSXo")).then(m => m.OnboardingModule)
    },
    {
        path: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].main.path,
        loadChildren: () => Promise.all(/*! import() | theme-theme-module */[__webpack_require__.e("default~onboarding-onboarding-module~theme-theme-module"), __webpack_require__.e("theme-theme-module")]).then(__webpack_require__.bind(null, /*! ./theme/theme.module */ "BLWB")).then(m => m.ThemeModule),
    },
    {
        path: "**",
        redirectTo: _config_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].signin.path
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map