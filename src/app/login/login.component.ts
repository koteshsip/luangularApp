// import { Component, OnInit ,Inject} from '@angular/core';
// import { Router } from '@angular/router';
// import { NgModule }      from '@angular/core';
// import { FormGroup, FormArray, FormBuilder,
//           Validators,ReactiveFormsModule  }   from '@angular/forms';
// // import { MyServiceService } from './../my-service.service';
// import { AuthServiceService } from '../service/auth-service.service';
// import { LocalStorageService } from 'angular-2-local-storage';
// import { DatepickerOptions } from 'ng2-datepicker';
          
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//  form: FormGroup;
//  email:any;
//  password:any;
//   date: Date;
//   private message;
// //  firstDate:DatepickerOptions
//  constructor(public router: Router, public _FB: FormBuilder,public authservice:AuthServiceService,public localStorageService: LocalStorageService) { 
// this.date = new Date; 
// }

//   ngOnInit() {
//   	this.form = this._FB.group({
//       'email': ['', [Validators.required]],
//       'password': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
//     ,'date': [null, Validators.required]
//     });
//     //console.log('login page');
    
    
//   }

// doLogin(userinfo):void
// {
// console.log("Login",userinfo);
// this.authservice.myloginservice(userinfo.email, userinfo.password).subscribe((data:any)=>{
// data=data.json();
// console.log("token",data);
// if(data.token){
// this.router.navigate(['/admin']);
// this.localStorageService.set("token",data.token);
// this.localStorageService.set("loginId",data.id);
// this.localStorageService.set("logindata",data);
// this.localStorageService.set("email",data.email);
// this.localStorageService.set("firstName",data.firstName);
// this.localStorageService.set("lastName",data.lastName);
// this.localStorageService.set("middleName",data.middleName);
// this.localStorageService.set("mobile",data.mobile);
// this.localStorageService.set("userDesc",data.userDesc);
// }else{
//   this.message="Invalide credential please try again";
// }

// })
// // You Auth success code is here
// //this.router.navigate(['/home']);
// }

// emailchange(value)
// {
//   console.log(">>>>",value)
// }


// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    private message;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
        let loginstatus=localStorage.getItem('currentUser');
        if(loginstatus!=null){
            this.router.navigate(['admin/dashboard1']);
        }
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['admin/dashboard1']);
                } else {
                    this.message="Invalide credential please try again";
                    this.loading = false;
                }
            });
    }
}