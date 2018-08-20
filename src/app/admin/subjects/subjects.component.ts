import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
//import { MyServiceService } from './../../service/my-service.service';
import { SubjectService } from './../../service/subject-service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  page:any;
  constructor(private dialogService:DialogService,public router: Router,public mystorage:LocalStorageService,
    public subjectService:SubjectService) {
    this.baseEncode=Base64.encode;
  }
  ngOnInit() {
    // this.getcount();
    this.page=1
    this.getAllSubject(this.page,'');  
    AdminLTE.init();
  }
deleteSubject(id){
    let myid=Base64.decode(id);
    this.showConfirm(myid);
}
	public getAllSubject(event,filter){
          this.message=this.mystorage.get("message");
          this.mystorage.remove("message");
    this.subjectService.getAllSubject(event,filter).subscribe((data:any)=>{
				if(data.error) { 
					alert('Server Error');
				} else {
          this.data=data['subjectMaster'];
          this.totalItem = data['count'];
        }
			},
			error =>{
				alert('Server error');
			}
		);
		return event;
    }
  addSubject(){
    this.router.navigate(['/admin/add-subject']);
  }

  showConfirm(id) {
            let disposable = this.dialogService.addDialog(MessageComponent, {
                title:'Delete Confirm', 
                message:'Are you sure you want to delete this record'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        this.subjectService.deleteSubject(id).subscribe((data:any)=>{
                            this.getAllSubject(1,'');
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
