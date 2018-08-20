import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import {AppSettings} from '../appSettings';
@Injectable()
export class ClassSectionMasterService {
  private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,
    public http:HttpClient) { }
  listOfAllClassSectionMaster(){
    const url=this.baseurl+"listOfAllClassSectionMaster";
    return this.http.get(url);
  }
// getSubjectcount(){
//   const url=this.baseurl+"getTotalSubject";
//     return this.http.get(url);
// }
addClassSectionMaster(formdata){   
    const url=this.baseurl+"addClassSectionMaster";
    return this.http.post(url,formdata);
  }
updateClassSectionMaster(formdata,classId,sectionId){ 
  console.log("classId="+classId);
  console.log("sectionId="+sectionId);
    const url=this.baseurl+"addClassSectionMaster/"+classId+"/"+sectionId;
    return this.http.put(url,formdata);
  }
  getClassSectionMasterbyId(classId,sectionId){   
  const url=this.baseurl+"getClassSectionMasterbyId/"+classId+"/"+sectionId;
  return this.http.get(url);
}
}
