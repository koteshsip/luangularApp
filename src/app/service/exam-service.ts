import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class ExamService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllExam(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllExam/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getExamcount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addExam(formdata){   
    const url=this.baseurl+"addexam";
    return this.http.post(url,formdata);
  }
updateExam(formdata){ 
    const url=this.baseurl+"addexam/"+formdata.examId;
    return this.http.put(url,formdata);
  }
getExamById(id){   
  const url=this.baseurl+"getExamById/"+id;
  return this.http.get(url);
}
deleteExam(id){
    const url=this.baseurl+"deleteExam/"+id;
    return this.http.put(url,"");
}
examAlreadyExist(examName){
    const url=this.baseurl+"examIsExist/"+examName;
    return this.http.get(url);
}
}

