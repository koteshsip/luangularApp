import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Inventory }    from './inventory';
import { LocalStorageService } from 'angular-2-local-storage';
import { InventoryService } from './../../service/Inventory-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  private data;
  form: FormGroup;
  private IsExist:any;
    constructor(public mystorage:LocalStorageService,
    public inventoryService:InventoryService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
    ngOnInit() {
      if(this.id['id']){
        let myid=Base64.decode(this.id['id']);
        this.getInventoryById(myid);
      }
    }
  model = new Inventory('','','','','','','','','');
    inventoryAlreadyExist(value){
      if(value){
          this.inventoryService.inventoryAlreadyExist(value).subscribe((data:any)=>{
            if(data){
            this.IsExist=data;
            }else{
              this.IsExist=false;
            }
          });
      }
  }
    addInventory(inventoryinfo){
      if(inventoryinfo.inventoryId){
      this.inventoryService.updateInventory(inventoryinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/inventory-list']);
          });
    }else{
              this.inventoryService.addInventory(inventoryinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/inventory-list']);
              });
    }
    }
    getInventoryById(myid){
      this.inventoryService.getInventoryById(myid).subscribe((data:any)=>{
              this.data=data;
              this.model=this.data;
              });
    }
    backList(){
      this.router.navigate(['/admin/inventory-list']);
    }

}
