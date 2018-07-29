import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class LibraryTransactionService {
private  baseurl=AppSettings['API_ENDPOINT'];
constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllLibraryTransaction(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"listLibBooksRequest/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getLibraryTransactioncount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addLibraryTransaction(formdata){   
    const url=this.baseurl+"addLibraryBookingRequest";
    return this.http.post(url,formdata);
  }
updateLibraryTransaction(formdata){ 
    const url=this.baseurl+"addLibraryBookingRequest/"+formdata.libraryTransactionId;
    return this.http.put(url,formdata);
  }
getLibraryTransactionById(id){   
  const url=this.baseurl+"getLibraryBookingRequestById/"+id;
  return this.http.get(url);
}
deleteLibraryTransaction(id){
    const url=this.baseurl+"deleteLibraryBookingRequest/"+id;
    return this.http.put(url,"");
}
libraryTransactionAlreadyExist(libraryTransactionName){// not in use
    const url=this.baseurl+"libraryTransactionIsExist/"+libraryTransactionName;
    return this.http.get(url);
}
}
