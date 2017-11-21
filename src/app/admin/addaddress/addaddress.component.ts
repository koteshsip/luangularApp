import { Component, OnInit } from '@angular/core';
import { Address }            from './../../service/formData.model';
import { FormDataService }     from './../../service/formData.service';
import { UserServices } from './../../service/user-service';
@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css']
})
export class AddaddressComponent implements OnInit {
title = 'Where do you live?';
    address: Address;
    form: any;
    
    constructor(private formDataService: FormDataService,private user: UserServices) {
    }

    ngOnInit() {
        this.address = this.formDataService.getAddress();
        console.log('Address feature loaded!');
    }

    save(form: any) {
        // if (!form.valid) 
        //     return;
        this.formDataService.setAddress(this.address);
        let address= this.formDataService.getAddress();
        let profile=this.formDataService.getProfile();
        let user=this.formDataService.getUser();

        let formData = new FormData();
        profile.profileImage.name
        formData.append("selectFile",profile.profileImage,profile.profileImage.name);
        formData.append('PROFILEDATA', new Blob([JSON.stringify({
                "profileName": profile.profileName,
                "profileType":profile.profileType,
                "achievment":profile.achievment,
                "extraActivities":profile.extraActivities               
            })], {
                type: "application/json"
            }));
		  formData.append('USERDATA', new Blob([JSON.stringify({
                "email":user.email,
                "firstName":user.firstName,
                "middleName":user.middleName,
                "lastName":user.lastName,
                "mobile": user.mobile                
            })], {
                type: "application/json"
            }));
            formData.append('AddressDATA', new Blob([JSON.stringify({
                "city":address.city,
                "communicationAddress":address.communicationAddress,
                "permanentAddress":address.permanentAddress,
                "state":address.state,
                "zip": address.zip                
            })], {
                type: "application/json"
            }));
        this.user.uploadImage(formData).subscribe((data:any)=>{
          console.log("data=pp"+data);
        });
        console.log("this formDataService getFormData =="+user.userImage);
        //console.log("this formDataService getFormData =="+this.formDataService.getFormData);
    }
}
