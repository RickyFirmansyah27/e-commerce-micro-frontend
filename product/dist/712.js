"use strict";(self.webpackChunkproduct=self.webpackChunkproduct||[]).push([[712,651],{712:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var r=s(416),n=s(52),a=(s(722),s(651)),l=s(999),c=s(893),i=(0,r.lazy)((function(){return s.e(755).then(s.t.bind(s,755,23))})),o=(0,r.lazy)((function(){return s.e(159).then(s.t.bind(s,159,23))}));const d=function(){return(0,c.jsx)("div",{className:"border-4  border-red-700",children:(0,c.jsxs)(n.Routes,{children:[(0,c.jsx)(n.Route,{path:"/",element:(0,c.jsx)(a.default,{})}),(0,c.jsx)(n.Route,{path:"/:productId",element:(0,c.jsx)(l.default,{})}),(0,c.jsx)(n.Route,{path:"/orders",element:(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading..."}),children:(0,c.jsx)(i,{})})}),(0,c.jsx)(n.Route,{path:"/orders/checkout/:productId",element:(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading..."}),children:(0,c.jsx)(o,{})})})]})})}},600:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var r=s(52),n=s(893);const a=function(e){var t=e.options;return(0,n.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,n.jsx)("div",{className:"flex items-center space-x-2 text-gray-400 text-sm",children:t.map((function(e,t){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Link,{to:"/",className:"hover:underline hover:text-gray-600",children:e}),(0,n.jsx)("span",{children:(0,n.jsx)("svg",{className:"h-5 w-5 leading-none text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})})})," "]})}))})})}},800:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var r=s(52),n=s(893);const a=function(e){var t=e.index,s=e.product;return(0,n.jsx)("div",{className:"mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg",children:(0,n.jsxs)(r.Link,{to:"".concat(s.id),children:[(0,n.jsx)("img",{src:s.image,alt:"Product",className:"h-72 w-full object-contain object-center"}),(0,n.jsxs)("div",{className:"px-4 py-3 w-72",children:[(0,n.jsx)("span",{className:"text-gray-400 mr-3 uppercase text-xs",children:s.category}),(0,n.jsx)("p",{className:"text-lg font-bold text-black truncate block capitalize",children:s.title}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)("p",{className:"text-lg font-semibold text-black cursor-auto my-3",children:["$",s.price]}),(0,n.jsx)("del",{children:(0,n.jsxs)("p",{className:"text-sm text-gray-600 cursor-auto ml-2",children:["$",s.price+199]})}),(0,n.jsx)("div",{className:"ml-auto",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-bag-plus",viewBox:"0 0 16 16",children:[(0,n.jsx)("path",{"fill-rule":"evenodd",d:"M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"}),(0,n.jsx)("path",{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"})]})})]})]})]})},t)}},651:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var r=s(121),n=s(137),a=s(391),l=s(757),c=s.n(l),i=s(879),o=s.n(i),d=s(416),x=s(800),u=s(926),h=s(893);function m(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function p(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?m(Object(s),!0).forEach((function(t){(0,r.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}const g=function(e){e.loading,e.setLoading;var t=(0,d.useState)([]),s=(0,a.Z)(t,2),l=s[0],i=s[1],m=(0,d.useState)({category:"",title:""}),g=(0,a.Z)(m,2),j=g[0],f=g[1];function v(){return(v=(0,n.Z)(c().mark((function e(){var t,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://fakestoreapi.com/products");case 2:t=e.sent,s=t.data,i(s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((function(){l.length||function(){v.apply(this,arguments)}()}),[l]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.default,{query:j,handleChange:function(e){f(p(p({},j),{},(0,r.Z)({},e.target.name,e.target.value)))},handleSubmit:function(){}}),(0,h.jsx)("section",{className:"w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5",children:l.map((function(e,t){return(0,h.jsx)(x.default,{index:t,product:e})}))})]})}},999:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var r=s(137),n=s(391),a=s(757),l=s.n(a),c=s(52),i=s(600),o=s(416),d=s(879),x=s.n(d),u=s(893);const h=function(e){e.loading,e.setLoading;var t=(0,c.useParams)().productId,s=(0,o.useState)({}),a=(0,n.Z)(s,2),d=a[0],h=a[1];function m(){return(m=(0,r.Z)(l().mark((function e(){var s,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x().get("https://fakestoreapi.com/products/"+t);case 2:s=e.sent,r=s.data,h(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){Object.keys(d).length||function(){m.apply(this,arguments)}()}),[d]),(0,u.jsx)("div",{className:"antialiased",children:(0,u.jsxs)("div",{className:"py-6",children:[(0,u.jsx)(i.default,{options:["Home"]}),(0,u.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6",children:(0,u.jsxs)("div",{className:"flex flex-col md:flex-row -mx-4",children:[(0,u.jsx)("div",{className:"md:flex-1 px-4",children:(0,u.jsxs)("div",{"x-data":"{ image: 1 }","x-cloak":!0,children:[(0,u.jsx)("div",{className:"h-64 md:h-80 rounded-lg bg-gray-100 mb-4",children:(0,u.jsx)("div",{"x-show":"image === 1",className:"h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center",children:(0,u.jsx)("img",{src:d.image,alt:"Product",className:"h-72 w-full object-contain object-center"})})}),(0,u.jsx)("div",{className:"flex -mx-2 mb-4"})]})}),(0,u.jsxs)("div",{className:"md:flex-1 px-4",children:[(0,u.jsx)("h2",{className:"mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl",children:null==d?void 0:d.title}),(0,u.jsxs)("p",{className:"text-gray-500 text-sm",children:["By ",(0,u.jsx)("a",{href:"#",className:"text-indigo-600 hover:underline",children:null==d?void 0:d.category})]}),(0,u.jsxs)("div",{className:"flex items-center space-x-4 my-4",children:[(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"rounded-lg bg-gray-100 flex py-2 px-3",children:[(0,u.jsx)("span",{className:"text-indigo-400 mr-1 mt-1",children:"$"}),(0,u.jsx)("span",{className:"font-bold text-indigo-600 text-3xl",children:null==d?void 0:d.price})]})}),(0,u.jsxs)("div",{className:"flex-1",children:[(0,u.jsx)("p",{className:"text-green-500 text-xl font-semibold",children:"Save 12%"}),(0,u.jsx)("p",{className:"text-gray-400 text-sm",children:"Inclusive of all Taxes."})]})]}),(0,u.jsxs)("p",{className:"text-gray-500",children:[null==d?void 0:d.description,"."]}),(0,u.jsxs)("div",{className:"flex py-4 space-x-4",children:[(0,u.jsxs)("div",{className:"relative",children:[(0,u.jsx)("div",{className:"text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold",children:"Qty"}),(0,u.jsxs)("select",{className:"cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1",children:[(0,u.jsx)("option",{children:"1"}),(0,u.jsx)("option",{children:"2"}),(0,u.jsx)("option",{children:"3"}),(0,u.jsx)("option",{children:"4"}),(0,u.jsx)("option",{children:"5"})]})]}),(0,u.jsx)(c.Link,{to:"/orders/checkout/".concat(t),state:{product:d},children:(0,u.jsx)("button",{type:"button",className:"h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white",children:"Buy Now"})})]})]})]})})]})})}},926:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var r=s(893);const n=function(e){var t=e.query,s=e.handleChange;return(0,r.jsxs)("div",{className:"text-center p-10",children:[(0,r.jsx)("h1",{className:"font-bold text-4xl mb-4",children:"Search Products You Want To Buy"}),(0,r.jsxs)("div",{className:"flex w-full justify-center items-center p-6 space-x-6 bg-white rounded-xl hover:shadow-sm transform transition duration-500",children:[(0,r.jsxs)("div",{className:"flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 opacity-30",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),(0,r.jsx)("input",{value:t.title,onChange:function(e){return s(e)},name:"title",className:"bg-gray-100 outline-none",type:"text",placeholder:"Article name or keyword..."})]}),(0,r.jsx)("div",{className:"flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer",children:(0,r.jsx)("span",{children:"All Categories"})}),(0,r.jsx)("div",{className:"bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer",children:(0,r.jsx)("span",{children:"Search"})})]})]})}}}]);