(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{39:function(e,t,a){e.exports=a(71)},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),c=a.n(i),l=a(14),s=a(5),o=a(18),m=a(36),u=a.n(m),p=a(6),d="SET_CURRENT_USER",b={currentUser:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(p.a)({},e,{currentUser:t.payload});default:return e}},h={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM"},f=a(38),v=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(f.a)(e),[Object(p.a)({},t,{quantity:1})])},E={hidden:!0,cartItems:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.TOGGLE_CART_HIDDEN:return Object(p.a)({},e,{hidden:!e.hidden});case h.ADD_ITEM:return Object(p.a)({},e,{cartItems:v(e.cartItems,t.payload)});default:return e}},y=Object(o.c)({user:g,cart:w}),O=[u.a],k=Object(o.d)(y,o.a.apply(void 0,O)),N=(a(48),a(7)),j=a.n(N),U=a(15),C=a(9),S=a(10),x=a(12),I=a(11),T=a(17),B=(a(50),a(16)),D=(a(51),Object(T.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,i=e.history,c=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return i.push("".concat(l.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),P=(a(53),function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){var e;return Object(C.a)(this,a),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"mens"}]},e}return Object(S.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"directory-menu"},this.state.sections.map((function(e){var t=e.id,a=Object(B.a)(e,["id"]);return r.a.createElement(D,Object.assign({key:t},a))})))}}]),a}(r.a.Component)),A=(a(54),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(P,null))}),R=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],G=(a(55),function(e){var t=e.children,a=(e.isGoogleSignIn,e.inverted),n=Object(B.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," custom-button")},n),t)}),M=(a(56),Object(s.b)(null,(function(e){return{addItem:function(t){return e(function(e){return{type:h.ADD_ITEM,payload:e}}(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,i=t.price,c=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},i)),r.a.createElement(G,{onClick:function(){return a(t)},inverted:!0},"Add to cart"))}))),H=(a(57),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(M,{key:e.id,item:e})}))))}),W=function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={collections:R},n}return Object(S.a)(a,[{key:"render",value:function(){var e=this.state.collections;return r.a.createElement("div",{className:"shop-Page"},e.map((function(e){var t=e.id,a=Object(B.a)(e,["id"]);return r.a.createElement(H,Object.assign({key:t},a))})))}}]),a}(r.a.Component),J=(a(58),a(21)),z=(a(59),a(60),function(e){var t=e.handleChange,a=e.label,n=Object(B.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":"","form-input-label")},a):null)}),_=a(22),L=a.n(_),q=(a(61),a(64),function(){var e=Object(U.a)(j.a.mark((function e(t,a){var n,r,i,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=F.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,c=new Date,e.prev=9,e.next=12,n.set(Object(p.a)({displayName:r,email:i,createdAt:c},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());L.a.initializeApp({apiKey:"AIzaSyDl1o5lwwnFx9OM19OIxyQU3ibaBhc4JRw",authDomain:"crwn-db-1e994.firebaseapp.com",databaseURL:"https://crwn-db-1e994.firebaseio.com",projectId:"crwn-db-1e994",storageBucket:"crwn-db-1e994.appspot.com",messagingSenderId:"78358644036",appId:"1:78358644036:web:7f30113ecc74ba13914311"});var V=L.a.auth(),F=L.a.firestore(),K=new L.a.auth.GoogleAuthProvider;K.setCustomParameters({prompt:"select_account"});var Q=function(){return V.signInWithPopup(K)},Y=(L.a,function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(U.a)(j.a.mark((function e(t){var a,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,i=a.password,e.prev=2,e.next=5,V.signInWithEmailAndPassword(r,i);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(J.a)({},r,a))},n.state={email:"",password:""},n}return Object(S.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I have already and account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(z,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),r.a.createElement(z,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(G,{type:"submit"}," Sign In"),r.a.createElement(G,{onClick:Q,isGoogleSignIn:!0},"Sign in with Google"))))}}]),a}(r.a.Component)),X=(a(66),function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){var e;return Object(C.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(U.a)(j.a.mark((function t(a){var n,r,i,c,l,s,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,i=n.email,c=n.password,l=n.confirmPassword,c===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,V.createUserWithEmailAndPassword(i,c);case 8:return s=t.sent,o=s.user,t.next=12,q(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(J.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(S.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,i=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign upc with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(z,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(z,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(z,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(z,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(G,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component)),Z=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Y,null),r.a.createElement(X,null))};function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var te=r.a.createElement("g",null),ae=r.a.createElement("g",null),ne=r.a.createElement("g",null),re=r.a.createElement("g",null),ie=r.a.createElement("g",null),ce=r.a.createElement("g",null),le=r.a.createElement("g",null),se=r.a.createElement("g",null),oe=r.a.createElement("g",null),me=r.a.createElement("g",null),ue=r.a.createElement("g",null),pe=r.a.createElement("g",null),de=r.a.createElement("g",null),be=r.a.createElement("g",null),ge=r.a.createElement("g",null),he=function(e){var t=e.svgRef,a=e.title,n=ee(e,["svgRef","title"]);return r.a.createElement("svg",$({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),te,ae,ne,re,ie,ce,le,se,oe,me,ue,pe,de,be,ge)},fe=r.a.forwardRef((function(e,t){return r.a.createElement(he,$({svgRef:t},e))})),ve=(a.p,a(67),Object(s.b)(null,(function(e){return{toggleCartHidden:function(){return e({type:h.TOGGLE_CART_HIDDEN})}}}))((function(e){var t=e.toggleCartHidden;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(fe,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},"0"))}))),Ee=(a(68),function(e){var t=e.item,a=t.imageUrl,n=t.price,i=t.name,c=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"price"},c,"x$",n)))}),we=(a(69),Object(s.b)((function(e){return{cartItems:e.cart.cartItems}}))((function(e){var t=e.cartItems;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.map((function(e){return r.a.createElement(Ee,{key:e.id,item:e})}))),r.a.createElement(G,null,"GO TO CHECK OUT"))})));function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ke=r.a.createElement("title",null,"Group"),Ne=r.a.createElement("desc",null,"Created with Sketch."),je=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Ue=function(e){var t=e.svgRef,a=e.title,n=Oe(e,["svgRef","title"]);return r.a.createElement("svg",ye({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?ke:a?r.a.createElement("title",null,a):null,Ne,je)},Ce=r.a.forwardRef((function(e,t){return r.a.createElement(Ue,ye({svgRef:t},e))})),Se=(a.p,a(70),Object(s.b)((function(e){return{currentUser:e.user.currentUser,hidden:e.cart.hidden}}))((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/crwn-clothing"},r.a.createElement(Ce,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/crwn-clothing/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/crwn-clothing/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return V.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/crwn-clothing/signin"},"SIGN IN"),r.a.createElement(ve,null)),a?null:r.a.createElement(we,null))}))),xe=function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=V.onAuthStateChanged(function(){var t=Object(U.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,q(a);case 3:t.sent.onSnapshot((function(t){e(Object(p.a)({id:t.id},t.data()))}));case 5:e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Se,null),r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/crwn-clothing",component:A}),r.a.createElement(T.b,{path:"/crwn-clothing/shop",component:W}),r.a.createElement(T.b,{exact:!0,path:"/crwn-clothing/signin",render:function(){return e.props.currentUser?r.a.createElement(T.a,{to:"/crwn-clothing"}):r.a.createElement(Z,null)}})))}}]),a}(r.a.Component),Ie=Object(s.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:d,payload:e}}(t))}}}))(xe);c.a.render(r.a.createElement(s.a,{store:k},r.a.createElement(l.a,null,r.a.createElement(Ie,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.af7c5da9.chunk.js.map