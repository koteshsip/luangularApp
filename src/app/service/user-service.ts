import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserServices {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }

 public  uploadImage(formdata: any) {
        let _url: string = this.baseurl+'saveUserDetails';
        return this.http.post(_url, formdata)
        .catch(this._errorHandler) ;
    }
private _errorHandler(error: Response) {
        console.error('Error Occured: ' + error);
        return Observable.throw(error || 'Some Error on Server Occured');

    }

  getAllState(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllState/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getStateCount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addState(formdata){  
    let body={tempCountryId:formdata.countryId,stateName:formdata.stateName} 
    const url=this.baseurl+"addState";
    return this.http.post(url,body);
  }
updateState(formdata){ 
  let body={tempCountryId:formdata.countryId,stateName:formdata.stateName} 
    const url=this.baseurl+"addState/"+formdata.stateId;
    return this.http.put(url,body);
  }
getStateById(id){   
  const url=this.baseurl+"getStateById/"+id;
  return this.http.get(url);
}
deleteState(id){
    const url=this.baseurl+"deleteState/"+id;
    return this.http.put(url,"");
}
stateAlreadyExist(stateName,countryId){
    const url=this.baseurl+"stateIsExist/"+stateName+"/"+countryId;
    return this.http.get(url);
}
  getAllCountry(){
    const url=this.baseurl+"getAllCountrySelect";
    return this.http.get(url);
  }
}
