import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class HostelService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllHostel(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllHostel/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getHostelcount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addHostel(formdata){   
    const url=this.baseurl+"addHostel";
    return this.http.post(url,formdata);
  }
updateHostel(formdata){ 
    const url=this.baseurl+"addHostel/"+formdata.hostelId;
    return this.http.put(url,formdata);
  }
getHostelById(id){   
  const url=this.baseurl+"getHostelById/"+id;
  return this.http.get(url);
}
deleteHostel(id){
    const url=this.baseurl+"deleteHostel/"+id;
    return this.http.put(url,"");
}
hostelAlreadyExist(hostelName){// not in use
    const url=this.baseurl+"hostelIsExist/"+hostelName;
    return this.http.get(url);
}
}

