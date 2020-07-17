!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],s=0,l=[];s<o.length;s++)a=o[s],A[a]&&l.push(A[a][0]),A[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(t);l.length;)l.shift()();return q.push.apply(q,c||[]),n()}function n(){for(var e,t=0;t<q.length;t++){for(var n=q[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==A[o]&&(r=!1)}r&&(q.splice(t--,1),e=T(T.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(O[e]&&w[e]){for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(b[n]=t[n]);0==--y&&0===v&&S()}}(e,t),r&&r(e,t)};var a,o=!0,i="baaf8ffb802fd560dc65",c=1e4,s={},l=[],u=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:P,apply:k,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[e]};return a=void 0,t}var d=[],f="idle";function m(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,b,g,y=0,v=0,E={},w={},O={};function j(e){return+e+""===e?+e:e}function P(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,m("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=T.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;w={},E={},O=e.c,g=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in b={},A)x(n);return"prepare"===f&&0===v&&0===y&&S(),t});var t}function x(e){O[e]?(w[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=T.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function S(){m("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return k(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&t.push(j(n));e.resolve(t)}}function k(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,c;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,c=a.chain;if((o=_[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<o.parents.length;s++){var l=o.parents[s],u=_[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),p(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var d={},h=[],y={},v=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var E in b)if(Object.prototype.hasOwnProperty.call(b,E)){var w;c=j(E);var P=!1,x=!1,S=!1,k="";switch((w=b[E]?u(c):{type:"disposed",moduleId:E}).chain&&(k="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+w.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(P=new Error("Aborted because "+c+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(w),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),S=!0;break;default:throw new Error("Unexception type "+w.type)}if(P)return m("abort"),Promise.reject(P);if(x)for(c in y[c]=b[c],p(h,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,c)&&(d[c]||(d[c]=[]),p(d[c],w.outdatedDependencies[c]));S&&(p(h,[w.moduleId]),y[c]=v)}var q,I=[];for(r=0;r<h.length;r++)c=h[r],_[c]&&_[c].hot._selfAccepted&&I.push({module:c,errorHandler:_[c].hot._selfAccepted});m("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete A[e]}(e)});for(var C,D,R=h.slice();R.length>0;)if(c=R.pop(),o=_[c]){var F={},H=o.hot._disposeHandlers;for(a=0;a<H.length;a++)(n=H[a])(F);for(s[c]=F,o.hot.active=!1,delete _[c],delete d[c],a=0;a<o.children.length;a++){var N=_[o.children[a]];N&&(q=N.parents.indexOf(c))>=0&&N.parents.splice(q,1)}}for(c in d)if(Object.prototype.hasOwnProperty.call(d,c)&&(o=_[c]))for(D=d[c],a=0;a<D.length;a++)C=D[a],(q=o.children.indexOf(C))>=0&&o.children.splice(q,1);for(c in m("apply"),i=g,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var M=null;for(c in d)if(Object.prototype.hasOwnProperty.call(d,c)&&(o=_[c])){D=d[c];var z=[];for(r=0;r<D.length;r++)if(C=D[r],n=o.hot._acceptedDependencies[C]){if(-1!==z.indexOf(n))continue;z.push(n)}for(r=0;r<z.length;r++){n=z[r];try{n(D)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:D[r],error:e}),t.ignoreErrored||M||(M=e)}}}for(r=0;r<I.length;r++){var B=I[r];c=B.module,l=[c];try{T(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||M||(M=n),M||(M=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||M||(M=e)}}return M?(m("fail"),Promise.reject(M)):(m("idle"),new Promise(function(e){e(h)}))}var _={},A={0:0},q=[];function T(t){if(_[t])return _[t].exports;var n=_[t]={i:t,l:!1,exports:{},hot:p(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=_[e];if(!t)return T;var n=function(n){return t.hot.active?(_[n]?-1===_[n].parents.indexOf(e)&&_[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),T(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(t){T[e]=t}}};for(var o in T)Object.prototype.hasOwnProperty.call(T,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&m("prepare"),v++,T.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===f&&(E[e]||x(e),0===v&&0===y&&S())}},n.t=function(e,t){return 1&t&&(e=n(e)),T.t(e,-2&t)},n}(t)),n.l=!0,n.exports}T.m=e,T.c=_,T.d=function(e,t,n){T.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},T.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,t){if(1&t&&(e=T(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(T.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)T.d(n,r,function(t){return e[t]}.bind(null,r));return n},T.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(t,"a",t),t},T.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},T.p="/",T.h=function(){return i};var I=window.webpackJsonp=window.webpackJsonp||[],C=I.push.bind(I);I.push=t,I=I.slice();for(var D=0;D<I.length;D++)t(I[D]);var R=C;q.push([322,1]),n()}({322:function(e,t,n){"use strict";n.r(t),n(164);var r=n(0),a=n.n(r),o=n(66),i=n(42),c=n(47),s=n(8),l=n(1),u=n.n(l),p=n(335),d=function(e){var t=e.children;return a.a.createElement("main",null,a.a.createElement(p.a,null),t)};d.propTypes={children:u.a.node.isRequired};var f=d,m=n(331),h=n(332),b=n(337),g=function(){return a.a.createElement(b.a,{mb:5},a.a.createElement(m.a,{container:!0,component:"footer",justify:"center"},a.a.createElement(m.a,{item:!0,xs:"auto"},a.a.createElement(h.a,{component:c.b,to:"/code-of-conduct",color:"textSecondary",variant:"body1"},"Código de conduta"))))},y=n(150),v=n(324),E=n(333),w=n(334),O=function(e){return e=e.toLowerCase().split(/\s/).reduce(function(e,t){return e+t.charAt(0).toUpperCase()+t.slice(1)}),"".concat(e,"()")},j=n(151),P=n.n(j),x=n(152),S=n.n(x);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _=function(e){var t=e.content,n=e.a11y,o=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["content","a11y"]),i=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(r.useState)(!0),1)[0],c=Object(r.useRef)();return Object(r.useEffect)(function(){new S.a(c.current,{strings:t,typeSpeed:40,backSpeed:20})},[i]),a.a.createElement(a.a.Fragment,null,n.content&&a.a.createElement(v.a,k({},o,{variant:"srOnly"}),n.content),a.a.createElement(v.a,k({},o,{"aria-hidden":!P()(n.content)}),a.a.createElement("span",{ref:c})))};_.propTypes={content:u.a.array.isRequired,a11y:u.a.shape({content:u.a.string})},_.defaultProps={a11y:{content:null}};var A=_,q=n(119),T=n.n(q),I=n(157),C=n.n(I),D=n(155),R=n.n(D),F=n(336),H=n(162);function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M={live:"#FFFFFF",tar:"#000000",energy:"#FF685C",sunrise:"#DA83F6",sunset:"#FBC54C",nature:"#7BE473",ocean:"#58A9F3"};function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){z(e,t,n[t])})}return e}({},{palette:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){N(e,t,n[t])})}return e}({},M,{type:"dark",background:{default:M.tar},text:{primary:M.live}}),sizes:{container:1280},typography:{useNextVariants:!0,fontFamily:["Roboto Mono","monospace"].join(", ")}}),L={mixins:{body:function(e){return{"@global":{body:e}}}}};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var V={standard:B},J=function(e){var t=e.classes,n=e.component,r=e.children,o=e.title,i=e.collapsed,c=e.progress;return a.a.createElement(E.a,{maxWidth:i?"xl":"lg",className:t.section},a.a.createElement(m.a,{component:n,container:!0,className:t.sectionContainer,justify:"center",alignItems:"center"},c?a.a.createElement(m.a,{item:!0,xs:i?"auto":10},o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{component:"h2",className:t.sectionTitle,variant:"h5",content:[O(o)],a11y:{content:o}})),r):a.a.createElement(m.a,{item:!0},a.a.createElement(w.a,null))))};J.propTypes={classes:u.a.object.isRequired,children:u.a.node.isRequired,collapsed:u.a.bool,title:u.a.string,component:u.a.string,progress:u.a.oneOfType([u.a.bool,u.a.number])},J.defaultProps={collapsed:!1,title:null,component:"section",progress:!0};var Y=T()(function(e){var t=e.palette,n=e.spacing;return{section:{padding:function(e){return e.collapsed&&0}},sectionContainer:{minHeight:"100vh",paddingTop:n(8),paddingBottom:n(8)},sectionTitle:{color:function(e){var n=e.titleCustomColor;return t[n]||t.text.primary},marginBottom:n(5)}}})(J);function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){W(e,t,n[t])})}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var K=function(e){var t=e.classes,n=e.children,r=(e.custom,e.width,function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["classes","children","custom","width"]));return a.a.createElement(h.a,X({color:"inherit",underline:"none"},r),a.a.createElement(v.a,{component:"span",className:t.buttonSpecial},a.a.createElement("span",{className:t.buttonSpecialChildren},n)))};K.propTypes={classes:u.a.object.isRequired,children:u.a.node.isRequired,custom:u.a.object,width:u.a.number},K.defaultProps={custom:{},width:0};var G=T()(function(e){var t=e.palette,n=e.spacing,r={height:"inherit",width:"inherit"},a=Q({},r,{content:'""',border:"1px solid",borderPosition:"inner",position:"absolute",borderColor:function(e){var n=e.custom;return t[n.color]}});return{buttonSpecial:{display:"inline-flex",position:"relative",marginBottom:n(2),width:function(e){return e.width||100},height:function(e){return e.height||50},color:function(e){var n=e.custom;return t[n.color]},backgroundColor:function(e){var n=e.custom;return t[n.background]},"&::before":Q({},a,{top:0,zIndex:3}),"&::after":Q({},a,{top:7,left:7})},buttonSpecialChildren:Q({},r,{display:"inherit",alignItems:"center",justifyContent:"center",position:"inherit",zIndex:2,backgroundColor:function(e){var n=e.custom;return t[n.background]}})}})(K);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Z=function(e){var t=e.children,n={width:e.width,height:e.height,custom:{color:"sunset",background:"tar"}};return a.a.createElement(G,$({href:"https://www.sympla.com.br/front-in-sampa-2020__592098","aria-label":"Abrir nossa página de inscrição no Sympla.",target:"_blank",rel:"noopener"},n),t)};Z.propTypes={width:u.a.number,height:u.a.number,children:u.a.node.isRequired},Z.defaultProps={width:0,height:0};var ee=T()(function(){return{}})(Z),te=function(){return a.a.createElement(Y,null,a.a.createElement(m.a,{container:!0,direction:"row",justify:"center"},a.a.createElement(m.a,{item:!0,xs:"auto",style:{textAlign:"center"}},a.a.createElement(A,{component:"p",paragraph:!0,variant:"h2",content:["#saveTheDate","Front In Sampa 2020"]}),a.a.createElement(v.a,{component:"p",paragraph:!0,variant:"h5",color:"textSecondary"},"18 de Julho | ",a.a.createElement(h.a,{href:"https://www.youtube.com/watch?v=0qtRQYS4V5A",underline:"none",color:"inherit",target:"_blank"},"youtube.com/frontinsampa")),a.a.createElement(b.a,{mt:5,mb:5},a.a.createElement(v.a,{component:"p",variant:"h2",color:"textSecondary"},a.a.createElement(y.a,{date:new Date("Sat, 18 Jul 2020"),zeroPadTime:2,daysInHours:!0}))),a.a.createElement(ee,{width:230},"Faça sua inscrição"))))};function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var re=function(e){var t=e.classes,n=(e.customColor,function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["classes","customColor"]));return a.a.createElement(v.a,ne({className:t.typography},n))};re.propTypes={classes:u.a.object.isRequired,customColor:u.a.string},re.defaultProps={customColor:null};var ae=T()(function(e){var t=e.palette;return{typography:{color:function(e){var n=e.customColor;return t[n]||t.text.primary}}}})(re),oe=function(){return a.a.createElement(Y,{title:"O evento",titleCustomColor:"sunrise"},a.a.createElement(b.a,{mb:6},a.a.createElement(ae,{component:"p",paragraph:!0,variant:"h5"},"O ",a.a.createElement(b.a,{component:"strong",color:"sunrise",fontWeight:"normal"},"Front In Sampa é o tradicional evento de Front-End")," sediado em São Paulo com 8 edições de sucesso desde 2012. Com o posto de maior do Brasil no seguimento e bem aclamado pelo público da área, trazemos conteúdo de alta qualidade aliado a uma experiência incrível do início ao fim, sempre pensando na inclusão, no aprendizado e na diversão.")))},ie=n(30),ce=n.n(ie),se=n(31),le=n.n(se),ue=n(158),pe=n.n(ue),de=function(e){var t=e.src,n=e.alt,r=e.presentation,o=e.a11y,i=e.width,c=e.height,s=ce()();return r?a.a.createElement("img",{src:t,alt:"",role:"presentation",width:i,height:c}):a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:t,alt:n,"aria-describedby":s,width:i,height:c}),a.a.createElement("span",{id:s},o.description))};de.propTypes={src:u.a.string.isRequired,alt:u.a.string.isRequired,width:u.a.oneOfType([u.a.string,u.a.number]),height:u.a.oneOfType([u.a.string,u.a.number]),presentation:u.a.bool,a11y:u.a.shape({title:u.a.string,description:u.a.string})},de.defaultProps={presentation:!1,a11y:null,width:"auto",height:"auto"};var fe=de,me=n(159),he=n.n(me),be=function(e){var t=e.src,n=e.fallback;return a.a.createElement(he.a,{src:t},a.a.createElement(fe,{src:n,alt:"",presentation:!0}))};be.propTypes={src:u.a.string.isRequired,fallback:u.a.string.isRequired};var ge=be,ye=function(e){var t=e.classes,n=e.children;return a.a.createElement("div",{className:t.spot},n)};ye.propTypes={classes:u.a.object.isRequired,children:u.a.node.isRequired};var ve=T()(function(e){return{spot:{borderColor:e.palette.background.default,borderStyle:"solid",borderWidth:1,display:"block",overflow:"hidden",position:"relative",background:"#1A1A1A",height:function(e){return e.height||314},width:function(e){return e.width||"100%"},"& > img":{left:"50%",position:"relative",transform:"translateX(-50%)",width:"inherit",height:"auto",minHeight:"100%"}}}})(ye),Ee=n(93),we=function(e){var t=e.classes,n=e.children;return a.a.createElement("div",{className:t.spotBar,tabIndex:"0",onFocus:function(e){e.target.classList.add("actived")},onBlur:function(e){e.target.classList.remove("actived")},role:"textbox"},a.a.createElement(b.a,{className:t.spotBarContent,padding:3},a.a.createElement("div",null,n)))};we.propTypes={classes:u.a.object.isRequired,children:u.a.node.isRequired};var Oe=T()(function(e){var t=e.palette;return{spotBar:{cursor:"pointer",height:"inherit",left:0,position:"absolute",top:0,width:"inherit",zIndex:2,"&.actived":{cursor:"default","& > $spotBarContent":{transform:"translateY(0)"}}},spotBarContent:{alignItems:"flex-end",backgroundColor:Object(Ee.fade)(t.tar,.8),display:"flex",height:"inherit",left:0,position:"absolute",top:0,transform:"translateY(100%)",transition:"transform .2s",width:"inherit"}}})(we),je=n(70),Pe=n.n(je),xe=async function(e){try{var t=await async function(){return Pe.a.api("https://frontinsampa.cdn.prismic.io/api/v2",{accessToken:"MC5YUkY4b3hJQUFINkE3MVNj.77-9Au-_vXMAKO-_ve-_ve-_vQsz77-977-977-977-9dR0-MgHvv73vv71jJu-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_vQ"})}();return(await t.query(e({Predicates:je.Predicates}))).results}catch(e){throw new Error(e)}},Se=async function(e){return xe(function(t){return[t.Predicates.at("document.type",e)]})},ke=async function(e){var t=e.year;return xe(function(e){var n=e.Predicates;return[n.at("document.type","speaker"),n.at("document.tags",[t])]})};function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ae={content:[]};function qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ie=function(e){var t=e.dispatch,n=e.content,o=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(r.useState)(!1),2),i=o[0],c=o[1];return Object(r.useEffect)(function(){i||(t(async function(e){var t=(new Date).getFullYear().toString();e({type:"SET_SPEAKER",data:{content:(await ke({year:t})).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){qe(e,t,n[t])})}return e}({},e.data)})}})}),c(!0))}),a.a.createElement(Y,{collapsed:!0,progress:n.length},a.a.createElement(m.a,{container:!0},pe()(n,["name"],["asc"]).map(function(e){var t=e.name,n=e.occupation,r=e.description,o=e.photo,i=e.social_media_twitter,c=e.social_media_github,s=e.website;return a.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:3,key:ce()()},a.a.createElement(ve,null,a.a.createElement(fe,Te({src:o.medium.url,presentation:!0,alt:o.medium.alt},o.medium.dimensions)),a.a.createElement(Oe,null,a.a.createElement(b.a,{marginBottom:1},a.a.createElement(m.a,{container:!0,alignItems:"center",spacing:2},i.url&&a.a.createElement(m.a,{item:!0,xs:"auto"},a.a.createElement(h.a,{href:le.a.Link.url(i),underline:"none",target:"_blank",rel:"noopener"},a.a.createElement(ge,{src:"/assets/images/social-media-twitter.svg",fallback:"/assets/images/social-media-twitter.png"}))),c.url&&a.a.createElement(m.a,{item:!0,xs:"auto"},a.a.createElement(h.a,{href:le.a.Link.url(c),underline:"none",target:"_blank",rel:"noopener"},a.a.createElement(ge,{src:"/assets/images/social-media-github.svg",fallback:"/assets/images/social-media-twitter.png"}))),s.url&&a.a.createElement(m.a,{item:!0,xs:"auto"},a.a.createElement(h.a,{href:le.a.Link.url(s),underline:"none",target:"_blank",rel:"noopener"},a.a.createElement(ge,{src:"/assets/images/social-media-site.svg",fallback:"/assets/images/social-media-twitter.png"}))))),a.a.createElement(v.a,{component:"h3",variant:"h6"},t),a.a.createElement(v.a,{component:"p",variant:"body2",paragraph:!0},n),a.a.createElement(v.a,{component:"p"},le.a.RichText.asText(r)))))})))};Ie.propTypes={dispatch:u.a.func.isRequired,content:u.a.array.isRequired};var Ce=Object(i.b)(function(e){return{content:e.speakers.content}})(Ie),De=n(160),Re=n.n(De);function Fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var He={page:{title:[],content:null,body:[]}};function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ze=function(e){var t=e.split("T")[1].substring(0,5),n=t.split(":")[0],r=t.split(":")[1];return"".concat(function(e){var t=n-3;return 1===t.toString().length?"0".concat(t):t}(),":").concat(r)};var Be=function(e){var t=e.dispatch,n=e.page,o=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(r.useState)(!1),2),i=o[0],c=o[1];return Object(r.useEffect)(function(){i||(t(async function(e){e({type:"SET_TIMELINE",data:{page:Me((await Se("timeline")).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Ne(e,t,n[t])})}return e}({},e.data)}),1)[0]}})}),c(!0))}),i&&a.a.createElement(Y,{progress:n.body.length},n&&a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{mb:6},a.a.createElement(ae,{component:"div",variant:"h4"},le.a.RichText.render(n.content))),a.a.createElement(m.a,{container:!0},n.body.filter(function(e){return"timeline"===e.slice_type}).map(function(e){return e.items.map(function(e){var t=e.title,n=e.subtitle,r=e.description,o=e.type,i=e.schedule_from,c=e.schedule_to;return a.a.createElement(m.a,{item:!0,xs:12,md:10,lg:8,key:ce()()},a.a.createElement(b.a,{mb:6},a.a.createElement(ae,{component:"span",variant:"h4",display:"block",paragraph:!0,customColor:"ocean"},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e=ze(e),t&&(t=ze(t)),e+(t?" - ".concat(t):"")}(i,c)),a.a.createElement(ae,{component:"h3",variant:"h5",paragraph:!0},t),n&&a.a.createElement(ae,{component:"h4",variant:"h5",paragraph:!0},n),o&&a.a.createElement(m.a,{container:!0,alignItems:"flex-start",spacing:1},a.a.createElement(m.a,{item:!0},a.a.createElement(Re.a,null)),a.a.createElement(m.a,{item:!0},a.a.createElement(ae,{component:"small"},o))),r&&a.a.createElement(v.a,{component:"div",variant:"h6",paragraph:!0,color:"textSecondary"},le.a.RichText.render(r))))})}))))};Be.propTypes={dispatch:u.a.func.isRequired,page:u.a.object.isRequired};var Le=Object(i.b)(function(e){return{page:e.timeline.page}})(Be),Ue=[{href:"https://twitter.com/frontinsp",icon:{src:"/assets/images/social-media-twitter.svg",fallback:"/assets/images/social-media-twitter.png"},a11y:{description:"Abrir nossa página no Twitter"}},{href:"https://www.instagram.com/frontinsampa/",icon:{src:"/assets/images/social-media-instagram.svg",fallback:"/assets/images/social-media-instagram.png"},a11y:{description:"Abrir nossa página no Instagram"}},{href:"https://www.facebook.com/frontinsampa/",icon:{src:"/assets/images/social-media-facebook.svg",fallback:"/assets/images/social-media-facebook.png"},a11y:{description:"Abrir nossa página no Facebook"}},{href:"https://www.youtube.com/frontinsampa",icon:{src:"/assets/images/social-media-youtube.svg",fallback:"/assets/images/social-media-youtube.png"},a11y:{description:"Abrir nossa página no YouTube"}}],Ve=function(){return a.a.createElement(Y,{component:"footer",title:"Contato",titleCustomColor:"nature"},a.a.createElement(b.a,{mb:4},a.a.createElement(m.a,{container:!0,alignItems:"center",spacing:4},Ue.map(function(e){var t=e.href,n=e.icon,r=e.a11y;return a.a.createElement(m.a,{item:!0,xs:"auto",key:ce()()},a.a.createElement(h.a,{href:t,target:"_blank",rel:"noopener",underline:"none","aria-label":r.description},a.a.createElement(ge,n)))}))),a.a.createElement(b.a,{mb:4},a.a.createElement(v.a,{component:"p",paragraph:!0,variant:"h3"},"Quer patrocinar, tirar dúvidas ou mandar sugestões?")),a.a.createElement(b.a,{mb:4},a.a.createElement(v.a,{component:"p",paragraph:!0,variant:"h4",style:{wordWrap:"break-word"}},a.a.createElement(h.a,{href:"mailto:contato@frontinsampa.com.br","aria-label":"Abrir e-mail com destinatário contato@frontinsampa.com.br",color:"inherit",underline:"none"},"contato@frontinsampa.com.br"))))},Je=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(te,null),a.a.createElement(oe,null),a.a.createElement(Ce,null),a.a.createElement(Le,null),a.a.createElement(Ve,null))},Ye=function(){var e=Object(s.f)().pathname;return Object(r.useEffect)(function(){window.scrollTo(0,0)},[e]),a.a.createElement(E.a,{maxWidth:"md"},a.a.createElement(b.a,{mt:10},a.a.createElement(m.a,{container:!0,direction:"row",justify:"center"},a.a.createElement(m.a,{item:!0,sm:12},a.a.createElement(b.a,{mb:10},a.a.createElement(b.a,{mb:5},a.a.createElement(A,{component:"h1",variant:"h2",content:["Código de Conduta"]})),a.a.createElement(v.a,null,"Participantes, palestrantes, representantes de empresas e pessoas voluntárias da conferência precisam concordar com este código de conduta. A equipe organizadora vai reforçar que este código seja seguido durante todo o evento. Esperamos a cooperação de todas as partes para ajudar a garantir um ambiente seguro para qualquer pessoa.")),a.a.createElement(b.a,{mb:10},a.a.createElement(b.a,{mb:5},a.a.createElement(v.a,{component:"h2",variant:"h4"},"Versão rápida")),a.a.createElement(v.a,null,"Nossa conferência é dedicada a fornecer uma experiência livre de assédio para todas as pessoas, independentemente do sexo, identidade de gênero e expressão, idade, orientação sexual, deficiência, aparência física, tamanho corporal, cor de pele, etnia, religião (ou falta dela) ou escolhas de tecnologias. Não toleramos o assédio a participantes da conferência, sob qualquer forma. Linguagem e imagens sexuais não são apropriadas em nenhum local, incluindo palestras, workshops, festas, Twitter e outras mídias on-line. Violações destas regras poderão causar expulsão da conferência,",a.a.createElement("em",null,"sem restituição"),", a critério da equipe organizadora.")),a.a.createElement(b.a,{mb:10},a.a.createElement(b.a,{mb:5},a.a.createElement(v.a,{component:"h2",variant:"h4"},"Versão mais longa")),a.a.createElement(v.a,{paragraph:!0},"Constituem assédio comentários verbais ofensivos relacionados a gênero, identidade de gênero e expressão, idade, orientação sexual, deficiência, aparência física, tamanho corporal, cor de pele, etnia, religião, escolhas de tecnologias, imagens sexuais em espaços públicos, intimidação deliberada, perseguição, ",a.a.createElement("em",null,"stalking"),", fotografias ou filmagens constrangedoras, interrupção contínua das apresentações ou outros eventos, contato físico inadequado e atenção sexual indesejada."),a.a.createElement(v.a,{paragraph:!0},"Participantes que receberem uma solicitação para interromper qualquer comportamento de assédio devem fazer isso imediatamente."),a.a.createElement(v.a,{paragraph:!0},"As políticas antiassédio também se aplicam a representantes de empresas patrocinadoras. Em particular, não devem usar imagens, atividades ou outro material de cunho sexual. As equipes de estandes e tendas (incluindo pessoas voluntárias) não devem utilizar roupas, uniformes ou trajes sexualizados ou criar um ambiente sexualizado de quaisquer formas."),a.a.createElement(v.a,{paragraph:!0},"Se alguém se envolver em comportamento de assédio, a equipe organizadora poderá tomar todas as medidas que considerar adequadas, incluindo avisar a pessoa ofensora ou expulsá-la da conferência sem nenhum reembolso."),a.a.createElement(v.a,{paragraph:!0},"Caso sofra assédio, perceba que alguém esteja sofrendo assédio ou tenha alguma dúvida, entre em contato com alguém da organização imediatamente. As pessoas da equipe da conferência podem ser identificadas, pois estarão vestindo camisetas marcadas."),a.a.createElement(v.a,{paragraph:!0},"A organização estará disposta a auxiliar participantes a entrar em contato com a segurança do hotel ou local, bem como aplicar a legislação pertinente, fornecer escoltas ou ajudar pessoas que sofrerem assédio para que se sintam seguras durante a conferência. Valorizamos sua participação."),a.a.createElement(v.a,{paragraph:!0},"Esperamos que todas as pessoas participantes sigam estas regras em salas de apresentação e workshops da conferência, além de eventos sociais relacionados.")),a.a.createElement(b.a,{mb:4},a.a.createElement(v.a,{paragraph:!0,variant:"body2"},"Crédito e fonte original"),a.a.createElement(v.a,{variant:"body2"},a.a.createElement(h.a,{href:"http://2012.jsconf.us/#/about",target:"_blank",color:"secondary"},"http://2012.jsconf.us/#/about")),a.a.createElement(v.a,{paragraph:!0,variant:"body2"},a.a.createElement(h.a,{href:"http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy",target:"_blank",color:"secondary"},"The Ada Initiative")),a.a.createElement(v.a,{paragraph:!0,variant:"body2"},"Esta obra está licenciada sob ",a.a.createElement(h.a,{rel:"license",href:"http://creativecommons.org/licenses/by/3.0/deed.en_US",target:"_blank",color:"secondary"},"Creative Commons Attribution 3.0 Unported License")))))))},Qe=function(e){var t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=R.a.apply(void 0,[{overrides:{}}].concat(t));return Object(F.a)(Object(H.a)(r))}(L,V[e]);return function(e){return function(n){var r=U({},n);return a.a.createElement(C.a,{theme:t},a.a.createElement(e,r))}}}("standard")(function(){return a.a.createElement(c.a,null,a.a.createElement(f,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/",exact:!0},a.a.createElement(Je,null),a.a.createElement(g,null)),a.a.createElement(s.a,{path:"/code-of-conduct"},a.a.createElement(Ye,null)))))}),We=n(43),Xe=n(161);function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Ge(e,t,n[t])})}return e}function Ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $e={page:{title:[],body:[]},available:!0};function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){et(e,t,n[t])})}return e}function et(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var tt={page:{title:[],body:[]},available:!0},nt=Object(We.d)(Object(We.c)({timeline:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TIMELINE":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Fe(e,t,n[t])})}return e}({},e,t.data);default:return e}},speakers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SPEAKER":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_e(e,t,n[t])})}return e}({},e,t.data);default:return e}},sponsors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SPONSORS":return Ke({},e,t.data);case"SET_SPONSORS_AVAILABLE":return Ke({},e,{available:!1});default:return e}},partners:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PARTNERS":return Ze({},e,t.data);case"SET_PARTNERS_AVAILABLE":return Ze({},e,{available:!1});default:return e}}}),Object(We.a)(Xe.a));Object(o.render)(a.a.createElement(i.a,{store:nt},a.a.createElement(Qe,null)),document.getElementById("root")),nt.subscribe(function(){return console.log("store:",nt.getState())})}});