import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import {AppSettings} from '../appSettings'
import { Base64 } from 'js-base64';
@Injectable()
export class AttendenceService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllAttendence(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllAttendence/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getAttendencecount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addAttendence(formdata){   
    const url=this.baseurl+"addattendence";
    return this.http.post(url,formdata);
  }
updateAttendence(formdata){ 
    const url=this.baseurl+"addattendence/"+formdata.attendenceId;
    return this.http.put(url,formdata);
  }
getAttendenceById(id){   
  const url=this.baseurl+"getAttendenceById/"+id;
  return this.http.get(url);
}
deleteAttendence(id){
    const url=this.baseurl+"deleteAttendence/"+id;
    return this.http.put(url,"");
}
attendenceAlreadyExist(attendenceName){
    const url=this.baseurl+"attendenceIsExist/"+attendenceName;
    return this.http.get(url);
}
}

