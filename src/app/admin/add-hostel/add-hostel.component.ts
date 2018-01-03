import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Hostel }    from './hostel';
import { LocalStorageService } from 'angular-2-local-storage';
import { HostelService } from './../../service/Hostel-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
export class AddHostelComponent implements OnInit {
  private data;
  form: FormGroup;
  private IsExist:any;
    constructor(public mystorage:LocalStorageService,
    public hostelService:HostelService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
    ngOnInit() {
      if(this.id['id']){
        let myid=Base64.decode(this.id['id']);
        this.getHostelById(myid);
      }
    }
  model = new Hostel('','','','','','');
    hostelAlreadyExist(value){
      if(value){
          this.hostelService.hostelAlreadyExist(value).subscribe((data:any)=>{
            if(data){
            this.IsExist=data;
            }else{
              this.IsExist=false;
            }
          });
      }
  }
    addHostel(hostelinfo){
      if(hostelinfo.hostelId){
      this.hostelService.updateHostel(hostelinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/hostel-list']);
          });
    }else{
              this.hostelService.addHostel(hostelinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/hostel-list']);
              });
    }
    }
    getHostelById(myid){
      this.hostelService.getHostelById(myid).subscribe((data:any)=>{
              this.data=data;
              this.model=this.data;
              });
    }
    backList(){
      this.router.navigate(['/admin/hostel-list']);
    }
  
}
