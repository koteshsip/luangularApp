import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { SupplierService } from './../../service/supplier-service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  page:any;
  constructor(private dialogService:DialogService,public router: Router
    ,public mystorage:LocalStorageService,public supplierService:SupplierService) { 
    this.baseEncode=Base64.encode;
  }
  ngOnInit() {
    this.page=1;
   this.getAllExams(this.page,""); 
  }
addSchool(){
  this.router.navigate(['/admin/add-supplier']);
}

getAllExams(event,filter){
this.message=this.mystorage.get("message");
          this.mystorage.remove("message");
		this.supplierService.getAllSupplier(event,filter).subscribe((data:any)=>{
				if(data.error) { 
					alert('Server Error');
				} else {
                    this.data=data['supplier'];
                    this.totalItem = data['count'];
                }
			},
			error =>{
				alert('Server error');
			}
		);
		return event;
}
deleteSupplier(id){
let myid=Base64.decode(id);
    this.showConfirm(myid);
}
  showConfirm(id) {
            let disposable = this.dialogService.addDialog(MessageComponent, {
                title:'Delete Confirm', 
                message:'Are you sure you want to delete this record'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        this.supplierService.deleteSupplier(id).subscribe((data:any)=>{
                            this.getAllExams(1,'');
                            this.message="Record deleted Successfully";
                        });
                    }else {
                       // alert('declined');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            setTimeout(()=>{
                disposable.unsubscribe();
            },10000);
        }
}

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { MessageComponent } from '../message/message.component';
// declare var AdminLTE: any;
// import { LocalStorageService } from 'angular-2-local-storage';
// import { PurchaseService } from './../../service/purchase-service';
// import { DialogService } from "ng2-bootstrap-modal";
// import { DatepickerOptions } from 'ng2-datepicker';
// import { Base64 } from 'js-base64';
// @Component({
//   selector: 'app-purchase',
//   templateUrl: './purchase.component.html',
//   styleUrls: ['./purchase.component.css']
// })
// export class PurchaseComponent implements OnInit {
//   private message;
//   private data  = [];
//   private baseEncode:any;
//   public totalItem:any;
//   page:any;
//   constructor(private dialogService:DialogService,
//     public router: Router,public mystorage:LocalStorageService,
//     public purchaseService:PurchaseService) { 
//     this.baseEncode=Base64.encode;
//   }

//   ngOnInit() {
//     this.page=1;
//    this.getAllTblClasss(this.page,""); 
//   }
// addPurchase(){
//   this.router.navigate(['/admin/add-purchase']);
// }

// getAllTblClasss(event,filter){
// this.message=this.mystorage.get("message");
//           this.mystorage.remove("message");
// 		this.purchaseService.getAllPurchase(event,filter).subscribe((data:any)=>{
// 				if(data.error) { 
// 					alert('Server Error');
// 				} else {
//                     this.data=data['purchase'];
//                     this.totalItem = data['count'];
//                 }
// 			},
// 			error =>{
// 				alert('Server error');
// 			}
// 		);
// 		return event;
// }
// deletePurchase(id){
// let myid=Base64.decode(id);
//     this.showConfirm(myid);
// }
//   showConfirm(id) {
//             let disposable = this.dialogService.addDialog(MessageComponent, {
//                 title:'Delete Confirm', 
//                 message:'Are you sure you want to delete this record'})
//                 .subscribe((isConfirmed)=>{
//                     //We get dialog result
//                     if(isConfirmed) {
//                         this.purchaseService.deletePurchase(id).subscribe((data:any)=>{
//                             this.getAllTblClasss(1,'');
//                             this.message="Record deleted Successfully";
//                         });
//                     }else {
//                        // alert('declined');
//                     }
//                 });
//             //We can close dialog calling disposable.unsubscribe();
//             //If dialog was not closed manually close it by timeout
//             setTimeout(()=>{
//                 disposable.unsubscribe();
//             },10000);
//         }
// }