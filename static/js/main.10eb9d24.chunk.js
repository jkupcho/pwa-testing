(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){e.exports={toast:"Toast_toast__3w399"}},,,function(e,n,t){e.exports=t(20)},,,,,function(e,n,t){},,function(e,n,t){},,,function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(1),c=t.n(i),r=(t(15),t(3)),s=t(4),l=t(8),d=t(5),u=t(9),g=t(6),p=t.n(g),f=(t(17),function(e){function n(){var e,t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={event:""},t.handlePostMessage=function(e){var n=e.data,o=JSON.parse(n);"SCAN"===o.type&&t.setState({event:o.payload})},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("message",this.handlePostMessage)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("message",this.handlePostMessage)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Does Log work?"),a.a.createElement("span",null,"Most recent event ",this.state.event)))}}]),n}(o.Component)),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var w=t(7),m=t.n(w),k=function(e){var n=e.children,t=e.handleClick,o=void 0===t?function(){return console.log("nothing")}:t;return a.a.createElement("div",{className:m.a.toast,onClick:o,onTouchEnd:o},n)};c.a.render(a.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-testing",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/pwa-testing","/service-worker.js");v?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):h(n,e)})}}({onUpdate:function(e){if(console.log("Registration: ".concat(e)),console.log("Waiting: ".concat(e.waiting)),e.waiting){e.waiting.postMessage("skipWaiting");var n=document.getElementById("sw-notification");c.a.render(a.a.createElement(k,{handleClick:function(){window.location.reload()}},"Update to app available, please press here to load changes."),n),n.style.display="block"}}})}],[[10,2,1]]]);
//# sourceMappingURL=main.10eb9d24.chunk.js.map