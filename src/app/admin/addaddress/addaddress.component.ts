import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Address }            from './../../service/formData.model';
import { FormDataService }     from './../../service/formData.service';
import { UserServices } from './../../service/user-service';
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css']
})
export class AddaddressComponent implements OnInit {
    address: Address;
    formData:FormData
    form: any;
    statedata:any;
    citydata:any;
    countrydata:any;
    constructor(public router: Router,public mystorage:LocalStorageService,private formDataService: FormDataService,private user: UserServices,private route:ActivatedRoute) {
    }
id=this.route.snapshot.params;
    ngOnInit() {
        this.address = this.formDataService.getAddress();
        if(this.id['id']){
        this.address['userId']=this.id['id']
        }
        console.log('Address feature loaded!');
        // this.getAllCountry();
        // this.getAllCitySelect();
        // this.getAllState();
    }

    save(form: any) {
        // if (!form.valid) 
        //     return;
        this.formDataService.setAddress(this.address);
        let address= this.formDataService.getAddress();
        let profile=this.formDataService.getProfile();
        let user=this.formDataService.getUser();
        let formData = new FormData();
        if(user.profilePic){
            formData.append("selectFile",user.profilePic,user.profilePic.name);
        }
        formData.append('PROFILEDATA', new Blob([JSON.stringify({
            userId: "",
            userOrganisationId: "s",
            emailId : profile.emailId,
            currentPassword: profile.currentPassword,
            alterPhone:profile.alterPhone,
            //passwordLastChangeDate:"2018-05-10T18:30:00.000+0000",
            roleId:profile.role,
            firstName:user.firstName,
            middleName:user.middleName,
            lastName:user.lastName,
            dateOfBirth:user.dateOfBirth,
            mobilePhone:user.mobilePhone,
            alternatePhone:user.alternatePhone,
            qulaificationDegree:user.qulaificationDegree,
            degreeOfSpecilization:user.degreeOfSpecilization,
            univFrom:user.univFrom,
            deg_pass_year:user.deg_pass_year,
            correspondenceAddress1:profile.correspondenceAddress1,
            correspondenceAddress2:profile.correspondenceAddress2,
            correspondenceAddress3:profile.correspondenceAddress3,
            correspondenceCity:profile.correspondenceCity,
            correspondenceState:profile.correspondenceState,
            permanentZip:profile.permanentZip,
            correspondenceZip:profile.correspondenceZip,
            employeeId:user.employeeId,
            dateOfJoining:user.dateOfJoining,
            dateOfLeaving:user.dateOfLeaving,
            gender:user.gender,
            addressLine1:address.addressLine1,
            addressLine2:address.addressLine2,
            addressLine3:address.addressLine3,	
            perCity:address.perCity,
            perState:address.perState,
            country:address.country,
            fatherFirstName:address.fatherFirstName,	
            fatherMiddleName:address.fatherMiddleName,
            fatherLastName:address.fatherLastName,
            motheFirstName:address.motheFirstName,
            motherMiddleName:address.motherMiddleName,
            motherLastname:address.motherLastname,
            fatherContact:address.fatherContact,
            motherContact:address.motherContact,
            // useField1:"zxfvxz",
            // useField2:"vxczxv",
            // useField3:"xzfcxz",
            // useField4:"zxczx",
            // useField5:"zxfvzxv",
            // useField6:"dfssd",
                // userId: user.userId,
                // id: user.profileId,
                // addressId: user.addressId,
                // profileName: profile.profileName,
                // profileType:profile.profileType,
                // achievment:profile.achievment,
                // extraactivities:profile.extraActivities,
                // email:user.email,
                // userDesc: user.userDesc,
                // password: user.Password,
                // firstName:user.firstName,
                // middleName:user.middleName,
                // lastName:user.lastName,
                // mobile: user.mobile,
                // attendance: user.attendance,
                // books: user.books,
                // class: user.class,
                // drawing: user.drawing,
                // news: user.news,
                // notes: user.notes,
                // notify: user.notify,
                // subject: user.subject,
                // timetable: user.timetable,
                // test: user.test,
                // video: user.video,
                // communicationAddress:this.address.communicationAddress,
                // permanentAddress:this.address.permanentAddress,
                // zipCode:this.address.zip, 
                // city:{"cityId":this.address.city}              
            })], {
                type: "application/json"
            }));
            if(this.id['id']){
                this.user.updateUser(formData,this.id['id']).subscribe((data:any)=>{
                   this.formDataService.resetFormData();
                    this.mystorage.set("message","Record Updated Successfully");
                    this.router.navigate(['/admin/list-of-users']);
                });
            }else{
                this.user.addUser(formData).subscribe((data:any)=>{
                    this.formDataService.resetFormData();
                    this.mystorage.set("message","Record add Successfully");
                    this.router.navigate(['/admin/list-of-users']);
                });
            }
    }

}
