!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var a={headers:{"X-Api-Key":"39207305-3cafba90fc720ccc598cbdff4"}},c=function(){"use strict";function r(){e(t)(this,r),this.query="",this.page=1}return e(n)(r,[{key:"searchImg",value:function(){var e=this;return fetch("".concat("https://pixabay.com/api/","?query=").concat(this.query,"&page=").concat(this.page,"&per_page=20"),a).then((function(e){e.json()})).then((function(t){return e.increasePage,t.articles}))}},{key:"increasePage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}}]),r}(),u=document.querySelector(".js-search-form"),o=(document.querySelector(".js-articles-container"),document.querySelector('[data-action="load-more"]'),document.querySelector(".mb-2")),i=new c;u.addEventListener("submit",(function(e){e.preventDefault(),i.query=e.currentTarget.elements.query.value,i.resetPage(),i.increasePage()})),o.addEventListener("click",(function(){i.searchImg().then((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=index.5020e860.js.map
