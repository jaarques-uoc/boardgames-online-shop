(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(40)},30:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l);t(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(31);var o=t(1),m=t(6),s=t(9),i=t(7),d=function(e){return{id:e,email:"email_".concat(e,"@test.com"),fullName:"Full name test",address:"Test address 123, Bla bla",country:"Test",creationDate:"2019"}},u=function(e){var a=e.user;return r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",{scope:"row"},a.id),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/users/".concat(a.id)},a.email)),r.a.createElement("td",null,a.fullName),r.a.createElement("td",null,a.creationDate))},E=function(e){return p(e)},p=function(e){return h(e,"Item name ".concat(e),"Some description 1",parseInt(e)+.34,"https://static.cardmarket.com/img/548dd39417c935651fbd98c3ee6d5951/items/1/WAR/372131.jpg")},h=function(e,a,t,n,r){return{id:e,name:a,description:t,price:n,imageUrl:r}},v=function(e){var a=e.cartItem,t=(a.product.price*a.quantity).toFixed(2);return r.a.createElement("tr",{className:"text-center cart-item"},r.a.createElement("td",null,r.a.createElement(o.b,{to:"/products/".concat(a.product.id)},r.a.createElement("img",{src:a.product.imageUrl}))),r.a.createElement("td",{className:"align-middle"},a.product.name),r.a.createElement("td",{className:"align-middle text-right"},a.product.price," \u20ac"),r.a.createElement("td",{className:"align-middle"},a.quantity),r.a.createElement("td",{className:"align-middle text-right"},t," \u20ac"))},N=function(e){var a=e.label,t=e.value;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},a),r.a.createElement("label",{className:"col-sm-9 col-form-label"},t))},b=t(10),f=t(11),g=t(12),y=t(14),w=t(13),C=t(15),j=function(e){var a=e.fieldName,t=e.label,n=e.onChange;return r.a.createElement(O,{fieldName:a,label:t,onChange:n,type:"text"})},k=function(e){var a=e.fieldName,t=e.label,n=e.onChange;return r.a.createElement(O,{fieldName:a,label:t,onChange:n,type:"password"})},O=function(e){var a=e.fieldName,t=e.label,n=e.type,l=e.placeholder,c=e.onChange;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:a,className:"col-sm-3 col-form-label"},t),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:n,className:"form-control",id:a,onChange:c,placeholder:l})))},x=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(y.a)(this,(e=Object(w.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",repeatPassword:"",fullName:"",address:"",country:""},t.onClick=function(){return!1},t.onChange=function(e){return t.setState(Object(b.a)({},e.target.id,e.target.value))},t.validateForm=function(){return!!t.state.email&&!!t.state.password&&!!t.state.repeatPassword&&t.state.password===t.state.repeatPassword&&!!t.state.fullName&&!!t.state.address&&!!t.state.country},t}return Object(C.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("form",null,r.a.createElement(j,{fieldName:"email",label:"Email address",onChange:this.onChange}),r.a.createElement(k,{fieldName:"password",label:"Password",onChange:this.onChange}),r.a.createElement(k,{fieldName:"repeatPassword",label:"Repeat password",onChange:this.onChange}),r.a.createElement(j,{fieldName:"fullName",label:"Full name",onChange:this.onChange}),r.a.createElement(j,{fieldName:"address",label:"Address",onChange:this.onChange}),r.a.createElement(j,{fieldName:"country",label:"Country",onChange:this.onChange}),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("button",{type:"button",onClick:this.onClick,disabled:!this.validateForm(),className:"btn btn-primary"},"Sign up")))))))}}]),a}(r.a.Component),F=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(y.a)(this,(e=Object(w.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:""},t.onClick=function(){return!1},t.onChange=function(e){return t.setState(Object(b.a)({},e.target.id,e.target.value))},t.validateForm=function(){return!!t.state.email&&!!t.state.password},t}return Object(C.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",onChange:this.onChange,placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",onChange:this.onChange,placeholder:"Password"})),r.a.createElement("button",{type:"button",disabled:!this.validateForm(),onClick:this.onClick,className:"btn btn-primary btn-block"},"Log in")))),r.a.createElement("div",{className:"row justify-content-center login-separator"},r.a.createElement("div",{className:"col-1"},r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-auto"},"or"),r.a.createElement("div",{className:"col-1"},r.a.createElement("hr",null))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement(o.b,{to:"/signup"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block"},"Sign up")))))}}]),a}(r.a.Component),A=function(e){return{id:e,amount:123.23,products:[{product:E(10),quantity:2},{product:E(11),quantity:2}],date:"2019",userId:e+"567"}},P=function(e){var a=e.order;return r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",{scope:"row"},a.id),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/orders/".concat(a.id)},a.id)),r.a.createElement("td",null,a.userId),r.a.createElement("td",{className:"text-right"},a.amount," \u20ac"),r.a.createElement("td",null,a.date))},q=function(e){var a=e.children,t=e.id;return r.a.createElement(o.b,{to:"/products/".concat(t)},a)},I=function(e){var a=e.product;return r.a.createElement("div",{className:"col-6 col-md-2 text-center"},r.a.createElement("div",{className:"grid-item"},r.a.createElement("div",null,r.a.createElement(q,{id:a.id},r.a.createElement("img",{src:a.imageUrl}))),r.a.createElement(q,{id:a.id},a.name),r.a.createElement("div",null,a.price," \u20ac"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Add to cart")))},U=function(e){var a=e.productsRow;return r.a.createElement("div",{className:"row grid-row"},a.map(function(e){return r.a.createElement(I,{product:e})}))},S=function(e,a){var t=[];return e.map(function(e,n){return function(e,t,n){var r=Math.floor(n/a);n%a===0&&(e[r]=[]),e[r].push(t)}(t,e,n)}),t},R=r.a.createElement(o.a,null,r.a.createElement(function(e){return Object(s.a)(e),r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("a",{href:"/",className:"navbar-brand d-flex w-50 mr-auto"},"Boardgames online shop"),r.a.createElement("div",{className:"navbar-collapse collapse w-100",id:"collapsingNavbar3"},r.a.createElement("ul",{className:"nav navbar-nav ml-auto w-100 justify-content-end"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/user"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/cart"},"Cart")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/orders"},"Orders")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/users"},"Users")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/login"},"Log in")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/signup"},"Sign up")))))},null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/login",component:F}),r.a.createElement(m.a,{path:"/signup",component:x}),r.a.createElement(m.a,{path:"/cart",component:function(){var e,a={userId:e,products:[{product:E(10),quantity:2},{product:E(11),quantity:1},{product:E(123),quantity:3},{product:E(84),quantity:20}]},t=a.products.reduce(function(e,a){return e+a.quantity*a.product.price},0);return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light text-center"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Product"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Price"),r.a.createElement("th",{scope:"col"},"Quantity"),r.a.createElement("th",{scope:"col"},"Total price"))),r.a.createElement("tbody",null,a.products.map(function(e){return r.a.createElement(v,{cartItem:e})}),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5",className:"text-right"},t," \u20ac")))))))}}),r.a.createElement(m.a,{path:"/orders/:id",component:function(e){var a=e.match;return r.a.createElement("div",{className:"container content-padding"},"Order ",a.params.id)}}),r.a.createElement(m.a,{path:"/orders",component:function(){var e=Object(i.a)(Array(20).keys()).map(A);return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light text-center"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Order id"),r.a.createElement("th",{scope:"col"},"Order id"),r.a.createElement("th",{scope:"col"},"User id"),r.a.createElement("th",{scope:"col"},"Total price"),r.a.createElement("th",{scope:"col"},"Checkout date"))),r.a.createElement("tbody",null,e.map(function(e){return r.a.createElement(P,{order:e})}))))))}}),r.a.createElement(m.a,{path:"/users/:id",component:function(e){var a=e.match,t=d(a.params.id);return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement(N,{label:"User id",value:t.id}),r.a.createElement(N,{label:"Email address",value:t.email}),r.a.createElement(N,{label:"Full name",value:t.fullName}),r.a.createElement(N,{label:"Address",value:t.address}),r.a.createElement(N,{label:"Country",value:t.country}))))}}),r.a.createElement(m.a,{path:"/users",component:function(){var e=Object(i.a)(Array(20).keys()).map(d);return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light text-center"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"User id"),r.a.createElement("th",{scope:"col"},"Email address"),r.a.createElement("th",{scope:"col"},"Full name"),r.a.createElement("th",{scope:"col"},"Registration date"))),r.a.createElement("tbody",null,e.map(function(e){return r.a.createElement(u,{user:e})}))))))}}),r.a.createElement(m.a,{path:"/products/:id",component:function(e){var a=e.match,t=E(a.params.id);return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 text-center"},r.a.createElement("img",{src:t.imageUrl})),r.a.createElement("div",{className:"col-4 d-flex align-items-start flex-column"},r.a.createElement("div",{className:"mb-auto p-2"},r.a.createElement("h1",{className:"product-info-padding"},t.name),r.a.createElement("h5",{className:"product-info-padding"},t.price," \u20ac"),r.a.createElement("div",null,t.description)),r.a.createElement("div",{className:"p-2"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Add to cart")))))}}),r.a.createElement(m.a,{exact:!0,path:"/",component:function(e){Object(s.a)(e);var a=S(Object(i.a)(Array(20).keys()).map(p),6);return r.a.createElement("div",{className:"container-fluid content-padding"},a.map(function(e){return r.a.createElement(U,{productsRow:e})}))}}),r.a.createElement(m.a,{component:function(){return r.a.createElement("h1",{className:"container content-padding"},"Not found")}})));c.a.render(R,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.70107148.chunk.js.map