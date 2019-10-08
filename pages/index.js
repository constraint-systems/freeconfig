import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';

function getDist(p1, p2) {
  let a = p2[0] - p1[0];
  let b = p2[1] - p1[1];
  return Math.sqrt(a * a + b * b);
}

let padding = 10;
let size = 10;
let colors = ['blue', 'hotpink', 'limegreen'];

let lh = 16 * 1.5;

// mode 0 = move
// mode 1 = adjust
// mode 2 = grab

let Home = () => {
  let [grid, setGrid] = useState(null);
  let [mode, setMode] = useState(0);
  let [color, setColor] = useState('dark');
  let cpRef = useRef([0, 0, 10, 10]);
  let canvasRef = useRef();
  let cursorRef = useRef();
  let readout = useRef();
  let keymap = useRef({});
  let cache = useRef(null);
  let [help, setHelp] = useState(true);

  function KeyTip(letter, color) {
    return (
      <span
        className="keytip"
        onClick={() => {
          keymap.current[letter] = true;
          keyAction(letter, false);
          setTimeout(() => {
            keymap.current[letter] = false;
          }, 300);
        }}
        style={{
          outline: color === 'dark' ? 'solid 1px white' : 'solid 1px black',
          paddingLeft: '0.5ch',
          paddingRight: '0.5ch',
          textAlign: 'center',
          display: 'inline-block',
          userSelect: 'none',
          cursor: 'default',
        }}
      >
        {letter === ' ' ? 'spacebar' : letter}
      </span>
    );
  }

  function reset() {
    if (cache !== null) {
      drawImage(cache.current);
    }
  }

  function keyAction(letter, repeat) {
    let c = canvasRef.current;
    let ctx = c.getContext('2d');
    let cp = cpRef.current;
    let dpr = window.devicePixelRatio || 1;
    let kc = keymap.current;

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
      let input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.dispatchEvent(
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      function handleChange(e) {
        for (const item of this.files) {
          if (item.type.indexOf('image') < 0) {
            continue;
          }
          let src = URL.createObjectURL(item);
          drawImage(src);
        }
        this.removeEventListener('change', handleChange);
      }
      input.addEventListener('change', handleChange);
    } else if (letter === 'b') {
      setColor(function(prevState) {
        return prevState === 'light' ? 'dark' : 'light';
      });
    } else if (letter === 'e' && !repeat) {
      let link = document.createElement('a');

      var revokeURL = function() {
        let me = this;
        requestAnimationFrame(function() {
          URL.revokeObjectURL(me.href);
          me.href = null;
        });
        this.removeEventListener('click', revokeURL);
      };

      ctx.canvas.toBlob(function(blob) {
        link.setAttribute('download', 'freeconfig.png');
        link.setAttribute('href', URL.createObjectURL(blob));
        link.addEventListener('click', revokeURL);
        link.dispatchEvent(
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
      });
    } else if (letter === '?') {
      setHelp(prevState => {
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
          let s = size;
          let p = padding;

          let to_move = [(cp[0] - 1) * s + p, cp[1] * s + p, 1 * s, cp[3] * s];

          let t = document.createElement('canvas');
          t.width = dp(to_move[2]);
          t.height = dp(to_move[3]);
          let tx = t.getContext('2d');
          tx.scale(dpr, dpr);
          tx.drawImage(
            c,
            ...to_move.map(c => dp(c)),
            0,
            0,
            to_move[2],
            to_move[3]
          );

          ctx.drawImage(
            c,
            dp(cp[0] * s + p),
            dp(cp[1] * s + p),
            dp(cp[2] * s),
            dp(cp[3] * s),
            (cp[0] - 1) * s + p,
            cp[1] * s + p,
            cp[2] * s,
            cp[3] * s
          );
          ctx.drawImage(
            t,
            (cp[0] + cp[2] - 1) * s + p,
            cp[1] * s + p,
            to_move[2],
            to_move[3]
          );

          cp[0] -= 1;
        }
      }
      if (kc['j']) {
        if (cp[1] + cp[3] < grid[1]) {
          let s = size;
          let p = padding;

          let to_move = [
            cp[0] * s + p,
            (cp[1] + cp[3]) * s + p,
            cp[2] * s,
            1 * s,
          ];

          let t = document.createElement('canvas');
          t.width = dp(to_move[2]);
          t.height = dp(to_move[3]);
          let tx = t.getContext('2d');

          tx.scale(dpr, dpr);
          tx.drawImage(
            c,
            ...to_move.map(c => dp(c)),
            0,
            0,
            to_move[2],
            to_move[3]
          );

          ctx.drawImage(
            c,
            dp(cp[0] * s + p),
            dp(cp[1] * s + p),
            dp(cp[2] * s),
            dp(cp[3] * s),
            cp[0] * s + p,
            (cp[1] + 1) * s + p,
            cp[2] * s,
            cp[3] * s
          );
          ctx.drawImage(
            t,
            cp[0] * s + p,
            cp[1] * s + p,
            to_move[2],
            to_move[3]
          );

          cp[1] += 1;
        }
      }
      if (kc['k']) {
        if (cp[1] > 0) {
          let s = size;
          let p = padding;

          let to_move = [cp[0] * s + p, (cp[1] - 1) * s + p, cp[2] * s, 1 * s];

          let t = document.createElement('canvas');
          t.width = dp(to_move[2]);
          t.height = dp(to_move[3]);
          let tx = t.getContext('2d');

          tx.scale(dpr, dpr);
          tx.drawImage(
            c,
            ...to_move.map(c => dp(c)),
            0,
            0,
            to_move[2],
            to_move[3]
          );

          ctx.drawImage(
            c,
            dp(cp[0] * s + p),
            dp(cp[1] * s + p),
            dp(cp[2] * s),
            dp(cp[3] * s),
            cp[0] * s + p,
            (cp[1] - 1) * s + p,
            cp[2] * s,
            cp[3] * s
          );
          ctx.drawImage(
            t,
            cp[0] * s + p,
            (cp[1] + cp[3] - 1) * s + p,
            to_move[2],
            to_move[3]
          );

          cp[1] -= 1;
        }
      }
      if (kc['l']) {
        if (cp[0] + cp[2] < grid[0]) {
          let s = size;
          let p = padding;

          let to_move = [
            (cp[0] + cp[2]) * s + p,
            cp[1] * s + p,
            1 * s,
            cp[3] * s,
          ];

          let t = document.createElement('canvas');
          t.width = dp(to_move[2]);
          t.height = dp(to_move[3]);
          let tx = t.getContext('2d');
          tx.scale(dpr, dpr);
          tx.drawImage(
            c,
            ...to_move.map(c => dp(c)),
            0,
            0,
            to_move[2],
            to_move[3]
          );

          ctx.drawImage(
            c,
            dp(cp[0] * s + p),
            dp(cp[1] * s + p),
            dp(cp[2] * s),
            dp(cp[3] * s),
            (cp[0] + 1) * s + p,
            cp[1] * s + p,
            cp[2] * s,
            cp[3] * s
          );
          ctx.drawImage(
            t,
            cp[0] * s + p,
            cp[1] * s + p,
            to_move[2],
            to_move[3]
          );

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

    let dimensions = [window.innerWidth, window.innerHeight];

    let c = canvasRef.current;
    let ctx = c.getContext('2d');
    let w = dimensions[0] - padding * 2;
    let h = dimensions[1] - padding * 3 - lh;
    let a = w / h;

    let img = new Image();
    img.onload = () => {
      let pa = img.width / img.height;
      let pw = img.width;
      let ph = img.height;
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

      let dpr = window.devicePixelRatio || 1;

      c.width = pw * dpr + padding * 2;
      c.height = ph * dpr + padding * 2;
      c.style.width = pw + padding * 2 + 'px';
      c.style.height = ph + padding * 2 + 'px';
      c.style.marginLeft = 'auto';
      c.style.marginRight = 'auto';

      ctx.scale(dpr, dpr);

      let cur = cursorRef.current;
      cur.width = pw * dpr + padding * 2;
      cur.height = ph * dpr + padding * 2;
      cur.style.width = pw + padding * 2 + 'px';
      cur.style.height = ph + padding * 2 + 'px';

      let curtx = cur.getContext('2d');

      curtx.scale(dpr, dpr);

      ctx.drawImage(img, padding, padding, pw, ph);
      setGrid([pw / size, ph / size]);
    };
    img.src = src;
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    for (const item of e.clipboardData.items) {
      if (item.type.indexOf('image') < 0) {
        continue;
      }
      let file = item.getAsFile();
      let src = URL.createObjectURL(file);
      drawImage(src);
    }
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    let file = e.dataTransfer.files[0];
    let filename = file.path ? file.path : file.name ? file.name : '';
    let src = URL.createObjectURL(file);
    drawImage(src);
  }

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function drawCursor() {
    let r = cursorRef.current;
    let p = padding;
    let rtx = cursorRef.current.getContext('2d');
    let cp = cpRef.current;
    rtx.clearRect(0, 0, r.offsetWidth, r.offsetHeight);
    rtx.lineWidth = 2;
    if (mode === 0) {
      rtx.strokeStyle = colors[0];
    } else if (mode === 1) {
      rtx.strokeStyle = colors[1];
    } else if (mode === 2) {
      rtx.strokeStyle = colors[2];
    }
    rtx.strokeRect(
      cp[0] * size + p,
      cp[1] * size + p,
      cp[2] * size,
      cp[3] * size
    );

    if (grid !== null) {
      let ro = readout.current;
      ro.innerHTML = `${grid[0]}x${grid[1]}&nbsp;  ${cp[0]},${cp[1]} ${cp[2]}x${
        cp[3]
      }`;
    }
  }

  useEffect(() => {
    if (grid !== null) {
      drawCursor();
    }
  }, [mode, grid]);

  useEffect(() => {
    let dimensions = [window.innerWidth, window.innerHeight];

    drawImage('/static/lion.jpg');
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('paste', onPaste, false);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false);
    };
  }, [mode, grid]);

  return (
    <div>
      <Head>
        <title>Freeconfig</title>
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: 'custom';
          src: url('/static/IBMPlexMono-Regular.woff2') format('woff2'),
            url('/static/IBMPlexMono-Regular.woff') format('woff');
        }
        * {
          box-sizing: border-box;
        }
        html {
          font-family: custom, monospace;
          font-size: 14px;
          line-height: 1.5;
          background: ${color === 'dark' ? '#222' : '#eee'};
          color: ${color === 'dark' ? '#fff' : '#000'};
        }
        body {
          margin: 0;
          overflow: auto;
        }
        textarea {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }
        p {
          margin: 0;
        }
        a {
          color: inherit;
        }
      `}</style>
      <div>
        <canvas style={{ display: 'block' }} ref={canvasRef} />
        <canvas
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            transform: `translate(-50%,0)`,
          }}
          ref={cursorRef}
        />
      </div>
      <div
        style={{ position: 'absolute', bottom: padding, paddingLeft: '2ch' }}
        ref={readout}
      />
      <div
        style={{
          position: 'fixed',
          outline: color === 'dark' ? 'solid 1px white' : 'solid 1px black',
          display: help ? 'block' : 'none',
          maxWidth: `calc(100% - 3rem)`,
          background:
            color === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
          paddingLeft: '2ch',
          paddingRight: '2ch',
          paddingBottom: '0.75rem',
          paddingTop: '0.75rem',
          right: '1.5rem',
          bottom: '1.5rem',
        }}
      >
        <div style={{ marginBottom: '0.75rem', maxWidth: '60ch' }}>
          Freeconfig lets you push image pixels around in blocks.
        </div>
        <div style={{ marginBottom: '0.375rem', maxWidth: '60ch' }}>Mode</div>
        <div style={{ marginBottom: '0.75rem' }}>
          {KeyTip('a', color)}{' '}
          <span style={{ background: mode === 0 ? colors[0] : 'transparent' }}>
            move
          </span>
          &nbsp; {KeyTip('s', color)}{' '}
          <span style={{ background: mode === 1 ? colors[1] : 'transparent' }}>
            adjust size
          </span>
          &nbsp; {KeyTip('d', color)}{' '}
          <span style={{ background: mode === 2 ? colors[2] : 'transparent' }}>
            grab
          </span>
        </div>
        {mode === 0 ? (
          <div style={{ marginBottom: '0.375rem', maxWidth: '60ch' }}>
            Move cursor
          </div>
        ) : null}
        {mode === 1 ? (
          <div style={{ marginBottom: '0.375rem', maxWidth: '60ch' }}>
            Adjust cursor size
          </div>
        ) : null}
        {mode === 2 ? (
          <div style={{ marginBottom: '0.375rem', maxWidth: '60ch' }}>
            Move selection
          </div>
        ) : null}

        <div style={{ marginBottom: '0.75rem' }}>
          {[['h', '←'], ['j', '↓'], ['k', '↑'], ['l', '→']].map(a => (
            <span>
              {KeyTip(a[0], color)} {a[1]}&nbsp;{' '}
            </span>
          ))}
        </div>

        <div style={{ marginBottom: '0.375rem', maxWidth: '60ch' }}>Image</div>
        <div style={{ marginBottom: '0.75rem', maxWidth: '60ch' }}>
          To add an image you can paste, drop, or press {KeyTip('o', color)} to
          open a file dialog.{' '}
          <a href="https://unsplash.com/photos/QMRN_GX7p4I" target="_blank">
            Lion photo by Maurits Bausenhart↗
          </a>
        </div>

        <div style={{ marginBottom: '0.375rem', maxWidth: '60ch' }}>
          Special
        </div>

        <div style={{ marginBottom: '0.75rem' }}>
          {KeyTip('r', color)} reset image&nbsp; {KeyTip('e', color)} save as
          png&nbsp; {KeyTip('b', color)}{' '}
          {color === 'dark' ? 'light bg' : 'dark bg'}
        </div>
      </div>
      {help ? null : (
        <div
          style={{
            position: 'fixed',
            right: '1.5rem',
            bottom: '1.5rem',
            background:
              color === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
          }}
        >
          {KeyTip('?', color)}
        </div>
      )}
    </div>
  );
};

export default Home;
