(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6759],{65821:function(I,m,e){"use strict";e.d(m,{H:function(){return U}});var T=e(69610),P=e(54941),g=e(11768),v=function(){function u(s){(0,T.Z)(this,u),this.loader=s,console.log(s)}return(0,P.Z)(u,[{key:"upload",value:function(){var n=this;return this.loader.file.then(function(l){return new Promise(function(M,r){n._initRequest(),n._initListeners(M,r,l),n._sendRequest(l)})})}},{key:"abort",value:function(){this.xhr&&this.xhr.abort()}},{key:"_initRequest",value:function(){var n=this.xhr=new XMLHttpRequest;n.open("POST","http://api.aws.yinuoerp.com/index.php/base/upload",!0),n.setRequestHeader("token",g.ZP.load("userInfo")?g.ZP.load("userInfo").token:""),n.responseType="json"}},{key:"_initListeners",value:function(n,l,M){var r=this.xhr,D=this.loader,f="\u65E0\u6CD5\u4E0A\u4F20\u6587\u4EF6: ".concat(M.name,".");r.addEventListener("error",function(){return l(f)}),r.addEventListener("abort",function(){return l()}),r.addEventListener("load",function(){var _=r.response;if(!_.success||!_||_.error)return l(_&&!_.success?_.msg:f);n({default:_.data.src})}),r.upload&&r.upload.addEventListener("progress",function(_){_.lengthComputable&&(D.uploadTotal=_.total,D.uploaded=_.loaded)})}},{key:"_sendRequest",value:function(n){var l=new FormData;l.append("file",n),this.xhr.send(l)}}]),u}();function U(u){u.plugins.get("FileRepository").createUploadAdapter=function(s){return new v(s)}}},78656:function(I,m,e){"use strict";var T=e(58024),P=e(91894),g=e(9715),v=e(55843),U=e(18446),u=e(90860),s=e(39428),n=e(3182),l=e(34792),M=e(48086),r=e(2824),D=e(67294),f=e(72757),_=e.n(f),Y=e(5234),H=e.n(Y),S=e(952),z=e(5966),G=e(86615),Q=e(34540),O=e(2521),V=e(75362),N=e(85224),X=e(65821),j=e(11316),$=e(13623),K=e(66822),J=e(30381),p=e.n(J),o=e(85893),k=function(A){var R=A.module,a=A.tablename,c=A.id,L=A.parent,w=(0,D.useState)({}),W=(0,r.Z)(w,2),t=W[0],q=W[1],E=[],b="";a=="think"?(E=[{value:"0",label:"\u6536\u96C6"},{value:"1",label:"\u91C7\u7EB3"},{value:"2",label:"\u5B9E\u73B0"},{value:"-1",label:"\u9000\u7A3F"}],b="<h1><strong>1\u3001\u4EA7\u54C1\u5C5E\u6027</strong></h1><p>(1)\u8FD9\u662F\u4E00\u4E2A\u65B0\u4EA7\u54C1\uFF1F<p>(2)\u8FD9\u662F\u5728\u6211\u4EEC\u73B0\u6709\u4EA7\u54C1\u4E0A\u589E\u52A0\u529F\u80FD\uFF1F\u54EA\u4E2A\u4EA7\u54C1\u7684\u4EC0\u4E48\u4F4D\u7F6E\u589E\u52A0\u4EC0\u4E48\u6A21\u5757\uFF1F</p><p>(3)\u8FD9\u662F\u6211\u4EEC\u73B0\u6709\u4EA7\u54C1\u7684\u6A21\u5757\u8FED\u4EE3\uFF1F\u54EA\u4E2A\u6A21\u5757\uFF1F</p></p><br/><h1><strong>2\u3001\u9700\u6C42\u80CC\u666F</strong></h1> <p>\u901A\u8FC7\u8FD9\u4E2A\u9700\u6C42\u671F\u671B\u5E2E\u52A9\u5BA2\u6237\u89E3\u51B3\u4EC0\u4E48\u6837\u7684\u95EE\u9898\uFF1F\u8FBE\u5230\u4EC0\u4E48\u76EE\u7684\u5462\uFF1F</p><br/><h1><strong>3\u3001\u9700\u6C42\u52A8\u4F5C</strong></h1>\u8FD9\u4E2A\u9700\u6C42\u4E3B\u8981\u5305\u62EC\u54EA\u51E0\u4E2A\u65B9\u9762\uFF1F<br/><h1><strong><br/>4\u3001\u65F6\u95F4\u548C\u4F18\u5148\u7EA7</strong></h1><p>\u8FD9\u4E2A\u9700\u6C42\u7684\u4F18\u5148\u7EA7\u662F\u4EC0\u4E48\u6837\u7684\uFF1F\u671F\u671B\u4EC0\u4E48\u65F6\u95F4\u53EF\u4EE5\u51FA\u4EA7\u54C1\uFF1F\u671F\u671B\u4EC0\u4E48\u65F6\u95F4\u53EF\u4EE5\u4E0A\u7EBF?<br/><br/><br/>"):a=="demand"?E=[{value:"0",label:"\u63A8\u8FDB"},{value:"1",label:"\u8BBE\u8BA1"},{value:"2",label:"\u5F00\u53D1"},{value:"3",label:"\u5B9E\u73B0"},{value:"-1",label:"\u9000\u7A3F"}]:a=="coding"?E=[{value:"0",label:"\u8BA1\u5212"},{value:"1",label:"\u5F00\u53D1"},{value:"2",label:"\u6D4B\u8BD5"},{value:"3",label:"\u5B8C\u6210"},{value:"-1",label:"\u9000\u7A3F"}]:a=="testing"||a=="testitem"?(a=="testing"&&(b="<h1><strong>1\u3001\u6D4B\u8BD5\u7F51\u5740</strong></h1><br/><h1><strong>2\u3001\u6D4B\u8BD5\u8303\u56F4</strong></h1><br/><h1><strong>3\u3001\u5173\u8054\u9700\u6C42</strong></h1><br/><h1><strong>4\u3001\u6D4B\u8BD5\u8D26\u53F7</strong></h1><br/>\u5982\u679C\u6CA1\u6709\u53EF\u4EE5\u4E0D\u63D0\u4F9B"),E=[{value:"0",label:"\u6D4B\u8BD5\u4E2D"},{value:"1",label:"\u5B8C\u6210"},{value:"-1",label:"\u9000\u7A3F"}]):a=="bug"?(E=[{value:"0",label:"\u672A\u89E3\u51B3"},{value:"1",label:"\u89E3\u51B3\u4E2D"},{value:"2",label:"\u5DF2\u89E3\u51B3"},{value:"-1",label:"\u9000\u7A3F"}],b="<h1><strong>1\u3001\u95EE\u9898\u4F4D\u7F6E</strong></h1><br/><h1><strong>2\u3001\u95EE\u9898\u63CF\u8FF0</strong></h1><br/><h1><strong>3\u3001\u671F\u671B\u7ED3\u679C</strong></h1>"):a=="publish"&&(E=[{value:"0",label:"\u5DF2\u53D1\u5E03"}],b="<h1><strong>1\u3001\u53D1\u5E03\u7248\u672C\u53F7</strong></h1><br/><h1><strong>2\u3001\u53D1\u5E03\u5185\u5BB9</strong></h1><br/><h1><strong>3\u3001\u4EE3\u7801Git\u5206\u652F</strong></h1>");var ee=(0,D.useState)(b),y=(0,r.Z)(ee,2),x=y[0],F=y[1],te={extraPlugins:[X.H],heading:{options:[{model:"paragraph",title:"\u6B63\u6587",class:"ck-heading_paragraph"},{model:"heading1",view:{name:"h1",styles:{color:"#E53333","font-size":"22px"},classes:["Heading_Class","H_1"]},title:"\u6807\u98981",class:"ck-content-h1",converterPriority:"high"},{model:"heading2",view:{name:"h2",styles:{color:"#337FE5","font-size":"20px"},classes:["Heading_Class","H_2"]},title:"\u6807\u98982",class:"ck-content-h2",converterPriority:"high"},{model:"heading3",view:{name:"h3",styles:{color:"#009900","font-size":"18px"},classes:["Heading_Class","H_3"]},title:"\u6807\u98983",class:"ck-content-h3",converterPriority:"high"},{model:"heading4",view:{name:"h4",styles:{color:"#FF9900","font-size":"16px"},classes:["Heading_Class","H_4"]},title:"\u6807\u98984",class:"ck-content-h4",converterPriority:"high"}]},toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","blockQuote","insertTable","|","imageUpload","undo","redo"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]}};if(c){var ae=(0,O.QT)(K.dM,{manual:!0,onSuccess:function(h,i){q(h.row),F(h.row.content)}}),ne=ae.run;(0,D.useEffect)(function(){ne({id:c,tablename:a})},[])}var se=(0,O.QT)(K.R2,{manual:!0,onSuccess:function(){M.default.success("\u63D0\u4EA4\u6210\u529F"),setTimeout(function(){L>0&&(a=="testitem"||a=="bug")?O.m8.push({pathname:"/it/coding/testing/detail/".concat(L)}):c>0?O.m8.push({pathname:R?"/it/".concat(R,"/").concat(a,"/detail/").concat(c):"/it/".concat(a,"/detail/").concat(c)}):O.m8.push({pathname:R?"/it/"+R+"/"+a:"/it/"+a})},400)}}),oe=se.run,_e=function(){var C=(0,n.Z)((0,s.Z)().mark(function h(i){var d,Z;return(0,s.Z)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:d=i.date,i.join_time||(i.join_time=p()(t.join_time).format("YYYY-MM-DD")),Z={id:c,tablename:a,content:x,start_time:d&&d[0]?d[0]:t.id>0?p()(t.start_time*1e3).format("YYYY-MM-DD"):"",end_time:d&&d[1]?d[1]:t.id>0?p()(t.end_time*1e3).format("YYYY-MM-DD"):"",parent:L},oe(Object.assign(i,Z));case 4:case"end":return B.stop()}},h)}));return function(i){return C.apply(this,arguments)}}(),re=c?!(t&&t.id):!1,le=t.id>0?{title:t==null?void 0:t.title,date:t.start_time>0?[p()(t.start_time*1e3).format("YYYY-MM-DD"),p()(t.end_time*1e3).format("YYYY-MM-DD")]:[],product_ids:t==null?void 0:t.product_ids,deal_uids:t==null?void 0:t.deal_uids,related_uids:t==null?void 0:t.related_uids,content:t==null?void 0:t.content,status:t==null?void 0:t.status}:{status:"0"};return re?(0,o.jsx)(u.Z,{active:!0}):(0,o.jsx)(V.ZP,{children:(0,o.jsx)(P.Z,{bordered:!1,children:(0,o.jsxs)(S.ZP,{name:"basic",layout:"Horizontal",labelCol:{span:3},wrapperCol:{span:21},initialValues:le,submitter:{render:function(h,i){return(0,o.jsx)(N.Z,{children:i})}},onFinish:_e,children:[(0,o.jsx)(z.Z,{width:"md",label:"\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}],placeholder:"\u4E00\u53E5\u8BDD\u7B80\u8FF0"}),(0,o.jsx)($.Z,{label:"\u6240\u5C5E\u4EA7\u54C1",name:"product_ids",mode:"multiple",_require:!0}),(0,o.jsx)(j.Z,{label:"\u5904\u7406\u4EBA",name:"deal_uids",mode:"multiple",_require:!0}),(0,o.jsx)(j.Z,{label:"\u5173\u8054\u4EBA",name:"related_uids",mode:"multiple",_require:!1}),(0,o.jsx)(G.Z.Group,{options:E,label:"\u6587\u6863\u72B6\u6001",name:"status",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6587\u6863\u72B6\u6001"}]}),(0,o.jsx)(Q.Z,{label:"\u4EFB\u52A1\u6392\u671F",width:"md",name:"date",placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}),(0,o.jsx)(v.Z.Item,{label:"\u6587\u6863\u5185\u5BB9",name:"content",children:(0,o.jsx)("div",{className:"docsEditor",children:(0,o.jsx)(f.CKEditor,{editor:H(),id:"editor",data:t.id?t.content:x,config:te,onChange:function(h,i){var d=i.getData();F(d)}})})})]})})})};m.Z=k},75738:function(I,m,e){"use strict";e.r(m),e.d(m,{FormAPP:function(){return v}});var T=e(67294),P=e(78656),g=e(85893),v=function(u){var s="coding",n=u.match.params.id;return(0,g.jsx)(P.Z,{tablename:s,module:"coding",id:n})};m.default=v}}]);
