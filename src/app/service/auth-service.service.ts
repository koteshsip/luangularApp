import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import {AppSettings} from '../appSettings'
@Injectable()
export class AuthServiceService {

 constructor(public localStorageService: LocalStorageService,public http:Http) { }
private  baseurl=AppSettings['API_ENDPOINT'];
myloginservice(email,password){
  const url=this.baseurl+'Login';
  let body={
	"email":email,
	"password":password	
  }
  return this.http.post(url,body);
}
getToken(){
  let mdata=localStorage.getItem('currentUser');
  if(JSON.parse(mdata)){
    let mydata=JSON.parse(mdata);
    return mydata['data'].employeeMasterDetailsDto.Token;  
  }
  
}
}
