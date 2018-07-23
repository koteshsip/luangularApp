import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { AppSettings } from '../appSettings';
import { Base64 } from 'js-base64';
@Injectable()
export class ClassSubjectService {
  private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { 

  }
  listOfAllClassSubject(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"listOfAllClassSubject";//+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getSubjectcount(){
  const url=this.baseurl+"getTotalSubject";
    return this.http.get(url);
}
addSubject(formdata){   
    const url=this.baseurl+"addClassSubject";
    return this.http.post(url,formdata);
  }
updateSubject(formdata,classId,sectionId){ 
    const url=this.baseurl+"addClassSubject/"+classId+"/"+sectionId;
    return this.http.put(url,formdata);
  }
getSubjectById(classId,sectionId){   
  const url=this.baseurl+"getClassSubjectbyId/"+classId+"/"+sectionId;
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
getAllTeacher(){   
  const url=this.baseurl+"getAllUserSelect"
  return this.http.get(url);
}
getAllClassSection(){   
  const url=this.baseurl+"getAllClassSectionMasterSelect";
  return this.http.get(url);
}
getAllSubjectMaster(){   
  const url=this.baseurl+"getAllSubjectMasterSelect";
  return this.http.get(url);
}
}

