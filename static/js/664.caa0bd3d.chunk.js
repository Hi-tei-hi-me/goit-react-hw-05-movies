"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[664],{6700:function(n,t,e){e.d(t,{M:function(){return g}});var r,a,i,o=e(9126),u=e(168),c=e(7402),s=c.Z.ol(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n"]))),p=e(7689),f=e(1087),d=c.Z.li(a||(a=(0,u.Z)(["\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.4);\n  &:hover a,\n  &:focus a {\n    text-shadow: 2px 2px 4px #950606;\n  }\n"]))),l=(0,c.Z)(f.OL)(i||(i=(0,u.Z)(["\n  text-transform: uppercase;\n"]))),x=e(184),h=function(n){var t=n.id,e=n.title,r=(0,p.TH)();return(0,x.jsx)(d,{children:(0,x.jsx)(l,{to:"/movies/".concat(t),state:{from:r},children:e})})},g=function(n){var t=n.films;return(0,x.jsxs)(s,{children:[t.map((function(n){var t=n.id,e=n.title;return(0,x.jsx)(h,{id:t,title:e},t)})),(0,x.jsx)(o.XA0,{size:25})]})}},382:function(n,t,e){e.d(t,{JS:function(){return c},TP:function(){return p},sK:function(){return s},tx:function(){return d},zv:function(){return f}});var r=e(5861),a=e(4687),i=e.n(a),o=e(3263),u="e5b8bd1b82d4f5b68280cf1e2b92e5f6";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/week?api_key=".concat(u));case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e.map((function(n){return{title:n.title,id:n.id}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&page=1"));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r.map((function(n){return{title:n.title,id:n.id}})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a,c,s,p,f,d;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,r=e.data,a=r.poster_path,c=r.title,s=r.release_date,p=r.vote_average,f=r.overview,d=r.genres,n.abrupt("return",{poster_path:a,title:c,release_date:s,vote_average:p,overview:f,genres:d});case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast.map((function(n){return{profile_path:n.profile_path,name:n.name,character:n.character}})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results.map((function(n){return{author:n.author,content:n.content}})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},664:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,i,o,u=e(5861),c=e(9439),s=e(4687),p=e.n(s),f=e(2791),d=e(1087),l=e(382),x=e(168),h=e(7402),g=h.Z.form(r||(r=(0,x.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),v=h.Z.input(a||(a=(0,x.Z)(["\n  padding: 10px 15px;\n  margin-right: 10px;\n  border: 2px solid lightgray;\n  border-radius: 8px;\n  &::placeholder {\n  }\n"]))),m=h.Z.button(i||(i=(0,x.Z)(["\n  cursor: pointer;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  background-color: lightgray;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  border: 2px solid rgb(149, 20, 25, 0.3);\n  border-radius: 8px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: #b3060d;\n  }\n"]))),b=h.Z.span(o||(o=(0,x.Z)([""]))),Z=e(3020),w=e(184),y=function(n){var t=n.onSubmit,e=(0,f.useState)(""),r=(0,c.Z)(e,2),a=r[0],i=r[1];return(0,w.jsxs)(g,{onSubmit:function(n){if(n.preventDefault(),""===a.trim().toLowerCase())return(0,Z.C)("You should enter keyword if you want to find something","incorrectQuery");t(a),i("")},children:[(0,w.jsx)(v,{type:"text",autoFocus:!0,autocomplete:"off",placeholder:"Looking for...",value:a,onChange:function(n){var t=n.target.value;i(t)}}),(0,w.jsx)(m,{type:"submit",children:(0,w.jsx)(b,{children:"Search"})})]})},k=e(6700),j=e(9399),_=e(5463);function S(){var n,t=(0,d.lr)(),e=(0,c.Z)(t,2),r=e[0],a=e[1],i=(0,f.useState)([]),o=(0,c.Z)(i,2),s=o[0],x=o[1],h=(0,f.useState)(!1),g=(0,c.Z)(h,2),v=g[0],m=g[1],b=(0,f.useState)(""),S=(0,c.Z)(b,2),C=S[0],z=S[1],L=null!==(n=r.get("query"))&&void 0!==n?n:"";(0,f.useEffect)((function(){if(L){var n=function(){var n=(0,u.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,l.sK(L);case 4:if(t=n.sent,x(t),t.data.length){n.next=8;break}return n.abrupt("return",(0,Z.C)("Sorry, we couldn't find any ".concat(L),"nothingFound"));case 8:z(""),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),z(n.t0.message);case 14:return n.prev=14,m(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}}),[r,L]);return(0,w.jsxs)("main",{children:[(0,w.jsx)(y,{onSubmit:function(n){a(""!==n?{query:n}:{}),x([])}}),v&&(0,w.jsx)(j.a,{}),s.length>0&&(0,w.jsx)(k.M,{films:s}),C&&(0,w.jsx)(_.j,{})]})}},5463:function(n,t,e){e.d(t,{j:function(){return c}});var r,a=e(168),i=e(7402).Z.p(r||(r=(0,a.Z)(["\n  margin: 40px auto;\n  width: max-content;\n  max-width: 95vw;\n  padding: 20px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-align: center;\n  line-height: 1.71;\n  background-color: lightgray;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),o=e(7443),u=e(184),c=function(n){var t=n.textError;return(0,u.jsxs)(i,{children:[(0,u.jsx)("img",{src:o,alt:"error",width:100}),"Oops! Something's wrong:",(0,u.jsx)("br",{}),"\u274c ",t,(0,u.jsx)("br",{}),"Please, refresh this page or try again later"]})}},3020:function(n,t,e){e.d(t,{C:function(){return o}});var r=e(9014),a=e(8014),i={incorrectQuery:{icon:(0,e(184).jsx)(a.EQs,{size:40}),style:{background:"lightgray"}}},o=function(n,t){(0,r.ZP)(n,i[t])}},7443:function(n,t,e){n.exports=e.p+"static/media/defaultIMG.15ce6163407591bae9df.png"}}]);
//# sourceMappingURL=664.caa0bd3d.chunk.js.map