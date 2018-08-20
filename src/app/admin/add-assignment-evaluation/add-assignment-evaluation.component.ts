import { Component, OnInit,ElementRef } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Assignment } from "./assignment";
import { LocalStorageService } from 'angular-2-local-storage';
import { AssignmentService } from './../../service/assignment-service';
import { AssignmentEvaluationService } from './../../service/assignment-evaluation-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
  @Component({
    selector: 'app-add-assignment-evaluation',
    templateUrl: './add-assignment-evaluation.component.html',
    styleUrls: ['./add-assignment-evaluation.component.css']
  })
export class AddAssignmentEvaluationComponent implements OnInit {
  private data;
  form: FormGroup;
  private assignment:any
  private IsExist:any;
  userdata:any;
  public classSectiondata:any;
  subjectmasterdata:any;
  public teacherdata:any;
  constructor(public mystorage:LocalStorageService,
    public assignmentService:AssignmentService,
    public assignmentEvaluationService:AssignmentEvaluationService 
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder,public elementRef:ElementRef) { }
	  id=this.route.snapshot.params;
model=new Assignment("","","","","","","","","","","","","");
  ngOnInit() {
    this.getAllTeacher();
    this.getAllUserSelect();
	  if(this.id['assignId']){
      let assignId=Base64.decode(this.id['assignId']);
      let studentId=Base64.decode(this.id['studentId']);
      this.getAssignmentById(studentId,assignId);
  }
}
getAllSubjectMasterSelect(){
  this.assignmentService.getAllSubjectMasterSelect().subscribe((data:any)=>{
    this.subjectmasterdata=data;
   });
}
addAssignment(Assignmentinfo){
//   let formData = new FormData();
//   formData.append('assignmentMaster',new Blob([JSON.stringify({
//     assignmentId:Assignmentinfo.assignmentId,
//     tempId:Assignmentinfo.classId,
//     sectionId:Assignmentinfo.sectionId,
//     associateTeacherId:Assignmentinfo.associateTeacherId,
//     assignType:Assignmentinfo.assignType,
//     subjectId:Assignmentinfo.subjectId,
//     assignStartDate:Assignmentinfo.assignStartDate,
//     assignDueDate:Assignmentinfo.assignDueDate,
//     assignActive:Assignmentinfo.assignActive,
//     maxMarks:Assignmentinfo.maxMarks,
//     assignPath:Assignmentinfo.assignPath,	
//     assignCreatedBy:Assignmentinfo.assignCreatedBy,
//     insertedBy:Assignmentinfo.insertedBy              
// })],{
//   type: "application/json"
// }));
if(this.model.assignId){
        this.assignmentEvaluationService.updateAssignment(Assignmentinfo,this.model.studentId,this.model.assignId).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/assignment-evaluation-list']);
          });
    }else{
              this.assignmentEvaluationService.addAssignment(Assignmentinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/assignment-evaluation-list']);
              });
    }
  }
  getAssignmentById(studentId,assignId){
    this.assignmentEvaluationService.getAssignmentById(studentId,assignId).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
      this.model.assignId=this.data['assignmentEvaluationId'].assignId;
      this.model.studentId=this.data['assignmentEvaluationId'].studentId;
      });
  }
  backList(){
    this.router.navigate(['/admin/assignment-evaluation-list']);
  }
  getAllUserSelect(){
    this.assignmentService.getAllUserSelect().subscribe((data:any)=>{
      this.userdata=data;
  });
}
getname(event){
  var splitted = event.split(","); 
  this.model.nameOfReviewer=splitted[1];
  //this.model.teacherId=splitted[0];
}
getAllTeacher(){
  this.assignmentEvaluationService.getAllTeacher().subscribe((data:any)=>{
              this.teacherdata=data;
              });
            }
}