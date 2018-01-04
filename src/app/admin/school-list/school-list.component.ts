import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { SchoolService } from './../../service/school-service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  page:any;
  constructor(private dialogService:DialogService,public router: Router
    ,public mystorage:LocalStorageService,public SchoolService:SchoolService) { 
    this.baseEncode=Base64.encode;
  }
  ngOnInit() {
    this.page=1;
   this.getAllExams(this.page,""); 
  }
addSchool(){
  this.router.navigate(['/admin/add-school']);
}

getAllExams(event,filter){
this.message=this.mystorage.get("message");
          this.mystorage.remove("message");
		this.SchoolService.getAllSchool(event,filter).subscribe((data:any)=>{
				if(data.error) { 
					alert('Server Error');
				} else {
                    this.data=data;//['news'];
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
                        this.SchoolService.deleteSchool(id).subscribe((data:any)=>{
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