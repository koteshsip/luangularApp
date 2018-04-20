import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class PurchaseService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllPurchase(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllPurchase/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getPurchasecount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addPurchase(formdata){   
    const url=this.baseurl+"addPurchase";
    return this.http.post(url,formdata);
  }
updatePurchase(formdata){ 
    const url=this.baseurl+"addPurchase/"+formdata.purchaseId;
    return this.http.put(url,formdata);
  }
getPurchaseById(id){   
  const url=this.baseurl+"getPurchaseById/"+id;
  return this.http.get(url);
}
deletePurchase(id){
    const url=this.baseurl+"deletePurchase/"+id;
    return this.http.put(url,"");
}
purchaseAlreadyExist(purchaseName){// not in use
    const url=this.baseurl+"purchaseIsExist/"+purchaseName;
    return this.http.get(url);
}
}
