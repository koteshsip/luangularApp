import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import {AppSettings} from '../appSettings'
@Injectable()
export class InventoryService {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllInventory(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllInventory/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getInventorycount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addInventory(formdata){   
    const url=this.baseurl+"addInventory";
    return this.http.post(url,formdata);
  }
updateInventory(formdata){ 
    const url=this.baseurl+"addInventory /"+formdata.inventoryId;
    return this.http.put(url,formdata);
  }
getInventoryById(id){   
  const url=this.baseurl+"getInventoryById/"+id;
  return this.http.get(url);
}
deleteInventory(id){
    const url=this.baseurl+"deleteInventory/"+id;
    return this.http.put(url,"");
}
inventoryAlreadyExist(inventoryName){//not in use
    const url=this.baseurl+"inventoryIsExist/"+inventoryName;
    return this.http.get(url);
}
}

