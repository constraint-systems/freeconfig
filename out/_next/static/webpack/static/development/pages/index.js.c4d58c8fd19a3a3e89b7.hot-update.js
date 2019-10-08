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

  function KeyTip(letter) {
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
        outline: 'solid 1px black',
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch',
        textAlign: 'center',
        display: 'inline-block',
        userSelect: 'none',
        cursor: 'default'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
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
      rtx.strokeStyle = 'blue';
    } else if (mode === 1) {
      rtx.strokeStyle = 'hotpink';
    } else if (mode === 2) {
      rtx.strokeStyle = 'limegreen';
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
      lineNumber: 513
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: this
  }, "Freeconfig")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2328641575",
    dynamic: [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000'],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/static/IBMPlexMono-Regular.woff2') format('woff2'), url('/static/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:14px;line-height:1.5;background:".concat(color === 'dark' ? '#222' : '#eee', ";color:").concat(color === 'dark' ? '#fff' : '#000', ";}body{margin:0;overflow:auto;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}p{margin:0;}a{color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2Nhcm91c2VsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9nQnlCLEFBR2dDLEFBS0MsQUFHUSxBQU9yQixBQUlXLEFBS1gsQUFHSyxTQVhBLEFBU2hCLEtBR0EsTUFSb0IsQ0FsQnNDLENBSTFELENBV0EsTUFSaUIsU0FZSyxNQVhKLGNBWWxCLEVBWDBDLHdDQUNMLG1DQUNyQyxHQVZBIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2Nhcm91c2VsL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5mdW5jdGlvbiBnZXREaXN0KHAxLCBwMikge1xuICBsZXQgYSA9IHAyWzBdIC0gcDFbMF07XG4gIGxldCBiID0gcDJbMV0gLSBwMVsxXTtcbiAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbn1cblxubGV0IHBhZGRpbmcgPSAxMDtcbmxldCBzaXplID0gMTA7XG5cbmxldCBsaCA9IDE2ICogMS41O1xuXG4vLyBtb2RlIDAgPSBtb3ZlXG4vLyBtb2RlIDEgPSBhZGp1c3Rcbi8vIG1vZGUgMiA9IGdyYWJcblxubGV0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbZ3JpZCwgc2V0R3JpZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgbGV0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnZGFyaycpO1xuICBsZXQgY3BSZWYgPSB1c2VSZWYoWzAsIDAsIDIwLCAxMF0pO1xuICBsZXQgY2FudmFzUmVmID0gdXNlUmVmKCk7XG4gIGxldCBjdXJzb3JSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IHJlYWRvdXQgPSB1c2VSZWYoKTtcbiAgbGV0IGtleW1hcCA9IHVzZVJlZih7fSk7XG4gIGxldCBjYWNoZSA9IHVzZVJlZihudWxsKTtcbiAgbGV0IFtoZWxwLCBzZXRIZWxwXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGZ1bmN0aW9uIEtleVRpcChsZXR0ZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3NOYW1lPVwia2V5dGlwXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGtleW1hcC5jdXJyZW50W2xldHRlcl0gPSB0cnVlO1xuICAgICAgICAgIGtleUFjdGlvbihsZXR0ZXIsIGZhbHNlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGtleW1hcC5jdXJyZW50W2xldHRlcl0gPSBmYWxzZTtcbiAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG91dGxpbmU6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2xldHRlciA9PT0gJyAnID8gJ3NwYWNlYmFyJyA6IGxldHRlcn1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaWYgKGNhY2hlICE9PSBudWxsKSB7XG4gICAgICBkcmF3SW1hZ2UoY2FjaGUuY3VycmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGxldHRlciwgcmVwZWF0KSB7XG4gICAgbGV0IGMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBjcCA9IGNwUmVmLmN1cnJlbnQ7XG4gICAgbGV0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgbGV0IGtjID0ga2V5bWFwLmN1cnJlbnQ7XG5cbiAgICBmdW5jdGlvbiBkcCh2YWwpIHtcbiAgICAgIHJldHVybiB2YWwgKiBkcHI7XG4gICAgfVxuXG4gICAgaWYgKGxldHRlciA9PT0gJ2EnICYmICFyZXBlYXQpIHtcbiAgICAgIHNldE1vZGUoMCk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdzJyAmJiAhcmVwZWF0KSB7XG4gICAgICBzZXRNb2RlKDEpO1xuICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnZCcgJiYgIXJlcGVhdCkge1xuICAgICAgc2V0TW9kZSgyKTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ3InICYmICFyZXBlYXQpIHtcbiAgICAgIHJlc2V0KCk7XG4gICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdvJyAmJiAhcmVwZWF0KSB7XG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKTtcbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbSk7XG4gICAgICAgICAgZHJhd0ltYWdlKHNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ2InKSB7XG4gICAgICBzZXRDb2xvcihmdW5jdGlvbihwcmV2U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTdGF0ZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJ2UnICYmICFyZXBlYXQpIHtcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICB2YXIgcmV2b2tlVVJMID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKG1lLmhyZWYpO1xuICAgICAgICAgIG1lLmhyZWYgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJldm9rZVVSTCk7XG4gICAgICB9O1xuXG4gICAgICBjdHguY2FudmFzLnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdmcmVlY29uZmlnLnBuZycpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpO1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2b2tlVVJMKTtcbiAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJz8nKSB7XG4gICAgICBzZXRIZWxwKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiAhcHJldlN0YXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09IDApIHtcbiAgICAgIGlmIChrY1snaiddKSB7XG4gICAgICAgIGNwWzFdICs9IDE7XG4gICAgICAgIGlmIChjcFsxXSArIGNwWzNdID4gZ3JpZFsxXSkgY3BbMV0gLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snayddKSB7XG4gICAgICAgIGNwWzFdIC09IDE7XG4gICAgICAgIGlmIChjcFsxXSA8IDApIGNwWzFdID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snbCddKSB7XG4gICAgICAgIGNwWzBdICs9IDE7XG4gICAgICAgIGlmIChjcFswXSArIGNwWzJdID4gZ3JpZFswXSkgY3BbMF0gLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snaCddKSB7XG4gICAgICAgIGNwWzBdIC09IDE7XG4gICAgICAgIGlmIChjcFswXSA8IDApIGNwWzBdID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgIGlmIChrY1snayddKSB7XG4gICAgICAgIGNwWzNdIC09IDE7XG4gICAgICAgIGlmIChjcFszXSA8IDEpIGNwWzNdID0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snaiddKSB7XG4gICAgICAgIGNwWzNdICs9IDE7XG4gICAgICAgIGlmIChjcFsxXSArIGNwWzNdID4gZ3JpZFsxXSkgY3BbM10gLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snaCddKSB7XG4gICAgICAgIGNwWzJdIC09IDE7XG4gICAgICAgIGlmIChjcFsyXSA8IDEpIGNwWzJdID0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChrY1snbCddKSB7XG4gICAgICAgIGNwWzJdICs9IDE7XG4gICAgICAgIGlmIChjcFswXSArIGNwWzJdID4gZ3JpZFswXSkgY3BbMl0gLT0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDIpIHtcbiAgICAgIGlmIChrY1snaCddKSB7XG4gICAgICAgIGlmIChjcFswXSA+IDApIHtcbiAgICAgICAgICBsZXQgcyA9IHNpemU7XG4gICAgICAgICAgbGV0IHAgPSBwYWRkaW5nO1xuXG4gICAgICAgICAgbGV0IHRvX21vdmUgPSBbKGNwWzBdIC0gMSkgKiBzICsgcCwgY3BbMV0gKiBzICsgcCwgMSAqIHMsIGNwWzNdICogc107XG5cbiAgICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgIHQud2lkdGggPSBkcCh0b19tb3ZlWzJdKTtcbiAgICAgICAgICB0LmhlaWdodCA9IGRwKHRvX21vdmVbM10pO1xuICAgICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICB0eC5zY2FsZShkcHIsIGRwcik7XG4gICAgICAgICAgdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIC4uLnRvX21vdmUubWFwKGMgPT4gZHAoYykpLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIGRwKGNwWzBdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMV0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsyXSAqIHMpLFxuICAgICAgICAgICAgZHAoY3BbM10gKiBzKSxcbiAgICAgICAgICAgIChjcFswXSAtIDEpICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMl0gKiBzLFxuICAgICAgICAgICAgY3BbM10gKiBzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIChjcFswXSArIGNwWzJdIC0gMSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzFdICogcyArIHAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjcFswXSAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa2NbJ2onXSkge1xuICAgICAgICBpZiAoY3BbMV0gKyBjcFszXSA8IGdyaWRbMV0pIHtcbiAgICAgICAgICBsZXQgcyA9IHNpemU7XG4gICAgICAgICAgbGV0IHAgPSBwYWRkaW5nO1xuXG4gICAgICAgICAgbGV0IHRvX21vdmUgPSBbXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgKGNwWzFdICsgY3BbM10pICogcyArIHAsXG4gICAgICAgICAgICBjcFsyXSAqIHMsXG4gICAgICAgICAgICAxICogcyxcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICB0LndpZHRoID0gZHAodG9fbW92ZVsyXSk7XG4gICAgICAgICAgdC5oZWlnaHQgPSBkcCh0b19tb3ZlWzNdKTtcbiAgICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICB0eC5zY2FsZShkcHIsIGRwcik7XG4gICAgICAgICAgdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIC4uLnRvX21vdmUubWFwKGMgPT4gZHAoYykpLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIGRwKGNwWzBdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMV0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsyXSAqIHMpLFxuICAgICAgICAgICAgZHAoY3BbM10gKiBzKSxcbiAgICAgICAgICAgIGNwWzBdICogcyArIHAsXG4gICAgICAgICAgICAoY3BbMV0gKyAxKSAqIHMgKyBwLFxuICAgICAgICAgICAgY3BbMl0gKiBzLFxuICAgICAgICAgICAgY3BbM10gKiBzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIGNwWzBdICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3BbMV0gKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGtjWydrJ10pIHtcbiAgICAgICAgaWYgKGNwWzFdID4gMCkge1xuICAgICAgICAgIGxldCBzID0gc2l6ZTtcbiAgICAgICAgICBsZXQgcCA9IHBhZGRpbmc7XG5cbiAgICAgICAgICBsZXQgdG9fbW92ZSA9IFtjcFswXSAqIHMgKyBwLCAoY3BbMV0gLSAxKSAqIHMgKyBwLCBjcFsyXSAqIHMsIDEgKiBzXTtcblxuICAgICAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgdC53aWR0aCA9IGRwKHRvX21vdmVbMl0pO1xuICAgICAgICAgIHQuaGVpZ2h0ID0gZHAodG9fbW92ZVszXSk7XG4gICAgICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgdHguc2NhbGUoZHByLCBkcHIpO1xuICAgICAgICAgIHR4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAuLi50b19tb3ZlLm1hcChjID0+IGRwKGMpKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICBkcChjcFswXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzFdICogcyArIHApLFxuICAgICAgICAgICAgZHAoY3BbMl0gKiBzKSxcbiAgICAgICAgICAgIGRwKGNwWzNdICogcyksXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgKGNwWzFdIC0gMSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzJdICogcyxcbiAgICAgICAgICAgIGNwWzNdICogc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICBjcFswXSAqIHMgKyBwLFxuICAgICAgICAgICAgKGNwWzFdICsgY3BbM10gLSAxKSAqIHMgKyBwLFxuICAgICAgICAgICAgdG9fbW92ZVsyXSxcbiAgICAgICAgICAgIHRvX21vdmVbM11cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY3BbMV0gLT0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGtjWydsJ10pIHtcbiAgICAgICAgaWYgKGNwWzBdICsgY3BbMl0gPCBncmlkWzBdKSB7XG4gICAgICAgICAgbGV0IHMgPSBzaXplO1xuICAgICAgICAgIGxldCBwID0gcGFkZGluZztcblxuICAgICAgICAgIGxldCB0b19tb3ZlID0gW1xuICAgICAgICAgICAgKGNwWzBdICsgY3BbMl0pICogcyArIHAsXG4gICAgICAgICAgICBjcFsxXSAqIHMgKyBwLFxuICAgICAgICAgICAgMSAqIHMsXG4gICAgICAgICAgICBjcFszXSAqIHMsXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgdC53aWR0aCA9IGRwKHRvX21vdmVbMl0pO1xuICAgICAgICAgIHQuaGVpZ2h0ID0gZHAodG9fbW92ZVszXSk7XG4gICAgICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgIHR4LnNjYWxlKGRwciwgZHByKTtcbiAgICAgICAgICB0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgLi4udG9fbW92ZS5tYXAoYyA9PiBkcChjKSksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRvX21vdmVbMl0sXG4gICAgICAgICAgICB0b19tb3ZlWzNdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgZHAoY3BbMF0gKiBzICsgcCksXG4gICAgICAgICAgICBkcChjcFsxXSAqIHMgKyBwKSxcbiAgICAgICAgICAgIGRwKGNwWzJdICogcyksXG4gICAgICAgICAgICBkcChjcFszXSAqIHMpLFxuICAgICAgICAgICAgKGNwWzBdICsgMSkgKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzFdICogcyArIHAsXG4gICAgICAgICAgICBjcFsyXSAqIHMsXG4gICAgICAgICAgICBjcFszXSAqIHNcbiAgICAgICAgICApO1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgY3BbMF0gKiBzICsgcCxcbiAgICAgICAgICAgIGNwWzFdICogcyArIHAsXG4gICAgICAgICAgICB0b19tb3ZlWzJdLFxuICAgICAgICAgICAgdG9fbW92ZVszXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjcFswXSArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0N1cnNvcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGtleW1hcC5jdXJyZW50W2Uua2V5XSA9IHRydWU7XG4gICAga2V5QWN0aW9uKGUua2V5LCBlLnJlcGVhdCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGtleW1hcC5jdXJyZW50W2Uua2V5XSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0ltYWdlKHNyYykge1xuICAgIGNhY2hlLmN1cnJlbnQgPSBzcmM7XG5cbiAgICBsZXQgZGltZW5zaW9ucyA9IFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XTtcblxuICAgIGxldCBjID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgdyA9IGRpbWVuc2lvbnNbMF0gLSBwYWRkaW5nICogMjtcbiAgICBsZXQgaCA9IGRpbWVuc2lvbnNbMV0gLSBwYWRkaW5nICogMyAtIGxoO1xuICAgIGxldCBhID0gdyAvIGg7XG5cbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxldCBwYSA9IGltZy53aWR0aCAvIGltZy5oZWlnaHQ7XG4gICAgICBsZXQgcHcgPSBpbWcud2lkdGg7XG4gICAgICBsZXQgcGggPSBpbWcuaGVpZ2h0O1xuICAgICAgaWYgKGEgPj0gcGEpIHtcbiAgICAgICAgaWYgKHBoID4gaCkge1xuICAgICAgICAgIHBoID0gaDtcbiAgICAgICAgICBwdyA9IGggKiBwYTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhIDwgcGEpIHtcbiAgICAgICAgaWYgKHB3ID4gdykge1xuICAgICAgICAgIHB3ID0gdztcbiAgICAgICAgICBwaCA9IHcgLyBwYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwdyA9IE1hdGguZmxvb3IocHcgLyBzaXplKSAqIHNpemU7XG4gICAgICBwaCA9IE1hdGguZmxvb3IocGggLyBzaXplKSAqIHNpemU7XG5cbiAgICAgIGxldCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gICAgICBjLndpZHRoID0gcHcgKiBkcHIgKyBwYWRkaW5nICogMjtcbiAgICAgIGMuaGVpZ2h0ID0gcGggKiBkcHIgKyBwYWRkaW5nICogMjtcbiAgICAgIGMuc3R5bGUud2lkdGggPSBwdyArIHBhZGRpbmcgKiAyICsgJ3B4JztcbiAgICAgIGMuc3R5bGUuaGVpZ2h0ID0gcGggKyBwYWRkaW5nICogMiArICdweCc7XG4gICAgICBjLnN0eWxlLm1hcmdpbkxlZnQgPSAnYXV0byc7XG4gICAgICBjLnN0eWxlLm1hcmdpblJpZ2h0ID0gJ2F1dG8nO1xuXG4gICAgICBjdHguc2NhbGUoZHByLCBkcHIpO1xuXG4gICAgICBsZXQgY3VyID0gY3Vyc29yUmVmLmN1cnJlbnQ7XG4gICAgICBjdXIud2lkdGggPSBwdyAqIGRwciArIHBhZGRpbmcgKiAyO1xuICAgICAgY3VyLmhlaWdodCA9IHBoICogZHByICsgcGFkZGluZyAqIDI7XG4gICAgICBjdXIuc3R5bGUud2lkdGggPSBwdyArIHBhZGRpbmcgKiAyICsgJ3B4JztcbiAgICAgIGN1ci5zdHlsZS5oZWlnaHQgPSBwaCArIHBhZGRpbmcgKiAyICsgJ3B4JztcblxuICAgICAgbGV0IGN1cnR4ID0gY3VyLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgIGN1cnR4LnNjYWxlKGRwciwgZHByKTtcblxuICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHBhZGRpbmcsIHBhZGRpbmcsIHB3LCBwaCk7XG4gICAgICBzZXRHcmlkKFtwdyAvIHNpemUsIHBoIC8gc2l6ZV0pO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGRyYXdJbWFnZShzcmMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJztcbiAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBkcmF3SW1hZ2Uoc3JjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdDdXJzb3IoKSB7XG4gICAgbGV0IHIgPSBjdXJzb3JSZWYuY3VycmVudDtcbiAgICBsZXQgcCA9IHBhZGRpbmc7XG4gICAgbGV0IHJ0eCA9IGN1cnNvclJlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgbGV0IGNwID0gY3BSZWYuY3VycmVudDtcbiAgICBydHguY2xlYXJSZWN0KDAsIDAsIHIub2Zmc2V0V2lkdGgsIHIub2Zmc2V0SGVpZ2h0KTtcbiAgICBydHgubGluZVdpZHRoID0gMjtcbiAgICBpZiAobW9kZSA9PT0gMCkge1xuICAgICAgcnR4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMSkge1xuICAgICAgcnR4LnN0cm9rZVN0eWxlID0gJ2hvdHBpbmsnO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMikge1xuICAgICAgcnR4LnN0cm9rZVN0eWxlID0gJ2xpbWVncmVlbic7XG4gICAgfVxuICAgIHJ0eC5zdHJva2VSZWN0KFxuICAgICAgY3BbMF0gKiBzaXplICsgcCxcbiAgICAgIGNwWzFdICogc2l6ZSArIHAsXG4gICAgICBjcFsyXSAqIHNpemUsXG4gICAgICBjcFszXSAqIHNpemVcbiAgICApO1xuXG4gICAgaWYgKGdyaWQgIT09IG51bGwpIHtcbiAgICAgIGxldCBybyA9IHJlYWRvdXQuY3VycmVudDtcbiAgICAgIHJvLmlubmVySFRNTCA9IGAke2dyaWRbMF19eCR7Z3JpZFsxXX0mbmJzcDsgICR7Y3BbMF19LCR7Y3BbMV19ICR7Y3BbMl19eCR7XG4gICAgICAgIGNwWzNdXG4gICAgICB9YDtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRyYXdDdXJzb3IoKTtcbiAgfSwgW21vZGUsIGdyaWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBkaW1lbnNpb25zID0gW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdO1xuXG4gICAgZHJhd0ltYWdlKCcvc3RhdGljL2xpb24uanBnJyk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZywgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSwgZmFsc2UpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnLCBmYWxzZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpO1xuICAgIH07XG4gIH0sIFttb2RlLCBncmlkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GcmVlY29uZmlnPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvc3RhdGljL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGN1c3RvbSwgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3IgPT09ICdkYXJrJyA/ICcjMjIyJyA6ICcjZWVlJ307XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3IgPT09ICdkYXJrJyA/ICcjZmZmJyA6ICcjMDAwJ307XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Y2FudmFzIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0gcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtNTAlLDApYCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlZj17Y3Vyc29yUmVmfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IHBhZGRpbmcsIHBhZGRpbmdMZWZ0OiAnMmNoJyB9fVxuICAgICAgICByZWY9e3JlYWRvdXR9XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIG91dGxpbmU6IGNvbG9yID09PSAnZGFyaycgPyAnc29saWQgMXB4IHdoaXRlJyA6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgIGRpc3BsYXk6IGhlbHAgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIG1heFdpZHRoOiBgY2FsYygxMDAlIC0gM3JlbSlgLFxuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICBjb2xvciA9PT0gJ2RhcmsnID8gJ3JnYmEoMCwwLDAsMC44KScgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJyxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC43NXJlbScsXG4gICAgICAgICAgcGFkZGluZ1RvcDogJzAuNzVyZW0nLFxuICAgICAgICAgIHJpZ2h0OiAnMS41cmVtJyxcbiAgICAgICAgICBib3R0b206ICcxLjVyZW0nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAuNzVyZW0nLCBtYXhXaWR0aDogJzYwY2gnIH19PlxuICAgICAgICAgIEZyZWVjb25maWcgbGV0cyB5b3Ugc2hpZnQgYmxvY2tzIGFyb3VuZCBpbiBhbiBpbWFnZS5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC43NXJlbScsIG1heFdpZHRoOiAnNjBjaCcgfX0+TW9kZTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtLZXlUaXAoJ2EnLCBjb2xvcil9IOKGqiZuYnNwOyB7S2V5VGlwKCd3JywgY29sb3IpfSB0aHJ1c3QmbmJzcDt7JyAnfVxuICAgICAgICAgIHtLZXlUaXAoJ2QnLCBjb2xvcil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/carousel/pages/index.js */")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
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
      lineNumber: 550
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
      lineNumber: 551
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
      lineNumber: 561
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
      lineNumber: 565
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
      lineNumber: 581
    },
    __self: this
  }, "Freeconfig lets you shift blocks around in an image."), __jsx("div", {
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
  }, "Mode"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2328641575", [color === 'dark' ? '#222' : '#eee', color === 'dark' ? '#fff' : '#000']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  }, KeyTip('a', color), " \u21AA\xA0 ", KeyTip('w', color), " thrust\xA0", ' ', KeyTip('d', color))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c4d58c8fd19a3a3e89b7.hot-update.js.map