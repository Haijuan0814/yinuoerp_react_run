(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[577],{26530:function(z){z.exports={main:"main___2viFe",headerList:"headerList____shOU",stepDescription:"stepDescription___2EX9Z",pageHeader:"pageHeader___5qOu0",moreInfo:"moreInfo___3tAiO"}},50669:function(z,R,t){"use strict";var ut=t(54029),o=t(79166),it=t(67294),u=t(85893),J=function(G){var Z=G.tablename,w=G.status,O=function(a){return a=="success"?(0,u.jsx)(o.Z,{status:"success",text:"\u5DF2\u751F\u6548"}):a=="check"?(0,u.jsx)(o.Z,{status:"processing",text:"\u5F85\u5BA1\u6279"}):a=="hr_check"?(0,u.jsx)(o.Z,{status:"processing",text:"\u884C\u653F\u5BA1\u6279"}):a=="dep_check"?(0,u.jsx)(o.Z,{status:"processing",text:"\u90E8\u95E8\u5BA1\u6279"}):a=="recheck"?(0,u.jsx)(o.Z,{status:"processing",text:"\u5F85\u590D\u5BA1"}):a=="financecheck"?(0,u.jsx)(o.Z,{status:"processing",text:"\u8D22\u52A1\u5BA1\u6279"}):a=="pay"?(0,u.jsx)(o.Z,{status:"processing",text:"\u5F85\u4ED8\u6B3E"}):a=="sign"?(0,u.jsx)(o.Z,{status:"processing",text:"\u5F85\u7B7E\u6536"}):a=="fail"?(0,u.jsx)(o.Z,{status:"error",text:"\u5DF2\u9A73\u56DE"}):a=="buy"?(0,u.jsx)(o.Z,{status:"processing",text:"\u5F85\u91C7\u8D2D"}):a=="delete"?(0,u.jsx)(o.Z,{status:"default",text:"\u5DF2\u4F5C\u5E9F"}):(0,u.jsx)(o.Z,{status:"default",text:a})};return O(w)};R.Z=J},20290:function(z,R,t){"use strict";t.d(R,{Z:function(){return tt}});var ut=t(18446),o=t(90860),it=t(58024),u=t(91894),J=t(62350),C=t(24565),G=t(57663),Z=t(71577),w=t(34792),O=t(48086),F=t(2824),a=t(35556),E=t(58074),lt=t(64335),x=t(1870),D=t(67294),W=t(94184),Y=t.n(W),A=t(2521),I=t(26530),b=t.n(I),S=t(39428),k=t(11849),T=t(3182),q=t(43237);function L(p,y){return c.apply(this,arguments)}function c(){return c=(0,T.Z)((0,S.Z)().mark(function p(y,g){return(0,S.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,A.WY)(q.h+"base/approval/timeline",(0,k.Z)({method:"GET",params:(0,k.Z)({},y)},g||{})));case 1:case"end":return h.stop()}},p)})),c.apply(this,arguments)}function _(p){return M.apply(this,arguments)}function M(){return M=(0,T.Z)((0,S.Z)().mark(function p(y){var g;return(0,S.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return g=q.h+"base/approval/reply",h.abrupt("return",(0,A.WY)(g,{params:y}));case 2:case"end":return h.stop()}},p)})),M.apply(this,arguments)}var f=t(30381),m=t.n(f),e=t(85893),d=E.Z.Step,i=function(y){var g=y.tablename,B=y.parent,h=(0,A.tT)("@@initialState"),H=h.initialState,ot=h.setInitialState,$=H.currentUser,et=(0,D.useState)({}),U=(0,F.Z)(et,2),Q=U[0],K=U[1],N=(0,D.useState)(0),P=(0,F.Z)(N,2),nt=P[0],rt=P[1],st=(0,A.QT)(L,{manual:!0,onSuccess:function(s,r){K(s.list),rt(s.current_step)}}),V=st.run;(0,D.useEffect)(function(){V({tablename:g,parent:B})},[]);var at=(0,A.QT)(_,{manual:!0,onSuccess:function(s,r){O.default.success("\u64CD\u4F5C\u6210\u529F"),setTimeout(function(){V({tablename:g,parent:B})},400)}}),v=at.run,n=function(s,r){v({id:s,status:r})},X=function(s){var r=s.type;if(r=="check"||r=="dep_check"||r=="hr_check"||r=="recheck"||r=="financecheck")return(0,e.jsxs)("p",{style:{marginTop:"6px"},children:[(0,e.jsx)(C.Z,{title:"\u786E\u5B9A\u5F53\u524D\u64CD\u4F5C\u5417\uFF1F",onConfirm:function(){return n(s.id,"SUCCESS")},icon:(0,e.jsx)(x.Z,{style:{color:"red"}}),children:(0,e.jsx)(Z.Z,{type:"primary",size:"small",ghost:!0,children:"\u901A\u8FC7"})}),"\xA0\xA0",(0,e.jsx)(C.Z,{title:"\u786E\u5B9A\u5F53\u524D\u64CD\u4F5C\u5417\uFF1F",onConfirm:function(){return n(s.id,"FAIL")},icon:(0,e.jsx)(x.Z,{style:{color:"red"}}),children:(0,e.jsx)(Z.Z,{size:"small",danger:!0,children:"\u4E0D\u901A\u8FC7"})})]});if(r=="pay")return(0,e.jsx)("p",{style:{marginTop:"6px"},children:(0,e.jsx)(C.Z,{title:"\u786E\u5B9A\u5F53\u524D\u64CD\u4F5C\u5417\uFF1F",onConfirm:function(){return n(s.id,"SUCCESS")},icon:(0,e.jsx)(x.Z,{style:{color:"red"}}),children:(0,e.jsx)(Z.Z,{type:"primary",size:"small",ghost:!0,children:"\u786E\u8BA4\u5DF2\u4ED8\u6B3E"})})});if(r=="print")return(0,e.jsx)("p",{style:{marginTop:"6px"},children:(0,e.jsx)(C.Z,{title:"\u786E\u5B9A\u5F53\u524D\u64CD\u4F5C\u5417\uFF1F",onConfirm:function(){return n(s.id,"SUCCESS")},icon:(0,e.jsx)(x.Z,{style:{color:"red"}}),children:(0,e.jsx)(Z.Z,{type:"primary",size:"small",ghost:!0,children:"\u786E\u8BA4\u5DF2\u6253\u5370"})})});if(r=="sign")return(0,e.jsx)("p",{style:{marginTop:"6px"},children:(0,e.jsx)(C.Z,{title:"\u786E\u5B9A\u5F53\u524D\u64CD\u4F5C\u5417\uFF1F",onConfirm:function(){return n(s.id,"SUCCESS")},icon:(0,e.jsx)(x.Z,{style:{color:"red"}}),children:(0,e.jsx)(Z.Z,{type:"primary",size:"small",ghost:!0,children:"\u786E\u8BA4\u5DF2\u7B7E\u6536"})})})};return Q.length>0?(0,e.jsx)(u.Z,{title:"\u6D41\u7A0B\u8FDB\u5EA6",style:{marginBottom:24},children:(0,e.jsx)(lt.Z.Consumer,{children:function(s){var r=s.isMobile;return(0,e.jsx)(E.Z,{direction:r?"vertical":"horizontal",progressDot:!0,current:nt,children:Q.map(function(l){return(0,e.jsx)(d,{title:l.type_text+" "+(l.type=="insert"||l.type=="finish"?"":l.status=="SUCCESS"?"\u901A\u8FC7":l.status=="FAIL"?"\u4E0D\u901A\u8FC7":""),description:(0,e.jsxs)("div",{className:Y()(b().textSecondary,b().stepDescription),children:[(0,e.jsx)(D.Fragment,{children:l.user?l.user.name:""}),(0,e.jsx)("div",{children:l.status=="TODO"&&l.forward_uid==$.id?X(l):l.status=="WAIT"?"":m()(parseInt(l.update_time)*1e3).format("YYYY-MM-DD HH:mm")})]})})})})}})}):(0,e.jsx)(o.Z,{active:!0})},tt=i},80877:function(z,R,t){"use strict";t.d(R,{Z:function(){return M}});var ut=t(57663),o=t(71577),it=t(9715),u=t(55843),J=t(47673),C=t(4107),G=t(54421),Z=t(38272),w=t(60663),O=t(31990),F=t(2824),a=t(67294),E=t(2521),lt=t(30381),x=t(39428),D=t(11849),W=t(3182),Y=t(43237);function A(f,m){return I.apply(this,arguments)}function I(){return I=(0,W.Z)((0,x.Z)().mark(function f(m,e){var d,i;return(0,x.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return d=Y.h+"base/comment/index",p.next=3,(0,E.WY)(d,{method:"GET",params:(0,D.Z)({},m)});case 3:return i=p.sent,p.abrupt("return",{data:i.data,success:i.success});case 5:case"end":return p.stop()}},f)})),I.apply(this,arguments)}function b(f){return S.apply(this,arguments)}function S(){return S=(0,W.Z)((0,x.Z)().mark(function f(m){var e;return(0,x.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return e=Y.h+"base/comment/save",i.abrupt("return",(0,E.WY)(e,{method:"POST",data:m}));case 2:case"end":return i.stop()}},f)})),S.apply(this,arguments)}function k(f){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function f(m){var e;return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return e=api+"it/"+m.tablename+"/form",i.abrupt("return",request(e,{method:"POST",data:m}));case 2:case"end":return i.stop()}},f)})),T.apply(this,arguments)}function q(f){return L.apply(this,arguments)}function L(){return L=_asyncToGenerator(_regeneratorRuntime().mark(function f(m){return _regeneratorRuntime().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",request(api+"it/think/form",_objectSpread({method:"DELETE"},m||{})));case 1:case"end":return d.stop()}},f)})),L.apply(this,arguments)}var c=t(85893),_=function(m){var e=m.tablename,d=m.tableid,i=m.isEdit,tt=m.isShowContent,p=(0,a.useState)([]),y=(0,F.Z)(p,2),g=y[0],B=y[1],h=(0,E.QT)(A,{manual:!0,onSuccess:function(n,X){var j=n.rows,s=[];j.map(function(r){r.tableid==d&&s.push(r)}),B(s)}}),H=h.run;(0,a.useEffect)(function(){H({tablename:e,tableid:d})},[]);var ot=(0,a.useState)(!1),$=(0,F.Z)(ot,2),et=$[0],U=$[1],Q=(0,a.useState)(""),K=(0,F.Z)(Q,2),N=K[0],P=K[1],nt=(0,E.QT)(function(v){return b(v)},{manual:!0,onSuccess:function(n){U(!1),P(""),H({tablename:e,tableid:d})}}),rt=nt.run,st=function(n){P(n.target.value)},V=function(){U(!0);var n={content:N,tablename:e,tableid:d,parent:0};rt(n)},at=function(n){if(n.indexOf("http")!=-1){var X=/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,j=n.replace(X,function(r){return'<a href="'+r+'" target=_blank>'+r+"</a>"}),s={__html:j.replaceAll(`
`,"<br />")};return(0,c.jsx)("div",{dangerouslySetInnerHTML:s})}else return(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:n.replaceAll(`
`,"<br />")}})};return(0,c.jsxs)("div",{children:[g.length>0?(0,c.jsx)(Z.ZP,{className:"comment-list",itemLayout:"horizontal",dataSource:g,renderItem:function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(O.Z,{actions:n.actions,author:n.user.name,avatar:n.user.avatar,content:at(n.content),datetime:n.insert_time})})}}):"",i?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.Z.Item,{children:(0,c.jsx)(C.Z.TextArea,{rows:2,onChange:function(n){return st(n)},value:N,className:"comment_textarea___hnYGe",style:{height:"70px"}})}),(0,c.jsx)(u.Z.Item,{children:(0,c.jsx)(o.Z,{htmlType:"submit",loading:et,onClick:function(){return V()},type:"primary",children:"\u53D1\u8868\u8BC4\u8BBA"})})]}):""]})},M=_}}]);
