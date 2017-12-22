import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class SectionService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllSection(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllSection/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getSectioncount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addSection(formdata){   
    const url=this.baseurl+"addSection";
    return this.http.post(url,formdata);
  }
updateSection(formdata){ 
    const url=this.baseurl+"addSection/"+formdata.sectionId;
    return this.http.put(url,formdata);
  }
getSectionById(id){   
  const url=this.baseurl+"getSectionById/"+id;
  return this.http.get(url);
}
deleteSection(id){
    const url=this.baseurl+"deleteSection/"+id;
    return this.http.put(url,"");
}
sectionAlreadyExist(sectionName){
    const url=this.baseurl+"sectionIsExist/"+sectionName;
    return this.http.get(url);
}
}
