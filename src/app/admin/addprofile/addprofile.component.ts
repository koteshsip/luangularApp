import { Component, OnInit } from '@angular/core';
import { Profile }            from './../../service/formData.model';
import { FormDataService }     from './../../service/formData.service';
@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {
title = 'What do you do?';
    profile: Profile;
    form: any;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.profile = this.formDataService.getProfile();
        console.log('Work feature loaded!');
    }

    save(form: any) {
        if (!form.valid) 
            return;
        
        this.formDataService.setProfile(this.profile);
    }
}
