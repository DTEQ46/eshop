(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{2951:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/user/[id]",function(){return n(5414)}])},5414:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSP:function(){return N}});var t=n(4051),a=n.n(t),s=n(5893),o=n(9669),i=n.n(o),c=n(5152),u=n(1163),d=n(1664),l=n(7294),p=n(1749),f=n(8463),h=n(2822),m=n(998),x=n(5757),j=n(2318),U=n(5477),E=n(8101),v=n(553),y=n(797),Z=n(282),b=n(2252),S=n(7005),_=n(1641),g=n(4940),C=n(7536),P=n(8766);function T(e,r,n,t,a,s,o){try{var i=e[s](o),c=i.value}catch(u){return void n(u)}i.done?r(c):Promise.resolve(c).then(t,a)}function A(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function o(e){T(s,t,a,o,i,"next",e)}function i(e){T(s,t,a,o,i,"throw",e)}o(void 0)}))}}function w(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function k(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){w(e,r,n[r])}))}return e}function O(e,r){switch(r.type){case"FETCH_REQUEST":return k({},e,{loading:!0,error:""});case"FETCH_SUCCESS":return k({},e,{loading:!1,error:""});case"FETCH_FAIL":return k({},e,{loading:!1,error:r.payload});case"UPDATE_REQUEST":return k({},e,{loadingUpdate:!0,errorUpdate:""});case"UPDATE_SUCCESS":return k({},e,{loadingUpdate:!1,errorUpdate:""});case"UPDATE_FAIL":return k({},e,{loadingUpdate:!1,errorUpdate:r.payload});case"UPLOAD_REQUEST":return k({},e,{loadingUpload:!0,errorUpload:""});case"UPLOAD_SUCCESS":return k({},e,{loadingUpload:!1,errorUpload:""});case"UPLOAD_FAIL":return k({},e,{loadingUpload:!1,errorUpload:r.payload});default:return e}}function D(e){var r=e.params.id,n=(0,l.useContext)(S.yh).state,t=(0,l.useReducer)(O,{loading:!0,error:""}),o=t[0],c=o.loading,T=o.error,w=o.loadingUpdate,D=t[1],N=(0,C.cI)(),F=N.handleSubmit,H=N.control,I=N.formState.errors,L=N.setValue,R=(0,l.useState)(!1),Q=R[0],q=R[1],B=(0,P.Ds)(),z=B.enqueueSnackbar,V=B.closeSnackbar,W=(0,u.useRouter)(),X=(0,g.Z)(),G=n.userInfo;(0,l.useEffect)((function(){if(!G)return W.push("/login");var e=function(){var e=A(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D({type:"FETCH_REQUEST"}),e.next=4,i().get("/api/admin/users/".concat(r),{headers:{authorization:"Bearer ".concat(G.token)}});case 4:n=e.sent.data,q(n.isAdmin),D({type:"FETCH_SUCCESS"}),L("name",n.name),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),D({type:"FETCH_FAIL",payload:(0,b.b)(e.t0)});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var J=function(){var e=A(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(),e.prev=1,D({type:"UPDATE_REQUEST"}),e.next=5,i().put("/api/admin/users/".concat(r),{name:n,isAdmin:Q},{headers:{authorization:"Bearer ".concat(G.token)}});case 5:D({type:"UPDATE_SUCCESS"}),z("User updated successfully",{variant:"success"}),W.push("/admin/users"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),D({type:"UPDATE_FAIL",payload:(0,b.b)(e.t0)}),z((0,b.b)(e.t0),{variant:"error"});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}();return(0,s.jsx)(_.Z,{title:"Edit User ".concat(r),children:(0,s.jsxs)(p.Z,{container:!0,spacing:1,children:[(0,s.jsx)(p.Z,{item:!0,md:3,xs:12,children:(0,s.jsx)(f.Z,{className:X.section,children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(d.default,{href:"/admin/dashboard",passHref:!0,children:(0,s.jsx)(m.Z,{button:!0,component:"a",children:(0,s.jsx)(x.Z,{primary:"Admin Dashboard"})})}),(0,s.jsx)(d.default,{href:"/admin/orders",passHref:!0,children:(0,s.jsx)(m.Z,{button:!0,component:"a",children:(0,s.jsx)(x.Z,{primary:"Orders"})})}),(0,s.jsx)(d.default,{href:"/admin/products",passHref:!0,children:(0,s.jsx)(m.Z,{button:!0,component:"a",children:(0,s.jsx)(x.Z,{primary:"Products"})})}),(0,s.jsx)(d.default,{href:"/admin/users",passHref:!0,children:(0,s.jsx)(m.Z,{selected:!0,button:!0,component:"a",children:(0,s.jsx)(x.Z,{primary:"Users"})})})]})})}),(0,s.jsx)(p.Z,{item:!0,md:9,xs:12,children:(0,s.jsx)(f.Z,{className:X.section,children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsxs)(j.Z,{component:"h1",variant:"h1",children:["Edit User ",r]})}),(0,s.jsxs)(m.Z,{children:[c&&(0,s.jsx)(U.Z,{}),T&&(0,s.jsx)(j.Z,{className:X.error,children:T})]}),(0,s.jsx)(m.Z,{children:(0,s.jsx)("form",{onSubmit:F(J),className:X.form,children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(C.Qr,{name:"name",control:H,defaultValue:"",rules:{required:!0},render:function(e){var r=e.field;return(0,s.jsx)(E.Z,k({variant:"outlined",fullWidth:!0,id:"name",label:"Name",error:Boolean(I.name),helperText:I.name?"Name is required":""},r))}})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{label:"Is Admin",control:(0,s.jsx)(y.Z,{onClick:function(e){return q(e.target.checked)},checked:Q,name:"isAdmin"})})}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{variant:"contained",type:"submit",fullWidth:!0,color:"primary",children:"Update"}),w&&(0,s.jsx)(U.Z,{})]})]})})})]})})})]})})}var N=!0;r.default=(0,c.default)((function(){return Promise.resolve(D)}),{ssr:!1})}},function(e){e.O(0,[967,164,924,101,536,522,641,774,888,179],(function(){return r=2951,e(e.s=r);var r}));var r=e.O();_N_E=r}]);