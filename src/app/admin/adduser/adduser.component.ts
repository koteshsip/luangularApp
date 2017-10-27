import { Component, OnInit } from '@angular/core';
import { Personal }            from './../../service/formData.model';
import { FormDataService }     from './../../service/formData.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  title = 'Please tell us about yourself.';
    personal: Personal;
    form: any;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    }

    save(form: any) {
        if (!form.valid) 
            return;
        
        this.formDataService.setPersonal(this.personal);
    }
}
