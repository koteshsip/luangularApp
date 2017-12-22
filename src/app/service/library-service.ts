import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class LibraryService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllLibrary(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllLibrary/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getLibrarycount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addLibrary(formdata){   
    const url=this.baseurl+"addLibrary";
    return this.http.post(url,formdata);
  }
updateLibrary(formdata){ 
    const url=this.baseurl+"addLibrary/"+formdata.libraryId;
    return this.http.put(url,formdata);
  }
getLibraryById(id){   
  const url=this.baseurl+"getLibraryById/"+id;
  return this.http.get(url);
}
deleteLibrary(id){
    const url=this.baseurl+"deleteLibrary/"+id;
    return this.http.put(url,"");
}
libraryAlreadyExist(libraryName){//not in use
    const url=this.baseurl+"libraryIsExist/"+libraryName;
    return this.http.get(url);
}
}
