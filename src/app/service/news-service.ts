import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class NewsService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllNews(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllNews/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getNewscount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addNews(formdata){   
    const url=this.baseurl+"addNews";
    return this.http.post(url,formdata);
  }
updateNews(formdata){ 
    const url=this.baseurl+"addNews/"+formdata.newsId;
    return this.http.put(url,formdata);
  }
getNewsById(id){   
  const url=this.baseurl+"getNewsById/"+id;
  return this.http.get(url);
}
deleteNews(id){
    const url=this.baseurl+"deleteNews/"+id;
    return this.http.put(url,"");
}
newsAlreadyExist(newsName){// not in use
    const url=this.baseurl+"newsIsExist/"+newsName;
    return this.http.get(url);
}
}
