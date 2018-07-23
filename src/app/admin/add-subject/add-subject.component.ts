import { Component, OnInit,ElementRef } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { SubjectService } from './../../service/subject-service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';
import { Subject }    from './subject';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  private data;
  subjectMaterialFiletypes = ['Type1','Type2','Type3'];
  model = new Subject("","","","","",this.subjectMaterialFiletypes[0],"","","");
  constructor(public subjectService:SubjectService,
    public router: Router,private route: ActivatedRoute,
    public _FB: FormBuilder,public mystorage:LocalStorageService,
    public elementRef:ElementRef) { 

  }
  id=this.route.snapshot.params;
  ngOnInit() {
    if(this.id['subjectId']){
      let subjectId=Base64.decode(this.id['subjectId']);
      let textBookISBN=Base64.decode(this.id['textBookISBN']);
      this.getSubjectById(subjectId,textBookISBN);
    }
  }

  getSubjectById(id,textBookISBN){
    this.subjectService.getSubjectById(id,textBookISBN).subscribe((data:any)=>{
        this.model=data;
        this.model.subjectId=data['subjectMasterId'].subjectId;
        this.model.textBookISBN=data['subjectMasterId'].textBookISBN;
        this.model.subjectCoverpage='';
  });
  }

  backlist(){
    this.router.navigate(['/admin/subjects-list']);
  }
  
  doAddSubject(userinfo){
      let files = this.elementRef.nativeElement.querySelector('#subjectCoverpage').files;
      let formData = new FormData();
      let file = files[0];
      if(file){
        formData.append("subjectCoverpage",file,file.name);
       }
      formData.append('subjectMaster',new Blob([JSON.stringify({
      subjectName:userinfo.subjectName,
      textBookName:userinfo.textBookName,
      textBookPath:userinfo.textBookPath, 
      textBookLink:userinfo.textBookLink,
      typeOfMaterial:userinfo.typeOfMaterial,
      subjectMaterialFiletype:userinfo.subjectMaterialFiletype
      ,subjectId:userinfo.subjectId,
      textBookISBN:userinfo.textBookISBN
      //subjectCoverpage:userinfo.file              
  })],{
      type: "application/json"
  }));
    if(userinfo.subjectId,userinfo.textBookISBN){
      this.subjectService.updateSubject(formData,userinfo.subjectId,userinfo.textBookISBN).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/subjects-list']);
          });
    }else{
              this.subjectService.addSubject(formData).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/subjects-list']);
              });
    }
  }
}
