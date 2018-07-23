import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import{ClassSubjectService} from '../../service/class-subject-service'
import{ClassSubject} from './classsubject'
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-class-subject',
  templateUrl: './add-class-subject.component.html',
  styleUrls: ['./add-class-subject.component.css']
})
export class AddClassSubjectComponent implements OnInit {
 private teacherdata:any;
 private classsectiondata:any;
 private subjectmasterdata:any;
 private dsectionId:any;
 private dclassId:any;
 private data:any;
  constructor(public classSubjectService:ClassSubjectService,
    public router: Router,public mystorage:LocalStorageService,
         public _FB: FormBuilder,public route: ActivatedRoute) { }
model=new ClassSubject('','','','','','','');
id=this.route.snapshot.params;
  ngOnInit() {
    this.getAllTeacher();
    this.getAllClassSection();
    this.getAllSubjectMaster();
    if(this.id['classId'] && this.id['classId']){
      this.dsectionId=Base64.decode(this.id['sectionId']);
      this.dclassId=Base64.decode(this.id['classId']);
      this.getClassSectionMasterbyId(this.dclassId,this.dsectionId);
    }
  }
  getAllTeacher(){
    this.classSubjectService.getAllTeacher().subscribe((data:any)=>{
                this.teacherdata=data;
                });
              }
  getAllClassSection(){
    this.classSubjectService.getAllClassSection().subscribe((data:any)=>{
                this.classsectiondata=data;
                });
              }
  getAllSubjectMaster(){
    this.classSubjectService.getAllSubjectMaster().subscribe((data:any)=>{
                this.subjectmasterdata=data;
                });
              }
  backList(){
    this.router.navigate(['/admin/class-subject-list']);
  }
  getClassSectionMasterbyId(classId,sectionId){
    this.classSubjectService.getSubjectById(classId,sectionId).subscribe((data:any)=>{
            this.data=data;
            this.model=this.data;
            this.model.teacherId=this.data['teacherId']+","+this.data['teacherName'];
            // this.model.teacherId=this.data['firstName'];
            // this.model.teacherId=this.data['middleName'];
            // this.model.teacherId=this.data['lastName'];
            //"teacherId": "1", "teacherName": "rakesh rakesh xcx"
            this.model.classId=data['classSubjectId'].classId+","+data['classSubjectId'].sectionId;
            this.model.subjectId=data.subjectId+","+data.subjectName;
            // model.subjectId subjectName
            //this.model.sectionId=data['classSubjectId'].sectionId;
            //teacher.userId+","+teacher.firstName+" "+teacher.middleName+" "+teacher.lastName  
          });
  }
  addClassSubject(formdata){
    formdata.tempId=formdata.classId;
    let subject=formdata.subjectId.split(",");
    formdata.subjectId=subject[0];
    if(this.id['sectionId']){
      this.classSubjectService.updateSubject(formdata,this.dclassId,this.dsectionId).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/class-subject-list']);
          });
    }else{
        this.classSubjectService.addSubject(formdata).subscribe((data:any)=>{
        this.mystorage.set("message","Record add Successfully");
        this.router.navigate(['/admin/class-subject-list']);
        });  
    }
    
  }
  getname(event){
    var splitted = event.split(","); 
    this.model.teacherName=splitted[1];
    //this.model.teacherId=splitted[0];
  }
  getsubjectname(event){  
    let splitted = event.split(","); 
    //this.model.subjectId=splitted[0];
    this.model.subjectName=splitted[1];
    //alert(this.model.subjectId+" "+this.model.subjectName);
  }
  classsubject(event){
    var splitted = event.split(","); 
    this.model.classId=splitted[0];
    this.model.sectionId=splitted[1];
    //alert("classsubject[0]"+classId+" classsubject[1]="+sectionId);
  }
  
}