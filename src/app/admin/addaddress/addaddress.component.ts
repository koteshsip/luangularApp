import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
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
    statedata:any;
    citydata:any;
    countrydata:any;
    constructor(private formDataService: FormDataService,private user: UserServices,private route:ActivatedRoute) {
    }
id=this.route.snapshot.params;
    ngOnInit() {
        this.address = this.formDataService.getAddress();
        if(this.id['id']){
        this.address['userId']=this.id['id']
        }
        console.log('Address feature loaded!');
        this.getAllCountry();
        this.getAllCitySelect();
        this.getAllState();
    }

    save(form: any) {
        // if (!form.valid) 
        //     return;
        this.formDataService.setAddress(this.address);
        //let address= this.formDataService.getAddress();
        let profile=this.formDataService.getProfile();
        let user=this.formDataService.getUser();
        let formData = new FormData();
        if(profile.profileImage){
            formData.append("selectFile",profile.profileImage,profile.profileImage.name);
        }
        formData.append('PROFILEDATA', new Blob([JSON.stringify({
                userId: user.userId,
                id: user.profileId,
                addressId: user.addressId,
                profileName: profile.profileName,
                profileType:profile.profileType,
                achievment:profile.achievment,
                extraactivities:profile.extraActivities,
                email:user.email,
                userDesc: user.userDesc,
                password: user.Password,
                firstName:user.firstName,
                middleName:user.middleName,
                lastName:user.lastName,
                mobile: user.mobile,
                attendance: user.attendance,
                books: user.books,
                class: user.class,
                drawing: user.drawing,
                news: user.news,
                notes: user.notes,
                notify: user.notify,
                subject: user.subject,
                timetable: user.timetable,
                test: user.test,
                video: user.video,
                communicationAddress:this.address.communicationAddress,
                permanentAddress:this.address.permanentAddress,
                zipCode:this.address.zip, 
                city:{"cityId":this.address.city}              
            })], {
                type: "application/json"
            }));
            if(this.id['id']){
                this.user.updateUser(formData,this.id['id']).subscribe((data:any)=>{
                console.log("data=pp"+data);
                });
            }else{
                this.user.addUser(formData).subscribe((data:any)=>{
                console.log("data=pp"+data);
                });
            }
            // this.user.addUser(formData).subscribe((data:any)=>{
            //     console.log("data=pp"+data);
            //     });
    }

    public  getAllState(){
        this.user.getAllState(0).subscribe((data:any)=>{
        this.statedata=data;
        });
    }
  
    public  getAllCountry(){
            this.user.getAllCountry().subscribe((data:any)=>{
            this.countrydata=data;
        });
    }
  
    public  getAllCitySelect(){
            this.user.getAllCitySelect(0).subscribe((data:any)=>{
            this.citydata=data;
            });
    }
    public getStateByCountryId(event){
        this.user.getAllState(event).subscribe((data:any)=>{
            this.statedata=data;
            });
    }
    public  getAllCityByStateId(event){
            this.user.getAllCitySelect(event).subscribe((data:any)=>{
            this.citydata=data;
            });
    }
}
