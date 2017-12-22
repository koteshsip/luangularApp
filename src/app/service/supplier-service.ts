import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class SupplierService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllSupplier(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllSupplier/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getSuppliercount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addSupplier(formdata){   
    const url=this.baseurl+"addSupplier";
    return this.http.post(url,formdata);
  }
updateSupplier(formdata){ 
    const url=this.baseurl+"addSupplier/"+formdata.supplierId;
    return this.http.put(url,formdata);
  }
getSupplierById(id){   
  const url=this.baseurl+"getSupplierById/"+id;
  return this.http.get(url);
}
deleteSupplier(id){
    const url=this.baseurl+"deleteSupplier/"+id;
    return this.http.put(url,"");
}
supplierAlreadyExist(supplierName){
    const url=this.baseurl+"supplierIsExist/"+supplierName;
    return this.http.get(url);
}
}
