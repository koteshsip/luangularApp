import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings';
@Injectable()
export class AssignmentService {
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllAssignment(event,filter){
    if(!filter){
      filter=null;
    }
    const url=AppSettings['API_ENDPOINT']+"getAllAssignments";//+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getAssignmentcount(){
  const url=AppSettings['API_ENDPOINT']+"getTotalLogs";
    return this.http.get(url);
}
getAllSubjectMasterSelect(){
  const url=AppSettings['API_ENDPOINT']+"getAllSubjectMasterSelect";
    return this.http.get(url);
}
getAllUserSelect(){
  const url=AppSettings['API_ENDPOINT']+"getAllUserSelect";
    return this.http.get(url);
}
addAssignment(formdata){   
    const url=AppSettings['API_ENDPOINT']+"addAssignmentMaster";
    return this.http.post(url,formdata);
  }
updateAssignment(formdata,assignmentId,classId,sectionId){ 
    const url=AppSettings['API_ENDPOINT']+"addAssignmentMaster/"+assignmentId+"/"+classId+"/"+sectionId;
    return this.http.put(url,formdata);
  }
getAssignmentById(assignmentId,classId,sectionId){   
  const url=AppSettings['API_ENDPOINT']+"getAssignmentMasterbyId/"+assignmentId+"/"+classId+"/"+sectionId;
  return this.http.get(url);
}
deleteAssignment(id){
    const url=AppSettings['API_ENDPOINT']+"deleteAssignment/"+id;
    return this.http.put(url,"");
}
assignmentAlreadyExist(assignmentName){//not in use currently
    const url=AppSettings['API_ENDPOINT']+"assignmentIsExist/"+assignmentName;
    return this.http.get(url);
}
getAllClassSection(){   
  const url=AppSettings['API_ENDPOINT']+"getAllClassSectionMasterSelect";
  return this.http.get(url);
}
}

