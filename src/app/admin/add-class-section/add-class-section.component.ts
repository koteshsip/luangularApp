import { Component, OnInit } from '@angular/core';
import { ClassSection } from './class-section';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ClassSectionMasterService } from './../../service/class-section-master.service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-class-section',
  templateUrl: './add-class-section.component.html',
  styleUrls: ['./add-class-section.component.css']
})
export class AddClassSectionComponent implements OnInit {
  private data;
  constructor(public mystorage:LocalStorageService,
    public classSectionMasterService:ClassSectionMasterService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
  model=new ClassSection('','','','','','','');
  ngOnInit() {
    if(this.id['classId'] && this.id['classId']){
      let sectionId=Base64.decode(this.id['sectionId']);
      let classId=Base64.decode(this.id['classId']);
      this.getClassSectionMasterbyId(classId,sectionId);
    }
  }
  getClassSectionMasterbyId(classId,sectionId){
    this.classSectionMasterService.getClassSectionMasterbyId(classId,sectionId).subscribe((data:any)=>{
            this.data=data;
            this.model=this.data;
            this.model.classId=data['classSectionMasterId'].classId;
            this.model.sectionId=data['classSectionMasterId'].sectionId;
            });
  }
  addClassSectionMaster(tblClassinfo){
    if(this.model.classId){
      //console.log("this.model.classIdc="+this.model.classId);
      //alert(this.model.classId);
    this.classSectionMasterService.updateClassSectionMaster(tblClassinfo,this.model.classId,this.model.sectionId).subscribe((data:any)=>{
          this.mystorage.set("message","Record Updated Successfully");
          this.router.navigate(['/admin/class-section-list']);
        });
  }else{
            this.classSectionMasterService.addClassSectionMaster(tblClassinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record add Successfully");
            this.router.navigate(['/admin/class-section-list']);
            });
  }
  }
  
  backList(){
    this.router.navigate(['/admin/class-section-list']);
  }
}




