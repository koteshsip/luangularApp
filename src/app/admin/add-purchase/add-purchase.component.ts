import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Purchase } from "./purchase";
import { LocalStorageService } from 'angular-2-local-storage';
import { PurchaseService } from './../../service/purchase-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-Purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
 
  private data;
  form: FormGroup;
  private news:any
  private IsExist:any;

  constructor(public mystorage:LocalStorageService,
    public purchaseService:PurchaseService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
     id=this.route.snapshot.params;
     model = new Purchase("","","","","","","","","");
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getPurchaseById(myid);
    }
  }
   addPurchase(Purchaseinfo){
    if(Purchaseinfo.newsId){
      this.purchaseService.updatePurchase(Purchaseinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/purchase-list']);
          });
    }else{
              this.purchaseService.addPurchase(Purchaseinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/purchase-list']);
              });
    }
  }
   getPurchaseById(id){
    this.purchaseService.getPurchaseById(id).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
      });
  }
  backList(){
    this.router.navigate(['/admin/purchase-list']);
  }
  // newsAlreadyExist(){
  //   this.newsService.newsAlreadyExist().subscribe((data:any)=>{
  //     if(data){
  //         this.IsExist=data;
  //     }else{
  //         this.IsExist=false;
  //     }
  //   });
  // }
}

