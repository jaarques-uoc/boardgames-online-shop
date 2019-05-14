(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c);a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(31);var l=a(6),s=a(11),i=a(21),m=a(1),u=a(2),d=a(4),h=a(3),p=a(5),E=function(e){return fetch(e,{method:"GET",headers:{Accept:"application/json"}}).then(v)},f=function(e,t){return fetch(e,{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(v)},v=function(e){if(e.ok)return e.json();throw console.log("Response not ok: ".concat(e.status)),""},b={CUSTOMERS_WS:"".concat("http://localhost:7000","/customers-ws"),PRODUCTS_WS:"".concat("http://localhost:7000","/products-ws"),ORDERS_WS:"".concat("http://localhost:7000","/orders-ws"),CARTS_WS:"".concat("http://localhost:7000","/carts-ws")},g=function(){return E("".concat(b.CUSTOMERS_WS,"/customers/")).catch(function(e){throw console.log("Error when retrieving users: ".concat(e)),""})},N=function(e){return E("".concat(b.CUSTOMERS_WS,"/customers/").concat(e)).catch(function(t){throw console.log("Error when retrieving user ".concat(e,": ").concat(t)),""})},y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={users:[]},a.loadUsers=function(){return g().then(function(e){return a.setState({users:e})})},a.loadUsers(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h1",null,"Users"),this.state.users&&this.state.users.length>0&&r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light text-center"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"User id"),r.a.createElement("th",{scope:"col"},"Email address"),r.a.createElement("th",{scope:"col"},"Full name"),r.a.createElement("th",{scope:"col"},"Registration date"))),r.a.createElement("tbody",null,this.state.users.map(function(e,t){return r.a.createElement(O,{user:e,key:t})}))))))}}]),t}(r.a.Component),O=function(e){var t=e.user;return r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",{scope:"row"},t.id),r.a.createElement("td",null,r.a.createElement(l.b,{to:"/users/".concat(t.id)},t.email)),r.a.createElement("td",null,t.fullName),r.a.createElement("td",null,t.creationDate))},w=function(e){return"".concat(b.CARTS_WS,"/customers/").concat(e,"/cart")},j=function(e){return E(w(e)).catch(function(t){throw console.log("Error when retrieving cart for user ".concat(e,": ").concat(t)),""})},C=function(e,t){return f("".concat(w(e),"/item"),t).catch(function(t){throw console.log("Error when updating cart for user ".concat(e,": ").concat(t)),""})},S=function(e,t){return f("".concat(w(e),"/item/increment"),t).catch(function(t){throw console.log("Error when updating cart for user ".concat(e,": ").concat(t)),""})},k=a(24),P=function(e){var t=e.orderItem,a=e.onChange,n=e.disabled,c=e.readOnly,o=(t.productDto.price*t.quantity).toFixed(2);return r.a.createElement("tr",{className:"text-center cart-item"},r.a.createElement("td",null,r.a.createElement(l.b,{to:"/products/".concat(t.productDto.id)},r.a.createElement("img",{src:t.productDto.imageUrl}))),r.a.createElement("td",{className:"align-middle"},t.productDto.name),r.a.createElement("td",{className:"align-middle text-right"},t.productDto.price," \u20ac"),r.a.createElement("td",{className:"align-middle"},c?t.quantity:r.a.createElement(x,{quantity:t.quantity,onChange:a,disabled:n})),r.a.createElement("td",{className:"align-middle text-right"},o," \u20ac"))},x=function(e){var t=e.quantity,a=e.onChange,n=e.disabled;return r.a.createElement("select",{onChange:a,disabled:n},Object(k.a)(Array(11).keys()).map(function(e){return r.a.createElement("option",{value:e,key:e,selected:t===e},e)}))},U=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={cart:void 0,loading:!1,userId:12345678},a.onChange=function(e){return function(t){a.setState({loading:!0});var n={productDto:e,quantity:t.target.value};C(a.state.userId,n).then(function(e){return a.setState({cart:e})}).finally(function(){return a.setState({loading:!1})})}},a.calculateTotalPrice=function(e){return e.reduce(function(e,t){return e+t.quantity*t.productDto.price},0)},a.loadCart=function(){return j(a.state.userId).then(function(e){return a.setState({cart:e})})},a.loadCart(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h1",null,"Cart"),this.state.cart&&this.state.cart.orderItemDtos&&r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light text-center"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Product"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Price"),r.a.createElement("th",{scope:"col"},"Quantity"),r.a.createElement("th",{scope:"col"},"Total price"))),r.a.createElement("tbody",null,this.state.cart.orderItemDtos.map(function(t,a){return r.a.createElement(P,{orderItem:t,key:a,onChange:e.onChange(t.productDto),disabled:e.state.loading,readOnly:!1})}),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5",className:"text-right"},this.calculateTotalPrice(this.state.cart.orderItemDtos).toFixed(2)," \u20ac")))))))}}]),t}(r.a.Component),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={user:void 0},a.loadUser=function(){return N(a.props.match.params.id).then(function(e){return a.setState({user:e})})},a.loadUser(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.user;return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h1",null,"User ",this.props.match.params.id),e&&r.a.createElement("div",{className:"col-12"},r.a.createElement(R,{label:"User id",value:e.id}),r.a.createElement(R,{label:"Email address",value:e.email}),r.a.createElement(R,{label:"Full name",value:e.fullName}),r.a.createElement(R,{label:"Address",value:e.address}),r.a.createElement(R,{label:"Country",value:e.country})))))}}]),t}(r.a.Component),R=function(e){var t=e.label,a=e.value;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},t),r.a.createElement("label",{className:"col-sm-9 col-form-label"},a))},T=function(){return E("".concat(b.PRODUCTS_WS,"/products/")).catch(function(e){throw console.log("Error when retrieving productss: ".concat(e)),""})},I=function(e){return E("".concat(b.PRODUCTS_WS,"/products/").concat(e)).catch(function(t){throw console.log("Error when retrieving product ".concat(e,": ").concat(t)),""})},W=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={product:void 0,userId:12345678},a.loadProduct=function(){return I(a.props.match.params.id).then(function(e){return a.setState({product:e})})},a.addProduct=function(){return S(a.state.userId,a.state.product).then(function(){return console.log("Added!!")})},a.loadProduct(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.product;return r.a.createElement("div",{className:"container content-padding"},e&&r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 text-center"},r.a.createElement("img",{src:e.imageUrl})),r.a.createElement("div",{className:"col-4 d-flex align-items-start flex-column"},r.a.createElement("div",{className:"mb-auto p-2"},r.a.createElement("h1",{className:"product-info-padding"},e.name),r.a.createElement("h5",{className:"product-info-padding"},e.price," \u20ac"),r.a.createElement("div",null,e.description)),r.a.createElement("div",{className:"p-2"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addProduct},"Add to cart")))))}}]),t}(r.a.Component),A=a(13),F=function(e){var t=e.fieldName,a=e.label,n=e.onChange;return r.a.createElement(q,{fieldName:t,label:a,onChange:n,type:"text"})},_=function(e){var t=e.fieldName,a=e.label,n=e.onChange;return r.a.createElement(q,{fieldName:t,label:a,onChange:n,type:"password"})},q=function(e){var t=e.fieldName,a=e.label,n=e.type,c=e.placeholder,o=e.onChange;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:t,className:"col-sm-3 col-form-label"},a),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:n,className:"form-control",id:t,onChange:o,placeholder:c})))},M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",repeatPassword:"",fullName:"",address:"",country:""},a.onClick=function(){return!1},a.onChange=function(e){return a.setState(Object(A.a)({},e.target.id,e.target.value))},a.validateForm=function(){return!!a.state.email&&!!a.state.password&&!!a.state.repeatPassword&&a.state.password===a.state.repeatPassword&&!!a.state.fullName&&!!a.state.address&&!!a.state.country},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("form",null,r.a.createElement(F,{fieldName:"email",label:"Email address",onChange:this.onChange}),r.a.createElement(_,{fieldName:"password",label:"Password",onChange:this.onChange}),r.a.createElement(_,{fieldName:"repeatPassword",label:"Repeat password",onChange:this.onChange}),r.a.createElement(F,{fieldName:"fullName",label:"Full name",onChange:this.onChange}),r.a.createElement(F,{fieldName:"address",label:"Address",onChange:this.onChange}),r.a.createElement(F,{fieldName:"country",label:"Country",onChange:this.onChange}),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("button",{type:"button",onClick:this.onClick,disabled:!this.validateForm(),className:"btn btn-primary"},"Sign up")))))))}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onClick=function(){return!1},a.onChange=function(e){return a.setState(Object(A.a)({},e.target.id,e.target.value))},a.validateForm=function(){return!!a.state.email&&!!a.state.password},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",onChange:this.onChange,placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",onChange:this.onChange,placeholder:"Password"})),r.a.createElement("button",{type:"button",disabled:!this.validateForm(),onClick:this.onClick,className:"btn btn-primary btn-block"},"Log in")))),r.a.createElement("div",{className:"row justify-content-center login-separator"},r.a.createElement("div",{className:"col-1"},r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-auto"},"or"),r.a.createElement("div",{className:"col-1"},r.a.createElement("hr",null))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement(l.b,{to:"/signup"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block"},"Sign up")))))}}]),t}(r.a.Component),J=function(){return E("".concat(b.ORDERS_WS,"/orders/")).catch(function(e){throw console.log("Error when retrieving orders: ".concat(e)),""})},L=function(e){return E("".concat(b.ORDERS_WS,"/orders/").concat(e)).catch(function(t){throw console.log("Error when retrieving order ".concat(e,": ").concat(t)),""})},Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={order:void 0},a.loadOrder=function(){return L(a.props.match.params.id).then(function(e){return a.setState({order:e})})},a.loadOrder(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h1",null,"Order ",this.props.match.params.id),this.state.order&&this.state.order.orderItemDtos&&r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light text-center"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Product"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Price"),r.a.createElement("th",{scope:"col"},"Quantity"),r.a.createElement("th",{scope:"col"},"Total price"))),r.a.createElement("tbody",null,this.state.order.orderItemDtos.map(function(e,t){return r.a.createElement(P,{orderItem:e,key:t,readOnly:!0})}),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5",className:"text-right"},this.state.order.amount," \u20ac")))))))}}]),t}(r.a.Component),G=function(e){var t=e.children,a=e.id;return r.a.createElement(l.b,{to:"/products/".concat(a)},t)},H=function(e){var t=e.product;return r.a.createElement("div",{className:"col-6 col-md-2 text-center"},r.a.createElement("div",{className:"grid-item"},r.a.createElement("div",null,r.a.createElement(G,{id:t.id},r.a.createElement("img",{src:t.imageUrl}))),r.a.createElement(G,{id:t.id},t.name),r.a.createElement("div",null,t.price," \u20ac"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Add to cart")))},$=function(e){var t=e.productsRow;return r.a.createElement("div",{className:"row grid-row"},t.map(function(e,t){return r.a.createElement(H,{product:e,key:t})}))},z=function(e,t){if(e){var a=[];return e.map(function(e,n){return function(e,a,n){var r=Math.floor(n/t);n%t===0&&(e[r]=[]),e[r].push(a)}(a,e,n)}),a}},K=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={products:[]},a.loadProducts=function(){return T().then(function(e){return a.setState({products:e})})},a.loadProducts(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=z(this.state.products,6);return this.state.products&&r.a.createElement("div",{className:"container-fluid content-padding"},e.map(function(e,t){return r.a.createElement($,{productsRow:e,key:t})}))}}]),t}(r.a.Component),V=function(){return E("".concat("http://localhost:7000","/system/health")).catch(function(e){return console.log("Error when retrieving system health: ".concat(e))})},X=function(){return r.a.createElement("h1",null,"System is currently loading. Wait for a couple of minutes and try again. Thanks!")},Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={systemStatus:void 0,initialTimeoutPassed:!1},a.loadSystemStatus=function(){return V().then(function(e){return a.setState({systemStatus:e})})},a.isSystemUp=function(){return a.state.systemStatus&&a.state.systemStatus.services.map(function(e){return e.status}).reduce(function(e,t){return"UP"===t&&e},!0)},a.loadSystemStatus(),setTimeout(function(){return a.setState({initialTimeoutPassed:!0})},2e3),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.isSystemUp()&&r.a.createElement(K,null),!this.isSystemUp()&&this.state.initialTimeoutPassed&&r.a.createElement(X,null))}}]),t}(r.a.Component),Z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={orders:[]},a.loadOrders=function(){return a.props.fetchOrders().then(function(e){return a.setState({orders:e})})},a.loadOrders(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.orders;return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h1",null,this.props.title),e&&e.length>0&&r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light text-center"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Order id"),r.a.createElement("th",{scope:"col"},"User id"),r.a.createElement("th",{scope:"col"},"Total price"),r.a.createElement("th",{scope:"col"},"Checkout date"))),r.a.createElement("tbody",null,e.map(function(e,t){return r.a.createElement(ee,{order:e,key:t})}))))))}}]),t}(r.a.Component),ee=function(e){var t=e.order;return r.a.createElement("tr",{className:"text-center"},r.a.createElement("td",null,r.a.createElement(l.b,{to:"/orders/".concat(t.id)},t.id)),r.a.createElement("td",null,t.customerId),r.a.createElement("td",{className:"text-right"},t.amount," \u20ac"),r.a.createElement("td",null,t.date))},te=r.a.createElement(l.a,null,r.a.createElement(function(e){return Object(i.a)(e),r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("a",{href:"/",className:"navbar-brand d-flex w-50 mr-auto"},"Boardgames online shop"),r.a.createElement("div",{className:"navbar-collapse collapse w-100",id:"collapsingNavbar3"},r.a.createElement("ul",{className:"nav navbar-nav ml-auto w-100 justify-content-end"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/users/678"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/cart"},"Cart")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/orders"},"All customer orders")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/myOrders"},"My Orders")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/users"},"Users")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/login"},"Log in")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/signup"},"Sign up")))))},null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/login",component:B}),r.a.createElement(s.a,{path:"/signup",component:M}),r.a.createElement(s.a,{path:"/cart",component:U}),r.a.createElement(s.a,{path:"/orders/:id",component:Q}),r.a.createElement(s.a,{path:"/orders",component:function(){return r.a.createElement(Z,{fetchOrders:J,title:"All customer orders"})}}),r.a.createElement(s.a,{path:"/myOrders",component:function(){return r.a.createElement(Z,{fetchOrders:function(){return e=123324234,E("".concat(b.ORDERS_WS,"/customers/").concat(e,"/orders/")).catch(function(t){throw console.log("Error when retrieving orders for customer ".concat(e,": ").concat(t)),""});var e},title:"My orders"})}}),r.a.createElement(s.a,{path:"/users/:id",component:D}),r.a.createElement(s.a,{path:"/users",component:y}),r.a.createElement(s.a,{path:"/products/:id",component:W}),r.a.createElement(s.a,{exact:!0,path:"/",component:Y}),r.a.createElement(s.a,{component:function(){return r.a.createElement("h1",{className:"container content-padding"},"Not found")}})));o.a.render(te,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.d75ceeaa.chunk.js.map