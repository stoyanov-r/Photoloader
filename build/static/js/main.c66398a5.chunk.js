(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{26:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__1CQid",close:"Drawer_close__2S2nR",active:"Drawer_active__3Q_rY"}},29:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__2aok0",open:"MenuToggle_open__3dedg"}},33:function(e,t,n){e.exports={Button:"Button_Button__2VFwp",error:"Button_error__1eEqx",success:"Button_success__3JvEB",primary:"Button_primary__57u5D"}},34:function(e,t,n){e.exports={Auth:"Auth_Auth__3rZHx",AuthForm:"Auth_AuthForm__amknu"}},35:function(e,t,n){e.exports={Input:"Input_Input__2-xiF",invalid:"Input_invalid__2VxgL"}},36:function(e,t,n){e.exports={TopicList:"TopicList_TopicList__3K3Fy",center:"TopicList_center__2FMxF"}},37:function(e,t,n){e.exports={Loader:"Loader_Loader__m0ToH","lds-ring":"Loader_lds-ring__2HpZa",center:"Loader_center__1dgro"}},38:function(e,t,n){e.exports={Topic:"Topic_Topic__1lI_c",TopicWrapper:"Topic_TopicWrapper__2eBXI"}},39:function(e,t,n){e.exports={imageWrapper:"Task_imageWrapper__1pKxW",editButton:"Task_editButton__2FxlA"}},49:function(e,t,n){e.exports={Layout:"Layout_Layout__1sy0M"}},50:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2I6eT"}},54:function(e,t,n){e.exports={Photoloader:"Photoloader_Photoloader__A5iDa"}},55:function(e,t,n){e.exports={Previewer:"Previewer_Previewer__hAI0C"}},57:function(e,t,n){e.exports=n(86)},62:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),c=n.n(o),i=n(18),u=(n(62),n(4)),s=n(5),l=n(7),p=n(6),f=n(8),d=n(49),m=n.n(d),h=n(29),v=n.n(h),b=function(e){var t=[v.a.MenuToggle];return e.isOpened&&t.push(v.a.open),a.a.createElement("button",{className:t.join(" "),onClick:e.onMenuHandler})},O=n(26),y=n.n(O),g=n(50),j=n.n(g),E=function(e){return a.a.createElement("div",{className:j.a.Backdrop,onClick:e.onClose})},k=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"listRender",value:function(e){var t=this;return e.map((function(e,n){return a.a.createElement("li",{key:n},a.a.createElement(i.b,{to:e.to,exact:e.exact,activeClassName:y.a.active,onClick:t.props.onClose},e.label))}))}},{key:"render",value:function(){var e=[{to:"/",exact:!1,label:"Photoloader"}];this.props.isAuth?e.push({to:"/topics",exact:!0,label:"Topic List"},{to:"/logout",exact:!1,label:"Logout"}):e.push({to:"/auth",exact:!1,label:"Authentication"});var t=[y.a.Drawer];return this.props.isOpened||t.push(y.a.close),a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:t.join(" ")},a.a.createElement("ul",null,this.listRender(e))),this.props.isOpened?a.a.createElement(E,{onClose:this.props.onClose}):null)}}]),t}(a.a.Component),w=n(3),_="AUTH_SUCCESS",C="AUTH_ERROR",T="AUTH_LOGOUT",P="CLOSE_MENU",S="TOGGLE_MENU",D="CREATE_NEW_TASK",x="RESET_TOPIC",L="FETCH_TOPIC_START",I="FETCH_TOPICS_SUCCESS",A="FETCH_TOPIC_SUCCESS",H="FETCH_TOPIC_ERROR",U="TOGGLE_EDITOR",M="CHANGE_TASK",N="ADD_TASK";function F(e,t){return function(n){27===e.keyCode&&t&&n({type:P})}}var B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).toggleMenu=function(){n.props.onToggleMenu()},n.escFunc=function(e){n.props.escFunction(e,n.props.menu)},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunc,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunc,!1)}},{key:"render",value:function(){return a.a.createElement("div",{className:m.a.Layout},a.a.createElement(k,{isOpened:this.props.menu,onClose:this.toggleMenu,isAuth:this.props.isAuth}),a.a.createElement(b,{isOpened:this.props.menu,onMenuHandler:this.toggleMenu}),a.a.createElement("main",null,this.props.children))}}]),t}(a.a.Component);var R=Object(w.b)((function(e){return{isAuth:!!e.auth.token,menu:e.layout.menu}}),(function(e){return{escFunction:function(t,n){return e(F(t,n))},onToggleMenu:function(){return e({type:S})}}}))(B),V=n(20),W=n(9),q=n(2),K=n.n(q),G=n(12),J=n(33),X=n.n(J),Y=function(e){var t=[X.a.Button,X.a[e.type]];return a.a.createElement("button",{className:t.join(" "),onClick:e.onClick,disabled:e.disabled},e.children)},Q=n(34),z=n.n(Q),Z=n(35),$=n.n(Z);function ee(e){var t=e.valid,n=e.touched,r=e.shouldValidate;return!t&&n&&r}var te=function(e){var t=[$.a.Input],n=e.inputType||"text",r="".concat(n,"-").concat(Math.random());return ee(e)&&t.push($.a.invalid),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("label",{htmlFor:r},e.label),a.a.createElement("input",{type:n,id:r,value:e.value,onChange:e.onChange,placeholder:e.placeholder,autoComplete:"on",onKeyPress:e.onKeyPress}),ee(e)?a.a.createElement("span",null," ",e.errorMessage||"Enter valid value"," "):null)},ne=n(53),re=n.n(ne),ae=n(21),oe=n.n(ae),ce="AIzaSyAFgrTseYpYp_l8Ex-VOn_6Lntv9IAgpSI",ie="8TWaIHbRwxQdDs8aJZL2u1basW92, LKY8JiEVJQO1L9KekCrAsLLTmdP2".split(", ");function ue(e){return{type:_,token:e}}function se(e){return function(t){setTimeout((function(){return t(le())}),1e3*e)}}function le(){return localStorage.removeItem("expDate"),localStorage.removeItem("token"),localStorage.removeItem("userId"),{type:T}}function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={isFormValid:!1,formControls:{email:{value:"",label:"Email",type:"email",valid:!1,touched:!1,errorMessage:"Enter valid email",validation:{required:!0,email:!0}},password:{value:"",label:"Password",type:"password",valid:!1,touched:!1,errorMessage:"Enter valid password",validation:{required:!0,minLength:8}}}},n.sumbmitHandler=function(e){e.preventDefault()},n.loginHandler=Object(G.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.auth(n.state.formControls.email.value,n.state.formControls.password.value,!0);case 1:case"end":return e.stop()}}),e)}))),n.registerHandler=function(){n.props.auth(n.state.formControls.email.value,n.state.formControls.password.value,!1)},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=re.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"onChangeHandler",value:function(e,t){var n=fe({},this.state.formControls),r=fe({},n[t]);r.value=e.target.value,r.touched=!0,r.valid=this.validateControl(r.value,r.validation),n[t]=r;var a=!0;Object.keys(n).forEach((function(e){a=!0===n[e].valid&&a})),this.setState({formControls:n,isFormValid:a})}},{key:"renderInput",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var r=e.state.formControls[t];return a.a.createElement(te,{key:t+n,label:r.label,inputType:r.type,valid:r.valid,touched:r.touched,errorMessage:r.errorMessage,shouldValidate:!!r.validation,onChange:function(n){return e.onChangeHandler(n,t)}})}))}},{key:"render",value:function(){return console.log(this.props.securityError),a.a.createElement("div",{className:z.a.Auth},a.a.createElement("div",null,a.a.createElement("h1",null,"Authentication"),a.a.createElement("form",{onSubmit:this.sumbmitHandler,className:z.a.AuthForm},this.renderInput(),this.props.securityError&&a.a.createElement("p",null,"You do not have access"),a.a.createElement(Y,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"Login"),a.a.createElement(Y,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid},"Register"))))}}]),t}(r.Component);var me=Object(w.b)((function(e){return{securityError:e.auth.securityError}}),(function(e){return{auth:function(t,n,r){return e(function(e,t,n){return function(){var r=Object(G.a)(K.a.mark((function r(a){var o,c,i,u,s;return K.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o={email:e,password:t,returnSecureToken:!0},c=n?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(ce):"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(ce),r.next=4,oe.a.post(c,o);case 4:i=r.sent,u=i.data,s=new Date((new Date).getTime()+24e5*u.expiresIn),localStorage.setItem("expDate",s),localStorage.setItem("token",u.idToken),localStorage.setItem("userId",u.localId),ie.includes(u.localId)?(console.log("success"),a(ue(u.idToken)),a(se(u.expiresIn))):a({type:C});case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,n,r))}}}))(de),he=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return a.a.createElement(V.a,{to:"/"})}}]),t}(r.Component);var ve=Object(w.b)(null,(function(e){return{logout:function(){return e(le())}}}))(he),be=n(54),Oe=n.n(be);function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ge=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{validation:t,valid:!t,errorMessage:"Required field"})},je=function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n},Ee=function(e){return e.children};var ke=n(55),we=n.n(ke),_e=function(e){return a.a.createElement("div",{className:we.a.Previewer},a.a.createElement("div",null,e.imageUrls.map((function(e,t){return a.a.createElement("img",{src:e,alt:e,key:"image-".concat(t)})}))))};function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pe(){return{topic:ge({label:"Enter topic-name",value:""},{required:!0}),photoUrl:ge({label:"Paste photo's URL",value:""},{required:!1}),task:ge({label:"Enter task-name",value:""},{required:!0})}}var Se=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={isFormValid:!1,formControls:Pe(),photoUrls:[]},n.onCreateButtonHandler=function(){var e=Object(G.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n.props.createNewTopic();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onAddButtonHandler=function(e){e.preventDefault();var t=n.state.formControls,r=t.topic,a=t.task,o={topic:r.value,task:a.value,photoUrls:n.state.photoUrls};n.props.createNewTask(o),n.setState({isFormValid:!1,formControls:Pe(),photoUrls:[]})},n.onSubmitHandler=function(e){e.preventDefault()},n.onChangeHandler=function(e,t){var r=Te({},n.state.formControls),a=Te({},r[t]);a.value=e,a.touched=!0,a.valid=je(a.value,a.validation),r[t]=a;var o=!0;Object.keys(r).forEach((function(e){o=!0===r[e].valid&&o})),n.setState({formControls:r,isFormValid:o})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"keyPressHandler",value:function(e,t){if(13===e.which&&"photoUrl"===t.toString()){var n=this.state.photoUrls.concat(this.state.formControls.photoUrl.value),r=Te({},this.state.formControls);r.photoUrl.value="",this.setState({photoUrls:n,formControls:r})}}},{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var r=e.state.formControls[t];return a.a.createElement(Ee,{key:t+n},a.a.createElement(te,{label:r.label,value:r.value,valid:r.valid,touched:r.touched,errorMessage:r.errorMessage,shouldValidate:!!r.validation,onChange:function(n){return e.onChangeHandler(n.target.value,t)},onKeyPress:function(n){return e.keyPressHandler(n,t)}}),0===n?a.a.createElement("hr",null):null)}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:Oe.a.Photoloader},a.a.createElement("div",null,a.a.createElement("h1",null,"Photoloader"),a.a.createElement("form",{onSubmit:function(t){return 13!==t.keyCode&&e.onSubmitHandler(t)}},this.renderControls(),a.a.createElement(_e,{imageUrls:this.state.photoUrls}),a.a.createElement(Y,{type:"primary",onClick:this.onAddButtonHandler,disabled:!this.state.isFormValid},"Save task"),a.a.createElement(Y,{type:"success",onClick:this.onCreateButtonHandler,disabled:this.props.tasks.length<1},"Save topic"))))}}]),t}(r.Component);var De=Object(w.b)((function(e){return{tasks:e.photoloader.tasks}}),(function(e){return{createNewTask:function(t){return e(function(e){return{type:D,newTask:e}}(t))},createNewTopic:function(){return e(function(){var e=Object(G.a)(K.a.mark((function e(t,n){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.post("https://photoloader-71f22.firebaseio.com/topics.json",n().photoloader.tasks);case 2:t({type:x});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(Se),xe=n(36),Le=n.n(xe),Ie=n(37),Ae=n.n(Ie),He=function(){return a.a.createElement("div",{className:Ae.a.center},a.a.createElement("div",{className:Ae.a.Loader},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)))},Ue=oe.a.create({baseURL:"https://photoloader-71f22.firebaseio.com/"}),Me=function(){return function(){var e=Object(G.a)(K.a.mark((function e(t){var n,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Fe()),e.prev=1,e.next=4,Ue.get("/topics.json");case 4:n=e.sent,r=[],Object.keys(n.data).forEach((function(e,t){r.push({id:e,name:"TOPIC \u2116".concat(t+1)})})),t(Be(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(Ve(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},Ne=function(e){return function(){var t=Object(G.a)(K.a.mark((function t(n){var r,a;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Fe()),t.prev=1,t.next=4,Ue.get("/topics/".concat(e,".json"));case 4:r=t.sent,a=r.data,n(Re(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(Ve());case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()};function Fe(){return{type:L}}function Be(e){return{type:I,topics:e}}function Re(e){return{type:A,topic:e}}function Ve(e){return{type:H,error:e}}function We(e,t){return{type:M,index:e,newTask:t}}function qe(e){return{type:N,newTask:e}}var Ke=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"renderTopicList",value:function(){return this.props.topics.map((function(e){return console.dir(e),a.a.createElement("li",{key:e.id},a.a.createElement(i.b,{to:"/topics/"+e.id},e.name))}))}},{key:"componentDidMount",value:function(){this.props.fetchTopicList()}},{key:"render",value:function(){return a.a.createElement("div",{className:Le.a.TopicList},a.a.createElement("div",{className:Le.a.center},a.a.createElement("h1",null,"Topic List"),this.props.loading&&this.props.topics.length>0?a.a.createElement(He,null):a.a.createElement("ul",null," ",this.renderTopicList()," ")))}}]),t}(r.Component);var Ge=Object(w.b)((function(e){return{topics:e.topicList.topics,loading:e.topicList.loading}}),(function(e){return{fetchTopicList:function(){return e(Me())}}}))(Ke),Je=n(38),Xe=n.n(Je),Ye=n(22),Qe=n(39),ze=n.n(Qe);var Ze=Object(w.b)(null,(function(e){return{toggleEditor:function(){return e({type:U})},save:function(t,n,r){return e(function(e,t,n){return function(){var r=Object(G.a)(K.a.mark((function r(a,o){return K.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(We(t,n)),r.next=3,Ue.put("/topics/".concat(e,"/.json"),o().topicList.topic);case 3:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()}(t,n,r))}}}))((function(e){var t=e.task,n=t.topic,o=t.task,c=t.photoUrls,i=e.taskTemplate,u=e.topicId,s=e.index,l=e.save,p=Object(r.useState)(n||i.topic),f=Object(Ye.a)(p,2),d=f[0],m=f[1],h=Object(r.useState)(o||i.task),v=Object(Ye.a)(h,2),b=v[0],O=v[1],y=Object(r.useState)(c||i.photoUrls),g=Object(Ye.a)(y,2),j=g[0],E=g[1],k=Object(r.useState)(!1),w=Object(Ye.a)(k,2),_=w[0],C=w[1],T=Object(r.useState)(""),P=Object(Ye.a)(T,2),S=P[0],D=P[1];return a.a.createElement("div",null,_?a.a.createElement(te,{value:d,label:d,onChange:function(e){return m(e.target.value)}}):a.a.createElement("h3",null,d),_?a.a.createElement(te,{value:b,label:b,onChange:function(e){return O(e.target.value)}}):a.a.createElement("p",null,b),a.a.createElement("div",{className:ze.a.imageWrapper},j.map((function(e,t){return a.a.createElement("div",{key:n+t},a.a.createElement("img",{src:e,id:n+t,alt:e}),_&&a.a.createElement("button",{ident:t,className:ze.a.editButton,onClick:function(e){return function(e){var t=j.filter((function(t,n){return n!==+e}));E(t)}(e.target.attributes.ident.value)}}))}))),_?a.a.createElement(Ee,null,a.a.createElement(te,{label:"Paste photo's URL",value:S,onChange:function(e){return D(e.target.value)},onKeyPress:function(e){E(j.concat(e.target.value)),D("")}}),a.a.createElement(Y,{type:"success",onClick:function(){return l(u,s,{topic:d,task:b,photoUrls:j}),void C(!_)}},"Save")):a.a.createElement(Y,{type:"primary",onClick:function(){return C(!_)}},"Edit"))})),$e=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).taskTemplate={photoUrls:["https://image.shutterstock.com/image-vector/no-image-vector-isolated-on-260nw-1481369594.jpg"],topic:"Enter topic",task:"Enter task"},n.addHandler=function(){n.props.addTask(n.props.match.params.id,n.taskTemplate)},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTopicById(this.props.match.params.id)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:Xe.a.Topic},a.a.createElement("div",{className:Xe.a.TopicWrapper},a.a.createElement("h1",null,"Topic"),this.props.loading||!this.props.topic?a.a.createElement(He,null):a.a.createElement("div",null,this.props.topic.map((function(t,n){return a.a.createElement(Ze,{topicId:e.props.match.params.id,index:n,task:t||e.taskTemplate,taskTemplate:e.taskTemplate,key:t+n})}))),!this.props.isEdit&&a.a.createElement(Y,{type:"success",onClick:this.addHandler},"Add")))}}]),t}(a.a.Component);var et=Object(w.b)((function(e){return{loading:e.topicList.loading,topic:e.topicList.topic,isEdit:e.topicList.isEdit}}),(function(e){return{fetchTopicById:function(t){return e(Ne(t))},addTask:function(t,n){return e(function(e,t){return function(){var n=Object(G.a)(K.a.mark((function n(r,a){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(qe(t)),n.next=3,Ue.put("/topics/".concat(e,"/.json"),a().topicList.topic);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}(t,n))}}}))($e),tt=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=a.a.createElement(V.d,null,a.a.createElement(V.b,{path:"/topics/:id",component:et}),a.a.createElement(V.b,{path:"/auth",component:me}),a.a.createElement(V.b,{path:"/",exact:!0,component:De}),a.a.createElement(V.a,{to:"/"}));return this.props.isAuth&&(e=a.a.createElement(V.d,null,a.a.createElement(V.b,{path:"/logout",component:ve}),a.a.createElement(V.b,{path:"/topics/:id",component:et}),a.a.createElement(V.b,{path:"/topics",component:Ge}),a.a.createElement(V.b,{path:"/",exact:!0,component:De}),a.a.createElement(V.a,{to:"/"}))),a.a.createElement(R,null,e)}}]),t}(a.a.Component);var nt=Object(V.g)(Object(w.b)((function(e){return{isAuth:!!e.auth.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token"),n=localStorage.getItem("expDate"),r=(new Date(n).getTime()-new Date)/1e3,a=localStorage.getItem("userId");t&&ie.includes(a)?(e(ue(a)),e(se(r))):e(le())}))}}}))(tt));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rt=n(19),at=n(56);function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ct(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ot(Object(n),!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var it={token:null,securityError:!1};function ut(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function st(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ut(Object(n),!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var lt={menu:!1};function pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ft(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pt(Object(n),!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var dt={tasks:[]};function mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ht(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?mt(Object(n),!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var vt={topics:[],loading:!1,error:null,topic:null,isEdit:!1},bt=Object(rt.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return ct({},e,{token:t.token,securityError:!1});case C:return ct({},e,{securityError:!0});case T:return ct({},e,{token:null});default:return e}},layout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return st({},e,{menu:!1});case S:return st({},e,{menu:!e.menu});default:return e}},photoloader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return ft({},e.tasks,{tasks:e.tasks.concat(t.newTask)});case x:return ft({},e,{tasks:[]});default:return e}},topicList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return ht({},e,{loading:!0});case I:return ht({},e,{loading:!1,topics:t.topics});case H:return ht({},e,{loading:!1,topics:t.error});case A:return ht({},e,{loading:!1,topic:t.topic});case U:return ht({},e,{isEdit:!e.isEdit});case M:var n=e.topic;return n[t.index]=t.newTask,ht({},e,{topic:n});case N:var r=e.topic;return r.push(t.newTask),ht({},e,{topic:r});default:return e}}}),Ot="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):rt.d,yt=Object(rt.e)(bt,Ot(Object(rt.a)(at.a))),gt=a.a.createElement(w.a,{store:yt},a.a.createElement(i.a,null,a.a.createElement(nt,null)));c.a.render(gt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.c66398a5.chunk.js.map