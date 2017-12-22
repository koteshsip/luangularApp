import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class AssignmentService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllAssignment(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllAssignment/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getAssignmentcount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addAssignment(formdata){   
    const url=this.baseurl+"addAssignment";
    return this.http.post(url,formdata);
  }
updateAssignment(formdata){ 
    const url=this.baseurl+"addAssignment/"+formdata.assignmentId;
    return this.http.put(url,formdata);
  }
getAssignmentById(id){   
  const url=this.baseurl+"getAssignmentById/"+id;
  return this.http.get(url);
}
deleteAssignment(id){
    const url=this.baseurl+"deleteAssignment/"+id;
    return this.http.put(url,"");
}
assignmentAlreadyExist(assignmentName){//not in use currently
    const url=this.baseurl+"assignmentIsExist/"+assignmentName;
    return this.http.get(url);
}
}

