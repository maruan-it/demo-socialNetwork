(this["webpackJsonpsoc-set"]=this["webpackJsonpsoc-set"]||[]).push([[1],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i}));var a=n(85),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"19ba1a2a-eda8-4d73-9a0f-f5e60f4f78e5"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unFollow:function(e){return r.delete("follow/".concat(e))},follow:function(e){return r.post("follow/".concat(e))}},u={me:function(){return r.get("auth/me")},loginIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},loginOut:function(){return r.delete("auth/login")}},i={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})}}},137:function(e,t,n){e.exports=n(226)},138:function(e,t,n){},143:function(e,t,n){},15:function(e,t,n){e.exports={nav_wraper:"NavBar_nav_wraper__17HmG",active:"NavBar_active__373-i",nav_s:"NavBar_nav_s__1H95N",h:"NavBar_h__3D7AM",friendsNavBar:"NavBar_friendsNavBar__WaOYc"}},226:function(e,t,n){"use strict";n.r(t);n(138),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),c=n(44),u=n.n(c),i=n(32),o=n(33),s=n(34),l=n(35),f=(n(143),n(21)),d=n(18),p=n(15),m=n.n(p),v=n(8),h=n(83),g=n.n(h),E=function(e){return r.a.createElement("div",{className:g.a.friendsItem},r.a.createElement("img",{src:"https://img.devrant.com/devrant/rant/r_1973645_LFf2y.jpg"}),r.a.createElement("h5",null,e.name))},b=function(e){var t=e.friends.map((function(e){return r.a.createElement(E,{name:e.name})}));return r.a.createElement("div",{className:m.a.nav_wraper},r.a.createElement("nav",{className:m.a.nav_s},r.a.createElement("div",{className:m.a.h},r.a.createElement(v.b,{to:"/profile",activeClassName:m.a.active},r.a.createElement("li",null,"\u041f\u0440\u043e\u0444\u0456\u043b\u044c")),r.a.createElement(v.b,{to:"/dialogs",activeClassName:m.a.active},r.a.createElement("li",null,"\u0414\u0456\u0430\u043b\u043e\u0433\u0456")),r.a.createElement(v.b,{to:"/users",activeClassName:m.a.active},r.a.createElement("li",null,"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456")),r.a.createElement(v.b,{to:"/news",activeClassName:m.a.active},r.a.createElement("li",null,"\u041d\u043e\u0432\u0438\u043d\u0438")),r.a.createElement(v.b,{to:"/music",activeClassName:m.a.active},r.a.createElement("li",null,"\u041c\u0443\u0437\u0438\u043a\u0430")),r.a.createElement(v.b,{to:"/settings",activeClassName:m.a.active},r.a.createElement("li",null,"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f"))),r.a.createElement("div",{className:m.a.friendsNavBar},t)))},O=n(9),_=Object(O.d)(Object(d.b)((function(e){return{friends:e.sidebarItems.friends}})))(b),w=n(5),S=n(25),j={initialazed:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALAZED_SUCCESS":return Object(w.a)({},e,{initialazed:!0});default:return e}},I=n(37),N=n(58),T=n(74),k={friends:[{name:"Ostap"},{name:"Bodya"},{name:"Dima"}]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;arguments.length>1&&arguments[1];return e},P=n(81),C=n(87),L=n(80),x=Object(O.c)({profilePage:N.b,dialog:T.b,sidebarItems:A,usersPage:P.a,auth:S.a,form:L.a,app:y}),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.d,U=Object(O.e)(x,D(Object(O.a)(C.a)));window.store=U;var F=U,B=n(45),R=n.n(B),G=function(e){return r.a.createElement("div",{className:R.a.header},r.a.createElement("img",{src:"https://logofirmowe.pl/a/wp-content/uploads/2018/05/disney-definicja-logotypu-e1527202599884.png",width:"100px",height:"50px"}),r.a.createElement("div",{className:R.a.loginBlock},r.a.createElement("div",{className:R.a.preloader},e.isAuth?r.a.createElement(v.b,{to:"/profile",onClick:e.deleteAuthLoginData},"exit"):r.a.createElement(v.b,{to:"/login"},"Login"))))},z=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(G,this.props)}}]),n}(r.a.Component),M=Object(O.d)(Object(d.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{deleteAuthLoginData:S.b}))(z),H=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(I.a,null)},r.a.createElement(e,t))}},W=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,303))})),V=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,305))})),J=r.a.lazy((function(){return n.e(6).then(n.bind(null,304))})),K=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,306))})),X=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initialazeApp()}},{key:"render",value:function(){return this.props.initialazed?r.a.createElement("div",{className:"app_wraper"},r.a.createElement(M,null),r.a.createElement(_,null),r.a.createElement("div",{className:"app_wraper_content"},r.a.createElement(f.b,{path:"/profile/:userId?",render:H(W)}),r.a.createElement(f.b,{path:"/dialogs",render:H(V)}),r.a.createElement(f.b,{path:"/users",render:H(J)}),r.a.createElement(f.b,{path:"/login",render:H(K)}))):r.a.createElement(I.a,null)}}]),n}(r.a.Component),Y=Object(O.d)(f.f,Object(d.b)((function(e){return{initialazed:e.app.initialazed}}),{initialazeApp:function(){return function(e){var t=e(Object(S.d)());Promise.all([t]).then((function(){e({type:"INITIALAZED_SUCCESS"})}))}}}))(X),Z=function(e){return r.a.createElement(v.a,null,r.a.createElement(d.a,{store:F},r.a.createElement(Y,null)))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(4),r=n.n(a),c=n(11),u=n(5),i=n(46),o=n(12),s="social-network/auth/SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1},f=function(e,t,n,a){return{type:s,payload:{userId:e,email:t,login:n,isAuth:a}}},d=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,u,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,c=a.id,u=a.email,i=a.login,t(f(c,u,i,!0)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var a=Object(c.a)(r.a.mark((function a(c){var u,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.loginIn(e,t,n);case 2:0===(u=a.sent).data.resultCode?c(d()):(s=u.data.messages.length>0?u.data.messages[0]:"Some error",c(Object(i.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.loginOut();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(u.a)({},e,{},t.payload);default:return e}}},37:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(86),u=n.n(c);t.a=function(e){return r.a.createElement("img",{src:u.a})}},45:function(e,t,n){e.exports={header:"Header_header__3o-gD",loginBlock:"Header_loginBlock__2RHdK",preloader:"Header_preloader__1VV3-"}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return m}));var a=n(4),r=n.n(a),c=n(11),u=n(26),i=n(5),o=n(12),s={posts:[{id:1,nick:"Adam",post:"Ok",likecount:2},{id:2,nick:"Oscar",post:"Enjou",likecount:5}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostBody:e}},f=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:a=t.sent,n({type:"SET-USER-PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={nick:"Mark",post:t.newPostBody,likecount:0};return Object(i.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"DELETE_POST":return Object(i.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SET-USER-PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(i.a)({},e,{status:t.status});default:return e}}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(26),r=n(5),c={dialogData:[{name:"Marian",id:1},{name:"Ostap",id:2},{name:"Bodya",id:3}],messageData:[{message:"Hi",id:1},{message:"fsd",id:2},{message:"ss",id:3}]},u=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messageData:[].concat(Object(a.a)(e.messageData),[{message:n}])});default:return e}}},81:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"h",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return E})),n.d(t,"g",(function(){return b}));var a=n(4),r=n.n(a),c=n(11),u=n(26),i=n(5),o=n(12),s=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(i.a)({},e,{},a):e}))},l={users:[],pageSize:10,totalUsersCount:10,currentPage:1,isFething:!1,followingInProgres:[]},f=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},m=function(e){return{type:"TOGGLE_IS_FETHING",isFething:e}},v=function(e,t){return{type:"TOGGLE_IS_FOLLOWIN_PROGRES",isFething:e,userId:t}},h=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(m(!0)),a(p(e)),n.next=4,o.c.getUsers(e,t);case 4:c=n.sent,a(m(!1)),a({type:"SET_USERS",users:c.items}),a({type:"SET_TOTAL_COUNT",totalCount:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(v(!1,n));case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(n,e,o.c.follow.bind(e),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(n,e,o.c.unFollow,d);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(i.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(i.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_COUNT":return Object(i.a)({},e,{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETHING":return Object(i.a)({},e,{isFething:t.isFething});case"TOGGLE_IS_FOLLOWIN_PROGRES":return Object(i.a)({},e,{followingInProgres:t.isFething?[].concat(Object(u.a)(e.followingInProgres),[t.userId]):e.followingInProgres.filter((function(e){return e!=t.userId}))});default:return e}}},83:function(e,t,n){e.exports={friendsItem:"Friends_friendsItem__1opUz"}},86:function(e,t,n){e.exports=n.p+"static/media/5.d5481c36.svg"}},[[137,2,3]]]);
//# sourceMappingURL=main.7ebaf5a8.chunk.js.map