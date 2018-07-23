import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class TblClassService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllClass(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllClass/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getTblClasscount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addClass(formdata){   
    const url=this.baseurl+"addClass";
    return this.http.post(url,formdata);
  }
updateClass(formdata){ 
    const url=this.baseurl+"addClass/"+formdata.tblClassId;
    return this.http.put(url,formdata);
  }
getTblClassById(id){   
  const url=this.baseurl+"getClassById/"+id;
  return this.http.get(url);
}
deleteTblClass(id){
    const url=this.baseurl+"deleteClass/"+id;
    return this.http.put(url,"");
}
tblClassAlreadyExist(tblClassName){// not in use
    const url=this.baseurl+"tblClassIsExist/"+tblClassName;
    return this.http.get(url);
}
}
