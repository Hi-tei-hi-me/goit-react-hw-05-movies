"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[664],{6700:function(e,t,n){n.d(t,{M:function(){return h}});var r,a,u,o=n(168),c=n(7402),i=c.Z.ul(r||(r=(0,o.Z)([""]))),s=n(7689),f=n(1087),p=c.Z.li(a||(a=(0,o.Z)([""]))),d=(0,c.Z)(f.OL)(u||(u=(0,o.Z)(["\n  &:hover,\n  &:focus {\n  }\n"]))),l=n(184),v=function(e){var t=e.id,n=e.title,r=(0,s.TH)();return(0,l.jsx)(p,{children:(0,l.jsx)(d,{to:"/movies/".concat(t),state:{from:r},children:n})})},h=function(e){var t=e.films;return(0,l.jsx)(i,{children:t.map((function(e){var t=e.id,n=e.title;return(0,l.jsx)(v,{id:t,title:n},t)}))})}},382:function(e,t,n){n.d(t,{JS:function(){return i},TP:function(){return f},sK:function(){return s},tx:function(){return d},zv:function(){return p}});var r=n(5861),a=n(4687),u=n.n(a),o=n(3263),c="e5b8bd1b82d4f5b68280cf1e2b92e5f6";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/trending/movie/week?api_key=".concat(c));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n.map((function(e){return{title:e.title,id:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&page=1"));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r.map((function(e){return{title:e.title,id:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,i,s,f,p,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(t,"?api_key=").concat(c));case 2:return n=e.sent,r=n.data,a=r.poster_path,i=r.title,s=r.release_date,f=r.vote_average,p=r.overview,d=r.genres,e.abrupt("return",{poster_path:a,title:i,release_date:s,vote_average:f,overview:p,genres:d});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast.map((function(e){return{profile_path:e.profile_path,name:e.name,character:e.character}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(c,"&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results.map((function(e){return{author:e.author,content:e.content}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},664:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r,a,u,o,c,i=n(5861),s=n(9439),f=n(4687),p=n.n(f),d=n(2791),l=n(1087),v=n(382),h=n(168),x=n(7402),m=x.Z.header(r||(r=(0,h.Z)([""]))),g=x.Z.form(a||(a=(0,h.Z)([""]))),Z=x.Z.input(u||(u=(0,h.Z)(["\n  &::placeholder {\n  }\n"]))),b=x.Z.button(o||(o=(0,h.Z)(["\n  cursor: pointer;\n  &:hover,\n  &:focus {\n  }\n"]))),y=x.Z.span(c||(c=(0,h.Z)([""]))),w=n(3020),k=n(184),_=function(e){var t=e.onSubmit,n=(0,d.useState)(""),r=(0,s.Z)(n,2),a=r[0],u=r[1];return(0,k.jsx)(m,{children:(0,k.jsxs)(g,{onSubmit:function(e){if(e.preventDefault(),""===a.trim().toLowerCase())return(0,w.C)("You should enter keyword if you want to find something","incorrectQuery");t({textQuery:a}),u("")},children:[(0,k.jsx)(Z,{type:"text",autoFocus:!0,autocomplete:"off",placeholder:"Search images of...",value:a,onChange:function(e){var t=e.target.value;u(t)}}),(0,k.jsx)(b,{type:"submit",children:(0,k.jsx)(y,{children:"Search"})})]})})},j=n(6700),S=n(9399),C=n(5463);function Q(){var e,t=(0,l.lr)(),n=(0,s.Z)(t,2),r=n[0],a=n[1],u=(0,d.useState)([]),o=(0,s.Z)(u,2),c=o[0],f=o[1],h=(0,d.useState)(!1),x=(0,s.Z)(h,2),m=x[0],g=x[1],Z=(0,d.useState)(""),b=(0,s.Z)(Z,2),y=b[0],Q=b[1],L=null!==(e=r.get("query"))&&void 0!==e?e:"";(0,d.useEffect)((function(){if(L){var e=function(){var e=(0,i.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,v.sK(L);case 4:if(t=e.sent,f(t),t.data.length){e.next=8;break}return e.abrupt("return",(0,w.C)("Sorry, we couldn't find any ".concat(L),"nothingFound"));case 8:Q(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Q(e.t0.message);case 14:return e.prev=14,g(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}}),[r,L]);return(0,k.jsxs)("main",{children:[(0,k.jsx)(_,{onSubmit:function(e){var t=e.searchQuery.trim().toLowerCase();a(""!==t?{normalizedQuery:t}:{}),f([])}}),m&&(0,k.jsx)(S.a,{}),c.length>0&&(0,k.jsx)(j.M,{films:c}),y&&(0,k.jsx)(C.j,{})]})}},5463:function(e,t,n){n.d(t,{j:function(){return c}});var r,a=n(168),u=n(7402).Z.p(r||(r=(0,a.Z)(["\n  margin: 40px auto;\n  width: max-content;\n  max-width: 95vw;\n  padding: 20px 40px;\n  text-align: center;\n  line-height: 1.71;\n  background-color: #aa3939;\n  color: #ffaaaa;\n  border: 1.5px solid #801515;\n  border-radius: 10px;\n"]))),o=n(184),c=function(e){var t=e.textError;return(0,o.jsxs)(u,{children:["Oops! Something's wrong:",(0,o.jsx)("br",{}),"\u274c ",t,(0,o.jsx)("br",{}),"Please, refresh this page or try again later"]})}},3020:function(e,t,n){n.d(t,{C:function(){return u}});var r=n(9014),a={trending:{icon:"\u272f",style:{background:"#AA5585",color:"#fff"}},nothingFound:{icon:"\u2639",style:{background:"#4a81e8",color:"#fff"}},found:{icon:"\u2713",style:{background:"#537D43",color:"#fff"}},repeatedQuery:{icon:"\ud83d\udc40",style:{background:"#de6a0a",color:"#fff"}},incorrectQuery:{icon:"\u26a0",style:{background:"#f3dc5d"}}},u=function(e,t){(0,r.ZP)(e,a[t])}}}]);
//# sourceMappingURL=664.934d0512.chunk.js.map