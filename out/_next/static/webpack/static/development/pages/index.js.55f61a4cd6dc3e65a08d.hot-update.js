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

      var cropped = document.createElement('canvas');
      var crtx = cropped.getContext('2d');
      cropped.width = c.offsetWidth * dpr - padding * 2 * dpr;
      cropped.height = c.offsetHeight * dpr - padding * 2 * dpr;
      crtx.drawImage(c, padding * dpr, padding * dpr);
      crtx.canvas.toBlob(function (blob) {
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
      lineNumber: 521
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, "Freeconfig")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2328641575",
    dynamic: [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000'],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/static/IBMPlexMono-Regular.woff2') format('woff2'), url('/static/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:14px;line-height:1.5;background:".concat(color === 'dark' ? '#222' : '#eee', ";color:").concat(color === 'dark' ? '#fff' : '#000', ";}body{margin:0;overflow:auto;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}p{margin:0;}a{color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2ZyZWVjb25maWcvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNGdCeUIsQUFHZ0MsQUFLQyxBQUdRLEFBT3JCLEFBSVcsQUFLWCxBQUdLLFNBWEEsQUFTaEIsS0FHQSxNQVJvQixDQWxCc0MsQ0FJMUQsQ0FXQSxNQVJpQixTQVlLLE1BWEosY0FZbEIsRUFYMEMsd0NBQ0wsbUNBQ3JDLEdBVkEiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9jb25zdHJhaW50LXN5c3RlbXMvZnJlZWNvbmZpZy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZnVuY3Rpb24gZ2V0RGlzdChwMSwgcDIpIHtcbiAgbGV0IGEgPSBwMlswXSAtIHAxWzBdO1xuICBsZXQgYiA9IHAyWzFdIC0gcDFbMV07XG4gIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59XG5cbmxldCBwYWRkaW5nID0gMTA7XG5sZXQgc2l6ZSA9IDEwO1xubGV0IGNvbG9ycyA9IFsnYmx1ZScsICdob3RwaW5rJywgJ2xpbWVncmVlbiddO1xuXG5sZXQgbGggPSAxNiAqIDEuNTtcblxuLy8gbW9kZSAwID0gbW92ZVxuLy8gbW9kZSAxID0gYWRqdXN0XG4vLyBtb2RlIDIgPSBncmFiXG5cbmxldCBIb21lID0gKCkgPT4ge1xuICBsZXQgW2dyaWQsIHNldEdyaWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGxldCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoJ2RhcmsnKTtcbiAgbGV0IGNwUmVmID0gdXNlUmVmKFswLCAwLCAxMCwgMTBdKTtcbiAgbGV0IGNhbnZhc1JlZiA9IHVzZVJlZigpO1xuICBsZXQgY3Vyc29yUmVmID0gdXNlUmVmKCk7XG4gIGxldCByZWFkb3V0ID0gdXNlUmVmKCk7XG4gIGxldCBrZXltYXAgPSB1c2VSZWYoe30pO1xuICBsZXQgY2FjaGUgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBbaGVscCwgc2V0SGVscF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBmdW5jdGlvbiBLZXlUaXAobGV0dGVyLCBjb2xvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9XCJrZXl0aXBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAga2V5bWFwLmN1cnJlbnRbbGV0dGVyXSA9IHRydWU7XG4gICAgICAgICAga2V5QWN0aW9uKGxldHRlciwgZmFsc2UpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAga2V5bWFwLmN1cnJlbnRbbGV0dGVyXSA9IGZhbHNlO1xuICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgb3V0bGluZTogY29sb3IgPT09ICdkYXJrJyA/ICdzb2xpZCAxcHggd2hpdGUnIDogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGV0dGVyID09PSAnICcgPyAnc3BhY2ViYXInIDogbGV0dGVyfVxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpZiAoY2FjaGUgIT09IG51bGwpIHtcbiAgICAgIGRyYXdJbWFnZShjYWNoZS5jdXJyZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBrZXlBY3Rpb24obGV0dGVyLCByZXBlYXQpIHtcbiAgICBsZXQgYyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoJzJkJyk7XG4gICAgbGV0IGNwID0gY3BSZWYuY3VycmVudDtcbiAgICBsZXQgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICBsZXQga2MgPSBrZXltYXAuY3VycmVudDtcblxuICAgIGZ1bmN0aW9uIGRwKHZhbCkge1xuICAgICAgcmV0dXJuIHZhbCAqIGRwcjtcbiAgICB9XG5cbiAgICBpZiAobGV0dGVyID09PSAnYScgJiYgIXJlcGVhdCkge1xuICAgICAgc2V0TW9kZSgwKTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ3MnICYmICFyZXBlYXQpIHtcbiAgICAgIHNldE1vZGUoMSk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdkJyAmJiAhcmVwZWF0KSB7XG4gICAgICBzZXRNb2RlKDIpO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAncicgJiYgIXJlcGVhdCkge1xuICAgICAgcmVzZXQoKTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ28nICYmICFyZXBlYXQpIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKTtcbiAgICAgICAgICBkcmF3SW1hZ2Uoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgICB9XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnYicpIHtcbiAgICAgIHNldENvbG9yKGZ1bmN0aW9uKHByZXZTdGF0ZSkge1xuICAgICAgICByZXR1cm4gcHJldlN0YXRlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnZScgJiYgIXJlcGVhdCkge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgIHZhciByZXZva2VVUkwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwobWUuaHJlZik7XG4gICAgICAgICAgbWUuaHJlZiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2b2tlVVJMKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBjcm9wcGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBsZXQgY3J0eCA9IGNyb3BwZWQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNyb3BwZWQud2lkdGggPSBjLm9mZnNldFdpZHRoICogZHByIC0gcGFkZGluZyAqIDIgKiBkcHI7XG4gICAgICBjcm9wcGVkLmhlaWdodCA9IGMub2Zmc2V0SGVpZ2h0ICogZHByIC0gcGFkZGluZyAqIDIgKiBkcHI7XG4gICAgICBjcnR4LmRyYXdJbWFnZShjLCBwYWRkaW5nICogZHByLCBwYWRkaW5nICogZHByKTtcbiAgICAgIGNydHguY2FudmFzLnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdmcmVlY29uZmlnLnBuZycpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpO1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2b2tlVVJMKTtcbiAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJz8nKSB7XG4gICAgICBzZXRIZWxwKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiAhcHJldlN0YXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09IDApIHtcbiAgICAgIGlmIChrY1snaiddKSB7XG4gICAgICAgIGNwWzFdICs9IDE7XG4gICAgICAgIGlmIChjcFsxXSArIGNwWzNdID4gZ3JpZFsxXSkgY3BbMV0gLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snayddKSB7XG4gICAgICAgIGNwWzFdIC09IDE7XG4gICAgICAgIGlmIChjcFsxXSA8IDApIGNwWzFdID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snbCddKSB7XG4gICAgICAgIGNwWzBdICs9IDE7XG4gICAgICAgIGlmIChjcFswXSArIGNwWzJdID4gZ3JpZFswXSkgY3BbMF0gLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snaCddKSB7XG4gICAgICAgIGNwWzBdIC09IDE7XG4gICAgICAgIGlmIChjcFswXSA8IDApIGNwWzBdID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgIGlmIChrY1snayddKSB7XG4gICAgICAgIGNwWzNdIC09IDE7XG4gICAgICAgIGlmIChjcFszXSA8IDEpIGNwWzNdID0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snaiddKSB7XG4gICAgICAgIGNwWzNdICs9IDE7XG4gICAgICAgIGlmIChjcFsxXSArIGNwWzNdID4gZ3JpZFsxXSkgY3BbM10gLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snaCddKSB7XG4gICAgICAgIGNwWzJdIC09IDE7XG4gICAgICAgIGlmIChjcFsyXSA8IDEpIGNwWzJdID0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snbCddKSB7XG4gICAgICAgIGNwWzJdICs9IDE7XG4gICAgICAgIGlmIChjcFswXSArIGNwWzJdID4gZ3JpZFswXSkgY3BbMl0gLT0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDIpIHtcbiAgICAgIGlmIChrY1snaCddKSB7XG4gICAgICAgIGlmIChjcFswXSA+IDApIHtcbiAgICAgICAgICBsZXQgcyA9IHNpemU7XG4gICAgICAgICAgbGV0IHAgPSBwYWRkaW5nO1xuXG4gICAgICAgICAgbGV0IHRvX21vdmUgPSBbKGNwWzBdIC0gMSkgKiBzICsgcCwgY3BbMV0gKiBzICsgcCwgMSAqIHMsIGNwWzNdICogc107XG5cbiAgICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgIHQud2lkdGggPSBkcCh0b19tb3ZlWzJdKTtcbiAgICAgICAgICB0LmhlaWdodCA9IGRwKHRvX21vdmVbM10pO1xuICAgICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICB0eC5zY2FsZShkcHIsIGRwcik7XG4gICAgICAgICAgdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIC4uLnRvX21vdmUubWFwKGMgPT4gZHAoYykpLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIGRwKGNwWzBdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMV0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsyXSAqIHMpLFxuICAgICAgICAgICAgZHAoY3BbM10gKiBzKSxcbiAgICAgICAgICAgIChjcFswXSAtIDEpICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMl0gKiBzLFxuICAgICAgICAgICAgY3BbM10gKiBzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIChjcFswXSArIGNwWzJdIC0gMSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzFdICogcyArIHAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjcFswXSAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2onXSkge1xuICAgICAgICBpZiAoY3BbMV0gKyBjcFszXSA8IGdyaWRbMV0pIHtcbiAgICAgICAgICBsZXQgcyA9IHNpemU7XG4gICAgICAgICAgbGV0IHAgPSBwYWRkaW5nO1xuXG4gICAgICAgICAgbGV0IHRvX21vdmUgPSBbXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgKGNwWzFdICsgY3BbM10pICogcyArIHAsXG4gICAgICAgICAgICBjcFsyXSAqIHMsXG4gICAgICAgICAgICAxICogcyxcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICB0LndpZHRoID0gZHAodG9fbW92ZVsyXSk7XG4gICAgICAgICAgdC5oZWlnaHQgPSBkcCh0b19tb3ZlWzNdKTtcbiAgICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICB0eC5zY2FsZShkcHIsIGRwcik7XG4gICAgICAgICAgdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIC4uLnRvX21vdmUubWFwKGMgPT4gZHAoYykpLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIGRwKGNwWzBdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMV0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsyXSAqIHMpLFxuICAgICAgICAgICAgZHAoY3BbM10gKiBzKSxcbiAgICAgICAgICAgIGNwWzBdICogcyArIHAsXG4gICAgICAgICAgICAoY3BbMV0gKyAxKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMl0gKiBzLFxuICAgICAgICAgICAgY3BbM10gKiBzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIGNwWzBdICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3BbMV0gKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGtjWydrJ10pIHtcbiAgICAgICAgaWYgKGNwWzFdID4gMCkge1xuICAgICAgICAgIGxldCBzID0gc2l6ZTtcbiAgICAgICAgICBsZXQgcCA9IHBhZGRpbmc7XG5cbiAgICAgICAgICBsZXQgdG9fbW92ZSA9IFtjcFswXSAqIHMgKyBwLCAoY3BbMV0gLSAxKSAqIHMgKyBwLCBjcFsyXSAqIHMsIDEgKiBzXTtcblxuICAgICAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgdC53aWR0aCA9IGRwKHRvX21vdmVbMl0pO1xuICAgICAgICAgIHQuaGVpZ2h0ID0gZHAodG9fbW92ZVszXSk7XG4gICAgICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgdHguc2NhbGUoZHByLCBkcHIpO1xuICAgICAgICAgIHR4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAuLi50b19tb3ZlLm1hcChjID0+IGRwKGMpKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICBkcChjcFswXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzFdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMl0gKiBzKSxcbiAgICAgICAgICAgIGRwKGNwWzNdICogcyksXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgKGNwWzFdIC0gMSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzJdICogcyxcbiAgICAgICAgICAgIGNwWzNdICogc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgKGNwWzFdICsgY3BbM10gLSAxKSAqIHMgKyBwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3BbMV0gLT0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGtjWydsJ10pIHtcbiAgICAgICAgaWYgKGNwWzBdICsgY3BbMl0gPCBncmlkWzBdKSB7XG4gICAgICAgICAgbGV0IHMgPSBzaXplO1xuICAgICAgICAgIGxldCBwID0gcGFkZGluZztcblxuICAgICAgICAgIGxldCB0b19tb3ZlID0gW1xuICAgICAgICAgICAgKGNwWzBdICsgY3BbMl0pICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgMSAqIHMsXG4gICAgICAgICAgICBjcFszXSAqIHMsXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgdC53aWR0aCA9IGRwKHRvX21vdmVbMl0pO1xuICAgICAgICAgIHQuaGVpZ2h0ID0gZHAodG9fbW92ZVszXSk7XG4gICAgICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgIHR4LnNjYWxlKGRwciwgZHByKTtcbiAgICAgICAgICB0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgLi4udG9fbW92ZS5tYXAoYyA9PiBkcChjKSksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgZHAoY3BbMF0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsxXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzJdICogcyksXG4gICAgICAgICAgICBkcChjcFszXSAqIHMpLFxuICAgICAgICAgICAgKGNwWzBdICsgMSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzFdICogcyArIHAsXG4gICAgICAgICAgICBjcFsyXSAqIHMsXG4gICAgICAgICAgICBjcFszXSAqIHNcbiAgICAgICAgICApO1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgY3BbMF0gKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzFdICogcyArIHAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjcFswXSArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0N1cnNvcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGtleW1hcC5jdXJyZW50W2Uua2V5XSA9IHRydWU7XG4gICAga2V5QWN0aW9uKGUua2V5LCBlLnJlcGVhdCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGtleW1hcC5jdXJyZW50W2Uua2V5XSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0ltYWdlKHNyYykge1xuICAgIGNhY2hlLmN1cnJlbnQgPSBzcmM7XG5cbiAgICBsZXQgZGltZW5zaW9ucyA9IFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XTtcblxuICAgIGxldCBjID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgdyA9IGRpbWVuc2lvbnNbMF0gLSBwYWRkaW5nICogMjtcbiAgICBsZXQgaCA9IGRpbWVuc2lvbnNbMV0gLSBwYWRkaW5nICogMyAtIGxoO1xuICAgIGxldCBhID0gdyAvIGg7XG5cbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxldCBwYSA9IGltZy53aWR0aCAvIGltZy5oZWlnaHQ7XG4gICAgICBsZXQgcHcgPSBpbWcud2lkdGg7XG4gICAgICBsZXQgcGggPSBpbWcuaGVpZ2h0O1xuICAgICAgaWYgKGEgPj0gcGEpIHtcbiAgICAgICAgaWYgKHBoID4gaCkge1xuICAgICAgICAgIHBoID0gaDtcbiAgICAgICAgICBwdyA9IGggKiBwYTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhIDwgcGEpIHtcbiAgICAgICAgaWYgKHB3ID4gdykge1xuICAgICAgICAgIHB3ID0gdztcbiAgICAgICAgICBwaCA9IHcgLyBwYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwdyA9IE1hdGguZmxvb3IocHcgLyBzaXplKSAqIHNpemU7XG4gICAgICBwaCA9IE1hdGguZmxvb3IocGggLyBzaXplKSAqIHNpemU7XG5cbiAgICAgIGxldCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gICAgICBjLndpZHRoID0gcHcgKiBkcHIgKyBwYWRkaW5nICogMjtcbiAgICAgIGMuaGVpZ2h0ID0gcGggKiBkcHIgKyBwYWRkaW5nICogMjtcbiAgICAgIGMuc3R5bGUud2lkdGggPSBwdyArIHBhZGRpbmcgKiAyICsgJ3B4JztcbiAgICAgIGMuc3R5bGUuaGVpZ2h0ID0gcGggKyBwYWRkaW5nICogMiArICdweCc7XG4gICAgICBjLnN0eWxlLm1hcmdpbkxlZnQgPSAnYXV0byc7XG4gICAgICBjLnN0eWxlLm1hcmdpblJpZ2h0ID0gJ2F1dG8nO1xuXG4gICAgICBjdHguc2NhbGUoZHByLCBkcHIpO1xuXG4gICAgICBsZXQgY3VyID0gY3Vyc29yUmVmLmN1cnJlbnQ7XG4gICAgICBjdXIud2lkdGggPSBwdyAqIGRwciArIHBhZGRpbmcgKiAyO1xuICAgICAgY3VyLmhlaWdodCA9IHBoICogZHByICsgcGFkZGluZyAqIDI7XG4gICAgICBjdXIuc3R5bGUud2lkdGggPSBwdyArIHBhZGRpbmcgKiAyICsgJ3B4JztcbiAgICAgIGN1ci5zdHlsZS5oZWlnaHQgPSBwaCArIHBhZGRpbmcgKiAyICsgJ3B4JztcblxuICAgICAgbGV0IGN1cnR4ID0gY3VyLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgIGN1cnR4LnNjYWxlKGRwciwgZHByKTtcblxuICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHBhZGRpbmcsIHBhZGRpbmcsIHB3LCBwaCk7XG4gICAgICBzZXRHcmlkKFtwdyAvIHNpemUsIHBoIC8gc2l6ZV0pO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGRyYXdJbWFnZShzcmMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJztcbiAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBkcmF3SW1hZ2Uoc3JjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdDdXJzb3IoKSB7XG4gICAgbGV0IHIgPSBjdXJzb3JSZWYuY3VycmVudDtcbiAgICBsZXQgcCA9IHBhZGRpbmc7XG4gICAgbGV0IHJ0eCA9IGN1cnNvclJlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgbGV0IGNwID0gY3BSZWYuY3VycmVudDtcbiAgICBydHguY2xlYXJSZWN0KDAsIDAsIHIub2Zmc2V0V2lkdGgsIHIub2Zmc2V0SGVpZ2h0KTtcbiAgICBydHgubGluZVdpZHRoID0gMjtcbiAgICBpZiAobW9kZSA9PT0gMCkge1xuICAgICAgcnR4LnN0cm9rZVN0eWxlID0gY29sb3JzWzBdO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMSkge1xuICAgICAgcnR4LnN0cm9rZVN0eWxlID0gY29sb3JzWzFdO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMikge1xuICAgICAgcnR4LnN0cm9rZVN0eWxlID0gY29sb3JzWzJdO1xuICAgIH1cbiAgICBydHguc3Ryb2tlUmVjdChcbiAgICAgIGNwWzBdICogc2l6ZSArIHAsXG4gICAgICBjcFsxXSAqIHNpemUgKyBwLFxuICAgICAgY3BbMl0gKiBzaXplLFxuICAgICAgY3BbM10gKiBzaXplXG4gICAgKTtcblxuICAgIGlmIChncmlkICE9PSBudWxsKSB7XG4gICAgICBsZXQgcm8gPSByZWFkb3V0LmN1cnJlbnQ7XG4gICAgICByby5pbm5lckhUTUwgPSBgJHtncmlkWzBdfXgke2dyaWRbMV19Jm5ic3A7ICAke2NwWzBdfSwke2NwWzFdfSAke2NwWzJdfXgke1xuICAgICAgICBjcFszXVxuICAgICAgfWA7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZ3JpZCAhPT0gbnVsbCkge1xuICAgICAgZHJhd0N1cnNvcigpO1xuICAgIH1cbiAgfSwgW21vZGUsIGdyaWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBkaW1lbnNpb25zID0gW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdO1xuXG4gICAgZHJhd0ltYWdlKCcvc3RhdGljL2xpb24uanBnJyk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZywgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSwgZmFsc2UpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnLCBmYWxzZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpO1xuICAgIH07XG4gIH0sIFttb2RlLCBncmlkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GcmVlY29uZmlnPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvc3RhdGljL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGN1c3RvbSwgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IgPT09ICdkYXJrJyA/ICcjMjIyJyA6ICcjZWVlJ307XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IgPT09ICdkYXJrJyA/ICcjZmZmJyA6ICcjMDAwJ307XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Y2FudmFzIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0gcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtNTAlLDApYCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlZj17Y3Vyc29yUmVmfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IHBhZGRpbmcsIHBhZGRpbmdMZWZ0OiAnMmNoJyB9fVxuICAgICAgICByZWY9e3JlYWRvdXR9XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIG91dGxpbmU6IGNvbG9yID09PSAnZGFyaycgPyAnc29saWQgMXB4IHdoaXRlJyA6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgIGRpc3BsYXk6IGhlbHAgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIG1heFdpZHRoOiBgY2FsYygxMDAlIC0gM3JlbSlgLFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICBjb2xvciA9PT0gJ2RhcmsnID8gJ3JnYmEoMCwwLDAsMC44KScgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJyxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC43NXJlbScsXG4gICAgICAgICAgcGFkZGluZ1RvcDogJzAuNzVyZW0nLFxuICAgICAgICAgIHJpZ2h0OiAnMS41cmVtJyxcbiAgICAgICAgICBib3R0b206ICcxLjVyZW0nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19PlxuICAgICAgICAgIEZyZWVjb25maWcgbGV0cyB5b3UgcHVzaCBpbWFnZSBwaXhlbHMgYXJvdW5kIGluIGJsb2Nrcy5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC4zNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19Pk1vZGU8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjc1cmVtJyB9fT5cbiAgICAgICAgICB7S2V5VGlwKCdhJywgY29sb3IpfXsnICd9XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgYmFja2dyb3VuZDogbW9kZSA9PT0gMCA/IGNvbG9yc1swXSA6ICd0cmFuc3BhcmVudCcgfX0+XG4gICAgICAgICAgICBtb3ZlXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICZuYnNwOyB7S2V5VGlwKCdzJywgY29sb3IpfXsnICd9XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgYmFja2dyb3VuZDogbW9kZSA9PT0gMSA/IGNvbG9yc1sxXSA6ICd0cmFuc3BhcmVudCcgfX0+XG4gICAgICAgICAgICBhZGp1c3Qgc2l6ZVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAmbmJzcDsge0tleVRpcCgnZCcsIGNvbG9yKX17JyAnfVxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGJhY2tncm91bmQ6IG1vZGUgPT09IDIgPyBjb2xvcnNbMl0gOiAndHJhbnNwYXJlbnQnIH19PlxuICAgICAgICAgICAgZ3JhYlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHttb2RlID09PSAwID8gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC4zNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19PlxuICAgICAgICAgICAgTW92ZSBjdXJzb3JcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHttb2RlID09PSAxID8gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC4zNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19PlxuICAgICAgICAgICAgQWRqdXN0IGN1cnNvciBzaXplXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7bW9kZSA9PT0gMiA/IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuMzc1cmVtJywgbWF4V2lkdGg6ICc2MGNoJyB9fT5cbiAgICAgICAgICAgIE1vdmUgc2VsZWN0aW9uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC43NXJlbScgfX0+XG4gICAgICAgICAge1tbJ2gnLCAn4oaQJ10sIFsnaicsICfihpMnXSwgWydrJywgJ+KGkSddLCBbJ2wnLCAn4oaSJ11dLm1hcChhID0+IChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICB7S2V5VGlwKGFbMF0sIGNvbG9yKX0ge2FbMV19Jm5ic3A7eycgJ31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjM3NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+SW1hZ2U8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjc1cmVtJywgbWF4V2lkdGg6ICc2MGNoJyB9fT5cbiAgICAgICAgICBUbyBhZGQgYW4gaW1hZ2UgeW91IGNhbiBwYXN0ZSwgZHJvcCwgb3IgcHJlc3Mge0tleVRpcCgnbycsIGNvbG9yKX0gdG9cbiAgICAgICAgICBvcGVuIGEgZmlsZSBkaWFsb2cueycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1FNUk5fR1g3cDRJXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICBMaW9uIHBob3RvIGJ5IE1hdXJpdHMgQmF1c2VuaGFydOKGl1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjM3NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+XG4gICAgICAgICAgU3BlY2lhbFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuNzVyZW0nIH19PlxuICAgICAgICAgIHtLZXlUaXAoJ3InLCBjb2xvcil9IHJlc2V0IGltYWdlJm5ic3A7IHtLZXlUaXAoJ2UnLCBjb2xvcil9IHNhdmUgYXNcbiAgICAgICAgICBwbmcmbmJzcDsge0tleVRpcCgnYicsIGNvbG9yKX17JyAnfVxuICAgICAgICAgIHtjb2xvciA9PT0gJ2RhcmsnID8gJ2xpZ2h0IGJnJyA6ICdkYXJrIGJnJ30mbmJzcDsge0tleVRpcCgnPycsIGNvbG9yKX17JyAnfVxuICAgICAgICAgIGhlbHBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY29uc3RyYWludC1zeXN0ZW1zL2ZyZWVjb25maWdcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IHNvdXJjZeKGl1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtoZWxwID8gbnVsbCA6IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMS41cmVtJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzEuNXJlbScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICBjb2xvciA9PT0gJ2RhcmsnID8gJ3JnYmEoMCwwLDAsMC44KScgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge0tleVRpcCgnPycsIGNvbG9yKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/freeconfig/pages/index.js */")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
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
      lineNumber: 558
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
      lineNumber: 559
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
      lineNumber: 569
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
      lineNumber: 573
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
      lineNumber: 589
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
      lineNumber: 592
    },
    __self: this
  }, "Mode"), __jsx("div", {
    style: {
      marginBottom: '0.75rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }, KeyTip('a', color), ' ', __jsx("span", {
    style: {
      background: mode === 0 ? colors[0] : 'transparent'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: this
  }, "move"), "\xA0 ", KeyTip('s', color), ' ', __jsx("span", {
    style: {
      background: mode === 1 ? colors[1] : 'transparent'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: this
  }, "adjust size"), "\xA0 ", KeyTip('d', color), ' ', __jsx("span", {
    style: {
      background: mode === 2 ? colors[2] : 'transparent'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
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
      lineNumber: 608
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
      lineNumber: 613
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
      lineNumber: 618
    },
    __self: this
  }, "Move selection") : null, __jsx("div", {
    style: {
      marginBottom: '0.75rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: this
  }, [['h', '←'], ['j', '↓'], ['k', '↑'], ['l', '→']].map(function (a) {
    return __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625
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
      lineNumber: 631
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
      lineNumber: 632
    },
    __self: this
  }, "To add an image you can paste, drop, or press ", KeyTip('o', color), " to open a file dialog.", ' ', __jsx("a", {
    href: "https://unsplash.com/photos/QMRN_GX7p4I",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
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
      lineNumber: 640
    },
    __self: this
  }, "Special"), __jsx("div", {
    style: {
      marginBottom: '0.75rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644
    },
    __self: this
  }, KeyTip('r', color), " reset image\xA0 ", KeyTip('e', color), " save as png\xA0 ", KeyTip('b', color), ' ', color === 'dark' ? 'light bg' : 'dark bg', "\xA0 ", KeyTip('?', color), ' ', "help"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/constraint-systems/freeconfig",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }, "View source\u2197"))), help ? null : __jsx("div", {
    style: {
      position: 'fixed',
      right: '1.5rem',
      bottom: '1.5rem',
      background: color === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  }, KeyTip('?', color)));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.55f61a4cd6dc3e65a08d.hot-update.js.map