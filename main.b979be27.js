!function(e){function n(n){for(var r,u,i=n[0],c=n[1],s=n[2],p=0,f=[];p<i.length;p++)u=i[p],o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(n);f.length;)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={0:0},a=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=o[e]=[n,r]});n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(e){return u.p+"window-to-the-stars/templates/"+({1:"src/pages/404",2:"src/pages/about",3:"src/pages/blog",4:"src/pages/index"}[e]||e)+"."+{1:"5ab9c204",2:"04feb636",3:"de11c804",4:"a8fed497"}[e]+".js"}(e);var c=new Error;a=function(n){i.onerror=i.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,t[1](c)}o[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var l=c;a.push([57,5]),t()}({115:function(e,n,t){var r={".":13,"./":13,"./index":13,"./index.js":13};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=115},122:function(e,n,t){"use strict";t.r(n),function(e){var r=t(0),o=t.n(r),a=t(30),u=t.n(a),i=t(52),c=t(18);if(n.default=c.a,"undefined"!=typeof document){var s=document.getElementById("root"),l=s.hasChildNodes()?u.a.hydrate:u.a.render,p=function(e){l(o.a.createElement(i.AppContainer,null,o.a.createElement(e,null)),s)};p(c.a),e&&e.hot&&e.hot.accept("./App",function(){p(c.a)})}}.call(this,t(123)(e))},127:function(e,n,t){},18:function(e,n,t){"use strict";var r=t(25),o=t.n(r),a=t(26),u=t.n(a),i=t(27),c=t.n(i),s=t(28),l=t.n(s),p=t(29),f=t.n(p),d=t(0),m=t.n(d),g=t(14),h=t(17),v=function(){return m.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")};t(127);Object(g.addPrefetchExcludes)(["dynamic"]);var b=function(e){function n(e){var t;return o()(this,n),(t=c()(this,l()(n).call(this,e))).state={},t}return f()(n,e),u()(n,[{key:"render",value:function(){return m.a.createElement(g.Root,null,m.a.createElement("nav",null,m.a.createElement(h.Link,{to:"/"},"Home"),m.a.createElement(h.Link,{to:"/about"},"About"),m.a.createElement(h.Link,{to:"/blog"},"Blog"),m.a.createElement(h.Link,{to:"/dynamic"},"Dynamic")),m.a.createElement("div",{className:"content"},m.a.createElement(m.a.Suspense,{fallback:m.a.createElement("em",null,"Loading...")},m.a.createElement(h.Router,null,m.a.createElement(v,{path:"dynamic"}),m.a.createElement(g.Routes,{path:"*"})))))}}]),n}(d.Component);n.a=b},31:function(e,n,t){"use strict";t.r(n);var r=t(50),o=[{location:"../node_modules/react-static-plugin-sass",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-reach-router",plugins:[],hooks:t.n(r)()({})},{location:"../node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"..",plugins:[],hooks:{}}];n.default=o},48:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"notFoundTemplate",function(){return h});var r=t(6),o=t.n(r),a=t(7),u=t.n(a),i=t(0),c=t.n(i),s=t(4),l=t.n(s);Object(s.setHasBabelPlugin)();var p={loading:function(){return null},error:function(e){return console.error(e.error),c.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},f=l()(u()({id:"../src/pages/404.js",load:function(){return Promise.all([t.e(1).then(t.bind(null,53))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/404.js")},resolve:function(){return 53},chunkName:function(){return"src/pages/404"}}),p);f.template="../src/pages/404.js";var d=l()(u()({id:"../src/pages/about.js",load:function(){return Promise.all([t.e(2).then(t.bind(null,54))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/about.js")},resolve:function(){return 54},chunkName:function(){return"src/pages/about"}}),p);d.template="../src/pages/about.js";var m=l()(u()({id:"../src/pages/blog.js",load:function(){return Promise.all([t.e(3).then(t.bind(null,55))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/blog.js")},resolve:function(){return 55},chunkName:function(){return"src/pages/blog"}}),p);m.template="../src/pages/blog.js";var g=l()(u()({id:"../src/pages/index.js",load:function(){return Promise.all([t.e(4).then(t.bind(null,56))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/index.js")},resolve:function(){return 56},chunkName:function(){return"src/pages/index"}}),p);g.template="../src/pages/index.js",n.default={"../src/pages/404.js":f,"../src/pages/about.js":d,"../src/pages/blog.js":m,"../src/pages/index.js":g};var h="../src/pages/404.js"}.call(this,"/")},57:function(e,n,t){t(58),t(113),e.exports=t(119)}});