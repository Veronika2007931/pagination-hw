const BASE_URL = 'https://pixabay.com/api/'
const options = {
    headers:{
        'X-Api-Key': '39207305-3cafba90fc720ccc598cbdff4'
    }
}

export class PixApi {

    constructor(){
     this.query = ''
      this.page = 1
    }

   searchImg(){
        return fetch(`${BASE_URL}?query=${this.query}&page=${this.page}&per_page=20`,options)
        .then((responce)=>{responce.json()})
        .then((articles)=>{
            this.increasePage
        return articles.articles}
    )
       
      }

increasePage(){
    this.page += 1
}

resetPage(){
    this.page = 1
}

}





