(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{33685:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(72438)}])},72438:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return w}});var t=r(34051),i=r.n(t),s=r(85893),l=r(67294),a=r(11163),c=r(95384),d=r(89977),h=r.n(d);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}function u(e){var n={isInnerNumbers:!1,aperture:180,radius:60,tickOffset:20,arcStrokeWidth:20,miniTickLength:1,miniTickStrokeWidth:1,tickLabelOffset:12,scaleDivisionNumber:5,centralCircleRadius:10,marks:["18\xb0C",null,"20\xb0C","","","","","","26\xb0C",null,"28\xb0C"],contentWidth:360,svgContainerWidth:360,svgContainerHeight:160,arrowValue:18*(e.value-18)/180,arrowColor:"#354357",gaugeCenterLineHeight:180,viewBox:"30 0 300 200",ranges:[{start:0,end:.2,color:"#FF0000"},{start:.2,end:.8,color:"#37b400"},{start:.8,end:1,color:"#FF0000"}]};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(h(),x({},n))})}function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){m(e,n,r[n])}))}return e}function g(e){var n={isInnerNumbers:!1,aperture:180,radius:60,tickOffset:20,arcStrokeWidth:20,miniTickLength:1,miniTickStrokeWidth:1,tickLabelOffset:12,scaleDivisionNumber:5,centralCircleRadius:10,marks:["30%",null,"40%","","","","60%",null,"70%"],contentWidth:360,svgContainerWidth:360,svgContainerHeight:160,arrowValue:4.5*(e.value-30)/180,arrowColor:"#354357",gaugeCenterLineHeight:180,viewBox:"30 0 300 200",ranges:[{start:0,end:.25,color:"#FF0000"},{start:.25,end:.75,color:"#37b400"},{start:.75,end:1,color:"#FF0000"}]};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(h(),j({},n))})}var v=r(15861),f=r(55113),p=r(86886),y=r(61776),Z=r(47820),b=r(9669),F=r.n(b);function P(e,n,r,t,i,s,l){try{var a=e[s](l),c=a.value}catch(d){return void r(d)}a.done?n(c):Promise.resolve(c).then(t,i)}function C(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var s=e.apply(n,r);function l(e){P(s,t,i,l,a,"next",e)}function a(e){P(s,t,i,l,a,"throw",e)}l(void 0)}))}}function w(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));var n=(0,a.useRouter)(),r=(0,l.useContext)(Z.K).state.userInfo,t=(0,l.useState)([]),d=t[0],h=t[1],o=(0,l.useState)([]),x=o[0],m=o[1],j=(0,l.useState)([]),b=j[0],P=j[1],w=(0,l.useState)([]),W=w[0],E=w[1],k=(0,l.useState)([]),N=k[0],O=k[1],R=(0,l.useState)([]),S=R[0],T=R[1];function _(){return H.apply(this,arguments)}function H(){return(H=C(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F().get("/api/lastEntries");case 2:return n=e.sent.data,e.next=5,h(n.lastEntry79f9);case 5:return e.next=7,m(n.lastEntry79fd);case 7:return e.next=9,P(n.lastEntry7a0e);case 9:return e.next=11,E(n.lastEntry7a01);case 11:return e.next=13,O(n.lastEntry79fe);case 13:return e.next=15,T(n.lastEntry7a0a);case 15:console.log("Latest Entries Fetched");case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){r||n.push("/login"),_()}),[r,n]),setInterval((function(){_()}),3e5),(0,s.jsxs)(y.Z,{children:[(0,s.jsxs)(p.ZP,{container:!0,children:[(0,s.jsx)(p.ZP,{component:f.Z,style:{border:"2px solid #9013FE",borderRadius:"1rem"},className:"p-0",item:!0,lg:4,md:4,sm:6,xs:12,children:(0,s.jsx)(c.h,{className:"p-0",width:"100%",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"p-1",style:{backgroundColor:"#9013FE",borderRadius:"1rem",color:"#fff",textAlign:"center"},children:(0,s.jsx)("h5",{children:"Zone 1"})}),(0,s.jsxs)(p.ZP,{sx:{p:2},container:!0,spacing:2,children:[(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Temprature:"}),d.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:d[0].temprature})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[d[0].temprature," \xb0C"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:18})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["--"," \xb0C"]})]})]}),(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Humidity:"}),d.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:d[0].humidity})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[d[0].humidity," %"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:30})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["0"," %"]})]})]})]})]})})}),(0,s.jsx)(p.ZP,{component:f.Z,style:{border:"2px solid #9013FE",borderRadius:"1rem"},className:"p-0",item:!0,lg:4,md:4,sm:6,xs:12,children:(0,s.jsx)(c.h,{className:"p-0",width:"100%",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"p-1",style:{backgroundColor:"#9013FE",borderRadius:"1rem",color:"#fff",textAlign:"center"},children:(0,s.jsx)("h5",{children:"Zone 2"})}),(0,s.jsxs)(p.ZP,{sx:{p:2},container:!0,spacing:2,children:[(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Temprature:"}),x.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:x[0].temprature})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[x[0].temprature," \xb0C"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:18})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["--"," \xb0C"]})]})]}),(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Humidity:"}),x.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:x[0].humidity})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[x[0].humidity," %"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:30})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["0"," %"]})]})]})]})]})})}),(0,s.jsx)(p.ZP,{component:f.Z,style:{border:"2px solid #9013FE",borderRadius:"1rem"},className:"p-0",item:!0,lg:4,md:4,sm:6,xs:12,children:(0,s.jsx)(c.h,{className:"p-0",width:"100%",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"p-1",style:{backgroundColor:"#9013FE",borderRadius:"1rem",color:"#fff",textAlign:"center"},children:(0,s.jsx)("h5",{children:"Zone 3"})}),(0,s.jsxs)(p.ZP,{sx:{p:2},container:!0,spacing:2,children:[(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Temprature:"}),b.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:b[0].temprature})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[b[0].temprature," \xb0C"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:18})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["--"," \xb0C"]})]})]}),(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Humidity:"}),b.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:b[0].humidity})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[b[0].humidity," %"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:30})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["0"," %"]})]})]})]})]})})})]}),(0,s.jsxs)(p.ZP,{container:!0,children:[(0,s.jsx)(p.ZP,{component:f.Z,style:{border:"2px solid #9013FE",borderRadius:"1rem"},className:"p-0",item:!0,lg:4,md:4,sm:6,xs:12,children:(0,s.jsx)(c.h,{className:"p-0",width:"100%",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"p-1",style:{backgroundColor:"#9013FE",borderRadius:"1rem",color:"#fff",textAlign:"center"},children:(0,s.jsx)("h5",{children:"Zone 4"})}),(0,s.jsxs)(p.ZP,{sx:{p:2},container:!0,spacing:2,children:[(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Temprature:"}),S.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:S[0].temprature})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[S[0].temprature," \xb0C"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:18})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["--"," \xb0C"]})]})]}),(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Humidity:"}),S.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:S[0].humidity})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[S[0].humidity," %"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:30})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["0"," %"]})]})]})]})]})})}),(0,s.jsx)(p.ZP,{component:f.Z,style:{border:"2px solid #9013FE",borderRadius:"1rem"},className:"p-0",item:!0,lg:4,md:4,sm:6,xs:12,children:(0,s.jsx)(c.h,{className:"p-0",width:"100%",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"p-1",style:{backgroundColor:"#9013FE",borderRadius:"1rem",color:"#fff",textAlign:"center"},children:(0,s.jsx)("h5",{children:"Zone 5"})}),(0,s.jsxs)(p.ZP,{sx:{p:2},container:!0,spacing:2,children:[(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Temprature:"}),N.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:N[0].temprature})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[N[0].temprature," \xb0C"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:18})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["--"," \xb0C"]})]})]}),(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Humidity:"}),N.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:N[0].humidity})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[N[0].humidity," %"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:30})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["0"," %"]})]})]})]})]})})}),(0,s.jsx)(p.ZP,{component:f.Z,style:{border:"2px solid #9013FE",borderRadius:"1rem"},className:"p-0",item:!0,lg:4,md:4,sm:6,xs:12,children:(0,s.jsx)(c.h,{className:"p-0",width:"100%",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"p-1",style:{backgroundColor:"#9013FE",borderRadius:"1rem",color:"#fff",textAlign:"center"},children:(0,s.jsx)("h5",{children:"Zone 6"})}),(0,s.jsxs)(p.ZP,{sx:{p:2},container:!0,spacing:2,children:[(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Temprature:"}),W.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:W[0].temprature})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[W[0].temprature," \xb0C"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-5.4rem"},children:(0,s.jsx)(u,{value:18})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["--"," \xb0C"]})]})]}),(0,s.jsxs)(p.ZP,{item:!0,xs:6,children:[(0,s.jsx)(v.Z,{variant:"h6",align:"center",children:"Humidity:"}),W.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:W[0].humidity})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:[W[0].humidity," %"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",left:"-6rem"},children:(0,s.jsx)(g,{value:30})}),(0,s.jsxs)(v.Z,{fontWeight:800,variant:"h5",align:"center",children:["0"," %"]})]})]})]})]})})})]})]})}}},function(e){e.O(0,[26,3,898,669,542,977,776,774,888,179],(function(){return n=33685,e(e.s=n);var n}));var n=e.O();_N_E=n}]);