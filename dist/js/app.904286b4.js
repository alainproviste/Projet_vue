(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var i=r[o];0!==n[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},o={app:0},n={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4ca5b55a"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"63c00c84"}[t]+".css",n=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===n))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===n)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[t],p.parentNode.removeChild(p),r(s)},p.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[t]=0})));var a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,r[1](d)}n[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"046c":function(t,e,r){"use strict";r("5dad")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("main",[r("router-view")],1),r("Footer")],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header__main"},[t._m(0),r("div",{staticClass:"header__nav"},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),r("router-link",{attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" | "),r("router-link",{attrs:{to:"/shop"}},[t._v("Shop")]),t._v(" | "),r("router-link",{attrs:{to:"/account"}},[t._v("Mon compte")]),t._v(" | "),r("router-link",{attrs:{to:"/cart"}},[t._v("Mon panier")]),t._v(" | ")],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header__logo"},[a("img",{attrs:{src:r("cf05"),alt:"My App Vue"}})])}],c={},l=c,u=r("2877"),d=Object(u["a"])(l,s,i,!1,null,"5e7024bf",null),p=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("p",[t._v("Copyright © 2021")])])}],f={},g=f,_=Object(u["a"])(g,m,v,!1,null,"36a4933a",null),h=_.exports,y={components:{Header:p,Footer:h}},b=y,C=(r("5c0b"),Object(u["a"])(b,o,n,!1,null,null,null)),w=C.exports,P=(r("d3b7"),r("8c4f")),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",[t._v(t._s(t.myTitle))]),r("p",[t._v(" J'ai "+t._s(t.myAge)+" ans ")]),r("p",[t._v(" "+t._s(t.myAge>30?"je suis vieux":"Je suis jeune")+" ")]),r("p",[t._v(" "+t._s(t.percentCa/100)+" % ")]),t.myAge>30?r("p",[t._v(" Je suis vieux ")]):r("p",[t._v(" Je suis jeune ")]),t.isVisible?t.isVisible?r("div",{staticClass:"visible__block"},[r("p",[t._v("Je suis visible")])]):r("div",{staticClass:"unvisible__block"},[r("p",[t._v("Je suis ni visible ni invisible")])]):r("div",{staticClass:"visible__block"},[r("p",[t._v("Je suis invisible")])]),r("div",{staticClass:"font-bold",domProps:{innerHTML:t._s(t.textStyling)}}),r("div",{staticClass:"google__logo"},[r("img",{attrs:{src:t.googleLogo,alt:"logo google"}})]),r("div",{staticClass:"link"},[r("a",{attrs:{target:"_blank",href:t.link}},[t._v("Link to google")]),r("a",{attrs:{target:"_blank",href:t.link}},[t._v("Link to google")])]),t._l(t.productsArray,(function(e,a){return r("div",{key:e.id,staticClass:"products__grid"},[t._v(" "+t._s(a)+" "+t._s(e.id)+" "+t._s(e.title)+" "+t._s(e.price)+" € ")])})),r("button",{on:{click:function(e){return t.sayHello("vincent")}}},[t._v("say Hello")])],2)},N=[],j={name:"Home",methods:{sayHello:function(t){alert("Hello ".concat(t))}},data:function(){return{myTitle:"Ma homepage",myAge:30,percentCa:2e3,isVisible:!1,textStyling:"<strong>This text is bold</strong>",link:"https://google.fr",googleLogo:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",productsArray:[{id:1,title:"product 1",price:20},{id:2,title:"product 2",price:50}]}}},O=j,k=Object(u["a"])(O,x,N,!1,null,"43ad50a2",null),S=k.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("TitlePage",{attrs:{title:t.myTitle}})],1)},A=[],T=r("9dec"),I={name:"Contact",components:{TitlePage:T["a"]},data:function(){return{myTitle:"Page contact"}}},$=I,J=Object(u["a"])($,E,A,!1,null,"65221bf3",null),q=J.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page__shop"},[r("TitlePage",{attrs:{title:"Mon Eshop"}}),r("ProductsGrid",{attrs:{productsArray:t.productsArray}})],1)},L=[],M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products__grid"},t._l(t.productsArray,(function(t){return r("ProductCard",{key:t._id,attrs:{productObject:t}})})),1)},V=[],z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product__card"},[r("router-link",{attrs:{to:{name:"Product",params:{id:t.productObject._id}}}},[r("h2",[t._v(" "+t._s(t.productObject.title)+" ")])]),r("p",[t._v(" "+t._s(t.productObject.price)+" ")]),r("p",[r("button",{on:{click:function(){return t.addItemToCart(t.productObject)}}},[t._v("Ajouter au panier")])])],1)},H=[],Q=(r("4de4"),r("c740"),r("13d5"),{methods:{addTocart:function(t){var e=JSON.parse(localStorage.getItem("cart"))||[],r={id:t._id,title:t.title,price:t.price,qty:1};console.log(r);var a=e.findIndex((function(t){return t.id===r.id}));-1!==a?e[a].qty+=1:e.push(r),localStorage.setItem("cart",JSON.stringify(e))},getCart:function(){return JSON.parse(localStorage.getItem("cart"))},removeItemCart:function(t){var e=JSON.parse(localStorage.getItem("cart")),r=e.filter((function(e){return e.id!==t.id}));localStorage.setItem("cart",JSON.stringify(r))},clearCart:function(){localStorage.removeItem("cart")},removeOneQty:function(t){var e=JSON.parse(localStorage.getItem("cart")),r={id:t.id,title:t.title,price:t.price,qty:1},a=e.findIndex((function(t){return t.id===r.id}));-1!=a&&e[a].qty>1&&e[a].qty--,localStorage.setItem("cart",JSON.stringify(e))},addOneQty:function(t){var e=JSON.parse(localStorage.getItem("cart")),r={id:t.id,title:t.title,price:t.price,qty:1},a=e.findIndex((function(t){return t.id===r.id}));-1!=a&&e[a].qty++,localStorage.setItem("cart",JSON.stringify(e))},getCartTotal:function(t){var e=t.reduce((function(t,e){return t+e.qty*e.price}),0);return e},getCartCount:function(t){var e=t.reduce((function(t,e){return t+e.qty}),0);return e}}}),U={name:"ProductCard",mixins:[Q],props:{productObject:Object},methods:{addItemToCart:function(t){this.addTocart(t)}}},D=U,B=Object(u["a"])(D,z,H,!1,null,null,null),G=B.exports,K={name:"ProductsGrid",components:{ProductCard:G},props:{productsArray:Array}},R=K,W=Object(u["a"])(R,M,V,!1,null,"4e33d008",null),X=W.exports,Y={apiUrl:"https://ynovnodejs.herokuapp.com/api/v1"},Z={methods:{getProducts:function(){return console.log(Y.apiUrl),fetch("".concat(Y.apiUrl,"/products")).then((function(t){return t.json()}))},getProduct:function(){}}},tt={components:{TitlePage:T["a"],ProductsGrid:X},data:function(){return{productsArray:[]}},methods:{},mixins:[Z],created:function(){var t=this;fetch("https://ynovnodejs.herokuapp.com/api/v1/products").then((function(t){return t.json()})).then((function(e){console.log(e,"data"),t.productsArray=e})).catch((function(t){return console.log(t)}))}},et=tt,rt=Object(u["a"])(et,F,L,!1,null,"a050de8e",null),at=rt.exports,ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("TitlePage",{attrs:{title:"Mon compte"}}),r("div",[t.user?r("div",{staticClass:"user__info"},[r("p",[t._v("Nom :"+t._s(t.user.firstName))]),r("p",[t._v("Prénom :"+t._s(t.user.lastName))]),r("p",[t._v("Email :"+t._s(t.user.email))]),r("button",{on:{click:t.logout}},[t._v("Se déconnecter")])]):t._e()])],1)},nt=[],st=r("48ac"),it=r.n(st),ct={components:{TitlePage:T["a"]},data:function(){return{user:{}}},methods:{logout:function(){localStorage.removeItem("token")}},created:function(){var t=this,e=localStorage.getItem("token");if(e){var r=it.a.decode(e);fetch("https://ynovnodejs.herokuapp.com/api/v1/users/".concat(r.id),{headers:{Authorization:e}}).then((function(t){return t.json()})).then((function(e){t.user=e,console.log(t.user.email)})).catch((function(t){return console.log(t)}))}}},lt=ct,ut=Object(u["a"])(lt,ot,nt,!1,null,null,null),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page__product"},[t.ProductCard?r("div",{staticClass:"product__content"},[r("TitlePage",{attrs:{title:t.ProductCard.title}}),r("p",[t._v(t._s(t._f("formatPrice")(t.ProductCard.price)))])],1):t._e()])},mt=[],vt={components:{TitlePage:T["a"]},data:function(){return{ProductCard:{}}},filters:{},methods:{getProduct:function(){var t=this;return fetch("https://nodejs-myapi.herokuapp.com/api/v1/product/"+this.$route.params.id).then((function(t){return t.json()})).then((function(e){console.log(e,"data"),t.ProductCard=e})).catch((function(t){return console.log(t)}))}},created:function(){this.getProduct()}},ft=vt,gt=(r("046c"),Object(u["a"])(ft,pt,mt,!1,null,"0e89fbe4",null)),_t=gt.exports,ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login__form"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"email"}},[t._v("Mail")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._m(0)]),t.messageError?r("p",[t._v(" "+t._s(t.messageError)+" ")]):t._e()])},yt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("input",{attrs:{type:"submit",value:"se connecter"}})])}],bt={data:function(){return{email:"",password:"",messageError:""}},methods:{login:function(t){var e=this,r={email:this.email,password:this.password},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("https://ynovnodejs.herokuapp.com/api/v1/login",a).then((function(t){return t.json()})).then((function(t){if(t.auth){var r=t.token;localStorage.setItem("token",r),e.$router.push("/account")}else e.messageError=t.message})).catch((function(t){return console.log(t)}))}}},Ct=bt,wt=Object(u["a"])(Ct,ht,yt,!1,null,"c396ad2a",null),Pt=wt.exports,xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"register__form"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"firstName"}},[t._v("Prénom")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text",name:"firstName"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"lastName"}},[t._v("Nom")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text",name:"lastName"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"phone"}},[t._v("Numéro de téléphone")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"tel",name:"phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"zip"}},[t._v("Code postal")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.zip,expression:"address.zip"}],attrs:{type:"text",name:"zip"},domProps:{value:t.address.zip},on:{input:function(e){e.target.composing||t.$set(t.address,"zip",e.target.value)}}})]),r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"street"}},[t._v("Adresse")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.street,expression:"address.street"}],attrs:{type:"text",name:"street"},domProps:{value:t.address.street},on:{input:function(e){e.target.composing||t.$set(t.address,"street",e.target.value)}}})]),r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"city"}},[t._v("Ville")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.city,expression:"address.city"}],attrs:{type:"text",name:"city"},domProps:{value:t.address.city},on:{input:function(e){e.target.composing||t.$set(t.address,"city",e.target.value)}}})]),r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"country"}},[t._v("Pays")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.country,expression:"address.country"}],attrs:{type:"text",name:"country"},domProps:{value:t.address.country},on:{input:function(e){e.target.composing||t.$set(t.address,"country",e.target.value)}}})]),r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"email"}},[t._v("Adresse mail")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"password"}},[t._v("Mot de passe")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("div",{staticClass:"form__group"},[r("label",{attrs:{htmlFor:"passwordVerify"}},[t._v("Entrez le mot de passe à nouveau")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordVerify,expression:"passwordVerify"}],attrs:{type:"password",name:"passwordVerify"},domProps:{value:t.passwordVerify},on:{input:function(e){e.target.composing||(t.passwordVerify=e.target.value)}}})]),t._m(0)]),t.messageError?r("p",[t._v(" "+t._s(t.messageError)+" ")]):t._e()])},Nt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("input",{attrs:{type:"submit",value:"se connecter"}})])}],jt={data:function(){return{firstName:"",lastName:"",phone:"",email:"",password:"",passwordVerify:"",isAdmin:"",messageError:"",address:{},zip:"",city:"",street:"",country:""}},methods:{register:function(t){var e=this,r={firstName:this.firstName,lastName:this.lastName,phone:this.phone,email:this.email,password:this.password,isAdmin:!1,address:{zip:this.address.zip,street:this.address.street,city:this.address.city,country:this.address.country}};if(this.password==this.passwordVerify){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("https://ynovnodejs.herokuapp.com/api/v1/users",a).then((function(t){return t.json()})).then((function(t){if(t.auth){var r=t.token;localStorage.setItem("token",r),e.$router.push("/account")}else e.messageError=t.message})).catch((function(t){return console.log(t)}))}else this.messageError="Les 2 mots de passes entrés ne sont pas identique !"}}},Ot=jt,kt=Object(u["a"])(Ot,xt,Nt,!1,null,"3bb094e8",null),St=kt.exports;var Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shopping__cart"},[t._v(" // loop sur this.cartArray "),r("table",[t._m(0),r("tbody",t._l(t.cartArray,(function(e){return r("tr",{key:e._id},[r("td",[t._v(t._s(e.title))]),r("td",[t._v(t._s(e.qty))]),r("td",[t._v(t._s(e.price)+" €")]),r("td",[r("button",{on:{click:function(r){return t.removeItemCart1Qty(e)}}},[t._v("-")]),r("button",{on:{click:function(r){return t.addItemCart(e)}}},[t._v("+")])]),r("td",[t._v(" "+t._s(e.qty*e.price)+" € ")]),r("td",[r("button",{on:{click:function(r){return t.removeProductCart(e)}}},[t._v("Supprimer du panier")])])])})),0)]),t._v(" "),r("br"),r("br"),r("div",[t._v(" Quatité totale : "+t._s(t.calcQty)+" ")]),r("div",[t._v(" Prix total : "+t._s(t.calcTotal)+" ")]),r("button",{on:{click:function(e){return t.deleteCart()}}},[t._v("Supprimer le panier")])])},At=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Titre")]),r("th",[t._v("Quantité")]),r("th",[t._v("Prix")]),r("th"),r("th",[t._v("Total")]),r("th")])])}],Tt={mixins:[Q],data:function(){return{cartArray:[]}},created:function(){this.cartArray=this.getCart(),console.log(this.cartArray)},computed:{calcQty:function(){return this.getCartCount(this.cartArray)},calcTotal:function(){return this.getCartTotal(this.cartArray)}},methods:{deleteCart:function(){this.clearCart()},removeProductCart:function(t){this.removeItemCart(t),this.cartArray=this.getCart()},addItemCart:function(t){this.addOneQty(t),this.cartArray=this.getCart()},removeItemCart1Qty:function(t){this.removeOneQty(t),this.cartArray=this.getCart()}}},It=Tt,$t=Object(u["a"])(It,Et,At,!1,null,"c419d662",null),Jt=$t.exports;a["a"].use(P["a"]);var qt=[{path:"/",name:"Home",component:S},{path:"/cart",name:"Cart",component:Jt},{path:"/contact",name:"Contact",component:q},{path:"/shop",name:"Shop",component:at},{path:"/account",name:"User",component:dt,beforeEnter:function(t,e,r){console.log("test"),localStorage.getItem("token")?r():r({name:"Login"})}},{path:"/product/:id",name:"Product",component:_t},{path:"/login",name:"Login",component:Pt},{path:"/register",name:"Register",component:St},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],Ft=new P["a"]({routes:qt}),Lt=Ft,Mt=r("2f62");a["a"].use(Mt["a"]);var Vt=new Mt["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].filter("formatPrice",(function(t){return"".concat(t," €")})),a["a"].config.productionTip=!1,new a["a"]({router:Lt,store:Vt,filters:void 0,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"5dad":function(t,e,r){},9760:function(t,e,r){},"9c0c":function(t,e,r){},"9dec":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title__page"},[r("h1",[t._v(" "+t._s(t.title)+" ")])])},o=[],n={name:"TitlePage",props:{title:{required:!0,type:String}}},s=n,i=(r("e5b5"),r("2877")),c=Object(i["a"])(s,a,o,!1,null,"34dad4dd",null);e["a"]=c.exports},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},e5b5:function(t,e,r){"use strict";r("9760")}});
//# sourceMappingURL=app.904286b4.js.map