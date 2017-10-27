import { Component, OnInit } from '@angular/core';
import { FormDataService }     from './../../service/formData.service';
@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {
title = 'What do you do?';
    workType: string;
    form: any;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    }

    save(form: any) {
        if (!form.valid) 
            return;
        
        this.formDataService.setWork(this.workType);
    }
}
