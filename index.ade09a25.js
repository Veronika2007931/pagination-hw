const e={headers:{"X-Api-Key":"NR2vXElcbXkoqh3dAvwhrvtqdClLKGTJx9990ny0uRtRmrCfHY8oVl7Z"}};const t=document.querySelector(".js-search-form"),r=(document.querySelector(".js-articles-container"),document.querySelector('[data-action="load-more"]'),document.querySelector(".mb-2")),a=new class{searchImg(){return fetch(`https://api.pexels.com/v1/search?query=${this.query}&page=${this.page}&per_page=20`,e).than((e=>{e.json()})).than((e=>(this.increasePage,e.articles)))}increasePage(){this.page+=1}resetPage(){this.page=1}constructor(){this.query="",this.page=1}};t.addEventListener("submit",(function(e){e.preventDefault(),a.query=e.currentTarget.elements.query.value,a.resetPage(),a.increasePage()})),r.addEventListener("click",(function(){a.searchImg().then((e=>console.log(e)))}));
//# sourceMappingURL=index.ade09a25.js.map
