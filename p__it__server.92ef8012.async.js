(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9630],{3544:function(h){h.exports={avatarHolder:"avatarHolder___3jDfr",name:"name___1RzMT",detail:"detail___3xWYv",tagsTitle:"tagsTitle___1vsI4",teamTitle:"teamTitle___30y-P",tags:"tags___3PQp1",team:"team___37uqq",tabsCard:"tabsCard___1qKZs"}},85740:function(h,E,e){"use strict";e.r(E);var m=e(58024),c=e(91894),g=e(66456),f=e(55499),a=e(2824),t=e(2521),r=e(67294),i=e(75362),l=e(62769),D=e(3544),v=e.n(D),n=e(85893),s=20,p=function(){var o=(0,r.useState)(1),d=(0,a.Z)(o,2),S=d[0],M=d[1],R=(0,r.useState)([]),O=(0,a.Z)(R,2),A=O[0],T=O[1],I=(0,r.useState)(!0),C=(0,a.Z)(I,2),U=C[0],j=C[1],W=(0,r.useState)([]),y=(0,a.Z)(W,2),K=y[0],Z=y[1],B=(0,t.QT)(l.gp,{manual:!0,onSuccess:function(u,z){T(u.data),M(u.current),Z(u.total),j(!1)}}),L=B.run;(0,r.useEffect)(function(){L({current:S,pageSize:s})},[]);var b=[{title:"\u7F16\u53F7",dataIndex:"id",search:!1},{title:"\u670D\u52A1\u5668\u540D\u79F0",dataIndex:"title",search:!1},{title:"\u6570\u636E\u63A5\u53E3",dataIndex:"data_api",search:!1},{title:"\u6587\u4EF6\u63A5\u53E3",dataIndex:"file_api",search:!1}],x=function(u){M(u),T([]),L({current:u,pageSize:s})};return(0,n.jsx)(i.ZP,{children:(0,n.jsx)(c.Z,{className:v().listCard,bordered:!1,style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},children:(0,n.jsx)(f.Z,{dataSource:A,loading:U,columns:b,pagination:{simple:!1,current:S,defaultCurrent:1,total:K,showSizeChanger:!0,pageSize:s,showTotal:function(u){return"\u5171"+u+"\u6761\u6570\u636E"},onChange:function(u,z){x(u)}}})})})};E.default=p},62769:function(h,E,e){"use strict";e.d(E,{gp:function(){return t},Z$:function(){return i}});var m=e(39428),c=e(11849),g=e(3182),f=e(2521),a=e(43237);function t(n,s){return r.apply(this,arguments)}function r(){return r=(0,g.Z)((0,m.Z)().mark(function n(s,p){var _;return(0,m.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,f.WY)(a.h+"it/server/index",(0,c.Z)({method:"GET",params:(0,c.Z)({},s)},p||{}));case 2:return _=d.sent,d.abrupt("return",{data:_.data,success:_.success,total:_.data.total,pageSize:_.data.pageSize,current:_.data.current});case 4:case"end":return d.stop()}},n)})),r.apply(this,arguments)}function i(n){return l.apply(this,arguments)}function l(){return l=(0,g.Z)((0,m.Z)().mark(function n(s){var p;return(0,m.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,f.WY)(a.h+"it/server/select",{method:"GET",params:(0,c.Z)({},s)});case 2:return p=o.sent,o.abrupt("return",{data:p.data.list});case 4:case"end":return o.stop()}},n)})),l.apply(this,arguments)}function D(n){return v.apply(this,arguments)}function v(){return v=_asyncToGenerator(_regeneratorRuntime().mark(function n(s){return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",request(api+"it/server/detail",{params:s}));case 1:case"end":return _.stop()}},n)})),v.apply(this,arguments)}},58083:function(h,E,e){"use strict";e.d(E,{G:function(){return f}});var m=e(70526),c=function(t){if((0,m.Z)()&&window.document.documentElement){var r=Array.isArray(t)?t:[t],i=window.document.documentElement;return r.some(function(l){return l in i.style})}return!1},g=function(t,r){if(!c(t))return!1;var i=document.createElement("div"),l=i.style[t];return i.style[t]=r,i.style[t]!==l};function f(a,t){return!Array.isArray(a)&&t!==void 0?g(a,t):c(a)}}}]);
