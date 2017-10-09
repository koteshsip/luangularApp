import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MyServiceService {

  constructor(public http:HttpClient) { }
 
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

myprofile(id)
{
  //const url='http://localhost/api/insert.php';
  const url="http://localhost:8080/SampleJsonApp/getProfileById/"+id;
  return this.http.get(url);
}

mysession()
{
  return "hello"
}



}
