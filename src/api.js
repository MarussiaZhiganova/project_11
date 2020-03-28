export class Api {
  constructor({baseUrl, headers}) {
  this.baseUrl = baseUrl;
  this.headers = headers;
  }

  makeFetch(url, method='GET', body=undefined){
    if(body) {
      body = JSON.stringify(body);
    }
    return fetch(`${this.baseUrl}/${url}`,{
      method,
      headers:this.headers,
      body
    })
    .then(res=>{
    if(!res.ok){
      throw'что-то пошло не так'
    }
    return res.json();
    })
  }

  getUserInfo(){
    return this.makeFetch(`users/me`);
  }

  getInitialCards() {
    return this.makeFetch(`cards`);
  }

  sendUserInfo(name, about) {
    return this.makeFetch(`users/me`, 'PATCH', {
      name: name, 
      about: about
    });
  }

  like(_id){
    return this.makeFetch(`cards/like/${_id}`, 'PUT'); 
  }
}