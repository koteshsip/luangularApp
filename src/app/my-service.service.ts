import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
@Injectable()
export class MyServiceService {
private  baseurl="http://localhost:8080/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }


myprofile(id){
  const url=this.baseurl+"SampleJsonApp/getProfileById/"+id;
  return this.http.get(url);
}
getalllogs(event){
    const url=this.baseurl+"SampleJsonApp/logs/"+event;
    return this.http.get(url);
}
  getallnotifications(){
    const url=this.baseurl+"SampleJsonApp/listNotification";
    return this.http.get(url);
  }

getToken(){
  return this.localStorageService.get("token");
}
  addNotification(formdata){
    // const headers = new Headers({'Content-Type':'application/json'});
    // const options = new RequestOptions({headers:headers});
    //  headers.append('token', `${this.localStorageService.get("token")}`);   
    const url=this.baseurl+"SampleJsonApp/addNotification";
    return this.http.post(url,formdata);
  }
updateNotification(formdata){
    // const headers = new Headers({'Content-Type':'application/json'});
    // const options = new RequestOptions({headers:headers});
    //  headers.append('token', `${this.localStorageService.get("token")}`);   
    const url=this.baseurl+"SampleJsonApp/addNotification/"+formdata.id;
    return this.http.put(url,formdata);
  }
getNotificationById(id){
  // const headers = new Headers({'Content-Type':'application/json'});
  //   const options = new RequestOptions({headers:headers});
  //    headers.append('token', `${this.localStorageService.get("token")}`);   
  const url=this.baseurl+"SampleJsonApp/getNotificationById/"+id;
  return this.http.get(url);
}
deleteNotification(id){
    // const headers = new Headers({'Content-Type':'application/json'});
    // const options = new RequestOptions({headers:headers});
    // headers.append('token', `${this.localStorageService.get("token")}`);
    const url=this.baseurl+"SampleJsonApp/deleteNotification/"+id;
    return this.http.delete(url);
}
notifyCodeExist(NotifyCode){
    const url=this.baseurl+"SampleJsonApp/NotifCodeIsExist/"+NotifyCode;
    return this.http.get(url);
}

mysession(){
  return "hello"
}
}
