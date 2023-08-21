import{c as K,a as V}from"./jquery.1c267695.js";var j={exports:{}};(function(r){(function(t){var i=/^[a-z]+:/,n=/[-a-z0-9]+(\.[-a-z0-9])*:\d+/i,c=/\/\/(.*?)(?::(.*?))?@/,l=/^win/i,d=/:$/,u=/^\?/,y=/^#/,A=/(.*\/)/,x=/^\/{2,}/,S=/(^\/?)/,v=/'/g,E=/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,L=/%([cd][0-9a-f])%([89ab][0-9a-f])/gi,R=/%([0-7][0-9a-f])/gi,D=/\+/g,Q=/^\w:$/,H=/[^/#?]/,O,b=typeof window=="undefined"&&typeof K!="undefined"&&typeof V=="function",B=!b&&t.navigator&&t.navigator.userAgent&&~t.navigator.userAgent.indexOf("MSIE"),P=b?t.require:null,z={protocol:"protocol",host:"hostname",port:"port",path:"pathname",query:"search",hash:"hash"},G={ftp:21,gopher:70,http:80,https:443,ws:80,wss:443};function F(){return b?O=O||"file://"+(process.platform.match(l)?"/":"")+P("fs").realpathSync("."):document.location.href==="about:srcdoc"?self.parent.document.location.href:document.location.href}function N(e,o,h){var s,a,f;o=o||F(),b?s=P("url").parse(o):(s=document.createElement("a")).href=o;var p,g,w=(g={path:!0,query:!0,hash:!0},(p=o)&&i.test(p)&&(g.protocol=!0,g.host=!0,n.test(p)&&(g.port=!0),c.test(p)&&(g.user=!0,g.pass=!0)),g);for(a in f=o.match(c)||[],z)w[a]?e[a]=s[z[a]]||"":e[a]="";if(e.protocol=e.protocol.replace(d,""),e.query=e.query.replace(u,""),e.hash=M(e.hash.replace(y,"")),e.user=M(f[1]||""),e.pass=M(f[2]||""),e.port=G[e.protocol]==e.port||e.port==0?"":e.port,!w.protocol&&H.test(o.charAt(0))&&(e.path=o.split("?")[0].split("#")[0]),!w.protocol&&h){var T=new m(F().match(A)[0]),I=T.path.split("/"),C=e.path.split("/"),k=["protocol","user","pass","host","port"],J=k.length;for(I.pop(),a=0;a<J;a++)e[k[a]]=T[k[a]];for(;C[0]==="..";)I.pop(),C.shift();e.path=(o.charAt(0)!=="/"?I.join("/"):"")+"/"+C.join("/")}e.path=e.path.replace(x,"/"),B&&(e.path=e.path.replace(S,"/")),e.paths(e.paths()),e.query=new U(e.query)}function q(e){return encodeURIComponent(e).replace(v,"%27")}function M(e){return(e=(e=(e=e.replace(D," ")).replace(E,function(o,h,s,a){var f=parseInt(h,16)-224,p=parseInt(s,16)-128;if(f==0&&p<32)return o;var g=(f<<12)+(p<<6)+(parseInt(a,16)-128);return 65535<g?o:String.fromCharCode(g)})).replace(L,function(o,h,s){var a=parseInt(h,16)-192;if(a<2)return o;var f=parseInt(s,16)-128;return String.fromCharCode((a<<6)+f)})).replace(R,function(o,h){return String.fromCharCode(parseInt(h,16))})}function U(e){for(var o=e.split("&"),h=0,s=o.length;h<s;h++){var a=o[h].split("="),f=decodeURIComponent(a[0].replace(D," "));if(f){var p=a[1]!==void 0?M(a[1]):null;this[f]===void 0?this[f]=p:(this[f]instanceof Array||(this[f]=[this[f]]),this[f].push(p))}}}function m(e,o){N(this,e,!o)}U.prototype.toString=function(){var e,o,h="",s=q;for(e in this){var a=this[e];if(!(a instanceof Function||a===void 0))if(a instanceof Array){var f=a.length;if(!f){h+=(h?"&":"")+s(e)+"=";continue}for(o=0;o<f;o++){var p=a[o];p!==void 0&&(h+=h?"&":"",h+=s(e)+(p===null?"":"="+s(p)))}}else h+=h?"&":"",h+=s(e)+(a===null?"":"="+s(a))}return h},m.prototype.clearQuery=function(){for(var e in this.query)this.query[e]instanceof Function||delete this.query[e];return this},m.prototype.queryLength=function(){var e=0;for(var o in this.query)this.query[o]instanceof Function||e++;return e},m.prototype.isEmptyQuery=function(){return this.queryLength()===0},m.prototype.paths=function(e){var o,h="",s=0;if(e&&e.length&&e+""!==e){for(this.isAbsolute()&&(h="/"),o=e.length;s<o;s++)e[s]=!s&&Q.test(e[s])?e[s]:q(e[s]);this.path=h+e.join("/")}for(s=0,o=(e=(this.path.charAt(0)==="/"?this.path.slice(1):this.path).split("/")).length;s<o;s++)e[s]=M(e[s]);return e},m.prototype.encode=q,m.prototype.decode=M,m.prototype.isAbsolute=function(){return this.protocol||this.path.charAt(0)==="/"},m.prototype.toString=function(){return(this.protocol&&this.protocol+"://")+(this.user&&q(this.user)+(this.pass&&":"+q(this.pass))+"@")+(this.host&&this.host)+(this.port&&":"+this.port)+(this.path&&this.path)+(this.query.toString()&&"?"+this.query)+(this.hash&&"#"+q(this.hash))},t[t.exports?"exports":"Url"]=m})(r.exports?r:window)})(j);var X=j.exports,Y={methods:{shortenLength:function(r){if(r)if(r=DOMPurify.sanitize(r.trimToColon().trimAll()),r.match(/\d/)){const t=this.timeStringToSeconds(r);return this.secondsToTimeString(t,!0)}else return null;else return null},getSummary:function(r){r.removeAttribute("class");var t=r.querySelectorAll("*");return $.each(t,function(){this.removeAttribute("class")}),DOMPurify.sanitize(r.outerHTML.trimAll())},fixDates:function(r){var t=typeof r=="object"?DOMPurify.sanitize(r.textContent.trimToColon()):DOMPurify.sanitize(r);if(r&&t){const i=this.domainExtension,n={".com":["m-d-y","MM-dd-yyyy"],".ca":["y-m-d","yyyy-MM-dd"],".co.uk":["d-m-y","dd-MM-yyyy"],".de":["d-m-y","dd-MM-yyyy"],".fr":["d-m-y","dd-MM-yyyy"],".it":["d-m-y","dd-MM-yyyy"],".com.au":["d-m-y","dd-MM-yyyy"],".in":["d-m-y","dd-MM-yyyy"]},c=n[i]?n[i][0]:null;let l=t.split("-");if(!c||!t.match(/\-/)||l.length!==3)return t;{const d=c.split("-"),u={y:null,m:null,d:null};$.each(l,function(A,x){u[d[A]]=x}),t=null,u.y.length<=2&&(u.y>=95&&u.y<=99?u.y="19"+u.y:u.y<95&&(u.y="20"+u.y));const y=[u.y,u.m,u.d];return dateFormat(new Date(y[0],y[1]-1,y[2]),"yyyy-MM-dd")}}else return null},getSeries:function(r,t){const i=[];if(r){let c=DOMPurify.sanitize($(r).html()).trimAll().trimToColon();c=$.parseHTML(c),$.each(c,function(l,d){var u=_.get(d,"textContent","").trim().replace(/^,/,"").trimAll()||"",y=_.get(d,"href"),A=!y&&u.match(/\d/);if(y){let v=new Url(y);i.push({name:u,asin:t?v.query.asin:v.path.substring(v.path.lastIndexOf("/")+1)})}else if(A){var x=u.replace(/^[^0-9]*/,"").replace(/,$/,"").replace(/;$/,"").trim().split(","),S=_.last(i);S.bookNumbers=$.map(x,function(v){return""+v.trim()})}})}return i.length>0?t?i.reverse():i:null},getArray:function(r){const t=[];return $(r).each(function(){const n=new Url(DOMPurify.sanitize($(this).attr("href")),!0);let c,l,d;n.query.searchAuthor&&(c=n.query.searchAuthor),n.query.searchNarrator&&(l=n.query.searchNarrator),n.query.searchProvider&&(d=n.query.searchProvider),n.clearQuery(),c&&(n.query.searchAuthor=c),l&&(n.query.searchNarrator=l),d&&(n.query.searchProvider=d),l=null,d=null;let u={name:DOMPurify.sanitize($(this).text().trim())};const y=i(n.toString());y&&(u.url=y),t.push(u)}),t.length>0?t:null;function i(n){return n.match(/^\/cat\//)||n.match(/^\/author\//)?n.substring(n.lastIndexOf("/")+1):n.match(/^\/search\?searchAuthor/)||n.match(/^\/search\?searchNarrator/)||n.match(/^\/search\?searchProvider/)?null:n}},addedOrder:function(r){let t=r.length+1;_.each(r,function(i){--t,i.added=t})},makeFrenchFries:function(r){r.extras=r.extras||{},r.extras["domain-extension"]=r.extras["domain-extension"]||this.domainExtension,r.chunks=[],_.each(r,function(t,i){if(i!=="chunks"&&_.isArray(t)){const n=_.chunk(t,50);r.chunks.push(i),r[i+"-chunk-length"]=n.length,_.each(n,function(c,l){r[i+"-chunk-"+l]=c}),delete r[i]}})},glueFriesBackTogether:function(r){if(r&&_.isEmpty(r))return null;_.each(r.chunks,function(t){const i=r[t+"-chunk-length"],n=_.range(0,i);r[t]=[],_.each(n,function(c){r[t]=r[t].concat(r[t+"-chunk-"+c]),delete r[t+"-chunk-"+c]}),delete r[t+"-chunk-length"]}),delete r.chunks},removeFromSeries:function(r,t){_.each(t,function(i){i.series&&_.each(i.series,function(n){let c=_.find(r,{asin:n.asin});_.remove(c.books,function(l){return l===i.asin}),c.books.length<1&&_.remove(r,function(l){return l.asin===n.asin})})})},removeFromCollections:function(r,t){r=_.compact(r),_.each(r,function(i){i.books.length>0&&_.each(t,function(n){_.includes(i.books,n.asin)&&_.remove(i.books,function(l){return l===n.asin}),i.books.length<1&&_.remove(r,function(l){return l.id===i.id})})})}}};export{X as U,Y as h};
