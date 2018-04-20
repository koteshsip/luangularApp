import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user.interface';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{
model: any = {};
public user: User;
//  repassword:any;
//  password:any;
form: FormGroup;
  constructor(fb: FormBuilder,public myservice: MyServiceService,public router: Router,private route: ActivatedRoute)
  {
  }
private statusOfLink=this.route.snapshot.params
onSubmit(formdata) {
  this.myservice.savePassword(formdata.password,this.statusOfLink["id"]).subscribe((data:any)=>{
          if(data==true){//in success
            localStorage.setItem('message',"Password changed successfully");
            this.router.navigate(['/login']);
          }else{
           localStorage.setItem('message',"Email id is not exist");
          }
        });
  }
  ngOnInit(){
    this.user = {
      password: '',
      confirmPassword: ''
    }
    this.myservice.chagePassword(this.statusOfLink["id"],this.statusOfLink["token"]).subscribe((data:any)=>{
          if(data!=true){
            localStorage.setItem('message',"Change password link is expired please try again");
            this.router.navigate(['/login']);
          }
        });
  }

}
