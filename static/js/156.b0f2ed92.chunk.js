"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[156],{941:function(t,e,n){n.d(e,{Z:function(){return l}});var r="MoviesItems_list__cAG1C",o="MoviesItems_list__item__a2zyg",i="MoviesItems_overlay__mEXg+",c="MoviesItems_list__item_title__9Andv",a="MoviesItems_img__fNscv",u=n(523),s=n(184);function l(t){var e=t.movies;return(0,s.jsx)(s.Fragment,{children:e&&(0,s.jsx)("ul",{className:r,children:e.map((function(t){return(0,s.jsx)("li",{className:o,children:(0,s.jsxs)(u.rU,{to:"/movies/".concat(t.id),children:[(0,s.jsx)("img",{className:a,src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):"https://www.chanchao.com.tw/images/default.jpg"}),(0,s.jsx)("div",{className:i,children:(0,s.jsx)("p",{className:c,children:t.title||t.name})})]})},t.id)}))})})}},156:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(142);function o(t,e,n){return(e=(0,r.Z)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=n(152),u=n(791),s=n(91),l=n(880),f=n(691),p=n(941),m="MoviesPage_form__5tCdO",h="MoviesPage_input__3vbXa",d="MoviesPage_button__2DdR7",v=n(184);function y(t){var e=t.onSubmit,n=(0,u.useState)(""),r=(0,a.Z)(n,2),o=r[0],i=r[1];return(0,v.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==o.trim()&&(e(o),i(""))},className:m,children:[(0,v.jsx)("input",{className:h,value:o,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(t){return i(t.currentTarget.value.toLowerCase())}}),(0,v.jsx)("button",{type:"submit",className:d})]})}function b(){var t=(0,l.k6)(),e=(0,l.TH)(),n=(0,u.useState)(null),r=(0,a.Z)(n,2),o=r[0],i=r[1],m=(0,u.useState)("idle"),h=(0,a.Z)(m,2),d=h[0],b=h[1],g=new URLSearchParams(e.search).get("query");return(0,u.useEffect)((function(){g&&(b("pending"),(0,s.Ny)(g).then((function(t){0!==t.results.length?(b("resolved"),i(t.results)):b("error")})))}),[g]),console.log(o),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y,{onSubmit:function(n){t.push(c(c({},e),{},{search:"query=".concat(n)}))}}),"resolved"===d&&(0,v.jsx)(p.Z,{movies:o}),"pending"===d&&(0,v.jsx)(f.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0}),"error"===d&&(0,v.jsx)("p",{children:"Sorry, nothing found :("})]})}},91:function(t,e,n){n.d(e,{Mc:function(){return c},Ny:function(){return i},Tg:function(){return o},r7:function(){return u},uV:function(){return a}});var r="b8e8b8dadac797da0595c7d7e1af61f4";function o(){return fetch("\n  https://api.themoviedb.org/3/trending/all/day?api_key=".concat(r)).then((function(t){return t.json()}))}function i(t){return fetch("\n  https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(t)).then((function(t){return t.json()}))}function c(t){return fetch("\n    https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r)).then((function(t){return t.json()}))}function a(t){return fetch("\n    https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(r)).then((function(t){return t.json()}))}function u(t){return fetch("\n  https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(r)).then((function(t){return t.json()}))}},152:function(t,e,n){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,c,a=[],u=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(l){s=!0,o=l}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=156.b0f2ed92.chunk.js.map