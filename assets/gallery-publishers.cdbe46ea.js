import{_ as k}from"./gallery-lazy.9238549d.js";import{a as v}from"./gallery-search.70d7193d.js";import{c as S}from"./gallery.86f7029d.js";import{f as x}from"./gallery-findSubPageSource.85dad557.js";import{_ as w,c,d as u,a as p,F as O,i as $,n as h,e as m,r as C,b as N,o as i,h as P,j as d,t as y,w as R,u as B}from"./lodash.4793ee9f.js";import"./gallery-page-title.3a2b50a5.js";import"./content-script-helpers.caeeb6e9.js";import"./jquery.fca3dd19.js";import"./jszip.f74de32f.js";import"./fuse.esm.249bd5bb.js";import"./gallery-makeCoverUrl.52ce2441.js";import"./index.ff69ba6a.js";import"./howler.45f3c8a6.js";import"./tippy.0141f121.js";const T={name:"alePublishers",mixins:[S,x],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Publishers",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return this.$store.state.searchOptOpenHeight?{marginBottom:0}:!1},galleryStyle:function(){return this.$store.state.searchOptOpenHeight?{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-this.$refs.wrapper.offsetTop*2+"px"}:!1}},methods:{makeCollection:function(){const s=this;let o=[],r=1;_.eachRight(s.subPageSource.collection,function(e){e.publishers&&_.each(e.publishers,function(t){if(t.name){let n=_.find(o,{name:t.name});if(n)return n.books.push(e.title||e.shortTitle),!1;{const l={name:t.name,url:s.slugify(t.name),added:r,books:[e.title||e.shortTitle],authors:e.authors,narrators:e.narrators,series:e.series};o.push(l),++r}}})}),_.reverse(o),this.$store.commit("prop",{key:"pageCollection",value:o}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){let s=this;const o={scope:[{active:!0,key:"name",tippy:"Search publishers by name",weight:5},{active:!0,key:"books",tippy:"Search publishers by book titles",weight:1},{active:!0,key:"authors.name",tippy:"Search publishers by authors",weight:1},{active:!0,key:"narrators.name",tippy:"Search publishers by narrators",weight:1},{active:!0,key:"series.name",tippy:"Search publishers by series",weight:1}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,function(){let r=_.get(s.$store.state,s.collectionSource),e=_.maxBy(r,function(t){if(t.books)return t.books.length});return e?e.books.length:1}()],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){let r=_.get(s.$store.state,s.collectionSource),e=_.maxBy(r,function(t){if(t.books)return t.books.length});return e?e.books.length:1},condition:function(r){if(r.books){let e=this.range[0],t=this.range[1];return r.books.length>=e&&r.books.length<=t}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by publisher's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(o)}}},z={key:0,class:"books-total",content:"Total number of books from this publisher."};function M(s,o,r,e,t,n){const l=v,f=C("router-link"),g=k,b=N("tippy");return s.listReady?(i(),c("div",{key:0,id:"ale-publishers",class:"box-layout-wrapper",style:h(n.optionsOpenMargin),ref:"wrapper"},[u(l,{collectionSource:s.collectionSource},null,8,["collectionSource"]),p("div",{style:h(n.galleryStyle),class:"page-content"},[(i(!0),c(O,null,$(s.$store.getters.collection,(a,D)=>(i(),P(g,{class:"single-box","data-name":a.name,key:"publishers:"+a.name},{default:d(()=>[u(f,{to:{name:"publisher",params:{publisher:a.url},query:{subPageSource:s.subPageSource.name}}},{default:d(()=>[p("h2",null,y(a.name),1),a.books&&a.books.length?R((i(),c("div",z,[B(y(a.books.length),1)])),[[b,{placement:"right"}]]):m("",!0)]),_:2},1032,["to"])]),_:2},1032,["data-name"]))),128))],4)],4)):m("",!0)}const W=w(T,[["render",M],["__scopeId","data-v-1135c86e"]]);export{W as default};