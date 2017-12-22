import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class TransportService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllTransport(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllTransport/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getTransportcount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addTransport(formdata){   
    const url=this.baseurl+"addTransport";
    return this.http.post(url,formdata);
  }
updateTransport(formdata){ 
    const url=this.baseurl+"addTransport/"+formdata.transportId;
    return this.http.put(url,formdata);
  }
getTransportById(id){   
  const url=this.baseurl+"getTransportById/"+id;
  return this.http.get(url);
}
deleteTransport(id){
    const url=this.baseurl+"deleteTransport/"+id;
    return this.http.put(url,"");
}
transportAlreadyExist(transportName){// not in use
    const url=this.baseurl+"transportIsExist/"+transportName;
    return this.http.get(url);
}
}
