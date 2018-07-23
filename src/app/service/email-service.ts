import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class EmailService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllEmail(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllEmail/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getEmailcount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
sendEmail(formdata){   
    const url=this.baseurl+"sendEmail";
    return this.http.post(url,formdata);
  }

getEmailById(id){   
  const url=this.baseurl+"getEmailById/"+id;
  return this.http.get(url);
}
deleteEmail(id){
    const url=this.baseurl+"deleteEmail/"+id;
    return this.http.put(url,"");
}
emailAlreadyExist(emailName){// not in use
    const url=this.baseurl+"emailIsExist/"+emailName;
    return this.http.get(url);
}
}

