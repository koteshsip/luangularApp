import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
@Injectable()
export class DrawingService {
private  baseurl="http://localhost:8080/lujavaapp/";
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }
getAllDrawing(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllDrawing/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
getDrawingcount(){
  const url=this.baseurl+"getTotalLogs";
    return this.http.get(url);
}
addDrawing(formdata){   
    const url=this.baseurl+"adddrawing";
    return this.http.post(url,formdata);
  }
updateDrawing(formdata){ 
    const url=this.baseurl+"adddrawing/"+formdata.drawingId;
    return this.http.put(url,formdata);
  }
getDrawingById(id){   
  const url=this.baseurl+"getDrawingById/"+id;
  return this.http.get(url);
}
deleteDrawing(id){
    const url=this.baseurl+"deleteDrawing/"+id;
    return this.http.put(url,"");
}
drawingAlreadyExist(drawingName){
    const url=this.baseurl+"drawingIsExist/"+drawingName;
    return this.http.get(url);
}
}

