(this.webpackJsonptickingclock=this.webpackJsonptickingclock||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),i=c.n(s),l=(c(9),c(10),c(11),c(12),c(2)),r=(c(13),c(0));var o=function(e){var t=Object(n.useState)(0),c=Object(l.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(2),o=Object(l.a)(i,2),j=o[0],d=o[1],b=Object(n.useState)(String(j).padStart(2,"0").concat(":").concat("00")),u=Object(l.a)(b,2),f=u[0],m=u[1],O=Object(n.useState)(1),x=Object(l.a)(O,2),h=x[0],p=x[1],N=Object(n.useState)(2),g=Object(l.a)(N,2),S=g[0],v=g[1],C=Object(n.useState)("Session"),k=Object(l.a)(C,2),w=k[0],T=k[1],y=Object(n.useState)(!0),L=Object(l.a)(y,2),B=L[0],D=L[1],F=Object(n.useState)(!0),P=Object(l.a)(F,2),A=P[0],E=P[1],I=Object(n.useState)(!1),J=Object(l.a)(I,2),M=J[0],R=J[1],V=Object(n.useRef)();return Object(n.useEffect)((function(){return V.current=setTimeout((function(){!0!==B&&(j>0?a>0?(console.log("line 43 :"+w),s(a-1)):0===a&&(console.log("line 46 :"+w),d(j-1),s(59)):0===j&&(a>0?(console.log("line 64 :"+w),s(a-1)):0===a&&(console.log("line 67 :"+w),M?(console.log("line 69 :"+w),T("Session"),d(S)):(console.log("line 73 :"+w),T("Break"),d(h)),clearTimeout(V.current),R(!M),s(0))))}),500),function(){clearTimeout(V.current)}}),[j,a,B,h,M,S,w]),Object(n.useEffect)((function(){m(String(j).padStart(2,"0").concat(":").concat(String(a).padStart(2,"0")))}),[j,a]),Object(r.jsxs)("div",{className:"MainContainer bg-success p-5 d-flex flex-column justify-content-center align-items-center",children:[Object(r.jsx)("div",{className:"AppTitleDiv pt-3 pb-3 mb-3",children:Object(r.jsx)("h1",{className:"AppTitle",children:"25 + 5 Clock"})}),Object(r.jsxs)("div",{className:"ControlDiv d-flex flex-row justify-content-center",children:[Object(r.jsxs)("div",{className:"ControlSection p-3 m-2 rounded-3",children:[Object(r.jsx)("div",{className:"ControlTitle",children:Object(r.jsx)("label",{id:"break-label",className:"h2 text-nowrap",children:"Break Length"})}),Object(r.jsxs)("div",{className:"Controls d-flex justify-content-center align-items-center",children:[Object(r.jsx)("i",{id:"break-increment",className:"fa fa-arrow-circle-up fa-3x m-2","aria-hidden":"true",onClick:function(){!0===A&&(60===h||p(h+1))}}),Object(r.jsx)("label",{id:"break-length",className:"ControlValue h2 m-2",children:h}),Object(r.jsx)("i",{id:"break-decrement",className:"fa fa-arrow-circle-down fa-3x m-2","aria-hidden":"true",onClick:function(){!0===A&&h>1&&p(h-1)}})]})]}),Object(r.jsxs)("div",{className:"ControlSection p-3 m-2 rounded-3",children:[Object(r.jsx)("div",{className:"ControlTitle",children:Object(r.jsx)("label",{id:"session-label",className:"h2 text-nowrap",children:"Session Length"})}),Object(r.jsxs)("div",{className:"Controls d-flex justify-content-center align-items-center",children:[Object(r.jsx)("i",{id:"session-increment",className:"fa fa-arrow-circle-up fa-3x m-2","aria-hidden":"true",onClick:function(){!0===A&&(60===S||(d(S+1),v(S+1)))}}),Object(r.jsx)("label",{id:"session-length",className:"ControlValue h2 m-2",children:S}),Object(r.jsx)("i",{id:"session-decrement",className:"fa fa-arrow-circle-down fa-3x m-2","aria-hidden":"true",onClick:function(){!0===A&&S>1&&(d(S-1),v(S-1))}})]})]})]}),Object(r.jsxs)("div",{className:"LiveClockDiv m-3 p-5 d-flex flex-column justify-content-around  align-items-center",children:[Object(r.jsx)("label",{id:"timer-label",className:"h2",children:w}),Object(r.jsx)("label",{id:"time-left",className:"ClockTime",children:f})]}),Object(r.jsxs)("div",{className:"PausePlayReset pt-3 pb-3 mt-3 d-flex justify-content-center",children:[Object(r.jsxs)("div",{id:"start_stop",className:"me-5",onClick:function(){D(!B),E(!A)},children:[Object(r.jsx)("i",{className:"fa fa-play-circle fa-3x mt-2 mb-2","aria-hidden":"true"}),Object(r.jsx)("i",{className:"fa fa-pause-circle fa-3x mt-2 mb-2","aria-hidden":"true"})]}),Object(r.jsx)("i",{id:"reset",className:"fa fa-refresh fa-3x m-2","aria-hidden":"true",onClick:function(){clearTimeout(V.current),s(0),d(25),p(5),v(25),D(!0),E(!0),T("Session"),R(!1)}})]})]})};var j=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(o,{})})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.f7ba72bb.chunk.js.map