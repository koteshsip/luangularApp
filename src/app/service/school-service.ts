import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class SchoolService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllSchool(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllSchool/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getSchoolcount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addSchool(formdata){   
    const url=this.baseurl+"addSchool";
    return this.http.post(url,formdata);
  }
updateSchool(formdata){ 
    const url=this.baseurl+"addSchool/"+formdata.schoolId;
    return this.http.put(url,formdata);
  }
getSchoolById(id){   
  const url=this.baseurl+"getSchoolById/"+id;
  return this.http.get(url);
}
deleteSchool(id){
    const url=this.baseurl+"deleteSchool/"+id;
    return this.http.put(url,"");
}
schoolAlreadyExist(schoolName){// not in use
    const url=this.baseurl+"schoolIsExist/"+schoolName;
    return this.http.get(url);
}
}
