import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class DepartmentService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllDepartment(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllDepartment/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getDepartmentcount(){
  const url=this.baseurl+"getTotalDepartment";
    return this.http.get(url);
}
addDepartment(formdata){   
    const url=this.baseurl+"addDepartment";
    return this.http.post(url,formdata);
  }
updateDepartment(formdata){ 
    const url=this.baseurl+"addDepartment/"+formdata.departmentId;
    return this.http.put(url,formdata);
  }
getDepartmentById(id){   
  const url=this.baseurl+"getDepartmentById/"+id;
  return this.http.get(url);
}
deleteDepartment(id){
    const url=this.baseurl+"deleteDepartment/"+id;
    return this.http.put(url,"");
}
departmentAlreadyExist(departmentName){
    const url=this.baseurl+"departmentIsExist/"+departmentName;
    return this.http.get(url);
}
}

