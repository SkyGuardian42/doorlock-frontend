webpackJsonp([1],{"4Ib0":function(e,t){},AzsK:function(e,t){},EVUe:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("div",{staticClass:"controls",on:{click:function(t){e.navigation("Controls")}}},[e._v("🚪")]),e._v(" "),n("div",{staticClass:"logs",on:{click:function(t){e.navigation("Logs")}}},[e._v("📖")]),e._v(" "),n("div",{staticClass:"users",on:{click:function(t){e.navigation("Users")}}},[e._v("👤")])])},staticRenderFns:[]};var r=n("VU/8")({methods:{navigation:function(e){this.$emit("navigation",e)}}},s,!1,function(e){n("W8wV")},"data-v-5197f566",null).exports,o=n("mvHQ"),i=n.n(o),c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal"},[n("div",{staticClass:"content"},[e._v(e._s(e.text))]),e._v(" "),n("div",{staticClass:"button",on:{click:function(t){e.$emit("close")}}},[e._v("OK")])])},staticRenderFns:[]};var l=n("VU/8")({props:["text"]},c,!1,function(e){n("hD/p")},"data-v-ec96ccb4",null).exports,u=n("It2I");n("YtIj");var m={props:["token"],components:{Modal:l},data:function(){return{modalText:""}},methods:{logout:function(){var e=this;u.auth().signOut().then(function(){return e.$emit("navigation","Login")})},open:function(){var e=this;fetch("/api/open",{method:"POST",body:i()({token:this.token}),headers:{"Content-Type":"application/json"}}).then(function(t){return 200!==t.status&&(e.modalText=t.status+": "+t.statusText),t.json()}).then(function(t){t.error&&(e.modalText=t.error)})}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[""!==e.modalText?n("Modal",{attrs:{text:e.modalText},on:{close:function(t){e.modalText=""}}}):e._e(),e._v(" "),n("div",{staticClass:"button",on:{click:e.open}},[e._v("öffnen")]),e._v(" "),n("div",{staticClass:"button",on:{click:e.logout}},[e._v("abmelden")])],1)},staticRenderFns:[]};var f=n("VU/8")(m,d,!1,function(e){n("AzsK")},"data-v-5555f91a",null).exports,v={props:["token"],components:{Modal:l},data:function(){return{rawLogs:[],modalText:"",rawLogsMock:[{createdAt:"2018-02-05T17:06:16.066Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:04:44.483Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:03:21.597Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:02:32.886Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T17:02:20.448Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:53:23.544Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:53:17.776Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:53:14.791Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:52:49.670Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:52:38.944Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:52:33.931Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:49:16.925Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:49:11.927Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:48:58.746Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:48:43.928Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:47:08.302Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:47:00.299Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:13:30.399Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:13:08.786Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:12:09.992Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:11:08.001Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:10:43.929Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:10:33.499Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T16:06:30.660Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T14:13:15.993Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T13:55:26.030Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T13:19:36.670Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T12:57:23.828Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T07:45:37.681Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-02-05T07:45:32.271Z",user:"me@malts.me",action:"Tür geöffnet"},{createdAt:"2018-01-31T23:24:51.938Z",user:"user",action:"action"},{createdAt:"2018-01-31T23:24:39.593Z",user:"user",action:"action"},{createdAt:"2018-01-31T23:24:35.091Z",user:"nicername",action:"niceaction"},{createdAt:"2018-01-31T23:24:35.090Z",user:"testuser",action:"testaction"}]}},created:function(){var e=this;fetch("/api/logs",{method:"POST",headers:{"Content-Type":"application/json"},body:i()({token:this.token,offset:0})}).then(function(t){return 200!==t.status&&(e.modalText=t.status+": "+t.statusText),t.json()}).then(function(t){return e.rawLogs=t})},computed:{logs:function(){var e=[];return this.rawLogs.forEach(function(t){var n=new Date(t.createdAt),a=(n.getDate()<10?"0":"")+n.getDate()+"."+(n.getMonth()<10?"0":"")+n.getMonth()+"."+n.getFullYear(),s=!1;t.time=(n.getHours()<10?"0":"")+n.getHours()+":"+(n.getMinutes()<10?"0":"")+n.getMinutes(),e.forEach(function(e){e.date===a&&(e.logs.push(t),s=!0)}),s||e.push({date:a,logs:[t]})}),e}}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e.modalText?n("Modal",{attrs:{text:e.modalText},on:{close:function(t){e.modalText=""}}}):e._e(),e._v(" "),e._l(e.logs,function(t){return n("div",{key:t.date},[n("h1",[e._v(" "+e._s(t.date)+" ")]),e._v(" "),n("div",{staticClass:"entries"},[n("div",{staticClass:"list-down"},e._l(t.logs,function(t){return n("p",{key:t.createdAt},[e._v("["+e._s(t.time))])})),e._v(" "),n("div",{staticClass:"list-down"},e._l(t.logs,function(t){return n("p",{key:t.createdAt},[e._v("] "+e._s(t.user)+" - "+e._s(t.action))])}))])])})],2)},staticRenderFns:[]};var p=n("VU/8")(v,g,!1,function(e){n("SS9i")},"data-v-598fb610",null).exports,h={props:["user"],methods:{changeRole:function(){console.log("change users role to "+(this.user.admin?"user: ":"admin: ")+this.user.uid)},resetPassword:function(){console.log("reset password of user: "+this.user.email)},deleteUser:function(){console.log("delete user: "+this.user.uid)}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"listing"},[n("div",{staticClass:"user-info"},[n("p",{staticClass:"name"},[e._v(e._s(e.user.name))]),e._v(" "),n("p",{staticClass:"mail"},[e._v(e._s(e.user.email))])]),e._v(" "),e.user.admin?e._e():n("div",{staticClass:"role button",on:{click:e.changeRole}},[e._v("🙂")]),e._v(" "),e.user.admin?n("div",{staticClass:"role button",on:{click:e.changeRole}},[e._v("👑")]):e._e(),e._v(" "),n("div",{staticClass:"reset-mail button",on:{click:e.resetPassword}},[e._v("♻️")]),e._v(" "),n("div",{staticClass:"delete button",on:{click:e.deleteUser}},[e._v("🗑️")])])},staticRenderFns:[]};var T={components:{UserListing:n("VU/8")(h,_,!1,function(e){n("EVUe")},"data-v-a5e4e2f2",null).exports,Modal:l},created:function(){},data:function(){return{users:[{name:"Malte Janßen",email:"me@malts.me",uid:"bNRqk6WFRz6g",admin:!0},{name:"Lennard Kleyman",email:"mail@lennard.tech",uid:"ZHrkTlvMMf17",admin:!0},{name:"Kerstin Rolfes",email:"rolfes@hgo-ol.de",uid:"lEbfITVmRAmz",admin:!1}],modalText:""}}},A={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[""!==e.modalText?n("Modal",{attrs:{text:e.modalText},on:{close:function(t){e.modalText=""}}}):e._e(),e._v(" "),n("input",{attrs:{type:"text",placeholder:"name"}}),e._v(" "),n("input",{attrs:{type:"email",placeholder:"email"}}),e._v(" "),n("div",{staticClass:"button"},[e._v("hinzufügen")]),e._v(" "),e._m(0),e._v(" "),e._l(e.users,function(e){return n("UserListing",{key:e.uid,attrs:{user:e}})})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"user-search"},[t("input",{attrs:{type:"text",placeholder:"suche"}}),this._v(" "),t("div",{staticClass:"button"},[this._v("🔎")])])}]};var k=n("VU/8")(T,A,!1,function(e){n("4Ib0")},"data-v-b1737b28",null).exports,C=n("It2I");n("YtIj"),C.initializeApp({apiKey:"AIzaSyAuhn5rTvl91iGOugkxfdG_HvHWDiAwlUs",authDomain:"hgo-doorlock.firebaseapp.com",databaseURL:"https://hgo-doorlock.firebaseio.com",projectId:"hgo-doorlock",storageBucket:"hgo-doorlock.appspot.com",messagingSenderId:"308945458314"});var x={props:["token"],data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;C.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){C.auth().currentUser.getIdToken(!0).then(function(t){e.$emit("token",t),e.$emit("navigation","Controls")}).catch(function(e){return console.log(e)})}).catch(function(e){return console.log(e)})}},created:function(){var e=this;C.auth().onAuthStateChanged(function(t){if(t)return C.auth().currentUser.getIdToken(!0).then(function(t){e.$emit("token",t),e.$emit("navigation")}),!0})}},Z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("header",{staticClass:"button"},[e._v("HGO 🚪🔒")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.login(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("div",{staticClass:"button",attrs:{type:"submit"},on:{click:e.login}},[e._v("Anmelden")])])},staticRenderFns:[]};var b={name:"App",components:{Navigation:r,Controls:f,Logs:p,Users:k,Login:n("VU/8")(x,Z,!1,function(e){n("h1hn")},"data-v-bf717c4c",null).exports},data:function(){return{user:{token:""},currScreen:"Login"}},methods:{changeScreen:function(e){void 0===e?e=localStorage.getItem("lastScreen"):localStorage.setItem("lastScreen",e),this.currScreen=e}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["Login"!==e.currScreen?n("Navigation",{on:{navigation:e.changeScreen}}):e._e(),e._v(" "),"Login"===e.currScreen?n("Login",{on:{navigation:e.changeScreen,token:function(t){return e.user.token=t}}}):e._e(),e._v(" "),"Controls"===e.currScreen?n("Controls",{staticClass:"fs",attrs:{token:e.user.token},on:{navigation:e.changeScreen}}):e._e(),e._v(" "),"Logs"===e.currScreen?n("Logs",{staticClass:"fs",attrs:{token:e.user.token}}):e._e(),e._v(" "),"Users"===e.currScreen?n("Users",{staticClass:"fs"}):e._e(),e._v(" "),"Login"!==e.currScreen?n("div",{staticClass:"spacer"}):e._e()],1)},staticRenderFns:[]};var S=n("VU/8")(b,w,!1,function(e){n("uI8p")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:S},template:"<App/>"})},SS9i:function(e,t){},W8wV:function(e,t){},h1hn:function(e,t){},"hD/p":function(e,t){},uI8p:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6575f4d7e4ce957d21ea.js.map