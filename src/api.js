const BASE_URL = 'https://www.pexels.com/api/documentation/#photos-search'
const options = {
    headers:{
        'X-Api-Key': 'NR2vXElcbXkoqh3dAvwhrvtqdClLKGTJx9990ny0uRtRmrCfHY8oVl7Z'
    }
}

export class PixApi {
    constructor(){
     this.qwery = ''
      this.page = 1
    }

   searchImg(){
        return fetch(`${BASE_URL}?q=${this.qwery}&page=${this.page}&per_page=20`,options)
        .than((responce)=>{responce.json()})
        .than((articles)=>{
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





