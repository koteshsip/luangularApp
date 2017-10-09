import { Component, OnInit } from '@angular/core';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { MyServiceService } from './../../my-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private data;
  constructor(public mystorage:LocalStorageService,public myservice:MyServiceService) { }
  ngOnInit() {
    let mtoken=this.mystorage.get("token");
    let loginId=this.mystorage.get("loginId");
    this.getpeofiledata(loginId);  
    AdminLTE.init();
  }

  getpeofiledata(loginId){
    this.myservice.myprofile(loginId).subscribe((data:any)=>{
      this.data=data;
      this.data['email']=this.mystorage.get("email");
      this.data['firstName']=this.mystorage.get("firstName");
      this.data['lastName']=this.mystorage.get("lastName");
      this.data['middleName']=this.mystorage.get("middleName");
      this.data['mobile']=this.mystorage.get("mobile");
      this.data['userDesc']=this.mystorage.get("userDesc"); 
      console.log(this.data);     
});
  }
}
