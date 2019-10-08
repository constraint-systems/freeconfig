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

  var cpRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([0, 0, 20, 20]);
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
  }, "@font-face{font-family:'custom';src:url('/static/IBMPlexMono-Regular.woff2') format('woff2'), url('/static/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:14px;line-height:1.5;background:".concat(color === 'dark' ? '#222' : '#eee', ";color:").concat(color === 'dark' ? '#fff' : '#000', ";}body{margin:0;overflow:auto;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}p{margin:0;}a{color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2Nhcm91c2VsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVnQnlCLEFBR2dDLEFBS0MsQUFHUSxBQU9yQixBQUlXLEFBS1gsQUFHSyxTQVhBLEFBU2hCLEtBR0EsTUFSb0IsQ0FsQnNDLENBSTFELENBV0EsTUFSaUIsU0FZSyxNQVhKLGNBWWxCLEVBWDBDLHdDQUNMLG1DQUNyQyxHQVZBIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2Nhcm91c2VsL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5mdW5jdGlvbiBnZXREaXN0KHAxLCBwMikge1xuICBsZXQgYSA9IHAyWzBdIC0gcDFbMF07XG4gIGxldCBiID0gcDJbMV0gLSBwMVsxXTtcbiAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbn1cblxubGV0IHBhZGRpbmcgPSAxMDtcbmxldCBzaXplID0gMTA7XG5sZXQgY29sb3JzID0gWydibHVlJywgJ2hvdHBpbmsnLCAnbGltZWdyZWVuJ107XG5cbmxldCBsaCA9IDE2ICogMS41O1xuXG4vLyBtb2RlIDAgPSBtb3ZlXG4vLyBtb2RlIDEgPSBhZGp1c3Rcbi8vIG1vZGUgMiA9IGdyYWJcblxubGV0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbZ3JpZCwgc2V0R3JpZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgbGV0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnZGFyaycpO1xuICBsZXQgY3BSZWYgPSB1c2VSZWYoWzAsIDAsIDIwLCAyMF0pO1xuICBsZXQgY2FudmFzUmVmID0gdXNlUmVmKCk7XG4gIGxldCBjdXJzb3JSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IHJlYWRvdXQgPSB1c2VSZWYoKTtcbiAgbGV0IGtleW1hcCA9IHVzZVJlZih7fSk7XG4gIGxldCBjYWNoZSA9IHVzZVJlZihudWxsKTtcbiAgbGV0IFtoZWxwLCBzZXRIZWxwXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGZ1bmN0aW9uIEtleVRpcChsZXR0ZXIsIGNvbG9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT1cImtleXRpcFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBrZXltYXAuY3VycmVudFtsZXR0ZXJdID0gdHJ1ZTtcbiAgICAgICAgICBrZXlBY3Rpb24obGV0dGVyLCBmYWxzZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBrZXltYXAuY3VycmVudFtsZXR0ZXJdID0gZmFsc2U7XG4gICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvdXRsaW5lOiBjb2xvciA9PT0gJ2RhcmsnID8gJ3NvbGlkIDFweCB3aGl0ZScgOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsZXR0ZXIgPT09ICcgJyA/ICdzcGFjZWJhcicgOiBsZXR0ZXJ9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGlmIChjYWNoZSAhPT0gbnVsbCkge1xuICAgICAgZHJhd0ltYWdlKGNhY2hlLmN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihsZXR0ZXIsIHJlcGVhdCkge1xuICAgIGxldCBjID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgY3AgPSBjcFJlZi5jdXJyZW50O1xuICAgIGxldCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIGxldCBrYyA9IGtleW1hcC5jdXJyZW50O1xuXG4gICAgZnVuY3Rpb24gZHAodmFsKSB7XG4gICAgICByZXR1cm4gdmFsICogZHByO1xuICAgIH1cblxuICAgIGlmIChsZXR0ZXIgPT09ICdhJyAmJiAhcmVwZWF0KSB7XG4gICAgICBzZXRNb2RlKDApO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAncycgJiYgIXJlcGVhdCkge1xuICAgICAgc2V0TW9kZSgxKTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ2QnICYmICFyZXBlYXQpIHtcbiAgICAgIHNldE1vZGUoMik7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdyJyAmJiAhcmVwZWF0KSB7XG4gICAgICByZXNldCgpO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnbycgJiYgIXJlcGVhdCkge1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0pO1xuICAgICAgICAgIGRyYXdJbWFnZShzcmMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdiJykge1xuICAgICAgc2V0Q29sb3IoZnVuY3Rpb24ocHJldlN0YXRlKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdlJyAmJiAhcmVwZWF0KSB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgdmFyIHJldm9rZVVSTCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChtZS5ocmVmKTtcbiAgICAgICAgICBtZS5ocmVmID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZva2VVUkwpO1xuICAgICAgfTtcblxuICAgICAgY3R4LmNhbnZhcy50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnZnJlZWNvbmZpZy5wbmcnKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldm9rZVVSTCk7XG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICc/Jykge1xuICAgICAgc2V0SGVscChwcmV2U3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4gIXByZXZTdGF0ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChtb2RlID09PSAwKSB7XG4gICAgICBpZiAoa2NbJ2onXSkge1xuICAgICAgICBjcFsxXSArPSAxO1xuICAgICAgICBpZiAoY3BbMV0gKyBjcFszXSA+IGdyaWRbMV0pIGNwWzFdIC09IDE7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2snXSkge1xuICAgICAgICBjcFsxXSAtPSAxO1xuICAgICAgICBpZiAoY3BbMV0gPCAwKSBjcFsxXSA9IDA7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2wnXSkge1xuICAgICAgICBjcFswXSArPSAxO1xuICAgICAgICBpZiAoY3BbMF0gKyBjcFsyXSA+IGdyaWRbMF0pIGNwWzBdIC09IDE7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2gnXSkge1xuICAgICAgICBjcFswXSAtPSAxO1xuICAgICAgICBpZiAoY3BbMF0gPCAwKSBjcFswXSA9IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAxKSB7XG4gICAgICBpZiAoa2NbJ2snXSkge1xuICAgICAgICBjcFszXSAtPSAxO1xuICAgICAgICBpZiAoY3BbM10gPCAxKSBjcFszXSA9IDE7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2onXSkge1xuICAgICAgICBjcFszXSArPSAxO1xuICAgICAgICBpZiAoY3BbMV0gKyBjcFszXSA+IGdyaWRbMV0pIGNwWzNdIC09IDE7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2gnXSkge1xuICAgICAgICBjcFsyXSAtPSAxO1xuICAgICAgICBpZiAoY3BbMl0gPCAxKSBjcFsyXSA9IDE7XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2wnXSkge1xuICAgICAgICBjcFsyXSArPSAxO1xuICAgICAgICBpZiAoY3BbMF0gKyBjcFsyXSA+IGdyaWRbMF0pIGNwWzJdIC09IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAyKSB7XG4gICAgICBpZiAoa2NbJ2gnXSkge1xuICAgICAgICBpZiAoY3BbMF0gPiAwKSB7XG4gICAgICAgICAgbGV0IHMgPSBzaXplO1xuICAgICAgICAgIGxldCBwID0gcGFkZGluZztcblxuICAgICAgICAgIGxldCB0b19tb3ZlID0gWyhjcFswXSAtIDEpICogcyArIHAsIGNwWzFdICogcyArIHAsIDEgKiBzLCBjcFszXSAqIHNdO1xuXG4gICAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICB0LndpZHRoID0gZHAodG9fbW92ZVsyXSk7XG4gICAgICAgICAgdC5oZWlnaHQgPSBkcCh0b19tb3ZlWzNdKTtcbiAgICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgdHguc2NhbGUoZHByLCBkcHIpO1xuICAgICAgICAgIHR4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAuLi50b19tb3ZlLm1hcChjID0+IGRwKGMpKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICBkcChjcFswXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzFdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMl0gKiBzKSxcbiAgICAgICAgICAgIGRwKGNwWzNdICogcyksXG4gICAgICAgICAgICAoY3BbMF0gLSAxKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMV0gKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzJdICogcyxcbiAgICAgICAgICAgIGNwWzNdICogc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAoY3BbMF0gKyBjcFsyXSAtIDEpICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3BbMF0gLT0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGtjWydqJ10pIHtcbiAgICAgICAgaWYgKGNwWzFdICsgY3BbM10gPCBncmlkWzFdKSB7XG4gICAgICAgICAgbGV0IHMgPSBzaXplO1xuICAgICAgICAgIGxldCBwID0gcGFkZGluZztcblxuICAgICAgICAgIGxldCB0b19tb3ZlID0gW1xuICAgICAgICAgICAgY3BbMF0gKiBzICsgcCxcbiAgICAgICAgICAgIChjcFsxXSArIGNwWzNdKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMl0gKiBzLFxuICAgICAgICAgICAgMSAqIHMsXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgdC53aWR0aCA9IGRwKHRvX21vdmVbMl0pO1xuICAgICAgICAgIHQuaGVpZ2h0ID0gZHAodG9fbW92ZVszXSk7XG4gICAgICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgdHguc2NhbGUoZHByLCBkcHIpO1xuICAgICAgICAgIHR4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAuLi50b19tb3ZlLm1hcChjID0+IGRwKGMpKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICBkcChjcFswXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzFdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMl0gKiBzKSxcbiAgICAgICAgICAgIGRwKGNwWzNdICogcyksXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgKGNwWzFdICsgMSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzJdICogcyxcbiAgICAgICAgICAgIGNwWzNdICogc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMV0gKiBzICsgcCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNwWzFdICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrY1snayddKSB7XG4gICAgICAgIGlmIChjcFsxXSA+IDApIHtcbiAgICAgICAgICBsZXQgcyA9IHNpemU7XG4gICAgICAgICAgbGV0IHAgPSBwYWRkaW5nO1xuXG4gICAgICAgICAgbGV0IHRvX21vdmUgPSBbY3BbMF0gKiBzICsgcCwgKGNwWzFdIC0gMSkgKiBzICsgcCwgY3BbMl0gKiBzLCAxICogc107XG5cbiAgICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgIHQud2lkdGggPSBkcCh0b19tb3ZlWzJdKTtcbiAgICAgICAgICB0LmhlaWdodCA9IGRwKHRvX21vdmVbM10pO1xuICAgICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAgIHR4LnNjYWxlKGRwciwgZHByKTtcbiAgICAgICAgICB0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgLi4udG9fbW92ZS5tYXAoYyA9PiBkcChjKSksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgZHAoY3BbMF0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsxXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzJdICogcyksXG4gICAgICAgICAgICBkcChjcFszXSAqIHMpLFxuICAgICAgICAgICAgY3BbMF0gKiBzICsgcCxcbiAgICAgICAgICAgIChjcFsxXSAtIDEpICogcyArIHAsXG4gICAgICAgICAgICBjcFsyXSAqIHMsXG4gICAgICAgICAgICBjcFszXSAqIHNcbiAgICAgICAgICApO1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgY3BbMF0gKiBzICsgcCxcbiAgICAgICAgICAgIChjcFsxXSArIGNwWzNdIC0gMSkgKiBzICsgcCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNwWzFdIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrY1snbCddKSB7XG4gICAgICAgIGlmIChjcFswXSArIGNwWzJdIDwgZ3JpZFswXSkge1xuICAgICAgICAgIGxldCBzID0gc2l6ZTtcbiAgICAgICAgICBsZXQgcCA9IHBhZGRpbmc7XG5cbiAgICAgICAgICBsZXQgdG9fbW92ZSA9IFtcbiAgICAgICAgICAgIChjcFswXSArIGNwWzJdKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMV0gKiBzICsgcCxcbiAgICAgICAgICAgIDEgKiBzLFxuICAgICAgICAgICAgY3BbM10gKiBzLFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgIHQud2lkdGggPSBkcCh0b19tb3ZlWzJdKTtcbiAgICAgICAgICB0LmhlaWdodCA9IGRwKHRvX21vdmVbM10pO1xuICAgICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICB0eC5zY2FsZShkcHIsIGRwcik7XG4gICAgICAgICAgdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIC4uLnRvX21vdmUubWFwKGMgPT4gZHAoYykpLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIGRwKGNwWzBdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMV0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsyXSAqIHMpLFxuICAgICAgICAgICAgZHAoY3BbM10gKiBzKSxcbiAgICAgICAgICAgIChjcFswXSArIDEpICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMl0gKiBzLFxuICAgICAgICAgICAgY3BbM10gKiBzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIGNwWzBdICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3BbMF0gKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdDdXJzb3IoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBrZXltYXAuY3VycmVudFtlLmtleV0gPSB0cnVlO1xuICAgIGtleUFjdGlvbihlLmtleSwgZS5yZXBlYXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrZXltYXAuY3VycmVudFtlLmtleV0gPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdJbWFnZShzcmMpIHtcbiAgICBjYWNoZS5jdXJyZW50ID0gc3JjO1xuXG4gICAgbGV0IGRpbWVuc2lvbnMgPSBbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF07XG5cbiAgICBsZXQgYyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoJzJkJyk7XG4gICAgbGV0IHcgPSBkaW1lbnNpb25zWzBdIC0gcGFkZGluZyAqIDI7XG4gICAgbGV0IGggPSBkaW1lbnNpb25zWzFdIC0gcGFkZGluZyAqIDMgLSBsaDtcbiAgICBsZXQgYSA9IHcgLyBoO1xuXG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBsZXQgcGEgPSBpbWcud2lkdGggLyBpbWcuaGVpZ2h0O1xuICAgICAgbGV0IHB3ID0gaW1nLndpZHRoO1xuICAgICAgbGV0IHBoID0gaW1nLmhlaWdodDtcbiAgICAgIGlmIChhID49IHBhKSB7XG4gICAgICAgIGlmIChwaCA+IGgpIHtcbiAgICAgICAgICBwaCA9IGg7XG4gICAgICAgICAgcHcgPSBoICogcGE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYSA8IHBhKSB7XG4gICAgICAgIGlmIChwdyA+IHcpIHtcbiAgICAgICAgICBwdyA9IHc7XG4gICAgICAgICAgcGggPSB3IC8gcGE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHcgPSBNYXRoLmZsb29yKHB3IC8gc2l6ZSkgKiBzaXplO1xuICAgICAgcGggPSBNYXRoLmZsb29yKHBoIC8gc2l6ZSkgKiBzaXplO1xuXG4gICAgICBsZXQgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcblxuICAgICAgYy53aWR0aCA9IHB3ICogZHByICsgcGFkZGluZyAqIDI7XG4gICAgICBjLmhlaWdodCA9IHBoICogZHByICsgcGFkZGluZyAqIDI7XG4gICAgICBjLnN0eWxlLndpZHRoID0gcHcgKyBwYWRkaW5nICogMiArICdweCc7XG4gICAgICBjLnN0eWxlLmhlaWdodCA9IHBoICsgcGFkZGluZyAqIDIgKyAncHgnO1xuICAgICAgYy5zdHlsZS5tYXJnaW5MZWZ0ID0gJ2F1dG8nO1xuICAgICAgYy5zdHlsZS5tYXJnaW5SaWdodCA9ICdhdXRvJztcblxuICAgICAgY3R4LnNjYWxlKGRwciwgZHByKTtcblxuICAgICAgbGV0IGN1ciA9IGN1cnNvclJlZi5jdXJyZW50O1xuICAgICAgY3VyLndpZHRoID0gcHcgKiBkcHIgKyBwYWRkaW5nICogMjtcbiAgICAgIGN1ci5oZWlnaHQgPSBwaCAqIGRwciArIHBhZGRpbmcgKiAyO1xuICAgICAgY3VyLnN0eWxlLndpZHRoID0gcHcgKyBwYWRkaW5nICogMiArICdweCc7XG4gICAgICBjdXIuc3R5bGUuaGVpZ2h0ID0gcGggKyBwYWRkaW5nICogMiArICdweCc7XG5cbiAgICAgIGxldCBjdXJ0eCA9IGN1ci5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICBjdXJ0eC5zY2FsZShkcHIsIGRwcik7XG5cbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCBwYWRkaW5nLCBwYWRkaW5nLCBwdywgcGgpO1xuICAgICAgc2V0R3JpZChbcHcgLyBzaXplLCBwaCAvIHNpemVdKTtcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gIH1cblxuICBmdW5jdGlvbiBvblBhc3RlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICBkcmF3SW1hZ2Uoc3JjKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyb3AoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XG4gICAgbGV0IGZpbGVuYW1lID0gZmlsZS5wYXRoID8gZmlsZS5wYXRoIDogZmlsZS5uYW1lID8gZmlsZS5uYW1lIDogJyc7XG4gICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgZHJhd0ltYWdlKHNyYyk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWcoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Q3Vyc29yKCkge1xuICAgIGxldCByID0gY3Vyc29yUmVmLmN1cnJlbnQ7XG4gICAgbGV0IHAgPSBwYWRkaW5nO1xuICAgIGxldCBydHggPSBjdXJzb3JSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBjcCA9IGNwUmVmLmN1cnJlbnQ7XG4gICAgcnR4LmNsZWFyUmVjdCgwLCAwLCByLm9mZnNldFdpZHRoLCByLm9mZnNldEhlaWdodCk7XG4gICAgcnR4LmxpbmVXaWR0aCA9IDI7XG4gICAgaWYgKG1vZGUgPT09IDApIHtcbiAgICAgIHJ0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1swXTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgIHJ0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1sxXTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDIpIHtcbiAgICAgIHJ0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1syXTtcbiAgICB9XG4gICAgcnR4LnN0cm9rZVJlY3QoXG4gICAgICBjcFswXSAqIHNpemUgKyBwLFxuICAgICAgY3BbMV0gKiBzaXplICsgcCxcbiAgICAgIGNwWzJdICogc2l6ZSxcbiAgICAgIGNwWzNdICogc2l6ZVxuICAgICk7XG5cbiAgICBpZiAoZ3JpZCAhPT0gbnVsbCkge1xuICAgICAgbGV0IHJvID0gcmVhZG91dC5jdXJyZW50O1xuICAgICAgcm8uaW5uZXJIVE1MID0gYCR7Z3JpZFswXX14JHtncmlkWzFdfSZuYnNwOyAgJHtjcFswXX0sJHtjcFsxXX0gJHtjcFsyXX14JHtcbiAgICAgICAgY3BbM11cbiAgICAgIH1gO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGdyaWQgIT09IG51bGwpIHtcbiAgICAgIGRyYXdDdXJzb3IoKTtcbiAgICB9XG4gIH0sIFttb2RlLCBncmlkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgZGltZW5zaW9ucyA9IFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XTtcblxuICAgIGRyYXdJbWFnZSgnL3N0YXRpYy9saW9uLmpwZycpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUsIGZhbHNlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZywgZmFsc2UpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbbW9kZSwgZ3JpZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RnJlZWNvbmZpZzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL3N0YXRpYy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXN0b20sIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yID09PSAnZGFyaycgPyAnIzIyMicgOiAnI2VlZSd9O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9yID09PSAnZGFyaycgPyAnI2ZmZicgOiAnIzAwMCd9O1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGNhbnZhcyBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19IHJlZj17Y2FudmFzUmVmfSAvPlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLTUwJSwwKWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICByZWY9e2N1cnNvclJlZn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiBwYWRkaW5nLCBwYWRkaW5nTGVmdDogJzJjaCcgfX1cbiAgICAgICAgcmVmPXtyZWFkb3V0fVxuICAgICAgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICBvdXRsaW5lOiBjb2xvciA9PT0gJ2RhcmsnID8gJ3NvbGlkIDFweCB3aGl0ZScgOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICBkaXNwbGF5OiBoZWxwID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICBtYXhXaWR0aDogYGNhbGMoMTAwJSAtIDNyZW0pYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgY29sb3IgPT09ICdkYXJrJyA/ICdyZ2JhKDAsMCwwLDAuOCknIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC44KScsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzAuNzVyZW0nLFxuICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjc1cmVtJyxcbiAgICAgICAgICByaWdodDogJzEuNXJlbScsXG4gICAgICAgICAgYm90dG9tOiAnMS41cmVtJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjc1cmVtJywgbWF4V2lkdGg6ICc2MGNoJyB9fT5cbiAgICAgICAgICBGcmVlY29uZmlnIGxldCdzIHlvdSBtb3ZlIGltYWdlIHBpeGVscyBhcm91bmQgbGlrZSBibG9ja3MuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuMzc1cmVtJywgbWF4V2lkdGg6ICc2MGNoJyB9fT5Nb2RlPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC43NXJlbScgfX0+XG4gICAgICAgICAge0tleVRpcCgnYScsIGNvbG9yKX17JyAnfVxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGJhY2tncm91bmQ6IG1vZGUgPT09IDAgPyBjb2xvcnNbMF0gOiAndHJhbnNwYXJlbnQnIH19PlxuICAgICAgICAgICAgbW92ZVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAmbmJzcDsge0tleVRpcCgncycsIGNvbG9yKX17JyAnfVxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGJhY2tncm91bmQ6IG1vZGUgPT09IDEgPyBjb2xvcnNbMV0gOiAndHJhbnNwYXJlbnQnIH19PlxuICAgICAgICAgICAgYWRqdXN0IHNpemVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgJm5ic3A7IHtLZXlUaXAoJ2QnLCBjb2xvcil9eycgJ31cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBtb2RlID09PSAyID8gY29sb3JzWzJdIDogJ3RyYW5zcGFyZW50JyB9fT5cbiAgICAgICAgICAgIGdyYWJcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bW9kZSA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuMzc1cmVtJywgbWF4V2lkdGg6ICc2MGNoJyB9fT5cbiAgICAgICAgICAgIE1vdmUgY3Vyc29yXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7bW9kZSA9PT0gMSA/IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuMzc1cmVtJywgbWF4V2lkdGg6ICc2MGNoJyB9fT5cbiAgICAgICAgICAgIEFkanVzdCBjdXJzb3Igc2l6ZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge21vZGUgPT09IDIgPyAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjM3NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+XG4gICAgICAgICAgICBNb3ZlIHNlbGVjdGlvblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuNzVyZW0nIH19PlxuICAgICAgICAgIHtbWydoJywgJ+KGkCddLCBbJ2onLCAn4oaTJ10sIFsnaycsICfihpEnXSwgWydsJywgJ+KGkiddXS5tYXAoYSA9PiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAge0tleVRpcChhWzBdLCBjb2xvcil9IHthWzFdfSZuYnNwO3snICd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC4zNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19PkltYWdlPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC43NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+XG4gICAgICAgICAgVG8gYWRkIGFuIGltYWdlIHlvdSBjYW4gcGFzdGUsIGRyb3AsIG9yIHByZXNzIHtLZXlUaXAoJ28nLCBjb2xvcil9IHRvXG4gICAgICAgICAgb3BlbiBhIGZpbGUgZGlhbG9nLnsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9RTVJOX0dYN3A0SVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgTGlvbiBwaG90byBieSBNYXVyaXRzIEJhdXNlbmhhcnTihpdcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC4zNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19PlxuICAgICAgICAgIFNwZWNpYWxcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjc1cmVtJyB9fT5cbiAgICAgICAgICB7S2V5VGlwKCdyJywgY29sb3IpfSByZXNldCBpbWFnZSZuYnNwOyB7S2V5VGlwKCdlJywgY29sb3IpfSBzYXZlIGFzXG4gICAgICAgICAgcG5nJm5ic3A7IHtLZXlUaXAoJ2InLCBjb2xvcil9eycgJ31cbiAgICAgICAgICB7Y29sb3IgPT09ICdkYXJrJyA/ICdsaWdodCBiZycgOiAnZGFyayBiZyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7aGVscCA/IG51bGwgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICByaWdodDogJzEuNXJlbScsXG4gICAgICAgICAgICBib3R0b206ICcxLjVyZW0nLFxuICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgY29sb3IgPT09ICdkYXJrJyA/ICdyZ2JhKDAsMCwwLDAuOCknIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC44KScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtLZXlUaXAoJz8nLCBjb2xvcil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/carousel/pages/index.js */")), __jsx("div", {
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
  }, "Freeconfig let's you move image pixels around like blocks."), __jsx("div", {
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
      lineNumber: 646
    },
    __self: this
  }, KeyTip('?', color)));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8bc94810c2675952e324.hot-update.js.map