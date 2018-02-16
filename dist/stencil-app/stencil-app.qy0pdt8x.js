/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='stencil-app']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i,c){let l=t.n+(e||E),f=t[l];if(f||(f=t[l=t.n+E]),f){let e=n.t;if(n.e)if(1===t.encapsulation)e=o.shadowRoot;else for(;o=n.o(o);)if(o.host&&o.host.shadowRoot){e=o.host.shadowRoot;break}const i=e.i=e.i||{};if(!i[l]){c=f.content.cloneNode(!0);const t=e.querySelectorAll("[data-styles]");n.c(e,c,t.length&&t[t.length-1].nextSibling||e.l),i[l]=!0}}}function l(n){return{f:n[0],u:n[1],r:!!n[2],s:!!n[3],a:!!n[4]}}function f(n,t,e){n.d&&((e=n.d.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.d.$initLoad()),n.d=null)}function u(n,t,e){let o,i=!1,c=!1;for(var l=arguments.length;l-- >2;)B.push(arguments[l]);for(;B.length;)if((e=B.pop())&&void 0!==e.pop)for(l=e.length;l--;)B.push(e[l]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].p+=e:void 0===o?o=[c?r(e):e]:o.push(c?r(e):e),i=c;const f=new P;if(f.m=n,f.y=o,t&&(f.v=t,f.b=t.w,f.g=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(l in t.class)t.class[l]&&B.push(l);t.class=B.join(" "),B.length=0}return f}function r(n){const t=new P;return t.p=n,t}function s(n,t){t.C||(t.C=!0,n.N.add(()=>{t.C=!1,function n(t,e){if(!e.j){const o=!e.x;let i;if(o){const o=e.d;if(o&&!o.$rendered)return void(o.$onRender=o.$onRender||[]).push(()=>{n(t,e)});(function o(n,t,e){try{e=n.S(t).O,t.x=new e,function o(n,t,e,i,c,l){for(l in i.k=e,e.T=e.T||{},(c=Object.assign({color:{type:String}},t.properties)).mode={type:String},c)d(n,c[l],e,i,l)}(n,e,t,t.x)}catch(e){t.x={},n.M(e,7,t,!0)}})(t,e)}i&&i.then?i.then(()=>a(t,e,o)):a(t,e,o)}}(n,t)}))}function a(n,t,e){(function o(n,t,e,i){try{const o=t.x,c=e.O.host;if(o.render||o.hostData||c){n.A=!0;const c=o.render&&o.render();let l;n.A=!1;const f=t.P||new P;f.B=t,t.P=n.render(f,u(null,l,c),i,t.L,e.O.encapsulation)}n.R(n.q,e,o.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}catch(e){n.A=!1,n.M(e,8,t,!0)}})(n,t,n.S(t),!e);try{e&&t.$initLoad()}catch(e){n.M(e,6,t,!0)}}function d(n,t,e,o,i){if(t.type||t.state){if(!t.state){if(t.attr&&(void 0===e.T[i]||""===e.T[i])){const o=n.q.D(e,t.attr);null!=o&&(e.T[i]=function c(n,t){if(k(t)){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t)}return t}(t.type,o))}e.hasOwnProperty(i)&&(void 0===e.T[i]&&(e.T[i]=e[i]),delete e[i])}o.hasOwnProperty(i)&&void 0===e.T[i]&&(e.T[i]=o[i]),t.watchCallbacks&&(e.T[L+i]=t.watchCallbacks.slice()),h(o,i,function l(n){return(n=this.k)&&n.T&&n.T[i]},function f(e,o){(o=this.k)&&(t.state||t.mutable)&&p(n,o,i,e)})}else t.elementRef&&m(o,i,e)}function p(n,t,e,o,i,c,l){const f=(i=t.T=t.T||{})[e];if(o!==f&&(i[e]=o,c=t.x)){if(l=i[L+e])for(let n=0;n<l.length;n++)try{c[l[n]].call(c,o,f,e)}catch(n){}!n.A&&t.$rendered&&s(n,t)}}function m(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function h(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function y(n,t,e,o,i){const c=11===e.B.nodeType&&e.B.host?e.B.host:e.B,l=t&&t.v||x,f=e.v||x;for(i in l)f&&null!=f[i]||null==l[i]||v(n,c,i,l[i],void 0,o);for(i in f)i in l&&f[i]===("value"===i||"checked"===i?c[i]:l[i])||v(n,c,i,l[i],f[i],o)}function v(n,t,e,o,i,c,l,f){if("class"!==e||c)if("style"===e){for(l in o=o||x,i=i||x,o)i[l]||(t.style[l]="");for(l in i)i[l]!==o[l]&&(t.style[l]=i[l])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.S(t);o&&o.H&&o.H[e]?b(t,e,i):"ref"!==e&&(b(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(l=e!==(e=e.replace(/^xlink\:?/,"")),1!==R[e]||i&&"false"!==i?"function"!=typeof i&&(l?t.setAttributeNS(q,M(e),i):t.setAttribute(e,i)):l?t.removeAttributeNS(q,M(e)):t.removeAttribute(e));else e=M(e.substring(2)),i?i!==o&&n.q.z(t,e,i):n.q.F(t,e);else if(o!==i){const n=null==o||""===o?O:o.trim().split(/\s+/),e=null==i||""===i?O:i.trim().split(/\s+/);let c=null==t.className||""===t.className?O:t.className.trim().split(/\s+/);for(l=0,f=n.length;l<f;l++)-1===e.indexOf(n[l])&&(c=c.filter(t=>t!==n[l]));for(l=0,f=e.length;l<f;l++)-1===n.indexOf(e[l])&&(c=[...c,e[l]]);t.className=c.join(" ")}}function b(n,t,e){try{n[t]=e}catch(n){}}function $(n,t){function e(o,i,c){let l=0;if("function"==typeof o.m&&(o=o.m(Object.assign({},o.v,{I:o.y}))),!r&&"slot"===o.m){if(u){s&&t.W(i,s+"-slot","");const e=o.v&&o.v.name;let c;if(c=k(e)?u.G&&u.G[e]:u.J,k(c)){for(n.K=!0;l<c.length;l++)t.Q(c[l]),t.U(i,c[l]);n.K=!1}}return null}if(k(o.p))o.B=t.V(o.p);else{const i=o.B=t.X(o.m);y(n,null,o,D),null!==s&&i.Y!==s&&t.W(i,i.Y=s,"");const c=o.y;if(c){let n;for(;l<c.length;++l)(n=e(c[l],i))&&t.U(i,n)}"svg"===o.m&&(D=!1)}return o.B}function o(n,o,i,c,l,f,u){const r=n.$defaultHolder&&t.o(n.$defaultHolder)||n;for(;c<=l;++c)u=i[c],k(u)&&(f=k(u.p)?t.V(u.p):e(u,n),k(f)&&(u.B=f,t.c(r,f,o)))}function i(n,e,o){for(;e<=o;++e)k(n[e])&&t.Q(n[e].B)}function c(n,t){return n.m===t.m&&n.b===t.b}function l(n,t,e){const o={};let i,c,l;for(i=t;i<=e;++i)null!=(l=n[i])&&void 0!==(c=l.b)&&(o.Z=i);return o}let f,u,r,s;return function a(d,p,m,h,v,b){return f=m,u=h,s="scoped"===v||"shadow"===v&&!t.e?"data-"+t._(d.B):null,r="shadow"===v&&t.e,f||(r?d.B=t.nn(d.B,{mode:"open"}):s&&t.W(d.B,s+"-host","")),function f(u,r){const s=r.B=u.B,a=u.y,d=r.y;if(T(r.p))"slot"!==r.m&&y(n,u,r,D),k(a)&&k(d)?function p(n,u,r){let s,a,d,p,m=0,h=0,y=u.length-1,v=u[0],b=u[y],$=r.length-1,w=r[0],g=r[$];for(;m<=y&&h<=$;)null==v?v=u[++m]:null==b?b=u[--y]:null==w?w=r[++h]:null==g?g=r[--$]:c(v,w)?(f(v,w),v=u[++m],w=r[++h]):c(b,g)?(f(b,g),b=u[--y],g=r[--$]):c(v,g)?(f(v,g),t.c(n,v.B,t.tn(b.B)),v=u[++m],g=r[--$]):c(b,w)?(f(b,w),t.c(n,b.B,v.B),b=u[--y],w=r[++h]):(T(s)&&(s=l(u,m,y)),a=s[w.b],T(a)?(p=e(w,n),w=r[++h]):((d=u[a]).m!==w.m?p=e(w,n):(f(d,w),u[a]=void 0,p=d.B),w=r[++h]),p&&t.c(v.B&&v.B.parentNode||n,p,v.B));m>y?o(n,null==r[$+1]?null:r[$+1].B,r,h,$):h>$&&i(u,m,y)}(s,a,d):k(d)?(k(u.p)&&t.en(s,""),o(s,null,d,0,d.length-1)):k(a)&&i(a,0,a.length-1);else if(s.L&&s.L.J){const n=s.L.J[0].parentElement;t.en(n,r.p),s.L.J=[n.childNodes[0]]}else u.p!==r.p&&t.en(s,r.p);"svg"===r.m&&D&&(D=!1)}(d,p),p}}function w(n,t){n&&(n.g&&n.g(t?null:n.B),n.y&&n.y.forEach(n=>{w(n,t)}))}function g(n,t,e,o,i){const c=n.on(t);let l,f,u,s;if(i&&1===c){(f=n.D(t,j))&&(u=f.split("."))[0]===o&&((s=new P).m=n._(s.B=t),e.y||(e.y=[]),e.y[u[1]]=s,e=s,i=""!==u[2]);for(let c=0;c<t.childNodes.length;c++)g(n,t.childNodes[c],e,o,i)}else 3===c&&(l=t.previousSibling)&&8===n.on(l)&&"s"===(u=n.in(l).split("."))[0]&&u[1]===o&&((s=r(n.in(t))).B=t,e.y||(e.y=[]),e.y[u[2]]=s)}function C(n,t,e,o){return function(){const i=arguments;return function c(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.cn.querySelector(e)),i||(i=t[e]=n.X(e),n.U(n.cn,i)),i.componentOnReady(o)})}(n,t,e).then(n=>n[o].apply(n,i))}}const N="data-ssrv",j="data-ssrc",E="$",x={},O=[],S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},k=n=>void 0!==n&&null!==n,T=n=>void 0===n||null===n,M=n=>n.toLowerCase(),A=()=>{};class P{}const B=[],L="wc-",R={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},q="http://www.w3.org/1999/xlink";let D=!1;const H=n[o]=n[o]||{};{const o=function z(t,e,o,i,r,a){const d={html:{}},y={},v=function b(n,t){const e=new WeakMap,o={ln:t.documentElement,t:t.head,cn:t.body,fn:!1,on:n=>n.nodeType,X:n=>t.createElement(n),un:(n,e)=>t.createElementNS(n,e),V:n=>t.createTextNode(n),rn:n=>t.createComment(n),c:(n,t,e)=>n.insertBefore(t,e),Q:n=>n.remove(),U:(n,t)=>n.appendChild(t),sn:n=>n.childNodes,o:n=>n.parentNode,tn:n=>n.nextSibling,_:n=>M(n.tagName),in:n=>n.textContent,en:(n,t)=>n.textContent=t,D:(n,t)=>n.getAttribute(t),W:(n,t,e)=>n.setAttribute(t,e),an:(n,t,e,o)=>n.setAttributeNS(t,e,o),dn:(n,t)=>n.removeAttribute(t),pn:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.mn(e):"body"===i?o.cn:"document"===i?t:"window"===i?n:e,z:(n,t,i,c,l,f,u,r)=>{const s=t;let a=n,d=e.get(n);if(d&&d[s]&&d[s](),"string"==typeof f?a=o.pn(n,f):"object"==typeof f?a=f:(r=t.split(":")).length>1&&(a=o.pn(n,r[0]),t=r[1]),!a)return;let p=i;(r=t.split(".")).length>1&&(t=r[0],p=(n=>{n.keyCode===S[r[1]]&&i(n)})),u=o.fn?{capture:!!c,passive:!!l}:!!c,a.addEventListener(t,p,u),d||e.set(n,d={}),d[s]=(()=>{a&&a.removeEventListener(t,p,u),d[s]=null})},F:(n,t)=>{const o=e.get(n);o&&(t?o[t]&&o[t]():(Object.keys(o).forEach(n=>{o[n]&&o[n]()}),e.delete(n)))},nn:(n,t)=>n.attachShadow(t)};return o.e=!!o.ln.attachShadow,o.mn=((n,t)=>(t=o.o(n))&&11===o.on(t)?t.host:t),o}(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=r,e.h=u,e.Context=t;const j=o.$definedCmps=o.$definedCmps||{},x={hn:function O(n,e){e.mode||(e.mode=v.D(e,"mode")||t.mode),v.D(e,N)||function o(n,t){return n&&1===t.encapsulation}(v.e,n)||function i(n,t,e,o){let i,c,l;t.$defaultHolder||n.c(t,t.$defaultHolder=n.rn(""),e[0]);let f=0;for(;f<e.length;f++)o=e[f],1===n.on(o)&&null!=(i=n.D(o,"slot"))?(l=l||{})[i]?l[i].push(o):l[i]=[o]:c?c.push(o):c=[o];t.L={J:c,G:l}}(v,e,e.childNodes),v.e||1!==n.encapsulation||(e.shadowRoot=e)},q:v,yn:function k(n,t){j[n.n]||(j[n.n]=!0,function e(n,t,o,i){o.connectedCallback=function(){(function e(n,t,o){o.$connected||(o.$connected=!0,o.j=null,function i(n,t,e){for(e=t;e=n.q.mn(e);)if(n.vn(e)){e.bn||(t.d=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}(n,o),n.N.add(()=>{n.hn(t,o),n.loadBundle(t,o.mode,()=>s(n,o))},3))})(n,t,this)},o.disconnectedCallback=function(){(function t(n,e){!n.K&&function o(n,t){for(;t;){if(!n.o(t))return 9!==n.on(t);t=n.o(t)}}(n.q,e)&&(e.j=!0,f(e),w(e.P,!0),n.q.F(e),e.L&&(e.L=e.L.J=e.L.G=null),e.x&&(e.x.componentDidUnload&&e.x.componentDidUnload(),e.x=e.x.k=null),e.$activeLoading=e.$connected=e.$defaultHolder=e.$n=e.T=e.P=e.d=e.bn=e.C=e.wn=null)})(n,this)},o.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),function e(n,t){n.j||(n.bn?t(n):(n.gn=n.gn||[]).push(t))}(this,n),t},o.$initLoad=function(){(function t(n,e,o){if(!e.bn&&e.x&&!e.j&&(!e.$activeLoading||!e.$activeLoading.length)){e.$activeLoading=null,e.bn=!0;try{w(e.P),e.gn&&(e.gn.forEach(n=>n(e)),e.gn=null),e.x.componentDidLoad&&e.x.componentDidLoad()}catch(t){n.M(t,4,e)}e.classList.add(o),f(e)}})(n,this,i)},o.Cn=function(){s(n,this)},function c(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].Nn;1===i||2===i?h(e,o,function n(){return(this.T=this.T||{})[o]},function t(e){p(n,this,o,e)}):6===i&&m(e,o,A)})}(n,t.H,o)}(x,n,t.prototype,a),o.customElements.define(n.n,t))},jn:t.emit,S:n=>d[v._(n)],En:n=>t[n],isClient:!0,vn:n=>!(!j[v._(n)]&&!x.S(n)),loadBundle:function T(n,t,e){if(n.O)e();else{const o="string"==typeof n.xn?n.xn:n.xn[t],i=r+o+(function o(n,t){return 2===t.encapsulation||1===t.encapsulation&&!n}(v.e,n)?".sc":"")+".js";import(i).then(t=>{try{n.O=t[(n=>M(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,t,e){const o=e.style;if(o){const i=e.is+(e.styleMode||E);if(!t[i]){const e=n.X("template");t[i]=e,e.innerHTML=`<style>${o}</style>`,n.U(n.t,e)}}}(v,n,n.O)}catch(t){n.O=class{}}e()}).catch(n=>void 0)}},M:(n,t,e)=>void 0,On:n=>(function t(n,e,o){return{create:C(n,e,o,"create"),componentOnReady:C(n,e,o,"componentOnReady")}})(v,y,n),N:function B(t,e,o){function i(){for(;s.length>0;)s.shift()();e=!1}function c(n){for(n=f(),i();a.length>0&&f()-n<40;)a.shift()();(o=a.length>0)&&u(l)}function l(n){for(i(),n=4+f();a.length>0&&f()<n;)a.shift()();(o=a.length>0)&&u(c)}const f=()=>t.performance.now(),u=t=>n.requestAnimationFrame(t),r=Promise.resolve(),s=[],a=[];return{add:(n,t)=>{3===t?(s.push(n),e||(e=!0,r.then(i))):(a.push(n),o||(o=!0,u(c)))}}}(o),Sn:n=>(n||[]).map(n=>(function t(n,e,o,i){const c={n:n[0],H:{color:{kn:"color"}}};c.xn=n[1];const f=n[3];if(f)for(o=0;o<f.length;o++)i=f[o],c.H[i[0]]={Nn:i[1],kn:"string"==typeof i[2]?i[2]:i[2]?i[0]:0,Tn:i[3]};return c.encapsulation=n[4],n[5]&&(c.Mn=n[5].map(l)),e[c.n]=c})(n,d))};x.render=$(x,v);const L=v.ln;return L.$rendered=!0,L.$activeLoading=[],L.$initLoad=(()=>L.bn=!0),function R(n,t){const e=t.querySelectorAll(`[${N}]`),o=e.length;let i,c,l,f,u,r;if(t.bn=o>0)for(f=0;f<o;f++)for(i=e[f],c=n.D(i,N),(l=i.P=new P).m=n._(l.B=i),u=0,r=i.childNodes.length;u<r;u++)g(n,i.childNodes[u],l,c,!0)}(v,L),x.R=c,x}(e,H,n,t,i,hydratedCssClass);o.Sn(H.components).forEach(n=>o.yn(n,class extends HTMLElement{}))}})(window,document,Context,appNamespace,publicPath);
})({},"StencilApp","hydrated","/build/stencil-app/");