import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class TimeTableService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllTimeTable(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"GetAllTimeTables/"+event+"/"+filter;
    return this.http.get(url);
  }
getTimeTablecount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addTimeTable(formdata){   
    const url=this.baseurl+"addClassTimeTable";
    return this.http.post(url,formdata);
  }
updateTimeTable(formdata){ 
    const url=this.baseurl+"addClassTimeTable/"+formdata.timeTableId;
    return this.http.put(url,formdata);
  }
getTimeTableById(id){   
  const url=this.baseurl+"getClassTimeTableById/"+id;
  return this.http.get(url);
}
deleteTimeTable(id){
    const url=this.baseurl+"deleteClassTimeTable/"+id;
    return this.http.put(url,"");
}
timeTableAlreadyExist(timeTableName){// not in use
    const url=this.baseurl+"timeTableIsExist/"+timeTableName;
    return this.http.get(url);
}
}
