(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,c,t){},55:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),n=t(22),i=t.n(n),l=(t(30),t(25)),r=t(4),j=t(0);var d=function(){var e=Object(a.useState)(!1),c=Object(r.a)(e,2),t=c[0],s=c[1];return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light font-weight-bold ",children:[Object(j.jsx)("button",{class:"navbar-toggler",type:"button","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return s(!t)},children:Object(j.jsx)("span",{class:"navbar-toggler-icon"})}),Object(j.jsx)("div",{class:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent",style:t?{display:"block",transition:"0.3s height ease-in",height:"auto"}:{display:"none"},children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"/",children:"STORY"})}),Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsx)("a",{className:"nav-link",href:"/",children:"OUR PRODUCTS"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"/",children:"STORE LOCATOR"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"/",children:"KITCHEN"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"/",children:"MEDIA"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"",children:"BLOGS"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"",children:"CONTACT US"})})]})})]})})},b=function(){return Object(j.jsx)("div",{className:"banner",children:Object(j.jsx)("div",{className:"banner-text text-light",children:"OUR PRODUCT"})})},o=t(12);var h=function(e){return Object(j.jsx)("div",{className:"filter-list",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:"FILTER BY"}),Object(j.jsxs)("div",{className:"card-text",children:[Object(j.jsx)("p",{children:"Categories"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("input",{className:"form-check-input",type:"checkbox",id:"all",checked:e.activeFilter.includes("all"),onChange:function(c){e.onChange(c.target.id)}}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"all",children:"All"})]}),e.categories&&e.categories.map((function(c){return Object(j.jsxs)("li",{children:[Object(j.jsx)("input",{className:"form-check-input",type:"checkbox",id:c,checked:e.activeFilter.includes(c),onChange:function(c){e.onChange(c.target.id)}}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:c,children:c})]},c)}))]})]})]})})})},O=t(23),x=t.n(O);var m=function(){var e=Object(a.useState)([]),c=Object(r.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)([]),i=Object(r.a)(n,2),l=i[0],d=i[1],b=Object(a.useState)([]),O=Object(r.a)(b,2),m=O[0],u=O[1],v=Object(a.useState)(["all"]),f=Object(r.a)(v,2),N=f[0],p=f[1];Object(a.useEffect)((function(){x.a.get("https://demo-product-backend.herokuapp.com/product").then((function(e){s(e.data),g(e.data)})),0===N.length||N.includes("all")?u(t):u(t.filter((function(e){return N.includes(e.categories)})))}),[t]);var g=function(e){var c=l;e.map((function(e){c.includes(e.categories)||(c.push(e.categories),d(c))}))};return Object(j.jsx)("div",{className:"container p-5",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-3",children:Object(j.jsx)(h,{onChange:function(e){if("ALL"===e)N.length===m.length?p([]):p(m.map((function(e){return e.categories})));else if(N.includes(e)){var c=N.indexOf(e),t=Object(o.a)(N);t.splice(c,1),p(t)}else p([].concat(Object(o.a)(N),[e]))},categories:l,activeFilter:N})}),Object(j.jsx)("div",{className:"col-lg-9",children:Object(j.jsx)("div",{className:"product-list container-fluid d-flex flex-column  align-items-center",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("p",{className:"product-title",children:[N.includes("all")?"all":N.map((function(e){return Object(j.jsxs)("span",{children:[e," "]},e)})),"(",m.length," PRODUCTS)"]}),Object(j.jsx)("div",{className:"row",children:m&&m.map((function(e){return Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body text-center",children:[Object(j.jsx)("img",{src:e.imageuri,alt:"",className:"product-image"}),Object(j.jsx)("h5",{className:"card-title",children:e.productname}),Object(j.jsx)("p",{children:e.description}),Object(j.jsx)("p",{className:"available",children:e.availablein})]})})},e._id)}))})]})})})]})})};var u=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("div",{className:"container pt-5",children:[Object(j.jsxs)("div",{className:"row justify-content-center",children:[Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)("span",{className:"email"}),Object(j.jsxs)("div",{children:["Email id",Object(j.jsx)("br",{}),"xyz@laxmi.com"]})]}),Object(j.jsxs)("div",{className:" contact",children:[Object(j.jsx)("span",{className:"phone"}),Object(j.jsxs)("div",{children:["Phone no.",Object(j.jsx)("br",{}),"123456789"]})]})]}),Object(j.jsxs)("div",{className:"row justify-content-center",children:[Object(j.jsx)("div",{className:"insta"}),Object(j.jsx)("div",{className:"yt"}),Object(j.jsx)("div",{className:"ld"}),Object(j.jsx)("div",{className:"fb"})]}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Terms and Conditions"}),Object(j.jsx)("li",{children:"Privacy Policy"}),Object(j.jsx)("li",{children:"Copyright Reserved @xyz"}),Object(j.jsx)("li",{children:"Crafted by @Togglehead.in"})]})})]})})};var v=function(){return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)(b,{}),Object(j.jsx)(m,{}),Object(j.jsx)(u,{})]})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),f()}},[[55,1,2]]]);
//# sourceMappingURL=main.e993ac5b.chunk.js.map