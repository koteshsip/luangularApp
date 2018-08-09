import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { AssignmentService } from './../../service/assignment-service';
import { UserServices } from './../../service/user-service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {
  private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  public classSectiondata:any;
  subjectmasterdata:any;
  page:any;
  constructor(private dialogService:DialogService,
    public assignmentService:AssignmentService,
    public router: Router,public mystorage:LocalStorageService,public userService:UserServices) { 
    this.baseEncode=Base64.encode;
  }

  ngOnInit() {
    this.page=1;
    this.getAllUsers(this.page,"", "", ""); 
    this.getAllClassSection();
  }
addUser(){
  this.router.navigate(['/admin/addUser']);
}
getAllClassSection(){
    this.assignmentService.getAllClassSection().subscribe((data:any)=>{
                this.classSectiondata=data;
                });
              }
  getAllSubjectMasterSelect(){
    this.assignmentService.getAllSubjectMasterSelect().subscribe((data:any)=>{
      this.subjectmasterdata=data;
     });
  }
getAllUsers(event,filter,classname,sectionname){
this.message=this.mystorage.get("message");
          this.mystorage.remove("message");
		this.userService.getAllUsers(event,filter,classname,sectionname).subscribe((data:any)=>{
				if(data.error) { 
					alert('Server Error');
				} else {
                    this.data=data['user'];
                    this.totalItem = data['count'];
                }
			},
			error =>{
				alert('Server error');
			}
		);
		return event;
}
deleteUser(id){
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
                        this.userService.deleteUser(id).subscribe((data:any)=>{
                            this.getAllUsers(1,'','','');
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
