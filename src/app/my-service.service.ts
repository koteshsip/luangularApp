import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http,Headers,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
@Injectable()
export class MyServiceService {

  constructor(public localStorageService: LocalStorageService,public http:Http) { }
 
// myloginservice(email,password)
// {
  //const url='http://localhost/api/insert.php';
//  const url='http://localhost:8080/SampleJsonApp/Login';
  //  let headersObj = new Headers();
  //  let headers = new Headers({ 'Accept': 'application/json' });
  //  headers.append('Access-Control-Allow-Headers', 'Content-Type');

//   let body={
// 	"email":email,
// 	"password":password	
// }
//   return this.http.post(url,body);
// }

myprofile(id)
{
  const url="http://localhost:8080/SampleJsonApp/getProfileById/"+id;
  return this.http.get(url);
}
getalllogs(){
    const url="http://localhost:8080/SampleJsonApp/logs";
    return this.http.get(url);
}
  getallnotifications(){
    const url="http://localhost:8080/SampleJsonApp/listNotification";
    return this.http.get(url);
  }

getToken(){
  return this.localStorageService.get("token");
}
  addNotification(formdata){
   /*  let headers = new Headers({ 'Accept': 'application/json' });
   headers.append('Access-Control-Allow-Headers', 'Content-Type');
   headers.append("token",this.localStorageService.get("token"));
   const options=new RequestOptions();
console.log("service data="+formdata);*/
const headers = new Headers({'Content-Type':'application/json'});
const options = new RequestOptions({headers:headers});   

const url="http://localhost:8080/SampleJsonApp/addNotification";
    return this.http.post(url,formdata,options);
}
mysession()
{
  return "hello"
}



}
