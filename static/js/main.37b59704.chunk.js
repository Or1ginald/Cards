(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navigation_nav__241z0",wrap:"Navigation_wrap__demD8",listItem:"Navigation_listItem__aBWsF",navElement:"Navigation_navElement__29Vwh",p:"Navigation_p__9Q_7E",navList:"Navigation_navList__z2UR2"}},15:function(e,t,n){e.exports={letterImg:"ConfirmPassword_letterImg__2N3rI",errorImg:"ConfirmPassword_errorImg__3qq5C",heading:"ConfirmPassword_heading__2gXl4"}},16:function(e,t,n){e.exports={mainContainer:"Page_error_404_mainContainer__v4xGI",linkContainer:"Page_error_404_linkContainer__16-JD"}},2:function(e,t,n){e.exports={mainContainer:"Common_mainContainer__1t-zw",contentWrap:"Common_contentWrap__1Axzh",content:"Common_content__UidQH",btn:"Common_btn__1nWkw",inputEmail:"Common_inputEmail__2Um59",inputPassword:"Common_inputPassword__3GoZh",inputCentering:"Common_inputCentering__-eDhT"}},20:function(e,t,n){e.exports={app:"App_app__2aOdL",layout:"App_layout__2S8fS",main:"App_main__24PHL"}},24:function(e,t,n){e.exports={superInput:"CustomInputText_superInput__K8brJ",input:"CustomInputText_input__Ry5T4",errorInput:"CustomInputText_errorInput__2d0Po",error:"CustomInputText_error__3R8jT",inputWrap:"CustomInputText_inputWrap__3zwmg"}},36:function(e,t,n){e.exports={loader:"Preloader_loader__2syPF"}},37:function(e,t,n){e.exports={rememberMeInput:"Login_rememberMeInput__1zYYI"}},38:function(e,t,n){e.exports={btns:"Registrations_btns__HPNCD"}},39:function(e,t,n){e.exports={range:"Range_range__2Bftj"}},45:function(e,t,n){},7:function(e,t,n){e.exports={wrapper:"Table_wrapper__Q6n57",leftBlock:"Table_leftBlock__1RTP-",btns:"Table_btns__gIZA8",rightBlock:"Table_rightBlock__2kslH",decks:"Table_decks__1krzl",element:"Table_element__28FA6",elementPart:"Table_elementPart__aB51_",tableCaption:"Table_tableCaption__16t_c",captionElement:"Table_captionElement__3xb70",btn:"Table_btn__4zGgo",searchInputSection:"Table_searchInputSection__297PX",inputSearch:"Table_inputSearch__1zU9D"}},71:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),i=n(19),s=n.n(i),o=(n(45),n(5)),l=n(8),d=n(6),u=n(3),j=n(20),b=n.n(j),O=n.p+"static/media/error404.688fee4d.gif",p=n(16),h=n.n(p),m=n(0),_=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:h.a.mainContainer,children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:O,alt:"error404",className:h.a.page_404})}),Object(m.jsxs)("div",{className:h.a.linkContainer,children:[" ",Object(m.jsx)(l.b,{to:"/profile",className:h.a.link,children:"Back to home"})]})]})})},x=n(12),f=n.n(x),v=o.c,g=function(e){var t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],r=n[1];return{value:a,handleValue:function(e){return r(e.target.value)},resetValue:function(){return r(e)}}},N={},S=n(4),E=n(35),C=n.n(E).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),I=function(e){return C.post("auth/login",e)},R=function(){return C.delete("auth/me",{})},T=function(){return C.post("auth/me")},w=function(e){return C.post("auth/register",e)},P={status:"idle",error:null,isInitialized:!1},k=function(e){return{type:"APP/SET_STATUS",status:e}},A={isAuth:!1,error:null},y=function(e){return{type:"LOGIN/SET_AUTH_LOGIN_DATA",isAuth:e}},G=function(e){return{type:"LOGIN/SET_ERROR_MESSAGE",error:e}},F={_id:null,avatar:null,name:null,email:null,rememberMe:!1},L=function(e){return e.login.isAuth},D=function(e){return e.login.error},U=function(e){return e.app.isInitialized},W=function(e){return e.app.status},M=n(24),V=n.n(M),z=Object(c.memo)((function(e){var t=e.placeholder,n=e.typeInput,a=void 0===n?"text":n,c=e.className,r=e.value,i=e.onChange,s=e.name;return Object(m.jsx)("div",{className:V.a.inputWrap,children:Object(m.jsx)("input",{type:a,name:s,value:r,onChange:i,placeholder:t,className:null!==c&&void 0!==c?c:V.a.input,autoComplete:"off",spellCheck:!1,"aria-autocomplete":"list"})})})),B=n(36),H=n.n(B),Z=n.p+"static/media/preloader1.9c1d25d2.gif",K=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:H.a.loader,src:Z,alt:"preloader"})})},J=n(37),Y=n.n(J);!function(e){e.REGISTRATION="/registration",e.LOGIN="/login",e.PROFILE="/profile",e.CONFIRM_PASSWORD="/confirmPassword/*",e.POPUP="/popup",e.CREATE_NEW_PASSWORD="/createNewPassword/:token",e.PAGE_404="/*"}(a||(a={}));var $=n(2),Q=n.n($),q=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],i=g(""),s=i.value,j=i.handleValue,b=g(""),O=b.value,p=b.handleValue,h=Object(o.b)(),_=v(L),x=v(D),f=v(W);return _?Object(m.jsx)(u.a,{to:a.PROFILE}):Object(m.jsx)("div",{className:Q.a.mainContainer,children:"loading"===f?Object(m.jsx)(K,{}):Object(m.jsx)("div",{className:Q.a.content,children:Object(m.jsxs)("div",{className:Q.a.contentWrap,children:[Object(m.jsx)("h2",{children:" Login "}),Object(m.jsx)(z,{onChange:j,value:s,placeholder:"Email",typeInput:"text"}),Object(m.jsx)(z,{placeholder:"password",typeInput:"password",value:O,onChange:p}),x?Object(m.jsxs)("div",{style:{color:"red",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},children:[" ",x," "]}):"",Object(m.jsxs)("div",{className:Y.a.rememberMeInput,children:["remember me",Object(m.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){return r(e.currentTarget.checked)}})]}),Object(m.jsx)("div",{children:Object(m.jsx)(l.b,{to:a.CONFIRM_PASSWORD,children:" Forgot password "})}),Object(m.jsx)("button",{onClick:function(){var e;h((e={email:s,password:O,rememberMe:n},function(t){t(k("loading")),I(e).then((function(){t(y(!0)),t(k("succeeded"))})).catch((function(e){var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(G(n)),t(k("failed"))})).finally((function(){t(k("idle"))}))}))},className:Q.a.btn,children:"Sign In"}),Object(m.jsx)("p",{children:" Do not have an account? "}),Object(m.jsx)(l.b,{to:a.REGISTRATION,children:" Sign Up "})]})})})},X=function(){var e=v(L),t=v(W),n=Object(o.b)();return e?Object(m.jsx)("div",{className:Q.a.mainContainer,children:"loading"===t?Object(m.jsx)(K,{}):Object(m.jsxs)("div",{className:Q.a.content,children:[Object(m.jsx)("h2",{children:" Profile "}),e?Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:Q.a.btn,onClick:function(){n((function(e){e(k("loading")),R().then((function(){e(y(!1)),e(G("")),e(k("idle"))}))}))},children:"Log out"})}):Object(m.jsx)(l.c,{to:a.LOGIN,children:"Login"})]})}):Object(m.jsx)(u.a,{to:a.LOGIN})},ee=function(e){return C.post("auth/forgot",e)},te=function(e){return C.post("auth/set-new-password",e)},ne={isFetching:!1,error:null,isSignUp:!1},ae=function(e){return{type:"REGISTRATION/IS_FETCHING",isFetching:e}},ce=function(e){return{type:"RECOVERY/ERROR",payload:{error:e}}},re=n(38),ie=n.n(re),se=function(e){var t=e.email,n=e.handleEmail,a=e.error,c=e.password,r=e.handlePassword,i=e.handleConfirmPassword,s=e.onSendButtonClick,o=e.isFetching;return Object(m.jsx)("div",{className:Q.a.mainContainer,children:Object(m.jsx)("div",{className:Q.a.content,children:Object(m.jsxs)("div",{className:Q.a.contentWrap,children:[Object(m.jsx)("h2",{children:"Registration"}),Object(m.jsx)("span",{children:a}),Object(m.jsx)(z,{placeholder:"Email",typeInput:"email",onChange:n,value:t,name:"user[email]"}),Object(m.jsx)(z,{placeholder:"Password",typeInput:"password",onChange:r,value:c,name:"user[password]"}),Object(m.jsx)(z,{placeholder:"Confirm Password",typeInput:"password",onChange:i,value:c,name:"user[password]"}),Object(m.jsx)("p",{children:" Have fun! "}),Object(m.jsxs)("div",{className:ie.a.btns,children:[Object(m.jsx)("button",{className:Q.a.btn,children:"Cancel"}),Object(m.jsx)("button",{className:Q.a.btn,onClick:s,disabled:o,children:"Create"})]})]})})})},oe=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},le=function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(e)},de=function(){var e=g(""),t=e.value,n=e.handleValue,c=g(""),r=c.value,i=c.handleValue,s=g(""),l=s.value,d=s.handleValue,j=Object(o.c)((function(e){return e.signUp.error})),b=Object(o.c)((function(e){return e.signUp.isFetching})),O=Object(o.c)((function(e){return e.signUp.isSignUp})),p=Object(o.b)(),h={email:t,password:r};return O?Object(m.jsx)(u.a,{to:a.LOGIN}):Object(m.jsx)(se,{email:t,handleEmail:n,password:r,handlePassword:i,handleConfirmPassword:d,isFetching:b,onSendButtonClick:function(){var e;r!==l&&p(ce(j)),le(r)&&oe(t)&&p((e=h,function(t){t(ae(!0)),w(e).then((function(){t({type:"REGISTRATION/IS_SIGNUP_SUCCESSFUL",isSignUpSuccessful:!0})})).catch((function(e){t(ce(e.response.data.error))})).finally((function(){t(ae(!1))}))}))},error:j})},ue=[{id:1,title:"registration",link:a.REGISTRATION},{id:2,title:"login",link:a.LOGIN},{id:3,title:"profile",link:a.PROFILE},{id:4,title:"confirmPassword",link:a.CONFIRM_PASSWORD},{id:5,title:"popup",link:a.POPUP},{id:6,title:"createNewPassword",link:a.CREATE_NEW_PASSWORD},{id:7,title:"page404",link:a.PAGE_404}],je=function(){return Object(m.jsx)("div",{className:f.a.nav,children:Object(m.jsx)("div",{className:f.a.wrap,children:Object(m.jsx)("div",{className:f.a.navList,children:ue.map((function(e){var t=e.id,n=e.title,a=e.link;return Object(m.jsx)(l.c,{className:f.a.listItem,to:a,children:Object(m.jsx)("div",{className:f.a.navElement,children:n})},t)}))})})})},be={errorValidation:null,errorNetwork:null},Oe=function(e){return{type:"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE",errorValidation:e}},pe=function(e){return{type:"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE",errorNetwork:e}},he=function(e){return e.errorMessage.errorNetwork},me=function(e){return e.errorMessage.errorValidation},_e=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),s=i[0],j=i[1],b=Object(o.b)(),O=v(me),p=v(he),h=v(W),_={email:s,from:"test-front-admin <samutic40@gmail.com>",message:"<div style='background-color: #ffd500; \npadding: 15px; \nborder-color: #ff9900; \nwidth: 250px;\nheight: 30px'> \npassword recovery link: <a href='https://or1ginald.github.io/gameCards/#/confirmPassword/$token$'> recovery link </a></div>"};return n?Object(m.jsx)(u.a,{to:"/popup"}):Object(m.jsx)("div",{className:Q.a.mainContainer,children:"loading"===h?Object(m.jsx)(K,{}):Object(m.jsx)("div",{className:Q.a.content,children:Object(m.jsxs)("div",{className:Q.a.contentWrap,children:[Object(m.jsx)("h2",{children:"Forgot your password?"}),O&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",O," "]}),p&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",p," "]}),Object(m.jsx)("div",{className:Q.a.inputCentering,children:Object(m.jsx)("input",{placeholder:"Email",type:"email",className:Q.a.inputEmail,onChange:function(e){j(e.currentTarget.value),b(Oe("")),b(pe(""))}})}),Object(m.jsx)("p",{children:" Enter your email and we will send you further instructions"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:Q.a.btn,onClick:function(){oe(s)?(b(function(e,t){return function(n){n(k("loading")),ee(e).then((function(){t(!0),n(k("succeeded"))})).catch((function(e){n(k("succeeded"));var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(pe(t))}))}}(_,a)),j("")):b(Oe("invalid email ;-("))},children:"send instructions"})}),Object(m.jsx)("span",{children:"Did you remember your password?"}),Object(m.jsx)(l.b,{to:"/login",children:" Try logging in "})]})})})},xe=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),s=i[0],l=i[1],j=Object(o.b)(),b=v(me),O=v(he),p=v(W),h=Object(u.h)().token;console.log("token",h);var _={password:s,resetPasswordToken:h};return n?Object(m.jsx)(u.a,{to:"/login"}):Object(m.jsx)("div",{className:Q.a.mainContainer,children:"loading"===p?Object(m.jsx)(K,{}):Object(m.jsx)("div",{className:Q.a.content,children:Object(m.jsxs)("div",{className:Q.a.contentWrap,children:[Object(m.jsx)("h2",{children:"Create new password"}),b&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",b," "]}),O&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",O," "]}),Object(m.jsx)("div",{className:Q.a.inputCentering,children:Object(m.jsx)("input",{placeholder:"Password",type:"password",className:Q.a.inputPassword,onChange:function(e){l(e.currentTarget.value),j(Oe("")),j(pe(""))}})}),Object(m.jsx)("p",{children:" Create new password and we will send you further instructions to email"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:Q.a.btn,onClick:function(){le(s)?(j(k("loading")),j(function(e,t){return function(n){te(e).then((function(){t(!0)})).catch((function(e){var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(pe(t))}))}}(_,a)),j(k("succeeded")),l("")):j(Oe("invalid password ;-("))},children:"Create new password"})})]})})})},fe=n.p+"static/media/letter.3761fe05.png",ve=n(15),ge=n.n(ve),Ne=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:Q.a.mainContainer,children:Object(m.jsxs)("div",{className:Q.a.content,children:[Object(m.jsx)("img",{className:ge.a.letterImg,src:fe,alt:"letter"}),Object(m.jsxs)("div",{className:Q.a.contentWrap,children:[Object(m.jsx)("h2",{className:ge.a.heading,children:"Check Email"}),Object(m.jsx)("p",{children:"We have sent the Email with instructions to your email "})]})]})})})},Se=(n.p,n(25)),Ee=function(){return C.get("cards/pack")},Ce=function(e){return C.delete("cards/pack/?id=".concat(e))},Ie=[],Re=n(39),Te=n.n(Re),we=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{children:[n,Object(m.jsx)("input",{type:"range",onChange:function(e){a(+e.currentTarget.value)},value:n,className:Te.a.range})]})},Pe=n(7),ke=n.n(Pe),Ae=function(){var e=Object(o.b)();Object(c.useEffect)((function(){e((function(e){Ee().then((function(t){console.log(t.data),e({type:"FETCH_DECKS",decks:t.data.cardPacks})})).catch((function(e){console.log(e.data)}))}))}),[e]);var t=Object(o.c)((function(e){return e.decks})),n=function(t,n){e(function(e,t){return function(n){Ce(e).then((function(e){console.log("res.data.cardPacks[index]._id",e.data.cardPacks[0]._id),n(function(e){return{type:"REMOVE_DECK",id:e}}(e.data.cardPacks[t]._id))})).catch((function(e){console.log(e.data)}))}}(t,n))};return Object(m.jsxs)("div",{className:ke.a.wrapper,children:[Object(m.jsxs)("div",{className:ke.a.leftBlock,children:[Object(m.jsxs)("div",{className:ke.a.btns,children:[Object(m.jsx)("button",{className:Q.a.btn,children:"My"}),Object(m.jsx)("button",{className:Q.a.btn,children:"All"})]}),Object(m.jsx)("span",{children:"Number of cards"}),Object(m.jsx)(we,{})]}),Object(m.jsx)("div",{className:ke.a.rightBlock,children:Object(m.jsxs)("div",{className:ke.a.decks,children:[Object(m.jsx)("span",{children:" Packs list "}),Object(m.jsxs)("div",{className:ke.a.searchInputSection,children:[Object(m.jsx)("input",{className:ke.a.inputSearch,id:"decks",placeholder:"Search",type:"search"}),Object(m.jsx)("button",{className:Q.a.btn,children:"Add new pack"})]}),Object(m.jsxs)("div",{className:ke.a.tableCommon,children:[Object(m.jsxs)("div",{className:ke.a.tableCaption,children:[Object(m.jsx)("div",{className:ke.a.captionElement,children:"Name"}),Object(m.jsx)("div",{className:ke.a.captionElement,children:"CardsCount"}),Object(m.jsx)("div",{className:ke.a.captionElement,children:"Updated"})]}),Object(m.jsx)("div",{className:ke.a.tableRow,children:t.map((function(e,t){return Object(m.jsxs)("div",{className:ke.a.element,children:[Object(m.jsx)("div",{className:ke.a.elementPart,children:e.name}),Object(m.jsx)("div",{className:ke.a.elementPart,children:e.cardsCount}),Object(m.jsx)("div",{className:ke.a.elementPart,children:e.updated}),Object(m.jsx)("button",{className:ke.a.btn,children:"update"}),Object(m.jsx)("button",{className:ke.a.btn,onClick:function(){return n(e._id,t)},children:"delete"})]},1e5*Math.random())}))})]})]})})]})},ye=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(Ae,{})})},Ge=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],i=v(U),s=Object(o.b)();if(Object(c.useEffect)((function(){s((function(e){T().then((function(){e(y(!0))})).finally((function(){e({type:"APP/SET_IS_INITIALIZED",isInitialized:!0})}))}))}),[]),!i)return Object(m.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(m.jsx)(K,{})});return Object(m.jsx)("div",{className:b.a.app,children:Object(m.jsxs)("div",{className:b.a.layout,children:[Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:Q.a.btn,onClick:function(){r(!n)},children:"Show menu"})}),!0===n?Object(m.jsx)(je,{}):Object(m.jsx)("div",{className:f.a.nav}),Object(m.jsx)("div",{className:b.a.main,children:Object(m.jsxs)(u.d,{children:[Object(m.jsx)(u.b,{path:a.LOGIN,element:Object(m.jsx)(q,{})}),Object(m.jsx)(u.b,{path:a.REGISTRATION,element:Object(m.jsx)(de,{})}),Object(m.jsx)(u.b,{path:a.PROFILE,element:Object(m.jsx)(X,{})}),Object(m.jsx)(u.b,{path:a.PAGE_404,element:Object(m.jsx)(_,{})}),Object(m.jsx)(u.b,{path:a.CONFIRM_PASSWORD,element:Object(m.jsx)(_e,{})}),Object(m.jsx)(u.b,{path:a.POPUP,element:Object(m.jsx)(Ne,{})}),Object(m.jsx)(u.b,{path:a.CREATE_NEW_PASSWORD,element:Object(m.jsx)(xe,{})}),Object(m.jsx)(u.b,{path:"/",element:Object(m.jsx)(ye,{})})]})})]})})},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Le=n(21),De=n(40),Ue=Object(Le.b)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},signUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION/IS_FETCHING":return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case"RECOVERY/ERROR":return Object(S.a)(Object(S.a)({},e),{},{error:t.payload.error});case"REGISTRATION/IS_SIGNUP_SUCCESSFUL":return Object(S.a)(Object(S.a)({},e),{},{isSignUp:t.isSignUpSuccessful});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET_AUTH_LOGIN_DATA":return Object(S.a)(Object(S.a)({},e),{},{isAuth:t.isAuth});case"LOGIN/SET_ERROR_MESSAGE":return Object(S.a)(Object(S.a)({},e),{},{error:t.error});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return"SET_USER_DATA"===t.type?Object(S.a)(Object(S.a)({},e),t.payload):e},errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE":return Object(S.a)(Object(S.a)({},e),{},{errorValidation:t.errorValidation});case"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE":return Object(S.a)(Object(S.a)({},e),{},{errorNetwork:t.errorNetwork});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_STATUS":return Object(S.a)(Object(S.a)({},e),{},{status:t.status});case"APP/SET_ERROR":return Object(S.a)(Object(S.a)({},e),{},{error:t.error});case"APP/SET_IS_INITIALIZED":return Object(S.a)(Object(S.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(S.a)({},e)}},decks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DECKS":return[].concat(Object(Se.a)(e),Object(Se.a)(t.decks));case"REMOVE_DECK":return e.filter((function(e){return e._id!==t.id}));default:return e}}}),We=Object(Le.c)(Ue,Object(Le.a)(De.a));window.store=We,s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(o.a,{store:We,children:Object(m.jsx)(Ge,{})})})}),document.getElementById("root")),Fe()}},[[71,1,2]]]);
//# sourceMappingURL=main.37b59704.chunk.js.map