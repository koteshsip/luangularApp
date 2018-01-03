import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Exam }    from './exam';
import { LocalStorageService } from 'angular-2-local-storage';
import { ExamService } from './../../service/exam-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {
  private data;
  form: FormGroup;
  private IsExist:any;
    constructor(public mystorage:LocalStorageService,
    public examService:ExamService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
    ngOnInit() {
      if(this.id['id']){
        let myid=Base64.decode(this.id['id']);
        this.getExamById(myid);
      }
    }
  model = new Exam('','','','','','');
    examAlreadyExist(value){
      if(value){
          this.examService.examAlreadyExist(value).subscribe((data:any)=>{
            if(data){
            this.IsExist=data;
            }else{
              this.IsExist=false;
            }
          });
      }
  }
    addExam(examinfo){
      if(examinfo.examId){
      this.examService.updateExam(examinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/exam-list']);
          });
    }else{
              this.examService.addExam(examinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/exam-list']);
              });
    }
    }
    getExamById(myid){
      this.examService.getExamById(myid).subscribe((data:any)=>{
              this.data=data;
              this.model=this.data;
              });
    }
    backList(){
      this.router.navigate(['/admin/exam-list']);
    }
  
}
