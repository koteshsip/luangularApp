import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { LibraryTransaction }    from './booking-request';
import { LocalStorageService } from 'angular-2-local-storage';
import { LibraryTransactionService } from './../../service/libraryBookingRequest';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-booking-request',
  templateUrl: './add-booking-request.component.html',
  styleUrls: ['./add-booking-request.component.css']
})
export class AddBookingRequestComponent implements OnInit {

  private data;
  form: FormGroup;
  private IsExist:any;
    constructor(public mystorage:LocalStorageService,
    public LibraryTransactionService:LibraryTransactionService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
    ngOnInit() {
      if(this.id['id']){
        let myid=Base64.decode(this.id['id']);
        this.getLibraryTransactionById(myid);
      }
    }
  model = new LibraryTransaction('','','','','','','','','','','','');
    LibraryTransactionAlreadyExist(value){
      if(value){
          this.LibraryTransactionService.libraryTransactionAlreadyExist(value).subscribe((data:any)=>{
            if(data){
            this.IsExist=data;
            }else{
              this.IsExist=false;
            }
          });
      }
  }
    addLibraryTransaction(LibraryTransactioninfo){
      if(LibraryTransactioninfo.LibraryTransactionId){
      this.LibraryTransactionService.updateLibraryTransaction(LibraryTransactioninfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/LibraryTransaction-list']);
          });
    }else{
              this.LibraryTransactionService.addLibraryTransaction(LibraryTransactioninfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/LibraryTransaction-list']);
              });
    }
    }
    getLibraryTransactionById(myid){
      this.LibraryTransactionService.getLibraryTransactionById(myid).subscribe((data:any)=>{
              this.data=data;
              this.model=this.data;
              });
    }
    backList(){
      this.router.navigate(['/admin/LibraryTransaction-list']);
    }
}
