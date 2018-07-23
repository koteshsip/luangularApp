import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class CountryService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService
    ,public http:HttpClient) { }
getAllCountry(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllCountry/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getCountrycount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addCountry(formdata){   
    const url=this.baseurl+"addcountry";
    return this.http.post(url,formdata);
  }
updateCountry(formdata){ 
    const url=this.baseurl+"addcountry/"+formdata.countryId;
    return this.http.put(url,formdata);
  }
getCountryById(id){   
  const url=this.baseurl+"getCountryById/"+id;
  return this.http.get(url);
}
deleteCountry(id){
    const url=this.baseurl+"deleteCountry/"+id;
    return this.http.put(url,"");
}
countryAlreadyExist(countryName){
    const url=this.baseurl+"countryIsExist/"+countryName;
    return this.http.get(url);
}
}
