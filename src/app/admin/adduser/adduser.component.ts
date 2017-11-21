import { Component, OnInit,ElementRef } from '@angular/core';
import { User }            from './../../service/formData.model';
import { FormDataService }     from './../../service/formData.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  title = 'Please tell us about yourself.';
    user: User;
    form: any;
    // private elem: ElementRef;
    constructor(private formDataService: FormDataService,private elem: ElementRef) {
    }

    ngOnInit() {
        this.user = this.formDataService.getUser();
        console.log('Personal feature loaded!');
    }
// public uploadImage(): void {	  
//     this.elem.nativeElement.querySelector('#spinner').style.visibility='visible';
//     let files = this.elem.nativeElement.querySelector('#selectFile').files;
//     let formData = new FormData();
//     let file = files[0];
//     formData.append('selectFile', file, file.name);
// }
    save(form: any) {
        if (!form.valid) 
            return;
        let files = this.elem.nativeElement.querySelector('#userImage').files;
        //let formData = new FormData();
        let file = files[0];
        //formData.append('userImage', file, file.name);        
        this.user.userImage=file;
        this.formDataService.setUser(this.user);
    }
}
