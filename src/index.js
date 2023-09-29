import {PixApi} from "./api.js"

const form = document.querySelector(".js-search-form")
const list = document.querySelector(".js-articles-container")
const button = document.querySelector('[data-action="load-more"]')
const submitBtn = document.querySelector(".mb-2")
const api = new PixApi()

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
    event.preventDefault()
api.query = event.currentTarget.elements.query.value
api.resetPage()
api.increasePage()
}

submitBtn.addEventListener('click', onBtnClick)

function onBtnClick(){
  api.searchImg()
  .then((articles) => console.log(articles))
}


// function createMarkup(articles) {  
//     const markup = articlesTpl(articles)
//     articlesContainerRef.insertAdjacentHTML('beforeend', markup)  
// }




