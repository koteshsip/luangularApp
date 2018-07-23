import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class ExamDetailService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllExamDetail(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllExamDetail/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getExamDetailcount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addExamDetail(formdata){   
    const url=this.baseurl+"addExamDetail";
    return this.http.post(url,formdata);
  }
updateExamDetail(formdata){ 
    const url=this.baseurl+"addExamDetail/"+formdata.examDetailId;
    return this.http.put(url,formdata);
  }
getExamDetailById(id){   
  const url=this.baseurl+"getExamDetailById/"+id;
  return this.http.get(url);
}
deleteExamDetail(id){
    const url=this.baseurl+"deleteExamDetail/"+id;
    return this.http.put(url,"");
}
examDetailAlreadyExist(examDetailName){// not in use
    const url=this.baseurl+"examDetailIsExist/"+examDetailName;
    return this.http.get(url);
}
}

