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
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
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
    this.getNotificationData(this.page,'');  
    AdminLTE.init();
  }
deleteNotification(id){
    let myid=Base64.decode(id);
    this.showConfirm(myid);
}
	public getNotificationData(event,filter){
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
  addNotification(){
    this.router.navigate(['/admin/addNotificatin']);
  }

  showConfirm(id) {
            let disposable = this.dialogService.addDialog(MessageComponent, {
                title:'Delete Confirm', 
                message:'Are you sure you want to delete this record'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        this.myservice.deleteNotification(id).subscribe((data:any)=>{
                            this.getNotificationData(1,'');
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