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


var _jsxFileName = "/Users/grant.custer/Sites/constraint-systems/carousel/pages/index.js";

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

  var cpRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([0, 0, 20, 10]);
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
    drawCursor();
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
      lineNumber: 514
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, "Freeconfig")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2328641575",
    dynamic: [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000'],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/static/IBMPlexMono-Regular.woff2') format('woff2'), url('/static/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:14px;line-height:1.5;background:".concat(color === 'dark' ? '#222' : '#eee', ";color:").concat(color === 'dark' ? '#fff' : '#000', ";}body{margin:0;overflow:auto;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}p{margin:0;}a{color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2Nhcm91c2VsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFnQnlCLEFBR2dDLEFBS0MsQUFHUSxBQU9yQixBQUlXLEFBS1gsQUFHSyxTQVhBLEFBU2hCLEtBR0EsTUFSb0IsQ0FsQnNDLENBSTFELENBV0EsTUFSaUIsU0FZSyxNQVhKLGNBWWxCLEVBWDBDLHdDQUNMLG1DQUNyQyxHQVZBIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2Nhcm91c2VsL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5mdW5jdGlvbiBnZXREaXN0KHAxLCBwMikge1xuICBsZXQgYSA9IHAyWzBdIC0gcDFbMF07XG4gIGxldCBiID0gcDJbMV0gLSBwMVsxXTtcbiAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbn1cblxubGV0IHBhZGRpbmcgPSAxMDtcbmxldCBzaXplID0gMTA7XG5sZXQgY29sb3JzID0gWydibHVlJywgJ2hvdHBpbmsnLCAnbGltZWdyZWVuJ107XG5cbmxldCBsaCA9IDE2ICogMS41O1xuXG4vLyBtb2RlIDAgPSBtb3ZlXG4vLyBtb2RlIDEgPSBhZGp1c3Rcbi8vIG1vZGUgMiA9IGdyYWJcblxubGV0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbZ3JpZCwgc2V0R3JpZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgbGV0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnZGFyaycpO1xuICBsZXQgY3BSZWYgPSB1c2VSZWYoWzAsIDAsIDIwLCAxMF0pO1xuICBsZXQgY2FudmFzUmVmID0gdXNlUmVmKCk7XG4gIGxldCBjdXJzb3JSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IHJlYWRvdXQgPSB1c2VSZWYoKTtcbiAgbGV0IGtleW1hcCA9IHVzZVJlZih7fSk7XG4gIGxldCBjYWNoZSA9IHVzZVJlZihudWxsKTtcbiAgbGV0IFtoZWxwLCBzZXRIZWxwXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGZ1bmN0aW9uIEtleVRpcChsZXR0ZXIsIGNvbG9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT1cImtleXRpcFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBrZXltYXAuY3VycmVudFtsZXR0ZXJdID0gdHJ1ZTtcbiAgICAgICAgICBrZXlBY3Rpb24obGV0dGVyLCBmYWxzZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBrZXltYXAuY3VycmVudFtsZXR0ZXJdID0gZmFsc2U7XG4gICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvdXRsaW5lOiBjb2xvciA9PT0gJ2RhcmsnID8gJ3NvbGlkIDFweCB3aGl0ZScgOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsZXR0ZXIgPT09ICcgJyA/ICdzcGFjZWJhcicgOiBsZXR0ZXJ9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGlmIChjYWNoZSAhPT0gbnVsbCkge1xuICAgICAgZHJhd0ltYWdlKGNhY2hlLmN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihsZXR0ZXIsIHJlcGVhdCkge1xuICAgIGxldCBjID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgY3AgPSBjcFJlZi5jdXJyZW50O1xuICAgIGxldCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIGxldCBrYyA9IGtleW1hcC5jdXJyZW50O1xuXG4gICAgZnVuY3Rpb24gZHAodmFsKSB7XG4gICAgICByZXR1cm4gdmFsICogZHByO1xuICAgIH1cblxuICAgIGlmIChsZXR0ZXIgPT09ICdhJyAmJiAhcmVwZWF0KSB7XG4gICAgICBzZXRNb2RlKDApO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAncycgJiYgIXJlcGVhdCkge1xuICAgICAgc2V0TW9kZSgxKTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ2QnICYmICFyZXBlYXQpIHtcbiAgICAgIHNldE1vZGUoMik7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdyJyAmJiAhcmVwZWF0KSB7XG4gICAgICByZXNldCgpO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnbycgJiYgIXJlcGVhdCkge1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0pO1xuICAgICAgICAgIGRyYXdJbWFnZShzcmMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdiJykge1xuICAgICAgc2V0Q29sb3IoZnVuY3Rpb24ocHJldlN0YXRlKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdlJyAmJiAhcmVwZWF0KSB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgdmFyIHJldm9rZVVSTCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChtZS5ocmVmKTtcbiAgICAgICAgICBtZS5ocmVmID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZva2VVUkwpO1xuICAgICAgfTtcblxuICAgICAgY3R4LmNhbnZhcy50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnZnJlZWNvbmZpZy5wbmcnKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldm9rZVVSTCk7XG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICc/Jykge1xuICAgICAgc2V0SGVscChwcmV2U3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4gIXByZXZTdGF0ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChtb2RlID09PSAwKSB7XG4gICAgICBpZiAoa2NbJ2onXSkge1xuICAgICAgICBjcFsxXSArPSAxO1xuICAgICAgICBpZiAoY3BbMV0gKyBjcFszXSA+IGdyaWRbMV0pIGNwWzFdIC09IDE7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2snXSkge1xuICAgICAgICBjcFsxXSAtPSAxO1xuICAgICAgICBpZiAoY3BbMV0gPCAwKSBjcFsxXSA9IDA7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2wnXSkge1xuICAgICAgICBjcFswXSArPSAxO1xuICAgICAgICBpZiAoY3BbMF0gKyBjcFsyXSA+IGdyaWRbMF0pIGNwWzBdIC09IDE7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2gnXSkge1xuICAgICAgICBjcFswXSAtPSAxO1xuICAgICAgICBpZiAoY3BbMF0gPCAwKSBjcFswXSA9IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAxKSB7XG4gICAgICBpZiAoa2NbJ2snXSkge1xuICAgICAgICBjcFszXSAtPSAxO1xuICAgICAgICBpZiAoY3BbM10gPCAxKSBjcFszXSA9IDE7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2onXSkge1xuICAgICAgICBjcFszXSArPSAxO1xuICAgICAgICBpZiAoY3BbMV0gKyBjcFszXSA+IGdyaWRbMV0pIGNwWzNdIC09IDE7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2gnXSkge1xuICAgICAgICBjcFsyXSAtPSAxO1xuICAgICAgICBpZiAoY3BbMl0gPCAxKSBjcFsyXSA9IDE7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2wnXSkge1xuICAgICAgICBjcFsyXSArPSAxO1xuICAgICAgICBpZiAoY3BbMF0gKyBjcFsyXSA+IGdyaWRbMF0pIGNwWzJdIC09IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAyKSB7XG4gICAgICBpZiAoa2NbJ2gnXSkge1xuICAgICAgICBpZiAoY3BbMF0gPiAwKSB7XG4gICAgICAgICAgbGV0IHMgPSBzaXplO1xuICAgICAgICAgIGxldCBwID0gcGFkZGluZztcblxuICAgICAgICAgIGxldCB0b19tb3ZlID0gWyhjcFswXSAtIDEpICogcyArIHAsIGNwWzFdICogcyArIHAsIDEgKiBzLCBjcFszXSAqIHNdO1xuXG4gICAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICB0LndpZHRoID0gZHAodG9fbW92ZVsyXSk7XG4gICAgICAgICAgdC5oZWlnaHQgPSBkcCh0b19tb3ZlWzNdKTtcbiAgICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgdHguc2NhbGUoZHByLCBkcHIpO1xuICAgICAgICAgIHR4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAuLi50b19tb3ZlLm1hcChjID0+IGRwKGMpKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICBkcChjcFswXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzFdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMl0gKiBzKSxcbiAgICAgICAgICAgIGRwKGNwWzNdICogcyksXG4gICAgICAgICAgICAoY3BbMF0gLSAxKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMV0gKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzJdICogcyxcbiAgICAgICAgICAgIGNwWzNdICogc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAoY3BbMF0gKyBjcFsyXSAtIDEpICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3BbMF0gLT0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGtjWydqJ10pIHtcbiAgICAgICAgaWYgKGNwWzFdICsgY3BbM10gPCBncmlkWzFdKSB7XG4gICAgICAgICAgbGV0IHMgPSBzaXplO1xuICAgICAgICAgIGxldCBwID0gcGFkZGluZztcblxuICAgICAgICAgIGxldCB0b19tb3ZlID0gW1xuICAgICAgICAgICAgY3BbMF0gKiBzICsgcCxcbiAgICAgICAgICAgIChjcFsxXSArIGNwWzNdKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMl0gKiBzLFxuICAgICAgICAgICAgMSAqIHMsXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgdC53aWR0aCA9IGRwKHRvX21vdmVbMl0pO1xuICAgICAgICAgIHQuaGVpZ2h0ID0gZHAodG9fbW92ZVszXSk7XG4gICAgICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgdHguc2NhbGUoZHByLCBkcHIpO1xuICAgICAgICAgIHR4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAuLi50b19tb3ZlLm1hcChjID0+IGRwKGMpKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICBkcChjcFswXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzFdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMl0gKiBzKSxcbiAgICAgICAgICAgIGRwKGNwWzNdICogcyksXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgKGNwWzFdICsgMSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzJdICogcyxcbiAgICAgICAgICAgIGNwWzNdICogc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMV0gKiBzICsgcCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNwWzFdICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrY1snayddKSB7XG4gICAgICAgIGlmIChjcFsxXSA+IDApIHtcbiAgICAgICAgICBsZXQgcyA9IHNpemU7XG4gICAgICAgICAgbGV0IHAgPSBwYWRkaW5nO1xuXG4gICAgICAgICAgbGV0IHRvX21vdmUgPSBbY3BbMF0gKiBzICsgcCwgKGNwWzFdIC0gMSkgKiBzICsgcCwgY3BbMl0gKiBzLCAxICogc107XG5cbiAgICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgIHQud2lkdGggPSBkcCh0b19tb3ZlWzJdKTtcbiAgICAgICAgICB0LmhlaWdodCA9IGRwKHRvX21vdmVbM10pO1xuICAgICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAgIHR4LnNjYWxlKGRwciwgZHByKTtcbiAgICAgICAgICB0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgLi4udG9fbW92ZS5tYXAoYyA9PiBkcChjKSksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgZHAoY3BbMF0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsxXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzJdICogcyksXG4gICAgICAgICAgICBkcChjcFszXSAqIHMpLFxuICAgICAgICAgICAgY3BbMF0gKiBzICsgcCxcbiAgICAgICAgICAgIChjcFsxXSAtIDEpICogcyArIHAsXG4gICAgICAgICAgICBjcFsyXSAqIHMsXG4gICAgICAgICAgICBjcFszXSAqIHNcbiAgICAgICAgICApO1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgY3BbMF0gKiBzICsgcCxcbiAgICAgICAgICAgIChjcFsxXSArIGNwWzNdIC0gMSkgKiBzICsgcCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNwWzFdIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrY1snbCddKSB7XG4gICAgICAgIGlmIChjcFswXSArIGNwWzJdIDwgZ3JpZFswXSkge1xuICAgICAgICAgIGxldCBzID0gc2l6ZTtcbiAgICAgICAgICBsZXQgcCA9IHBhZGRpbmc7XG5cbiAgICAgICAgICBsZXQgdG9fbW92ZSA9IFtcbiAgICAgICAgICAgIChjcFswXSArIGNwWzJdKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMV0gKiBzICsgcCxcbiAgICAgICAgICAgIDEgKiBzLFxuICAgICAgICAgICAgY3BbM10gKiBzLFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgIHQud2lkdGggPSBkcCh0b19tb3ZlWzJdKTtcbiAgICAgICAgICB0LmhlaWdodCA9IGRwKHRvX21vdmVbM10pO1xuICAgICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICB0eC5zY2FsZShkcHIsIGRwcik7XG4gICAgICAgICAgdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIC4uLnRvX21vdmUubWFwKGMgPT4gZHAoYykpLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIGRwKGNwWzBdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMV0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsyXSAqIHMpLFxuICAgICAgICAgICAgZHAoY3BbM10gKiBzKSxcbiAgICAgICAgICAgIChjcFswXSArIDEpICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMl0gKiBzLFxuICAgICAgICAgICAgY3BbM10gKiBzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIGNwWzBdICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3BbMF0gKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdDdXJzb3IoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBrZXltYXAuY3VycmVudFtlLmtleV0gPSB0cnVlO1xuICAgIGtleUFjdGlvbihlLmtleSwgZS5yZXBlYXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrZXltYXAuY3VycmVudFtlLmtleV0gPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdJbWFnZShzcmMpIHtcbiAgICBjYWNoZS5jdXJyZW50ID0gc3JjO1xuXG4gICAgbGV0IGRpbWVuc2lvbnMgPSBbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF07XG5cbiAgICBsZXQgYyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoJzJkJyk7XG4gICAgbGV0IHcgPSBkaW1lbnNpb25zWzBdIC0gcGFkZGluZyAqIDI7XG4gICAgbGV0IGggPSBkaW1lbnNpb25zWzFdIC0gcGFkZGluZyAqIDMgLSBsaDtcbiAgICBsZXQgYSA9IHcgLyBoO1xuXG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBsZXQgcGEgPSBpbWcud2lkdGggLyBpbWcuaGVpZ2h0O1xuICAgICAgbGV0IHB3ID0gaW1nLndpZHRoO1xuICAgICAgbGV0IHBoID0gaW1nLmhlaWdodDtcbiAgICAgIGlmIChhID49IHBhKSB7XG4gICAgICAgIGlmIChwaCA+IGgpIHtcbiAgICAgICAgICBwaCA9IGg7XG4gICAgICAgICAgcHcgPSBoICogcGE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYSA8IHBhKSB7XG4gICAgICAgIGlmIChwdyA+IHcpIHtcbiAgICAgICAgICBwdyA9IHc7XG4gICAgICAgICAgcGggPSB3IC8gcGE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHcgPSBNYXRoLmZsb29yKHB3IC8gc2l6ZSkgKiBzaXplO1xuICAgICAgcGggPSBNYXRoLmZsb29yKHBoIC8gc2l6ZSkgKiBzaXplO1xuXG4gICAgICBsZXQgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcblxuICAgICAgYy53aWR0aCA9IHB3ICogZHByICsgcGFkZGluZyAqIDI7XG4gICAgICBjLmhlaWdodCA9IHBoICogZHByICsgcGFkZGluZyAqIDI7XG4gICAgICBjLnN0eWxlLndpZHRoID0gcHcgKyBwYWRkaW5nICogMiArICdweCc7XG4gICAgICBjLnN0eWxlLmhlaWdodCA9IHBoICsgcGFkZGluZyAqIDIgKyAncHgnO1xuICAgICAgYy5zdHlsZS5tYXJnaW5MZWZ0ID0gJ2F1dG8nO1xuICAgICAgYy5zdHlsZS5tYXJnaW5SaWdodCA9ICdhdXRvJztcblxuICAgICAgY3R4LnNjYWxlKGRwciwgZHByKTtcblxuICAgICAgbGV0IGN1ciA9IGN1cnNvclJlZi5jdXJyZW50O1xuICAgICAgY3VyLndpZHRoID0gcHcgKiBkcHIgKyBwYWRkaW5nICogMjtcbiAgICAgIGN1ci5oZWlnaHQgPSBwaCAqIGRwciArIHBhZGRpbmcgKiAyO1xuICAgICAgY3VyLnN0eWxlLndpZHRoID0gcHcgKyBwYWRkaW5nICogMiArICdweCc7XG4gICAgICBjdXIuc3R5bGUuaGVpZ2h0ID0gcGggKyBwYWRkaW5nICogMiArICdweCc7XG5cbiAgICAgIGxldCBjdXJ0eCA9IGN1ci5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICBjdXJ0eC5zY2FsZShkcHIsIGRwcik7XG5cbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCBwYWRkaW5nLCBwYWRkaW5nLCBwdywgcGgpO1xuICAgICAgc2V0R3JpZChbcHcgLyBzaXplLCBwaCAvIHNpemVdKTtcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gIH1cblxuICBmdW5jdGlvbiBvblBhc3RlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICBkcmF3SW1hZ2Uoc3JjKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyb3AoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XG4gICAgbGV0IGZpbGVuYW1lID0gZmlsZS5wYXRoID8gZmlsZS5wYXRoIDogZmlsZS5uYW1lID8gZmlsZS5uYW1lIDogJyc7XG4gICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgZHJhd0ltYWdlKHNyYyk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWcoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Q3Vyc29yKCkge1xuICAgIGxldCByID0gY3Vyc29yUmVmLmN1cnJlbnQ7XG4gICAgbGV0IHAgPSBwYWRkaW5nO1xuICAgIGxldCBydHggPSBjdXJzb3JSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBjcCA9IGNwUmVmLmN1cnJlbnQ7XG4gICAgcnR4LmNsZWFyUmVjdCgwLCAwLCByLm9mZnNldFdpZHRoLCByLm9mZnNldEhlaWdodCk7XG4gICAgcnR4LmxpbmVXaWR0aCA9IDI7XG4gICAgaWYgKG1vZGUgPT09IDApIHtcbiAgICAgIHJ0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1swXTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgIHJ0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1sxXTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDIpIHtcbiAgICAgIHJ0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1syXTtcbiAgICB9XG4gICAgcnR4LnN0cm9rZVJlY3QoXG4gICAgICBjcFswXSAqIHNpemUgKyBwLFxuICAgICAgY3BbMV0gKiBzaXplICsgcCxcbiAgICAgIGNwWzJdICogc2l6ZSxcbiAgICAgIGNwWzNdICogc2l6ZVxuICAgICk7XG5cbiAgICBpZiAoZ3JpZCAhPT0gbnVsbCkge1xuICAgICAgbGV0IHJvID0gcmVhZG91dC5jdXJyZW50O1xuICAgICAgcm8uaW5uZXJIVE1MID0gYCR7Z3JpZFswXX14JHtncmlkWzFdfSZuYnNwOyAgJHtjcFswXX0sJHtjcFsxXX0gJHtjcFsyXX14JHtcbiAgICAgICAgY3BbM11cbiAgICAgIH1gO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZHJhd0N1cnNvcigpO1xuICB9LCBbbW9kZSwgZ3JpZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRpbWVuc2lvbnMgPSBbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF07XG5cbiAgICBkcmF3SW1hZ2UoJy9zdGF0aWMvbGlvbi5qcGcnKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW21vZGUsIGdyaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZyZWVjb25maWc8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9zdGF0aWMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogY3VzdG9tLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvciA9PT0gJ2RhcmsnID8gJyMyMjInIDogJyNlZWUnfTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvciA9PT0gJ2RhcmsnID8gJyNmZmYnIDogJyMwMDAnfTtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxjYW52YXMgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fSByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC01MCUsMClgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXtjdXJzb3JSZWZ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogcGFkZGluZywgcGFkZGluZ0xlZnQ6ICcyY2gnIH19XG4gICAgICAgIHJlZj17cmVhZG91dH1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgb3V0bGluZTogY29sb3IgPT09ICdkYXJrJyA/ICdzb2xpZCAxcHggd2hpdGUnIDogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgZGlzcGxheTogaGVscCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgbWF4V2lkdGg6IGBjYWxjKDEwMCUgLSAzcmVtKWAsXG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIGNvbG9yID09PSAnZGFyaycgPyAncmdiYSgwLDAsMCwwLjgpJyA6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuOCknLFxuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjc1cmVtJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiAnMC43NXJlbScsXG4gICAgICAgICAgcmlnaHQ6ICcxLjVyZW0nLFxuICAgICAgICAgIGJvdHRvbTogJzEuNXJlbScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC43NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+XG4gICAgICAgICAgRnJlZWNvbmZpZyBsZXRzIHlvdSBzaGlmdCBibG9ja3MgYXJvdW5kIGluIGFuIGltYWdlLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjM3NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+TW9kZTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuNzVyZW0nIH19PlxuICAgICAgICAgIHtLZXlUaXAoJ2EnLCBjb2xvcil9eycgJ31cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBtb2RlID09PSAwID8gY29sb3JzWzBdIDogJ3RyYW5zcGFyZW50JyB9fT5cbiAgICAgICAgICAgIG1vdmVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgJm5ic3A7IHtLZXlUaXAoJ3MnLCBjb2xvcil9eycgJ31cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBtb2RlID09PSAxID8gY29sb3JzWzFdIDogJ3RyYW5zcGFyZW50JyB9fT5cbiAgICAgICAgICAgIGFkanVzdCBzaXplXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICZuYnNwOyB7S2V5VGlwKCdkJywgY29sb3IpfXsnICd9XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgYmFja2dyb3VuZDogbW9kZSA9PT0gMiA/IGNvbG9yc1syXSA6ICd0cmFuc3BhcmVudCcgfX0+XG4gICAgICAgICAgICBncmFiXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge21vZGUgPT09IDAgPyAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjM3NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+XG4gICAgICAgICAgICBNb3ZlIGN1cnNvclxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge21vZGUgPT09IDEgPyAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjM3NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+XG4gICAgICAgICAgICBBZGp1c3QgY3Vyc29yIHNpemVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHttb2RlID09PSAyID8gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC4zNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19PlxuICAgICAgICAgICAgTW92ZSBzZWxlY3Rpb25cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjc1cmVtJyB9fT5cbiAgICAgICAgICB7W1snaCcsICfihpAnXSwgWydqJywgJ+KGkyddLCBbJ2snLCAn4oaRJ10sIFsnbCcsICfihpInXV0ubWFwKGEgPT4gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHtLZXlUaXAoYVswXSwgY29sb3IpfSB7YVsxXX0mbmJzcDt7JyAnfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuMzc1cmVtJywgbWF4V2lkdGg6ICc2MGNoJyB9fT5JbWFnZTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19PlxuICAgICAgICAgIFRvIGFkZCBhbiBpbWFnZSB5b3UgY2FuIHBhc3RlLCBkcm9wLCBvciBwcmVzcyB7S2V5VGlwKCdvJywgY29sb3IpfSB0b1xuICAgICAgICAgIG9wZW4gYSBmaWxlIGRpYWxvZy57JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvUU1STl9HWDdwNElcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIExpb24gcGhvdG8gYnkgTWF1cml0cyBCYXVzZW5oYXJ04oaXXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuMzc1cmVtJywgbWF4V2lkdGg6ICc2MGNoJyB9fT5cbiAgICAgICAgICBTcGVjaWFsXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC43NXJlbScgfX0+XG4gICAgICAgICAge0tleVRpcCgncicsIGNvbG9yKX0gcmVzZXQgaW1hZ2UmbmJzcDsge0tleVRpcCgnZScsIGNvbG9yKX0gc2F2ZSBhc1xuICAgICAgICAgIHBuZyZuYnNwOyB7S2V5VGlwKCdiJywgY29sb3IpfXsnICd9XG4gICAgICAgICAge2NvbG9yID09PSAnZGFyaycgPyAnbGlnaHQgYmcnIDogJ2RhcmsgYmcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2hlbHAgPyBudWxsIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgcmlnaHQ6ICcxLjVyZW0nLFxuICAgICAgICAgICAgYm90dG9tOiAnMS41cmVtJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgIGNvbG9yID09PSAnZGFyaycgPyAncmdiYSgwLDAsMCwwLjgpJyA6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuOCknLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7S2V5VGlwKCc/JywgY29sb3IpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/carousel/pages/index.js */")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
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
      lineNumber: 551
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
      lineNumber: 552
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
      lineNumber: 562
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
      lineNumber: 566
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
      lineNumber: 582
    },
    __self: this
  }, "Freeconfig lets you shift blocks around in an image."), __jsx("div", {
    style: {
      marginBottom: '0.375rem',
      maxWidth: '60ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  }, "Mode"), __jsx("div", {
    style: {
      marginBottom: '0.75rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }, KeyTip('a', color), ' ', __jsx("span", {
    style: {
      background: mode === 0 ? colors[0] : 'transparent'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, "move"), "\xA0 ", KeyTip('s', color), ' ', __jsx("span", {
    style: {
      background: mode === 1 ? colors[1] : 'transparent'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }, "adjust size"), "\xA0 ", KeyTip('d', color), ' ', __jsx("span", {
    style: {
      background: mode === 2 ? colors[2] : 'transparent'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
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
      lineNumber: 601
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
      lineNumber: 606
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
      lineNumber: 611
    },
    __self: this
  }, "Move selection") : null, __jsx("div", {
    style: {
      marginBottom: '0.75rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616
    },
    __self: this
  }, [['h', '←'], ['j', '↓'], ['k', '↑'], ['l', '→']].map(function (a) {
    return __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618
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
      lineNumber: 624
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
      lineNumber: 625
    },
    __self: this
  }, "To add an image you can paste, drop, or press ", KeyTip('o', color), " to open a file dialog.", ' ', __jsx("a", {
    href: "https://unsplash.com/photos/QMRN_GX7p4I",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
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
      lineNumber: 633
    },
    __self: this
  }, "Special"), __jsx("div", {
    style: {
      marginBottom: '0.75rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637
    },
    __self: this
  }, KeyTip('r', color), " reset image\xA0 ", KeyTip('e', color), " save as png\xA0 ", KeyTip('b', color), ' ', color === 'dark' ? 'light bg' : 'dark bg')), help ? null : __jsx("div", {
    style: {
      position: 'fixed',
      right: '1.5rem',
      bottom: '1.5rem',
      background: color === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644
    },
    __self: this
  }, KeyTip('?', color)));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.83f80935f88a46a11ba0.hot-update.js.map