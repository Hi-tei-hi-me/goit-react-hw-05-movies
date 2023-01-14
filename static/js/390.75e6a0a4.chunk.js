"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[390],{6989:function(e,r,n){n.d(r,{j:function(){return u}});var t,a=n(168),c=n(7402).Z.p(t||(t=(0,a.Z)(["\n  margin: 40px auto;\n  width: max-content;\n  max-width: 95vw;\n  padding: 20px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-align: center;\n  line-height: 1.71;\n  background-color: lightgray;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),o=n(7359),i=n(184),u=function(e){var r=e.textError;return(0,i.jsxs)(c,{children:[(0,i.jsx)("img",{src:o,alt:"error",width:100}),"Oops! Something's wrong:",(0,i.jsx)("br",{}),"\u274c ",r,(0,i.jsx)("br",{}),"Please, refresh this page or try again later"]})}},6134:function(e,r,n){n.d(r,{C:function(){return i}});var t=n(9014),a=n(8014),c=n(184),o={incorrectQuery:{icon:(0,c.jsx)(a.EQs,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.7)"}},repeatedQuery:{icon:(0,c.jsx)(a.F9J,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.7)"}},filmsFound:{icon:(0,c.jsx)(a.Jac,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.7)"}},nothingFound:{icon:(0,c.jsx)(a.gq3,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.7)"}},noCastInfo:{icon:(0,c.jsx)(a.rdR,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.7)"}},reviewsFound:{icon:(0,c.jsx)(a.EOH,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.7)"}},noReviews:{icon:(0,c.jsx)(a.vT$,{size:40,color:"#9c0a21"}),style:{color:"black",background:"rgba(218, 212, 212, 0.7)"}}},i=function(e,r){(0,t.ZP)(e,o[r])}},3390:function(e,r,n){n.r(r),n.d(r,{default:function(){return k}});var t,a,c=n(5861),o=n(9439),i=n(4687),u=n.n(i),s=n(2791),l=n(7689),p=n(9086),f=n(168),d=n(7402),v=d.Z.ul(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),h=d.Z.li(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),x=n(5818),g=n(6134),b=n(6989),m=n(184);function k(){var e=(0,l.UO)().movieId,r=(0,s.useState)([]),n=(0,o.Z)(r,2),t=n[0],a=n[1],i=(0,s.useState)(!1),f=(0,o.Z)(i,2),d=f[0],k=f[1],w=(0,s.useState)(""),y=(0,o.Z)(w,2),j=y[0],Z=y[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,c.Z)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,k(!0),r.next=4,p.tx(e);case 4:if((n=r.sent).length){r.next=7;break}return r.abrupt("return",(0,g.C)("No one has left a review yet. If you want, yours can be first","noReviews"));case 7:a(n),(0,g.C)("Here's what people say about this film","reviewsFound"),Z(""),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),Z(r.t0.message);case 15:return r.prev=15,k(!1),r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[0,12,15,18]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,m.jsxs)(m.Fragment,{children:[d&&(0,m.jsx)(x.a,{}),t.length>0&&(0,m.jsx)(v,{children:t.map((function(e){var r=e.author,n=e.content;return(0,m.jsxs)(h,{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Author: "}),r]}),(0,m.jsx)("p",{children:n})]},r)}))}),j&&(0,m.jsx)(b.j,{})]})}},9086:function(e,r,n){n.d(r,{JS:function(){return u},TP:function(){return l},sK:function(){return s},tx:function(){return f},zv:function(){return p}});var t=n(5861),a=n(4687),c=n.n(a),o=n(3263),i="e5b8bd1b82d4f5b68280cf1e2b92e5f6";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/trending/movie/week?api_key=".concat(i));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n.map((function(e){return{title:e.title,id:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(r,"&page=1"));case 2:return n=e.sent,t=n.data.results,e.abrupt("return",t.map((function(e){return{title:e.title,id:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a,u,s,l,p,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(r,"?api_key=").concat(i));case 2:return n=e.sent,t=n.data,a=t.poster_path,u=t.title,s=t.release_date,l=t.vote_average,p=t.overview,f=t.genres,e.abrupt("return",{poster_path:a,title:u,release_date:s,vote_average:l,overview:p,genres:f});case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(r,"/credits?api_key=").concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.cast.map((function(e){return{profile_path:e.profile_path,name:e.name,character:e.character}})));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(i,"&page=1"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results.map((function(e){return{author:e.author,content:e.content}})));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},7359:function(e,r,n){e.exports=n.p+"static/media/errorIMG.15ce6163407591bae9df.png"}}]);
//# sourceMappingURL=390.75e6a0a4.chunk.js.map