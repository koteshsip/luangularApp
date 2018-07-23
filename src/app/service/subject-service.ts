import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class SubjectService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllSubject(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"listOfAllSubjectMaster/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getSubjectcount(){
  const url=this.baseurl+"getTotalSubject";
    return this.http.get(url);
}
addSubject(formdata){   
    const url=this.baseurl+"addSubjectMaster";
    return this.http.post(url,formdata);
  }
updateSubject(formdata,subjectId,textBookISBN){ 
    const url=this.baseurl+"addSubjectMaster/"+subjectId+"/"+textBookISBN;
    return this.http.put(url,formdata);
  }
getSubjectById(SubjectId,textBookISBN){   
  const url=this.baseurl+"getSubjectMasterbyId/"+SubjectId+"/"+textBookISBN;
  return this.http.get(url);
}
deleteSubject(id){
    const url=this.baseurl+"deleteSubjectMaster/"+id;
    return this.http.put(url,"");
}
SubjectAlreadyExist(drawingName){
    const url=this.baseurl+"drawingIsExist/"+drawingName;
    return this.http.get(url);
}
}

