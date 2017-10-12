import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthServiceService {

 constructor(public localStorageService: LocalStorageService,public http:Http) { }

myloginservice(email,password)
{
  //const url='http://localhost/api/insert.php';
  const url='http://localhost:8080/SampleJsonApp/Login';
  //  let headersObj = new Headers();
  //  let headers = new Headers({ 'Accept': 'application/json' });
  //  headers.append('Access-Control-Allow-Headers', 'Content-Type');

  let body={
	"email":email,
	"password":password	
}
  return this.http.post(url,body);
}
getToken(){
  return this.localStorageService.get("token");
}

}
