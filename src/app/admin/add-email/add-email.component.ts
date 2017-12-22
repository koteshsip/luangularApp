import { Component, OnInit } from '@angular/core';
import { Email } from './email'
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { EmailService } from './../../service/email-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.css']
})
export class AddEmailComponent implements OnInit {

private data;
form: FormGroup;
private IsExist:any;
  constructor(public mystorage:LocalStorageService,
  public emailService:EmailService
  ,public router: Router,private route: ActivatedRoute,
   public _FB: FormBuilder) { }
id=this.route.snapshot.params;
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getEmailById(myid);
    }
  }
model = new Email("","","","","");
//   transportAlreadyExist(value){
//     if(value){
//         this.transportService.transportAlreadyExist(value).subscribe((data:any)=>{
//           if(data){
//           this.IsExist=data;
//           }else{
//             this.IsExist=false;
//           }
//         });
//     }
// }
  sendEmail(transportinfo){
            this.emailService.sendEmail(transportinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record add Successfully");
            this.router.navigate(['/admin/email-list']);
            });
  }
  getEmailById(myid){
    this.emailService.getEmailById(myid).subscribe((data:any)=>{
            this.data=data;
            this.model=this.data;
            });
  }
  backList(){
    this.router.navigate(['/admin/email-list']);
  }

}





