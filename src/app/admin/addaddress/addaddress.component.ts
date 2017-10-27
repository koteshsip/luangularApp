import { Component, OnInit } from '@angular/core';
import { Address }            from './../../service/formData.model';
import { FormDataService }     from './../../service/formData.service';
@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css']
})
export class AddaddressComponent implements OnInit {
title = 'Where do you live?';
    address: Address;
    form: any;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.address = this.formDataService.getAddress();
        console.log('Address feature loaded!');
    }

    save(form: any) {
        if (!form.valid) 
            return;
        
        this.formDataService.setAddress(this.address);
    }
}
