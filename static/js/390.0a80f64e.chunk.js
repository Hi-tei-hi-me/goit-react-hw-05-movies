"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[390],{6989:function(e,n,r){r.d(n,{j:function(){return u}});var t,a=r(168),c=r(7402).Z.p(t||(t=(0,a.Z)(["\n  margin: 40px auto;\n  width: max-content;\n  max-width: 95vw;\n  padding: 20px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-align: center;\n  line-height: 1.71;\n  background-color: lightgray;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),o=r(7359),i=r(184),u=function(e){var n=e.textError;return(0,i.jsxs)(c,{children:[(0,i.jsx)("img",{src:o,alt:"error",width:100}),"Oops! Something's wrong:",(0,i.jsx)("br",{}),"\u274c ",n,(0,i.jsx)("br",{}),"Please, refresh this page or try again later"]})}},6134:function(e,n,r){r.d(n,{C:function(){return i}});var t=r(9014),a=r(8014),c=r(184),o={incorrectQuery:{icon:(0,c.jsx)(a.EQs,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.8)"}},repeatedQuery:{icon:(0,c.jsx)(a.F9J,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.8)"}},filmsFound:{icon:(0,c.jsx)(a.Jac,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.8)"}},nothingFound:{icon:(0,c.jsx)(a.gq3,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.8)"}},noCastInfo:{icon:(0,c.jsx)(a.rdR,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.8)"}},reviewsFound:{icon:(0,c.jsx)(a.EOH,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.8)"}},noReviews:{icon:(0,c.jsx)(a.vT$,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.8)"}}},i=function(e,n){(0,t.ZP)(e,o[n])}},3390:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var t,a,c=r(5861),o=r(9439),i=r(4687),u=r.n(i),s=r(2791),l=r(7689),p=r(9086),f=r(168),d=r(7402),v=d.Z.ul(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),h=d.Z.li(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),x=r(5818),g=r(6134),b=r(6989),m=r(184);function k(){var e=(0,l.UO)().movieId,n=(0,s.useState)([]),r=(0,o.Z)(n,2),t=r[0],a=r[1],i=(0,s.useState)(!1),f=(0,o.Z)(i,2),d=f[0],k=f[1],w=(0,s.useState)(""),y=(0,o.Z)(w,2),j=y[0],Z=y[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,c.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),n.next=4,p.tx(e);case 4:if((r=n.sent).length){n.next=7;break}return n.abrupt("return",(0,g.C)("No one has left a review yet. If you want, yours can be first","noReviews"));case 7:a(r),(0,g.C)("Here's what people say about this film","reviewsFound"),Z(""),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),Z(n.t0.message);case 15:return n.prev=15,k(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,m.jsxs)(m.Fragment,{children:[d&&(0,m.jsx)(x.a,{}),t.length>0&&(0,m.jsx)(v,{children:t.map((function(e){var n=e.author,r=e.content;return(0,m.jsxs)(h,{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Author: "}),n]}),(0,m.jsx)("p",{children:r})]},n)}))}),j&&(0,m.jsx)(b.j,{})]})}},9086:function(e,n,r){r.d(n,{JS:function(){return u},TP:function(){return l},sK:function(){return s},tx:function(){return f},zv:function(){return p}});var t=r(5861),a=r(4687),c=r.n(a),o=r(3263),i="e5b8bd1b82d4f5b68280cf1e2b92e5f6";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/trending/movie/week?api_key=".concat(i));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r.map((function(e){return{title:e.title,id:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&page=1"));case 2:return r=e.sent,t=r.data.results,e.abrupt("return",t.map((function(e){return{title:e.title,id:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t,a,u,s,l,p,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return r=e.sent,t=r.data,a=t.poster_path,u=t.title,s=t.release_date,l=t.vote_average,p=t.overview,f=t.genres,e.abrupt("return",{poster_path:a,title:u,release_date:s,vote_average:l,overview:p,genres:f});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.cast.map((function(e){return{profile_path:e.profile_path,name:e.name,character:e.character}})));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results.map((function(e){return{author:e.author,content:e.content}})));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=390.0a80f64e.chunk.js.map