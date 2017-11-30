import { Component, OnInit } from '@angular/core';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { MyServiceService } from './../../my-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
private data:any;
private imagePath;
mydata:any;
mdata:any;
profileType: any;
profileName: any;
achievment: any;
  constructor(public mystorage:LocalStorageService,public myservice:MyServiceService) { }
  ngOnInit() {    
    this.getprofiledata();  
  }
  getprofiledata(){
    this.imagePath="assets/img/user2-160x160.jpg";
    this.mdata=localStorage.getItem('currentUser');
    //console.log("mdata==="+this.mdata);
    this.mydata=JSON.parse(this.mdata).data;
    //console.log("mdata profileName==="+profileName);
   //let loginId=this.mydata['userId'];  
//     this.myservice.myprofile(loginId).subscribe((newdata:any)=>{
//       this.data=newdata;
//       this.achievment=newdata.achievment;
//       this.profileType=newdata.profileType;
//       this.profileName=newdata.profileName;
//  });
  }
}
