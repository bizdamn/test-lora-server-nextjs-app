(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[212],{87955:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/device-info/[id]",function(){return n(54642)}])},54642:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return G},default:function(){return J}});var r=n(34051),i=n.n(r),a=n(85893),c=n(67294),s=n(86886),l=n(92850),o=n(19629),d=n(95384),u=n(71044),h=n(87357),x=n(15861),j=n(70891),p=n(26447),f=n(79953),g=n(55113),v=n(9669),m=n.n(v),b=n(41478),y=n(26613),Z=n(75041),D=n(18987),S=n(69661),P=n(508),M=n(61776),w=n(47820),C=n(73124);function k(e){var t=(0,c.useState)({devEUI:null,applicationID:null,variables:null,tags:null,description:null,deviceProfileID:null,isDisabled:null,referenceAltitude:null,name:null,skipFCntCheck:null,lastSeenAt:null,location:null,deviceStatusMargin:null,deviceStatusBattery:null}),n=t[0],r=t[1];(0,c.useEffect)((function(){fetch("https://chirpstack.igscsi4server.com/api/devices/".concat(e.deviceEUI),{method:"GET",headers:{Accept:"application/json","Grpc-Metadata-Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5X2lkIjoiNTUyNzc0ZWEtMjJlNS00YzY1LWFhMjAtN2Y4NzU0Y2E5NjFkIiwiYXVkIjoiYXMiLCJpc3MiOiJhcyIsIm5iZiI6MTYzNzY1MTgwNSwic3ViIjoiYXBpX2tleSJ9._2OFZ7tfw6GYSbYk94M5RM17BwUGQB3IoGRZdqoGd_4"}}).then((function(e){return e.json()})).then((function(e){return r({devEUI:e.device.devEUI,tags:e.device.tags,variables:e.device.variables,skipFCntCheck:e.device.skipFCntCheck,referenceAltitude:e.device.referenceAltitude,name:e.device.name,deviceProfileID:e.device.deviceProfileID,description:e.device.description,applicationID:e.device.applicationID,deviceStatusMargin:e.deviceStatusMargin,deviceStatusBattery:e.deviceStatusBattery,location:e.location,lastSeenAt:e.lastSeenAt})})).catch((function(e){alert("Please Check your internet connection. Either their is no internet connection or the signals are weak")}))}),[e.deviceEUI]);var i=new Date(n.lastSeenAt).toLocaleString();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",children:(0,a.jsx)(g.Z,{sx:{padding:3},children:(0,a.jsxs)("table",{className:"table table-striped table-hover",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Parameter"}),(0,a.jsx)("th",{children:"Value"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Device EUI"}),(0,a.jsx)("td",{children:n.devEUI})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Device Name"}),(0,a.jsx)("td",{children:n.name})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Last Seen"}),(0,a.jsx)("td",{children:i})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Device Description"}),(0,a.jsx)("td",{children:n.description})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Device Status Margin"}),(0,a.jsx)("td",{children:n.deviceStatusMargin})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Device Status Battery"}),(0,a.jsx)("td",{children:n.deviceStatusBattery})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Device SkipFCntCheck"}),(0,a.jsx)("td",{children:n.skipFCntCheck})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Device Refrence Altitude"}),(0,a.jsx)("td",{children:n.referenceAltitude})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Device Location"}),(0,a.jsx)("td",{children:n.location})]})]})]})})})})}var I=n(8442),F=n(5344),Y=n(23302),E=n(30381),A=n.n(E);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){var t=e.startDate,n=e.SetStartDate,r=(e.endDate,e.SetEndDate);return(0,a.jsx)(F.Z,{dateAdapter:I.Z,children:(0,a.jsx)(h.Z,{m:2,children:(0,a.jsx)(Y.Z,{label:"Choose a date",views:["year","month","day"],format:"DD-MM-YYYY",value:t,onChange:function(e){var t;t=A()(e).format("YYYY-MM-DD"),n(t),r(A()(t,"YYYY-MM-DD").add(1,"days").format("YYYY-MM-DD"))},renderInput:function(e){return(0,a.jsx)(u.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}({},e))}})})})}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){var t=e.startDate,n=e.SetStartDate,r=e.endDate,i=e.SetEndDate,c=function(e){var t=e.getDate(),n=e.getMonth()+1,r=e.getFullYear();return"".concat(r,"-").concat(n,"-").concat(t)};return(0,a.jsx)(F.Z,{dateAdapter:I.Z,children:(0,a.jsx)(h.Z,{m:2,children:(0,a.jsx)(Y.Z,{inputFormat:"yyyy-MM",views:["year","month"],format:"MM-YYYY",label:"Choose a Month",minDate:new Date("2012-03-01"),maxDate:new Date("2023-06-01"),value:t,onChange:function(e){var a=e.getMonth(),s=e.getFullYear(),l=c(new Date(s,a,1)),o=c(new Date(s,a+1,0));n(l),i(o),console.log(t),console.log(r)},renderInput:function(e){return(0,a.jsx)(u.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_(e,t,n[t])}))}return e}({},e,{helperText:null}))}})})})}var U=n(83321),B=n(11163);function R(e,t,n,r,i,a,c){try{var s=e[a](c),l=s.value}catch(o){return void n(o)}s.done?t(l):Promise.resolve(l).then(r,i)}function W(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){R(a,r,i,c,s,"next",e)}function s(e){R(a,r,i,c,s,"throw",e)}c(void 0)}))}}var G=!0;function J(e){var t=e.tempArray,n=e.humArray,r=e.deviceCalibration,v=(0,B.useRouter)(),I=((0,o.Z)(),v.query.id),F=(0,c.useContext)(w.K).state.userInfo;(0,c.useEffect)((function(){F||v.push("/login")}),[F,v]);var Y=(0,C.Ds)(),E=Y.enqueueSnackbar,A=Y.closeSnackbar,O=(0,c.useState)(null),_=O[0],R=O[1],G=(0,c.useState)(null),J=G[0],X=G[1],z=(0,c.useState)(t),L=z[0],V=z[1],H=(0,c.useState)(n),q=H[0],$=H[1],K=(0,c.useState)(r[0].humidity_calibration),Q=K[0],ee=K[1],te=(0,c.useState)(r[0].temprature_calibration),ne=te[0],re=te[1];function ie(){return(ie=W(i().mark((function e(){var t,n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),e.prev=1,e.next=4,m().post("/api/filter",{start_date:_,end_date:J,deviceEUI:I});case 4:t=e.sent.data,console.log(_),console.log(J),console.log(I),console.log(t),t.length>0?(n=new l.DataFrame(t),r=n.column("temprature"),a=n.column("humidity"),V(r.$data),$(a.$data)):(V(t),$(t)),E("Filtered",{variant:"success"}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function ae(){return(ae=W(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),e.prev=1,e.next=4,m().put("/api/device-calibration/set-device-calibration",{tempratureCalibration:ne,humidityCalibration:Q,devEUI:I});case 4:e.sent.data,E("Updated Successfully",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),E(e.t0,{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var ce={labels:["9 AM","12 PM","3 PM","6 PM","9 PM","12 AM","3 AM","6 AM"],datasets:[{label:"Humidity",data:q,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},se={labels:["9 AM","12 PM","3 PM","6 PM","9 PM","12 AM","3 AM","6 AM"],datasets:[{label:"Temprature",data:L,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},le=new Date;return(0,a.jsxs)(M.Z,{children:[(0,a.jsx)(s.ZP,{style:{backgroundColor:"#9d2eff",color:"white"},children:(0,a.jsx)(x.Z,{sx:{mb:3},variant:"h3",align:"center",children:"Zone Name"})}),(0,a.jsxs)(s.ZP,{sx:{my:3},container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,lg:6,xs:12,children:(0,a.jsx)(k,{deviceEUI:I})}),(0,a.jsxs)(s.ZP,{item:!0,lg:6,xs:12,children:[(0,a.jsxs)(p.Z,{direction:"row",children:[(0,a.jsx)(T,{startDate:_,SetStartDate:R,endDate:J,SetEndDate:X}),(0,a.jsx)(N,{startDate:_,SetStartDate:R,endDate:J,SetEndDate:X}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(U.Z,{onClick:function(){return function(){return ie.apply(this,arguments)}(le.toString(),le.toString())},variant:"outlined",children:"Filter"})})]}),(0,a.jsx)(p.Z,{spacing:2,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{border:"2px solid #9013FE",borderRadius:"1rem"},children:(0,a.jsx)(d.h,{className:"p-0",width:"100%",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"p-1",style:{backgroundColor:"#9013FE",borderRadius:"1rem",color:"#fff",textAlign:"center"},children:(0,a.jsx)("h5",{children:"Temprature Trend"})}),(0,a.jsx)("div",{style:{padding:"3px"},children:(0,a.jsx)(P.x1,{height:150,data:se,options:{scales:{}}})})]})})}),(0,a.jsx)("div",{style:{border:"2px solid #9013FE",borderRadius:"1rem"},children:(0,a.jsx)(d.h,{className:"p-0",width:"100%",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"p-1",style:{backgroundColor:"#9013FE",borderRadius:"1rem",color:"#fff",textAlign:"center"},children:(0,a.jsx)("h5",{children:"Humidity Trend"})}),(0,a.jsx)("div",{style:{padding:"3px"},children:(0,a.jsx)(P.x1,{height:150,data:ce,options:{scales:{}}})})]})})})]})})]})]}),F&&1==F.isAdmin?(0,a.jsxs)(s.ZP,{style:{marginTop:"5rem"},container:!0,spacing:4,children:[(0,a.jsxs)(s.ZP,{component:g.Z,item:!0,sx:{p:3},lg:6,xs:12,children:[(0,a.jsx)(s.ZP,{sx:{my:3},container:!0,children:(0,a.jsx)(s.ZP,{item:!0,xs:12,children:(0,a.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(s.ZP,{item:!0,xs:4,children:(0,a.jsx)(x.Z,{variant:"p",sx:{fontWeight:700},children:"Temprature"})}),(0,a.jsxs)(s.ZP,{item:!0,xs:8,children:[(0,a.jsxs)(j.ZP,{children:[(0,a.jsx)(D.Z,{children:(0,a.jsx)(S.Z,{children:(0,a.jsx)(y.Z,{})})}),L[L.length-1]?(0,a.jsx)(f.Z,{primary:"Input",secondary:(parseFloat(L[L.length-1])-parseFloat(ne)).toFixed(2)}):(0,a.jsx)(f.Z,{primary:"Input",secondary:"--"})]}),(0,a.jsxs)(j.ZP,{children:[(0,a.jsx)(D.Z,{children:(0,a.jsx)(S.Z,{children:(0,a.jsx)(b.Z,{})})}),(0,a.jsx)(u.Z,{placeholder:ne,onChange:function(e){re(e.target.value)},type:"number",fullWidth:!0,id:"outlined-basic",label:"Temprature Calibration",variant:"outlined"})]}),(0,a.jsxs)(j.ZP,{children:[(0,a.jsx)(D.Z,{children:(0,a.jsx)(S.Z,{children:(0,a.jsx)(Z.Z,{})})}),L[L.length-1]?(0,a.jsx)(f.Z,{primary:"Output",secondary:parseFloat(L[L.length-1]).toFixed(2)}):(0,a.jsx)(f.Z,{primary:"Output",secondary:"--"})]})]})]})})}),(0,a.jsx)(s.ZP,{item:!0,xs:12,children:(0,a.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(s.ZP,{item:!0,xs:4,children:(0,a.jsx)(x.Z,{variant:"p",sx:{fontWeight:700},children:"Humidity"})}),(0,a.jsxs)(s.ZP,{item:!0,xs:8,children:[(0,a.jsxs)(j.ZP,{children:[(0,a.jsx)(D.Z,{children:(0,a.jsx)(S.Z,{children:(0,a.jsx)(y.Z,{})})}),q[q.length-1]?(0,a.jsx)(f.Z,{primary:"Input",secondary:(parseFloat(q[q.length-1])-parseFloat(Q)).toFixed(2)}):(0,a.jsx)(f.Z,{primary:"Input",secondary:"--"})]}),(0,a.jsxs)(j.ZP,{children:[(0,a.jsx)(D.Z,{children:(0,a.jsx)(S.Z,{children:(0,a.jsx)(b.Z,{})})}),(0,a.jsx)(u.Z,{placeholder:Q,onChange:function(e){ee(e.target.value)},type:"number",fullWidth:!0,label:"Humidity Calibration",variant:"outlined"})]}),(0,a.jsxs)(j.ZP,{children:[(0,a.jsx)(D.Z,{children:(0,a.jsx)(S.Z,{children:(0,a.jsx)(Z.Z,{})})}),q[q.length-1]?(0,a.jsx)(f.Z,{primary:"Output",secondary:parseFloat(q[q.length-1]).toFixed(2)}):(0,a.jsx)(f.Z,{primary:"Output",secondary:"--"})]}),(0,a.jsx)(U.Z,{sx:{backgroundColor:"#38B6FF",p:1},onClick:function(){return function(){return ae.apply(this,arguments)}()},variant:"contained",children:"  Save"})]})]})})]}),(0,a.jsx)(s.ZP,{item:!0,lg:6,md:6,sm:6,xs:12})]}):(0,a.jsx)(a.Fragment,{})]})}},19629:function(e,t,n){"use strict";var r=(0,n(41120).Z)({textField:{width:"90%",marginLeft:"auto",marginRight:"auto",color:"white",paddingBottom:0,marginTop:0,fontWeight:500},error:{color:"#f04040"}});t.Z=r},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},52007:function(){},75042:function(){},18685:function(){},20067:function(){},55382:function(){},72095:function(){},72061:function(){},61219:function(){}},function(e){e.O(0,[570,599,849,524,885,864,904,723,974,132,26,3,898,669,542,5,427,81,370,776,774,888,179],(function(){return t=87955,e(e.s=t);var t}));var t=e.O();_N_E=t}]);