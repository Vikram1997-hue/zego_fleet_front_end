(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~behaviourScore-driving-driving-module~behaviourScore-vechile-driving-vechile-driving-module~~8fbbda33"], {
    /***/
    "3T2N":
    /*!**************************************************************!*\
      !*** ./node_modules/chart.js/dist/chunks/helpers.segment.js ***!
      \**************************************************************/

    /*! exports provided: $, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, a$, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, a_, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */

    /***/
    function T2N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "$", function () {
        return _toLeftRightCenter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return _rlookupByKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return getAngleFromPoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return toPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return each;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return getMaximumSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return _getParentNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return readUsedSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "H", function () {
        return HALF_PI;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return throttled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
        return supportsEventListenerOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "K", function () {
        return _isDomSupported;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "L", function () {
        return log10;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "M", function () {
        return _factorize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "N", function () {
        return finiteOrDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "O", function () {
        return callback;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P", function () {
        return PI;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Q", function () {
        return _addGrace;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "R", function () {
        return toDegrees;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return _measureText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "T", function () {
        return TAU;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return _int16Range;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V", function () {
        return _alignPixel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "W", function () {
        return clipArea;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "X", function () {
        return renderText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Y", function () {
        return unclipArea;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return toFont;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_", function () {
        return _arrayUnique;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return resolve;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a$", function () {
        return _angleDiff;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a0", function () {
        return _alignStartEnd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a1", function () {
        return overrides;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a2", function () {
        return merge;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a3", function () {
        return _capitalize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a4", function () {
        return descriptors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a5", function () {
        return isFunction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a6", function () {
        return _attachContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a7", function () {
        return _createResolver;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a8", function () {
        return _descriptors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a9", function () {
        return mergeIf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aA", function () {
        return restoreTextDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aB", function () {
        return noop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aC", function () {
        return distanceBetweenPoints;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aD", function () {
        return _setMinAndMaxByKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aE", function () {
        return niceNum;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aF", function () {
        return almostWhole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aG", function () {
        return almostEquals;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aH", function () {
        return _decimalPlaces;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aI", function () {
        return _longestText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aJ", function () {
        return _filterBetween;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aK", function () {
        return _lookup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aL", function () {
        return getHoverColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aM", function () {
        return clone$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aN", function () {
        return _merger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aO", function () {
        return _mergerIf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aP", function () {
        return _deprecated;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aQ", function () {
        return toFontString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aR", function () {
        return splineCurve;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aS", function () {
        return splineCurveMonotone;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aT", function () {
        return getStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aU", function () {
        return fontString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aV", function () {
        return toLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aW", function () {
        return PITAU;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aX", function () {
        return INFINITY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aY", function () {
        return RAD_PER_DEG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aZ", function () {
        return QUARTER_PI;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a_", function () {
        return TWO_THIRDS_PI;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aa", function () {
        return uid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ab", function () {
        return debounce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ac", function () {
        return retinaScale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ad", function () {
        return clearCanvas;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ae", function () {
        return setsEqual;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "af", function () {
        return _elementsEqual;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ag", function () {
        return _isClickEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ah", function () {
        return _isBetween;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ai", function () {
        return _readValueToProps;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aj", function () {
        return _updateBezierControlPoints;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ak", function () {
        return _computeSegments;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "al", function () {
        return _boundSegments;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "am", function () {
        return _steppedInterpolation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "an", function () {
        return _bezierInterpolation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ao", function () {
        return _pointInLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ap", function () {
        return _steppedLineTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aq", function () {
        return _bezierCurveTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ar", function () {
        return drawPoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "as", function () {
        return addRoundedRectPath;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "at", function () {
        return toTRBL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "au", function () {
        return toTRBLCorners;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "av", function () {
        return _boundSegment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "aw", function () {
        return _normalizeAngle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ax", function () {
        return getRtlAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ay", function () {
        return overrideTextDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "az", function () {
        return _textX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return isArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return color;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return defaults;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return effects;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return resolveObjectKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return isNumberFinite;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return createContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return isObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return defined;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return isNullOrUndef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return listenArrayEvents;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return toPercentage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return toDimension;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return formatNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return _angleBetween;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return isNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return requestAnimFrame;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return sign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return toRadians;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return unlistenArrayEvents;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return valueOrDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return _limitValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return _lookupByKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "y", function () {
        return getRelativePosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return _isPointInArea;
      });
      /*!
       * Chart.js v3.7.1
       * https://www.chartjs.org
       * (c) 2022 Chart.js Contributors
       * Released under the MIT License
       */


      function fontString(pixelSize, fontStyle, fontFamily) {
        return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
      }

      var requestAnimFrame = function () {
        if (typeof window === 'undefined') {
          return function (callback) {
            return callback();
          };
        }

        return window.requestAnimationFrame;
      }();

      function throttled(fn, thisArg, updateFn) {
        var updateArgs = updateFn || function (args) {
          return Array.prototype.slice.call(args);
        };

        var ticking = false;
        var args = [];
        return function () {
          for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }

          args = updateArgs(rest);

          if (!ticking) {
            ticking = true;
            requestAnimFrame.call(window, function () {
              ticking = false;
              fn.apply(thisArg, args);
            });
          }
        };
      }

      function debounce(fn, delay) {
        var timeout;
        return function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
          } else {
            fn.apply(this, args);
          }

          return delay;
        };
      }

      var _toLeftRightCenter = function _toLeftRightCenter(align) {
        return align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
      };

      var _alignStartEnd = function _alignStartEnd(align, start, end) {
        return align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
      };

      var _textX = function _textX(align, left, right, rtl) {
        var check = rtl ? 'left' : 'right';
        return align === check ? right : align === 'center' ? (left + right) / 2 : left;
      };

      function noop() {}

      var uid = function () {
        var id = 0;
        return function () {
          return id++;
        };
      }();

      function isNullOrUndef(value) {
        return value === null || typeof value === 'undefined';
      }

      function isArray(value) {
        if (Array.isArray && Array.isArray(value)) {
          return true;
        }

        var type = Object.prototype.toString.call(value);

        if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
          return true;
        }

        return false;
      }

      function isObject(value) {
        return value !== null && Object.prototype.toString.call(value) === '[object Object]';
      }

      var isNumberFinite = function isNumberFinite(value) {
        return (typeof value === 'number' || value instanceof Number) && isFinite(+value);
      };

      function finiteOrDefault(value, defaultValue) {
        return isNumberFinite(value) ? value : defaultValue;
      }

      function valueOrDefault(value, defaultValue) {
        return typeof value === 'undefined' ? defaultValue : value;
      }

      var toPercentage = function toPercentage(value, dimension) {
        return typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : value / dimension;
      };

      var toDimension = function toDimension(value, dimension) {
        return typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;
      };

      function callback(fn, args, thisArg) {
        if (fn && typeof fn.call === 'function') {
          return fn.apply(thisArg, args);
        }
      }

      function each(loopable, fn, thisArg, reverse) {
        var i, len, keys;

        if (isArray(loopable)) {
          len = loopable.length;

          if (reverse) {
            for (i = len - 1; i >= 0; i--) {
              fn.call(thisArg, loopable[i], i);
            }
          } else {
            for (i = 0; i < len; i++) {
              fn.call(thisArg, loopable[i], i);
            }
          }
        } else if (isObject(loopable)) {
          keys = Object.keys(loopable);
          len = keys.length;

          for (i = 0; i < len; i++) {
            fn.call(thisArg, loopable[keys[i]], keys[i]);
          }
        }
      }

      function _elementsEqual(a0, a1) {
        var i, ilen, v0, v1;

        if (!a0 || !a1 || a0.length !== a1.length) {
          return false;
        }

        for (i = 0, ilen = a0.length; i < ilen; ++i) {
          v0 = a0[i];
          v1 = a1[i];

          if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
            return false;
          }
        }

        return true;
      }

      function clone$1(source) {
        if (isArray(source)) {
          return source.map(clone$1);
        }

        if (isObject(source)) {
          var target = Object.create(null);
          var keys = Object.keys(source);
          var klen = keys.length;
          var k = 0;

          for (; k < klen; ++k) {
            target[keys[k]] = clone$1(source[keys[k]]);
          }

          return target;
        }

        return source;
      }

      function isValidKey(key) {
        return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
      }

      function _merger(key, target, source, options) {
        if (!isValidKey(key)) {
          return;
        }

        var tval = target[key];
        var sval = source[key];

        if (isObject(tval) && isObject(sval)) {
          merge(tval, sval, options);
        } else {
          target[key] = clone$1(sval);
        }
      }

      function merge(target, source, options) {
        var sources = isArray(source) ? source : [source];
        var ilen = sources.length;

        if (!isObject(target)) {
          return target;
        }

        options = options || {};
        var merger = options.merger || _merger;

        for (var i = 0; i < ilen; ++i) {
          source = sources[i];

          if (!isObject(source)) {
            continue;
          }

          var keys = Object.keys(source);

          for (var k = 0, klen = keys.length; k < klen; ++k) {
            merger(keys[k], target, source, options);
          }
        }

        return target;
      }

      function mergeIf(target, source) {
        return merge(target, source, {
          merger: _mergerIf
        });
      }

      function _mergerIf(key, target, source) {
        if (!isValidKey(key)) {
          return;
        }

        var tval = target[key];
        var sval = source[key];

        if (isObject(tval) && isObject(sval)) {
          mergeIf(tval, sval);
        } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
          target[key] = clone$1(sval);
        }
      }

      function _deprecated(scope, value, previous, current) {
        if (value !== undefined) {
          console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
        }
      }

      var emptyString = '';
      var dot = '.';

      function indexOfDotOrLength(key, start) {
        var idx = key.indexOf(dot, start);
        return idx === -1 ? key.length : idx;
      }

      function resolveObjectKey(obj, key) {
        if (key === emptyString) {
          return obj;
        }

        var pos = 0;
        var idx = indexOfDotOrLength(key, pos);

        while (obj && idx > pos) {
          obj = obj[key.substr(pos, idx - pos)];
          pos = idx + 1;
          idx = indexOfDotOrLength(key, pos);
        }

        return obj;
      }

      function _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      var defined = function defined(value) {
        return typeof value !== 'undefined';
      };

      var isFunction = function isFunction(value) {
        return typeof value === 'function';
      };

      var setsEqual = function setsEqual(a, b) {
        if (a.size !== b.size) {
          return false;
        }

        var _iterator = _createForOfIteratorHelper(a),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (!b.has(item)) {
              return false;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return true;
      };

      function _isClickEvent(e) {
        return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
      }

      var PI = Math.PI;
      var TAU = 2 * PI;
      var PITAU = TAU + PI;
      var INFINITY = Number.POSITIVE_INFINITY;
      var RAD_PER_DEG = PI / 180;
      var HALF_PI = PI / 2;
      var QUARTER_PI = PI / 4;
      var TWO_THIRDS_PI = PI * 2 / 3;
      var log10 = Math.log10;
      var sign = Math.sign;

      function niceNum(range) {
        var roundedRange = Math.round(range);
        range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
        var niceRange = Math.pow(10, Math.floor(log10(range)));
        var fraction = range / niceRange;
        var niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
        return niceFraction * niceRange;
      }

      function _factorize(value) {
        var result = [];
        var sqrt = Math.sqrt(value);
        var i;

        for (i = 1; i < sqrt; i++) {
          if (value % i === 0) {
            result.push(i);
            result.push(value / i);
          }
        }

        if (sqrt === (sqrt | 0)) {
          result.push(sqrt);
        }

        result.sort(function (a, b) {
          return a - b;
        }).pop();
        return result;
      }

      function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }

      function almostEquals(x, y, epsilon) {
        return Math.abs(x - y) < epsilon;
      }

      function almostWhole(x, epsilon) {
        var rounded = Math.round(x);
        return rounded - epsilon <= x && rounded + epsilon >= x;
      }

      function _setMinAndMaxByKey(array, target, property) {
        var i, ilen, value;

        for (i = 0, ilen = array.length; i < ilen; i++) {
          value = array[i][property];

          if (!isNaN(value)) {
            target.min = Math.min(target.min, value);
            target.max = Math.max(target.max, value);
          }
        }
      }

      function toRadians(degrees) {
        return degrees * (PI / 180);
      }

      function toDegrees(radians) {
        return radians * (180 / PI);
      }

      function _decimalPlaces(x) {
        if (!isNumberFinite(x)) {
          return;
        }

        var e = 1;
        var p = 0;

        while (Math.round(x * e) / e !== x) {
          e *= 10;
          p++;
        }

        return p;
      }

      function getAngleFromPoint(centrePoint, anglePoint) {
        var distanceFromXCenter = anglePoint.x - centrePoint.x;
        var distanceFromYCenter = anglePoint.y - centrePoint.y;
        var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
        var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

        if (angle < -0.5 * PI) {
          angle += TAU;
        }

        return {
          angle: angle,
          distance: radialDistanceFromCenter
        };
      }

      function distanceBetweenPoints(pt1, pt2) {
        return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
      }

      function _angleDiff(a, b) {
        return (a - b + PITAU) % TAU - PI;
      }

      function _normalizeAngle(a) {
        return (a % TAU + TAU) % TAU;
      }

      function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
        var a = _normalizeAngle(angle);

        var s = _normalizeAngle(start);

        var e = _normalizeAngle(end);

        var angleToStart = _normalizeAngle(s - a);

        var angleToEnd = _normalizeAngle(e - a);

        var startToAngle = _normalizeAngle(a - s);

        var endToAngle = _normalizeAngle(a - e);

        return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
      }

      function _limitValue(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }

      function _int16Range(value) {
        return _limitValue(value, -32768, 32767);
      }

      function _isBetween(value, start, end) {
        var epsilon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1e-6;
        return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
      }

      var atEdge = function atEdge(t) {
        return t === 0 || t === 1;
      };

      var elasticIn = function elasticIn(t, s, p) {
        return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
      };

      var elasticOut = function elasticOut(t, s, p) {
        return Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
      };

      var effects = {
        linear: function linear(t) {
          return t;
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        },
        easeInOutQuad: function easeInOutQuad(t) {
          return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
          return (t -= 1) * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
          return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
          return -((t -= 1) * t * t * t - 1);
        },
        easeInOutQuart: function easeInOutQuart(t) {
          return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
          return (t -= 1) * t * t * t * t + 1;
        },
        easeInOutQuint: function easeInOutQuint(t) {
          return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function easeInSine(t) {
          return -Math.cos(t * HALF_PI) + 1;
        },
        easeOutSine: function easeOutSine(t) {
          return Math.sin(t * HALF_PI);
        },
        easeInOutSine: function easeInOutSine(t) {
          return -0.5 * (Math.cos(PI * t) - 1);
        },
        easeInExpo: function easeInExpo(t) {
          return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
        },
        easeOutExpo: function easeOutExpo(t) {
          return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
        },
        easeInOutExpo: function easeInOutExpo(t) {
          return atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2);
        },
        easeInCirc: function easeInCirc(t) {
          return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
        },
        easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t -= 1) * t);
        },
        easeInOutCirc: function easeInOutCirc(t) {
          return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function easeInElastic(t) {
          return atEdge(t) ? t : elasticIn(t, 0.075, 0.3);
        },
        easeOutElastic: function easeOutElastic(t) {
          return atEdge(t) ? t : elasticOut(t, 0.075, 0.3);
        },
        easeInOutElastic: function easeInOutElastic(t) {
          var s = 0.1125;
          var p = 0.45;
          return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
        },
        easeInBack: function easeInBack(t) {
          var s = 1.70158;
          return t * t * ((s + 1) * t - s);
        },
        easeOutBack: function easeOutBack(t) {
          var s = 1.70158;
          return (t -= 1) * t * ((s + 1) * t + s) + 1;
        },
        easeInOutBack: function easeInOutBack(t) {
          var s = 1.70158;

          if ((t /= 0.5) < 1) {
            return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
          }

          return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
        },
        easeInBounce: function easeInBounce(t) {
          return 1 - effects.easeOutBounce(1 - t);
        },
        easeOutBounce: function easeOutBounce(t) {
          var m = 7.5625;
          var d = 2.75;

          if (t < 1 / d) {
            return m * t * t;
          }

          if (t < 2 / d) {
            return m * (t -= 1.5 / d) * t + 0.75;
          }

          if (t < 2.5 / d) {
            return m * (t -= 2.25 / d) * t + 0.9375;
          }

          return m * (t -= 2.625 / d) * t + 0.984375;
        },
        easeInOutBounce: function easeInOutBounce(t) {
          return t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
        }
      };
      /*!
       * @kurkle/color v0.1.9
       * https://github.com/kurkle/color#readme
       * (c) 2020 Jukka Kurkela
       * Released under the MIT License
       */

      var map = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
      };
      var hex = '0123456789ABCDEF';

      var h1 = function h1(b) {
        return hex[b & 0xF];
      };

      var h2 = function h2(b) {
        return hex[(b & 0xF0) >> 4] + hex[b & 0xF];
      };

      var eq = function eq(b) {
        return (b & 0xF0) >> 4 === (b & 0xF);
      };

      function isShort(v) {
        return eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
      }

      function hexParse(str) {
        var len = str.length;
        var ret;

        if (str[0] === '#') {
          if (len === 4 || len === 5) {
            ret = {
              r: 255 & map[str[1]] * 17,
              g: 255 & map[str[2]] * 17,
              b: 255 & map[str[3]] * 17,
              a: len === 5 ? map[str[4]] * 17 : 255
            };
          } else if (len === 7 || len === 9) {
            ret = {
              r: map[str[1]] << 4 | map[str[2]],
              g: map[str[3]] << 4 | map[str[4]],
              b: map[str[5]] << 4 | map[str[6]],
              a: len === 9 ? map[str[7]] << 4 | map[str[8]] : 255
            };
          }
        }

        return ret;
      }

      function _hexString(v) {
        var f = isShort(v) ? h1 : h2;
        return v ? '#' + f(v.r) + f(v.g) + f(v.b) + (v.a < 255 ? f(v.a) : '') : v;
      }

      function round(v) {
        return v + 0.5 | 0;
      }

      var lim = function lim(v, l, h) {
        return Math.max(Math.min(v, h), l);
      };

      function p2b(v) {
        return lim(round(v * 2.55), 0, 255);
      }

      function n2b(v) {
        return lim(round(v * 255), 0, 255);
      }

      function b2n(v) {
        return lim(round(v / 2.55) / 100, 0, 1);
      }

      function n2p(v) {
        return lim(round(v * 100), 0, 100);
      }

      var RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

      function rgbParse(str) {
        var m = RGB_RE.exec(str);
        var a = 255;
        var r, g, b;

        if (!m) {
          return;
        }

        if (m[7] !== r) {
          var v = +m[7];
          a = 255 & (m[8] ? p2b(v) : v * 255);
        }

        r = +m[1];
        g = +m[3];
        b = +m[5];
        r = 255 & (m[2] ? p2b(r) : r);
        g = 255 & (m[4] ? p2b(g) : g);
        b = 255 & (m[6] ? p2b(b) : b);
        return {
          r: r,
          g: g,
          b: b,
          a: a
        };
      }

      function _rgbString(v) {
        return v && (v.a < 255 ? "rgba(".concat(v.r, ", ").concat(v.g, ", ").concat(v.b, ", ").concat(b2n(v.a), ")") : "rgb(".concat(v.r, ", ").concat(v.g, ", ").concat(v.b, ")"));
      }

      var HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

      function hsl2rgbn(h, s, l) {
        var a = s * Math.min(l, 1 - l);

        var f = function f(n) {
          var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
          return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        };

        return [f(0), f(8), f(4)];
      }

      function hsv2rgbn(h, s, v) {
        var f = function f(n) {
          var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 60) % 6;
          return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
        };

        return [f(5), f(3), f(1)];
      }

      function hwb2rgbn(h, w, b) {
        var rgb = hsl2rgbn(h, 1, 0.5);
        var i;

        if (w + b > 1) {
          i = 1 / (w + b);
          w *= i;
          b *= i;
        }

        for (i = 0; i < 3; i++) {
          rgb[i] *= 1 - w - b;
          rgb[i] += w;
        }

        return rgb;
      }

      function rgb2hsl(v) {
        var range = 255;
        var r = v.r / range;
        var g = v.g / range;
        var b = v.b / range;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var l = (max + min) / 2;
        var h, s, d;

        if (max !== min) {
          d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
          h = h * 60 + 0.5;
        }

        return [h | 0, s || 0, l];
      }

      function calln(f, a, b, c) {
        return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
      }

      function hsl2rgb(h, s, l) {
        return calln(hsl2rgbn, h, s, l);
      }

      function hwb2rgb(h, w, b) {
        return calln(hwb2rgbn, h, w, b);
      }

      function hsv2rgb(h, s, v) {
        return calln(hsv2rgbn, h, s, v);
      }

      function hue(h) {
        return (h % 360 + 360) % 360;
      }

      function hueParse(str) {
        var m = HUE_RE.exec(str);
        var a = 255;
        var v;

        if (!m) {
          return;
        }

        if (m[5] !== v) {
          a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
        }

        var h = hue(+m[2]);
        var p1 = +m[3] / 100;
        var p2 = +m[4] / 100;

        if (m[1] === 'hwb') {
          v = hwb2rgb(h, p1, p2);
        } else if (m[1] === 'hsv') {
          v = hsv2rgb(h, p1, p2);
        } else {
          v = hsl2rgb(h, p1, p2);
        }

        return {
          r: v[0],
          g: v[1],
          b: v[2],
          a: a
        };
      }

      function _rotate(v, deg) {
        var h = rgb2hsl(v);
        h[0] = hue(h[0] + deg);
        h = hsl2rgb(h);
        v.r = h[0];
        v.g = h[1];
        v.b = h[2];
      }

      function _hslString(v) {
        if (!v) {
          return;
        }

        var a = rgb2hsl(v);
        var h = a[0];
        var s = n2p(a[1]);
        var l = n2p(a[2]);
        return v.a < 255 ? "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(b2n(v.a), ")") : "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)");
      }

      var map$1 = {
        x: 'dark',
        Z: 'light',
        Y: 're',
        X: 'blu',
        W: 'gr',
        V: 'medium',
        U: 'slate',
        A: 'ee',
        T: 'ol',
        S: 'or',
        B: 'ra',
        C: 'lateg',
        D: 'ights',
        R: 'in',
        Q: 'turquois',
        E: 'hi',
        P: 'ro',
        O: 'al',
        N: 'le',
        M: 'de',
        L: 'yello',
        F: 'en',
        K: 'ch',
        G: 'arks',
        H: 'ea',
        I: 'ightg',
        J: 'wh'
      };
      var names = {
        OiceXe: 'f0f8ff',
        antiquewEte: 'faebd7',
        aqua: 'ffff',
        aquamarRe: '7fffd4',
        azuY: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '0',
        blanKedOmond: 'ffebcd',
        Xe: 'ff',
        XeviTet: '8a2be2',
        bPwn: 'a52a2a',
        burlywood: 'deb887',
        caMtXe: '5f9ea0',
        KartYuse: '7fff00',
        KocTate: 'd2691e',
        cSO: 'ff7f50',
        cSnflowerXe: '6495ed',
        cSnsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: 'ffff',
        xXe: '8b',
        xcyan: '8b8b',
        xgTMnPd: 'b8860b',
        xWay: 'a9a9a9',
        xgYF: '6400',
        xgYy: 'a9a9a9',
        xkhaki: 'bdb76b',
        xmagFta: '8b008b',
        xTivegYF: '556b2f',
        xSange: 'ff8c00',
        xScEd: '9932cc',
        xYd: '8b0000',
        xsOmon: 'e9967a',
        xsHgYF: '8fbc8f',
        xUXe: '483d8b',
        xUWay: '2f4f4f',
        xUgYy: '2f4f4f',
        xQe: 'ced1',
        xviTet: '9400d3',
        dAppRk: 'ff1493',
        dApskyXe: 'bfff',
        dimWay: '696969',
        dimgYy: '696969',
        dodgerXe: '1e90ff',
        fiYbrick: 'b22222',
        flSOwEte: 'fffaf0',
        foYstWAn: '228b22',
        fuKsia: 'ff00ff',
        gaRsbSo: 'dcdcdc',
        ghostwEte: 'f8f8ff',
        gTd: 'ffd700',
        gTMnPd: 'daa520',
        Way: '808080',
        gYF: '8000',
        gYFLw: 'adff2f',
        gYy: '808080',
        honeyMw: 'f0fff0',
        hotpRk: 'ff69b4',
        RdianYd: 'cd5c5c',
        Rdigo: '4b0082',
        ivSy: 'fffff0',
        khaki: 'f0e68c',
        lavFMr: 'e6e6fa',
        lavFMrXsh: 'fff0f5',
        lawngYF: '7cfc00',
        NmoncEffon: 'fffacd',
        ZXe: 'add8e6',
        ZcSO: 'f08080',
        Zcyan: 'e0ffff',
        ZgTMnPdLw: 'fafad2',
        ZWay: 'd3d3d3',
        ZgYF: '90ee90',
        ZgYy: 'd3d3d3',
        ZpRk: 'ffb6c1',
        ZsOmon: 'ffa07a',
        ZsHgYF: '20b2aa',
        ZskyXe: '87cefa',
        ZUWay: '778899',
        ZUgYy: '778899',
        ZstAlXe: 'b0c4de',
        ZLw: 'ffffe0',
        lime: 'ff00',
        limegYF: '32cd32',
        lRF: 'faf0e6',
        magFta: 'ff00ff',
        maPon: '800000',
        VaquamarRe: '66cdaa',
        VXe: 'cd',
        VScEd: 'ba55d3',
        VpurpN: '9370db',
        VsHgYF: '3cb371',
        VUXe: '7b68ee',
        VsprRggYF: 'fa9a',
        VQe: '48d1cc',
        VviTetYd: 'c71585',
        midnightXe: '191970',
        mRtcYam: 'f5fffa',
        mistyPse: 'ffe4e1',
        moccasR: 'ffe4b5',
        navajowEte: 'ffdead',
        navy: '80',
        Tdlace: 'fdf5e6',
        Tive: '808000',
        TivedBb: '6b8e23',
        Sange: 'ffa500',
        SangeYd: 'ff4500',
        ScEd: 'da70d6',
        pOegTMnPd: 'eee8aa',
        pOegYF: '98fb98',
        pOeQe: 'afeeee',
        pOeviTetYd: 'db7093',
        papayawEp: 'ffefd5',
        pHKpuff: 'ffdab9',
        peru: 'cd853f',
        pRk: 'ffc0cb',
        plum: 'dda0dd',
        powMrXe: 'b0e0e6',
        purpN: '800080',
        YbeccapurpN: '663399',
        Yd: 'ff0000',
        Psybrown: 'bc8f8f',
        PyOXe: '4169e1',
        saddNbPwn: '8b4513',
        sOmon: 'fa8072',
        sandybPwn: 'f4a460',
        sHgYF: '2e8b57',
        sHshell: 'fff5ee',
        siFna: 'a0522d',
        silver: 'c0c0c0',
        skyXe: '87ceeb',
        UXe: '6a5acd',
        UWay: '708090',
        UgYy: '708090',
        snow: 'fffafa',
        sprRggYF: 'ff7f',
        stAlXe: '4682b4',
        tan: 'd2b48c',
        teO: '8080',
        tEstN: 'd8bfd8',
        tomato: 'ff6347',
        Qe: '40e0d0',
        viTet: 'ee82ee',
        JHt: 'f5deb3',
        wEte: 'ffffff',
        wEtesmoke: 'f5f5f5',
        Lw: 'ffff00',
        LwgYF: '9acd32'
      };

      function unpack() {
        var unpacked = {};
        var keys = Object.keys(names);
        var tkeys = Object.keys(map$1);
        var i, j, k, ok, nk;

        for (i = 0; i < keys.length; i++) {
          ok = nk = keys[i];

          for (j = 0; j < tkeys.length; j++) {
            k = tkeys[j];
            nk = nk.replace(k, map$1[k]);
          }

          k = parseInt(names[ok], 16);
          unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
        }

        return unpacked;
      }

      var names$1;

      function nameParse(str) {
        if (!names$1) {
          names$1 = unpack();
          names$1.transparent = [0, 0, 0, 0];
        }

        var a = names$1[str.toLowerCase()];
        return a && {
          r: a[0],
          g: a[1],
          b: a[2],
          a: a.length === 4 ? a[3] : 255
        };
      }

      function modHSL(v, i, ratio) {
        if (v) {
          var tmp = rgb2hsl(v);
          tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
          tmp = hsl2rgb(tmp);
          v.r = tmp[0];
          v.g = tmp[1];
          v.b = tmp[2];
        }
      }

      function clone(v, proto) {
        return v ? Object.assign(proto || {}, v) : v;
      }

      function fromObject(input) {
        var v = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };

        if (Array.isArray(input)) {
          if (input.length >= 3) {
            v = {
              r: input[0],
              g: input[1],
              b: input[2],
              a: 255
            };

            if (input.length > 3) {
              v.a = n2b(input[3]);
            }
          }
        } else {
          v = clone(input, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
          });
          v.a = n2b(v.a);
        }

        return v;
      }

      function functionParse(str) {
        if (str.charAt(0) === 'r') {
          return rgbParse(str);
        }

        return hueParse(str);
      }

      var Color = /*#__PURE__*/function () {
        function Color(input) {
          _classCallCheck(this, Color);

          if (input instanceof Color) {
            return input;
          }

          var type = typeof input;
          var v;

          if (type === 'object') {
            v = fromObject(input);
          } else if (type === 'string') {
            v = hexParse(input) || nameParse(input) || functionParse(input);
          }

          this._rgb = v;
          this._valid = !!v;
        }

        _createClass(Color, [{
          key: "valid",
          get: function get() {
            return this._valid;
          }
        }, {
          key: "rgb",
          get: function get() {
            var v = clone(this._rgb);

            if (v) {
              v.a = b2n(v.a);
            }

            return v;
          },
          set: function set(obj) {
            this._rgb = fromObject(obj);
          }
        }, {
          key: "rgbString",
          value: function rgbString() {
            return this._valid ? _rgbString(this._rgb) : this._rgb;
          }
        }, {
          key: "hexString",
          value: function hexString() {
            return this._valid ? _hexString(this._rgb) : this._rgb;
          }
        }, {
          key: "hslString",
          value: function hslString() {
            return this._valid ? _hslString(this._rgb) : this._rgb;
          }
        }, {
          key: "mix",
          value: function mix(color, weight) {
            var me = this;

            if (color) {
              var c1 = me.rgb;
              var c2 = color.rgb;
              var w2;
              var p = weight === w2 ? 0.5 : weight;
              var w = 2 * p - 1;
              var a = c1.a - c2.a;
              var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
              w2 = 1 - w1;
              c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
              c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
              c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
              c1.a = p * c1.a + (1 - p) * c2.a;
              me.rgb = c1;
            }

            return me;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new Color(this.rgb);
          }
        }, {
          key: "alpha",
          value: function alpha(a) {
            this._rgb.a = n2b(a);
            return this;
          }
        }, {
          key: "clearer",
          value: function clearer(ratio) {
            var rgb = this._rgb;
            rgb.a *= 1 - ratio;
            return this;
          }
        }, {
          key: "greyscale",
          value: function greyscale() {
            var rgb = this._rgb;
            var val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
            rgb.r = rgb.g = rgb.b = val;
            return this;
          }
        }, {
          key: "opaquer",
          value: function opaquer(ratio) {
            var rgb = this._rgb;
            rgb.a *= 1 + ratio;
            return this;
          }
        }, {
          key: "negate",
          value: function negate() {
            var v = this._rgb;
            v.r = 255 - v.r;
            v.g = 255 - v.g;
            v.b = 255 - v.b;
            return this;
          }
        }, {
          key: "lighten",
          value: function lighten(ratio) {
            modHSL(this._rgb, 2, ratio);
            return this;
          }
        }, {
          key: "darken",
          value: function darken(ratio) {
            modHSL(this._rgb, 2, -ratio);
            return this;
          }
        }, {
          key: "saturate",
          value: function saturate(ratio) {
            modHSL(this._rgb, 1, ratio);
            return this;
          }
        }, {
          key: "desaturate",
          value: function desaturate(ratio) {
            modHSL(this._rgb, 1, -ratio);
            return this;
          }
        }, {
          key: "rotate",
          value: function rotate(deg) {
            _rotate(this._rgb, deg);

            return this;
          }
        }]);

        return Color;
      }();

      function index_esm(input) {
        return new Color(input);
      }

      var isPatternOrGradient = function isPatternOrGradient(value) {
        return value instanceof CanvasGradient || value instanceof CanvasPattern;
      };

      function color(value) {
        return isPatternOrGradient(value) ? value : index_esm(value);
      }

      function getHoverColor(value) {
        return isPatternOrGradient(value) ? value : index_esm(value).saturate(0.5).darken(0.1).hexString();
      }

      var overrides = Object.create(null);
      var descriptors = Object.create(null);

      function getScope$1(node, key) {
        if (!key) {
          return node;
        }

        var keys = key.split('.');

        for (var i = 0, n = keys.length; i < n; ++i) {
          var k = keys[i];
          node = node[k] || (node[k] = Object.create(null));
        }

        return node;
      }

      function _set(root, scope, values) {
        if (typeof scope === 'string') {
          return merge(getScope$1(root, scope), values);
        }

        return merge(getScope$1(root, ''), scope);
      }

      var Defaults = /*#__PURE__*/function () {
        function Defaults(_descriptors) {
          _classCallCheck(this, Defaults);

          this.animation = undefined;
          this.backgroundColor = 'rgba(0,0,0,0.1)';
          this.borderColor = 'rgba(0,0,0,0.1)';
          this.color = '#666';
          this.datasets = {};

          this.devicePixelRatio = function (context) {
            return context.chart.platform.getDevicePixelRatio();
          };

          this.elements = {};
          this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
          this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: 'normal',
            lineHeight: 1.2,
            weight: null
          };
          this.hover = {};

          this.hoverBackgroundColor = function (ctx, options) {
            return getHoverColor(options.backgroundColor);
          };

          this.hoverBorderColor = function (ctx, options) {
            return getHoverColor(options.borderColor);
          };

          this.hoverColor = function (ctx, options) {
            return getHoverColor(options.color);
          };

          this.indexAxis = 'x';
          this.interaction = {
            mode: 'nearest',
            intersect: true
          };
          this.maintainAspectRatio = true;
          this.onHover = null;
          this.onClick = null;
          this.parsing = true;
          this.plugins = {};
          this.responsive = true;
          this.scale = undefined;
          this.scales = {};
          this.showLine = true;
          this.drawActiveElementsOnTop = true;
          this.describe(_descriptors);
        }

        _createClass(Defaults, [{
          key: "set",
          value: function set(scope, values) {
            return _set(this, scope, values);
          }
        }, {
          key: "get",
          value: function get(scope) {
            return getScope$1(this, scope);
          }
        }, {
          key: "describe",
          value: function describe(scope, values) {
            return _set(descriptors, scope, values);
          }
        }, {
          key: "override",
          value: function override(scope, values) {
            return _set(overrides, scope, values);
          }
        }, {
          key: "route",
          value: function route(scope, name, targetScope, targetName) {
            var _Object$definePropert;

            var scopeObject = getScope$1(this, scope);
            var targetScopeObject = getScope$1(this, targetScope);
            var privateName = '_' + name;
            Object.defineProperties(scopeObject, (_Object$definePropert = {}, _defineProperty(_Object$definePropert, privateName, {
              value: scopeObject[name],
              writable: true
            }), _defineProperty(_Object$definePropert, name, {
              enumerable: true,
              get: function get() {
                var local = this[privateName];
                var target = targetScopeObject[targetName];

                if (isObject(local)) {
                  return Object.assign({}, target, local);
                }

                return valueOrDefault(local, target);
              },
              set: function set(value) {
                this[privateName] = value;
              }
            }), _Object$definePropert));
          }
        }]);

        return Defaults;
      }();

      var defaults = new Defaults({
        _scriptable: function _scriptable(name) {
          return !name.startsWith('on');
        },
        _indexable: function _indexable(name) {
          return name !== 'events';
        },
        hover: {
          _fallback: 'interaction'
        },
        interaction: {
          _scriptable: false,
          _indexable: false
        }
      });

      function toFontString(font) {
        if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
          return null;
        }

        return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
      }

      function _measureText(ctx, data, gc, longest, string) {
        var textWidth = data[string];

        if (!textWidth) {
          textWidth = data[string] = ctx.measureText(string).width;
          gc.push(string);
        }

        if (textWidth > longest) {
          longest = textWidth;
        }

        return longest;
      }

      function _longestText(ctx, font, arrayOfThings, cache) {
        cache = cache || {};
        var data = cache.data = cache.data || {};
        var gc = cache.garbageCollect = cache.garbageCollect || [];

        if (cache.font !== font) {
          data = cache.data = {};
          gc = cache.garbageCollect = [];
          cache.font = font;
        }

        ctx.save();
        ctx.font = font;
        var longest = 0;
        var ilen = arrayOfThings.length;
        var i, j, jlen, thing, nestedThing;

        for (i = 0; i < ilen; i++) {
          thing = arrayOfThings[i];

          if (thing !== undefined && thing !== null && isArray(thing) !== true) {
            longest = _measureText(ctx, data, gc, longest, thing);
          } else if (isArray(thing)) {
            for (j = 0, jlen = thing.length; j < jlen; j++) {
              nestedThing = thing[j];

              if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
                longest = _measureText(ctx, data, gc, longest, nestedThing);
              }
            }
          }
        }

        ctx.restore();
        var gcLen = gc.length / 2;

        if (gcLen > arrayOfThings.length) {
          for (i = 0; i < gcLen; i++) {
            delete data[gc[i]];
          }

          gc.splice(0, gcLen);
        }

        return longest;
      }

      function _alignPixel(chart, pixel, width) {
        var devicePixelRatio = chart.currentDevicePixelRatio;
        var halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
        return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
      }

      function clearCanvas(canvas, ctx) {
        ctx = ctx || canvas.getContext('2d');
        ctx.save();
        ctx.resetTransform();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      function drawPoint(ctx, options, x, y) {
        var type, xOffset, yOffset, size, cornerRadius;
        var style = options.pointStyle;
        var rotation = options.rotation;
        var radius = options.radius;
        var rad = (rotation || 0) * RAD_PER_DEG;

        if (style && typeof style === 'object') {
          type = style.toString();

          if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
            ctx.restore();
            return;
          }
        }

        if (isNaN(radius) || radius <= 0) {
          return;
        }

        ctx.beginPath();

        switch (style) {
          default:
            ctx.arc(x, y, radius, 0, TAU);
            ctx.closePath();
            break;

          case 'triangle':
            ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;

          case 'rectRounded':
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + QUARTER_PI) * size;
            yOffset = Math.sin(rad + QUARTER_PI) * size;
            ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
            ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
            ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
            ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
            ctx.closePath();
            break;

          case 'rect':
            if (!rotation) {
              size = Math.SQRT1_2 * radius;
              ctx.rect(x - size, y - size, 2 * size, 2 * size);
              break;
            }

            rad += QUARTER_PI;

          case 'rectRot':
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + yOffset, y - xOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            ctx.closePath();
            break;

          case 'crossRot':
            rad += QUARTER_PI;

          case 'cross':
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            break;

          case 'star':
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            rad += QUARTER_PI;
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            break;

          case 'line':
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;

          case 'dash':
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
            break;
        }

        ctx.fill();

        if (options.borderWidth > 0) {
          ctx.stroke();
        }
      }

      function _isPointInArea(point, area, margin) {
        margin = margin || 0.5;
        return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
      }

      function clipArea(ctx, area) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
        ctx.clip();
      }

      function unclipArea(ctx) {
        ctx.restore();
      }

      function _steppedLineTo(ctx, previous, target, flip, mode) {
        if (!previous) {
          return ctx.lineTo(target.x, target.y);
        }

        if (mode === 'middle') {
          var midpoint = (previous.x + target.x) / 2.0;
          ctx.lineTo(midpoint, previous.y);
          ctx.lineTo(midpoint, target.y);
        } else if (mode === 'after' !== !!flip) {
          ctx.lineTo(previous.x, target.y);
        } else {
          ctx.lineTo(target.x, previous.y);
        }

        ctx.lineTo(target.x, target.y);
      }

      function _bezierCurveTo(ctx, previous, target, flip) {
        if (!previous) {
          return ctx.lineTo(target.x, target.y);
        }

        ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
      }

      function renderText(ctx, text, x, y, font) {
        var opts = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
        var lines = isArray(text) ? text : [text];
        var stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
        var i, line;
        ctx.save();
        ctx.font = font.string;
        setRenderOpts(ctx, opts);

        for (i = 0; i < lines.length; ++i) {
          line = lines[i];

          if (stroke) {
            if (opts.strokeColor) {
              ctx.strokeStyle = opts.strokeColor;
            }

            if (!isNullOrUndef(opts.strokeWidth)) {
              ctx.lineWidth = opts.strokeWidth;
            }

            ctx.strokeText(line, x, y, opts.maxWidth);
          }

          ctx.fillText(line, x, y, opts.maxWidth);
          decorateText(ctx, x, y, line, opts);
          y += font.lineHeight;
        }

        ctx.restore();
      }

      function setRenderOpts(ctx, opts) {
        if (opts.translation) {
          ctx.translate(opts.translation[0], opts.translation[1]);
        }

        if (!isNullOrUndef(opts.rotation)) {
          ctx.rotate(opts.rotation);
        }

        if (opts.color) {
          ctx.fillStyle = opts.color;
        }

        if (opts.textAlign) {
          ctx.textAlign = opts.textAlign;
        }

        if (opts.textBaseline) {
          ctx.textBaseline = opts.textBaseline;
        }
      }

      function decorateText(ctx, x, y, line, opts) {
        if (opts.strikethrough || opts.underline) {
          var metrics = ctx.measureText(line);
          var left = x - metrics.actualBoundingBoxLeft;
          var right = x + metrics.actualBoundingBoxRight;
          var top = y - metrics.actualBoundingBoxAscent;
          var bottom = y + metrics.actualBoundingBoxDescent;
          var yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
          ctx.strokeStyle = ctx.fillStyle;
          ctx.beginPath();
          ctx.lineWidth = opts.decorationWidth || 2;
          ctx.moveTo(left, yDecoration);
          ctx.lineTo(right, yDecoration);
          ctx.stroke();
        }
      }

      function addRoundedRectPath(ctx, rect) {
        var x = rect.x,
            y = rect.y,
            w = rect.w,
            h = rect.h,
            radius = rect.radius;
        ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
        ctx.lineTo(x, y + h - radius.bottomLeft);
        ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
        ctx.lineTo(x + w - radius.bottomRight, y + h);
        ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
        ctx.lineTo(x + w, y + radius.topRight);
        ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
        ctx.lineTo(x + radius.topLeft, y);
      }

      var LINE_HEIGHT = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
      var FONT_STYLE = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

      function toLineHeight(value, size) {
        var matches = ('' + value).match(LINE_HEIGHT);

        if (!matches || matches[1] === 'normal') {
          return size * 1.2;
        }

        value = +matches[2];

        switch (matches[3]) {
          case 'px':
            return value;

          case '%':
            value /= 100;
            break;
        }

        return size * value;
      }

      var numberOrZero = function numberOrZero(v) {
        return +v || 0;
      };

      function _readValueToProps(value, props) {
        var ret = {};
        var objProps = isObject(props);
        var keys = objProps ? Object.keys(props) : props;
        var read = isObject(value) ? objProps ? function (prop) {
          return valueOrDefault(value[prop], value[props[prop]]);
        } : function (prop) {
          return value[prop];
        } : function () {
          return value;
        };

        var _iterator2 = _createForOfIteratorHelper(keys),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var prop = _step2.value;
            ret[prop] = numberOrZero(read(prop));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return ret;
      }

      function toTRBL(value) {
        return _readValueToProps(value, {
          top: 'y',
          right: 'x',
          bottom: 'y',
          left: 'x'
        });
      }

      function toTRBLCorners(value) {
        return _readValueToProps(value, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
      }

      function toPadding(value) {
        var obj = toTRBL(value);
        obj.width = obj.left + obj.right;
        obj.height = obj.top + obj.bottom;
        return obj;
      }

      function toFont(options, fallback) {
        options = options || {};
        fallback = fallback || defaults.font;
        var size = valueOrDefault(options.size, fallback.size);

        if (typeof size === 'string') {
          size = parseInt(size, 10);
        }

        var style = valueOrDefault(options.style, fallback.style);

        if (style && !('' + style).match(FONT_STYLE)) {
          console.warn('Invalid font style specified: "' + style + '"');
          style = '';
        }

        var font = {
          family: valueOrDefault(options.family, fallback.family),
          lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
          size: size,
          style: style,
          weight: valueOrDefault(options.weight, fallback.weight),
          string: ''
        };
        font.string = toFontString(font);
        return font;
      }

      function resolve(inputs, context, index, info) {
        var cacheable = true;
        var i, ilen, value;

        for (i = 0, ilen = inputs.length; i < ilen; ++i) {
          value = inputs[i];

          if (value === undefined) {
            continue;
          }

          if (context !== undefined && typeof value === 'function') {
            value = value(context);
            cacheable = false;
          }

          if (index !== undefined && isArray(value)) {
            value = value[index % value.length];
            cacheable = false;
          }

          if (value !== undefined) {
            if (info && !cacheable) {
              info.cacheable = false;
            }

            return value;
          }
        }
      }

      function _addGrace(minmax, grace, beginAtZero) {
        var min = minmax.min,
            max = minmax.max;
        var change = toDimension(grace, (max - min) / 2);

        var keepZero = function keepZero(value, add) {
          return beginAtZero && value === 0 ? 0 : value + add;
        };

        return {
          min: keepZero(min, -Math.abs(change)),
          max: keepZero(max, change)
        };
      }

      function createContext(parentContext, context) {
        return Object.assign(Object.create(parentContext), context);
      }

      function _lookup(table, value, cmp) {
        cmp = cmp || function (index) {
          return table[index] < value;
        };

        var hi = table.length - 1;
        var lo = 0;
        var mid;

        while (hi - lo > 1) {
          mid = lo + hi >> 1;

          if (cmp(mid)) {
            lo = mid;
          } else {
            hi = mid;
          }
        }

        return {
          lo: lo,
          hi: hi
        };
      }

      var _lookupByKey = function _lookupByKey(table, key, value) {
        return _lookup(table, value, function (index) {
          return table[index][key] < value;
        });
      };

      var _rlookupByKey = function _rlookupByKey(table, key, value) {
        return _lookup(table, value, function (index) {
          return table[index][key] >= value;
        });
      };

      function _filterBetween(values, min, max) {
        var start = 0;
        var end = values.length;

        while (start < end && values[start] < min) {
          start++;
        }

        while (end > start && values[end - 1] > max) {
          end--;
        }

        return start > 0 || end < values.length ? values.slice(start, end) : values;
      }

      var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

      function listenArrayEvents(array, listener) {
        if (array._chartjs) {
          array._chartjs.listeners.push(listener);

          return;
        }

        Object.defineProperty(array, '_chartjs', {
          configurable: true,
          enumerable: false,
          value: {
            listeners: [listener]
          }
        });
        arrayEvents.forEach(function (key) {
          var method = '_onData' + _capitalize(key);

          var base = array[key];
          Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value: function value() {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              var res = base.apply(this, args);

              array._chartjs.listeners.forEach(function (object) {
                if (typeof object[method] === 'function') {
                  object[method].apply(object, args);
                }
              });

              return res;
            }
          });
        });
      }

      function unlistenArrayEvents(array, listener) {
        var stub = array._chartjs;

        if (!stub) {
          return;
        }

        var listeners = stub.listeners;
        var index = listeners.indexOf(listener);

        if (index !== -1) {
          listeners.splice(index, 1);
        }

        if (listeners.length > 0) {
          return;
        }

        arrayEvents.forEach(function (key) {
          delete array[key];
        });
        delete array._chartjs;
      }

      function _arrayUnique(items) {
        var set = new Set();
        var i, ilen;

        for (i = 0, ilen = items.length; i < ilen; ++i) {
          set.add(items[i]);
        }

        if (set.size === ilen) {
          return items;
        }

        return Array.from(set);
      }

      function _createResolver(scopes) {
        var _cache;

        var prefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [''];
        var rootScopes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : scopes;
        var fallback = arguments.length > 3 ? arguments[3] : undefined;
        var getTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
          return scopes[0];
        };

        if (!defined(fallback)) {
          fallback = _resolve('_fallback', scopes);
        }

        var cache = (_cache = {}, _defineProperty(_cache, Symbol.toStringTag, 'Object'), _defineProperty(_cache, "_cacheable", true), _defineProperty(_cache, "_scopes", scopes), _defineProperty(_cache, "_rootScopes", rootScopes), _defineProperty(_cache, "_fallback", fallback), _defineProperty(_cache, "_getTarget", getTarget), _defineProperty(_cache, "override", function override(scope) {
          return _createResolver([scope].concat(_toConsumableArray(scopes)), prefixes, rootScopes, fallback);
        }), _cache);
        return new Proxy(cache, {
          deleteProperty: function deleteProperty(target, prop) {
            delete target[prop];
            delete target._keys;
            delete scopes[0][prop];
            return true;
          },
          get: function get(target, prop) {
            return _cached(target, prop, function () {
              return _resolveWithPrefixes(prop, prefixes, scopes, target);
            });
          },
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
            return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
          },
          getPrototypeOf: function getPrototypeOf() {
            return Reflect.getPrototypeOf(scopes[0]);
          },
          has: function has(target, prop) {
            return getKeysFromAllScopes(target).includes(prop);
          },
          ownKeys: function ownKeys(target) {
            return getKeysFromAllScopes(target);
          },
          set: function set(target, prop, value) {
            var storage = target._storage || (target._storage = getTarget());
            target[prop] = storage[prop] = value;
            delete target._keys;
            return true;
          }
        });
      }

      function _attachContext(proxy, context, subProxy, descriptorDefaults) {
        var cache = {
          _cacheable: false,
          _proxy: proxy,
          _context: context,
          _subProxy: subProxy,
          _stack: new Set(),
          _descriptors: _descriptors(proxy, descriptorDefaults),
          setContext: function setContext(ctx) {
            return _attachContext(proxy, ctx, subProxy, descriptorDefaults);
          },
          override: function override(scope) {
            return _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults);
          }
        };
        return new Proxy(cache, {
          deleteProperty: function deleteProperty(target, prop) {
            delete target[prop];
            delete proxy[prop];
            return true;
          },
          get: function get(target, prop, receiver) {
            return _cached(target, prop, function () {
              return _resolveWithContext(target, prop, receiver);
            });
          },
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
            return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
              enumerable: true,
              configurable: true
            } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
          },
          getPrototypeOf: function getPrototypeOf() {
            return Reflect.getPrototypeOf(proxy);
          },
          has: function has(target, prop) {
            return Reflect.has(proxy, prop);
          },
          ownKeys: function ownKeys() {
            return Reflect.ownKeys(proxy);
          },
          set: function set(target, prop, value) {
            proxy[prop] = value;
            delete target[prop];
            return true;
          }
        });
      }

      function _descriptors(proxy) {
        var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          scriptable: true,
          indexable: true
        };

        var _proxy$_scriptable = proxy._scriptable,
            _scriptable = _proxy$_scriptable === void 0 ? defaults.scriptable : _proxy$_scriptable,
            _proxy$_indexable = proxy._indexable,
            _indexable = _proxy$_indexable === void 0 ? defaults.indexable : _proxy$_indexable,
            _proxy$_allKeys = proxy._allKeys,
            _allKeys = _proxy$_allKeys === void 0 ? defaults.allKeys : _proxy$_allKeys;

        return {
          allKeys: _allKeys,
          scriptable: _scriptable,
          indexable: _indexable,
          isScriptable: isFunction(_scriptable) ? _scriptable : function () {
            return _scriptable;
          },
          isIndexable: isFunction(_indexable) ? _indexable : function () {
            return _indexable;
          }
        };
      }

      var readKey = function readKey(prefix, name) {
        return prefix ? prefix + _capitalize(name) : name;
      };

      var needsSubResolver = function needsSubResolver(prop, value) {
        return isObject(value) && prop !== 'adapters' && (Object.getPrototypeOf(value) === null || value.constructor === Object);
      };

      function _cached(target, prop, resolve) {
        if (Object.prototype.hasOwnProperty.call(target, prop)) {
          return target[prop];
        }

        var value = resolve();
        target[prop] = value;
        return value;
      }

      function _resolveWithContext(target, prop, receiver) {
        var _proxy = target._proxy,
            _context = target._context,
            _subProxy = target._subProxy,
            descriptors = target._descriptors;
        var value = _proxy[prop];

        if (isFunction(value) && descriptors.isScriptable(prop)) {
          value = _resolveScriptable(prop, value, target, receiver);
        }

        if (isArray(value) && value.length) {
          value = _resolveArray(prop, value, target, descriptors.isIndexable);
        }

        if (needsSubResolver(prop, value)) {
          value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
        }

        return value;
      }

      function _resolveScriptable(prop, value, target, receiver) {
        var _proxy = target._proxy,
            _context = target._context,
            _subProxy = target._subProxy,
            _stack = target._stack;

        if (_stack.has(prop)) {
          throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
        }

        _stack.add(prop);

        value = value(_context, _subProxy || receiver);

        _stack["delete"](prop);

        if (needsSubResolver(prop, value)) {
          value = createSubResolver(_proxy._scopes, _proxy, prop, value);
        }

        return value;
      }

      function _resolveArray(prop, value, target, isIndexable) {
        var _proxy = target._proxy,
            _context = target._context,
            _subProxy = target._subProxy,
            descriptors = target._descriptors;

        if (defined(_context.index) && isIndexable(prop)) {
          value = value[_context.index % value.length];
        } else if (isObject(value[0])) {
          var arr = value;

          var scopes = _proxy._scopes.filter(function (s) {
            return s !== arr;
          });

          value = [];

          var _iterator3 = _createForOfIteratorHelper(arr),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var item = _step3.value;
              var resolver = createSubResolver(scopes, _proxy, prop, item);
              value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        return value;
      }

      function resolveFallback(fallback, prop, value) {
        return isFunction(fallback) ? fallback(prop, value) : fallback;
      }

      var getScope = function getScope(key, parent) {
        return key === true ? parent : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
      };

      function addScopes(set, parentScopes, key, parentFallback, value) {
        var _iterator4 = _createForOfIteratorHelper(parentScopes),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var parent = _step4.value;
            var scope = getScope(key, parent);

            if (scope) {
              set.add(scope);
              var fallback = resolveFallback(scope._fallback, key, value);

              if (defined(fallback) && fallback !== key && fallback !== parentFallback) {
                return fallback;
              }
            } else if (scope === false && defined(parentFallback) && key !== parentFallback) {
              return null;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return false;
      }

      function createSubResolver(parentScopes, resolver, prop, value) {
        var rootScopes = resolver._rootScopes;
        var fallback = resolveFallback(resolver._fallback, prop, value);
        var allScopes = [].concat(_toConsumableArray(parentScopes), _toConsumableArray(rootScopes));
        var set = new Set();
        set.add(value);
        var key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);

        if (key === null) {
          return false;
        }

        if (defined(fallback) && fallback !== prop) {
          key = addScopesFromKey(set, allScopes, fallback, key, value);

          if (key === null) {
            return false;
          }
        }

        return _createResolver(Array.from(set), [''], rootScopes, fallback, function () {
          return subGetTarget(resolver, prop, value);
        });
      }

      function addScopesFromKey(set, allScopes, key, fallback, item) {
        while (key) {
          key = addScopes(set, allScopes, key, fallback, item);
        }

        return key;
      }

      function subGetTarget(resolver, prop, value) {
        var parent = resolver._getTarget();

        if (!(prop in parent)) {
          parent[prop] = {};
        }

        var target = parent[prop];

        if (isArray(target) && isObject(value)) {
          return value;
        }

        return target;
      }

      function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
        var value;

        var _iterator5 = _createForOfIteratorHelper(prefixes),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var prefix = _step5.value;
            value = _resolve(readKey(prefix, prop), scopes);

            if (defined(value)) {
              return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }

      function _resolve(key, scopes) {
        var _iterator6 = _createForOfIteratorHelper(scopes),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var scope = _step6.value;

            if (!scope) {
              continue;
            }

            var value = scope[key];

            if (defined(value)) {
              return value;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }

      function getKeysFromAllScopes(target) {
        var keys = target._keys;

        if (!keys) {
          keys = target._keys = resolveKeysFromAllScopes(target._scopes);
        }

        return keys;
      }

      function resolveKeysFromAllScopes(scopes) {
        var set = new Set();

        var _iterator7 = _createForOfIteratorHelper(scopes),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var scope = _step7.value;

            var _iterator8 = _createForOfIteratorHelper(Object.keys(scope).filter(function (k) {
              return !k.startsWith('_');
            })),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var key = _step8.value;
                set.add(key);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        return Array.from(set);
      }

      var EPSILON = Number.EPSILON || 1e-14;

      var getPoint = function getPoint(points, i) {
        return i < points.length && !points[i].skip && points[i];
      };

      var getValueAxis = function getValueAxis(indexAxis) {
        return indexAxis === 'x' ? 'y' : 'x';
      };

      function splineCurve(firstPoint, middlePoint, afterPoint, t) {
        var previous = firstPoint.skip ? middlePoint : firstPoint;
        var current = middlePoint;
        var next = afterPoint.skip ? middlePoint : afterPoint;
        var d01 = distanceBetweenPoints(current, previous);
        var d12 = distanceBetweenPoints(next, current);
        var s01 = d01 / (d01 + d12);
        var s12 = d12 / (d01 + d12);
        s01 = isNaN(s01) ? 0 : s01;
        s12 = isNaN(s12) ? 0 : s12;
        var fa = t * s01;
        var fb = t * s12;
        return {
          previous: {
            x: current.x - fa * (next.x - previous.x),
            y: current.y - fa * (next.y - previous.y)
          },
          next: {
            x: current.x + fb * (next.x - previous.x),
            y: current.y + fb * (next.y - previous.y)
          }
        };
      }

      function monotoneAdjust(points, deltaK, mK) {
        var pointsLen = points.length;
        var alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
        var pointAfter = getPoint(points, 0);

        for (var i = 0; i < pointsLen - 1; ++i) {
          pointCurrent = pointAfter;
          pointAfter = getPoint(points, i + 1);

          if (!pointCurrent || !pointAfter) {
            continue;
          }

          if (almostEquals(deltaK[i], 0, EPSILON)) {
            mK[i] = mK[i + 1] = 0;
            continue;
          }

          alphaK = mK[i] / deltaK[i];
          betaK = mK[i + 1] / deltaK[i];
          squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);

          if (squaredMagnitude <= 9) {
            continue;
          }

          tauK = 3 / Math.sqrt(squaredMagnitude);
          mK[i] = alphaK * tauK * deltaK[i];
          mK[i + 1] = betaK * tauK * deltaK[i];
        }
      }

      function monotoneCompute(points, mK) {
        var indexAxis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'x';
        var valueAxis = getValueAxis(indexAxis);
        var pointsLen = points.length;
        var delta, pointBefore, pointCurrent;
        var pointAfter = getPoint(points, 0);

        for (var i = 0; i < pointsLen; ++i) {
          pointBefore = pointCurrent;
          pointCurrent = pointAfter;
          pointAfter = getPoint(points, i + 1);

          if (!pointCurrent) {
            continue;
          }

          var iPixel = pointCurrent[indexAxis];
          var vPixel = pointCurrent[valueAxis];

          if (pointBefore) {
            delta = (iPixel - pointBefore[indexAxis]) / 3;
            pointCurrent["cp1".concat(indexAxis)] = iPixel - delta;
            pointCurrent["cp1".concat(valueAxis)] = vPixel - delta * mK[i];
          }

          if (pointAfter) {
            delta = (pointAfter[indexAxis] - iPixel) / 3;
            pointCurrent["cp2".concat(indexAxis)] = iPixel + delta;
            pointCurrent["cp2".concat(valueAxis)] = vPixel + delta * mK[i];
          }
        }
      }

      function splineCurveMonotone(points) {
        var indexAxis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
        var valueAxis = getValueAxis(indexAxis);
        var pointsLen = points.length;
        var deltaK = Array(pointsLen).fill(0);
        var mK = Array(pointsLen);
        var i, pointBefore, pointCurrent;
        var pointAfter = getPoint(points, 0);

        for (i = 0; i < pointsLen; ++i) {
          pointBefore = pointCurrent;
          pointCurrent = pointAfter;
          pointAfter = getPoint(points, i + 1);

          if (!pointCurrent) {
            continue;
          }

          if (pointAfter) {
            var slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
            deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
          }

          mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
        }

        monotoneAdjust(points, deltaK, mK);
        monotoneCompute(points, mK, indexAxis);
      }

      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }

      function capBezierPoints(points, area) {
        var i, ilen, point, inArea, inAreaPrev;

        var inAreaNext = _isPointInArea(points[0], area);

        for (i = 0, ilen = points.length; i < ilen; ++i) {
          inAreaPrev = inArea;
          inArea = inAreaNext;
          inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);

          if (!inArea) {
            continue;
          }

          point = points[i];

          if (inAreaPrev) {
            point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
            point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
          }

          if (inAreaNext) {
            point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
            point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
          }
        }
      }

      function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
        var i, ilen, point, controlPoints;

        if (options.spanGaps) {
          points = points.filter(function (pt) {
            return !pt.skip;
          });
        }

        if (options.cubicInterpolationMode === 'monotone') {
          splineCurveMonotone(points, indexAxis);
        } else {
          var prev = loop ? points[points.length - 1] : points[0];

          for (i = 0, ilen = points.length; i < ilen; ++i) {
            point = points[i];
            controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
            point.cp1x = controlPoints.previous.x;
            point.cp1y = controlPoints.previous.y;
            point.cp2x = controlPoints.next.x;
            point.cp2y = controlPoints.next.y;
            prev = point;
          }
        }

        if (options.capBezierPoints) {
          capBezierPoints(points, area);
        }
      }

      function _isDomSupported() {
        return typeof window !== 'undefined' && typeof document !== 'undefined';
      }

      function _getParentNode(domNode) {
        var parent = domNode.parentNode;

        if (parent && parent.toString() === '[object ShadowRoot]') {
          parent = parent.host;
        }

        return parent;
      }

      function parseMaxStyle(styleValue, node, parentProperty) {
        var valueInPixels;

        if (typeof styleValue === 'string') {
          valueInPixels = parseInt(styleValue, 10);

          if (styleValue.indexOf('%') !== -1) {
            valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
          }
        } else {
          valueInPixels = styleValue;
        }

        return valueInPixels;
      }

      var getComputedStyle = function getComputedStyle(element) {
        return window.getComputedStyle(element, null);
      };

      function getStyle(el, property) {
        return getComputedStyle(el).getPropertyValue(property);
      }

      var positions = ['top', 'right', 'bottom', 'left'];

      function getPositionedStyle(styles, style, suffix) {
        var result = {};
        suffix = suffix ? '-' + suffix : '';

        for (var i = 0; i < 4; i++) {
          var pos = positions[i];
          result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
        }

        result.width = result.left + result.right;
        result.height = result.top + result.bottom;
        return result;
      }

      var useOffsetPos = function useOffsetPos(x, y, target) {
        return (x > 0 || y > 0) && (!target || !target.shadowRoot);
      };

      function getCanvasPosition(evt, canvas) {
        var e = evt["native"] || evt;
        var touches = e.touches;
        var source = touches && touches.length ? touches[0] : e;
        var offsetX = source.offsetX,
            offsetY = source.offsetY;
        var box = false;
        var x, y;

        if (useOffsetPos(offsetX, offsetY, e.target)) {
          x = offsetX;
          y = offsetY;
        } else {
          var rect = canvas.getBoundingClientRect();
          x = source.clientX - rect.left;
          y = source.clientY - rect.top;
          box = true;
        }

        return {
          x: x,
          y: y,
          box: box
        };
      }

      function getRelativePosition(evt, chart) {
        var canvas = chart.canvas,
            currentDevicePixelRatio = chart.currentDevicePixelRatio;
        var style = getComputedStyle(canvas);
        var borderBox = style.boxSizing === 'border-box';
        var paddings = getPositionedStyle(style, 'padding');
        var borders = getPositionedStyle(style, 'border', 'width');

        var _getCanvasPosition = getCanvasPosition(evt, canvas),
            x = _getCanvasPosition.x,
            y = _getCanvasPosition.y,
            box = _getCanvasPosition.box;

        var xOffset = paddings.left + (box && borders.left);
        var yOffset = paddings.top + (box && borders.top);
        var width = chart.width,
            height = chart.height;

        if (borderBox) {
          width -= paddings.width + borders.width;
          height -= paddings.height + borders.height;
        }

        return {
          x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
          y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
        };
      }

      function getContainerSize(canvas, width, height) {
        var maxWidth, maxHeight;

        if (width === undefined || height === undefined) {
          var container = _getParentNode(canvas);

          if (!container) {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
          } else {
            var rect = container.getBoundingClientRect();
            var containerStyle = getComputedStyle(container);
            var containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
            var containerPadding = getPositionedStyle(containerStyle, 'padding');
            width = rect.width - containerPadding.width - containerBorder.width;
            height = rect.height - containerPadding.height - containerBorder.height;
            maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
            maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
          }
        }

        return {
          width: width,
          height: height,
          maxWidth: maxWidth || INFINITY,
          maxHeight: maxHeight || INFINITY
        };
      }

      var round1 = function round1(v) {
        return Math.round(v * 10) / 10;
      };

      function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
        var style = getComputedStyle(canvas);
        var margins = getPositionedStyle(style, 'margin');
        var maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
        var maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
        var containerSize = getContainerSize(canvas, bbWidth, bbHeight);
        var width = containerSize.width,
            height = containerSize.height;

        if (style.boxSizing === 'content-box') {
          var borders = getPositionedStyle(style, 'border', 'width');
          var paddings = getPositionedStyle(style, 'padding');
          width -= paddings.width + borders.width;
          height -= paddings.height + borders.height;
        }

        width = Math.max(0, width - margins.width);
        height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
        width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
        height = round1(Math.min(height, maxHeight, containerSize.maxHeight));

        if (width && !height) {
          height = round1(width / 2);
        }

        return {
          width: width,
          height: height
        };
      }

      function retinaScale(chart, forceRatio, forceStyle) {
        var pixelRatio = forceRatio || 1;
        var deviceHeight = Math.floor(chart.height * pixelRatio);
        var deviceWidth = Math.floor(chart.width * pixelRatio);
        chart.height = deviceHeight / pixelRatio;
        chart.width = deviceWidth / pixelRatio;
        var canvas = chart.canvas;

        if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
          canvas.style.height = "".concat(chart.height, "px");
          canvas.style.width = "".concat(chart.width, "px");
        }

        if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
          chart.currentDevicePixelRatio = pixelRatio;
          canvas.height = deviceHeight;
          canvas.width = deviceWidth;
          chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
          return true;
        }

        return false;
      }

      var supportsEventListenerOptions = function () {
        var passiveSupported = false;

        try {
          var options = {
            get passive() {
              passiveSupported = true;
              return false;
            }

          };
          window.addEventListener('test', null, options);
          window.removeEventListener('test', null, options);
        } catch (e) {}

        return passiveSupported;
      }();

      function readUsedSize(element, property) {
        var value = getStyle(element, property);
        var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
        return matches ? +matches[1] : undefined;
      }

      function _pointInLine(p1, p2, t, mode) {
        return {
          x: p1.x + t * (p2.x - p1.x),
          y: p1.y + t * (p2.y - p1.y)
        };
      }

      function _steppedInterpolation(p1, p2, t, mode) {
        return {
          x: p1.x + t * (p2.x - p1.x),
          y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
        };
      }

      function _bezierInterpolation(p1, p2, t, mode) {
        var cp1 = {
          x: p1.cp2x,
          y: p1.cp2y
        };
        var cp2 = {
          x: p2.cp1x,
          y: p2.cp1y
        };

        var a = _pointInLine(p1, cp1, t);

        var b = _pointInLine(cp1, cp2, t);

        var c = _pointInLine(cp2, p2, t);

        var d = _pointInLine(a, b, t);

        var e = _pointInLine(b, c, t);

        return _pointInLine(d, e, t);
      }

      var intlCache = new Map();

      function getNumberFormat(locale, options) {
        options = options || {};
        var cacheKey = locale + JSON.stringify(options);
        var formatter = intlCache.get(cacheKey);

        if (!formatter) {
          formatter = new Intl.NumberFormat(locale, options);
          intlCache.set(cacheKey, formatter);
        }

        return formatter;
      }

      function formatNumber(num, locale, options) {
        return getNumberFormat(locale, options).format(num);
      }

      var getRightToLeftAdapter = function getRightToLeftAdapter(rectX, width) {
        return {
          x: function x(_x) {
            return rectX + rectX + width - _x;
          },
          setWidth: function setWidth(w) {
            width = w;
          },
          textAlign: function textAlign(align) {
            if (align === 'center') {
              return align;
            }

            return align === 'right' ? 'left' : 'right';
          },
          xPlus: function xPlus(x, value) {
            return x - value;
          },
          leftForLtr: function leftForLtr(x, itemWidth) {
            return x - itemWidth;
          }
        };
      };

      var getLeftToRightAdapter = function getLeftToRightAdapter() {
        return {
          x: function x(_x2) {
            return _x2;
          },
          setWidth: function setWidth(w) {},
          textAlign: function textAlign(align) {
            return align;
          },
          xPlus: function xPlus(x, value) {
            return x + value;
          },
          leftForLtr: function leftForLtr(x, _itemWidth) {
            return x;
          }
        };
      };

      function getRtlAdapter(rtl, rectX, width) {
        return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
      }

      function overrideTextDirection(ctx, direction) {
        var style, original;

        if (direction === 'ltr' || direction === 'rtl') {
          style = ctx.canvas.style;
          original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
          style.setProperty('direction', direction, 'important');
          ctx.prevTextDirection = original;
        }
      }

      function restoreTextDirection(ctx, original) {
        if (original !== undefined) {
          delete ctx.prevTextDirection;
          ctx.canvas.style.setProperty('direction', original[0], original[1]);
        }
      }

      function propertyFn(property) {
        if (property === 'angle') {
          return {
            between: _angleBetween,
            compare: _angleDiff,
            normalize: _normalizeAngle
          };
        }

        return {
          between: _isBetween,
          compare: function compare(a, b) {
            return a - b;
          },
          normalize: function normalize(x) {
            return x;
          }
        };
      }

      function normalizeSegment(_ref) {
        var start = _ref.start,
            end = _ref.end,
            count = _ref.count,
            loop = _ref.loop,
            style = _ref.style;
        return {
          start: start % count,
          end: end % count,
          loop: loop && (end - start + 1) % count === 0,
          style: style
        };
      }

      function getSegment(segment, points, bounds) {
        var property = bounds.property,
            startBound = bounds.start,
            endBound = bounds.end;

        var _propertyFn = propertyFn(property),
            between = _propertyFn.between,
            normalize = _propertyFn.normalize;

        var count = points.length;
        var start = segment.start,
            end = segment.end,
            loop = segment.loop;
        var i, ilen;

        if (loop) {
          start += count;
          end += count;

          for (i = 0, ilen = count; i < ilen; ++i) {
            if (!between(normalize(points[start % count][property]), startBound, endBound)) {
              break;
            }

            start--;
            end--;
          }

          start %= count;
          end %= count;
        }

        if (end < start) {
          end += count;
        }

        return {
          start: start,
          end: end,
          loop: loop,
          style: segment.style
        };
      }

      function _boundSegment(segment, points, bounds) {
        if (!bounds) {
          return [segment];
        }

        var property = bounds.property,
            startBound = bounds.start,
            endBound = bounds.end;
        var count = points.length;

        var _propertyFn2 = propertyFn(property),
            compare = _propertyFn2.compare,
            between = _propertyFn2.between,
            normalize = _propertyFn2.normalize;

        var _getSegment = getSegment(segment, points, bounds),
            start = _getSegment.start,
            end = _getSegment.end,
            loop = _getSegment.loop,
            style = _getSegment.style;

        var result = [];
        var inside = false;
        var subStart = null;
        var value, point, prevValue;

        var startIsBefore = function startIsBefore() {
          return between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
        };

        var endIsBefore = function endIsBefore() {
          return compare(endBound, value) === 0 || between(endBound, prevValue, value);
        };

        var shouldStart = function shouldStart() {
          return inside || startIsBefore();
        };

        var shouldStop = function shouldStop() {
          return !inside || endIsBefore();
        };

        for (var i = start, prev = start; i <= end; ++i) {
          point = points[i % count];

          if (point.skip) {
            continue;
          }

          value = normalize(point[property]);

          if (value === prevValue) {
            continue;
          }

          inside = between(value, startBound, endBound);

          if (subStart === null && shouldStart()) {
            subStart = compare(value, startBound) === 0 ? i : prev;
          }

          if (subStart !== null && shouldStop()) {
            result.push(normalizeSegment({
              start: subStart,
              end: i,
              loop: loop,
              count: count,
              style: style
            }));
            subStart = null;
          }

          prev = i;
          prevValue = value;
        }

        if (subStart !== null) {
          result.push(normalizeSegment({
            start: subStart,
            end: end,
            loop: loop,
            count: count,
            style: style
          }));
        }

        return result;
      }

      function _boundSegments(line, bounds) {
        var result = [];
        var segments = line.segments;

        for (var i = 0; i < segments.length; i++) {
          var sub = _boundSegment(segments[i], line.points, bounds);

          if (sub.length) {
            result.push.apply(result, _toConsumableArray(sub));
          }
        }

        return result;
      }

      function findStartAndEnd(points, count, loop, spanGaps) {
        var start = 0;
        var end = count - 1;

        if (loop && !spanGaps) {
          while (start < count && !points[start].skip) {
            start++;
          }
        }

        while (start < count && points[start].skip) {
          start++;
        }

        start %= count;

        if (loop) {
          end += start;
        }

        while (end > start && points[end % count].skip) {
          end--;
        }

        end %= count;
        return {
          start: start,
          end: end
        };
      }

      function solidSegments(points, start, max, loop) {
        var count = points.length;
        var result = [];
        var last = start;
        var prev = points[start];
        var end;

        for (end = start + 1; end <= max; ++end) {
          var cur = points[end % count];

          if (cur.skip || cur.stop) {
            if (!prev.skip) {
              loop = false;
              result.push({
                start: start % count,
                end: (end - 1) % count,
                loop: loop
              });
              start = last = cur.stop ? end : null;
            }
          } else {
            last = end;

            if (prev.skip) {
              start = end;
            }
          }

          prev = cur;
        }

        if (last !== null) {
          result.push({
            start: start % count,
            end: last % count,
            loop: loop
          });
        }

        return result;
      }

      function _computeSegments(line, segmentOptions) {
        var points = line.points;
        var spanGaps = line.options.spanGaps;
        var count = points.length;

        if (!count) {
          return [];
        }

        var loop = !!line._loop;

        var _findStartAndEnd = findStartAndEnd(points, count, loop, spanGaps),
            start = _findStartAndEnd.start,
            end = _findStartAndEnd.end;

        if (spanGaps === true) {
          return splitByStyles(line, [{
            start: start,
            end: end,
            loop: loop
          }], points, segmentOptions);
        }

        var max = end < start ? end + count : end;
        var completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
        return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
      }

      function splitByStyles(line, segments, points, segmentOptions) {
        if (!segmentOptions || !segmentOptions.setContext || !points) {
          return segments;
        }

        return doSplitByStyles(line, segments, points, segmentOptions);
      }

      function doSplitByStyles(line, segments, points, segmentOptions) {
        var chartContext = line._chart.getContext();

        var baseStyle = readStyle(line.options);
        var datasetIndex = line._datasetIndex,
            spanGaps = line.options.spanGaps;
        var count = points.length;
        var result = [];
        var prevStyle = baseStyle;
        var start = segments[0].start;
        var i = start;

        function addStyle(s, e, l, st) {
          var dir = spanGaps ? -1 : 1;

          if (s === e) {
            return;
          }

          s += count;

          while (points[s % count].skip) {
            s -= dir;
          }

          while (points[e % count].skip) {
            e += dir;
          }

          if (s % count !== e % count) {
            result.push({
              start: s % count,
              end: e % count,
              loop: l,
              style: st
            });
            prevStyle = st;
            start = e % count;
          }
        }

        var _iterator9 = _createForOfIteratorHelper(segments),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var segment = _step9.value;
            start = spanGaps ? start : segment.start;
            var prev = points[start % count];
            var style = void 0;

            for (i = start + 1; i <= segment.end; i++) {
              var pt = points[i % count];
              style = readStyle(segmentOptions.setContext(createContext(chartContext, {
                type: 'segment',
                p0: prev,
                p1: pt,
                p0DataIndex: (i - 1) % count,
                p1DataIndex: i % count,
                datasetIndex: datasetIndex
              })));

              if (styleChanged(style, prevStyle)) {
                addStyle(start, i - 1, segment.loop, prevStyle);
              }

              prev = pt;
              prevStyle = style;
            }

            if (start < i - 1) {
              addStyle(start, i - 1, segment.loop, prevStyle);
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        return result;
      }

      function readStyle(options) {
        return {
          backgroundColor: options.backgroundColor,
          borderCapStyle: options.borderCapStyle,
          borderDash: options.borderDash,
          borderDashOffset: options.borderDashOffset,
          borderJoinStyle: options.borderJoinStyle,
          borderWidth: options.borderWidth,
          borderColor: options.borderColor
        };
      }

      function styleChanged(style, prevStyle) {
        return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
      }
      /***/

    },

    /***/
    "m0r1":
    /*!*************************************************!*\
      !*** ./node_modules/chart.js/dist/chart.esm.js ***!
      \*************************************************/

    /*! exports provided: defaults, Animation, Animations, ArcElement, BarController, BarElement, BasePlatform, BasicPlatform, BubbleController, CategoryScale, Chart, DatasetController, Decimation, DomPlatform, DoughnutController, Element, Filler, Interaction, Legend, LineController, LineElement, LinearScale, LogarithmicScale, PieController, PointElement, PolarAreaController, RadarController, RadialLinearScale, Scale, ScatterController, SubTitle, Ticks, TimeScale, TimeSeriesScale, Title, Tooltip, _adapters, _detectPlatform, animator, controllers, elements, layouts, plugins, registerables, registry, scales */

    /***/
    function m0r1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Animation", function () {
        return Animation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Animations", function () {
        return Animations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArcElement", function () {
        return ArcElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarController", function () {
        return BarController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarElement", function () {
        return BarElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePlatform", function () {
        return BasePlatform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicPlatform", function () {
        return BasicPlatform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BubbleController", function () {
        return BubbleController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryScale", function () {
        return CategoryScale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Chart", function () {
        return Chart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatasetController", function () {
        return DatasetController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Decimation", function () {
        return plugin_decimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPlatform", function () {
        return DomPlatform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoughnutController", function () {
        return DoughnutController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Element", function () {
        return Element;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Filler", function () {
        return plugin_filler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Interaction", function () {
        return Interaction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Legend", function () {
        return plugin_legend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineController", function () {
        return LineController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineElement", function () {
        return LineElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinearScale", function () {
        return LinearScale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogarithmicScale", function () {
        return LogarithmicScale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieController", function () {
        return PieController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PointElement", function () {
        return PointElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolarAreaController", function () {
        return PolarAreaController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadarController", function () {
        return RadarController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadialLinearScale", function () {
        return RadialLinearScale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Scale", function () {
        return Scale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScatterController", function () {
        return ScatterController;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubTitle", function () {
        return plugin_subtitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ticks", function () {
        return Ticks;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeScale", function () {
        return TimeScale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeSeriesScale", function () {
        return TimeSeriesScale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Title", function () {
        return plugin_title;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tooltip", function () {
        return plugin_tooltip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_adapters", function () {
        return adapters;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_detectPlatform", function () {
        return _detectPlatform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "animator", function () {
        return animator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "controllers", function () {
        return controllers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "elements", function () {
        return elements;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "layouts", function () {
        return layouts;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plugins", function () {
        return plugins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerables", function () {
        return registerables;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registry", function () {
        return registry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scales", function () {
        return scales;
      });
      /* harmony import */


      var _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chunks/helpers.segment.js */
      "3T2N");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "defaults", function () {
        return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"];
      });
      /*!
       * Chart.js v3.7.1
       * https://www.chartjs.org
       * (c) 2022 Chart.js Contributors
       * Released under the MIT License
       */


      var Animator = /*#__PURE__*/function () {
        function Animator() {
          _classCallCheck(this, Animator);

          this._request = null;
          this._charts = new Map();
          this._running = false;
          this._lastDate = undefined;
        }

        _createClass(Animator, [{
          key: "_notify",
          value: function _notify(chart, anims, date, type) {
            var callbacks = anims.listeners[type];
            var numSteps = anims.duration;
            callbacks.forEach(function (fn) {
              return fn({
                chart: chart,
                initial: anims.initial,
                numSteps: numSteps,
                currentStep: Math.min(date - anims.start, numSteps)
              });
            });
          }
        }, {
          key: "_refresh",
          value: function _refresh() {
            var _this = this;

            if (this._request) {
              return;
            }

            this._running = true;
            this._request = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["r"].call(window, function () {
              _this._update();

              _this._request = null;

              if (_this._running) {
                _this._refresh();
              }
            });
          }
        }, {
          key: "_update",
          value: function _update() {
            var _this2 = this;

            var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
            var remaining = 0;

            this._charts.forEach(function (anims, chart) {
              if (!anims.running || !anims.items.length) {
                return;
              }

              var items = anims.items;
              var i = items.length - 1;
              var draw = false;
              var item;

              for (; i >= 0; --i) {
                item = items[i];

                if (item._active) {
                  if (item._total > anims.duration) {
                    anims.duration = item._total;
                  }

                  item.tick(date);
                  draw = true;
                } else {
                  items[i] = items[items.length - 1];
                  items.pop();
                }
              }

              if (draw) {
                chart.draw();

                _this2._notify(chart, anims, date, 'progress');
              }

              if (!items.length) {
                anims.running = false;

                _this2._notify(chart, anims, date, 'complete');

                anims.initial = false;
              }

              remaining += items.length;
            });

            this._lastDate = date;

            if (remaining === 0) {
              this._running = false;
            }
          }
        }, {
          key: "_getAnims",
          value: function _getAnims(chart) {
            var charts = this._charts;
            var anims = charts.get(chart);

            if (!anims) {
              anims = {
                running: false,
                initial: true,
                items: [],
                listeners: {
                  complete: [],
                  progress: []
                }
              };
              charts.set(chart, anims);
            }

            return anims;
          }
        }, {
          key: "listen",
          value: function listen(chart, event, cb) {
            this._getAnims(chart).listeners[event].push(cb);
          }
        }, {
          key: "add",
          value: function add(chart, items) {
            var _this$_getAnims$items;

            if (!items || !items.length) {
              return;
            }

            (_this$_getAnims$items = this._getAnims(chart).items).push.apply(_this$_getAnims$items, _toConsumableArray(items));
          }
        }, {
          key: "has",
          value: function has(chart) {
            return this._getAnims(chart).items.length > 0;
          }
        }, {
          key: "start",
          value: function start(chart) {
            var anims = this._charts.get(chart);

            if (!anims) {
              return;
            }

            anims.running = true;
            anims.start = Date.now();
            anims.duration = anims.items.reduce(function (acc, cur) {
              return Math.max(acc, cur._duration);
            }, 0);

            this._refresh();
          }
        }, {
          key: "running",
          value: function running(chart) {
            if (!this._running) {
              return false;
            }

            var anims = this._charts.get(chart);

            if (!anims || !anims.running || !anims.items.length) {
              return false;
            }

            return true;
          }
        }, {
          key: "stop",
          value: function stop(chart) {
            var anims = this._charts.get(chart);

            if (!anims || !anims.items.length) {
              return;
            }

            var items = anims.items;
            var i = items.length - 1;

            for (; i >= 0; --i) {
              items[i].cancel();
            }

            anims.items = [];

            this._notify(chart, anims, Date.now(), 'complete');
          }
        }, {
          key: "remove",
          value: function remove(chart) {
            return this._charts["delete"](chart);
          }
        }]);

        return Animator;
      }();

      var animator = new Animator();
      var transparent = 'transparent';
      var interpolators = {
        "boolean": function boolean(from, to, factor) {
          return factor > 0.5 ? to : from;
        },
        color: function color(from, to, factor) {
          var c0 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["c"])(from || transparent);
          var c1 = c0.valid && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["c"])(to || transparent);
          return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
        },
        number: function number(from, to, factor) {
          return from + (to - from) * factor;
        }
      };

      var Animation = /*#__PURE__*/function () {
        function Animation(cfg, target, prop, to) {
          _classCallCheck(this, Animation);

          var currentValue = target[prop];
          to = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a"])([cfg.to, to, currentValue, cfg.from]);
          var from = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a"])([cfg.from, currentValue, to]);
          this._active = true;
          this._fn = cfg.fn || interpolators[cfg.type || typeof from];
          this._easing = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["e"][cfg.easing] || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["e"].linear;
          this._start = Math.floor(Date.now() + (cfg.delay || 0));
          this._duration = this._total = Math.floor(cfg.duration);
          this._loop = !!cfg.loop;
          this._target = target;
          this._prop = prop;
          this._from = from;
          this._to = to;
          this._promises = undefined;
        }

        _createClass(Animation, [{
          key: "active",
          value: function active() {
            return this._active;
          }
        }, {
          key: "update",
          value: function update(cfg, to, date) {
            if (this._active) {
              this._notify(false);

              var currentValue = this._target[this._prop];
              var elapsed = date - this._start;
              var remain = this._duration - elapsed;
              this._start = date;
              this._duration = Math.floor(Math.max(remain, cfg.duration));
              this._total += elapsed;
              this._loop = !!cfg.loop;
              this._to = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a"])([cfg.to, to, currentValue, cfg.from]);
              this._from = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a"])([cfg.from, currentValue, to]);
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            if (this._active) {
              this.tick(Date.now());
              this._active = false;

              this._notify(false);
            }
          }
        }, {
          key: "tick",
          value: function tick(date) {
            var elapsed = date - this._start;
            var duration = this._duration;
            var prop = this._prop;
            var from = this._from;
            var loop = this._loop;
            var to = this._to;
            var factor;
            this._active = from !== to && (loop || elapsed < duration);

            if (!this._active) {
              this._target[prop] = to;

              this._notify(true);

              return;
            }

            if (elapsed < 0) {
              this._target[prop] = from;
              return;
            }

            factor = elapsed / duration % 2;
            factor = loop && factor > 1 ? 2 - factor : factor;
            factor = this._easing(Math.min(1, Math.max(0, factor)));
            this._target[prop] = this._fn(from, to, factor);
          }
        }, {
          key: "wait",
          value: function wait() {
            var promises = this._promises || (this._promises = []);
            return new Promise(function (res, rej) {
              promises.push({
                res: res,
                rej: rej
              });
            });
          }
        }, {
          key: "_notify",
          value: function _notify(resolved) {
            var method = resolved ? 'res' : 'rej';
            var promises = this._promises || [];

            for (var i = 0; i < promises.length; i++) {
              promises[i][method]();
            }
          }
        }]);

        return Animation;
      }();

      var numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
      var colors = ['color', 'borderColor', 'backgroundColor'];

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].set('animation', {
        delay: undefined,
        duration: 1000,
        easing: 'easeOutQuart',
        fn: undefined,
        from: undefined,
        loop: undefined,
        to: undefined,
        type: undefined
      });

      var animationOptions = Object.keys(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].animation);

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].describe('animation', {
        _fallback: false,
        _indexable: false,
        _scriptable: function _scriptable(name) {
          return name !== 'onProgress' && name !== 'onComplete' && name !== 'fn';
        }
      });

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].set('animations', {
        colors: {
          type: 'color',
          properties: colors
        },
        numbers: {
          type: 'number',
          properties: numbers
        }
      });

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].describe('animations', {
        _fallback: 'animation'
      });

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].set('transitions', {
        active: {
          animation: {
            duration: 400
          }
        },
        resize: {
          animation: {
            duration: 0
          }
        },
        show: {
          animations: {
            colors: {
              from: 'transparent'
            },
            visible: {
              type: 'boolean',
              duration: 0
            }
          }
        },
        hide: {
          animations: {
            colors: {
              to: 'transparent'
            },
            visible: {
              type: 'boolean',
              easing: 'linear',
              fn: function fn(v) {
                return v | 0;
              }
            }
          }
        }
      });

      var Animations = /*#__PURE__*/function () {
        function Animations(chart, config) {
          _classCallCheck(this, Animations);

          this._chart = chart;
          this._properties = new Map();
          this.configure(config);
        }

        _createClass(Animations, [{
          key: "configure",
          value: function configure(config) {
            if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(config)) {
              return;
            }

            var animatedProps = this._properties;
            Object.getOwnPropertyNames(config).forEach(function (key) {
              var cfg = config[key];

              if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(cfg)) {
                return;
              }

              var resolved = {};

              var _iterator10 = _createForOfIteratorHelper(animationOptions),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var option = _step10.value;
                  resolved[option] = cfg[option];
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(cfg.properties) && cfg.properties || [key]).forEach(function (prop) {
                if (prop === key || !animatedProps.has(prop)) {
                  animatedProps.set(prop, resolved);
                }
              });
            });
          }
        }, {
          key: "_animateOptions",
          value: function _animateOptions(target, values) {
            var newOptions = values.options;
            var options = resolveTargetOptions(target, newOptions);

            if (!options) {
              return [];
            }

            var animations = this._createAnimations(options, newOptions);

            if (newOptions.$shared) {
              awaitAll(target.options.$animations, newOptions).then(function () {
                target.options = newOptions;
              }, function () {});
            }

            return animations;
          }
        }, {
          key: "_createAnimations",
          value: function _createAnimations(target, values) {
            var animatedProps = this._properties;
            var animations = [];
            var running = target.$animations || (target.$animations = {});
            var props = Object.keys(values);
            var date = Date.now();
            var i;

            for (i = props.length - 1; i >= 0; --i) {
              var prop = props[i];

              if (prop.charAt(0) === '$') {
                continue;
              }

              if (prop === 'options') {
                animations.push.apply(animations, _toConsumableArray(this._animateOptions(target, values)));
                continue;
              }

              var value = values[prop];
              var animation = running[prop];
              var cfg = animatedProps.get(prop);

              if (animation) {
                if (cfg && animation.active()) {
                  animation.update(cfg, value, date);
                  continue;
                } else {
                  animation.cancel();
                }
              }

              if (!cfg || !cfg.duration) {
                target[prop] = value;
                continue;
              }

              running[prop] = animation = new Animation(cfg, target, prop, value);
              animations.push(animation);
            }

            return animations;
          }
        }, {
          key: "update",
          value: function update(target, values) {
            if (this._properties.size === 0) {
              Object.assign(target, values);
              return;
            }

            var animations = this._createAnimations(target, values);

            if (animations.length) {
              animator.add(this._chart, animations);
              return true;
            }
          }
        }]);

        return Animations;
      }();

      function awaitAll(animations, properties) {
        var running = [];
        var keys = Object.keys(properties);

        for (var i = 0; i < keys.length; i++) {
          var anim = animations[keys[i]];

          if (anim && anim.active()) {
            running.push(anim.wait());
          }
        }

        return Promise.all(running);
      }

      function resolveTargetOptions(target, newOptions) {
        if (!newOptions) {
          return;
        }

        var options = target.options;

        if (!options) {
          target.options = newOptions;
          return;
        }

        if (options.$shared) {
          target.options = options = Object.assign({}, options, {
            $shared: false,
            $animations: {}
          });
        }

        return options;
      }

      function scaleClip(scale, allowedOverflow) {
        var opts = scale && scale.options || {};
        var reverse = opts.reverse;
        var min = opts.min === undefined ? allowedOverflow : 0;
        var max = opts.max === undefined ? allowedOverflow : 0;
        return {
          start: reverse ? max : min,
          end: reverse ? min : max
        };
      }

      function defaultClip(xScale, yScale, allowedOverflow) {
        if (allowedOverflow === false) {
          return false;
        }

        var x = scaleClip(xScale, allowedOverflow);
        var y = scaleClip(yScale, allowedOverflow);
        return {
          top: y.end,
          right: x.end,
          bottom: y.start,
          left: x.start
        };
      }

      function toClip(value) {
        var t, r, b, l;

        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(value)) {
          t = value.top;
          r = value.right;
          b = value.bottom;
          l = value.left;
        } else {
          t = r = b = l = value;
        }

        return {
          top: t,
          right: r,
          bottom: b,
          left: l,
          disabled: value === false
        };
      }

      function getSortedDatasetIndices(chart, filterVisible) {
        var keys = [];

        var metasets = chart._getSortedDatasetMetas(filterVisible);

        var i, ilen;

        for (i = 0, ilen = metasets.length; i < ilen; ++i) {
          keys.push(metasets[i].index);
        }

        return keys;
      }

      function _applyStack(stack, value, dsIndex) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var keys = stack.keys;
        var singleMode = options.mode === 'single';
        var i, ilen, datasetIndex, otherValue;

        if (value === null) {
          return;
        }

        for (i = 0, ilen = keys.length; i < ilen; ++i) {
          datasetIndex = +keys[i];

          if (datasetIndex === dsIndex) {
            if (options.all) {
              continue;
            }

            break;
          }

          otherValue = stack.values[datasetIndex];

          if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(otherValue) && (singleMode || value === 0 || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["s"])(value) === Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["s"])(otherValue))) {
            value += otherValue;
          }
        }

        return value;
      }

      function convertObjectDataToArray(data) {
        var keys = Object.keys(data);
        var adata = new Array(keys.length);
        var i, ilen, key;

        for (i = 0, ilen = keys.length; i < ilen; ++i) {
          key = keys[i];
          adata[i] = {
            x: key,
            y: data[key]
          };
        }

        return adata;
      }

      function isStacked(scale, meta) {
        var stacked = scale && scale.options.stacked;
        return stacked || stacked === undefined && meta.stack !== undefined;
      }

      function getStackKey(indexScale, valueScale, meta) {
        return "".concat(indexScale.id, ".").concat(valueScale.id, ".").concat(meta.stack || meta.type);
      }

      function getUserBounds(scale) {
        var _scale$getUserBounds = scale.getUserBounds(),
            min = _scale$getUserBounds.min,
            max = _scale$getUserBounds.max,
            minDefined = _scale$getUserBounds.minDefined,
            maxDefined = _scale$getUserBounds.maxDefined;

        return {
          min: minDefined ? min : Number.NEGATIVE_INFINITY,
          max: maxDefined ? max : Number.POSITIVE_INFINITY
        };
      }

      function getOrCreateStack(stacks, stackKey, indexValue) {
        var subStack = stacks[stackKey] || (stacks[stackKey] = {});
        return subStack[indexValue] || (subStack[indexValue] = {});
      }

      function getLastIndexInStack(stack, vScale, positive, type) {
        var _iterator11 = _createForOfIteratorHelper(vScale.getMatchingVisibleMetas(type).reverse()),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var meta = _step11.value;
            var value = stack[meta.index];

            if (positive && value > 0 || !positive && value < 0) {
              return meta.index;
            }
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        return null;
      }

      function updateStacks(controller, parsed) {
        var chart = controller.chart,
            meta = controller._cachedMeta;
        var stacks = chart._stacks || (chart._stacks = {});
        var iScale = meta.iScale,
            vScale = meta.vScale,
            datasetIndex = meta.index;
        var iAxis = iScale.axis;
        var vAxis = vScale.axis;
        var key = getStackKey(iScale, vScale, meta);
        var ilen = parsed.length;
        var stack;

        for (var i = 0; i < ilen; ++i) {
          var item = parsed[i];
          var index = item[iAxis],
              value = item[vAxis];
          var itemStacks = item._stacks || (item._stacks = {});
          stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
          stack[datasetIndex] = value;
          stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
          stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
        }
      }

      function getFirstScaleId(chart, axis) {
        var scales = chart.scales;
        return Object.keys(scales).filter(function (key) {
          return scales[key].axis === axis;
        }).shift();
      }

      function createDatasetContext(parent, index) {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["h"])(parent, {
          active: false,
          dataset: undefined,
          datasetIndex: index,
          index: index,
          mode: 'default',
          type: 'dataset'
        });
      }

      function createDataContext(parent, index, element) {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["h"])(parent, {
          active: false,
          dataIndex: index,
          parsed: undefined,
          raw: undefined,
          element: element,
          index: index,
          mode: 'default',
          type: 'data'
        });
      }

      function clearStacks(meta, items) {
        var datasetIndex = meta.controller.index;
        var axis = meta.vScale && meta.vScale.axis;

        if (!axis) {
          return;
        }

        items = items || meta._parsed;

        var _iterator12 = _createForOfIteratorHelper(items),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var parsed = _step12.value;
            var stacks = parsed._stacks;

            if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) {
              return;
            }

            delete stacks[axis][datasetIndex];
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }

      var isDirectUpdateMode = function isDirectUpdateMode(mode) {
        return mode === 'reset' || mode === 'none';
      };

      var cloneIfNotShared = function cloneIfNotShared(cached, shared) {
        return shared ? cached : Object.assign({}, cached);
      };

      var createStack = function createStack(canStack, meta, chart) {
        return canStack && !meta.hidden && meta._stacked && {
          keys: getSortedDatasetIndices(chart, true),
          values: null
        };
      };

      var DatasetController = /*#__PURE__*/function () {
        function DatasetController(chart, datasetIndex) {
          _classCallCheck(this, DatasetController);

          this.chart = chart;
          this._ctx = chart.ctx;
          this.index = datasetIndex;
          this._cachedDataOpts = {};
          this._cachedMeta = this.getMeta();
          this._type = this._cachedMeta.type;
          this.options = undefined;
          this._parsing = false;
          this._data = undefined;
          this._objectData = undefined;
          this._sharedOptions = undefined;
          this._drawStart = undefined;
          this._drawCount = undefined;
          this.enableOptionSharing = false;
          this.$context = undefined;
          this._syncList = [];
          this.initialize();
        }

        _createClass(DatasetController, [{
          key: "initialize",
          value: function initialize() {
            var meta = this._cachedMeta;
            this.configure();
            this.linkScales();
            meta._stacked = isStacked(meta.vScale, meta);
            this.addElements();
          }
        }, {
          key: "updateIndex",
          value: function updateIndex(datasetIndex) {
            if (this.index !== datasetIndex) {
              clearStacks(this._cachedMeta);
            }

            this.index = datasetIndex;
          }
        }, {
          key: "linkScales",
          value: function linkScales() {
            var chart = this.chart;
            var meta = this._cachedMeta;
            var dataset = this.getDataset();

            var chooseId = function chooseId(axis, x, y, r) {
              return axis === 'x' ? x : axis === 'r' ? r : y;
            };

            var xid = meta.xAxisID = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(dataset.xAxisID, getFirstScaleId(chart, 'x'));
            var yid = meta.yAxisID = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(dataset.yAxisID, getFirstScaleId(chart, 'y'));
            var rid = meta.rAxisID = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(dataset.rAxisID, getFirstScaleId(chart, 'r'));
            var indexAxis = meta.indexAxis;
            var iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
            var vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
            meta.xScale = this.getScaleForId(xid);
            meta.yScale = this.getScaleForId(yid);
            meta.rScale = this.getScaleForId(rid);
            meta.iScale = this.getScaleForId(iid);
            meta.vScale = this.getScaleForId(vid);
          }
        }, {
          key: "getDataset",
          value: function getDataset() {
            return this.chart.data.datasets[this.index];
          }
        }, {
          key: "getMeta",
          value: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          }
        }, {
          key: "getScaleForId",
          value: function getScaleForId(scaleID) {
            return this.chart.scales[scaleID];
          }
        }, {
          key: "_getOtherScale",
          value: function _getOtherScale(scale) {
            var meta = this._cachedMeta;
            return scale === meta.iScale ? meta.vScale : meta.iScale;
          }
        }, {
          key: "reset",
          value: function reset() {
            this._update('reset');
          }
        }, {
          key: "_destroy",
          value: function _destroy() {
            var meta = this._cachedMeta;

            if (this._data) {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["u"])(this._data, this);
            }

            if (meta._stacked) {
              clearStacks(meta);
            }
          }
        }, {
          key: "_dataCheck",
          value: function _dataCheck() {
            var dataset = this.getDataset();
            var data = dataset.data || (dataset.data = []);
            var _data = this._data;

            if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(data)) {
              this._data = convertObjectDataToArray(data);
            } else if (_data !== data) {
              if (_data) {
                Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["u"])(_data, this);
                var meta = this._cachedMeta;
                clearStacks(meta);
                meta._parsed = [];
              }

              if (data && Object.isExtensible(data)) {
                Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["l"])(data, this);
              }

              this._syncList = [];
              this._data = data;
            }
          }
        }, {
          key: "addElements",
          value: function addElements() {
            var meta = this._cachedMeta;

            this._dataCheck();

            if (this.datasetElementType) {
              meta.dataset = new this.datasetElementType();
            }
          }
        }, {
          key: "buildOrUpdateElements",
          value: function buildOrUpdateElements(resetNewElements) {
            var meta = this._cachedMeta;
            var dataset = this.getDataset();
            var stackChanged = false;

            this._dataCheck();

            var oldStacked = meta._stacked;
            meta._stacked = isStacked(meta.vScale, meta);

            if (meta.stack !== dataset.stack) {
              stackChanged = true;
              clearStacks(meta);
              meta.stack = dataset.stack;
            }

            this._resyncElements(resetNewElements);

            if (stackChanged || oldStacked !== meta._stacked) {
              updateStacks(this, meta._parsed);
            }
          }
        }, {
          key: "configure",
          value: function configure() {
            var config = this.chart.config;
            var scopeKeys = config.datasetScopeKeys(this._type);
            var scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
            this.options = config.createResolver(scopes, this.getContext());
            this._parsing = this.options.parsing;
            this._cachedDataOpts = {};
          }
        }, {
          key: "parse",
          value: function parse(start, count) {
            var meta = this._cachedMeta,
                data = this._data;
            var iScale = meta.iScale,
                _stacked = meta._stacked;
            var iAxis = iScale.axis;
            var sorted = start === 0 && count === data.length ? true : meta._sorted;
            var prev = start > 0 && meta._parsed[start - 1];
            var i, cur, parsed;

            if (this._parsing === false) {
              meta._parsed = data;
              meta._sorted = true;
              parsed = data;
            } else {
              if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(data[start])) {
                parsed = this.parseArrayData(meta, data, start, count);
              } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(data[start])) {
                parsed = this.parseObjectData(meta, data, start, count);
              } else {
                parsed = this.parsePrimitiveData(meta, data, start, count);
              }

              var isNotInOrderComparedToPrev = function isNotInOrderComparedToPrev() {
                return cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
              };

              for (i = 0; i < count; ++i) {
                meta._parsed[i + start] = cur = parsed[i];

                if (sorted) {
                  if (isNotInOrderComparedToPrev()) {
                    sorted = false;
                  }

                  prev = cur;
                }
              }

              meta._sorted = sorted;
            }

            if (_stacked) {
              updateStacks(this, parsed);
            }
          }
        }, {
          key: "parsePrimitiveData",
          value: function parsePrimitiveData(meta, data, start, count) {
            var iScale = meta.iScale,
                vScale = meta.vScale;
            var iAxis = iScale.axis;
            var vAxis = vScale.axis;
            var labels = iScale.getLabels();
            var singleScale = iScale === vScale;
            var parsed = new Array(count);
            var i, ilen, index;

            for (i = 0, ilen = count; i < ilen; ++i) {
              var _parsed$i;

              index = i + start;
              parsed[i] = (_parsed$i = {}, _defineProperty(_parsed$i, iAxis, singleScale || iScale.parse(labels[index], index)), _defineProperty(_parsed$i, vAxis, vScale.parse(data[index], index)), _parsed$i);
            }

            return parsed;
          }
        }, {
          key: "parseArrayData",
          value: function parseArrayData(meta, data, start, count) {
            var xScale = meta.xScale,
                yScale = meta.yScale;
            var parsed = new Array(count);
            var i, ilen, index, item;

            for (i = 0, ilen = count; i < ilen; ++i) {
              index = i + start;
              item = data[index];
              parsed[i] = {
                x: xScale.parse(item[0], index),
                y: yScale.parse(item[1], index)
              };
            }

            return parsed;
          }
        }, {
          key: "parseObjectData",
          value: function parseObjectData(meta, data, start, count) {
            var xScale = meta.xScale,
                yScale = meta.yScale;
            var _this$_parsing = this._parsing,
                _this$_parsing$xAxisK = _this$_parsing.xAxisKey,
                xAxisKey = _this$_parsing$xAxisK === void 0 ? 'x' : _this$_parsing$xAxisK,
                _this$_parsing$yAxisK = _this$_parsing.yAxisKey,
                yAxisKey = _this$_parsing$yAxisK === void 0 ? 'y' : _this$_parsing$yAxisK;
            var parsed = new Array(count);
            var i, ilen, index, item;

            for (i = 0, ilen = count; i < ilen; ++i) {
              index = i + start;
              item = data[index];
              parsed[i] = {
                x: xScale.parse(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["f"])(item, xAxisKey), index),
                y: yScale.parse(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["f"])(item, yAxisKey), index)
              };
            }

            return parsed;
          }
        }, {
          key: "getParsed",
          value: function getParsed(index) {
            return this._cachedMeta._parsed[index];
          }
        }, {
          key: "getDataElement",
          value: function getDataElement(index) {
            return this._cachedMeta.data[index];
          }
        }, {
          key: "applyStack",
          value: function applyStack(scale, parsed, mode) {
            var chart = this.chart;
            var meta = this._cachedMeta;
            var value = parsed[scale.axis];
            var stack = {
              keys: getSortedDatasetIndices(chart, true),
              values: parsed._stacks[scale.axis]
            };
            return _applyStack(stack, value, meta.index, {
              mode: mode
            });
          }
        }, {
          key: "updateRangeFromParsed",
          value: function updateRangeFromParsed(range, scale, parsed, stack) {
            var parsedValue = parsed[scale.axis];
            var value = parsedValue === null ? NaN : parsedValue;
            var values = stack && parsed._stacks[scale.axis];

            if (stack && values) {
              stack.values = values;
              value = _applyStack(stack, parsedValue, this._cachedMeta.index);
            }

            range.min = Math.min(range.min, value);
            range.max = Math.max(range.max, value);
          }
        }, {
          key: "getMinMax",
          value: function getMinMax(scale, canStack) {
            var meta = this._cachedMeta;
            var _parsed = meta._parsed;
            var sorted = meta._sorted && scale === meta.iScale;
            var ilen = _parsed.length;

            var otherScale = this._getOtherScale(scale);

            var stack = createStack(canStack, meta, this.chart);
            var range = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY
            };

            var _getUserBounds = getUserBounds(otherScale),
                otherMin = _getUserBounds.min,
                otherMax = _getUserBounds.max;

            var i, parsed;

            function _skip() {
              parsed = _parsed[i];
              var otherValue = parsed[otherScale.axis];
              return !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
            }

            for (i = 0; i < ilen; ++i) {
              if (_skip()) {
                continue;
              }

              this.updateRangeFromParsed(range, scale, parsed, stack);

              if (sorted) {
                break;
              }
            }

            if (sorted) {
              for (i = ilen - 1; i >= 0; --i) {
                if (_skip()) {
                  continue;
                }

                this.updateRangeFromParsed(range, scale, parsed, stack);
                break;
              }
            }

            return range;
          }
        }, {
          key: "getAllParsedValues",
          value: function getAllParsedValues(scale) {
            var parsed = this._cachedMeta._parsed;
            var values = [];
            var i, ilen, value;

            for (i = 0, ilen = parsed.length; i < ilen; ++i) {
              value = parsed[i][scale.axis];

              if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(value)) {
                values.push(value);
              }
            }

            return values;
          }
        }, {
          key: "getMaxOverflow",
          value: function getMaxOverflow() {
            return false;
          }
        }, {
          key: "getLabelAndValue",
          value: function getLabelAndValue(index) {
            var meta = this._cachedMeta;
            var iScale = meta.iScale;
            var vScale = meta.vScale;
            var parsed = this.getParsed(index);
            return {
              label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
              value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
            };
          }
        }, {
          key: "_update",
          value: function _update(mode) {
            var meta = this._cachedMeta;
            this.update(mode || 'default');
            meta._clip = toClip(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
          }
        }, {
          key: "update",
          value: function update(mode) {}
        }, {
          key: "draw",
          value: function draw() {
            var ctx = this._ctx;
            var chart = this.chart;
            var meta = this._cachedMeta;
            var elements = meta.data || [];
            var area = chart.chartArea;
            var active = [];
            var start = this._drawStart || 0;
            var count = this._drawCount || elements.length - start;
            var drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
            var i;

            if (meta.dataset) {
              meta.dataset.draw(ctx, area, start, count);
            }

            for (i = start; i < start + count; ++i) {
              var element = elements[i];

              if (element.hidden) {
                continue;
              }

              if (element.active && drawActiveElementsOnTop) {
                active.push(element);
              } else {
                element.draw(ctx, area);
              }
            }

            for (i = 0; i < active.length; ++i) {
              active[i].draw(ctx, area);
            }
          }
        }, {
          key: "getStyle",
          value: function getStyle(index, active) {
            var mode = active ? 'active' : 'default';
            return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
          }
        }, {
          key: "getContext",
          value: function getContext(index, active, mode) {
            var dataset = this.getDataset();
            var context;

            if (index >= 0 && index < this._cachedMeta.data.length) {
              var element = this._cachedMeta.data[index];
              context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
              context.parsed = this.getParsed(index);
              context.raw = dataset.data[index];
              context.index = context.dataIndex = index;
            } else {
              context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
              context.dataset = dataset;
              context.index = context.datasetIndex = this.index;
            }

            context.active = !!active;
            context.mode = mode;
            return context;
          }
        }, {
          key: "resolveDatasetElementOptions",
          value: function resolveDatasetElementOptions(mode) {
            return this._resolveElementOptions(this.datasetElementType.id, mode);
          }
        }, {
          key: "resolveDataElementOptions",
          value: function resolveDataElementOptions(index, mode) {
            return this._resolveElementOptions(this.dataElementType.id, mode, index);
          }
        }, {
          key: "_resolveElementOptions",
          value: function _resolveElementOptions(elementType) {
            var _this3 = this;

            var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
            var index = arguments.length > 2 ? arguments[2] : undefined;
            var active = mode === 'active';
            var cache = this._cachedDataOpts;
            var cacheKey = elementType + '-' + mode;
            var cached = cache[cacheKey];
            var sharing = this.enableOptionSharing && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["j"])(index);

            if (cached) {
              return cloneIfNotShared(cached, sharing);
            }

            var config = this.chart.config;
            var scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
            var prefixes = active ? ["".concat(elementType, "Hover"), 'hover', elementType, ''] : [elementType, ''];
            var scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            var names = Object.keys(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].elements[elementType]);

            var context = function context() {
              return _this3.getContext(index, active);
            };

            var values = config.resolveNamedOptions(scopes, names, context, prefixes);

            if (values.$shared) {
              values.$shared = sharing;
              cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
            }

            return values;
          }
        }, {
          key: "_resolveAnimations",
          value: function _resolveAnimations(index, transition, active) {
            var chart = this.chart;
            var cache = this._cachedDataOpts;
            var cacheKey = "animation-".concat(transition);
            var cached = cache[cacheKey];

            if (cached) {
              return cached;
            }

            var options;

            if (chart.options.animation !== false) {
              var config = this.chart.config;
              var scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
              var scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
              options = config.createResolver(scopes, this.getContext(index, active, transition));
            }

            var animations = new Animations(chart, options && options.animations);

            if (options && options._cacheable) {
              cache[cacheKey] = Object.freeze(animations);
            }

            return animations;
          }
        }, {
          key: "getSharedOptions",
          value: function getSharedOptions(options) {
            if (!options.$shared) {
              return;
            }

            return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
          }
        }, {
          key: "includeOptions",
          value: function includeOptions(mode, sharedOptions) {
            return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
          }
        }, {
          key: "updateElement",
          value: function updateElement(element, index, properties, mode) {
            if (isDirectUpdateMode(mode)) {
              Object.assign(element, properties);
            } else {
              this._resolveAnimations(index, mode).update(element, properties);
            }
          }
        }, {
          key: "updateSharedOptions",
          value: function updateSharedOptions(sharedOptions, mode, newOptions) {
            if (sharedOptions && !isDirectUpdateMode(mode)) {
              this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
            }
          }
        }, {
          key: "_setStyle",
          value: function _setStyle(element, index, mode, active) {
            element.active = active;
            var options = this.getStyle(index, active);

            this._resolveAnimations(index, mode, active).update(element, {
              options: !active && this.getSharedOptions(options) || options
            });
          }
        }, {
          key: "removeHoverStyle",
          value: function removeHoverStyle(element, datasetIndex, index) {
            this._setStyle(element, index, 'active', false);
          }
        }, {
          key: "setHoverStyle",
          value: function setHoverStyle(element, datasetIndex, index) {
            this._setStyle(element, index, 'active', true);
          }
        }, {
          key: "_removeDatasetHoverStyle",
          value: function _removeDatasetHoverStyle() {
            var element = this._cachedMeta.dataset;

            if (element) {
              this._setStyle(element, undefined, 'active', false);
            }
          }
        }, {
          key: "_setDatasetHoverStyle",
          value: function _setDatasetHoverStyle() {
            var element = this._cachedMeta.dataset;

            if (element) {
              this._setStyle(element, undefined, 'active', true);
            }
          }
        }, {
          key: "_resyncElements",
          value: function _resyncElements(resetNewElements) {
            var data = this._data;
            var elements = this._cachedMeta.data;

            var _iterator13 = _createForOfIteratorHelper(this._syncList),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _step13$value = _slicedToArray(_step13.value, 3),
                    method = _step13$value[0],
                    arg1 = _step13$value[1],
                    arg2 = _step13$value[2];

                this[method](arg1, arg2);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            this._syncList = [];
            var numMeta = elements.length;
            var numData = data.length;
            var count = Math.min(numData, numMeta);

            if (count) {
              this.parse(0, count);
            }

            if (numData > numMeta) {
              this._insertElements(numMeta, numData - numMeta, resetNewElements);
            } else if (numData < numMeta) {
              this._removeElements(numData, numMeta - numData);
            }
          }
        }, {
          key: "_insertElements",
          value: function _insertElements(start, count) {
            var resetNewElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var meta = this._cachedMeta;
            var data = meta.data;
            var end = start + count;
            var i;

            var move = function move(arr) {
              arr.length += count;

              for (i = arr.length - 1; i >= end; i--) {
                arr[i] = arr[i - count];
              }
            };

            move(data);

            for (i = start; i < end; ++i) {
              data[i] = new this.dataElementType();
            }

            if (this._parsing) {
              move(meta._parsed);
            }

            this.parse(start, count);

            if (resetNewElements) {
              this.updateElements(data, start, count, 'reset');
            }
          }
        }, {
          key: "updateElements",
          value: function updateElements(element, start, count, mode) {}
        }, {
          key: "_removeElements",
          value: function _removeElements(start, count) {
            var meta = this._cachedMeta;

            if (this._parsing) {
              var removed = meta._parsed.splice(start, count);

              if (meta._stacked) {
                clearStacks(meta, removed);
              }
            }

            meta.data.splice(start, count);
          }
        }, {
          key: "_sync",
          value: function _sync(args) {
            if (this._parsing) {
              this._syncList.push(args);
            } else {
              var _args2 = _slicedToArray(args, 3),
                  method = _args2[0],
                  arg1 = _args2[1],
                  arg2 = _args2[2];

              this[method](arg1, arg2);
            }

            this.chart._dataChanges.push([this.index].concat(_toConsumableArray(args)));
          }
        }, {
          key: "_onDataPush",
          value: function _onDataPush() {
            var count = arguments.length;

            this._sync(['_insertElements', this.getDataset().data.length - count, count]);
          }
        }, {
          key: "_onDataPop",
          value: function _onDataPop() {
            this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
          }
        }, {
          key: "_onDataShift",
          value: function _onDataShift() {
            this._sync(['_removeElements', 0, 1]);
          }
        }, {
          key: "_onDataSplice",
          value: function _onDataSplice(start, count) {
            if (count) {
              this._sync(['_removeElements', start, count]);
            }

            var newCount = arguments.length - 2;

            if (newCount) {
              this._sync(['_insertElements', start, newCount]);
            }
          }
        }, {
          key: "_onDataUnshift",
          value: function _onDataUnshift() {
            this._sync(['_insertElements', 0, arguments.length]);
          }
        }]);

        return DatasetController;
      }();

      DatasetController.defaults = {};
      DatasetController.prototype.datasetElementType = null;
      DatasetController.prototype.dataElementType = null;

      function getAllScaleValues(scale, type) {
        if (!scale._cache.$bar) {
          var visibleMetas = scale.getMatchingVisibleMetas(type);
          var values = [];

          for (var i = 0, ilen = visibleMetas.length; i < ilen; i++) {
            values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
          }

          scale._cache.$bar = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["_"])(values.sort(function (a, b) {
            return a - b;
          }));
        }

        return scale._cache.$bar;
      }

      function computeMinSampleSize(meta) {
        var scale = meta.iScale;
        var values = getAllScaleValues(scale, meta.type);
        var min = scale._length;
        var i, ilen, curr, prev;

        var updateMinAndPrev = function updateMinAndPrev() {
          if (curr === 32767 || curr === -32768) {
            return;
          }

          if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["j"])(prev)) {
            min = Math.min(min, Math.abs(curr - prev) || min);
          }

          prev = curr;
        };

        for (i = 0, ilen = values.length; i < ilen; ++i) {
          curr = scale.getPixelForValue(values[i]);
          updateMinAndPrev();
        }

        prev = undefined;

        for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
          curr = scale.getPixelForTick(i);
          updateMinAndPrev();
        }

        return min;
      }

      function computeFitCategoryTraits(index, ruler, options, stackCount) {
        var thickness = options.barThickness;
        var size, ratio;

        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(thickness)) {
          size = ruler.min * options.categoryPercentage;
          ratio = options.barPercentage;
        } else {
          size = thickness * stackCount;
          ratio = 1;
        }

        return {
          chunk: size / stackCount,
          ratio: ratio,
          start: ruler.pixels[index] - size / 2
        };
      }

      function computeFlexCategoryTraits(index, ruler, options, stackCount) {
        var pixels = ruler.pixels;
        var curr = pixels[index];
        var prev = index > 0 ? pixels[index - 1] : null;
        var next = index < pixels.length - 1 ? pixels[index + 1] : null;
        var percent = options.categoryPercentage;

        if (prev === null) {
          prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
        }

        if (next === null) {
          next = curr + curr - prev;
        }

        var start = curr - (curr - Math.min(prev, next)) / 2 * percent;
        var size = Math.abs(next - prev) / 2 * percent;
        return {
          chunk: size / stackCount,
          ratio: options.barPercentage,
          start: start
        };
      }

      function parseFloatBar(entry, item, vScale, i) {
        var startValue = vScale.parse(entry[0], i);
        var endValue = vScale.parse(entry[1], i);
        var min = Math.min(startValue, endValue);
        var max = Math.max(startValue, endValue);
        var barStart = min;
        var barEnd = max;

        if (Math.abs(min) > Math.abs(max)) {
          barStart = max;
          barEnd = min;
        }

        item[vScale.axis] = barEnd;
        item._custom = {
          barStart: barStart,
          barEnd: barEnd,
          start: startValue,
          end: endValue,
          min: min,
          max: max
        };
      }

      function parseValue(entry, item, vScale, i) {
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(entry)) {
          parseFloatBar(entry, item, vScale, i);
        } else {
          item[vScale.axis] = vScale.parse(entry, i);
        }

        return item;
      }

      function parseArrayOrPrimitive(meta, data, start, count) {
        var iScale = meta.iScale;
        var vScale = meta.vScale;
        var labels = iScale.getLabels();
        var singleScale = iScale === vScale;
        var parsed = [];
        var i, ilen, item, entry;

        for (i = start, ilen = start + count; i < ilen; ++i) {
          entry = data[i];
          item = {};
          item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
          parsed.push(parseValue(entry, item, vScale, i));
        }

        return parsed;
      }

      function isFloatBar(custom) {
        return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
      }

      function barSign(size, vScale, actualBase) {
        if (size !== 0) {
          return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["s"])(size);
        }

        return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
      }

      function borderProps(properties) {
        var reverse, start, end, top, bottom;

        if (properties.horizontal) {
          reverse = properties.base > properties.x;
          start = 'left';
          end = 'right';
        } else {
          reverse = properties.base < properties.y;
          start = 'bottom';
          end = 'top';
        }

        if (reverse) {
          top = 'end';
          bottom = 'start';
        } else {
          top = 'start';
          bottom = 'end';
        }

        return {
          start: start,
          end: end,
          reverse: reverse,
          top: top,
          bottom: bottom
        };
      }

      function setBorderSkipped(properties, options, stack, index) {
        var edge = options.borderSkipped;
        var res = {};

        if (!edge) {
          properties.borderSkipped = res;
          return;
        }

        var _borderProps = borderProps(properties),
            start = _borderProps.start,
            end = _borderProps.end,
            reverse = _borderProps.reverse,
            top = _borderProps.top,
            bottom = _borderProps.bottom;

        if (edge === 'middle' && stack) {
          properties.enableBorderRadius = true;

          if ((stack._top || 0) === index) {
            edge = top;
          } else if ((stack._bottom || 0) === index) {
            edge = bottom;
          } else {
            res[parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
          }
        }

        res[parseEdge(edge, start, end, reverse)] = true;
        properties.borderSkipped = res;
      }

      function parseEdge(edge, a, b, reverse) {
        if (reverse) {
          edge = swap(edge, a, b);
          edge = startEnd(edge, b, a);
        } else {
          edge = startEnd(edge, a, b);
        }

        return edge;
      }

      function swap(orig, v1, v2) {
        return orig === v1 ? v2 : orig === v2 ? v1 : orig;
      }

      function startEnd(v, start, end) {
        return v === 'start' ? start : v === 'end' ? end : v;
      }

      function setInflateAmount(properties, _ref2, ratio) {
        var inflateAmount = _ref2.inflateAmount;
        properties.inflateAmount = inflateAmount === 'auto' ? ratio === 1 ? 0.33 : 0 : inflateAmount;
      }

      var BarController = /*#__PURE__*/function (_DatasetController) {
        _inherits(BarController, _DatasetController);

        var _super = _createSuper(BarController);

        function BarController() {
          _classCallCheck(this, BarController);

          return _super.apply(this, arguments);
        }

        _createClass(BarController, [{
          key: "parsePrimitiveData",
          value: function parsePrimitiveData(meta, data, start, count) {
            return parseArrayOrPrimitive(meta, data, start, count);
          }
        }, {
          key: "parseArrayData",
          value: function parseArrayData(meta, data, start, count) {
            return parseArrayOrPrimitive(meta, data, start, count);
          }
        }, {
          key: "parseObjectData",
          value: function parseObjectData(meta, data, start, count) {
            var iScale = meta.iScale,
                vScale = meta.vScale;
            var _this$_parsing2 = this._parsing,
                _this$_parsing2$xAxis = _this$_parsing2.xAxisKey,
                xAxisKey = _this$_parsing2$xAxis === void 0 ? 'x' : _this$_parsing2$xAxis,
                _this$_parsing2$yAxis = _this$_parsing2.yAxisKey,
                yAxisKey = _this$_parsing2$yAxis === void 0 ? 'y' : _this$_parsing2$yAxis;
            var iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
            var vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
            var parsed = [];
            var i, ilen, item, obj;

            for (i = start, ilen = start + count; i < ilen; ++i) {
              obj = data[i];
              item = {};
              item[iScale.axis] = iScale.parse(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["f"])(obj, iAxisKey), i);
              parsed.push(parseValue(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["f"])(obj, vAxisKey), item, vScale, i));
            }

            return parsed;
          }
        }, {
          key: "updateRangeFromParsed",
          value: function updateRangeFromParsed(range, scale, parsed, stack) {
            _get(_getPrototypeOf(BarController.prototype), "updateRangeFromParsed", this).call(this, range, scale, parsed, stack);

            var custom = parsed._custom;

            if (custom && scale === this._cachedMeta.vScale) {
              range.min = Math.min(range.min, custom.min);
              range.max = Math.max(range.max, custom.max);
            }
          }
        }, {
          key: "getMaxOverflow",
          value: function getMaxOverflow() {
            return 0;
          }
        }, {
          key: "getLabelAndValue",
          value: function getLabelAndValue(index) {
            var meta = this._cachedMeta;
            var iScale = meta.iScale,
                vScale = meta.vScale;
            var parsed = this.getParsed(index);
            var custom = parsed._custom;
            var value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
            return {
              label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
              value: value
            };
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.enableOptionSharing = true;

            _get(_getPrototypeOf(BarController.prototype), "initialize", this).call(this);

            var meta = this._cachedMeta;
            meta.stack = this.getDataset().stack;
          }
        }, {
          key: "update",
          value: function update(mode) {
            var meta = this._cachedMeta;
            this.updateElements(meta.data, 0, meta.data.length, mode);
          }
        }, {
          key: "updateElements",
          value: function updateElements(bars, start, count, mode) {
            var reset = mode === 'reset';
            var index = this.index,
                vScale = this._cachedMeta.vScale;
            var base = vScale.getBasePixel();
            var horizontal = vScale.isHorizontal();

            var ruler = this._getRuler();

            var firstOpts = this.resolveDataElementOptions(start, mode);
            var sharedOptions = this.getSharedOptions(firstOpts);
            var includeOptions = this.includeOptions(mode, sharedOptions);
            this.updateSharedOptions(sharedOptions, mode, firstOpts);

            for (var i = start; i < start + count; i++) {
              var parsed = this.getParsed(i);
              var vpixels = reset || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(parsed[vScale.axis]) ? {
                base: base,
                head: base
              } : this._calculateBarValuePixels(i);

              var ipixels = this._calculateBarIndexPixels(i, ruler);

              var stack = (parsed._stacks || {})[vScale.axis];
              var properties = {
                horizontal: horizontal,
                base: vpixels.base,
                enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
                x: horizontal ? vpixels.head : ipixels.center,
                y: horizontal ? ipixels.center : vpixels.head,
                height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                width: horizontal ? Math.abs(vpixels.size) : ipixels.size
              };

              if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
              }

              var options = properties.options || bars[i].options;
              setBorderSkipped(properties, options, stack, index);
              setInflateAmount(properties, options, ruler.ratio);
              this.updateElement(bars[i], i, properties, mode);
            }
          }
        }, {
          key: "_getStacks",
          value: function _getStacks(last, dataIndex) {
            var meta = this._cachedMeta;
            var iScale = meta.iScale;
            var metasets = iScale.getMatchingVisibleMetas(this._type);
            var stacked = iScale.options.stacked;
            var ilen = metasets.length;
            var stacks = [];
            var i, item;

            for (i = 0; i < ilen; ++i) {
              item = metasets[i];

              if (!item.controller.options.grouped) {
                continue;
              }

              if (typeof dataIndex !== 'undefined') {
                var val = item.controller.getParsed(dataIndex)[item.controller._cachedMeta.vScale.axis];

                if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(val) || isNaN(val)) {
                  continue;
                }
              }

              if (stacked === false || stacks.indexOf(item.stack) === -1 || stacked === undefined && item.stack === undefined) {
                stacks.push(item.stack);
              }

              if (item.index === last) {
                break;
              }
            }

            if (!stacks.length) {
              stacks.push(undefined);
            }

            return stacks;
          }
        }, {
          key: "_getStackCount",
          value: function _getStackCount(index) {
            return this._getStacks(undefined, index).length;
          }
        }, {
          key: "_getStackIndex",
          value: function _getStackIndex(datasetIndex, name, dataIndex) {
            var stacks = this._getStacks(datasetIndex, dataIndex);

            var index = name !== undefined ? stacks.indexOf(name) : -1;
            return index === -1 ? stacks.length - 1 : index;
          }
        }, {
          key: "_getRuler",
          value: function _getRuler() {
            var opts = this.options;
            var meta = this._cachedMeta;
            var iScale = meta.iScale;
            var pixels = [];
            var i, ilen;

            for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
              pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
            }

            var barThickness = opts.barThickness;
            var min = barThickness || computeMinSampleSize(meta);
            return {
              min: min,
              pixels: pixels,
              start: iScale._startPixel,
              end: iScale._endPixel,
              stackCount: this._getStackCount(),
              scale: iScale,
              grouped: opts.grouped,
              ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
            };
          }
        }, {
          key: "_calculateBarValuePixels",
          value: function _calculateBarValuePixels(index) {
            var _this$_cachedMeta = this._cachedMeta,
                vScale = _this$_cachedMeta.vScale,
                _stacked = _this$_cachedMeta._stacked,
                _this$options = this.options,
                baseValue = _this$options.base,
                minBarLength = _this$options.minBarLength;
            var actualBase = baseValue || 0;
            var parsed = this.getParsed(index);
            var custom = parsed._custom;
            var floating = isFloatBar(custom);
            var value = parsed[vScale.axis];
            var start = 0;
            var length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
            var head, size;

            if (length !== value) {
              start = length - value;
              length = value;
            }

            if (floating) {
              value = custom.barStart;
              length = custom.barEnd - custom.barStart;

              if (value !== 0 && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["s"])(value) !== Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["s"])(custom.barEnd)) {
                start = 0;
              }

              start += value;
            }

            var startValue = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(baseValue) && !floating ? baseValue : start;
            var base = vScale.getPixelForValue(startValue);

            if (this.chart.getDataVisibility(index)) {
              head = vScale.getPixelForValue(start + length);
            } else {
              head = base;
            }

            size = head - base;

            if (Math.abs(size) < minBarLength) {
              size = barSign(size, vScale, actualBase) * minBarLength;

              if (value === actualBase) {
                base -= size / 2;
              }

              head = base + size;
            }

            if (base === vScale.getPixelForValue(actualBase)) {
              var halfGrid = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["s"])(size) * vScale.getLineWidthForValue(actualBase) / 2;
              base += halfGrid;
              size -= halfGrid;
            }

            return {
              size: size,
              base: base,
              head: head,
              center: head + size / 2
            };
          }
        }, {
          key: "_calculateBarIndexPixels",
          value: function _calculateBarIndexPixels(index, ruler) {
            var scale = ruler.scale;
            var options = this.options;
            var skipNull = options.skipNull;
            var maxBarThickness = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(options.maxBarThickness, Infinity);
            var center, size;

            if (ruler.grouped) {
              var stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
              var range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);

              var stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);

              center = range.start + range.chunk * stackIndex + range.chunk / 2;
              size = Math.min(maxBarThickness, range.chunk * range.ratio);
            } else {
              center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
              size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
            }

            return {
              base: center - size / 2,
              head: center + size / 2,
              center: center,
              size: size
            };
          }
        }, {
          key: "draw",
          value: function draw() {
            var meta = this._cachedMeta;
            var vScale = meta.vScale;
            var rects = meta.data;
            var ilen = rects.length;
            var i = 0;

            for (; i < ilen; ++i) {
              if (this.getParsed(i)[vScale.axis] !== null) {
                rects[i].draw(this._ctx);
              }
            }
          }
        }]);

        return BarController;
      }(DatasetController);

      BarController.id = 'bar';
      BarController.defaults = {
        datasetElementType: false,
        dataElementType: 'bar',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: true,
        animations: {
          numbers: {
            type: 'number',
            properties: ['x', 'y', 'base', 'width', 'height']
          }
        }
      };
      BarController.overrides = {
        scales: {
          _index_: {
            type: 'category',
            offset: true,
            grid: {
              offset: true
            }
          },
          _value_: {
            type: 'linear',
            beginAtZero: true
          }
        }
      };

      var BubbleController = /*#__PURE__*/function (_DatasetController2) {
        _inherits(BubbleController, _DatasetController2);

        var _super2 = _createSuper(BubbleController);

        function BubbleController() {
          _classCallCheck(this, BubbleController);

          return _super2.apply(this, arguments);
        }

        _createClass(BubbleController, [{
          key: "initialize",
          value: function initialize() {
            this.enableOptionSharing = true;

            _get(_getPrototypeOf(BubbleController.prototype), "initialize", this).call(this);
          }
        }, {
          key: "parsePrimitiveData",
          value: function parsePrimitiveData(meta, data, start, count) {
            var parsed = _get(_getPrototypeOf(BubbleController.prototype), "parsePrimitiveData", this).call(this, meta, data, start, count);

            for (var i = 0; i < parsed.length; i++) {
              parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
            }

            return parsed;
          }
        }, {
          key: "parseArrayData",
          value: function parseArrayData(meta, data, start, count) {
            var parsed = _get(_getPrototypeOf(BubbleController.prototype), "parseArrayData", this).call(this, meta, data, start, count);

            for (var i = 0; i < parsed.length; i++) {
              var item = data[start + i];
              parsed[i]._custom = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(item[2], this.resolveDataElementOptions(i + start).radius);
            }

            return parsed;
          }
        }, {
          key: "parseObjectData",
          value: function parseObjectData(meta, data, start, count) {
            var parsed = _get(_getPrototypeOf(BubbleController.prototype), "parseObjectData", this).call(this, meta, data, start, count);

            for (var i = 0; i < parsed.length; i++) {
              var item = data[start + i];
              parsed[i]._custom = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
            }

            return parsed;
          }
        }, {
          key: "getMaxOverflow",
          value: function getMaxOverflow() {
            var data = this._cachedMeta.data;
            var max = 0;

            for (var i = data.length - 1; i >= 0; --i) {
              max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
            }

            return max > 0 && max;
          }
        }, {
          key: "getLabelAndValue",
          value: function getLabelAndValue(index) {
            var meta = this._cachedMeta;
            var xScale = meta.xScale,
                yScale = meta.yScale;
            var parsed = this.getParsed(index);
            var x = xScale.getLabelForValue(parsed.x);
            var y = yScale.getLabelForValue(parsed.y);
            var r = parsed._custom;
            return {
              label: meta.label,
              value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
            };
          }
        }, {
          key: "update",
          value: function update(mode) {
            var points = this._cachedMeta.data;
            this.updateElements(points, 0, points.length, mode);
          }
        }, {
          key: "updateElements",
          value: function updateElements(points, start, count, mode) {
            var reset = mode === 'reset';
            var _this$_cachedMeta2 = this._cachedMeta,
                iScale = _this$_cachedMeta2.iScale,
                vScale = _this$_cachedMeta2.vScale;
            var firstOpts = this.resolveDataElementOptions(start, mode);
            var sharedOptions = this.getSharedOptions(firstOpts);
            var includeOptions = this.includeOptions(mode, sharedOptions);
            var iAxis = iScale.axis;
            var vAxis = vScale.axis;

            for (var i = start; i < start + count; i++) {
              var point = points[i];
              var parsed = !reset && this.getParsed(i);
              var properties = {};
              var iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
              var vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
              properties.skip = isNaN(iPixel) || isNaN(vPixel);

              if (includeOptions) {
                properties.options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);

                if (reset) {
                  properties.options.radius = 0;
                }
              }

              this.updateElement(point, i, properties, mode);
            }

            this.updateSharedOptions(sharedOptions, mode, firstOpts);
          }
        }, {
          key: "resolveDataElementOptions",
          value: function resolveDataElementOptions(index, mode) {
            var parsed = this.getParsed(index);

            var values = _get(_getPrototypeOf(BubbleController.prototype), "resolveDataElementOptions", this).call(this, index, mode);

            if (values.$shared) {
              values = Object.assign({}, values, {
                $shared: false
              });
            }

            var radius = values.radius;

            if (mode !== 'active') {
              values.radius = 0;
            }

            values.radius += Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(parsed && parsed._custom, radius);
            return values;
          }
        }]);

        return BubbleController;
      }(DatasetController);

      BubbleController.id = 'bubble';
      BubbleController.defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        animations: {
          numbers: {
            type: 'number',
            properties: ['x', 'y', 'borderWidth', 'radius']
          }
        }
      };
      BubbleController.overrides = {
        scales: {
          x: {
            type: 'linear'
          },
          y: {
            type: 'linear'
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: function title() {
                return '';
              }
            }
          }
        }
      };

      function getRatioAndOffset(rotation, circumference, cutout) {
        var ratioX = 1;
        var ratioY = 1;
        var offsetX = 0;
        var offsetY = 0;

        if (circumference < _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"]) {
          var startAngle = rotation;
          var endAngle = startAngle + circumference;
          var startX = Math.cos(startAngle);
          var startY = Math.sin(startAngle);
          var endX = Math.cos(endAngle);
          var endY = Math.sin(endAngle);

          var calcMax = function calcMax(angle, a, b) {
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["p"])(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
          };

          var calcMin = function calcMin(angle, a, b) {
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["p"])(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
          };

          var maxX = calcMax(0, startX, endX);
          var maxY = calcMax(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"], startY, endY);
          var minX = calcMin(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["P"], startX, endX);
          var minY = calcMin(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["P"] + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"], startY, endY);
          ratioX = (maxX - minX) / 2;
          ratioY = (maxY - minY) / 2;
          offsetX = -(maxX + minX) / 2;
          offsetY = -(maxY + minY) / 2;
        }

        return {
          ratioX: ratioX,
          ratioY: ratioY,
          offsetX: offsetX,
          offsetY: offsetY
        };
      }

      var DoughnutController = /*#__PURE__*/function (_DatasetController3) {
        _inherits(DoughnutController, _DatasetController3);

        var _super3 = _createSuper(DoughnutController);

        function DoughnutController(chart, datasetIndex) {
          var _this4;

          _classCallCheck(this, DoughnutController);

          _this4 = _super3.call(this, chart, datasetIndex);
          _this4.enableOptionSharing = true;
          _this4.innerRadius = undefined;
          _this4.outerRadius = undefined;
          _this4.offsetX = undefined;
          _this4.offsetY = undefined;
          return _this4;
        }

        _createClass(DoughnutController, [{
          key: "linkScales",
          value: function linkScales() {}
        }, {
          key: "parse",
          value: function parse(start, count) {
            var data = this.getDataset().data;
            var meta = this._cachedMeta;

            if (this._parsing === false) {
              meta._parsed = data;
            } else {
              var getter = function getter(i) {
                return +data[i];
              };

              if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(data[start])) {
                var _this$_parsing$key = this._parsing.key,
                    key = _this$_parsing$key === void 0 ? 'value' : _this$_parsing$key;

                getter = function getter(i) {
                  return +Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["f"])(data[i], key);
                };
              }

              var i, ilen;

              for (i = start, ilen = start + count; i < ilen; ++i) {
                meta._parsed[i] = getter(i);
              }
            }
          }
        }, {
          key: "_getRotation",
          value: function _getRotation() {
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(this.options.rotation - 90);
          }
        }, {
          key: "_getCircumference",
          value: function _getCircumference() {
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(this.options.circumference);
          }
        }, {
          key: "_getRotationExtents",
          value: function _getRotationExtents() {
            var min = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"];
            var max = -_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"];

            for (var i = 0; i < this.chart.data.datasets.length; ++i) {
              if (this.chart.isDatasetVisible(i)) {
                var controller = this.chart.getDatasetMeta(i).controller;

                var rotation = controller._getRotation();

                var circumference = controller._getCircumference();

                min = Math.min(min, rotation);
                max = Math.max(max, rotation + circumference);
              }
            }

            return {
              rotation: min,
              circumference: max - min
            };
          }
        }, {
          key: "update",
          value: function update(mode) {
            var chart = this.chart;
            var chartArea = chart.chartArea;
            var meta = this._cachedMeta;
            var arcs = meta.data;
            var spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
            var maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
            var cutout = Math.min(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["m"])(this.options.cutout, maxSize), 1);

            var chartWeight = this._getRingWeight(this.index);

            var _this$_getRotationExt = this._getRotationExtents(),
                circumference = _this$_getRotationExt.circumference,
                rotation = _this$_getRotationExt.rotation;

            var _getRatioAndOffset = getRatioAndOffset(rotation, circumference, cutout),
                ratioX = _getRatioAndOffset.ratioX,
                ratioY = _getRatioAndOffset.ratioY,
                offsetX = _getRatioAndOffset.offsetX,
                offsetY = _getRatioAndOffset.offsetY;

            var maxWidth = (chartArea.width - spacing) / ratioX;
            var maxHeight = (chartArea.height - spacing) / ratioY;
            var maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
            var outerRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["n"])(this.options.radius, maxRadius);
            var innerRadius = Math.max(outerRadius * cutout, 0);

            var radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();

            this.offsetX = offsetX * outerRadius;
            this.offsetY = offsetY * outerRadius;
            meta.total = this.calculateTotal();
            this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
            this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
            this.updateElements(arcs, 0, arcs.length, mode);
          }
        }, {
          key: "_circumference",
          value: function _circumference(i, reset) {
            var opts = this.options;
            var meta = this._cachedMeta;

            var circumference = this._getCircumference();

            if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
              return 0;
            }

            return this.calculateCircumference(meta._parsed[i] * circumference / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"]);
          }
        }, {
          key: "updateElements",
          value: function updateElements(arcs, start, count, mode) {
            var reset = mode === 'reset';
            var chart = this.chart;
            var chartArea = chart.chartArea;
            var opts = chart.options;
            var animationOpts = opts.animation;
            var centerX = (chartArea.left + chartArea.right) / 2;
            var centerY = (chartArea.top + chartArea.bottom) / 2;
            var animateScale = reset && animationOpts.animateScale;
            var innerRadius = animateScale ? 0 : this.innerRadius;
            var outerRadius = animateScale ? 0 : this.outerRadius;
            var firstOpts = this.resolveDataElementOptions(start, mode);
            var sharedOptions = this.getSharedOptions(firstOpts);
            var includeOptions = this.includeOptions(mode, sharedOptions);

            var startAngle = this._getRotation();

            var i;

            for (i = 0; i < start; ++i) {
              startAngle += this._circumference(i, reset);
            }

            for (i = start; i < start + count; ++i) {
              var circumference = this._circumference(i, reset);

              var arc = arcs[i];
              var properties = {
                x: centerX + this.offsetX,
                y: centerY + this.offsetY,
                startAngle: startAngle,
                endAngle: startAngle + circumference,
                circumference: circumference,
                outerRadius: outerRadius,
                innerRadius: innerRadius
              };

              if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
              }

              startAngle += circumference;
              this.updateElement(arc, i, properties, mode);
            }

            this.updateSharedOptions(sharedOptions, mode, firstOpts);
          }
        }, {
          key: "calculateTotal",
          value: function calculateTotal() {
            var meta = this._cachedMeta;
            var metaData = meta.data;
            var total = 0;
            var i;

            for (i = 0; i < metaData.length; i++) {
              var value = meta._parsed[i];

              if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
                total += Math.abs(value);
              }
            }

            return total;
          }
        }, {
          key: "calculateCircumference",
          value: function calculateCircumference(value) {
            var total = this._cachedMeta.total;

            if (total > 0 && !isNaN(value)) {
              return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"] * (Math.abs(value) / total);
            }

            return 0;
          }
        }, {
          key: "getLabelAndValue",
          value: function getLabelAndValue(index) {
            var meta = this._cachedMeta;
            var chart = this.chart;
            var labels = chart.data.labels || [];
            var value = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["o"])(meta._parsed[index], chart.options.locale);
            return {
              label: labels[index] || '',
              value: value
            };
          }
        }, {
          key: "getMaxBorderWidth",
          value: function getMaxBorderWidth(arcs) {
            var max = 0;
            var chart = this.chart;
            var i, ilen, meta, controller, options;

            if (!arcs) {
              for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
                if (chart.isDatasetVisible(i)) {
                  meta = chart.getDatasetMeta(i);
                  arcs = meta.data;
                  controller = meta.controller;
                  break;
                }
              }
            }

            if (!arcs) {
              return 0;
            }

            for (i = 0, ilen = arcs.length; i < ilen; ++i) {
              options = controller.resolveDataElementOptions(i);

              if (options.borderAlign !== 'inner') {
                max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
              }
            }

            return max;
          }
        }, {
          key: "getMaxOffset",
          value: function getMaxOffset(arcs) {
            var max = 0;

            for (var i = 0, ilen = arcs.length; i < ilen; ++i) {
              var options = this.resolveDataElementOptions(i);
              max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
            }

            return max;
          }
        }, {
          key: "_getRingWeightOffset",
          value: function _getRingWeightOffset(datasetIndex) {
            var ringWeightOffset = 0;

            for (var i = 0; i < datasetIndex; ++i) {
              if (this.chart.isDatasetVisible(i)) {
                ringWeightOffset += this._getRingWeight(i);
              }
            }

            return ringWeightOffset;
          }
        }, {
          key: "_getRingWeight",
          value: function _getRingWeight(datasetIndex) {
            return Math.max(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(this.chart.data.datasets[datasetIndex].weight, 1), 0);
          }
        }, {
          key: "_getVisibleDatasetWeightTotal",
          value: function _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
          }
        }]);

        return DoughnutController;
      }(DatasetController);

      DoughnutController.id = 'doughnut';
      DoughnutController.defaults = {
        datasetElementType: false,
        dataElementType: 'arc',
        animation: {
          animateRotate: true,
          animateScale: false
        },
        animations: {
          numbers: {
            type: 'number',
            properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y', 'offset', 'borderWidth', 'spacing']
          }
        },
        cutout: '50%',
        rotation: 0,
        circumference: 360,
        radius: '100%',
        spacing: 0,
        indexAxis: 'r'
      };
      DoughnutController.descriptors = {
        _scriptable: function _scriptable(name) {
          return name !== 'spacing';
        },
        _indexable: function _indexable(name) {
          return name !== 'spacing';
        }
      };
      DoughnutController.overrides = {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels: function generateLabels(chart) {
                var data = chart.data;

                if (data.labels.length && data.datasets.length) {
                  var pointStyle = chart.legend.options.labels.pointStyle;
                  return data.labels.map(function (label, i) {
                    var meta = chart.getDatasetMeta(0);
                    var style = meta.controller.getStyle(i);
                    return {
                      text: label,
                      fillStyle: style.backgroundColor,
                      strokeStyle: style.borderColor,
                      lineWidth: style.borderWidth,
                      pointStyle: pointStyle,
                      hidden: !chart.getDataVisibility(i),
                      index: i
                    };
                  });
                }

                return [];
              }
            },
            onClick: function onClick(e, legendItem, legend) {
              legend.chart.toggleDataVisibility(legendItem.index);
              legend.chart.update();
            }
          },
          tooltip: {
            callbacks: {
              title: function title() {
                return '';
              },
              label: function label(tooltipItem) {
                var dataLabel = tooltipItem.label;
                var value = ': ' + tooltipItem.formattedValue;

                if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(dataLabel)) {
                  dataLabel = dataLabel.slice();
                  dataLabel[0] += value;
                } else {
                  dataLabel += value;
                }

                return dataLabel;
              }
            }
          }
        }
      };

      var LineController = /*#__PURE__*/function (_DatasetController4) {
        _inherits(LineController, _DatasetController4);

        var _super4 = _createSuper(LineController);

        function LineController() {
          _classCallCheck(this, LineController);

          return _super4.apply(this, arguments);
        }

        _createClass(LineController, [{
          key: "initialize",
          value: function initialize() {
            this.enableOptionSharing = true;

            _get(_getPrototypeOf(LineController.prototype), "initialize", this).call(this);
          }
        }, {
          key: "update",
          value: function update(mode) {
            var meta = this._cachedMeta;
            var line = meta.dataset,
                _meta$data = meta.data,
                points = _meta$data === void 0 ? [] : _meta$data,
                _dataset = meta._dataset;
            var animationsDisabled = this.chart._animationsDisabled;

            var _getStartAndCountOfVi = getStartAndCountOfVisiblePoints(meta, points, animationsDisabled),
                start = _getStartAndCountOfVi.start,
                count = _getStartAndCountOfVi.count;

            this._drawStart = start;
            this._drawCount = count;

            if (scaleRangesChanged(meta)) {
              start = 0;
              count = points.length;
            }

            line._chart = this.chart;
            line._datasetIndex = this.index;
            line._decimated = !!_dataset._decimated;
            line.points = points;
            var options = this.resolveDatasetElementOptions(mode);

            if (!this.options.showLine) {
              options.borderWidth = 0;
            }

            options.segment = this.options.segment;
            this.updateElement(line, undefined, {
              animated: !animationsDisabled,
              options: options
            }, mode);
            this.updateElements(points, start, count, mode);
          }
        }, {
          key: "updateElements",
          value: function updateElements(points, start, count, mode) {
            var reset = mode === 'reset';
            var _this$_cachedMeta3 = this._cachedMeta,
                iScale = _this$_cachedMeta3.iScale,
                vScale = _this$_cachedMeta3.vScale,
                _stacked = _this$_cachedMeta3._stacked,
                _dataset = _this$_cachedMeta3._dataset;
            var firstOpts = this.resolveDataElementOptions(start, mode);
            var sharedOptions = this.getSharedOptions(firstOpts);
            var includeOptions = this.includeOptions(mode, sharedOptions);
            var iAxis = iScale.axis;
            var vAxis = vScale.axis;
            var _this$options2 = this.options,
                spanGaps = _this$options2.spanGaps,
                segment = _this$options2.segment;
            var maxGapLength = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["q"])(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
            var directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
            var prevParsed = start > 0 && this.getParsed(start - 1);

            for (var i = start; i < start + count; ++i) {
              var point = points[i];
              var parsed = this.getParsed(i);
              var properties = directUpdate ? point : {};
              var nullData = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(parsed[vAxis]);
              var iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
              var vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
              properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
              properties.stop = i > 0 && parsed[iAxis] - prevParsed[iAxis] > maxGapLength;

              if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
              }

              if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
              }

              if (!directUpdate) {
                this.updateElement(point, i, properties, mode);
              }

              prevParsed = parsed;
            }

            this.updateSharedOptions(sharedOptions, mode, firstOpts);
          }
        }, {
          key: "getMaxOverflow",
          value: function getMaxOverflow() {
            var meta = this._cachedMeta;
            var dataset = meta.dataset;
            var border = dataset.options && dataset.options.borderWidth || 0;
            var data = meta.data || [];

            if (!data.length) {
              return border;
            }

            var firstPoint = data[0].size(this.resolveDataElementOptions(0));
            var lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
            return Math.max(border, firstPoint, lastPoint) / 2;
          }
        }, {
          key: "draw",
          value: function draw() {
            var meta = this._cachedMeta;
            meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);

            _get(_getPrototypeOf(LineController.prototype), "draw", this).call(this);
          }
        }]);

        return LineController;
      }(DatasetController);

      LineController.id = 'line';
      LineController.defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: true,
        spanGaps: false
      };
      LineController.overrides = {
        scales: {
          _index_: {
            type: 'category'
          },
          _value_: {
            type: 'linear'
          }
        }
      };

      function getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
        var pointCount = points.length;
        var start = 0;
        var count = pointCount;

        if (meta._sorted) {
          var iScale = meta.iScale,
              _parsed = meta._parsed;
          var axis = iScale.axis;

          var _iScale$getUserBounds = iScale.getUserBounds(),
              min = _iScale$getUserBounds.min,
              max = _iScale$getUserBounds.max,
              minDefined = _iScale$getUserBounds.minDefined,
              maxDefined = _iScale$getUserBounds.maxDefined;

          if (minDefined) {
            start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(Math.min(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["x"])(_parsed, iScale.axis, min).lo, animationsDisabled ? pointCount : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["x"])(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
          }

          if (maxDefined) {
            count = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(Math.max(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["x"])(_parsed, iScale.axis, max).hi + 1, animationsDisabled ? 0 : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["x"])(points, axis, iScale.getPixelForValue(max)).hi + 1), start, pointCount) - start;
          } else {
            count = pointCount - start;
          }
        }

        return {
          start: start,
          count: count
        };
      }

      function scaleRangesChanged(meta) {
        var xScale = meta.xScale,
            yScale = meta.yScale,
            _scaleRanges = meta._scaleRanges;
        var newRanges = {
          xmin: xScale.min,
          xmax: xScale.max,
          ymin: yScale.min,
          ymax: yScale.max
        };

        if (!_scaleRanges) {
          meta._scaleRanges = newRanges;
          return true;
        }

        var changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
        Object.assign(_scaleRanges, newRanges);
        return changed;
      }

      var PolarAreaController = /*#__PURE__*/function (_DatasetController5) {
        _inherits(PolarAreaController, _DatasetController5);

        var _super5 = _createSuper(PolarAreaController);

        function PolarAreaController(chart, datasetIndex) {
          var _this5;

          _classCallCheck(this, PolarAreaController);

          _this5 = _super5.call(this, chart, datasetIndex);
          _this5.innerRadius = undefined;
          _this5.outerRadius = undefined;
          return _this5;
        }

        _createClass(PolarAreaController, [{
          key: "getLabelAndValue",
          value: function getLabelAndValue(index) {
            var meta = this._cachedMeta;
            var chart = this.chart;
            var labels = chart.data.labels || [];
            var value = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["o"])(meta._parsed[index].r, chart.options.locale);
            return {
              label: labels[index] || '',
              value: value
            };
          }
        }, {
          key: "update",
          value: function update(mode) {
            var arcs = this._cachedMeta.data;

            this._updateRadius();

            this.updateElements(arcs, 0, arcs.length, mode);
          }
        }, {
          key: "_updateRadius",
          value: function _updateRadius() {
            var chart = this.chart;
            var chartArea = chart.chartArea;
            var opts = chart.options;
            var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
            var outerRadius = Math.max(minSize / 2, 0);
            var innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
            var radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
            this.outerRadius = outerRadius - radiusLength * this.index;
            this.innerRadius = this.outerRadius - radiusLength;
          }
        }, {
          key: "updateElements",
          value: function updateElements(arcs, start, count, mode) {
            var reset = mode === 'reset';
            var chart = this.chart;
            var dataset = this.getDataset();
            var opts = chart.options;
            var animationOpts = opts.animation;
            var scale = this._cachedMeta.rScale;
            var centerX = scale.xCenter;
            var centerY = scale.yCenter;

            var datasetStartAngle = scale.getIndexAngle(0) - 0.5 * _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["P"];

            var angle = datasetStartAngle;
            var i;
            var defaultAngle = 360 / this.countVisibleElements();

            for (i = 0; i < start; ++i) {
              angle += this._computeAngle(i, mode, defaultAngle);
            }

            for (i = start; i < start + count; i++) {
              var arc = arcs[i];
              var startAngle = angle;

              var endAngle = angle + this._computeAngle(i, mode, defaultAngle);

              var outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(dataset.data[i]) : 0;
              angle = endAngle;

              if (reset) {
                if (animationOpts.animateScale) {
                  outerRadius = 0;
                }

                if (animationOpts.animateRotate) {
                  startAngle = endAngle = datasetStartAngle;
                }
              }

              var properties = {
                x: centerX,
                y: centerY,
                innerRadius: 0,
                outerRadius: outerRadius,
                startAngle: startAngle,
                endAngle: endAngle,
                options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
              };
              this.updateElement(arc, i, properties, mode);
            }
          }
        }, {
          key: "countVisibleElements",
          value: function countVisibleElements() {
            var _this6 = this;

            var dataset = this.getDataset();
            var meta = this._cachedMeta;
            var count = 0;
            meta.data.forEach(function (element, index) {
              if (!isNaN(dataset.data[index]) && _this6.chart.getDataVisibility(index)) {
                count++;
              }
            });
            return count;
          }
        }, {
          key: "_computeAngle",
          value: function _computeAngle(index, mode, defaultAngle) {
            return this.chart.getDataVisibility(index) ? Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
          }
        }]);

        return PolarAreaController;
      }(DatasetController);

      PolarAreaController.id = 'polarArea';
      PolarAreaController.defaults = {
        dataElementType: 'arc',
        animation: {
          animateRotate: true,
          animateScale: true
        },
        animations: {
          numbers: {
            type: 'number',
            properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
          }
        },
        indexAxis: 'r',
        startAngle: 0
      };
      PolarAreaController.overrides = {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels: function generateLabels(chart) {
                var data = chart.data;

                if (data.labels.length && data.datasets.length) {
                  var pointStyle = chart.legend.options.labels.pointStyle;
                  return data.labels.map(function (label, i) {
                    var meta = chart.getDatasetMeta(0);
                    var style = meta.controller.getStyle(i);
                    return {
                      text: label,
                      fillStyle: style.backgroundColor,
                      strokeStyle: style.borderColor,
                      lineWidth: style.borderWidth,
                      pointStyle: pointStyle,
                      hidden: !chart.getDataVisibility(i),
                      index: i
                    };
                  });
                }

                return [];
              }
            },
            onClick: function onClick(e, legendItem, legend) {
              legend.chart.toggleDataVisibility(legendItem.index);
              legend.chart.update();
            }
          },
          tooltip: {
            callbacks: {
              title: function title() {
                return '';
              },
              label: function label(context) {
                return context.chart.data.labels[context.dataIndex] + ': ' + context.formattedValue;
              }
            }
          }
        },
        scales: {
          r: {
            type: 'radialLinear',
            angleLines: {
              display: false
            },
            beginAtZero: true,
            grid: {
              circular: true
            },
            pointLabels: {
              display: false
            },
            startAngle: 0
          }
        }
      };

      var PieController = /*#__PURE__*/function (_DoughnutController) {
        _inherits(PieController, _DoughnutController);

        var _super6 = _createSuper(PieController);

        function PieController() {
          _classCallCheck(this, PieController);

          return _super6.apply(this, arguments);
        }

        return _createClass(PieController);
      }(DoughnutController);

      PieController.id = 'pie';
      PieController.defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%'
      };

      var RadarController = /*#__PURE__*/function (_DatasetController6) {
        _inherits(RadarController, _DatasetController6);

        var _super7 = _createSuper(RadarController);

        function RadarController() {
          _classCallCheck(this, RadarController);

          return _super7.apply(this, arguments);
        }

        _createClass(RadarController, [{
          key: "getLabelAndValue",
          value: function getLabelAndValue(index) {
            var vScale = this._cachedMeta.vScale;
            var parsed = this.getParsed(index);
            return {
              label: vScale.getLabels()[index],
              value: '' + vScale.getLabelForValue(parsed[vScale.axis])
            };
          }
        }, {
          key: "update",
          value: function update(mode) {
            var meta = this._cachedMeta;
            var line = meta.dataset;
            var points = meta.data || [];
            var labels = meta.iScale.getLabels();
            line.points = points;

            if (mode !== 'resize') {
              var options = this.resolveDatasetElementOptions(mode);

              if (!this.options.showLine) {
                options.borderWidth = 0;
              }

              var properties = {
                _loop: true,
                _fullLoop: labels.length === points.length,
                options: options
              };
              this.updateElement(line, undefined, properties, mode);
            }

            this.updateElements(points, 0, points.length, mode);
          }
        }, {
          key: "updateElements",
          value: function updateElements(points, start, count, mode) {
            var dataset = this.getDataset();
            var scale = this._cachedMeta.rScale;
            var reset = mode === 'reset';

            for (var i = start; i < start + count; i++) {
              var point = points[i];
              var options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
              var pointPosition = scale.getPointPositionForValue(i, dataset.data[i]);
              var x = reset ? scale.xCenter : pointPosition.x;
              var y = reset ? scale.yCenter : pointPosition.y;
              var properties = {
                x: x,
                y: y,
                angle: pointPosition.angle,
                skip: isNaN(x) || isNaN(y),
                options: options
              };
              this.updateElement(point, i, properties, mode);
            }
          }
        }]);

        return RadarController;
      }(DatasetController);

      RadarController.id = 'radar';
      RadarController.defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: true,
        elements: {
          line: {
            fill: 'start'
          }
        }
      };
      RadarController.overrides = {
        aspectRatio: 1,
        scales: {
          r: {
            type: 'radialLinear'
          }
        }
      };

      var ScatterController = /*#__PURE__*/function (_LineController) {
        _inherits(ScatterController, _LineController);

        var _super8 = _createSuper(ScatterController);

        function ScatterController() {
          _classCallCheck(this, ScatterController);

          return _super8.apply(this, arguments);
        }

        return _createClass(ScatterController);
      }(LineController);

      ScatterController.id = 'scatter';
      ScatterController.defaults = {
        showLine: false,
        fill: false
      };
      ScatterController.overrides = {
        interaction: {
          mode: 'point'
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: function title() {
                return '';
              },
              label: function label(item) {
                return '(' + item.label + ', ' + item.formattedValue + ')';
              }
            }
          }
        },
        scales: {
          x: {
            type: 'linear'
          },
          y: {
            type: 'linear'
          }
        }
      };
      var controllers = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BarController: BarController,
        BubbleController: BubbleController,
        DoughnutController: DoughnutController,
        LineController: LineController,
        PolarAreaController: PolarAreaController,
        PieController: PieController,
        RadarController: RadarController,
        ScatterController: ScatterController
      });

      function _abstract() {
        throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
      }

      var DateAdapter = /*#__PURE__*/function () {
        function DateAdapter(options) {
          _classCallCheck(this, DateAdapter);

          this.options = options || {};
        }

        _createClass(DateAdapter, [{
          key: "formats",
          value: function formats() {
            return _abstract();
          }
        }, {
          key: "parse",
          value: function parse(value, format) {
            return _abstract();
          }
        }, {
          key: "format",
          value: function format(timestamp, _format) {
            return _abstract();
          }
        }, {
          key: "add",
          value: function add(timestamp, amount, unit) {
            return _abstract();
          }
        }, {
          key: "diff",
          value: function diff(a, b, unit) {
            return _abstract();
          }
        }, {
          key: "startOf",
          value: function startOf(timestamp, unit, weekday) {
            return _abstract();
          }
        }, {
          key: "endOf",
          value: function endOf(timestamp, unit) {
            return _abstract();
          }
        }]);

        return DateAdapter;
      }();

      DateAdapter.override = function (members) {
        Object.assign(DateAdapter.prototype, members);
      };

      var adapters = {
        _date: DateAdapter
      };

      function getRelativePosition(e, chart) {
        if ('native' in e) {
          return {
            x: e.x,
            y: e.y
          };
        }

        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["y"])(e, chart);
      }

      function evaluateAllVisibleItems(chart, handler) {
        var metasets = chart.getSortedVisibleDatasetMetas();
        var index, data, element;

        for (var i = 0, ilen = metasets.length; i < ilen; ++i) {
          var _metasets$i = metasets[i];
          index = _metasets$i.index;
          data = _metasets$i.data;

          for (var j = 0, jlen = data.length; j < jlen; ++j) {
            element = data[j];

            if (!element.skip) {
              handler(element, index, j);
            }
          }
        }
      }

      function binarySearch(metaset, axis, value, intersect) {
        var controller = metaset.controller,
            data = metaset.data,
            _sorted = metaset._sorted;
        var iScale = controller._cachedMeta.iScale;

        if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
          var lookupMethod = iScale._reversePixels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["A"] : _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["x"];

          if (!intersect) {
            return lookupMethod(data, axis, value);
          } else if (controller._sharedOptions) {
            var el = data[0];
            var range = typeof el.getRange === 'function' && el.getRange(axis);

            if (range) {
              var start = lookupMethod(data, axis, value - range);
              var end = lookupMethod(data, axis, value + range);
              return {
                lo: start.lo,
                hi: end.hi
              };
            }
          }
        }

        return {
          lo: 0,
          hi: data.length - 1
        };
      }

      function optimizedEvaluateItems(chart, axis, position, handler, intersect) {
        var metasets = chart.getSortedVisibleDatasetMetas();
        var value = position[axis];

        for (var i = 0, ilen = metasets.length; i < ilen; ++i) {
          var _metasets$i2 = metasets[i],
              index = _metasets$i2.index,
              data = _metasets$i2.data;

          var _binarySearch = binarySearch(metasets[i], axis, value, intersect),
              lo = _binarySearch.lo,
              hi = _binarySearch.hi;

          for (var j = lo; j <= hi; ++j) {
            var element = data[j];

            if (!element.skip) {
              handler(element, index, j);
            }
          }
        }
      }

      function getDistanceMetricForAxis(axis) {
        var useX = axis.indexOf('x') !== -1;
        var useY = axis.indexOf('y') !== -1;
        return function (pt1, pt2) {
          var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
          var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
          return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        };
      }

      function getIntersectItems(chart, position, axis, useFinalPosition) {
        var items = [];

        if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["z"])(position, chart.chartArea, chart._minPadding)) {
          return items;
        }

        var evaluationFunc = function evaluationFunc(element, datasetIndex, index) {
          if (element.inRange(position.x, position.y, useFinalPosition)) {
            items.push({
              element: element,
              datasetIndex: datasetIndex,
              index: index
            });
          }
        };

        optimizedEvaluateItems(chart, axis, position, evaluationFunc, true);
        return items;
      }

      function getNearestRadialItems(chart, position, axis, useFinalPosition) {
        var items = [];

        function evaluationFunc(element, datasetIndex, index) {
          var _element$getProps = element.getProps(['startAngle', 'endAngle'], useFinalPosition),
              startAngle = _element$getProps.startAngle,
              endAngle = _element$getProps.endAngle;

          var _Object = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["B"])(element, {
            x: position.x,
            y: position.y
          }),
              angle = _Object.angle;

          if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["p"])(angle, startAngle, endAngle)) {
            items.push({
              element: element,
              datasetIndex: datasetIndex,
              index: index
            });
          }
        }

        optimizedEvaluateItems(chart, axis, position, evaluationFunc);
        return items;
      }

      function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition) {
        var items = [];
        var distanceMetric = getDistanceMetricForAxis(axis);
        var minDistance = Number.POSITIVE_INFINITY;

        function evaluationFunc(element, datasetIndex, index) {
          var inRange = element.inRange(position.x, position.y, useFinalPosition);

          if (intersect && !inRange) {
            return;
          }

          var center = element.getCenterPoint(useFinalPosition);
          var pointInArea = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["z"])(center, chart.chartArea, chart._minPadding);

          if (!pointInArea && !inRange) {
            return;
          }

          var distance = distanceMetric(position, center);

          if (distance < minDistance) {
            items = [{
              element: element,
              datasetIndex: datasetIndex,
              index: index
            }];
            minDistance = distance;
          } else if (distance === minDistance) {
            items.push({
              element: element,
              datasetIndex: datasetIndex,
              index: index
            });
          }
        }

        optimizedEvaluateItems(chart, axis, position, evaluationFunc);
        return items;
      }

      function getNearestItems(chart, position, axis, intersect, useFinalPosition) {
        if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["z"])(position, chart.chartArea, chart._minPadding)) {
          return [];
        }

        return axis === 'r' && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition);
      }

      function getAxisItems(chart, e, options, useFinalPosition) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var axis = options.axis;
        var rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
        var intersectsItem = false;
        evaluateAllVisibleItems(chart, function (element, datasetIndex, index) {
          if (element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({
              element: element,
              datasetIndex: datasetIndex,
              index: index
            });
          }

          if (element.inRange(position.x, position.y, useFinalPosition)) {
            intersectsItem = true;
          }
        });

        if (options.intersect && !intersectsItem) {
          return [];
        }

        return items;
      }

      var Interaction = {
        modes: {
          index: function index(chart, e, options, useFinalPosition) {
            var position = getRelativePosition(e, chart);
            var axis = options.axis || 'x';
            var items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition) : getNearestItems(chart, position, axis, false, useFinalPosition);
            var elements = [];

            if (!items.length) {
              return [];
            }

            chart.getSortedVisibleDatasetMetas().forEach(function (meta) {
              var index = items[0].index;
              var element = meta.data[index];

              if (element && !element.skip) {
                elements.push({
                  element: element,
                  datasetIndex: meta.index,
                  index: index
                });
              }
            });
            return elements;
          },
          dataset: function dataset(chart, e, options, useFinalPosition) {
            var position = getRelativePosition(e, chart);
            var axis = options.axis || 'xy';
            var items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition) : getNearestItems(chart, position, axis, false, useFinalPosition);

            if (items.length > 0) {
              var datasetIndex = items[0].datasetIndex;
              var data = chart.getDatasetMeta(datasetIndex).data;
              items = [];

              for (var i = 0; i < data.length; ++i) {
                items.push({
                  element: data[i],
                  datasetIndex: datasetIndex,
                  index: i
                });
              }
            }

            return items;
          },
          point: function point(chart, e, options, useFinalPosition) {
            var position = getRelativePosition(e, chart);
            var axis = options.axis || 'xy';
            return getIntersectItems(chart, position, axis, useFinalPosition);
          },
          nearest: function nearest(chart, e, options, useFinalPosition) {
            var position = getRelativePosition(e, chart);
            var axis = options.axis || 'xy';
            return getNearestItems(chart, position, axis, options.intersect, useFinalPosition);
          },
          x: function x(chart, e, options, useFinalPosition) {
            return getAxisItems(chart, e, {
              axis: 'x',
              intersect: options.intersect
            }, useFinalPosition);
          },
          y: function y(chart, e, options, useFinalPosition) {
            return getAxisItems(chart, e, {
              axis: 'y',
              intersect: options.intersect
            }, useFinalPosition);
          }
        }
      };
      var STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];

      function filterByPosition(array, position) {
        return array.filter(function (v) {
          return v.pos === position;
        });
      }

      function filterDynamicPositionByAxis(array, axis) {
        return array.filter(function (v) {
          return STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis;
        });
      }

      function sortByWeight(array, reverse) {
        return array.sort(function (a, b) {
          var v0 = reverse ? b : a;
          var v1 = reverse ? a : b;
          return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
        });
      }

      function wrapBoxes(boxes) {
        var layoutBoxes = [];
        var i, ilen, box, pos, stack, stackWeight;

        for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
          box = boxes[i];
          var _box = box;
          pos = _box.position;
          var _box$options = _box.options;
          stack = _box$options.stack;
          var _box$options$stackWei = _box$options.stackWeight;
          stackWeight = _box$options$stackWei === void 0 ? 1 : _box$options$stackWei;
          layoutBoxes.push({
            index: i,
            box: box,
            pos: pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight: stackWeight
          });
        }

        return layoutBoxes;
      }

      function buildStacks(layouts) {
        var stacks = {};

        var _iterator14 = _createForOfIteratorHelper(layouts),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var wrap = _step14.value;
            var stack = wrap.stack,
                pos = wrap.pos,
                stackWeight = wrap.stackWeight;

            if (!stack || !STATIC_POSITIONS.includes(pos)) {
              continue;
            }

            var _stack = stacks[stack] || (stacks[stack] = {
              count: 0,
              placed: 0,
              weight: 0,
              size: 0
            });

            _stack.count++;
            _stack.weight += stackWeight;
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        return stacks;
      }

      function setLayoutDims(layouts, params) {
        var stacks = buildStacks(layouts);
        var vBoxMaxWidth = params.vBoxMaxWidth,
            hBoxMaxHeight = params.hBoxMaxHeight;
        var i, ilen, layout;

        for (i = 0, ilen = layouts.length; i < ilen; ++i) {
          layout = layouts[i];
          var fullSize = layout.box.fullSize;
          var stack = stacks[layout.stack];
          var factor = stack && layout.stackWeight / stack.weight;

          if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
          } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
          }
        }

        return stacks;
      }

      function buildLayoutBoxes(boxes) {
        var layoutBoxes = wrapBoxes(boxes);
        var fullSize = sortByWeight(layoutBoxes.filter(function (wrap) {
          return wrap.box.fullSize;
        }), true);
        var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
        var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
        var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
        var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
        var centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
        var centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
        return {
          fullSize: fullSize,
          leftAndTop: left.concat(top),
          rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
          chartArea: filterByPosition(layoutBoxes, 'chartArea'),
          vertical: left.concat(right).concat(centerVertical),
          horizontal: top.concat(bottom).concat(centerHorizontal)
        };
      }

      function getCombinedMax(maxPadding, chartArea, a, b) {
        return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
      }

      function updateMaxPadding(maxPadding, boxPadding) {
        maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
        maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
        maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
        maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
      }

      function updateDims(chartArea, params, layout, stacks) {
        var pos = layout.pos,
            box = layout.box;
        var maxPadding = chartArea.maxPadding;

        if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(pos)) {
          if (layout.size) {
            chartArea[pos] -= layout.size;
          }

          var stack = stacks[layout.stack] || {
            size: 0,
            count: 1
          };
          stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
          layout.size = stack.size / stack.count;
          chartArea[pos] += layout.size;
        }

        if (box.getPadding) {
          updateMaxPadding(maxPadding, box.getPadding());
        }

        var newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
        var newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
        var widthChanged = newWidth !== chartArea.w;
        var heightChanged = newHeight !== chartArea.h;
        chartArea.w = newWidth;
        chartArea.h = newHeight;
        return layout.horizontal ? {
          same: widthChanged,
          other: heightChanged
        } : {
          same: heightChanged,
          other: widthChanged
        };
      }

      function handleMaxPadding(chartArea) {
        var maxPadding = chartArea.maxPadding;

        function updatePos(pos) {
          var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
          chartArea[pos] += change;
          return change;
        }

        chartArea.y += updatePos('top');
        chartArea.x += updatePos('left');
        updatePos('right');
        updatePos('bottom');
      }

      function getMargins(horizontal, chartArea) {
        var maxPadding = chartArea.maxPadding;

        function marginForPositions(positions) {
          var margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          };
          positions.forEach(function (pos) {
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
          });
          return margin;
        }

        return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
      }

      function fitBoxes(boxes, chartArea, params, stacks) {
        var refitBoxes = [];
        var i, ilen, layout, box, refit, changed;

        for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
          layout = boxes[i];
          box = layout.box;
          box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));

          var _updateDims = updateDims(chartArea, params, layout, stacks),
              same = _updateDims.same,
              other = _updateDims.other;

          refit |= same && refitBoxes.length;
          changed = changed || other;

          if (!box.fullSize) {
            refitBoxes.push(layout);
          }
        }

        return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
      }

      function setBoxDims(box, left, top, width, height) {
        box.top = top;
        box.left = left;
        box.right = left + width;
        box.bottom = top + height;
        box.width = width;
        box.height = height;
      }

      function placeBoxes(boxes, chartArea, params, stacks) {
        var userPadding = params.padding;
        var x = chartArea.x,
            y = chartArea.y;

        var _iterator15 = _createForOfIteratorHelper(boxes),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var layout = _step15.value;
            var box = layout.box;
            var stack = stacks[layout.stack] || {
              count: 1,
              placed: 0,
              weight: 1
            };
            var weight = layout.stackWeight / stack.weight || 1;

            if (layout.horizontal) {
              var width = chartArea.w * weight;
              var height = stack.size || box.height;

              if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["j"])(stack.start)) {
                y = stack.start;
              }

              if (box.fullSize) {
                setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
              } else {
                setBoxDims(box, chartArea.left + stack.placed, y, width, height);
              }

              stack.start = y;
              stack.placed += width;
              y = box.bottom;
            } else {
              var _height = chartArea.h * weight;

              var _width = stack.size || box.width;

              if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["j"])(stack.start)) {
                x = stack.start;
              }

              if (box.fullSize) {
                setBoxDims(box, x, userPadding.top, _width, params.outerHeight - userPadding.bottom - userPadding.top);
              } else {
                setBoxDims(box, x, chartArea.top + stack.placed, _width, _height);
              }

              stack.start = x;
              stack.placed += _height;
              x = box.right;
            }
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }

        chartArea.x = x;
        chartArea.y = y;
      }

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].set('layout', {
        autoPadding: true,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      });

      var layouts = {
        addBox: function addBox(chart, item) {
          if (!chart.boxes) {
            chart.boxes = [];
          }

          item.fullSize = item.fullSize || false;
          item.position = item.position || 'top';
          item.weight = item.weight || 0;

          item._layers = item._layers || function () {
            return [{
              z: 0,
              draw: function draw(chartArea) {
                item.draw(chartArea);
              }
            }];
          };

          chart.boxes.push(item);
        },
        removeBox: function removeBox(chart, layoutItem) {
          var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;

          if (index !== -1) {
            chart.boxes.splice(index, 1);
          }
        },
        configure: function configure(chart, item, options) {
          item.fullSize = options.fullSize;
          item.position = options.position;
          item.weight = options.weight;
        },
        update: function update(chart, width, height, minPadding) {
          if (!chart) {
            return;
          }

          var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(chart.options.layout.padding);
          var availableWidth = Math.max(width - padding.width, 0);
          var availableHeight = Math.max(height - padding.height, 0);
          var boxes = buildLayoutBoxes(chart.boxes);
          var verticalBoxes = boxes.vertical;
          var horizontalBoxes = boxes.horizontal;
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(chart.boxes, function (box) {
            if (typeof box.beforeLayout === 'function') {
              box.beforeLayout();
            }
          });
          var visibleVerticalBoxCount = verticalBoxes.reduce(function (total, wrap) {
            return wrap.box.options && wrap.box.options.display === false ? total : total + 1;
          }, 0) || 1;
          var params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding: padding,
            availableWidth: availableWidth,
            availableHeight: availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
          });
          var maxPadding = Object.assign({}, padding);
          updateMaxPadding(maxPadding, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(minPadding));
          var chartArea = Object.assign({
            maxPadding: maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
          }, padding);
          var stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
          fitBoxes(boxes.fullSize, chartArea, params, stacks);
          fitBoxes(verticalBoxes, chartArea, params, stacks);

          if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
            fitBoxes(verticalBoxes, chartArea, params, stacks);
          }

          handleMaxPadding(chartArea);
          placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
          chartArea.x += chartArea.w;
          chartArea.y += chartArea.h;
          placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
          chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
          };
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(boxes.chartArea, function (layout) {
            var box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            });
          });
        }
      };

      var BasePlatform = /*#__PURE__*/function () {
        function BasePlatform() {
          _classCallCheck(this, BasePlatform);
        }

        _createClass(BasePlatform, [{
          key: "acquireContext",
          value: function acquireContext(canvas, aspectRatio) {}
        }, {
          key: "releaseContext",
          value: function releaseContext(context) {
            return false;
          }
        }, {
          key: "addEventListener",
          value: function addEventListener(chart, type, listener) {}
        }, {
          key: "removeEventListener",
          value: function removeEventListener(chart, type, listener) {}
        }, {
          key: "getDevicePixelRatio",
          value: function getDevicePixelRatio() {
            return 1;
          }
        }, {
          key: "getMaximumSize",
          value: function getMaximumSize(element, width, height, aspectRatio) {
            width = Math.max(0, width || element.width);
            height = height || element.height;
            return {
              width: width,
              height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
            };
          }
        }, {
          key: "isAttached",
          value: function isAttached(canvas) {
            return true;
          }
        }, {
          key: "updateConfig",
          value: function updateConfig(config) {}
        }]);

        return BasePlatform;
      }();

      var BasicPlatform = /*#__PURE__*/function (_BasePlatform) {
        _inherits(BasicPlatform, _BasePlatform);

        var _super9 = _createSuper(BasicPlatform);

        function BasicPlatform() {
          _classCallCheck(this, BasicPlatform);

          return _super9.apply(this, arguments);
        }

        _createClass(BasicPlatform, [{
          key: "acquireContext",
          value: function acquireContext(item) {
            return item && item.getContext && item.getContext('2d') || null;
          }
        }, {
          key: "updateConfig",
          value: function updateConfig(config) {
            config.options.animation = false;
          }
        }]);

        return BasicPlatform;
      }(BasePlatform);

      var EXPANDO_KEY = '$chartjs';
      var EVENT_TYPES = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup',
        pointerenter: 'mouseenter',
        pointerdown: 'mousedown',
        pointermove: 'mousemove',
        pointerup: 'mouseup',
        pointerleave: 'mouseout',
        pointerout: 'mouseout'
      };

      var isNullOrEmpty = function isNullOrEmpty(value) {
        return value === null || value === '';
      };

      function initCanvas(canvas, aspectRatio) {
        var style = canvas.style;
        var renderHeight = canvas.getAttribute('height');
        var renderWidth = canvas.getAttribute('width');
        canvas[EXPANDO_KEY] = {
          initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
              display: style.display,
              height: style.height,
              width: style.width
            }
          }
        };
        style.display = style.display || 'block';
        style.boxSizing = style.boxSizing || 'border-box';

        if (isNullOrEmpty(renderWidth)) {
          var displayWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["G"])(canvas, 'width');

          if (displayWidth !== undefined) {
            canvas.width = displayWidth;
          }
        }

        if (isNullOrEmpty(renderHeight)) {
          if (canvas.style.height === '') {
            canvas.height = canvas.width / (aspectRatio || 2);
          } else {
            var displayHeight = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["G"])(canvas, 'height');

            if (displayHeight !== undefined) {
              canvas.height = displayHeight;
            }
          }
        }

        return canvas;
      }

      var eventListenerOptions = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["J"] ? {
        passive: true
      } : false;

      function addListener(node, type, listener) {
        node.addEventListener(type, listener, eventListenerOptions);
      }

      function removeListener(chart, type, listener) {
        chart.canvas.removeEventListener(type, listener, eventListenerOptions);
      }

      function fromNativeEvent(event, chart) {
        var type = EVENT_TYPES[event.type] || event.type;

        var _Object2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["y"])(event, chart),
            x = _Object2.x,
            y = _Object2.y;

        return {
          type: type,
          chart: chart,
          "native": event,
          x: x !== undefined ? x : null,
          y: y !== undefined ? y : null
        };
      }

      function nodeListContains(nodeList, canvas) {
        var _iterator16 = _createForOfIteratorHelper(nodeList),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var node = _step16.value;

            if (node === canvas || node.contains(canvas)) {
              return true;
            }
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }

      function createAttachObserver(chart, type, listener) {
        var canvas = chart.canvas;
        var observer = new MutationObserver(function (entries) {
          var trigger = false;

          var _iterator17 = _createForOfIteratorHelper(entries),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var entry = _step17.value;
              trigger = trigger || nodeListContains(entry.addedNodes, canvas);
              trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }

          if (trigger) {
            listener();
          }
        });
        observer.observe(document, {
          childList: true,
          subtree: true
        });
        return observer;
      }

      function createDetachObserver(chart, type, listener) {
        var canvas = chart.canvas;
        var observer = new MutationObserver(function (entries) {
          var trigger = false;

          var _iterator18 = _createForOfIteratorHelper(entries),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var entry = _step18.value;
              trigger = trigger || nodeListContains(entry.removedNodes, canvas);
              trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          if (trigger) {
            listener();
          }
        });
        observer.observe(document, {
          childList: true,
          subtree: true
        });
        return observer;
      }

      var drpListeningCharts = new Map();
      var oldDevicePixelRatio = 0;

      function onWindowResize() {
        var dpr = window.devicePixelRatio;

        if (dpr === oldDevicePixelRatio) {
          return;
        }

        oldDevicePixelRatio = dpr;
        drpListeningCharts.forEach(function (resize, chart) {
          if (chart.currentDevicePixelRatio !== dpr) {
            resize();
          }
        });
      }

      function listenDevicePixelRatioChanges(chart, resize) {
        if (!drpListeningCharts.size) {
          window.addEventListener('resize', onWindowResize);
        }

        drpListeningCharts.set(chart, resize);
      }

      function unlistenDevicePixelRatioChanges(chart) {
        drpListeningCharts["delete"](chart);

        if (!drpListeningCharts.size) {
          window.removeEventListener('resize', onWindowResize);
        }
      }

      function createResizeObserver(chart, type, listener) {
        var canvas = chart.canvas;
        var container = canvas && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["F"])(canvas);

        if (!container) {
          return;
        }

        var resize = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["I"])(function (width, height) {
          var w = container.clientWidth;
          listener(width, height);

          if (w < container.clientWidth) {
            listener();
          }
        }, window);
        var observer = new ResizeObserver(function (entries) {
          var entry = entries[0];
          var width = entry.contentRect.width;
          var height = entry.contentRect.height;

          if (width === 0 && height === 0) {
            return;
          }

          resize(width, height);
        });
        observer.observe(container);
        listenDevicePixelRatioChanges(chart, resize);
        return observer;
      }

      function releaseObserver(chart, type, observer) {
        if (observer) {
          observer.disconnect();
        }

        if (type === 'resize') {
          unlistenDevicePixelRatioChanges(chart);
        }
      }

      function createProxyAndListen(chart, type, listener) {
        var canvas = chart.canvas;
        var proxy = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["I"])(function (event) {
          if (chart.ctx !== null) {
            listener(fromNativeEvent(event, chart));
          }
        }, chart, function (args) {
          var event = args[0];
          return [event, event.offsetX, event.offsetY];
        });
        addListener(canvas, type, proxy);
        return proxy;
      }

      var DomPlatform = /*#__PURE__*/function (_BasePlatform2) {
        _inherits(DomPlatform, _BasePlatform2);

        var _super10 = _createSuper(DomPlatform);

        function DomPlatform() {
          _classCallCheck(this, DomPlatform);

          return _super10.apply(this, arguments);
        }

        _createClass(DomPlatform, [{
          key: "acquireContext",
          value: function acquireContext(canvas, aspectRatio) {
            var context = canvas && canvas.getContext && canvas.getContext('2d');

            if (context && context.canvas === canvas) {
              initCanvas(canvas, aspectRatio);
              return context;
            }

            return null;
          }
        }, {
          key: "releaseContext",
          value: function releaseContext(context) {
            var canvas = context.canvas;

            if (!canvas[EXPANDO_KEY]) {
              return false;
            }

            var initial = canvas[EXPANDO_KEY].initial;
            ['height', 'width'].forEach(function (prop) {
              var value = initial[prop];

              if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(value)) {
                canvas.removeAttribute(prop);
              } else {
                canvas.setAttribute(prop, value);
              }
            });
            var style = initial.style || {};
            Object.keys(style).forEach(function (key) {
              canvas.style[key] = style[key];
            });
            canvas.width = canvas.width;
            delete canvas[EXPANDO_KEY];
            return true;
          }
        }, {
          key: "addEventListener",
          value: function addEventListener(chart, type, listener) {
            this.removeEventListener(chart, type);
            var proxies = chart.$proxies || (chart.$proxies = {});
            var handlers = {
              attach: createAttachObserver,
              detach: createDetachObserver,
              resize: createResizeObserver
            };
            var handler = handlers[type] || createProxyAndListen;
            proxies[type] = handler(chart, type, listener);
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(chart, type) {
            var proxies = chart.$proxies || (chart.$proxies = {});
            var proxy = proxies[type];

            if (!proxy) {
              return;
            }

            var handlers = {
              attach: releaseObserver,
              detach: releaseObserver,
              resize: releaseObserver
            };
            var handler = handlers[type] || removeListener;
            handler(chart, type, proxy);
            proxies[type] = undefined;
          }
        }, {
          key: "getDevicePixelRatio",
          value: function getDevicePixelRatio() {
            return window.devicePixelRatio;
          }
        }, {
          key: "getMaximumSize",
          value: function getMaximumSize(canvas, width, height, aspectRatio) {
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["E"])(canvas, width, height, aspectRatio);
          }
        }, {
          key: "isAttached",
          value: function isAttached(canvas) {
            var container = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["F"])(canvas);
            return !!(container && container.isConnected);
          }
        }]);

        return DomPlatform;
      }(BasePlatform);

      function _detectPlatform(canvas) {
        if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["K"])() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) {
          return BasicPlatform;
        }

        return DomPlatform;
      }

      var Element = /*#__PURE__*/function () {
        function Element() {
          _classCallCheck(this, Element);

          this.x = undefined;
          this.y = undefined;
          this.active = false;
          this.options = undefined;
          this.$animations = undefined;
        }

        _createClass(Element, [{
          key: "tooltipPosition",
          value: function tooltipPosition(useFinalPosition) {
            var _this$getProps = this.getProps(['x', 'y'], useFinalPosition),
                x = _this$getProps.x,
                y = _this$getProps.y;

            return {
              x: x,
              y: y
            };
          }
        }, {
          key: "hasValue",
          value: function hasValue() {
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["q"])(this.x) && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["q"])(this.y);
          }
        }, {
          key: "getProps",
          value: function getProps(props, _final) {
            var _this7 = this;

            var anims = this.$animations;

            if (!_final || !anims) {
              return this;
            }

            var ret = {};
            props.forEach(function (prop) {
              ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : _this7[prop];
            });
            return ret;
          }
        }]);

        return Element;
      }();

      Element.defaults = {};
      Element.defaultRoutes = undefined;
      var formatters = {
        values: function values(value) {
          return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(value) ? value : '' + value;
        },
        numeric: function numeric(tickValue, index, ticks) {
          if (tickValue === 0) {
            return '0';
          }

          var locale = this.chart.options.locale;
          var notation;
          var delta = tickValue;

          if (ticks.length > 1) {
            var maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));

            if (maxTick < 1e-4 || maxTick > 1e+15) {
              notation = 'scientific';
            }

            delta = calculateDelta(tickValue, ticks);
          }

          var logDelta = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(Math.abs(delta));
          var numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
          var options = {
            notation: notation,
            minimumFractionDigits: numDecimal,
            maximumFractionDigits: numDecimal
          };
          Object.assign(options, this.options.ticks.format);
          return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["o"])(tickValue, locale, options);
        },
        logarithmic: function logarithmic(tickValue, index, ticks) {
          if (tickValue === 0) {
            return '0';
          }

          var remain = tickValue / Math.pow(10, Math.floor(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(tickValue)));

          if (remain === 1 || remain === 2 || remain === 5) {
            return formatters.numeric.call(this, tickValue, index, ticks);
          }

          return '';
        }
      };

      function calculateDelta(tickValue, ticks) {
        var delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;

        if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
          delta = tickValue - Math.floor(tickValue);
        }

        return delta;
      }

      var Ticks = {
        formatters: formatters
      };

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].set('scale', {
        display: true,
        offset: false,
        reverse: false,
        beginAtZero: false,
        bounds: 'ticks',
        grace: 0,
        grid: {
          display: true,
          lineWidth: 1,
          drawBorder: true,
          drawOnChartArea: true,
          drawTicks: true,
          tickLength: 8,
          tickWidth: function tickWidth(_ctx, options) {
            return options.lineWidth;
          },
          tickColor: function tickColor(_ctx, options) {
            return options.color;
          },
          offset: false,
          borderDash: [],
          borderDashOffset: 0.0,
          borderWidth: 1
        },
        title: {
          display: false,
          text: '',
          padding: {
            top: 4,
            bottom: 4
          }
        },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: false,
          textStrokeWidth: 0,
          textStrokeColor: '',
          padding: 3,
          display: true,
          autoSkip: true,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: Ticks.formatters.values,
          minor: {},
          major: {},
          align: 'center',
          crossAlign: 'near',
          showLabelBackdrop: false,
          backdropColor: 'rgba(255, 255, 255, 0.75)',
          backdropPadding: 2
        }
      });

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].route('scale.ticks', 'color', '', 'color');

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].route('scale.grid', 'color', '', 'borderColor');

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].route('scale.grid', 'borderColor', '', 'borderColor');

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].route('scale.title', 'color', '', 'color');

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].describe('scale', {
        _fallback: false,
        _scriptable: function _scriptable(name) {
          return !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser';
        },
        _indexable: function _indexable(name) {
          return name !== 'borderDash' && name !== 'tickBorderDash';
        }
      });

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].describe('scales', {
        _fallback: 'scale'
      });

      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].describe('scale.ticks', {
        _scriptable: function _scriptable(name) {
          return name !== 'backdropPadding' && name !== 'callback';
        },
        _indexable: function _indexable(name) {
          return name !== 'backdropPadding';
        }
      });

      function autoSkip(scale, ticks) {
        var tickOpts = scale.options.ticks;
        var ticksLimit = tickOpts.maxTicksLimit || determineMaxTicks(scale);
        var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
        var numMajorIndices = majorIndices.length;
        var first = majorIndices[0];
        var last = majorIndices[numMajorIndices - 1];
        var newTicks = [];

        if (numMajorIndices > ticksLimit) {
          skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
          return newTicks;
        }

        var spacing = calculateSpacing(majorIndices, ticks, ticksLimit);

        if (numMajorIndices > 0) {
          var i, ilen;
          var avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
          skip(ticks, newTicks, spacing, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);

          for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
            skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
          }

          skip(ticks, newTicks, spacing, last, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
          return newTicks;
        }

        skip(ticks, newTicks, spacing);
        return newTicks;
      }

      function determineMaxTicks(scale) {
        var offset = scale.options.offset;

        var tickLength = scale._tickSize();

        var maxScale = scale._length / tickLength + (offset ? 0 : 1);
        var maxChart = scale._maxLength / tickLength;
        return Math.floor(Math.min(maxScale, maxChart));
      }

      function calculateSpacing(majorIndices, ticks, ticksLimit) {
        var evenMajorSpacing = getEvenSpacing(majorIndices);
        var spacing = ticks.length / ticksLimit;

        if (!evenMajorSpacing) {
          return Math.max(spacing, 1);
        }

        var factors = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["M"])(evenMajorSpacing);

        for (var i = 0, ilen = factors.length - 1; i < ilen; i++) {
          var factor = factors[i];

          if (factor > spacing) {
            return factor;
          }
        }

        return Math.max(spacing, 1);
      }

      function getMajorIndices(ticks) {
        var result = [];
        var i, ilen;

        for (i = 0, ilen = ticks.length; i < ilen; i++) {
          if (ticks[i].major) {
            result.push(i);
          }
        }

        return result;
      }

      function skipMajors(ticks, newTicks, majorIndices, spacing) {
        var count = 0;
        var next = majorIndices[0];
        var i;
        spacing = Math.ceil(spacing);

        for (i = 0; i < ticks.length; i++) {
          if (i === next) {
            newTicks.push(ticks[i]);
            count++;
            next = majorIndices[count * spacing];
          }
        }
      }

      function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
        var start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(majorStart, 0);
        var end = Math.min(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(majorEnd, ticks.length), ticks.length);
        var count = 0;
        var length, i, next;
        spacing = Math.ceil(spacing);

        if (majorEnd) {
          length = majorEnd - majorStart;
          spacing = length / Math.floor(length / spacing);
        }

        next = start;

        while (next < 0) {
          count++;
          next = Math.round(start + count * spacing);
        }

        for (i = Math.max(start, 0); i < end; i++) {
          if (i === next) {
            newTicks.push(ticks[i]);
            count++;
            next = Math.round(start + count * spacing);
          }
        }
      }

      function getEvenSpacing(arr) {
        var len = arr.length;
        var i, diff;

        if (len < 2) {
          return false;
        }

        for (diff = arr[0], i = 1; i < len; ++i) {
          if (arr[i] - arr[i - 1] !== diff) {
            return false;
          }
        }

        return diff;
      }

      var reverseAlign = function reverseAlign(align) {
        return align === 'left' ? 'right' : align === 'right' ? 'left' : align;
      };

      var offsetFromEdge = function offsetFromEdge(scale, edge, offset) {
        return edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
      };

      function sample(arr, numItems) {
        var result = [];
        var increment = arr.length / numItems;
        var len = arr.length;
        var i = 0;

        for (; i < len; i += increment) {
          result.push(arr[Math.floor(i)]);
        }

        return result;
      }

      function getPixelForGridLine(scale, index, offsetGridLines) {
        var length = scale.ticks.length;
        var validIndex = Math.min(index, length - 1);
        var start = scale._startPixel;
        var end = scale._endPixel;
        var epsilon = 1e-6;
        var lineValue = scale.getPixelForTick(validIndex);
        var offset;

        if (offsetGridLines) {
          if (length === 1) {
            offset = Math.max(lineValue - start, end - lineValue);
          } else if (index === 0) {
            offset = (scale.getPixelForTick(1) - lineValue) / 2;
          } else {
            offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
          }

          lineValue += validIndex < index ? offset : -offset;

          if (lineValue < start - epsilon || lineValue > end + epsilon) {
            return;
          }
        }

        return lineValue;
      }

      function garbageCollect(caches, length) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(caches, function (cache) {
          var gc = cache.gc;
          var gcLen = gc.length / 2;
          var i;

          if (gcLen > length) {
            for (i = 0; i < gcLen; ++i) {
              delete cache.data[gc[i]];
            }

            gc.splice(0, gcLen);
          }
        });
      }

      function getTickMarkLength(options) {
        return options.drawTicks ? options.tickLength : 0;
      }

      function getTitleHeight(options, fallback) {
        if (!options.display) {
          return 0;
        }

        var font = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(options.font, fallback);
        var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(options.padding);
        var lines = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(options.text) ? options.text.length : 1;
        return lines * font.lineHeight + padding.height;
      }

      function createScaleContext(parent, scale) {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["h"])(parent, {
          scale: scale,
          type: 'scale'
        });
      }

      function createTickContext(parent, index, tick) {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["h"])(parent, {
          tick: tick,
          index: index,
          type: 'tick'
        });
      }

      function titleAlign(align, position, reverse) {
        var ret = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["$"])(align);

        if (reverse && position !== 'right' || !reverse && position === 'right') {
          ret = reverseAlign(ret);
        }

        return ret;
      }

      function titleArgs(scale, offset, position, align) {
        var top = scale.top,
            left = scale.left,
            bottom = scale.bottom,
            right = scale.right,
            chart = scale.chart;
        var chartArea = chart.chartArea,
            scales = chart.scales;
        var rotation = 0;
        var maxWidth, titleX, titleY;
        var height = bottom - top;
        var width = right - left;

        if (scale.isHorizontal()) {
          titleX = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, left, right);

          if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(position)) {
            var positionAxisID = Object.keys(position)[0];
            var value = position[positionAxisID];
            titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
          } else if (position === 'center') {
            titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
          } else {
            titleY = offsetFromEdge(scale, position, offset);
          }

          maxWidth = right - left;
        } else {
          if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(position)) {
            var _positionAxisID = Object.keys(position)[0];
            var _value = position[_positionAxisID];
            titleX = scales[_positionAxisID].getPixelForValue(_value) - width + offset;
          } else if (position === 'center') {
            titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
          } else {
            titleX = offsetFromEdge(scale, position, offset);
          }

          titleY = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, bottom, top);
          rotation = position === 'left' ? -_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"] : _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"];
        }

        return {
          titleX: titleX,
          titleY: titleY,
          maxWidth: maxWidth,
          rotation: rotation
        };
      }

      var Scale = /*#__PURE__*/function (_Element) {
        _inherits(Scale, _Element);

        var _super11 = _createSuper(Scale);

        function Scale(cfg) {
          var _this8;

          _classCallCheck(this, Scale);

          _this8 = _super11.call(this);
          _this8.id = cfg.id;
          _this8.type = cfg.type;
          _this8.options = undefined;
          _this8.ctx = cfg.ctx;
          _this8.chart = cfg.chart;
          _this8.top = undefined;
          _this8.bottom = undefined;
          _this8.left = undefined;
          _this8.right = undefined;
          _this8.width = undefined;
          _this8.height = undefined;
          _this8._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          };
          _this8.maxWidth = undefined;
          _this8.maxHeight = undefined;
          _this8.paddingTop = undefined;
          _this8.paddingBottom = undefined;
          _this8.paddingLeft = undefined;
          _this8.paddingRight = undefined;
          _this8.axis = undefined;
          _this8.labelRotation = undefined;
          _this8.min = undefined;
          _this8.max = undefined;
          _this8._range = undefined;
          _this8.ticks = [];
          _this8._gridLineItems = null;
          _this8._labelItems = null;
          _this8._labelSizes = null;
          _this8._length = 0;
          _this8._maxLength = 0;
          _this8._longestTextCache = {};
          _this8._startPixel = undefined;
          _this8._endPixel = undefined;
          _this8._reversePixels = false;
          _this8._userMax = undefined;
          _this8._userMin = undefined;
          _this8._suggestedMax = undefined;
          _this8._suggestedMin = undefined;
          _this8._ticksLength = 0;
          _this8._borderValue = 0;
          _this8._cache = {};
          _this8._dataLimitsCached = false;
          _this8.$context = undefined;
          return _this8;
        }

        _createClass(Scale, [{
          key: "init",
          value: function init(options) {
            this.options = options.setContext(this.getContext());
            this.axis = options.axis;
            this._userMin = this.parse(options.min);
            this._userMax = this.parse(options.max);
            this._suggestedMin = this.parse(options.suggestedMin);
            this._suggestedMax = this.parse(options.suggestedMax);
          }
        }, {
          key: "parse",
          value: function parse(raw, index) {
            return raw;
          }
        }, {
          key: "getUserBounds",
          value: function getUserBounds() {
            var _userMin = this._userMin,
                _userMax = this._userMax,
                _suggestedMin = this._suggestedMin,
                _suggestedMax = this._suggestedMax;
            _userMin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(_userMin, Number.POSITIVE_INFINITY);
            _userMax = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(_userMax, Number.NEGATIVE_INFINITY);
            _suggestedMin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(_suggestedMin, Number.POSITIVE_INFINITY);
            _suggestedMax = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(_suggestedMax, Number.NEGATIVE_INFINITY);
            return {
              min: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(_userMin, _suggestedMin),
              max: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(_userMax, _suggestedMax),
              minDefined: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(_userMin),
              maxDefined: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(_userMax)
            };
          }
        }, {
          key: "getMinMax",
          value: function getMinMax(canStack) {
            var _this$getUserBounds = this.getUserBounds(),
                min = _this$getUserBounds.min,
                max = _this$getUserBounds.max,
                minDefined = _this$getUserBounds.minDefined,
                maxDefined = _this$getUserBounds.maxDefined;

            var range;

            if (minDefined && maxDefined) {
              return {
                min: min,
                max: max
              };
            }

            var metas = this.getMatchingVisibleMetas();

            for (var i = 0, ilen = metas.length; i < ilen; ++i) {
              range = metas[i].controller.getMinMax(this, canStack);

              if (!minDefined) {
                min = Math.min(min, range.min);
              }

              if (!maxDefined) {
                max = Math.max(max, range.max);
              }
            }

            min = maxDefined && min > max ? max : min;
            max = minDefined && min > max ? min : max;
            return {
              min: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(min, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(max, min)),
              max: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(max, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(min, max))
            };
          }
        }, {
          key: "getPadding",
          value: function getPadding() {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0
            };
          }
        }, {
          key: "getTicks",
          value: function getTicks() {
            return this.ticks;
          }
        }, {
          key: "getLabels",
          value: function getLabels() {
            var data = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
          }
        }, {
          key: "beforeLayout",
          value: function beforeLayout() {
            this._cache = {};
            this._dataLimitsCached = false;
          }
        }, {
          key: "beforeUpdate",
          value: function beforeUpdate() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options.beforeUpdate, [this]);
          }
        }, {
          key: "update",
          value: function update(maxWidth, maxHeight, margins) {
            var _this$options3 = this.options,
                beginAtZero = _this$options3.beginAtZero,
                grace = _this$options3.grace,
                tickOpts = _this$options3.ticks;
            var sampleSize = tickOpts.sampleSize;
            this.beforeUpdate();
            this.maxWidth = maxWidth;
            this.maxHeight = maxHeight;
            this._margins = margins = Object.assign({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, margins);
            this.ticks = null;
            this._labelSizes = null;
            this._gridLineItems = null;
            this._labelItems = null;
            this.beforeSetDimensions();
            this.setDimensions();
            this.afterSetDimensions();
            this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;

            if (!this._dataLimitsCached) {
              this.beforeDataLimits();
              this.determineDataLimits();
              this.afterDataLimits();
              this._range = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Q"])(this, grace, beginAtZero);
              this._dataLimitsCached = true;
            }

            this.beforeBuildTicks();
            this.ticks = this.buildTicks() || [];
            this.afterBuildTicks();
            var samplingEnabled = sampleSize < this.ticks.length;

            this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);

            this.configure();
            this.beforeCalculateLabelRotation();
            this.calculateLabelRotation();
            this.afterCalculateLabelRotation();

            if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
              this.ticks = autoSkip(this, this.ticks);
              this._labelSizes = null;
            }

            if (samplingEnabled) {
              this._convertTicksToLabels(this.ticks);
            }

            this.beforeFit();
            this.fit();
            this.afterFit();
            this.afterUpdate();
          }
        }, {
          key: "configure",
          value: function configure() {
            var reversePixels = this.options.reverse;
            var startPixel, endPixel;

            if (this.isHorizontal()) {
              startPixel = this.left;
              endPixel = this.right;
            } else {
              startPixel = this.top;
              endPixel = this.bottom;
              reversePixels = !reversePixels;
            }

            this._startPixel = startPixel;
            this._endPixel = endPixel;
            this._reversePixels = reversePixels;
            this._length = endPixel - startPixel;
            this._alignToPixels = this.options.alignToPixels;
          }
        }, {
          key: "afterUpdate",
          value: function afterUpdate() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options.afterUpdate, [this]);
          }
        }, {
          key: "beforeSetDimensions",
          value: function beforeSetDimensions() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options.beforeSetDimensions, [this]);
          }
        }, {
          key: "setDimensions",
          value: function setDimensions() {
            if (this.isHorizontal()) {
              this.width = this.maxWidth;
              this.left = 0;
              this.right = this.width;
            } else {
              this.height = this.maxHeight;
              this.top = 0;
              this.bottom = this.height;
            }

            this.paddingLeft = 0;
            this.paddingTop = 0;
            this.paddingRight = 0;
            this.paddingBottom = 0;
          }
        }, {
          key: "afterSetDimensions",
          value: function afterSetDimensions() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options.afterSetDimensions, [this]);
          }
        }, {
          key: "_callHooks",
          value: function _callHooks(name) {
            this.chart.notifyPlugins(name, this.getContext());
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options[name], [this]);
          }
        }, {
          key: "beforeDataLimits",
          value: function beforeDataLimits() {
            this._callHooks('beforeDataLimits');
          }
        }, {
          key: "determineDataLimits",
          value: function determineDataLimits() {}
        }, {
          key: "afterDataLimits",
          value: function afterDataLimits() {
            this._callHooks('afterDataLimits');
          }
        }, {
          key: "beforeBuildTicks",
          value: function beforeBuildTicks() {
            this._callHooks('beforeBuildTicks');
          }
        }, {
          key: "buildTicks",
          value: function buildTicks() {
            return [];
          }
        }, {
          key: "afterBuildTicks",
          value: function afterBuildTicks() {
            this._callHooks('afterBuildTicks');
          }
        }, {
          key: "beforeTickToLabelConversion",
          value: function beforeTickToLabelConversion() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options.beforeTickToLabelConversion, [this]);
          }
        }, {
          key: "generateTickLabels",
          value: function generateTickLabels(ticks) {
            var tickOpts = this.options.ticks;
            var i, ilen, tick;

            for (i = 0, ilen = ticks.length; i < ilen; i++) {
              tick = ticks[i];
              tick.label = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(tickOpts.callback, [tick.value, i, ticks], this);
            }
          }
        }, {
          key: "afterTickToLabelConversion",
          value: function afterTickToLabelConversion() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options.afterTickToLabelConversion, [this]);
          }
        }, {
          key: "beforeCalculateLabelRotation",
          value: function beforeCalculateLabelRotation() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options.beforeCalculateLabelRotation, [this]);
          }
        }, {
          key: "calculateLabelRotation",
          value: function calculateLabelRotation() {
            var options = this.options;
            var tickOpts = options.ticks;
            var numTicks = this.ticks.length;
            var minRotation = tickOpts.minRotation || 0;
            var maxRotation = tickOpts.maxRotation;
            var labelRotation = minRotation;
            var tickWidth, maxHeight, maxLabelDiagonal;

            if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
              this.labelRotation = minRotation;
              return;
            }

            var labelSizes = this._getLabelSizes();

            var maxLabelWidth = labelSizes.widest.width;
            var maxLabelHeight = labelSizes.highest.height;
            var maxWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(this.chart.width - maxLabelWidth, 0, this.maxWidth);
            tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);

            if (maxLabelWidth + 6 > tickWidth) {
              tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
              maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
              maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
              labelRotation = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["R"])(Math.min(Math.asin(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(maxLabelHeight / maxLabelDiagonal, -1, 1))));
              labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
            }

            this.labelRotation = labelRotation;
          }
        }, {
          key: "afterCalculateLabelRotation",
          value: function afterCalculateLabelRotation() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options.afterCalculateLabelRotation, [this]);
          }
        }, {
          key: "beforeFit",
          value: function beforeFit() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options.beforeFit, [this]);
          }
        }, {
          key: "fit",
          value: function fit() {
            var minSize = {
              width: 0,
              height: 0
            };
            var chart = this.chart,
                _this$options4 = this.options,
                tickOpts = _this$options4.ticks,
                titleOpts = _this$options4.title,
                gridOpts = _this$options4.grid;

            var display = this._isVisible();

            var isHorizontal = this.isHorizontal();

            if (display) {
              var titleHeight = getTitleHeight(titleOpts, chart.options.font);

              if (isHorizontal) {
                minSize.width = this.maxWidth;
                minSize.height = getTickMarkLength(gridOpts) + titleHeight;
              } else {
                minSize.height = this.maxHeight;
                minSize.width = getTickMarkLength(gridOpts) + titleHeight;
              }

              if (tickOpts.display && this.ticks.length) {
                var _this$_getLabelSizes = this._getLabelSizes(),
                    first = _this$_getLabelSizes.first,
                    last = _this$_getLabelSizes.last,
                    widest = _this$_getLabelSizes.widest,
                    highest = _this$_getLabelSizes.highest;

                var tickPadding = tickOpts.padding * 2;
                var angleRadians = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(this.labelRotation);
                var cos = Math.cos(angleRadians);
                var sin = Math.sin(angleRadians);

                if (isHorizontal) {
                  var labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                  minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                } else {
                  var labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                  minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                }

                this._calculatePadding(first, last, sin, cos);
              }
            }

            this._handleMargins();

            if (isHorizontal) {
              this.width = this._length = chart.width - this._margins.left - this._margins.right;
              this.height = minSize.height;
            } else {
              this.width = minSize.width;
              this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
            }
          }
        }, {
          key: "_calculatePadding",
          value: function _calculatePadding(first, last, sin, cos) {
            var _this$options5 = this.options,
                _this$options5$ticks = _this$options5.ticks,
                align = _this$options5$ticks.align,
                padding = _this$options5$ticks.padding,
                position = _this$options5.position;
            var isRotated = this.labelRotation !== 0;
            var labelsBelowTicks = position !== 'top' && this.axis === 'x';

            if (this.isHorizontal()) {
              var offsetLeft = this.getPixelForTick(0) - this.left;
              var offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
              var paddingLeft = 0;
              var paddingRight = 0;

              if (isRotated) {
                if (labelsBelowTicks) {
                  paddingLeft = cos * first.width;
                  paddingRight = sin * last.height;
                } else {
                  paddingLeft = sin * first.height;
                  paddingRight = cos * last.width;
                }
              } else if (align === 'start') {
                paddingRight = last.width;
              } else if (align === 'end') {
                paddingLeft = first.width;
              } else {
                paddingLeft = first.width / 2;
                paddingRight = last.width / 2;
              }

              this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
              this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
            } else {
              var paddingTop = last.height / 2;
              var paddingBottom = first.height / 2;

              if (align === 'start') {
                paddingTop = 0;
                paddingBottom = first.height;
              } else if (align === 'end') {
                paddingTop = last.height;
                paddingBottom = 0;
              }

              this.paddingTop = paddingTop + padding;
              this.paddingBottom = paddingBottom + padding;
            }
          }
        }, {
          key: "_handleMargins",
          value: function _handleMargins() {
            if (this._margins) {
              this._margins.left = Math.max(this.paddingLeft, this._margins.left);
              this._margins.top = Math.max(this.paddingTop, this._margins.top);
              this._margins.right = Math.max(this.paddingRight, this._margins.right);
              this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
            }
          }
        }, {
          key: "afterFit",
          value: function afterFit() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(this.options.afterFit, [this]);
          }
        }, {
          key: "isHorizontal",
          value: function isHorizontal() {
            var _this$options6 = this.options,
                axis = _this$options6.axis,
                position = _this$options6.position;
            return position === 'top' || position === 'bottom' || axis === 'x';
          }
        }, {
          key: "isFullSize",
          value: function isFullSize() {
            return this.options.fullSize;
          }
        }, {
          key: "_convertTicksToLabels",
          value: function _convertTicksToLabels(ticks) {
            this.beforeTickToLabelConversion();
            this.generateTickLabels(ticks);
            var i, ilen;

            for (i = 0, ilen = ticks.length; i < ilen; i++) {
              if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(ticks[i].label)) {
                ticks.splice(i, 1);
                ilen--;
                i--;
              }
            }

            this.afterTickToLabelConversion();
          }
        }, {
          key: "_getLabelSizes",
          value: function _getLabelSizes() {
            var labelSizes = this._labelSizes;

            if (!labelSizes) {
              var sampleSize = this.options.ticks.sampleSize;
              var ticks = this.ticks;

              if (sampleSize < ticks.length) {
                ticks = sample(ticks, sampleSize);
              }

              this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length);
            }

            return labelSizes;
          }
        }, {
          key: "_computeLabelSizes",
          value: function _computeLabelSizes(ticks, length) {
            var ctx = this.ctx,
                caches = this._longestTextCache;
            var widths = [];
            var heights = [];
            var widestLabelSize = 0;
            var highestLabelSize = 0;
            var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;

            for (i = 0; i < length; ++i) {
              label = ticks[i].label;
              tickFont = this._resolveTickFontOptions(i);
              ctx.font = fontString = tickFont.string;
              cache = caches[fontString] = caches[fontString] || {
                data: {},
                gc: []
              };
              lineHeight = tickFont.lineHeight;
              width = height = 0;

              if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(label) && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(label)) {
                width = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["S"])(ctx, cache.data, cache.gc, width, label);
                height = lineHeight;
              } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(label)) {
                for (j = 0, jlen = label.length; j < jlen; ++j) {
                  nestedLabel = label[j];

                  if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(nestedLabel) && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(nestedLabel)) {
                    width = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["S"])(ctx, cache.data, cache.gc, width, nestedLabel);
                    height += lineHeight;
                  }
                }
              }

              widths.push(width);
              heights.push(height);
              widestLabelSize = Math.max(width, widestLabelSize);
              highestLabelSize = Math.max(height, highestLabelSize);
            }

            garbageCollect(caches, length);
            var widest = widths.indexOf(widestLabelSize);
            var highest = heights.indexOf(highestLabelSize);

            var valueAt = function valueAt(idx) {
              return {
                width: widths[idx] || 0,
                height: heights[idx] || 0
              };
            };

            return {
              first: valueAt(0),
              last: valueAt(length - 1),
              widest: valueAt(widest),
              highest: valueAt(highest),
              widths: widths,
              heights: heights
            };
          }
        }, {
          key: "getLabelForValue",
          value: function getLabelForValue(value) {
            return value;
          }
        }, {
          key: "getPixelForValue",
          value: function getPixelForValue(value, index) {
            return NaN;
          }
        }, {
          key: "getValueForPixel",
          value: function getValueForPixel(pixel) {}
        }, {
          key: "getPixelForTick",
          value: function getPixelForTick(index) {
            var ticks = this.ticks;

            if (index < 0 || index > ticks.length - 1) {
              return null;
            }

            return this.getPixelForValue(ticks[index].value);
          }
        }, {
          key: "getPixelForDecimal",
          value: function getPixelForDecimal(decimal) {
            if (this._reversePixels) {
              decimal = 1 - decimal;
            }

            var pixel = this._startPixel + decimal * this._length;
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["U"])(this._alignToPixels ? Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["V"])(this.chart, pixel, 0) : pixel);
          }
        }, {
          key: "getDecimalForPixel",
          value: function getDecimalForPixel(pixel) {
            var decimal = (pixel - this._startPixel) / this._length;
            return this._reversePixels ? 1 - decimal : decimal;
          }
        }, {
          key: "getBasePixel",
          value: function getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          }
        }, {
          key: "getBaseValue",
          value: function getBaseValue() {
            var min = this.min,
                max = this.max;
            return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
          }
        }, {
          key: "getContext",
          value: function getContext(index) {
            var ticks = this.ticks || [];

            if (index >= 0 && index < ticks.length) {
              var tick = ticks[index];
              return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
            }

            return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
          }
        }, {
          key: "_tickSize",
          value: function _tickSize() {
            var optionTicks = this.options.ticks;
            var rot = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(this.labelRotation);
            var cos = Math.abs(Math.cos(rot));
            var sin = Math.abs(Math.sin(rot));

            var labelSizes = this._getLabelSizes();

            var padding = optionTicks.autoSkipPadding || 0;
            var w = labelSizes ? labelSizes.widest.width + padding : 0;
            var h = labelSizes ? labelSizes.highest.height + padding : 0;
            return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
          }
        }, {
          key: "_isVisible",
          value: function _isVisible() {
            var display = this.options.display;

            if (display !== 'auto') {
              return !!display;
            }

            return this.getMatchingVisibleMetas().length > 0;
          }
        }, {
          key: "_computeGridLineItems",
          value: function _computeGridLineItems(chartArea) {
            var axis = this.axis;
            var chart = this.chart;
            var options = this.options;
            var grid = options.grid,
                position = options.position;
            var offset = grid.offset;
            var isHorizontal = this.isHorizontal();
            var ticks = this.ticks;
            var ticksLength = ticks.length + (offset ? 1 : 0);
            var tl = getTickMarkLength(grid);
            var items = [];
            var borderOpts = grid.setContext(this.getContext());
            var axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
            var axisHalfWidth = axisWidth / 2;

            var alignBorderValue = function alignBorderValue(pixel) {
              return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["V"])(chart, pixel, axisWidth);
            };

            var borderValue, i, lineValue, alignedLineValue;
            var tx1, ty1, tx2, ty2, x1, y1, x2, y2;

            if (position === 'top') {
              borderValue = alignBorderValue(this.bottom);
              ty1 = this.bottom - tl;
              ty2 = borderValue - axisHalfWidth;
              y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
              y2 = chartArea.bottom;
            } else if (position === 'bottom') {
              borderValue = alignBorderValue(this.top);
              y1 = chartArea.top;
              y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
              ty1 = borderValue + axisHalfWidth;
              ty2 = this.top + tl;
            } else if (position === 'left') {
              borderValue = alignBorderValue(this.right);
              tx1 = this.right - tl;
              tx2 = borderValue - axisHalfWidth;
              x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
              x2 = chartArea.right;
            } else if (position === 'right') {
              borderValue = alignBorderValue(this.left);
              x1 = chartArea.left;
              x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
              tx1 = borderValue + axisHalfWidth;
              tx2 = this.left + tl;
            } else if (axis === 'x') {
              if (position === 'center') {
                borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
              } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(position)) {
                var positionAxisID = Object.keys(position)[0];
                var value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
              }

              y1 = chartArea.top;
              y2 = chartArea.bottom;
              ty1 = borderValue + axisHalfWidth;
              ty2 = ty1 + tl;
            } else if (axis === 'y') {
              if (position === 'center') {
                borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
              } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(position)) {
                var _positionAxisID2 = Object.keys(position)[0];
                var _value2 = position[_positionAxisID2];
                borderValue = alignBorderValue(this.chart.scales[_positionAxisID2].getPixelForValue(_value2));
              }

              tx1 = borderValue - axisHalfWidth;
              tx2 = tx1 - tl;
              x1 = chartArea.left;
              x2 = chartArea.right;
            }

            var limit = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(options.ticks.maxTicksLimit, ticksLength);
            var step = Math.max(1, Math.ceil(ticksLength / limit));

            for (i = 0; i < ticksLength; i += step) {
              var optsAtIndex = grid.setContext(this.getContext(i));
              var lineWidth = optsAtIndex.lineWidth;
              var lineColor = optsAtIndex.color;
              var borderDash = grid.borderDash || [];
              var borderDashOffset = optsAtIndex.borderDashOffset;
              var tickWidth = optsAtIndex.tickWidth;
              var tickColor = optsAtIndex.tickColor;
              var tickBorderDash = optsAtIndex.tickBorderDash || [];
              var tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
              lineValue = getPixelForGridLine(this, i, offset);

              if (lineValue === undefined) {
                continue;
              }

              alignedLineValue = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["V"])(chart, lineValue, lineWidth);

              if (isHorizontal) {
                tx1 = tx2 = x1 = x2 = alignedLineValue;
              } else {
                ty1 = ty2 = y1 = y2 = alignedLineValue;
              }

              items.push({
                tx1: tx1,
                ty1: ty1,
                tx2: tx2,
                ty2: ty2,
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                width: lineWidth,
                color: lineColor,
                borderDash: borderDash,
                borderDashOffset: borderDashOffset,
                tickWidth: tickWidth,
                tickColor: tickColor,
                tickBorderDash: tickBorderDash,
                tickBorderDashOffset: tickBorderDashOffset
              });
            }

            this._ticksLength = ticksLength;
            this._borderValue = borderValue;
            return items;
          }
        }, {
          key: "_computeLabelItems",
          value: function _computeLabelItems(chartArea) {
            var axis = this.axis;
            var options = this.options;
            var position = options.position,
                optionTicks = options.ticks;
            var isHorizontal = this.isHorizontal();
            var ticks = this.ticks;
            var align = optionTicks.align,
                crossAlign = optionTicks.crossAlign,
                padding = optionTicks.padding,
                mirror = optionTicks.mirror;
            var tl = getTickMarkLength(options.grid);
            var tickAndPadding = tl + padding;
            var hTickAndPadding = mirror ? -padding : tickAndPadding;
            var rotation = -Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(this.labelRotation);
            var items = [];
            var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
            var textBaseline = 'middle';

            if (position === 'top') {
              y = this.bottom - hTickAndPadding;
              textAlign = this._getXAxisLabelAlignment();
            } else if (position === 'bottom') {
              y = this.top + hTickAndPadding;
              textAlign = this._getXAxisLabelAlignment();
            } else if (position === 'left') {
              var ret = this._getYAxisLabelAlignment(tl);

              textAlign = ret.textAlign;
              x = ret.x;
            } else if (position === 'right') {
              var _ret = this._getYAxisLabelAlignment(tl);

              textAlign = _ret.textAlign;
              x = _ret.x;
            } else if (axis === 'x') {
              if (position === 'center') {
                y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
              } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(position)) {
                var positionAxisID = Object.keys(position)[0];
                var value = position[positionAxisID];
                y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
              }

              textAlign = this._getXAxisLabelAlignment();
            } else if (axis === 'y') {
              if (position === 'center') {
                x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
              } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(position)) {
                var _positionAxisID3 = Object.keys(position)[0];
                var _value3 = position[_positionAxisID3];
                x = this.chart.scales[_positionAxisID3].getPixelForValue(_value3);
              }

              textAlign = this._getYAxisLabelAlignment(tl).textAlign;
            }

            if (axis === 'y') {
              if (align === 'start') {
                textBaseline = 'top';
              } else if (align === 'end') {
                textBaseline = 'bottom';
              }
            }

            var labelSizes = this._getLabelSizes();

            for (i = 0, ilen = ticks.length; i < ilen; ++i) {
              tick = ticks[i];
              label = tick.label;
              var optsAtIndex = optionTicks.setContext(this.getContext(i));
              pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
              font = this._resolveTickFontOptions(i);
              lineHeight = font.lineHeight;
              lineCount = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(label) ? label.length : 1;
              var halfCount = lineCount / 2;
              var color = optsAtIndex.color;
              var strokeColor = optsAtIndex.textStrokeColor;
              var strokeWidth = optsAtIndex.textStrokeWidth;

              if (isHorizontal) {
                x = pixel;

                if (position === 'top') {
                  if (crossAlign === 'near' || rotation !== 0) {
                    textOffset = -lineCount * lineHeight + lineHeight / 2;
                  } else if (crossAlign === 'center') {
                    textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                  } else {
                    textOffset = -labelSizes.highest.height + lineHeight / 2;
                  }
                } else {
                  if (crossAlign === 'near' || rotation !== 0) {
                    textOffset = lineHeight / 2;
                  } else if (crossAlign === 'center') {
                    textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                  } else {
                    textOffset = labelSizes.highest.height - lineCount * lineHeight;
                  }
                }

                if (mirror) {
                  textOffset *= -1;
                }
              } else {
                y = pixel;
                textOffset = (1 - lineCount) * lineHeight / 2;
              }

              var backdrop = void 0;

              if (optsAtIndex.showLabelBackdrop) {
                var labelPadding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(optsAtIndex.backdropPadding);
                var height = labelSizes.heights[i];
                var width = labelSizes.widths[i];
                var top = y + textOffset - labelPadding.top;
                var left = x - labelPadding.left;

                switch (textBaseline) {
                  case 'middle':
                    top -= height / 2;
                    break;

                  case 'bottom':
                    top -= height;
                    break;
                }

                switch (textAlign) {
                  case 'center':
                    left -= width / 2;
                    break;

                  case 'right':
                    left -= width;
                    break;
                }

                backdrop = {
                  left: left,
                  top: top,
                  width: width + labelPadding.width,
                  height: height + labelPadding.height,
                  color: optsAtIndex.backdropColor
                };
              }

              items.push({
                rotation: rotation,
                label: label,
                font: font,
                color: color,
                strokeColor: strokeColor,
                strokeWidth: strokeWidth,
                textOffset: textOffset,
                textAlign: textAlign,
                textBaseline: textBaseline,
                translation: [x, y],
                backdrop: backdrop
              });
            }

            return items;
          }
        }, {
          key: "_getXAxisLabelAlignment",
          value: function _getXAxisLabelAlignment() {
            var _this$options7 = this.options,
                position = _this$options7.position,
                ticks = _this$options7.ticks;
            var rotation = -Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(this.labelRotation);

            if (rotation) {
              return position === 'top' ? 'left' : 'right';
            }

            var align = 'center';

            if (ticks.align === 'start') {
              align = 'left';
            } else if (ticks.align === 'end') {
              align = 'right';
            }

            return align;
          }
        }, {
          key: "_getYAxisLabelAlignment",
          value: function _getYAxisLabelAlignment(tl) {
            var _this$options8 = this.options,
                position = _this$options8.position,
                _this$options8$ticks = _this$options8.ticks,
                crossAlign = _this$options8$ticks.crossAlign,
                mirror = _this$options8$ticks.mirror,
                padding = _this$options8$ticks.padding;

            var labelSizes = this._getLabelSizes();

            var tickAndPadding = tl + padding;
            var widest = labelSizes.widest.width;
            var textAlign;
            var x;

            if (position === 'left') {
              if (mirror) {
                x = this.right + padding;

                if (crossAlign === 'near') {
                  textAlign = 'left';
                } else if (crossAlign === 'center') {
                  textAlign = 'center';
                  x += widest / 2;
                } else {
                  textAlign = 'right';
                  x += widest;
                }
              } else {
                x = this.right - tickAndPadding;

                if (crossAlign === 'near') {
                  textAlign = 'right';
                } else if (crossAlign === 'center') {
                  textAlign = 'center';
                  x -= widest / 2;
                } else {
                  textAlign = 'left';
                  x = this.left;
                }
              }
            } else if (position === 'right') {
              if (mirror) {
                x = this.left + padding;

                if (crossAlign === 'near') {
                  textAlign = 'right';
                } else if (crossAlign === 'center') {
                  textAlign = 'center';
                  x -= widest / 2;
                } else {
                  textAlign = 'left';
                  x -= widest;
                }
              } else {
                x = this.left + tickAndPadding;

                if (crossAlign === 'near') {
                  textAlign = 'left';
                } else if (crossAlign === 'center') {
                  textAlign = 'center';
                  x += widest / 2;
                } else {
                  textAlign = 'right';
                  x = this.right;
                }
              }
            } else {
              textAlign = 'right';
            }

            return {
              textAlign: textAlign,
              x: x
            };
          }
        }, {
          key: "_computeLabelArea",
          value: function _computeLabelArea() {
            if (this.options.ticks.mirror) {
              return;
            }

            var chart = this.chart;
            var position = this.options.position;

            if (position === 'left' || position === 'right') {
              return {
                top: 0,
                left: this.left,
                bottom: chart.height,
                right: this.right
              };
            }

            if (position === 'top' || position === 'bottom') {
              return {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: chart.width
              };
            }
          }
        }, {
          key: "drawBackground",
          value: function drawBackground() {
            var ctx = this.ctx,
                backgroundColor = this.options.backgroundColor,
                left = this.left,
                top = this.top,
                width = this.width,
                height = this.height;

            if (backgroundColor) {
              ctx.save();
              ctx.fillStyle = backgroundColor;
              ctx.fillRect(left, top, width, height);
              ctx.restore();
            }
          }
        }, {
          key: "getLineWidthForValue",
          value: function getLineWidthForValue(value) {
            var grid = this.options.grid;

            if (!this._isVisible() || !grid.display) {
              return 0;
            }

            var ticks = this.ticks;
            var index = ticks.findIndex(function (t) {
              return t.value === value;
            });

            if (index >= 0) {
              var opts = grid.setContext(this.getContext(index));
              return opts.lineWidth;
            }

            return 0;
          }
        }, {
          key: "drawGrid",
          value: function drawGrid(chartArea) {
            var grid = this.options.grid;
            var ctx = this.ctx;

            var items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));

            var i, ilen;

            var drawLine = function drawLine(p1, p2, style) {
              if (!style.width || !style.color) {
                return;
              }

              ctx.save();
              ctx.lineWidth = style.width;
              ctx.strokeStyle = style.color;
              ctx.setLineDash(style.borderDash || []);
              ctx.lineDashOffset = style.borderDashOffset;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
              ctx.restore();
            };

            if (grid.display) {
              for (i = 0, ilen = items.length; i < ilen; ++i) {
                var item = items[i];

                if (grid.drawOnChartArea) {
                  drawLine({
                    x: item.x1,
                    y: item.y1
                  }, {
                    x: item.x2,
                    y: item.y2
                  }, item);
                }

                if (grid.drawTicks) {
                  drawLine({
                    x: item.tx1,
                    y: item.ty1
                  }, {
                    x: item.tx2,
                    y: item.ty2
                  }, {
                    color: item.tickColor,
                    width: item.tickWidth,
                    borderDash: item.tickBorderDash,
                    borderDashOffset: item.tickBorderDashOffset
                  });
                }
              }
            }
          }
        }, {
          key: "drawBorder",
          value: function drawBorder() {
            var chart = this.chart,
                ctx = this.ctx,
                grid = this.options.grid;
            var borderOpts = grid.setContext(this.getContext());
            var axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;

            if (!axisWidth) {
              return;
            }

            var lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
            var borderValue = this._borderValue;
            var x1, x2, y1, y2;

            if (this.isHorizontal()) {
              x1 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["V"])(chart, this.left, axisWidth) - axisWidth / 2;
              x2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["V"])(chart, this.right, lastLineWidth) + lastLineWidth / 2;
              y1 = y2 = borderValue;
            } else {
              y1 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["V"])(chart, this.top, axisWidth) - axisWidth / 2;
              y2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["V"])(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
              x1 = x2 = borderValue;
            }

            ctx.save();
            ctx.lineWidth = borderOpts.borderWidth;
            ctx.strokeStyle = borderOpts.borderColor;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.restore();
          }
        }, {
          key: "drawLabels",
          value: function drawLabels(chartArea) {
            var optionTicks = this.options.ticks;

            if (!optionTicks.display) {
              return;
            }

            var ctx = this.ctx;

            var area = this._computeLabelArea();

            if (area) {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["W"])(ctx, area);
            }

            var items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));

            var i, ilen;

            for (i = 0, ilen = items.length; i < ilen; ++i) {
              var item = items[i];
              var tickFont = item.font;
              var label = item.label;

              if (item.backdrop) {
                ctx.fillStyle = item.backdrop.color;
                ctx.fillRect(item.backdrop.left, item.backdrop.top, item.backdrop.width, item.backdrop.height);
              }

              var y = item.textOffset;
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["X"])(ctx, label, 0, y, tickFont, item);
            }

            if (area) {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Y"])(ctx);
            }
          }
        }, {
          key: "drawTitle",
          value: function drawTitle() {
            var ctx = this.ctx,
                _this$options9 = this.options,
                position = _this$options9.position,
                title = _this$options9.title,
                reverse = _this$options9.reverse;

            if (!title.display) {
              return;
            }

            var font = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(title.font);
            var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(title.padding);
            var align = title.align;
            var offset = font.lineHeight / 2;

            if (position === 'bottom' || position === 'center' || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(position)) {
              offset += padding.bottom;

              if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(title.text)) {
                offset += font.lineHeight * (title.text.length - 1);
              }
            } else {
              offset += padding.top;
            }

            var _titleArgs = titleArgs(this, offset, position, align),
                titleX = _titleArgs.titleX,
                titleY = _titleArgs.titleY,
                maxWidth = _titleArgs.maxWidth,
                rotation = _titleArgs.rotation;

            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["X"])(ctx, title.text, 0, 0, font, {
              color: title.color,
              maxWidth: maxWidth,
              rotation: rotation,
              textAlign: titleAlign(align, position, reverse),
              textBaseline: 'middle',
              translation: [titleX, titleY]
            });
          }
        }, {
          key: "draw",
          value: function draw(chartArea) {
            if (!this._isVisible()) {
              return;
            }

            this.drawBackground();
            this.drawGrid(chartArea);
            this.drawBorder();
            this.drawTitle();
            this.drawLabels(chartArea);
          }
        }, {
          key: "_layers",
          value: function _layers() {
            var _this9 = this;

            var opts = this.options;
            var tz = opts.ticks && opts.ticks.z || 0;
            var gz = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(opts.grid && opts.grid.z, -1);

            if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
              return [{
                z: tz,
                draw: function draw(chartArea) {
                  _this9.draw(chartArea);
                }
              }];
            }

            return [{
              z: gz,
              draw: function draw(chartArea) {
                _this9.drawBackground();

                _this9.drawGrid(chartArea);

                _this9.drawTitle();
              }
            }, {
              z: gz + 1,
              draw: function draw() {
                _this9.drawBorder();
              }
            }, {
              z: tz,
              draw: function draw(chartArea) {
                _this9.drawLabels(chartArea);
              }
            }];
          }
        }, {
          key: "getMatchingVisibleMetas",
          value: function getMatchingVisibleMetas(type) {
            var metas = this.chart.getSortedVisibleDatasetMetas();
            var axisID = this.axis + 'AxisID';
            var result = [];
            var i, ilen;

            for (i = 0, ilen = metas.length; i < ilen; ++i) {
              var meta = metas[i];

              if (meta[axisID] === this.id && (!type || meta.type === type)) {
                result.push(meta);
              }
            }

            return result;
          }
        }, {
          key: "_resolveTickFontOptions",
          value: function _resolveTickFontOptions(index) {
            var opts = this.options.ticks.setContext(this.getContext(index));
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(opts.font);
          }
        }, {
          key: "_maxDigits",
          value: function _maxDigits() {
            var fontSize = this._resolveTickFontOptions(0).lineHeight;

            return (this.isHorizontal() ? this.width : this.height) / fontSize;
          }
        }]);

        return Scale;
      }(Element);

      var TypedRegistry = /*#__PURE__*/function () {
        function TypedRegistry(type, scope, override) {
          _classCallCheck(this, TypedRegistry);

          this.type = type;
          this.scope = scope;
          this.override = override;
          this.items = Object.create(null);
        }

        _createClass(TypedRegistry, [{
          key: "isForType",
          value: function isForType(type) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
          }
        }, {
          key: "register",
          value: function register(item) {
            var proto = Object.getPrototypeOf(item);
            var parentScope;

            if (isIChartComponent(proto)) {
              parentScope = this.register(proto);
            }

            var items = this.items;
            var id = item.id;
            var scope = this.scope + '.' + id;

            if (!id) {
              throw new Error('class does not have id: ' + item);
            }

            if (id in items) {
              return scope;
            }

            items[id] = item;
            registerDefaults(item, scope, parentScope);

            if (this.override) {
              _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].override(item.id, item.overrides);
            }

            return scope;
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.items[id];
          }
        }, {
          key: "unregister",
          value: function unregister(item) {
            var items = this.items;
            var id = item.id;
            var scope = this.scope;

            if (id in items) {
              delete items[id];
            }

            if (scope && id in _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"][scope]) {
              delete _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"][scope][id];

              if (this.override) {
                delete _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a1"][id];
              }
            }
          }
        }]);

        return TypedRegistry;
      }();

      function registerDefaults(item, scope, parentScope) {
        var itemDefaults = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a2"])(Object.create(null), [parentScope ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].get(parentScope) : {}, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].get(scope), item.defaults]);

        _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].set(scope, itemDefaults);

        if (item.defaultRoutes) {
          routeDefaults(scope, item.defaultRoutes);
        }

        if (item.descriptors) {
          _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].describe(scope, item.descriptors);
        }
      }

      function routeDefaults(scope, routes) {
        Object.keys(routes).forEach(function (property) {
          var propertyParts = property.split('.');
          var sourceName = propertyParts.pop();
          var sourceScope = [scope].concat(propertyParts).join('.');
          var parts = routes[property].split('.');
          var targetName = parts.pop();
          var targetScope = parts.join('.');

          _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].route(sourceScope, sourceName, targetScope, targetName);
        });
      }

      function isIChartComponent(proto) {
        return 'id' in proto && 'defaults' in proto;
      }

      var Registry = /*#__PURE__*/function () {
        function Registry() {
          _classCallCheck(this, Registry);

          this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
          this.elements = new TypedRegistry(Element, 'elements');
          this.plugins = new TypedRegistry(Object, 'plugins');
          this.scales = new TypedRegistry(Scale, 'scales');
          this._typedRegistries = [this.controllers, this.scales, this.elements];
        }

        _createClass(Registry, [{
          key: "add",
          value: function add() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            this._each('register', args);
          }
        }, {
          key: "remove",
          value: function remove() {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            this._each('unregister', args);
          }
        }, {
          key: "addControllers",
          value: function addControllers() {
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            this._each('register', args, this.controllers);
          }
        }, {
          key: "addElements",
          value: function addElements() {
            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            this._each('register', args, this.elements);
          }
        }, {
          key: "addPlugins",
          value: function addPlugins() {
            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }

            this._each('register', args, this.plugins);
          }
        }, {
          key: "addScales",
          value: function addScales() {
            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              args[_key9] = arguments[_key9];
            }

            this._each('register', args, this.scales);
          }
        }, {
          key: "getController",
          value: function getController(id) {
            return this._get(id, this.controllers, 'controller');
          }
        }, {
          key: "getElement",
          value: function getElement(id) {
            return this._get(id, this.elements, 'element');
          }
        }, {
          key: "getPlugin",
          value: function getPlugin(id) {
            return this._get(id, this.plugins, 'plugin');
          }
        }, {
          key: "getScale",
          value: function getScale(id) {
            return this._get(id, this.scales, 'scale');
          }
        }, {
          key: "removeControllers",
          value: function removeControllers() {
            for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              args[_key10] = arguments[_key10];
            }

            this._each('unregister', args, this.controllers);
          }
        }, {
          key: "removeElements",
          value: function removeElements() {
            for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
              args[_key11] = arguments[_key11];
            }

            this._each('unregister', args, this.elements);
          }
        }, {
          key: "removePlugins",
          value: function removePlugins() {
            for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
              args[_key12] = arguments[_key12];
            }

            this._each('unregister', args, this.plugins);
          }
        }, {
          key: "removeScales",
          value: function removeScales() {
            for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
              args[_key13] = arguments[_key13];
            }

            this._each('unregister', args, this.scales);
          }
        }, {
          key: "_each",
          value: function _each(method, args, typedRegistry) {
            var _this10 = this;

            _toConsumableArray(args).forEach(function (arg) {
              var reg = typedRegistry || _this10._getRegistryForType(arg);

              if (typedRegistry || reg.isForType(arg) || reg === _this10.plugins && arg.id) {
                _this10._exec(method, reg, arg);
              } else {
                Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(arg, function (item) {
                  var itemReg = typedRegistry || _this10._getRegistryForType(item);

                  _this10._exec(method, itemReg, item);
                });
              }
            });
          }
        }, {
          key: "_exec",
          value: function _exec(method, registry, component) {
            var camelMethod = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a3"])(method);
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(component['before' + camelMethod], [], component);
            registry[method](component);
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(component['after' + camelMethod], [], component);
          }
        }, {
          key: "_getRegistryForType",
          value: function _getRegistryForType(type) {
            for (var i = 0; i < this._typedRegistries.length; i++) {
              var reg = this._typedRegistries[i];

              if (reg.isForType(type)) {
                return reg;
              }
            }

            return this.plugins;
          }
        }, {
          key: "_get",
          value: function _get(id, typedRegistry, type) {
            var item = typedRegistry.get(id);

            if (item === undefined) {
              throw new Error('"' + id + '" is not a registered ' + type + '.');
            }

            return item;
          }
        }]);

        return Registry;
      }();

      var registry = new Registry();

      var PluginService = /*#__PURE__*/function () {
        function PluginService() {
          _classCallCheck(this, PluginService);

          this._init = [];
        }

        _createClass(PluginService, [{
          key: "notify",
          value: function notify(chart, hook, args, filter) {
            if (hook === 'beforeInit') {
              this._init = this._createDescriptors(chart, true);

              this._notify(this._init, chart, 'install');
            }

            var descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);

            var result = this._notify(descriptors, chart, hook, args);

            if (hook === 'afterDestroy') {
              this._notify(descriptors, chart, 'stop');

              this._notify(this._init, chart, 'uninstall');
            }

            return result;
          }
        }, {
          key: "_notify",
          value: function _notify(descriptors, chart, hook, args) {
            args = args || {};

            var _iterator19 = _createForOfIteratorHelper(descriptors),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var descriptor = _step19.value;
                var plugin = descriptor.plugin;
                var method = plugin[hook];
                var params = [chart, args, descriptor.options];

                if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(method, params, plugin) === false && args.cancelable) {
                  return false;
                }
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }

            return true;
          }
        }, {
          key: "invalidate",
          value: function invalidate() {
            if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(this._cache)) {
              this._oldCache = this._cache;
              this._cache = undefined;
            }
          }
        }, {
          key: "_descriptors",
          value: function _descriptors(chart) {
            if (this._cache) {
              return this._cache;
            }

            var descriptors = this._cache = this._createDescriptors(chart);

            this._notifyStateChanges(chart);

            return descriptors;
          }
        }, {
          key: "_createDescriptors",
          value: function _createDescriptors(chart, all) {
            var config = chart && chart.config;
            var options = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(config.options && config.options.plugins, {});
            var plugins = allPlugins(config);
            return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
          }
        }, {
          key: "_notifyStateChanges",
          value: function _notifyStateChanges(chart) {
            var previousDescriptors = this._oldCache || [];
            var descriptors = this._cache;

            var diff = function diff(a, b) {
              return a.filter(function (x) {
                return !b.some(function (y) {
                  return x.plugin.id === y.plugin.id;
                });
              });
            };

            this._notify(diff(previousDescriptors, descriptors), chart, 'stop');

            this._notify(diff(descriptors, previousDescriptors), chart, 'start');
          }
        }]);

        return PluginService;
      }();

      function allPlugins(config) {
        var plugins = [];
        var keys = Object.keys(registry.plugins.items);

        for (var i = 0; i < keys.length; i++) {
          plugins.push(registry.getPlugin(keys[i]));
        }

        var local = config.plugins || [];

        for (var _i2 = 0; _i2 < local.length; _i2++) {
          var plugin = local[_i2];

          if (plugins.indexOf(plugin) === -1) {
            plugins.push(plugin);
          }
        }

        return plugins;
      }

      function getOpts(options, all) {
        if (!all && options === false) {
          return null;
        }

        if (options === true) {
          return {};
        }

        return options;
      }

      function createDescriptors(chart, plugins, options, all) {
        var result = [];
        var context = chart.getContext();

        for (var i = 0; i < plugins.length; i++) {
          var plugin = plugins[i];
          var id = plugin.id;
          var opts = getOpts(options[id], all);

          if (opts === null) {
            continue;
          }

          result.push({
            plugin: plugin,
            options: pluginOpts(chart.config, plugin, opts, context)
          });
        }

        return result;
      }

      function pluginOpts(config, plugin, opts, context) {
        var keys = config.pluginScopeKeys(plugin);
        var scopes = config.getOptionScopes(opts, keys);
        return config.createResolver(scopes, context, [''], {
          scriptable: false,
          indexable: false,
          allKeys: true
        });
      }

      function getIndexAxis(type, options) {
        var datasetDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].datasets[type] || {};
        var datasetOptions = (options.datasets || {})[type] || {};
        return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
      }

      function getAxisFromDefaultScaleID(id, indexAxis) {
        var axis = id;

        if (id === '_index_') {
          axis = indexAxis;
        } else if (id === '_value_') {
          axis = indexAxis === 'x' ? 'y' : 'x';
        }

        return axis;
      }

      function getDefaultScaleIDFromAxis(axis, indexAxis) {
        return axis === indexAxis ? '_index_' : '_value_';
      }

      function axisFromPosition(position) {
        if (position === 'top' || position === 'bottom') {
          return 'x';
        }

        if (position === 'left' || position === 'right') {
          return 'y';
        }
      }

      function determineAxis(id, scaleOptions) {
        if (id === 'x' || id === 'y') {
          return id;
        }

        return scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
      }

      function mergeScaleConfig(config, options) {
        var chartDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a1"][config.type] || {
          scales: {}
        };
        var configScales = options.scales || {};
        var chartIndexAxis = getIndexAxis(config.type, options);
        var firstIDs = Object.create(null);
        var scales = Object.create(null);
        Object.keys(configScales).forEach(function (id) {
          var scaleConf = configScales[id];

          if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(scaleConf)) {
            return console.error("Invalid scale configuration for scale: ".concat(id));
          }

          if (scaleConf._proxy) {
            return console.warn("Ignoring resolver passed as options for scale: ".concat(id));
          }

          var axis = determineAxis(id, scaleConf);
          var defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
          var defaultScaleOptions = chartDefaults.scales || {};
          firstIDs[axis] = firstIDs[axis] || id;
          scales[id] = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a9"])(Object.create(null), [{
            axis: axis
          }, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
        });
        config.data.datasets.forEach(function (dataset) {
          var type = dataset.type || config.type;
          var indexAxis = dataset.indexAxis || getIndexAxis(type, options);
          var datasetDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a1"][type] || {};
          var defaultScaleOptions = datasetDefaults.scales || {};
          Object.keys(defaultScaleOptions).forEach(function (defaultID) {
            var axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
            var id = dataset[axis + 'AxisID'] || firstIDs[axis] || axis;
            scales[id] = scales[id] || Object.create(null);
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a9"])(scales[id], [{
              axis: axis
            }, configScales[id], defaultScaleOptions[defaultID]]);
          });
        });
        Object.keys(scales).forEach(function (key) {
          var scale = scales[key];
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a9"])(scale, [_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].scales[scale.type], _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].scale]);
        });
        return scales;
      }

      function initOptions(config) {
        var options = config.options || (config.options = {});
        options.plugins = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(options.plugins, {});
        options.scales = mergeScaleConfig(config, options);
      }

      function initData(data) {
        data = data || {};
        data.datasets = data.datasets || [];
        data.labels = data.labels || [];
        return data;
      }

      function initConfig(config) {
        config = config || {};
        config.data = initData(config.data);
        initOptions(config);
        return config;
      }

      var keyCache = new Map();
      var keysCached = new Set();

      function cachedKeys(cacheKey, generate) {
        var keys = keyCache.get(cacheKey);

        if (!keys) {
          keys = generate();
          keyCache.set(cacheKey, keys);
          keysCached.add(keys);
        }

        return keys;
      }

      var addIfFound = function addIfFound(set, obj, key) {
        var opts = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["f"])(obj, key);

        if (opts !== undefined) {
          set.add(opts);
        }
      };

      var Config = /*#__PURE__*/function () {
        function Config(config) {
          _classCallCheck(this, Config);

          this._config = initConfig(config);
          this._scopeCache = new Map();
          this._resolverCache = new Map();
        }

        _createClass(Config, [{
          key: "platform",
          get: function get() {
            return this._config.platform;
          }
        }, {
          key: "type",
          get: function get() {
            return this._config.type;
          },
          set: function set(type) {
            this._config.type = type;
          }
        }, {
          key: "data",
          get: function get() {
            return this._config.data;
          },
          set: function set(data) {
            this._config.data = initData(data);
          }
        }, {
          key: "options",
          get: function get() {
            return this._config.options;
          },
          set: function set(options) {
            this._config.options = options;
          }
        }, {
          key: "plugins",
          get: function get() {
            return this._config.plugins;
          }
        }, {
          key: "update",
          value: function update() {
            var config = this._config;
            this.clearCache();
            initOptions(config);
          }
        }, {
          key: "clearCache",
          value: function clearCache() {
            this._scopeCache.clear();

            this._resolverCache.clear();
          }
        }, {
          key: "datasetScopeKeys",
          value: function datasetScopeKeys(datasetType) {
            return cachedKeys(datasetType, function () {
              return [["datasets.".concat(datasetType), '']];
            });
          }
        }, {
          key: "datasetAnimationScopeKeys",
          value: function datasetAnimationScopeKeys(datasetType, transition) {
            return cachedKeys("".concat(datasetType, ".transition.").concat(transition), function () {
              return [["datasets.".concat(datasetType, ".transitions.").concat(transition), "transitions.".concat(transition)], ["datasets.".concat(datasetType), '']];
            });
          }
        }, {
          key: "datasetElementScopeKeys",
          value: function datasetElementScopeKeys(datasetType, elementType) {
            return cachedKeys("".concat(datasetType, "-").concat(elementType), function () {
              return [["datasets.".concat(datasetType, ".elements.").concat(elementType), "datasets.".concat(datasetType), "elements.".concat(elementType), '']];
            });
          }
        }, {
          key: "pluginScopeKeys",
          value: function pluginScopeKeys(plugin) {
            var id = plugin.id;
            var type = this.type;
            return cachedKeys("".concat(type, "-plugin-").concat(id), function () {
              return [["plugins.".concat(id)].concat(_toConsumableArray(plugin.additionalOptionScopes || []))];
            });
          }
        }, {
          key: "_cachedScopes",
          value: function _cachedScopes(mainScope, resetCache) {
            var _scopeCache = this._scopeCache;

            var cache = _scopeCache.get(mainScope);

            if (!cache || resetCache) {
              cache = new Map();

              _scopeCache.set(mainScope, cache);
            }

            return cache;
          }
        }, {
          key: "getOptionScopes",
          value: function getOptionScopes(mainScope, keyLists, resetCache) {
            var options = this.options,
                type = this.type;

            var cache = this._cachedScopes(mainScope, resetCache);

            var cached = cache.get(keyLists);

            if (cached) {
              return cached;
            }

            var scopes = new Set();
            keyLists.forEach(function (keys) {
              if (mainScope) {
                scopes.add(mainScope);
                keys.forEach(function (key) {
                  return addIfFound(scopes, mainScope, key);
                });
              }

              keys.forEach(function (key) {
                return addIfFound(scopes, options, key);
              });
              keys.forEach(function (key) {
                return addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a1"][type] || {}, key);
              });
              keys.forEach(function (key) {
                return addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"], key);
              });
              keys.forEach(function (key) {
                return addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a4"], key);
              });
            });
            var array = Array.from(scopes);

            if (array.length === 0) {
              array.push(Object.create(null));
            }

            if (keysCached.has(keyLists)) {
              cache.set(keyLists, array);
            }

            return array;
          }
        }, {
          key: "chartOptionScopes",
          value: function chartOptionScopes() {
            var options = this.options,
                type = this.type;
            return [options, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a1"][type] || {}, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].datasets[type] || {}, {
              type: type
            }, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"], _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a4"]];
          }
        }, {
          key: "resolveNamedOptions",
          value: function resolveNamedOptions(scopes, names, context) {
            var prefixes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [''];
            var result = {
              $shared: true
            };

            var _getResolver = getResolver(this._resolverCache, scopes, prefixes),
                resolver = _getResolver.resolver,
                subPrefixes = _getResolver.subPrefixes;

            var options = resolver;

            if (needContext(resolver, names)) {
              result.$shared = false;
              context = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a5"])(context) ? context() : context;
              var subResolver = this.createResolver(scopes, context, subPrefixes);
              options = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a6"])(resolver, context, subResolver);
            }

            var _iterator20 = _createForOfIteratorHelper(names),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var prop = _step20.value;
                result[prop] = options[prop];
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }

            return result;
          }
        }, {
          key: "createResolver",
          value: function createResolver(scopes, context) {
            var prefixes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [''];
            var descriptorDefaults = arguments.length > 3 ? arguments[3] : undefined;

            var _getResolver2 = getResolver(this._resolverCache, scopes, prefixes),
                resolver = _getResolver2.resolver;

            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(context) ? Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a6"])(resolver, context, undefined, descriptorDefaults) : resolver;
          }
        }]);

        return Config;
      }();

      function getResolver(resolverCache, scopes, prefixes) {
        var cache = resolverCache.get(scopes);

        if (!cache) {
          cache = new Map();
          resolverCache.set(scopes, cache);
        }

        var cacheKey = prefixes.join();
        var cached = cache.get(cacheKey);

        if (!cached) {
          var resolver = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a7"])(scopes, prefixes);
          cached = {
            resolver: resolver,
            subPrefixes: prefixes.filter(function (p) {
              return !p.toLowerCase().includes('hover');
            })
          };
          cache.set(cacheKey, cached);
        }

        return cached;
      }

      var hasFunction = function hasFunction(value) {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(value) && Object.getOwnPropertyNames(value).reduce(function (acc, key) {
          return acc || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a5"])(value[key]);
        }, false);
      };

      function needContext(proxy, names) {
        var _Object3 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a8"])(proxy),
            isScriptable = _Object3.isScriptable,
            isIndexable = _Object3.isIndexable;

        var _iterator21 = _createForOfIteratorHelper(names),
            _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var prop = _step21.value;
            var scriptable = isScriptable(prop);
            var indexable = isIndexable(prop);
            var value = (indexable || scriptable) && proxy[prop];

            if (scriptable && (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a5"])(value) || hasFunction(value)) || indexable && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(value)) {
              return true;
            }
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }

        return false;
      }

      var version = "3.7.1";
      var KNOWN_POSITIONS = ['top', 'bottom', 'left', 'right', 'chartArea'];

      function positionIsHorizontal(position, axis) {
        return position === 'top' || position === 'bottom' || KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
      }

      function compare2Level(l1, l2) {
        return function (a, b) {
          return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
        };
      }

      function onAnimationsComplete(context) {
        var chart = context.chart;
        var animationOptions = chart.options.animation;
        chart.notifyPlugins('afterRender');
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(animationOptions && animationOptions.onComplete, [context], chart);
      }

      function onAnimationProgress(context) {
        var chart = context.chart;
        var animationOptions = chart.options.animation;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(animationOptions && animationOptions.onProgress, [context], chart);
      }

      function getCanvas(item) {
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["K"])() && typeof item === 'string') {
          item = document.getElementById(item);
        } else if (item && item.length) {
          item = item[0];
        }

        if (item && item.canvas) {
          item = item.canvas;
        }

        return item;
      }

      var instances = {};

      var getChart = function getChart(key) {
        var canvas = getCanvas(key);
        return Object.values(instances).filter(function (c) {
          return c.canvas === canvas;
        }).pop();
      };

      function moveNumericKeys(obj, start, move) {
        var keys = Object.keys(obj);

        for (var _i3 = 0, _keys = keys; _i3 < _keys.length; _i3++) {
          var key = _keys[_i3];
          var intKey = +key;

          if (intKey >= start) {
            var value = obj[key];
            delete obj[key];

            if (move > 0 || intKey > start) {
              obj[intKey + move] = value;
            }
          }
        }
      }

      function determineLastEvent(e, lastEvent, inChartArea, isClick) {
        if (!inChartArea || e.type === 'mouseout') {
          return null;
        }

        if (isClick) {
          return lastEvent;
        }

        return e;
      }

      var Chart = /*#__PURE__*/function () {
        function Chart(item, userConfig) {
          var _this11 = this;

          _classCallCheck(this, Chart);

          var config = this.config = new Config(userConfig);
          var initialCanvas = getCanvas(item);
          var existingChart = getChart(initialCanvas);

          if (existingChart) {
            throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas can be reused.');
          }

          var options = config.createResolver(config.chartOptionScopes(), this.getContext());
          this.platform = new (config.platform || _detectPlatform(initialCanvas))();
          this.platform.updateConfig(config);
          var context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
          var canvas = context && context.canvas;
          var height = canvas && canvas.height;
          var width = canvas && canvas.width;
          this.id = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aa"])();
          this.ctx = context;
          this.canvas = canvas;
          this.width = width;
          this.height = height;
          this._options = options;
          this._aspectRatio = this.aspectRatio;
          this._layers = [];
          this._metasets = [];
          this._stacks = undefined;
          this.boxes = [];
          this.currentDevicePixelRatio = undefined;
          this.chartArea = undefined;
          this._active = [];
          this._lastEvent = undefined;
          this._listeners = {};
          this._responsiveListeners = undefined;
          this._sortedMetasets = [];
          this.scales = {};
          this._plugins = new PluginService();
          this.$proxies = {};
          this._hiddenIndices = {};
          this.attached = false;
          this._animationsDisabled = undefined;
          this.$context = undefined;
          this._doResize = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ab"])(function (mode) {
            return _this11.update(mode);
          }, options.resizeDelay || 0);
          this._dataChanges = [];
          instances[this.id] = this;

          if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
          }

          animator.listen(this, 'complete', onAnimationsComplete);
          animator.listen(this, 'progress', onAnimationProgress);

          this._initialize();

          if (this.attached) {
            this.update();
          }
        }

        _createClass(Chart, [{
          key: "aspectRatio",
          get: function get() {
            var _this$options10 = this.options,
                aspectRatio = _this$options10.aspectRatio,
                maintainAspectRatio = _this$options10.maintainAspectRatio,
                width = this.width,
                height = this.height,
                _aspectRatio = this._aspectRatio;

            if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(aspectRatio)) {
              return aspectRatio;
            }

            if (maintainAspectRatio && _aspectRatio) {
              return _aspectRatio;
            }

            return height ? width / height : null;
          }
        }, {
          key: "data",
          get: function get() {
            return this.config.data;
          },
          set: function set(data) {
            this.config.data = data;
          }
        }, {
          key: "options",
          get: function get() {
            return this._options;
          },
          set: function set(options) {
            this.config.options = options;
          }
        }, {
          key: "_initialize",
          value: function _initialize() {
            this.notifyPlugins('beforeInit');

            if (this.options.responsive) {
              this.resize();
            } else {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ac"])(this, this.options.devicePixelRatio);
            }

            this.bindEvents();
            this.notifyPlugins('afterInit');
            return this;
          }
        }, {
          key: "clear",
          value: function clear() {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ad"])(this.canvas, this.ctx);
            return this;
          }
        }, {
          key: "stop",
          value: function stop() {
            animator.stop(this);
            return this;
          }
        }, {
          key: "resize",
          value: function resize(width, height) {
            if (!animator.running(this)) {
              this._resize(width, height);
            } else {
              this._resizeBeforeDraw = {
                width: width,
                height: height
              };
            }
          }
        }, {
          key: "_resize",
          value: function _resize(width, height) {
            var options = this.options;
            var canvas = this.canvas;
            var aspectRatio = options.maintainAspectRatio && this.aspectRatio;
            var newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
            var newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
            var mode = this.width ? 'resize' : 'attach';
            this.width = newSize.width;
            this.height = newSize.height;
            this._aspectRatio = this.aspectRatio;

            if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ac"])(this, newRatio, true)) {
              return;
            }

            this.notifyPlugins('resize', {
              size: newSize
            });
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(options.onResize, [this, newSize], this);

            if (this.attached) {
              if (this._doResize(mode)) {
                this.render();
              }
            }
          }
        }, {
          key: "ensureScalesHaveIDs",
          value: function ensureScalesHaveIDs() {
            var options = this.options;
            var scalesOptions = options.scales || {};
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(scalesOptions, function (axisOptions, axisID) {
              axisOptions.id = axisID;
            });
          }
        }, {
          key: "buildOrUpdateScales",
          value: function buildOrUpdateScales() {
            var _this12 = this;

            var options = this.options;
            var scaleOpts = options.scales;
            var scales = this.scales;
            var updated = Object.keys(scales).reduce(function (obj, id) {
              obj[id] = false;
              return obj;
            }, {});
            var items = [];

            if (scaleOpts) {
              items = items.concat(Object.keys(scaleOpts).map(function (id) {
                var scaleOptions = scaleOpts[id];
                var axis = determineAxis(id, scaleOptions);
                var isRadial = axis === 'r';
                var isHorizontal = axis === 'x';
                return {
                  options: scaleOptions,
                  dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
                  dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
                };
              }));
            }

            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(items, function (item) {
              var scaleOptions = item.options;
              var id = scaleOptions.id;
              var axis = determineAxis(id, scaleOptions);
              var scaleType = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(scaleOptions.type, item.dtype);

              if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
                scaleOptions.position = item.dposition;
              }

              updated[id] = true;
              var scale = null;

              if (id in scales && scales[id].type === scaleType) {
                scale = scales[id];
              } else {
                var scaleClass = registry.getScale(scaleType);
                scale = new scaleClass({
                  id: id,
                  type: scaleType,
                  ctx: _this12.ctx,
                  chart: _this12
                });
                scales[scale.id] = scale;
              }

              scale.init(scaleOptions, options);
            });
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(updated, function (hasUpdated, id) {
              if (!hasUpdated) {
                delete scales[id];
              }
            });
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(scales, function (scale) {
              layouts.configure(_this12, scale, scale.options);
              layouts.addBox(_this12, scale);
            });
          }
        }, {
          key: "_updateMetasets",
          value: function _updateMetasets() {
            var metasets = this._metasets;
            var numData = this.data.datasets.length;
            var numMeta = metasets.length;
            metasets.sort(function (a, b) {
              return a.index - b.index;
            });

            if (numMeta > numData) {
              for (var i = numData; i < numMeta; ++i) {
                this._destroyDatasetMeta(i);
              }

              metasets.splice(numData, numMeta - numData);
            }

            this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
          }
        }, {
          key: "_removeUnreferencedMetasets",
          value: function _removeUnreferencedMetasets() {
            var _this13 = this;

            var metasets = this._metasets,
                datasets = this.data.datasets;

            if (metasets.length > datasets.length) {
              delete this._stacks;
            }

            metasets.forEach(function (meta, index) {
              if (datasets.filter(function (x) {
                return x === meta._dataset;
              }).length === 0) {
                _this13._destroyDatasetMeta(index);
              }
            });
          }
        }, {
          key: "buildOrUpdateControllers",
          value: function buildOrUpdateControllers() {
            var newControllers = [];
            var datasets = this.data.datasets;
            var i, ilen;

            this._removeUnreferencedMetasets();

            for (i = 0, ilen = datasets.length; i < ilen; i++) {
              var dataset = datasets[i];
              var meta = this.getDatasetMeta(i);
              var type = dataset.type || this.config.type;

              if (meta.type && meta.type !== type) {
                this._destroyDatasetMeta(i);

                meta = this.getDatasetMeta(i);
              }

              meta.type = type;
              meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
              meta.order = dataset.order || 0;
              meta.index = i;
              meta.label = '' + dataset.label;
              meta.visible = this.isDatasetVisible(i);

              if (meta.controller) {
                meta.controller.updateIndex(i);
                meta.controller.linkScales();
              } else {
                var ControllerClass = registry.getController(type);
                var _chunks_helpers_segme = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].datasets[type],
                    datasetElementType = _chunks_helpers_segme.datasetElementType,
                    dataElementType = _chunks_helpers_segme.dataElementType;
                Object.assign(ControllerClass.prototype, {
                  dataElementType: registry.getElement(dataElementType),
                  datasetElementType: datasetElementType && registry.getElement(datasetElementType)
                });
                meta.controller = new ControllerClass(this, i);
                newControllers.push(meta.controller);
              }
            }

            this._updateMetasets();

            return newControllers;
          }
        }, {
          key: "_resetElements",
          value: function _resetElements() {
            var _this14 = this;

            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(this.data.datasets, function (dataset, datasetIndex) {
              _this14.getDatasetMeta(datasetIndex).controller.reset();
            }, this);
          }
        }, {
          key: "reset",
          value: function reset() {
            this._resetElements();

            this.notifyPlugins('reset');
          }
        }, {
          key: "update",
          value: function update(mode) {
            var config = this.config;
            config.update();
            var options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
            var animsDisabled = this._animationsDisabled = !options.animation;

            this._updateScales();

            this._checkEventBindings();

            this._updateHiddenIndices();

            this._plugins.invalidate();

            if (this.notifyPlugins('beforeUpdate', {
              mode: mode,
              cancelable: true
            }) === false) {
              return;
            }

            var newControllers = this.buildOrUpdateControllers();
            this.notifyPlugins('beforeElementsUpdate');
            var minPadding = 0;

            for (var i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
              var _this$getDatasetMeta = this.getDatasetMeta(i),
                  controller = _this$getDatasetMeta.controller;

              var reset = !animsDisabled && newControllers.indexOf(controller) === -1;
              controller.buildOrUpdateElements(reset);
              minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
            }

            minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;

            this._updateLayout(minPadding);

            if (!animsDisabled) {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(newControllers, function (controller) {
                controller.reset();
              });
            }

            this._updateDatasets(mode);

            this.notifyPlugins('afterUpdate', {
              mode: mode
            });

            this._layers.sort(compare2Level('z', '_idx'));

            var _active = this._active,
                _lastEvent = this._lastEvent;

            if (_lastEvent) {
              this._eventHandler(_lastEvent, true);
            } else if (_active.length) {
              this._updateHoverStyles(_active, _active, true);
            }

            this.render();
          }
        }, {
          key: "_updateScales",
          value: function _updateScales() {
            var _this15 = this;

            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(this.scales, function (scale) {
              layouts.removeBox(_this15, scale);
            });
            this.ensureScalesHaveIDs();
            this.buildOrUpdateScales();
          }
        }, {
          key: "_checkEventBindings",
          value: function _checkEventBindings() {
            var options = this.options;
            var existingEvents = new Set(Object.keys(this._listeners));
            var newEvents = new Set(options.events);

            if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ae"])(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
              this.unbindEvents();
              this.bindEvents();
            }
          }
        }, {
          key: "_updateHiddenIndices",
          value: function _updateHiddenIndices() {
            var _hiddenIndices = this._hiddenIndices;
            var changes = this._getUniformDataChanges() || [];

            var _iterator22 = _createForOfIteratorHelper(changes),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var _step22$value = _step22.value,
                    method = _step22$value.method,
                    start = _step22$value.start,
                    count = _step22$value.count;
                var move = method === '_removeElements' ? -count : count;
                moveNumericKeys(_hiddenIndices, start, move);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }
        }, {
          key: "_getUniformDataChanges",
          value: function _getUniformDataChanges() {
            var _dataChanges = this._dataChanges;

            if (!_dataChanges || !_dataChanges.length) {
              return;
            }

            this._dataChanges = [];
            var datasetCount = this.data.datasets.length;

            var makeSet = function makeSet(idx) {
              return new Set(_dataChanges.filter(function (c) {
                return c[0] === idx;
              }).map(function (c, i) {
                return i + ',' + c.splice(1).join(',');
              }));
            };

            var changeSet = makeSet(0);

            for (var i = 1; i < datasetCount; i++) {
              if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ae"])(changeSet, makeSet(i))) {
                return;
              }
            }

            return Array.from(changeSet).map(function (c) {
              return c.split(',');
            }).map(function (a) {
              return {
                method: a[1],
                start: +a[2],
                count: +a[3]
              };
            });
          }
        }, {
          key: "_updateLayout",
          value: function _updateLayout(minPadding) {
            var _this16 = this;

            if (this.notifyPlugins('beforeLayout', {
              cancelable: true
            }) === false) {
              return;
            }

            layouts.update(this, this.width, this.height, minPadding);
            var area = this.chartArea;
            var noArea = area.width <= 0 || area.height <= 0;
            this._layers = [];
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(this.boxes, function (box) {
              var _this16$_layers;

              if (noArea && box.position === 'chartArea') {
                return;
              }

              if (box.configure) {
                box.configure();
              }

              (_this16$_layers = _this16._layers).push.apply(_this16$_layers, _toConsumableArray(box._layers()));
            }, this);

            this._layers.forEach(function (item, index) {
              item._idx = index;
            });

            this.notifyPlugins('afterLayout');
          }
        }, {
          key: "_updateDatasets",
          value: function _updateDatasets(mode) {
            if (this.notifyPlugins('beforeDatasetsUpdate', {
              mode: mode,
              cancelable: true
            }) === false) {
              return;
            }

            for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
              this.getDatasetMeta(i).controller.configure();
            }

            for (var _i4 = 0, _ilen = this.data.datasets.length; _i4 < _ilen; ++_i4) {
              this._updateDataset(_i4, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a5"])(mode) ? mode({
                datasetIndex: _i4
              }) : mode);
            }

            this.notifyPlugins('afterDatasetsUpdate', {
              mode: mode
            });
          }
        }, {
          key: "_updateDataset",
          value: function _updateDataset(index, mode) {
            var meta = this.getDatasetMeta(index);
            var args = {
              meta: meta,
              index: index,
              mode: mode,
              cancelable: true
            };

            if (this.notifyPlugins('beforeDatasetUpdate', args) === false) {
              return;
            }

            meta.controller._update(mode);

            args.cancelable = false;
            this.notifyPlugins('afterDatasetUpdate', args);
          }
        }, {
          key: "render",
          value: function render() {
            if (this.notifyPlugins('beforeRender', {
              cancelable: true
            }) === false) {
              return;
            }

            if (animator.has(this)) {
              if (this.attached && !animator.running(this)) {
                animator.start(this);
              }
            } else {
              this.draw();
              onAnimationsComplete({
                chart: this
              });
            }
          }
        }, {
          key: "draw",
          value: function draw() {
            var i;

            if (this._resizeBeforeDraw) {
              var _this$_resizeBeforeDr = this._resizeBeforeDraw,
                  width = _this$_resizeBeforeDr.width,
                  height = _this$_resizeBeforeDr.height;

              this._resize(width, height);

              this._resizeBeforeDraw = null;
            }

            this.clear();

            if (this.width <= 0 || this.height <= 0) {
              return;
            }

            if (this.notifyPlugins('beforeDraw', {
              cancelable: true
            }) === false) {
              return;
            }

            var layers = this._layers;

            for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
              layers[i].draw(this.chartArea);
            }

            this._drawDatasets();

            for (; i < layers.length; ++i) {
              layers[i].draw(this.chartArea);
            }

            this.notifyPlugins('afterDraw');
          }
        }, {
          key: "_getSortedDatasetMetas",
          value: function _getSortedDatasetMetas(filterVisible) {
            var metasets = this._sortedMetasets;
            var result = [];
            var i, ilen;

            for (i = 0, ilen = metasets.length; i < ilen; ++i) {
              var meta = metasets[i];

              if (!filterVisible || meta.visible) {
                result.push(meta);
              }
            }

            return result;
          }
        }, {
          key: "getSortedVisibleDatasetMetas",
          value: function getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(true);
          }
        }, {
          key: "_drawDatasets",
          value: function _drawDatasets() {
            if (this.notifyPlugins('beforeDatasetsDraw', {
              cancelable: true
            }) === false) {
              return;
            }

            var metasets = this.getSortedVisibleDatasetMetas();

            for (var i = metasets.length - 1; i >= 0; --i) {
              this._drawDataset(metasets[i]);
            }

            this.notifyPlugins('afterDatasetsDraw');
          }
        }, {
          key: "_drawDataset",
          value: function _drawDataset(meta) {
            var ctx = this.ctx;
            var clip = meta._clip;
            var useClip = !clip.disabled;
            var area = this.chartArea;
            var args = {
              meta: meta,
              index: meta.index,
              cancelable: true
            };

            if (this.notifyPlugins('beforeDatasetDraw', args) === false) {
              return;
            }

            if (useClip) {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["W"])(ctx, {
                left: clip.left === false ? 0 : area.left - clip.left,
                right: clip.right === false ? this.width : area.right + clip.right,
                top: clip.top === false ? 0 : area.top - clip.top,
                bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
              });
            }

            meta.controller.draw();

            if (useClip) {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Y"])(ctx);
            }

            args.cancelable = false;
            this.notifyPlugins('afterDatasetDraw', args);
          }
        }, {
          key: "getElementsAtEventForMode",
          value: function getElementsAtEventForMode(e, mode, options, useFinalPosition) {
            var method = Interaction.modes[mode];

            if (typeof method === 'function') {
              return method(this, e, options, useFinalPosition);
            }

            return [];
          }
        }, {
          key: "getDatasetMeta",
          value: function getDatasetMeta(datasetIndex) {
            var dataset = this.data.datasets[datasetIndex];
            var metasets = this._metasets;
            var meta = metasets.filter(function (x) {
              return x && x._dataset === dataset;
            }).pop();

            if (!meta) {
              meta = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: dataset && dataset.order || 0,
                index: datasetIndex,
                _dataset: dataset,
                _parsed: [],
                _sorted: false
              };
              metasets.push(meta);
            }

            return meta;
          }
        }, {
          key: "getContext",
          value: function getContext() {
            return this.$context || (this.$context = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["h"])(null, {
              chart: this,
              type: 'chart'
            }));
          }
        }, {
          key: "getVisibleDatasetCount",
          value: function getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
          }
        }, {
          key: "isDatasetVisible",
          value: function isDatasetVisible(datasetIndex) {
            var dataset = this.data.datasets[datasetIndex];

            if (!dataset) {
              return false;
            }

            var meta = this.getDatasetMeta(datasetIndex);
            return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
          }
        }, {
          key: "setDatasetVisibility",
          value: function setDatasetVisibility(datasetIndex, visible) {
            var meta = this.getDatasetMeta(datasetIndex);
            meta.hidden = !visible;
          }
        }, {
          key: "toggleDataVisibility",
          value: function toggleDataVisibility(index) {
            this._hiddenIndices[index] = !this._hiddenIndices[index];
          }
        }, {
          key: "getDataVisibility",
          value: function getDataVisibility(index) {
            return !this._hiddenIndices[index];
          }
        }, {
          key: "_updateVisibility",
          value: function _updateVisibility(datasetIndex, dataIndex, visible) {
            var mode = visible ? 'show' : 'hide';
            var meta = this.getDatasetMeta(datasetIndex);

            var anims = meta.controller._resolveAnimations(undefined, mode);

            if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["j"])(dataIndex)) {
              meta.data[dataIndex].hidden = !visible;
              this.update();
            } else {
              this.setDatasetVisibility(datasetIndex, visible);
              anims.update(meta, {
                visible: visible
              });
              this.update(function (ctx) {
                return ctx.datasetIndex === datasetIndex ? mode : undefined;
              });
            }
          }
        }, {
          key: "hide",
          value: function hide(datasetIndex, dataIndex) {
            this._updateVisibility(datasetIndex, dataIndex, false);
          }
        }, {
          key: "show",
          value: function show(datasetIndex, dataIndex) {
            this._updateVisibility(datasetIndex, dataIndex, true);
          }
        }, {
          key: "_destroyDatasetMeta",
          value: function _destroyDatasetMeta(datasetIndex) {
            var meta = this._metasets[datasetIndex];

            if (meta && meta.controller) {
              meta.controller._destroy();
            }

            delete this._metasets[datasetIndex];
          }
        }, {
          key: "_stop",
          value: function _stop() {
            var i, ilen;
            this.stop();
            animator.remove(this);

            for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
              this._destroyDatasetMeta(i);
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.notifyPlugins('beforeDestroy');
            var canvas = this.canvas,
                ctx = this.ctx;

            this._stop();

            this.config.clearCache();

            if (canvas) {
              this.unbindEvents();
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ad"])(canvas, ctx);
              this.platform.releaseContext(ctx);
              this.canvas = null;
              this.ctx = null;
            }

            this.notifyPlugins('destroy');
            delete instances[this.id];
            this.notifyPlugins('afterDestroy');
          }
        }, {
          key: "toBase64Image",
          value: function toBase64Image() {
            var _this$canvas;

            return (_this$canvas = this.canvas).toDataURL.apply(_this$canvas, arguments);
          }
        }, {
          key: "bindEvents",
          value: function bindEvents() {
            this.bindUserEvents();

            if (this.options.responsive) {
              this.bindResponsiveEvents();
            } else {
              this.attached = true;
            }
          }
        }, {
          key: "bindUserEvents",
          value: function bindUserEvents() {
            var _this17 = this;

            var listeners = this._listeners;
            var platform = this.platform;

            var _add = function _add(type, listener) {
              platform.addEventListener(_this17, type, listener);
              listeners[type] = listener;
            };

            var listener = function listener(e, x, y) {
              e.offsetX = x;
              e.offsetY = y;

              _this17._eventHandler(e);
            };

            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(this.options.events, function (type) {
              return _add(type, listener);
            });
          }
        }, {
          key: "bindResponsiveEvents",
          value: function bindResponsiveEvents() {
            var _this18 = this;

            if (!this._responsiveListeners) {
              this._responsiveListeners = {};
            }

            var listeners = this._responsiveListeners;
            var platform = this.platform;

            var _add = function _add(type, listener) {
              platform.addEventListener(_this18, type, listener);
              listeners[type] = listener;
            };

            var _remove = function _remove(type, listener) {
              if (listeners[type]) {
                platform.removeEventListener(_this18, type, listener);
                delete listeners[type];
              }
            };

            var listener = function listener(width, height) {
              if (_this18.canvas) {
                _this18.resize(width, height);
              }
            };

            var detached;

            var attached = function attached() {
              _remove('attach', attached);

              _this18.attached = true;

              _this18.resize();

              _add('resize', listener);

              _add('detach', detached);
            };

            detached = function detached() {
              _this18.attached = false;

              _remove('resize', listener);

              _this18._stop();

              _this18._resize(0, 0);

              _add('attach', attached);
            };

            if (platform.isAttached(this.canvas)) {
              attached();
            } else {
              detached();
            }
          }
        }, {
          key: "unbindEvents",
          value: function unbindEvents() {
            var _this19 = this;

            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(this._listeners, function (listener, type) {
              _this19.platform.removeEventListener(_this19, type, listener);
            });
            this._listeners = {};
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(this._responsiveListeners, function (listener, type) {
              _this19.platform.removeEventListener(_this19, type, listener);
            });
            this._responsiveListeners = undefined;
          }
        }, {
          key: "updateHoverStyle",
          value: function updateHoverStyle(items, mode, enabled) {
            var prefix = enabled ? 'set' : 'remove';
            var meta, item, i, ilen;

            if (mode === 'dataset') {
              meta = this.getDatasetMeta(items[0].datasetIndex);
              meta.controller['_' + prefix + 'DatasetHoverStyle']();
            }

            for (i = 0, ilen = items.length; i < ilen; ++i) {
              item = items[i];
              var controller = item && this.getDatasetMeta(item.datasetIndex).controller;

              if (controller) {
                controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
              }
            }
          }
        }, {
          key: "getActiveElements",
          value: function getActiveElements() {
            return this._active || [];
          }
        }, {
          key: "setActiveElements",
          value: function setActiveElements(activeElements) {
            var _this20 = this;

            var lastActive = this._active || [];
            var active = activeElements.map(function (_ref3) {
              var datasetIndex = _ref3.datasetIndex,
                  index = _ref3.index;

              var meta = _this20.getDatasetMeta(datasetIndex);

              if (!meta) {
                throw new Error('No dataset found at index ' + datasetIndex);
              }

              return {
                datasetIndex: datasetIndex,
                element: meta.data[index],
                index: index
              };
            });
            var changed = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["af"])(active, lastActive);

            if (changed) {
              this._active = active;
              this._lastEvent = null;

              this._updateHoverStyles(active, lastActive);
            }
          }
        }, {
          key: "notifyPlugins",
          value: function notifyPlugins(hook, args, filter) {
            return this._plugins.notify(this, hook, args, filter);
          }
        }, {
          key: "_updateHoverStyles",
          value: function _updateHoverStyles(active, lastActive, replay) {
            var hoverOptions = this.options.hover;

            var diff = function diff(a, b) {
              return a.filter(function (x) {
                return !b.some(function (y) {
                  return x.datasetIndex === y.datasetIndex && x.index === y.index;
                });
              });
            };

            var deactivated = diff(lastActive, active);
            var activated = replay ? active : diff(active, lastActive);

            if (deactivated.length) {
              this.updateHoverStyle(deactivated, hoverOptions.mode, false);
            }

            if (activated.length && hoverOptions.mode) {
              this.updateHoverStyle(activated, hoverOptions.mode, true);
            }
          }
        }, {
          key: "_eventHandler",
          value: function _eventHandler(e, replay) {
            var _this21 = this;

            var args = {
              event: e,
              replay: replay,
              cancelable: true,
              inChartArea: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["z"])(e, this.chartArea, this._minPadding)
            };

            var eventFilter = function eventFilter(plugin) {
              return (plugin.options.events || _this21.options.events).includes(e["native"].type);
            };

            if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) {
              return;
            }

            var changed = this._handleEvent(e, replay, args.inChartArea);

            args.cancelable = false;
            this.notifyPlugins('afterEvent', args, eventFilter);

            if (changed || args.changed) {
              this.render();
            }

            return this;
          }
        }, {
          key: "_handleEvent",
          value: function _handleEvent(e, replay, inChartArea) {
            var _this$_active = this._active,
                lastActive = _this$_active === void 0 ? [] : _this$_active,
                options = this.options;
            var useFinalPosition = replay;

            var active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);

            var isClick = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ag"])(e);
            var lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);

            if (inChartArea) {
              this._lastEvent = null;
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(options.onHover, [e, active, this], this);

              if (isClick) {
                Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(options.onClick, [e, active, this], this);
              }
            }

            var changed = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["af"])(active, lastActive);

            if (changed || replay) {
              this._active = active;

              this._updateHoverStyles(active, lastActive, replay);
            }

            this._lastEvent = lastEvent;
            return changed;
          }
        }, {
          key: "_getActiveElements",
          value: function _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
            if (e.type === 'mouseout') {
              return [];
            }

            if (!inChartArea) {
              return lastActive;
            }

            var hoverOptions = this.options.hover;
            return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
          }
        }]);

        return Chart;
      }();

      var invalidatePlugins = function invalidatePlugins() {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(Chart.instances, function (chart) {
          return chart._plugins.invalidate();
        });
      };

      var enumerable = true;
      Object.defineProperties(Chart, {
        defaults: {
          enumerable: enumerable,
          value: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"]
        },
        instances: {
          enumerable: enumerable,
          value: instances
        },
        overrides: {
          enumerable: enumerable,
          value: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a1"]
        },
        registry: {
          enumerable: enumerable,
          value: registry
        },
        version: {
          enumerable: enumerable,
          value: version
        },
        getChart: {
          enumerable: enumerable,
          value: getChart
        },
        register: {
          enumerable: enumerable,
          value: function value() {
            registry.add.apply(registry, arguments);
            invalidatePlugins();
          }
        },
        unregister: {
          enumerable: enumerable,
          value: function value() {
            registry.remove.apply(registry, arguments);
            invalidatePlugins();
          }
        }
      });

      function clipArc(ctx, element, endAngle) {
        var startAngle = element.startAngle,
            pixelMargin = element.pixelMargin,
            x = element.x,
            y = element.y,
            outerRadius = element.outerRadius,
            innerRadius = element.innerRadius;
        var angleMargin = pixelMargin / outerRadius;
        ctx.beginPath();
        ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);

        if (innerRadius > pixelMargin) {
          angleMargin = pixelMargin / innerRadius;
          ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
        } else {
          ctx.arc(x, y, pixelMargin, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"], startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"]);
        }

        ctx.closePath();
        ctx.clip();
      }

      function toRadiusCorners(value) {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ai"])(value, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
      }

      function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
        var o = toRadiusCorners(arc.options.borderRadius);
        var halfThickness = (outerRadius - innerRadius) / 2;
        var innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);

        var computeOuterLimit = function computeOuterLimit(val) {
          var outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
          return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(val, 0, Math.min(halfThickness, outerArcLimit));
        };

        return {
          outerStart: computeOuterLimit(o.outerStart),
          outerEnd: computeOuterLimit(o.outerEnd),
          innerStart: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(o.innerStart, 0, innerLimit),
          innerEnd: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(o.innerEnd, 0, innerLimit)
        };
      }

      function rThetaToXY(r, theta, x, y) {
        return {
          x: x + r * Math.cos(theta),
          y: y + r * Math.sin(theta)
        };
      }

      function pathArc(ctx, element, offset, spacing, end) {
        var x = element.x,
            y = element.y,
            start = element.startAngle,
            pixelMargin = element.pixelMargin,
            innerR = element.innerRadius;
        var outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
        var innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
        var spacingOffset = 0;
        var alpha = end - start;

        if (spacing) {
          var noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
          var noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
          var avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
          var adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
          spacingOffset = (alpha - adjustedAngle) / 2;
        }

        var beta = Math.max(0.001, alpha * outerRadius - offset / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["P"]) / outerRadius;
        var angleOffset = (alpha - beta) / 2;
        var startAngle = start + angleOffset + spacingOffset;
        var endAngle = end - angleOffset - spacingOffset;

        var _parseBorderRadius$ = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle),
            outerStart = _parseBorderRadius$.outerStart,
            outerEnd = _parseBorderRadius$.outerEnd,
            innerStart = _parseBorderRadius$.innerStart,
            innerEnd = _parseBorderRadius$.innerEnd;

        var outerStartAdjustedRadius = outerRadius - outerStart;
        var outerEndAdjustedRadius = outerRadius - outerEnd;
        var outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
        var outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
        var innerStartAdjustedRadius = innerRadius + innerStart;
        var innerEndAdjustedRadius = innerRadius + innerEnd;
        var innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
        var innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
        ctx.beginPath();
        ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerEndAdjustedAngle);

        if (outerEnd > 0) {
          var pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
          ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"]);
        }

        var p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
        ctx.lineTo(p4.x, p4.y);

        if (innerEnd > 0) {
          var _pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);

          ctx.arc(_pCenter.x, _pCenter.y, innerEnd, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"], innerEndAdjustedAngle + Math.PI);
        }

        ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, startAngle + innerStart / innerRadius, true);

        if (innerStart > 0) {
          var _pCenter2 = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);

          ctx.arc(_pCenter2.x, _pCenter2.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"]);
        }

        var p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
        ctx.lineTo(p8.x, p8.y);

        if (outerStart > 0) {
          var _pCenter3 = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);

          ctx.arc(_pCenter3.x, _pCenter3.y, outerStart, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"], outerStartAdjustedAngle);
        }

        ctx.closePath();
      }

      function drawArc(ctx, element, offset, spacing) {
        var fullCircles = element.fullCircles,
            startAngle = element.startAngle,
            circumference = element.circumference;
        var endAngle = element.endAngle;

        if (fullCircles) {
          pathArc(ctx, element, offset, spacing, startAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"]);

          for (var i = 0; i < fullCircles; ++i) {
            ctx.fill();
          }

          if (!isNaN(circumference)) {
            endAngle = startAngle + circumference % _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"];

            if (circumference % _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"] === 0) {
              endAngle += _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"];
            }
          }
        }

        pathArc(ctx, element, offset, spacing, endAngle);
        ctx.fill();
        return endAngle;
      }

      function drawFullCircleBorders(ctx, element, inner) {
        var x = element.x,
            y = element.y,
            startAngle = element.startAngle,
            pixelMargin = element.pixelMargin,
            fullCircles = element.fullCircles;
        var outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
        var innerRadius = element.innerRadius + pixelMargin;
        var i;

        if (inner) {
          clipArc(ctx, element, startAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"]);
        }

        ctx.beginPath();
        ctx.arc(x, y, innerRadius, startAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"], startAngle, true);

        for (i = 0; i < fullCircles; ++i) {
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(x, y, outerRadius, startAngle, startAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"]);

        for (i = 0; i < fullCircles; ++i) {
          ctx.stroke();
        }
      }

      function drawBorder(ctx, element, offset, spacing, endAngle) {
        var options = element.options;
        var borderWidth = options.borderWidth,
            borderJoinStyle = options.borderJoinStyle;
        var inner = options.borderAlign === 'inner';

        if (!borderWidth) {
          return;
        }

        if (inner) {
          ctx.lineWidth = borderWidth * 2;
          ctx.lineJoin = borderJoinStyle || 'round';
        } else {
          ctx.lineWidth = borderWidth;
          ctx.lineJoin = borderJoinStyle || 'bevel';
        }

        if (element.fullCircles) {
          drawFullCircleBorders(ctx, element, inner);
        }

        if (inner) {
          clipArc(ctx, element, endAngle);
        }

        pathArc(ctx, element, offset, spacing, endAngle);
        ctx.stroke();
      }

      var ArcElement = /*#__PURE__*/function (_Element2) {
        _inherits(ArcElement, _Element2);

        var _super12 = _createSuper(ArcElement);

        function ArcElement(cfg) {
          var _this22;

          _classCallCheck(this, ArcElement);

          _this22 = _super12.call(this);
          _this22.options = undefined;
          _this22.circumference = undefined;
          _this22.startAngle = undefined;
          _this22.endAngle = undefined;
          _this22.innerRadius = undefined;
          _this22.outerRadius = undefined;
          _this22.pixelMargin = 0;
          _this22.fullCircles = 0;

          if (cfg) {
            Object.assign(_assertThisInitialized(_this22), cfg);
          }

          return _this22;
        }

        _createClass(ArcElement, [{
          key: "inRange",
          value: function inRange(chartX, chartY, useFinalPosition) {
            var point = this.getProps(['x', 'y'], useFinalPosition);

            var _Object4 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["B"])(point, {
              x: chartX,
              y: chartY
            }),
                angle = _Object4.angle,
                distance = _Object4.distance;

            var _this$getProps2 = this.getProps(['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], useFinalPosition),
                startAngle = _this$getProps2.startAngle,
                endAngle = _this$getProps2.endAngle,
                innerRadius = _this$getProps2.innerRadius,
                outerRadius = _this$getProps2.outerRadius,
                circumference = _this$getProps2.circumference;

            var rAdjust = this.options.spacing / 2;

            var _circumference = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(circumference, endAngle - startAngle);

            var betweenAngles = _circumference >= _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"] || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["p"])(angle, startAngle, endAngle);
            var withinRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ah"])(distance, innerRadius + rAdjust, outerRadius + rAdjust);
            return betweenAngles && withinRadius;
          }
        }, {
          key: "getCenterPoint",
          value: function getCenterPoint(useFinalPosition) {
            var _this$getProps3 = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], useFinalPosition),
                x = _this$getProps3.x,
                y = _this$getProps3.y,
                startAngle = _this$getProps3.startAngle,
                endAngle = _this$getProps3.endAngle,
                innerRadius = _this$getProps3.innerRadius,
                outerRadius = _this$getProps3.outerRadius;

            var _this$options11 = this.options,
                offset = _this$options11.offset,
                spacing = _this$options11.spacing;
            var halfAngle = (startAngle + endAngle) / 2;
            var halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
            return {
              x: x + Math.cos(halfAngle) * halfRadius,
              y: y + Math.sin(halfAngle) * halfRadius
            };
          }
        }, {
          key: "tooltipPosition",
          value: function tooltipPosition(useFinalPosition) {
            return this.getCenterPoint(useFinalPosition);
          }
        }, {
          key: "draw",
          value: function draw(ctx) {
            var options = this.options,
                circumference = this.circumference;
            var offset = (options.offset || 0) / 2;
            var spacing = (options.spacing || 0) / 2;
            this.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
            this.fullCircles = circumference > _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"] ? Math.floor(circumference / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"]) : 0;

            if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
              return;
            }

            ctx.save();
            var radiusOffset = 0;

            if (offset) {
              radiusOffset = offset / 2;
              var halfAngle = (this.startAngle + this.endAngle) / 2;
              ctx.translate(Math.cos(halfAngle) * radiusOffset, Math.sin(halfAngle) * radiusOffset);

              if (this.circumference >= _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["P"]) {
                radiusOffset = offset;
              }
            }

            ctx.fillStyle = options.backgroundColor;
            ctx.strokeStyle = options.borderColor;
            var endAngle = drawArc(ctx, this, radiusOffset, spacing);
            drawBorder(ctx, this, radiusOffset, spacing, endAngle);
            ctx.restore();
          }
        }]);

        return ArcElement;
      }(Element);

      ArcElement.id = 'arc';
      ArcElement.defaults = {
        borderAlign: 'center',
        borderColor: '#fff',
        borderJoinStyle: undefined,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: undefined
      };
      ArcElement.defaultRoutes = {
        backgroundColor: 'backgroundColor'
      };

      function setStyle(ctx, options) {
        var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : options;
        ctx.lineCap = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(style.borderCapStyle, options.borderCapStyle);
        ctx.setLineDash(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(style.borderDash, options.borderDash));
        ctx.lineDashOffset = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(style.borderDashOffset, options.borderDashOffset);
        ctx.lineJoin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(style.borderJoinStyle, options.borderJoinStyle);
        ctx.lineWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(style.borderWidth, options.borderWidth);
        ctx.strokeStyle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(style.borderColor, options.borderColor);
      }

      function lineTo(ctx, previous, target) {
        ctx.lineTo(target.x, target.y);
      }

      function getLineMethod(options) {
        if (options.stepped) {
          return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ap"];
        }

        if (options.tension || options.cubicInterpolationMode === 'monotone') {
          return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aq"];
        }

        return lineTo;
      }

      function pathVars(points, segment) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var count = points.length;
        var _params$start = params.start,
            paramsStart = _params$start === void 0 ? 0 : _params$start,
            _params$end = params.end,
            paramsEnd = _params$end === void 0 ? count - 1 : _params$end;
        var segmentStart = segment.start,
            segmentEnd = segment.end;
        var start = Math.max(paramsStart, segmentStart);
        var end = Math.min(paramsEnd, segmentEnd);
        var outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
        return {
          count: count,
          start: start,
          loop: segment.loop,
          ilen: end < start && !outside ? count + end - start : end - start
        };
      }

      function pathSegment(ctx, line, segment, params) {
        var points = line.points,
            options = line.options;

        var _pathVars = pathVars(points, segment, params),
            count = _pathVars.count,
            start = _pathVars.start,
            loop = _pathVars.loop,
            ilen = _pathVars.ilen;

        var lineMethod = getLineMethod(options);

        var _ref4 = params || {},
            _ref4$move = _ref4.move,
            move = _ref4$move === void 0 ? true : _ref4$move,
            reverse = _ref4.reverse;

        var i, point, prev;

        for (i = 0; i <= ilen; ++i) {
          point = points[(start + (reverse ? ilen - i : i)) % count];

          if (point.skip) {
            continue;
          } else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
          } else {
            lineMethod(ctx, prev, point, reverse, options.stepped);
          }

          prev = point;
        }

        if (loop) {
          point = points[(start + (reverse ? ilen : 0)) % count];
          lineMethod(ctx, prev, point, reverse, options.stepped);
        }

        return !!loop;
      }

      function fastPathSegment(ctx, line, segment, params) {
        var points = line.points;

        var _pathVars2 = pathVars(points, segment, params),
            count = _pathVars2.count,
            start = _pathVars2.start,
            ilen = _pathVars2.ilen;

        var _ref5 = params || {},
            _ref5$move = _ref5.move,
            move = _ref5$move === void 0 ? true : _ref5$move,
            reverse = _ref5.reverse;

        var avgX = 0;
        var countX = 0;
        var i, point, prevX, minY, maxY, lastY;

        var pointIndex = function pointIndex(index) {
          return (start + (reverse ? ilen - index : index)) % count;
        };

        var drawX = function drawX() {
          if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
          }
        };

        if (move) {
          point = points[pointIndex(0)];
          ctx.moveTo(point.x, point.y);
        }

        for (i = 0; i <= ilen; ++i) {
          point = points[pointIndex(i)];

          if (point.skip) {
            continue;
          }

          var x = point.x;
          var y = point.y;
          var truncX = x | 0;

          if (truncX === prevX) {
            if (y < minY) {
              minY = y;
            } else if (y > maxY) {
              maxY = y;
            }

            avgX = (countX * avgX + x) / ++countX;
          } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
          }

          lastY = y;
        }

        drawX();
      }

      function _getSegmentMethod(line) {
        var opts = line.options;
        var borderDash = opts.borderDash && opts.borderDash.length;
        var useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
        return useFastPath ? fastPathSegment : pathSegment;
      }

      function _getInterpolationMethod(options) {
        if (options.stepped) {
          return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["am"];
        }

        if (options.tension || options.cubicInterpolationMode === 'monotone') {
          return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["an"];
        }

        return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ao"];
      }

      function strokePathWithCache(ctx, line, start, count) {
        var path = line._path;

        if (!path) {
          path = line._path = new Path2D();

          if (line.path(path, start, count)) {
            path.closePath();
          }
        }

        setStyle(ctx, line.options);
        ctx.stroke(path);
      }

      function strokePathDirect(ctx, line, start, count) {
        var segments = line.segments,
            options = line.options;

        var segmentMethod = _getSegmentMethod(line);

        var _iterator23 = _createForOfIteratorHelper(segments),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var segment = _step23.value;
            setStyle(ctx, options, segment.style);
            ctx.beginPath();

            if (segmentMethod(ctx, line, segment, {
              start: start,
              end: start + count - 1
            })) {
              ctx.closePath();
            }

            ctx.stroke();
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }

      var usePath2D = typeof Path2D === 'function';

      function _draw(ctx, line, start, count) {
        if (usePath2D && !line.options.segment) {
          strokePathWithCache(ctx, line, start, count);
        } else {
          strokePathDirect(ctx, line, start, count);
        }
      }

      var LineElement = /*#__PURE__*/function (_Element3) {
        _inherits(LineElement, _Element3);

        var _super13 = _createSuper(LineElement);

        function LineElement(cfg) {
          var _this23;

          _classCallCheck(this, LineElement);

          _this23 = _super13.call(this);
          _this23.animated = true;
          _this23.options = undefined;
          _this23._chart = undefined;
          _this23._loop = undefined;
          _this23._fullLoop = undefined;
          _this23._path = undefined;
          _this23._points = undefined;
          _this23._segments = undefined;
          _this23._decimated = false;
          _this23._pointsUpdated = false;
          _this23._datasetIndex = undefined;

          if (cfg) {
            Object.assign(_assertThisInitialized(_this23), cfg);
          }

          return _this23;
        }

        _createClass(LineElement, [{
          key: "updateControlPoints",
          value: function updateControlPoints(chartArea, indexAxis) {
            var options = this.options;

            if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
              var loop = options.spanGaps ? this._loop : this._fullLoop;
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aj"])(this._points, options, chartArea, loop, indexAxis);
              this._pointsUpdated = true;
            }
          }
        }, {
          key: "points",
          get: function get() {
            return this._points;
          },
          set: function set(points) {
            this._points = points;
            delete this._segments;
            delete this._path;
            this._pointsUpdated = false;
          }
        }, {
          key: "segments",
          get: function get() {
            return this._segments || (this._segments = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ak"])(this, this.options.segment));
          }
        }, {
          key: "first",
          value: function first() {
            var segments = this.segments;
            var points = this.points;
            return segments.length && points[segments[0].start];
          }
        }, {
          key: "last",
          value: function last() {
            var segments = this.segments;
            var points = this.points;
            var count = segments.length;
            return count && points[segments[count - 1].end];
          }
        }, {
          key: "interpolate",
          value: function interpolate(point, property) {
            var options = this.options;
            var value = point[property];
            var points = this.points;
            var segments = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["al"])(this, {
              property: property,
              start: value,
              end: value
            });

            if (!segments.length) {
              return;
            }

            var result = [];

            var _interpolate = _getInterpolationMethod(options);

            var i, ilen;

            for (i = 0, ilen = segments.length; i < ilen; ++i) {
              var _segments$i = segments[i],
                  start = _segments$i.start,
                  end = _segments$i.end;
              var p1 = points[start];
              var p2 = points[end];

              if (p1 === p2) {
                result.push(p1);
                continue;
              }

              var t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));

              var interpolated = _interpolate(p1, p2, t, options.stepped);

              interpolated[property] = point[property];
              result.push(interpolated);
            }

            return result.length === 1 ? result[0] : result;
          }
        }, {
          key: "pathSegment",
          value: function pathSegment(ctx, segment, params) {
            var segmentMethod = _getSegmentMethod(this);

            return segmentMethod(ctx, this, segment, params);
          }
        }, {
          key: "path",
          value: function path(ctx, start, count) {
            var segments = this.segments;

            var segmentMethod = _getSegmentMethod(this);

            var loop = this._loop;
            start = start || 0;
            count = count || this.points.length - start;

            var _iterator24 = _createForOfIteratorHelper(segments),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var segment = _step24.value;
                loop &= segmentMethod(ctx, this, segment, {
                  start: start,
                  end: start + count - 1
                });
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            return !!loop;
          }
        }, {
          key: "draw",
          value: function draw(ctx, chartArea, start, count) {
            var options = this.options || {};
            var points = this.points || [];

            if (points.length && options.borderWidth) {
              ctx.save();

              _draw(ctx, this, start, count);

              ctx.restore();
            }

            if (this.animated) {
              this._pointsUpdated = false;
              this._path = undefined;
            }
          }
        }]);

        return LineElement;
      }(Element);

      LineElement.id = 'line';
      LineElement.defaults = {
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        borderWidth: 3,
        capBezierPoints: true,
        cubicInterpolationMode: 'default',
        fill: false,
        spanGaps: false,
        stepped: false,
        tension: 0
      };
      LineElement.defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
      };
      LineElement.descriptors = {
        _scriptable: true,
        _indexable: function _indexable(name) {
          return name !== 'borderDash' && name !== 'fill';
        }
      };

      function inRange$1(el, pos, axis, useFinalPosition) {
        var options = el.options;

        var _el$getProps = el.getProps([axis], useFinalPosition),
            value = _el$getProps[axis];

        return Math.abs(pos - value) < options.radius + options.hitRadius;
      }

      var PointElement = /*#__PURE__*/function (_Element4) {
        _inherits(PointElement, _Element4);

        var _super14 = _createSuper(PointElement);

        function PointElement(cfg) {
          var _this24;

          _classCallCheck(this, PointElement);

          _this24 = _super14.call(this);
          _this24.options = undefined;
          _this24.parsed = undefined;
          _this24.skip = undefined;
          _this24.stop = undefined;

          if (cfg) {
            Object.assign(_assertThisInitialized(_this24), cfg);
          }

          return _this24;
        }

        _createClass(PointElement, [{
          key: "inRange",
          value: function inRange(mouseX, mouseY, useFinalPosition) {
            var options = this.options;

            var _this$getProps4 = this.getProps(['x', 'y'], useFinalPosition),
                x = _this$getProps4.x,
                y = _this$getProps4.y;

            return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
          }
        }, {
          key: "inXRange",
          value: function inXRange(mouseX, useFinalPosition) {
            return inRange$1(this, mouseX, 'x', useFinalPosition);
          }
        }, {
          key: "inYRange",
          value: function inYRange(mouseY, useFinalPosition) {
            return inRange$1(this, mouseY, 'y', useFinalPosition);
          }
        }, {
          key: "getCenterPoint",
          value: function getCenterPoint(useFinalPosition) {
            var _this$getProps5 = this.getProps(['x', 'y'], useFinalPosition),
                x = _this$getProps5.x,
                y = _this$getProps5.y;

            return {
              x: x,
              y: y
            };
          }
        }, {
          key: "size",
          value: function size(options) {
            options = options || this.options || {};
            var radius = options.radius || 0;
            radius = Math.max(radius, radius && options.hoverRadius || 0);
            var borderWidth = radius && options.borderWidth || 0;
            return (radius + borderWidth) * 2;
          }
        }, {
          key: "draw",
          value: function draw(ctx, area) {
            var options = this.options;

            if (this.skip || options.radius < 0.1 || !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["z"])(this, area, this.size(options) / 2)) {
              return;
            }

            ctx.strokeStyle = options.borderColor;
            ctx.lineWidth = options.borderWidth;
            ctx.fillStyle = options.backgroundColor;
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ar"])(ctx, options, this.x, this.y);
          }
        }, {
          key: "getRange",
          value: function getRange() {
            var options = this.options || {};
            return options.radius + options.hitRadius;
          }
        }]);

        return PointElement;
      }(Element);

      PointElement.id = 'point';
      PointElement.defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0
      };
      PointElement.defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
      };

      function getBarBounds(bar, useFinalPosition) {
        var _bar$getProps = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition),
            x = _bar$getProps.x,
            y = _bar$getProps.y,
            base = _bar$getProps.base,
            width = _bar$getProps.width,
            height = _bar$getProps.height;

        var left, right, top, bottom, half;

        if (bar.horizontal) {
          half = height / 2;
          left = Math.min(x, base);
          right = Math.max(x, base);
          top = y - half;
          bottom = y + half;
        } else {
          half = width / 2;
          left = x - half;
          right = x + half;
          top = Math.min(y, base);
          bottom = Math.max(y, base);
        }

        return {
          left: left,
          top: top,
          right: right,
          bottom: bottom
        };
      }

      function skipOrLimit(skip, value, min, max) {
        return skip ? 0 : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(value, min, max);
      }

      function parseBorderWidth(bar, maxW, maxH) {
        var value = bar.options.borderWidth;
        var skip = bar.borderSkipped;
        var o = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["at"])(value);
        return {
          t: skipOrLimit(skip.top, o.top, 0, maxH),
          r: skipOrLimit(skip.right, o.right, 0, maxW),
          b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
          l: skipOrLimit(skip.left, o.left, 0, maxW)
        };
      }

      function parseBorderRadius(bar, maxW, maxH) {
        var _bar$getProps2 = bar.getProps(['enableBorderRadius']),
            enableBorderRadius = _bar$getProps2.enableBorderRadius;

        var value = bar.options.borderRadius;
        var o = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["au"])(value);
        var maxR = Math.min(maxW, maxH);
        var skip = bar.borderSkipped;
        var enableBorder = enableBorderRadius || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(value);
        return {
          topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
          topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
          bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
          bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
        };
      }

      function boundingRects(bar) {
        var bounds = getBarBounds(bar);
        var width = bounds.right - bounds.left;
        var height = bounds.bottom - bounds.top;
        var border = parseBorderWidth(bar, width / 2, height / 2);
        var radius = parseBorderRadius(bar, width / 2, height / 2);
        return {
          outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius: radius
          },
          inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
              topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
              topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
              bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
              bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
          }
        };
      }

      function _inRange(bar, x, y, useFinalPosition) {
        var skipX = x === null;
        var skipY = y === null;
        var skipBoth = skipX && skipY;
        var bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
        return bounds && (skipX || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ah"])(x, bounds.left, bounds.right)) && (skipY || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ah"])(y, bounds.top, bounds.bottom));
      }

      function hasRadius(radius) {
        return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
      }

      function addNormalRectPath(ctx, rect) {
        ctx.rect(rect.x, rect.y, rect.w, rect.h);
      }

      function inflateRect(rect, amount) {
        var refRect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var x = rect.x !== refRect.x ? -amount : 0;
        var y = rect.y !== refRect.y ? -amount : 0;
        var w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
        var h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
        return {
          x: rect.x + x,
          y: rect.y + y,
          w: rect.w + w,
          h: rect.h + h,
          radius: rect.radius
        };
      }

      var BarElement = /*#__PURE__*/function (_Element5) {
        _inherits(BarElement, _Element5);

        var _super15 = _createSuper(BarElement);

        function BarElement(cfg) {
          var _this25;

          _classCallCheck(this, BarElement);

          _this25 = _super15.call(this);
          _this25.options = undefined;
          _this25.horizontal = undefined;
          _this25.base = undefined;
          _this25.width = undefined;
          _this25.height = undefined;
          _this25.inflateAmount = undefined;

          if (cfg) {
            Object.assign(_assertThisInitialized(_this25), cfg);
          }

          return _this25;
        }

        _createClass(BarElement, [{
          key: "draw",
          value: function draw(ctx) {
            var inflateAmount = this.inflateAmount,
                _this$options12 = this.options,
                borderColor = _this$options12.borderColor,
                backgroundColor = _this$options12.backgroundColor;

            var _boundingRects = boundingRects(this),
                inner = _boundingRects.inner,
                outer = _boundingRects.outer;

            var addRectPath = hasRadius(outer.radius) ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["as"] : addNormalRectPath;
            ctx.save();

            if (outer.w !== inner.w || outer.h !== inner.h) {
              ctx.beginPath();
              addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
              ctx.clip();
              addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
              ctx.fillStyle = borderColor;
              ctx.fill('evenodd');
            }

            ctx.beginPath();
            addRectPath(ctx, inflateRect(inner, inflateAmount));
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
          }
        }, {
          key: "inRange",
          value: function inRange(mouseX, mouseY, useFinalPosition) {
            return _inRange(this, mouseX, mouseY, useFinalPosition);
          }
        }, {
          key: "inXRange",
          value: function inXRange(mouseX, useFinalPosition) {
            return _inRange(this, mouseX, null, useFinalPosition);
          }
        }, {
          key: "inYRange",
          value: function inYRange(mouseY, useFinalPosition) {
            return _inRange(this, null, mouseY, useFinalPosition);
          }
        }, {
          key: "getCenterPoint",
          value: function getCenterPoint(useFinalPosition) {
            var _this$getProps6 = this.getProps(['x', 'y', 'base', 'horizontal'], useFinalPosition),
                x = _this$getProps6.x,
                y = _this$getProps6.y,
                base = _this$getProps6.base,
                horizontal = _this$getProps6.horizontal;

            return {
              x: horizontal ? (x + base) / 2 : x,
              y: horizontal ? y : (y + base) / 2
            };
          }
        }, {
          key: "getRange",
          value: function getRange(axis) {
            return axis === 'x' ? this.width / 2 : this.height / 2;
          }
        }]);

        return BarElement;
      }(Element);

      BarElement.id = 'bar';
      BarElement.defaults = {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: undefined
      };
      BarElement.defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
      };
      var elements = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ArcElement: ArcElement,
        LineElement: LineElement,
        PointElement: PointElement,
        BarElement: BarElement
      });

      function lttbDecimation(data, start, count, availableWidth, options) {
        var samples = options.samples || availableWidth;

        if (samples >= count) {
          return data.slice(start, start + count);
        }

        var decimated = [];
        var bucketWidth = (count - 2) / (samples - 2);
        var sampledIndex = 0;
        var endIndex = start + count - 1;
        var a = start;
        var i, maxAreaPoint, maxArea, area, nextA;
        decimated[sampledIndex++] = data[a];

        for (i = 0; i < samples - 2; i++) {
          var avgX = 0;
          var avgY = 0;
          var j = void 0;
          var avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
          var avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
          var avgRangeLength = avgRangeEnd - avgRangeStart;

          for (j = avgRangeStart; j < avgRangeEnd; j++) {
            avgX += data[j].x;
            avgY += data[j].y;
          }

          avgX /= avgRangeLength;
          avgY /= avgRangeLength;
          var rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
          var rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
          var _data$a = data[a],
              pointAx = _data$a.x,
              pointAy = _data$a.y;
          maxArea = area = -1;

          for (j = rangeOffs; j < rangeTo; j++) {
            area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));

            if (area > maxArea) {
              maxArea = area;
              maxAreaPoint = data[j];
              nextA = j;
            }
          }

          decimated[sampledIndex++] = maxAreaPoint;
          a = nextA;
        }

        decimated[sampledIndex++] = data[endIndex];
        return decimated;
      }

      function minMaxDecimation(data, start, count, availableWidth) {
        var avgX = 0;
        var countX = 0;
        var i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
        var decimated = [];
        var endIndex = start + count - 1;
        var xMin = data[start].x;
        var xMax = data[endIndex].x;
        var dx = xMax - xMin;

        for (i = start; i < start + count; ++i) {
          point = data[i];
          x = (point.x - xMin) / dx * availableWidth;
          y = point.y;
          var truncX = x | 0;

          if (truncX === prevX) {
            if (y < minY) {
              minY = y;
              minIndex = i;
            } else if (y > maxY) {
              maxY = y;
              maxIndex = i;
            }

            avgX = (countX * avgX + point.x) / ++countX;
          } else {
            var lastIndex = i - 1;

            if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(minIndex) && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(maxIndex)) {
              var intermediateIndex1 = Math.min(minIndex, maxIndex);
              var intermediateIndex2 = Math.max(minIndex, maxIndex);

              if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
                decimated.push(_objectSpread(_objectSpread({}, data[intermediateIndex1]), {}, {
                  x: avgX
                }));
              }

              if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
                decimated.push(_objectSpread(_objectSpread({}, data[intermediateIndex2]), {}, {
                  x: avgX
                }));
              }
            }

            if (i > 0 && lastIndex !== startIndex) {
              decimated.push(data[lastIndex]);
            }

            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
          }
        }

        return decimated;
      }

      function cleanDecimatedDataset(dataset) {
        if (dataset._decimated) {
          var data = dataset._data;
          delete dataset._decimated;
          delete dataset._data;
          Object.defineProperty(dataset, 'data', {
            value: data
          });
        }
      }

      function cleanDecimatedData(chart) {
        chart.data.datasets.forEach(function (dataset) {
          cleanDecimatedDataset(dataset);
        });
      }

      function getStartAndCountOfVisiblePointsSimplified(meta, points) {
        var pointCount = points.length;
        var start = 0;
        var count;
        var iScale = meta.iScale;

        var _iScale$getUserBounds2 = iScale.getUserBounds(),
            min = _iScale$getUserBounds2.min,
            max = _iScale$getUserBounds2.max,
            minDefined = _iScale$getUserBounds2.minDefined,
            maxDefined = _iScale$getUserBounds2.maxDefined;

        if (minDefined) {
          start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["x"])(points, iScale.axis, min).lo, 0, pointCount - 1);
        }

        if (maxDefined) {
          count = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["x"])(points, iScale.axis, max).hi + 1, start, pointCount) - start;
        } else {
          count = pointCount - start;
        }

        return {
          start: start,
          count: count
        };
      }

      var plugin_decimation = {
        id: 'decimation',
        defaults: {
          algorithm: 'min-max',
          enabled: false
        },
        beforeElementsUpdate: function beforeElementsUpdate(chart, args, options) {
          if (!options.enabled) {
            cleanDecimatedData(chart);
            return;
          }

          var availableWidth = chart.width;
          chart.data.datasets.forEach(function (dataset, datasetIndex) {
            var _data = dataset._data,
                indexAxis = dataset.indexAxis;
            var meta = chart.getDatasetMeta(datasetIndex);
            var data = _data || dataset.data;

            if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a"])([indexAxis, chart.options.indexAxis]) === 'y') {
              return;
            }

            if (meta.type !== 'line') {
              return;
            }

            var xAxis = chart.scales[meta.xAxisID];

            if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
              return;
            }

            if (chart.options.parsing) {
              return;
            }

            var _getStartAndCountOfVi2 = getStartAndCountOfVisiblePointsSimplified(meta, data),
                start = _getStartAndCountOfVi2.start,
                count = _getStartAndCountOfVi2.count;

            var threshold = options.threshold || 4 * availableWidth;

            if (count <= threshold) {
              cleanDecimatedDataset(dataset);
              return;
            }

            if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(_data)) {
              dataset._data = data;
              delete dataset.data;
              Object.defineProperty(dataset, 'data', {
                configurable: true,
                enumerable: true,
                get: function get() {
                  return this._decimated;
                },
                set: function set(d) {
                  this._data = d;
                }
              });
            }

            var decimated;

            switch (options.algorithm) {
              case 'lttb':
                decimated = lttbDecimation(data, start, count, availableWidth, options);
                break;

              case 'min-max':
                decimated = minMaxDecimation(data, start, count, availableWidth);
                break;

              default:
                throw new Error("Unsupported decimation algorithm '".concat(options.algorithm, "'"));
            }

            dataset._decimated = decimated;
          });
        },
        destroy: function destroy(chart) {
          cleanDecimatedData(chart);
        }
      };

      function getLineByIndex(chart, index) {
        var meta = chart.getDatasetMeta(index);
        var visible = meta && chart.isDatasetVisible(index);
        return visible ? meta.dataset : null;
      }

      function parseFillOption(line) {
        var options = line.options;
        var fillOption = options.fill;
        var fill = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(fillOption && fillOption.target, fillOption);

        if (fill === undefined) {
          fill = !!options.backgroundColor;
        }

        if (fill === false || fill === null) {
          return false;
        }

        if (fill === true) {
          return 'origin';
        }

        return fill;
      }

      function decodeFill(line, index, count) {
        var fill = parseFillOption(line);

        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(fill)) {
          return isNaN(fill.value) ? false : fill;
        }

        var target = parseFloat(fill);

        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(target) && Math.floor(target) === target) {
          if (fill[0] === '-' || fill[0] === '+') {
            target = index + target;
          }

          if (target === index || target < 0 || target >= count) {
            return false;
          }

          return target;
        }

        return ['origin', 'start', 'end', 'stack', 'shape'].indexOf(fill) >= 0 && fill;
      }

      function computeLinearBoundary(source) {
        var _source$scale = source.scale,
            scale = _source$scale === void 0 ? {} : _source$scale,
            fill = source.fill;
        var target = null;
        var horizontal;

        if (fill === 'start') {
          target = scale.bottom;
        } else if (fill === 'end') {
          target = scale.top;
        } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(fill)) {
          target = scale.getPixelForValue(fill.value);
        } else if (scale.getBasePixel) {
          target = scale.getBasePixel();
        }

        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(target)) {
          horizontal = scale.isHorizontal();
          return {
            x: horizontal ? target : null,
            y: horizontal ? null : target
          };
        }

        return null;
      }

      var simpleArc = /*#__PURE__*/function () {
        function simpleArc(opts) {
          _classCallCheck(this, simpleArc);

          this.x = opts.x;
          this.y = opts.y;
          this.radius = opts.radius;
        }

        _createClass(simpleArc, [{
          key: "pathSegment",
          value: function pathSegment(ctx, bounds, opts) {
            var x = this.x,
                y = this.y,
                radius = this.radius;
            bounds = bounds || {
              start: 0,
              end: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"]
            };
            ctx.arc(x, y, radius, bounds.end, bounds.start, true);
            return !opts.bounds;
          }
        }, {
          key: "interpolate",
          value: function interpolate(point) {
            var x = this.x,
                y = this.y,
                radius = this.radius;
            var angle = point.angle;
            return {
              x: x + Math.cos(angle) * radius,
              y: y + Math.sin(angle) * radius,
              angle: angle
            };
          }
        }]);

        return simpleArc;
      }();

      function computeCircularBoundary(source) {
        var scale = source.scale,
            fill = source.fill;
        var options = scale.options;
        var length = scale.getLabels().length;
        var target = [];
        var start = options.reverse ? scale.max : scale.min;
        var end = options.reverse ? scale.min : scale.max;
        var i, center, value;

        if (fill === 'start') {
          value = start;
        } else if (fill === 'end') {
          value = end;
        } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["i"])(fill)) {
          value = fill.value;
        } else {
          value = scale.getBaseValue();
        }

        if (options.grid.circular) {
          center = scale.getPointPositionForValue(0, start);
          return new simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
          });
        }

        for (i = 0; i < length; ++i) {
          target.push(scale.getPointPositionForValue(i, value));
        }

        return target;
      }

      function computeBoundary(source) {
        var scale = source.scale || {};

        if (scale.getPointPositionForValue) {
          return computeCircularBoundary(source);
        }

        return computeLinearBoundary(source);
      }

      function findSegmentEnd(start, end, points) {
        for (; end > start; end--) {
          var point = points[end];

          if (!isNaN(point.x) && !isNaN(point.y)) {
            break;
          }
        }

        return end;
      }

      function pointsFromSegments(boundary, line) {
        var _ref6 = boundary || {},
            _ref6$x = _ref6.x,
            x = _ref6$x === void 0 ? null : _ref6$x,
            _ref6$y = _ref6.y,
            y = _ref6$y === void 0 ? null : _ref6$y;

        var linePoints = line.points;
        var points = [];
        line.segments.forEach(function (_ref7) {
          var start = _ref7.start,
              end = _ref7.end;
          end = findSegmentEnd(start, end, linePoints);
          var first = linePoints[start];
          var last = linePoints[end];

          if (y !== null) {
            points.push({
              x: first.x,
              y: y
            });
            points.push({
              x: last.x,
              y: y
            });
          } else if (x !== null) {
            points.push({
              x: x,
              y: first.y
            });
            points.push({
              x: x,
              y: last.y
            });
          }
        });
        return points;
      }

      function buildStackLine(source) {
        var scale = source.scale,
            index = source.index,
            line = source.line;
        var points = [];
        var segments = line.segments;
        var sourcePoints = line.points;
        var linesBelow = getLinesBelow(scale, index);
        linesBelow.push(createBoundaryLine({
          x: null,
          y: scale.bottom
        }, line));

        for (var i = 0; i < segments.length; i++) {
          var segment = segments[i];

          for (var j = segment.start; j <= segment.end; j++) {
            addPointsBelow(points, sourcePoints[j], linesBelow);
          }
        }

        return new LineElement({
          points: points,
          options: {}
        });
      }

      function getLinesBelow(scale, index) {
        var below = [];
        var metas = scale.getMatchingVisibleMetas('line');

        for (var i = 0; i < metas.length; i++) {
          var meta = metas[i];

          if (meta.index === index) {
            break;
          }

          if (!meta.hidden) {
            below.unshift(meta.dataset);
          }
        }

        return below;
      }

      function addPointsBelow(points, sourcePoint, linesBelow) {
        var postponed = [];

        for (var j = 0; j < linesBelow.length; j++) {
          var line = linesBelow[j];

          var _findPoint = findPoint(line, sourcePoint, 'x'),
              first = _findPoint.first,
              last = _findPoint.last,
              point = _findPoint.point;

          if (!point || first && last) {
            continue;
          }

          if (first) {
            postponed.unshift(point);
          } else {
            points.push(point);

            if (!last) {
              break;
            }
          }
        }

        points.push.apply(points, postponed);
      }

      function findPoint(line, sourcePoint, property) {
        var point = line.interpolate(sourcePoint, property);

        if (!point) {
          return {};
        }

        var pointValue = point[property];
        var segments = line.segments;
        var linePoints = line.points;
        var first = false;
        var last = false;

        for (var i = 0; i < segments.length; i++) {
          var segment = segments[i];
          var firstValue = linePoints[segment.start][property];
          var lastValue = linePoints[segment.end][property];

          if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ah"])(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
          }
        }

        return {
          first: first,
          last: last,
          point: point
        };
      }

      function getTarget(source) {
        var chart = source.chart,
            fill = source.fill,
            line = source.line;

        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(fill)) {
          return getLineByIndex(chart, fill);
        }

        if (fill === 'stack') {
          return buildStackLine(source);
        }

        if (fill === 'shape') {
          return true;
        }

        var boundary = computeBoundary(source);

        if (boundary instanceof simpleArc) {
          return boundary;
        }

        return createBoundaryLine(boundary, line);
      }

      function createBoundaryLine(boundary, line) {
        var points = [];
        var _loop = false;

        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(boundary)) {
          _loop = true;
          points = boundary;
        } else {
          points = pointsFromSegments(boundary, line);
        }

        return points.length ? new LineElement({
          points: points,
          options: {
            tension: 0
          },
          _loop: _loop,
          _fullLoop: _loop
        }) : null;
      }

      function resolveTarget(sources, index, propagate) {
        var source = sources[index];
        var fill = source.fill;
        var visited = [index];
        var target;

        if (!propagate) {
          return fill;
        }

        while (fill !== false && visited.indexOf(fill) === -1) {
          if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(fill)) {
            return fill;
          }

          target = sources[fill];

          if (!target) {
            return false;
          }

          if (target.visible) {
            return fill;
          }

          visited.push(fill);
          fill = target.fill;
        }

        return false;
      }

      function _clip(ctx, target, clipY) {
        var segments = target.segments,
            points = target.points;
        var first = true;
        var lineLoop = false;
        ctx.beginPath();

        var _iterator25 = _createForOfIteratorHelper(segments),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var segment = _step25.value;
            var start = segment.start,
                end = segment.end;
            var firstPoint = points[start];
            var lastPoint = points[findSegmentEnd(start, end, points)];

            if (first) {
              ctx.moveTo(firstPoint.x, firstPoint.y);
              first = false;
            } else {
              ctx.lineTo(firstPoint.x, clipY);
              ctx.lineTo(firstPoint.x, firstPoint.y);
            }

            lineLoop = !!target.pathSegment(ctx, segment, {
              move: lineLoop
            });

            if (lineLoop) {
              ctx.closePath();
            } else {
              ctx.lineTo(lastPoint.x, clipY);
            }
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }

        ctx.lineTo(target.first().x, clipY);
        ctx.closePath();
        ctx.clip();
      }

      function getBounds(property, first, last, loop) {
        if (loop) {
          return;
        }

        var start = first[property];
        var end = last[property];

        if (property === 'angle') {
          start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aw"])(start);
          end = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aw"])(end);
        }

        return {
          property: property,
          start: start,
          end: end
        };
      }

      function _getEdge(a, b, prop, fn) {
        if (a && b) {
          return fn(a[prop], b[prop]);
        }

        return a ? a[prop] : b ? b[prop] : 0;
      }

      function _segments(line, target, property) {
        var segments = line.segments;
        var points = line.points;
        var tpoints = target.points;
        var parts = [];

        var _iterator26 = _createForOfIteratorHelper(segments),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var segment = _step26.value;
            var start = segment.start,
                end = segment.end;
            end = findSegmentEnd(start, end, points);
            var bounds = getBounds(property, points[start], points[end], segment.loop);

            if (!target.segments) {
              parts.push({
                source: segment,
                target: bounds,
                start: points[start],
                end: points[end]
              });
              continue;
            }

            var targetSegments = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["al"])(target, bounds);

            var _iterator27 = _createForOfIteratorHelper(targetSegments),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var tgt = _step27.value;
                var subBounds = getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
                var fillSources = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["av"])(segment, points, subBounds);

                var _iterator28 = _createForOfIteratorHelper(fillSources),
                    _step28;

                try {
                  for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                    var fillSource = _step28.value;
                    parts.push({
                      source: fillSource,
                      target: tgt,
                      start: _defineProperty({}, property, _getEdge(bounds, subBounds, 'start', Math.max)),
                      end: _defineProperty({}, property, _getEdge(bounds, subBounds, 'end', Math.min))
                    });
                  }
                } catch (err) {
                  _iterator28.e(err);
                } finally {
                  _iterator28.f();
                }
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }

        return parts;
      }

      function clipBounds(ctx, scale, bounds) {
        var _scale$chart$chartAre = scale.chart.chartArea,
            top = _scale$chart$chartAre.top,
            bottom = _scale$chart$chartAre.bottom;

        var _ref8 = bounds || {},
            property = _ref8.property,
            start = _ref8.start,
            end = _ref8.end;

        if (property === 'x') {
          ctx.beginPath();
          ctx.rect(start, top, end - start, bottom - top);
          ctx.clip();
        }
      }

      function interpolatedLineTo(ctx, target, point, property) {
        var interpolatedPoint = target.interpolate(point, property);

        if (interpolatedPoint) {
          ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
        }
      }

      function _fill(ctx, cfg) {
        var line = cfg.line,
            target = cfg.target,
            property = cfg.property,
            color = cfg.color,
            scale = cfg.scale;

        var segments = _segments(line, target, property);

        var _iterator29 = _createForOfIteratorHelper(segments),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _step29$value = _step29.value,
                src = _step29$value.source,
                tgt = _step29$value.target,
                start = _step29$value.start,
                end = _step29$value.end;
            var _src$style = src.style;
            _src$style = _src$style === void 0 ? {} : _src$style;
            var _src$style$background = _src$style.backgroundColor,
                backgroundColor = _src$style$background === void 0 ? color : _src$style$background;
            var notShape = target !== true;
            ctx.save();
            ctx.fillStyle = backgroundColor;
            clipBounds(ctx, scale, notShape && getBounds(property, start, end));
            ctx.beginPath();
            var lineLoop = !!line.pathSegment(ctx, src);
            var loop = void 0;

            if (notShape) {
              if (lineLoop) {
                ctx.closePath();
              } else {
                interpolatedLineTo(ctx, target, end, property);
              }

              var targetLoop = !!target.pathSegment(ctx, tgt, {
                move: lineLoop,
                reverse: true
              });
              loop = lineLoop && targetLoop;

              if (!loop) {
                interpolatedLineTo(ctx, target, start, property);
              }
            }

            ctx.closePath();
            ctx.fill(loop ? 'evenodd' : 'nonzero');
            ctx.restore();
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }

      function doFill(ctx, cfg) {
        var line = cfg.line,
            target = cfg.target,
            above = cfg.above,
            below = cfg.below,
            area = cfg.area,
            scale = cfg.scale;
        var property = line._loop ? 'angle' : cfg.axis;
        ctx.save();

        if (property === 'x' && below !== above) {
          _clip(ctx, target, area.top);

          _fill(ctx, {
            line: line,
            target: target,
            color: above,
            scale: scale,
            property: property
          });

          ctx.restore();
          ctx.save();

          _clip(ctx, target, area.bottom);
        }

        _fill(ctx, {
          line: line,
          target: target,
          color: below,
          scale: scale,
          property: property
        });

        ctx.restore();
      }

      function drawfill(ctx, source, area) {
        var target = getTarget(source);
        var line = source.line,
            scale = source.scale,
            axis = source.axis;
        var lineOpts = line.options;
        var fillOption = lineOpts.fill;
        var color = lineOpts.backgroundColor;

        var _ref9 = fillOption || {},
            _ref9$above = _ref9.above,
            above = _ref9$above === void 0 ? color : _ref9$above,
            _ref9$below = _ref9.below,
            below = _ref9$below === void 0 ? color : _ref9$below;

        if (target && line.points.length) {
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["W"])(ctx, area);
          doFill(ctx, {
            line: line,
            target: target,
            above: above,
            below: below,
            area: area,
            scale: scale,
            axis: axis
          });
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Y"])(ctx);
        }
      }

      var plugin_filler = {
        id: 'filler',
        afterDatasetsUpdate: function afterDatasetsUpdate(chart, _args, options) {
          var count = (chart.data.datasets || []).length;
          var sources = [];
          var meta, i, line, source;

          for (i = 0; i < count; ++i) {
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;

            if (line && line.options && line instanceof LineElement) {
              source = {
                visible: chart.isDatasetVisible(i),
                index: i,
                fill: decodeFill(line, i, count),
                chart: chart,
                axis: meta.controller.options.indexAxis,
                scale: meta.vScale,
                line: line
              };
            }

            meta.$filler = source;
            sources.push(source);
          }

          for (i = 0; i < count; ++i) {
            source = sources[i];

            if (!source || source.fill === false) {
              continue;
            }

            source.fill = resolveTarget(sources, i, options.propagate);
          }
        },
        beforeDraw: function beforeDraw(chart, _args, options) {
          var draw = options.drawTime === 'beforeDraw';
          var metasets = chart.getSortedVisibleDatasetMetas();
          var area = chart.chartArea;

          for (var i = metasets.length - 1; i >= 0; --i) {
            var source = metasets[i].$filler;

            if (!source) {
              continue;
            }

            source.line.updateControlPoints(area, source.axis);

            if (draw) {
              drawfill(chart.ctx, source, area);
            }
          }
        },
        beforeDatasetsDraw: function beforeDatasetsDraw(chart, _args, options) {
          if (options.drawTime !== 'beforeDatasetsDraw') {
            return;
          }

          var metasets = chart.getSortedVisibleDatasetMetas();

          for (var i = metasets.length - 1; i >= 0; --i) {
            var source = metasets[i].$filler;

            if (source) {
              drawfill(chart.ctx, source, chart.chartArea);
            }
          }
        },
        beforeDatasetDraw: function beforeDatasetDraw(chart, args, options) {
          var source = args.meta.$filler;

          if (!source || source.fill === false || options.drawTime !== 'beforeDatasetDraw') {
            return;
          }

          drawfill(chart.ctx, source, chart.chartArea);
        },
        defaults: {
          propagate: true,
          drawTime: 'beforeDatasetDraw'
        }
      };

      var getBoxSize = function getBoxSize(labelOpts, fontSize) {
        var _labelOpts$boxHeight = labelOpts.boxHeight,
            boxHeight = _labelOpts$boxHeight === void 0 ? fontSize : _labelOpts$boxHeight,
            _labelOpts$boxWidth = labelOpts.boxWidth,
            boxWidth = _labelOpts$boxWidth === void 0 ? fontSize : _labelOpts$boxWidth;

        if (labelOpts.usePointStyle) {
          boxHeight = Math.min(boxHeight, fontSize);
          boxWidth = Math.min(boxWidth, fontSize);
        }

        return {
          boxWidth: boxWidth,
          boxHeight: boxHeight,
          itemHeight: Math.max(fontSize, boxHeight)
        };
      };

      var itemsEqual = function itemsEqual(a, b) {
        return a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
      };

      var Legend = /*#__PURE__*/function (_Element6) {
        _inherits(Legend, _Element6);

        var _super16 = _createSuper(Legend);

        function Legend(config) {
          var _this26;

          _classCallCheck(this, Legend);

          _this26 = _super16.call(this);
          _this26._added = false;
          _this26.legendHitBoxes = [];
          _this26._hoveredItem = null;
          _this26.doughnutMode = false;
          _this26.chart = config.chart;
          _this26.options = config.options;
          _this26.ctx = config.ctx;
          _this26.legendItems = undefined;
          _this26.columnSizes = undefined;
          _this26.lineWidths = undefined;
          _this26.maxHeight = undefined;
          _this26.maxWidth = undefined;
          _this26.top = undefined;
          _this26.bottom = undefined;
          _this26.left = undefined;
          _this26.right = undefined;
          _this26.height = undefined;
          _this26.width = undefined;
          _this26._margins = undefined;
          _this26.position = undefined;
          _this26.weight = undefined;
          _this26.fullSize = undefined;
          return _this26;
        }

        _createClass(Legend, [{
          key: "update",
          value: function update(maxWidth, maxHeight, margins) {
            this.maxWidth = maxWidth;
            this.maxHeight = maxHeight;
            this._margins = margins;
            this.setDimensions();
            this.buildLabels();
            this.fit();
          }
        }, {
          key: "setDimensions",
          value: function setDimensions() {
            if (this.isHorizontal()) {
              this.width = this.maxWidth;
              this.left = this._margins.left;
              this.right = this.width;
            } else {
              this.height = this.maxHeight;
              this.top = this._margins.top;
              this.bottom = this.height;
            }
          }
        }, {
          key: "buildLabels",
          value: function buildLabels() {
            var _this27 = this;

            var labelOpts = this.options.labels || {};
            var legendItems = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(labelOpts.generateLabels, [this.chart], this) || [];

            if (labelOpts.filter) {
              legendItems = legendItems.filter(function (item) {
                return labelOpts.filter(item, _this27.chart.data);
              });
            }

            if (labelOpts.sort) {
              legendItems = legendItems.sort(function (a, b) {
                return labelOpts.sort(a, b, _this27.chart.data);
              });
            }

            if (this.options.reverse) {
              legendItems.reverse();
            }

            this.legendItems = legendItems;
          }
        }, {
          key: "fit",
          value: function fit() {
            var options = this.options,
                ctx = this.ctx;

            if (!options.display) {
              this.width = this.height = 0;
              return;
            }

            var labelOpts = options.labels;
            var labelFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(labelOpts.font);
            var fontSize = labelFont.size;

            var titleHeight = this._computeTitleHeight();

            var _getBoxSize = getBoxSize(labelOpts, fontSize),
                boxWidth = _getBoxSize.boxWidth,
                itemHeight = _getBoxSize.itemHeight;

            var width, height;
            ctx.font = labelFont.string;

            if (this.isHorizontal()) {
              width = this.maxWidth;
              height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
            } else {
              height = this.maxHeight;
              width = this._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
            }

            this.width = Math.min(width, options.maxWidth || this.maxWidth);
            this.height = Math.min(height, options.maxHeight || this.maxHeight);
          }
        }, {
          key: "_fitRows",
          value: function _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
            var ctx = this.ctx,
                maxWidth = this.maxWidth,
                padding = this.options.labels.padding;
            var hitboxes = this.legendHitBoxes = [];
            var lineWidths = this.lineWidths = [0];
            var lineHeight = itemHeight + padding;
            var totalHeight = titleHeight;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            var row = -1;
            var top = -lineHeight;
            this.legendItems.forEach(function (legendItem, i) {
              var itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

              if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
                totalHeight += lineHeight;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                top += lineHeight;
                row++;
              }

              hitboxes[i] = {
                left: 0,
                top: top,
                row: row,
                width: itemWidth,
                height: itemHeight
              };
              lineWidths[lineWidths.length - 1] += itemWidth + padding;
            });
            return totalHeight;
          }
        }, {
          key: "_fitCols",
          value: function _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
            var ctx = this.ctx,
                maxHeight = this.maxHeight,
                padding = this.options.labels.padding;
            var hitboxes = this.legendHitBoxes = [];
            var columnSizes = this.columnSizes = [];
            var heightLimit = maxHeight - titleHeight;
            var totalWidth = padding;
            var currentColWidth = 0;
            var currentColHeight = 0;
            var left = 0;
            var col = 0;
            this.legendItems.forEach(function (legendItem, i) {
              var itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

              if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
                totalWidth += currentColWidth + padding;
                columnSizes.push({
                  width: currentColWidth,
                  height: currentColHeight
                });
                left += currentColWidth + padding;
                col++;
                currentColWidth = currentColHeight = 0;
              }

              hitboxes[i] = {
                left: left,
                top: currentColHeight,
                col: col,
                width: itemWidth,
                height: itemHeight
              };
              currentColWidth = Math.max(currentColWidth, itemWidth);
              currentColHeight += itemHeight + padding;
            });
            totalWidth += currentColWidth;
            columnSizes.push({
              width: currentColWidth,
              height: currentColHeight
            });
            return totalWidth;
          }
        }, {
          key: "adjustHitBoxes",
          value: function adjustHitBoxes() {
            if (!this.options.display) {
              return;
            }

            var titleHeight = this._computeTitleHeight();

            var hitboxes = this.legendHitBoxes,
                _this$options13 = this.options,
                align = _this$options13.align,
                padding = _this$options13.labels.padding,
                rtl = _this$options13.rtl;
            var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ax"])(rtl, this.left, this.width);

            if (this.isHorizontal()) {
              var row = 0;
              var left = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, this.left + padding, this.right - this.lineWidths[row]);

              var _iterator30 = _createForOfIteratorHelper(hitboxes),
                  _step30;

              try {
                for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                  var hitbox = _step30.value;

                  if (row !== hitbox.row) {
                    row = hitbox.row;
                    left = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, this.left + padding, this.right - this.lineWidths[row]);
                  }

                  hitbox.top += this.top + titleHeight + padding;
                  hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
                  left += hitbox.width + padding;
                }
              } catch (err) {
                _iterator30.e(err);
              } finally {
                _iterator30.f();
              }
            } else {
              var col = 0;
              var top = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);

              var _iterator31 = _createForOfIteratorHelper(hitboxes),
                  _step31;

              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var _hitbox = _step31.value;

                  if (_hitbox.col !== col) {
                    col = _hitbox.col;
                    top = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
                  }

                  _hitbox.top = top;
                  _hitbox.left += this.left + padding;
                  _hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(_hitbox.left), _hitbox.width);
                  top += _hitbox.height + padding;
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }
            }
          }
        }, {
          key: "isHorizontal",
          value: function isHorizontal() {
            return this.options.position === 'top' || this.options.position === 'bottom';
          }
        }, {
          key: "draw",
          value: function draw() {
            if (this.options.display) {
              var ctx = this.ctx;
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["W"])(ctx, this);

              this._draw();

              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Y"])(ctx);
            }
          }
        }, {
          key: "_draw",
          value: function _draw() {
            var _this28 = this;

            var opts = this.options,
                columnSizes = this.columnSizes,
                lineWidths = this.lineWidths,
                ctx = this.ctx;
            var align = opts.align,
                labelOpts = opts.labels;
            var defaultColor = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].color;
            var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ax"])(opts.rtl, this.left, this.width);
            var labelFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(labelOpts.font);
            var fontColor = labelOpts.color,
                padding = labelOpts.padding;
            var fontSize = labelFont.size;
            var halfFontSize = fontSize / 2;
            var cursor;
            this.drawTitle();
            ctx.textAlign = rtlHelper.textAlign('left');
            ctx.textBaseline = 'middle';
            ctx.lineWidth = 0.5;
            ctx.font = labelFont.string;

            var _getBoxSize2 = getBoxSize(labelOpts, fontSize),
                boxWidth = _getBoxSize2.boxWidth,
                boxHeight = _getBoxSize2.boxHeight,
                itemHeight = _getBoxSize2.itemHeight;

            var drawLegendBox = function drawLegendBox(x, y, legendItem) {
              if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
                return;
              }

              ctx.save();
              var lineWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(legendItem.lineWidth, 1);
              ctx.fillStyle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(legendItem.fillStyle, defaultColor);
              ctx.lineCap = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(legendItem.lineCap, 'butt');
              ctx.lineDashOffset = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(legendItem.lineDashOffset, 0);
              ctx.lineJoin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(legendItem.lineJoin, 'miter');
              ctx.lineWidth = lineWidth;
              ctx.strokeStyle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(legendItem.strokeStyle, defaultColor);
              ctx.setLineDash(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(legendItem.lineDash, []));

              if (labelOpts.usePointStyle) {
                var drawOptions = {
                  radius: boxWidth * Math.SQRT2 / 2,
                  pointStyle: legendItem.pointStyle,
                  rotation: legendItem.rotation,
                  borderWidth: lineWidth
                };
                var centerX = rtlHelper.xPlus(x, boxWidth / 2);
                var centerY = y + halfFontSize;
                Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ar"])(ctx, drawOptions, centerX, centerY);
              } else {
                var yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
                var xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
                var borderRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["au"])(legendItem.borderRadius);
                ctx.beginPath();

                if (Object.values(borderRadius).some(function (v) {
                  return v !== 0;
                })) {
                  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["as"])(ctx, {
                    x: xBoxLeft,
                    y: yBoxTop,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                  });
                } else {
                  ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
                }

                ctx.fill();

                if (lineWidth !== 0) {
                  ctx.stroke();
                }
              }

              ctx.restore();
            };

            var fillText = function fillText(x, y, legendItem) {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["X"])(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
                strikethrough: legendItem.hidden,
                textAlign: rtlHelper.textAlign(legendItem.textAlign)
              });
            };

            var isHorizontal = this.isHorizontal();

            var titleHeight = this._computeTitleHeight();

            if (isHorizontal) {
              cursor = {
                x: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, this.left + padding, this.right - lineWidths[0]),
                y: this.top + padding + titleHeight,
                line: 0
              };
            } else {
              cursor = {
                x: this.left + padding,
                y: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
                line: 0
              };
            }

            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ay"])(this.ctx, opts.textDirection);
            var lineHeight = itemHeight + padding;
            this.legendItems.forEach(function (legendItem, i) {
              ctx.strokeStyle = legendItem.fontColor || fontColor;
              ctx.fillStyle = legendItem.fontColor || fontColor;
              var textWidth = ctx.measureText(legendItem.text).width;
              var textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
              var width = boxWidth + halfFontSize + textWidth;
              var x = cursor.x;
              var y = cursor.y;
              rtlHelper.setWidth(_this28.width);

              if (isHorizontal) {
                if (i > 0 && x + width + padding > _this28.right) {
                  y = cursor.y += lineHeight;
                  cursor.line++;
                  x = cursor.x = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, _this28.left + padding, _this28.right - lineWidths[cursor.line]);
                }
              } else if (i > 0 && y + lineHeight > _this28.bottom) {
                x = cursor.x = x + columnSizes[cursor.line].width + padding;
                cursor.line++;
                y = cursor.y = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, _this28.top + titleHeight + padding, _this28.bottom - columnSizes[cursor.line].height);
              }

              var realX = rtlHelper.x(x);
              drawLegendBox(realX, y, legendItem);
              x = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["az"])(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : _this28.right, opts.rtl);
              fillText(rtlHelper.x(x), y, legendItem);

              if (isHorizontal) {
                cursor.x += width + padding;
              } else {
                cursor.y += lineHeight;
              }
            });
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aA"])(this.ctx, opts.textDirection);
          }
        }, {
          key: "drawTitle",
          value: function drawTitle() {
            var opts = this.options;
            var titleOpts = opts.title;
            var titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(titleOpts.font);
            var titlePadding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(titleOpts.padding);

            if (!titleOpts.display) {
              return;
            }

            var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ax"])(opts.rtl, this.left, this.width);
            var ctx = this.ctx;
            var position = titleOpts.position;
            var halfFontSize = titleFont.size / 2;
            var topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
            var y;
            var left = this.left;
            var maxWidth = this.width;

            if (this.isHorizontal()) {
              maxWidth = Math.max.apply(Math, _toConsumableArray(this.lineWidths));
              y = this.top + topPaddingPlusHalfFontSize;
              left = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(opts.align, left, this.right - maxWidth);
            } else {
              var maxHeight = this.columnSizes.reduce(function (acc, size) {
                return Math.max(acc, size.height);
              }, 0);
              y = topPaddingPlusHalfFontSize + Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
            }

            var x = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(position, left, left + maxWidth);
            ctx.textAlign = rtlHelper.textAlign(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["$"])(position));
            ctx.textBaseline = 'middle';
            ctx.strokeStyle = titleOpts.color;
            ctx.fillStyle = titleOpts.color;
            ctx.font = titleFont.string;
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["X"])(ctx, titleOpts.text, x, y, titleFont);
          }
        }, {
          key: "_computeTitleHeight",
          value: function _computeTitleHeight() {
            var titleOpts = this.options.title;
            var titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(titleOpts.font);
            var titlePadding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(titleOpts.padding);
            return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
          }
        }, {
          key: "_getLegendItemAt",
          value: function _getLegendItemAt(x, y) {
            var i, hitBox, lh;

            if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ah"])(x, this.left, this.right) && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ah"])(y, this.top, this.bottom)) {
              lh = this.legendHitBoxes;

              for (i = 0; i < lh.length; ++i) {
                hitBox = lh[i];

                if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ah"])(x, hitBox.left, hitBox.left + hitBox.width) && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ah"])(y, hitBox.top, hitBox.top + hitBox.height)) {
                  return this.legendItems[i];
                }
              }
            }

            return null;
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(e) {
            var opts = this.options;

            if (!isListened(e.type, opts)) {
              return;
            }

            var hoveredItem = this._getLegendItemAt(e.x, e.y);

            if (e.type === 'mousemove') {
              var previous = this._hoveredItem;
              var sameItem = itemsEqual(previous, hoveredItem);

              if (previous && !sameItem) {
                Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(opts.onLeave, [e, previous, this], this);
              }

              this._hoveredItem = hoveredItem;

              if (hoveredItem && !sameItem) {
                Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(opts.onHover, [e, hoveredItem, this], this);
              }
            } else if (hoveredItem) {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(opts.onClick, [e, hoveredItem, this], this);
            }
          }
        }]);

        return Legend;
      }(Element);

      function isListened(type, opts) {
        if (type === 'mousemove' && (opts.onHover || opts.onLeave)) {
          return true;
        }

        if (opts.onClick && (type === 'click' || type === 'mouseup')) {
          return true;
        }

        return false;
      }

      var plugin_legend = {
        id: 'legend',
        _element: Legend,
        start: function start(chart, _args, options) {
          var legend = chart.legend = new Legend({
            ctx: chart.ctx,
            options: options,
            chart: chart
          });
          layouts.configure(chart, legend, options);
          layouts.addBox(chart, legend);
        },
        stop: function stop(chart) {
          layouts.removeBox(chart, chart.legend);
          delete chart.legend;
        },
        beforeUpdate: function beforeUpdate(chart, _args, options) {
          var legend = chart.legend;
          layouts.configure(chart, legend, options);
          legend.options = options;
        },
        afterUpdate: function afterUpdate(chart) {
          var legend = chart.legend;
          legend.buildLabels();
          legend.adjustHitBoxes();
        },
        afterEvent: function afterEvent(chart, args) {
          if (!args.replay) {
            chart.legend.handleEvent(args.event);
          }
        },
        defaults: {
          display: true,
          position: 'top',
          align: 'center',
          fullSize: true,
          reverse: false,
          weight: 1000,
          onClick: function onClick(e, legendItem, legend) {
            var index = legendItem.datasetIndex;
            var ci = legend.chart;

            if (ci.isDatasetVisible(index)) {
              ci.hide(index);
              legendItem.hidden = true;
            } else {
              ci.show(index);
              legendItem.hidden = false;
            }
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: function color(ctx) {
              return ctx.chart.options.color;
            },
            boxWidth: 40,
            padding: 10,
            generateLabels: function generateLabels(chart) {
              var datasets = chart.data.datasets;
              var _chart$legend$options = chart.legend.options.labels,
                  usePointStyle = _chart$legend$options.usePointStyle,
                  pointStyle = _chart$legend$options.pointStyle,
                  textAlign = _chart$legend$options.textAlign,
                  color = _chart$legend$options.color;
              return chart._getSortedDatasetMetas().map(function (meta) {
                var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                var borderWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(style.borderWidth);
                return {
                  text: datasets[meta.index].label,
                  fillStyle: style.backgroundColor,
                  fontColor: color,
                  hidden: !meta.visible,
                  lineCap: style.borderCapStyle,
                  lineDash: style.borderDash,
                  lineDashOffset: style.borderDashOffset,
                  lineJoin: style.borderJoinStyle,
                  lineWidth: (borderWidth.width + borderWidth.height) / 4,
                  strokeStyle: style.borderColor,
                  pointStyle: pointStyle || style.pointStyle,
                  rotation: style.rotation,
                  textAlign: textAlign || style.textAlign,
                  borderRadius: 0,
                  datasetIndex: meta.index
                };
              }, this);
            }
          },
          title: {
            color: function color(ctx) {
              return ctx.chart.options.color;
            },
            display: false,
            position: 'center',
            text: ''
          }
        },
        descriptors: {
          _scriptable: function _scriptable(name) {
            return !name.startsWith('on');
          },
          labels: {
            _scriptable: function _scriptable(name) {
              return !['generateLabels', 'filter', 'sort'].includes(name);
            }
          }
        }
      };

      var Title = /*#__PURE__*/function (_Element7) {
        _inherits(Title, _Element7);

        var _super17 = _createSuper(Title);

        function Title(config) {
          var _this29;

          _classCallCheck(this, Title);

          _this29 = _super17.call(this);
          _this29.chart = config.chart;
          _this29.options = config.options;
          _this29.ctx = config.ctx;
          _this29._padding = undefined;
          _this29.top = undefined;
          _this29.bottom = undefined;
          _this29.left = undefined;
          _this29.right = undefined;
          _this29.width = undefined;
          _this29.height = undefined;
          _this29.position = undefined;
          _this29.weight = undefined;
          _this29.fullSize = undefined;
          return _this29;
        }

        _createClass(Title, [{
          key: "update",
          value: function update(maxWidth, maxHeight) {
            var opts = this.options;
            this.left = 0;
            this.top = 0;

            if (!opts.display) {
              this.width = this.height = this.right = this.bottom = 0;
              return;
            }

            this.width = this.right = maxWidth;
            this.height = this.bottom = maxHeight;
            var lineCount = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(opts.text) ? opts.text.length : 1;
            this._padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(opts.padding);

            var textSize = lineCount * Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(opts.font).lineHeight + this._padding.height;

            if (this.isHorizontal()) {
              this.height = textSize;
            } else {
              this.width = textSize;
            }
          }
        }, {
          key: "isHorizontal",
          value: function isHorizontal() {
            var pos = this.options.position;
            return pos === 'top' || pos === 'bottom';
          }
        }, {
          key: "_drawArgs",
          value: function _drawArgs(offset) {
            var top = this.top,
                left = this.left,
                bottom = this.bottom,
                right = this.right,
                options = this.options;
            var align = options.align;
            var rotation = 0;
            var maxWidth, titleX, titleY;

            if (this.isHorizontal()) {
              titleX = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, left, right);
              titleY = top + offset;
              maxWidth = right - left;
            } else {
              if (options.position === 'left') {
                titleX = left + offset;
                titleY = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, bottom, top);
                rotation = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["P"] * -0.5;
              } else {
                titleX = right - offset;
                titleY = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a0"])(align, top, bottom);
                rotation = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["P"] * 0.5;
              }

              maxWidth = bottom - top;
            }

            return {
              titleX: titleX,
              titleY: titleY,
              maxWidth: maxWidth,
              rotation: rotation
            };
          }
        }, {
          key: "draw",
          value: function draw() {
            var ctx = this.ctx;
            var opts = this.options;

            if (!opts.display) {
              return;
            }

            var fontOpts = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(opts.font);
            var lineHeight = fontOpts.lineHeight;
            var offset = lineHeight / 2 + this._padding.top;

            var _this$_drawArgs = this._drawArgs(offset),
                titleX = _this$_drawArgs.titleX,
                titleY = _this$_drawArgs.titleY,
                maxWidth = _this$_drawArgs.maxWidth,
                rotation = _this$_drawArgs.rotation;

            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["X"])(ctx, opts.text, 0, 0, fontOpts, {
              color: opts.color,
              maxWidth: maxWidth,
              rotation: rotation,
              textAlign: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["$"])(opts.align),
              textBaseline: 'middle',
              translation: [titleX, titleY]
            });
          }
        }]);

        return Title;
      }(Element);

      function createTitle(chart, titleOpts) {
        var title = new Title({
          ctx: chart.ctx,
          options: titleOpts,
          chart: chart
        });
        layouts.configure(chart, title, titleOpts);
        layouts.addBox(chart, title);
        chart.titleBlock = title;
      }

      var plugin_title = {
        id: 'title',
        _element: Title,
        start: function start(chart, _args, options) {
          createTitle(chart, options);
        },
        stop: function stop(chart) {
          var titleBlock = chart.titleBlock;
          layouts.removeBox(chart, titleBlock);
          delete chart.titleBlock;
        },
        beforeUpdate: function beforeUpdate(chart, _args, options) {
          var title = chart.titleBlock;
          layouts.configure(chart, title, options);
          title.options = options;
        },
        defaults: {
          align: 'center',
          display: false,
          font: {
            weight: 'bold'
          },
          fullSize: true,
          padding: 10,
          position: 'top',
          text: '',
          weight: 2000
        },
        defaultRoutes: {
          color: 'color'
        },
        descriptors: {
          _scriptable: true,
          _indexable: false
        }
      };
      var map = new WeakMap();
      var plugin_subtitle = {
        id: 'subtitle',
        start: function start(chart, _args, options) {
          var title = new Title({
            ctx: chart.ctx,
            options: options,
            chart: chart
          });
          layouts.configure(chart, title, options);
          layouts.addBox(chart, title);
          map.set(chart, title);
        },
        stop: function stop(chart) {
          layouts.removeBox(chart, map.get(chart));
          map["delete"](chart);
        },
        beforeUpdate: function beforeUpdate(chart, _args, options) {
          var title = map.get(chart);
          layouts.configure(chart, title, options);
          title.options = options;
        },
        defaults: {
          align: 'center',
          display: false,
          font: {
            weight: 'normal'
          },
          fullSize: true,
          padding: 0,
          position: 'top',
          text: '',
          weight: 1500
        },
        defaultRoutes: {
          color: 'color'
        },
        descriptors: {
          _scriptable: true,
          _indexable: false
        }
      };
      var positioners = {
        average: function average(items) {
          if (!items.length) {
            return false;
          }

          var i, len;
          var x = 0;
          var y = 0;
          var count = 0;

          for (i = 0, len = items.length; i < len; ++i) {
            var el = items[i].element;

            if (el && el.hasValue()) {
              var pos = el.tooltipPosition();
              x += pos.x;
              y += pos.y;
              ++count;
            }
          }

          return {
            x: x / count,
            y: y / count
          };
        },
        nearest: function nearest(items, eventPosition) {
          if (!items.length) {
            return false;
          }

          var x = eventPosition.x;
          var y = eventPosition.y;
          var minDistance = Number.POSITIVE_INFINITY;
          var i, len, nearestElement;

          for (i = 0, len = items.length; i < len; ++i) {
            var el = items[i].element;

            if (el && el.hasValue()) {
              var center = el.getCenterPoint();
              var d = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aC"])(eventPosition, center);

              if (d < minDistance) {
                minDistance = d;
                nearestElement = el;
              }
            }
          }

          if (nearestElement) {
            var tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
          }

          return {
            x: x,
            y: y
          };
        }
      };

      function pushOrConcat(base, toPush) {
        if (toPush) {
          if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(toPush)) {
            Array.prototype.push.apply(base, toPush);
          } else {
            base.push(toPush);
          }
        }

        return base;
      }

      function splitNewlines(str) {
        if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
          return str.split('\n');
        }

        return str;
      }

      function createTooltipItem(chart, item) {
        var element = item.element,
            datasetIndex = item.datasetIndex,
            index = item.index;
        var controller = chart.getDatasetMeta(datasetIndex).controller;

        var _controller$getLabelA = controller.getLabelAndValue(index),
            label = _controller$getLabelA.label,
            value = _controller$getLabelA.value;

        return {
          chart: chart,
          label: label,
          parsed: controller.getParsed(index),
          raw: chart.data.datasets[datasetIndex].data[index],
          formattedValue: value,
          dataset: controller.getDataset(),
          dataIndex: index,
          datasetIndex: datasetIndex,
          element: element
        };
      }

      function getTooltipSize(tooltip, options) {
        var ctx = tooltip.chart.ctx;
        var body = tooltip.body,
            footer = tooltip.footer,
            title = tooltip.title;
        var boxWidth = options.boxWidth,
            boxHeight = options.boxHeight;
        var bodyFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(options.bodyFont);
        var titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(options.titleFont);
        var footerFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(options.footerFont);
        var titleLineCount = title.length;
        var footerLineCount = footer.length;
        var bodyLineItemCount = body.length;
        var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(options.padding);
        var height = padding.height;
        var width = 0;
        var combinedBodyLength = body.reduce(function (count, bodyItem) {
          return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
        }, 0);
        combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;

        if (titleLineCount) {
          height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
        }

        if (combinedBodyLength) {
          var bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
          height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
        }

        if (footerLineCount) {
          height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
        }

        var widthPadding = 0;

        var maxLineWidth = function maxLineWidth(line) {
          width = Math.max(width, ctx.measureText(line).width + widthPadding);
        };

        ctx.save();
        ctx.font = titleFont.string;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(tooltip.title, maxLineWidth);
        ctx.font = bodyFont.string;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
        widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(body, function (bodyItem) {
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(bodyItem.before, maxLineWidth);
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(bodyItem.lines, maxLineWidth);
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(bodyItem.after, maxLineWidth);
        });
        widthPadding = 0;
        ctx.font = footerFont.string;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(tooltip.footer, maxLineWidth);
        ctx.restore();
        width += padding.width;
        return {
          width: width,
          height: height
        };
      }

      function determineYAlign(chart, size) {
        var y = size.y,
            height = size.height;

        if (y < height / 2) {
          return 'top';
        } else if (y > chart.height - height / 2) {
          return 'bottom';
        }

        return 'center';
      }

      function doesNotFitWithAlign(xAlign, chart, options, size) {
        var x = size.x,
            width = size.width;
        var caret = options.caretSize + options.caretPadding;

        if (xAlign === 'left' && x + width + caret > chart.width) {
          return true;
        }

        if (xAlign === 'right' && x - width - caret < 0) {
          return true;
        }
      }

      function determineXAlign(chart, options, size, yAlign) {
        var x = size.x,
            width = size.width;
        var chartWidth = chart.width,
            _chart$chartArea = chart.chartArea,
            left = _chart$chartArea.left,
            right = _chart$chartArea.right;
        var xAlign = 'center';

        if (yAlign === 'center') {
          xAlign = x <= (left + right) / 2 ? 'left' : 'right';
        } else if (x <= width / 2) {
          xAlign = 'left';
        } else if (x >= chartWidth - width / 2) {
          xAlign = 'right';
        }

        if (doesNotFitWithAlign(xAlign, chart, options, size)) {
          xAlign = 'center';
        }

        return xAlign;
      }

      function determineAlignment(chart, options, size) {
        var yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
        return {
          xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
          yAlign: yAlign
        };
      }

      function alignX(size, xAlign) {
        var x = size.x,
            width = size.width;

        if (xAlign === 'right') {
          x -= width;
        } else if (xAlign === 'center') {
          x -= width / 2;
        }

        return x;
      }

      function alignY(size, yAlign, paddingAndSize) {
        var y = size.y,
            height = size.height;

        if (yAlign === 'top') {
          y += paddingAndSize;
        } else if (yAlign === 'bottom') {
          y -= height + paddingAndSize;
        } else {
          y -= height / 2;
        }

        return y;
      }

      function getBackgroundPoint(options, size, alignment, chart) {
        var caretSize = options.caretSize,
            caretPadding = options.caretPadding,
            cornerRadius = options.cornerRadius;
        var xAlign = alignment.xAlign,
            yAlign = alignment.yAlign;
        var paddingAndSize = caretSize + caretPadding;

        var _Object5 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["au"])(cornerRadius),
            topLeft = _Object5.topLeft,
            topRight = _Object5.topRight,
            bottomLeft = _Object5.bottomLeft,
            bottomRight = _Object5.bottomRight;

        var x = alignX(size, xAlign);
        var y = alignY(size, yAlign, paddingAndSize);

        if (yAlign === 'center') {
          if (xAlign === 'left') {
            x += paddingAndSize;
          } else if (xAlign === 'right') {
            x -= paddingAndSize;
          }
        } else if (xAlign === 'left') {
          x -= Math.max(topLeft, bottomLeft) + caretSize;
        } else if (xAlign === 'right') {
          x += Math.max(topRight, bottomRight) + caretSize;
        }

        return {
          x: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(x, 0, chart.width - size.width),
          y: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(y, 0, chart.height - size.height)
        };
      }

      function getAlignedX(tooltip, align, options) {
        var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(options.padding);
        return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
      }

      function getBeforeAfterBodyLines(callback) {
        return pushOrConcat([], splitNewlines(callback));
      }

      function createTooltipContext(parent, tooltip, tooltipItems) {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["h"])(parent, {
          tooltip: tooltip,
          tooltipItems: tooltipItems,
          type: 'tooltip'
        });
      }

      function overrideCallbacks(callbacks, context) {
        var override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
        return override ? callbacks.override(override) : callbacks;
      }

      var Tooltip = /*#__PURE__*/function (_Element8) {
        _inherits(Tooltip, _Element8);

        var _super18 = _createSuper(Tooltip);

        function Tooltip(config) {
          var _this30;

          _classCallCheck(this, Tooltip);

          _this30 = _super18.call(this);
          _this30.opacity = 0;
          _this30._active = [];
          _this30._eventPosition = undefined;
          _this30._size = undefined;
          _this30._cachedAnimations = undefined;
          _this30._tooltipItems = [];
          _this30.$animations = undefined;
          _this30.$context = undefined;
          _this30.chart = config.chart || config._chart;
          _this30._chart = _this30.chart;
          _this30.options = config.options;
          _this30.dataPoints = undefined;
          _this30.title = undefined;
          _this30.beforeBody = undefined;
          _this30.body = undefined;
          _this30.afterBody = undefined;
          _this30.footer = undefined;
          _this30.xAlign = undefined;
          _this30.yAlign = undefined;
          _this30.x = undefined;
          _this30.y = undefined;
          _this30.height = undefined;
          _this30.width = undefined;
          _this30.caretX = undefined;
          _this30.caretY = undefined;
          _this30.labelColors = undefined;
          _this30.labelPointStyles = undefined;
          _this30.labelTextColors = undefined;
          return _this30;
        }

        _createClass(Tooltip, [{
          key: "initialize",
          value: function initialize(options) {
            this.options = options;
            this._cachedAnimations = undefined;
            this.$context = undefined;
          }
        }, {
          key: "_resolveAnimations",
          value: function _resolveAnimations() {
            var cached = this._cachedAnimations;

            if (cached) {
              return cached;
            }

            var chart = this.chart;
            var options = this.options.setContext(this.getContext());
            var opts = options.enabled && chart.options.animation && options.animations;
            var animations = new Animations(this.chart, opts);

            if (opts._cacheable) {
              this._cachedAnimations = Object.freeze(animations);
            }

            return animations;
          }
        }, {
          key: "getContext",
          value: function getContext() {
            return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
          }
        }, {
          key: "getTitle",
          value: function getTitle(context, options) {
            var callbacks = options.callbacks;
            var beforeTitle = callbacks.beforeTitle.apply(this, [context]);
            var title = callbacks.title.apply(this, [context]);
            var afterTitle = callbacks.afterTitle.apply(this, [context]);
            var lines = [];
            lines = pushOrConcat(lines, splitNewlines(beforeTitle));
            lines = pushOrConcat(lines, splitNewlines(title));
            lines = pushOrConcat(lines, splitNewlines(afterTitle));
            return lines;
          }
        }, {
          key: "getBeforeBody",
          value: function getBeforeBody(tooltipItems, options) {
            return getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [tooltipItems]));
          }
        }, {
          key: "getBody",
          value: function getBody(tooltipItems, options) {
            var _this31 = this;

            var callbacks = options.callbacks;
            var bodyItems = [];
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(tooltipItems, function (context) {
              var bodyItem = {
                before: [],
                lines: [],
                after: []
              };
              var scoped = overrideCallbacks(callbacks, context);
              pushOrConcat(bodyItem.before, splitNewlines(scoped.beforeLabel.call(_this31, context)));
              pushOrConcat(bodyItem.lines, scoped.label.call(_this31, context));
              pushOrConcat(bodyItem.after, splitNewlines(scoped.afterLabel.call(_this31, context)));
              bodyItems.push(bodyItem);
            });
            return bodyItems;
          }
        }, {
          key: "getAfterBody",
          value: function getAfterBody(tooltipItems, options) {
            return getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [tooltipItems]));
          }
        }, {
          key: "getFooter",
          value: function getFooter(tooltipItems, options) {
            var callbacks = options.callbacks;
            var beforeFooter = callbacks.beforeFooter.apply(this, [tooltipItems]);
            var footer = callbacks.footer.apply(this, [tooltipItems]);
            var afterFooter = callbacks.afterFooter.apply(this, [tooltipItems]);
            var lines = [];
            lines = pushOrConcat(lines, splitNewlines(beforeFooter));
            lines = pushOrConcat(lines, splitNewlines(footer));
            lines = pushOrConcat(lines, splitNewlines(afterFooter));
            return lines;
          }
        }, {
          key: "_createItems",
          value: function _createItems(options) {
            var _this32 = this;

            var active = this._active;
            var data = this.chart.data;
            var labelColors = [];
            var labelPointStyles = [];
            var labelTextColors = [];
            var tooltipItems = [];
            var i, len;

            for (i = 0, len = active.length; i < len; ++i) {
              tooltipItems.push(createTooltipItem(this.chart, active[i]));
            }

            if (options.filter) {
              tooltipItems = tooltipItems.filter(function (element, index, array) {
                return options.filter(element, index, array, data);
              });
            }

            if (options.itemSort) {
              tooltipItems = tooltipItems.sort(function (a, b) {
                return options.itemSort(a, b, data);
              });
            }

            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(tooltipItems, function (context) {
              var scoped = overrideCallbacks(options.callbacks, context);
              labelColors.push(scoped.labelColor.call(_this32, context));
              labelPointStyles.push(scoped.labelPointStyle.call(_this32, context));
              labelTextColors.push(scoped.labelTextColor.call(_this32, context));
            });
            this.labelColors = labelColors;
            this.labelPointStyles = labelPointStyles;
            this.labelTextColors = labelTextColors;
            this.dataPoints = tooltipItems;
            return tooltipItems;
          }
        }, {
          key: "update",
          value: function update(changed, replay) {
            var options = this.options.setContext(this.getContext());
            var active = this._active;
            var properties;
            var tooltipItems = [];

            if (!active.length) {
              if (this.opacity !== 0) {
                properties = {
                  opacity: 0
                };
              }
            } else {
              var position = positioners[options.position].call(this, active, this._eventPosition);
              tooltipItems = this._createItems(options);
              this.title = this.getTitle(tooltipItems, options);
              this.beforeBody = this.getBeforeBody(tooltipItems, options);
              this.body = this.getBody(tooltipItems, options);
              this.afterBody = this.getAfterBody(tooltipItems, options);
              this.footer = this.getFooter(tooltipItems, options);
              var size = this._size = getTooltipSize(this, options);
              var positionAndSize = Object.assign({}, position, size);
              var alignment = determineAlignment(this.chart, options, positionAndSize);
              var backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
              this.xAlign = alignment.xAlign;
              this.yAlign = alignment.yAlign;
              properties = {
                opacity: 1,
                x: backgroundPoint.x,
                y: backgroundPoint.y,
                width: size.width,
                height: size.height,
                caretX: position.x,
                caretY: position.y
              };
            }

            this._tooltipItems = tooltipItems;
            this.$context = undefined;

            if (properties) {
              this._resolveAnimations().update(this, properties);
            }

            if (changed && options.external) {
              options.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: replay
              });
            }
          }
        }, {
          key: "drawCaret",
          value: function drawCaret(tooltipPoint, ctx, size, options) {
            var caretPosition = this.getCaretPosition(tooltipPoint, size, options);
            ctx.lineTo(caretPosition.x1, caretPosition.y1);
            ctx.lineTo(caretPosition.x2, caretPosition.y2);
            ctx.lineTo(caretPosition.x3, caretPosition.y3);
          }
        }, {
          key: "getCaretPosition",
          value: function getCaretPosition(tooltipPoint, size, options) {
            var xAlign = this.xAlign,
                yAlign = this.yAlign;
            var caretSize = options.caretSize,
                cornerRadius = options.cornerRadius;

            var _Object6 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["au"])(cornerRadius),
                topLeft = _Object6.topLeft,
                topRight = _Object6.topRight,
                bottomLeft = _Object6.bottomLeft,
                bottomRight = _Object6.bottomRight;

            var ptX = tooltipPoint.x,
                ptY = tooltipPoint.y;
            var width = size.width,
                height = size.height;
            var x1, x2, x3, y1, y2, y3;

            if (yAlign === 'center') {
              y2 = ptY + height / 2;

              if (xAlign === 'left') {
                x1 = ptX;
                x2 = x1 - caretSize;
                y1 = y2 + caretSize;
                y3 = y2 - caretSize;
              } else {
                x1 = ptX + width;
                x2 = x1 + caretSize;
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
              }

              x3 = x1;
            } else {
              if (xAlign === 'left') {
                x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
              } else if (xAlign === 'right') {
                x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
              } else {
                x2 = this.caretX;
              }

              if (yAlign === 'top') {
                y1 = ptY;
                y2 = y1 - caretSize;
                x1 = x2 - caretSize;
                x3 = x2 + caretSize;
              } else {
                y1 = ptY + height;
                y2 = y1 + caretSize;
                x1 = x2 + caretSize;
                x3 = x2 - caretSize;
              }

              y3 = y1;
            }

            return {
              x1: x1,
              x2: x2,
              x3: x3,
              y1: y1,
              y2: y2,
              y3: y3
            };
          }
        }, {
          key: "drawTitle",
          value: function drawTitle(pt, ctx, options) {
            var title = this.title;
            var length = title.length;
            var titleFont, titleSpacing, i;

            if (length) {
              var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ax"])(options.rtl, this.x, this.width);
              pt.x = getAlignedX(this, options.titleAlign, options);
              ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
              ctx.textBaseline = 'middle';
              titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(options.titleFont);
              titleSpacing = options.titleSpacing;
              ctx.fillStyle = options.titleColor;
              ctx.font = titleFont.string;

              for (i = 0; i < length; ++i) {
                ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
                pt.y += titleFont.lineHeight + titleSpacing;

                if (i + 1 === length) {
                  pt.y += options.titleMarginBottom - titleSpacing;
                }
              }
            }
          }
        }, {
          key: "_drawColorBox",
          value: function _drawColorBox(ctx, pt, i, rtlHelper, options) {
            var labelColors = this.labelColors[i];
            var labelPointStyle = this.labelPointStyles[i];
            var boxHeight = options.boxHeight,
                boxWidth = options.boxWidth,
                boxPadding = options.boxPadding;
            var bodyFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(options.bodyFont);
            var colorX = getAlignedX(this, 'left', options);
            var rtlColorX = rtlHelper.x(colorX);
            var yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
            var colorY = pt.y + yOffSet;

            if (options.usePointStyle) {
              var drawOptions = {
                radius: Math.min(boxWidth, boxHeight) / 2,
                pointStyle: labelPointStyle.pointStyle,
                rotation: labelPointStyle.rotation,
                borderWidth: 1
              };
              var centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
              var centerY = colorY + boxHeight / 2;
              ctx.strokeStyle = options.multiKeyBackground;
              ctx.fillStyle = options.multiKeyBackground;
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ar"])(ctx, drawOptions, centerX, centerY);
              ctx.strokeStyle = labelColors.borderColor;
              ctx.fillStyle = labelColors.backgroundColor;
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ar"])(ctx, drawOptions, centerX, centerY);
            } else {
              ctx.lineWidth = labelColors.borderWidth || 1;
              ctx.strokeStyle = labelColors.borderColor;
              ctx.setLineDash(labelColors.borderDash || []);
              ctx.lineDashOffset = labelColors.borderDashOffset || 0;
              var outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
              var innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
              var borderRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["au"])(labelColors.borderRadius);

              if (Object.values(borderRadius).some(function (v) {
                return v !== 0;
              })) {
                ctx.beginPath();
                ctx.fillStyle = options.multiKeyBackground;
                Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["as"])(ctx, {
                  x: outerX,
                  y: colorY,
                  w: boxWidth,
                  h: boxHeight,
                  radius: borderRadius
                });
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.beginPath();
                Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["as"])(ctx, {
                  x: innerX,
                  y: colorY + 1,
                  w: boxWidth - 2,
                  h: boxHeight - 2,
                  radius: borderRadius
                });
                ctx.fill();
              } else {
                ctx.fillStyle = options.multiKeyBackground;
                ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
                ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
              }
            }

            ctx.fillStyle = this.labelTextColors[i];
          }
        }, {
          key: "drawBody",
          value: function drawBody(pt, ctx, options) {
            var body = this.body;
            var bodySpacing = options.bodySpacing,
                bodyAlign = options.bodyAlign,
                displayColors = options.displayColors,
                boxHeight = options.boxHeight,
                boxWidth = options.boxWidth,
                boxPadding = options.boxPadding;
            var bodyFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(options.bodyFont);
            var bodyLineHeight = bodyFont.lineHeight;
            var xLinePadding = 0;
            var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ax"])(options.rtl, this.x, this.width);

            var fillLineOfText = function fillLineOfText(line) {
              ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
              pt.y += bodyLineHeight + bodySpacing;
            };

            var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
            var bodyItem, textColor, lines, i, j, ilen, jlen;
            ctx.textAlign = bodyAlign;
            ctx.textBaseline = 'middle';
            ctx.font = bodyFont.string;
            pt.x = getAlignedX(this, bodyAlignForCalculation, options);
            ctx.fillStyle = options.bodyColor;
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(this.beforeBody, fillLineOfText);
            xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;

            for (i = 0, ilen = body.length; i < ilen; ++i) {
              bodyItem = body[i];
              textColor = this.labelTextColors[i];
              ctx.fillStyle = textColor;
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(bodyItem.before, fillLineOfText);
              lines = bodyItem.lines;

              if (displayColors && lines.length) {
                this._drawColorBox(ctx, pt, i, rtlHelper, options);

                bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
              }

              for (j = 0, jlen = lines.length; j < jlen; ++j) {
                fillLineOfText(lines[j]);
                bodyLineHeight = bodyFont.lineHeight;
              }

              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(bodyItem.after, fillLineOfText);
            }

            xLinePadding = 0;
            bodyLineHeight = bodyFont.lineHeight;
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["D"])(this.afterBody, fillLineOfText);
            pt.y -= bodySpacing;
          }
        }, {
          key: "drawFooter",
          value: function drawFooter(pt, ctx, options) {
            var footer = this.footer;
            var length = footer.length;
            var footerFont, i;

            if (length) {
              var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ax"])(options.rtl, this.x, this.width);
              pt.x = getAlignedX(this, options.footerAlign, options);
              pt.y += options.footerMarginTop;
              ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
              ctx.textBaseline = 'middle';
              footerFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(options.footerFont);
              ctx.fillStyle = options.footerColor;
              ctx.font = footerFont.string;

              for (i = 0; i < length; ++i) {
                ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
                pt.y += footerFont.lineHeight + options.footerSpacing;
              }
            }
          }
        }, {
          key: "drawBackground",
          value: function drawBackground(pt, ctx, tooltipSize, options) {
            var xAlign = this.xAlign,
                yAlign = this.yAlign;
            var x = pt.x,
                y = pt.y;
            var width = tooltipSize.width,
                height = tooltipSize.height;

            var _Object7 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["au"])(options.cornerRadius),
                topLeft = _Object7.topLeft,
                topRight = _Object7.topRight,
                bottomLeft = _Object7.bottomLeft,
                bottomRight = _Object7.bottomRight;

            ctx.fillStyle = options.backgroundColor;
            ctx.strokeStyle = options.borderColor;
            ctx.lineWidth = options.borderWidth;
            ctx.beginPath();
            ctx.moveTo(x + topLeft, y);

            if (yAlign === 'top') {
              this.drawCaret(pt, ctx, tooltipSize, options);
            }

            ctx.lineTo(x + width - topRight, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);

            if (yAlign === 'center' && xAlign === 'right') {
              this.drawCaret(pt, ctx, tooltipSize, options);
            }

            ctx.lineTo(x + width, y + height - bottomRight);
            ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);

            if (yAlign === 'bottom') {
              this.drawCaret(pt, ctx, tooltipSize, options);
            }

            ctx.lineTo(x + bottomLeft, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);

            if (yAlign === 'center' && xAlign === 'left') {
              this.drawCaret(pt, ctx, tooltipSize, options);
            }

            ctx.lineTo(x, y + topLeft);
            ctx.quadraticCurveTo(x, y, x + topLeft, y);
            ctx.closePath();
            ctx.fill();

            if (options.borderWidth > 0) {
              ctx.stroke();
            }
          }
        }, {
          key: "_updateAnimationTarget",
          value: function _updateAnimationTarget(options) {
            var chart = this.chart;
            var anims = this.$animations;
            var animX = anims && anims.x;
            var animY = anims && anims.y;

            if (animX || animY) {
              var position = positioners[options.position].call(this, this._active, this._eventPosition);

              if (!position) {
                return;
              }

              var size = this._size = getTooltipSize(this, options);
              var positionAndSize = Object.assign({}, position, this._size);
              var alignment = determineAlignment(chart, options, positionAndSize);
              var point = getBackgroundPoint(options, positionAndSize, alignment, chart);

              if (animX._to !== point.x || animY._to !== point.y) {
                this.xAlign = alignment.xAlign;
                this.yAlign = alignment.yAlign;
                this.width = size.width;
                this.height = size.height;
                this.caretX = position.x;
                this.caretY = position.y;

                this._resolveAnimations().update(this, point);
              }
            }
          }
        }, {
          key: "draw",
          value: function draw(ctx) {
            var options = this.options.setContext(this.getContext());
            var opacity = this.opacity;

            if (!opacity) {
              return;
            }

            this._updateAnimationTarget(options);

            var tooltipSize = {
              width: this.width,
              height: this.height
            };
            var pt = {
              x: this.x,
              y: this.y
            };
            opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
            var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(options.padding);
            var hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;

            if (options.enabled && hasTooltipContent) {
              ctx.save();
              ctx.globalAlpha = opacity;
              this.drawBackground(pt, ctx, tooltipSize, options);
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["ay"])(ctx, options.textDirection);
              pt.y += padding.top;
              this.drawTitle(pt, ctx, options);
              this.drawBody(pt, ctx, options);
              this.drawFooter(pt, ctx, options);
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aA"])(ctx, options.textDirection);
              ctx.restore();
            }
          }
        }, {
          key: "getActiveElements",
          value: function getActiveElements() {
            return this._active || [];
          }
        }, {
          key: "setActiveElements",
          value: function setActiveElements(activeElements, eventPosition) {
            var _this33 = this;

            var lastActive = this._active;
            var active = activeElements.map(function (_ref10) {
              var datasetIndex = _ref10.datasetIndex,
                  index = _ref10.index;

              var meta = _this33.chart.getDatasetMeta(datasetIndex);

              if (!meta) {
                throw new Error('Cannot find a dataset at index ' + datasetIndex);
              }

              return {
                datasetIndex: datasetIndex,
                element: meta.data[index],
                index: index
              };
            });
            var changed = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["af"])(lastActive, active);

            var positionChanged = this._positionChanged(active, eventPosition);

            if (changed || positionChanged) {
              this._active = active;
              this._eventPosition = eventPosition;
              this._ignoreReplayEvents = true;
              this.update(true);
            }
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(e, replay) {
            var inChartArea = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (replay && this._ignoreReplayEvents) {
              return false;
            }

            this._ignoreReplayEvents = false;
            var options = this.options;
            var lastActive = this._active || [];

            var active = this._getActiveElements(e, lastActive, replay, inChartArea);

            var positionChanged = this._positionChanged(active, e);

            var changed = replay || !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["af"])(active, lastActive) || positionChanged;

            if (changed) {
              this._active = active;

              if (options.enabled || options.external) {
                this._eventPosition = {
                  x: e.x,
                  y: e.y
                };
                this.update(true, replay);
              }
            }

            return changed;
          }
        }, {
          key: "_getActiveElements",
          value: function _getActiveElements(e, lastActive, replay, inChartArea) {
            var options = this.options;

            if (e.type === 'mouseout') {
              return [];
            }

            if (!inChartArea) {
              return lastActive;
            }

            var active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);

            if (options.reverse) {
              active.reverse();
            }

            return active;
          }
        }, {
          key: "_positionChanged",
          value: function _positionChanged(active, e) {
            var caretX = this.caretX,
                caretY = this.caretY,
                options = this.options;
            var position = positioners[options.position].call(this, active, e);
            return position !== false && (caretX !== position.x || caretY !== position.y);
          }
        }]);

        return Tooltip;
      }(Element);

      Tooltip.positioners = positioners;
      var plugin_tooltip = {
        id: 'tooltip',
        _element: Tooltip,
        positioners: positioners,
        afterInit: function afterInit(chart, _args, options) {
          if (options) {
            chart.tooltip = new Tooltip({
              chart: chart,
              options: options
            });
          }
        },
        beforeUpdate: function beforeUpdate(chart, _args, options) {
          if (chart.tooltip) {
            chart.tooltip.initialize(options);
          }
        },
        reset: function reset(chart, _args, options) {
          if (chart.tooltip) {
            chart.tooltip.initialize(options);
          }
        },
        afterDraw: function afterDraw(chart) {
          var tooltip = chart.tooltip;
          var args = {
            tooltip: tooltip
          };

          if (chart.notifyPlugins('beforeTooltipDraw', args) === false) {
            return;
          }

          if (tooltip) {
            tooltip.draw(chart.ctx);
          }

          chart.notifyPlugins('afterTooltipDraw', args);
        },
        afterEvent: function afterEvent(chart, args) {
          if (chart.tooltip) {
            var useFinalPosition = args.replay;

            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
              args.changed = true;
            }
          }
        },
        defaults: {
          enabled: true,
          external: null,
          position: 'average',
          backgroundColor: 'rgba(0,0,0,0.8)',
          titleColor: '#fff',
          titleFont: {
            weight: 'bold'
          },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: 'left',
          bodyColor: '#fff',
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: 'left',
          footerColor: '#fff',
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: {
            weight: 'bold'
          },
          footerAlign: 'left',
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: function boxHeight(ctx, opts) {
            return opts.bodyFont.size;
          },
          boxWidth: function boxWidth(ctx, opts) {
            return opts.bodyFont.size;
          },
          multiKeyBackground: '#fff',
          displayColors: true,
          boxPadding: 0,
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          animation: {
            duration: 400,
            easing: 'easeOutQuart'
          },
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY']
            },
            opacity: {
              easing: 'linear',
              duration: 200
            }
          },
          callbacks: {
            beforeTitle: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aB"],
            title: function title(tooltipItems) {
              if (tooltipItems.length > 0) {
                var item = tooltipItems[0];
                var labels = item.chart.data.labels;
                var labelCount = labels ? labels.length : 0;

                if (this && this.options && this.options.mode === 'dataset') {
                  return item.dataset.label || '';
                } else if (item.label) {
                  return item.label;
                } else if (labelCount > 0 && item.dataIndex < labelCount) {
                  return labels[item.dataIndex];
                }
              }

              return '';
            },
            afterTitle: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aB"],
            beforeBody: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aB"],
            beforeLabel: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aB"],
            label: function label(tooltipItem) {
              if (this && this.options && this.options.mode === 'dataset') {
                return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
              }

              var label = tooltipItem.dataset.label || '';

              if (label) {
                label += ': ';
              }

              var value = tooltipItem.formattedValue;

              if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(value)) {
                label += value;
              }

              return label;
            },
            labelColor: function labelColor(tooltipItem) {
              var meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
              var options = meta.controller.getStyle(tooltipItem.dataIndex);
              return {
                borderColor: options.borderColor,
                backgroundColor: options.backgroundColor,
                borderWidth: options.borderWidth,
                borderDash: options.borderDash,
                borderDashOffset: options.borderDashOffset,
                borderRadius: 0
              };
            },
            labelTextColor: function labelTextColor() {
              return this.options.bodyColor;
            },
            labelPointStyle: function labelPointStyle(tooltipItem) {
              var meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
              var options = meta.controller.getStyle(tooltipItem.dataIndex);
              return {
                pointStyle: options.pointStyle,
                rotation: options.rotation
              };
            },
            afterLabel: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aB"],
            afterBody: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aB"],
            beforeFooter: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aB"],
            footer: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aB"],
            afterFooter: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aB"]
          }
        },
        defaultRoutes: {
          bodyFont: 'font',
          footerFont: 'font',
          titleFont: 'font'
        },
        descriptors: {
          _scriptable: function _scriptable(name) {
            return name !== 'filter' && name !== 'itemSort' && name !== 'external';
          },
          _indexable: false,
          callbacks: {
            _scriptable: false,
            _indexable: false
          },
          animation: {
            _fallback: false
          },
          animations: {
            _fallback: 'animation'
          }
        },
        additionalOptionScopes: ['interaction']
      };
      var plugins = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Decimation: plugin_decimation,
        Filler: plugin_filler,
        Legend: plugin_legend,
        SubTitle: plugin_subtitle,
        Title: plugin_title,
        Tooltip: plugin_tooltip
      });

      var addIfString = function addIfString(labels, raw, index, addedLabels) {
        if (typeof raw === 'string') {
          index = labels.push(raw) - 1;
          addedLabels.unshift({
            index: index,
            label: raw
          });
        } else if (isNaN(raw)) {
          index = null;
        }

        return index;
      };

      function findOrAddLabel(labels, raw, index, addedLabels) {
        var first = labels.indexOf(raw);

        if (first === -1) {
          return addIfString(labels, raw, index, addedLabels);
        }

        var last = labels.lastIndexOf(raw);
        return first !== last ? index : first;
      }

      var validIndex = function validIndex(index, max) {
        return index === null ? null : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(Math.round(index), 0, max);
      };

      var CategoryScale = /*#__PURE__*/function (_Scale) {
        _inherits(CategoryScale, _Scale);

        var _super19 = _createSuper(CategoryScale);

        function CategoryScale(cfg) {
          var _this34;

          _classCallCheck(this, CategoryScale);

          _this34 = _super19.call(this, cfg);
          _this34._startValue = undefined;
          _this34._valueRange = 0;
          _this34._addedLabels = [];
          return _this34;
        }

        _createClass(CategoryScale, [{
          key: "init",
          value: function init(scaleOptions) {
            var added = this._addedLabels;

            if (added.length) {
              var labels = this.getLabels();

              var _iterator32 = _createForOfIteratorHelper(added),
                  _step32;

              try {
                for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                  var _step32$value = _step32.value,
                      index = _step32$value.index,
                      label = _step32$value.label;

                  if (labels[index] === label) {
                    labels.splice(index, 1);
                  }
                }
              } catch (err) {
                _iterator32.e(err);
              } finally {
                _iterator32.f();
              }

              this._addedLabels = [];
            }

            _get(_getPrototypeOf(CategoryScale.prototype), "init", this).call(this, scaleOptions);
          }
        }, {
          key: "parse",
          value: function parse(raw, index) {
            if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(raw)) {
              return null;
            }

            var labels = this.getLabels();
            index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(index, raw), this._addedLabels);
            return validIndex(index, labels.length - 1);
          }
        }, {
          key: "determineDataLimits",
          value: function determineDataLimits() {
            var _this$getUserBounds2 = this.getUserBounds(),
                minDefined = _this$getUserBounds2.minDefined,
                maxDefined = _this$getUserBounds2.maxDefined;

            var _this$getMinMax = this.getMinMax(true),
                min = _this$getMinMax.min,
                max = _this$getMinMax.max;

            if (this.options.bounds === 'ticks') {
              if (!minDefined) {
                min = 0;
              }

              if (!maxDefined) {
                max = this.getLabels().length - 1;
              }
            }

            this.min = min;
            this.max = max;
          }
        }, {
          key: "buildTicks",
          value: function buildTicks() {
            var min = this.min;
            var max = this.max;
            var offset = this.options.offset;
            var ticks = [];
            var labels = this.getLabels();
            labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
            this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
            this._startValue = this.min - (offset ? 0.5 : 0);

            for (var value = min; value <= max; value++) {
              ticks.push({
                value: value
              });
            }

            return ticks;
          }
        }, {
          key: "getLabelForValue",
          value: function getLabelForValue(value) {
            var labels = this.getLabels();

            if (value >= 0 && value < labels.length) {
              return labels[value];
            }

            return value;
          }
        }, {
          key: "configure",
          value: function configure() {
            _get(_getPrototypeOf(CategoryScale.prototype), "configure", this).call(this);

            if (!this.isHorizontal()) {
              this._reversePixels = !this._reversePixels;
            }
          }
        }, {
          key: "getPixelForValue",
          value: function getPixelForValue(value) {
            if (typeof value !== 'number') {
              value = this.parse(value);
            }

            return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
          }
        }, {
          key: "getPixelForTick",
          value: function getPixelForTick(index) {
            var ticks = this.ticks;

            if (index < 0 || index > ticks.length - 1) {
              return null;
            }

            return this.getPixelForValue(ticks[index].value);
          }
        }, {
          key: "getValueForPixel",
          value: function getValueForPixel(pixel) {
            return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
          }
        }, {
          key: "getBasePixel",
          value: function getBasePixel() {
            return this.bottom;
          }
        }]);

        return CategoryScale;
      }(Scale);

      CategoryScale.id = 'category';
      CategoryScale.defaults = {
        ticks: {
          callback: CategoryScale.prototype.getLabelForValue
        }
      };

      function generateTicks$1(generationOptions, dataRange) {
        var ticks = [];
        var MIN_SPACING = 1e-14;
        var bounds = generationOptions.bounds,
            step = generationOptions.step,
            min = generationOptions.min,
            max = generationOptions.max,
            precision = generationOptions.precision,
            count = generationOptions.count,
            maxTicks = generationOptions.maxTicks,
            maxDigits = generationOptions.maxDigits,
            includeBounds = generationOptions.includeBounds;
        var unit = step || 1;
        var maxSpaces = maxTicks - 1;
        var rmin = dataRange.min,
            rmax = dataRange.max;
        var minDefined = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(min);
        var maxDefined = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(max);
        var countDefined = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(count);
        var minSpacing = (rmax - rmin) / (maxDigits + 1);
        var spacing = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aE"])((rmax - rmin) / maxSpaces / unit) * unit;
        var factor, niceMin, niceMax, numSpaces;

        if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
          return [{
            value: rmin
          }, {
            value: rmax
          }];
        }

        numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);

        if (numSpaces > maxSpaces) {
          spacing = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aE"])(numSpaces * spacing / maxSpaces / unit) * unit;
        }

        if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(precision)) {
          factor = Math.pow(10, precision);
          spacing = Math.ceil(spacing * factor) / factor;
        }

        if (bounds === 'ticks') {
          niceMin = Math.floor(rmin / spacing) * spacing;
          niceMax = Math.ceil(rmax / spacing) * spacing;
        } else {
          niceMin = rmin;
          niceMax = rmax;
        }

        if (minDefined && maxDefined && step && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aF"])((max - min) / step, spacing / 1000)) {
          numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
          spacing = (max - min) / numSpaces;
          niceMin = min;
          niceMax = max;
        } else if (countDefined) {
          niceMin = minDefined ? min : niceMin;
          niceMax = maxDefined ? max : niceMax;
          numSpaces = count - 1;
          spacing = (niceMax - niceMin) / numSpaces;
        } else {
          numSpaces = (niceMax - niceMin) / spacing;

          if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aG"])(numSpaces, Math.round(numSpaces), spacing / 1000)) {
            numSpaces = Math.round(numSpaces);
          } else {
            numSpaces = Math.ceil(numSpaces);
          }
        }

        var decimalPlaces = Math.max(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aH"])(spacing), Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aH"])(niceMin));
        factor = Math.pow(10, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(precision) ? decimalPlaces : precision);
        niceMin = Math.round(niceMin * factor) / factor;
        niceMax = Math.round(niceMax * factor) / factor;
        var j = 0;

        if (minDefined) {
          if (includeBounds && niceMin !== min) {
            ticks.push({
              value: min
            });

            if (niceMin < min) {
              j++;
            }

            if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aG"])(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
              j++;
            }
          } else if (niceMin < min) {
            j++;
          }
        }

        for (; j < numSpaces; ++j) {
          ticks.push({
            value: Math.round((niceMin + j * spacing) * factor) / factor
          });
        }

        if (maxDefined && includeBounds && niceMax !== max) {
          if (ticks.length && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aG"])(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
            ticks[ticks.length - 1].value = max;
          } else {
            ticks.push({
              value: max
            });
          }
        } else if (!maxDefined || niceMax === max) {
          ticks.push({
            value: niceMax
          });
        }

        return ticks;
      }

      function relativeLabelSize(value, minSpacing, _ref11) {
        var horizontal = _ref11.horizontal,
            minRotation = _ref11.minRotation;
        var rad = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(minRotation);
        var ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
        var length = 0.75 * minSpacing * ('' + value).length;
        return Math.min(minSpacing / ratio, length);
      }

      var LinearScaleBase = /*#__PURE__*/function (_Scale2) {
        _inherits(LinearScaleBase, _Scale2);

        var _super20 = _createSuper(LinearScaleBase);

        function LinearScaleBase(cfg) {
          var _this35;

          _classCallCheck(this, LinearScaleBase);

          _this35 = _super20.call(this, cfg);
          _this35.start = undefined;
          _this35.end = undefined;
          _this35._startValue = undefined;
          _this35._endValue = undefined;
          _this35._valueRange = 0;
          return _this35;
        }

        _createClass(LinearScaleBase, [{
          key: "parse",
          value: function parse(raw, index) {
            if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(raw)) {
              return null;
            }

            if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
              return null;
            }

            return +raw;
          }
        }, {
          key: "handleTickRangeOptions",
          value: function handleTickRangeOptions() {
            var beginAtZero = this.options.beginAtZero;

            var _this$getUserBounds3 = this.getUserBounds(),
                minDefined = _this$getUserBounds3.minDefined,
                maxDefined = _this$getUserBounds3.maxDefined;

            var min = this.min,
                max = this.max;

            var setMin = function setMin(v) {
              return min = minDefined ? min : v;
            };

            var setMax = function setMax(v) {
              return max = maxDefined ? max : v;
            };

            if (beginAtZero) {
              var minSign = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["s"])(min);
              var maxSign = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["s"])(max);

              if (minSign < 0 && maxSign < 0) {
                setMax(0);
              } else if (minSign > 0 && maxSign > 0) {
                setMin(0);
              }
            }

            if (min === max) {
              var offset = 1;

              if (max >= Number.MAX_SAFE_INTEGER || min <= Number.MIN_SAFE_INTEGER) {
                offset = Math.abs(max * 0.05);
              }

              setMax(max + offset);

              if (!beginAtZero) {
                setMin(min - offset);
              }
            }

            this.min = min;
            this.max = max;
          }
        }, {
          key: "getTickLimit",
          value: function getTickLimit() {
            var tickOpts = this.options.ticks;
            var maxTicksLimit = tickOpts.maxTicksLimit,
                stepSize = tickOpts.stepSize;
            var maxTicks;

            if (stepSize) {
              maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;

              if (maxTicks > 1000) {
                console.warn("scales.".concat(this.id, ".ticks.stepSize: ").concat(stepSize, " would result generating up to ").concat(maxTicks, " ticks. Limiting to 1000."));
                maxTicks = 1000;
              }
            } else {
              maxTicks = this.computeTickLimit();
              maxTicksLimit = maxTicksLimit || 11;
            }

            if (maxTicksLimit) {
              maxTicks = Math.min(maxTicksLimit, maxTicks);
            }

            return maxTicks;
          }
        }, {
          key: "computeTickLimit",
          value: function computeTickLimit() {
            return Number.POSITIVE_INFINITY;
          }
        }, {
          key: "buildTicks",
          value: function buildTicks() {
            var opts = this.options;
            var tickOpts = opts.ticks;
            var maxTicks = this.getTickLimit();
            maxTicks = Math.max(2, maxTicks);
            var numericGeneratorOptions = {
              maxTicks: maxTicks,
              bounds: opts.bounds,
              min: opts.min,
              max: opts.max,
              precision: tickOpts.precision,
              step: tickOpts.stepSize,
              count: tickOpts.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: tickOpts.minRotation || 0,
              includeBounds: tickOpts.includeBounds !== false
            };
            var dataRange = this._range || this;
            var ticks = generateTicks$1(numericGeneratorOptions, dataRange);

            if (opts.bounds === 'ticks') {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aD"])(ticks, this, 'value');
            }

            if (opts.reverse) {
              ticks.reverse();
              this.start = this.max;
              this.end = this.min;
            } else {
              this.start = this.min;
              this.end = this.max;
            }

            return ticks;
          }
        }, {
          key: "configure",
          value: function configure() {
            var ticks = this.ticks;
            var start = this.min;
            var end = this.max;

            _get(_getPrototypeOf(LinearScaleBase.prototype), "configure", this).call(this);

            if (this.options.offset && ticks.length) {
              var offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
              start -= offset;
              end += offset;
            }

            this._startValue = start;
            this._endValue = end;
            this._valueRange = end - start;
          }
        }, {
          key: "getLabelForValue",
          value: function getLabelForValue(value) {
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["o"])(value, this.chart.options.locale, this.options.ticks.format);
          }
        }]);

        return LinearScaleBase;
      }(Scale);

      var LinearScale = /*#__PURE__*/function (_LinearScaleBase) {
        _inherits(LinearScale, _LinearScaleBase);

        var _super21 = _createSuper(LinearScale);

        function LinearScale() {
          _classCallCheck(this, LinearScale);

          return _super21.apply(this, arguments);
        }

        _createClass(LinearScale, [{
          key: "determineDataLimits",
          value: function determineDataLimits() {
            var _this$getMinMax2 = this.getMinMax(true),
                min = _this$getMinMax2.min,
                max = _this$getMinMax2.max;

            this.min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(min) ? min : 0;
            this.max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(max) ? max : 1;
            this.handleTickRangeOptions();
          }
        }, {
          key: "computeTickLimit",
          value: function computeTickLimit() {
            var horizontal = this.isHorizontal();
            var length = horizontal ? this.width : this.height;
            var minRotation = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(this.options.ticks.minRotation);
            var ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;

            var tickFont = this._resolveTickFontOptions(0);

            return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
          }
        }, {
          key: "getPixelForValue",
          value: function getPixelForValue(value) {
            return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
          }
        }, {
          key: "getValueForPixel",
          value: function getValueForPixel(pixel) {
            return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
          }
        }]);

        return LinearScale;
      }(LinearScaleBase);

      LinearScale.id = 'linear';
      LinearScale.defaults = {
        ticks: {
          callback: Ticks.formatters.numeric
        }
      };

      function isMajor(tickVal) {
        var remain = tickVal / Math.pow(10, Math.floor(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(tickVal)));
        return remain === 1;
      }

      function generateTicks(generationOptions, dataRange) {
        var endExp = Math.floor(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(dataRange.max));
        var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
        var ticks = [];
        var tickVal = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(generationOptions.min, Math.pow(10, Math.floor(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(dataRange.min))));
        var exp = Math.floor(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(tickVal));
        var significand = Math.floor(tickVal / Math.pow(10, exp));
        var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

        do {
          ticks.push({
            value: tickVal,
            major: isMajor(tickVal)
          });
          ++significand;

          if (significand === 10) {
            significand = 1;
            ++exp;
            precision = exp >= 0 ? 1 : precision;
          }

          tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
        } while (exp < endExp || exp === endExp && significand < endSignificand);

        var lastTick = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["N"])(generationOptions.max, tickVal);
        ticks.push({
          value: lastTick,
          major: isMajor(tickVal)
        });
        return ticks;
      }

      var LogarithmicScale = /*#__PURE__*/function (_Scale3) {
        _inherits(LogarithmicScale, _Scale3);

        var _super22 = _createSuper(LogarithmicScale);

        function LogarithmicScale(cfg) {
          var _this36;

          _classCallCheck(this, LogarithmicScale);

          _this36 = _super22.call(this, cfg);
          _this36.start = undefined;
          _this36.end = undefined;
          _this36._startValue = undefined;
          _this36._valueRange = 0;
          return _this36;
        }

        _createClass(LogarithmicScale, [{
          key: "parse",
          value: function parse(raw, index) {
            var value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);

            if (value === 0) {
              this._zero = true;
              return undefined;
            }

            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(value) && value > 0 ? value : null;
          }
        }, {
          key: "determineDataLimits",
          value: function determineDataLimits() {
            var _this$getMinMax3 = this.getMinMax(true),
                min = _this$getMinMax3.min,
                max = _this$getMinMax3.max;

            this.min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(min) ? Math.max(0, min) : null;
            this.max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(max) ? Math.max(0, max) : null;

            if (this.options.beginAtZero) {
              this._zero = true;
            }

            this.handleTickRangeOptions();
          }
        }, {
          key: "handleTickRangeOptions",
          value: function handleTickRangeOptions() {
            var _this$getUserBounds4 = this.getUserBounds(),
                minDefined = _this$getUserBounds4.minDefined,
                maxDefined = _this$getUserBounds4.maxDefined;

            var min = this.min;
            var max = this.max;

            var setMin = function setMin(v) {
              return min = minDefined ? min : v;
            };

            var setMax = function setMax(v) {
              return max = maxDefined ? max : v;
            };

            var exp = function exp(v, m) {
              return Math.pow(10, Math.floor(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(v)) + m);
            };

            if (min === max) {
              if (min <= 0) {
                setMin(1);
                setMax(10);
              } else {
                setMin(exp(min, -1));
                setMax(exp(max, +1));
              }
            }

            if (min <= 0) {
              setMin(exp(max, -1));
            }

            if (max <= 0) {
              setMax(exp(min, +1));
            }

            if (this._zero && this.min !== this._suggestedMin && min === exp(this.min, 0)) {
              setMin(exp(min, -1));
            }

            this.min = min;
            this.max = max;
          }
        }, {
          key: "buildTicks",
          value: function buildTicks() {
            var opts = this.options;
            var generationOptions = {
              min: this._userMin,
              max: this._userMax
            };
            var ticks = generateTicks(generationOptions, this);

            if (opts.bounds === 'ticks') {
              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aD"])(ticks, this, 'value');
            }

            if (opts.reverse) {
              ticks.reverse();
              this.start = this.max;
              this.end = this.min;
            } else {
              this.start = this.min;
              this.end = this.max;
            }

            return ticks;
          }
        }, {
          key: "getLabelForValue",
          value: function getLabelForValue(value) {
            return value === undefined ? '0' : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["o"])(value, this.chart.options.locale, this.options.ticks.format);
          }
        }, {
          key: "configure",
          value: function configure() {
            var start = this.min;

            _get(_getPrototypeOf(LogarithmicScale.prototype), "configure", this).call(this);

            this._startValue = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(start);
            this._valueRange = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(this.max) - Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(start);
          }
        }, {
          key: "getPixelForValue",
          value: function getPixelForValue(value) {
            if (value === undefined || value === 0) {
              value = this.min;
            }

            if (value === null || isNaN(value)) {
              return NaN;
            }

            return this.getPixelForDecimal(value === this.min ? 0 : (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["L"])(value) - this._startValue) / this._valueRange);
          }
        }, {
          key: "getValueForPixel",
          value: function getValueForPixel(pixel) {
            var decimal = this.getDecimalForPixel(pixel);
            return Math.pow(10, this._startValue + decimal * this._valueRange);
          }
        }]);

        return LogarithmicScale;
      }(Scale);

      LogarithmicScale.id = 'logarithmic';
      LogarithmicScale.defaults = {
        ticks: {
          callback: Ticks.formatters.logarithmic,
          major: {
            enabled: true
          }
        }
      };

      function getTickBackdropHeight(opts) {
        var tickOpts = opts.ticks;

        if (tickOpts.display && opts.display) {
          var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(tickOpts.backdropPadding);
          return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(tickOpts.font && tickOpts.font.size, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["d"].font.size) + padding.height;
        }

        return 0;
      }

      function measureLabelSize(ctx, font, label) {
        label = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["b"])(label) ? label : [label];
        return {
          w: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aI"])(ctx, font.string, label),
          h: label.length * font.lineHeight
        };
      }

      function determineLimits(angle, pos, size, min, max) {
        if (angle === min || angle === max) {
          return {
            start: pos - size / 2,
            end: pos + size / 2
          };
        } else if (angle < min || angle > max) {
          return {
            start: pos - size,
            end: pos
          };
        }

        return {
          start: pos,
          end: pos + size
        };
      }

      function fitWithPointLabels(scale) {
        var orig = {
          l: scale.left + scale._padding.left,
          r: scale.right - scale._padding.right,
          t: scale.top + scale._padding.top,
          b: scale.bottom - scale._padding.bottom
        };
        var limits = Object.assign({}, orig);
        var labelSizes = [];
        var padding = [];
        var valueCount = scale._pointLabels.length;
        var pointLabelOpts = scale.options.pointLabels;
        var additionalAngle = pointLabelOpts.centerPointLabels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["P"] / valueCount : 0;

        for (var i = 0; i < valueCount; i++) {
          var opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
          padding[i] = opts.padding;
          var pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
          var plFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(opts.font);
          var textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
          labelSizes[i] = textSize;
          var angleRadians = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aw"])(scale.getIndexAngle(i) + additionalAngle);
          var angle = Math.round(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["R"])(angleRadians));
          var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
          var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
          updateLimits(limits, orig, angleRadians, hLimits, vLimits);
        }

        scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
        scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
      }

      function updateLimits(limits, orig, angle, hLimits, vLimits) {
        var sin = Math.abs(Math.sin(angle));
        var cos = Math.abs(Math.cos(angle));
        var x = 0;
        var y = 0;

        if (hLimits.start < orig.l) {
          x = (orig.l - hLimits.start) / sin;
          limits.l = Math.min(limits.l, orig.l - x);
        } else if (hLimits.end > orig.r) {
          x = (hLimits.end - orig.r) / sin;
          limits.r = Math.max(limits.r, orig.r + x);
        }

        if (vLimits.start < orig.t) {
          y = (orig.t - vLimits.start) / cos;
          limits.t = Math.min(limits.t, orig.t - y);
        } else if (vLimits.end > orig.b) {
          y = (vLimits.end - orig.b) / cos;
          limits.b = Math.max(limits.b, orig.b + y);
        }
      }

      function buildPointLabelItems(scale, labelSizes, padding) {
        var items = [];
        var valueCount = scale._pointLabels.length;
        var opts = scale.options;
        var extra = getTickBackdropHeight(opts) / 2;
        var outerDistance = scale.drawingArea;
        var additionalAngle = opts.pointLabels.centerPointLabels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["P"] / valueCount : 0;

        for (var i = 0; i < valueCount; i++) {
          var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
          var angle = Math.round(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["R"])(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aw"])(pointLabelPosition.angle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"])));
          var size = labelSizes[i];
          var y = yForAngle(pointLabelPosition.y, size.h, angle);
          var textAlign = getTextAlignForAngle(angle);
          var left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
          items.push({
            x: pointLabelPosition.x,
            y: y,
            textAlign: textAlign,
            left: left,
            top: y,
            right: left + size.w,
            bottom: y + size.h
          });
        }

        return items;
      }

      function getTextAlignForAngle(angle) {
        if (angle === 0 || angle === 180) {
          return 'center';
        } else if (angle < 180) {
          return 'left';
        }

        return 'right';
      }

      function leftForTextAlign(x, w, align) {
        if (align === 'right') {
          x -= w;
        } else if (align === 'center') {
          x -= w / 2;
        }

        return x;
      }

      function yForAngle(y, h, angle) {
        if (angle === 90 || angle === 270) {
          y -= h / 2;
        } else if (angle > 270 || angle < 90) {
          y -= h;
        }

        return y;
      }

      function drawPointLabels(scale, labelCount) {
        var ctx = scale.ctx,
            pointLabels = scale.options.pointLabels;

        for (var i = labelCount - 1; i >= 0; i--) {
          var optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
          var plFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(optsAtIndex.font);
          var _scale$_pointLabelIte = scale._pointLabelItems[i],
              x = _scale$_pointLabelIte.x,
              y = _scale$_pointLabelIte.y,
              textAlign = _scale$_pointLabelIte.textAlign,
              left = _scale$_pointLabelIte.left,
              top = _scale$_pointLabelIte.top,
              right = _scale$_pointLabelIte.right,
              bottom = _scale$_pointLabelIte.bottom;
          var backdropColor = optsAtIndex.backdropColor;

          if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(backdropColor)) {
            var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(optsAtIndex.backdropPadding);
            ctx.fillStyle = backdropColor;
            ctx.fillRect(left - padding.left, top - padding.top, right - left + padding.width, bottom - top + padding.height);
          }

          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["X"])(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
            color: optsAtIndex.color,
            textAlign: textAlign,
            textBaseline: 'middle'
          });
        }
      }

      function pathRadiusLine(scale, radius, circular, labelCount) {
        var ctx = scale.ctx;

        if (circular) {
          ctx.arc(scale.xCenter, scale.yCenter, radius, 0, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"]);
        } else {
          var pointPosition = scale.getPointPosition(0, radius);
          ctx.moveTo(pointPosition.x, pointPosition.y);

          for (var i = 1; i < labelCount; i++) {
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
          }
        }
      }

      function drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
        var ctx = scale.ctx;
        var circular = gridLineOpts.circular;
        var color = gridLineOpts.color,
            lineWidth = gridLineOpts.lineWidth;

        if (!circular && !labelCount || !color || !lineWidth || radius < 0) {
          return;
        }

        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.setLineDash(gridLineOpts.borderDash);
        ctx.lineDashOffset = gridLineOpts.borderDashOffset;
        ctx.beginPath();
        pathRadiusLine(scale, radius, circular, labelCount);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      function createPointLabelContext(parent, index, label) {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["h"])(parent, {
          label: label,
          index: index,
          type: 'pointLabel'
        });
      }

      var RadialLinearScale = /*#__PURE__*/function (_LinearScaleBase2) {
        _inherits(RadialLinearScale, _LinearScaleBase2);

        var _super23 = _createSuper(RadialLinearScale);

        function RadialLinearScale(cfg) {
          var _this37;

          _classCallCheck(this, RadialLinearScale);

          _this37 = _super23.call(this, cfg);
          _this37.xCenter = undefined;
          _this37.yCenter = undefined;
          _this37.drawingArea = undefined;
          _this37._pointLabels = [];
          _this37._pointLabelItems = [];
          return _this37;
        }

        _createClass(RadialLinearScale, [{
          key: "setDimensions",
          value: function setDimensions() {
            var padding = this._padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(getTickBackdropHeight(this.options) / 2);
            var w = this.width = this.maxWidth - padding.width;
            var h = this.height = this.maxHeight - padding.height;
            this.xCenter = Math.floor(this.left + w / 2 + padding.left);
            this.yCenter = Math.floor(this.top + h / 2 + padding.top);
            this.drawingArea = Math.floor(Math.min(w, h) / 2);
          }
        }, {
          key: "determineDataLimits",
          value: function determineDataLimits() {
            var _this$getMinMax4 = this.getMinMax(false),
                min = _this$getMinMax4.min,
                max = _this$getMinMax4.max;

            this.min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(min) && !isNaN(min) ? min : 0;
            this.max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(max) && !isNaN(max) ? max : 0;
            this.handleTickRangeOptions();
          }
        }, {
          key: "computeTickLimit",
          value: function computeTickLimit() {
            return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
          }
        }, {
          key: "generateTickLabels",
          value: function generateTickLabels(ticks) {
            var _this38 = this;

            LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
            this._pointLabels = this.getLabels().map(function (value, index) {
              var label = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(_this38.options.pointLabels.callback, [value, index], _this38);
              return label || label === 0 ? label : '';
            }).filter(function (v, i) {
              return _this38.chart.getDataVisibility(i);
            });
          }
        }, {
          key: "fit",
          value: function fit() {
            var opts = this.options;

            if (opts.display && opts.pointLabels.display) {
              fitWithPointLabels(this);
            } else {
              this.setCenterPoint(0, 0, 0, 0);
            }
          }
        }, {
          key: "setCenterPoint",
          value: function setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
            this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
            this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
            this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
          }
        }, {
          key: "getIndexAngle",
          value: function getIndexAngle(index) {
            var angleMultiplier = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["T"] / (this._pointLabels.length || 1);
            var startAngle = this.options.startAngle || 0;
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aw"])(index * angleMultiplier + Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(startAngle));
          }
        }, {
          key: "getDistanceFromCenterForValue",
          value: function getDistanceFromCenterForValue(value) {
            if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(value)) {
              return NaN;
            }

            var scalingFactor = this.drawingArea / (this.max - this.min);

            if (this.options.reverse) {
              return (this.max - value) * scalingFactor;
            }

            return (value - this.min) * scalingFactor;
          }
        }, {
          key: "getValueForDistanceFromCenter",
          value: function getValueForDistanceFromCenter(distance) {
            if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(distance)) {
              return NaN;
            }

            var scaledDistance = distance / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
          }
        }, {
          key: "getPointLabelContext",
          value: function getPointLabelContext(index) {
            var pointLabels = this._pointLabels || [];

            if (index >= 0 && index < pointLabels.length) {
              var pointLabel = pointLabels[index];
              return createPointLabelContext(this.getContext(), index, pointLabel);
            }
          }
        }, {
          key: "getPointPosition",
          value: function getPointPosition(index, distanceFromCenter) {
            var additionalAngle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var angle = this.getIndexAngle(index) - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["H"] + additionalAngle;
            return {
              x: Math.cos(angle) * distanceFromCenter + this.xCenter,
              y: Math.sin(angle) * distanceFromCenter + this.yCenter,
              angle: angle
            };
          }
        }, {
          key: "getPointPositionForValue",
          value: function getPointPositionForValue(index, value) {
            return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
          }
        }, {
          key: "getBasePosition",
          value: function getBasePosition(index) {
            return this.getPointPositionForValue(index || 0, this.getBaseValue());
          }
        }, {
          key: "getPointLabelPosition",
          value: function getPointLabelPosition(index) {
            var _this$_pointLabelItem = this._pointLabelItems[index],
                left = _this$_pointLabelItem.left,
                top = _this$_pointLabelItem.top,
                right = _this$_pointLabelItem.right,
                bottom = _this$_pointLabelItem.bottom;
            return {
              left: left,
              top: top,
              right: right,
              bottom: bottom
            };
          }
        }, {
          key: "drawBackground",
          value: function drawBackground() {
            var _this$options14 = this.options,
                backgroundColor = _this$options14.backgroundColor,
                circular = _this$options14.grid.circular;

            if (backgroundColor) {
              var ctx = this.ctx;
              ctx.save();
              ctx.beginPath();
              pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
              ctx.closePath();
              ctx.fillStyle = backgroundColor;
              ctx.fill();
              ctx.restore();
            }
          }
        }, {
          key: "drawGrid",
          value: function drawGrid() {
            var _this39 = this;

            var ctx = this.ctx;
            var opts = this.options;
            var angleLines = opts.angleLines,
                grid = opts.grid;
            var labelCount = this._pointLabels.length;
            var i, offset, position;

            if (opts.pointLabels.display) {
              drawPointLabels(this, labelCount);
            }

            if (grid.display) {
              this.ticks.forEach(function (tick, index) {
                if (index !== 0) {
                  offset = _this39.getDistanceFromCenterForValue(tick.value);
                  var optsAtIndex = grid.setContext(_this39.getContext(index - 1));
                  drawRadiusLine(_this39, optsAtIndex, offset, labelCount);
                }
              });
            }

            if (angleLines.display) {
              ctx.save();

              for (i = labelCount - 1; i >= 0; i--) {
                var optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                var color = optsAtIndex.color,
                    lineWidth = optsAtIndex.lineWidth;

                if (!lineWidth || !color) {
                  continue;
                }

                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.setLineDash(optsAtIndex.borderDash);
                ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
                position = this.getPointPosition(i, offset);
                ctx.beginPath();
                ctx.moveTo(this.xCenter, this.yCenter);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
              }

              ctx.restore();
            }
          }
        }, {
          key: "drawBorder",
          value: function drawBorder() {}
        }, {
          key: "drawLabels",
          value: function drawLabels() {
            var _this40 = this;

            var ctx = this.ctx;
            var opts = this.options;
            var tickOpts = opts.ticks;

            if (!tickOpts.display) {
              return;
            }

            var startAngle = this.getIndexAngle(0);
            var offset, width;
            ctx.save();
            ctx.translate(this.xCenter, this.yCenter);
            ctx.rotate(startAngle);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            this.ticks.forEach(function (tick, index) {
              if (index === 0 && !opts.reverse) {
                return;
              }

              var optsAtIndex = tickOpts.setContext(_this40.getContext(index));
              var tickFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["Z"])(optsAtIndex.font);
              offset = _this40.getDistanceFromCenterForValue(_this40.ticks[index].value);

              if (optsAtIndex.showLabelBackdrop) {
                ctx.font = tickFont.string;
                width = ctx.measureText(tick.label).width;
                ctx.fillStyle = optsAtIndex.backdropColor;
                var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["C"])(optsAtIndex.backdropPadding);
                ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
              }

              Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["X"])(ctx, tick.label, 0, -offset, tickFont, {
                color: optsAtIndex.color
              });
            });
            ctx.restore();
          }
        }, {
          key: "drawTitle",
          value: function drawTitle() {}
        }]);

        return RadialLinearScale;
      }(LinearScaleBase);

      RadialLinearScale.id = 'radialLinear';
      RadialLinearScale.defaults = {
        display: true,
        animate: true,
        position: 'chartArea',
        angleLines: {
          display: true,
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0
        },
        grid: {
          circular: false
        },
        startAngle: 0,
        ticks: {
          showLabelBackdrop: true,
          callback: Ticks.formatters.numeric
        },
        pointLabels: {
          backdropColor: undefined,
          backdropPadding: 2,
          display: true,
          font: {
            size: 10
          },
          callback: function callback(label) {
            return label;
          },
          padding: 5,
          centerPointLabels: false
        }
      };
      RadialLinearScale.defaultRoutes = {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color'
      };
      RadialLinearScale.descriptors = {
        angleLines: {
          _fallback: 'grid'
        }
      };
      var INTERVALS = {
        millisecond: {
          common: true,
          size: 1,
          steps: 1000
        },
        second: {
          common: true,
          size: 1000,
          steps: 60
        },
        minute: {
          common: true,
          size: 60000,
          steps: 60
        },
        hour: {
          common: true,
          size: 3600000,
          steps: 24
        },
        day: {
          common: true,
          size: 86400000,
          steps: 30
        },
        week: {
          common: false,
          size: 604800000,
          steps: 4
        },
        month: {
          common: true,
          size: 2.628e9,
          steps: 12
        },
        quarter: {
          common: false,
          size: 7.884e9,
          steps: 4
        },
        year: {
          common: true,
          size: 3.154e10
        }
      };
      var UNITS = Object.keys(INTERVALS);

      function sorter(a, b) {
        return a - b;
      }

      function _parse(scale, input) {
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["k"])(input)) {
          return null;
        }

        var adapter = scale._adapter;
        var _scale$_parseOpts = scale._parseOpts,
            parser = _scale$_parseOpts.parser,
            round = _scale$_parseOpts.round,
            isoWeekday = _scale$_parseOpts.isoWeekday;
        var value = input;

        if (typeof parser === 'function') {
          value = parser(value);
        }

        if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(value)) {
          value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
        }

        if (value === null) {
          return null;
        }

        if (round) {
          value = round === 'week' && (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["q"])(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
        }

        return +value;
      }

      function determineUnitForAutoTicks(minUnit, min, max, capacity) {
        var ilen = UNITS.length;

        for (var i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
          var interval = INTERVALS[UNITS[i]];
          var factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;

          if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
            return UNITS[i];
          }
        }

        return UNITS[ilen - 1];
      }

      function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
        for (var i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
          var unit = UNITS[i];

          if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
            return unit;
          }
        }

        return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
      }

      function determineMajorUnit(unit) {
        for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
          if (INTERVALS[UNITS[i]].common) {
            return UNITS[i];
          }
        }
      }

      function addTick(ticks, time, timestamps) {
        if (!timestamps) {
          ticks[time] = true;
        } else if (timestamps.length) {
          var _Object8 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aK"])(timestamps, time),
              lo = _Object8.lo,
              hi = _Object8.hi;

          var timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
          ticks[timestamp] = true;
        }
      }

      function setMajorTicks(scale, ticks, map, majorUnit) {
        var adapter = scale._adapter;
        var first = +adapter.startOf(ticks[0].value, majorUnit);
        var last = ticks[ticks.length - 1].value;
        var major, index;

        for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
          index = map[major];

          if (index >= 0) {
            ticks[index].major = true;
          }
        }

        return ticks;
      }

      function ticksFromTimestamps(scale, values, majorUnit) {
        var ticks = [];
        var map = {};
        var ilen = values.length;
        var i, value;

        for (i = 0; i < ilen; ++i) {
          value = values[i];
          map[value] = i;
          ticks.push({
            value: value,
            major: false
          });
        }

        return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
      }

      var TimeScale = /*#__PURE__*/function (_Scale4) {
        _inherits(TimeScale, _Scale4);

        var _super24 = _createSuper(TimeScale);

        function TimeScale(props) {
          var _this41;

          _classCallCheck(this, TimeScale);

          _this41 = _super24.call(this, props);
          _this41._cache = {
            data: [],
            labels: [],
            all: []
          };
          _this41._unit = 'day';
          _this41._majorUnit = undefined;
          _this41._offsets = {};
          _this41._normalized = false;
          _this41._parseOpts = undefined;
          return _this41;
        }

        _createClass(TimeScale, [{
          key: "init",
          value: function init(scaleOpts, opts) {
            var time = scaleOpts.time || (scaleOpts.time = {});
            var adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["a9"])(time.displayFormats, adapter.formats());
            this._parseOpts = {
              parser: time.parser,
              round: time.round,
              isoWeekday: time.isoWeekday
            };

            _get(_getPrototypeOf(TimeScale.prototype), "init", this).call(this, scaleOpts);

            this._normalized = opts.normalized;
          }
        }, {
          key: "parse",
          value: function parse(raw, index) {
            if (raw === undefined) {
              return null;
            }

            return _parse(this, raw);
          }
        }, {
          key: "beforeLayout",
          value: function beforeLayout() {
            _get(_getPrototypeOf(TimeScale.prototype), "beforeLayout", this).call(this);

            this._cache = {
              data: [],
              labels: [],
              all: []
            };
          }
        }, {
          key: "determineDataLimits",
          value: function determineDataLimits() {
            var options = this.options;
            var adapter = this._adapter;
            var unit = options.time.unit || 'day';

            var _this$getUserBounds5 = this.getUserBounds(),
                min = _this$getUserBounds5.min,
                max = _this$getUserBounds5.max,
                minDefined = _this$getUserBounds5.minDefined,
                maxDefined = _this$getUserBounds5.maxDefined;

            function _applyBounds(bounds) {
              if (!minDefined && !isNaN(bounds.min)) {
                min = Math.min(min, bounds.min);
              }

              if (!maxDefined && !isNaN(bounds.max)) {
                max = Math.max(max, bounds.max);
              }
            }

            if (!minDefined || !maxDefined) {
              _applyBounds(this._getLabelBounds());

              if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
                _applyBounds(this.getMinMax(false));
              }
            }

            min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
            max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["g"])(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
            this.min = Math.min(min, max - 1);
            this.max = Math.max(min + 1, max);
          }
        }, {
          key: "_getLabelBounds",
          value: function _getLabelBounds() {
            var arr = this.getLabelTimestamps();
            var min = Number.POSITIVE_INFINITY;
            var max = Number.NEGATIVE_INFINITY;

            if (arr.length) {
              min = arr[0];
              max = arr[arr.length - 1];
            }

            return {
              min: min,
              max: max
            };
          }
        }, {
          key: "buildTicks",
          value: function buildTicks() {
            var options = this.options;
            var timeOpts = options.time;
            var tickOpts = options.ticks;
            var timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();

            if (options.bounds === 'ticks' && timestamps.length) {
              this.min = this._userMin || timestamps[0];
              this.max = this._userMax || timestamps[timestamps.length - 1];
            }

            var min = this.min;
            var max = this.max;
            var ticks = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["aJ"])(timestamps, min, max);
            this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
            this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined : determineMajorUnit(this._unit);
            this.initOffsets(timestamps);

            if (options.reverse) {
              ticks.reverse();
            }

            return ticksFromTimestamps(this, ticks, this._majorUnit);
          }
        }, {
          key: "initOffsets",
          value: function initOffsets(timestamps) {
            var start = 0;
            var end = 0;
            var first, last;

            if (this.options.offset && timestamps.length) {
              first = this.getDecimalForValue(timestamps[0]);

              if (timestamps.length === 1) {
                start = 1 - first;
              } else {
                start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
              }

              last = this.getDecimalForValue(timestamps[timestamps.length - 1]);

              if (timestamps.length === 1) {
                end = last;
              } else {
                end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
              }
            }

            var limit = timestamps.length < 3 ? 0.5 : 0.25;
            start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(start, 0, limit);
            end = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["w"])(end, 0, limit);
            this._offsets = {
              start: start,
              end: end,
              factor: 1 / (start + 1 + end)
            };
          }
        }, {
          key: "_generate",
          value: function _generate() {
            var adapter = this._adapter;
            var min = this.min;
            var max = this.max;
            var options = this.options;
            var timeOpts = options.time;
            var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
            var stepSize = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["v"])(timeOpts.stepSize, 1);
            var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
            var hasWeekday = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["q"])(weekday) || weekday === true;
            var ticks = {};
            var first = min;
            var time, count;

            if (hasWeekday) {
              first = +adapter.startOf(first, 'isoWeek', weekday);
            }

            first = +adapter.startOf(first, hasWeekday ? 'day' : minor);

            if (adapter.diff(max, min, minor) > 100000 * stepSize) {
              throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
            }

            var timestamps = options.ticks.source === 'data' && this.getDataTimestamps();

            for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
              addTick(ticks, time, timestamps);
            }

            if (time === max || options.bounds === 'ticks' || count === 1) {
              addTick(ticks, time, timestamps);
            }

            return Object.keys(ticks).sort(function (a, b) {
              return a - b;
            }).map(function (x) {
              return +x;
            });
          }
        }, {
          key: "getLabelForValue",
          value: function getLabelForValue(value) {
            var adapter = this._adapter;
            var timeOpts = this.options.time;

            if (timeOpts.tooltipFormat) {
              return adapter.format(value, timeOpts.tooltipFormat);
            }

            return adapter.format(value, timeOpts.displayFormats.datetime);
          }
        }, {
          key: "_tickFormatFunction",
          value: function _tickFormatFunction(time, index, ticks, format) {
            var options = this.options;
            var formats = options.time.displayFormats;
            var unit = this._unit;
            var majorUnit = this._majorUnit;
            var minorFormat = unit && formats[unit];
            var majorFormat = majorUnit && formats[majorUnit];
            var tick = ticks[index];
            var major = majorUnit && majorFormat && tick && tick.major;

            var label = this._adapter.format(time, format || (major ? majorFormat : minorFormat));

            var formatter = options.ticks.callback;
            return formatter ? Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["O"])(formatter, [label, index, ticks], this) : label;
          }
        }, {
          key: "generateTickLabels",
          value: function generateTickLabels(ticks) {
            var i, ilen, tick;

            for (i = 0, ilen = ticks.length; i < ilen; ++i) {
              tick = ticks[i];
              tick.label = this._tickFormatFunction(tick.value, i, ticks);
            }
          }
        }, {
          key: "getDecimalForValue",
          value: function getDecimalForValue(value) {
            return value === null ? NaN : (value - this.min) / (this.max - this.min);
          }
        }, {
          key: "getPixelForValue",
          value: function getPixelForValue(value) {
            var offsets = this._offsets;
            var pos = this.getDecimalForValue(value);
            return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
          }
        }, {
          key: "getValueForPixel",
          value: function getValueForPixel(pixel) {
            var offsets = this._offsets;
            var pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
            return this.min + pos * (this.max - this.min);
          }
        }, {
          key: "_getLabelSize",
          value: function _getLabelSize(label) {
            var ticksOpts = this.options.ticks;
            var tickLabelWidth = this.ctx.measureText(label).width;
            var angle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["t"])(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
            var cosRotation = Math.cos(angle);
            var sinRotation = Math.sin(angle);

            var tickFontSize = this._resolveTickFontOptions(0).size;

            return {
              w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
              h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
            };
          }
        }, {
          key: "_getLabelCapacity",
          value: function _getLabelCapacity(exampleTime) {
            var timeOpts = this.options.time;
            var displayFormats = timeOpts.displayFormats;
            var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;

            var exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [exampleTime], this._majorUnit), format);

            var size = this._getLabelSize(exampleLabel);

            var capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
            return capacity > 0 ? capacity : 1;
          }
        }, {
          key: "getDataTimestamps",
          value: function getDataTimestamps() {
            var timestamps = this._cache.data || [];
            var i, ilen;

            if (timestamps.length) {
              return timestamps;
            }

            var metas = this.getMatchingVisibleMetas();

            if (this._normalized && metas.length) {
              return this._cache.data = metas[0].controller.getAllParsedValues(this);
            }

            for (i = 0, ilen = metas.length; i < ilen; ++i) {
              timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
            }

            return this._cache.data = this.normalize(timestamps);
          }
        }, {
          key: "getLabelTimestamps",
          value: function getLabelTimestamps() {
            var timestamps = this._cache.labels || [];
            var i, ilen;

            if (timestamps.length) {
              return timestamps;
            }

            var labels = this.getLabels();

            for (i = 0, ilen = labels.length; i < ilen; ++i) {
              timestamps.push(_parse(this, labels[i]));
            }

            return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
          }
        }, {
          key: "normalize",
          value: function normalize(values) {
            return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["_"])(values.sort(sorter));
          }
        }]);

        return TimeScale;
      }(Scale);

      TimeScale.id = 'time';
      TimeScale.defaults = {
        bounds: 'data',
        adapters: {},
        time: {
          parser: false,
          unit: false,
          round: false,
          isoWeekday: false,
          minUnit: 'millisecond',
          displayFormats: {}
        },
        ticks: {
          source: 'auto',
          major: {
            enabled: false
          }
        }
      };

      function interpolate(table, val, reverse) {
        var lo = 0;
        var hi = table.length - 1;
        var prevSource, nextSource, prevTarget, nextTarget;

        if (reverse) {
          if (val >= table[lo].pos && val <= table[hi].pos) {
            var _Object9 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["x"])(table, 'pos', val);

            lo = _Object9.lo;
            hi = _Object9.hi;
          }

          var _table$lo = table[lo];
          prevSource = _table$lo.pos;
          prevTarget = _table$lo.time;
          var _table$hi = table[hi];
          nextSource = _table$hi.pos;
          nextTarget = _table$hi.time;
        } else {
          if (val >= table[lo].time && val <= table[hi].time) {
            var _Object10 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__["x"])(table, 'time', val);

            lo = _Object10.lo;
            hi = _Object10.hi;
          }

          var _table$lo2 = table[lo];
          prevSource = _table$lo2.time;
          prevTarget = _table$lo2.pos;
          var _table$hi2 = table[hi];
          nextSource = _table$hi2.time;
          nextTarget = _table$hi2.pos;
        }

        var span = nextSource - prevSource;
        return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
      }

      var TimeSeriesScale = /*#__PURE__*/function (_TimeScale) {
        _inherits(TimeSeriesScale, _TimeScale);

        var _super25 = _createSuper(TimeSeriesScale);

        function TimeSeriesScale(props) {
          var _this42;

          _classCallCheck(this, TimeSeriesScale);

          _this42 = _super25.call(this, props);
          _this42._table = [];
          _this42._minPos = undefined;
          _this42._tableRange = undefined;
          return _this42;
        }

        _createClass(TimeSeriesScale, [{
          key: "initOffsets",
          value: function initOffsets() {
            var timestamps = this._getTimestampsForTable();

            var table = this._table = this.buildLookupTable(timestamps);
            this._minPos = interpolate(table, this.min);
            this._tableRange = interpolate(table, this.max) - this._minPos;

            _get(_getPrototypeOf(TimeSeriesScale.prototype), "initOffsets", this).call(this, timestamps);
          }
        }, {
          key: "buildLookupTable",
          value: function buildLookupTable(timestamps) {
            var min = this.min,
                max = this.max;
            var items = [];
            var table = [];
            var i, ilen, prev, curr, next;

            for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
              curr = timestamps[i];

              if (curr >= min && curr <= max) {
                items.push(curr);
              }
            }

            if (items.length < 2) {
              return [{
                time: min,
                pos: 0
              }, {
                time: max,
                pos: 1
              }];
            }

            for (i = 0, ilen = items.length; i < ilen; ++i) {
              next = items[i + 1];
              prev = items[i - 1];
              curr = items[i];

              if (Math.round((next + prev) / 2) !== curr) {
                table.push({
                  time: curr,
                  pos: i / (ilen - 1)
                });
              }
            }

            return table;
          }
        }, {
          key: "_getTimestampsForTable",
          value: function _getTimestampsForTable() {
            var timestamps = this._cache.all || [];

            if (timestamps.length) {
              return timestamps;
            }

            var data = this.getDataTimestamps();
            var label = this.getLabelTimestamps();

            if (data.length && label.length) {
              timestamps = this.normalize(data.concat(label));
            } else {
              timestamps = data.length ? data : label;
            }

            timestamps = this._cache.all = timestamps;
            return timestamps;
          }
        }, {
          key: "getDecimalForValue",
          value: function getDecimalForValue(value) {
            return (interpolate(this._table, value) - this._minPos) / this._tableRange;
          }
        }, {
          key: "getValueForPixel",
          value: function getValueForPixel(pixel) {
            var offsets = this._offsets;
            var decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
            return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
          }
        }]);

        return TimeSeriesScale;
      }(TimeScale);

      TimeSeriesScale.id = 'timeseries';
      TimeSeriesScale.defaults = TimeScale.defaults;
      var scales = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CategoryScale: CategoryScale,
        LinearScale: LinearScale,
        LogarithmicScale: LogarithmicScale,
        RadialLinearScale: RadialLinearScale,
        TimeScale: TimeScale,
        TimeSeriesScale: TimeSeriesScale
      });
      var registerables = [controllers, elements, plugins, scales];
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~behaviourScore-driving-driving-module~behaviourScore-vechile-driving-vechile-driving-module~~8fbbda33-es5.js.map