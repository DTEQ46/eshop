(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5075)}])},897:function(n,r,t){"use strict";t.d(r,{Z:function(){return p}});var e=t(5893),c=t(8463),u=t(9738),i=t(951),o=t(9912),a=t(2318),s=t(1907),d=t(282),f=(t(7294),t(1664)),l=t(1212);function p(n){var r=n.product,t=n.addToCartHandler;return(0,e.jsxs)(c.Z,{children:[(0,e.jsx)(f.default,{href:"/product/".concat(r.slug),passHref:!0,children:(0,e.jsxs)(u.Z,{children:[(0,e.jsx)(i.Z,{component:"img",image:r.image_url,title:r.name}),(0,e.jsxs)(o.Z,{children:[(0,e.jsx)(a.Z,{children:r.name}),(0,e.jsx)(l.Z,{value:r.rating,readOnly:!0})]})]})}),(0,e.jsxs)(s.Z,{children:[(0,e.jsxs)(a.Z,{children:["$",r.price]}),(0,e.jsx)(d.Z,{size:"small",color:"primary",onClick:function(){return t(r)},children:"Add to cart"})]})]})}},5075:function(n,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return m},default:function(){return x}});var e=t(4051),c=t.n(e),u=t(5893),i=t(2318),o=t(1749),a=t(1641),s=t(9669),d=t.n(s),f=t(1163),l=t(7294),p=t(7005),h=t(897);function v(n,r,t,e,c,u,i){try{var o=n[u](i),a=o.value}catch(s){return void t(s)}o.done?r(a):Promise.resolve(a).then(e,c)}function _(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function j(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},e=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),e.forEach((function(r){_(n,r,t[r])}))}return n}var m=!0;function x(n){var r=(0,f.useRouter)(),t=(0,l.useContext)(p.yh),e=t.state,s=t.dispatch,_=n.topRatedProducts,m=function(){var n,t=(n=c().mark((function n(t){var u,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=e.cart.cartItems.find((function(n){return n._id===t._id})),i=u?u.quantity+1:1,n.next=4,d().get("/api/products/".concat(t._id));case 4:if(!(n.sent.data.countInStock<i)){n.next=8;break}return window.alert("Sorry. Product is out of stock"),n.abrupt("return");case 8:s({type:p.Ef.CART_ADD_ITEM,payload:j({},t,{quantity:i})}),r.push("/cart");case 10:case"end":return n.stop()}}),n)})),function(){var r=this,t=arguments;return new Promise((function(e,c){var u=n.apply(r,t);function i(n){v(u,e,c,i,o,"next",n)}function o(n){v(u,e,c,i,o,"throw",n)}i(void 0)}))});return function(n){return t.apply(this,arguments)}}();return(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(i.Z,{variant:"h2",children:"Popular Products"}),(0,u.jsx)(o.Z,{container:!0,spacing:3,children:_.map((function(n){return(0,u.jsx)(o.Z,{item:!0,md:4,children:(0,u.jsx)(h.Z,{product:n,addToCartHandler:m})},n.name)}))})]})}}},function(n){n.O(0,[967,164,38,641,774,888,179],(function(){return r=5301,n(n.s=r);var r}));var r=n.O();_N_E=r}]);