import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Country }    from './country';
import { LocalStorageService } from 'angular-2-local-storage';
import { CountryService } from './../../service/country-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
private data;
form: FormGroup;
private IsExist:any;
  constructor(public mystorage:LocalStorageService,
  public countryService:CountryService
  ,public router: Router,private route: ActivatedRoute,
   public _FB: FormBuilder) { }
id=this.route.snapshot.params;
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getCountryById(myid);
    }
  }
model = new Country('');
  countryAlreadyExist(value){
    if(value){
        this.countryService.countryAlreadyExist(value).subscribe((data:any)=>{
          if(data){
          this.IsExist=data;
          }else{
            this.IsExist=false;
          }
        });
    }
}
  addCountry(countryinfo){
    if(countryinfo.countryId){
    this.countryService.updateCountry(countryinfo).subscribe((data:any)=>{
          this.mystorage.set("message","Record Updated Successfully");
          this.router.navigate(['/admin/country-list']);
        });
  }else{
            this.countryService.addCountry(countryinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record add Successfully");
            this.router.navigate(['/admin/country-list']);
            });
  }
  }
  getCountryById(myid){
    this.countryService.getCountryById(myid).subscribe((data:any)=>{
            this.data=data;
            this.model=this.data;
            });
  }
  backList(){
    this.router.navigate(['/admin/country-list']);
  }

}
