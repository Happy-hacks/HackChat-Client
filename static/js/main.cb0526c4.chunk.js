(this.webpackJsonphackchat=this.webpackJsonphackchat||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(46),o=n.n(r),i=(n(56),n(106)),s=n(1),l=(n(57),n(47)),u=n.n(l),m=n(105),d=n(4),f=(n(90),n(5)),h=(n(91),function(e){var t=e.title,n=e.icon;return c.a.createElement("div",{className:"menu__link"},c.a.createElement("label",null,t),c.a.createElement("img",{src:n,alt:"".concat(t," icon")}))}),g=function(){var e=Object(a.useContext)(q),t=Object(m.a)(["authenticated"]),n=Object(s.a)(t,3)[2];return c.a.createElement("div",{className:"navigation__menu"},c.a.createElement("div",{className:"menu__navigation"},c.a.createElement("button",{onClick:function(){return e.config.hideMenu()}},"Hide")),c.a.createElement("h2",null,"menu"),c.a.createElement("div",{className:"menu__links"},c.a.createElement(d.b,{to:{pathname:"/",state:{authenticated:!0}},onClick:function(){return e.config.hideMenu()}},c.a.createElement(h,{title:"Chat",icon:void 0})),c.a.createElement(d.b,{to:"/preferences",onClick:function(){return e.config.hideMenu()}},c.a.createElement(h,{title:"Preferences",icon:void 0})),c.a.createElement(d.b,{to:"/login",onClick:function(){n("authenticated")}},c.a.createElement(h,{title:"Sign out",icon:void 0}))))},E=function(e){var t=e.redirectBack;return c.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 260 260",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(){return t()}},c.a.createElement("line",{x1:"139",y1:"129.787",x2:"227.787",y2:"41",stroke:"#D7E0E9",strokeWidth:"30",strokeLinecap:"round"}),c.a.createElement("line",{x1:"29",y1:"129.787",x2:"117.787",y2:"41",stroke:"#D7E0E9",strokeWidth:"30",strokeLinecap:"round"}),c.a.createElement("line",{x1:"15",y1:"-15",x2:"140.563",y2:"-15",transform:"matrix(0.707107 0.707107 0.707107 -0.707107 139 110)",stroke:"#D7E0E9",strokeWidth:"30",strokeLinecap:"round"}),c.a.createElement("line",{x1:"15",y1:"-15",x2:"140.563",y2:"-15",transform:"matrix(0.707107 0.707107 0.707107 -0.707107 29 110)",stroke:"#D7E0E9",strokeWidth:"30",strokeLinecap:"round"}))},p=function(e){var t=e.showMenu;return c.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 260 260",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(){return t()}},c.a.createElement("line",{x1:"20",y1:"85",x2:"240",y2:"85",stroke:"#D7E0E9",strokeWidth:"30",strokeLinecap:"round"}),c.a.createElement("line",{x1:"70",y1:"185",x2:"240",y2:"185",stroke:"#D7E0E9",strokeWidth:"30",strokeLinecap:"round"}))},b=function(){var e=Object(a.useContext)(q);if("/login"===Object(f.g)().pathname)return c.a.createElement("div",{className:"app__navigation"});return e.config.menu?c.a.createElement(g,null):c.a.createElement("div",{className:"app__navigation"},c.a.createElement(E,{redirectBack:function(){return console.log("redirect back")}}),c.a.createElement(p,{showMenu:function(){return e.config.showMenu()}}))},v=n(12),k=(n(96),n(97),function(e){var t=e.handle,n=e.message;return c.a.createElement("div",{className:"output__message received-message"},t&&c.a.createElement("h2",null,t),c.a.createElement("pre",null,n))}),y=function(e){var t=e.message;return c.a.createElement("div",{className:"output__message forwarded-message"},c.a.createElement("pre",null,t))},j=function(e){var t=e.error,n=e.message;return c.a.createElement("div",{className:"output__message error-message"},t&&c.a.createElement("h2",null,t),c.a.createElement("pre",null,n))},w=function(e){var t=e.content,n=e.socketId,r=Object(a.useRef)(null),o="",i=t.map((function(e,t){var a=e.handle,r=e.message,i=e.id,s=e.error,l=!(a===o||s===o);return o=s||a,s?c.a.createElement(j,{key:t,message:r,error:l?s:void 0}):n===i?c.a.createElement(y,{key:t,message:r}):c.a.createElement(k,{key:t,handle:l?a:void 0,message:r})}));return Object(a.useEffect)((function(){r.current.scrollIntoView({behavior:"smooth"})}),[t]),c.a.createElement("div",{className:"chat-window"},c.a.createElement("div",{className:"chat-window__output"},i),c.a.createElement("div",{ref:r}))},O=(n(98),function(e){var t=e.feedback;return t?c.a.createElement("span",{className:"message-toolbar__feedback"},t," is typing a message..."):c.a.createElement("span",{className:"message-toolbar__feedback"})}),_=n(30),x=n.n(_),N=n(50),C="https://enigmatic-springs-29801.herokuapp.com/",S={SOCKET_HOST:C,API:{LOGIN:"".concat(C,"/authenticate")}},D=function(e){var t=e.handleError,n=Object(m.a)(["handle","authenticated"]),r=Object(s.a)(n,2),o=r[0],i=r[1],l=Object(a.useState)(!1),u=Object(s.a)(l,2),d=u[0],h=u[1],g=Object(a.useState)(""),E=Object(s.a)(g,2),p=E[0],b=E[1],v=Object(a.useState)(o.handle||""),k=Object(s.a)(v,2),y=k[0],j=k[1],w=function(e){"handle"===e.target.name?j(e.target.value):"password"===e.target.name&&b(e.target.value)},O={error:"Authentication Error",message:"No access for this Username and Password"},_={error:"Input Error",message:"Username and Password are required"},C=function(){var e=Object(N.a)(x.a.mark((function e(n){var a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),y&&p||t(_),!y||p){e.next=6;break}return e.abrupt("return",n.target.form.password.focus());case 6:if(y||!p){e.next=8;break}return e.abrupt("return",n.target.form.handle.focus());case 8:return a=function(e){return{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}},e.next=11,fetch(S.API.LOGIN,a({handle:y,password:p}));case 11:return c=e.sent,e.next=14,c.json();case 14:if(!e.sent.error){e.next=19;break}return e.abrupt("return",t(O));case 19:i("handle",y,{path:"/",maxAge:2592e3}),i("authenticated",!0,{path:"/",maxAge:1296e3}),h(!0);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return d?c.a.createElement(f.a,{to:"/"}):c.a.createElement("form",{className:"login__form"},c.a.createElement("input",{className:"login__handle",placeholder:"handle",name:"handle",autoFocus:!0,onChange:function(e){return w(e)},value:y}),c.a.createElement("input",{className:"login__password",placeholder:"password",type:"password",name:"password",onChange:function(e){return w(e)},value:p}),c.a.createElement("input",{className:"login__submit",type:"submit",value:"\u27a4",onClick:function(e){return C(e)}}))},A=[{message:"Type our credentials and access the features",feedbackDelay:15e3,responseDelay:3e3},{message:"You see those input felids?...\n\tType your username and password instead of waiting\ud83d\ude03",feedbackDelay:15e3,responseDelay:3e3},{message:"What can you share and yet keep at the same time?\ud83e\udd14",feedbackDelay:15e3,responseDelay:3e3},{message:"...A STD.\ud83d\ude10",feedbackDelay:4e3,responseDelay:2e3}],P=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(0),i=Object(s.a)(o,2),l=i[0],u=i[1],m=Object(a.useState)([{handle:"HackChat",message:"Welcome to HackChat...",id:"HackChat"}]),d=Object(s.a)(m,2),f=d[0],h=d[1];return Object(a.useEffect)((function(){var e=function(){var e,t=A[l].message,n=A[l].feedbackDelay,a=A[l].responseDelay;return[setTimeout((function(){r("HackChat"),e=setTimeout((function(){h((function(e){return[].concat(Object(v.a)(e),[{message:t,handle:"HackChat",id:"HackChat"}])})),r("")}),a),u(l===A.length-1?0:l+1)}),n),e]}(),t=Object(s.a)(e,2),n=t[0],a=t[1];return function(){clearInterval(n),clearInterval(a)}})),c.a.createElement("div",{className:"login"},c.a.createElement("h2",null,"HackChat"),c.a.createElement(w,{content:f}),c.a.createElement(O,{feedback:n}),c.a.createElement(D,{handleError:function(e){h((function(t){return[].concat(Object(v.a)(t),[e])}))}}))},W=(n(100),n(101),function(e){var t=Object.keys(I).map((function(e){return I[e].code})),n=new RegExp("(\\".concat(t.join("|\\"),")"),"g");return e.replace(n,(function(e,t){return I[t].icon}))}),I={":)":{code:":\\)",icon:"\ud83d\ude42",category:"smiley"},":D":{code:":D",icon:"\ud83d\ude03",category:"smiley"},xD:{code:"xD",icon:"\ud83d\ude06",category:"smiley"},":(":{code:":\\(",icon:"\ud83d\ude41",category:"smiley"},";(":{code:";\\(",icon:"\ud83d\ude09",category:"smiley"},";I":{code:";I",icon:"\ud83e\udd28",category:"smiley"},":I":{code:":I",icon:"\ud83d\ude10",category:"smiley"},":o":{code:":o",icon:"\ud83d\ude2e",category:"smiley"},":O":{code:":O",icon:"\ud83d\ude31",category:"smiley"},":L":{code:":L",icon:"\ud83e\udd14",category:"smiley"},":P":{code:":P",icon:"\ud83d\ude1b",category:"smiley"},";P":{code:";P",icon:"\ud83d\ude1c",category:"smiley"},xP:{code:"xP",icon:"\ud83d\ude1d",category:"smiley"},"x=":{code:"x\\=",icon:"\ud83e\udd2e",category:"smiley"},"\\like":{code:"\\like",icon:"\ud83d\udc4d",category:"gestures"},"\\dislike":{code:"\\dislike",icon:"\ud83d\udc4e",category:"gestures"},"\\fuck":{code:"\\fuck",icon:"\ud83d\udd95",category:"gestures"},"\\rock":{code:"\\rock",icon:"\ud83e\udd18",category:"gestures"},"\\ghost":{code:"\\ghost",icon:"\ud83d\udc7b",category:"objects"},"\\alien":{code:"\\alien",icon:"\ud83d\udc7d",category:"objects"},"\\shit":{code:"\\shit",icon:"\ud83d\udca9",category:"objects"},"\\snowman":{code:"\\snowman",icon:"\u2603\ufe0f",category:"objects"},"\\quack":{code:"\\quack",icon:"\ud83e\udd86",category:"..."}},T=function(e){var t=e.appendEmoji,n=Object.keys(I);return c.a.createElement("div",{className:"message__emoji-view"},c.a.createElement("div",{className:"emoji-view__emoji-selector"},n.map((function(e){return c.a.createElement("div",{className:"emoji-selector__emoji",key:e,onClick:function(){return t(I[e].icon)}},c.a.createElement("span",{className:"emoji__icon"},I[e].icon),c.a.createElement("span",{className:"emoji__code"},e))}))))},L=function(e){var t=e.showEmojis,n=Object(a.useState)(""),r=Object(s.a)(n,2),o=r[0],i=r[1],l=Object(a.useContext)(q),u=Object(m.a)(["handle"]),d=Object(s.a)(u,1)[0],f=function(e){if(e.preventDefault(),o){var t=W(o);l.socket.emit("chat",{message:t,handle:d.handle,id:l.socket.id}),i("")}};return c.a.createElement("form",{className:"chat-input"},c.a.createElement("div",{className:"chat-input__message"},c.a.createElement("textarea",{className:"chat-input__message",placeholder:"message... \nshift + enter for newline",name:"message",onChange:function(e){return i(e.target.value)},onKeyPress:function(e){return function(e){i(W(o));var t=window.event.keyCode;if(13===t&&e.shiftKey)i(o);else if(13===t)return f(e);l.socket.emit("typing",d.handle)}(e)},value:o,autoFocus:!0}),c.a.createElement("input",{className:"chat-input__submit",type:"submit",value:"send",onClick:function(e){return f(e)}})),t&&c.a.createElement(T,{appendEmoji:function(e){i((function(t){return t+e}))}}))},M=(n(102),function(e){var t=e.feedback,n=e.toggleEmojis;return c.a.createElement("div",{className:"channel__message-toolbar"},c.a.createElement("div",{className:"message-toolbar__buttons"},c.a.createElement("input",{onClick:function(){return console.log("expand toolbar")},value:"...",type:"button"}),c.a.createElement("input",{onClick:function(){return n()},value:":)",type:"button"})),c.a.createElement(O,{feedback:t}))}),H=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1],m=Object(a.useState)(!1),d=Object(s.a)(m,2),f=d[0],h=d[1],g=Object(a.useContext)(q);Object(a.useEffect)((function(){return g.socket.on("chat",(function(e){return r((function(t){return[].concat(Object(v.a)(t),[e])}))})),function(){return g.socket.off("chat",console.log("stopping chat"))}}),[g.socket]),Object(a.useEffect)((function(){g.socket.on("typing",(function(e){u(e),setTimeout((function(){u(void 0)}),1e3)}))}),[g.socket]);return g.socket?c.a.createElement("div",{className:"channel"},c.a.createElement("h2",null,"main channel"),c.a.createElement(w,{content:n,socketId:g.socket.id}),c.a.createElement(M,{feedback:l,toggleEmojis:function(){return h((function(e){return!e}))}}),c.a.createElement(L,{showEmojis:f})):c.a.createElement("h2",null,"loading...")},B=(n(103),function(){var e=Object(m.a)(["theme"]),t=Object(s.a)(e,2)[1],n=function(){return t("theme","dark",{path:"/",maxAge:3600})},a=function(){return t("theme","light",{path:"/",maxAge:3600})},r=function(){return t("theme","system",{path:"/",maxAge:3600})};return c.a.createElement("div",{className:"preferences__theme-selector"},c.a.createElement("h3",null,"theme selector"),c.a.createElement("button",{onClick:function(){return n()}},"dark"),c.a.createElement("button",{onClick:function(){return a()}},"light"),c.a.createElement("button",{onClick:function(){return r()}},"system"))}),R=function(){return c.a.createElement("div",{className:"app__preferences"},c.a.createElement("h2",null,"preferences"),c.a.createElement(B,null))},U=function(){var e=Object(m.a)(["authenticated"]),t=Object(s.a)(e,1)[0],n=function(e){return"true"===t.authenticated?e:c.a.createElement(f.a,{to:"/login"})};return c.a.createElement(f.d,null,c.a.createElement(f.b,{path:"/login",children:c.a.createElement(P,null)}),c.a.createElement(f.b,{exact:!0,path:"/",children:n(c.a.createElement(H,null))}),c.a.createElement(f.b,{path:"/preferences",children:n(c.a.createElement(R,null))}),c.a.createElement(f.b,{path:"*",children:n(c.a.createElement("h2",null,"error"))}))},q=Object(a.createContext)(),K=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),i=Object(s.a)(o,2),l=i[0],f=i[1],h=Object(m.a)(["handle","authenticated","io","theme"]),g=Object(s.a)(h,2),E=g[0],p=g[1];Object(a.useEffect)((function(){E.authenticated&&p("io",l.id,{path:"/",maxAge:3600})}),[l]);"true"!==E.authenticated||l?"false"===E.authenticated&&l&&(f((function(e){return e.disconnect()&&null})),r(!1)):f(u()(S.SOCKET_HOST,{query:{handle:E.handle}}));var v={config:{menu:n,showMenu:function(){return r(!0)},hideMenu:function(){return r(!1)}},socket:l},k=function(){if(window.matchMedia)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},y=function(){return p("theme","dark",{path:"/",maxAge:2592e3}),"dark"};return c.a.createElement(q.Provider,{value:v},c.a.createElement("div",{className:"app theme-".concat("system"===E.theme?k():E.theme||y())},c.a.createElement(d.a,null,c.a.createElement(b,null),c.a.createElement(U,null))))},J=function(){return c.a.createElement(i.a,null,c.a.createElement(K,null))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(t,e)}))}}()},51:function(e,t,n){e.exports=n(104)},56:function(e,t,n){},57:function(e,t,n){},87:function(e,t){},90:function(e,t,n){},91:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.cb0526c4.chunk.js.map