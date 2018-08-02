import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class NotesService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
  getAllSubjectUnitMaster(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllSubjectUnitMaster/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
  getAllNotes(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllNotes/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
  getAllSubjectUnitselect(){
  const url=this.baseurl+"getAllSubjectUnit";
    return this.http.get(url);
}
addTopic(formdata){
    const url=this.baseurl+"InsertUnitTopic";
    return this.http.post(url,formdata);
  }
updateTopic(formdata){ 
    const url=this.baseurl+"InsertUnitTopic";
    return this.http.put(url,formdata);
  }
getTopicById(subjectId,unitId,topicId){   
  const url=this.baseurl+"getSubjectUnitMasterById/"+subjectId+"/"+unitId+"/"+topicId;
  return this.http.get(url);
}
getAllSubjectUnit(){
  const url=this.baseurl+"getAllSubjectUnit";
  return this.http.get(url);
}
getAllUserSelect(){
  const url=AppSettings['API_ENDPOINT']+"getAllUserSelect";
    return this.http.get(url);
}
// deleteTransport(id){
//     const url=this.baseurl+"deleteTransport/"+id;
//     return this.http.put(url,"");
// }
addNotesCategory(formdata){
    const url=this.baseurl+"InsertNotesCategory";
    return this.http.post(url,formdata);
}
editNotes(formdata){
  const url=this.baseurl+"editNotes/"+formdata.id;
  return this.http.post(url,formdata);
}
getNotesMasterById(id){
  const url=AppSettings['API_ENDPOINT']+"getNotesMasterById/"+id;
    return this.http.get(url);
}
// transportAlreadyExist(transportName){// not in use
//     const url=this.baseurl+"transportIsExist/"+transportName;
//     return this.http.get(url);
// }
}
