import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http,Response,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import { AppSettings } from '../appSettings'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserServices {
private  baseurl=AppSettings['API_ENDPOINT'];
  constructor(public localStorageService: LocalStorageService,public http:HttpClient) { }

    public  addUser(formdata: any) {
        let _url: string = this.baseurl+'saveUserDetails';
        return this.http.post(_url, formdata)
        .catch(this._errorHandler);
    }
    public  addStudent(formdata: any) {
      let _url: string = this.baseurl+'saveStudentDetails';
      return this.http.post(_url, formdata)
      .catch(this._errorHandler);
  }
  getAllClassSection(){   
    const url=this.baseurl+"getAllClassSectionMasterSelect";
    return this.http.get(url);
  }
    public  updateUser(formdata: any,id) {
        let _url: string = this.baseurl+'saveUserDetails/'+id;
         return this.http.put(_url, formdata)
        .catch(this._errorHandler) ;
    }



private _errorHandler(error: Response) {
        console.error('Error Occured: ' + error);
        return Observable.throw(error || 'Some Error on Server Occured');
    }
 public  getAllState(event){
    if(!event){
        event=0;
    }
    const url=this.baseurl+"getAllStateSelect/"+event;
    return this.http.get(url);
  }
  
  public  getAllCountry(){
    const url=this.baseurl+"getAllCountrySelect";
    return this.http.get(url);
  }
  
  public  getAllCitySelect(event){
    if(!event){
        event=0;
    }
  const url=this.baseurl+"getAllCitySelect/"+event;
    return this.http.get(url);
  }
  getAllUsers(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"listOfAllUser/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
  getAllstudents(event,filter){
    if(!filter){
      filter=null;
    }
    const url=this.baseurl+"getAllStudents/"+event+"/"+Base64.encode(filter);
    return this.http.get(url);
  }
  getUserById(id){   
    const url=this.baseurl+"getUserById/"+id;
    return this.http.get(url);
  }
  userAlreadyExist(email){
    const url=this.baseurl+"userEmailExist/"+email;
    return this.http.get(url);
  }
  deleteUser(id){
    const url=this.baseurl+"deleteUser/"+id;
    return this.http.put(url,"");
  }
  getAllRole(){
    const url=this.baseurl+"getAllRoll";
    return this.http.get(url);
  }
  getAllUserSelect(){
    const url=AppSettings['API_ENDPOINT']+"getAllUserSelect";
      return this.http.get(url);
  }

}
