import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { NotesCategory }    from './notes-category';
import { LocalStorageService } from 'angular-2-local-storage';
import { NotesService } from './../../service/notes-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-notes-category',
  templateUrl: './add-notes-category.component.html',
  styleUrls: ['./add-notes-category.component.css']
})
export class AddNotesCategoryComponent implements OnInit {
  private data;
  private mymindate;
  private mymaxdate;
  private form: FormGroup;
  private subjectData:any;
  private userdata:any;
  model = new NotesCategory('','','','','','','');
  constructor(public mystorage:LocalStorageService,
    public notesService:NotesService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { 
  
  }

  id=this.route.snapshot.params;
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getNotesCatogeryById(myid);
    }
  }

doAddNotesCatogery(userinfo){
  if(userinfo.id){
    this.notesService.addNotesCategory(userinfo).subscribe((data:any)=>{
          this.mystorage.set("message","Record Updated Successfully");
          this.router.navigate(['/admin/notes-category-list']);
        });
  }else{
            this.notesService.editNotes(userinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record add Successfully");
            this.router.navigate(['/admin/notes-category-list']);
            });
  }
}
getNotesCatogeryById(id){
  this.notesService.getNotesMasterById(id).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
});
}
backlist(){
  this.router.navigate(['/admin/notes-category-list']);
}
  getAllSubjectUnitSelect(){
    this.notesService.getAllSubjectUnit().subscribe((data:any)=>{
        //this.profile["role"]=roledata;
        this.subjectData=data;
    })
}

getAllUserSelect(){
  this.notesService.getAllUserSelect().subscribe((data:any)=>{
    this.userdata=data;
});
}
}