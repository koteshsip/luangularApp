import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Notification }    from './notification';
import { MyServiceService } from './../../my-service.service';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule  }   from '@angular/forms';
          
@Component({
  selector: 'app-notificationfom',
  templateUrl: './notificationfom.component.html',
  styleUrls: ['./notificationfom.component.css']
})
export class NotificationfomComponent implements OnInit {
  model = new Notification('',null,'', '','');
 form: FormGroup;
//  email:any;
//  password:any;
 //,public myservice:MyServiceService,public localStorageService: LocalStorageService
 constructor(public myservice:MyServiceService,public router: Router, public _FB: FormBuilder) { 
 }

  ngOnInit() {
  	// this.form = this._FB.group({
    //   'email': ['', [Validators.required]],
    //   'password': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    // });
  }
doAddNotification(userinfo){
this.myservice.addNotification(userinfo).subscribe((data:any)=>{
console.log("data notification===",data);
});
}
emailchange(value){
  console.log(">>>>",value)
}


}