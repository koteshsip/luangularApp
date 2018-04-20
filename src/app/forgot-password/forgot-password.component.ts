import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
private message;
model: any = {};
  constructor(public myservice: MyServiceService,public router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.model.username='';
  }
forgetPassword(password){
  this.myservice.resetPassword(password).subscribe((data:any)=>{
        if(data==true){
            this.message="Please check your mail to change the password";
          }else{
            this.message="Invalid email id";
          }
  });
}
}
