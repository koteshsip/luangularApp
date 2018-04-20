import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Transport } from "./transport";
import { LocalStorageService } from 'angular-2-local-storage';
import { TransportService } from './../../service/transport-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.css']
})
export class AddTransportComponent implements OnInit {
  private data;
  form: FormGroup;
  private transport:any
  private IsExist:any;

  constructor(public mystorage:LocalStorageService,
    public transportService:TransportService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
     id=this.route.snapshot.params;
     model=new Transport("","","","","","");
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getTransportById(myid);
    }
  }
  addTransport(Transportinfo){
    if(Transportinfo.transportId){
            this.transportService.updateTransport(Transportinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/transport-list']);
          });
    }else{
              this.transportService.addTransport(Transportinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/transport-list']);
              });
    }
  }
  getTransportById(id){
    this.transportService.getTransportById(id).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
      });
  }
  backList(){
    this.router.navigate(['/admin/transport-list']);
  }
  transportAlreadyExist(name){
    this.transportService.transportAlreadyExist(name).subscribe((data:any)=>{
      if(data){
          this.IsExist=data;
      }else{
          this.IsExist=false;
      }
    });
  }
}
