(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{2697:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(4479)}])},4479:function(e,r,n){"use strict";n.r(r);var t=n(4051),a=n.n(t),s=n(5893),i=n(9669),o=n.n(i),l=n(5152),u=n(1163),c=n(1664),d=n(7294),f=n(1749),m=n(8463),h=n(2822),p=n(998),x=n(5757),j=n(2318),v=n(8101),w=n(282),b=n(2252),P=n(7005),Z=n(1641),y=n(4940),g=n(7536),_=n(8766),N=n(1955);function O(e,r,n,t,a,s,i){try{var o=e[s](i),l=o.value}catch(u){return void n(u)}o.done?r(l):Promise.resolve(l).then(t,a)}function k(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function E(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){k(e,r,n[r])}))}return e}function S(){var e=(0,d.useContext)(P.yh),r=e.state,n=e.dispatch,t=(0,g.cI)(),i=t.handleSubmit,l=t.control,k=t.formState.errors,S=t.setValue,C=(0,_.Ds)(),T=C.enqueueSnackbar,q=C.closeSnackbar,B=(0,u.useRouter)(),V=(0,y.Z)(),W=r.userInfo;(0,d.useEffect)((function(){W||B.push("/login"),S("name",W.name),S("email",W.email)}),[]);var z=function(){var e,r=(e=a().mark((function e(r){var t,s,i,l,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.name,s=r.email,i=r.password,l=r.confirmPassword,q(),i===l){e.next=5;break}return T("Passwords don't match",{variant:"error"}),e.abrupt("return");case 5:return e.prev=5,e.next=8,o().put("/api/users/profile",{name:t,email:s,password:i},{headers:{authorization:"Bearer ".concat(W.token)}});case 8:u=e.sent.data,n({type:P.u6.USER_LOGIN,payload:u}),N.Z.set("userInfo",u),T("Profile updated successfully",{variant:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),T((0,b.b)(e.t0),{variant:"error"});case 17:case"end":return e.stop()}}),e,null,[[5,14]])})),function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function i(e){O(s,t,a,i,o,"next",e)}function o(e){O(s,t,a,i,o,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,s.jsx)(Z.Z,{title:"Profile",children:(0,s.jsxs)(f.Z,{container:!0,spacing:1,children:[(0,s.jsx)(f.Z,{item:!0,md:3,xs:12,children:(0,s.jsx)(m.Z,{className:V.section,children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(c.default,{href:"/profile",passHref:!0,children:(0,s.jsx)(p.Z,{selected:!0,button:!0,component:"a",children:(0,s.jsx)(x.Z,{primary:"User Profile"})})}),(0,s.jsx)(c.default,{href:"/order-history",passHref:!0,children:(0,s.jsx)(p.Z,{button:!0,component:"a",children:(0,s.jsx)(x.Z,{primary:"Order History"})})})]})})}),(0,s.jsx)(f.Z,{item:!0,md:9,xs:12,children:(0,s.jsx)(m.Z,{className:V.section,children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(p.Z,{children:(0,s.jsx)(j.Z,{component:"h1",variant:"h1",children:"Profile"})}),(0,s.jsx)(p.Z,{children:(0,s.jsx)("form",{onSubmit:i(z),className:V.form,children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(p.Z,{children:(0,s.jsx)(g.Qr,{name:"name",control:l,defaultValue:"",rules:{required:!0,minLength:2},render:function(e){var r=e.field;return(0,s.jsx)(v.Z,E({variant:"outlined",fullWidth:!0,id:"name",label:"Name",inputProps:{type:"name"},error:Boolean(k.name),helperText:k.name?"minLength"===k.name.type?"Name length is more than 1":"Name is required":""},r))}})}),(0,s.jsx)(p.Z,{children:(0,s.jsx)(g.Qr,{name:"email",control:l,defaultValue:"",rules:{required:!0,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/},render:function(e){var r=e.field;return(0,s.jsx)(v.Z,E({variant:"outlined",fullWidth:!0,id:"email",label:"Email",inputProps:{type:"email"},error:Boolean(k.email),helperText:k.email?"pattern"===k.email.type?"Email is not valid":"Email is required":""},r))}})}),(0,s.jsx)(p.Z,{children:(0,s.jsx)(g.Qr,{name:"password",control:l,defaultValue:"",rules:{validate:function(e){return""===e||e.length>5||"Password length is more than 5"}},render:function(e){var r=e.field;return(0,s.jsx)(v.Z,E({variant:"outlined",fullWidth:!0,id:"password",label:"Password",inputProps:{type:"password"},error:Boolean(k.password),helperText:k.password?"Password length is more than 5":""},r))}})}),(0,s.jsx)(p.Z,{children:(0,s.jsx)(g.Qr,{name:"confirmPassword",control:l,defaultValue:"",rules:{validate:function(e){return""===e||e.length>5||"Confirm Password length is more than 5"}},render:function(e){var r=e.field;return(0,s.jsx)(v.Z,E({variant:"outlined",fullWidth:!0,id:"confirmPassword",label:"Confirm Password",inputProps:{type:"password"},error:Boolean(k.confirmPassword),helperText:k.password?"Confirm Password length is more than 5":""},r))}})}),(0,s.jsx)(p.Z,{children:(0,s.jsx)(w.Z,{variant:"contained",type:"submit",fullWidth:!0,color:"primary",children:"Update"})})]})})})]})})})]})})}r.default=(0,l.default)((function(){return Promise.resolve(S)}),{ssr:!1})}},function(e){e.O(0,[967,164,924,101,536,125,641,774,888,179],(function(){return r=2697,e(e.s=r);var r}));var r=e.O();_N_E=r}]);