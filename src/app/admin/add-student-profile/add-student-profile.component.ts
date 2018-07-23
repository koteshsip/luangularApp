import { Component, OnInit,ElementRef } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Profile }            from '../add-student/formData.model';
import { StudentDataService }     from '../add-student/formData.service';
import { UserServices }     from './../../service/user-service';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-add-student-profile',
  templateUrl: './add-student-profile.component.html',
  styleUrls: ['./add-student-profile.component.css']
})
export class AddStudentProfileComponent implements OnInit {

  profile: Profile;
  form: any;
  private IsExist:any;
  myprofileType:any;
  constructor(private myuser:UserServices,private formDataService: StudentDataService,private elem: ElementRef,private route: ActivatedRoute) {
  }
  id=this.route.snapshot.params;
  ngOnInit() {
     this.profile = this.formDataService.getProfile();
    this.myprofileType=this.profile['profileType'];
    //this.profile['profileType']=this.roleId[0];
    //this.getAllRole();
    this.profile['profileId'];
  }
  save(form: any) {
    if (!form.valid) 
        return;    
    // let files = this.elem.nativeElement.querySelector('#profileImage').files;
    // let formData = new FormData();
    // let file = files[0];
    // formData.append('profileImage', file, file.name);
    // this.profile.profileImage=file;
    this.formDataService.setProfile(this.profile);
}
}
