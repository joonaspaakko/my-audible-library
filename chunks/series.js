(self.webpackChunk=self.webpackChunk||[]).push([[148],{9901:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i}),s(2327);var n=s(5611);const r={name:"aleSeries",components:{aleSearch:s(493).Z,lazy:n.Z},data:function(){return{series:null,collectionSource:"pageCollection"}},created:function(){var e=[],t=1,s=this.$store.state.library.series;_.eachRight(this.$store.state.library.books,(function(n){n.series&&_.each(n.series,(function(r){var i=_.find(e,{asin:r.asin});if(i)return i.books.push(n),!1;var o={name:r.name,asin:r.asin,added:t,books:[n]};_.find(s,{asin:r.asin})&&(++t,e.push(o))}))})),_.reverse(e),this.$store.commit("prop",{key:"pageCollection",value:e}),this.updateListRenderingOptions()},methods:{updateListRenderingOptions:function(){var e,t,s=this,n={scope:[{active:!0,key:"name"}],filter:[{active:!0,type:"filterExtras",label:"Books in series",key:"inSeries",range:[1,(e=_.get(s.$store.state,s.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:1,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(s.$store.state,s.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],s=this.range[1];return e.books.length>=t&&e.books.length<=s}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(n)}}},i=(0,s(810).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box-layout-wrapper",attrs:{id:"ale-series"}},[s("ale-search",{attrs:{collectionSource:e.collectionSource}}),e._v(" "),e._l(e.$store.getters.collection,(function(t,n){return s("lazy",{key:"series:"+t.asin,staticClass:"single-box",attrs:{"data-asin":t.asin}},[s("router-link",{attrs:{to:{name:"series",params:{series:t.asin}}}},[s("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?s("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books I have in this series."}},[e._v("\n        "+e._s(t.books.length)+"\n      ")]):e._e()])],1)}))],2)}),[],!1,null,"161a708d",null).exports},5611:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const n={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},r=(0,s(810).Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.tag?"td"===e.tag?s("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():s("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);