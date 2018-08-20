import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Address }            from './../add-student/formData.model';
import { StudentDataService }     from './../add-student/formData.service';
import { UserServices } from './../../service/user-service';
import { LocalStorageService } from 'angular-2-local-storage';
import { User } from '../../_models';

@Component({
  selector: 'app-add-student-address',
  templateUrl: './add-student-address.component.html',
  styleUrls: ['./add-student-address.component.css']
})
export class AddStudentAddressComponent implements OnInit {
  address: Address;
  formData:FormData
  form: any;
  statedata:any;
  citydata:any;
  countrydata:any;
  constructor(public router: Router,public mystorage:LocalStorageService,private formDataService: StudentDataService,private user: UserServices,private route:ActivatedRoute) {
  }
  id=this.route.snapshot.params;
  ngOnInit() {
    this.getAllCountry();
    this.getAllCitySelect();
    this.getAllState();
    this.address = this.formDataService.getAddress();
  }
  save(form: any) {
    // if (!form.valid) 
    //     return;
    this.formDataService.setAddress(this.address);
    let address= this.formDataService.getAddress();
    let profile=this.formDataService.getProfile();
    let user=this.formDataService.getUser();
    let formData = new FormData();
    // if(user.profilePic){
    //     formData.append("selectFile",user.profilePic,user.profilePic.name);
    // }
    formData.append('PROFILEDATA', new Blob([JSON.stringify({
      userId:user.userId,
      roleId:"S",
      emailId:user.emailId,
      firstName:user.firstName,
      middleName:user.middleName,
      lastName:user.lastName,
      mobilePhone:user.mobilePhone,
      alternatePhone:user.alterPhone,
      correspondenceAddress1:address.correspondenceAddress1,
      correspondenceAddress2:address.correspondenceAddress2,
      correspondenceAddress3:address.correspondenceAddress3,
      correspondenceCity:address.correspondenceCity,
      correspondenceState:address.correspondenceState,
      permanentZip:address.permanentZip,
      correspondenceZip:address.correspondenceZip,
      userOrganisationId:"S",
      currentPassword:address.correspondenceZip,
      studentId:address.studentId,
      classId:user.classId,
      sectionId:"",
      classTeacher:user.classTeacher,
      academicYear:user.academicYear,
      gradeObtained:user.gradeObtained,
      isPromoted:user.isPromoted,
      academicReview:user.academicReview,
      gender:user.gender,
      permanentAddressLine1:address.permanentAddressLine1,
      permanentAddressLine2:address.permanentAddressLine1,
      permanentAddressLine3:address.permanentAddressLine1,
      permanentCity:address.permanentCity,
      permanentState:address.permanentState,
      fatherFirstName:profile.fatherFirstName,
      fatherMiddleName:profile.fatherMiddleName,
      fatherLastName:profile.fatherLastName,
      motherFirstName:profile.motherFirstName,
      motherMiddleName:profile.motherMiddleName,
      motherLastName:profile.motherLastName,
      guardianFirstName:profile.guardianFirstName,
      guardianMiddleName:profile.guardianMiddleName,
      guardianLastName:profile.guardianLastName,
      fatherContact:profile.fatherContact,
      motherContact:profile.motherContact,
      guardianContact:profile.guardianContact,
      admissionDate:profile.admissionDate,
      previousSchool:profile.previousSchool    
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
          this.user.addStudent(formData).subscribe((data:any)=>{
              alert("add called");
              this.formDataService.resetFormData();
              this.mystorage.set("message","Record add Successfully");
             // this.router.navigate(['/admin/list-of-users']);
          });
      }
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
