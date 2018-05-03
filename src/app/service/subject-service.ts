import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class SubjectService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllSubject(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllSubject/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getSubjectcount(){
  const url=this.baseurl+"getTotalSubject";
    return this.http.get(url);
}
addSubject(formdata){   
    const url=this.baseurl+"addSubject";
    return this.http.post(url,formdata);
  }
updateSubject(formdata){ 
    const url=this.baseurl+"addSubject/"+formdata.subjectId;
    return this.http.put(url,formdata);
  }
getSubjectById(id){   
  const url=this.baseurl+"getSubjectById/"+id;
  return this.http.get(url);
}
deleteSubject(id){
    const url=this.baseurl+"deleteSubject/"+id;
    return this.http.put(url,"");
}
SubjectAlreadyExist(drawingName){
    const url=this.baseurl+"drawingIsExist/"+drawingName;
    return this.http.get(url);
}
}

