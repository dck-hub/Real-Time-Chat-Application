(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),i=a.n(r),o=(a(60),a(23)),u=a(4),l=a(17),s=a(13),p=a.n(s),m=(a(63),p.a.initializeApp({apiKey:"AIzaSyD6CkastAKdNVGrqMBqnQFdinIUSVxlsgM",authDomain:"chatapp-bf0e1.firebaseapp.com",projectId:"chatapp-bf0e1",storageBucket:"chatapp-bf0e1.appspot.com",messagingSenderId:"950206043449",appId:"1:950206043449:web:2e4c20c3dbc73924b244e8"}).auth()),h=c.a.createContext(),d=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),i=r[0],o=r[1],s=Object(n.useState)(null),p=Object(l.a)(s,2),d=p[0],f=p[1],b=Object(u.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){f(e),o(!1),e&&b.push("/chats")}))}),[d,b]);var g={user:d};return c.a.createElement(h.Provider,{value:g},!i&&t)},f=a(18),b=a.n(f),g=a(33),v=a(53),E=a(3),j=a.n(E),O=function(){var e=Object(u.f)(),t=Object(n.useContext)(h).user,a=Object(n.useState)(!0),r=Object(l.a)(a,2),i=r[0],o=r[1];console.log(t);var s=function(){var t=Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?j.a.get("http://api.chatengine.io/users/me",{headers:{"project-id":"ac7f6d42-f330-4304-8cfb-98d3b45a6208","user-name":t.email,"user-secret":t.uid}}).then((function(){o(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),p(t.photoURL).then((function(t){e.append("avatar",t,t.name),j.a.post("https://api.chatengine.io/users",e,{headers:{"private-key":"21c599a6-4a7e-448c-a8ea-d29aacd8efbc"}}).then((function(){return o(!1)})).catch((function(e){return console.log(e)}))}))})):e.push("/")}),[t,e]),!t||i?"still loading...":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Chat Application"),c.a.createElement("div",{onClick:s,className:"logout-tab"},"Logout")),c.a.createElement(v.d,{height:"calc(100vh - 66px)",projectID:"ac7f6d42-f330-4304-8cfb-98d3b45a6208",userName:t.email,userSecret:t.uid}))},k=a(118),w=a(119),S=function(){return c.a.createElement("div",{id:"login page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null," Welcome to Chat Application"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(k.a,null)," Sign in with Google"),c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return m.signInWithRedirect(new p.a.auth.FacebookAuthProvider)}},c.a.createElement(w.a,null)," Sign in with Facebook")))};var x=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(o.a,null,c.a.createElement(d,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/chats",component:O}),c.a.createElement(u.a,{path:"/",component:S})))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root"))},55:function(e,t,a){e.exports=a(116)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.d5f940d2.chunk.js.map