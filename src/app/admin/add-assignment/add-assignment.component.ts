import { Component, OnInit } from '@angular/core';
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
  
  constructor(public mystorage:LocalStorageService,
    public assignmentService:AssignmentService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
	  id=this.route.snapshot.params;
model=new Assignment("","","","","","","","","","");
  ngOnInit() {
	  if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getAssignmentById(myid);
  }
}
addAssignment(Assignmentinfo){
    if(Assignmentinfo.purchaseId){
      this.assignmentService.updateAssignment(Assignmentinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/assignment-list']);
          });
    }else{
              this.assignmentService.addAssignment(Assignmentinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/assignment-list']);
              });
    }
  }
  getAssignmentById(id){
    this.assignmentService.getAssignmentById(id).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
      });
  }
  backList(){
    this.router.navigate(['/admin/assignment-list']);
  }
  // assignmentAlreadyExist(){
  //   this.assignmentService.assignmentAlreadyExist().subscribe((data:any)=>{
  //     if(data){
  //         this.IsExist=data;
  //     }else{
  //         this.IsExist=false;
  //     }
  //   });
  // }
}
