import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule  }   from '@angular/forms';
import { MyServiceService } from './../my-service.service';
import { LocalStorageService } from 'angular-2-local-storage';
          
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 form: FormGroup;
 email:any;
 password:any;
 constructor(public router: Router, public _FB: FormBuilder,public myservice:MyServiceService,public localStorageService: LocalStorageService) { 
 	
 }

  ngOnInit() {
  	this.form = this._FB.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
  	//console.log('login page');
  }

doLogin(userinfo):void
{
console.log("Login",userinfo);
this.myservice.myloginservice(userinfo.email, userinfo.password).subscribe((data:any)=>{
  console.log("data",data);
  if(data.token)
    {
console.log("login");
this.router.navigate(['/admin']);
this.localStorageService.set("token",data.token);
this.localStorageService.set("loginId",data.id);
this.localStorageService.set("logindata",data);
this.localStorageService.set("email",data.email);
this.localStorageService.set("firstName",data.firstName);
this.localStorageService.set("lastName",data.lastName);
this.localStorageService.set("middleName",data.middleName);
this.localStorageService.set("mobile",data.mobile);
this.localStorageService.set("userDesc",data.userDesc);


    }

})
// You Auth success code is here
//this.router.navigate(['/home']);
}

emailchange(value)
{
  console.log(">>>>",value)
}


}