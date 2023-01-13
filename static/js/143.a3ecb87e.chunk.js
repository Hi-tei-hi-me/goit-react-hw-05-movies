"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[143],{382:function(n,e,t){t.d(e,{JS:function(){return o},TP:function(){return p},sK:function(){return u},tx:function(){return l},zv:function(){return d}});var r=t(5861),a=t(4687),i=t.n(a),s=t(3263),c="e5b8bd1b82d4f5b68280cf1e2b92e5f6";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/movie/week?api_key=".concat(c));case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t.map((function(n){return{title:n.title,id:n.id}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(e,"&page=1"));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r.map((function(n){return{title:n.title,id:n.id}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a,o,u,p,d,l;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,r=t.data,a=r.poster_path,o=r.title,u=r.release_date,p=r.vote_average,d=r.overview,l=r.genres,n.abrupt("return",{poster_path:a,title:o,release_date:u,vote_average:p,overview:d,genres:l});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast.map((function(n){return{profile_path:n.profile_path,name:n.name,character:n.character}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c,"&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results.map((function(n){return{author:n.author,content:n.content}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6143:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,s,c,o=t(5861),u=t(9439),p=t(4687),d=t.n(p),l=t(2791),x=t(7689),f=t(382),h=t(1087),v=t(168),m=t(7402),g=m.Z.div(r||(r=(0,v.Z)(["\n  display: flex;\n  gap: 10px;\n  padding-bottom: 15px;\n  border-bottom: 2px solid lightgray;\n  & div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n  @media (max-width: 767px) {\n    flex-direction: column;\n  }\n"]))),j=m.Z.div(a||(a=(0,v.Z)(["\n  width: 400px;\n  max-width: 30vw;\n  flex-shrink: 0;\n  @media (max-width: 767px) {\n    width: 100%;\n    max-width: 100%;\n  }\n"]))),b=m.Z.ul(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-bottom: 15px;\n"]))),w=m.Z.li(s||(s=(0,v.Z)(["\n  padding: 5px 0px;\n  color: #9c0309;\n  text-transform: uppercase;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n"]))),Z=t(7443),_=t(184),k=function(n){var e,t,r=n.movie,a=(0,x.TH)(),i=r.title,s=r.overview,c=r.poster_path,o=r.vote_average,u=r.genres,p=r.release_date.slice(0,4),d=c?"https://image.tmdb.org/t/p/w500/".concat(c):Z,l=10*o.toFixed(0),f=u.length>0?u.map((function(n){return n.name})).join(", "):"No information",v=null!==(e=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(g,{children:[(0,_.jsx)(j,{children:(0,_.jsx)("img",{src:d,alt:i})}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("h2",{children:[i," (",p,")"]}),(0,_.jsxs)("p",{children:["User Score: ",(0,_.jsxs)("b",{children:[l,"%"]})]}),(0,_.jsxs)("span",{children:[(0,_.jsx)("b",{children:"Overview:"}),(0,_.jsx)("p",{children:s})]}),(0,_.jsxs)("span",{children:[(0,_.jsx)("b",{children:"Genres:"}),(0,_.jsx)("p",{children:f})]})]})]}),(0,_.jsx)("h3",{children:"Additional information"}),(0,_.jsxs)(b,{children:[(0,_.jsx)(w,{children:(0,_.jsx)(h.rU,{to:"cast",state:{from:v},children:"Cast"})}),(0,_.jsx)(w,{children:(0,_.jsx)(h.rU,{to:"reviews",state:{from:v},children:"Reviews"})})]})]})},y=(0,m.Z)(h.rU)(c||(c=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 10px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n"]))),S=t(71),U=function(n){var e=n.to,t=n.children;return(0,_.jsxs)(y,{to:e,children:[(0,_.jsx)(S.Y1g,{size:25}),t]})},z=t(9399),G=t(5463);function T(){var n,e,t=(0,x.TH)(),r=(0,x.UO)().movieId,a=(0,l.useState)(null),i=(0,u.Z)(a,2),s=i[0],c=i[1],p=(0,l.useState)(!1),h=(0,u.Z)(p,2),v=h[0],m=h[1],g=(0,l.useState)(!1),j=(0,u.Z)(g,2),b=j[0],w=j[1];(0,l.useEffect)((function(){var n=function(){var n=(0,o.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,f.TP(r);case 4:e=n.sent,c(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),w(n.t0.message);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]);var Z=null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,_.jsxs)("main",{children:[(0,_.jsx)(U,{to:Z,children:"Go back"}),v&&(0,_.jsx)(z.a,{}),s&&(0,_.jsx)(k,{movie:s}),b&&(0,_.jsx)(G.j,{}),(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)(z.a,{}),children:(0,_.jsx)(x.j3,{})}),(0,_.jsx)(U,{to:Z,children:"Go back"})]})}},5463:function(n,e,t){t.d(e,{j:function(){return o}});var r,a=t(168),i=t(7402).Z.p(r||(r=(0,a.Z)(["\n  margin: 40px auto;\n  width: max-content;\n  max-width: 95vw;\n  padding: 20px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-align: center;\n  line-height: 1.71;\n  background-color: lightgray;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),s=t(7443),c=t(184),o=function(n){var e=n.textError;return(0,c.jsxs)(i,{children:[(0,c.jsx)("img",{src:s,alt:"error",width:100}),"Oops! Something's wrong:",(0,c.jsx)("br",{}),"\u274c ",e,(0,c.jsx)("br",{}),"Please, refresh this page or try again later"]})}},7443:function(n,e,t){n.exports=t.p+"static/media/defaultIMG.15ce6163407591bae9df.png"}}]);
//# sourceMappingURL=143.a3ecb87e.chunk.js.map