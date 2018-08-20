import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { ClassSectionMasterService } from '../../service/class-section-master.service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-class-section',
  templateUrl: './class-section.component.html',
  styleUrls: ['./class-section.component.css']
})
export class ClassSectionComponent implements OnInit {
  private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  page:any;
  constructor(public classSectionMasterService:ClassSectionMasterService,private dialogService:DialogService,public router: Router,public mystorage:LocalStorageService) { 
    this.baseEncode=Base64.encode;
  }
  ngOnInit() {
    this.page=1
    this.getAllClassSection(this.page,'');
  }
public getAllClassSection(event,filter){
  this.message=this.mystorage.get("message");
  this.mystorage.remove("message");
  this.classSectionMasterService.listOfAllClassSectionMaster().subscribe((data:any)=>{
if(data.error) { 
      alert('Server Error');
} else {
      this.data=data['ClassSections'];
      this.totalItem = data['count'];
  }
},
error =>{
alert('Server error');
}
);
return event;
}
addClassSection(){
  this.router.navigate(['/admin/add-class-section']);
}
}
