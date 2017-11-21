import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { CityService } from './../../service/city-service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  page:any;
  constructor(private dialogService:DialogService,public router: Router,public mystorage:LocalStorageService,public cityService:CityService) {
    this.baseEncode=Base64.encode;
  }

  ngOnInit() {
    this.page=1
    this.getAllCity(this.page,'');  
    AdminLTE.init();
  }

deleteCity(id){
let myid=Base64.decode(id);
    this.showConfirm(myid);
}
	public getAllCity(event,filter){
          this.message=this.mystorage.get("message");
          this.mystorage.remove("message");
		this.cityService.getAllCity(event,filter).subscribe((data:any)=>{
				if(data.error) { 
					alert('Server Error');
				} else {
                    this.data=data['city'];
                    this.totalItem = data['count'];
        }
			},
			error =>{
				alert('Server error');
			}
		);
		return event;
    }
addCity(){
  this.router.navigate(['/admin/add-city']);
}
showConfirm(id) {
            let disposable = this.dialogService.addDialog(MessageComponent, {
                title:'Delete Confirm', 
                message:'Are you sure you want to delete this record'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        this.cityService.deleteCity(id).subscribe((data:any)=>{
                            this.getAllCity(1,'');
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
