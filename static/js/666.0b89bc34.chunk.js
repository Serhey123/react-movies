"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[666],{666:function(e,r,t){t.r(r),t.d(r,{default:function(){return R}});var n=t(885),o={list:"CastList_list__cZI+3",list__item:"CastList_list__item__+G0Ss",img:"CastList_img__MfEHx",card:"CastList_card__t-yWi"},i=t(2791),a=t(91),s=t(3112),c=t(3367),d=t(9658),u=t(7317),l=t(7621),m=t(9504),f=t(3366),p=t(7462),v=t(8182),Z=t(4419),C=t(1046),g=t(724),h=t(5878),M=t(1217);function _(e){return(0,M.Z)("MuiCardMedia",e)}(0,h.Z)("MuiCardMedia",["root","media","img"]);var x=t(184),j=["children","className","component","image","src","style"],N=(0,g.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState,n=t.isMediaComponent,o=t.isImageComponent;return[r.root,n&&r.media,o&&r.img]}})((function(e){var r=e.ownerState;return(0,p.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},r.isMediaComponent&&{width:"100%"},r.isImageComponent&&{objectFit:"cover"})})),w=["video","audio","picture","iframe","img"],y=["picture","img"],S=i.forwardRef((function(e,r){var t=(0,C.Z)({props:e,name:"MuiCardMedia"}),n=t.children,o=t.className,i=t.component,a=void 0===i?"div":i,s=t.image,c=t.src,d=t.style,u=(0,f.Z)(t,j),l=-1!==w.indexOf(a),m=!l&&s?(0,p.Z)({backgroundImage:'url("'.concat(s,'")')},d):d,g=(0,p.Z)({},t,{component:a,isMediaComponent:l,isImageComponent:-1!==y.indexOf(a)}),h=function(e){var r=e.classes,t={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,Z.Z)(t,_,r)}(g);return(0,x.jsx)(N,(0,p.Z)({className:(0,v.Z)(h.root,o),as:a,role:!l&&s?"img":void 0,ref:r,style:m,ownerState:g,src:l?s||c:void 0},u,{children:n}))})),k=t(1123);function R(e){var r=e.id,t=(0,i.useState)(null),f=(0,n.Z)(t,2),p=f[0],v=f[1],Z=(0,i.useState)("idle"),C=(0,n.Z)(Z,2),g=C[0],h=C[1];return(0,i.useEffect)((function(){h("pending"),(0,a.uV)(r).then((function(e){0!==e.cast.length?(v(e),h("resolved")):h("error")}))}),[]),"resolved"===g?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("ul",{className:o.list,children:p.cast.map((function(e){return(0,x.jsx)("li",{className:o.list__item,children:(0,x.jsxs)(l.Z,{className:o.card,children:[(0,x.jsx)(S,{className:o.img,image:(0,s.b)(e.profile_path),title:"".concat(e.name)}),(0,x.jsxs)(m.Z,{className:o.content,children:[(0,x.jsx)(k.Z,{gutterBottom:!0,variant:"p",component:"p",children:e.name}),e.character&&(0,x.jsxs)(k.Z,{gutterBottom:!0,variant:"p",component:"p",children:["(",e.character,")"]})]})]})},e.character+e.id)}))})}):"pending"===g?(0,x.jsx)(c.iT,{height:50,width:50,color:"#000",wrapperStyle:{display:"flex",justifyContent:"center"},secondaryColor:"#f0",strokeWidth:4,strokeWidthSecondary:4}):"error"===g?(0,x.jsxs)(d.Z,{severity:"error",children:[(0,x.jsx)(u.Z,{children:"Sorry"}),"Nothing found :("]}):void 0}},9504:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(7462),o=t(3366),i=t(2791),a=t(8182),s=t(4419),c=t(724),d=t(1046),u=t(5878),l=t(1217);function m(e){return(0,l.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var f=t(184),p=["className","component"],v=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),Z=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCardContent"}),i=t.className,c=t.component,u=void 0===c?"div":c,l=(0,o.Z)(t,p),Z=(0,n.Z)({},t,{component:u}),C=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},m,r)}(Z);return(0,f.jsx)(v,(0,n.Z)({as:u,className:(0,a.Z)(C.root,i),ownerState:Z,ref:r},l))}))},7621:function(e,r,t){t.d(r,{Z:function(){return C}});var n=t(7462),o=t(3366),i=t(2791),a=t(8182),s=t(4419),c=t(724),d=t(1046),u=t(5527),l=t(5878),m=t(1217);function f(e){return(0,m.Z)("MuiCard",e)}(0,l.Z)("MuiCard",["root"]);var p=t(184),v=["className","raised"],Z=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),C=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCard"}),i=t.className,c=t.raised,u=void 0!==c&&c,l=(0,o.Z)(t,v),m=(0,n.Z)({},t,{raised:u}),C=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},f,r)}(m);return(0,p.jsx)(Z,(0,n.Z)({className:(0,a.Z)(C.root,i),elevation:u?8:void 0,ref:r,ownerState:m},l))}))}}]);
//# sourceMappingURL=666.0b89bc34.chunk.js.map