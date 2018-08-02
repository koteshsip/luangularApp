import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Topic }    from './topic';
import { LocalStorageService } from 'angular-2-local-storage';
import { NotesService } from './../../service/notes-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  private data;
private mymindate;
private mymaxdate;
 form: FormGroup;
 subjectData:any;
private IsExist:any;
TypeOfMaterial = ['Type1','Type2','Type3'];
TopicMaterialFiletype = ['Doc','Pdf','Video'];
 model = new Topic('','',this.TopicMaterialFiletype[0],this.TypeOfMaterial[0],'','','','','');
constructor(public mystorage:LocalStorageService,
  public notesService:NotesService
  ,public router: Router,private route: ActivatedRoute,
   public _FB: FormBuilder) { 

}

id=this.route.snapshot.params;
  ngOnInit() {
    if(this.id['subjectId']){
      let subjectId=Base64.decode(this.id['subjectId']);
      let unitId=Base64.decode(this.id['unitId']);
      let topicId=Base64.decode(this.id['topicId']);
      this.getTopicById(subjectId,unitId,topicId);
    }
  }
doAddTopic(userinfo){
  if(userinfo.id){
    this.notesService.updateTopic(userinfo).subscribe((data:any)=>{
          this.mystorage.set("message","Record Updated Successfully");
          this.router.navigate(['/admin/topic-list']);
        });
  }else{
            this.notesService.addTopic(userinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record add Successfully");
            this.router.navigate(['/admin/topic-list']);
            });
  }
}
getTopicById(subjectId,unitId,topicId){
  this.notesService.getTopicById(subjectId,unitId,topicId).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
});
}
backlist(){
  this.router.navigate(['/admin/topic-list']);
}
getAllSubjectUnitSelect(){
    this.notesService.getAllSubjectUnit().subscribe((data:any)=>{
        //this.profile["role"]=roledata;
        this.subjectData=data;
    })
}
}