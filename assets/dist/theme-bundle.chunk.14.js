(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{274:function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"default",(function(){return s}));e(3);var i=e(47),o=e(328);function r(t,n){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t})(t,n)}var s=function(n){function e(){return n.apply(this,arguments)||this}var i,s;s=n,(i=e).prototype=Object.create(s.prototype),i.prototype.constructor=i,r(i,s);var c=e.prototype;return c.handlePasswordlessLogin=function(n,e){Object(o.a)("/login.php?action=passwordless_login","POST",{email:n,redirect_url:e}).then((function(){t(".login-email-sent").css("visibility","visible")}))},c.onReady=function(){var n=this;t(".login-form-email").on("submit",(function(e){e.preventDefault();var i=t("#login_email").val(),o=n.context.passwordlessRedirectUrl;n.handlePasswordlessLogin(i,o)})),t(".login-email-redo").on("click",(function(n){n.preventDefault(),t(".login-email-sent").css("visibility","hidden")}))},e}(i.a)}.call(this,e(0))},328:function(t,n,e){"use strict";function i(t,n,e){return fetch(t,{method:n,credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t}))}e.d(n,"a",(function(){return i}))}}]);
//# sourceMappingURL=theme-bundle.chunk.14.js.map
