import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class CityService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllCity(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllCity/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getCityCount(){
  const url=this.baseurl+"getTotalLogs";//need to change the url
    return this.http.get(url);
}
addCity(formdata){  
  let body={tempStateId:formdata.stateId,cityName:formdata.cityName} 
  const url=this.baseurl+"addCity";
    return this.http.post(url,body);
  }
updateCity(formdata){ 
  let body={tempStateId:formdata.stateId,cityName:formdata.cityName}
    const url=this.baseurl+"addCity/"+formdata.cityId;
    return this.http.put(url,body);
  }
getCityById(id){   
  const url=this.baseurl+"getCityById/"+id;
  return this.http.get(url);
}
deleteCity(id){
    const url=this.baseurl+"deleteCity/"+id;
    return this.http.put(url,"");
}
cityAlreadyExist(cityName,stateId){
    const url=this.baseurl+"cityIsExist/"+cityName+"/"+stateId;
    return this.http.get(url);
}
  getAllState(){
    let countryId=0;
    const url=this.baseurl+"getAllStateSelect/"+countryId;
    return this.http.get(url);
  }
}
