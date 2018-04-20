import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { State }    from './state';
import { LocalStorageService } from 'angular-2-local-storage';
import { StateService } from './../../service/state-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {
private data;
private countrys:any;
form: FormGroup;
private IsExist:any;
  constructor(public mystorage:LocalStorageService,
  public stateService:StateService
  ,public router: Router,private route: ActivatedRoute,
   public _FB: FormBuilder) { }
id=this.route.snapshot.params;
  ngOnInit() {
    this.getAllCountry();
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getStateById(myid);
    }
  }
model = new State('',this.countrys);
  stateAlreadyExist(stateName,countryId){
    if(countryId && stateName){
        this.stateService.stateAlreadyExist(stateName,countryId).subscribe((data:any)=>{
          if(data){
          this.IsExist=data;
          }else{
            this.IsExist=false;
          }
        });
    }
}
  addState(stateInfo){
    if(stateInfo.stateId){
          this.stateService.updateState(stateInfo).subscribe((data:any)=>{
          this.mystorage.set("message","Record Updated Successfully");
          this.router.navigate(['/admin/state-list']);
        });
  }else{
            this.stateService.addState(stateInfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record add Successfully");
            this.router.navigate(['/admin/state-list']);
            });
  }
  }
getAllCountry(){
this.stateService.getAllCountry().subscribe((data:any)=>{
            this.countrys=data;
            console.log("this.countrys=="+this.countrys);
            });

}
  getStateById(myid){
    this.stateService.getStateById(myid).subscribe((data:any)=>{
            data['countryId'] = data.country.countryId;
            this.data=data;
            this.model=this.data;
            });
  }
  backList(){
    this.router.navigate(['/admin/state-list']);
  }
}
