(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~fleetOverview-trip-trip-module~fleetOverview-vehicle-vehicle-modu~fba2ee9c"],{

/***/ "Mumg":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js ***!
  \*******************************************************************/
/*! exports provided: NgxGaugeModule, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxGaugeModule", function() { return NgxGaugeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxGauge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxGaugeAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgxGaugePrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgxGaugeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgxGaugeLabel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["canvas"];
const _c1 = ["rLabel"];
const _c2 = ["reading"];
function NgxGauge_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
} }
function NgxGauge_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.prepend);
} }
function NgxGauge_ng_content_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngSwitchCase", "true"]);
} }
function NgxGauge_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.value));
} }
function NgxGauge_ng_content_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2, ["*ngSwitchCase", "true"]);
} }
function NgxGauge_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.append);
} }
function NgxGauge_ng_content_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
} }
function NgxGauge_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.label);
} }
const _c3 = [[["ngx-gauge-prepend"]], [["ngx-gauge-value"]], [["ngx-gauge-append"]], [["ngx-gauge-label"]]];
const _c4 = ["ngx-gauge-prepend", "ngx-gauge-value", "ngx-gauge-append", "ngx-gauge-label"];
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
function coerceNumberProperty(value, fallbackValue = 0) {
    return isNaN(parseFloat(value)) || isNaN(Number(value)) ? fallbackValue : Number(value);
}
function cssUnit(value) {
    return `${value}px`;
}
function isNumber(value) {
    return value != undefined && !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

class NgxGaugeAppend {
}
NgxGaugeAppend.ɵfac = function NgxGaugeAppend_Factory(t) { return new (t || NgxGaugeAppend)(); };
NgxGaugeAppend.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxGaugeAppend, selectors: [["ngx-gauge-append"]], exportAs: ["ngxGaugeAppend"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxGaugeAppend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "ngx-gauge-append",
                exportAs: "ngxGaugeAppend"
            }]
    }], null, null); })();
class NgxGaugePrepend {
}
NgxGaugePrepend.ɵfac = function NgxGaugePrepend_Factory(t) { return new (t || NgxGaugePrepend)(); };
NgxGaugePrepend.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxGaugePrepend, selectors: [["ngx-gauge-prepend"]], exportAs: ["ngxGaugePrepend"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxGaugePrepend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "ngx-gauge-prepend",
                exportAs: "ngxGaugePrepend"
            }]
    }], null, null); })();
class NgxGaugeValue {
}
NgxGaugeValue.ɵfac = function NgxGaugeValue_Factory(t) { return new (t || NgxGaugeValue)(); };
NgxGaugeValue.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxGaugeValue, selectors: [["ngx-gauge-value"]], exportAs: ["ngxGaugeValue"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxGaugeValue, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "ngx-gauge-value",
                exportAs: "ngxGaugeValue"
            }]
    }], null, null); })();
class NgxGaugeLabel {
}
NgxGaugeLabel.ɵfac = function NgxGaugeLabel_Factory(t) { return new (t || NgxGaugeLabel)(); };
NgxGaugeLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxGaugeLabel, selectors: [["ngx-gauge-label"]], exportAs: ["ngxGaugeLabel"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxGaugeLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "ngx-gauge-label",
                exportAs: "ngxGaugeLabel"
            }]
    }], null, null); })();

const DEFAULTS = {
    MIN: 0,
    MAX: 100,
    TYPE: 'arch',
    THICK: 4,
    FOREGROUND_COLOR: 'rgba(0, 150, 136, 1)',
    BACKGROUND_COLOR: 'rgba(0, 0, 0, 0.1)',
    CAP: 'butt',
    SIZE: 200
};
class NgxGauge {
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._size = DEFAULTS.SIZE;
        this._min = DEFAULTS.MIN;
        this._max = DEFAULTS.MAX;
        this._animate = true;
        this._initialized = false;
        this._animationRequestID = 0;
        this.ariaLabel = '';
        this.ariaLabelledby = null;
        this.type = DEFAULTS.TYPE;
        this.cap = DEFAULTS.CAP;
        this.thick = DEFAULTS.THICK;
        this.foregroundColor = DEFAULTS.FOREGROUND_COLOR;
        this.backgroundColor = DEFAULTS.BACKGROUND_COLOR;
        this.thresholds = Object.create(null);
        this._value = 0;
        this.duration = 1200;
    }
    get size() { return this._size; }
    set size(value) {
        this._size = coerceNumberProperty(value);
    }
    get min() { return this._min; }
    set min(value) {
        this._min = coerceNumberProperty(value, DEFAULTS.MIN);
    }
    get animate() { return this._animate; }
    set animate(value) {
        this._animate = coerceBooleanProperty(value);
    }
    get max() { return this._max; }
    set max(value) {
        this._max = coerceNumberProperty(value, DEFAULTS.MAX);
    }
    get value() { return this._value; }
    set value(val) {
        this._value = coerceNumberProperty(val);
    }
    ngOnChanges(changes) {
        const isCanvasPropertyChanged = changes['thick'] || changes['type'] || changes['cap'] || changes['size'];
        const isDataChanged = changes['value'] || changes['min'] || changes['max'];
        if (this._initialized) {
            if (isDataChanged) {
                let nv, ov;
                if (changes['value']) {
                    nv = changes['value'].currentValue;
                    ov = changes['value'].previousValue;
                }
                this._update(nv, ov);
            }
            if (isCanvasPropertyChanged) {
                this._destroy();
                this._init();
            }
        }
    }
    _updateSize() {
        this._renderer.setStyle(this._elementRef.nativeElement, 'width', cssUnit(this._getWidth()));
        this._renderer.setStyle(this._elementRef.nativeElement, 'height', cssUnit(this._getCanvasHeight()));
        this._canvas.nativeElement.width = this._getWidth();
        this._canvas.nativeElement.height = this._getCanvasHeight();
        this._renderer.setStyle(this._label.nativeElement, 'transform', 'translateY(' + (this.size / 3 * 2 - this.size / 13 / 4) + 'px)');
        this._renderer.setStyle(this._reading.nativeElement, 'transform', 'translateY(' + (this.size / 2 - this.size * 0.22 / 2) + 'px)');
    }
    ngAfterViewInit() {
        if (this._canvas) {
            this._init();
        }
    }
    ngOnDestroy() {
        this._destroy();
    }
    _getBounds(type) {
        let head, tail;
        if (type == 'semi') {
            head = Math.PI;
            tail = 2 * Math.PI;
        }
        else if (type == 'full') {
            head = 1.5 * Math.PI;
            tail = 3.5 * Math.PI;
        }
        else if (type === 'arch') {
            head = 0.8 * Math.PI;
            tail = 2.2 * Math.PI;
        }
        return { head, tail };
    }
    _drawShell(start, middle, tail, color) {
        let center = this._getCenter(), radius = this._getRadius();
        middle = Math.max(middle, start); // never below 0%
        middle = Math.min(middle, tail); // never exceed 100%
        if (this._initialized) {
            this._clear();
            this._context.beginPath();
            this._context.strokeStyle = this.backgroundColor;
            this._context.arc(center.x, center.y, radius, middle, tail, false);
            this._context.stroke();
            this._context.beginPath();
            this._context.strokeStyle = color;
            this._context.arc(center.x, center.y, radius, start, middle, false);
            this._context.stroke();
        }
    }
    _clear() {
        this._context.clearRect(0, 0, this._getWidth(), this._getHeight());
    }
    _getWidth() {
        return this.size;
    }
    _getHeight() {
        return this.size;
    }
    // canvas height will be shorter for type 'semi' and 'arch'
    _getCanvasHeight() {
        return (this.type == 'arch' || this.type == 'semi')
            ? 0.85 * this._getHeight()
            : this._getHeight();
    }
    _getRadius() {
        var center = this._getCenter();
        return center.x - this.thick;
    }
    _getCenter() {
        var x = this._getWidth() / 2, y = this._getHeight() / 2;
        return { x, y };
    }
    _init() {
        this._context = this._canvas.nativeElement.getContext('2d');
        this._initialized = true;
        this._updateSize();
        this._setupStyles();
        this._create();
    }
    _destroy() {
        if (this._animationRequestID) {
            window.cancelAnimationFrame(this._animationRequestID);
            this._animationRequestID = 0;
        }
        this._clear();
        this._context = null;
        this._initialized = false;
    }
    _setupStyles() {
        this._context.lineCap = this.cap;
        this._context.lineWidth = this.thick;
    }
    _getForegroundColorByRange(value) {
        const match = Object.keys(this.thresholds)
            .filter(function (item) { return isNumber(item) && Number(item) <= value; })
            .sort((a, b) => Number(a) - Number(b))
            .reverse()[0];
        return match !== undefined
            ? this.thresholds[match].color || this.foregroundColor
            : this.foregroundColor;
    }
    _create(nv, ov) {
        let self = this, type = this.type, bounds = this._getBounds(type), duration = this.duration, min = this.min, max = this.max, value = clamp(this.value, this.min, this.max), start = bounds.head, unit = (bounds.tail - bounds.head) / (max - min), displacement = unit * (value - min), tail = bounds.tail, color = this._getForegroundColorByRange(value), startTime;
        if (self._animationRequestID) {
            window.cancelAnimationFrame(self._animationRequestID);
        }
        function animate(timestamp) {
            timestamp = timestamp || new Date().getTime();
            let runtime = timestamp - startTime;
            let progress = Math.min(runtime / duration, 1);
            let previousProgress = ov ? (ov - min) * unit : 0;
            let middle = start + previousProgress + displacement * progress;
            self._drawShell(start, middle, tail, color);
            if (self._animationRequestID && (runtime < duration)) {
                self._animationRequestID = window.requestAnimationFrame((timestamp) => animate(timestamp));
            }
            else {
                window.cancelAnimationFrame(self._animationRequestID);
            }
        }
        if (this._animate) {
            if (nv != undefined && ov != undefined) {
                displacement = unit * nv - unit * ov;
            }
            self._animationRequestID = window.requestAnimationFrame((timestamp) => {
                startTime = timestamp || new Date().getTime();
                animate(startTime);
            });
        }
        else {
            self._drawShell(start, start + displacement, tail, color);
        }
    }
    _update(nv, ov) {
        this._clear();
        this._create(nv, ov);
    }
}
NgxGauge.ɵfac = function NgxGauge_Factory(t) { return new (t || NgxGauge)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NgxGauge.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxGauge, selectors: [["ngx-gauge"]], contentQueries: function NgxGauge_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgxGaugeLabel, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgxGaugePrepend, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgxGaugeAppend, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgxGaugeValue, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._prependChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._appendChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._valueDisplayChild = _t.first);
    } }, viewQuery: function NgxGauge_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._reading = _t.first);
    } }, hostAttrs: ["role", "slider", "aria-readonly", "true"], hostVars: 7, hostBindings: function NgxGauge_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-gauge-meter", true);
    } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], type: "type", cap: "cap", thick: "thick", foregroundColor: "foregroundColor", backgroundColor: "backgroundColor", thresholds: "thresholds", duration: "duration", size: "size", min: "min", animate: "animate", max: "max", value: "value", label: "label", append: "append", prepend: "prepend" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 17, vars: 16, consts: [[1, "reading-block"], ["reading", ""], [1, "reading-affix", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "ngSwitch"], [1, "reading-label", 3, "ngSwitch"], ["rLabel", ""], ["canvas", ""]], template: function NgxGauge_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxGauge_ng_content_3_Template, 1, 0, "ng-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxGauge_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxGauge_ng_content_6_Template, 1, 0, "ng-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxGauge_ng_container_7_Template, 3, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "u", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxGauge_ng_content_9_Template, 1, 0, "ng-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgxGauge_ng_container_10_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgxGauge_ng_content_13_Template, 1, 0, "ng-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgxGauge_ng_container_14_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "canvas", null, 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.size * 0.22 + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx._prependChild != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx._valueDisplayChild != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx._appendChild != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.size / 13 + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx._labelChild != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: [".ngx-gauge-meter{display:inline-block;text-align:center;position:relative}.reading-block,.reading-label{position:absolute;width:100%;font-weight:400;white-space:nowrap;text-align:center;overflow:hidden;text-overflow:ellipsis}.reading-label{font-family:inherit;display:inline-block}.reading-affix{text-decoration:none;font-size:.6em;opacity:.8;font-weight:200;padding:0 .18em}.reading-affix:first-child{padding-left:0}.reading-affix:last-child{padding-right:0}"], encapsulation: 2 });
NgxGauge.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
NgxGauge.propDecorators = {
    _canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['canvas', { static: true },] }],
    _label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['rLabel', { static: true },] }],
    _reading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['reading', { static: true },] }],
    _labelChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgxGaugeLabel,] }],
    _prependChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgxGaugePrepend,] }],
    _appendChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgxGaugeAppend,] }],
    _valueDisplayChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgxGaugeValue,] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    thick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    append: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    prepend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    foregroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    thresholds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxGauge, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-gauge',
                template: "<div class=\"reading-block\" #reading [style.fontSize]=\"size * 0.22 + 'px'\">\r\n  <!-- This block can not be indented correctly, because line breaks cause layout spacing, related problem: https://pt.stackoverflow.com/q/276760/2998 -->\r\n  <u class=\"reading-affix\" [ngSwitch]=\"_prependChild != null\"><ng-content select=\"ngx-gauge-prepend\" *ngSwitchCase=\"true\"></ng-content><ng-container *ngSwitchCase=\"false\">{{prepend}}</ng-container></u><ng-container [ngSwitch]=\"_valueDisplayChild != null\"><ng-content *ngSwitchCase=\"true\" select=\"ngx-gauge-value\"></ng-content><ng-container *ngSwitchCase=\"false\">{{value | number}}</ng-container></ng-container><u class=\"reading-affix\" [ngSwitch]=\"_appendChild != null\"><ng-content select=\"ngx-gauge-append\" *ngSwitchCase=\"true\"></ng-content><ng-container *ngSwitchCase=\"false\">{{append}}</ng-container></u>\r\n</div>\r\n<div class=\"reading-label\" #rLabel\r\n     [style.fontSize]=\"size / 13 + 'px'\"\r\n     [ngSwitch]=\"_labelChild != null\">\r\n  <ng-content select=\"ngx-gauge-label\" *ngSwitchCase=\"true\"></ng-content>\r\n  <ng-container *ngSwitchCase=\"false\">{{label}}</ng-container>\r\n</div>\r\n<canvas #canvas></canvas>\r\n",
                host: {
                    'role': 'slider',
                    'aria-readonly': 'true',
                    '[class.ngx-gauge-meter]': 'true',
                    '[attr.aria-valuemin]': 'min',
                    '[attr.aria-valuemax]': 'max',
                    '[attr.aria-valuenow]': 'value',
                    '[attr.aria-label]': 'ariaLabel',
                    '[attr.aria-labelledby]': 'ariaLabelledby'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".ngx-gauge-meter{display:inline-block;text-align:center;position:relative}.reading-block,.reading-label{position:absolute;width:100%;font-weight:400;white-space:nowrap;text-align:center;overflow:hidden;text-overflow:ellipsis}.reading-label{font-family:inherit;display:inline-block}.reading-affix{text-decoration:none;font-size:.6em;opacity:.8;font-weight:200;padding:0 .18em}.reading-affix:first-child{padding-left:0}.reading-affix:last-child{padding-right:0}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-labelledby']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], foregroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thresholds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas', { static: true }]
        }], _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['rLabel', { static: true }]
        }], _reading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['reading', { static: true }]
        }], _labelChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgxGaugeLabel]
        }], _prependChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgxGaugePrepend]
        }], _appendChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgxGaugeAppend]
        }], _valueDisplayChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgxGaugeValue]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], append: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prepend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class NgxGaugeModule {
}
NgxGaugeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxGaugeModule });
NgxGaugeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxGaugeModule_Factory(t) { return new (t || NgxGaugeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxGaugeModule, { declarations: function () { return [NgxGauge, NgxGaugeAppend, NgxGaugePrepend, NgxGaugeValue, NgxGaugeLabel]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [NgxGauge, NgxGaugeAppend, NgxGaugePrepend, NgxGaugeValue, NgxGaugeLabel]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxGaugeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [NgxGauge, NgxGaugeAppend, NgxGaugePrepend, NgxGaugeValue, NgxGaugeLabel],
                exports: [NgxGauge, NgxGaugeAppend, NgxGaugePrepend, NgxGaugeValue, NgxGaugeLabel]
            }]
    }], null, null); })();

/*
 * Public APIs of ngx-gauge
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-gauge.js.map

/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~fleetOverview-trip-trip-module~fleetOverview-vehicle-vehicle-modu~fba2ee9c-es2015.js.map