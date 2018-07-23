import { Component, OnInit,ElementRef } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Assignment } from "./assignment";
import { LocalStorageService } from 'angular-2-local-storage';
import { AssignmentService } from './../../service/assignment-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  private data;
  form: FormGroup;
  private assignment:any
  private IsExist:any;
  userdata:any;
  public classSectiondata:any;
  subjectmasterdata:any;
  // (public subjectService:SubjectService,
  //   public router: Router,private route: ActivatedRoute,
  //   public _FB: FormBuilder,public mystorage:LocalStorageService,
  //   )
  constructor(public mystorage:LocalStorageService,
    public assignmentService:AssignmentService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder,public elementRef:ElementRef) { }
	  id=this.route.snapshot.params;
model=new Assignment("","","","","","","","","","","","","");
  ngOnInit() {
    this.getAllUserSelect();
    this.getAllSubjectMasterSelect();
    this.getAllClassSection();
	  if(this.id['assignmentId']){
      let assignmentId=Base64.decode(this.id['assignmentId']);
      let classId=Base64.decode(this.id['classId']);
      let sectionId=Base64.decode(this.id['sectionId']);
      this.getAssignmentById(assignmentId,classId,sectionId);
  }
}
// getAllClassSection(){
//   this.assignmentService.getAllClassSection().subscribe((data:any)=>{
//     this.classSectiondata=data;
//    });
// }
getAllClassSection(){
  this.assignmentService.getAllClassSection().subscribe((data:any)=>{
              this.classSectiondata=data;
              });
            }
getAllSubjectMasterSelect(){
  this.assignmentService.getAllSubjectMasterSelect().subscribe((data:any)=>{
    this.subjectmasterdata=data;
   });
}
addAssignment(Assignmentinfo){
  let files = this.elementRef.nativeElement.querySelector('#assignPath').files;
  let formData = new FormData();
  let file = files[0];
  if(file){
    formData.append("assignmentAttachment",file,file.name);
   }
  formData.append('assignmentMaster',new Blob([JSON.stringify({
    assignmentId:Assignmentinfo.assignmentId,
    tempId:Assignmentinfo.classId,
    sectionId:Assignmentinfo.sectionId,
    associateTeacherId:Assignmentinfo.associateTeacherId,
    assignType:Assignmentinfo.assignType,
    subjectId:Assignmentinfo.subjectId,
    assignStartDate:Assignmentinfo.assignStartDate,
    assignDueDate:Assignmentinfo.assignDueDate,
    assignActive:Assignmentinfo.assignActive,
    maxMarks:Assignmentinfo.maxMarks,
    assignPath:Assignmentinfo.assignPath,	
    assignCreatedBy:Assignmentinfo.assignCreatedBy,
    insertedBy:Assignmentinfo.insertedBy              
})],{
  type: "application/json"
}));
if(this.model.assignmentId){
        this.assignmentService.updateAssignment(formData,this.model.assignmentId,this.model.classId,this.model.sectionId).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/assignment-list']);
          });
    }else{
              this.assignmentService.addAssignment(formData).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/assignment-list']);
              });
    }
  }
  getAssignmentById(assignmentId,classId,sectionId){
    this.assignmentService.getAssignmentById(assignmentId,classId,sectionId).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
      this.model.assignmentId=this.data['assignmentMasterId'].assignmentId;
      this.model.classId=this.data['assignmentMasterId'].classId+','+this.data['assignmentMasterId'].sectionId;
      this.model.sectionId=this.data['assignmentMasterId'].sectionId;
      this.model.assignPath="";
      });
  }
  backList(){
    this.router.navigate(['/admin/assignment-list']);
  }
  getAllUserSelect(){
    this.assignmentService.getAllUserSelect().subscribe((data:any)=>{
      this.userdata=data;
  });
}
}