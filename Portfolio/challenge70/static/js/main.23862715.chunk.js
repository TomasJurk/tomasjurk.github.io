(this.webpackJsonpchallange70=this.webpackJsonpchallange70||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(3),r=n.n(i),a=(n(9),n(4)),d=(n(10),n(0)),j=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){fetch("https://www.strava.com/oauth/token",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({client_id:"68150",client_secret:"409d4f9261a2a0ab5410113d98ab6abe682cba00",refresh_token:"2d209a528d63f336d2205629b0d4f152c766d6bc",grant_type:"refresh_token"})}).then((function(e){return e.json()})).then((function(e){!function(e){var t=e.access_token,n="https://www.strava.com/api/v3/athlete/activities?access_token=".concat(t);fetch(n).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return"Walk"===e.type})).filter((function(e){var t=new Date(e.start_date);return t.getDate()>=6&&t.getDate()<=12&&6===t.getMonth()}));s(t),console.log(t)}))}(e)}))}),[]);var i=n.reduce((function(e,t){return e+t.distance}),0);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h2",{children:"70km walking per week progress"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Tue 06:"}),Object(d.jsxs)("b",{children:[n[0]?(n[0].distance/1e3).toFixed(2):"----- ","km"]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Wed 07:"}),Object(d.jsxs)("b",{children:[n[1]?(n[1].distance/1e3).toFixed(2):"----- ","km"]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Thu 08:"}),Object(d.jsxs)("b",{children:[n[2]?(n[2].distance/1e3).toFixed(2):"----- ","km"]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Fri 09:"}),Object(d.jsxs)("b",{children:[n[3]?(n[3].distance/1e3).toFixed(2):"----- ","km"]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Sat 10:"}),Object(d.jsxs)("b",{children:[n[4]?(n[4].distance/1e3).toFixed(2):"----- ","km"]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Sun 11:"}),Object(d.jsxs)("b",{children:[n[5]?(n[5].distance/1e3).toFixed(2):"----- ","km"]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Mon 12:"}),Object(d.jsxs)("b",{children:[n[6]?(n[6].distance/1e3).toFixed(2):"----- ","km"]})]})]}),Object(d.jsxs)("h3",{children:["Left to go: ",70-(i/1e3).toFixed(2),"km"]})]})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),o()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.23862715.chunk.js.map