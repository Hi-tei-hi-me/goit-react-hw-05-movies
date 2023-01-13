"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[314],{382:function(n,e,t){t.d(e,{JS:function(){return s},TP:function(){return p},sK:function(){return u},tx:function(){return d},zv:function(){return l}});var r=t(5861),a=t(4687),c=t.n(a),o=t(3263),i="e5b8bd1b82d4f5b68280cf1e2b92e5f6";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/week?api_key=".concat(i));case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t.map((function(n){return{title:n.title,id:n.id}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e,"&page=1"));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r.map((function(n){return{title:n.title,id:n.id}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,s,u,p,l,d;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return t=n.sent,r=t.data,a=r.poster_path,s=r.title,u=r.release_date,p=r.vote_average,l=r.overview,d=r.genres,n.abrupt("return",{poster_path:a,title:s,release_date:u,vote_average:p,overview:l,genres:d});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast.map((function(n){return{profile_path:n.profile_path,name:n.name,character:n.character}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results.map((function(n){return{author:n.author,content:n.content}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6314:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,c=t(5861),o=t(9439),i=t(4687),s=t.n(i),u=t(2791),p=t(7689),l=t(382),d=t(168),f=t(7402),v=f.Z.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n  gap: 10px;\n"]))),x=f.Z.li(a||(a=(0,d.Z)(["\n  display: flex;\n  gap: 8px;\n  background-color: #facccc5e;\n  border-radius: 5px;\n  overflow: hidden;\n  & img {\n    flex-shrink: 0;\n    width: 100px;\n    height: 150px;\n    object-fit: scale-down;\n  }\n  & div {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    width: 180px;\n    @media (max-width: 622px) {\n      width: 95vw;\n    }\n  }\n"]))),h=t(9399),g=t(3020),b=t(5463),m=t(7443),w=t(184);function k(){var n=(0,p.UO)().movieId,e=(0,u.useState)([]),t=(0,o.Z)(e,2),r=t[0],a=t[1],i=(0,u.useState)(!1),d=(0,o.Z)(i,2),f=d[0],k=d[1],y=(0,u.useState)(""),j=(0,o.Z)(y,2),Z=j[0],_=j[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,l.zv(n);case 4:if((t=e.sent).length){e.next=7;break}return e.abrupt("return",(0,g.C)("Sorry, we couldn't find anything about actors cast","noCastInfo"));case 7:a(t),_(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),_(e.t0.message);case 14:return e.prev=14,k(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,w.jsxs)(w.Fragment,{children:[f&&(0,w.jsx)(h.a,{}),r.length>0&&(0,w.jsx)(v,{children:r.map((function(n){var e=n.profile_path,t=n.name,r=n.character;return(0,w.jsxs)(x,{children:[(0,w.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):m,alt:"Oops!"}),(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{children:t}),(0,w.jsxs)("p",{children:["Character:",(0,w.jsx)("br",{}),r||"No information"]})]})]},t)}))}),Z&&(0,w.jsx)(b.j,{})]})}},5463:function(n,e,t){t.d(e,{j:function(){return s}});var r,a=t(168),c=t(7402).Z.p(r||(r=(0,a.Z)(["\n  margin: 40px auto;\n  width: max-content;\n  max-width: 95vw;\n  padding: 20px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-align: center;\n  line-height: 1.71;\n  background-color: lightgray;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),o=t(7443),i=t(184),s=function(n){var e=n.textError;return(0,i.jsxs)(c,{children:[(0,i.jsx)("img",{src:o,alt:"error",width:100}),"Oops! Something's wrong:",(0,i.jsx)("br",{}),"\u274c ",e,(0,i.jsx)("br",{}),"Please, refresh this page or try again later"]})}},3020:function(n,e,t){t.d(e,{C:function(){return i}});var r=t(9014),a=t(8014),c=t(184),o={incorrectQuery:{icon:(0,c.jsx)(a.EQs,{size:40,color:"#9c0a21"}),style:{color:"black",background:"silver"}},repeatedQuery:{icon:(0,c.jsx)(a.F9J,{size:40,color:"#9c0a21"}),style:{color:"black",background:"silver"}},filmsFound:{icon:(0,c.jsx)(a.Jac,{size:40,color:"#9c0a21"}),style:{color:"black",background:"silver"}},nothingFound:{icon:(0,c.jsx)(a.gq3,{size:40,color:"#9c0a21"}),style:{color:"black",background:"silver"}},noCastInfo:{icon:(0,c.jsx)(a.rdR,{size:40,color:"#9c0a21"}),style:{color:"black",background:"silver"}},reviewsFound:{icon:(0,c.jsx)(a.EOH,{size:40,color:"#9c0a21"}),style:{color:"black",background:"silver"}},noReviews:{icon:(0,c.jsx)(a.vT$,{size:40,color:"#9c0a21"}),style:{color:"black",background:"silver"}}},i=function(n,e){(0,r.ZP)(n,o[e])}},7443:function(n,e,t){n.exports=t.p+"static/media/defaultIMG.15ce6163407591bae9df.png"}}]);
//# sourceMappingURL=314.5cf4f90f.chunk.js.map