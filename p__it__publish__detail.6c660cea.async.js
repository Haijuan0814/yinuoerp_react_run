(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8680],{7762:function(T,v,r){"use strict";r.r(v);var _=r(18446),f=r(90860),m=r(58024),l=r(91894),u=r(39428),a=r(3182),p=r(20136),d=r(55241),E=r(94233),g=r(51890),P=r(2824),j=r(2521),D=r(67294),A=r(75362),M=r(36653),R=r(73316),O=r(30381),n=r.n(O),t=r(85893),h=function(y){var c=y.match.params.id,L=(0,D.useState)({}),U=(0,P.Z)(L,2),W=U[0],Z=U[1],B=(0,j.QT)(R.dM,{manual:!0,onSuccess:function(s,i){Z(s.row)}}),C=B.run;(0,D.useEffect)(function(){C({id:c})},[]);var K=(0,j.QT)(R.v$,{manual:!0,onSuccess:function(s,i){message.success("\u64CD\u4F5C\u6210\u529F"),C({id:c})}}),S=K.run,x=function(s){S({id:s.id})},b=[{title:"\u4EA7\u54C1",dataIndex:"product",render:function(s,i){var I=s;return(0,t.jsxs)("span",{children:[(0,t.jsx)(g.C,{src:I.avatar,shape:"square",size:"small"})," \xA0\xA0",I.name]})},search:!1},{title:"\u7248\u672C",dataIndex:"v1",render:function(s,i){return(0,t.jsxs)("span",{children:[" V",i.v1,".",i.v2,".",i.v3," "]})},search:!1},{title:"\u66F4\u65B0",dataIndex:"is_forceupdate",hideInForm:!0,valueEnum:{0:{text:"\u4E0D\u5F3A\u5236\u66F4\u65B0",status:"Processing"},1:{text:"\u5F3A\u5236\u66F4\u65B0",status:"Warning"}}},{title:"\u5E9F\u5F03",dataIndex:"is_delete",hideInForm:!0,valueEnum:{0:{text:"\u6B63\u5E38",status:"Success"},1:{text:"\u5DF2\u5E9F\u5F03",status:"Error"}}},{title:"\u521B\u5EFA\u4EBA",dataIndex:"insert_user"},{title:"\u5173\u8054\u4EBA",dataIndex:"related_uids",render:function(s,i){var I=s?Object.values(s):{};return(0,t.jsx)("span",{children:I.length>0?(0,t.jsxs)(d.Z,{content:i.related_user,trigger:"hover",children:[I.length,"\u4EBA"]}):""})}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"insert_time",render:function(s){return(0,t.jsxs)("span",{children:[s>0?n()(parseInt(s)*1e3).format("YYYY-MM-DD HH:mm"):""," "]})}},{title:"\u521B\u5EFA\u4EBA",dataIndex:"insert_user"},{title:"\u6700\u8FD1\u66F4\u65B0",sorter:!0,dataIndex:"update_time",render:function(s){return(0,t.jsxs)("span",{children:[s>0?n()(parseInt(s)*1e3).format("YYYY-MM-DD HH:mm"):""," "]})},search:!1},{title:"\u53D1\u5E03\u5185\u5BB9",dataIndex:"content",render:function(s){return(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:s?s.replaceAll(`
`,"<br />"):"\u6682\u65E0\u5185\u5BB9"}})}},{title:"Apple\u4E0B\u8F7D\u5730\u5740",dataIndex:"apple_url"},{title:"Android\u5B89\u88C5\u5305\u5730\u5740",dataIndex:"android_apk"}];return W.id>0?(0,t.jsx)(A.ZP,{children:(0,t.jsx)(l.Z,{bordered:!1,children:(0,t.jsx)(M.ZP,{column:1,request:(0,a.Z)((0,u.Z)().mark(function o(){return(0,u.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",{data:W});case 1:case"end":return i.stop()}},o)})),columns:b})})}):(0,t.jsx)(f.Z,{active:!0})};v.default=h},73316:function(T,v,r){"use strict";r.d(v,{gp:function(){return a},dM:function(){return d},R2:function(){return g},v$:function(){return A},sc:function(){return R}});var _=r(39428),f=r(11849),m=r(3182),l=r(2521),u=r(43237);function a(n,t){return p.apply(this,arguments)}function p(){return p=(0,m.Z)((0,_.Z)().mark(function n(t,h){var e;return(0,_.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,l.WY)(u.h+"it/publish/index",(0,f.Z)({method:"GET",params:(0,f.Z)({},t)},h||{}));case 2:return e=c.sent,c.abrupt("return",{data:e.data,success:e.success,total:e.data.total,pageSize:e.data.pageSize,current:e.data.current});case 4:case"end":return c.stop()}},n)})),p.apply(this,arguments)}function d(n){return E.apply(this,arguments)}function E(){return E=(0,m.Z)((0,_.Z)().mark(function n(t){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)(u.h+"it/publish/detail",{params:t}));case 1:case"end":return e.stop()}},n)})),E.apply(this,arguments)}function g(n){return P.apply(this,arguments)}function P(){return P=(0,m.Z)((0,_.Z)().mark(function n(t){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)(u.h+"it/publish/form",{method:"POST",data:t}));case 1:case"end":return e.stop()}},n)})),P.apply(this,arguments)}function j(n){return D.apply(this,arguments)}function D(){return D=_asyncToGenerator(_regeneratorRuntime().mark(function n(t){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request(api+"it/publish/finish",{params:t}));case 1:case"end":return e.stop()}},n)})),D.apply(this,arguments)}function A(n){return M.apply(this,arguments)}function M(){return M=(0,m.Z)((0,_.Z)().mark(function n(t){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)(u.h+"it/publish/delete",{params:t}));case 1:case"end":return e.stop()}},n)})),M.apply(this,arguments)}function R(n){return O.apply(this,arguments)}function O(){return O=(0,m.Z)((0,_.Z)().mark(function n(t){return(0,_.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)(u.h+"it/publish/productVersion",{params:t}));case 1:case"end":return e.stop()}},n)})),O.apply(this,arguments)}},58083:function(T,v,r){"use strict";r.d(v,{G:function(){return l}});var _=r(70526),f=function(a){if((0,_.Z)()&&window.document.documentElement){var p=Array.isArray(a)?a:[a],d=window.document.documentElement;return p.some(function(E){return E in d.style})}return!1},m=function(a,p){if(!f(a))return!1;var d=document.createElement("div"),E=d.style[a];return d.style[a]=p,d.style[a]!==E};function l(u,a){return!Array.isArray(u)&&a!==void 0?m(u,a):f(u)}}}]);
