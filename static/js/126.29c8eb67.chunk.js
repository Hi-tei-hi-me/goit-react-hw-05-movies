"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[126],{6700:function(t,e,n){n.d(e,{M:function(){return m}});var r,a,i,c=n(9126),o=n(168),u=n(7402),s=u.Z.ol(r||(r=(0,o.Z)(["\n  list-style-type: decimal;\n  list-style-position: inside;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  gap: 3px;\n  width: max-content;\n"]))),l=n(7689),p=n(1087),f=u.Z.li(a||(a=(0,o.Z)(["\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: left;\n  background-color: rgba(255, 255, 255, 0.4);\n  &:hover a,\n  &:focus a {\n    text-shadow: 2px 2px 4px #950606;\n  }\n"]))),d=(0,u.Z)(p.OL)(i||(i=(0,o.Z)(["\n  text-transform: uppercase;\n"]))),v=n(184),h=function(t){var e=t.id,n=t.title,r=(0,l.TH)();return(0,v.jsx)(f,{children:(0,v.jsx)(d,{to:"/movies/".concat(e),state:{from:r},children:n})})},m=function(t){var e=t.films;return(0,v.jsxs)(s,{children:[e.map((function(t){var e=t.id,n=t.title;return(0,v.jsx)(h,{id:e,title:n},e)})),(0,v.jsx)(c.XA0,{size:25})]})}},382:function(t,e,n){n.d(e,{JS:function(){return u},TP:function(){return l},sK:function(){return s},tx:function(){return f},zv:function(){return p}});var r=n(5861),a=n(4687),i=n.n(a),c=n(3263),o="e5b8bd1b82d4f5b68280cf1e2b92e5f6";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var t=(0,r.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/week?api_key=".concat(o));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n.map((function(t){return{title:t.title,id:t.id}})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(e,"&page=1"));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r.map((function(t){return{title:t.title,id:t.id}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r,a,u,s,l,p,f;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(o));case 2:return n=t.sent,r=n.data,a=r.poster_path,u=r.title,s=r.release_date,l=r.vote_average,p=r.overview,f=r.genres,t.abrupt("return",{poster_path:a,title:u,release_date:s,vote_average:l,overview:p,genres:f});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast.map((function(t){return{profile_path:t.profile_path,name:t.name,character:t.character}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o,"&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results.map((function(t){return{author:t.author,content:t.content}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},1266:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(5861),a=n(9439),i=n(4687),c=n.n(i),o=n(2791),u=n(382),s=n(6700),l=n(9399),p=n(5463),f=n(184);function d(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),n=e[0],i=e[1],d=(0,o.useState)(!1),v=(0,a.Z)(d,2),h=v[0],m=v[1],x=(0,o.useState)(""),g=(0,a.Z)(x,2),y=g[0],w=g[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,u.JS();case 4:e=t.sent,i(e),w(""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),w(t.t0.message);case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),h&&(0,f.jsx)(l.a,{}),n.length>0&&(0,f.jsx)(s.M,{films:n}),y&&(0,f.jsx)(p.j,{})]})}},5463:function(t,e,n){n.d(e,{j:function(){return u}});var r,a=n(168),i=n(7402).Z.p(r||(r=(0,a.Z)(["\n  margin: 40px auto;\n  width: max-content;\n  max-width: 95vw;\n  padding: 20px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-align: center;\n  line-height: 1.71;\n  background-color: lightgray;\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),c=n(7443),o=n(184),u=function(t){var e=t.textError;return(0,o.jsxs)(i,{children:[(0,o.jsx)("img",{src:c,alt:"error",width:100}),"Oops! Something's wrong:",(0,o.jsx)("br",{}),"\u274c ",e,(0,o.jsx)("br",{}),"Please, refresh this page or try again later"]})}},9983:function(t,e,n){n.d(e,{w_:function(){return s}});var r=n(2791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),c=function(){return c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},c.apply(this,arguments)},o=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};function u(t){return t&&t.map((function(t,e){return r.createElement(t.tag,c({key:e},t.attr),u(t.child))}))}function s(t){return function(e){return r.createElement(l,c({attr:c({},t.attr)},e),u(t.child))}}function l(t){var e=function(e){var n,a=t.attr,i=t.size,u=t.title,s=o(t,["attr","size","title"]),l=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,s,{className:n,style:c(c({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(a)}},7443:function(t,e,n){t.exports=n.p+"static/media/defaultIMG.15ce6163407591bae9df.png"}}]);
//# sourceMappingURL=126.29c8eb67.chunk.js.map