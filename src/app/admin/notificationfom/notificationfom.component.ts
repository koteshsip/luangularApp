import { Component, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Notification }    from './notification';
import { LocalStorageService } from 'angular-2-local-storage';
import { MyServiceService } from './../../my-service.service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-notificationfom',
  templateUrl: './notificationfom.component.html',
  styleUrls: ['./notificationfom.component.css']
})
export class NotificationfomComponent implements OnInit {
private data;
private mymindate;
private mymaxdate;
 form: FormGroup;
private IsExist:any;
 NotificationCatogerys = ['Type1','Type2','Type3'];
 model = new Notification('',null,this.NotificationCatogerys[0],'','',null);
constructor(public mystorage:LocalStorageService,
  public myservice:MyServiceService
  ,public router: Router,private route: ActivatedRoute,
   public _FB: FormBuilder) { 
this.mymindate=moment(new Date()).format('YYYY-MM-DD');
this.mymaxdate=moment(new Date()).add(2, 'M').format('YYYY-MM-DD');
//this.buildForm();
}

// buildForm(): void {
//      this.form = this._FB.group({
//       'notifyType': ['', [Validators.required]],
//       'notifyDate': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
//       'notifyCategory': ['', [Validators.required]],
//       'notifyCode': ['', [Validators.required],this.isEmailUnique.bind(this)],
//       'notifyMessage':['', [Validators.required]]
//     });
//    }

id=this.route.snapshot.params;
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getNotificationById(myid);
    }
  }
  // isEmailUnique(control: FormControl) {
  //    const q = new Promise((resolve, reject) => {
  //      setTimeout(() => {
  //        this.myservice.notifyCodeExist(control.value).subscribe(() => {
  //          resolve(null);
  //        }, () => { resolve({ 'isEmailUnique': true }); });
  //      }, 1000);
  //    });
  //     alert(q);
  //    return q;
  //  }
doAddNotification(userinfo){
  if(userinfo.id){
    this.myservice.updateNotification(userinfo).subscribe((data:any)=>{
          this.mystorage.set("message","Record Updated Successfully");
          this.router.navigate(['/admin/notificatinlist']);
        });
  }else{
            this.myservice.addNotification(userinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record add Successfully");
            this.router.navigate(['/admin/notificatinlist']);
            });
  }
}
getNotificationById(id){
  this.myservice.getNotificationById(id).subscribe((data:any)=>{
      this.data=data;//.json();
      this.model=this.data;
});
}
backlist(){
  this.router.navigate(['/admin/notificatinlist']);
}
notificationCode(value){
  if(value){
    this.myservice.notifyCodeExist(value).subscribe((data:any)=>{
      if(data){
       this.IsExist=data;//"Notify Code Already exist";
      }else{
        this.IsExist=false;
      }
      //alert("my notify code"+data);
    });
}
  // console.log(">>>>",value)
  // this.IsExist=value;
  //  alert(this.IsExist);
}


}