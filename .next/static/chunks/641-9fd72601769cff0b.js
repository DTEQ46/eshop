"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{1641:function(e,n,r){r.d(n,{Z:function(){return L}});var t=r(4051),a=r.n(t),o=r(5893),i=r(7294),s=r(9008),c=r(1664),l=r(3559),u=r(3457),d=r(390),h=r(5258),f=r(8358),p=r(253),m=r(7812),x=r(9659),g=r(2318),j=r(8008),v=r(2822),Z=r(998),b=r(5517),y=r(5757),k=r(5575),C=r(9570),w=r(9009),N=r(282),S=r(5681),A=r(5639),B=r(3832),D=r(8884),I=r(7298),M=r(8995),O=r(4940),R=r(7005),T=r(2252),_=r(1955),F=r(1163),P=r(8766),E=r(9669),H=r.n(E);function W(e,n,r,t,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void r(l)}s.done?n(c):Promise.resolve(c).then(t,a)}function L(e){var n=e.title,r=e.description,t=e.children,E=(0,F.useRouter)(),L=(0,i.useContext)(R.yh),q=L.state,z=L.dispatch,G=q.darkMode,K=q.cart,U=q.userInfo,J=(0,l.Z)({typography:{h1:{fontSize:"1.6rem",fontWeight:400,margin:"1rem 0"},h2:{fontSize:"1.4rem",fontWeight:400,margin:"1rem 0"}},palette:{type:G?"dark":"light",primary:{main:"#f0c000"},secondary:{main:"#208080"}}}),Q=(0,O.Z)(),V=(0,i.useState)(!1),X=V[0],Y=V[1],$=function(){Y(!1)},ee=(0,i.useState)([]),ne=ee[0],re=ee[1],te=(0,P.Ds)().enqueueSnackbar,ae=function(){var e,n=(e=a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H().get("/api/products/categories");case 3:n=e.sent.data,re(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),te((0,T.b)(e.t0),{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function i(e){W(o,t,a,i,s,"next",e)}function s(e){W(o,t,a,i,s,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}(),oe=(0,i.useState)(""),ie=oe[0],se=oe[1];(0,i.useEffect)((function(){ae()}),[]);var ce=(0,i.useState)(null),le=ce[0],ue=ce[1],de=function(e,n){ue(null),n&&E.push(n)};return(0,o.jsxs)("div",{children:[(0,o.jsxs)(s.default,{children:[(0,o.jsx)("title",{children:n?"".concat(n," - D2MAT"):"D2MAT"}),r&&(0,o.jsx)("meta",{name:"description",content:r})]}),(0,o.jsxs)(u.Z,{theme:J,children:[(0,o.jsx)(d.ZP,{}),(0,o.jsx)(h.Z,{position:"static",className:Q.navbar,children:(0,o.jsxs)(f.Z,{className:Q.toolbar,children:[(0,o.jsxs)(p.Z,{display:"flex",alignItems:"center",children:[(0,o.jsx)(m.Z,{edge:"start","aria-label":"open drawer",onClick:function(){Y(!0)},className:Q.menuButton,children:(0,o.jsx)(D.Z,{className:Q.navbarButton})}),(0,o.jsx)(c.default,{href:"/",passHref:!0,children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(g.Z,{className:Q.brand,children:"D2MAT"})})})]}),(0,o.jsx)(j.ZP,{anchor:"left",open:X,onClose:$,children:(0,o.jsxs)(v.Z,{children:[(0,o.jsx)(Z.Z,{children:(0,o.jsxs)(p.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,o.jsx)(g.Z,{children:"Shopping by category"}),(0,o.jsx)(m.Z,{"aria-label":"close",onClick:$,children:(0,o.jsx)(I.Z,{})})]})}),(0,o.jsx)(b.Z,{light:!0}),ne.map((function(e){return(0,o.jsx)(c.default,{href:"/search?category=".concat(e),passHref:!0,children:(0,o.jsx)(Z.Z,{button:!0,component:"a",onClick:$,children:(0,o.jsx)(y.Z,{primary:e})})},e)}))]})}),(0,o.jsx)("div",{className:Q.searchSection,children:(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),E.push("/search?query=".concat(ie))},className:Q.searchForm,children:[(0,o.jsx)(k.Z,{name:"query",className:Q.searchInput,placeholder:"Search products",onChange:function(e){se(e.target.value)}}),(0,o.jsx)(m.Z,{type:"submit",className:Q.iconButton,"aria-label":"search",children:(0,o.jsx)(M.Z,{})})]})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(C.Z,{checked:G,onChange:function(){z({type:G?R.e0.DARK_MODE_OFF:R.e0.DARK_MODE_ON});var e=!G;_.Z.set("darkMode",e?"ON":"OFF")}}),(0,o.jsx)(c.default,{href:"/cart",passHref:!0,children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(g.Z,{component:"span",children:K.cartItems.length>0?(0,o.jsx)(w.Z,{color:"secondary",badgeContent:K.cartItems.length,children:"Cart"}):"Cart"})})}),U?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N.Z,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){ue(e.currentTarget)},className:Q.navbarButton,children:U.name}),(0,o.jsxs)(S.Z,{id:"simple-menu",anchorEl:le,keepMounted:!0,open:Boolean(le),onClose:de,children:[(0,o.jsx)(A.Z,{onClick:function(e){return de(0,"/profile")},children:"Profile"}),(0,o.jsx)(A.Z,{onClick:function(e){return de(0,"/order-history")},children:"Order Hisotry"}),U.isAdmin&&(0,o.jsx)(A.Z,{onClick:function(e){return de(0,"/admin/dashboard")},children:"Admin Dashboard"}),(0,o.jsx)(A.Z,{onClick:function(){ue(null),z({type:R.e0.USER_LOGOUT}),_.Z.remove("userInfo"),_.Z.remove("cartItems"),_.Z.remove("shippinhAddress"),_.Z.remove("paymentMethod"),E.push("/")},children:"Logout"})]})]}):(0,o.jsx)(c.default,{href:"/login",passHref:!0,children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(g.Z,{component:"span",children:"Login"})})})]})]})}),(0,o.jsx)(B.Z,{className:Q.main,children:t}),(0,o.jsx)("footer",{className:Q.footer,children:(0,o.jsx)(g.Z,{children:"All rights reserved. D2MAT."})})]})]})}},2252:function(e,n,r){r.d(n,{b:function(){return i}});var t=r(4051),a=r.n(t);function o(e,n,r,t,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void r(l)}s.done?n(c):Promise.resolve(c).then(t,a)}var i=function(e){return e.response&&e.response.data&&e.response.data.message?e.response.data.message:e.message};!function(){var e,n=(e=a().mark((function e(n,r,t,o){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.status(500).send({message:n.toString()});case 1:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function s(e){o(i,t,a,s,c,"next",e)}function c(e){o(i,t,a,s,c,"throw",e)}s(void 0)}))})}()},4940:function(e,n,r){var t=(0,r(1120).Z)((function(e){return{navbar:{backgroundColor:"#203040","& a":{color:"#ffffff",marginLeft:10}},brand:{fontWeight:"bold",fontSize:"1.5rem"},grow:{flexGrow:1},main:{minHeight:"80vh"},footer:{marginTop:10,textAlign:"center"},section:{marginTop:10,marginBottom:10},form:{width:"100%",maxWidth:800,margin:"0 auto"},navbarButton:{color:"#ffffff",textTransform:"initial"},transparentBackgroud:{backgroundColor:"transparent"},error:{color:"#f04040"},fullWidth:{width:"100%"},reviewForm:{maxWidth:800,width:"100%"},reviewItem:{marginRight:"1rem",borderRight:"1px #808080 solid",paddingRight:"1rem"},toolbar:{justifyContent:"space-between"},menuButton:{padding:0},mt1:{marginTop:"1rem"},searchSection:(n={display:"none"},r=e.breakpoints.up("md"),t={display:"flex"},r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n),searchForm:{border:"1px solid #ffffff",backgroundColor:"#ffffff",borderRadius:5},searchInput:{paddingLeft:5,color:"#000000","& ::placeholder":{color:"#606060"}},iconButton:{backgroundColor:"#f8c040",padding:5,borderRadius:"0 5px 5px 0","& span":{color:"#000000"}},sort:{marginRight:5},fullContainer:{height:"100vh"},mapInputBox:{position:"absolute",display:"flex",left:0,right:0,margin:"10px auto",width:300,height:40,"& input":{width:250}}};var n,r,t}));n.Z=t}}]);