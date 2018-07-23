import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings';
@Injectable()
export class AssignmentEvaluationService{
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllAssignment(event,filter){
    if(!filter){
      filter=null;
    }
    const url=AppSettings['API_ENDPOINT']+"getListAssignmentEvaluation";//+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getAssignmentcount(){
  const url=AppSettings['API_ENDPOINT']+"getTotalLogs";
    return this.http.get(url);
}
getAllTeacher(){   
  const url=AppSettings['API_ENDPOINT']+"getAllUserSelect"
  return this.http.get(url);
}
addAssignment(formdata){   
    const url=AppSettings['API_ENDPOINT']+"addAssignmentEvaluation";
    return this.http.post(url,formdata);
  }
updateAssignment(formdata,studentId,assignId){ 
    const url=AppSettings['API_ENDPOINT']+"addAssignmentEvaluation/"+studentId+"/"+assignId;
    return this.http.put(url,formdata);
  }
getAssignmentById(studentId,assignId){   
  const url=AppSettings['API_ENDPOINT']+"getAssignmentEvaluationbyId/"+studentId+"/"+assignId;
  return this.http.get(url);
}
deleteAssignment(studentId,assignId){
    const url=AppSettings['API_ENDPOINT']+"deleteAssignmentEvaluation/"+studentId+"/"+assignId;
    return this.http.put(url,"");
}
assignmentAlreadyExist(assignmentName){//not in use currently
    const url=AppSettings['API_ENDPOINT']+"assignmentIsExist/"+assignmentName;
    return this.http.get(url);
}
}

