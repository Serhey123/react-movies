"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[900],{900:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var n=s(152),r="Cast_list__tqZsM",a="Cast_list__item__LxgvX",i="Cast_img__h9hJj",c=s(791),l=s(91),o=s(691),h=s(184);function d(e){var t=e.id,s=(0,c.useState)(null),d=(0,n.Z)(s,2),u=d[0],p=d[1],m=(0,c.useState)("idle"),f=(0,n.Z)(m,2),_=f[0],g=f[1];return(0,c.useEffect)((function(){g("pending"),(0,l.uV)(t).then((function(e){0!==e.cast.length?(p(e),g("resolved")):g("error")}))}),[]),console.log(u),"resolved"===_?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{className:r,children:u.cast.map((function(e){return(0,h.jsxs)("li",{className:a,children:[(0,h.jsx)("img",{className:i,src:e.profile_path?"https://image.tmdb.org/t/p/w300".concat(e.profile_path):"https://www.chanchao.com.tw/images/default.jpg"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:e.name}),e.character&&(0,h.jsxs)("p",{children:["(",e.character,")"]})]})]},e.id)}))})}):"pending"===_?(0,h.jsx)(o.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0}):"error"===_?(0,h.jsx)("p",{children:"Not found:("}):void 0}}}]);
//# sourceMappingURL=900.9ed53e3c.chunk.js.map