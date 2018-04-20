import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { ResourceBank } from "./resourcebank";
import { LocalStorageService } from 'angular-2-local-storage';
import { ResourceBankService } from './../../service/resourceBank-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-resource-bank',
  templateUrl: './add-resource-bank.component.html',
  styleUrls: ['./add-resource-bank.component.css']
})
export class AddResourceBankComponent implements OnInit {

  private data;
  form: FormGroup;
  private resourceBank:any
  private IsExist:any;
  constructor(public mystorage:LocalStorageService,
    public resourceBankService:ResourceBankService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
     id=this.route.snapshot.params;
   model=  new ResourceBank("","","","","","","","");
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getResourceBankById(myid);
    }
  }
  addResourceBank(ResourceBankinfo){
    if(ResourceBankinfo.resourceBankId){
      this.resourceBankService.updateResourceBank(ResourceBankinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/resourceBank-list']);
          });
    }else{
              this.resourceBankService.addResourceBank(ResourceBankinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/resourceBank-list']);
              });
    }
  }
  getResourceBankById(id){
    this.resourceBankService.getResourceBankById(id).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
      });
  }
  backList(){
    this.router.navigate(['/admin/resourceBank-list']);
  }
  // resourceBankAlreadyExist(){
  //   this.resourceBankService.resourceBankAlreadyExist().subscribe((data:any)=>{
  //     if(data){
  //         this.IsExist=data;
  //     }else{
  //         this.IsExist=false;
  //     }
  //   });
  // }
}
