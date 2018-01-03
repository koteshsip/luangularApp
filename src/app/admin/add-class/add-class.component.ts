import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { TblClass }    from './class';
import { LocalStorageService } from 'angular-2-local-storage';
import { TblClassService } from './../../service/tblClass-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  private data;
  form: FormGroup;
  private IsExist:any;
    constructor(public mystorage:LocalStorageService,
    public tblClassService:TblClassService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getTblClassById(myid);
    }
  }
  model = new TblClass('','','','','');
  tblClassAlreadyExist(value){
    if(value){
        this.tblClassService.tblClassAlreadyExist(value).subscribe((data:any)=>{
          if(data){
          this.IsExist=data;
          }else{
            this.IsExist=false;
          }
        });
    }
}
  addTblClass(tblClassinfo){
    if(tblClassinfo.tblClassId){
    this.tblClassService.updateClass(tblClassinfo).subscribe((data:any)=>{
          this.mystorage.set("message","Record Updated Successfully");
          this.router.navigate(['/admin/TblClass-list']);
        });
  }else{
            this.tblClassService.addClass(tblClassinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record add Successfully");
            this.router.navigate(['/admin/TblClass-list']);
            });
  }
  }
  getTblClassById(myid){
    this.tblClassService.getTblClassById(myid).subscribe((data:any)=>{
            this.data=data;
            this.model=this.data;
            });
  }
  backList(){
    this.router.navigate(['/admin/TblClass-list']);
  }

}


