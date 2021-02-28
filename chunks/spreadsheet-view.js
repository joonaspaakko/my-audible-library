(self.webpackChunk=self.webpackChunk||[]).push([[901],{6796:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o}),s(3238),s(895);const o={methods:{makeFullUrl:function(e){var t=new Url(this.$store.state.urlOrigin+e);return t.query.ipRedirectOverride=!0,t.query.overrideBaseCountry=!0,t.toString()},makeUrl:function(e,t){var s=this.$store.state.urlOrigin,o="";switch(e){case"store":case"book":o=s+"/pd/"+t;break;case"author":t.url&&(o=s+"/author/"+t.url);break;case"narrator":t.name&&(o=s+"/search?searchNarrator="+decodeURIComponent(t.name));break;case"series":t.asin&&(o=s+"/series/"+t.asin);break;case"publisher":t.name&&(o=s+"/search?searchProvider="+decodeURIComponent(t.name));break;case"categories":t.name&&(o=s+"/cat/"+t.url)}if(o){var i=new Url(o);return i.query.ipRedirectOverride=!0,i.query.overrideBaseCountry=!0,i.toString()}return""}}}},6962:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m}),s(3938),s(2327),s(5699),s(5623),s(5769),s(1013),s(3238),s(1418),s(1514),s(4078),s(2759),s(895),s(1203),s(2482);const o={name:"colResizer",props:["identifier"],data:function(){return{colClass:"",startPosition:null,endPosition:null,dragging:!1,minWidth:30,width:null,mouseX:0,threshold:10}},created:function(){this.colClass=this.identifier.split(" ")[0]},methods:{resizeMouseDown:function(e){this.endPosition=null,this.startPosition=e.clientX},resizeMouseMove:_.throttle((function(e){this.startPosition&&Math.abs(this.startPosition-e.clientX)>=this.threshold&&(this.dragging=!0,this.mouseX=e.clientX)}),65),resizeMouseUp:function(e){if(this.dragging){this.endPosition=e.clientX;var t=this.width?this.width:e.currentTarget.parentElement.offsetWidth,s=Math.abs(this.startPosition-this.endPosition),o=t+(this.endPosition>this.startPosition?+s:-s);this.width=o<this.minWidth?this.minWidth:o}this.dragging=null,this.endPosition=null,this.startPosition=null,this.mouseX=0}}};var i=s(810);const r={name:"aleHeader",props:["keys"],components:{colResizer:(0,i.Z)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-resizer",class:{dragging:e.startPosition},on:{mousedown:e.resizeMouseDown,mouseup:e.resizeMouseUp,mousemove:e.resizeMouseMove}},[e.mouseX?s("div",{staticClass:"floater-boy",style:{left:e.mouseX+"px"}}):e._e(),e._v(" "),e.width?s("style",{tag:"component",attrs:{type:"text/css"}},[e._v("\n    ."+e._s(e.colClass)+" { width: "+e._s(e.width)+"px !important; }\n  ")]):e._e()],1)}),[],!1,null,"a2779358",null).exports,sorter:s(8327).Z},data:function(){return{listName:"sort",optionsList:null,headers:null}},created:function(){this.optionsList=this.$store.state.listRenderingOpts[this.listName],this.headers=this.prepareHeaders(this.keys)},methods:{prepareHeaders:function(e){return _.map(e,(function(e){var t={key:e,label:_.startCase(e),align:"left",class:"col-"+_.kebabCase(e)};switch(e){case"titleShort":case"title":t.class=t.class+" sticky-col";break;case"authors":case"narrators":case"publishers":t.key+=".name"}return t}))},sorterIndex:function(e){return _.findIndex(this.optionsList,{key:e.key})},sorterItem:function(e){var t=new RegExp("^"+e);return _.find(this.optionsList,(function(e){return e.key.match(t)}))}}},n=(0,i.Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list-view-header ale-row"},[s("tr",{staticClass:"ale-row-inner"},e._l(e.headers,(function(t,o){return s("th",{key:t.label,staticClass:"header-item ale-col",class:t.class},[s("col-resizer",{attrs:{identifier:t.class}}),e._v(" "),s("div",{staticClass:"ale-col-inner"},[e.sorterIndex(t)>-1?s("sorter",{attrs:{label:!1,item:e.sorterItem(t.key),index:e.sorterIndex(t),currentList:e.optionsList,listName:e.listName,tippyTop:!0}},[e._v("\n          "+e._s(t.label)+"\n        ")]):s("span",{staticClass:"text-container"},[e._v(e._s(t.label))])],1)],1)})),0)])}),[],!1,null,"751ff96f",null).exports;s(8010),s(911);var a=s(6495);const l={methods:{stringifyArray:function(e,t,s){return t?_.map(e,t).join(s||", "):e.join(", ")}}};var c=s(6796),u=s(5611),d=s(8546);const h={name:"aleListItem",props:["book","rowIndex","keys"],mixins:[l,a.Z,c.Z],components:{lazy:u.Z,sampleButton:d.Z},data:function(){return{bookUrl:"",coverUrl:"",coverUrl27:"",bookTitle:"",goodreadsUrl:"",columns:null,imageLoading:!0}},created:function(){this.bookUrl=this.makeFullUrl(this.book.url),this.coverUrl=this.makeCoverUrl(this.book.cover),this.coverUrl&&(this.coverUrl27=this.coverUrl.replace("_SL500_","_SL27_")),this.bookTitle=this.book.title||this.book.titleShort,this.columns=this.prepareColumns()},mounted:function(){this.$nextTick((function(){this.imageLoading=!1}))},methods:{prepareColumns:function(){var e=this;return _.map(this.keys,(function(t){var s={};switch(s.key=t,s.class="col-"+_.kebabCase(t),t){case"authors":case"narrators":case"categories":case"series":case"publishers":s.text=e.stringifyArray(e.book[t],"name","categories"===t?" > ":null);break;case"title":s.text=e.book[t]||e.book.titleShort,s.class+=" sticky-col";break;case"bookNumbers":var o=_.filter(e.book.series,"bookNumbers");o=_.map(o,"bookNumbers"),o=_.flatten(o),_.isEmpty(o)?o=null:_.isArray(o)&&(o=o.join(", ")),s.text=e.book.series?o||"∞":"";break;case"isbn10":var i=_.find(e.book.isbns,{type:"ISBN_10"});i&&(s.text=i.identifier);break;case"isbn13":var r=_.find(e.book.isbns,{type:"ISBN_13"});r&&(s.text=r.identifier);break;default:s.text=e.book[t],s.name=""}return s.text||(s.text=null),s}))}}},p=(0,i.Z)(h,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",{staticClass:"ale-row-inner",on:{click:function(t){return e.$root.$emit("book-clicked",{book:e.book})}}},e._l(e.columns,(function(t){return s("lazy",{key:t.key,staticClass:"ale-col",class:t.class,attrs:{tag:"td",name:t.name}},[s("div",{staticClass:"ale-col-inner"},["title"===t.key?s("span",{staticClass:"icons-n-stuff"},[s("span",{staticClass:"info-icon"},[s("font-awesome",{staticClass:"pointer",attrs:{fas:"",icon:"chevron-down"}})],1),e._v(" "),s("sampleButton",{attrs:{book:e.book,index:e.rowIndex,size:16}}),e._v(" "),s("div",{staticClass:"thumbnail-wrapper"},[e.imageLoading?e._e():s("img",{attrs:{src:e.coverUrl27,alt:""}})])],1):e._e(),e._v(" "),s("span",{staticClass:"text-container"},[e._v(" "+e._s(t.text||" "))])])])})),1)}),[],!1,null,null,null).exports,k={name:"aleBooks",components:{lazy:u.Z,aleHeader:n,aleListRow:p,bookDetails:function(){return s.e(661).then(s.bind(s,4926))}},mixins:[l],data:function(){return{spreadsheetTop:170,keys:"",prevScrollTop:0,detailsBook:null,detailsBookIndex:-1}},created:function(){this.keys=this.prepareKeys()},mounted:function(){this.$root.$on("book-clicked",this.toggleBookDetails),this.setSpreadsheetOffset(),_.get(this.$route,"query.book")&&this.toggleBookDetails({book:_.find(this.$store.getters.collection,{asin:this.$route.query.book})})},beforeDestroy:function(){this.$root.$off("book-clicked",this.toggleBookDetails)},methods:{setSpreadsheetOffset:function(){var e=document.querySelector("#ale-search-wrap"),t=window.pageYOffset+e.getBoundingClientRect().top,s=e.offsetHeight;this.spreadsheetTop=t+s},toggleBookDetails:function(e){if(e.book){e.index||(e.index=_.findIndex(this.$store.getters.collection,{asin:e.book.asin}));var t=_.get(this.detailsBook,"asin")===e.book.asin;this.detailsBook=null,this.detailsBookIndex=e.index,this.$nextTick((function(){t?void 0!==this.$route.query&&this.$updateQuery({query:"book",value:null}):this.detailsBook=e.book}))}else this.detailsBook=null,this.detailsBookIndex=-1,void 0!==_.get(this.$route,"query.book")&&this.$updateQuery({query:"book",value:null})},prepareKeys:function(){var e=_.get(this.$store.state,this.$store.state.collectionSource),t=_.union(_.flatten(_.map(e,(function(e){return _.keys(e)}))));t=t.concat(["isbn10","isbn13"]);var s=["added","title","series","bookNumbers","authors","narrators","categories","length","progress","releaseDate","publishers","myRating","rating","ratings","fromPlusCatalog","unavailable"],o=_.remove(t,(function(e){return!_.includes(s,e)}));t=s.concat(o),s=null,o=null;var i=["titleShort","sample","blurb","url","summary","moreLikeThis","peopleAlsoBought","asin","cover","sample","sample","cover","isbns"];return _.remove(t,(function(e){return!_.includes(i,e)}))}}},m=(0,i.Z)(k,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"listView",staticClass:"ale-books list-view",style:{top:e.spreadsheetTop+"px"}},[e.detailsBook?s("book-details",{key:"details:"+e.detailsBook.asin,attrs:{book:e.detailsBook,booksWrapper:e.$refs.booksWrapper,index:e.detailsBookIndex},on:{"update:book":function(t){e.detailsBook=t}}}):e._e(),e._v(" "),s("div",{staticClass:"list-view-inner-wrap"},[s("table",[s("thead",[s("ale-header",{attrs:{keys:e.keys}})],1),e._v(" "),s("tbody",e._l(e.$store.getters.collection,(function(t,o){return s("lazy",{key:"book:"+t.asin,ref:"domBooks",refInFor:!0,staticClass:"ale-row",attrs:{"data-asin":t.asin}},[s("ale-list-row",{attrs:{book:t,rowIndex:o,keys:e.keys}})],1)})),1)])])],1)}),[],!1,null,null,null).exports},5611:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});const o={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},i=(0,s(810).Z)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.tag?"td"===e.tag?s("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():s("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports},8546:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});const o=(0,s(810).Z)({name:"sampleButton",props:["book","index","topRight","size"],methods:{playSample:function(e,t){this.$root.$emit("play-audio",{from:"sampleButton",route:this.$route,book:e,index:t})}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("font-awesome",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"pointer",class:{"top-right":e.topRight},style:{width:(e.size||30)+"px",height:"auto"},attrs:{fas:"",icon:"play-circle",content:"Play sample audio"},on:{click:function(t){return e.playSample(e.book,e.rowIndex)}}})}),[],!1,null,"ee87bac2",null).exports}}]);