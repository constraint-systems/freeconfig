(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=l.cssRules();return l.flush(),e},t.default=void 0;var r,i=n("q1tI");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,c(t).call(this,e))).prevProps={},n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,i.Component),n=t,o=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return l.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){l.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&l.remove(this.prevProps),l.add(this.props),this.prevProps=this.props),null}}])&&a(n.prototype,r),o&&a(n,o),t}();t.default=d},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&h())}function h(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||l||s(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),i=n.n(r);var o=n("d04V"),a=n.n(o),s=n("yLu3"),c=n.n(s);function u(e){return function(e){if(i()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return a()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=n("XXOK"),d=n.n(l),f=n("MX0m"),h=n.n(f),m=n("q1tI"),p=n.n(m),v=n("8Kt/"),y=n.n(v),g=p.a.createElement;var w=10,k=10,_=["blue","hotpink","limegreen"],b=24;t.default=function(){var e=Object(m.useState)(null),t=e[0],n=e[1],r=Object(m.useState)(0),i=r[0],o=r[1],a=Object(m.useState)("dark"),s=a[0],c=a[1],l=Object(m.useRef)([0,0,10,10]),f=Object(m.useRef)(),p=Object(m.useRef)(),v=Object(m.useRef)(),S=Object(m.useRef)({}),R=Object(m.useRef)(null),x=Object(m.useState)(!0),j=x[0],O=x[1];function E(e,t){return g("span",{className:"keytip",onClick:function(){S.current[e]=!0,C(e,!1),setTimeout(function(){S.current[e]=!1},300)},style:{outline:"dark"===t?"solid 1px white":"solid 1px black",paddingLeft:"0.5ch",paddingRight:"0.5ch",textAlign:"center",display:"inline-block",userSelect:"none",cursor:"default"}}," "===e?"spacebar":e)}function C(e,n){var r=f.current,a=r.getContext("2d"),s=l.current,h=window.devicePixelRatio||1,m=S.current;function p(e){return e*h}if("a"!==e||n)if("s"!==e||n)if("d"!==e||n)if("r"!==e||n)if("o"!==e||n)if("b"===e)c(function(e){return"light"===e?"dark":"light"});else if("e"!==e||n)"?"===e&&O(function(e){return!e});else{var v=document.createElement("a"),y=function e(){var t=this;requestAnimationFrame(function(){URL.revokeObjectURL(t.href),t.href=null}),this.removeEventListener("click",e)},g=document.createElement("canvas"),_=g.getContext("2d");g.width=r.offsetWidth*h-2*w*h,g.height=r.offsetHeight*h-2*w*h,_.drawImage(r,-w*h,-w*h),_.canvas.toBlob(function(e){v.setAttribute("download","freeconfig.png"),v.setAttribute("href",URL.createObjectURL(e)),v.addEventListener("click",y),v.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))})}else{var b=document.createElement("input");b.setAttribute("type","file"),b.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),b.addEventListener("change",function e(t){var n=!0,r=!1,i=void 0;try{for(var o,a=d()(this.files);!(n=(o=a.next()).done);n=!0){var s=o.value;s.type.indexOf("image")<0||N(URL.createObjectURL(s))}}catch(c){r=!0,i=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}this.removeEventListener("change",e)})}else null!==R&&N(R.current);else o(2);else o(1);else o(0);if(0===i)m.j&&(s[1]+=1,s[1]+s[3]>t[1]&&(s[1]-=1)),m.k&&(s[1]-=1,s[1]<0&&(s[1]=0)),m.l&&(s[0]+=1,s[0]+s[2]>t[0]&&(s[0]-=1)),m.h&&(s[0]-=1,s[0]<0&&(s[0]=0));else if(1===i)m.k&&(s[3]-=1,s[3]<1&&(s[3]=1)),m.j&&(s[3]+=1,s[1]+s[3]>t[1]&&(s[3]-=1)),m.h&&(s[2]-=1,s[2]<1&&(s[2]=1)),m.l&&(s[2]+=1,s[0]+s[2]>t[0]&&(s[2]-=1));else if(2===i){if(m.h&&s[0]>0){var x=k,j=w,E=[(s[0]-1)*x+j,s[1]*x+j,1*x,s[3]*x],C=document.createElement("canvas");C.width=p(E[2]),C.height=p(E[3]);var T=C.getContext("2d");T.scale(h,h),T.drawImage.apply(T,[r].concat(u(E.map(function(e){return p(e)})),[0,0,E[2],E[3]])),a.drawImage(r,p(s[0]*x+j),p(s[1]*x+j),p(s[2]*x),p(s[3]*x),(s[0]-1)*x+j,s[1]*x+j,s[2]*x,s[3]*x),a.drawImage(C,(s[0]+s[2]-1)*x+j,s[1]*x+j,E[2],E[3]),s[0]-=1}if(m.j&&s[1]+s[3]<t[1]){var I=k,F=w,B=[s[0]*I+F,(s[1]+s[3])*I+F,s[2]*I,1*I],L=document.createElement("canvas");L.width=p(B[2]),L.height=p(B[3]);var P=L.getContext("2d");P.scale(h,h),P.drawImage.apply(P,[r].concat(u(B.map(function(e){return p(e)})),[0,0,B[2],B[3]])),a.drawImage(r,p(s[0]*I+F),p(s[1]*I+F),p(s[2]*I),p(s[3]*I),s[0]*I+F,(s[1]+1)*I+F,s[2]*I,s[3]*I),a.drawImage(L,s[0]*I+F,s[1]*I+F,B[2],B[3]),s[1]+=1}if(m.k&&s[1]>0){var A=k,M=w,W=[s[0]*A+M,(s[1]-1)*A+M,s[2]*A,1*A],U=document.createElement("canvas");U.width=p(W[2]),U.height=p(W[3]);var X=U.getContext("2d");X.scale(h,h),X.drawImage.apply(X,[r].concat(u(W.map(function(e){return p(e)})),[0,0,W[2],W[3]])),a.drawImage(r,p(s[0]*A+M),p(s[1]*A+M),p(s[2]*A),p(s[3]*A),s[0]*A+M,(s[1]-1)*A+M,s[2]*A,s[3]*A),a.drawImage(U,s[0]*A+M,(s[1]+s[3]-1)*A+M,W[2],W[3]),s[1]-=1}if(m.l&&s[0]+s[2]<t[0]){var q=k,D=w,H=[(s[0]+s[2])*q+D,s[1]*q+D,1*q,s[3]*q],V=document.createElement("canvas");V.width=p(H[2]),V.height=p(H[3]);var Z=V.getContext("2d");Z.scale(h,h),Z.drawImage.apply(Z,[r].concat(u(H.map(function(e){return p(e)})),[0,0,H[2],H[3]])),a.drawImage(r,p(s[0]*q+D),p(s[1]*q+D),p(s[2]*q),p(s[3]*q),(s[0]+1)*q+D,s[1]*q+D,s[2]*q,s[3]*q),a.drawImage(V,s[0]*q+D,s[1]*q+D,H[2],H[3]),s[0]+=1}}z()}function T(e){S.current[e.key]=!0,C(e.key,e.repeat)}function I(e){S.current[e.key]=!1}function N(e){R.current=e;var t=[window.innerWidth,window.innerHeight],r=f.current,i=r.getContext("2d"),o=t[0]-2*w,a=t[1]-3*w-b,s=o/a,c=new Image;c.onload=function(){var e=c.width/c.height,t=c.width,u=c.height;s>=e?u>a&&(u=a,t=a*e):s<e&&t>o&&(t=o,u=o/e),t=Math.floor(t/k)*k,u=Math.floor(u/k)*k;var l=window.devicePixelRatio||1;r.width=t*l+2*w,r.height=u*l+2*w,r.style.width=t+2*w+"px",r.style.height=u+2*w+"px",r.style.marginLeft="auto",r.style.marginRight="auto",i.scale(l,l);var d=p.current;d.width=t*l+2*w,d.height=u*l+2*w,d.style.width=t+2*w+"px",d.style.height=u+2*w+"px",d.getContext("2d").scale(l,l),i.drawImage(c,w,w,t,u),n([t/k,u/k])},c.src=e}function F(e){e.preventDefault(),e.stopPropagation();var t=!0,n=!1,r=void 0;try{for(var i,o=d()(e.clipboardData.items);!(t=(i=o.next()).done);t=!0){var a=i.value;if(!(a.type.indexOf("image")<0)){var s=a.getAsFile();N(URL.createObjectURL(s))}}}catch(c){n=!0,r=c}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}function B(e){e.preventDefault(),e.stopPropagation();var t=e.dataTransfer.files[0];t.path?t.path:t.name&&t.name,N(URL.createObjectURL(t))}function L(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}function z(){var e=p.current,n=w,r=p.current.getContext("2d"),o=l.current;r.clearRect(0,0,e.offsetWidth,e.offsetHeight),r.lineWidth=2,0===i?r.strokeStyle=_[0]:1===i?r.strokeStyle=_[1]:2===i&&(r.strokeStyle=_[2]),r.strokeRect(o[0]*k+n,o[1]*k+n,o[2]*k,o[3]*k),null!==t&&(v.current.innerHTML="".concat(t[0],"x").concat(t[1],"&nbsp;  ").concat(o[0],",").concat(o[1]," ").concat(o[2],"x").concat(o[3]))}return Object(m.useEffect)(function(){null!==t&&z()},[i,t]),Object(m.useEffect)(function(){window.innerWidth,window.innerHeight,N("/static/lion.jpg")},[]),Object(m.useEffect)(function(){return window.addEventListener("keydown",T),window.addEventListener("keyup",I),window.addEventListener("paste",F,!1),window.addEventListener("dragover",L,!1),window.addEventListener("drop",B,!1),function(){window.removeEventListener("keydown",T),window.removeEventListener("keyup",I),window.removeEventListener("paste",F,!1),window.removeEventListener("dragover",L,!1),window.removeEventListener("drop",B,!1)}},[i,t]),g("div",{className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},g(y.a,null,g("title",{className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"Freeconfig")),g(h.a,{id:"2328641575",dynamic:["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]},["@font-face{font-family:'custom';src:url('/static/IBMPlexMono-Regular.woff2') format('woff2'), url('/static/IBMPlexMono-Regular.woff') format('woff');}","*{box-sizing:border-box;}","html{font-family:custom,monospace;font-size:14px;line-height:1.5;background:".concat("dark"===s?"#222":"#eee",";color:").concat("dark"===s?"#fff":"#000",";}"),"body{margin:0;overflow:auto;}","textarea{font-family:inherit;font-size:inherit;line-height:inherit;}","p{margin:0;}","a{color:inherit;}"]),g("div",{className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},g("canvas",{style:{display:"block"},ref:f,className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])}),g("canvas",{style:{position:"absolute",left:"50%",top:0,transform:"translate(-50%,0)"},ref:p,className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])})),g("div",{style:{position:"absolute",bottom:w,paddingLeft:"2ch"},ref:v,className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])}),g("div",{style:{position:"fixed",outline:"dark"===s?"solid 1px white":"solid 1px black",display:j?"block":"none",maxWidth:"calc(100% - 3rem)",background:"dark"===s?"rgba(0,0,0,0.8)":"rgba(255,255,255,0.8)",paddingLeft:"2ch",paddingRight:"2ch",paddingBottom:"0.75rem",paddingTop:"0.75rem",right:"1.5rem",bottom:"1.5rem"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},g("div",{style:{marginBottom:"0.75rem",maxWidth:"60ch"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"Freeconfig lets you push image pixels around in blocks."),g("div",{style:{marginBottom:"0.375rem",maxWidth:"60ch"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"Mode"),g("div",{style:{marginBottom:"0.75rem"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},E("a",s)," ",g("span",{style:{background:0===i?_[0]:"transparent"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"move"),"\xa0 ",E("s",s)," ",g("span",{style:{background:1===i?_[1]:"transparent"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"adjust size"),"\xa0 ",E("d",s)," ",g("span",{style:{background:2===i?_[2]:"transparent"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"grab")),0===i?g("div",{style:{marginBottom:"0.375rem",maxWidth:"60ch"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"Move cursor"):null,1===i?g("div",{style:{marginBottom:"0.375rem",maxWidth:"60ch"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"Adjust cursor size"):null,2===i?g("div",{style:{marginBottom:"0.375rem",maxWidth:"60ch"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"Move selection"):null,g("div",{style:{marginBottom:"0.75rem"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},[["h","\u2190"],["j","\u2193"],["k","\u2191"],["l","\u2192"]].map(function(e){return g("span",{className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},E(e[0],s)," ",e[1],"\xa0"," ")})),g("div",{style:{marginBottom:"0.375rem",maxWidth:"60ch"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"Image"),g("div",{style:{marginBottom:"0.75rem",maxWidth:"60ch"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"To add an image you can paste, drop, or press ",E("o",s)," to open a file dialog."," ",g("a",{href:"https://unsplash.com/photos/QMRN_GX7p4I",target:"_blank",className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"Lion photo by Maurits Bausenhart\u2197")),g("div",{style:{marginBottom:"0.375rem",maxWidth:"60ch"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"Special"),g("div",{style:{marginBottom:"0.75rem"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},E("r",s)," reset image\xa0 ",E("e",s)," save as png\xa0 ",E("b",s)," ","dark"===s?"light bg":"dark bg","\xa0 ",E("?",s)," ","help"),g("div",{className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},g("a",{href:"https://github.com/constraint-systems/freeconfig",target:"_blank",className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},"View source\u2197"))),j?null:g("div",{style:{position:"fixed",right:"1.5rem",bottom:"1.5rem",background:"dark"===s?"rgba(0,0,0,0.8)":"rgba(255,255,255,0.8)"},className:h.a.dynamic([["2328641575",["dark"===s?"#222":"#eee","dark"===s?"#fff":"#000"]]])},E("?",s)))}},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,a=void 0!==o&&o,s=t.isBrowser,c=void 0===s?"undefined"!==typeof window:s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,o;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=o,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var i=String(n),o=t+i;return e[o]||(e[o]="jsx-".concat((0,r.default)("".concat(t,"-").concat(i)))),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(o,e)}):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&a(t.prototype,n),o&&a(t,o),e}();t.default=s},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,o=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,c=void 0===s?r:s,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#".concat(o,"-deleted-rule____{}"),a("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,o,s;return t=e,(o=[{key:"setOptimizeForSpeed",value:function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(a(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return r||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];a(i,"old rule at index `".concat(e,"` not found")),i.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&a(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),s&&n(t,s),e}();function a(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=o}).call(this,n("8oxB"))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,0]]]);