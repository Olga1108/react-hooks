(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[7],{213:function(e,t,c){},223:function(e,t,c){"use strict";c.r(t);var n=c(59),r=c(100),s=c(41),i=c(33),a=c(1),o=c(8),j=c(42),b=c(13),u=c(36),l=(c(213),c(0)),m=function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(b.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(b.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(u.a,{});default:throw new Error("Unexpected process state!")}},d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),b=Object(i.a)(r,2),u=b[0],d=b[1],O=Object(a.useState)(0),f=Object(i.a)(O,2),h=f[0],x=f[1],p=Object(a.useState)(!1),_=Object(i.a)(p,2),v=_[0],g=_[1],y=Object(j.a)(),w=y.getAllComics,N=y.process,S=y.setProcess;Object(a.useEffect)((function(){k(h,!0)}),[]);var k=function(e,t){d(!t),w(e).then(A).then((function(){return S("confirmed")}))},A=function(e){var t=!1;e.length<8&&(t=!0),n([].concat(Object(s.a)(c),Object(s.a)(e))),d(!1),x(h+8),g(t)};return Object(l.jsxs)("div",{className:"comics__list",children:[m(N,(function(){return function(e){var t=e.map((function(e,t){return Object(l.jsx)("li",{className:"comics__item",children:Object(l.jsxs)(o.b,{to:"/comics/".concat(e.id),children:[Object(l.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(l.jsx)("div",{className:"comics__item-name",children:e.title}),Object(l.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(l.jsx)("ul",{className:"comics__grid",children:t})}(c)}),u),Object(l.jsx)("button",{disabled:u,style:{display:v?"none":"block"},className:"button button__main button__long",onClick:function(){return k(h)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})};t.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Page with all comics"}),Object(l.jsx)("title",{children:"Comics Page"})]}),Object(l.jsx)(r.a,{}),Object(l.jsx)(d,{})]})}},41:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(45);var r=c(43);function s(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=7.35f1a925.chunk.js.map