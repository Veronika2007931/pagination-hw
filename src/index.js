function searchImg(query, page=1){
  return fatch(`https://pixabay.com/api/?key=39207305-3cafba90fc720ccc598cbdff4&q=${query}&page=${page}&per_page=20`)
  .than((responce)=>{responce.json()})
  .then((res)=> res.hits)
}

const form = document.querySelector(".js-search-form")
const list = document.querySelector(".js-articles-container")
const button = document.querySelector('[data-action="load-more"]')

form.addEventListener('submit', onFormSubmit)
function onFormSubmit(event){
    event.preventDefault()
      const qwery = event.currentTarget.elements.qwery.value
    searchImg(qwery).then((hits)=>{

    })
}

function createMarkup(articles) {  
    const markup = articlesTpl(articles)
    articlesContainerRef.insertAdjacentHTML('beforeend', markup)  
}




