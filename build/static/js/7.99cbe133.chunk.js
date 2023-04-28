(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{104:function(e,t,c){"use strict";var r=c(21),a=c(25),s=c(8),n=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,[{key:"createOrder",value:function(e,t,c,r){return s.a.post("/orders/create",{amount:e,itemTotal:t,ref:c,paymentMethod:r})}},{key:"getAllOrders",value:function(e){return s.a.get("/orders/?page=".concat(e))}},{key:"getOrder",value:function(e){return s.a.get("/orders/".concat(e))}}]),e}();t.a=new n},113:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c(5),s=c(2),n=c(116),d=c(114),l=c(30),i=c(18),o=c(1),j=c(10),u=c(104);t.default=function(){var e=Object(j.i)().id,t=Object(j.h)().state,c=Object(o.useState)(null),b=Object(a.a)(c,2),O=b[0],m=b[1];return Object(o.useEffect)((function(){u.a.getOrder(e).then((function(e){return m(e.data)}))}),[e]),Object(r.jsx)(i.a,{children:Object(r.jsxs)("div",{className:"my-4",children:[Object(r.jsx)("h1",{className:"font-bold text-2xl",children:"Order Details"}),Object(r.jsxs)("p",{children:["Order no: #",t.order.order_id]}),Object(r.jsx)("p",{children:"".concat(t.order.total||"Not available"," items")}),Object(r.jsxs)("p",{children:["Status: ",Object(r.jsx)(s.Badge,{type:"success",children:t.order.status})]}),Object(r.jsxs)("p",{children:["Total Amount: ",Object(l.a)(t.order.amount)]}),Object(r.jsxs)("p",{children:["Placed on: ",Object(n.a)(Object(d.a)(t.order.date),"d MMM, yyyy")]}),Object(r.jsxs)("div",{className:"border-t-2",children:[Object(r.jsx)("h1",{className:"font-bold text-xl",children:"Items in your order"}),null===O||void 0===O?void 0:O.map((function(e){return Object(r.jsxs)(s.Card,{className:"flex my-4 p-2 md:flex-row flex-col",children:[Object(r.jsx)("img",{className:"sm:w-full md:w-1/2 lg:w-1/3 object-contain md:object-cover",loading:"lazy",decoding:"async",src:e.image_url,alt:e.name}),Object(r.jsxs)(s.CardBody,{children:[Object(r.jsx)("h1",{className:"font-semibold text-gray-600",children:e.name}),Object(r.jsx)("p",{className:"mb-2",children:Object(l.a)(e.price)}),Object(r.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:e.description}),Object(r.jsxs)("p",{className:"mt-2",children:["Quantity: ",e.quantity]})]})]},e.product_id)}))]})]})})}}}]);
//# sourceMappingURL=7.99cbe133.chunk.js.map