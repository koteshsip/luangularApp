import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { TimeTableService } from './../../service/timeTable-service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-time-table-list',
  templateUrl: './time-table-list.component.html',
  styleUrls: ['./time-table-list.component.css']
})
export class TimeTableListComponent implements OnInit {
  private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  page:any;
  constructor(private dialogService:DialogService,public router: Router
    ,public mystorage:LocalStorageService,public timeTableService:TimeTableService) { 
    this.baseEncode=Base64.encode;
  }
  ngOnInit() {
    this.page=1;
   this.getAllExams(this.page,""); 
  }
addTimetable(){
  this.router.navigate(['/admin/add-timetable']);
}

getAllExams(event,filter){
this.message=this.mystorage.get("message");
          this.mystorage.remove("message");
		this.timeTableService.getAllTimeTable(event,filter).subscribe((data:any)=>{
				if(data.error) { 
					alert('Server Error');
				} else {
                    this.data=data['timeTable'];//['news'];
                    this.totalItem = data['count'];
                }
			},
			error =>{
				alert('Server error');
			}
		);
		return event;
}
deleteExam(id){
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
                            this.timeTableService.deleteTimeTable(id).subscribe((data:any)=>{
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