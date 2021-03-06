import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthServiceService {

 constructor(public localStorageService: LocalStorageService,public http:Http) { }
private  baseurl="http://localhost:8080/";
myloginservice(email,password){
  const url=this.baseurl+'lujavaapp/Login';
  let body={
	"email":email,
	"password":password	
  }
  return this.http.post(url,body);
}
getToken(){
  let mdata=localStorage.getItem('currentUser');
  if(JSON.parse(mdata)){
    let mydata=JSON.parse(mdata).data;
    return mydata['token'];  
  }
  
}
}
