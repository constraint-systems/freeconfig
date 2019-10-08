webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/grant.custer/Sites/constraint-systems/freeconfig/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function getDist(p1, p2) {
  var a = p2[0] - p1[0];
  var b = p2[1] - p1[1];
  return Math.sqrt(a * a + b * b);
}

var padding = 10;
var size = 10;
var colors = ['blue', 'hotpink', 'limegreen'];
var lh = 16 * 1.5; // mode 0 = move
// mode 1 = adjust
// mode 2 = grab

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      grid = _useState[0],
      setGrid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      mode = _useState2[0],
      setMode = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('dark'),
      color = _useState3[0],
      setColor = _useState3[1];

  var cpRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([0, 0, 10, 10]);
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var cursorRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var readout = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var keymap = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({});
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      help = _useState4[0],
      setHelp = _useState4[1];

  function KeyTip(letter, color) {
    return __jsx("span", {
      className: "keytip",
      onClick: function onClick() {
        keymap.current[letter] = true;
        keyAction(letter, false);
        setTimeout(function () {
          keymap.current[letter] = false;
        }, 300);
      },
      style: {
        outline: color === 'dark' ? 'solid 1px white' : 'solid 1px black',
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch',
        textAlign: 'center',
        display: 'inline-block',
        userSelect: 'none',
        cursor: 'default'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, letter === ' ' ? 'spacebar' : letter);
  }

  function reset() {
    if (cache !== null) {
      drawImage(cache.current);
    }
  }

  function keyAction(letter, repeat) {
    var c = canvasRef.current;
    var ctx = c.getContext('2d');
    var cp = cpRef.current;
    var dpr = window.devicePixelRatio || 1;
    var kc = keymap.current;

    function dp(val) {
      return val * dpr;
    }

    if (letter === 'a' && !repeat) {
      setMode(0);
    } else if (letter === 's' && !repeat) {
      setMode(1);
    } else if (letter === 'd' && !repeat) {
      setMode(2);
    } else if (letter === 'r' && !repeat) {
      reset();
    } else if (letter === 'o' && !repeat) {
      var handleChange = function handleChange(e) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(this.files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.type.indexOf('image') < 0) {
              continue;
            }

            var src = URL.createObjectURL(item);
            drawImage(src);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.removeEventListener('change', handleChange);
      };

      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      input.addEventListener('change', handleChange);
    } else if (letter === 'b') {
      setColor(function (prevState) {
        return prevState === 'light' ? 'dark' : 'light';
      });
    } else if (letter === 'e' && !repeat) {
      var link = document.createElement('a');

      var revokeURL = function revokeURL() {
        var me = this;
        requestAnimationFrame(function () {
          URL.revokeObjectURL(me.href);
          me.href = null;
        });
        this.removeEventListener('click', revokeURL);
      };

      ctx.canvas.toBlob(function (blob) {
        link.setAttribute('download', 'freeconfig.png');
        link.setAttribute('href', URL.createObjectURL(blob));
        link.addEventListener('click', revokeURL);
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      });
    } else if (letter === '?') {
      setHelp(function (prevState) {
        return !prevState;
      });
    }

    if (mode === 0) {
      if (kc['j']) {
        cp[1] += 1;
        if (cp[1] + cp[3] > grid[1]) cp[1] -= 1;
      }

      if (kc['k']) {
        cp[1] -= 1;
        if (cp[1] < 0) cp[1] = 0;
      }

      if (kc['l']) {
        cp[0] += 1;
        if (cp[0] + cp[2] > grid[0]) cp[0] -= 1;
      }

      if (kc['h']) {
        cp[0] -= 1;
        if (cp[0] < 0) cp[0] = 0;
      }
    } else if (mode === 1) {
      if (kc['k']) {
        cp[3] -= 1;
        if (cp[3] < 1) cp[3] = 1;
      }

      if (kc['j']) {
        cp[3] += 1;
        if (cp[1] + cp[3] > grid[1]) cp[3] -= 1;
      }

      if (kc['h']) {
        cp[2] -= 1;
        if (cp[2] < 1) cp[2] = 1;
      }

      if (kc['l']) {
        cp[2] += 1;
        if (cp[0] + cp[2] > grid[0]) cp[2] -= 1;
      }
    } else if (mode === 2) {
      if (kc['h']) {
        if (cp[0] > 0) {
          var s = size;
          var p = padding;
          var to_move = [(cp[0] - 1) * s + p, cp[1] * s + p, 1 * s, cp[3] * s];
          var t = document.createElement('canvas');
          t.width = dp(to_move[2]);
          t.height = dp(to_move[3]);
          var tx = t.getContext('2d');
          tx.scale(dpr, dpr);
          tx.drawImage.apply(tx, [c].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(to_move.map(function (c) {
            return dp(c);
          })), [0, 0, to_move[2], to_move[3]]));
          ctx.drawImage(c, dp(cp[0] * s + p), dp(cp[1] * s + p), dp(cp[2] * s), dp(cp[3] * s), (cp[0] - 1) * s + p, cp[1] * s + p, cp[2] * s, cp[3] * s);
          ctx.drawImage(t, (cp[0] + cp[2] - 1) * s + p, cp[1] * s + p, to_move[2], to_move[3]);
          cp[0] -= 1;
        }
      }

      if (kc['j']) {
        if (cp[1] + cp[3] < grid[1]) {
          var _s = size;
          var _p = padding;
          var _to_move = [cp[0] * _s + _p, (cp[1] + cp[3]) * _s + _p, cp[2] * _s, 1 * _s];

          var _t = document.createElement('canvas');

          _t.width = dp(_to_move[2]);
          _t.height = dp(_to_move[3]);

          var _tx = _t.getContext('2d');

          _tx.scale(dpr, dpr);

          _tx.drawImage.apply(_tx, [c].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_to_move.map(function (c) {
            return dp(c);
          })), [0, 0, _to_move[2], _to_move[3]]));

          ctx.drawImage(c, dp(cp[0] * _s + _p), dp(cp[1] * _s + _p), dp(cp[2] * _s), dp(cp[3] * _s), cp[0] * _s + _p, (cp[1] + 1) * _s + _p, cp[2] * _s, cp[3] * _s);
          ctx.drawImage(_t, cp[0] * _s + _p, cp[1] * _s + _p, _to_move[2], _to_move[3]);
          cp[1] += 1;
        }
      }

      if (kc['k']) {
        if (cp[1] > 0) {
          var _s2 = size;
          var _p2 = padding;
          var _to_move2 = [cp[0] * _s2 + _p2, (cp[1] - 1) * _s2 + _p2, cp[2] * _s2, 1 * _s2];

          var _t2 = document.createElement('canvas');

          _t2.width = dp(_to_move2[2]);
          _t2.height = dp(_to_move2[3]);

          var _tx2 = _t2.getContext('2d');

          _tx2.scale(dpr, dpr);

          _tx2.drawImage.apply(_tx2, [c].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_to_move2.map(function (c) {
            return dp(c);
          })), [0, 0, _to_move2[2], _to_move2[3]]));

          ctx.drawImage(c, dp(cp[0] * _s2 + _p2), dp(cp[1] * _s2 + _p2), dp(cp[2] * _s2), dp(cp[3] * _s2), cp[0] * _s2 + _p2, (cp[1] - 1) * _s2 + _p2, cp[2] * _s2, cp[3] * _s2);
          ctx.drawImage(_t2, cp[0] * _s2 + _p2, (cp[1] + cp[3] - 1) * _s2 + _p2, _to_move2[2], _to_move2[3]);
          cp[1] -= 1;
        }
      }

      if (kc['l']) {
        if (cp[0] + cp[2] < grid[0]) {
          var _s3 = size;
          var _p3 = padding;
          var _to_move3 = [(cp[0] + cp[2]) * _s3 + _p3, cp[1] * _s3 + _p3, 1 * _s3, cp[3] * _s3];

          var _t3 = document.createElement('canvas');

          _t3.width = dp(_to_move3[2]);
          _t3.height = dp(_to_move3[3]);

          var _tx3 = _t3.getContext('2d');

          _tx3.scale(dpr, dpr);

          _tx3.drawImage.apply(_tx3, [c].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_to_move3.map(function (c) {
            return dp(c);
          })), [0, 0, _to_move3[2], _to_move3[3]]));

          ctx.drawImage(c, dp(cp[0] * _s3 + _p3), dp(cp[1] * _s3 + _p3), dp(cp[2] * _s3), dp(cp[3] * _s3), (cp[0] + 1) * _s3 + _p3, cp[1] * _s3 + _p3, cp[2] * _s3, cp[3] * _s3);
          ctx.drawImage(_t3, cp[0] * _s3 + _p3, cp[1] * _s3 + _p3, _to_move3[2], _to_move3[3]);
          cp[0] += 1;
        }
      }
    }

    drawCursor();
  }

  function downHandler(e) {
    keymap.current[e.key] = true;
    keyAction(e.key, e.repeat);
  }

  function upHandler(e) {
    keymap.current[e.key] = false;
  }

  function drawImage(src) {
    cache.current = src;
    var dimensions = [window.innerWidth, window.innerHeight];
    var c = canvasRef.current;
    var ctx = c.getContext('2d');
    var w = dimensions[0] - padding * 2;
    var h = dimensions[1] - padding * 3 - lh;
    var a = w / h;
    var img = new Image();

    img.onload = function () {
      var pa = img.width / img.height;
      var pw = img.width;
      var ph = img.height;

      if (a >= pa) {
        if (ph > h) {
          ph = h;
          pw = h * pa;
        }
      } else if (a < pa) {
        if (pw > w) {
          pw = w;
          ph = w / pa;
        }
      }

      pw = Math.floor(pw / size) * size;
      ph = Math.floor(ph / size) * size;
      var dpr = window.devicePixelRatio || 1;
      c.width = pw * dpr + padding * 2;
      c.height = ph * dpr + padding * 2;
      c.style.width = pw + padding * 2 + 'px';
      c.style.height = ph + padding * 2 + 'px';
      c.style.marginLeft = 'auto';
      c.style.marginRight = 'auto';
      ctx.scale(dpr, dpr);
      var cur = cursorRef.current;
      cur.width = pw * dpr + padding * 2;
      cur.height = ph * dpr + padding * 2;
      cur.style.width = pw + padding * 2 + 'px';
      cur.style.height = ph + padding * 2 + 'px';
      var curtx = cur.getContext('2d');
      curtx.scale(dpr, dpr);
      ctx.drawImage(img, padding, padding, pw, ph);
      setGrid([pw / size, ph / size]);
    };

    img.src = src;
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(e.clipboardData.items), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        if (item.type.indexOf('image') < 0) {
          continue;
        }

        var file = item.getAsFile();
        var src = URL.createObjectURL(file);
        drawImage(src);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    var file = e.dataTransfer.files[0];
    var filename = file.path ? file.path : file.name ? file.name : '';
    var src = URL.createObjectURL(file);
    drawImage(src);
  }

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function drawCursor() {
    var r = cursorRef.current;
    var p = padding;
    var rtx = cursorRef.current.getContext('2d');
    var cp = cpRef.current;
    rtx.clearRect(0, 0, r.offsetWidth, r.offsetHeight);
    rtx.lineWidth = 2;

    if (mode === 0) {
      rtx.strokeStyle = colors[0];
    } else if (mode === 1) {
      rtx.strokeStyle = colors[1];
    } else if (mode === 2) {
      rtx.strokeStyle = colors[2];
    }

    rtx.strokeRect(cp[0] * size + p, cp[1] * size + p, cp[2] * size, cp[3] * size);

    if (grid !== null) {
      var ro = readout.current;
      ro.innerHTML = "".concat(grid[0], "x").concat(grid[1], "&nbsp;  ").concat(cp[0], ",").concat(cp[1], " ").concat(cp[2], "x").concat(cp[3]);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (grid !== null) {
      drawCursor();
    }
  }, [mode, grid]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var dimensions = [window.innerWidth, window.innerHeight];
    drawImage('/static/lion.jpg');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false);
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('paste', onPaste, false);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false);
    };
  }, [mode, grid]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, "Freeconfig")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2328641575",
    dynamic: [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000'],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/static/IBMPlexMono-Regular.woff2') format('woff2'), url('/static/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:14px;line-height:1.5;background:".concat(color === 'dark' ? '#222' : '#eee', ";color:").concat(color === 'dark' ? '#fff' : '#000', ";}body{margin:0;overflow:auto;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}p{margin:0;}a{color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2ZyZWVjb25maWcvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdWdCeUIsQUFHZ0MsQUFLQyxBQUdRLEFBT3JCLEFBSVcsQUFLWCxBQUdLLFNBWEEsQUFTaEIsS0FHQSxNQVJvQixDQWxCc0MsQ0FJMUQsQ0FXQSxNQVJpQixTQVlLLE1BWEosY0FZbEIsRUFYMEMsd0NBQ0wsbUNBQ3JDLEdBVkEiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9jb25zdHJhaW50LXN5c3RlbXMvZnJlZWNvbmZpZy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZnVuY3Rpb24gZ2V0RGlzdChwMSwgcDIpIHtcbiAgbGV0IGEgPSBwMlswXSAtIHAxWzBdO1xuICBsZXQgYiA9IHAyWzFdIC0gcDFbMV07XG4gIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59XG5cbmxldCBwYWRkaW5nID0gMTA7XG5sZXQgc2l6ZSA9IDEwO1xubGV0IGNvbG9ycyA9IFsnYmx1ZScsICdob3RwaW5rJywgJ2xpbWVncmVlbiddO1xuXG5sZXQgbGggPSAxNiAqIDEuNTtcblxuLy8gbW9kZSAwID0gbW92ZVxuLy8gbW9kZSAxID0gYWRqdXN0XG4vLyBtb2RlIDIgPSBncmFiXG5cbmxldCBIb21lID0gKCkgPT4ge1xuICBsZXQgW2dyaWQsIHNldEdyaWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGxldCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoJ2RhcmsnKTtcbiAgbGV0IGNwUmVmID0gdXNlUmVmKFswLCAwLCAxMCwgMTBdKTtcbiAgbGV0IGNhbnZhc1JlZiA9IHVzZVJlZigpO1xuICBsZXQgY3Vyc29yUmVmID0gdXNlUmVmKCk7XG4gIGxldCByZWFkb3V0ID0gdXNlUmVmKCk7XG4gIGxldCBrZXltYXAgPSB1c2VSZWYoe30pO1xuICBsZXQgY2FjaGUgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBbaGVscCwgc2V0SGVscF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBmdW5jdGlvbiBLZXlUaXAobGV0dGVyLCBjb2xvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9XCJrZXl0aXBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAga2V5bWFwLmN1cnJlbnRbbGV0dGVyXSA9IHRydWU7XG4gICAgICAgICAga2V5QWN0aW9uKGxldHRlciwgZmFsc2UpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAga2V5bWFwLmN1cnJlbnRbbGV0dGVyXSA9IGZhbHNlO1xuICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgb3V0bGluZTogY29sb3IgPT09ICdkYXJrJyA/ICdzb2xpZCAxcHggd2hpdGUnIDogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGV0dGVyID09PSAnICcgPyAnc3BhY2ViYXInIDogbGV0dGVyfVxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpZiAoY2FjaGUgIT09IG51bGwpIHtcbiAgICAgIGRyYXdJbWFnZShjYWNoZS5jdXJyZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBrZXlBY3Rpb24obGV0dGVyLCByZXBlYXQpIHtcbiAgICBsZXQgYyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoJzJkJyk7XG4gICAgbGV0IGNwID0gY3BSZWYuY3VycmVudDtcbiAgICBsZXQgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICBsZXQga2MgPSBrZXltYXAuY3VycmVudDtcblxuICAgIGZ1bmN0aW9uIGRwKHZhbCkge1xuICAgICAgcmV0dXJuIHZhbCAqIGRwcjtcbiAgICB9XG5cbiAgICBpZiAobGV0dGVyID09PSAnYScgJiYgIXJlcGVhdCkge1xuICAgICAgc2V0TW9kZSgwKTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ3MnICYmICFyZXBlYXQpIHtcbiAgICAgIHNldE1vZGUoMSk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdkJyAmJiAhcmVwZWF0KSB7XG4gICAgICBzZXRNb2RlKDIpO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAncicgJiYgIXJlcGVhdCkge1xuICAgICAgcmVzZXQoKTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ28nICYmICFyZXBlYXQpIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKTtcbiAgICAgICAgICBkcmF3SW1hZ2Uoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgICB9XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnYicpIHtcbiAgICAgIHNldENvbG9yKGZ1bmN0aW9uKHByZXZTdGF0ZSkge1xuICAgICAgICByZXR1cm4gcHJldlN0YXRlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnZScgJiYgIXJlcGVhdCkge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgIHZhciByZXZva2VVUkwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwobWUuaHJlZik7XG4gICAgICAgICAgbWUuaHJlZiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2b2tlVVJMKTtcbiAgICAgIH07XG5cbiAgICAgIGN0eC5jYW52YXMudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2ZyZWVjb25maWcucG5nJyk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZva2VVUkwpO1xuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnPycpIHtcbiAgICAgIHNldEhlbHAocHJldlN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuICFwcmV2U3RhdGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gMCkge1xuICAgICAgaWYgKGtjWydqJ10pIHtcbiAgICAgICAgY3BbMV0gKz0gMTtcbiAgICAgICAgaWYgKGNwWzFdICsgY3BbM10gPiBncmlkWzFdKSBjcFsxXSAtPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGtjWydrJ10pIHtcbiAgICAgICAgY3BbMV0gLT0gMTtcbiAgICAgICAgaWYgKGNwWzFdIDwgMCkgY3BbMV0gPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGtjWydsJ10pIHtcbiAgICAgICAgY3BbMF0gKz0gMTtcbiAgICAgICAgaWYgKGNwWzBdICsgY3BbMl0gPiBncmlkWzBdKSBjcFswXSAtPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGtjWydoJ10pIHtcbiAgICAgICAgY3BbMF0gLT0gMTtcbiAgICAgICAgaWYgKGNwWzBdIDwgMCkgY3BbMF0gPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMSkge1xuICAgICAgaWYgKGtjWydrJ10pIHtcbiAgICAgICAgY3BbM10gLT0gMTtcbiAgICAgICAgaWYgKGNwWzNdIDwgMSkgY3BbM10gPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGtjWydqJ10pIHtcbiAgICAgICAgY3BbM10gKz0gMTtcbiAgICAgICAgaWYgKGNwWzFdICsgY3BbM10gPiBncmlkWzFdKSBjcFszXSAtPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGtjWydoJ10pIHtcbiAgICAgICAgY3BbMl0gLT0gMTtcbiAgICAgICAgaWYgKGNwWzJdIDwgMSkgY3BbMl0gPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGtjWydsJ10pIHtcbiAgICAgICAgY3BbMl0gKz0gMTtcbiAgICAgICAgaWYgKGNwWzBdICsgY3BbMl0gPiBncmlkWzBdKSBjcFsyXSAtPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMikge1xuICAgICAgaWYgKGtjWydoJ10pIHtcbiAgICAgICAgaWYgKGNwWzBdID4gMCkge1xuICAgICAgICAgIGxldCBzID0gc2l6ZTtcbiAgICAgICAgICBsZXQgcCA9IHBhZGRpbmc7XG5cbiAgICAgICAgICBsZXQgdG9fbW92ZSA9IFsoY3BbMF0gLSAxKSAqIHMgKyBwLCBjcFsxXSAqIHMgKyBwLCAxICogcywgY3BbM10gKiBzXTtcblxuICAgICAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgdC53aWR0aCA9IGRwKHRvX21vdmVbMl0pO1xuICAgICAgICAgIHQuaGVpZ2h0ID0gZHAodG9fbW92ZVszXSk7XG4gICAgICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgIHR4LnNjYWxlKGRwciwgZHByKTtcbiAgICAgICAgICB0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgLi4udG9fbW92ZS5tYXAoYyA9PiBkcChjKSksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgZHAoY3BbMF0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsxXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzJdICogcyksXG4gICAgICAgICAgICBkcChjcFszXSAqIHMpLFxuICAgICAgICAgICAgKGNwWzBdIC0gMSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzFdICogcyArIHAsXG4gICAgICAgICAgICBjcFsyXSAqIHMsXG4gICAgICAgICAgICBjcFszXSAqIHNcbiAgICAgICAgICApO1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgKGNwWzBdICsgY3BbMl0gLSAxKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMV0gKiBzICsgcCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNwWzBdIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrY1snaiddKSB7XG4gICAgICAgIGlmIChjcFsxXSArIGNwWzNdIDwgZ3JpZFsxXSkge1xuICAgICAgICAgIGxldCBzID0gc2l6ZTtcbiAgICAgICAgICBsZXQgcCA9IHBhZGRpbmc7XG5cbiAgICAgICAgICBsZXQgdG9fbW92ZSA9IFtcbiAgICAgICAgICAgIGNwWzBdICogcyArIHAsXG4gICAgICAgICAgICAoY3BbMV0gKyBjcFszXSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzJdICogcyxcbiAgICAgICAgICAgIDEgKiBzLFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgIHQud2lkdGggPSBkcCh0b19tb3ZlWzJdKTtcbiAgICAgICAgICB0LmhlaWdodCA9IGRwKHRvX21vdmVbM10pO1xuICAgICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAgIHR4LnNjYWxlKGRwciwgZHByKTtcbiAgICAgICAgICB0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgLi4udG9fbW92ZS5tYXAoYyA9PiBkcChjKSksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgZHAoY3BbMF0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsxXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzJdICogcyksXG4gICAgICAgICAgICBkcChjcFszXSAqIHMpLFxuICAgICAgICAgICAgY3BbMF0gKiBzICsgcCxcbiAgICAgICAgICAgIChjcFsxXSArIDEpICogcyArIHAsXG4gICAgICAgICAgICBjcFsyXSAqIHMsXG4gICAgICAgICAgICBjcFszXSAqIHNcbiAgICAgICAgICApO1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgY3BbMF0gKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzFdICogcyArIHAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjcFsxXSArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2snXSkge1xuICAgICAgICBpZiAoY3BbMV0gPiAwKSB7XG4gICAgICAgICAgbGV0IHMgPSBzaXplO1xuICAgICAgICAgIGxldCBwID0gcGFkZGluZztcblxuICAgICAgICAgIGxldCB0b19tb3ZlID0gW2NwWzBdICogcyArIHAsIChjcFsxXSAtIDEpICogcyArIHAsIGNwWzJdICogcywgMSAqIHNdO1xuXG4gICAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICB0LndpZHRoID0gZHAodG9fbW92ZVsyXSk7XG4gICAgICAgICAgdC5oZWlnaHQgPSBkcCh0b19tb3ZlWzNdKTtcbiAgICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICB0eC5zY2FsZShkcHIsIGRwcik7XG4gICAgICAgICAgdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIC4uLnRvX21vdmUubWFwKGMgPT4gZHAoYykpLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIGRwKGNwWzBdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMV0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsyXSAqIHMpLFxuICAgICAgICAgICAgZHAoY3BbM10gKiBzKSxcbiAgICAgICAgICAgIGNwWzBdICogcyArIHAsXG4gICAgICAgICAgICAoY3BbMV0gLSAxKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMl0gKiBzLFxuICAgICAgICAgICAgY3BbM10gKiBzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIGNwWzBdICogcyArIHAsXG4gICAgICAgICAgICAoY3BbMV0gKyBjcFszXSAtIDEpICogcyArIHAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjcFsxXSAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2wnXSkge1xuICAgICAgICBpZiAoY3BbMF0gKyBjcFsyXSA8IGdyaWRbMF0pIHtcbiAgICAgICAgICBsZXQgcyA9IHNpemU7XG4gICAgICAgICAgbGV0IHAgPSBwYWRkaW5nO1xuXG4gICAgICAgICAgbGV0IHRvX21vdmUgPSBbXG4gICAgICAgICAgICAoY3BbMF0gKyBjcFsyXSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzFdICogcyArIHAsXG4gICAgICAgICAgICAxICogcyxcbiAgICAgICAgICAgIGNwWzNdICogcyxcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICB0LndpZHRoID0gZHAodG9fbW92ZVsyXSk7XG4gICAgICAgICAgdC5oZWlnaHQgPSBkcCh0b19tb3ZlWzNdKTtcbiAgICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgdHguc2NhbGUoZHByLCBkcHIpO1xuICAgICAgICAgIHR4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAuLi50b19tb3ZlLm1hcChjID0+IGRwKGMpKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICBkcChjcFswXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzFdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMl0gKiBzKSxcbiAgICAgICAgICAgIGRwKGNwWzNdICogcyksXG4gICAgICAgICAgICAoY3BbMF0gKyAxKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMV0gKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzJdICogcyxcbiAgICAgICAgICAgIGNwWzNdICogc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMV0gKiBzICsgcCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNwWzBdICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3Q3Vyc29yKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga2V5bWFwLmN1cnJlbnRbZS5rZXldID0gdHJ1ZTtcbiAgICBrZXlBY3Rpb24oZS5rZXksIGUucmVwZWF0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga2V5bWFwLmN1cnJlbnRbZS5rZXldID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3SW1hZ2Uoc3JjKSB7XG4gICAgY2FjaGUuY3VycmVudCA9IHNyYztcblxuICAgIGxldCBkaW1lbnNpb25zID0gW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdO1xuXG4gICAgbGV0IGMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCB3ID0gZGltZW5zaW9uc1swXSAtIHBhZGRpbmcgKiAyO1xuICAgIGxldCBoID0gZGltZW5zaW9uc1sxXSAtIHBhZGRpbmcgKiAzIC0gbGg7XG4gICAgbGV0IGEgPSB3IC8gaDtcblxuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IHBhID0gaW1nLndpZHRoIC8gaW1nLmhlaWdodDtcbiAgICAgIGxldCBwdyA9IGltZy53aWR0aDtcbiAgICAgIGxldCBwaCA9IGltZy5oZWlnaHQ7XG4gICAgICBpZiAoYSA+PSBwYSkge1xuICAgICAgICBpZiAocGggPiBoKSB7XG4gICAgICAgICAgcGggPSBoO1xuICAgICAgICAgIHB3ID0gaCAqIHBhO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGEgPCBwYSkge1xuICAgICAgICBpZiAocHcgPiB3KSB7XG4gICAgICAgICAgcHcgPSB3O1xuICAgICAgICAgIHBoID0gdyAvIHBhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHB3ID0gTWF0aC5mbG9vcihwdyAvIHNpemUpICogc2l6ZTtcbiAgICAgIHBoID0gTWF0aC5mbG9vcihwaCAvIHNpemUpICogc2l6ZTtcblxuICAgICAgbGV0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG5cbiAgICAgIGMud2lkdGggPSBwdyAqIGRwciArIHBhZGRpbmcgKiAyO1xuICAgICAgYy5oZWlnaHQgPSBwaCAqIGRwciArIHBhZGRpbmcgKiAyO1xuICAgICAgYy5zdHlsZS53aWR0aCA9IHB3ICsgcGFkZGluZyAqIDIgKyAncHgnO1xuICAgICAgYy5zdHlsZS5oZWlnaHQgPSBwaCArIHBhZGRpbmcgKiAyICsgJ3B4JztcbiAgICAgIGMuc3R5bGUubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgICAgIGMuc3R5bGUubWFyZ2luUmlnaHQgPSAnYXV0byc7XG5cbiAgICAgIGN0eC5zY2FsZShkcHIsIGRwcik7XG5cbiAgICAgIGxldCBjdXIgPSBjdXJzb3JSZWYuY3VycmVudDtcbiAgICAgIGN1ci53aWR0aCA9IHB3ICogZHByICsgcGFkZGluZyAqIDI7XG4gICAgICBjdXIuaGVpZ2h0ID0gcGggKiBkcHIgKyBwYWRkaW5nICogMjtcbiAgICAgIGN1ci5zdHlsZS53aWR0aCA9IHB3ICsgcGFkZGluZyAqIDIgKyAncHgnO1xuICAgICAgY3VyLnN0eWxlLmhlaWdodCA9IHBoICsgcGFkZGluZyAqIDIgKyAncHgnO1xuXG4gICAgICBsZXQgY3VydHggPSBjdXIuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgY3VydHguc2NhbGUoZHByLCBkcHIpO1xuXG4gICAgICBjdHguZHJhd0ltYWdlKGltZywgcGFkZGluZywgcGFkZGluZywgcHcsIHBoKTtcbiAgICAgIHNldEdyaWQoW3B3IC8gc2l6ZSwgcGggLyBzaXplXSk7XG4gICAgfTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICB9XG5cbiAgZnVuY3Rpb24gb25QYXN0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGUuY2xpcGJvYXJkRGF0YS5pdGVtcykge1xuICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgZHJhd0ltYWdlKHNyYyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xuICAgIGxldCBmaWxlbmFtZSA9IGZpbGUucGF0aCA/IGZpbGUucGF0aCA6IGZpbGUubmFtZSA/IGZpbGUubmFtZSA6ICcnO1xuICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIGRyYXdJbWFnZShzcmMpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0N1cnNvcigpIHtcbiAgICBsZXQgciA9IGN1cnNvclJlZi5jdXJyZW50O1xuICAgIGxldCBwID0gcGFkZGluZztcbiAgICBsZXQgcnR4ID0gY3Vyc29yUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgY3AgPSBjcFJlZi5jdXJyZW50O1xuICAgIHJ0eC5jbGVhclJlY3QoMCwgMCwgci5vZmZzZXRXaWR0aCwgci5vZmZzZXRIZWlnaHQpO1xuICAgIHJ0eC5saW5lV2lkdGggPSAyO1xuICAgIGlmIChtb2RlID09PSAwKSB7XG4gICAgICBydHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbMF07XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAxKSB7XG4gICAgICBydHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbMV07XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAyKSB7XG4gICAgICBydHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbMl07XG4gICAgfVxuICAgIHJ0eC5zdHJva2VSZWN0KFxuICAgICAgY3BbMF0gKiBzaXplICsgcCxcbiAgICAgIGNwWzFdICogc2l6ZSArIHAsXG4gICAgICBjcFsyXSAqIHNpemUsXG4gICAgICBjcFszXSAqIHNpemVcbiAgICApO1xuXG4gICAgaWYgKGdyaWQgIT09IG51bGwpIHtcbiAgICAgIGxldCBybyA9IHJlYWRvdXQuY3VycmVudDtcbiAgICAgIHJvLmlubmVySFRNTCA9IGAke2dyaWRbMF19eCR7Z3JpZFsxXX0mbmJzcDsgICR7Y3BbMF19LCR7Y3BbMV19ICR7Y3BbMl19eCR7XG4gICAgICAgIGNwWzNdXG4gICAgICB9YDtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChncmlkICE9PSBudWxsKSB7XG4gICAgICBkcmF3Q3Vyc29yKCk7XG4gICAgfVxuICB9LCBbbW9kZSwgZ3JpZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRpbWVuc2lvbnMgPSBbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF07XG5cbiAgICBkcmF3SW1hZ2UoJy9zdGF0aWMvbGlvbi5qcGcnKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW21vZGUsIGdyaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZyZWVjb25maWc8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9zdGF0aWMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogY3VzdG9tLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvciA9PT0gJ2RhcmsnID8gJyMyMjInIDogJyNlZWUnfTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvciA9PT0gJ2RhcmsnID8gJyNmZmYnIDogJyMwMDAnfTtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxjYW52YXMgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fSByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC01MCUsMClgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXtjdXJzb3JSZWZ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogcGFkZGluZywgcGFkZGluZ0xlZnQ6ICcyY2gnIH19XG4gICAgICAgIHJlZj17cmVhZG91dH1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgb3V0bGluZTogY29sb3IgPT09ICdkYXJrJyA/ICdzb2xpZCAxcHggd2hpdGUnIDogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgZGlzcGxheTogaGVscCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgbWF4V2lkdGg6IGBjYWxjKDEwMCUgLSAzcmVtKWAsXG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIGNvbG9yID09PSAnZGFyaycgPyAncmdiYSgwLDAsMCwwLjgpJyA6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuOCknLFxuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjc1cmVtJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiAnMC43NXJlbScsXG4gICAgICAgICAgcmlnaHQ6ICcxLjVyZW0nLFxuICAgICAgICAgIGJvdHRvbTogJzEuNXJlbScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC43NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+XG4gICAgICAgICAgRnJlZWNvbmZpZyBsZXRzIHlvdSBwdXNoIGltYWdlIHBpeGVscyBhcm91bmQgaW4gYmxvY2tzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjM3NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+TW9kZTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuNzVyZW0nIH19PlxuICAgICAgICAgIHtLZXlUaXAoJ2EnLCBjb2xvcil9eycgJ31cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBtb2RlID09PSAwID8gY29sb3JzWzBdIDogJ3RyYW5zcGFyZW50JyB9fT5cbiAgICAgICAgICAgIG1vdmVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgJm5ic3A7IHtLZXlUaXAoJ3MnLCBjb2xvcil9eycgJ31cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBtb2RlID09PSAxID8gY29sb3JzWzFdIDogJ3RyYW5zcGFyZW50JyB9fT5cbiAgICAgICAgICAgIGFkanVzdCBzaXplXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICZuYnNwOyB7S2V5VGlwKCdkJywgY29sb3IpfXsnICd9XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgYmFja2dyb3VuZDogbW9kZSA9PT0gMiA/IGNvbG9yc1syXSA6ICd0cmFuc3BhcmVudCcgfX0+XG4gICAgICAgICAgICBncmFiXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge21vZGUgPT09IDAgPyAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjM3NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+XG4gICAgICAgICAgICBNb3ZlIGN1cnNvclxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge21vZGUgPT09IDEgPyAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjM3NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+XG4gICAgICAgICAgICBBZGp1c3QgY3Vyc29yIHNpemVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHttb2RlID09PSAyID8gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC4zNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19PlxuICAgICAgICAgICAgTW92ZSBzZWxlY3Rpb25cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjc1cmVtJyB9fT5cbiAgICAgICAgICB7W1snaCcsICfihpAnXSwgWydqJywgJ+KGkyddLCBbJ2snLCAn4oaRJ10sIFsnbCcsICfihpInXV0ubWFwKGEgPT4gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHtLZXlUaXAoYVswXSwgY29sb3IpfSB7YVsxXX0mbmJzcDt7JyAnfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuMzc1cmVtJywgbWF4V2lkdGg6ICc2MGNoJyB9fT5JbWFnZTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19PlxuICAgICAgICAgIFRvIGFkZCBhbiBpbWFnZSB5b3UgY2FuIHBhc3RlLCBkcm9wLCBvciBwcmVzcyB7S2V5VGlwKCdvJywgY29sb3IpfSB0b1xuICAgICAgICAgIG9wZW4gYSBmaWxlIGRpYWxvZy57JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvUU1STl9HWDdwNElcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIExpb24gcGhvdG8gYnkgTWF1cml0cyBCYXVzZW5oYXJ04oaXXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuMzc1cmVtJywgbWF4V2lkdGg6ICc2MGNoJyB9fT5cbiAgICAgICAgICBTcGVjaWFsXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC43NXJlbScgfX0+XG4gICAgICAgICAge0tleVRpcCgncicsIGNvbG9yKX0gcmVzZXQgaW1hZ2UmbmJzcDsge0tleVRpcCgnZScsIGNvbG9yKX0gc2F2ZSBhc1xuICAgICAgICAgIHBuZyZuYnNwOyB7S2V5VGlwKCdiJywgY29sb3IpfXsnICd9XG4gICAgICAgICAge2NvbG9yID09PSAnZGFyaycgPyAnbGlnaHQgYmcnIDogJ2RhcmsgYmcnfSZuYnNwOyB7S2V5VGlwKCc/JywgY29sb3IpfXsnICd9XG4gICAgICAgICAgaGVscFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2hlbHAgPyBudWxsIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgcmlnaHQ6ICcxLjVyZW0nLFxuICAgICAgICAgICAgYm90dG9tOiAnMS41cmVtJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgIGNvbG9yID09PSAnZGFyaycgPyAncmdiYSgwLDAsMCwwLjgpJyA6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuOCknLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7S2V5VGlwKCc/JywgY29sb3IpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/freeconfig/pages/index.js */")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, __jsx("canvas", {
    style: {
      display: 'block'
    },
    ref: canvasRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }), __jsx("canvas", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      transform: "translate(-50%,0)"
    },
    ref: cursorRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  })), __jsx("div", {
    style: {
      position: 'absolute',
      bottom: padding,
      paddingLeft: '2ch'
    },
    ref: readout,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'fixed',
      outline: color === 'dark' ? 'solid 1px white' : 'solid 1px black',
      display: help ? 'block' : 'none',
      maxWidth: "calc(100% - 3rem)",
      background: color === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
      paddingLeft: '2ch',
      paddingRight: '2ch',
      paddingBottom: '0.75rem',
      paddingTop: '0.75rem',
      right: '1.5rem',
      bottom: '1.5rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: '0.75rem',
      maxWidth: '60ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }, "Freeconfig lets you push image pixels around in blocks."), __jsx("div", {
    style: {
      marginBottom: '0.375rem',
      maxWidth: '60ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, "Mode"), __jsx("div", {
    style: {
      marginBottom: '0.75rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, KeyTip('a', color), ' ', __jsx("span", {
    style: {
      background: mode === 0 ? colors[0] : 'transparent'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }, "move"), "\xA0 ", KeyTip('s', color), ' ', __jsx("span", {
    style: {
      background: mode === 1 ? colors[1] : 'transparent'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: this
  }, "adjust size"), "\xA0 ", KeyTip('d', color), ' ', __jsx("span", {
    style: {
      background: mode === 2 ? colors[2] : 'transparent'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }, "grab")), mode === 0 ? __jsx("div", {
    style: {
      marginBottom: '0.375rem',
      maxWidth: '60ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, "Move cursor") : null, mode === 1 ? __jsx("div", {
    style: {
      marginBottom: '0.375rem',
      maxWidth: '60ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }, "Adjust cursor size") : null, mode === 2 ? __jsx("div", {
    style: {
      marginBottom: '0.375rem',
      maxWidth: '60ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, "Move selection") : null, __jsx("div", {
    style: {
      marginBottom: '0.75rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  }, [['h', '←'], ['j', '↓'], ['k', '↑'], ['l', '→']].map(function (a) {
    return __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620
      },
      __self: this
    }, KeyTip(a[0], color), " ", a[1], "\xA0", ' ');
  })), __jsx("div", {
    style: {
      marginBottom: '0.375rem',
      maxWidth: '60ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: this
  }, "Image"), __jsx("div", {
    style: {
      marginBottom: '0.75rem',
      maxWidth: '60ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: this
  }, "To add an image you can paste, drop, or press ", KeyTip('o', color), " to open a file dialog.", ' ', __jsx("a", {
    href: "https://unsplash.com/photos/QMRN_GX7p4I",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
    },
    __self: this
  }, "Lion photo by Maurits Bausenhart\u2197")), __jsx("div", {
    style: {
      marginBottom: '0.375rem',
      maxWidth: '60ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: this
  }, "Special"), __jsx("div", {
    style: {
      marginBottom: '0.75rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  }, KeyTip('r', color), " reset image\xA0 ", KeyTip('e', color), " save as png\xA0 ", KeyTip('b', color), ' ', color === 'dark' ? 'light bg' : 'dark bg', "\xA0 ", KeyTip('?', color), ' ', "help")), help ? null : __jsx("div", {
    style: {
      position: 'fixed',
      right: '1.5rem',
      bottom: '1.5rem',
      background: color === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: this
  }, KeyTip('?', color)));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.851f5ddaf3be704c6352.hot-update.js.map