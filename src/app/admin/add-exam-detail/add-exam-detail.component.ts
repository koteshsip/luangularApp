import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { ExamDetail }    from './examDetail';
import { LocalStorageService } from 'angular-2-local-storage';
import { ExamDetailService } from './../../service/ExamDetail-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-exam-detail',
  templateUrl: './add-exam-detail.component.html',
  styleUrls: ['./add-exam-detail.component.css']
})
export class AddExamDetailComponent implements OnInit {

  private data;
  form: FormGroup;
  private IsExist:any;
    constructor(public mystorage:LocalStorageService,
    public examDetailService:ExamDetailService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
    ngOnInit() {
      if(this.id['id']){
        let myid=Base64.decode(this.id['id']);
        this.getExamDetailById(myid);
      }
    }
  model = new ExamDetail('','','','','','','','','');
    examDetailAlreadyExist(value){
      if(value){
          this.examDetailService.examDetailAlreadyExist(value).subscribe((data:any)=>{
            if(data){
            this.IsExist=data;
            }else{
              this.IsExist=false;
            }
          });
      }
  }
    addExamDetail(examDetailinfo){
      if(examDetailinfo.examDetailId){
      this.examDetailService.updateExamDetail(examDetailinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/examDetail-list']);
          });
    }else{
              this.examDetailService.addExamDetail(examDetailinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/examDetail-list']);
              });
    }
    }
    getExamDetailById(myid){
      this.examDetailService.getExamDetailById(myid).subscribe((data:any)=>{
              this.data=data;
              this.model=this.data;
              });
    }
    backList(){
      this.router.navigate(['/admin/examDetail-list']);
    }
  
  
}
