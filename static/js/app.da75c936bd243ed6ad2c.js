webpackJsonp([1],{DBhB:function(e,t){},DH7x:function(e,t){},EVUe:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("div",{staticClass:"controls",on:{click:function(t){e.navigation("Controls")}}},[e._v("🚪")]),e._v(" "),n("div",{staticClass:"logs",on:{click:function(t){e.navigation("Logs")}}},[e._v("📖")]),e._v(" "),n("div",{staticClass:"users",on:{click:function(t){e.navigation("Users")}}},[e._v("👤")])])},staticRenderFns:[]};var r=n("VU/8")({methods:{navigation:function(e){this.$emit("navigation",e)}}},s,!1,function(e){n("W8wV")},"data-v-5197f566",null).exports,o=n("mvHQ"),i=n.n(o),c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal"},[n("div",{staticClass:"content"},[e._v(e._s(e.text))]),e._v(" "),n("div",{staticClass:"button",on:{click:function(t){e.$emit("close")}}},[e._v("OK")])])},staticRenderFns:[]};var l=n("VU/8")({props:["text"]},c,!1,function(e){n("zzHb")},"data-v-61de3344",null).exports,u=n("It2I");n("YtIj");var d={props:["token","name"],components:{Modal:l},data:function(){return{modalText:""}},methods:{logout:function(){var e=this;u.auth().signOut().then(function(){return e.$emit("navigation","Login")})},open:function(){var e=this;u.auth().currentUser.getIdToken(!0).then(function(t){fetch("/api/open",{method:"POST",body:i()({token:t}),headers:{"Content-Type":"application/json"}}).then(function(t){return 200!==t.status&&(e.modalText=t.status+": "+t.statusText),t.json()}).then(function(t){t.error&&(e.modalText=t.error)})})}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[""!==e.modalText?n("Modal",{attrs:{text:e.modalText},on:{close:function(t){e.modalText=""}}}):e._e(),e._v(" "),n("div",{staticClass:"button half",on:{click:function(t){e.modalText="© Malte Janßen 2018"}}},[e._v("Hallo "+e._s(e.name.split(" ")[0])+"!")]),e._v(" "),n("div",{staticClass:"controls"},[n("div",{staticClass:"button",on:{click:e.open}},[e._v("öffnen")]),e._v(" "),n("div",{staticClass:"button",on:{click:e.logout}},[e._v("abmelden")])])],1)},staticRenderFns:[]};var f=n("VU/8")(d,m,!1,function(e){n("PiTX")},"data-v-73bc7185",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"spinner"},[t("div",{staticClass:"fill"})])}]};var v=n("VU/8")({},p,!1,function(e){n("DH7x")},"data-v-7f19d73c",null).exports,g=n("It2I");n("YtIj");var h={components:{Modal:l,Spinner:v},props:["storedLogs"],data:function(){return{rawLogs:[],rawLogsMock:[{createdAt:"2018-02-06T07:51:21.607Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T23:50:35.759Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T23:47:18.812Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T22:57:15.488Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T21:43:42.834Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T18:46:07.396Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T18:46:07.020Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T18:46:06.715Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T18:45:56.691Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T18:45:56.263Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T18:45:55.857Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T18:45:55.491Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T18:34:26.408Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:47:23.344Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:47:17.873Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:43:18.773Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:42:49.411Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:42:36.212Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:25:01.914Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:15:48.063Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:15:25.979Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:06:16.066Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:04:44.483Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:03:21.597Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:02:32.886Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:02:20.448Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:53:23.544Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:53:17.776Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:53:14.791Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:52:49.670Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:52:38.944Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:52:33.931Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:49:16.925Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:49:11.927Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:48:58.746Z",user:"me@malts.me",action:"Tür geöffnet"}],modalText:"",logsAvailable:!1,initialLoad:!0}},methods:{loadData:function(){var e=this;g.auth().currentUser.getIdToken(!0).then(function(t){fetch("/api/logs",{method:"POST",headers:{"Content-Type":"application/json"},body:i()({token:t,offset:e.offsetDate})}).then(function(t){return 200!==t.status&&(e.modalText=t.status+": "+t.statusText),t.json()}).then(function(t){e.initialLoad?e.rawLogs=t:e.rawLogs.push.apply(e.rawLogs,t),t.length<35?e.logsAvailable=!1:e.logsAvailable=!0})})}},created:function(){this.rawLogs=this.storedLogs,this.loadData()},computed:{logs:function(){var e=[];return this.rawLogs.forEach(function(t){var n=new Date(t.createdAt),a=(n.getDate()<10?"0":"")+n.getDate()+"."+(n.getMonth()<10?"0":"")+n.getMonth()+"."+n.getFullYear(),s=!1;t.time=(n.getHours()<10?"0":"")+n.getHours()+":"+(n.getMinutes()<10?"0":"")+n.getMinutes(),e.forEach(function(e){e.date===a&&(e.logs.push(t),s=!0)}),s||e.push({date:a,logs:[t]})}),e},offsetDate:function(){return this.rawLogs.length>0?this.rawLogs[this.rawLogs.length-1].createdAt:null}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e.modalText?n("Modal",{attrs:{text:e.modalText},on:{close:function(t){e.modalText=""}}}):e._e(),e._v(" "),e._l(e.logs,function(t){return n("div",{key:t.date,staticClass:"log"},[n("h1",[e._v(" "+e._s(t.date)+" ")]),e._v(" "),n("div",{staticClass:"entries"},[n("div",{staticClass:"list-down"},e._l(t.logs,function(t){return n("p",{key:t.createdAt},[e._v("["+e._s(t.time))])})),e._v(" "),n("div",{staticClass:"list-down"},e._l(t.logs,function(t){return n("p",{key:t.createdAt},[e._v("] "+e._s(t.user)+" - "+e._s(t.action))])}))])])}),e._v(" "),0===e.rawLogs.length?n("Spinner"):e._e(),e._v(" "),e.logsAvailable?n("div",{staticClass:"button",on:{click:e.loadData}},[e._v("ältere Einträge laden")]):e._e()],2)},staticRenderFns:[]};var _=n("VU/8")(h,T,!1,function(e){n("w1s7")},"data-v-29c761f2",null).exports,w={props:["user"],methods:{changeRole:function(){console.log("change users role to "+(this.user.admin?"user: ":"admin: ")+this.user.uid)},resetPassword:function(){console.log("reset password of user: "+this.user.email)},deleteUser:function(){console.log("delete user: "+this.user.uid)}}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"listing"},[n("div",{staticClass:"user-info"},[n("p",{staticClass:"name"},[e._v(e._s(e.user.name))]),e._v(" "),n("p",{staticClass:"mail"},[e._v(e._s(e.user.email))])]),e._v(" "),e.user.admin?e._e():n("div",{staticClass:"role button",on:{click:e.changeRole}},[e._v("🙂")]),e._v(" "),e.user.admin?n("div",{staticClass:"role button",on:{click:e.changeRole}},[e._v("👑")]):e._e(),e._v(" "),n("div",{staticClass:"reset-mail button",on:{click:e.resetPassword}},[e._v("♻️")]),e._v(" "),n("div",{staticClass:"delete button",on:{click:e.deleteUser}},[e._v("🗑️")])])},staticRenderFns:[]};var A=n("VU/8")(w,x,!1,function(e){n("EVUe")},"data-v-a5e4e2f2",null).exports,U=n("It2I");n("YtIj");var b={components:{UserListing:A,Modal:l,Spinner:v},props:["storedUsers"],created:function(){var e=this;this.users=this.storedUsers,U.auth().currentUser.getIdToken(!0).then(function(t){fetch("/api/users",{method:"POST",body:i()({token:t}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.users=t})})},data:function(){return{users:[],modalText:"",newUser:{email:"",name:"",admin:!1},mailRegex:"",initialLoad:!0}},methods:{createUser:function(){var e=this;/^(([A-Z]|[\u00C0-\u00DF])([a-z]|[\u00E0-\u00FF]|\u00DF)+ ?){2,}$/g.test(this.newUser.name)?U.auth().currentUser.getIdToken(!0).then(function(t){fetch("/api/user",{method:"PUT",body:i()({token:t,name:e.newUser.name,email:e.newUser.email,admin:e.newUser.admin}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.newUser.email="",e.newUser.name="",e.modalText="Nutzer erstellt"}).catch(function(t){return e.modalText="Irgendwas ist mit der Anfrage falsch gelaufen"})}):this.modalText="Name im falschen Format"}}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[""!==e.modalText?n("Modal",{attrs:{text:e.modalText},on:{close:function(t){e.modalText=""}}}):e._e(),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),e.createUser(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name",required:"",tabindex:"0"},domProps:{value:e.newUser.name},on:{input:function(t){t.target.composing||e.$set(e.newUser,"name",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email",tabindex:"0",required:""},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}}),e._v(" "),n("input",{staticClass:"button",attrs:{type:"submit",value:"Als Admin hinzufügen"},on:{click:function(t){e.newUser.admin=!0}}}),e._v(" "),n("input",{staticClass:"button",attrs:{type:"submit",value:"Als Nutzer hinzufügen"},on:{click:function(t){e.newUser.admin=!1}}})]),e._v(" "),e._m(0),e._v(" "),0===e.users.length?n("Spinner"):e._e(),e._v(" "),e._l(e.users,function(e){return n("UserListing",{key:e.uid,attrs:{user:e}})})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"user-search"},[t("input",{attrs:{type:"text",placeholder:"suche",tabindex:"0"}}),this._v(" "),t("div",{staticClass:"button",attrs:{tabindex:"0"}},[this._v("🔎")])])}]};var k=n("VU/8")(b,C,!1,function(e){n("DBhB")},"data-v-288d792d",null).exports,S=n("It2I");n("YtIj"),S.initializeApp({apiKey:"AIzaSyAuhn5rTvl91iGOugkxfdG_HvHWDiAwlUs",authDomain:"hgo-doorlock.firebaseapp.com",databaseURL:"https://hgo-doorlock.firebaseio.com",projectId:"hgo-doorlock",storageBucket:"hgo-doorlock.appspot.com",messagingSenderId:"308945458314"});var y={components:{Modal:l},data:function(){return{email:"",password:"",modalText:""}},methods:{login:function(){var e=this;S.auth().signInWithEmailAndPassword(this.email,this.password).catch(function(t){return e.modalText=t.message})},b64DecodeUnicode:function(e){return decodeURIComponent(Array.prototype.map.call(atob(e),function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}},created:function(){var e=this;S.auth().onAuthStateChanged(function(t){if(t){var n={displayName:t.displayName,email:t.email,admin:!1};S.auth().currentUser.getIdToken().then(function(t){JSON.parse(e.b64DecodeUnicode(t.split(".")[1])).admin&&(n.admin=!0),e.$emit("user",n),e.$emit("navigation","Controls")}).catch(function(t){e.modalText=t.message})}})}},Z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[""!==e.modalText?n("Modal",{attrs:{text:e.modalText},on:{close:function(t){e.modalText=""}}}):e._e(),e._v(" "),n("header",{staticClass:"button"},[e._v("HGO 🚪🔒")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.login(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("div",{staticClass:"button",attrs:{type:"submit"},on:{click:e.login}},[e._v("Anmelden")])],1)},staticRenderFns:[]};var L={components:{Modal:l},props:["token"],data:function(){return{password:["",""],modalText:""}},methods:{submitSignup:function(){var e=this;this.password[0]!==this.password[1]?this.modalText="Passwörter unterschiedlich":fetch("/api/signup",{method:"POST",body:i()({signupToken:this.token,password:this.password[0]}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t.error?e.modalText=t.error:(e.$emit("navigation","Login"),window.location.href="/")})}}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[""!==e.modalText?n("Modal",{attrs:{text:e.modalText},on:{close:function(t){e.modalText=""}}}):e._e(),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),e.submitSignup(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password[0],expression:"password[0]"}],attrs:{type:"password",placeholder:"Passwort",required:""},domProps:{value:e.password[0]},on:{input:function(t){t.target.composing||e.$set(e.password,0,t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password[1],expression:"password[1]"}],attrs:{type:"password",placeholder:"Passwort wiederholen",required:""},domProps:{value:e.password[1]},on:{input:function(t){t.target.composing||e.$set(e.password,1,t.target.value)}}}),e._v(" "),n("input",{staticClass:"button",attrs:{type:"submit",value:"Registrierung abschließen"}})])],1)},staticRenderFns:[]};var $={name:"App",components:{Navigation:r,Controls:f,Logs:_,Users:k,Login:n("VU/8")(y,Z,!1,function(e){n("Xast")},"data-v-e59bcaf4",null).exports,Signup:n("VU/8")(L,I,!1,function(e){n("hxjP")},"data-v-10570982",null).exports},data:function(){return{user:{},users:[],logs:[],currScreen:"Login",signupToken:""}},created:function(){var e=window.location.search.split("?signup=");2===e.length&&(this.signupToken=e[1],this.currScreen="Signup")},methods:{changeScreen:function(e){void 0===e&&(e=localStorage.getItem("lastScreen")||"Login"),localStorage.setItem("lastScreen",e),this.currScreen=e}}},P={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["Login"!==e.currScreen&&"Signup"!==e.currScreen&&e.user.admin?n("Navigation",{on:{navigation:e.changeScreen}}):e._e(),e._v(" "),"Signup"===e.currScreen?n("Signup",{attrs:{token:e.signupToken},on:{navigation:e.changeScreen}}):e._e(),e._v(" "),"Login"===e.currScreen?n("Login",{on:{navigation:e.changeScreen,user:function(t){return e.user=t}}}):e._e(),e._v(" "),"Controls"===e.currScreen?n("Controls",{staticClass:"fs",class:{fullscreen:!e.user.admin},attrs:{name:e.user.displayName},on:{navigation:e.changeScreen}}):e._e(),e._v(" "),"Logs"===e.currScreen?n("Logs",{staticClass:"fs",attrs:{storedLogs:e.logs}}):e._e(),e._v(" "),"Users"===e.currScreen?n("Users",{staticClass:"fs",attrs:{storedUsers:e.users}}):e._e(),e._v(" "),"Login"!==e.currScreen?n("div",{staticClass:"spacer"}):e._e()],1)},staticRenderFns:[]};var D=n("VU/8")($,P,!1,function(e){n("pk9n")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:D},template:"<App/>"})},PiTX:function(e,t){},W8wV:function(e,t){},Xast:function(e,t){},hxjP:function(e,t){},pk9n:function(e,t){},w1s7:function(e,t){},zzHb:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.da75c936bd243ed6ad2c.js.map