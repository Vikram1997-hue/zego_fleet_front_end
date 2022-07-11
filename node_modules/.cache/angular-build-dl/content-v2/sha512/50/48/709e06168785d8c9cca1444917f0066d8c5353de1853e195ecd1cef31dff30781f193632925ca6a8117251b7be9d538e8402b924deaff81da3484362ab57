(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~fleetOverview-trip-trip-module"], {
    /***/
    "2fpa":
    /*!**************************************************************************************!*\
      !*** ./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function fpa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! chart.js/helpers */
      "9+Kh");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chart.js */
      "m0r1");
      /*!
       * chartjs-plugin-datalabels v2.0.0
       * https://chartjs-plugin-datalabels.netlify.app
       * (c) 2017-2021 chartjs-plugin-datalabels contributors
       * Released under the MIT license
       */


      var devicePixelRatio = function () {
        if (typeof window !== 'undefined') {
          if (window.devicePixelRatio) {
            return window.devicePixelRatio;
          } // devicePixelRatio is undefined on IE10
          // https://stackoverflow.com/a/20204180/8837887
          // https://github.com/chartjs/chartjs-plugin-datalabels/issues/85


          var screen = window.screen;

          if (screen) {
            return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
          }
        }

        return 1;
      }();

      var utils = {
        // @todo move this in Chart.helpers.toTextLines
        toTextLines: function toTextLines(inputs) {
          var lines = [];
          var input;
          inputs = [].concat(inputs);

          while (inputs.length) {
            input = inputs.pop();

            if (typeof input === 'string') {
              lines.unshift.apply(lines, input.split('\n'));
            } else if (Array.isArray(input)) {
              inputs.push.apply(inputs, input);
            } else if (!Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndef"])(inputs)) {
              lines.unshift('' + input);
            }
          }

          return lines;
        },
        // @todo move this in Chart.helpers.canvas.textSize
        // @todo cache calls of measureText if font doesn't change?!
        textSize: function textSize(ctx, lines, font) {
          var items = [].concat(lines);
          var ilen = items.length;
          var prev = ctx.font;
          var width = 0;
          var i;
          ctx.font = font.string;

          for (i = 0; i < ilen; ++i) {
            width = Math.max(ctx.measureText(items[i]).width, width);
          }

          ctx.font = prev;
          return {
            height: ilen * font.lineHeight,
            width: width
          };
        },

        /**
         * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
         * @todo move this method in Chart.helpers.bound
         * https://doc.qt.io/qt-5/qtglobal.html#qBound
         */
        bound: function bound(min, value, max) {
          return Math.max(min, Math.min(value, max));
        },

        /**
         * Returns an array of pair [value, state] where state is:
         * * -1: value is only in a0 (removed)
         * *  1: value is only in a1 (added)
         */
        arrayDiff: function arrayDiff(a0, a1) {
          var prev = a0.slice();
          var updates = [];
          var i, j, ilen, v;

          for (i = 0, ilen = a1.length; i < ilen; ++i) {
            v = a1[i];
            j = prev.indexOf(v);

            if (j === -1) {
              updates.push([v, 1]);
            } else {
              prev.splice(j, 1);
            }
          }

          for (i = 0, ilen = prev.length; i < ilen; ++i) {
            updates.push([prev[i], -1]);
          }

          return updates;
        },

        /**
         * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
         */
        rasterize: function rasterize(v) {
          return Math.round(v * devicePixelRatio) / devicePixelRatio;
        }
      };

      function orient(point, origin) {
        var x0 = origin.x;
        var y0 = origin.y;

        if (x0 === null) {
          return {
            x: 0,
            y: -1
          };
        }

        if (y0 === null) {
          return {
            x: 1,
            y: 0
          };
        }

        var dx = point.x - x0;
        var dy = point.y - y0;
        var ln = Math.sqrt(dx * dx + dy * dy);
        return {
          x: ln ? dx / ln : 0,
          y: ln ? dy / ln : -1
        };
      }

      function aligned(x, y, vx, vy, align) {
        switch (align) {
          case 'center':
            vx = vy = 0;
            break;

          case 'bottom':
            vx = 0;
            vy = 1;
            break;

          case 'right':
            vx = 1;
            vy = 0;
            break;

          case 'left':
            vx = -1;
            vy = 0;
            break;

          case 'top':
            vx = 0;
            vy = -1;
            break;

          case 'start':
            vx = -vx;
            vy = -vy;
            break;

          case 'end':
            // keep natural orientation
            break;

          default:
            // clockwise rotation (in degree)
            align *= Math.PI / 180;
            vx = Math.cos(align);
            vy = Math.sin(align);
            break;
        }

        return {
          x: x,
          y: y,
          vx: vx,
          vy: vy
        };
      } // Line clipping (Cohen–Sutherland algorithm)
      // https://en.wikipedia.org/wiki/Cohen–Sutherland_algorithm


      var R_INSIDE = 0;
      var R_LEFT = 1;
      var R_RIGHT = 2;
      var R_BOTTOM = 4;
      var R_TOP = 8;

      function region(x, y, rect) {
        var res = R_INSIDE;

        if (x < rect.left) {
          res |= R_LEFT;
        } else if (x > rect.right) {
          res |= R_RIGHT;
        }

        if (y < rect.top) {
          res |= R_TOP;
        } else if (y > rect.bottom) {
          res |= R_BOTTOM;
        }

        return res;
      }

      function clipped(segment, area) {
        var x0 = segment.x0;
        var y0 = segment.y0;
        var x1 = segment.x1;
        var y1 = segment.y1;
        var r0 = region(x0, y0, area);
        var r1 = region(x1, y1, area);
        var r, x, y; // eslint-disable-next-line no-constant-condition

        while (true) {
          if (!(r0 | r1) || r0 & r1) {
            // both points inside or on the same side: no clipping
            break;
          } // at least one point is outside


          r = r0 || r1;

          if (r & R_TOP) {
            x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
            y = area.top;
          } else if (r & R_BOTTOM) {
            x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
            y = area.bottom;
          } else if (r & R_RIGHT) {
            y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
            x = area.right;
          } else if (r & R_LEFT) {
            y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
            x = area.left;
          }

          if (r === r0) {
            x0 = x;
            y0 = y;
            r0 = region(x0, y0, area);
          } else {
            x1 = x;
            y1 = y;
            r1 = region(x1, y1, area);
          }
        }

        return {
          x0: x0,
          x1: x1,
          y0: y0,
          y1: y1
        };
      }

      function compute$1(range, config) {
        var anchor = config.anchor;
        var segment = range;
        var x, y;

        if (config.clamp) {
          segment = clipped(segment, config.area);
        }

        if (anchor === 'start') {
          x = segment.x0;
          y = segment.y0;
        } else if (anchor === 'end') {
          x = segment.x1;
          y = segment.y1;
        } else {
          x = (segment.x0 + segment.x1) / 2;
          y = (segment.y0 + segment.y1) / 2;
        }

        return aligned(x, y, range.vx, range.vy, config.align);
      }

      var positioners = {
        arc: function arc(el, config) {
          var angle = (el.startAngle + el.endAngle) / 2;
          var vx = Math.cos(angle);
          var vy = Math.sin(angle);
          var r0 = el.innerRadius;
          var r1 = el.outerRadius;
          return compute$1({
            x0: el.x + vx * r0,
            y0: el.y + vy * r0,
            x1: el.x + vx * r1,
            y1: el.y + vy * r1,
            vx: vx,
            vy: vy
          }, config);
        },
        point: function point(el, config) {
          var v = orient(el, config.origin);
          var rx = v.x * el.options.radius;
          var ry = v.y * el.options.radius;
          return compute$1({
            x0: el.x - rx,
            y0: el.y - ry,
            x1: el.x + rx,
            y1: el.y + ry,
            vx: v.x,
            vy: v.y
          }, config);
        },
        bar: function bar(el, config) {
          var v = orient(el, config.origin);
          var x = el.x;
          var y = el.y;
          var sx = 0;
          var sy = 0;

          if (el.horizontal) {
            x = Math.min(el.x, el.base);
            sx = Math.abs(el.base - el.x);
          } else {
            y = Math.min(el.y, el.base);
            sy = Math.abs(el.base - el.y);
          }

          return compute$1({
            x0: x,
            y0: y + sy,
            x1: x + sx,
            y1: y,
            vx: v.x,
            vy: v.y
          }, config);
        },
        fallback: function fallback(el, config) {
          var v = orient(el, config.origin);
          return compute$1({
            x0: el.x,
            y0: el.y,
            x1: el.x,
            y1: el.y,
            vx: v.x,
            vy: v.y
          }, config);
        }
      };
      var rasterize = utils.rasterize;

      function boundingRects(model) {
        var borderWidth = model.borderWidth || 0;
        var padding = model.padding;
        var th = model.size.height;
        var tw = model.size.width;
        var tx = -tw / 2;
        var ty = -th / 2;
        return {
          frame: {
            x: tx - padding.left - borderWidth,
            y: ty - padding.top - borderWidth,
            w: tw + padding.width + borderWidth * 2,
            h: th + padding.height + borderWidth * 2
          },
          text: {
            x: tx,
            y: ty,
            w: tw,
            h: th
          }
        };
      }

      function getScaleOrigin(el, context) {
        var scale = context.chart.getDatasetMeta(context.datasetIndex).vScale;

        if (!scale) {
          return null;
        }

        if (scale.xCenter !== undefined && scale.yCenter !== undefined) {
          return {
            x: scale.xCenter,
            y: scale.yCenter
          };
        }

        var pixel = scale.getBasePixel();
        return el.horizontal ? {
          x: pixel,
          y: null
        } : {
          x: null,
          y: pixel
        };
      }

      function getPositioner(el) {
        if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__["ArcElement"]) {
          return positioners.arc;
        }

        if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__["PointElement"]) {
          return positioners.point;
        }

        if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__["BarElement"]) {
          return positioners.bar;
        }

        return positioners.fallback;
      }

      function drawRoundedRect(ctx, x, y, w, h, radius) {
        var HALF_PI = Math.PI / 2;

        if (radius) {
          var r = Math.min(radius, h / 2, w / 2);
          var left = x + r;
          var top = y + r;
          var right = x + w - r;
          var bottom = y + h - r;
          ctx.moveTo(x, top);

          if (left < right && top < bottom) {
            ctx.arc(left, top, r, -Math.PI, -HALF_PI);
            ctx.arc(right, top, r, -HALF_PI, 0);
            ctx.arc(right, bottom, r, 0, HALF_PI);
            ctx.arc(left, bottom, r, HALF_PI, Math.PI);
          } else if (left < right) {
            ctx.moveTo(left, y);
            ctx.arc(right, top, r, -HALF_PI, HALF_PI);
            ctx.arc(left, top, r, HALF_PI, Math.PI + HALF_PI);
          } else if (top < bottom) {
            ctx.arc(left, top, r, -Math.PI, 0);
            ctx.arc(left, bottom, r, 0, Math.PI);
          } else {
            ctx.arc(left, top, r, -Math.PI, Math.PI);
          }

          ctx.closePath();
          ctx.moveTo(x, y);
        } else {
          ctx.rect(x, y, w, h);
        }
      }

      function drawFrame(ctx, rect, model) {
        var bgColor = model.backgroundColor;
        var borderColor = model.borderColor;
        var borderWidth = model.borderWidth;

        if (!bgColor && (!borderColor || !borderWidth)) {
          return;
        }

        ctx.beginPath();
        drawRoundedRect(ctx, rasterize(rect.x) + borderWidth / 2, rasterize(rect.y) + borderWidth / 2, rasterize(rect.w) - borderWidth, rasterize(rect.h) - borderWidth, model.borderRadius);
        ctx.closePath();

        if (bgColor) {
          ctx.fillStyle = bgColor;
          ctx.fill();
        }

        if (borderColor && borderWidth) {
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = borderWidth;
          ctx.lineJoin = 'miter';
          ctx.stroke();
        }
      }

      function textGeometry(rect, align, font) {
        var h = font.lineHeight;
        var w = rect.w;
        var x = rect.x;
        var y = rect.y + h / 2;

        if (align === 'center') {
          x += w / 2;
        } else if (align === 'end' || align === 'right') {
          x += w;
        }

        return {
          h: h,
          w: w,
          x: x,
          y: y
        };
      }

      function drawTextLine(ctx, text, cfg) {
        var shadow = ctx.shadowBlur;
        var stroked = cfg.stroked;
        var x = rasterize(cfg.x);
        var y = rasterize(cfg.y);
        var w = rasterize(cfg.w);

        if (stroked) {
          ctx.strokeText(text, x, y, w);
        }

        if (cfg.filled) {
          if (shadow && stroked) {
            // Prevent drawing shadow on both the text stroke and fill, so
            // if the text is stroked, remove the shadow for the text fill.
            ctx.shadowBlur = 0;
          }

          ctx.fillText(text, x, y, w);

          if (shadow && stroked) {
            ctx.shadowBlur = shadow;
          }
        }
      }

      function drawText(ctx, lines, rect, model) {
        var align = model.textAlign;
        var color = model.color;
        var filled = !!color;
        var font = model.font;
        var ilen = lines.length;
        var strokeColor = model.textStrokeColor;
        var strokeWidth = model.textStrokeWidth;
        var stroked = strokeColor && strokeWidth;
        var i;

        if (!ilen || !filled && !stroked) {
          return;
        } // Adjust coordinates based on text alignment and line height


        rect = textGeometry(rect, align, font);
        ctx.font = font.string;
        ctx.textAlign = align;
        ctx.textBaseline = 'middle';
        ctx.shadowBlur = model.textShadowBlur;
        ctx.shadowColor = model.textShadowColor;

        if (filled) {
          ctx.fillStyle = color;
        }

        if (stroked) {
          ctx.lineJoin = 'round';
          ctx.lineWidth = strokeWidth;
          ctx.strokeStyle = strokeColor;
        }

        for (i = 0, ilen = lines.length; i < ilen; ++i) {
          drawTextLine(ctx, lines[i], {
            stroked: stroked,
            filled: filled,
            w: rect.w,
            x: rect.x,
            y: rect.y + rect.h * i
          });
        }
      }

      var Label = function Label(config, ctx, el, index) {
        var me = this;
        me._config = config;
        me._index = index;
        me._model = null;
        me._rects = null;
        me._ctx = ctx;
        me._el = el;
      };

      Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["merge"])(Label.prototype, {
        /**
         * @private
         */
        _modelize: function _modelize(display, lines, config, context) {
          var me = this;
          var index = me._index;
          var font = Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["toFont"])(Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.font, {}], context, index));
          var color = Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.color, chart_js__WEBPACK_IMPORTED_MODULE_1__["defaults"].color], context, index);
          return {
            align: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.align, 'center'], context, index),
            anchor: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.anchor, 'center'], context, index),
            area: context.chart.chartArea,
            backgroundColor: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.backgroundColor, null], context, index),
            borderColor: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.borderColor, null], context, index),
            borderRadius: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.borderRadius, 0], context, index),
            borderWidth: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.borderWidth, 0], context, index),
            clamp: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.clamp, false], context, index),
            clip: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.clip, false], context, index),
            color: color,
            display: display,
            font: font,
            lines: lines,
            offset: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.offset, 0], context, index),
            opacity: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.opacity, 1], context, index),
            origin: getScaleOrigin(me._el, context),
            padding: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["toPadding"])(Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.padding, 0], context, index)),
            positioner: getPositioner(me._el),
            rotation: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.rotation, 0], context, index) * (Math.PI / 180),
            size: utils.textSize(me._ctx, lines, font),
            textAlign: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.textAlign, 'start'], context, index),
            textShadowBlur: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.textShadowBlur, 0], context, index),
            textShadowColor: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.textShadowColor, color], context, index),
            textStrokeColor: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.textStrokeColor, color], context, index),
            textStrokeWidth: Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.textStrokeWidth, 0], context, index)
          };
        },
        update: function update(context) {
          var me = this;
          var model = null;
          var rects = null;
          var index = me._index;
          var config = me._config;
          var value, label, lines; // We first resolve the display option (separately) to avoid computing
          // other options in case the label is hidden (i.e. display: false).

          var display = Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["resolve"])([config.display, true], context, index);

          if (display) {
            value = context.dataset.data[index];
            label = Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["valueOrDefault"])(Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["callback"])(config.formatter, [value, context]), value);
            lines = Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndef"])(label) ? [] : utils.toTextLines(label);

            if (lines.length) {
              model = me._modelize(display, lines, config, context);
              rects = boundingRects(model);
            }
          }

          me._model = model;
          me._rects = rects;
        },
        geometry: function geometry() {
          return this._rects ? this._rects.frame : {};
        },
        rotation: function rotation() {
          return this._model ? this._model.rotation : 0;
        },
        visible: function visible() {
          return this._model && this._model.opacity;
        },
        model: function model() {
          return this._model;
        },
        draw: function draw(chart, center) {
          var me = this;
          var ctx = chart.ctx;
          var model = me._model;
          var rects = me._rects;
          var area;

          if (!this.visible()) {
            return;
          }

          ctx.save();

          if (model.clip) {
            area = model.area;
            ctx.beginPath();
            ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
            ctx.clip();
          }

          ctx.globalAlpha = utils.bound(0, model.opacity, 1);
          ctx.translate(rasterize(center.x), rasterize(center.y));
          ctx.rotate(model.rotation);
          drawFrame(ctx, rects.frame, model);
          drawText(ctx, model.lines, rects.text, model);
          ctx.restore();
        }
      });
      var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991; // eslint-disable-line es/no-number-minsafeinteger

      var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991; // eslint-disable-line es/no-number-maxsafeinteger

      function rotated(point, center, angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var cx = center.x;
        var cy = center.y;
        return {
          x: cx + cos * (point.x - cx) - sin * (point.y - cy),
          y: cy + sin * (point.x - cx) + cos * (point.y - cy)
        };
      }

      function projected(points, axis) {
        var min = MAX_INTEGER;
        var max = MIN_INTEGER;
        var origin = axis.origin;
        var i, pt, vx, vy, dp;

        for (i = 0; i < points.length; ++i) {
          pt = points[i];
          vx = pt.x - origin.x;
          vy = pt.y - origin.y;
          dp = axis.vx * vx + axis.vy * vy;
          min = Math.min(min, dp);
          max = Math.max(max, dp);
        }

        return {
          min: min,
          max: max
        };
      }

      function toAxis(p0, p1) {
        var vx = p1.x - p0.x;
        var vy = p1.y - p0.y;
        var ln = Math.sqrt(vx * vx + vy * vy);
        return {
          vx: (p1.x - p0.x) / ln,
          vy: (p1.y - p0.y) / ln,
          origin: p0,
          ln: ln
        };
      }

      var HitBox = function HitBox() {
        this._rotation = 0;
        this._rect = {
          x: 0,
          y: 0,
          w: 0,
          h: 0
        };
      };

      Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["merge"])(HitBox.prototype, {
        center: function center() {
          var r = this._rect;
          return {
            x: r.x + r.w / 2,
            y: r.y + r.h / 2
          };
        },
        update: function update(center, rect, rotation) {
          this._rotation = rotation;
          this._rect = {
            x: rect.x + center.x,
            y: rect.y + center.y,
            w: rect.w,
            h: rect.h
          };
        },
        contains: function contains(point) {
          var me = this;
          var margin = 1;
          var rect = me._rect;
          point = rotated(point, me.center(), -me._rotation);
          return !(point.x < rect.x - margin || point.y < rect.y - margin || point.x > rect.x + rect.w + margin * 2 || point.y > rect.y + rect.h + margin * 2);
        },
        // Separating Axis Theorem
        // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
        intersects: function intersects(other) {
          var r0 = this._points();

          var r1 = other._points();

          var axes = [toAxis(r0[0], r0[1]), toAxis(r0[0], r0[3])];
          var i, pr0, pr1;

          if (this._rotation !== other._rotation) {
            // Only separate with r1 axis if the rotation is different,
            // else it's enough to separate r0 and r1 with r0 axis only!
            axes.push(toAxis(r1[0], r1[1]), toAxis(r1[0], r1[3]));
          }

          for (i = 0; i < axes.length; ++i) {
            pr0 = projected(r0, axes[i]);
            pr1 = projected(r1, axes[i]);

            if (pr0.max < pr1.min || pr1.max < pr0.min) {
              return false;
            }
          }

          return true;
        },

        /**
         * @private
         */
        _points: function _points() {
          var me = this;
          var rect = me._rect;
          var angle = me._rotation;
          var center = me.center();
          return [rotated({
            x: rect.x,
            y: rect.y
          }, center, angle), rotated({
            x: rect.x + rect.w,
            y: rect.y
          }, center, angle), rotated({
            x: rect.x + rect.w,
            y: rect.y + rect.h
          }, center, angle), rotated({
            x: rect.x,
            y: rect.y + rect.h
          }, center, angle)];
        }
      });

      function coordinates(el, model, geometry) {
        var point = model.positioner(el, model);
        var vx = point.vx;
        var vy = point.vy;

        if (!vx && !vy) {
          // if aligned center, we don't want to offset the center point
          return {
            x: point.x,
            y: point.y
          };
        }

        var w = geometry.w;
        var h = geometry.h; // take in account the label rotation

        var rotation = model.rotation;
        var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
        var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation)); // scale the unit vector (vx, vy) to get at least dx or dy equal to
        // w or h respectively (else we would calculate the distance to the
        // ellipse inscribed in the bounding rect)

        var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
        dx *= vx * vs;
        dy *= vy * vs; // finally, include the explicit offset

        dx += model.offset * vx;
        dy += model.offset * vy;
        return {
          x: point.x + dx,
          y: point.y + dy
        };
      }

      function collide(labels, collider) {
        var i, j, s0, s1; // IMPORTANT Iterate in the reverse order since items at the end of the
        // list have an higher weight/priority and thus should be less impacted
        // by the overlapping strategy.

        for (i = labels.length - 1; i >= 0; --i) {
          s0 = labels[i].$layout;

          for (j = i - 1; j >= 0 && s0._visible; --j) {
            s1 = labels[j].$layout;

            if (s1._visible && s0._box.intersects(s1._box)) {
              collider(s0, s1);
            }
          }
        }

        return labels;
      }

      function compute(labels) {
        var i, ilen, label, state, geometry, center, proxy; // Initialize labels for overlap detection

        for (i = 0, ilen = labels.length; i < ilen; ++i) {
          label = labels[i];
          state = label.$layout;

          if (state._visible) {
            // Chart.js 3 removed el._model in favor of getProps(), making harder to
            // abstract reading values in positioners. Also, using string arrays to
            // read values (i.e. var {a,b,c} = el.getProps(["a","b","c"])) would make
            // positioners inefficient in the normal case (i.e. not the final values)
            // and the code a bit ugly, so let's use a Proxy instead.
            proxy = new Proxy(label._el, {
              get: function get(el, p) {
                return el.getProps([p], true)[p];
              }
            });
            geometry = label.geometry();
            center = coordinates(proxy, label.model(), geometry);

            state._box.update(center, geometry, label.rotation());
          }
        } // Auto hide overlapping labels


        return collide(labels, function (s0, s1) {
          var h0 = s0._hidable;
          var h1 = s1._hidable;

          if (h0 && h1 || h1) {
            s1._visible = false;
          } else if (h0) {
            s0._visible = false;
          }
        });
      }

      var layout = {
        prepare: function prepare(datasets) {
          var labels = [];
          var i, j, ilen, jlen, label;

          for (i = 0, ilen = datasets.length; i < ilen; ++i) {
            for (j = 0, jlen = datasets[i].length; j < jlen; ++j) {
              label = datasets[i][j];
              labels.push(label);
              label.$layout = {
                _box: new HitBox(),
                _hidable: false,
                _visible: true,
                _set: i,
                _idx: j
              };
            }
          } // TODO New `z` option: labels with a higher z-index are drawn
          // of top of the ones with a lower index. Lowest z-index labels
          // are also discarded first when hiding overlapping labels.


          labels.sort(function (a, b) {
            var sa = a.$layout;
            var sb = b.$layout;
            return sa._idx === sb._idx ? sb._set - sa._set : sb._idx - sa._idx;
          });
          this.update(labels);
          return labels;
        },
        update: function update(labels) {
          var dirty = false;
          var i, ilen, label, model, state;

          for (i = 0, ilen = labels.length; i < ilen; ++i) {
            label = labels[i];
            model = label.model();
            state = label.$layout;
            state._hidable = model && model.display === 'auto';
            state._visible = label.visible();
            dirty |= state._hidable;
          }

          if (dirty) {
            compute(labels);
          }
        },
        lookup: function lookup(labels, point) {
          var i, state; // IMPORTANT Iterate in the reverse order since items at the end of
          // the list have an higher z-index, thus should be picked first.

          for (i = labels.length - 1; i >= 0; --i) {
            state = labels[i].$layout;

            if (state && state._visible && state._box.contains(point)) {
              return labels[i];
            }
          }

          return null;
        },
        draw: function draw(chart, labels) {
          var i, ilen, label, state, geometry, center;

          for (i = 0, ilen = labels.length; i < ilen; ++i) {
            label = labels[i];
            state = label.$layout;

            if (state._visible) {
              geometry = label.geometry();
              center = coordinates(label._el, label.model(), geometry);

              state._box.update(center, geometry, label.rotation());

              label.draw(chart, center);
            }
          }
        }
      };

      var formatter = function formatter(value) {
        if (Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndef"])(value)) {
          return null;
        }

        var label = value;
        var keys, klen, k;

        if (Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
          if (!Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndef"])(value.label)) {
            label = value.label;
          } else if (!Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndef"])(value.r)) {
            label = value.r;
          } else {
            label = '';
            keys = Object.keys(value);

            for (k = 0, klen = keys.length; k < klen; ++k) {
              label += (k !== 0 ? ', ' : '') + keys[k] + ': ' + value[keys[k]];
            }
          }
        }

        return '' + label;
      };
      /**
       * IMPORTANT: make sure to also update tests and TypeScript definition
       * files (`/test/specs/defaults.spec.js` and `/types/options.d.ts`)
       */


      var defaults = {
        align: 'center',
        anchor: 'center',
        backgroundColor: null,
        borderColor: null,
        borderRadius: 0,
        borderWidth: 0,
        clamp: false,
        clip: false,
        color: undefined,
        display: true,
        font: {
          family: undefined,
          lineHeight: 1.2,
          size: undefined,
          style: undefined,
          weight: null
        },
        formatter: formatter,
        labels: undefined,
        listeners: {},
        offset: 4,
        opacity: 1,
        padding: {
          top: 4,
          right: 4,
          bottom: 4,
          left: 4
        },
        rotation: 0,
        textAlign: 'start',
        textStrokeColor: undefined,
        textStrokeWidth: 0,
        textShadowBlur: 0,
        textShadowColor: undefined
      };
      /**
       * @see https://github.com/chartjs/Chart.js/issues/4176
       */

      var EXPANDO_KEY = '$datalabels';
      var DEFAULT_KEY = '$default';

      function configure(dataset, options) {
        var override = dataset.datalabels;
        var listeners = {};
        var configs = [];
        var labels, keys;

        if (override === false) {
          return null;
        }

        if (override === true) {
          override = {};
        }

        options = Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, [options, override]);
        labels = options.labels || {};
        keys = Object.keys(labels);
        delete options.labels;

        if (keys.length) {
          keys.forEach(function (key) {
            if (labels[key]) {
              configs.push(Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, [options, labels[key], {
                _key: key
              }]));
            }
          });
        } else {
          // Default label if no "named" label defined.
          configs.push(options);
        } // listeners: {<event-type>: {<label-key>: <fn>}}


        listeners = configs.reduce(function (target, config) {
          Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["each"])(config.listeners || {}, function (fn, event) {
            target[event] = target[event] || {};
            target[event][config._key || DEFAULT_KEY] = fn;
          });
          delete config.listeners;
          return target;
        }, {});
        return {
          labels: configs,
          listeners: listeners
        };
      }

      function dispatchEvent(chart, listeners, label) {
        if (!listeners) {
          return;
        }

        var context = label.$context;
        var groups = label.$groups;
        var callback$1;

        if (!listeners[groups._set]) {
          return;
        }

        callback$1 = listeners[groups._set][groups._key];

        if (!callback$1) {
          return;
        }

        if (Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["callback"])(callback$1, [context]) === true) {
          // Users are allowed to tweak the given context by injecting values that can be
          // used in scriptable options to display labels differently based on the current
          // event (e.g. highlight an hovered label). That's why we update the label with
          // the output context and schedule a new chart render by setting it dirty.
          chart[EXPANDO_KEY]._dirty = true;
          label.update(context);
        }
      }

      function dispatchMoveEvents(chart, listeners, previous, label) {
        var enter, leave;

        if (!previous && !label) {
          return;
        }

        if (!previous) {
          enter = true;
        } else if (!label) {
          leave = true;
        } else if (previous !== label) {
          leave = enter = true;
        }

        if (leave) {
          dispatchEvent(chart, listeners.leave, previous);
        }

        if (enter) {
          dispatchEvent(chart, listeners.enter, label);
        }
      }

      function handleMoveEvents(chart, event) {
        var expando = chart[EXPANDO_KEY];
        var listeners = expando._listeners;
        var previous, label;

        if (!listeners.enter && !listeners.leave) {
          return;
        }

        if (event.type === 'mousemove') {
          label = layout.lookup(expando._labels, event);
        } else if (event.type !== 'mouseout') {
          return;
        }

        previous = expando._hovered;
        expando._hovered = label;
        dispatchMoveEvents(chart, listeners, previous, label);
      }

      function handleClickEvents(chart, event) {
        var expando = chart[EXPANDO_KEY];
        var handlers = expando._listeners.click;
        var label = handlers && layout.lookup(expando._labels, event);

        if (label) {
          dispatchEvent(chart, handlers, label);
        }
      }

      var plugin = {
        id: 'datalabels',
        defaults: defaults,
        beforeInit: function beforeInit(chart) {
          chart[EXPANDO_KEY] = {
            _actives: []
          };
        },
        beforeUpdate: function beforeUpdate(chart) {
          var expando = chart[EXPANDO_KEY];
          expando._listened = false;
          expando._listeners = {}; // {<event-type>: {<dataset-index>: {<label-key>: <fn>}}}

          expando._datasets = []; // per dataset labels: [Label[]]

          expando._labels = []; // layouted labels: Label[]
        },
        afterDatasetUpdate: function afterDatasetUpdate(chart, args, options) {
          var datasetIndex = args.index;
          var expando = chart[EXPANDO_KEY];
          var labels = expando._datasets[datasetIndex] = [];
          var visible = chart.isDatasetVisible(datasetIndex);
          var dataset = chart.data.datasets[datasetIndex];
          var config = configure(dataset, options);
          var elements = args.meta.data || [];
          var ctx = chart.ctx;
          var i, j, ilen, jlen, cfg, key, el, label;
          ctx.save();

          for (i = 0, ilen = elements.length; i < ilen; ++i) {
            el = elements[i];
            el[EXPANDO_KEY] = [];

            if (visible && el && chart.getDataVisibility(i) && !el.skip) {
              for (j = 0, jlen = config.labels.length; j < jlen; ++j) {
                cfg = config.labels[j];
                key = cfg._key;
                label = new Label(cfg, ctx, el, i);
                label.$groups = {
                  _set: datasetIndex,
                  _key: key || DEFAULT_KEY
                };
                label.$context = {
                  active: false,
                  chart: chart,
                  dataIndex: i,
                  dataset: dataset,
                  datasetIndex: datasetIndex
                };
                label.update(label.$context);
                el[EXPANDO_KEY].push(label);
                labels.push(label);
              }
            }
          }

          ctx.restore(); // Store listeners at the chart level and per event type to optimize
          // cases where no listeners are registered for a specific event.

          Object(chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__["merge"])(expando._listeners, config.listeners, {
            merger: function merger(event, target, source) {
              target[event] = target[event] || {};
              target[event][args.index] = source[event];
              expando._listened = true;
            }
          });
        },
        afterUpdate: function afterUpdate(chart, options) {
          chart[EXPANDO_KEY]._labels = layout.prepare(chart[EXPANDO_KEY]._datasets, options);
        },
        // Draw labels on top of all dataset elements
        // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
        // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
        afterDatasetsDraw: function afterDatasetsDraw(chart) {
          layout.draw(chart, chart[EXPANDO_KEY]._labels);
        },
        beforeEvent: function beforeEvent(chart, args) {
          // If there is no listener registered for this chart, `listened` will be false,
          // meaning we can immediately ignore the incoming event and avoid useless extra
          // computation for users who don't implement label interactions.
          if (chart[EXPANDO_KEY]._listened) {
            var event = args.event;

            switch (event.type) {
              case 'mousemove':
              case 'mouseout':
                handleMoveEvents(chart, event);
                break;

              case 'click':
                handleClickEvents(chart, event);
                break;
            }
          }
        },
        afterEvent: function afterEvent(chart) {
          var expando = chart[EXPANDO_KEY];
          var previous = expando._actives;
          var actives = expando._actives = chart.getActiveElements();
          var updates = utils.arrayDiff(previous, actives);
          var i, ilen, j, jlen, update, label, labels;

          for (i = 0, ilen = updates.length; i < ilen; ++i) {
            update = updates[i];

            if (update[1]) {
              labels = update[0].element[EXPANDO_KEY] || [];

              for (j = 0, jlen = labels.length; j < jlen; ++j) {
                label = labels[j];
                label.$context.active = update[1] === 1;
                label.update(label.$context);
              }
            }
          }

          if (expando._dirty || updates.length) {
            layout.update(expando._labels);
            chart.render();
          }

          delete expando._dirty;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = plugin;
      /***/
    },

    /***/
    "XiUz":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js ***!
      \************************************************************************/

    /*! exports provided: FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective */

    /***/
    function XiUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexModule", function () {
        return FlexModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function () {
        return FlexStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexDirective", function () {
        return FlexDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function () {
        return DefaultFlexDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function () {
        return FlexAlignStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function () {
        return FlexAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function () {
        return DefaultFlexAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function () {
        return FlexFillStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function () {
        return FlexFillDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function () {
        return FlexOffsetStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function () {
        return FlexOffsetDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function () {
        return DefaultFlexOffsetDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function () {
        return FlexOrderStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function () {
        return FlexOrderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function () {
        return DefaultFlexOrderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function () {
        return LayoutStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutDirective", function () {
        return LayoutDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function () {
        return DefaultLayoutDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function () {
        return LayoutAlignStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function () {
        return LayoutAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function () {
        return DefaultLayoutAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function () {
        return LayoutGapStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function () {
        return LayoutGapDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function () {
        return DefaultLayoutGapDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: utils/layout-validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       * @type {?}
       */


      var INLINE = 'inline';
      /** @type {?} */

      var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
      /**
       * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
       * @param {?} value
       * @return {?}
       */

      function buildLayoutCSS(value) {
        var _validateValue = validateValue(value),
            _validateValue2 = _slicedToArray(_validateValue, 3),
            direction = _validateValue2[0],
            wrap = _validateValue2[1],
            isInline = _validateValue2[2];

        return buildCSS(direction, wrap, isInline);
      }
      /**
       * Validate the value to be one of the acceptable value options
       * Use default fallback of 'row'
       * @param {?} value
       * @return {?}
       */


      function validateValue(value) {
        value = value ? value.toLowerCase() : '';

        var _value$split = value.split(' '),
            _value$split2 = _slicedToArray(_value$split, 3),
            direction = _value$split2[0],
            wrap = _value$split2[1],
            inline = _value$split2[2]; // First value must be the `flex-direction`


        if (!LAYOUT_VALUES.find(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x === direction;
        })) {
          direction = LAYOUT_VALUES[0];
        }

        if (wrap === INLINE) {
          wrap = inline !== INLINE ? inline : '';
          inline = INLINE;
        }

        return [direction, validateWrapValue(wrap), !!inline];
      }
      /**
       * Determine if the validated, flex-direction value specifies
       * a horizontal/row flow.
       * @param {?} value
       * @return {?}
       */


      function isFlowHorizontal(value) {
        var _validateValue3 = validateValue(value),
            _validateValue4 = _slicedToArray(_validateValue3, 1),
            flow = _validateValue4[0];

        return flow.indexOf('row') > -1;
      }
      /**
       * Convert layout-wrap='<value>' to expected flex-wrap style
       * @param {?} value
       * @return {?}
       */


      function validateWrapValue(value) {
        if (!!value) {
          switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
              value = 'wrap-reverse';
              break;

            case 'no':
            case 'none':
            case 'nowrap':
              value = 'nowrap';
              break;
            // All other values fallback to 'wrap'

            default:
              value = 'wrap';
              break;
          }
        }

        return value;
      }
      /**
       * Build the CSS that should be assigned to the element instance
       * BUG:
       *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
       *      Use height instead if possible; height : <xxx>vh;
       *
       *  This way any padding or border specified on the child elements are
       *  laid out and drawn inside that element's specified width and height.
       * @param {?} direction
       * @param {?=} wrap
       * @param {?=} inline
       * @return {?}
       */


      function buildCSS(direction) {
        var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return {
          'display': inline ? 'inline-flex' : 'flex',
          'box-sizing': 'border-box',
          'flex-direction': direction,
          'flex-wrap': !!wrap ? wrap : null
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/layout/layout.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var LayoutStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_) {
        _inherits(LayoutStyleBuilder, _angular_flex_layout_);

        var _super = _createSuper(LayoutStyleBuilder);

        function LayoutStyleBuilder() {
          _classCallCheck(this, LayoutStyleBuilder);

          return _super.apply(this, arguments);
        }

        _createClass(LayoutStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @return {?}
           */
          function buildStyles(input) {
            return buildLayoutCSS(input);
          }
        }]);

        return LayoutStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      LayoutStyleBuilder.ɵfac = function LayoutStyleBuilder_Factory(t) {
        return ɵLayoutStyleBuilder_BaseFactory(t || LayoutStyleBuilder);
      };
      /** @nocollapse */


      LayoutStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function LayoutStyleBuilder_Factory() {
          return new LayoutStyleBuilder();
        },
        token: LayoutStyleBuilder,
        providedIn: "root"
      });

      var ɵLayoutStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LayoutStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** @type {?} */


      var inputs = ['fxLayout', 'fxLayout.xs', 'fxLayout.sm', 'fxLayout.md', 'fxLayout.lg', 'fxLayout.xl', 'fxLayout.lt-sm', 'fxLayout.lt-md', 'fxLayout.lt-lg', 'fxLayout.lt-xl', 'fxLayout.gt-xs', 'fxLayout.gt-sm', 'fxLayout.gt-md', 'fxLayout.gt-lg'];
      /** @type {?} */

      var selector = "\n  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],\n  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],\n  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],\n  [fxLayout.gt-md], [fxLayout.gt-lg]\n";
      /**
       * 'layout' flexbox styling directive
       * Defines the positioning flow direction for the child elements: row or column
       * Optional values: column or row (default)
       * @see https://css-tricks.com/almanac/properties/f/flex-direction/
       *
       */

      var LayoutDirective = /*#__PURE__*/function (_angular_flex_layout_2) {
        _inherits(LayoutDirective, _angular_flex_layout_2);

        var _super2 = _createSuper(LayoutDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function LayoutDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this;

          _classCallCheck(this, LayoutDirective);

          _this = _super2.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this.DIRECTIVE_KEY = 'layout';
          _this.styleCache = layoutCache;

          _this.init();

          return _this;
        }

        return _createClass(LayoutDirective);
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      LayoutDirective.ɵfac = function LayoutDirective_Factory(t) {
        return new (t || LayoutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      LayoutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: LayoutDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      LayoutDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: LayoutStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: LayoutStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();

      var DefaultLayoutDirective = /*#__PURE__*/function (_LayoutDirective) {
        _inherits(DefaultLayoutDirective, _LayoutDirective);

        var _super3 = _createSuper(DefaultLayoutDirective);

        function DefaultLayoutDirective() {
          var _this2;

          _classCallCheck(this, DefaultLayoutDirective);

          _this2 = _super3.apply(this, arguments);
          _this2.inputs = inputs;
          return _this2;
        }

        return _createClass(DefaultLayoutDirective);
      }(LayoutDirective);

      DefaultLayoutDirective.ɵfac = function DefaultLayoutDirective_Factory(t) {
        return ɵDefaultLayoutDirective_BaseFactory(t || DefaultLayoutDirective);
      };

      DefaultLayoutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultLayoutDirective,
        selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]],
        inputs: {
          fxLayout: "fxLayout",
          "fxLayout.xs": "fxLayout.xs",
          "fxLayout.sm": "fxLayout.sm",
          "fxLayout.md": "fxLayout.md",
          "fxLayout.lg": "fxLayout.lg",
          "fxLayout.xl": "fxLayout.xl",
          "fxLayout.lt-sm": "fxLayout.lt-sm",
          "fxLayout.lt-md": "fxLayout.lt-md",
          "fxLayout.lt-lg": "fxLayout.lt-lg",
          "fxLayout.lt-xl": "fxLayout.lt-xl",
          "fxLayout.gt-xs": "fxLayout.gt-xs",
          "fxLayout.gt-sm": "fxLayout.gt-sm",
          "fxLayout.gt-md": "fxLayout.gt-md",
          "fxLayout.gt-lg": "fxLayout.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultLayoutDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector,
            inputs: inputs
          }]
        }], null, null);
      })();
      /** @type {?} */


      var layoutCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/layout-gap/layout-gap.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var CLEAR_MARGIN_CSS = {
        'margin-left': null,
        'margin-right': null,
        'margin-top': null,
        'margin-bottom': null
      };

      var LayoutGapStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_3) {
        _inherits(LayoutGapStyleBuilder, _angular_flex_layout_3);

        var _super4 = _createSuper(LayoutGapStyleBuilder);

        /**
         * @param {?} _styler
         */
        function LayoutGapStyleBuilder(_styler) {
          var _this3;

          _classCallCheck(this, LayoutGapStyleBuilder);

          _this3 = _super4.call(this);
          _this3._styler = _styler;
          return _this3;
        }
        /**
         * @param {?} gapValue
         * @param {?} parent
         * @return {?}
         */


        _createClass(LayoutGapStyleBuilder, [{
          key: "buildStyles",
          value: function buildStyles(gapValue, parent) {
            if (gapValue.endsWith(GRID_SPECIFIER)) {
              gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER)); // Add the margin to the host element

              return buildGridMargin(gapValue, parent.directionality);
            } else {
              return {};
            }
          }
          /**
           * @param {?} gapValue
           * @param {?} _styles
           * @param {?} parent
           * @return {?}
           */

        }, {
          key: "sideEffect",
          value: function sideEffect(gapValue, _styles, parent) {
            /** @type {?} */
            var items = parent.items;

            if (gapValue.endsWith(GRID_SPECIFIER)) {
              gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER)); // For each `element` children, set the padding

              /** @type {?} */

              var paddingStyles = buildGridPadding(gapValue, parent.directionality);

              this._styler.applyStyleToElements(paddingStyles, parent.items);
            } else {
              /** @type {?} */
              var lastItem =
              /** @type {?} */
              items.pop(); // For each `element` children EXCEPT the last,
              // set the margin right/bottom styles...

              /** @type {?} */

              var gapCss = buildGapCSS(gapValue, parent);

              this._styler.applyStyleToElements(gapCss, items); // Clear all gaps for all visible elements


              this._styler.applyStyleToElements(CLEAR_MARGIN_CSS, [lastItem]);
            }
          }
        }]);

        return LayoutGapStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      LayoutGapStyleBuilder.ɵfac = function LayoutGapStyleBuilder_Factory(t) {
        return new (t || LayoutGapStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
      };
      /** @nocollapse */


      LayoutGapStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function LayoutGapStyleBuilder_Factory() {
          return new LayoutGapStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
        },
        token: LayoutGapStyleBuilder,
        providedIn: "root"
      });
      /** @nocollapse */

      LayoutGapStyleBuilder.ctorParameters = function () {
        return [{
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutGapStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }];
        }, null);
      })();
      /** @type {?} */


      var inputs$1 = ['fxLayoutGap', 'fxLayoutGap.xs', 'fxLayoutGap.sm', 'fxLayoutGap.md', 'fxLayoutGap.lg', 'fxLayoutGap.xl', 'fxLayoutGap.lt-sm', 'fxLayoutGap.lt-md', 'fxLayoutGap.lt-lg', 'fxLayoutGap.lt-xl', 'fxLayoutGap.gt-xs', 'fxLayoutGap.gt-sm', 'fxLayoutGap.gt-md', 'fxLayoutGap.gt-lg'];
      /** @type {?} */

      var selector$1 = "\n  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],\n  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],\n  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],\n  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n";
      /**
       * 'layout-padding' styling directive
       *  Defines padding of child elements in a layout container
       */

      var LayoutGapDirective = /*#__PURE__*/function (_angular_flex_layout_4) {
        _inherits(LayoutGapDirective, _angular_flex_layout_4);

        var _super5 = _createSuper(LayoutGapDirective);

        /**
         * @param {?} elRef
         * @param {?} zone
         * @param {?} directionality
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function LayoutGapDirective(elRef, zone, directionality, styleUtils, styleBuilder, marshal) {
          var _this4;

          _classCallCheck(this, LayoutGapDirective);

          _this4 = _super5.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this4.zone = zone;
          _this4.directionality = directionality;
          _this4.styleUtils = styleUtils;
          _this4.layout = 'row'; // default flex-direction
          // default flex-direction

          _this4.DIRECTIVE_KEY = 'layout-gap';
          _this4.observerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** @type {?} */

          var extraTriggers = [_this4.directionality.change, _this4.observerSubject.asObservable()];

          _this4.init(extraTriggers);

          _this4.marshal.trackValue(_this4.nativeElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this4.destroySubject)).subscribe(_this4.onLayoutChange.bind(_assertThisInitialized(_this4)));

          return _this4;
        }
        /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc
         * @protected
         * @return {?}
         */


        _createClass(LayoutGapDirective, [{
          key: "childrenNodes",
          get: function get() {
            /** @type {?} */
            var obj = this.nativeElement.children;
            /** @type {?} */

            var buffer = []; // iterate backwards ensuring that length is an UInt32

            for (var i = obj.length; i--;) {
              buffer[i] = obj[i];
            }

            return buffer;
          } // *********************************************
          // Lifecycle Methods
          // *********************************************

          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.buildChildObservable();
            this.triggerUpdate();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(LayoutGapDirective.prototype), "ngOnDestroy", this).call(this);

            if (this.observer) {
              this.observer.disconnect();
            }
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           * Cache the parent container 'flex-direction' and update the 'margin' styles
           * @protected
           * @param {?} matcher
           * @return {?}
           */

        }, {
          key: "onLayoutChange",
          value: function onLayoutChange(matcher) {
            var _this5 = this;

            /** @type {?} */
            var layout = matcher.value; // Make sure to filter out 'wrap' option

            /** @type {?} */

            var direction = layout.split(' ');
            this.layout = direction[0];

            if (!LAYOUT_VALUES.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x === _this5.layout;
            })) {
              this.layout = 'row';
            }

            this.triggerUpdate();
          }
          /**
           *
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            var _this6 = this;

            // Gather all non-hidden Element nodes

            /** @type {?} */
            var items = this.childrenNodes.filter(
            /**
            * @param {?} el
            * @return {?}
            */
            function (el) {
              return el.nodeType === 1 && _this6.willDisplay(el);
            }).sort(
            /**
            * @param {?} a
            * @param {?} b
            * @return {?}
            */
            function (a, b) {
              /** @type {?} */
              var orderA = +_this6.styler.lookupStyle(a, 'order');
              /** @type {?} */

              var orderB = +_this6.styler.lookupStyle(b, 'order');

              if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                return 0;
              } else {
                return orderA > orderB ? 1 : -1;
              }
            });

            if (items.length > 0) {
              /** @type {?} */
              var directionality = this.directionality.value;
              /** @type {?} */

              var layout = this.layout;

              if (layout === 'row' && directionality === 'rtl') {
                this.styleCache = layoutGapCacheRowRtl;
              } else if (layout === 'row' && directionality !== 'rtl') {
                this.styleCache = layoutGapCacheRowLtr;
              } else if (layout === 'column' && directionality === 'rtl') {
                this.styleCache = layoutGapCacheColumnRtl;
              } else if (layout === 'column' && directionality !== 'rtl') {
                this.styleCache = layoutGapCacheColumnLtr;
              }

              this.addStyles(value, {
                directionality: directionality,
                items: items,
                layout: layout
              });
            }
          }
          /**
           * We need to override clearStyles because in most cases mru isn't populated
           * @protected
           * @return {?}
           */

        }, {
          key: "clearStyles",
          value: function clearStyles() {
            /** @type {?} */
            var gridMode = Object.keys(this.mru).length > 0;
            /** @type {?} */

            var childrenStyle = gridMode ? 'padding' : getMarginType(this.directionality.value, this.layout); // If there are styles on the parent remove them

            if (gridMode) {
              _get(_getPrototypeOf(LayoutGapDirective.prototype), "clearStyles", this).call(this);
            } // Then remove the children styles too


            this.styleUtils.applyStyleToElements(_defineProperty({}, childrenStyle, ''), this.childrenNodes);
          }
          /**
           * Determine if an element will show or hide based on current activation
           * @protected
           * @param {?} source
           * @return {?}
           */

        }, {
          key: "willDisplay",
          value: function willDisplay(source) {
            /** @type {?} */
            var value = this.marshal.getValue(source, 'show-hide');
            return value === true || value === undefined && this.styleUtils.lookupStyle(source, 'display') !== 'none';
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "buildChildObservable",
          value: function buildChildObservable() {
            var _this7 = this;

            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              if (typeof MutationObserver !== 'undefined') {
                _this7.observer = new MutationObserver(
                /**
                * @param {?} mutations
                * @return {?}
                */
                function (mutations) {
                  /** @type {?} */
                  var validatedChanges =
                  /**
                  * @param {?} it
                  * @return {?}
                  */
                  function validatedChanges(it) {
                    return it.addedNodes && it.addedNodes.length > 0 || it.removedNodes && it.removedNodes.length > 0;
                  }; // update gap styles only for child 'added' or 'removed' events


                  if (mutations.some(validatedChanges)) {
                    _this7.observerSubject.next();
                  }
                });

                _this7.observer.observe(_this7.nativeElement, {
                  childList: true
                });
              }
            });
          }
        }]);

        return LayoutGapDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      LayoutGapDirective.ɵfac = function LayoutGapDirective_Factory(t) {
        return new (t || LayoutGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      LayoutGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: LayoutGapDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      LayoutGapDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: LayoutGapStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutGapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: LayoutGapStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();

      var DefaultLayoutGapDirective = /*#__PURE__*/function (_LayoutGapDirective) {
        _inherits(DefaultLayoutGapDirective, _LayoutGapDirective);

        var _super6 = _createSuper(DefaultLayoutGapDirective);

        function DefaultLayoutGapDirective() {
          var _this8;

          _classCallCheck(this, DefaultLayoutGapDirective);

          _this8 = _super6.apply(this, arguments);
          _this8.inputs = inputs$1;
          return _this8;
        }

        return _createClass(DefaultLayoutGapDirective);
      }(LayoutGapDirective);

      DefaultLayoutGapDirective.ɵfac = function DefaultLayoutGapDirective_Factory(t) {
        return ɵDefaultLayoutGapDirective_BaseFactory(t || DefaultLayoutGapDirective);
      };

      DefaultLayoutGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultLayoutGapDirective,
        selectors: [["", "fxLayoutGap", ""], ["", "fxLayoutGap.xs", ""], ["", "fxLayoutGap.sm", ""], ["", "fxLayoutGap.md", ""], ["", "fxLayoutGap.lg", ""], ["", "fxLayoutGap.xl", ""], ["", "fxLayoutGap.lt-sm", ""], ["", "fxLayoutGap.lt-md", ""], ["", "fxLayoutGap.lt-lg", ""], ["", "fxLayoutGap.lt-xl", ""], ["", "fxLayoutGap.gt-xs", ""], ["", "fxLayoutGap.gt-sm", ""], ["", "fxLayoutGap.gt-md", ""], ["", "fxLayoutGap.gt-lg", ""]],
        inputs: {
          fxLayoutGap: "fxLayoutGap",
          "fxLayoutGap.xs": "fxLayoutGap.xs",
          "fxLayoutGap.sm": "fxLayoutGap.sm",
          "fxLayoutGap.md": "fxLayoutGap.md",
          "fxLayoutGap.lg": "fxLayoutGap.lg",
          "fxLayoutGap.xl": "fxLayoutGap.xl",
          "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm",
          "fxLayoutGap.lt-md": "fxLayoutGap.lt-md",
          "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg",
          "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl",
          "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs",
          "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm",
          "fxLayoutGap.gt-md": "fxLayoutGap.gt-md",
          "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultLayoutGapDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutGapDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutGapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$1,
            inputs: inputs$1
          }]
        }], null, null);
      })();
      /** @type {?} */


      var layoutGapCacheRowRtl = new Map();
      /** @type {?} */

      var layoutGapCacheColumnRtl = new Map();
      /** @type {?} */

      var layoutGapCacheRowLtr = new Map();
      /** @type {?} */

      var layoutGapCacheColumnLtr = new Map();
      /** @type {?} */

      var GRID_SPECIFIER = ' grid';
      /**
       * @param {?} value
       * @param {?} directionality
       * @return {?}
       */

      function buildGridPadding(value, directionality) {
        var _value$split3 = value.split(' '),
            _value$split4 = _slicedToArray(_value$split3, 2),
            between = _value$split4[0],
            below = _value$split4[1];
        /** @type {?} */


        var bottom = below || between;
        /** @type {?} */

        var paddingRight = '0px';
        /** @type {?} */

        var paddingBottom = bottom;
        /** @type {?} */

        var paddingLeft = '0px';

        if (directionality === 'rtl') {
          paddingLeft = between;
        } else {
          paddingRight = between;
        }

        return {
          'padding': "0px ".concat(paddingRight, " ").concat(paddingBottom, " ").concat(paddingLeft)
        };
      }
      /**
       * @param {?} value
       * @param {?} directionality
       * @return {?}
       */


      function buildGridMargin(value, directionality) {
        var _value$split5 = value.split(' '),
            _value$split6 = _slicedToArray(_value$split5, 2),
            between = _value$split6[0],
            below = _value$split6[1];
        /** @type {?} */


        var bottom = below || between;
        /** @type {?} */

        var minus =
        /**
        * @param {?} str
        * @return {?}
        */
        function minus(str) {
          return "-".concat(str);
        };
        /** @type {?} */


        var marginRight = '0px';
        /** @type {?} */

        var marginBottom = minus(bottom);
        /** @type {?} */

        var marginLeft = '0px';

        if (directionality === 'rtl') {
          marginLeft = minus(between);
        } else {
          marginRight = minus(between);
        }

        return {
          'margin': "0px ".concat(marginRight, " ").concat(marginBottom, " ").concat(marginLeft)
        };
      }
      /**
       * @param {?} directionality
       * @param {?} layout
       * @return {?}
       */


      function getMarginType(directionality, layout) {
        switch (layout) {
          case 'column':
            return 'margin-bottom';

          case 'column-reverse':
            return 'margin-top';

          case 'row':
            return directionality === 'rtl' ? 'margin-left' : 'margin-right';

          case 'row-reverse':
            return directionality === 'rtl' ? 'margin-right' : 'margin-left';

          default:
            return directionality === 'rtl' ? 'margin-left' : 'margin-right';
        }
      }
      /**
       * @param {?} gapValue
       * @param {?} parent
       * @return {?}
       */


      function buildGapCSS(gapValue, parent) {
        /** @type {?} */
        var key = getMarginType(parent.directionality, parent.layout);
        /** @type {?} */

        var margins = Object.assign({}, CLEAR_MARGIN_CSS);
        margins[key] = gapValue;
        return margins;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: utils/object-extend.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Extends an object with the *enumerable* and *own* properties of one or more source objects,
       * similar to Object.assign.
       *
       * @param {?} dest The object which will have properties copied to it.
       * @param {...?} sources The source objects from which properties will be copied.
       * @return {?}
       */


      function extendObject(dest) {
        if (dest == null) {
          throw TypeError('Cannot convert undefined or null to object');
        }

        for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          sources[_key - 1] = arguments[_key];
        }

        for (var _i2 = 0, _sources = sources; _i2 < _sources.length; _i2++) {
          var source = _sources[_i2];

          if (source != null) {
            for (var key in source) {
              if (source.hasOwnProperty(key)) {
                dest[key] = source[key];
              }
            }
          }
        }

        return dest;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex/flex.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FlexStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_5) {
        _inherits(FlexStyleBuilder, _angular_flex_layout_5);

        var _super7 = _createSuper(FlexStyleBuilder);

        /**
         * @param {?} layoutConfig
         */
        function FlexStyleBuilder(layoutConfig) {
          var _this9;

          _classCallCheck(this, FlexStyleBuilder);

          _this9 = _super7.call(this);
          _this9.layoutConfig = layoutConfig;
          return _this9;
        }
        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */


        _createClass(FlexStyleBuilder, [{
          key: "buildStyles",
          value: function buildStyles(input, parent) {
            var _input$split = input.split(' '),
                _input$split2 = _toArray(_input$split),
                grow = _input$split2[0],
                shrink = _input$split2[1],
                basisParts = _input$split2.slice(2);
            /** @type {?} */


            var basis = basisParts.join(' '); // The flex-direction of this element's flex container. Defaults to 'row'.

            /** @type {?} */

            var direction = parent.direction.indexOf('column') > -1 ? 'column' : 'row';
            /** @type {?} */

            var max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
            /** @type {?} */

            var min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
            /** @type {?} */

            var hasCalc = String(basis).indexOf('calc') > -1;
            /** @type {?} */

            var usingCalc = hasCalc || basis === 'auto';
            /** @type {?} */

            var isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
            /** @type {?} */

            var hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('rem') > -1 || String(basis).indexOf('em') > -1 || String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
            /** @type {?} */

            var isValue = hasCalc || hasUnits;
            grow = grow == '0' ? 0 : grow;
            shrink = shrink == '0' ? 0 : shrink; // make box inflexible when shrink and grow are both zero
            // should not set a min when the grow is zero
            // should not set a max when the shrink is zero

            /** @type {?} */

            var isFixed = !grow && !shrink;
            /** @type {?} */

            var css = {}; // flex-basis allows you to specify the initial/starting main-axis size of the element,
            // before anything else is computed. It can either be a percentage or an absolute value.
            // It is, however, not the breaking point for flex-grow/shrink properties
            //
            // flex-grow can be seen as this:
            //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
            //   1: (Default value). Stretch; will be the same size to all other flex items on
            //       the same row since they have a default value of 1.
            //   ≥2 (integer n): Stretch. Will be n times the size of other elements
            //      with 'flex-grow: 1' on the same row.
            // Use `null` to clear existing styles.

            /** @type {?} */

            var clearStyles = {
              'max-width': null,
              'max-height': null,
              'min-width': null,
              'min-height': null
            };

            switch (basis || '') {
              case '':
                /** @type {?} */
                var useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
                basis = direction === 'row' ? '0%' : useColumnBasisZero ? '0.000000001px' : 'auto';
                break;

              case 'initial': // default

              case 'nogrow':
                grow = 0;
                basis = 'auto';
                break;

              case 'grow':
                basis = '100%';
                break;

              case 'noshrink':
                shrink = 0;
                basis = 'auto';
                break;

              case 'auto':
                break;

              case 'none':
                grow = 0;
                shrink = 0;
                basis = 'auto';
                break;

              default:
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN(
                /** @type {?} */
                basis)) {
                  basis = basis + '%';
                } // Fix for issue 280


                if (basis === '0%') {
                  isValue = true;
                }

                if (basis === '0px') {
                  basis = '0%';
                } // fix issue #5345


                if (hasCalc) {
                  css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': isValue ? basis : '100%'
                  });
                } else {
                  css = extendObject(clearStyles, {
                    'flex': "".concat(grow, " ").concat(shrink, " ").concat(isValue ? basis : '100%')
                  });
                }

                break;
            }

            if (!(css['flex'] || css['flex-grow'])) {
              if (hasCalc) {
                css = extendObject(clearStyles, {
                  'flex-grow': grow,
                  'flex-shrink': shrink,
                  'flex-basis': basis
                });
              } else {
                css = extendObject(clearStyles, {
                  'flex': "".concat(grow, " ").concat(shrink, " ").concat(basis)
                });
              }
            } // Fix for issues 277, 534, and 728


            if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
              css[min] = isFixed || isValue && grow ? basis : null;
              css[max] = isFixed || !usingCalc && shrink ? basis : null;
            } // Fix for issue 528


            if (!css[min] && !css[max]) {
              if (hasCalc) {
                css = extendObject(clearStyles, {
                  'flex-grow': grow,
                  'flex-shrink': shrink,
                  'flex-basis': basis
                });
              } else {
                css = extendObject(clearStyles, {
                  'flex': "".concat(grow, " ").concat(shrink, " ").concat(basis)
                });
              }
            } else {
              // Fix for issue 660
              if (parent.hasWrap) {
                css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ? hasCalc ? css[max] : "".concat(grow, " ").concat(shrink, " ").concat(css[max]) : hasCalc ? css[min] : "".concat(grow, " ").concat(shrink, " ").concat(css[min]);
              }
            }

            return (
              /** @type {?} */
              extendObject(css, {
                'box-sizing': 'border-box'
              })
            );
          }
        }]);

        return FlexStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      FlexStyleBuilder.ɵfac = function FlexStyleBuilder_Factory(t) {
        return new (t || FlexStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]));
      };
      /** @nocollapse */


      FlexStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FlexStyleBuilder_Factory() {
          return new FlexStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]));
        },
        token: FlexStyleBuilder,
        providedIn: "root"
      });
      /** @nocollapse */

      FlexStyleBuilder.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
            }]
          }];
        }, null);
      })();
      /** @type {?} */


      var inputs$2 = ['fxFlex', 'fxFlex.xs', 'fxFlex.sm', 'fxFlex.md', 'fxFlex.lg', 'fxFlex.xl', 'fxFlex.lt-sm', 'fxFlex.lt-md', 'fxFlex.lt-lg', 'fxFlex.lt-xl', 'fxFlex.gt-xs', 'fxFlex.gt-sm', 'fxFlex.gt-md', 'fxFlex.gt-lg'];
      /** @type {?} */

      var selector$2 = "\n  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],\n  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],\n  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],\n  [fxFlex.gt-md], [fxFlex.gt-lg]\n";
      /**
       * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
       * Corresponds to the css `flex` shorthand property.
       *
       * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
       */

      var FlexDirective = /*#__PURE__*/function (_angular_flex_layout_6) {
        _inherits(FlexDirective, _angular_flex_layout_6);

        var _super8 = _createSuper(FlexDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} layoutConfig
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function FlexDirective(elRef, styleUtils, layoutConfig, styleBuilder, marshal) {
          var _this10;

          _classCallCheck(this, FlexDirective);

          _this10 = _super8.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this10.layoutConfig = layoutConfig;
          _this10.marshal = marshal;
          _this10.DIRECTIVE_KEY = 'flex';
          _this10.direction = undefined;
          _this10.wrap = undefined;
          _this10.flexGrow = '1';
          _this10.flexShrink = '1';

          _this10.init();

          return _this10;
        }
        /**
         * @return {?}
         */


        _createClass(FlexDirective, [{
          key: "shrink",
          get: function get() {
            return this.flexShrink;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.flexShrink = value || '1';
            this.triggerReflow();
          }
          /**
           * @return {?}
           */

        }, {
          key: "grow",
          get: function get() {
            return this.flexGrow;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.flexGrow = value || '1';
            this.triggerReflow();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.parentElement) {
              this.marshal.trackValue(this.parentElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject)).subscribe(this.onLayoutChange.bind(this));
              this.marshal.trackValue(this.nativeElement, 'layout-align').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject)).subscribe(this.triggerReflow.bind(this));
            }
          }
          /**
           * Caches the parent container's 'flex-direction' and updates the element's style.
           * Used as a handler for layout change events from the parent flex container.
           * @protected
           * @param {?} matcher
           * @return {?}
           */

        }, {
          key: "onLayoutChange",
          value: function onLayoutChange(matcher) {
            /** @type {?} */
            var layout = matcher.value;
            /** @type {?} */

            var layoutParts = layout.split(' ');
            this.direction = layoutParts[0];
            this.wrap = layoutParts[1] !== undefined && layoutParts[1] === 'wrap';
            this.triggerUpdate();
          }
          /**
           * Input to this is exclusively the basis input value
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            /** @type {?} */
            var addFlexToParent = this.layoutConfig.addFlexToParent !== false;

            if (this.direction === undefined) {
              this.direction = this.getFlexFlowDirection(
              /** @type {?} */
              this.parentElement, addFlexToParent);
            }

            if (this.wrap === undefined) {
              this.wrap = this.hasWrap(
              /** @type {?} */
              this.parentElement);
            }
            /** @type {?} */


            var direction = this.direction;
            /** @type {?} */

            var isHorizontal = direction.startsWith('row');
            /** @type {?} */

            var hasWrap = this.wrap;

            if (isHorizontal && hasWrap) {
              this.styleCache = flexRowWrapCache;
            } else if (isHorizontal && !hasWrap) {
              this.styleCache = flexRowCache;
            } else if (!isHorizontal && hasWrap) {
              this.styleCache = flexColumnWrapCache;
            } else if (!isHorizontal && !hasWrap) {
              this.styleCache = flexColumnCache;
            }
            /** @type {?} */


            var basis = String(value).replace(';', '');
            /** @type {?} */

            var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(basis, this.flexGrow, this.flexShrink);
            this.addStyles(parts.join(' '), {
              direction: direction,
              hasWrap: hasWrap
            });
          }
          /**
           * Trigger a style reflow, usually based on a shrink/grow input event
           * @protected
           * @return {?}
           */

        }, {
          key: "triggerReflow",
          value: function triggerReflow() {
            /** @type {?} */
            var activatedValue = this.activatedValue;

            if (activatedValue !== undefined) {
              /** @type {?} */
              var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(activatedValue + '', this.flexGrow, this.flexShrink);
              this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, parts.join(' '));
            }
          }
        }]);

        return FlexDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      FlexDirective.ɵfac = function FlexDirective_Factory(t) {
        return new (t || FlexDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      FlexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlexDirective,
        inputs: {
          shrink: ["fxShrink", "shrink"],
          grow: ["fxGrow", "grow"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      FlexDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
          }]
        }, {
          type: FlexStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      FlexDirective.propDecorators = {
        shrink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['fxShrink']
        }],
        grow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['fxGrow']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
            }]
          }, {
            type: FlexStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          shrink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['fxShrink']
          }],
          grow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['fxGrow']
          }]
        });
      })();

      var DefaultFlexDirective = /*#__PURE__*/function (_FlexDirective) {
        _inherits(DefaultFlexDirective, _FlexDirective);

        var _super9 = _createSuper(DefaultFlexDirective);

        function DefaultFlexDirective() {
          var _this11;

          _classCallCheck(this, DefaultFlexDirective);

          _this11 = _super9.apply(this, arguments);
          _this11.inputs = inputs$2;
          return _this11;
        }

        return _createClass(DefaultFlexDirective);
      }(FlexDirective);

      DefaultFlexDirective.ɵfac = function DefaultFlexDirective_Factory(t) {
        return ɵDefaultFlexDirective_BaseFactory(t || DefaultFlexDirective);
      };

      DefaultFlexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultFlexDirective,
        selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]],
        inputs: {
          fxFlex: "fxFlex",
          "fxFlex.xs": "fxFlex.xs",
          "fxFlex.sm": "fxFlex.sm",
          "fxFlex.md": "fxFlex.md",
          "fxFlex.lg": "fxFlex.lg",
          "fxFlex.xl": "fxFlex.xl",
          "fxFlex.lt-sm": "fxFlex.lt-sm",
          "fxFlex.lt-md": "fxFlex.lt-md",
          "fxFlex.lt-lg": "fxFlex.lt-lg",
          "fxFlex.lt-xl": "fxFlex.lt-xl",
          "fxFlex.gt-xs": "fxFlex.gt-xs",
          "fxFlex.gt-sm": "fxFlex.gt-sm",
          "fxFlex.gt-md": "fxFlex.gt-md",
          "fxFlex.gt-lg": "fxFlex.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultFlexDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            inputs: inputs$2,
            selector: selector$2
          }]
        }], null, null);
      })();
      /** @type {?} */


      var flexRowCache = new Map();
      /** @type {?} */

      var flexColumnCache = new Map();
      /** @type {?} */

      var flexRowWrapCache = new Map();
      /** @type {?} */

      var flexColumnWrapCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-order/flex-order.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var FlexOrderStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_7) {
        _inherits(FlexOrderStyleBuilder, _angular_flex_layout_7);

        var _super10 = _createSuper(FlexOrderStyleBuilder);

        function FlexOrderStyleBuilder() {
          _classCallCheck(this, FlexOrderStyleBuilder);

          return _super10.apply(this, arguments);
        }

        _createClass(FlexOrderStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} value
           * @return {?}
           */
          function buildStyles(value) {
            return {
              order: value && parseInt(value, 10) || ''
            };
          }
        }]);

        return FlexOrderStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      FlexOrderStyleBuilder.ɵfac = function FlexOrderStyleBuilder_Factory(t) {
        return ɵFlexOrderStyleBuilder_BaseFactory(t || FlexOrderStyleBuilder);
      };
      /** @nocollapse */


      FlexOrderStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FlexOrderStyleBuilder_Factory() {
          return new FlexOrderStyleBuilder();
        },
        token: FlexOrderStyleBuilder,
        providedIn: "root"
      });

      var ɵFlexOrderStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexOrderStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOrderStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** @type {?} */


      var inputs$3 = ['fxFlexOrder', 'fxFlexOrder.xs', 'fxFlexOrder.sm', 'fxFlexOrder.md', 'fxFlexOrder.lg', 'fxFlexOrder.xl', 'fxFlexOrder.lt-sm', 'fxFlexOrder.lt-md', 'fxFlexOrder.lt-lg', 'fxFlexOrder.lt-xl', 'fxFlexOrder.gt-xs', 'fxFlexOrder.gt-sm', 'fxFlexOrder.gt-md', 'fxFlexOrder.gt-lg'];
      /** @type {?} */

      var selector$3 = "\n  [fxFlexOrder], [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md],\n  [fxFlexOrder.lg], [fxFlexOrder.xl], [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md],\n  [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl], [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm],\n  [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n";
      /**
       * 'flex-order' flexbox styling directive
       * Configures the positional ordering of the element in a sorted layout container
       * @see https://css-tricks.com/almanac/properties/o/order/
       */

      var FlexOrderDirective = /*#__PURE__*/function (_angular_flex_layout_8) {
        _inherits(FlexOrderDirective, _angular_flex_layout_8);

        var _super11 = _createSuper(FlexOrderDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function FlexOrderDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this12;

          _classCallCheck(this, FlexOrderDirective);

          _this12 = _super11.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this12.DIRECTIVE_KEY = 'flex-order';
          _this12.styleCache = flexOrderCache;

          _this12.init();

          return _this12;
        }

        return _createClass(FlexOrderDirective);
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      FlexOrderDirective.ɵfac = function FlexOrderDirective_Factory(t) {
        return new (t || FlexOrderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexOrderStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      FlexOrderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlexOrderDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      FlexOrderDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: FlexOrderStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOrderDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: FlexOrderStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var flexOrderCache = new Map();

      var DefaultFlexOrderDirective = /*#__PURE__*/function (_FlexOrderDirective) {
        _inherits(DefaultFlexOrderDirective, _FlexOrderDirective);

        var _super12 = _createSuper(DefaultFlexOrderDirective);

        function DefaultFlexOrderDirective() {
          var _this13;

          _classCallCheck(this, DefaultFlexOrderDirective);

          _this13 = _super12.apply(this, arguments);
          _this13.inputs = inputs$3;
          return _this13;
        }

        return _createClass(DefaultFlexOrderDirective);
      }(FlexOrderDirective);

      DefaultFlexOrderDirective.ɵfac = function DefaultFlexOrderDirective_Factory(t) {
        return ɵDefaultFlexOrderDirective_BaseFactory(t || DefaultFlexOrderDirective);
      };

      DefaultFlexOrderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultFlexOrderDirective,
        selectors: [["", "fxFlexOrder", ""], ["", "fxFlexOrder.xs", ""], ["", "fxFlexOrder.sm", ""], ["", "fxFlexOrder.md", ""], ["", "fxFlexOrder.lg", ""], ["", "fxFlexOrder.xl", ""], ["", "fxFlexOrder.lt-sm", ""], ["", "fxFlexOrder.lt-md", ""], ["", "fxFlexOrder.lt-lg", ""], ["", "fxFlexOrder.lt-xl", ""], ["", "fxFlexOrder.gt-xs", ""], ["", "fxFlexOrder.gt-sm", ""], ["", "fxFlexOrder.gt-md", ""], ["", "fxFlexOrder.gt-lg", ""]],
        inputs: {
          fxFlexOrder: "fxFlexOrder",
          "fxFlexOrder.xs": "fxFlexOrder.xs",
          "fxFlexOrder.sm": "fxFlexOrder.sm",
          "fxFlexOrder.md": "fxFlexOrder.md",
          "fxFlexOrder.lg": "fxFlexOrder.lg",
          "fxFlexOrder.xl": "fxFlexOrder.xl",
          "fxFlexOrder.lt-sm": "fxFlexOrder.lt-sm",
          "fxFlexOrder.lt-md": "fxFlexOrder.lt-md",
          "fxFlexOrder.lt-lg": "fxFlexOrder.lt-lg",
          "fxFlexOrder.lt-xl": "fxFlexOrder.lt-xl",
          "fxFlexOrder.gt-xs": "fxFlexOrder.gt-xs",
          "fxFlexOrder.gt-sm": "fxFlexOrder.gt-sm",
          "fxFlexOrder.gt-md": "fxFlexOrder.gt-md",
          "fxFlexOrder.gt-lg": "fxFlexOrder.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultFlexOrderDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexOrderDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexOrderDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$3,
            inputs: inputs$3
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-offset/flex-offset.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FlexOffsetStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_9) {
        _inherits(FlexOffsetStyleBuilder, _angular_flex_layout_9);

        var _super13 = _createSuper(FlexOffsetStyleBuilder);

        function FlexOffsetStyleBuilder() {
          _classCallCheck(this, FlexOffsetStyleBuilder);

          return _super13.apply(this, arguments);
        }

        _createClass(FlexOffsetStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} offset
           * @param {?} parent
           * @return {?}
           */
          function buildStyles(offset, parent) {
            if (offset === '') {
              offset = '0';
            }
            /** @type {?} */


            var isPercent = String(offset).indexOf('%') > -1;
            /** @type {?} */

            var isPx = String(offset).indexOf('px') > -1;

            if (!isPx && !isPercent && !isNaN(+offset)) {
              offset = offset + '%';
            }
            /** @type {?} */


            var horizontalLayoutKey = parent.isRtl ? 'margin-right' : 'margin-left';
            /** @type {?} */

            var styles = isFlowHorizontal(parent.layout) ? _defineProperty({}, horizontalLayoutKey, "".concat(offset)) : {
              'margin-top': "".concat(offset)
            };
            return styles;
          }
        }]);

        return FlexOffsetStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      FlexOffsetStyleBuilder.ɵfac = function FlexOffsetStyleBuilder_Factory(t) {
        return ɵFlexOffsetStyleBuilder_BaseFactory(t || FlexOffsetStyleBuilder);
      };
      /** @nocollapse */


      FlexOffsetStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FlexOffsetStyleBuilder_Factory() {
          return new FlexOffsetStyleBuilder();
        },
        token: FlexOffsetStyleBuilder,
        providedIn: "root"
      });

      var ɵFlexOffsetStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexOffsetStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOffsetStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** @type {?} */


      var inputs$4 = ['fxFlexOffset', 'fxFlexOffset.xs', 'fxFlexOffset.sm', 'fxFlexOffset.md', 'fxFlexOffset.lg', 'fxFlexOffset.xl', 'fxFlexOffset.lt-sm', 'fxFlexOffset.lt-md', 'fxFlexOffset.lt-lg', 'fxFlexOffset.lt-xl', 'fxFlexOffset.gt-xs', 'fxFlexOffset.gt-sm', 'fxFlexOffset.gt-md', 'fxFlexOffset.gt-lg'];
      /** @type {?} */

      var selector$4 = "\n  [fxFlexOffset], [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md],\n  [fxFlexOffset.lg], [fxFlexOffset.xl], [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md],\n  [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl], [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm],\n  [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n";
      /**
       * 'flex-offset' flexbox styling directive
       * Configures the 'margin-left' of the element in a layout container
       */

      var FlexOffsetDirective = /*#__PURE__*/function (_angular_flex_layout_10) {
        _inherits(FlexOffsetDirective, _angular_flex_layout_10);

        var _super14 = _createSuper(FlexOffsetDirective);

        /**
         * @param {?} elRef
         * @param {?} directionality
         * @param {?} styleBuilder
         * @param {?} marshal
         * @param {?} styler
         */
        function FlexOffsetDirective(elRef, directionality, styleBuilder, marshal, styler) {
          var _this14;

          _classCallCheck(this, FlexOffsetDirective);

          _this14 = _super14.call(this, elRef, styleBuilder, styler, marshal);
          _this14.directionality = directionality;
          _this14.DIRECTIVE_KEY = 'flex-offset';

          _this14.init([_this14.directionality.change]); // Parent DOM `layout-gap` with affect the nested child with `flex-offset`


          if (_this14.parentElement) {
            _this14.marshal.trackValue(_this14.parentElement, 'layout-gap').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this14.destroySubject)).subscribe(_this14.triggerUpdate.bind(_assertThisInitialized(_this14)));
          }

          return _this14;
        } // *********************************************
        // Protected methods
        // *********************************************

        /**
         * Using the current fxFlexOffset value, update the inline CSS
         * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
         *       otherwise `margin-top` is used for the offset.
         * @protected
         * @param {?=} value
         * @return {?}
         */


        _createClass(FlexOffsetDirective, [{
          key: "updateWithValue",
          value: function updateWithValue() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            // The flex-direction of this element's flex container. Defaults to 'row'.

            /** @type {?} */
            var layout = this.getFlexFlowDirection(
            /** @type {?} */
            this.parentElement, true);
            /** @type {?} */

            var isRtl = this.directionality.value === 'rtl';

            if (layout === 'row' && isRtl) {
              this.styleCache = flexOffsetCacheRowRtl;
            } else if (layout === 'row' && !isRtl) {
              this.styleCache = flexOffsetCacheRowLtr;
            } else if (layout === 'column' && isRtl) {
              this.styleCache = flexOffsetCacheColumnRtl;
            } else if (layout === 'column' && !isRtl) {
              this.styleCache = flexOffsetCacheColumnLtr;
            }

            this.addStyles(value + '', {
              layout: layout,
              isRtl: isRtl
            });
          }
        }]);

        return FlexOffsetDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      FlexOffsetDirective.ɵfac = function FlexOffsetDirective_Factory(t) {
        return new (t || FlexOffsetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexOffsetStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
      };

      FlexOffsetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlexOffsetDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      FlexOffsetDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
        }, {
          type: FlexOffsetStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOffsetDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
          }, {
            type: FlexOffsetStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }];
        }, null);
      })();

      var DefaultFlexOffsetDirective = /*#__PURE__*/function (_FlexOffsetDirective) {
        _inherits(DefaultFlexOffsetDirective, _FlexOffsetDirective);

        var _super15 = _createSuper(DefaultFlexOffsetDirective);

        function DefaultFlexOffsetDirective() {
          var _this15;

          _classCallCheck(this, DefaultFlexOffsetDirective);

          _this15 = _super15.apply(this, arguments);
          _this15.inputs = inputs$4;
          return _this15;
        }

        return _createClass(DefaultFlexOffsetDirective);
      }(FlexOffsetDirective);

      DefaultFlexOffsetDirective.ɵfac = function DefaultFlexOffsetDirective_Factory(t) {
        return ɵDefaultFlexOffsetDirective_BaseFactory(t || DefaultFlexOffsetDirective);
      };

      DefaultFlexOffsetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultFlexOffsetDirective,
        selectors: [["", "fxFlexOffset", ""], ["", "fxFlexOffset.xs", ""], ["", "fxFlexOffset.sm", ""], ["", "fxFlexOffset.md", ""], ["", "fxFlexOffset.lg", ""], ["", "fxFlexOffset.xl", ""], ["", "fxFlexOffset.lt-sm", ""], ["", "fxFlexOffset.lt-md", ""], ["", "fxFlexOffset.lt-lg", ""], ["", "fxFlexOffset.lt-xl", ""], ["", "fxFlexOffset.gt-xs", ""], ["", "fxFlexOffset.gt-sm", ""], ["", "fxFlexOffset.gt-md", ""], ["", "fxFlexOffset.gt-lg", ""]],
        inputs: {
          fxFlexOffset: "fxFlexOffset",
          "fxFlexOffset.xs": "fxFlexOffset.xs",
          "fxFlexOffset.sm": "fxFlexOffset.sm",
          "fxFlexOffset.md": "fxFlexOffset.md",
          "fxFlexOffset.lg": "fxFlexOffset.lg",
          "fxFlexOffset.xl": "fxFlexOffset.xl",
          "fxFlexOffset.lt-sm": "fxFlexOffset.lt-sm",
          "fxFlexOffset.lt-md": "fxFlexOffset.lt-md",
          "fxFlexOffset.lt-lg": "fxFlexOffset.lt-lg",
          "fxFlexOffset.lt-xl": "fxFlexOffset.lt-xl",
          "fxFlexOffset.gt-xs": "fxFlexOffset.gt-xs",
          "fxFlexOffset.gt-sm": "fxFlexOffset.gt-sm",
          "fxFlexOffset.gt-md": "fxFlexOffset.gt-md",
          "fxFlexOffset.gt-lg": "fxFlexOffset.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultFlexOffsetDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexOffsetDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexOffsetDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$4,
            inputs: inputs$4
          }]
        }], null, null);
      })();
      /** @type {?} */


      var flexOffsetCacheRowRtl = new Map();
      /** @type {?} */

      var flexOffsetCacheColumnRtl = new Map();
      /** @type {?} */

      var flexOffsetCacheRowLtr = new Map();
      /** @type {?} */

      var flexOffsetCacheColumnLtr = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-align/flex-align.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var FlexAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_11) {
        _inherits(FlexAlignStyleBuilder, _angular_flex_layout_11);

        var _super16 = _createSuper(FlexAlignStyleBuilder);

        function FlexAlignStyleBuilder() {
          _classCallCheck(this, FlexAlignStyleBuilder);

          return _super16.apply(this, arguments);
        }

        _createClass(FlexAlignStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @return {?}
           */
          function buildStyles(input) {
            input = input || 'stretch';
            /** @type {?} */

            var styles = {}; // Cross-axis

            switch (input) {
              case 'start':
                styles['align-self'] = 'flex-start';
                break;

              case 'end':
                styles['align-self'] = 'flex-end';
                break;

              default:
                styles['align-self'] = input;
                break;
            }

            return styles;
          }
        }]);

        return FlexAlignStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      FlexAlignStyleBuilder.ɵfac = function FlexAlignStyleBuilder_Factory(t) {
        return ɵFlexAlignStyleBuilder_BaseFactory(t || FlexAlignStyleBuilder);
      };
      /** @nocollapse */


      FlexAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FlexAlignStyleBuilder_Factory() {
          return new FlexAlignStyleBuilder();
        },
        token: FlexAlignStyleBuilder,
        providedIn: "root"
      });

      var ɵFlexAlignStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexAlignStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexAlignStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** @type {?} */


      var inputs$5 = ['fxFlexAlign', 'fxFlexAlign.xs', 'fxFlexAlign.sm', 'fxFlexAlign.md', 'fxFlexAlign.lg', 'fxFlexAlign.xl', 'fxFlexAlign.lt-sm', 'fxFlexAlign.lt-md', 'fxFlexAlign.lt-lg', 'fxFlexAlign.lt-xl', 'fxFlexAlign.gt-xs', 'fxFlexAlign.gt-sm', 'fxFlexAlign.gt-md', 'fxFlexAlign.gt-lg'];
      /** @type {?} */

      var selector$5 = "\n  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],\n  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],\n  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],\n  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n";
      /**
       * 'flex-align' flexbox styling directive
       * Allows element-specific overrides for cross-axis alignments in a layout container
       * @see https://css-tricks.com/almanac/properties/a/align-self/
       */

      var FlexAlignDirective = /*#__PURE__*/function (_angular_flex_layout_12) {
        _inherits(FlexAlignDirective, _angular_flex_layout_12);

        var _super17 = _createSuper(FlexAlignDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function FlexAlignDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this16;

          _classCallCheck(this, FlexAlignDirective);

          _this16 = _super17.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this16.DIRECTIVE_KEY = 'flex-align';
          _this16.styleCache = flexAlignCache;

          _this16.init();

          return _this16;
        }

        return _createClass(FlexAlignDirective);
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      FlexAlignDirective.ɵfac = function FlexAlignDirective_Factory(t) {
        return new (t || FlexAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      FlexAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlexAlignDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      FlexAlignDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: FlexAlignStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: FlexAlignStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var flexAlignCache = new Map();

      var DefaultFlexAlignDirective = /*#__PURE__*/function (_FlexAlignDirective) {
        _inherits(DefaultFlexAlignDirective, _FlexAlignDirective);

        var _super18 = _createSuper(DefaultFlexAlignDirective);

        function DefaultFlexAlignDirective() {
          var _this17;

          _classCallCheck(this, DefaultFlexAlignDirective);

          _this17 = _super18.apply(this, arguments);
          _this17.inputs = inputs$5;
          return _this17;
        }

        return _createClass(DefaultFlexAlignDirective);
      }(FlexAlignDirective);

      DefaultFlexAlignDirective.ɵfac = function DefaultFlexAlignDirective_Factory(t) {
        return ɵDefaultFlexAlignDirective_BaseFactory(t || DefaultFlexAlignDirective);
      };

      DefaultFlexAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultFlexAlignDirective,
        selectors: [["", "fxFlexAlign", ""], ["", "fxFlexAlign.xs", ""], ["", "fxFlexAlign.sm", ""], ["", "fxFlexAlign.md", ""], ["", "fxFlexAlign.lg", ""], ["", "fxFlexAlign.xl", ""], ["", "fxFlexAlign.lt-sm", ""], ["", "fxFlexAlign.lt-md", ""], ["", "fxFlexAlign.lt-lg", ""], ["", "fxFlexAlign.lt-xl", ""], ["", "fxFlexAlign.gt-xs", ""], ["", "fxFlexAlign.gt-sm", ""], ["", "fxFlexAlign.gt-md", ""], ["", "fxFlexAlign.gt-lg", ""]],
        inputs: {
          fxFlexAlign: "fxFlexAlign",
          "fxFlexAlign.xs": "fxFlexAlign.xs",
          "fxFlexAlign.sm": "fxFlexAlign.sm",
          "fxFlexAlign.md": "fxFlexAlign.md",
          "fxFlexAlign.lg": "fxFlexAlign.lg",
          "fxFlexAlign.xl": "fxFlexAlign.xl",
          "fxFlexAlign.lt-sm": "fxFlexAlign.lt-sm",
          "fxFlexAlign.lt-md": "fxFlexAlign.lt-md",
          "fxFlexAlign.lt-lg": "fxFlexAlign.lt-lg",
          "fxFlexAlign.lt-xl": "fxFlexAlign.lt-xl",
          "fxFlexAlign.gt-xs": "fxFlexAlign.gt-xs",
          "fxFlexAlign.gt-sm": "fxFlexAlign.gt-sm",
          "fxFlexAlign.gt-md": "fxFlexAlign.gt-md",
          "fxFlexAlign.gt-lg": "fxFlexAlign.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultFlexAlignDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexAlignDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$5,
            inputs: inputs$5
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-fill/flex-fill.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var FLEX_FILL_CSS = {
        'margin': 0,
        'width': '100%',
        'height': '100%',
        'min-width': '100%',
        'min-height': '100%'
      };

      var FlexFillStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_13) {
        _inherits(FlexFillStyleBuilder, _angular_flex_layout_13);

        var _super19 = _createSuper(FlexFillStyleBuilder);

        function FlexFillStyleBuilder() {
          _classCallCheck(this, FlexFillStyleBuilder);

          return _super19.apply(this, arguments);
        }

        _createClass(FlexFillStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} _input
           * @return {?}
           */
          function buildStyles(_input) {
            return FLEX_FILL_CSS;
          }
        }]);

        return FlexFillStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      FlexFillStyleBuilder.ɵfac = function FlexFillStyleBuilder_Factory(t) {
        return ɵFlexFillStyleBuilder_BaseFactory(t || FlexFillStyleBuilder);
      };
      /** @nocollapse */


      FlexFillStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FlexFillStyleBuilder_Factory() {
          return new FlexFillStyleBuilder();
        },
        token: FlexFillStyleBuilder,
        providedIn: "root"
      });

      var ɵFlexFillStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexFillStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexFillStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * 'fxFill' flexbox styling directive
       *  Maximizes width and height of element in a layout container
       *
       *  NOTE: fxFill is NOT responsive API!!
       */


      var FlexFillDirective = /*#__PURE__*/function (_angular_flex_layout_14) {
        _inherits(FlexFillDirective, _angular_flex_layout_14);

        var _super20 = _createSuper(FlexFillDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function FlexFillDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this18;

          _classCallCheck(this, FlexFillDirective);

          _this18 = _super20.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this18.styleCache = flexFillCache;

          _this18.addStyles('');

          return _this18;
        }

        return _createClass(FlexFillDirective);
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      FlexFillDirective.ɵfac = function FlexFillDirective_Factory(t) {
        return new (t || FlexFillDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexFillStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      FlexFillDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlexFillDirective,
        selectors: [["", "fxFill", ""], ["", "fxFlexFill", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      FlexFillDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: FlexFillStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexFillDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[fxFill], [fxFlexFill]"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: FlexFillStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var flexFillCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/layout-align/layout-align.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var LayoutAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_15) {
        _inherits(LayoutAlignStyleBuilder, _angular_flex_layout_15);

        var _super21 = _createSuper(LayoutAlignStyleBuilder);

        function LayoutAlignStyleBuilder() {
          _classCallCheck(this, LayoutAlignStyleBuilder);

          return _super21.apply(this, arguments);
        }

        _createClass(LayoutAlignStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} align
           * @param {?} parent
           * @return {?}
           */
          function buildStyles(align, parent) {
            /** @type {?} */
            var css = {};

            var _align$split = align.split(' '),
                _align$split2 = _slicedToArray(_align$split, 2),
                mainAxis = _align$split2[0],
                crossAxis = _align$split2[1]; // Main axis


            switch (mainAxis) {
              case 'center':
                css['justify-content'] = 'center';
                break;

              case 'space-around':
                css['justify-content'] = 'space-around';
                break;

              case 'space-between':
                css['justify-content'] = 'space-between';
                break;

              case 'space-evenly':
                css['justify-content'] = 'space-evenly';
                break;

              case 'end':
              case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;

              case 'start':
              case 'flex-start':
              default:
                css['justify-content'] = 'flex-start'; // default main axis

                break;
            } // Cross-axis


            switch (crossAxis) {
              case 'start':
              case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;

              case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;

              case 'end':
              case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;

              case 'space-between':
                css['align-content'] = 'space-between';
                css['align-items'] = 'stretch';
                break;

              case 'space-around':
                css['align-content'] = 'space-around';
                css['align-items'] = 'stretch';
                break;

              case 'baseline':
                css['align-content'] = 'stretch';
                css['align-items'] = 'baseline';
                break;

              case 'stretch':
              default:
                // 'stretch'
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis

                break;
            }

            return (
              /** @type {?} */
              extendObject(css, {
                'display': parent.inline ? 'inline-flex' : 'flex',
                'flex-direction': parent.layout,
                'box-sizing': 'border-box',
                'max-width': crossAxis === 'stretch' ? !isFlowHorizontal(parent.layout) ? '100%' : null : null,
                'max-height': crossAxis === 'stretch' ? isFlowHorizontal(parent.layout) ? '100%' : null : null
              })
            );
          }
        }]);

        return LayoutAlignStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      LayoutAlignStyleBuilder.ɵfac = function LayoutAlignStyleBuilder_Factory(t) {
        return ɵLayoutAlignStyleBuilder_BaseFactory(t || LayoutAlignStyleBuilder);
      };
      /** @nocollapse */


      LayoutAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function LayoutAlignStyleBuilder_Factory() {
          return new LayoutAlignStyleBuilder();
        },
        token: LayoutAlignStyleBuilder,
        providedIn: "root"
      });

      var ɵLayoutAlignStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LayoutAlignStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutAlignStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** @type {?} */


      var inputs$6 = ['fxLayoutAlign', 'fxLayoutAlign.xs', 'fxLayoutAlign.sm', 'fxLayoutAlign.md', 'fxLayoutAlign.lg', 'fxLayoutAlign.xl', 'fxLayoutAlign.lt-sm', 'fxLayoutAlign.lt-md', 'fxLayoutAlign.lt-lg', 'fxLayoutAlign.lt-xl', 'fxLayoutAlign.gt-xs', 'fxLayoutAlign.gt-sm', 'fxLayoutAlign.gt-md', 'fxLayoutAlign.gt-lg'];
      /** @type {?} */

      var selector$6 = "\n  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],\n  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],\n  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],\n  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n";
      /**
       * 'layout-align' flexbox styling directive
       *  Defines positioning of child elements along main and cross axis in a layout container
       *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
       *
       * @see https://css-tricks.com/almanac/properties/j/justify-content/
       * @see https://css-tricks.com/almanac/properties/a/align-items/
       * @see https://css-tricks.com/almanac/properties/a/align-content/
       */

      var LayoutAlignDirective = /*#__PURE__*/function (_angular_flex_layout_16) {
        _inherits(LayoutAlignDirective, _angular_flex_layout_16);

        var _super22 = _createSuper(LayoutAlignDirective);

        // default inline value

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function LayoutAlignDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this19;

          _classCallCheck(this, LayoutAlignDirective);

          _this19 = _super22.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this19.DIRECTIVE_KEY = 'layout-align';
          _this19.layout = 'row'; // default flex-direction
          // default flex-direction

          _this19.inline = false; // default inline value

          _this19.init();

          _this19.marshal.trackValue(_this19.nativeElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this19.destroySubject)).subscribe(_this19.onLayoutChange.bind(_assertThisInitialized(_this19)));

          return _this19;
        } // *********************************************
        // Protected methods
        // *********************************************

        /**
         *
         * @protected
         * @param {?} value
         * @return {?}
         */


        _createClass(LayoutAlignDirective, [{
          key: "updateWithValue",
          value: function updateWithValue(value) {
            /** @type {?} */
            var layout = this.layout || 'row';
            /** @type {?} */

            var inline = this.inline;

            if (layout === 'row' && inline) {
              this.styleCache = layoutAlignHorizontalInlineCache;
            } else if (layout === 'row' && !inline) {
              this.styleCache = layoutAlignHorizontalCache;
            } else if (layout === 'row-reverse' && inline) {
              this.styleCache = layoutAlignHorizontalRevInlineCache;
            } else if (layout === 'row-reverse' && !inline) {
              this.styleCache = layoutAlignHorizontalRevCache;
            } else if (layout === 'column' && inline) {
              this.styleCache = layoutAlignVerticalInlineCache;
            } else if (layout === 'column' && !inline) {
              this.styleCache = layoutAlignVerticalCache;
            } else if (layout === 'column-reverse' && inline) {
              this.styleCache = layoutAlignVerticalRevInlineCache;
            } else if (layout === 'column-reverse' && !inline) {
              this.styleCache = layoutAlignVerticalRevCache;
            }

            this.addStyles(value, {
              layout: layout,
              inline: inline
            });
          }
          /**
           * Cache the parent container 'flex-direction' and update the 'flex' styles
           * @protected
           * @param {?} matcher
           * @return {?}
           */

        }, {
          key: "onLayoutChange",
          value: function onLayoutChange(matcher) {
            var _this20 = this;

            /** @type {?} */
            var layoutKeys = matcher.value.split(' ');
            this.layout = layoutKeys[0];
            this.inline = matcher.value.includes('inline');

            if (!LAYOUT_VALUES.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x === _this20.layout;
            })) {
              this.layout = 'row';
            }

            this.triggerUpdate();
          }
        }]);

        return LayoutAlignDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      LayoutAlignDirective.ɵfac = function LayoutAlignDirective_Factory(t) {
        return new (t || LayoutAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      LayoutAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: LayoutAlignDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      LayoutAlignDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: LayoutAlignStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: LayoutAlignStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();

      var DefaultLayoutAlignDirective = /*#__PURE__*/function (_LayoutAlignDirective) {
        _inherits(DefaultLayoutAlignDirective, _LayoutAlignDirective);

        var _super23 = _createSuper(DefaultLayoutAlignDirective);

        function DefaultLayoutAlignDirective() {
          var _this21;

          _classCallCheck(this, DefaultLayoutAlignDirective);

          _this21 = _super23.apply(this, arguments);
          _this21.inputs = inputs$6;
          return _this21;
        }

        return _createClass(DefaultLayoutAlignDirective);
      }(LayoutAlignDirective);

      DefaultLayoutAlignDirective.ɵfac = function DefaultLayoutAlignDirective_Factory(t) {
        return ɵDefaultLayoutAlignDirective_BaseFactory(t || DefaultLayoutAlignDirective);
      };

      DefaultLayoutAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultLayoutAlignDirective,
        selectors: [["", "fxLayoutAlign", ""], ["", "fxLayoutAlign.xs", ""], ["", "fxLayoutAlign.sm", ""], ["", "fxLayoutAlign.md", ""], ["", "fxLayoutAlign.lg", ""], ["", "fxLayoutAlign.xl", ""], ["", "fxLayoutAlign.lt-sm", ""], ["", "fxLayoutAlign.lt-md", ""], ["", "fxLayoutAlign.lt-lg", ""], ["", "fxLayoutAlign.lt-xl", ""], ["", "fxLayoutAlign.gt-xs", ""], ["", "fxLayoutAlign.gt-sm", ""], ["", "fxLayoutAlign.gt-md", ""], ["", "fxLayoutAlign.gt-lg", ""]],
        inputs: {
          fxLayoutAlign: "fxLayoutAlign",
          "fxLayoutAlign.xs": "fxLayoutAlign.xs",
          "fxLayoutAlign.sm": "fxLayoutAlign.sm",
          "fxLayoutAlign.md": "fxLayoutAlign.md",
          "fxLayoutAlign.lg": "fxLayoutAlign.lg",
          "fxLayoutAlign.xl": "fxLayoutAlign.xl",
          "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm",
          "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md",
          "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg",
          "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl",
          "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs",
          "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm",
          "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md",
          "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultLayoutAlignDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutAlignDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$6,
            inputs: inputs$6
          }]
        }], null, null);
      })();
      /** @type {?} */


      var layoutAlignHorizontalCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalCache = new Map();
      /** @type {?} */

      var layoutAlignHorizontalRevCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalRevCache = new Map();
      /** @type {?} */

      var layoutAlignHorizontalInlineCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalInlineCache = new Map();
      /** @type {?} */

      var layoutAlignHorizontalRevInlineCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalRevInlineCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var ALL_DIRECTIVES = [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
      /**
       * *****************************************************************
       * Define module for the Flex API
       * *****************************************************************
       */

      var FlexModule = /*#__PURE__*/_createClass(function FlexModule() {
        _classCallCheck(this, FlexModule);
      });

      FlexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FlexModule
      });
      FlexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FlexModule_Factory(t) {
          return new (t || FlexModule)();
        },
        imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexModule, {
          declarations: function declarations() {
            return [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
          },
          imports: function imports() {
            return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          },
          exports: function exports() {
            return [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
            declarations: [].concat(ALL_DIRECTIVES),
            exports: [].concat(ALL_DIRECTIVES)
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: flex/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=flex.js.map

      /***/

    },

    /***/
    "YUcS":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js ***!
      \*******************************************************************************/

    /*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook, ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective, FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective, ɵgrid_privatef, ɵgrid_privatee, ɵgrid_privated, ɵgrid_privatei, ɵgrid_privateh, ɵgrid_privateg, ɵgrid_privatel, ɵgrid_privatek, ɵgrid_privatej, ɵgrid_privateo, ɵgrid_privaten, ɵgrid_privatem, ɵgrid_privater, ɵgrid_privateq, ɵgrid_privatep, ɵgrid_privateu, ɵgrid_privatet, ɵgrid_privates, ɵgrid_privatex, ɵgrid_privatew, ɵgrid_privatev, ɵgrid_privateba, ɵgrid_privatez, ɵgrid_privatey, ɵgrid_privatec, ɵgrid_privateb, ɵgrid_privatea, ɵgrid_privatebd, ɵgrid_privatebc, ɵgrid_privatebb, ɵgrid_privatebg, ɵgrid_privatebf, ɵgrid_privatebe, GridModule, VERSION, FlexLayoutModule */

    /***/
    function YUcS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function () {
        return FlexLayoutModule;
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


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMatchMedia"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMockMatchMedia"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMockMatchMediaProvider"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["removeStyles"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BROWSER_PROVIDER"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CLASS_NAME"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaChange", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaChange"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StylesheetMap", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StylesheetMap"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mergeAlias", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["mergeAlias"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseDirective2", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BREAKPOINTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ScreenTypes", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ScreenTypes"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ORIENTATION_BREAKPOINTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BreakPointRegistry"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaObserver", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaTrigger", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaTrigger"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["sortDescendingPriority"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["sortAscendingPriority"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["coerceArray"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StyleUtils", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StyleBuilder", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "validateBasis", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT_PRINT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PrintHook", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["PrintHook"];
      });
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExtendedModule", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClassDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ClassDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultImgSrcDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StyleDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultStyleDirective"];
      });
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexModule", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexOffsetDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexOrderDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"];
      });
      /* harmony import */


      var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/grid */
      "zpSk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatef", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatef"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatee", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatee"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privated", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privated"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatei", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatei"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateh", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateh"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateg", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateg"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatel", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatel"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatek", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatek"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatej", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatej"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateo", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateo"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privaten", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privaten"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatem", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatem"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privater", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privater"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateq", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateq"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatep", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatep"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateu", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateu"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatet", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatet"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privates", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privates"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatex", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatex"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatew", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatew"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatev", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatev"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateba", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateba"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatez", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatez"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatey", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatey"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatec", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatec"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateb", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatea", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatea"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebd", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebd"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebc", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebc"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebb", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebg", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebg"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebf", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebf"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebe", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebe"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GridModule", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"];
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: version.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Current version of Angular Flex-Layout.
       * @type {?}
       */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.0.0-beta.33');
      /**
       * @fileoverview added by tsickle
       * Generated from: module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
       * * Will automatically provide Flex, Grid, and Extended modules for use in the application
       * * Can be configured using the static withConfig method, options viewable on the Wiki's
       *   Configuration page
       */

      var FlexLayoutModule = /*#__PURE__*/function () {
        /**
         * @param {?} serverModuleLoaded
         * @param {?} platformId
         */
        function FlexLayoutModule(serverModuleLoaded, platformId) {
          _classCallCheck(this, FlexLayoutModule);

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
          }
        }
        /**
         * Initialize the FlexLayoutModule with a set of config options,
         * which sets the corresponding tokens accordingly
         * @param {?} configOptions
         * @param {?=} breakpoints
         * @return {?}
         */


        _createClass(FlexLayoutModule, null, [{
          key: "withConfig",
          value: function withConfig(configOptions) {
            var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            return {
              ngModule: FlexLayoutModule,
              providers: configOptions.serverLoaded ? [{
                provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],
                useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]), configOptions)
              }, {
                provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"],
                useValue: breakpoints,
                multi: true
              }, {
                provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],
                useValue: true
              }] : [{
                provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],
                useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]), configOptions)
              }, {
                provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"],
                useValue: breakpoints,
                multi: true
              }]
            };
          }
        }]);

        return FlexLayoutModule;
      }();

      FlexLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FlexLayoutModule
      });
      FlexLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FlexLayoutModule_Factory(t) {
          return new (t || FlexLayoutModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
        },
        imports: [[_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
      });
      /** @nocollapse */

      FlexLayoutModule.ctorParameters = function () {
        return [{
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexLayoutModule, {
          imports: function imports() {
            return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]];
          },
          exports: function exports() {
            return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexLayoutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]],
            exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
          }]
        }], function () {
          return [{
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=flex-layout.js.map

      /***/

    },

    /***/
    "pD6V":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/core.js ***!
      \************************************************************************/

    /*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook */

    /***/
    function pD6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function () {
        return MatchMedia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function () {
        return MockMatchMedia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function () {
        return MockMatchMediaProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
        return removeStyles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function () {
        return BROWSER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function () {
        return CLASS_NAME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaChange", function () {
        return MediaChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StylesheetMap", function () {
        return StylesheetMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
        return DEFAULT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function () {
        return LAYOUT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function () {
        return SERVER_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function () {
        return BREAKPOINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeAlias", function () {
        return mergeAlias;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseDirective2", function () {
        return BaseDirective2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function () {
        return DEFAULT_BREAKPOINTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenTypes", function () {
        return ScreenTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function () {
        return ORIENTATION_BREAKPOINTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function () {
        return BreakPointRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function () {
        return BREAKPOINTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaObserver", function () {
        return MediaObserver;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaTrigger", function () {
        return MediaTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function () {
        return sortDescendingPriority;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function () {
        return sortAscendingPriority;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return coerceArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleUtils", function () {
        return StyleUtils;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleBuilder", function () {
        return StyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateBasis", function () {
        return validateBasis;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function () {
        return MediaMarshaller;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function () {
        return BREAKPOINT_PRINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrintHook", function () {
        return PrintHook;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/browser-provider.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Find all of the server-generated stylings, if any, and remove them
       * This will be in the form of inline classes and the style block in the
       * head of the DOM
       * @param {?} _document
       * @param {?} platformId
       * @return {?}
       */


      function removeStyles(_document, platformId) {
        return (
          /**
          * @return {?}
          */
          function () {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
              /** @type {?} */
              var elements = Array.from(_document.querySelectorAll("[class*=".concat(CLASS_NAME, "]"))); // RegExp constructor should only be used if passing a variable to the constructor.
              // When using static regular expression it is more performant to use reg exp literal.
              // This is also needed to provide Safari 9 compatibility, please see
              // https://stackoverflow.com/questions/37919802 for more discussion.

              /** @type {?} */

              var classRegex = /\bflex-layout-.+?\b/g;
              elements.forEach(
              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                el.classList.contains("".concat(CLASS_NAME, "ssr")) && el.parentNode ? el.parentNode.removeChild(el) : el.className.replace(classRegex, '');
              });
            }
          }
        );
      }
      /**
       *  Provider to remove SSR styles on the browser
       * @type {?}
       */


      var BROWSER_PROVIDER = {
        provide:
        /** @type {?} */
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"],
        useFactory: removeStyles,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
        multi: true
      };
      /** @type {?} */

      var CLASS_NAME = 'flex-layout-';
      /**
       * @fileoverview added by tsickle
       * Generated from: core/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * *****************************************************************
       * Define module for common Angular Layout utilities
       * *****************************************************************
       */

      var CoreModule = /*#__PURE__*/_createClass(function CoreModule() {
        _classCallCheck(this, CoreModule);
      });

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        providers: [BROWSER_PROVIDER]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [BROWSER_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-change.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Class instances emitted [to observers] for each mql notification
       */


      var MediaChange = /*#__PURE__*/function () {
        /**
         * @param {?=} matches whether the mediaQuery is currently activated
         * @param {?=} mediaQuery e.g. (min-width: 600px) and (max-width: 959px)
         * @param {?=} mqAlias e.g. gt-sm, md, gt-lg
         * @param {?=} suffix e.g. GtSM, Md, GtLg
         * @param {?=} priority the priority of activation for the given breakpoint
         */
        function MediaChange() {
          var matches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var mediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
          var mqAlias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

          _classCallCheck(this, MediaChange);

          this.matches = matches;
          this.mediaQuery = mediaQuery;
          this.mqAlias = mqAlias;
          this.suffix = suffix;
          this.priority = priority;
          this.property = '';
        }
        /**
         * Create an exact copy of the MediaChange
         * @return {?}
         */


        _createClass(MediaChange, [{
          key: "clone",
          value: function clone() {
            return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
          }
        }]);

        return MediaChange;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/stylesheet-map/stylesheet-map.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Utility to emulate a CSS stylesheet
       *
       * This utility class stores all of the styles for a given HTML element
       * as a readonly `stylesheet` map.
       */


      var StylesheetMap = /*#__PURE__*/function () {
        function StylesheetMap() {
          _classCallCheck(this, StylesheetMap);

          this.stylesheet = new Map();
        }
        /**
         * Add an individual style to an HTML element
         * @param {?} element
         * @param {?} style
         * @param {?} value
         * @return {?}
         */


        _createClass(StylesheetMap, [{
          key: "addStyleToElement",
          value: function addStyleToElement(element, style, value) {
            /** @type {?} */
            var stylesheet = this.stylesheet.get(element);

            if (stylesheet) {
              stylesheet.set(style, value);
            } else {
              this.stylesheet.set(element, new Map([[style, value]]));
            }
          }
          /**
           * Clear the virtual stylesheet
           * @return {?}
           */

        }, {
          key: "clearStyles",
          value: function clearStyles() {
            this.stylesheet.clear();
          }
          /**
           * Retrieve a given style for an HTML element
           * @param {?} el
           * @param {?} styleName
           * @return {?}
           */

        }, {
          key: "getStyleForElement",
          value: function getStyleForElement(el, styleName) {
            /** @type {?} */
            var styles = this.stylesheet.get(el);
            /** @type {?} */

            var value = '';

            if (styles) {
              /** @type {?} */
              var style = styles.get(styleName);

              if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
              }
            }

            return value;
          }
        }]);

        return StylesheetMap;
      }();

      StylesheetMap.ɵfac = function StylesheetMap_Factory(t) {
        return new (t || StylesheetMap)();
      };
      /** @nocollapse */


      StylesheetMap.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function StylesheetMap_Factory() {
          return new StylesheetMap();
        },
        token: StylesheetMap,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StylesheetMap, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/stylesheet-map/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/library-config.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_CONFIG = {
        addFlexToParent: true,
        addOrientationBps: false,
        disableDefaultBps: false,
        disableVendorPrefixes: false,
        serverLoaded: false,
        useColumnBasisZero: true,
        printWithBreakpoints: [],
        mediaTriggerAutoRestore: true,
        ssrObserveBreakpoints: []
      };
      /** @type {?} */

      var LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, config options for the library', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return DEFAULT_CONFIG;
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/server-token.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Token that is provided to tell whether the FlexLayoutServerModule
       * has been included in the bundle
       *
       * NOTE: This can be manually provided to disable styles when using SSR
       * @type {?}
       */

      var SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FlexLayoutServerLoaded', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return false;
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/breakpoint-token.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, collect all breakpoints into one provider', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return null;
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/add-alias.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * For the specified MediaChange, make sure it contains the breakpoint alias
       * and suffix (if available).
       * @param {?} dest
       * @param {?} source
       * @return {?}
       */

      function mergeAlias(dest, source) {
        dest = dest ? dest.clone() : new MediaChange();

        if (source) {
          dest.mqAlias = source.alias;
          dest.mediaQuery = source.mediaQuery;
          dest.suffix =
          /** @type {?} */
          source.suffix;
          dest.priority =
          /** @type {?} */
          source.priority;
        }

        return dest;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: utils/layout-validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       * @type {?}
       */


      var INLINE = 'inline';
      /** @type {?} */

      var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
      /**
       * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
       * @param {?} value
       * @return {?}
       */

      function buildLayoutCSS(value) {
        var _validateValue5 = validateValue(value),
            _validateValue6 = _slicedToArray(_validateValue5, 3),
            direction = _validateValue6[0],
            wrap = _validateValue6[1],
            isInline = _validateValue6[2];

        return buildCSS(direction, wrap, isInline);
      }
      /**
       * Validate the value to be one of the acceptable value options
       * Use default fallback of 'row'
       * @param {?} value
       * @return {?}
       */


      function validateValue(value) {
        value = value ? value.toLowerCase() : '';

        var _value$split7 = value.split(' '),
            _value$split8 = _slicedToArray(_value$split7, 3),
            direction = _value$split8[0],
            wrap = _value$split8[1],
            inline = _value$split8[2]; // First value must be the `flex-direction`


        if (!LAYOUT_VALUES.find(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x === direction;
        })) {
          direction = LAYOUT_VALUES[0];
        }

        if (wrap === INLINE) {
          wrap = inline !== INLINE ? inline : '';
          inline = INLINE;
        }

        return [direction, validateWrapValue(wrap), !!inline];
      }
      /**
       * Convert layout-wrap='<value>' to expected flex-wrap style
       * @param {?} value
       * @return {?}
       */


      function validateWrapValue(value) {
        if (!!value) {
          switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
              value = 'wrap-reverse';
              break;

            case 'no':
            case 'none':
            case 'nowrap':
              value = 'nowrap';
              break;
            // All other values fallback to 'wrap'

            default:
              value = 'wrap';
              break;
          }
        }

        return value;
      }
      /**
       * Build the CSS that should be assigned to the element instance
       * BUG:
       *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
       *      Use height instead if possible; height : <xxx>vh;
       *
       *  This way any padding or border specified on the child elements are
       *  laid out and drawn inside that element's specified width and height.
       * @param {?} direction
       * @param {?=} wrap
       * @param {?=} inline
       * @return {?}
       */


      function buildCSS(direction) {
        var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return {
          'display': inline ? 'inline-flex' : 'flex',
          'box-sizing': 'border-box',
          'flex-direction': direction,
          'flex-wrap': !!wrap ? wrap : null
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/base/base2.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @abstract
       */


      var BaseDirective2 = /*#__PURE__*/function () {
        /**
         * @protected
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function BaseDirective2(elementRef, styleBuilder, styler, marshal) {
          _classCallCheck(this, BaseDirective2);

          this.elementRef = elementRef;
          this.styleBuilder = styleBuilder;
          this.styler = styler;
          this.marshal = marshal;
          this.DIRECTIVE_KEY = '';
          this.inputs = [];
          /**
           * The most recently used styles for the builder
           */

          this.mru = {};
          this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * Cache map for style computation
           */

          this.styleCache = new Map();
        }
        /**
         * Access to host element's parent DOM node
         * @protected
         * @return {?}
         */


        _createClass(BaseDirective2, [{
          key: "parentElement",
          get: function get() {
            return this.elementRef.nativeElement.parentElement;
          }
          /**
           * Access to the HTMLElement for the directive
           * @protected
           * @return {?}
           */

        }, {
          key: "nativeElement",
          get: function get() {
            return this.elementRef.nativeElement;
          }
          /**
           * Access to the activated value for the directive
           * @return {?}
           */

        }, {
          key: "activatedValue",
          get: function get() {
            return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY);
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, value, this.marshal.activatedAlias);
          }
          /**
           * For \@Input changes
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this22 = this;

            Object.keys(changes).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              if (_this22.inputs.indexOf(key) !== -1) {
                /** @type {?} */
                var bp = key.split('.').slice(1).join('.');
                /** @type {?} */

                var val = changes[key].currentValue;

                _this22.setValue(val, bp);
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubject.next();
            this.destroySubject.complete();
            this.marshal.releaseElement(this.nativeElement);
          }
          /**
           * Register with central marshaller service
           * @protected
           * @param {?=} extraTriggers
           * @return {?}
           */

        }, {
          key: "init",
          value: function init() {
            var extraTriggers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), extraTriggers);
          }
          /**
           * Add styles to the element using predefined style builder
           * @protected
           * @param {?} input
           * @param {?=} parent
           * @return {?}
           */

        }, {
          key: "addStyles",
          value: function addStyles(input, parent) {
            /** @type {?} */
            var builder = this.styleBuilder;
            /** @type {?} */

            var useCache = builder.shouldCache;
            /** @type {?} */

            var genStyles = this.styleCache.get(input);

            if (!genStyles || !useCache) {
              genStyles = builder.buildStyles(input, parent);

              if (useCache) {
                this.styleCache.set(input, genStyles);
              }
            }

            this.mru = Object.assign({}, genStyles);
            this.applyStyleToElement(genStyles);
            builder.sideEffect(input, genStyles, parent);
          }
          /**
           * Remove generated styles from an element using predefined style builder
           * @protected
           * @return {?}
           */

        }, {
          key: "clearStyles",
          value: function clearStyles() {
            var _this23 = this;

            Object.keys(this.mru).forEach(
            /**
            * @param {?} k
            * @return {?}
            */
            function (k) {
              _this23.mru[k] = '';
            });
            this.applyStyleToElement(this.mru);
            this.mru = {};
          }
          /**
           * Force trigger style updates on DOM element
           * @protected
           * @return {?}
           */

        }, {
          key: "triggerUpdate",
          value: function triggerUpdate() {
            this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
          }
          /**
           * Determine the DOM element's Flexbox flow (flex-direction).
           *
           * Check inline style first then check computed (stylesheet) style.
           * And optionally add the flow value to element's inline style.
           * @protected
           * @param {?} target
           * @param {?=} addIfMissing
           * @return {?}
           */

        }, {
          key: "getFlexFlowDirection",
          value: function getFlexFlowDirection(target) {
            var addIfMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (target) {
              var _this$styler$getFlowD = this.styler.getFlowDirection(target),
                  _this$styler$getFlowD2 = _slicedToArray(_this$styler$getFlowD, 2),
                  value = _this$styler$getFlowD2[0],
                  hasInlineValue = _this$styler$getFlowD2[1];

              if (!hasInlineValue && addIfMissing) {
                /** @type {?} */
                var style = buildLayoutCSS(value);
                /** @type {?} */

                var elements = [target];
                this.styler.applyStyleToElements(style, elements);
              }

              return value.trim();
            }

            return 'row';
          }
          /**
           * @protected
           * @param {?} target
           * @return {?}
           */

        }, {
          key: "hasWrap",
          value: function hasWrap(target) {
            return this.styler.hasWrap(target);
          }
          /**
           * Applies styles given via string pair or object map to the directive element
           * @protected
           * @param {?} style
           * @param {?=} value
           * @param {?=} element
           * @return {?}
           */

        }, {
          key: "applyStyleToElement",
          value: function applyStyleToElement(style, value) {
            var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.nativeElement;
            this.styler.applyStyleToElement(element, style, value);
          }
          /**
           * @protected
           * @param {?} val
           * @param {?} bp
           * @return {?}
           */

        }, {
          key: "setValue",
          value: function setValue(val, bp) {
            this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, val, bp);
          }
          /**
           * @protected
           * @param {?} input
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(input) {
            if (this.currentValue !== input) {
              this.addStyles(input);
              this.currentValue = input;
            }
          }
        }]);

        return BaseDirective2;
      }();

      BaseDirective2.ɵfac = function BaseDirective2_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
      };

      BaseDirective2.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BaseDirective2,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/base/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/data/break-points.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * NOTE: Smaller ranges have HIGHER priority since the match is more specific
       * @type {?}
       */

      var DEFAULT_BREAKPOINTS = [{
        alias: 'xs',
        mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.98px)',
        priority: 1000
      }, {
        alias: 'sm',
        mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.98px)',
        priority: 900
      }, {
        alias: 'md',
        mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279.98px)',
        priority: 800
      }, {
        alias: 'lg',
        mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919.98px)',
        priority: 700
      }, {
        alias: 'xl',
        mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.98px)',
        priority: 600
      }, {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 599.98px)',
        priority: 950
      }, {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 959.98px)',
        priority: 850
      }, {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 1279.98px)',
        priority: 750
      }, {
        alias: 'lt-xl',
        overlapping: true,
        priority: 650,
        mediaQuery: 'screen and (max-width: 1919.98px)'
      }, {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 600px)',
        priority: -950
      }, {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 960px)',
        priority: -850
      }, {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1280px)',
        priority: -750
      }, {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1920px)',
        priority: -650
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/data/orientation-break-points.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /* tslint:disable */

      /** @type {?} */

      var HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599.98px)';
      /** @type {?} */

      var HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959.98px)';
      /** @type {?} */

      var TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)';
      /** @type {?} */

      var TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)';
      /** @type {?} */

      var WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
      /** @type {?} */

      var WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
      /** @type {?} */

      var ScreenTypes = {
        'HANDSET': "".concat(HANDSET_PORTRAIT, ", ").concat(HANDSET_LANDSCAPE),
        'TABLET': "".concat(TABLET_PORTRAIT, " , ").concat(TABLET_LANDSCAPE),
        'WEB': "".concat(WEB_PORTRAIT, ", ").concat(WEB_LANDSCAPE, " "),
        'HANDSET_PORTRAIT': "".concat(HANDSET_PORTRAIT),
        'TABLET_PORTRAIT': "".concat(TABLET_PORTRAIT, " "),
        'WEB_PORTRAIT': "".concat(WEB_PORTRAIT),
        'HANDSET_LANDSCAPE': "".concat(HANDSET_LANDSCAPE),
        'TABLET_LANDSCAPE': "".concat(TABLET_LANDSCAPE),
        'WEB_LANDSCAPE': "".concat(WEB_LANDSCAPE)
      };
      /**
       * Extended Breakpoints for handset/tablets with landscape or portrait orientations
       * @type {?}
       */

      var ORIENTATION_BREAKPOINTS = [{
        'alias': 'handset',
        priority: 2000,
        'mediaQuery': ScreenTypes.HANDSET
      }, {
        'alias': 'handset.landscape',
        priority: 2000,
        'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE
      }, {
        'alias': 'handset.portrait',
        priority: 2000,
        'mediaQuery': ScreenTypes.HANDSET_PORTRAIT
      }, {
        'alias': 'tablet',
        priority: 2100,
        'mediaQuery': ScreenTypes.TABLET
      }, {
        'alias': 'tablet.landscape',
        priority: 2100,
        'mediaQuery': ScreenTypes.TABLET_LANDSCAPE
      }, {
        'alias': 'tablet.portrait',
        priority: 2100,
        'mediaQuery': ScreenTypes.TABLET_PORTRAIT
      }, {
        'alias': 'web',
        priority: 2200,
        'mediaQuery': ScreenTypes.WEB,
        overlapping: true
      }, {
        'alias': 'web.landscape',
        priority: 2200,
        'mediaQuery': ScreenTypes.WEB_LANDSCAPE,
        overlapping: true
      }, {
        'alias': 'web.portrait',
        priority: 2200,
        'mediaQuery': ScreenTypes.WEB_PORTRAIT,
        overlapping: true
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/break-point.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: utils/object-extend.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Extends an object with the *enumerable* and *own* properties of one or more source objects,
       * similar to Object.assign.
       *
       * @param {?} dest The object which will have properties copied to it.
       * @param {...?} sources The source objects from which properties will be copied.
       * @return {?}
       */

      function extendObject(dest) {
        if (dest == null) {
          throw TypeError('Cannot convert undefined or null to object');
        }

        for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          sources[_key2 - 1] = arguments[_key2];
        }

        for (var _i3 = 0, _sources2 = sources; _i3 < _sources2.length; _i3++) {
          var source = _sources2[_i3];

          if (source != null) {
            for (var key in source) {
              if (source.hasOwnProperty(key)) {
                dest[key] = source[key];
              }
            }
          }
        }

        return dest;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/breakpoint-tools.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ALIAS_DELIMITERS = /(\.|-|_)/g;
      /**
       * @param {?} part
       * @return {?}
       */

      function firstUpperCase(part) {
        /** @type {?} */
        var first = part.length > 0 ? part.charAt(0) : '';
        /** @type {?} */

        var remainder = part.length > 1 ? part.slice(1) : '';
        return first.toUpperCase() + remainder;
      }
      /**
       * Converts snake-case to SnakeCase.
       * @param {?} name Text to UpperCamelCase
       * @return {?}
       */


      function camelCase(name) {
        return name.replace(ALIAS_DELIMITERS, '|').split('|').map(firstUpperCase).join('');
      }
      /**
       * For each breakpoint, ensure that a Suffix is defined;
       * fallback to UpperCamelCase the unique Alias value
       * @param {?} list
       * @return {?}
       */


      function validateSuffixes(list) {
        list.forEach(
        /**
        * @param {?} bp
        * @return {?}
        */
        function (bp) {
          if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias

            bp.overlapping = !!bp.overlapping; // ensure default value
          }
        });
        return list;
      }
      /**
       * Merge a custom breakpoint list with the default list based on unique alias values
       *  - Items are added if the alias is not in the default list
       *  - Items are merged with the custom override if the alias exists in the default list
       * @param {?} defaults
       * @param {?=} custom
       * @return {?}
       */


      function mergeByAlias(defaults) {
        var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        /** @type {?} */
        var dict = {};
        defaults.forEach(
        /**
        * @param {?} bp
        * @return {?}
        */
        function (bp) {
          dict[bp.alias] = bp;
        }); // Merge custom breakpoints

        custom.forEach(
        /**
        * @param {?} bp
        * @return {?}
        */
        function (bp) {
          if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
          } else {
            dict[bp.alias] = bp;
          }
        });
        return validateSuffixes(Object.keys(dict).map(
        /**
        * @param {?} k
        * @return {?}
        */
        function (k) {
          return dict[k];
        }));
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/break-points-token.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       *  Injection token unique to the flex-layout library.
       *  Use this token when build a custom provider (see below).
       * @type {?}
       */


      var BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          /** @type {?} */
          var breakpoints = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINT);
          /** @type {?} */

          var layoutConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG);
          /** @type {?} */

          var bpFlattenArray = [].concat.apply([], (breakpoints || []).map(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return Array.isArray(v) ? v : [v];
          }));
          /** @type {?} */

          var builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS).concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
          return mergeByAlias(builtIns, bpFlattenArray);
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/utils/sort.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * HOF to sort the breakpoints by descending priority
       * @template T
       * @param {?} a
       * @param {?} b
       * @return {?}
       */

      function sortDescendingPriority(a, b) {
        /** @type {?} */
        var priorityA = a ? a.priority || 0 : 0;
        /** @type {?} */

        var priorityB = b ? b.priority || 0 : 0;
        return priorityB - priorityA;
      }
      /**
       * HOF to sort the breakpoints by ascending priority
       * @template T
       * @param {?} a
       * @param {?} b
       * @return {?}
       */


      function sortAscendingPriority(a, b) {
        /** @type {?} */
        var pA = a.priority || 0;
        /** @type {?} */

        var pB = b.priority || 0;
        return pA - pB;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/break-point-registry.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Registry of 1..n MediaQuery breakpoint ranges
       * This is published as a provider and may be overridden from custom, application-specific ranges
       *
       */


      var BreakPointRegistry = /*#__PURE__*/function () {
        /**
         * @param {?} list
         */
        function BreakPointRegistry(list) {
          _classCallCheck(this, BreakPointRegistry);

          /**
           * Memoized BreakPoint Lookups
           */
          this.findByMap = new Map();
          this.items = _toConsumableArray(list).sort(sortAscendingPriority);
        }
        /**
         * Search breakpoints by alias (e.g. gt-xs)
         * @param {?} alias
         * @return {?}
         */


        _createClass(BreakPointRegistry, [{
          key: "findByAlias",
          value: function findByAlias(alias) {
            return !alias ? null : this.findWithPredicate(alias,
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return bp.alias == alias;
            });
          }
          /**
           * @param {?} query
           * @return {?}
           */

        }, {
          key: "findByQuery",
          value: function findByQuery(query) {
            return this.findWithPredicate(query,
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return bp.mediaQuery == query;
            });
          }
          /**
           * Get all the breakpoints whose ranges could overlapping `normal` ranges;
           * e.g. gt-sm overlaps md, lg, and xl
           * @return {?}
           */

        }, {
          key: "overlappings",
          get: function get() {
            return this.items.filter(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              return it.overlapping == true;
            });
          }
          /**
           * Get list of all registered (non-empty) breakpoint aliases
           * @return {?}
           */

        }, {
          key: "aliases",
          get: function get() {
            return this.items.map(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              return it.alias;
            });
          }
          /**
           * Aliases are mapped to properties using suffixes
           * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
           * for property layoutGtSM.
           * @return {?}
           */

        }, {
          key: "suffixes",
          get: function get() {
            return this.items.map(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              return !!it.suffix ? it.suffix : '';
            });
          }
          /**
           * Memoized lookup using custom predicate function
           * @private
           * @param {?} key
           * @param {?} searchFn
           * @return {?}
           */

        }, {
          key: "findWithPredicate",
          value: function findWithPredicate(key, searchFn) {
            /** @type {?} */
            var response = this.findByMap.get(key);

            if (!response) {
              response = this.items.find(searchFn) || null;
              this.findByMap.set(key, response);
            }

            return response || null;
          }
        }]);

        return BreakPointRegistry;
      }();

      BreakPointRegistry.ɵfac = function BreakPointRegistry_Factory(t) {
        return new (t || BreakPointRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BREAKPOINTS));
      };
      /** @nocollapse */


      BreakPointRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function BreakPointRegistry_Factory() {
          return new BreakPointRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BREAKPOINTS));
        },
        token: BreakPointRegistry,
        providedIn: "root"
      });
      /** @nocollapse */

      BreakPointRegistry.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [BREAKPOINTS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakPointRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [BREAKPOINTS]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/match-media/match-media.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
       * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
       * performed within the ng Zone to trigger change detections and component updates.
       *
       * NOTE: both mediaQuery activations and de-activations are announced in notifications
       */


      var MatchMedia = /*#__PURE__*/function () {
        /**
         * @param {?} _zone
         * @param {?} _platformId
         * @param {?} _document
         */
        function MatchMedia(_zone, _platformId, _document) {
          _classCallCheck(this, MatchMedia);

          this._zone = _zone;
          this._platformId = _platformId;
          this._document = _document;
          /**
           * Initialize source with 'all' so all non-responsive APIs trigger style updates
           */

          this.source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
          this.registry = new Map();
          this.pendingRemoveListenerFns = [];
          this._observable$ = this.source.asObservable();
        }
        /**
         * Publish list of all current activations
         * @return {?}
         */


        _createClass(MatchMedia, [{
          key: "activations",
          get: function get() {
            /** @type {?} */
            var results = [];
            this.registry.forEach(
            /**
            * @param {?} mql
            * @param {?} key
            * @return {?}
            */
            function (mql, key) {
              if (mql.matches) {
                results.push(key);
              }
            });
            return results;
          }
          /**
           * For the specified mediaQuery?
           * @param {?} mediaQuery
           * @return {?}
           */

        }, {
          key: "isActive",
          value: function isActive(mediaQuery) {
            /** @type {?} */
            var mql = this.registry.get(mediaQuery);
            return !!mql ? mql.matches : this.registerQuery(mediaQuery).some(
            /**
            * @param {?} m
            * @return {?}
            */
            function (m) {
              return m.matches;
            });
          }
          /**
           * External observers can watch for all (or a specific) mql changes.
           * Typically used by the MediaQueryAdaptor; optionally available to components
           * who wish to use the MediaMonitor as mediaMonitor$ observable service.
           *
           * Use deferred registration process to register breakpoints only on subscription
           * This logic also enforces logic to register all mediaQueries BEFORE notify
           * subscribers of notifications.
           * @param {?=} mqList
           * @param {?=} filterOthers
           * @return {?}
           */

        }, {
          key: "observe",
          value: function observe(mqList) {
            var _this24 = this;

            var filterOthers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (mqList && mqList.length) {
              /** @type {?} */
              var matchMedia$ = this._observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
              /**
              * @param {?} change
              * @return {?}
              */
              function (change) {
                return !filterOthers ? true : mqList.indexOf(change.mediaQuery) > -1;
              }));
              /** @type {?} */


              var registration$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
              /**
              * @param {?} observer
              * @return {?}
              */
              function (observer) {
                // tslint:disable-line:max-line-length

                /** @type {?} */
                var matches = _this24.registerQuery(mqList);

                if (matches.length) {
                  /** @type {?} */
                  var lastChange =
                  /** @type {?} */
                  matches.pop();
                  matches.forEach(
                  /**
                  * @param {?} e
                  * @return {?}
                  */
                  function (e) {
                    observer.next(e);
                  });

                  _this24.source.next(lastChange); // last match is cached

                }

                observer.complete();
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(registration$, matchMedia$);
            }

            return this._observable$;
          }
          /**
           * Based on the BreakPointRegistry provider, register internal listeners for each unique
           * mediaQuery. Each listener emits specific MediaChange data to observers
           * @param {?} mediaQuery
           * @return {?}
           */

        }, {
          key: "registerQuery",
          value: function registerQuery(mediaQuery) {
            var _this25 = this;

            /** @type {?} */
            var list = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery];
            /** @type {?} */

            var matches = [];
            buildQueryCss(list, this._document);
            list.forEach(
            /**
            * @param {?} query
            * @return {?}
            */
            function (query) {
              /** @type {?} */
              var onMQLEvent =
              /**
              * @param {?} e
              * @return {?}
              */
              function onMQLEvent(e) {
                _this25._zone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this25.source.next(new MediaChange(e.matches, query));
                });
              };
              /** @type {?} */


              var mql = _this25.registry.get(query);

              if (!mql) {
                mql = _this25.buildMQL(query);
                mql.addListener(onMQLEvent);

                _this25.pendingRemoveListenerFns.push(
                /**
                * @return {?}
                */
                function () {
                  return (
                    /** @type {?} */
                    mql.removeListener(onMQLEvent)
                  );
                });

                _this25.registry.set(query, mql);
              }

              if (mql.matches) {
                matches.push(new MediaChange(true, query));
              }
            });
            return matches;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            /** @type {?} */
            var fn;

            while (fn = this.pendingRemoveListenerFns.pop()) {
              fn();
            }
          }
          /**
           * Call window.matchMedia() to build a MediaQueryList; which
           * supports 0..n listeners for activation/deactivation
           * @protected
           * @param {?} query
           * @return {?}
           */

        }, {
          key: "buildMQL",
          value: function buildMQL(query) {
            return constructMql(query, Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId));
          }
        }]);

        return MatchMedia;
      }();

      MatchMedia.ɵfac = function MatchMedia_Factory(t) {
        return new (t || MatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };
      /** @nocollapse */


      MatchMedia.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MatchMedia_Factory() {
          return new MatchMedia(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        },
        token: MatchMedia,
        providedIn: "root"
      });
      /** @nocollapse */

      MatchMedia.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchMedia, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * Private global registry for all dynamically-created, injected style tags
       * @see prepare(query)
       * @type {?}
       */


      var ALL_STYLES = {};
      /**
       * For Webkit engines that only trigger the MediaQueryList Listener
       * when there is at least one CSS selector for the respective media query.
       *
       * @param {?} mediaQueries
       * @param {?} _document
       * @return {?}
       */

      function buildQueryCss(mediaQueries, _document) {
        /** @type {?} */
        var list = mediaQueries.filter(
        /**
        * @param {?} it
        * @return {?}
        */
        function (it) {
          return !ALL_STYLES[it];
        });

        if (list.length > 0) {
          /** @type {?} */
          var query = list.join(', ');

          try {
            /** @type {?} */
            var styleEl = _document.createElement('style');

            styleEl.setAttribute('type', 'text/css');

            if (!
            /** @type {?} */
            styleEl.styleSheet) {
              /** @type {?} */
              var cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ".concat(query, " {.fx-query-test{ }}\n");
              styleEl.appendChild(_document.createTextNode(cssText));
            }

            /** @type {?} */
            _document.head.appendChild(styleEl); // Store in private global registry


            list.forEach(
            /**
            * @param {?} mq
            * @return {?}
            */
            function (mq) {
              return ALL_STYLES[mq] = styleEl;
            });
          } catch (e) {
            console.error(e);
          }
        }
      }
      /**
       * @param {?} query
       * @param {?} isBrowser
       * @return {?}
       */


      function constructMql(query, isBrowser) {
        /** @type {?} */
        var canListen = isBrowser && !!
        /** @type {?} */
        window.matchMedia('all').addListener;
        return canListen ?
        /** @type {?} */
        window.matchMedia(query) :
        /** @type {?} */
        {
          matches: query === 'all' || query === '',
          media: query,
          addListener:
          /**
          * @return {?}
          */
          function addListener() {},
          removeListener:
          /**
          * @return {?}
          */
          function removeListener() {},
          onchange: null,

          /**
           * @return {?}
           */
          addEventListener: function addEventListener() {},

          /**
           * @return {?}
           */
          removeEventListener: function removeEventListener() {},

          /**
           * @return {?}
           */
          dispatchEvent: function dispatchEvent() {
            return false;
          }
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/match-media/mock/mock-match-media.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
       * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
       * range and to clearAll mediaQuery listeners.
       */


      var MockMatchMedia = /*#__PURE__*/function (_MatchMedia) {
        _inherits(MockMatchMedia, _MatchMedia);

        var _super24 = _createSuper(MockMatchMedia);

        // Allow fallback to overlapping mediaQueries

        /**
         * @param {?} _zone
         * @param {?} _platformId
         * @param {?} _document
         * @param {?} _breakpoints
         */
        function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
          var _this26;

          _classCallCheck(this, MockMatchMedia);

          _this26 = _super24.call(this, _zone, _platformId, _document);
          _this26._breakpoints = _breakpoints;
          _this26.autoRegisterQueries = true; // Used for testing BreakPoint registrations
          // Used for testing BreakPoint registrations

          _this26.useOverlaps = false; // Allow fallback to overlapping mediaQueries

          return _this26;
        }
        /**
         * Easy method to clear all listeners for all mediaQueries
         * @return {?}
         */


        _createClass(MockMatchMedia, [{
          key: "clearAll",
          value: function clearAll() {
            this.registry.forEach(
            /**
            * @param {?} mql
            * @return {?}
            */
            function (mql) {
              /** @type {?} */
              mql.destroy();
            });
            this.registry.clear();
            this.useOverlaps = false;
          }
          /**
           * Feature to support manual, simulated activation of a mediaQuery.
           * @param {?} mediaQuery
           * @param {?=} useOverlaps
           * @return {?}
           */

        }, {
          key: "activate",
          value: function activate(mediaQuery) {
            var useOverlaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            useOverlaps = useOverlaps || this.useOverlaps;
            mediaQuery = this._validateQuery(mediaQuery);

            if (useOverlaps || !this.isActive(mediaQuery)) {
              this._deactivateAll();

              this._registerMediaQuery(mediaQuery);

              this._activateWithOverlaps(mediaQuery, useOverlaps);
            }

            return this.hasActivated;
          }
          /**
           * Converts an optional mediaQuery alias to a specific, valid mediaQuery
           * @param {?} queryOrAlias
           * @return {?}
           */

        }, {
          key: "_validateQuery",
          value: function _validateQuery(queryOrAlias) {
            /** @type {?} */
            var bp = this._breakpoints.findByAlias(queryOrAlias);

            return bp && bp.mediaQuery || queryOrAlias;
          }
          /**
           * Manually onMediaChange any overlapping mediaQueries to simulate
           * similar functionality in the window.matchMedia()
           * @private
           * @param {?} mediaQuery
           * @param {?} useOverlaps
           * @return {?}
           */

        }, {
          key: "_activateWithOverlaps",
          value: function _activateWithOverlaps(mediaQuery, useOverlaps) {
            if (useOverlaps) {
              /** @type {?} */
              var bp = this._breakpoints.findByQuery(mediaQuery);
              /** @type {?} */


              var alias = bp ? bp.alias : 'unknown'; // Simulate activation of overlapping lt-<XXX> ranges

              switch (alias) {
                case 'lg':
                  this._activateByAlias(['lt-xl']);

                  break;

                case 'md':
                  this._activateByAlias(['lt-xl', 'lt-lg']);

                  break;

                case 'sm':
                  this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md']);

                  break;

                case 'xs':
                  this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md', 'lt-sm']);

                  break;
              } // Simulate activation of overlapping gt-<xxxx> mediaQuery ranges


              switch (alias) {
                case 'xl':
                  this._activateByAlias(['gt-lg', 'gt-md', 'gt-sm', 'gt-xs']);

                  break;

                case 'lg':
                  this._activateByAlias(['gt-md', 'gt-sm', 'gt-xs']);

                  break;

                case 'md':
                  this._activateByAlias(['gt-sm', 'gt-xs']);

                  break;

                case 'sm':
                  this._activateByAlias(['gt-xs']);

                  break;
              }
            } // Activate last since the responsiveActivation is watching *this* mediaQuery


            return this._activateByQuery(mediaQuery);
          }
          /**
           *
           * @private
           * @param {?} aliases
           * @return {?}
           */

        }, {
          key: "_activateByAlias",
          value: function _activateByAlias(aliases) {
            var _this27 = this;

            /** @type {?} */
            var activate =
            /**
            * @param {?} alias
            * @return {?}
            */
            function activate(alias) {
              /** @type {?} */
              var bp = _this27._breakpoints.findByAlias(alias);

              _this27._activateByQuery(bp ? bp.mediaQuery : alias);
            };

            aliases.forEach(activate);
          }
          /**
           *
           * @private
           * @param {?} mediaQuery
           * @return {?}
           */

        }, {
          key: "_activateByQuery",
          value: function _activateByQuery(mediaQuery) {
            if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
              this._registerMediaQuery(mediaQuery);
            }
            /** @type {?} */


            var mql =
            /** @type {?} */
            this.registry.get(mediaQuery);

            if (mql && !this.isActive(mediaQuery)) {
              this.registry.set(mediaQuery, mql.activate());
            }

            return this.hasActivated;
          }
          /**
           * Deactivate all current MQLs and reset the buffer
           * @private
           * @template THIS
           * @this {THIS}
           * @return {THIS}
           */

        }, {
          key: "_deactivateAll",
          value: function _deactivateAll() {
            /** @type {?} */
            this.registry.forEach(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              /** @type {?} */
              it.deactivate();
            });
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Insure the mediaQuery is registered with MatchMedia
           * @private
           * @param {?} mediaQuery
           * @return {?}
           */

        }, {
          key: "_registerMediaQuery",
          value: function _registerMediaQuery(mediaQuery) {
            if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
              this.registerQuery(mediaQuery);
            }
          }
          /**
           * Call window.matchMedia() to build a MediaQueryList; which
           * supports 0..n listeners for activation/deactivation
           * @protected
           * @param {?} query
           * @return {?}
           */

        }, {
          key: "buildMQL",
          value: function buildMQL(query) {
            return new MockMediaQueryList(query);
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "hasActivated",
          get: function get() {
            return this.activations.length > 0;
          }
        }]);

        return MockMatchMedia;
      }(MatchMedia);

      MockMatchMedia.ɵfac = function MockMatchMedia_Factory(t) {
        return new (t || MockMatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry));
      };

      MockMatchMedia.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MockMatchMedia,
        factory: MockMatchMedia.ɵfac
      });
      /** @nocollapse */

      MockMatchMedia.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: BreakPointRegistry
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockMatchMedia, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: BreakPointRegistry
          }];
        }, null);
      })();
      /**
       * Special internal class to simulate a MediaQueryList and
       * - supports manual activation to simulate mediaQuery matching
       * - manages listeners
       */


      var MockMediaQueryList = /*#__PURE__*/function () {
        /**
         * @param {?} _mediaQuery
         */
        function MockMediaQueryList(_mediaQuery) {
          _classCallCheck(this, MockMediaQueryList);

          this._mediaQuery = _mediaQuery;
          this._isActive = false;
          this._listeners = [];
          this.onchange = null;
        }
        /**
         * @return {?}
         */


        _createClass(MockMediaQueryList, [{
          key: "matches",
          get: function get() {
            return this._isActive;
          }
          /**
           * @return {?}
           */

        }, {
          key: "media",
          get: function get() {
            return this._mediaQuery;
          }
          /**
           * Destroy the current list by deactivating the
           * listeners and clearing the internal list
           * @return {?}
           */

        }, {
          key: "destroy",
          value: function destroy() {
            this.deactivate();
            this._listeners = [];
          }
          /**
           * Notify all listeners that 'matches === TRUE'
           * @return {?}
           */

        }, {
          key: "activate",
          value: function activate() {
            var _this28 = this;

            if (!this._isActive) {
              this._isActive = true;

              this._listeners.forEach(
              /**
              * @param {?} callback
              * @return {?}
              */
              function (callback) {
                /** @type {?} */
                var cb =
                /** @type {?} */
                callback;
                cb.call(_this28,
                /** @type {?} */
                {
                  matches: _this28.matches,
                  media: _this28.media
                });
              });
            }

            return this;
          }
          /**
           * Notify all listeners that 'matches === false'
           * @return {?}
           */

        }, {
          key: "deactivate",
          value: function deactivate() {
            var _this29 = this;

            if (this._isActive) {
              this._isActive = false;

              this._listeners.forEach(
              /**
              * @param {?} callback
              * @return {?}
              */
              function (callback) {
                /** @type {?} */
                var cb =
                /** @type {?} */
                callback;
                cb.call(_this29,
                /** @type {?} */
                {
                  matches: _this29.matches,
                  media: _this29.media
                });
              });
            }

            return this;
          }
          /**
           * Add a listener to our internal list to activate later
           * @param {?} listener
           * @return {?}
           */

        }, {
          key: "addListener",
          value: function addListener(listener) {
            if (this._listeners.indexOf(listener) === -1) {
              this._listeners.push(listener);
            }

            if (this._isActive) {
              /** @type {?} */
              var cb =
              /** @type {?} */
              listener;
              cb.call(this,
              /** @type {?} */
              {
                matches: this.matches,
                media: this.media
              });
            }
          }
          /**
           * Don't need to remove listeners in the testing environment
           * @param {?} _
           * @return {?}
           */

        }, {
          key: "removeListener",
          value: function removeListener(_) {}
          /**
           * @param {?} _
           * @param {?} __
           * @param {?=} ___
           * @return {?}
           */

        }, {
          key: "addEventListener",
          value: function addEventListener(_, __, ___) {}
          /**
           * @param {?} _
           * @param {?} __
           * @param {?=} ___
           * @return {?}
           */

        }, {
          key: "removeEventListener",
          value: function removeEventListener(_, __, ___) {}
          /**
           * @param {?} _
           * @return {?}
           */

        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(_) {
            return false;
          }
        }]);

        return MockMediaQueryList;
      }();
      /**
       * Pre-configured provider for MockMatchMedia
       * @type {?}
       */


      var MockMatchMediaProvider = {
        // tslint:disable-line:variable-name
        provide: MatchMedia,
        useClass: MockMatchMedia
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: core/match-media/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-marshaller/print-hook.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var PRINT = 'print';
      /** @type {?} */

      var BREAKPOINT_PRINT = {
        alias: PRINT,
        mediaQuery: PRINT,
        priority: 1000
      };
      /**
       * PrintHook - Use to intercept print MediaQuery activations and force
       *             layouts to render with the specified print alias/breakpoint
       *
       * Used in MediaMarshaller and MediaObserver
       */

      var PrintHook = /*#__PURE__*/function () {
        /**
         * @param {?} breakpoints
         * @param {?} layoutConfig
         * @param {?} _document
         */
        function PrintHook(breakpoints, layoutConfig, _document) {
          _classCallCheck(this, PrintHook);

          this.breakpoints = breakpoints;
          this.layoutConfig = layoutConfig;
          this._document = _document; // registeredBeforeAfterPrintHooks tracks if we registered the `beforeprint`
          //  and `afterprint` event listeners.

          this.registeredBeforeAfterPrintHooks = false; // isPrintingBeforeAfterEvent is used to track if we are printing from within
          // a `beforeprint` event handler. This prevents the typicall `stopPrinting`
          // form `interceptEvents` so that printing is not stopped while the dialog
          // is still open. This is an extension of the `isPrinting` property on
          // browsers which support `beforeprint` and `afterprint` events.

          this.isPrintingBeforeAfterEvent = false;
          this.beforePrintEventListeners = [];
          this.afterPrintEventListeners = [];
          /**
           * Is this service currently in Print-mode ?
           */

          this.isPrinting = false;
          this.queue = new PrintQueue();
          this.deactivations = [];
        }
        /**
         * Add 'print' mediaQuery: to listen for matchMedia activations
         * @param {?} queries
         * @return {?}
         */


        _createClass(PrintHook, [{
          key: "withPrintQuery",
          value: function withPrintQuery(queries) {
            return [].concat(_toConsumableArray(queries), [PRINT]);
          }
          /**
           * Is the MediaChange event for any 'print' \@media
           * @param {?} e
           * @return {?}
           */

        }, {
          key: "isPrintEvent",
          value: function isPrintEvent(e) {
            return e.mediaQuery.startsWith(PRINT);
          }
          /**
           * What is the desired mqAlias to use while printing?
           * @return {?}
           */

        }, {
          key: "printAlias",
          get: function get() {
            return this.layoutConfig.printWithBreakpoints || [];
          }
          /**
           * Lookup breakpoints associated with print aliases.
           * @return {?}
           */

        }, {
          key: "printBreakPoints",
          get: function get() {
            var _this30 = this;

            return (
              /** @type {?} */
              this.printAlias.map(
              /**
              * @param {?} alias
              * @return {?}
              */
              function (alias) {
                return _this30.breakpoints.findByAlias(alias);
              }).filter(
              /**
              * @param {?} bp
              * @return {?}
              */
              function (bp) {
                return bp !== null;
              })
            );
          }
          /**
           * Lookup breakpoint associated with mediaQuery
           * @param {?} __0
           * @return {?}
           */

        }, {
          key: "getEventBreakpoints",
          value: function getEventBreakpoints(_ref2) {
            var mediaQuery = _ref2.mediaQuery;

            /** @type {?} */
            var bp = this.breakpoints.findByQuery(mediaQuery);
            /** @type {?} */

            var list = bp ? [].concat(_toConsumableArray(this.printBreakPoints), [bp]) : this.printBreakPoints;
            return list.sort(sortDescendingPriority);
          }
          /**
           * Update event with printAlias mediaQuery information
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "updateEvent",
          value: function updateEvent(event) {
            /** @type {?} */
            var bp = this.breakpoints.findByQuery(event.mediaQuery);

            if (this.isPrintEvent(event)) {
              // Reset from 'print' to first (highest priority) print breakpoint
              bp = this.getEventBreakpoints(event)[0];
              event.mediaQuery = bp ? bp.mediaQuery : '';
            }

            return mergeAlias(event, bp);
          } // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
          // trigger print styles synchronously and apply proper layout styles.
          // It is a noop if the hooks have already been registered or if the document's
          // `defaultView` is not available.

          /**
           * @private
           * @param {?} target
           * @return {?}
           */

        }, {
          key: "registerBeforeAfterPrintHooks",
          value: function registerBeforeAfterPrintHooks(target) {
            var _this31 = this;

            // `defaultView` may be null when rendering on the server or in other contexts.
            if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks) {
              return;
            }

            this.registeredBeforeAfterPrintHooks = true;
            /** @type {?} */

            var beforePrintListener =
            /**
            * @return {?}
            */
            function beforePrintListener() {
              // If we aren't already printing, start printing and update the styles as
              // if there was a regular print `MediaChange`(from matchMedia).
              if (!_this31.isPrinting) {
                _this31.isPrintingBeforeAfterEvent = true;

                _this31.startPrinting(target, _this31.getEventBreakpoints(new MediaChange(true, PRINT)));

                target.updateStyles();
              }
            };
            /** @type {?} */


            var afterPrintListener =
            /**
            * @return {?}
            */
            function afterPrintListener() {
              // If we aren't already printing, start printing and update the styles as
              // if there was a regular print `MediaChange`(from matchMedia).
              _this31.isPrintingBeforeAfterEvent = false;

              if (_this31.isPrinting) {
                _this31.stopPrinting(target);

                target.updateStyles();
              }
            }; // Could we have teardown logic to remove if there are no print listeners being used?


            this._document.defaultView.addEventListener('beforeprint', beforePrintListener);

            this._document.defaultView.addEventListener('afterprint', afterPrintListener);

            this.beforePrintEventListeners.push(beforePrintListener);
            this.afterPrintEventListeners.push(afterPrintListener);
          }
          /**
           * Prepare RxJS filter operator with partial application
           * @param {?} target
           * @return {?} pipeable filter predicate
           */

        }, {
          key: "interceptEvents",
          value: function interceptEvents(target) {
            var _this32 = this;

            this.registerBeforeAfterPrintHooks(target);
            return (
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                if (_this32.isPrintEvent(event)) {
                  if (event.matches && !_this32.isPrinting) {
                    _this32.startPrinting(target, _this32.getEventBreakpoints(event));

                    target.updateStyles();
                  } else if (!event.matches && _this32.isPrinting && !_this32.isPrintingBeforeAfterEvent) {
                    _this32.stopPrinting(target);

                    target.updateStyles();
                  }
                } else {
                  _this32.collectActivations(event);
                }
              }
            );
          }
          /**
           * Stop mediaChange event propagation in event streams
           * @return {?}
           */

        }, {
          key: "blockPropagation",
          value: function blockPropagation() {
            var _this33 = this;

            return (
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return !(_this33.isPrinting || _this33.isPrintEvent(event));
              }
            );
          }
          /**
           * Save current activateBreakpoints (for later restore)
           * and substitute only the printAlias breakpoint
           * @protected
           * @param {?} target
           * @param {?} bpList
           * @return {?}
           */

        }, {
          key: "startPrinting",
          value: function startPrinting(target, bpList) {
            this.isPrinting = true;
            target.activatedBreakpoints = this.queue.addPrintBreakpoints(bpList);
          }
          /**
           * For any print de-activations, reset the entire print queue
           * @protected
           * @param {?} target
           * @return {?}
           */

        }, {
          key: "stopPrinting",
          value: function stopPrinting(target) {
            target.activatedBreakpoints = this.deactivations;
            this.deactivations = [];
            this.queue.clear();
            this.isPrinting = false;
          }
          /**
           * To restore pre-Print Activations, we must capture the proper
           * list of breakpoint activations BEFORE print starts. OnBeforePrint()
           * is supported; so 'print' mediaQuery activations are used as a fallback
           * in browsers without `beforeprint` support.
           *
           * >  But activated breakpoints are deactivated BEFORE 'print' activation.
           *
           * Let's capture all de-activations using the following logic:
           *
           *  When not printing:
           *    - clear cache when activating non-print breakpoint
           *    - update cache (and sort) when deactivating
           *
           *  When printing:
           *    - sort and save when starting print
           *    - restore as activatedTargets and clear when stop printing
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "collectActivations",
          value: function collectActivations(event) {
            if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
              if (!event.matches) {
                /** @type {?} */
                var bp = this.breakpoints.findByQuery(event.mediaQuery);

                if (bp) {
                  // Deactivating a breakpoint
                  this.deactivations.push(bp);
                  this.deactivations.sort(sortDescendingPriority);
                }
              } else if (!this.isPrintingBeforeAfterEvent) {
                // Only clear deactivations if we aren't printing from a `beforeprint` event.
                // Otherwise this will clear before `stopPrinting()` is called to restore
                // the pre-Print Activations.
                this.deactivations = [];
              }
            }
          }
          /**
           * Teardown logic for the service.
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this34 = this;

            this.beforePrintEventListeners.forEach(
            /**
            * @param {?} l
            * @return {?}
            */
            function (l) {
              return _this34._document.defaultView.removeEventListener('beforeprint', l);
            });
            this.afterPrintEventListeners.forEach(
            /**
            * @param {?} l
            * @return {?}
            */
            function (l) {
              return _this34._document.defaultView.removeEventListener('afterprint', l);
            });
          }
        }]);

        return PrintHook;
      }();

      PrintHook.ɵfac = function PrintHook_Factory(t) {
        return new (t || PrintHook)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };
      /** @nocollapse */


      PrintHook.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function PrintHook_Factory() {
          return new PrintHook(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        },
        token: PrintHook,
        providedIn: "root"
      });
      /** @nocollapse */

      PrintHook.ctorParameters = function () {
        return [{
          type: BreakPointRegistry
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LAYOUT_CONFIG]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintHook, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: BreakPointRegistry
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [LAYOUT_CONFIG]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })(); // ************************************************************************
      // Internal Utility class 'PrintQueue'
      // ************************************************************************

      /**
       * Utility class to manage print breakpoints + activatedBreakpoints
       * with correct sorting WHILE printing
       */


      var PrintQueue = /*#__PURE__*/function () {
        function PrintQueue() {
          _classCallCheck(this, PrintQueue);

          /**
           * Sorted queue with prioritized print breakpoints
           */
          this.printBreakpoints = [];
        }
        /**
         * @param {?} bpList
         * @return {?}
         */


        _createClass(PrintQueue, [{
          key: "addPrintBreakpoints",
          value: function addPrintBreakpoints(bpList) {
            var _this35 = this;

            bpList.push(BREAKPOINT_PRINT);
            bpList.sort(sortDescendingPriority);
            bpList.forEach(
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return _this35.addBreakpoint(bp);
            });
            return this.printBreakpoints;
          }
          /**
           * Add Print breakpoint to queue
           * @param {?} bp
           * @return {?}
           */

        }, {
          key: "addBreakpoint",
          value: function addBreakpoint(bp) {
            if (!!bp) {
              /** @type {?} */
              var bpInList = this.printBreakpoints.find(
              /**
              * @param {?} it
              * @return {?}
              */
              function (it) {
                return it.mediaQuery === bp.mediaQuery;
              });

              if (bpInList === undefined) {
                // If this is a `printAlias` breakpoint, then append. If a true 'print' breakpoint,
                // register as highest priority in the queue
                this.printBreakpoints = isPrintBreakPoint(bp) ? [bp].concat(_toConsumableArray(this.printBreakpoints)) : [].concat(_toConsumableArray(this.printBreakpoints), [bp]);
              }
            }
          }
          /**
           * Restore original activated breakpoints and clear internal caches
           * @return {?}
           */

        }, {
          key: "clear",
          value: function clear() {
            this.printBreakpoints = [];
          }
        }]);

        return PrintQueue;
      }(); // ************************************************************************
      // Internal Utility methods
      // ************************************************************************

      /**
       * Only support intercept queueing if the Breakpoint is a print \@media query
       * @param {?} bp
       * @return {?}
       */


      function isPrintBreakPoint(bp) {
        return bp ? bp.mediaQuery.startsWith(PRINT) : false;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/utils/array.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Wraps the provided value in an array, unless the provided value is an array.
       * @template T
       * @param {?} value
       * @return {?}
       */


      function coerceArray(value) {
        return Array.isArray(value) ? value : [value];
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-observer/media-observer.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MediaObserver enables applications to listen for 1..n mediaQuery activations and to determine
       * if a mediaQuery is currently activated.
       *
       * Since a breakpoint change will first deactivate 1...n mediaQueries and then possibly activate
       * 1..n mediaQueries, the MediaObserver will debounce notifications and report ALL *activations*
       * in 1 event notification. The reported activations will be sorted in descending priority order.
       *
       * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
       * notification. For custom mediaQuery notifications, alias information will not be injected and
       * those fields will be ''.
       *
       * Note: Developers should note that only mediaChange activations (not de-activations)
       *       are announced by the MediaObserver.
       *
       * \@usage
       *
       *  // RxJS
       *  import { filter } from 'rxjs/operators';
       *  import { MediaObserver } from '\@angular/flex-layout';
       *
       * \@Component({ ... })
       *  export class AppComponent {
       *    status: string = '';
       *
       *    constructor(mediaObserver: MediaObserver) {
       *      const media$ = mediaObserver.asObservable().pipe(
       *        filter((changes: MediaChange[]) => true)   // silly noop filter
       *      );
       *
       *      media$.subscribe((changes: MediaChange[]) => {
       *        let status = '';
       *        changes.forEach( change => {
       *          status += `'${change.mqAlias}' = (${change.mediaQuery}) <br/>` ;
       *        });
       *        this.status = status;
       *     });
       *
       *    }
       *  }
       */


      var MediaObserver = /*#__PURE__*/function () {
        /**
         * @param {?} breakpoints
         * @param {?} matchMedia
         * @param {?} hook
         */
        function MediaObserver(breakpoints, matchMedia, hook) {
          _classCallCheck(this, MediaObserver);

          this.breakpoints = breakpoints;
          this.matchMedia = matchMedia;
          this.hook = hook;
          /**
           * Filter MediaChange notifications for overlapping breakpoints
           */

          this.filterOverlaps = false;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._media$ = this.watchActivations();
          this.media$ = this._media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} changes
          * @return {?}
          */
          function (changes) {
            return changes.length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} changes
          * @return {?}
          */
          function (changes) {
            return changes[0];
          }));
        }
        /**
         * Completes the active subject, signalling to all complete for all
         * MediaObserver subscribers
         * @return {?}
         */


        _createClass(MediaObserver, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          } // ************************************************
          // Public Methods
          // ************************************************

          /**
           * Observe changes to current activation 'list'
           * @return {?}
           */

        }, {
          key: "asObservable",
          value: function asObservable() {
            return this._media$;
          }
          /**
           * Allow programmatic query to determine if one or more media query/alias match
           * the current viewport size.
           * @param {?} value One or more media queries (or aliases) to check.
           * @return {?} Whether any of the media queries match.
           */

        }, {
          key: "isActive",
          value: function isActive(value) {
            var _this36 = this;

            /** @type {?} */
            var aliases = splitQueries(coerceArray(value));
            return aliases.some(
            /**
            * @param {?} alias
            * @return {?}
            */
            function (alias) {
              /** @type {?} */
              var query = toMediaQuery(alias, _this36.breakpoints);
              return query !== null && _this36.matchMedia.isActive(query);
            });
          } // ************************************************
          // Internal Methods
          // ************************************************

          /**
           * Register all the mediaQueries registered in the BreakPointRegistry
           * This is needed so subscribers can be auto-notified of all standard, registered
           * mediaQuery activations
           * @private
           * @return {?}
           */

        }, {
          key: "watchActivations",
          value: function watchActivations() {
            /** @type {?} */
            var queries = this.breakpoints.items.map(
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return bp.mediaQuery;
            });
            return this.buildObservable(queries);
          }
          /**
           * Only pass/announce activations (not de-activations)
           *
           * Since multiple-mediaQueries can be activation in a cycle,
           * gather all current activations into a single list of changes to observers
           *
           * Inject associated (if any) alias information into the MediaChange event
           * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
           * - Exclude print activations that do not have an associated mediaQuery
           *
           * NOTE: the raw MediaChange events [from MatchMedia] do not
           *       contain important alias information; as such this info
           *       must be injected into the MediaChange
           * @private
           * @param {?} mqList
           * @return {?}
           */

        }, {
          key: "buildObservable",
          value: function buildObservable(mqList) {
            var _this37 = this;

            /** @type {?} */
            var hasChanges =
            /**
            * @param {?} changes
            * @return {?}
            */
            function hasChanges(changes) {
              /** @type {?} */
              var isValidQuery =
              /**
              * @param {?} change
              * @return {?}
              */
              function isValidQuery(change) {
                return change.mediaQuery.length > 0;
              };

              return changes.filter(isValidQuery).length > 0;
            };
            /** @type {?} */


            var excludeOverlaps =
            /**
            * @param {?} changes
            * @return {?}
            */
            function excludeOverlaps(changes) {
              return !_this37.filterOverlaps ? changes : changes.filter(
              /**
              * @param {?} change
              * @return {?}
              */
              function (change) {
                /** @type {?} */
                var bp = _this37.breakpoints.findByQuery(change.mediaQuery);

                return !bp ? true : !bp.overlapping;
              });
            };
            /**
             */


            return this.matchMedia.observe(this.hook.withPrintQuery(mqList)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              return change.matches;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
            /**
            * @param {?} _
            * @return {?}
            */
            function (_) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this37.findAllActivations());
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(excludeOverlaps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(hasChanges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
          }
          /**
           * Find all current activations and prepare single list of activations
           * sorted by descending priority.
           * @private
           * @return {?}
           */

        }, {
          key: "findAllActivations",
          value: function findAllActivations() {
            var _this38 = this;

            /** @type {?} */
            var mergeMQAlias =
            /**
            * @param {?} change
            * @return {?}
            */
            function mergeMQAlias(change) {
              /** @type {?} */
              var bp = _this38.breakpoints.findByQuery(change.mediaQuery);

              return mergeAlias(change, bp);
            };
            /** @type {?} */


            var replaceWithPrintAlias =
            /**
            * @param {?} change
            * @return {?}
            */
            function replaceWithPrintAlias(change) {
              return _this38.hook.isPrintEvent(change) ? _this38.hook.updateEvent(change) : change;
            };

            return this.matchMedia.activations.map(
            /**
            * @param {?} query
            * @return {?}
            */
            function (query) {
              return new MediaChange(true, query);
            }).map(replaceWithPrintAlias).map(mergeMQAlias).sort(sortDescendingPriority);
          }
        }]);

        return MediaObserver;
      }();

      MediaObserver.ɵfac = function MediaObserver_Factory(t) {
        return new (t || MediaObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrintHook));
      };
      /** @nocollapse */


      MediaObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MediaObserver_Factory() {
          return new MediaObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PrintHook));
        },
        token: MediaObserver,
        providedIn: "root"
      });
      /** @nocollapse */

      MediaObserver.ctorParameters = function () {
        return [{
          type: BreakPointRegistry
        }, {
          type: MatchMedia
        }, {
          type: PrintHook
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaObserver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: BreakPointRegistry
          }, {
            type: MatchMedia
          }, {
            type: PrintHook
          }];
        }, null);
      })();
      /**
       * Find associated breakpoint (if any)
       * @param {?} query
       * @param {?} locator
       * @return {?}
       */


      function toMediaQuery(query, locator) {
        /** @type {?} */
        var bp = locator.findByAlias(query) || locator.findByQuery(query);
        return bp ? bp.mediaQuery : null;
      }
      /**
       * Split each query string into separate query strings if two queries are provided as comma
       * separated.
       * @param {?} queries
       * @return {?}
       */


      function splitQueries(queries) {
        return queries.map(
        /**
        * @param {?} query
        * @return {?}
        */
        function (query) {
          return query.split(',');
        }).reduce(
        /**
        * @param {?} a1
        * @param {?} a2
        * @return {?}
        */
        function (a1, a2) {
          return a1.concat(a2);
        }).map(
        /**
        * @param {?} query
        * @return {?}
        */
        function (query) {
          return query.trim();
        });
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-observer/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-trigger/media-trigger.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Class
       */


      var MediaTrigger = /*#__PURE__*/function () {
        /**
         * @param {?} breakpoints
         * @param {?} matchMedia
         * @param {?} layoutConfig
         * @param {?} _platformId
         * @param {?} _document
         */
        function MediaTrigger(breakpoints, matchMedia, layoutConfig, _platformId, _document) {
          _classCallCheck(this, MediaTrigger);

          this.breakpoints = breakpoints;
          this.matchMedia = matchMedia;
          this.layoutConfig = layoutConfig;
          this._platformId = _platformId;
          this._document = _document;
          this.hasCachedRegistryMatches = false;
          this.originalActivations = [];
          this.originalRegistry = new Map();
        }
        /**
         * Manually activate range of breakpoints
         * @param {?} list array of mediaQuery or alias strings
         * @return {?}
         */


        _createClass(MediaTrigger, [{
          key: "activate",
          value: function activate(list) {
            list = list.map(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              return it.trim();
            }); // trim queries

            this.saveActivations();
            this.deactivateAll();
            this.setActivations(list);
            this.prepareAutoRestore();
          }
          /**
           * Restore original, 'real' breakpoints and emit events
           * to trigger stream notification
           * @return {?}
           */

        }, {
          key: "restore",
          value: function restore() {
            if (this.hasCachedRegistryMatches) {
              /** @type {?} */
              var extractQuery =
              /**
              * @param {?} change
              * @return {?}
              */
              function extractQuery(change) {
                return change.mediaQuery;
              };
              /** @type {?} */


              var list = this.originalActivations.map(extractQuery);

              try {
                this.deactivateAll();
                this.restoreRegistryMatches();
                this.setActivations(list);
              } finally {
                this.originalActivations = [];

                if (this.resizeSubscription) {
                  this.resizeSubscription.unsubscribe();
                }
              }
            }
          } // ************************************************
          // Internal Methods
          // ************************************************

          /**
           * Whenever window resizes, immediately auto-restore original
           * activations (if we are simulating activations)
           * @private
           * @return {?}
           */

        }, {
          key: "prepareAutoRestore",
          value: function prepareAutoRestore() {
            /** @type {?} */
            var isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) && this._document;
            /** @type {?} */


            var enableAutoRestore = isBrowser && this.layoutConfig.mediaTriggerAutoRestore;

            if (enableAutoRestore) {
              /** @type {?} */
              var resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
              this.resizeSubscription = resize$.subscribe(this.restore.bind(this));
            }
          }
          /**
           * Notify all matchMedia subscribers of de-activations
           *
           * Note: we must force 'matches' updates for
           *       future matchMedia::activation lookups
           * @private
           * @return {?}
           */

        }, {
          key: "deactivateAll",
          value: function deactivateAll() {
            /** @type {?} */
            var list = this.currentActivations;
            this.forceRegistryMatches(list, false);
            this.simulateMediaChanges(list, false);
          }
          /**
           * Cache current activations as sorted, prioritized list of MediaChanges
           * @private
           * @return {?}
           */

        }, {
          key: "saveActivations",
          value: function saveActivations() {
            var _this39 = this;

            if (!this.hasCachedRegistryMatches) {
              /** @type {?} */
              var toMediaChange =
              /**
              * @param {?} query
              * @return {?}
              */
              function toMediaChange(query) {
                return new MediaChange(true, query);
              };
              /** @type {?} */


              var mergeMQAlias =
              /**
              * @param {?} change
              * @return {?}
              */
              function mergeMQAlias(change) {
                /** @type {?} */
                var bp = _this39.breakpoints.findByQuery(change.mediaQuery);

                return mergeAlias(change, bp);
              };

              this.originalActivations = this.currentActivations.map(toMediaChange).map(mergeMQAlias).sort(sortDescendingPriority);
              this.cacheRegistryMatches();
            }
          }
          /**
           * Force set manual activations for specified mediaQuery list
           * @private
           * @param {?} list
           * @return {?}
           */

        }, {
          key: "setActivations",
          value: function setActivations(list) {
            if (!!this.originalRegistry) {
              this.forceRegistryMatches(list, true);
            }

            this.simulateMediaChanges(list);
          }
          /**
           * For specified mediaQuery list manually simulate activations or deactivations
           * @private
           * @param {?} queries
           * @param {?=} matches
           * @return {?}
           */

        }, {
          key: "simulateMediaChanges",
          value: function simulateMediaChanges(queries) {
            var _this40 = this;

            var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            /** @type {?} */
            var toMediaQuery =
            /**
            * @param {?} query
            * @return {?}
            */
            function toMediaQuery(query) {
              /** @type {?} */
              var locator = _this40.breakpoints;
              /** @type {?} */

              var bp = locator.findByAlias(query) || locator.findByQuery(query);
              return bp ? bp.mediaQuery : query;
            };
            /** @type {?} */


            var emitChangeEvent =
            /**
            * @param {?} query
            * @return {?}
            */
            function emitChangeEvent(query) {
              return _this40.emitChangeEvent(matches, query);
            };

            queries.map(toMediaQuery).forEach(emitChangeEvent);
          }
          /**
           * Replace current registry with simulated registry...
           * Note: this is required since MediaQueryList::matches is 'readOnly'
           * @private
           * @param {?} queries
           * @param {?} matches
           * @return {?}
           */

        }, {
          key: "forceRegistryMatches",
          value: function forceRegistryMatches(queries, matches) {
            /** @type {?} */
            var registry = new Map();
            queries.forEach(
            /**
            * @param {?} query
            * @return {?}
            */
            function (query) {
              registry.set(query,
              /** @type {?} */
              {
                matches: matches
              });
            });
            this.matchMedia.registry = registry;
          }
          /**
           * Save current MatchMedia::registry items.
           * @private
           * @return {?}
           */

        }, {
          key: "cacheRegistryMatches",
          value: function cacheRegistryMatches() {
            /** @type {?} */
            var target = this.originalRegistry;
            target.clear();
            this.matchMedia.registry.forEach(
            /**
            * @param {?} value
            * @param {?} key
            * @return {?}
            */
            function (value, key) {
              target.set(key, value);
            });
            this.hasCachedRegistryMatches = true;
          }
          /**
           * Restore original, 'true' registry
           * @private
           * @return {?}
           */

        }, {
          key: "restoreRegistryMatches",
          value: function restoreRegistryMatches() {
            /** @type {?} */
            var target = this.matchMedia.registry;
            target.clear();
            this.originalRegistry.forEach(
            /**
            * @param {?} value
            * @param {?} key
            * @return {?}
            */
            function (value, key) {
              target.set(key, value);
            });
            this.originalRegistry.clear();
            this.hasCachedRegistryMatches = false;
          }
          /**
           * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
           * @private
           * @param {?} matches
           * @param {?} query
           * @return {?}
           */

        }, {
          key: "emitChangeEvent",
          value: function emitChangeEvent(matches, query) {
            this.matchMedia.source.next(new MediaChange(matches, query));
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "currentActivations",
          get: function get() {
            return this.matchMedia.activations;
          }
        }]);

        return MediaTrigger;
      }();

      MediaTrigger.ɵfac = function MediaTrigger_Factory(t) {
        return new (t || MediaTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };
      /** @nocollapse */


      MediaTrigger.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MediaTrigger_Factory() {
          return new MediaTrigger(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        },
        token: MediaTrigger,
        providedIn: "root"
      });
      /** @nocollapse */

      MediaTrigger.ctorParameters = function () {
        return [{
          type: BreakPointRegistry
        }, {
          type: MatchMedia
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LAYOUT_CONFIG]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: BreakPointRegistry
          }, {
            type: MatchMedia
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [LAYOUT_CONFIG]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-trigger/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/utils/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: utils/auto-prefixer.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Applies CSS prefixes to appropriate style keys.
       *
       * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
       *    {
       *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
       *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
       *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
       *      // display: -ms-flexbox;   TWEENER - IE 10
       *      // display: -moz-flexbox;  OLD - Firefox
       *    }
       * @param {?} target
       * @return {?}
       */


      function applyCssPrefixes(target) {
        for (var key in target) {
          /** @type {?} */
          var value = target[key] || '';

          switch (key) {
            case 'display':
              if (value === 'flex') {
                target['display'] = ['-webkit-flex', 'flex'];
              } else if (value === 'inline-flex') {
                target['display'] = ['-webkit-inline-flex', 'inline-flex'];
              } else {
                target['display'] = value;
              }

              break;

            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
              target['-webkit-' + key] = value;
              break;

            case 'flex-direction':
              value = value || 'row';
              target['-webkit-flex-direction'] = value;
              target['flex-direction'] = value;
              break;

            case 'order':
              target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
              break;
          }
        }

        return target;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/style-utils/style-utils.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var StyleUtils = /*#__PURE__*/function () {
        /**
         * @param {?} _serverStylesheet
         * @param {?} _serverModuleLoaded
         * @param {?} _platformId
         * @param {?} layoutConfig
         */
        function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
          _classCallCheck(this, StyleUtils);

          this._serverStylesheet = _serverStylesheet;
          this._serverModuleLoaded = _serverModuleLoaded;
          this._platformId = _platformId;
          this.layoutConfig = layoutConfig;
        }
        /**
         * Applies styles given via string pair or object map to the directive element
         * @param {?} element
         * @param {?} style
         * @param {?=} value
         * @return {?}
         */


        _createClass(StyleUtils, [{
          key: "applyStyleToElement",
          value: function applyStyleToElement(element, style) {
            var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            /** @type {?} */
            var styles = {};

            if (typeof style === 'string') {
              styles[style] = value;
              style = styles;
            }

            styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);

            this._applyMultiValueStyleToElement(styles, element);
          }
          /**
           * Applies styles given via string pair or object map to the directive's element
           * @param {?} style
           * @param {?=} elements
           * @return {?}
           */

        }, {
          key: "applyStyleToElements",
          value: function applyStyleToElements(style) {
            var _this41 = this;

            var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            /** @type {?} */
            var styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
            elements.forEach(
            /**
            * @param {?} el
            * @return {?}
            */
            function (el) {
              _this41._applyMultiValueStyleToElement(styles, el);
            });
          }
          /**
           * Determine the DOM element's Flexbox flow (flex-direction)
           *
           * Check inline style first then check computed (stylesheet) style
           * @param {?} target
           * @return {?}
           */

        }, {
          key: "getFlowDirection",
          value: function getFlowDirection(target) {
            /** @type {?} */
            var query = 'flex-direction';
            /** @type {?} */

            var value = this.lookupStyle(target, query);
            /** @type {?} */

            var hasInlineValue = this.lookupInlineStyle(target, query) || Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded ? value : '';
            return [value || 'row', hasInlineValue];
          }
          /**
           * @param {?} target
           * @return {?}
           */

        }, {
          key: "hasWrap",
          value: function hasWrap(target) {
            /** @type {?} */
            var query = 'flex-wrap';
            return this.lookupStyle(target, query) === 'wrap';
          }
          /**
           * Find the DOM element's raw attribute value (if any)
           * @param {?} element
           * @param {?} attribute
           * @return {?}
           */

        }, {
          key: "lookupAttributeValue",
          value: function lookupAttributeValue(element, attribute) {
            return element.getAttribute(attribute) || '';
          }
          /**
           * Find the DOM element's inline style value (if any)
           * @param {?} element
           * @param {?} styleName
           * @return {?}
           */

        }, {
          key: "lookupInlineStyle",
          value: function lookupInlineStyle(element, styleName) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ? element.style.getPropertyValue(styleName) : this._getServerStyle(element, styleName);
          }
          /**
           * Determine the inline or inherited CSS style
           * NOTE: platform-server has no implementation for getComputedStyle
           * @param {?} element
           * @param {?} styleName
           * @param {?=} inlineOnly
           * @return {?}
           */

        }, {
          key: "lookupStyle",
          value: function lookupStyle(element, styleName) {
            var inlineOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            /** @type {?} */
            var value = '';

            if (element) {
              /** @type {?} */
              var immediateValue = value = this.lookupInlineStyle(element, styleName);

              if (!immediateValue) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                  if (!inlineOnly) {
                    value = getComputedStyle(element).getPropertyValue(styleName);
                  }
                } else {
                  if (this._serverModuleLoaded) {
                    value = this._serverStylesheet.getStyleForElement(element, styleName);
                  }
                }
              }
            } // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
            //       in which case getComputedStyle() should determine a valid value.


            return value ? value.trim() : '';
          }
          /**
           * Applies the styles to the element. The styles object map may contain an array of values
           * Each value will be added as element style
           * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
           * @private
           * @param {?} styles
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_applyMultiValueStyleToElement",
          value: function _applyMultiValueStyleToElement(styles, element) {
            var _this42 = this;

            Object.keys(styles).sort().forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              /** @type {?} */
              var el = styles[key];
              /** @type {?} */

              var values = Array.isArray(el) ? el : [el];
              values.sort();

              var _iterator = _createForOfIteratorHelper(values),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;
                  value = value ? value + '' : '';

                  if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this42._platformId) || !_this42._serverModuleLoaded) {
                    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this42._platformId) ? element.style.setProperty(key, value) : _this42._setServerStyle(element, key, value);
                  } else {
                    _this42._serverStylesheet.addStyleToElement(element, key, value);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
          /**
           * @private
           * @param {?} element
           * @param {?} styleName
           * @param {?=} styleValue
           * @return {?}
           */

        }, {
          key: "_setServerStyle",
          value: function _setServerStyle(element, styleName, styleValue) {
            styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            /** @type {?} */

            var styleMap = this._readStyleAttribute(element);

            styleMap[styleName] = styleValue || '';

            this._writeStyleAttribute(element, styleMap);
          }
          /**
           * @private
           * @param {?} element
           * @param {?} styleName
           * @return {?}
           */

        }, {
          key: "_getServerStyle",
          value: function _getServerStyle(element, styleName) {
            /** @type {?} */
            var styleMap = this._readStyleAttribute(element);

            return styleMap[styleName] || '';
          }
          /**
           * @private
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_readStyleAttribute",
          value: function _readStyleAttribute(element) {
            /** @type {?} */
            var styleMap = {};
            /** @type {?} */

            var styleAttribute = element.getAttribute('style');

            if (styleAttribute) {
              /** @type {?} */
              var styleList = styleAttribute.split(/;+/g);

              for (var i = 0; i < styleList.length; i++) {
                /** @type {?} */
                var style = styleList[i].trim();

                if (style.length > 0) {
                  /** @type {?} */
                  var colonIndex = style.indexOf(':');

                  if (colonIndex === -1) {
                    throw new Error("Invalid CSS style: ".concat(style));
                  }
                  /** @type {?} */


                  var name = style.substr(0, colonIndex).trim();
                  styleMap[name] = style.substr(colonIndex + 1).trim();
                }
              }
            }

            return styleMap;
          }
          /**
           * @private
           * @param {?} element
           * @param {?} styleMap
           * @return {?}
           */

        }, {
          key: "_writeStyleAttribute",
          value: function _writeStyleAttribute(element, styleMap) {
            /** @type {?} */
            var styleAttrValue = '';

            for (var key in styleMap) {
              /** @type {?} */
              var newValue = styleMap[key];

              if (newValue) {
                styleAttrValue += key + ':' + styleMap[key] + ';';
              }
            }

            element.setAttribute('style', styleAttrValue);
          }
        }]);

        return StyleUtils;
      }();

      StyleUtils.ɵfac = function StyleUtils_Factory(t) {
        return new (t || StyleUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StylesheetMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG));
      };
      /** @nocollapse */


      StyleUtils.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function StyleUtils_Factory() {
          return new StyleUtils(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(StylesheetMap), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SERVER_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG));
        },
        token: StyleUtils,
        providedIn: "root"
      });
      /** @nocollapse */

      StyleUtils.ctorParameters = function () {
        return [{
          type: StylesheetMap
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SERVER_TOKEN]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LAYOUT_CONFIG]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleUtils, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: StylesheetMap
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [SERVER_TOKEN]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [LAYOUT_CONFIG]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/style-builder/style-builder.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * A class that encapsulates CSS style generation for common directives
       * @abstract
       */


      var StyleBuilder = /*#__PURE__*/function () {
        function StyleBuilder() {
          _classCallCheck(this, StyleBuilder);

          /**
           * Whether to cache the generated output styles
           */
          this.shouldCache = true;
        }
        /**
         * Run a side effect computation given the input string and the computed styles
         * from the build task and the host configuration object
         * NOTE: This should be a no-op unless an algorithm is provided in a subclass
         * @param {?} _input
         * @param {?} _styles
         * @param {?=} _parent
         * @return {?}
         */


        _createClass(StyleBuilder, [{
          key: "sideEffect",
          value: function sideEffect(_input, _styles, _parent) {}
        }]);

        return StyleBuilder;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/basis-validator/basis-validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The flex API permits 3 or 1 parts of the value:
       *    - `flex-grow flex-shrink flex-basis`, or
       *    - `flex-basis`
       * @param {?} basis
       * @param {?=} grow
       * @param {?=} shrink
       * @return {?}
       */


      function validateBasis(basis) {
        var grow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
        var shrink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1';

        /** @type {?} */
        var parts = [grow, shrink, basis];
        /** @type {?} */

        var j = basis.indexOf('calc');

        if (j > 0) {
          parts[2] = _validateCalcValue(basis.substring(j).trim());
          /** @type {?} */

          var matches = basis.substr(0, j).trim().split(' ');

          if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
          }
        } else if (j == 0) {
          parts[2] = _validateCalcValue(basis.trim());
        } else {
          /** @type {?} */
          var _matches = basis.split(' ');

          parts = _matches.length === 3 ? _matches : [grow, shrink, basis];
        }

        return parts;
      }
      /**
       * Calc expressions require whitespace before & after any expression operators
       * This is a simple, crude whitespace padding solution.
       *   - '3 3 calc(15em + 20px)'
       *   - calc(100% / 7 * 2)
       *   - 'calc(15em + 20px)'
       *   - 'calc(15em+20px)'
       *   - '37px'
       *   = '43%'
       * @param {?} calc
       * @return {?}
       */


      function _validateCalcValue(calc) {
        return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-marshaller/media-marshaller.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MediaMarshaller - register responsive values from directives and
       *                   trigger them based on media query events
       */


      var MediaMarshaller = /*#__PURE__*/function () {
        /**
         * @param {?} matchMedia
         * @param {?} breakpoints
         * @param {?} hook
         */
        function MediaMarshaller(matchMedia, breakpoints, hook) {
          _classCallCheck(this, MediaMarshaller);

          this.matchMedia = matchMedia;
          this.breakpoints = breakpoints;
          this.hook = hook;
          this.activatedBreakpoints = [];
          this.elementMap = new Map();
          this.elementKeyMap = new WeakMap();
          this.watcherMap = new WeakMap(); // special triggers to update elements
          // special triggers to update elements

          this.updateMap = new WeakMap(); // callback functions to update styles
          // callback functions to update styles

          this.clearMap = new WeakMap(); // callback functions to clear styles
          // callback functions to clear styles

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.observeActivations();
        }
        /**
         * @return {?}
         */


        _createClass(MediaMarshaller, [{
          key: "activatedAlias",
          get: function get() {
            return this.activatedBreakpoints[0] ? this.activatedBreakpoints[0].alias : '';
          }
          /**
           * Update styles on breakpoint activates or deactivates
           * @param {?} mc
           * @return {?}
           */

        }, {
          key: "onMediaChange",
          value: function onMediaChange(mc) {
            /** @type {?} */
            var bp = this.findByQuery(mc.mediaQuery);

            if (bp) {
              mc = mergeAlias(mc, bp);

              if (mc.matches && this.activatedBreakpoints.indexOf(bp) === -1) {
                this.activatedBreakpoints.push(bp);
                this.activatedBreakpoints.sort(sortDescendingPriority);
                this.updateStyles();
              } else if (!mc.matches && this.activatedBreakpoints.indexOf(bp) !== -1) {
                // Remove the breakpoint when it's deactivated
                this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(bp), 1);
                this.activatedBreakpoints.sort(sortDescendingPriority);
                this.updateStyles();
              }
            }
          }
          /**
           * initialize the marshaller with necessary elements for delegation on an element
           * @param {?} element
           * @param {?} key
           * @param {?=} updateFn optional callback so that custom bp directives don't have to re-provide this
           * @param {?=} clearFn optional callback so that custom bp directives don't have to re-provide this
           * @param {?=} extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
           * @return {?}
           */

        }, {
          key: "init",
          value: function init(element, key, updateFn, clearFn) {
            var extraTriggers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            initBuilderMap(this.updateMap, element, key, updateFn);
            initBuilderMap(this.clearMap, element, key, clearFn);
            this.buildElementKeyMap(element, key);
            this.watchExtraTriggers(element, key, extraTriggers);
          }
          /**
           * get the value for an element and key and optionally a given breakpoint
           * @param {?} element
           * @param {?} key
           * @param {?=} bp
           * @return {?}
           */

        }, {
          key: "getValue",
          value: function getValue(element, key, bp) {
            /** @type {?} */
            var bpMap = this.elementMap.get(element);

            if (bpMap) {
              /** @type {?} */
              var values = bp !== undefined ? bpMap.get(bp) : this.getActivatedValues(bpMap, key);

              if (values) {
                return values.get(key);
              }
            }

            return undefined;
          }
          /**
           * whether the element has values for a given key
           * @param {?} element
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "hasValue",
          value: function hasValue(element, key) {
            /** @type {?} */
            var bpMap = this.elementMap.get(element);

            if (bpMap) {
              /** @type {?} */
              var values = this.getActivatedValues(bpMap, key);

              if (values) {
                return values.get(key) !== undefined || false;
              }
            }

            return false;
          }
          /**
           * Set the value for an input on a directive
           * @param {?} element the element in question
           * @param {?} key the type of the directive (e.g. flex, layout-gap, etc)
           * @param {?} val the value for the breakpoint
           * @param {?} bp the breakpoint suffix (empty string = default)
           * @return {?}
           */

        }, {
          key: "setValue",
          value: function setValue(element, key, val, bp) {
            /** @type {?} */
            var bpMap = this.elementMap.get(element);

            if (!bpMap) {
              bpMap = new Map().set(bp, new Map().set(key, val));
              this.elementMap.set(element, bpMap);
            } else {
              /** @type {?} */
              var values = (bpMap.get(bp) || new Map()).set(key, val);
              bpMap.set(bp, values);
              this.elementMap.set(element, bpMap);
            }
            /** @type {?} */


            var value = this.getValue(element, key);

            if (value !== undefined) {
              this.updateElement(element, key, value);
            }
          }
          /**
           * Track element value changes for a specific key
           * @param {?} element
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "trackValue",
          value: function trackValue(element, key) {
            return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return v.element === element && v.key === key;
            }));
          }
          /**
           * update all styles for all elements on the current breakpoint
           * @return {?}
           */

        }, {
          key: "updateStyles",
          value: function updateStyles() {
            var _this43 = this;

            this.elementMap.forEach(
            /**
            * @param {?} bpMap
            * @param {?} el
            * @return {?}
            */
            function (bpMap, el) {
              /** @type {?} */
              var keyMap = new Set(
              /** @type {?} */
              _this43.elementKeyMap.get(el));
              /** @type {?} */

              var valueMap = _this43.getActivatedValues(bpMap);

              if (valueMap) {
                valueMap.forEach(
                /**
                * @param {?} v
                * @param {?} k
                * @return {?}
                */
                function (v, k) {
                  _this43.updateElement(el, k, v);

                  keyMap["delete"](k);
                });
              }

              keyMap.forEach(
              /**
              * @param {?} k
              * @return {?}
              */
              function (k) {
                valueMap = _this43.getActivatedValues(bpMap, k);

                if (valueMap) {
                  /** @type {?} */
                  var value = valueMap.get(k);

                  _this43.updateElement(el, k, value);
                } else {
                  _this43.clearElement(el, k);
                }
              });
            });
          }
          /**
           * clear the styles for a given element
           * @param {?} element
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "clearElement",
          value: function clearElement(element, key) {
            /** @type {?} */
            var builders = this.clearMap.get(element);

            if (builders) {
              /** @type {?} */
              var clearFn =
              /** @type {?} */
              builders.get(key);

              if (!!clearFn) {
                clearFn();
                this.subject.next({
                  element: element,
                  key: key,
                  value: ''
                });
              }
            }
          }
          /**
           * update a given element with the activated values for a given key
           * @param {?} element
           * @param {?} key
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateElement",
          value: function updateElement(element, key, value) {
            /** @type {?} */
            var builders = this.updateMap.get(element);

            if (builders) {
              /** @type {?} */
              var updateFn =
              /** @type {?} */
              builders.get(key);

              if (!!updateFn) {
                updateFn(value);
                this.subject.next({
                  element: element,
                  key: key,
                  value: value
                });
              }
            }
          }
          /**
           * release all references to a given element
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "releaseElement",
          value: function releaseElement(element) {
            /** @type {?} */
            var watcherMap = this.watcherMap.get(element);

            if (watcherMap) {
              watcherMap.forEach(
              /**
              * @param {?} s
              * @return {?}
              */
              function (s) {
                return s.unsubscribe();
              });
              this.watcherMap["delete"](element);
            }
            /** @type {?} */


            var elementMap = this.elementMap.get(element);

            if (elementMap) {
              elementMap.forEach(
              /**
              * @param {?} _
              * @param {?} s
              * @return {?}
              */
              function (_, s) {
                return elementMap["delete"](s);
              });
              this.elementMap["delete"](element);
            }
          }
          /**
           * trigger an update for a given element and key (e.g. layout)
           * @param {?} element
           * @param {?=} key
           * @return {?}
           */

        }, {
          key: "triggerUpdate",
          value: function triggerUpdate(element, key) {
            var _this44 = this;

            /** @type {?} */
            var bpMap = this.elementMap.get(element);

            if (bpMap) {
              /** @type {?} */
              var valueMap = this.getActivatedValues(bpMap, key);

              if (valueMap) {
                if (key) {
                  this.updateElement(element, key, valueMap.get(key));
                } else {
                  valueMap.forEach(
                  /**
                  * @param {?} v
                  * @param {?} k
                  * @return {?}
                  */
                  function (v, k) {
                    return _this44.updateElement(element, k, v);
                  });
                }
              }
            }
          }
          /**
           * Cross-reference for HTMLElement with directive key
           * @private
           * @param {?} element
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "buildElementKeyMap",
          value: function buildElementKeyMap(element, key) {
            /** @type {?} */
            var keyMap = this.elementKeyMap.get(element);

            if (!keyMap) {
              keyMap = new Set();
              this.elementKeyMap.set(element, keyMap);
            }

            keyMap.add(key);
          }
          /**
           * Other triggers that should force style updates:
           * - directionality
           * - layout changes
           * - mutationobserver updates
           * @private
           * @param {?} element
           * @param {?} key
           * @param {?} triggers
           * @return {?}
           */

        }, {
          key: "watchExtraTriggers",
          value: function watchExtraTriggers(element, key, triggers) {
            var _this45 = this;

            if (triggers && triggers.length) {
              /** @type {?} */
              var watchers = this.watcherMap.get(element);

              if (!watchers) {
                watchers = new Map();
                this.watcherMap.set(element, watchers);
              }
              /** @type {?} */


              var subscription = watchers.get(key);

              if (!subscription) {
                /** @type {?} */
                var newSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray(triggers)).subscribe(
                /**
                * @return {?}
                */
                function () {
                  /** @type {?} */
                  var currentValue = _this45.getValue(element, key);

                  _this45.updateElement(element, key, currentValue);
                });
                watchers.set(key, newSubscription);
              }
            }
          }
          /**
           * Breakpoint locator by mediaQuery
           * @private
           * @param {?} query
           * @return {?}
           */

        }, {
          key: "findByQuery",
          value: function findByQuery(query) {
            return this.breakpoints.findByQuery(query);
          }
          /**
           * get the fallback breakpoint for a given element, starting with the current breakpoint
           * @private
           * @param {?} bpMap
           * @param {?=} key
           * @return {?}
           */

        }, {
          key: "getActivatedValues",
          value: function getActivatedValues(bpMap, key) {
            for (var i = 0; i < this.activatedBreakpoints.length; i++) {
              /** @type {?} */
              var activatedBp = this.activatedBreakpoints[i];
              /** @type {?} */

              var valueMap = bpMap.get(activatedBp.alias);

              if (valueMap) {
                if (key === undefined || valueMap.has(key) && valueMap.get(key) != null) {
                  return valueMap;
                }
              }
            }
            /** @type {?} */


            var lastHope = bpMap.get('');
            return key === undefined || lastHope && lastHope.has(key) ? lastHope : undefined;
          }
          /**
           * Watch for mediaQuery breakpoint activations
           * @private
           * @return {?}
           */

        }, {
          key: "observeActivations",
          value: function observeActivations() {
            /** @type {?} */
            var target =
            /** @type {?} */

            /** @type {?} */
            this;
            /** @type {?} */

            var queries = this.breakpoints.items.map(
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return bp.mediaQuery;
            });
            this.matchMedia.observe(this.hook.withPrintQuery(queries)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.hook.interceptEvents(target)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this));
          }
        }]);

        return MediaMarshaller;
      }();

      MediaMarshaller.ɵfac = function MediaMarshaller_Factory(t) {
        return new (t || MediaMarshaller)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrintHook));
      };
      /** @nocollapse */


      MediaMarshaller.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MediaMarshaller_Factory() {
          return new MediaMarshaller(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PrintHook));
        },
        token: MediaMarshaller,
        providedIn: "root"
      });
      /** @nocollapse */

      MediaMarshaller.ctorParameters = function () {
        return [{
          type: MatchMedia
        }, {
          type: BreakPointRegistry
        }, {
          type: PrintHook
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMarshaller, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: MatchMedia
          }, {
            type: BreakPointRegistry
          }, {
            type: PrintHook
          }];
        }, null);
      })();
      /**
       * @param {?} map
       * @param {?} element
       * @param {?} key
       * @param {?=} input
       * @return {?}
       */


      function initBuilderMap(map$$1, element, key, input) {
        if (input !== undefined) {
          /** @type {?} */
          var oldMap = map$$1.get(element);

          if (!oldMap) {
            oldMap = new Map();
            map$$1.set(element, oldMap);
          }

          oldMap.set(key, input);
        }
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=core.js.map

      /***/

    },

    /***/
    "znSr":
    /*!****************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js ***!
      \****************************************************************************/

    /*! exports provided: ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective */

    /***/
    function znSr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtendedModule", function () {
        return ExtendedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassDirective", function () {
        return ClassDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function () {
        return DefaultClassDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function () {
        return ImgSrcStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function () {
        return ImgSrcDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function () {
        return DefaultImgSrcDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function () {
        return ShowHideStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
        return ShowHideDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function () {
        return DefaultShowHideDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleDirective", function () {
        return StyleDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function () {
        return DefaultStyleDirective;
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


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: extended/img-src/img-src.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ImgSrcStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_17) {
        _inherits(ImgSrcStyleBuilder, _angular_flex_layout_17);

        var _super25 = _createSuper(ImgSrcStyleBuilder);

        function ImgSrcStyleBuilder() {
          _classCallCheck(this, ImgSrcStyleBuilder);

          return _super25.apply(this, arguments);
        }

        _createClass(ImgSrcStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} url
           * @return {?}
           */
          function buildStyles(url) {
            return {
              'content': url ? "url(".concat(url, ")") : ''
            };
          }
        }]);

        return ImgSrcStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]);

      ImgSrcStyleBuilder.ɵfac = function ImgSrcStyleBuilder_Factory(t) {
        return ɵImgSrcStyleBuilder_BaseFactory(t || ImgSrcStyleBuilder);
      };
      /** @nocollapse */


      ImgSrcStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ImgSrcStyleBuilder_Factory() {
          return new ImgSrcStyleBuilder();
        },
        token: ImgSrcStyleBuilder,
        providedIn: "root"
      });

      var ɵImgSrcStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ImgSrcStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgSrcStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var ImgSrcDirective = /*#__PURE__*/function (_angular_flex_layout_18) {
        _inherits(ImgSrcDirective, _angular_flex_layout_18);

        var _super26 = _createSuper(ImgSrcDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         * @param {?} platformId
         * @param {?} serverModuleLoaded
         */
        function ImgSrcDirective(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
          var _this46;

          _classCallCheck(this, ImgSrcDirective);

          _this46 = _super26.call(this, elementRef, styleBuilder, styler, marshal);
          _this46.platformId = platformId;
          _this46.serverModuleLoaded = serverModuleLoaded;
          _this46.DIRECTIVE_KEY = 'img-src';
          _this46.defaultSrc = '';
          _this46.styleCache = imgSrcCache;

          _this46.init();

          _this46.setValue(_this46.nativeElement.getAttribute('src') || '', '');

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(_this46.platformId) && _this46.serverModuleLoaded) {
            _this46.nativeElement.setAttribute('src', '');
          }

          return _this46;
        }
        /**
         * @param {?} val
         * @return {?}
         */


        _createClass(ImgSrcDirective, [{
          key: "src",
          set: function set(val) {
            this.defaultSrc = val;
            this.setValue(this.defaultSrc, '');
          }
          /**
           * Use the [responsively] activated input value to update
           * the host img src attribute or assign a default `img.src=''`
           * if the src has not been defined.
           *
           * Do nothing to standard `<img src="">` usages, only when responsive
           * keys are present do we actually call `setAttribute()`
           * @protected
           * @param {?=} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            /** @type {?} */
            var url = value || this.defaultSrc;

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
              this.addStyles(url);
            } else {
              this.nativeElement.setAttribute('src', url);
            }
          }
        }]);

        return ImgSrcDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

      ImgSrcDirective.ɵfac = function ImgSrcDirective_Factory(t) {
        return new (t || ImgSrcDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ImgSrcStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]));
      };

      ImgSrcDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ImgSrcDirective,
        inputs: {
          src: "src"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      ImgSrcDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ImgSrcStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }];
      };

      ImgSrcDirective.propDecorators = {
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['src']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgSrcDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ImgSrcStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
            }]
          }];
        }, {
          src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['src']
          }]
        });
      })();
      /** @type {?} */


      var imgSrcCache = new Map();
      /** @type {?} */

      var inputs = ['src.xs', 'src.sm', 'src.md', 'src.lg', 'src.xl', 'src.lt-sm', 'src.lt-md', 'src.lt-lg', 'src.lt-xl', 'src.gt-xs', 'src.gt-sm', 'src.gt-md', 'src.gt-lg'];
      /** @type {?} */

      var selector = "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n";
      /**
       * This directive provides a responsive API for the HTML <img> 'src' attribute
       * and will update the img.src property upon each responsive activation.
       *
       * e.g.
       *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
       *
       * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
       */

      var DefaultImgSrcDirective = /*#__PURE__*/function (_ImgSrcDirective) {
        _inherits(DefaultImgSrcDirective, _ImgSrcDirective);

        var _super27 = _createSuper(DefaultImgSrcDirective);

        function DefaultImgSrcDirective() {
          var _this47;

          _classCallCheck(this, DefaultImgSrcDirective);

          _this47 = _super27.apply(this, arguments);
          _this47.inputs = inputs;
          return _this47;
        }

        return _createClass(DefaultImgSrcDirective);
      }(ImgSrcDirective);

      DefaultImgSrcDirective.ɵfac = function DefaultImgSrcDirective_Factory(t) {
        return ɵDefaultImgSrcDirective_BaseFactory(t || DefaultImgSrcDirective);
      };

      DefaultImgSrcDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultImgSrcDirective,
        selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]],
        inputs: {
          "src.xs": "src.xs",
          "src.sm": "src.sm",
          "src.md": "src.md",
          "src.lg": "src.lg",
          "src.xl": "src.xl",
          "src.lt-sm": "src.lt-sm",
          "src.lt-md": "src.lt-md",
          "src.lt-lg": "src.lt-lg",
          "src.lt-xl": "src.lt-xl",
          "src.gt-xs": "src.gt-xs",
          "src.gt-sm": "src.gt-sm",
          "src.gt-md": "src.gt-md",
          "src.gt-lg": "src.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultImgSrcDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultImgSrcDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultImgSrcDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector,
            inputs: inputs
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/class/class.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ClassDirective = /*#__PURE__*/function (_angular_flex_layout_19) {
        _inherits(ClassDirective, _angular_flex_layout_19);

        var _super28 = _createSuper(ClassDirective);

        /**
         * @param {?} elementRef
         * @param {?} styler
         * @param {?} marshal
         * @param {?} iterableDiffers
         * @param {?} keyValueDiffers
         * @param {?} renderer2
         * @param {?} ngClassInstance
         */
        function ClassDirective(elementRef, styler, marshal, iterableDiffers, keyValueDiffers, renderer2, ngClassInstance) {
          var _this48;

          _classCallCheck(this, ClassDirective);

          _this48 = _super28.call(this, elementRef,
          /** @type {?} */
          null, styler, marshal);
          _this48.ngClassInstance = ngClassInstance;
          _this48.DIRECTIVE_KEY = 'ngClass';

          if (!_this48.ngClassInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
            // the same host element; since the responsive variations may be defined...
            _this48.ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"](iterableDiffers, keyValueDiffers, elementRef, renderer2);
          }

          _this48.init();

          _this48.setValue('', '');

          return _this48;
        }
        /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         * @param {?} val
         * @return {?}
         */


        _createClass(ClassDirective, [{
          key: "klass",
          set: function set(val) {
            this.ngClassInstance.klass = val;
            this.setValue(val, '');
          }
          /**
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            this.ngClassInstance.ngClass = value;
            this.ngClassInstance.ngDoCheck();
          } // ******************************************************************
          // Lifecycle Hooks
          // ******************************************************************

          /**
           * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.ngClassInstance.ngDoCheck();
          }
        }]);

        return ClassDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

      ClassDirective.ɵfac = function ClassDirective_Factory(t) {
        return new (t || ClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], 10));
      };

      ClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ClassDirective,
        inputs: {
          klass: ["class", "klass"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      ClassDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };

      ClassDirective.propDecorators = {
        klass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['class']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, {
          klass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['class']
          }]
        });
      })();
      /** @type {?} */


      var inputs$1 = ['ngClass', 'ngClass.xs', 'ngClass.sm', 'ngClass.md', 'ngClass.lg', 'ngClass.xl', 'ngClass.lt-sm', 'ngClass.lt-md', 'ngClass.lt-lg', 'ngClass.lt-xl', 'ngClass.gt-xs', 'ngClass.gt-sm', 'ngClass.gt-md', 'ngClass.gt-lg'];
      /** @type {?} */

      var selector$1 = "\n  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n";
      /**
       * Directive to add responsive support for ngClass.
       * This maintains the core functionality of 'ngClass' and adds responsive API
       * Note: this class is a no-op when rendered on the server
       */

      var DefaultClassDirective = /*#__PURE__*/function (_ClassDirective) {
        _inherits(DefaultClassDirective, _ClassDirective);

        var _super29 = _createSuper(DefaultClassDirective);

        function DefaultClassDirective() {
          var _this49;

          _classCallCheck(this, DefaultClassDirective);

          _this49 = _super29.apply(this, arguments);
          _this49.inputs = inputs$1;
          return _this49;
        }

        return _createClass(DefaultClassDirective);
      }(ClassDirective);

      DefaultClassDirective.ɵfac = function DefaultClassDirective_Factory(t) {
        return ɵDefaultClassDirective_BaseFactory(t || DefaultClassDirective);
      };

      DefaultClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultClassDirective,
        selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]],
        inputs: {
          ngClass: "ngClass",
          "ngClass.xs": "ngClass.xs",
          "ngClass.sm": "ngClass.sm",
          "ngClass.md": "ngClass.md",
          "ngClass.lg": "ngClass.lg",
          "ngClass.xl": "ngClass.xl",
          "ngClass.lt-sm": "ngClass.lt-sm",
          "ngClass.lt-md": "ngClass.lt-md",
          "ngClass.lt-lg": "ngClass.lt-lg",
          "ngClass.lt-xl": "ngClass.lt-xl",
          "ngClass.gt-xs": "ngClass.gt-xs",
          "ngClass.gt-sm": "ngClass.gt-sm",
          "ngClass.gt-md": "ngClass.gt-md",
          "ngClass.gt-lg": "ngClass.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultClassDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultClassDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultClassDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$1,
            inputs: inputs$1
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/show-hide/show-hide.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ShowHideStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_20) {
        _inherits(ShowHideStyleBuilder, _angular_flex_layout_20);

        var _super30 = _createSuper(ShowHideStyleBuilder);

        function ShowHideStyleBuilder() {
          _classCallCheck(this, ShowHideStyleBuilder);

          return _super30.apply(this, arguments);
        }

        _createClass(ShowHideStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} show
           * @param {?} parent
           * @return {?}
           */
          function buildStyles(show, parent) {
            /** @type {?} */
            var shouldShow = show === 'true';
            return {
              'display': shouldShow ? parent.display || (parent.isServer ? 'initial' : '') : 'none'
            };
          }
        }]);

        return ShowHideStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]);

      ShowHideStyleBuilder.ɵfac = function ShowHideStyleBuilder_Factory(t) {
        return ɵShowHideStyleBuilder_BaseFactory(t || ShowHideStyleBuilder);
      };
      /** @nocollapse */


      ShowHideStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ShowHideStyleBuilder_Factory() {
          return new ShowHideStyleBuilder();
        },
        token: ShowHideStyleBuilder,
        providedIn: "root"
      });

      var ɵShowHideStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ShowHideStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowHideStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var ShowHideDirective = /*#__PURE__*/function (_angular_flex_layout_21) {
        _inherits(ShowHideDirective, _angular_flex_layout_21);

        var _super31 = _createSuper(ShowHideDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         * @param {?} layoutConfig
         * @param {?} platformId
         * @param {?} serverModuleLoaded
         */
        function ShowHideDirective(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
          var _this50;

          _classCallCheck(this, ShowHideDirective);

          _this50 = _super31.call(this, elementRef, styleBuilder, styler, marshal);
          _this50.layoutConfig = layoutConfig;
          _this50.platformId = platformId;
          _this50.serverModuleLoaded = serverModuleLoaded;
          _this50.DIRECTIVE_KEY = 'show-hide';
          /**
           * Original DOM Element CSS display style
           */

          _this50.display = '';
          _this50.hasLayout = false;
          _this50.hasFlexChild = false;
          return _this50;
        } // *********************************************
        // Lifecycle Methods
        // *********************************************

        /**
         * @return {?}
         */


        _createClass(ShowHideDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.trackExtraTriggers();
            /** @type {?} */

            var children = Array.from(this.nativeElement.children);

            for (var i = 0; i < children.length; i++) {
              if (this.marshal.hasValue(
              /** @type {?} */
              children[i], 'flex')) {
                this.hasFlexChild = true;
                break;
              }
            }

            if (DISPLAY_MAP.has(this.nativeElement)) {
              this.display =
              /** @type {?} */
              DISPLAY_MAP.get(this.nativeElement);
            } else {
              this.display = this.getDisplayStyle();
              DISPLAY_MAP.set(this.nativeElement, this.display);
            }

            this.init(); // set the default to show unless explicitly overridden

            /** @type {?} */

            var defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, '');

            if (defaultValue === undefined || defaultValue === '') {
              this.setValue(true, '');
            } else {
              this.triggerUpdate();
            }
          }
          /**
           * On changes to any \@Input properties...
           * Default to use the non-responsive Input value ('fxShow')
           * Then conditionally override with the mq-activated Input's current value
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this51 = this;

            Object.keys(changes).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              if (_this51.inputs.indexOf(key) !== -1) {
                /** @type {?} */
                var inputKey = key.split('.');
                /** @type {?} */

                var bp = inputKey.slice(1).join('.');
                /** @type {?} */

                var inputValue = changes[key].currentValue;
                /** @type {?} */

                var shouldShow = inputValue !== '' ? inputValue !== 0 ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(inputValue) : false : true;

                if (inputKey[0] === 'fxHide') {
                  shouldShow = !shouldShow;
                }

                _this51.setValue(shouldShow, bp);
              }
            });
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           *  Watch for these extra triggers to update fxShow, fxHide stylings
           * @protected
           * @return {?}
           */

        }, {
          key: "trackExtraTriggers",
          value: function trackExtraTriggers() {
            var _this52 = this;

            this.hasLayout = this.marshal.hasValue(this.nativeElement, 'layout');
            ['layout', 'layout-align'].forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              _this52.marshal.trackValue(_this52.nativeElement, key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this52.destroySubject)).subscribe(_this52.triggerUpdate.bind(_this52));
            });
          }
          /**
           * Override accessor to the current HTMLElement's `display` style
           * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
           * unless it was already explicitly specified inline or in a CSS stylesheet.
           * @protected
           * @return {?}
           */

        }, {
          key: "getDisplayStyle",
          value: function getDisplayStyle() {
            return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? 'flex' : this.styler.lookupStyle(this.nativeElement, 'display', true);
          }
          /**
           * Validate the visibility value and then update the host's inline display style
           * @protected
           * @param {?=} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (value === '') {
              return;
            }
            /** @type {?} */


            var isServer = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId);
            this.addStyles(value ? 'true' : 'false', {
              display: this.display,
              isServer: isServer
            });

            if (isServer && this.serverModuleLoaded) {
              this.nativeElement.style.setProperty('display', '');
            }

            this.marshal.triggerUpdate(
            /** @type {?} */
            this.parentElement, 'layout-gap');
          }
        }]);

        return ShowHideDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

      ShowHideDirective.ɵfac = function ShowHideDirective_Factory(t) {
        return new (t || ShowHideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ShowHideStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]));
      };

      ShowHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ShowHideDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      ShowHideDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ShowHideStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowHideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ShowHideStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
            }]
          }];
        }, null);
      })();
      /** @type {?} */


      var DISPLAY_MAP = new WeakMap();
      /** @type {?} */

      var inputs$2 = ['fxShow', 'fxShow.print', 'fxShow.xs', 'fxShow.sm', 'fxShow.md', 'fxShow.lg', 'fxShow.xl', 'fxShow.lt-sm', 'fxShow.lt-md', 'fxShow.lt-lg', 'fxShow.lt-xl', 'fxShow.gt-xs', 'fxShow.gt-sm', 'fxShow.gt-md', 'fxShow.gt-lg', 'fxHide', 'fxHide.print', 'fxHide.xs', 'fxHide.sm', 'fxHide.md', 'fxHide.lg', 'fxHide.xl', 'fxHide.lt-sm', 'fxHide.lt-md', 'fxHide.lt-lg', 'fxHide.lt-xl', 'fxHide.gt-xs', 'fxHide.gt-sm', 'fxHide.gt-md', 'fxHide.gt-lg'];
      /** @type {?} */

      var selector$2 = "\n  [fxShow], [fxShow.print],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide], [fxHide.print],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n";
      /**
       * 'show' Layout API directive
       */

      var DefaultShowHideDirective = /*#__PURE__*/function (_ShowHideDirective) {
        _inherits(DefaultShowHideDirective, _ShowHideDirective);

        var _super32 = _createSuper(DefaultShowHideDirective);

        function DefaultShowHideDirective() {
          var _this53;

          _classCallCheck(this, DefaultShowHideDirective);

          _this53 = _super32.apply(this, arguments);
          _this53.inputs = inputs$2;
          return _this53;
        }

        return _createClass(DefaultShowHideDirective);
      }(ShowHideDirective);

      DefaultShowHideDirective.ɵfac = function DefaultShowHideDirective_Factory(t) {
        return ɵDefaultShowHideDirective_BaseFactory(t || DefaultShowHideDirective);
      };

      DefaultShowHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultShowHideDirective,
        selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]],
        inputs: {
          fxShow: "fxShow",
          "fxShow.print": "fxShow.print",
          "fxShow.xs": "fxShow.xs",
          "fxShow.sm": "fxShow.sm",
          "fxShow.md": "fxShow.md",
          "fxShow.lg": "fxShow.lg",
          "fxShow.xl": "fxShow.xl",
          "fxShow.lt-sm": "fxShow.lt-sm",
          "fxShow.lt-md": "fxShow.lt-md",
          "fxShow.lt-lg": "fxShow.lt-lg",
          "fxShow.lt-xl": "fxShow.lt-xl",
          "fxShow.gt-xs": "fxShow.gt-xs",
          "fxShow.gt-sm": "fxShow.gt-sm",
          "fxShow.gt-md": "fxShow.gt-md",
          "fxShow.gt-lg": "fxShow.gt-lg",
          fxHide: "fxHide",
          "fxHide.print": "fxHide.print",
          "fxHide.xs": "fxHide.xs",
          "fxHide.sm": "fxHide.sm",
          "fxHide.md": "fxHide.md",
          "fxHide.lg": "fxHide.lg",
          "fxHide.xl": "fxHide.xl",
          "fxHide.lt-sm": "fxHide.lt-sm",
          "fxHide.lt-md": "fxHide.lt-md",
          "fxHide.lt-lg": "fxHide.lt-lg",
          "fxHide.lt-xl": "fxHide.lt-xl",
          "fxHide.gt-xs": "fxHide.gt-xs",
          "fxHide.gt-sm": "fxHide.gt-sm",
          "fxHide.gt-md": "fxHide.gt-md",
          "fxHide.gt-lg": "fxHide.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultShowHideDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultShowHideDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultShowHideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$2,
            inputs: inputs$2
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/style/style-transforms.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * NgStyle allowed inputs
       */


      var NgStyleKeyValue = /*#__PURE__*/_createClass(
      /**
       * @param {?} key
       * @param {?} value
       * @param {?=} noQuotes
       */
      function NgStyleKeyValue(key, value) {
        var noQuotes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, NgStyleKeyValue);

        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
      });
      /**
       * @param {?} target
       * @return {?}
       */


      function getType(target) {
        /** @type {?} */
        var what = typeof target;

        if (what === 'object') {
          return target.constructor === Array ? 'array' : target.constructor === Set ? 'set' : 'object';
        }

        return what;
      }
      /**
       * Split string of key:value pairs into Array of k-v pairs
       * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
       * @param {?} source
       * @param {?=} delimiter
       * @return {?}
       */


      function buildRawList(source) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ';';
        return String(source).trim().split(delimiter).map(
        /**
        * @param {?} val
        * @return {?}
        */
        function (val) {
          return val.trim();
        }).filter(
        /**
        * @param {?} val
        * @return {?}
        */
        function (val) {
          return val !== '';
        });
      }
      /**
       * Convert array of key:value strings to a iterable map object
       * @param {?} styles
       * @param {?=} sanitize
       * @return {?}
       */


      function buildMapFromList(styles, sanitize) {
        /** @type {?} */
        var sanitizeValue =
        /**
        * @param {?} it
        * @return {?}
        */
        function sanitizeValue(it) {
          if (sanitize) {
            it.value = sanitize(it.value);
          }

          return it;
        };

        return styles.map(stringToKeyValue).filter(
        /**
        * @param {?} entry
        * @return {?}
        */
        function (entry) {
          return !!entry;
        }).map(sanitizeValue).reduce(keyValuesToMap,
        /** @type {?} */
        {});
      }
      /**
       * Convert Set<string> or raw Object to an iterable NgStyleMap
       * @param {?} source
       * @param {?=} sanitize
       * @return {?}
       */


      function buildMapFromSet(source, sanitize) {
        /** @type {?} */
        var list = [];

        if (getType(source) === 'set') {
          /** @type {?} */
          source.forEach(
          /**
          * @param {?} entry
          * @return {?}
          */
          function (entry) {
            return list.push(entry);
          });
        } else {
          Object.keys(source).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            list.push("".concat(key, ":").concat(
            /** @type {?} */
            source[key]));
          });
        }

        return buildMapFromList(list, sanitize);
      }
      /**
       * Convert 'key:value' -> [key, value]
       * @param {?} it
       * @return {?}
       */


      function stringToKeyValue(it) {
        var _it$split = it.split(':'),
            _it$split2 = _toArray(_it$split),
            key = _it$split2[0],
            vals = _it$split2.slice(1);

        return new NgStyleKeyValue(key, vals.join(':'));
      }
      /**
       * Convert [ [key,value] ] -> { key : value }
       * @param {?} map
       * @param {?} entry
       * @return {?}
       */


      function keyValuesToMap(map, entry) {
        if (!!entry.key) {
          map[entry.key] = entry.value;
        }

        return map;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/style/style.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var StyleDirective = /*#__PURE__*/function (_angular_flex_layout_22) {
        _inherits(StyleDirective, _angular_flex_layout_22);

        var _super33 = _createSuper(StyleDirective);

        /**
         * @param {?} elementRef
         * @param {?} styler
         * @param {?} marshal
         * @param {?} sanitizer
         * @param {?} differs
         * @param {?} renderer2
         * @param {?} ngStyleInstance
         * @param {?} serverLoaded
         * @param {?} platformId
         */
        function StyleDirective(elementRef, styler, marshal, sanitizer, differs, renderer2, ngStyleInstance, serverLoaded, platformId) {
          var _this54;

          _classCallCheck(this, StyleDirective);

          _this54 = _super33.call(this, elementRef,
          /** @type {?} */
          null, styler, marshal);
          _this54.sanitizer = sanitizer;
          _this54.ngStyleInstance = ngStyleInstance;
          _this54.DIRECTIVE_KEY = 'ngStyle';

          if (!_this54.ngStyleInstance) {
            // Create an instance NgStyle Directive instance only if `ngStyle=""` has NOT been
            // defined on the same host element; since the responsive variations may be defined...
            _this54.ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"](elementRef, differs, renderer2);
          }

          _this54.init();
          /** @type {?} */


          var styles = _this54.nativeElement.getAttribute('style') || '';
          _this54.fallbackStyles = _this54.buildStyleMap(styles);
          _this54.isServer = serverLoaded && Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId);
          return _this54;
        }
        /**
         * Add generated styles
         * @protected
         * @param {?} value
         * @return {?}
         */


        _createClass(StyleDirective, [{
          key: "updateWithValue",
          value: function updateWithValue(value) {
            /** @type {?} */
            var styles = this.buildStyleMap(value);
            this.ngStyleInstance.ngStyle = Object.assign(Object.assign({}, this.fallbackStyles), styles);

            if (this.isServer) {
              this.applyStyleToElement(styles);
            }

            this.ngStyleInstance.ngDoCheck();
          }
          /**
           * Remove generated styles
           * @protected
           * @return {?}
           */

        }, {
          key: "clearStyles",
          value: function clearStyles() {
            this.ngStyleInstance.ngStyle = this.fallbackStyles;
            this.ngStyleInstance.ngDoCheck();
          }
          /**
           * Convert raw strings to ngStyleMap; which is required by ngStyle
           * NOTE: Raw string key-value pairs MUST be delimited by `;`
           *       Comma-delimiters are not supported due to complexities of
           *       possible style values such as `rgba(x,x,x,x)` and others
           * @protected
           * @param {?} styles
           * @return {?}
           */

        }, {
          key: "buildStyleMap",
          value: function buildStyleMap(styles) {
            var _this55 = this;

            // Always safe-guard (aka sanitize) style property values

            /** @type {?} */
            var sanitizer =
            /**
            * @param {?} val
            * @return {?}
            */
            function sanitizer(val) {
              return _this55.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].STYLE, val) || '';
            };

            if (styles) {
              switch (getType(styles)) {
                case 'string':
                  return buildMapFromList$1(buildRawList(styles), sanitizer);

                case 'array':
                  return buildMapFromList$1(
                  /** @type {?} */
                  styles, sanitizer);

                case 'set':
                  return buildMapFromSet(styles, sanitizer);

                default:
                  return buildMapFromSet(styles, sanitizer);
              }
            }

            return {};
          } // ******************************************************************
          // Lifecycle Hooks
          // ******************************************************************

          /**
           * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.ngStyleInstance.ngDoCheck();
          }
        }]);

        return StyleDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

      StyleDirective.ɵfac = function StyleDirective_Factory(t) {
        return new (t || StyleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      StyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: StyleDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      StyleDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /** @type {?} */


      var inputs$3 = ['ngStyle', 'ngStyle.xs', 'ngStyle.sm', 'ngStyle.md', 'ngStyle.lg', 'ngStyle.xl', 'ngStyle.lt-sm', 'ngStyle.lt-md', 'ngStyle.lt-lg', 'ngStyle.lt-xl', 'ngStyle.gt-xs', 'ngStyle.gt-sm', 'ngStyle.gt-md', 'ngStyle.gt-lg'];
      /** @type {?} */

      var selector$3 = "\n  [ngStyle],\n  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n";
      /**
       * Directive to add responsive support for ngStyle.
       *
       */

      var DefaultStyleDirective = /*#__PURE__*/function (_StyleDirective) {
        _inherits(DefaultStyleDirective, _StyleDirective);

        var _super34 = _createSuper(DefaultStyleDirective);

        function DefaultStyleDirective() {
          var _this56;

          _classCallCheck(this, DefaultStyleDirective);

          _this56 = _super34.apply(this, arguments);
          _this56.inputs = inputs$3;
          return _this56;
        }

        return _createClass(DefaultStyleDirective);
      }(StyleDirective);

      DefaultStyleDirective.ɵfac = function DefaultStyleDirective_Factory(t) {
        return ɵDefaultStyleDirective_BaseFactory(t || DefaultStyleDirective);
      };

      DefaultStyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultStyleDirective,
        selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]],
        inputs: {
          ngStyle: "ngStyle",
          "ngStyle.xs": "ngStyle.xs",
          "ngStyle.sm": "ngStyle.sm",
          "ngStyle.md": "ngStyle.md",
          "ngStyle.lg": "ngStyle.lg",
          "ngStyle.xl": "ngStyle.xl",
          "ngStyle.lt-sm": "ngStyle.lt-sm",
          "ngStyle.lt-md": "ngStyle.lt-md",
          "ngStyle.lt-lg": "ngStyle.lt-lg",
          "ngStyle.lt-xl": "ngStyle.lt-xl",
          "ngStyle.gt-xs": "ngStyle.gt-xs",
          "ngStyle.gt-sm": "ngStyle.gt-sm",
          "ngStyle.gt-md": "ngStyle.gt-md",
          "ngStyle.gt-lg": "ngStyle.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultStyleDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultStyleDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultStyleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$3,
            inputs: inputs$3
          }]
        }], null, null);
      })();
      /**
       * Build a styles map from a list of styles, while sanitizing bad values first
       * @param {?} styles
       * @param {?=} sanitize
       * @return {?}
       */


      function buildMapFromList$1(styles, sanitize) {
        /** @type {?} */
        var sanitizeValue =
        /**
        * @param {?} it
        * @return {?}
        */
        function sanitizeValue(it) {
          if (sanitize) {
            it.value = sanitize(it.value);
          }

          return it;
        };

        return styles.map(stringToKeyValue).filter(
        /**
        * @param {?} entry
        * @return {?}
        */
        function (entry) {
          return !!entry;
        }).map(sanitizeValue).reduce(keyValuesToMap,
        /** @type {?} */
        {});
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ALL_DIRECTIVES = [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
      /**
       * *****************************************************************
       * Define module for the Extended API
       * *****************************************************************
       */

      var ExtendedModule = /*#__PURE__*/_createClass(function ExtendedModule() {
        _classCallCheck(this, ExtendedModule);
      });

      ExtendedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ExtendedModule
      });
      ExtendedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ExtendedModule_Factory(t) {
          return new (t || ExtendedModule)();
        },
        imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExtendedModule, {
          declarations: function declarations() {
            return [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
          },
          imports: function imports() {
            return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]];
          },
          exports: function exports() {
            return [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtendedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
            declarations: [].concat(ALL_DIRECTIVES),
            exports: [].concat(ALL_DIRECTIVES)
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: extended/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=extended.js.map

      /***/

    },

    /***/
    "zpSk":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js ***!
      \************************************************************************/

    /*! exports provided: GridModule, ɵgrid_privatef, ɵgrid_privatee, ɵgrid_privated, ɵgrid_privatei, ɵgrid_privateh, ɵgrid_privateg, ɵgrid_privatel, ɵgrid_privatek, ɵgrid_privatej, ɵgrid_privateo, ɵgrid_privaten, ɵgrid_privatem, ɵgrid_privater, ɵgrid_privateq, ɵgrid_privatep, ɵgrid_privateu, ɵgrid_privatet, ɵgrid_privates, ɵgrid_privatex, ɵgrid_privatew, ɵgrid_privatev, ɵgrid_privateba, ɵgrid_privatez, ɵgrid_privatey, ɵgrid_privatec, ɵgrid_privateb, ɵgrid_privatea, ɵgrid_privatebd, ɵgrid_privatebc, ɵgrid_privatebb, ɵgrid_privatebg, ɵgrid_privatebf, ɵgrid_privatebe */

    /***/
    function zpSk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GridModule", function () {
        return GridModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatef", function () {
        return DefaultGridAlignColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatee", function () {
        return GridAlignColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privated", function () {
        return GridAlignColumnsStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatei", function () {
        return DefaultGridAlignRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateh", function () {
        return GridAlignRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateg", function () {
        return GridAlignRowsStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatel", function () {
        return DefaultGridAreaDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatek", function () {
        return GridAreaDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatej", function () {
        return GridAreaStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateo", function () {
        return DefaultGridAreasDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privaten", function () {
        return GridAreasDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatem", function () {
        return GridAreasStyleBuiler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privater", function () {
        return DefaultGridAutoDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateq", function () {
        return GridAutoDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatep", function () {
        return GridAutoStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateu", function () {
        return DefaultGridColumnDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatet", function () {
        return GridColumnDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privates", function () {
        return GridColumnStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatex", function () {
        return DefaultGridColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatew", function () {
        return GridColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatev", function () {
        return GridColumnsStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateba", function () {
        return DefaultGridGapDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatez", function () {
        return GridGapDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatey", function () {
        return GridGapStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatec", function () {
        return DefaultGridAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateb", function () {
        return GridAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatea", function () {
        return GridAlignStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebd", function () {
        return DefaultGridRowDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebc", function () {
        return GridRowDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebb", function () {
        return GridRowStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebg", function () {
        return DefaultGridRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebf", function () {
        return GridRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebe", function () {
        return GridRowsStyleBuilder;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: grid/grid-align/grid-align.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ROW_DEFAULT = 'stretch';
      /** @type {?} */

      var COL_DEFAULT = 'stretch';

      var GridAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_23) {
        _inherits(GridAlignStyleBuilder, _angular_flex_layout_23);

        var _super35 = _createSuper(GridAlignStyleBuilder);

        function GridAlignStyleBuilder() {
          _classCallCheck(this, GridAlignStyleBuilder);

          return _super35.apply(this, arguments);
        }

        _createClass(GridAlignStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @return {?}
           */
          function buildStyles(input) {
            return buildCss(input || ROW_DEFAULT);
          }
        }]);

        return GridAlignStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAlignStyleBuilder.ɵfac = function GridAlignStyleBuilder_Factory(t) {
        return ɵGridAlignStyleBuilder_BaseFactory(t || GridAlignStyleBuilder);
      };
      /** @nocollapse */


      GridAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAlignStyleBuilder_Factory() {
          return new GridAlignStyleBuilder();
        },
        token: GridAlignStyleBuilder,
        providedIn: "root"
      });

      var ɵGridAlignStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAlignDirective = /*#__PURE__*/function (_angular_flex_layout_24) {
        _inherits(GridAlignDirective, _angular_flex_layout_24);

        var _super36 = _createSuper(GridAlignDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridAlignDirective(elementRef, styleBuilder, styler, marshal) {
          var _this57;

          _classCallCheck(this, GridAlignDirective);

          _this57 = _super36.call(this, elementRef, styleBuilder, styler, marshal);
          _this57.DIRECTIVE_KEY = 'grid-align';
          _this57.styleCache = alignCache;

          _this57.init();

          return _this57;
        }

        return _createClass(GridAlignDirective);
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAlignDirective.ɵfac = function GridAlignDirective_Factory(t) {
        return new (t || GridAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAlignDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAlignDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAlignStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridAlignStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var alignCache = new Map();
      /** @type {?} */

      var inputs = ['gdGridAlign', 'gdGridAlign.xs', 'gdGridAlign.sm', 'gdGridAlign.md', 'gdGridAlign.lg', 'gdGridAlign.xl', 'gdGridAlign.lt-sm', 'gdGridAlign.lt-md', 'gdGridAlign.lt-lg', 'gdGridAlign.lt-xl', 'gdGridAlign.gt-xs', 'gdGridAlign.gt-sm', 'gdGridAlign.gt-md', 'gdGridAlign.gt-lg'];
      /** @type {?} */

      var selector = "\n  [gdGridAlign],\n  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],\n  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],\n  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]\n";
      /**
       * 'align' CSS Grid styling directive for grid children
       *  Defines positioning of child elements along row and column axis in a grid container
       *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
       *
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
       */

      var DefaultGridAlignDirective = /*#__PURE__*/function (_GridAlignDirective) {
        _inherits(DefaultGridAlignDirective, _GridAlignDirective);

        var _super37 = _createSuper(DefaultGridAlignDirective);

        function DefaultGridAlignDirective() {
          var _this58;

          _classCallCheck(this, DefaultGridAlignDirective);

          _this58 = _super37.apply(this, arguments);
          _this58.inputs = inputs;
          return _this58;
        }

        return _createClass(DefaultGridAlignDirective);
      }(GridAlignDirective);

      DefaultGridAlignDirective.ɵfac = function DefaultGridAlignDirective_Factory(t) {
        return ɵDefaultGridAlignDirective_BaseFactory(t || DefaultGridAlignDirective);
      };

      DefaultGridAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAlignDirective,
        selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]],
        inputs: {
          gdGridAlign: "gdGridAlign",
          "gdGridAlign.xs": "gdGridAlign.xs",
          "gdGridAlign.sm": "gdGridAlign.sm",
          "gdGridAlign.md": "gdGridAlign.md",
          "gdGridAlign.lg": "gdGridAlign.lg",
          "gdGridAlign.xl": "gdGridAlign.xl",
          "gdGridAlign.lt-sm": "gdGridAlign.lt-sm",
          "gdGridAlign.lt-md": "gdGridAlign.lt-md",
          "gdGridAlign.lt-lg": "gdGridAlign.lt-lg",
          "gdGridAlign.lt-xl": "gdGridAlign.lt-xl",
          "gdGridAlign.gt-xs": "gdGridAlign.gt-xs",
          "gdGridAlign.gt-sm": "gdGridAlign.gt-sm",
          "gdGridAlign.gt-md": "gdGridAlign.gt-md",
          "gdGridAlign.gt-lg": "gdGridAlign.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAlignDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector,
            inputs: inputs
          }]
        }], null, null);
      })();
      /**
       * @param {?=} align
       * @return {?}
       */


      function buildCss() {
        var align = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        /** @type {?} */
        var css = {};

        var _align$split3 = align.split(' '),
            _align$split4 = _slicedToArray(_align$split3, 2),
            rowAxis = _align$split4[0],
            columnAxis = _align$split4[1]; // Row axis


        switch (rowAxis) {
          case 'end':
            css['justify-self'] = 'end';
            break;

          case 'center':
            css['justify-self'] = 'center';
            break;

          case 'stretch':
            css['justify-self'] = 'stretch';
            break;

          case 'start':
            css['justify-self'] = 'start';
            break;

          default:
            css['justify-self'] = ROW_DEFAULT; // default row axis

            break;
        } // Column axis


        switch (columnAxis) {
          case 'end':
            css['align-self'] = 'end';
            break;

          case 'center':
            css['align-self'] = 'center';
            break;

          case 'stretch':
            css['align-self'] = 'stretch';
            break;

          case 'start':
            css['align-self'] = 'start';
            break;

          default:
            css['align-self'] = COL_DEFAULT; // default column axis

            break;
        }

        return css;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/align-columns/align-columns.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_MAIN = 'start';
      /** @type {?} */

      var DEFAULT_CROSS = 'stretch';

      var GridAlignColumnsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_25) {
        _inherits(GridAlignColumnsStyleBuilder, _angular_flex_layout_25);

        var _super38 = _createSuper(GridAlignColumnsStyleBuilder);

        function GridAlignColumnsStyleBuilder() {
          _classCallCheck(this, GridAlignColumnsStyleBuilder);

          return _super38.apply(this, arguments);
        }

        _createClass(GridAlignColumnsStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          function buildStyles(input, parent) {
            return buildCss$1(input || "".concat(DEFAULT_MAIN, " ").concat(DEFAULT_CROSS), parent.inline);
          }
        }]);

        return GridAlignColumnsStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAlignColumnsStyleBuilder.ɵfac = function GridAlignColumnsStyleBuilder_Factory(t) {
        return ɵGridAlignColumnsStyleBuilder_BaseFactory(t || GridAlignColumnsStyleBuilder);
      };
      /** @nocollapse */


      GridAlignColumnsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAlignColumnsStyleBuilder_Factory() {
          return new GridAlignColumnsStyleBuilder();
        },
        token: GridAlignColumnsStyleBuilder,
        providedIn: "root"
      });

      var ɵGridAlignColumnsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignColumnsStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignColumnsStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAlignColumnsDirective = /*#__PURE__*/function (_angular_flex_layout_26) {
        _inherits(GridAlignColumnsDirective, _angular_flex_layout_26);

        var _super39 = _createSuper(GridAlignColumnsDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridAlignColumnsDirective(elementRef, styleBuilder, styler, marshal) {
          var _this59;

          _classCallCheck(this, GridAlignColumnsDirective);

          _this59 = _super39.call(this, elementRef, styleBuilder, styler, marshal);
          _this59.DIRECTIVE_KEY = 'grid-align-columns';
          _this59._inline = false;

          _this59.init();

          return _this59;
        }
        /**
         * @return {?}
         */


        _createClass(GridAlignColumnsDirective, [{
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }]);

        return GridAlignColumnsDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAlignColumnsDirective.ɵfac = function GridAlignColumnsDirective_Factory(t) {
        return new (t || GridAlignColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAlignColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAlignColumnsDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAlignColumnsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAlignColumnsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridAlignColumnsDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignColumnsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridAlignColumnsStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var alignColumnsCache = new Map();
      /** @type {?} */

      var alignColumnsInlineCache = new Map();
      /** @type {?} */

      var inputs$1 = ['gdAlignColumns', 'gdAlignColumns.xs', 'gdAlignColumns.sm', 'gdAlignColumns.md', 'gdAlignColumns.lg', 'gdAlignColumns.xl', 'gdAlignColumns.lt-sm', 'gdAlignColumns.lt-md', 'gdAlignColumns.lt-lg', 'gdAlignColumns.lt-xl', 'gdAlignColumns.gt-xs', 'gdAlignColumns.gt-sm', 'gdAlignColumns.gt-md', 'gdAlignColumns.gt-lg'];
      /** @type {?} */

      var selector$1 = "\n  [gdAlignColumns],\n  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],\n  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],\n  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],\n  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],\n  [gdAlignColumns.gt-lg]\n";
      /**
       * 'column alignment' CSS Grid styling directive
       * Configures the alignment in the column direction
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
       */

      var DefaultGridAlignColumnsDirective = /*#__PURE__*/function (_GridAlignColumnsDire) {
        _inherits(DefaultGridAlignColumnsDirective, _GridAlignColumnsDire);

        var _super40 = _createSuper(DefaultGridAlignColumnsDirective);

        function DefaultGridAlignColumnsDirective() {
          var _this60;

          _classCallCheck(this, DefaultGridAlignColumnsDirective);

          _this60 = _super40.apply(this, arguments);
          _this60.inputs = inputs$1;
          return _this60;
        }

        return _createClass(DefaultGridAlignColumnsDirective);
      }(GridAlignColumnsDirective);

      DefaultGridAlignColumnsDirective.ɵfac = function DefaultGridAlignColumnsDirective_Factory(t) {
        return ɵDefaultGridAlignColumnsDirective_BaseFactory(t || DefaultGridAlignColumnsDirective);
      };

      DefaultGridAlignColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAlignColumnsDirective,
        selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]],
        inputs: {
          gdAlignColumns: "gdAlignColumns",
          "gdAlignColumns.xs": "gdAlignColumns.xs",
          "gdAlignColumns.sm": "gdAlignColumns.sm",
          "gdAlignColumns.md": "gdAlignColumns.md",
          "gdAlignColumns.lg": "gdAlignColumns.lg",
          "gdAlignColumns.xl": "gdAlignColumns.xl",
          "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm",
          "gdAlignColumns.lt-md": "gdAlignColumns.lt-md",
          "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg",
          "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl",
          "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs",
          "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm",
          "gdAlignColumns.gt-md": "gdAlignColumns.gt-md",
          "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAlignColumnsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignColumnsDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAlignColumnsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$1,
            inputs: inputs$1
          }]
        }], null, null);
      })();
      /**
       * @param {?} align
       * @param {?} inline
       * @return {?}
       */


      function buildCss$1(align, inline) {
        /** @type {?} */
        var css = {};

        var _align$split5 = align.split(' '),
            _align$split6 = _slicedToArray(_align$split5, 2),
            mainAxis = _align$split6[0],
            crossAxis = _align$split6[1]; // Main axis


        switch (mainAxis) {
          case 'center':
            css['align-content'] = 'center';
            break;

          case 'space-around':
            css['align-content'] = 'space-around';
            break;

          case 'space-between':
            css['align-content'] = 'space-between';
            break;

          case 'space-evenly':
            css['align-content'] = 'space-evenly';
            break;

          case 'end':
            css['align-content'] = 'end';
            break;

          case 'start':
            css['align-content'] = 'start';
            break;

          case 'stretch':
            css['align-content'] = 'stretch';
            break;

          default:
            css['align-content'] = DEFAULT_MAIN; // default main axis

            break;
        } // Cross-axis


        switch (crossAxis) {
          case 'start':
            css['align-items'] = 'start';
            break;

          case 'center':
            css['align-items'] = 'center';
            break;

          case 'end':
            css['align-items'] = 'end';
            break;

          case 'stretch':
            css['align-items'] = 'stretch';
            break;

          default:
            // 'stretch'
            css['align-items'] = DEFAULT_CROSS; // default cross axis

            break;
        }

        css['display'] = inline ? 'inline-grid' : 'grid';
        return css;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/align-rows/align-rows.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_MAIN$1 = 'start';
      /** @type {?} */

      var DEFAULT_CROSS$1 = 'stretch';

      var GridAlignRowsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_27) {
        _inherits(GridAlignRowsStyleBuilder, _angular_flex_layout_27);

        var _super41 = _createSuper(GridAlignRowsStyleBuilder);

        function GridAlignRowsStyleBuilder() {
          _classCallCheck(this, GridAlignRowsStyleBuilder);

          return _super41.apply(this, arguments);
        }

        _createClass(GridAlignRowsStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          function buildStyles(input, parent) {
            return buildCss$2(input || "".concat(DEFAULT_MAIN$1, " ").concat(DEFAULT_CROSS$1), parent.inline);
          }
        }]);

        return GridAlignRowsStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAlignRowsStyleBuilder.ɵfac = function GridAlignRowsStyleBuilder_Factory(t) {
        return ɵGridAlignRowsStyleBuilder_BaseFactory(t || GridAlignRowsStyleBuilder);
      };
      /** @nocollapse */


      GridAlignRowsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAlignRowsStyleBuilder_Factory() {
          return new GridAlignRowsStyleBuilder();
        },
        token: GridAlignRowsStyleBuilder,
        providedIn: "root"
      });

      var ɵGridAlignRowsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignRowsStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignRowsStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAlignRowsDirective = /*#__PURE__*/function (_angular_flex_layout_28) {
        _inherits(GridAlignRowsDirective, _angular_flex_layout_28);

        var _super42 = _createSuper(GridAlignRowsDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridAlignRowsDirective(elementRef, styleBuilder, styler, marshal) {
          var _this61;

          _classCallCheck(this, GridAlignRowsDirective);

          _this61 = _super42.call(this, elementRef, styleBuilder, styler, marshal);
          _this61.DIRECTIVE_KEY = 'grid-align-rows';
          _this61._inline = false;

          _this61.init();

          return _this61;
        }
        /**
         * @return {?}
         */


        _createClass(GridAlignRowsDirective, [{
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }]);

        return GridAlignRowsDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAlignRowsDirective.ɵfac = function GridAlignRowsDirective_Factory(t) {
        return new (t || GridAlignRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAlignRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAlignRowsDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAlignRowsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAlignRowsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridAlignRowsDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignRowsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridAlignRowsStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var alignRowsCache = new Map();
      /** @type {?} */

      var alignRowsInlineCache = new Map();
      /** @type {?} */

      var inputs$2 = ['gdAlignRows', 'gdAlignRows.xs', 'gdAlignRows.sm', 'gdAlignRows.md', 'gdAlignRows.lg', 'gdAlignRows.xl', 'gdAlignRows.lt-sm', 'gdAlignRows.lt-md', 'gdAlignRows.lt-lg', 'gdAlignRows.lt-xl', 'gdAlignRows.gt-xs', 'gdAlignRows.gt-sm', 'gdAlignRows.gt-md', 'gdAlignRows.gt-lg'];
      /** @type {?} */

      var selector$2 = "\n  [gdAlignRows],\n  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],\n  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],\n  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],\n  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],\n  [gdAlignRows.gt-lg]\n";
      /**
       * 'row alignment' CSS Grid styling directive
       * Configures the alignment in the row direction
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
       */

      var DefaultGridAlignRowsDirective = /*#__PURE__*/function (_GridAlignRowsDirecti) {
        _inherits(DefaultGridAlignRowsDirective, _GridAlignRowsDirecti);

        var _super43 = _createSuper(DefaultGridAlignRowsDirective);

        function DefaultGridAlignRowsDirective() {
          var _this62;

          _classCallCheck(this, DefaultGridAlignRowsDirective);

          _this62 = _super43.apply(this, arguments);
          _this62.inputs = inputs$2;
          return _this62;
        }

        return _createClass(DefaultGridAlignRowsDirective);
      }(GridAlignRowsDirective);

      DefaultGridAlignRowsDirective.ɵfac = function DefaultGridAlignRowsDirective_Factory(t) {
        return ɵDefaultGridAlignRowsDirective_BaseFactory(t || DefaultGridAlignRowsDirective);
      };

      DefaultGridAlignRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAlignRowsDirective,
        selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]],
        inputs: {
          gdAlignRows: "gdAlignRows",
          "gdAlignRows.xs": "gdAlignRows.xs",
          "gdAlignRows.sm": "gdAlignRows.sm",
          "gdAlignRows.md": "gdAlignRows.md",
          "gdAlignRows.lg": "gdAlignRows.lg",
          "gdAlignRows.xl": "gdAlignRows.xl",
          "gdAlignRows.lt-sm": "gdAlignRows.lt-sm",
          "gdAlignRows.lt-md": "gdAlignRows.lt-md",
          "gdAlignRows.lt-lg": "gdAlignRows.lt-lg",
          "gdAlignRows.lt-xl": "gdAlignRows.lt-xl",
          "gdAlignRows.gt-xs": "gdAlignRows.gt-xs",
          "gdAlignRows.gt-sm": "gdAlignRows.gt-sm",
          "gdAlignRows.gt-md": "gdAlignRows.gt-md",
          "gdAlignRows.gt-lg": "gdAlignRows.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAlignRowsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignRowsDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAlignRowsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$2,
            inputs: inputs$2
          }]
        }], null, null);
      })();
      /**
       * @param {?} align
       * @param {?} inline
       * @return {?}
       */


      function buildCss$2(align, inline) {
        /** @type {?} */
        var css = {};

        var _align$split7 = align.split(' '),
            _align$split8 = _slicedToArray(_align$split7, 2),
            mainAxis = _align$split8[0],
            crossAxis = _align$split8[1]; // Main axis


        switch (mainAxis) {
          case 'center':
          case 'space-around':
          case 'space-between':
          case 'space-evenly':
          case 'end':
          case 'start':
          case 'stretch':
            css['justify-content'] = mainAxis;
            break;

          default:
            css['justify-content'] = DEFAULT_MAIN$1; // default main axis

            break;
        } // Cross-axis


        switch (crossAxis) {
          case 'start':
          case 'center':
          case 'end':
          case 'stretch':
            css['justify-items'] = crossAxis;
            break;

          default:
            // 'stretch'
            css['justify-items'] = DEFAULT_CROSS$1; // default cross axis

            break;
        }

        css['display'] = inline ? 'inline-grid' : 'grid';
        return css;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/area/area.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE = 'auto';

      var GridAreaStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_29) {
        _inherits(GridAreaStyleBuilder, _angular_flex_layout_29);

        var _super44 = _createSuper(GridAreaStyleBuilder);

        function GridAreaStyleBuilder() {
          _classCallCheck(this, GridAreaStyleBuilder);

          return _super44.apply(this, arguments);
        }

        _createClass(GridAreaStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @return {?}
           */
          function buildStyles(input) {
            return {
              'grid-area': input || DEFAULT_VALUE
            };
          }
        }]);

        return GridAreaStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAreaStyleBuilder.ɵfac = function GridAreaStyleBuilder_Factory(t) {
        return ɵGridAreaStyleBuilder_BaseFactory(t || GridAreaStyleBuilder);
      };
      /** @nocollapse */


      GridAreaStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAreaStyleBuilder_Factory() {
          return new GridAreaStyleBuilder();
        },
        token: GridAreaStyleBuilder,
        providedIn: "root"
      });

      var ɵGridAreaStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAreaStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreaStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAreaDirective = /*#__PURE__*/function (_angular_flex_layout_30) {
        _inherits(GridAreaDirective, _angular_flex_layout_30);

        var _super45 = _createSuper(GridAreaDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function GridAreaDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this63;

          _classCallCheck(this, GridAreaDirective);

          _this63 = _super45.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this63.DIRECTIVE_KEY = 'grid-area';
          _this63.styleCache = gridAreaCache;

          _this63.init();

          return _this63;
        }

        return _createClass(GridAreaDirective);
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAreaDirective.ɵfac = function GridAreaDirective_Factory(t) {
        return new (t || GridAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAreaStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAreaDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAreaDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: GridAreaStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreaDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: GridAreaStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var gridAreaCache = new Map();
      /** @type {?} */

      var inputs$3 = ['gdArea', 'gdArea.xs', 'gdArea.sm', 'gdArea.md', 'gdArea.lg', 'gdArea.xl', 'gdArea.lt-sm', 'gdArea.lt-md', 'gdArea.lt-lg', 'gdArea.lt-xl', 'gdArea.gt-xs', 'gdArea.gt-sm', 'gdArea.gt-md', 'gdArea.gt-lg'];
      /** @type {?} */

      var selector$3 = "\n  [gdArea],\n  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],\n  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],\n  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]\n";
      /**
       * 'grid-area' CSS Grid styling directive
       * Configures the name or position of an element within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
       */

      var DefaultGridAreaDirective = /*#__PURE__*/function (_GridAreaDirective) {
        _inherits(DefaultGridAreaDirective, _GridAreaDirective);

        var _super46 = _createSuper(DefaultGridAreaDirective);

        function DefaultGridAreaDirective() {
          var _this64;

          _classCallCheck(this, DefaultGridAreaDirective);

          _this64 = _super46.apply(this, arguments);
          _this64.inputs = inputs$3;
          return _this64;
        }

        return _createClass(DefaultGridAreaDirective);
      }(GridAreaDirective);

      DefaultGridAreaDirective.ɵfac = function DefaultGridAreaDirective_Factory(t) {
        return ɵDefaultGridAreaDirective_BaseFactory(t || DefaultGridAreaDirective);
      };

      DefaultGridAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAreaDirective,
        selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]],
        inputs: {
          gdArea: "gdArea",
          "gdArea.xs": "gdArea.xs",
          "gdArea.sm": "gdArea.sm",
          "gdArea.md": "gdArea.md",
          "gdArea.lg": "gdArea.lg",
          "gdArea.xl": "gdArea.xl",
          "gdArea.lt-sm": "gdArea.lt-sm",
          "gdArea.lt-md": "gdArea.lt-md",
          "gdArea.lt-lg": "gdArea.lt-lg",
          "gdArea.lt-xl": "gdArea.lt-xl",
          "gdArea.gt-xs": "gdArea.gt-xs",
          "gdArea.gt-sm": "gdArea.gt-sm",
          "gdArea.gt-md": "gdArea.gt-md",
          "gdArea.gt-lg": "gdArea.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAreaDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAreaDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAreaDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$3,
            inputs: inputs$3
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/areas/areas.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$1 = 'none';
      /** @type {?} */

      var DELIMETER = '|';

      var GridAreasStyleBuiler = /*#__PURE__*/function (_angular_flex_layout_31) {
        _inherits(GridAreasStyleBuiler, _angular_flex_layout_31);

        var _super47 = _createSuper(GridAreasStyleBuiler);

        function GridAreasStyleBuiler() {
          _classCallCheck(this, GridAreasStyleBuiler);

          return _super47.apply(this, arguments);
        }

        _createClass(GridAreasStyleBuiler, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          function buildStyles(input, parent) {
            /** @type {?} */
            var areas = (input || DEFAULT_VALUE$1).split(DELIMETER).map(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return "\"".concat(v.trim(), "\"");
            });
            return {
              'display': parent.inline ? 'inline-grid' : 'grid',
              'grid-template-areas': areas.join(' ')
            };
          }
        }]);

        return GridAreasStyleBuiler;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAreasStyleBuiler.ɵfac = function GridAreasStyleBuiler_Factory(t) {
        return ɵGridAreasStyleBuiler_BaseFactory(t || GridAreasStyleBuiler);
      };
      /** @nocollapse */


      GridAreasStyleBuiler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAreasStyleBuiler_Factory() {
          return new GridAreasStyleBuiler();
        },
        token: GridAreasStyleBuiler,
        providedIn: "root"
      });

      var ɵGridAreasStyleBuiler_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAreasStyleBuiler);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreasStyleBuiler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAreasDirective = /*#__PURE__*/function (_angular_flex_layout_32) {
        _inherits(GridAreasDirective, _angular_flex_layout_32);

        var _super48 = _createSuper(GridAreasDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function GridAreasDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this65;

          _classCallCheck(this, GridAreasDirective);

          _this65 = _super48.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this65.DIRECTIVE_KEY = 'grid-areas';
          _this65._inline = false;

          _this65.init();

          return _this65;
        }
        /**
         * @return {?}
         */


        _createClass(GridAreasDirective, [{
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? areasInlineCache : areasCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }]);

        return GridAreasDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAreasDirective.ɵfac = function GridAreasDirective_Factory(t) {
        return new (t || GridAreasDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAreasStyleBuiler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAreasDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAreasDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAreasDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: GridAreasStyleBuiler
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridAreasDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreasDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: GridAreasStyleBuiler
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var areasCache = new Map();
      /** @type {?} */

      var areasInlineCache = new Map();
      /** @type {?} */

      var inputs$4 = ['gdAreas', 'gdAreas.xs', 'gdAreas.sm', 'gdAreas.md', 'gdAreas.lg', 'gdAreas.xl', 'gdAreas.lt-sm', 'gdAreas.lt-md', 'gdAreas.lt-lg', 'gdAreas.lt-xl', 'gdAreas.gt-xs', 'gdAreas.gt-sm', 'gdAreas.gt-md', 'gdAreas.gt-lg'];
      /** @type {?} */

      var selector$4 = "\n  [gdAreas],\n  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],\n  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],\n  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]\n";
      /**
       * 'grid-template-areas' CSS Grid styling directive
       * Configures the names of elements within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
       */

      var DefaultGridAreasDirective = /*#__PURE__*/function (_GridAreasDirective) {
        _inherits(DefaultGridAreasDirective, _GridAreasDirective);

        var _super49 = _createSuper(DefaultGridAreasDirective);

        function DefaultGridAreasDirective() {
          var _this66;

          _classCallCheck(this, DefaultGridAreasDirective);

          _this66 = _super49.apply(this, arguments);
          _this66.inputs = inputs$4;
          return _this66;
        }

        return _createClass(DefaultGridAreasDirective);
      }(GridAreasDirective);

      DefaultGridAreasDirective.ɵfac = function DefaultGridAreasDirective_Factory(t) {
        return ɵDefaultGridAreasDirective_BaseFactory(t || DefaultGridAreasDirective);
      };

      DefaultGridAreasDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAreasDirective,
        selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]],
        inputs: {
          gdAreas: "gdAreas",
          "gdAreas.xs": "gdAreas.xs",
          "gdAreas.sm": "gdAreas.sm",
          "gdAreas.md": "gdAreas.md",
          "gdAreas.lg": "gdAreas.lg",
          "gdAreas.xl": "gdAreas.xl",
          "gdAreas.lt-sm": "gdAreas.lt-sm",
          "gdAreas.lt-md": "gdAreas.lt-md",
          "gdAreas.lt-lg": "gdAreas.lt-lg",
          "gdAreas.lt-xl": "gdAreas.lt-xl",
          "gdAreas.gt-xs": "gdAreas.gt-xs",
          "gdAreas.gt-sm": "gdAreas.gt-sm",
          "gdAreas.gt-md": "gdAreas.gt-md",
          "gdAreas.gt-lg": "gdAreas.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAreasDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAreasDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAreasDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$4,
            inputs: inputs$4
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/auto/auto.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$2 = 'initial';

      var GridAutoStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_33) {
        _inherits(GridAutoStyleBuilder, _angular_flex_layout_33);

        var _super50 = _createSuper(GridAutoStyleBuilder);

        function GridAutoStyleBuilder() {
          _classCallCheck(this, GridAutoStyleBuilder);

          return _super50.apply(this, arguments);
        }

        _createClass(GridAutoStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          function buildStyles(input, parent) {
            var _split = (input || DEFAULT_VALUE$2).split(' '),
                _split2 = _slicedToArray(_split, 2),
                direction = _split2[0],
                dense = _split2[1];

            if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
              direction = 'row';
            }

            dense = dense === 'dense' && direction !== 'dense' ? ' dense' : '';
            return {
              'display': parent.inline ? 'inline-grid' : 'grid',
              'grid-auto-flow': direction + dense
            };
          }
        }]);

        return GridAutoStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAutoStyleBuilder.ɵfac = function GridAutoStyleBuilder_Factory(t) {
        return ɵGridAutoStyleBuilder_BaseFactory(t || GridAutoStyleBuilder);
      };
      /** @nocollapse */


      GridAutoStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAutoStyleBuilder_Factory() {
          return new GridAutoStyleBuilder();
        },
        token: GridAutoStyleBuilder,
        providedIn: "root"
      });

      var ɵGridAutoStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAutoStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAutoStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAutoDirective = /*#__PURE__*/function (_angular_flex_layout_34) {
        _inherits(GridAutoDirective, _angular_flex_layout_34);

        var _super51 = _createSuper(GridAutoDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridAutoDirective(elementRef, styleBuilder, styler, marshal) {
          var _this67;

          _classCallCheck(this, GridAutoDirective);

          _this67 = _super51.call(this, elementRef, styleBuilder, styler, marshal);
          _this67._inline = false;
          _this67.DIRECTIVE_KEY = 'grid-auto';

          _this67.init();

          return _this67;
        }
        /**
         * @return {?}
         */


        _createClass(GridAutoDirective, [{
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? autoInlineCache : autoCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }]);

        return GridAutoDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAutoDirective.ɵfac = function GridAutoDirective_Factory(t) {
        return new (t || GridAutoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAutoStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAutoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAutoDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAutoDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAutoStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridAutoDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAutoDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridAutoStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var autoCache = new Map();
      /** @type {?} */

      var autoInlineCache = new Map();
      /** @type {?} */

      var inputs$5 = ['gdAuto', 'gdAuto.xs', 'gdAuto.sm', 'gdAuto.md', 'gdAuto.lg', 'gdAuto.xl', 'gdAuto.lt-sm', 'gdAuto.lt-md', 'gdAuto.lt-lg', 'gdAuto.lt-xl', 'gdAuto.gt-xs', 'gdAuto.gt-sm', 'gdAuto.gt-md', 'gdAuto.gt-lg'];
      /** @type {?} */

      var selector$5 = "\n  [gdAuto],\n  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],\n  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],\n  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]\n";
      /**
       * 'grid-auto-flow' CSS Grid styling directive
       * Configures the auto placement algorithm for the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
       */

      var DefaultGridAutoDirective = /*#__PURE__*/function (_GridAutoDirective) {
        _inherits(DefaultGridAutoDirective, _GridAutoDirective);

        var _super52 = _createSuper(DefaultGridAutoDirective);

        function DefaultGridAutoDirective() {
          var _this68;

          _classCallCheck(this, DefaultGridAutoDirective);

          _this68 = _super52.apply(this, arguments);
          _this68.inputs = inputs$5;
          return _this68;
        }

        return _createClass(DefaultGridAutoDirective);
      }(GridAutoDirective);

      DefaultGridAutoDirective.ɵfac = function DefaultGridAutoDirective_Factory(t) {
        return ɵDefaultGridAutoDirective_BaseFactory(t || DefaultGridAutoDirective);
      };

      DefaultGridAutoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAutoDirective,
        selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]],
        inputs: {
          gdAuto: "gdAuto",
          "gdAuto.xs": "gdAuto.xs",
          "gdAuto.sm": "gdAuto.sm",
          "gdAuto.md": "gdAuto.md",
          "gdAuto.lg": "gdAuto.lg",
          "gdAuto.xl": "gdAuto.xl",
          "gdAuto.lt-sm": "gdAuto.lt-sm",
          "gdAuto.lt-md": "gdAuto.lt-md",
          "gdAuto.lt-lg": "gdAuto.lt-lg",
          "gdAuto.lt-xl": "gdAuto.lt-xl",
          "gdAuto.gt-xs": "gdAuto.gt-xs",
          "gdAuto.gt-sm": "gdAuto.gt-sm",
          "gdAuto.gt-md": "gdAuto.gt-md",
          "gdAuto.gt-lg": "gdAuto.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAutoDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAutoDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAutoDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$5,
            inputs: inputs$5
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/column/column.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$3 = 'auto';

      var GridColumnStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_35) {
        _inherits(GridColumnStyleBuilder, _angular_flex_layout_35);

        var _super53 = _createSuper(GridColumnStyleBuilder);

        function GridColumnStyleBuilder() {
          _classCallCheck(this, GridColumnStyleBuilder);

          return _super53.apply(this, arguments);
        }

        _createClass(GridColumnStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @return {?}
           */
          function buildStyles(input) {
            return {
              'grid-column': input || DEFAULT_VALUE$3
            };
          }
        }]);

        return GridColumnStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridColumnStyleBuilder.ɵfac = function GridColumnStyleBuilder_Factory(t) {
        return ɵGridColumnStyleBuilder_BaseFactory(t || GridColumnStyleBuilder);
      };
      /** @nocollapse */


      GridColumnStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridColumnStyleBuilder_Factory() {
          return new GridColumnStyleBuilder();
        },
        token: GridColumnStyleBuilder,
        providedIn: "root"
      });

      var ɵGridColumnStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridColumnStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridColumnDirective = /*#__PURE__*/function (_angular_flex_layout_36) {
        _inherits(GridColumnDirective, _angular_flex_layout_36);

        var _super54 = _createSuper(GridColumnDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridColumnDirective(elementRef, styleBuilder, styler, marshal) {
          var _this69;

          _classCallCheck(this, GridColumnDirective);

          _this69 = _super54.call(this, elementRef, styleBuilder, styler, marshal);
          _this69.DIRECTIVE_KEY = 'grid-column';
          _this69.styleCache = columnCache;

          _this69.init();

          return _this69;
        }

        return _createClass(GridColumnDirective);
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridColumnDirective.ɵfac = function GridColumnDirective_Factory(t) {
        return new (t || GridColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridColumnStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridColumnDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridColumnDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridColumnStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridColumnStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var columnCache = new Map();
      /** @type {?} */

      var inputs$6 = ['gdColumn', 'gdColumn.xs', 'gdColumn.sm', 'gdColumn.md', 'gdColumn.lg', 'gdColumn.xl', 'gdColumn.lt-sm', 'gdColumn.lt-md', 'gdColumn.lt-lg', 'gdColumn.lt-xl', 'gdColumn.gt-xs', 'gdColumn.gt-sm', 'gdColumn.gt-md', 'gdColumn.gt-lg'];
      /** @type {?} */

      var selector$6 = "\n  [gdColumn],\n  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],\n  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],\n  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]\n";
      /**
       * 'grid-column' CSS Grid styling directive
       * Configures the name or position of an element within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
       */

      var DefaultGridColumnDirective = /*#__PURE__*/function (_GridColumnDirective) {
        _inherits(DefaultGridColumnDirective, _GridColumnDirective);

        var _super55 = _createSuper(DefaultGridColumnDirective);

        function DefaultGridColumnDirective() {
          var _this70;

          _classCallCheck(this, DefaultGridColumnDirective);

          _this70 = _super55.apply(this, arguments);
          _this70.inputs = inputs$6;
          return _this70;
        }

        return _createClass(DefaultGridColumnDirective);
      }(GridColumnDirective);

      DefaultGridColumnDirective.ɵfac = function DefaultGridColumnDirective_Factory(t) {
        return ɵDefaultGridColumnDirective_BaseFactory(t || DefaultGridColumnDirective);
      };

      DefaultGridColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridColumnDirective,
        selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]],
        inputs: {
          gdColumn: "gdColumn",
          "gdColumn.xs": "gdColumn.xs",
          "gdColumn.sm": "gdColumn.sm",
          "gdColumn.md": "gdColumn.md",
          "gdColumn.lg": "gdColumn.lg",
          "gdColumn.xl": "gdColumn.xl",
          "gdColumn.lt-sm": "gdColumn.lt-sm",
          "gdColumn.lt-md": "gdColumn.lt-md",
          "gdColumn.lt-lg": "gdColumn.lt-lg",
          "gdColumn.lt-xl": "gdColumn.lt-xl",
          "gdColumn.gt-xs": "gdColumn.gt-xs",
          "gdColumn.gt-sm": "gdColumn.gt-sm",
          "gdColumn.gt-md": "gdColumn.gt-md",
          "gdColumn.gt-lg": "gdColumn.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridColumnDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridColumnDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridColumnDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$6,
            inputs: inputs$6
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/columns/columns.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$4 = 'none';
      /** @type {?} */

      var AUTO_SPECIFIER = '!';

      var GridColumnsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_37) {
        _inherits(GridColumnsStyleBuilder, _angular_flex_layout_37);

        var _super56 = _createSuper(GridColumnsStyleBuilder);

        function GridColumnsStyleBuilder() {
          _classCallCheck(this, GridColumnsStyleBuilder);

          return _super56.apply(this, arguments);
        }

        _createClass(GridColumnsStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          function buildStyles(input, parent) {
            input = input || DEFAULT_VALUE$4;
            /** @type {?} */

            var auto = false;

            if (input.endsWith(AUTO_SPECIFIER)) {
              input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
              auto = true;
            }
            /** @type {?} */


            var css = {
              'display': parent.inline ? 'inline-grid' : 'grid',
              'grid-auto-columns': '',
              'grid-template-columns': ''
            };
            /** @type {?} */

            var key = auto ? 'grid-auto-columns' : 'grid-template-columns';
            css[key] = input;
            return css;
          }
        }]);

        return GridColumnsStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridColumnsStyleBuilder.ɵfac = function GridColumnsStyleBuilder_Factory(t) {
        return ɵGridColumnsStyleBuilder_BaseFactory(t || GridColumnsStyleBuilder);
      };
      /** @nocollapse */


      GridColumnsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridColumnsStyleBuilder_Factory() {
          return new GridColumnsStyleBuilder();
        },
        token: GridColumnsStyleBuilder,
        providedIn: "root"
      });

      var ɵGridColumnsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridColumnsStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnsStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridColumnsDirective = /*#__PURE__*/function (_angular_flex_layout_38) {
        _inherits(GridColumnsDirective, _angular_flex_layout_38);

        var _super57 = _createSuper(GridColumnsDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridColumnsDirective(elementRef, styleBuilder, styler, marshal) {
          var _this71;

          _classCallCheck(this, GridColumnsDirective);

          _this71 = _super57.call(this, elementRef, styleBuilder, styler, marshal);
          _this71.DIRECTIVE_KEY = 'grid-columns';
          _this71._inline = false;

          _this71.init();

          return _this71;
        }
        /**
         * @return {?}
         */


        _createClass(GridColumnsDirective, [{
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? columnsInlineCache : columnsCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }]);

        return GridColumnsDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridColumnsDirective.ɵfac = function GridColumnsDirective_Factory(t) {
        return new (t || GridColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridColumnsDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridColumnsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridColumnsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridColumnsDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridColumnsStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var columnsCache = new Map();
      /** @type {?} */

      var columnsInlineCache = new Map();
      /** @type {?} */

      var inputs$7 = ['gdColumns', 'gdColumns.xs', 'gdColumns.sm', 'gdColumns.md', 'gdColumns.lg', 'gdColumns.xl', 'gdColumns.lt-sm', 'gdColumns.lt-md', 'gdColumns.lt-lg', 'gdColumns.lt-xl', 'gdColumns.gt-xs', 'gdColumns.gt-sm', 'gdColumns.gt-md', 'gdColumns.gt-lg'];
      /** @type {?} */

      var selector$7 = "\n  [gdColumns],\n  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],\n  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],\n  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]\n";
      /**
       * 'grid-template-columns' CSS Grid styling directive
       * Configures the sizing for the columns in the grid
       * Syntax: <column value> [auto]
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
       */

      var DefaultGridColumnsDirective = /*#__PURE__*/function (_GridColumnsDirective) {
        _inherits(DefaultGridColumnsDirective, _GridColumnsDirective);

        var _super58 = _createSuper(DefaultGridColumnsDirective);

        function DefaultGridColumnsDirective() {
          var _this72;

          _classCallCheck(this, DefaultGridColumnsDirective);

          _this72 = _super58.apply(this, arguments);
          _this72.inputs = inputs$7;
          return _this72;
        }

        return _createClass(DefaultGridColumnsDirective);
      }(GridColumnsDirective);

      DefaultGridColumnsDirective.ɵfac = function DefaultGridColumnsDirective_Factory(t) {
        return ɵDefaultGridColumnsDirective_BaseFactory(t || DefaultGridColumnsDirective);
      };

      DefaultGridColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridColumnsDirective,
        selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]],
        inputs: {
          gdColumns: "gdColumns",
          "gdColumns.xs": "gdColumns.xs",
          "gdColumns.sm": "gdColumns.sm",
          "gdColumns.md": "gdColumns.md",
          "gdColumns.lg": "gdColumns.lg",
          "gdColumns.xl": "gdColumns.xl",
          "gdColumns.lt-sm": "gdColumns.lt-sm",
          "gdColumns.lt-md": "gdColumns.lt-md",
          "gdColumns.lt-lg": "gdColumns.lt-lg",
          "gdColumns.lt-xl": "gdColumns.lt-xl",
          "gdColumns.gt-xs": "gdColumns.gt-xs",
          "gdColumns.gt-sm": "gdColumns.gt-sm",
          "gdColumns.gt-md": "gdColumns.gt-md",
          "gdColumns.gt-lg": "gdColumns.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridColumnsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridColumnsDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridColumnsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$7,
            inputs: inputs$7
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/gap/gap.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$5 = '0';

      var GridGapStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_39) {
        _inherits(GridGapStyleBuilder, _angular_flex_layout_39);

        var _super59 = _createSuper(GridGapStyleBuilder);

        function GridGapStyleBuilder() {
          _classCallCheck(this, GridGapStyleBuilder);

          return _super59.apply(this, arguments);
        }

        _createClass(GridGapStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          function buildStyles(input, parent) {
            return {
              'display': parent.inline ? 'inline-grid' : 'grid',
              'grid-gap': input || DEFAULT_VALUE$5
            };
          }
        }]);

        return GridGapStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridGapStyleBuilder.ɵfac = function GridGapStyleBuilder_Factory(t) {
        return ɵGridGapStyleBuilder_BaseFactory(t || GridGapStyleBuilder);
      };
      /** @nocollapse */


      GridGapStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridGapStyleBuilder_Factory() {
          return new GridGapStyleBuilder();
        },
        token: GridGapStyleBuilder,
        providedIn: "root"
      });

      var ɵGridGapStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridGapStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridGapStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridGapDirective = /*#__PURE__*/function (_angular_flex_layout_40) {
        _inherits(GridGapDirective, _angular_flex_layout_40);

        var _super60 = _createSuper(GridGapDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function GridGapDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this73;

          _classCallCheck(this, GridGapDirective);

          _this73 = _super60.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this73.DIRECTIVE_KEY = 'grid-gap';
          _this73._inline = false;

          _this73.init();

          return _this73;
        }
        /**
         * @return {?}
         */


        _createClass(GridGapDirective, [{
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? gapInlineCache : gapCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }]);

        return GridGapDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridGapDirective.ɵfac = function GridGapDirective_Factory(t) {
        return new (t || GridGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridGapDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridGapDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: GridGapStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridGapDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridGapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: GridGapStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var gapCache = new Map();
      /** @type {?} */

      var gapInlineCache = new Map();
      /** @type {?} */

      var inputs$8 = ['gdGap', 'gdGap.xs', 'gdGap.sm', 'gdGap.md', 'gdGap.lg', 'gdGap.xl', 'gdGap.lt-sm', 'gdGap.lt-md', 'gdGap.lt-lg', 'gdGap.lt-xl', 'gdGap.gt-xs', 'gdGap.gt-sm', 'gdGap.gt-md', 'gdGap.gt-lg'];
      /** @type {?} */

      var selector$8 = "\n  [gdGap],\n  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],\n  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],\n  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]\n";
      /**
       * 'grid-gap' CSS Grid styling directive
       * Configures the gap between items in the grid
       * Syntax: <row gap> [<column-gap>]
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
       */

      var DefaultGridGapDirective = /*#__PURE__*/function (_GridGapDirective) {
        _inherits(DefaultGridGapDirective, _GridGapDirective);

        var _super61 = _createSuper(DefaultGridGapDirective);

        function DefaultGridGapDirective() {
          var _this74;

          _classCallCheck(this, DefaultGridGapDirective);

          _this74 = _super61.apply(this, arguments);
          _this74.inputs = inputs$8;
          return _this74;
        }

        return _createClass(DefaultGridGapDirective);
      }(GridGapDirective);

      DefaultGridGapDirective.ɵfac = function DefaultGridGapDirective_Factory(t) {
        return ɵDefaultGridGapDirective_BaseFactory(t || DefaultGridGapDirective);
      };

      DefaultGridGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridGapDirective,
        selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]],
        inputs: {
          gdGap: "gdGap",
          "gdGap.xs": "gdGap.xs",
          "gdGap.sm": "gdGap.sm",
          "gdGap.md": "gdGap.md",
          "gdGap.lg": "gdGap.lg",
          "gdGap.xl": "gdGap.xl",
          "gdGap.lt-sm": "gdGap.lt-sm",
          "gdGap.lt-md": "gdGap.lt-md",
          "gdGap.lt-lg": "gdGap.lt-lg",
          "gdGap.lt-xl": "gdGap.lt-xl",
          "gdGap.gt-xs": "gdGap.gt-xs",
          "gdGap.gt-sm": "gdGap.gt-sm",
          "gdGap.gt-md": "gdGap.gt-md",
          "gdGap.gt-lg": "gdGap.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridGapDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridGapDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridGapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$8,
            inputs: inputs$8
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/row/row.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$6 = 'auto';

      var GridRowStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_41) {
        _inherits(GridRowStyleBuilder, _angular_flex_layout_41);

        var _super62 = _createSuper(GridRowStyleBuilder);

        function GridRowStyleBuilder() {
          _classCallCheck(this, GridRowStyleBuilder);

          return _super62.apply(this, arguments);
        }

        _createClass(GridRowStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @return {?}
           */
          function buildStyles(input) {
            return {
              'grid-row': input || DEFAULT_VALUE$6
            };
          }
        }]);

        return GridRowStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridRowStyleBuilder.ɵfac = function GridRowStyleBuilder_Factory(t) {
        return ɵGridRowStyleBuilder_BaseFactory(t || GridRowStyleBuilder);
      };
      /** @nocollapse */


      GridRowStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridRowStyleBuilder_Factory() {
          return new GridRowStyleBuilder();
        },
        token: GridRowStyleBuilder,
        providedIn: "root"
      });

      var ɵGridRowStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridRowStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridRowDirective = /*#__PURE__*/function (_angular_flex_layout_42) {
        _inherits(GridRowDirective, _angular_flex_layout_42);

        var _super63 = _createSuper(GridRowDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridRowDirective(elementRef, styleBuilder, styler, marshal) {
          var _this75;

          _classCallCheck(this, GridRowDirective);

          _this75 = _super63.call(this, elementRef, styleBuilder, styler, marshal);
          _this75.DIRECTIVE_KEY = 'grid-row';
          _this75.styleCache = rowCache;

          _this75.init();

          return _this75;
        }

        return _createClass(GridRowDirective);
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridRowDirective.ɵfac = function GridRowDirective_Factory(t) {
        return new (t || GridRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridRowStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridRowDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridRowDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridRowStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridRowStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var rowCache = new Map();
      /** @type {?} */

      var inputs$9 = ['gdRow', 'gdRow.xs', 'gdRow.sm', 'gdRow.md', 'gdRow.lg', 'gdRow.xl', 'gdRow.lt-sm', 'gdRow.lt-md', 'gdRow.lt-lg', 'gdRow.lt-xl', 'gdRow.gt-xs', 'gdRow.gt-sm', 'gdRow.gt-md', 'gdRow.gt-lg'];
      /** @type {?} */

      var selector$9 = "\n  [gdRow],\n  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],\n  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],\n  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]\n";
      /**
       * 'grid-row' CSS Grid styling directive
       * Configures the name or position of an element within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
       */

      var DefaultGridRowDirective = /*#__PURE__*/function (_GridRowDirective) {
        _inherits(DefaultGridRowDirective, _GridRowDirective);

        var _super64 = _createSuper(DefaultGridRowDirective);

        function DefaultGridRowDirective() {
          var _this76;

          _classCallCheck(this, DefaultGridRowDirective);

          _this76 = _super64.apply(this, arguments);
          _this76.inputs = inputs$9;
          return _this76;
        }

        return _createClass(DefaultGridRowDirective);
      }(GridRowDirective);

      DefaultGridRowDirective.ɵfac = function DefaultGridRowDirective_Factory(t) {
        return ɵDefaultGridRowDirective_BaseFactory(t || DefaultGridRowDirective);
      };

      DefaultGridRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridRowDirective,
        selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]],
        inputs: {
          gdRow: "gdRow",
          "gdRow.xs": "gdRow.xs",
          "gdRow.sm": "gdRow.sm",
          "gdRow.md": "gdRow.md",
          "gdRow.lg": "gdRow.lg",
          "gdRow.xl": "gdRow.xl",
          "gdRow.lt-sm": "gdRow.lt-sm",
          "gdRow.lt-md": "gdRow.lt-md",
          "gdRow.lt-lg": "gdRow.lt-lg",
          "gdRow.lt-xl": "gdRow.lt-xl",
          "gdRow.gt-xs": "gdRow.gt-xs",
          "gdRow.gt-sm": "gdRow.gt-sm",
          "gdRow.gt-md": "gdRow.gt-md",
          "gdRow.gt-lg": "gdRow.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridRowDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridRowDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridRowDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$9,
            inputs: inputs$9
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/rows/rows.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$7 = 'none';
      /** @type {?} */

      var AUTO_SPECIFIER$1 = '!';

      var GridRowsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_43) {
        _inherits(GridRowsStyleBuilder, _angular_flex_layout_43);

        var _super65 = _createSuper(GridRowsStyleBuilder);

        function GridRowsStyleBuilder() {
          _classCallCheck(this, GridRowsStyleBuilder);

          return _super65.apply(this, arguments);
        }

        _createClass(GridRowsStyleBuilder, [{
          key: "buildStyles",
          value:
          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          function buildStyles(input, parent) {
            input = input || DEFAULT_VALUE$7;
            /** @type {?} */

            var auto = false;

            if (input.endsWith(AUTO_SPECIFIER$1)) {
              input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
              auto = true;
            }
            /** @type {?} */


            var css = {
              'display': parent.inline ? 'inline-grid' : 'grid',
              'grid-auto-rows': '',
              'grid-template-rows': ''
            };
            /** @type {?} */

            var key = auto ? 'grid-auto-rows' : 'grid-template-rows';
            css[key] = input;
            return css;
          }
        }]);

        return GridRowsStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridRowsStyleBuilder.ɵfac = function GridRowsStyleBuilder_Factory(t) {
        return ɵGridRowsStyleBuilder_BaseFactory(t || GridRowsStyleBuilder);
      };
      /** @nocollapse */


      GridRowsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridRowsStyleBuilder_Factory() {
          return new GridRowsStyleBuilder();
        },
        token: GridRowsStyleBuilder,
        providedIn: "root"
      });

      var ɵGridRowsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridRowsStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowsStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridRowsDirective = /*#__PURE__*/function (_angular_flex_layout_44) {
        _inherits(GridRowsDirective, _angular_flex_layout_44);

        var _super66 = _createSuper(GridRowsDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridRowsDirective(elementRef, styleBuilder, styler, marshal) {
          var _this77;

          _classCallCheck(this, GridRowsDirective);

          _this77 = _super66.call(this, elementRef, styleBuilder, styler, marshal);
          _this77.DIRECTIVE_KEY = 'grid-rows';
          _this77._inline = false;

          _this77.init();

          return _this77;
        }
        /**
         * @return {?}
         */


        _createClass(GridRowsDirective, [{
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? rowsInlineCache : rowsCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }]);

        return GridRowsDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridRowsDirective.ɵfac = function GridRowsDirective_Factory(t) {
        return new (t || GridRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridRowsDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridRowsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridRowsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridRowsDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridRowsStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var rowsCache = new Map();
      /** @type {?} */

      var rowsInlineCache = new Map();
      /** @type {?} */

      var inputs$10 = ['gdRows', 'gdRows.xs', 'gdRows.sm', 'gdRows.md', 'gdRows.lg', 'gdRows.xl', 'gdRows.lt-sm', 'gdRows.lt-md', 'gdRows.lt-lg', 'gdRows.lt-xl', 'gdRows.gt-xs', 'gdRows.gt-sm', 'gdRows.gt-md', 'gdRows.gt-lg'];
      /** @type {?} */

      var selector$10 = "\n  [gdRows],\n  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],\n  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],\n  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]\n";
      /**
       * 'grid-template-rows' CSS Grid styling directive
       * Configures the sizing for the rows in the grid
       * Syntax: <column value> [auto]
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
       */

      var DefaultGridRowsDirective = /*#__PURE__*/function (_GridRowsDirective) {
        _inherits(DefaultGridRowsDirective, _GridRowsDirective);

        var _super67 = _createSuper(DefaultGridRowsDirective);

        function DefaultGridRowsDirective() {
          var _this78;

          _classCallCheck(this, DefaultGridRowsDirective);

          _this78 = _super67.apply(this, arguments);
          _this78.inputs = inputs$10;
          return _this78;
        }

        return _createClass(DefaultGridRowsDirective);
      }(GridRowsDirective);

      DefaultGridRowsDirective.ɵfac = function DefaultGridRowsDirective_Factory(t) {
        return ɵDefaultGridRowsDirective_BaseFactory(t || DefaultGridRowsDirective);
      };

      DefaultGridRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridRowsDirective,
        selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]],
        inputs: {
          gdRows: "gdRows",
          "gdRows.xs": "gdRows.xs",
          "gdRows.sm": "gdRows.sm",
          "gdRows.md": "gdRows.md",
          "gdRows.lg": "gdRows.lg",
          "gdRows.xl": "gdRows.xl",
          "gdRows.lt-sm": "gdRows.lt-sm",
          "gdRows.lt-md": "gdRows.lt-md",
          "gdRows.lt-lg": "gdRows.lt-lg",
          "gdRows.lt-xl": "gdRows.lt-xl",
          "gdRows.gt-xs": "gdRows.gt-xs",
          "gdRows.gt-sm": "gdRows.gt-sm",
          "gdRows.gt-md": "gdRows.gt-md",
          "gdRows.gt-lg": "gdRows.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridRowsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridRowsDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridRowsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$10,
            inputs: inputs$10
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ALL_DIRECTIVES = [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
      /**
       * *****************************************************************
       * Define module for the CSS Grid API
       * *****************************************************************
       */

      var GridModule = /*#__PURE__*/_createClass(function GridModule() {
        _classCallCheck(this, GridModule);
      });

      GridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GridModule
      });
      GridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GridModule_Factory(t) {
          return new (t || GridModule)();
        },
        imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridModule, {
          declarations: function declarations() {
            return [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
          },
          imports: function imports() {
            return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]];
          },
          exports: function exports() {
            return [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]],
            declarations: [].concat(ALL_DIRECTIVES),
            exports: [].concat(ALL_DIRECTIVES)
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: grid/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=grid.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~dashboard-dashboard-module~fleetOverview-trip-trip-module-es5.js.map