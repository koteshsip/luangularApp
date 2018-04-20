import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class ResourceBankService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllResourceBank(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllResourceBank/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getResourceBankcount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addResourceBank(formdata){   
    const url=this.baseurl+"addResourceBank";
    return this.http.post(url,formdata);
  }
updateResourceBank(formdata){ 
    const url=this.baseurl+"addResourceBank/"+formdata.resourceBankId;
    return this.http.put(url,formdata);
  }
getResourceBankById(id){   
  const url=this.baseurl+"getResourceBankById/"+id;
  return this.http.get(url);
}
deleteResourceBank(id){
    const url=this.baseurl+"deleteResourceBank/"+id;
    return this.http.put(url,"");
}
resourceBankAlreadyExist(resourceBankName){// not in use
    const url=this.baseurl+"resourceBankIsExist/"+resourceBankName;
    return this.http.get(url);
}
}
