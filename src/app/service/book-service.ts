import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class BookService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllBook(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllTextBook/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getBookcount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addBook(formdata){   
    const url=this.baseurl+"addTextBook";
    return this.http.post(url,formdata);
  }
updateBook(formdata){ 
    const url=this.baseurl+"addTextBook/"+formdata.bookId;
    return this.http.put(url,formdata);
  }
getBookById(id){   
  const url=this.baseurl+"getTextBookById/"+id;
  return this.http.get(url);
}
deleteBook(id){
    const url=this.baseurl+"deleteTextBook/"+id;
    return this.http.put(url,"");
}
bookAlreadyExist(bookName){//not in use
    const url=this.baseurl+"bookIsExist/"+bookName;
    return this.http.get(url);
}
}

