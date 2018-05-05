import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { MyServiceService } from './../../my-service.service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-library-settings',
  templateUrl: './library-settings.component.html',
  styleUrls: ['./library-settings.component.css']
})
export class LibrarySettingsComponent implements OnInit {
  private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  page:any;
  constructor(private dialogService:DialogService,public router: Router,public mystorage:LocalStorageService,public myservice:MyServiceService) {
    this.baseEncode=Base64.encode;
  }
  ngOnInit() {
    // this.getcount();
    this.page=1
    this.getLibrarySettingData(this.page,'');  
    AdminLTE.init();
  }
deleteLibrarySetting(id){
    let myid=Base64.decode(id);
    this.showConfirm(myid);
}
	public getLibrarySettingData(event,filter){
          this.message=this.mystorage.get("message");
          this.mystorage.remove("message");
		this.myservice.getallnotifications(event,filter).subscribe((data:any)=>{
				if(data.error) { 
					alert('Server Error');
				} else {
          this.data=data['notifications'];
        this.totalItem = data['count'];
        }
			},
			error =>{
				alert('Server error');
			}
		);
		return event;
    }
  addLibrarySetting(){
    this.router.navigate(['/admin/addLibrarySetting']);
  }

  showConfirm(id) {
            let disposable = this.dialogService.addDialog(MessageComponent, {
                title:'Delete Confirm', 
                message:'Are you sure you want to delete this record'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        this.myservice.deleteNotification(id).subscribe((data:any)=>{
                            this.getLibrarySettingData(1,'');
                            this.message="Record deleted Successfully";
                        });
                    }
                    else {
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
