import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Supplier } from "./supplier";
import { LocalStorageService } from 'angular-2-local-storage';
import { SupplierService } from './../../service/supplier-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
 
  private data;
  form: FormGroup;
  private supplier:any
  private IsExist:any;

  constructor(public mystorage:LocalStorageService,
    public supplierService:SupplierService,
    public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
     id=this.route.snapshot.params;
     model=new Supplier("","","","","");
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getSupplierById(myid);
    }
  }
   addSupplier(Supplierinfo){
    if(Supplierinfo.supplierId){
      this.supplierService.updateSupplier(Supplierinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/supplier-list']);
          });
    }else{
              this.supplierService.addSupplier(Supplierinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/supplier-list']);
              });
    }
  }
   getSupplierById(id){
    this.supplierService.getSupplierById(id).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
      });
  }
  backList(){
    this.router.navigate(['/admin/supplier-list']);
  }
  // function supplierAlreadyExist(){
  //   this.supplierService.supplierAlreadyExist().subscribe((data:any)=>{
  //     if(data){
  //         this.IsExist=data;
  //     }else{
  //         this.IsExist=false;
  //     }
  //   });
  // }
}
