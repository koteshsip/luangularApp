import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Library } from "./library";
import { LocalStorageService } from 'angular-2-local-storage';
import { LibraryService } from './../../service/library-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit {
  private data;
  form: FormGroup;
  private library:any
  private IsExist:any;

  constructor(public mystorage:LocalStorageService,
    public libraryService:LibraryService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
     id=this.route.snapshot.params;
     model=new Library("","","","","","","","");
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getLibraryById(myid);
    }
  }
  addLibrary(Libraryinfo){
    if(Libraryinfo.libraryId){
      this.libraryService.updateLibrary(Libraryinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/library-list']);
          });
    }else{
              this.libraryService.addLibrary(Libraryinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/library-list']);
              });
    }
  }
  getLibraryById(id){
    this.libraryService.getLibraryById(id).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
      });
  }
  backList(){
    this.router.navigate(['/admin/library-list']);
  }
  // libraryAlreadyExist(){
  //   this.libraryService.libraryAlreadyExist().subscribe((data:any)=>{
  //     if(data){
  //         this.IsExist=data;
  //     }else{
  //         this.IsExist=false;
  //     }
  //   });
  // }
}



