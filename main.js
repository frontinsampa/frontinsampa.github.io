!function(e){function t(t){for(var r,n,o=t[0],i=t[1],c=t[2],l=0,s=[];l<o.length;l++)n=o[l],k[n]&&s.push(k[n][0]),k[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(I&&I(t);s.length;)s.shift()();return x.push.apply(x,c||[]),a()}function a(){for(var e,t=0;t<x.length;t++){for(var a=x[t],r=!0,n=1;n<a.length;n++){var o=a[n];0!==k[o]&&(r=!1)}r&&(x.splice(t--,1),e=R(R.s=a[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(w[e]&&O[e]){for(var a in O[e]=!1,t)Object.prototype.hasOwnProperty.call(t,a)&&(b[a]=t[a]);0==--g&&0===v&&S()}}(e,t),r&&r(e,t)};var n,o=!0,i="97bf4ce9f48d7c43707c",c=1e4,l={},s=[],u=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,a){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=a||function(){};else t._acceptedDependencies[e]=a||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var a=0;a<e.length;a++)t._declinedDependencies[e[a]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var a=t._disposeHandlers.indexOf(e);a>=0&&t._disposeHandlers.splice(a,1)},check:A,apply:_,status:function(e){if(!e)return m;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:l[e]};return n=void 0,t}var d=[],m="idle";function f(e){m=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,b,y,g=0,v=0,E={},O={},w={};function j(e){return+e+""===e?+e:e}function A(e){if("idle"!==m)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=c,t=t||1e4,new Promise(function(e,a){if("undefined"==typeof XMLHttpRequest)return a(new Error("No browser support"));try{var r=new XMLHttpRequest,n=R.p+""+i+".hot-update.json";r.open("GET",n,!0),r.timeout=t,r.send(null)}catch(e){return a(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)a(new Error("Manifest request to "+n+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)a(new Error("Manifest request to "+n+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void a(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;O={},E={},w=e.c,y=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var a in b={},k)P(a);return"prepare"===m&&0===v&&0===g&&S(),t});var t}function P(e){w[e]?(O[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=R.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function S(){f("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return _(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var a in b)Object.prototype.hasOwnProperty.call(b,a)&&t.push(j(a));e.resolve(t)}}function _(t){if("ready"!==m)throw new Error("apply() is only allowed in ready status");var a,r,n,o,c;function u(e){for(var t=[e],a={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var n=r.pop(),i=n.id,c=n.chain;if((o=T[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<o.parents.length;l++){var s=o.parents[l],u=T[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[i]?(a[s]||(a[s]=[]),p(a[s],[i])):(delete a[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:a}}function p(e,t){for(var a=0;a<t.length;a++){var r=t[a];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var d={},h=[],g={},v=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var E in b)if(Object.prototype.hasOwnProperty.call(b,E)){var O;c=j(E);var A=!1,P=!1,S=!1,_="";switch((O=b[E]?u(c):{type:"disposed",moduleId:E}).chain&&(_="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(A=new Error("Aborted because of self decline: "+O.moduleId+_));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(A=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+_));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(A=new Error("Aborted because "+c+" is not accepted"+_));break;case"accepted":t.onAccepted&&t.onAccepted(O),P=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),S=!0;break;default:throw new Error("Unexception type "+O.type)}if(A)return f("abort"),Promise.reject(A);if(P)for(c in g[c]=b[c],p(h,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,c)&&(d[c]||(d[c]=[]),p(d[c],O.outdatedDependencies[c]));S&&(p(h,[O.moduleId]),g[c]=v)}var x,C=[];for(r=0;r<h.length;r++)c=h[r],T[c]&&T[c].hot._selfAccepted&&C.push({module:c,errorHandler:T[c].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete k[e]}(e)});for(var D,q,I=h.slice();I.length>0;)if(c=I.pop(),o=T[c]){var N={},F=o.hot._disposeHandlers;for(n=0;n<F.length;n++)(a=F[n])(N);for(l[c]=N,o.hot.active=!1,delete T[c],delete d[c],n=0;n<o.children.length;n++){var M=T[o.children[n]];M&&(x=M.parents.indexOf(c))>=0&&M.parents.splice(x,1)}}for(c in d)if(Object.prototype.hasOwnProperty.call(d,c)&&(o=T[c]))for(q=d[c],n=0;n<q.length;n++)D=q[n],(x=o.children.indexOf(D))>=0&&o.children.splice(x,1);for(c in f("apply"),i=y,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var H=null;for(c in d)if(Object.prototype.hasOwnProperty.call(d,c)&&(o=T[c])){q=d[c];var L=[];for(r=0;r<q.length;r++)if(D=q[r],a=o.hot._acceptedDependencies[D]){if(-1!==L.indexOf(a))continue;L.push(a)}for(r=0;r<L.length;r++){a=L[r];try{a(q)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:q[r],error:e}),t.ignoreErrored||H||(H=e)}}}for(r=0;r<C.length;r++){var U=C[r];c=U.module,s=[c];try{R(c)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(a){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:a,originalError:e}),t.ignoreErrored||H||(H=a),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||H||(H=e)}}return H?(f("fail"),Promise.reject(H)):(f("idle"),new Promise(function(e){e(h)}))}var T={},k={0:0},x=[];function R(t){if(T[t])return T[t].exports;var a=T[t]={i:t,l:!1,exports:{},hot:p(t),parents:(u=s,s=[],u),children:[]};return e[t].call(a.exports,a,a.exports,function(e){var t=T[e];if(!t)return R;var a=function(a){return t.hot.active?(T[a]?-1===T[a].parents.indexOf(e)&&T[a].parents.push(e):(s=[e],n=a),-1===t.children.indexOf(a)&&t.children.push(a)):(console.warn("[HMR] unexpected require("+a+") from disposed module "+e),s=[]),R(a)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(t){R[e]=t}}};for(var o in R)Object.prototype.hasOwnProperty.call(R,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(a,o,r(o));return a.e=function(e){return"ready"===m&&f("prepare"),v++,R.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===m&&(E[e]||P(e),0===v&&0===g&&S())}},a.t=function(e,t){return 1&t&&(e=a(e)),R.t(e,-2&t)},a}(t)),a.l=!0,a.exports}R.m=e,R.c=T,R.d=function(e,t,a){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,t){if(1&t&&(e=R(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(R.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)R.d(a,r,function(t){return e[t]}.bind(null,r));return a},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="/",R.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],D=C.push.bind(C);C.push=t,C=C.slice();for(var q=0;q<C.length;q++)t(C[q]);var I=D;x.push([316,1]),a()}({316:function(e,t,a){"use strict";a.r(t),a(161);var r=a(0),n=a.n(r),o=a(63),i=a(39),c=a(45),l=a(8),s=a(1),u=a.n(s),p=a(329),d=function(e){var t=e.children;return n.a.createElement("main",null,n.a.createElement(p.a,null),t)};d.propTypes={children:u.a.node.isRequired};var m=d,f=a(324),h=a(325),b=a(328),y=function(){return n.a.createElement(b.a,{mb:5},n.a.createElement(f.a,{container:!0,component:"footer",justify:"center"},n.a.createElement(f.a,{item:!0,xs:"auto"},n.a.createElement(h.a,{component:c.b,to:"/code-of-conduct",color:"textSecondary",variant:"body1"},"Código de conduta"))))},g=a(148),v=a(317),E=a(326),O=a(327),w=function(e){return e=e.toLowerCase().split(/\s/).reduce(function(e,t){return e+t.charAt(0).toUpperCase()+t.slice(1)}),"".concat(e,"()")},j=a(149),A=a.n(j),P=a(150),S=a.n(P);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var T=function(e){var t=e.content,a=e.a11y,o=function(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(e,["content","a11y"]),i=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(r.useState)(!0),1)[0],c=Object(r.useRef)();return Object(r.useEffect)(function(){new S.a(c.current,{strings:t,typeSpeed:40,backSpeed:20})},[i]),n.a.createElement(n.a.Fragment,null,a.content&&n.a.createElement(v.a,_({},o,{variant:"srOnly"}),a.content),n.a.createElement(v.a,_({},o,{"aria-hidden":!A()(a.content)}),n.a.createElement("span",{ref:c})))};T.propTypes={content:u.a.array.isRequired,a11y:u.a.shape({content:u.a.string})},T.defaultProps={a11y:{content:null}};var k=T,x=a(117),R=a.n(x),C=a(155),D=a.n(C),q=a(153),I=a.n(q),N=a(330),F=a(159);function M(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var H={live:"#FFFFFF",tar:"#000000",energy:"#FF685C",sunrise:"#DA83F6",sunset:"#FBC54C",nature:"#7BE473",ocean:"#58A9F3"};function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var U=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){L(e,t,a[t])})}return e}({},{palette:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){M(e,t,a[t])})}return e}({},H,{type:"dark",background:{default:H.tar},text:{primary:H.live}}),sizes:{container:1280},typography:{useNextVariants:!0,fontFamily:["Roboto Mono","monospace"].join(", ")}}),V={mixins:{body:function(e){return{"@global":{body:e}}}}};function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var J={standard:U},B=function(e){var t=e.classes,a=e.component,r=e.children,o=e.title,i=e.collapsed,c=e.progress;return n.a.createElement(E.a,{maxWidth:i?"xl":"lg",className:t.section},n.a.createElement(f.a,{component:a,container:!0,className:t.sectionContainer,justify:"center",alignItems:"center"},c?n.a.createElement(f.a,{item:!0,xs:i?"auto":10},o&&n.a.createElement(n.a.Fragment,null,n.a.createElement(k,{component:"h2",className:t.sectionTitle,variant:"h5",content:[w(o)],a11y:{content:o}})),r):n.a.createElement(f.a,{item:!0},n.a.createElement(O.a,null))))};B.propTypes={classes:u.a.object.isRequired,children:u.a.node.isRequired,collapsed:u.a.bool,title:u.a.string,component:u.a.string,progress:u.a.oneOfType([u.a.bool,u.a.number])},B.defaultProps={collapsed:!1,title:null,component:"section",progress:!0};var W=R()(function(e){var t=e.palette,a=e.spacing;return{section:{padding:function(e){return e.collapsed&&0}},sectionContainer:{minHeight:"100vh",paddingTop:a(8),paddingBottom:a(8)},sectionTitle:{color:function(e){var a=e.titleCustomColor;return t[a]||t.text.primary},marginBottom:a(5)}}})(B),K=function(){return n.a.createElement(W,null,n.a.createElement(f.a,{container:!0,direction:"row",justify:"center"},n.a.createElement(f.a,{item:!0,xs:"auto",style:{textAlign:"center"}},n.a.createElement(k,{component:"p",paragraph:!0,variant:"h2",content:["#saveTheDate","Front In Sampa ON 2021"]}),n.a.createElement(v.a,{component:"p",paragraph:!0,variant:"h5",color:"textSecondary"},"17 de Julho"),n.a.createElement(b.a,{mt:5,mb:5},n.a.createElement(v.a,{component:"p",variant:"h2",color:"textSecondary"},n.a.createElement(g.a,{date:new Date("Sat, 17 Jul 2021"),zeroPadTime:2,daysInHours:!0}))),n.a.createElement(v.a,{component:"p",color:"secondary",variant:"h4"},n.a.createElement("p",null,"Ingressos em breve")),n.a.createElement(v.a,{component:"div",color:"textSecondary",variant:"h6"},n.a.createElement("div",null,"Comemore 10 anos de Front In Sampa e sintonize um dia inteiro de programação gratuita com líderes, influenciadoras, comunidades e empresas reunidas online para aprendizado, networking e entretenimento no YouTube e no Zoom.")),n.a.createElement(v.a,{component:"div",color:"textSecondary",variant:"p"},n.a.createElement("p",null,"Assista as edições anteriores em"),n.a.createElement(h.a,{href:"https://www.youtube.com/watch?v=0qtRQYS4V5A",underline:"none",color:"primary",target:"_blank"},"youtube.com/frontinsampa")))))};function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var X=function(e){var t=e.classes,a=(e.customColor,function(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(e,["classes","customColor"]));return n.a.createElement(v.a,Q({className:t.typography},a))};X.propTypes={classes:u.a.object.isRequired,customColor:u.a.string},X.defaultProps={customColor:null};var Y=R()(function(e){var t=e.palette;return{typography:{color:function(e){var a=e.customColor;return t[a]||t.text.primary}}}})(X),Z=function(){return n.a.createElement(W,{title:"O evento",titleCustomColor:"sunrise"},n.a.createElement(b.a,{mb:6},n.a.createElement(Y,{component:"p",paragraph:!0,variant:"h5"},n.a.createElement(b.a,{component:"strong",color:"sunrise",fontWeight:"normal"},"10 anos transformando a comunidade Front-End"),n.a.createElement("p",null,"O Front In Sampa é um dos maiores eventos de tecnologia front end do Brasil. Criado em 2012, tem como missão oferecer experiências para a comunidade de desenvolvedoras através de palestras e atividades, levando conteúdo de qualidade e transformação social entre pessoas e organizações."))))},G=a(67),$=a.n(G),ee=async function(e){try{var t=await async function(){return $.a.api("https://frontinsampa.cdn.prismic.io/api/v2",{accessToken:"MC5YUkY4b3hJQUFINkE3MVNj.77-9Au-_vXMAKO-_ve-_ve-_vQsz77-977-977-977-9dR0-MgHvv73vv71jJu-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_vQ"})}();return(await t.query(e({Predicates:G.Predicates}))).results}catch(e){throw new Error(e)}},te=async function(e){return ee(function(t){return[t.Predicates.at("document.type",e)]})};function ae(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var re={page:{title:[],content:null,body:[]}};function ne(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ie=function(e){var t=e.dispatch,a=e.page,o=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(r.useState)(!1),2),i=o[0],c=o[1];return Object(r.useEffect)(function(){i||(t(async function(e){e({type:"SET_TIMELINE",data:{page:oe((await te("timeline")).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){ne(e,t,a[t])})}return e}({},e.data)}),1)[0]}})}),c(!0))}),i&&n.a.createElement(W,{progress:a.body.length},a&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{mb:6},n.a.createElement(Y,{component:"div",variant:"h4"},n.a.createElement("p",null,"Criamos uma programação com diversas atrações, trazendo a linguagem da TV para o digital:")),n.a.createElement(Y,{component:"div",variant:"h5"},"A GRADE DO FSP0N21 NO YOUTUBE (ATUALIZAÇÕES EM BREVE)")),n.a.createElement("p",null,"09:00 É DE CASA COM FSPON21"),n.a.createElement("p",null,"09:15 BOM DIA FULL STACK"),n.a.createElement("p",null,"09:30 BOM DIA FRONTEND"),n.a.createElement("p",null,"09:45 MAIS VOCÊ FRONT"),n.a.createElement("p",null,"10:00 CAFÉ DA MANHÃ COM CONVIDADA"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"10:30 ENCONTRO COM FRONTEND"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"11:30 ATRAÇÃO SURPRESA"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"12:00 MASTER CHEF FRONTEND"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"12:30 PANELINHA"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"13:15 FSP1 JORNAL"),n.a.createElement("p",null,"13:30 FRONTEND HOJE"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"14:15 VALE A PENA CODAR DE NOVO"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"15:00 SE JOGA NO FRONT"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"15:30 SHOW DO SETINTERVAL"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"16:00 CALDEIRÃO DO JAVASCRIPT"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"17:00 MALHAÇÃO"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"17:30 FSP2 JORNAL"),n.a.createElement("p",null,"17:45 ENCERRAMENTO")))};ie.propTypes={dispatch:u.a.func.isRequired,page:u.a.object.isRequired};var ce=Object(i.b)(function(e){return{page:e.timeline.page}})(ie),le=a(32),se=a.n(le),ue=a(102),pe=a.n(ue),de=a(156),me=a.n(de),fe=function(e){var t=e.src,a=e.alt,r=e.presentation,o=e.a11y,i=e.width,c=e.height,l=se()();return r?n.a.createElement("img",{src:t,alt:"",role:"presentation",width:i,height:c}):n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:t,alt:a,"aria-describedby":l,width:i,height:c}),n.a.createElement("span",{id:l},o.description))};fe.propTypes={src:u.a.string.isRequired,alt:u.a.string.isRequired,width:u.a.oneOfType([u.a.string,u.a.number]),height:u.a.oneOfType([u.a.string,u.a.number]),presentation:u.a.bool,a11y:u.a.shape({title:u.a.string,description:u.a.string})},fe.defaultProps={presentation:!1,a11y:null,width:"auto",height:"auto"};var he=fe,be=function(e){var t=e.classes,a=e.children;return n.a.createElement("div",{className:t.spot},a)};be.propTypes={classes:u.a.object.isRequired,children:u.a.node.isRequired};var ye=R()(function(e){return{spot:{borderColor:e.palette.background.default,borderStyle:"solid",borderWidth:1,display:"block",overflow:"hidden",position:"relative",background:"#1A1A1A",height:function(e){return e.height||314},width:function(e){return e.width||"100%"},"& > img":{left:"50%",position:"relative",transform:"translateX(-50%)",width:"inherit",height:"auto",minHeight:"100%"}}}})(be);function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var ve=function(e){var t=e.title,a=e.body,r=e.titleColor;return a&&n.a.createElement(W,{title:me.a.RichText.asText(t),titleCustomColor:r,progress:a.length},n.a.createElement(b.a,{mb:1},n.a.createElement(f.a,{container:!0,spacing:2},pe()(a,{slice_type:"showcase"}).map(function(e){return e.items.filter(function(e){var t=e.showcase_type;return["Patrocínio","Apoio"].includes(t)}).map(function(e){var t=e.showcase_image,a=e.showcase_link;return n.a.createElement(f.a,{item:!0,key:se()()},n.a.createElement(ye,{width:236,height:130},n.a.createElement(h.a,{href:a.url,target:a.target,rel:"noopener",underline:"none"},n.a.createElement(he,ge({src:t.large.url,presentation:!0,alt:t.large.alt},t.large.dimensions)))))})}))),n.a.createElement(f.a,{container:!0,spacing:2},pe()(a,{slice_type:"showcase"}).map(function(e){return e.items.filter(function(e){return"Feira de Recrutamento"===e.showcase_type}).map(function(e){var t=e.showcase_image,a=e.showcase_link;return n.a.createElement(f.a,{item:!0,key:se()()},n.a.createElement(ye,{width:110,height:110},n.a.createElement(h.a,{href:a.url,target:a.target,rel:"noopener",underline:"none"},n.a.createElement(he,ge({src:t.small.url,presentation:!0,alt:t.small.alt},t.small.dimensions)))))})})))};ve.propTypes={title:u.a.string.isRequired,body:u.a.array.isRequired,titleColor:u.a.string},ve.defaultProps={titleColor:null};var Ee=ve;function Oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){we(e,t,a[t])})}return e}function we(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var je={page:{title:[],body:[]},available:!0};function Ae(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Pe=function(){return async function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}((await function(e,t){return ee(function(a){return[a.Predicates.at("my.".concat(e,".uid"),t)]})}("page","apoiadores")).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){Ae(e,t,a[t])})}return e}({},e.data)}),1)[0];e(t?{type:"SET_PARTNERS",data:{page:t}}:{type:"SET_PARTNERS_AVAILABLE"})}};function Se(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var Te=function(e){var t=e.dispatch,a=e.page,o=e.available,i=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(r.useState)(!1),2),c=i[0],l=i[1];return Object(r.useEffect)(function(){c||(t(Pe()),l(!0))}),o&&n.a.createElement(Ee,_e({titleColor:"energy"},a))};Te.propTypes={dispatch:u.a.func.isRequired,page:u.a.object.isRequired,available:u.a.bool.isRequired};var ke=Object(i.b)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){Se(e,t,a[t])})}return e}({},e.partners)})(Te),xe=a(157),Re=a.n(xe),Ce=function(e){var t=e.src,a=e.fallback;return n.a.createElement(Re.a,{src:t},n.a.createElement(he,{src:a,alt:"",presentation:!0}))};Ce.propTypes={src:u.a.string.isRequired,fallback:u.a.string.isRequired};var De=Ce,qe=[{href:"https://twitter.com/frontinsp",icon:{src:"/assets/images/social-media-twitter.svg",fallback:"/assets/images/social-media-twitter.png"},a11y:{description:"Abrir nossa página no Twitter"}},{href:"https://www.instagram.com/frontinsampa/",icon:{src:"/assets/images/social-media-instagram.svg",fallback:"/assets/images/social-media-instagram.png"},a11y:{description:"Abrir nossa página no Instagram"}},{href:"https://www.facebook.com/frontinsampa/",icon:{src:"/assets/images/social-media-facebook.svg",fallback:"/assets/images/social-media-facebook.png"},a11y:{description:"Abrir nossa página no Facebook"}},{href:"https://www.youtube.com/frontinsampa",icon:{src:"/assets/images/social-media-youtube.svg",fallback:"/assets/images/social-media-youtube.png"},a11y:{description:"Abrir nossa página no YouTube"}}],Ie=function(){return n.a.createElement(W,{component:"footer",title:"Contato",titleCustomColor:"nature"},n.a.createElement(b.a,{mb:4},n.a.createElement(f.a,{container:!0,alignItems:"center",spacing:4},qe.map(function(e){var t=e.href,a=e.icon,r=e.a11y;return n.a.createElement(f.a,{item:!0,xs:"auto",key:se()()},n.a.createElement(h.a,{href:t,target:"_blank",rel:"noopener",underline:"none","aria-label":r.description},n.a.createElement(De,a)))}))),n.a.createElement(b.a,{mb:4},n.a.createElement(v.a,{component:"p",paragraph:!0,variant:"h3"},"Quer tirar dúvidas ou mandar sugestões?")),n.a.createElement(b.a,{mb:4},n.a.createElement(v.a,{component:"p",paragraph:!0,style:{wordWrap:"break-word"}},n.a.createElement(h.a,{href:"mailto:contato@frontinsampa.com.br","aria-label":"Abrir e-mail com destinatário contato@frontinsampa.com.br",underline:"none"},"contato@frontinsampa.com.br")),n.a.createElement(v.a,{component:"p",paragraph:!0,style:{wordWrap:"break-word"}},n.a.createElement(h.a,{href:"mailto:comunidade@frontinsampa.com.br","aria-label":"Abrir e-mail com destinatário comunidade@frontinsampa.com.br",underline:"none"},"comunidade@frontinsampa.com.br"))),n.a.createElement(b.a,{mb:4},n.a.createElement(v.a,{component:"p",paragraph:!0,variant:"h3"},"Que tal palestrar?"),n.a.createElement("p",null,n.a.createElement("br",null),"Envie sua proposta de talk:",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(v.a,{component:"p",paragraph:!0,variant:"h4",style:{wordWrap:"break-word"}},n.a.createElement(h.a,{href:"https://forms.gle/qP8KMKH5KSvc8CbW7","aria-label":"Abrir link https://forms.gle/qP8KMKH5KSvc8CbW7"},"Call For Papers")))),n.a.createElement(b.a,{mb:4},n.a.createElement(v.a,{component:"p",paragraph:!0,variant:"h3"},"Patrocine"),n.a.createElement("p",null,n.a.createElement("br",null),"Acesse o nosso Media Kit:",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(v.a,{component:"p",paragraph:!0,variant:"h4",style:{wordWrap:"break-word"}},n.a.createElement(h.a,{href:"https://drive.google.com/file/d/1n8XW5U-lJuxSI56oMfT9D32a-QdZQCmF/view","aria-label":"Abrir link https://drive.google.com/file/d/1n8XW5U-lJuxSI56oMfT9D32a-QdZQCmF/view"},"FSPON21 Media Kit")))))},Ne=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(K,null),n.a.createElement(Z,null),n.a.createElement(ce,null),n.a.createElement(ke,null),n.a.createElement(Ie,null))},Fe=function(){var e=Object(l.f)().pathname;return Object(r.useEffect)(function(){window.scrollTo(0,0)},[e]),n.a.createElement(E.a,{maxWidth:"md"},n.a.createElement(b.a,{mt:10},n.a.createElement(f.a,{container:!0,direction:"row",justify:"center"},n.a.createElement(f.a,{item:!0,sm:12},n.a.createElement(b.a,{mb:10},n.a.createElement(b.a,{mb:5},n.a.createElement(k,{component:"h1",variant:"h2",content:["Código de Conduta"]})),n.a.createElement(v.a,null,"Participantes, palestrantes, representantes de empresas e pessoas voluntárias da conferência precisam concordar com este código de conduta. A equipe organizadora vai reforçar que este código seja seguido durante todo o evento. Esperamos a cooperação de todas as partes para ajudar a garantir um ambiente seguro para qualquer pessoa.")),n.a.createElement(b.a,{mb:10},n.a.createElement(b.a,{mb:5},n.a.createElement(v.a,{component:"h2",variant:"h4"},"Versão rápida")),n.a.createElement(v.a,null,"Nossa conferência é dedicada a fornecer uma experiência livre de assédio para todas as pessoas, independentemente do sexo, identidade de gênero e expressão, idade, orientação sexual, deficiência, aparência física, tamanho corporal, cor de pele, etnia, religião (ou falta dela) ou escolhas de tecnologias. Não toleramos o assédio a participantes da conferência, sob qualquer forma. Linguagem e imagens sexuais não são apropriadas em nenhum local, incluindo palestras, workshops, festas, Twitter e outras mídias on-line. Violações destas regras poderão causar expulsão da conferência,",n.a.createElement("em",null,"sem restituição"),", a critério da equipe organizadora.")),n.a.createElement(b.a,{mb:10},n.a.createElement(b.a,{mb:5},n.a.createElement(v.a,{component:"h2",variant:"h4"},"Versão mais longa")),n.a.createElement(v.a,{paragraph:!0},"Constituem assédio comentários verbais ofensivos relacionados a gênero, identidade de gênero e expressão, idade, orientação sexual, deficiência, aparência física, tamanho corporal, cor de pele, etnia, religião, escolhas de tecnologias, imagens sexuais em espaços públicos, intimidação deliberada, perseguição, ",n.a.createElement("em",null,"stalking"),", fotografias ou filmagens constrangedoras, interrupção contínua das apresentações ou outros eventos, contato físico inadequado e atenção sexual indesejada."),n.a.createElement(v.a,{paragraph:!0},"Participantes que receberem uma solicitação para interromper qualquer comportamento de assédio devem fazer isso imediatamente."),n.a.createElement(v.a,{paragraph:!0},"As políticas antiassédio também se aplicam a representantes de empresas patrocinadoras. Em particular, não devem usar imagens, atividades ou outro material de cunho sexual. As equipes de estandes e tendas (incluindo pessoas voluntárias) não devem utilizar roupas, uniformes ou trajes sexualizados ou criar um ambiente sexualizado de quaisquer formas."),n.a.createElement(v.a,{paragraph:!0},"Se alguém se envolver em comportamento de assédio, a equipe organizadora poderá tomar todas as medidas que considerar adequadas, incluindo avisar a pessoa ofensora ou expulsá-la da conferência sem nenhum reembolso."),n.a.createElement(v.a,{paragraph:!0},"Caso sofra assédio, perceba que alguém esteja sofrendo assédio ou tenha alguma dúvida, entre em contato com alguém da organização imediatamente. As pessoas da equipe da conferência podem ser identificadas, pois estarão vestindo camisetas marcadas."),n.a.createElement(v.a,{paragraph:!0},"A organização estará disposta a auxiliar participantes a entrar em contato com a segurança do hotel ou local, bem como aplicar a legislação pertinente, fornecer escoltas ou ajudar pessoas que sofrerem assédio para que se sintam seguras durante a conferência. Valorizamos sua participação."),n.a.createElement(v.a,{paragraph:!0},"Esperamos que todas as pessoas participantes sigam estas regras em salas de apresentação e workshops da conferência, além de eventos sociais relacionados.")),n.a.createElement(b.a,{mb:4},n.a.createElement(v.a,{paragraph:!0,variant:"body2"},"Crédito e fonte original"),n.a.createElement(v.a,{variant:"body2"},n.a.createElement(h.a,{href:"http://2012.jsconf.us/#/about",target:"_blank",color:"secondary"},"http://2012.jsconf.us/#/about")),n.a.createElement(v.a,{paragraph:!0,variant:"body2"},n.a.createElement(h.a,{href:"http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy",target:"_blank",color:"secondary"},"The Ada Initiative")),n.a.createElement(v.a,{paragraph:!0,variant:"body2"},"Esta obra está licenciada sob ",n.a.createElement(h.a,{rel:"license",href:"http://creativecommons.org/licenses/by/3.0/deed.en_US",target:"_blank",color:"secondary"},"Creative Commons Attribution 3.0 Unported License")))))))},Me=function(e){var t=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=I.a.apply(void 0,[{overrides:{}}].concat(t));return Object(N.a)(Object(F.a)(r))}(V,J[e]);return function(e){return function(a){var r=z({},a);return n.a.createElement(D.a,{theme:t},n.a.createElement(e,r))}}}("standard")(function(){return n.a.createElement(c.a,null,n.a.createElement(m,null,n.a.createElement(l.c,null,n.a.createElement(l.a,{path:"/",exact:!0},n.a.createElement(Ne,null),n.a.createElement(y,null)),n.a.createElement(l.a,{path:"/code-of-conduct"},n.a.createElement(Fe,null)))))}),He=a(40),Le=a(158);function Ue(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Ve={content:[]};function ze(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){Je(e,t,a[t])})}return e}function Je(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Be={page:{title:[],body:[]},available:!0},We=Object(He.d)(Object(He.c)({timeline:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TIMELINE":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){ae(e,t,a[t])})}return e}({},e,t.data);default:return e}},speakers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SPEAKER":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){Ue(e,t,a[t])})}return e}({},e,t.data);default:return e}},sponsors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SPONSORS":return ze({},e,t.data);case"SET_SPONSORS_AVAILABLE":return ze({},e,{available:!1});default:return e}},partners:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PARTNERS":return Oe({},e,t.data);case"SET_PARTNERS_AVAILABLE":return Oe({},e,{available:!1});default:return e}}}),Object(He.a)(Le.a));Object(o.render)(n.a.createElement(i.a,{store:We},n.a.createElement(Me,null)),document.getElementById("root")),We.subscribe(function(){return console.log("store:",We.getState())})}});