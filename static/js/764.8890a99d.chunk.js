(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[764],{5837:function(t,n,e){"use strict";e.d(n,{M:function(){return o}});var r=e(7689),a=e(9746),c=e(184),u=function(t){var n=t.id,e=t.title,u=(0,r.TH)();return(0,c.jsx)(a.Item,{children:(0,c.jsx)(a.Link,{to:"/movies/".concat(n),state:{from:u},children:e})})},i=e(937),o=function(t){var n=t.films;return(0,c.jsx)(i.ListOfFilms,{children:n.map((function(t){var n=t.id,e=t.title;return(0,c.jsx)(u,{id:n,title:e},n)}))})}},937:function(){},9746:function(){},3164:function(){},382:function(t,n,e){"use strict";e.d(n,{JS:function(){return o},TP:function(){return f},sK:function(){return s},tx:function(){return d},zv:function(){return p}});var r=e(5861),a=e(4687),c=e.n(a),u=e(3263),i="e5b8bd1b82d4f5b68280cf1e2b92e5f6";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/week?api_key=".concat(i));case 2:return n=t.sent,e=n.data.results,t.abrupt("return",e.map((function(t){return{title:t.title,id:t.id}})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&page=1"));case 2:return e=t.sent,r=e.data.results,t.abrupt("return",r.map((function(t){return{title:t.title,id:t.id}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a,o,s,f,p,d;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,r=e.data,a=r.poster_path,o=r.title,s=r.release_date,f=r.vote_average,p=r.overview,d=r.genres,t.abrupt("return",{poster_path:a,title:o,release_date:s,vote_average:f,overview:p,genres:d});case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast.map((function(t){return{profile_path:t.profile_path,name:t.name,character:t.character}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&page=1"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results.map((function(t){return{author:t.author,content:t.content}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},2764:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return g}});var r=e(5861),a=e(9439),c=e(4687),u=e.n(c),i=e(2791),o=e(1087),s=e(382),f=e(3164),p=e(5837),d=e(5067),l=e(3020),v=e(5463),h=e(184);function g(){var t,n=(0,o.lr)(),e=(0,a.Z)(n,2),c=e[0],g=e[1],m=(0,i.useState)([]),x=(0,a.Z)(m,2),b=x[0],w=x[1],k=(0,i.useState)(!1),y=(0,a.Z)(k,2),_=y[0],Z=y[1],j=(0,i.useState)(""),S=(0,a.Z)(j,2),C=S[0],L=S[1],Q=null!==(t=c.get("query"))&&void 0!==t?t:"";(0,i.useEffect)((function(){if(Q){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Z(!0),t.next=4,s.sK(Q);case 4:if(n=t.sent,w(n),n.data.length){t.next=8;break}return t.abrupt("return",(0,l.C)("Sorry, we couldn't find any ".concat(Q),"nothingFound"));case 8:L(""),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),L(t.t0.message);case 14:return t.prev=14,Z(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})));return function(){return t.apply(this,arguments)}}();t()}}),[c,Q]);return(0,h.jsxs)("main",{children:[(0,h.jsx)(f.Searchbar,{onSubmit:function(t){var n=t.searchQuery.trim().toLowerCase();g(""!==n?{normalizedQuery:n}:{}),w([])}}),_&&(0,h.jsx)(d.a,{}),b.length>0&&(0,h.jsx)(p.M,{films:b}),C&&(0,h.jsx)(v.j,{})]})}},5463:function(t,n,e){"use strict";e.d(n,{j:function(){return i}});var r,a=e(168),c=e(7402).Z.p(r||(r=(0,a.Z)(["\n  margin: 40px auto;\n  width: max-content;\n  max-width: 95vw;\n  padding: 20px 40px;\n  text-align: center;\n  line-height: 1.71;\n  background-color: #aa3939;\n  color: #ffaaaa;\n  border: 1.5px solid #801515;\n  border-radius: 10px;\n"]))),u=e(184),i=function(t){var n=t.textError;return(0,u.jsxs)(c,{children:["Oops! Something's wrong:",(0,u.jsx)("br",{}),"\u274c ",n,(0,u.jsx)("br",{}),"Please, refresh this page or try again later"]})}},3020:function(t,n,e){"use strict";e.d(n,{C:function(){return c}});var r=e(9014),a={trending:{icon:"\u272f",style:{background:"#AA5585",color:"#fff"}},nothingFound:{icon:"\u2639",style:{background:"#4a81e8",color:"#fff"}},found:{icon:"\u2713",style:{background:"#537D43",color:"#fff"}},repeatedQuery:{icon:"\ud83d\udc40",style:{background:"#de6a0a",color:"#fff"}},incorrectQuery:{icon:"\u26a0",style:{background:"#f3dc5d"}}},c=function(t,n){(0,r.ZP)(t,a[n])}}}]);
//# sourceMappingURL=764.8890a99d.chunk.js.map