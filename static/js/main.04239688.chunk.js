(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),r=c(2),s=(c(21),c(22),c(23),c(1)),j=c.n(s),i=c(6),o=c.n(i),l=c(0),b=function(e){var t=e.to,c=e.text;return Object(l.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})},children:c})},d=j.a.memo((function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(b,{to:"/",text:"Home"}),Object(l.jsx)(b,{to:"/people",text:"People"})]})})})})),h=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(d,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(r.b,{})})})]})},x=c(8),O=c(9),u=c(12),m=c(4);function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var f=function(e,t){return e.find((function(e){return e.name===t}))||null},v=(c(25),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),g=j.a.memo((function(e){var t=e.person;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(a.b,{to:"../".concat(t.slug),className:o()("todo",{"has-text-danger":"f"===t.sex}),children:t.name})})})),N=j.a.memo((function(e){var t=e.person,c=Object(r.i)().slug,n=void 0===c?"":c,a=t.slug===n,s=t.sex,j=t.born,i=t.died,b=t.mother,d=t.father,h=t.motherName,x=t.fatherName;return Object(l.jsxs)("tr",{"data-cy":"person",className:o()({"has-background-warning":a}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(g,{person:t})}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:j}),Object(l.jsx)("td",{children:i}),Object(l.jsx)("td",{children:b?Object(l.jsx)(g,{person:b}):h||"-"}),Object(l.jsx)("td",{children:d?Object(l.jsx)(g,{person:d}):x||"-"})]})})),y=j.a.memo((function(e){var t=e.people;return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(N,{person:e},e.slug)}))})]})})),w=function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),r=Object(m.a)(a,2),j=r[0],i=r[1],o=Object(s.useState)(!1),b=Object(m.a)(o,2),d=b[0],h=b[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(u.a)(Object(x.a)().mark((function e(){var t,c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,p();case 4:t=e.sent,c=t.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{mother:f(t,e.motherName),father:f(t,e.fatherName)})})),n(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h(!0);case 12:return e.prev=12,i(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[j&&Object(l.jsx)(v,{}),d&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!j&&!d&&!c.length&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})}),!j&&!d&&!!c.length&&Object(l.jsx)(y,{people:c})]})})]})},k=j.a.memo((function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})})),P=j.a.memo((function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})}));Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(r.e,{children:Object(l.jsxs)(r.c,{path:"/",element:Object(l.jsx)(h,{}),children:[Object(l.jsx)(r.c,{index:!0,element:Object(l.jsx)(k,{})}),Object(l.jsx)(r.c,{path:"/home",element:Object(l.jsx)(r.a,{to:"/",replace:!0})}),Object(l.jsxs)(r.c,{path:"people",children:[Object(l.jsx)(r.c,{index:!0,element:Object(l.jsx)(w,{})}),Object(l.jsx)(r.c,{path:":slug",element:Object(l.jsx)(w,{})})]}),Object(l.jsx)(r.c,{path:"*",element:Object(l.jsx)(P,{})})]})})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.04239688.chunk.js.map