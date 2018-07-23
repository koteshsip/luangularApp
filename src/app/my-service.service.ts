import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';

@Injectable()
export class MyServiceService {
private  baseurl="http://107.180.76.152:8080/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }


myprofile(id){
  const url=this.baseurl+"lujavaapp/getProfileById/"+id;
  return this.http.get(url);
}
getalllogs(event,filter){
  if(!filter){
    filter=null;
  }
    const url=this.baseurl+"lujavaapp/logs/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
}
  getallnotifications(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"ListNotification/"+event+"/"+filter;
    return this.http.get(url);
  }
getnotificationcount(){
  const url=this.baseurl+"lujavaapp/getAllNotification";
    return this.http.get(url);
}
  getlogcount(){
  const url=this.baseurl+"lujavaapp/getTotalLogs";
    return this.http.get(url);
}
getToken(){
  return this.localStorageService.get("token");
}
  addNotification(formdata){
    // const headers = new Headers({'Content-Type':'application/json'});
    // const options = new RequestOptions({headers:headers});
    //  headers.append('token', `${this.localStorageService.get("token")}`);   
    const url=this.baseurl+"lujavaapp/addNotification";
    return this.http.post(url,formdata);
  }
updateNotification(formdata){
    // const headers = new Headers({'Content-Type':'application/json'});
    // const options = new RequestOptions({headers:headers});
    //  headers.append('token', `${this.localStorageService.get("token")}`);   
    const url=this.baseurl+"lujavaapp/addNotification/"+formdata.id;
    return this.http.put(url,formdata);
  }
getNotificationById(id){
  // const headers = new Headers({'Content-Type':'application/json'});
  //   const options = new RequestOptions({headers:headers});
  //    headers.append('token', `${this.localStorageService.get("token")}`);   
  const url=this.baseurl+"lujavaapp/getNotificationById/"+id;
  return this.http.get(url);
}
deleteNotification(id){
    // const headers = new Headers({'Content-Type':'application/json'});
    // const options = new RequestOptions({headers:headers});
    // headers.append('token', `${this.localStorageService.get("token")}`);
    const url=this.baseurl+"lujavaapp/deleteNotification/"+id;
    return this.http.delete(url);
}
notifyCodeExist(NotifyCode){
    const url=this.baseurl+"lujavaapp/NotifCodeIsExist/"+NotifyCode;
    return this.http.get(url);
}

mysession(){
  return "hello"
}
chagePassword(id: any,token: string){
  const url=this.baseurl+"lujavaapp/changePassword/"+id+"/"+token;
  return this.http.get(url)
};
resetPassword(formdata){
const url=this.baseurl+"lujavaapp/resetPassword";
    return this.http.post(url,formdata);
}
savePassword(password,userid){
  let formdata={"password":password,"id":userid};
    const url=this.baseurl+"lujavaapp/updatePassword";
    return this.http.put(url,formdata);
}


}
