webpackJsonp([1],{EVUe:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("div",{staticClass:"controls",on:{click:function(t){e.navigation("Controls")}}},[e._v("🚪")]),e._v(" "),n("div",{staticClass:"logs",on:{click:function(t){e.navigation("Logs")}}},[e._v("📖")]),e._v(" "),n("div",{staticClass:"users",on:{click:function(t){e.navigation("Users")}}},[e._v("👤")])])},staticRenderFns:[]};var i=n("VU/8")({methods:{navigation:function(e){this.$emit("navigation",e)}}},o,!1,function(e){n("W8wV")},"data-v-5197f566",null).exports,a=n("mvHQ"),r=n.n(a),c=n("It2I");n("YtIj");var l={props:["token"],methods:{logout:function(){var e=this;c.auth().signOut().then(function(){return e.$emit("navigation","Login")})},open:function(){fetch("/open",{method:"POST",body:r()({token:this.token}),headers:{"Content-Type":"application/json"}})}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("div",{staticClass:"button",on:{click:this.open}},[this._v("öffnen")]),this._v(" "),t("div",{staticClass:"button",on:{click:this.logout}},[this._v("abmelden")])])},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(e){n("yhr6")},"data-v-1892a239",null).exports,v={data:function(){return{rawLogs:[]}},created:function(){var e=this;fetch("/logs").then(function(e){return e.json()}).then(function(t){e.rawLogs=t,console.log(t)})},computed:{logs:function(){}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",e._l(e.logs,function(t){return n("div",{key:t.createdAt},[e._v(e._s(t.user)+" | "+e._s(t.action))])}))},staticRenderFns:[]};var p=n("VU/8")(v,m,!1,function(e){n("nQpr")},"data-v-230c7930",null).exports,f={props:["user"],methods:{changeRole:function(){console.log("change users role to "+(this.user.admin?"user: ":"admin: ")+this.user.uid)},resetPassword:function(){console.log("reset password of user: "+this.user.email)},deleteUser:function(){console.log("delete user: "+this.user.uid)}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"listing"},[n("div",{staticClass:"user-info"},[n("p",{staticClass:"name"},[e._v(e._s(e.user.name))]),e._v(" "),n("p",{staticClass:"mail"},[e._v(e._s(e.user.email))])]),e._v(" "),e.user.admin?e._e():n("div",{staticClass:"role button",on:{click:e.changeRole}},[e._v("🙂")]),e._v(" "),e.user.admin?n("div",{staticClass:"role button",on:{click:e.changeRole}},[e._v("👑")]):e._e(),e._v(" "),n("div",{staticClass:"reset-mail button",on:{click:e.resetPassword}},[e._v("♻️")]),e._v(" "),n("div",{staticClass:"delete button",on:{click:e.deleteUser}},[e._v("🗑️")])])},staticRenderFns:[]};var g={components:{UserListing:n("VU/8")(f,h,!1,function(e){n("EVUe")},"data-v-a5e4e2f2",null).exports},data:function(){return{users:[{name:"Malte Janßen",email:"me@malts.me",uid:"bNRqk6WFRz6g",admin:!0},{name:"Lennard Kleyman",email:"mail@lennard.tech",uid:"ZHrkTlvMMf17",admin:!0},{name:"Kerstin Rolfes",email:"rolfes@hgo-ol.de",uid:"lEbfITVmRAmz",admin:!1}]}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("input",{attrs:{type:"text",placeholder:"name"}}),e._v(" "),n("input",{attrs:{type:"email",placeholder:"email"}}),e._v(" "),n("div",{staticClass:"button"},[e._v("hinzufügen")]),e._v(" "),e._m(0),e._v(" "),e._l(e.users,function(e){return n("UserListing",{key:e.uid,attrs:{user:e}})})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"user-search"},[t("input",{attrs:{type:"text",placeholder:"suche"}}),this._v(" "),t("div",{staticClass:"button"},[this._v("🔎")])])}]};var k=n("VU/8")(g,_,!1,function(e){n("NTnn")},"data-v-7553e098",null).exports,C=n("It2I");n("YtIj"),C.initializeApp({apiKey:"AIzaSyAuhn5rTvl91iGOugkxfdG_HvHWDiAwlUs",authDomain:"hgo-doorlock.firebaseapp.com",databaseURL:"https://hgo-doorlock.firebaseio.com",projectId:"hgo-doorlock",storageBucket:"hgo-doorlock.appspot.com",messagingSenderId:"308945458314"});var b={props:["token"],data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;C.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){C.auth().currentUser.getIdToken(!0).then(function(t){e.$emit("token",t),e.$emit("navigation","Controls")}).catch(function(e){return console.log(e)})}).catch(function(e){return console.log(e)})}},computed:{loggedIn:function(){var e=this;C.auth().onAuthStateChanged(function(t){if(t)return C.auth().currentUser.getIdToken(!0).then(function(t){e.$emit("token",t),e.$emit("navigation","Controls")}),!0})}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("header",{staticClass:"button"},[e._v("HGO 🚪🔒")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.login(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),e.loggedIn?e._e():n("div",{staticClass:"button",attrs:{type:"submit"},on:{click:e.login}},[e._v("Anmelden")])])},staticRenderFns:[]};var U={name:"App",components:{Navigation:i,Controls:d,Logs:p,Users:k,Login:n("VU/8")(b,w,!1,function(e){n("oCJ2")},"data-v-9dd44b88",null).exports},data:function(){return{user:{token:""},currScreen:"Login"}},methods:{changeScreen:function(e){console.log("changing screen to "+e),this.currScreen=e}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["Login"!==e.currScreen?n("Navigation",{on:{navigation:e.changeScreen}}):e._e(),e._v(" "),"Login"===e.currScreen?n("Login",{on:{navigation:e.changeScreen,token:function(t){return e.user.token=t}}}):e._e(),e._v(" "),"Controls"===e.currScreen?n("Controls",{staticClass:"fs",attrs:{token:e.user.token},on:{navigation:e.changeScreen}}):e._e(),e._v(" "),"Logs"===e.currScreen?n("Logs",{staticClass:"fs"}):e._e(),e._v(" "),"Users"===e.currScreen?n("Users",{staticClass:"fs"}):e._e(),e._v(" "),"Login"!==e.currScreen?n("div",{staticClass:"spacer"}):e._e()],1)},staticRenderFns:[]};var L=n("VU/8")(U,y,!1,function(e){n("imhX")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:L},template:"<App/>"})},NTnn:function(e,t){},W8wV:function(e,t){},imhX:function(e,t){},nQpr:function(e,t){},oCJ2:function(e,t){},yhr6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.bd73a44548b41baffc6f.js.map