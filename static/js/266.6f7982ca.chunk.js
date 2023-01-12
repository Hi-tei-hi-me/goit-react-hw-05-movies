"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{6700:function(t,e,n){n.d(e,{M:function(){return h}});var r,a,c,i=n(168),u=n(7402),s=u.Z.ul(r||(r=(0,i.Z)([""]))),o=n(7689),p=n(1087),f=u.Z.li(a||(a=(0,i.Z)([""]))),l=(0,u.Z)(p.OL)(c||(c=(0,i.Z)(["\n  &:hover,\n  &:focus {\n  }\n"]))),d=n(184),v=function(t){var e=t.id,n=t.title,r=(0,o.TH)();return(0,d.jsx)(f,{children:(0,d.jsx)(l,{to:"/movies/".concat(e),state:{from:r},children:n})})},h=function(t){var e=t.films;return(0,d.jsx)(s,{children:e.map((function(t){var e=t.id,n=t.title;return(0,d.jsx)(v,{id:e,title:n},e)}))})}},382:function(t,e,n){n.d(e,{JS:function(){return s},TP:function(){return p},sK:function(){return o},tx:function(){return l},zv:function(){return f}});var r=n(5861),a=n(4687),c=n.n(a),i=n(3263),u="e5b8bd1b82d4f5b68280cf1e2b92e5f6";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/trending/movie/week?api_key=".concat(u));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n.map((function(t){return{title:t.title,id:t.id}})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(e,"&page=1"));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r.map((function(t){return{title:t.title,id:t.id}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a,s,o,p,f,l;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(u));case 2:return n=t.sent,r=n.data,a=r.poster_path,s=r.title,o=r.release_date,p=r.vote_average,f=r.overview,l=r.genres,t.abrupt("return",{poster_path:a,title:s,release_date:o,vote_average:p,overview:f,genres:l});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast.map((function(t){return{profile_path:t.profile_path,name:t.name,character:t.character}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u,"&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results.map((function(t){return{author:t.author,content:t.content}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},1266:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(5861),a=n(9439),c=n(4687),i=n.n(c),u=n(2791),s=n(382),o=n(6700),p=n(9399),f=n(5463),l=n(184);function d(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,u.useState)(!1),v=(0,a.Z)(d,2),h=v[0],x=v[1],m=(0,u.useState)(""),g=(0,a.Z)(m,2),w=g[0],Z=g[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,s.JS();case 4:e=t.sent,c(e),Z(""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Z(t.t0.message);case 12:return t.prev=12,x(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{children:"Films trending today"}),h&&(0,l.jsx)(p.a,{}),n.length>0&&(0,l.jsx)(o.M,{films:n}),w&&(0,l.jsx)(f.j,{})]})}},5463:function(t,e,n){n.d(e,{j:function(){return s}});var r,a=n(168),c=n(7402).Z.p(r||(r=(0,a.Z)(["\n  margin: 40px auto;\n  width: max-content;\n  max-width: 95vw;\n  padding: 20px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-align: center;\n  line-height: 1.71;\n  background-color: lightgray;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),i=n(7443),u=n(184),s=function(t){var e=t.textError;return(0,u.jsxs)(c,{children:[(0,u.jsx)("img",{src:i,alt:"error",width:100}),"Oops! Something's wrong:",(0,u.jsx)("br",{}),"\u274c ",e,(0,u.jsx)("br",{}),"Please, refresh this page or try again later"]})}},7443:function(t,e,n){t.exports=n.p+"static/media/defaultIMG.15ce6163407591bae9df.png"}}]);
//# sourceMappingURL=266.6f7982ca.chunk.js.map