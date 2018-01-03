import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { School }    from './school';
import { LocalStorageService } from 'angular-2-local-storage';
import { SchoolService } from './../../service/school-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {
  private data;
  form: FormGroup;
  private IsExist:any;
    constructor(public mystorage:LocalStorageService,
    public schoolService:SchoolService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
    ngOnInit() {
      if(this.id['id']){
        let myid=Base64.decode(this.id['id']);
        this.getSchoolById(myid);
      }
    }
  model = new School('','','','','','','','','','','','','','','','','');
    schoolAlreadyExist(value){
      if(value){
          this.schoolService.schoolAlreadyExist(value).subscribe((data:any)=>{
            if(data){
            this.IsExist=data;
            }else{
              this.IsExist=false;
            }
          });
      }
  }
    addSchool(schoolinfo){
      if(schoolinfo.schoolId){
      this.schoolService.updateSchool(schoolinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/school-list']);
          });
    }else{
              this.schoolService.addSchool(schoolinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/school-list']);
              });
    }
    }
    getSchoolById(myid){
      this.schoolService.getSchoolById(myid).subscribe((data:any)=>{
              this.data=data;
              this.model=this.data;
              });
    }
    backList(){
      this.router.navigate(['/admin/school-list']);
    }
  
}
