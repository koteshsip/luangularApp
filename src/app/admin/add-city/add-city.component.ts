import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { City }    from './city';
import { LocalStorageService } from 'angular-2-local-storage';
import { CityService } from './../../service/city-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

 private data;
form: FormGroup;
private states:any
private IsExist:any;
  constructor(public mystorage:LocalStorageService,
  public cityService:CityService
  ,public router: Router,private route: ActivatedRoute,
   public _FB: FormBuilder) { }
id=this.route.snapshot.params;
  ngOnInit() {
    this.getAllState();
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getCityById(myid);
    }
  }
model = new City('',this.states);
  cityAlreadyExist(cityName,stateId){
    if(stateId && cityName){
        this.cityService.cityAlreadyExist(cityName,stateId).subscribe((data:any)=>{
          if(data){
          this.IsExist=data;
          }else{
            this.IsExist=false;
          }
        });
    }
}
  addCity(countryinfo){
    if(countryinfo.cityId){
      alert(countryinfo.cityId);
    this.cityService.updateCity(countryinfo).subscribe((data:any)=>{
          this.mystorage.set("message","Record Updated Successfully");
          this.router.navigate(['/admin/city-list']);
        });
  }else{
            this.cityService.addCity(countryinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record add Successfully");
            this.router.navigate(['/admin/city-list']);
            });
  }
  }
  getCityById(myid){
    this.cityService.getCityById(myid).subscribe((data:any)=>{
            data['stateId']=data.stateMaster.stateId;
            this.data=data;
            this.model=this.data;
            });
  }
  getAllState(){
    this.cityService.getAllState().subscribe((data:any)=>{
    this.states=data;
    });
  }
  backList(){
    this.router.navigate(['/admin/city-list']);
  }

}
