(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(2),r=t.n(i),c=(t(14),t(3)),s=t(4),l=t(7),u=t(5),d=t(8),f=t(6),g=t.n(f),v=(t(16),function(e){function n(){var e,t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={event:""},t.handlePostMessage=function(e){var n=e.data;t.setState({event:n})},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("message",this.handlePostMessage)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("message",this.handlePostMessage)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Refactored a tiny bit."),a.a.createElement("span",null,"Most recent event ",this.state.event)))}}]),n}(o.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-testing",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/pwa-testing","/service-worker.js");p?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):h(n,e)})}}()},6:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},9:function(e,n,t){e.exports=t(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.67d0d2ad.chunk.js.map