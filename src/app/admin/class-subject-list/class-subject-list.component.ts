import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { ClassSubjectService } from '../../service/class-subject-service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-class-subject-list',
  templateUrl: './class-subject-list.component.html',
  styleUrls: ['./class-subject-list.component.css']
})
export class ClassSubjectListComponent implements OnInit {

  private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  page:any;
  constructor(public classSubjectService:ClassSubjectService,private dialogService:DialogService,public router: Router,public mystorage:LocalStorageService) { 
    this.baseEncode=Base64.encode;
  }
  ngOnInit() {
    this.page=1
    this.getAllClassSubject(this.page,'');
  }
public getAllClassSubject(event,filter){
  this.message=this.mystorage.get("message");
  this.mystorage.remove("message");
  this.classSubjectService.listOfAllClassSubject(event,filter).subscribe((data:any)=>{
if(data.error) { 
  alert('Server Error');
} else {
            this.data=data['classSubject'];
            this.totalItem = data['count'];
        }
},
error =>{
alert('Server error');
}
);
return event;
}
addClassSubject(){
  this.router.navigate(['/admin/add-class-subject']);
}

}
