import { Component, OnInit,ElementRef } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { User }            from './../../service/formData.model';
import { FormDataService }     from './../../service/formData.service';
import { UserServices }     from './../../service/user-service';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
    user: User;
    form: any;
    private IsExist:any;
    baseEncode:any;
    // private elem: ElementRef;
    constructor(private formDataService: FormDataService,private elem: 
        ElementRef,private myuser : UserServices,private router:Router
        ,private route: ActivatedRoute) {
    this.baseEncode=Base64.encode;
    }
id=this.route.snapshot.params;
Gender = ["Male","Female"];
// myuserA(arr){
//     for(var key in arr)
// {
//   var value = arr[key];
//   alert(key + " = " + value + '<br>');
// }
// }
    ngOnInit() {
    //    setTimeout(this.myuserA(this.Gender),500011);
        this.user = this.formDataService.getUser();
        this.user['gender']=this.Gender[0];
        if(this.id['id']){
            let myid=Base64.decode(this.id['id']);
        this.getUserById(myid);
        }else{
            this.formDataService.resetFormData();
        }
    }
getUserById(id){
this.myuser.getUserById(id).subscribe((data:any)=>{
this.user=data;
let profileData=data['tblProfile'];
this.user['profileId']=data.tblProfile.id;
this.user['addressId']=data.address.addressId;
profileData['extraActivities']=data.tblProfile.extraactivities;
this.formDataService.setProfile(profileData);
this.formDataService.getProfile();
let addressdata;
addressdata=data['address'];
// addressdata['state']=data.address.city.stateMaster.stateId;
// addressdata['countryId']=data.address.city.stateMaster.country.countryId;
// addressdata['city']=data.address.city.cityId;
// addressdata['zip']=data.address.zipCode;

this.formDataService.setAddress(addressdata);
//console.log("Address data"+this.formDataService.getAddress());
});
}
    save(form: any) {
        if (!form.valid) 
            return;
        this.formDataService.setUser(this.user);
    }



}
