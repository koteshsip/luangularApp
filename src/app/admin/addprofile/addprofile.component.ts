import { Component, OnInit,ElementRef } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Profile }            from './../../service/formData.model';
import { FormDataService }     from './../../service/formData.service';
@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {
    profile: Profile;
    form: any;
    myprofileType:any;
    constructor(private formDataService: FormDataService,private elem: ElementRef,private route: ActivatedRoute) {
    }
    ProfileCatogerys = ['Admin','Teacher','Student','Parent'];
id=this.route.snapshot.params;
    ngOnInit() {
        this.profile = this.formDataService.getProfile();
        this.myprofileType=this.profile['profileType'];
        this.profile['profileType']=this.ProfileCatogerys[0];
        this.profile['profileId'];
        if(this.id['id']){
            this.profile['userId']=this.id['id'];
            this.profile['profileType']=this.myprofileType;
        }
    }

    save(form: any) {
        if (!form.valid) 
            return;    
        let files = this.elem.nativeElement.querySelector('#profileImage').files;
        let formData = new FormData();
        let file = files[0];
        //formData.append('profileImage', file, file.name);
        this.profile.profileImage=file;
        this.formDataService.setProfile(this.profile);
    }
}
