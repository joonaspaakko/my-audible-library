(self.webpackChunk=self.webpackChunk||[]).push([[248],{8217:(t,e,o)=>{"use strict";var i=o(1695),r=o(7740),n=o(9679),s=o(4005),a=o(3060),l=o(5574),h=o(9720),c=o(9955)("splice"),u=Math.max,d=Math.min,f=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!c},{splice:function(t,e){var o,i,c,v,w,b,k=a(this),g=s(k.length),p=r(t,g),W=arguments.length;if(0===W?o=i=0:1===W?(o=0,i=g-p):(o=W-2,i=d(u(n(e),0),g-p)),g+o-i>f)throw TypeError(m);for(c=l(k,i),v=0;v<i;v++)(w=p+v)in k&&h(c,v,k[w]);if(c.length=i,o<i){for(v=p;v<g-i;v++)b=v+o,(w=v+i)in k?k[b]=k[w]:delete k[b];for(v=g;v>g-i+o;v--)delete k[v-1]}else if(o>i)for(v=g-i;v>p;v--)b=v+o-1,(w=v+i-1)in k?k[b]=k[w]:delete k[b];for(v=0;v<o;v++)k[v+p]=arguments[v+2];return k.length=g-i+o,c}})},1248:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r}),o(3938),o(8217),o(1013);const i={name:"aleBackground",mixins:[o(6495).Z],data:function(){return{coverSource:null,books:null,booksLength:null,windowWidth:null,timer1:null,timer2:null}},mounted:function(){this.windowWidth=window.innerWidth,this.books=this.getBooks(),this.flipAnimationRandomizer(),this.$root.$on("afterWindowResize",this.onWindowResize)},beforeDestroyed:function(){this.$root.$off("afterWindowResize",this.onWindowResize),clearInterval(this.timer1),clearInterval(this.timer2)},methods:{bgGridSize:function(){var t=e(15);function e(t){return 6*t}return this.windowWidth<530?t=e(5):this.windowWidth<760?t=e(6):this.windowWidth<1e3?t=e(8):this.windowWidth<1300&&(t=e(12)),t},getBooks:function(){var t=this.bgGridSize();this.coverSource=this.$store.state.library.books?this.$store.state.library.books:this.$store.state.library.wishlist;var e=function(e){var o=e.length;if(o<=t){for(var i=Math.floor(t/o),r=t-o*i,n=i,s=[],a=0;a<n;a++)s=s.concat(e);return r>0&&(s=s.concat(e.splice(-1,r))),s}return _.sampleSize(e,t)}(this.coverSource);return e=_.map(e,(function(t){var e=_.pick(t,["cover"]);return e.flipOut=!1,e})),this.booksLength=e.length,e},flipAnimationRandomizer:function(){var t=this;clearInterval(t.timer1),clearInterval(t.timer2),t.timer1=setInterval((function(){t.coverSwitcheroo()}),t.randomNumber(1500,3e3)),t.timer2=setInterval((function(){t.coverSwitcheroo()}),t.randomNumber(3500,5e3))},coverSwitcheroo:function(){var t=this,e=this.randomNumber(0,this.booksLength-1),o=this.books[e];o.flipOut=!0,setTimeout((function(){var e=t.randomNumber(0,t.coverSource.length-1),i=t.coverSource[e];o.cover=i.cover,o.flipOut=!1}),850)},randomNumber:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},onWindowResize:function(t){t.widthChanged&&(this.windowWidth=t.width,this.books=this.getBooks())}}},r=(0,o(810).Z)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.books?o("div",{attrs:{id:"ale-background"}},t._l(t.books,(function(e,i){return o("img",{key:e.cover+i,class:{"flip-out":e.flipOut},attrs:{src:t.makeCoverUrl(e.cover,200),alt:""}})})),0):t._e()}),[],!1,null,"4f83a6b0",null).exports}}]);