(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9531],{3178:function(){},62389:function(Le,ae,e){"use strict";e.r(ae),e.d(ae,{default:function(){return Ce}});var Y=e(18106),te=e(32267),$=e(34792),J=e(48086),N=e(39428),b=e(11849),z=e(3182),se=e(2824),Be=e(17462),Ze=e(76772),ye=e(89366),ue=e(2603),Fe=e(29985),x=e(67294),Oe=e(57663),u=e(71577),De=e(47673),Me=e(4107),Z=e(28991),Q=e(55507),ce=e(92137),de=e(81253),ne=e(28481),Ae=e(9715),je=e(55843),a=e(85893),fe=e(52772),Ee=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"],Pe=x.forwardRef(function(r,h){var m=je.Z.useFormInstance(),T=(0,x.useState)(r.countDown||60),y=(0,ne.Z)(T,2),d=y[0],O=y[1],V=(0,x.useState)(!1),q=(0,ne.Z)(V,2),R=q[0],L=q[1],U=(0,x.useState)(),_=(0,ne.Z)(U,2),D=_[0],g=_[1],G=r.rules,E=r.name,le=r.phoneName,ee=r.fieldProps,ie=r.captchaTextRender,xe=ie===void 0?function(o,f){return o?"".concat(f," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:ie,B=r.captchaProps,C=(0,de.Z)(r,Ee),p=function(){var o=(0,ce.Z)((0,Q.Z)().mark(function f(n){return(0,Q.Z)().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.prev=0,g(!0),P.next=4,C.onGetCaptcha(n);case 4:g(!1),L(!0),P.next=13;break;case 8:P.prev=8,P.t0=P.catch(0),L(!1),g(!1),console.log(P.t0);case 13:case"end":return P.stop()}},f,null,[[0,8]])}));return function(n){return o.apply(this,arguments)}}();return(0,x.useImperativeHandle)(h,function(){return{startTiming:function(){return L(!0)},endTiming:function(){return L(!1)}}}),(0,x.useEffect)(function(){var o=0,f=r.countDown;return R&&(o=window.setInterval(function(){O(function(n){return n<=1?(L(!1),clearInterval(o),f||60):n-1})},1e3)),function(){return clearInterval(o)}},[R]),(0,a.jsxs)("div",{style:(0,Z.Z)((0,Z.Z)({},ee==null?void 0:ee.style),{},{display:"flex",alignItems:"center"}),ref:h,children:[(0,a.jsx)(Me.Z,(0,Z.Z)((0,Z.Z)({},ee),{},{style:{flex:1,transition:"width .3s",marginRight:8}})),(0,a.jsx)(u.Z,(0,Z.Z)((0,Z.Z)({style:{display:"block"},disabled:R,loading:D},B),{},{onClick:function(){var o=(0,ce.Z)((0,Q.Z)().mark(function n(){var H;return(0,Q.Z)().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(F.prev=0,!le){F.next=9;break}return F.next=4,m.validateFields([le].flat(1));case 4:return H=m.getFieldValue([le].flat(1)),F.next=7,p(H);case 7:F.next=11;break;case 9:return F.next=11,p("");case 11:F.next=16;break;case 13:F.prev=13,F.t0=F.catch(0),console.log(F.t0);case 16:case"end":return F.stop()}},n,null,[[0,13]])}));function f(){return o.apply(this,arguments)}return f}(),children:xe(R,d)}))]})}),Se=(0,fe.G)(Pe),ve=Se,Ne=e(63185),j=e(9676),t=e(96202),l=e(39863),s=["options","fieldProps","proFieldProps","valueEnum"],i=x.forwardRef(function(r,h){var m=r.options,T=r.fieldProps,y=r.proFieldProps,d=r.valueEnum,O=(0,de.Z)(r,s);return(0,a.jsx)(l.Z,(0,Z.Z)({ref:h,valueType:"checkbox",valueEnum:(0,t.h)(d,void 0),fieldProps:(0,Z.Z)({options:m},T),lightProps:(0,Z.Z)({labelFormatter:function(){return(0,a.jsx)(l.Z,(0,Z.Z)({ref:h,valueType:"checkbox",mode:"read",valueEnum:(0,t.h)(d,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,Z.Z)({options:m},T),proFieldProps:y},O))}},O.lightProps),proFieldProps:y},O))}),S=x.forwardRef(function(r,h){var m=r.fieldProps,T=r.children;return(0,a.jsx)(j.Z,(0,Z.Z)((0,Z.Z)({ref:h},m),{},{children:T}))}),I=(0,fe.G)(S,{valuePropName:"checked"}),W=I;W.Group=i;var X=W,w=e(952),A=e(5966),c=e(2521),re=e(73727),oe=e(2540),me=e(54083),Ie=e(43237);function ge(r,h){return k.apply(this,arguments)}function k(){return k=(0,z.Z)((0,N.Z)().mark(function r(h,m){return(0,N.Z)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",(0,c.WY)(Ie.h+"login/captcha",(0,b.Z)({method:"GET",params:(0,b.Z)({},h)},m||{})));case 1:case"end":return y.stop()}},r)})),k.apply(this,arguments)}var Te=e(34687),v=e.n(Te),K=e(11768),pe=function(h){var m=h.content;return(0,a.jsx)(Ze.Z,{style:{marginBottom:24},message:m,type:"error",showIcon:!0})},he=function(){var h=(0,x.useState)(!1),m=(0,se.Z)(h,2),T=m[0],y=m[1],d=(0,x.useState)({}),O=(0,se.Z)(d,2),V=O[0],q=O[1],R=(0,x.useState)("account"),L=(0,se.Z)(R,2),U=L[0],_=L[1],D=(0,c.tT)("@@initialState"),g=D.initialState,G=D.setInitialState,E=(0,c.YB)(),le=function(){var B=(0,z.Z)((0,N.Z)().mark(function C(){var p,o;return(0,N.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g==null||(p=g.fetchUserInfo)===null||p===void 0?void 0:p.call(g);case 2:if(o=n.sent,!o){n.next=6;break}return n.next=6,G(function(H){return(0,b.Z)((0,b.Z)({},H),{},{currentUser:o})});case 6:case"end":return n.stop()}},C)}));return function(){return B.apply(this,arguments)}}(),ee=function(){var B=(0,z.Z)((0,N.Z)().mark(function C(p){var o,f,n,H,P;return(0,N.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return y(!0),M.prev=1,M.next=4,(0,me.x4)((0,b.Z)((0,b.Z)({},p),{},{type:U}));case 4:if(o=M.sent,o.success!==!0){M.next=17;break}return f=E.formatMessage({id:"pages.login.success",defaultMessage:"Login Success!"}),J.default.success(f),K.ZP.save("userInfo",o.data,{path:"/",expires:new Date(new Date().getTime()+24*3600*1e3*365)}),M.next=11,le();case 11:if(c.m8){M.next=13;break}return M.abrupt("return");case 13:return n=c.m8.location.query,H=n.redirect,c.m8.push(H||"/"),M.abrupt("return");case 17:q(o),M.next=24;break;case 20:M.prev=20,M.t0=M.catch(1),P=E.formatMessage({id:"pages.login.failure",defaultMessage:"Login Fail, Try Again!"}),J.default.error(P);case 24:y(!1);case 25:case"end":return M.stop()}},C,null,[[1,20]])}));return function(p){return B.apply(this,arguments)}}(),ie=V.status,xe=V.type;return(0,a.jsxs)("div",{className:v().container,children:[(0,a.jsx)("div",{className:v().lang,"data-lang":!0,children:c.pD&&(0,a.jsx)(c.pD,{})}),(0,a.jsxs)("div",{className:v().content,children:[(0,a.jsxs)("div",{className:v().top,children:[(0,a.jsx)("div",{className:v().header,children:(0,a.jsxs)(re.rU,{to:"/",children:[(0,a.jsx)("img",{alt:"logo",className:v().logo,src:"/logo.png"}),(0,a.jsx)("span",{className:v().title,children:E.formatMessage({id:"pages.layouts.userLayout.company"})})]})}),(0,a.jsx)("div",{className:v().desc,children:E.formatMessage({id:"pages.layouts.userLayout.slogan"})})]}),(0,a.jsxs)("div",{className:v().main,children:[(0,a.jsxs)(w.ZP,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:E.formatMessage({id:"pages.login.submit",defaultMessage:"\u767B\u5F55"})},render:function(C,p){return p.pop()},submitButtonProps:{loading:T,size:"large",style:{width:"100%"}}},onFinish:function(){var B=(0,z.Z)((0,N.Z)().mark(function C(p){return(0,N.Z)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,ee(p);case 2:case"end":return f.stop()}},C)}));return function(C){return B.apply(this,arguments)}}(),children:[(0,a.jsx)(te.Z,{activeKey:U,onChange:_,children:(0,a.jsx)(te.Z.TabPane,{tab:E.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},"account")}),ie==="error"&&xe==="account"&&(0,a.jsx)(pe,{content:E.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF(admin/ant.design)"})}),U==="account"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A.Z,{name:"username",fieldProps:{size:"large",prefix:(0,a.jsx)(ye.Z,{className:v().prefixIcon})},placeholder:E.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u59D3\u540D"}),rules:[{required:!0,message:(0,a.jsx)(c._H,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u59D3\u540D!"})}]}),(0,a.jsx)(A.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,a.jsx)(ue.Z,{className:v().prefixIcon})},placeholder:E.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801"}),rules:[{required:!0,message:(0,a.jsx)(c._H,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),ie==="error"&&xe==="mobile"&&(0,a.jsx)(pe,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF"}),U==="mobile"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A.Z,{fieldProps:{size:"large",prefix:(0,a.jsx)(Fe.Z,{className:v().prefixIcon})},name:"mobile",placeholder:E.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:(0,a.jsx)(c._H,{id:"pages.login.phoneNumber.required",defaultMessage:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"})},{pattern:/^1\d{10}$/,message:(0,a.jsx)(c._H,{id:"pages.login.phoneNumber.invalid",defaultMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"})}]}),(0,a.jsx)(ve,{fieldProps:{size:"large",prefix:(0,a.jsx)(ue.Z,{className:v().prefixIcon})},captchaProps:{size:"large"},placeholder:E.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(C,p){return C?"".concat(p," ").concat(E.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):E.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:(0,a.jsx)(c._H,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"})}],onGetCaptcha:function(){var B=(0,z.Z)((0,N.Z)().mark(function C(p){var o;return(0,N.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ge({phone:p});case 2:if(o=n.sent,o!==!1){n.next=5;break}return n.abrupt("return");case 5:J.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return n.stop()}},C)}));return function(C){return B.apply(this,arguments)}}()})]}),(0,a.jsxs)("div",{style:{marginBottom:24},children:[(0,a.jsx)(X,{noStyle:!0,name:"autoLogin",children:(0,a.jsx)(c._H,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55"})}),(0,a.jsx)("a",{style:{float:"right"},children:(0,a.jsx)("a",{href:"/#/user/forget",children:(0,a.jsx)(c._H,{id:"pages.login.forgotPassword",defaultMessage:"\u5FD8\u8BB0\u5BC6\u7801/\u8D26\u53F7\u6FC0\u6D3B"})})})]})]}),(0,a.jsx)("div",{className:v().other,children:(0,a.jsx)("a",{href:"/#/user/weixin",children:(0,a.jsx)(c._H,{id:"pages.login.accountLogin.wechatlogin",defaultMessage:"\u4F01\u4E1A\u5FAE\u4FE1\u767B\u5F55"})})})]})]}),(0,a.jsx)(oe.Z,{})]})},Ce=he},76772:function(Le,ae,e){"use strict";e.d(ae,{Z:function(){return Ne}});var Y=e(22122),te=e(28481),$=e(96156),J=e(38819),N=e(15873),b=e(43061),z=e(73218),se=e(54549),Be=e(68855),Ze=e(57119),ye=e(40847),ue=e(68628),Fe=e(94184),x=e.n(Fe),Oe=e(69255),u=e(67294),De=e(53124),Me=e(5467),Z=e(96159),Q=e(6610),ce=e(5991),de=e(10379),ne=e(44144),Ae=function(j){(0,de.Z)(l,j);var t=(0,ne.Z)(l);function l(){var s;return(0,Q.Z)(this,l),s=t.apply(this,arguments),s.state={error:void 0,info:{componentStack:""}},s}return(0,ce.Z)(l,[{key:"componentDidCatch",value:function(i,S){this.setState({error:i,info:S})}},{key:"render",value:function(){var i=this.props,S=i.message,I=i.description,W=i.children,X=this.state,w=X.error,A=X.info,c=A&&A.componentStack?A.componentStack:null,re=typeof S=="undefined"?(w||"").toString():S,oe=typeof I=="undefined"?c:I;return w?u.createElement(Ne,{type:"error",message:re,description:u.createElement("pre",null,oe)}):W}}]),l}(u.Component),je=Ae,a=function(j,t){var l={};for(var s in j)Object.prototype.hasOwnProperty.call(j,s)&&t.indexOf(s)<0&&(l[s]=j[s]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(j);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(j,s[i])&&(l[s[i]]=j[s[i]]);return l},fe={success:J.Z,info:ye.Z,error:b.Z,warning:Be.Z},Ee={success:N.Z,info:ue.Z,error:z.Z,warning:Ze.Z},Pe=function(t){var l=t.description,s=t.icon,i=t.prefixCls,S=t.type,I=(l?Ee:fe)[S]||null;return s?(0,Z.wm)(s,u.createElement("span",{className:"".concat(i,"-icon")},s),function(){return{className:x()("".concat(i,"-icon"),(0,$.Z)({},s.props.className,s.props.className))}}):u.createElement(I,{className:"".concat(i,"-icon")})},Se=function(t){var l=t.isClosable,s=t.closeText,i=t.prefixCls,S=t.closeIcon,I=t.handleClose;return l?u.createElement("button",{type:"button",onClick:I,className:"".concat(i,"-close-icon"),tabIndex:0},s?u.createElement("span",{className:"".concat(i,"-close-text")},s):S):null},ve=function(t){var l,s=t.description,i=t.prefixCls,S=t.message,I=t.banner,W=t.className,X=W===void 0?"":W,w=t.style,A=t.onMouseEnter,c=t.onMouseLeave,re=t.onClick,oe=t.afterClose,me=t.showIcon,Ie=t.closable,ge=t.closeText,k=t.closeIcon,Te=k===void 0?u.createElement(se.Z,null):k,v=t.action,K=a(t,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),pe=u.useState(!1),he=(0,te.Z)(pe,2),Ce=he[0],r=he[1],h=u.useRef(),m=u.useContext(De.E_),T=m.getPrefixCls,y=m.direction,d=T("alert",i),O=function(g){var G;r(!0),(G=K.onClose)===null||G===void 0||G.call(K,g)},V=function(){var g=K.type;return g!==void 0?g:I?"warning":"info"},q=ge?!0:Ie,R=V(),L=I&&me===void 0?!0:me,U=x()(d,"".concat(d,"-").concat(R),(l={},(0,$.Z)(l,"".concat(d,"-with-description"),!!s),(0,$.Z)(l,"".concat(d,"-no-icon"),!L),(0,$.Z)(l,"".concat(d,"-banner"),!!I),(0,$.Z)(l,"".concat(d,"-rtl"),y==="rtl"),l),X),_=(0,Me.Z)(K);return u.createElement(Oe.Z,{visible:!Ce,motionName:"".concat(d,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(g){return{maxHeight:g.offsetHeight}},onLeaveEnd:oe},function(D){var g=D.className,G=D.style;return u.createElement("div",(0,Y.Z)({ref:h,"data-show":!Ce,className:x()(U,g),style:(0,Y.Z)((0,Y.Z)({},w),G),onMouseEnter:A,onMouseLeave:c,onClick:re,role:"alert"},_),L?u.createElement(Pe,{description:s,icon:K.icon,prefixCls:d,type:R}):null,u.createElement("div",{className:"".concat(d,"-content")},S?u.createElement("div",{className:"".concat(d,"-message")},S):null,s?u.createElement("div",{className:"".concat(d,"-description")},s):null),v?u.createElement("div",{className:"".concat(d,"-action")},v):null,u.createElement(Se,{isClosable:!!q,closeText:ge,prefixCls:d,closeIcon:Te,handleClose:O}))})};ve.ErrorBoundary=je;var Ne=ve},17462:function(Le,ae,e){"use strict";var Y=e(38663),te=e.n(Y),$=e(3178),J=e.n($)}}]);
