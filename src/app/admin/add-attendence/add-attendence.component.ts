import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Attendence }    from './attendence';
import { LocalStorageService } from 'angular-2-local-storage';
import { AttendenceService } from './../../service/attendence-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-attendence',
  templateUrl: './add-attendence.component.html',
  styleUrls: ['./add-attendence.component.css']
})
export class AddAttendenceComponent implements OnInit {
  private data;
  form: FormGroup;
  private mydat: any;
  private IsExist:any;
    constructor(public mystorage:LocalStorageService,
    public attendenceService:AttendenceService,
    public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getAttendenceById(myid);
    }
  }
  model = new Attendence('','','','','','');
  attendenceAlreadyExist(value){
    if(value){
        this.attendenceService.attendenceAlreadyExist(value).subscribe((data:any)=>{
          if(data){
          this.IsExist=data;
          }else{
            this.IsExist=false;
          }
        });
    }
}
addAttendence(attendenceinfo){
  if(attendenceinfo.attendenceId){
  this.attendenceService.updateAttendence(attendenceinfo).subscribe((data:any)=>{
        this.mystorage.set("message","Record Updated Successfully");
        this.router.navigate(['/admin/attendence-list']);
      });
}else{
          this.attendenceService.addAttendence(attendenceinfo).subscribe((data:any)=>{
          this.mystorage.set("message","Record add Successfully");
          this.router.navigate(['/admin/attendence-list']);
          });
}
}
getAttendenceById(myid){
  this.attendenceService.getAttendenceById(myid).subscribe((data:any)=>{
          this.data=data;
          this.model=this.data;
          });
}
backList(){
  this.router.navigate(['/admin/attendence-list']);
}

}