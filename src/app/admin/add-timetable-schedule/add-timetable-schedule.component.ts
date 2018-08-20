import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { TimeTable } from "./timetable";
import { LocalStorageService } from 'angular-2-local-storage';
import { TimeTableService } from './../../service/timeTable-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';


@Component({
  selector: 'app-add-timetable-schedule',
  templateUrl: './add-timetable-schedule.component.html',
  styleUrls: ['./add-timetable-schedule.component.css']
})
export class AddTimetableScheduleComponent implements OnInit {

  
  private data;
  form: FormGroup;
  private timeTable:any
  private IsExist:any;

  constructor(public mystorage:LocalStorageService,
    public timeTableService:TimeTableService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
     id=this.route.snapshot.params;
    model=  new TimeTable("","","","","");
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getTimeTableById(myid);
    }
  }
  addTimeTable(TimeTableinfo){
    if(TimeTableinfo.timeTableId){
      this.timeTableService.updateTimeTable(TimeTableinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/timeTable-list']);
          });
    }else{
              this.timeTableService.addTimeTable(TimeTableinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/timeTable-list']);
              });
    }
  }
  getTimeTableById(id){
    this.timeTableService.getTimeTableById(id).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
      });
  }
  backList(){
    this.router.navigate(['/admin/timeTable-list']);
  }
  //  timeTableAlreadyExist(){
  //   this.timeTableService.timeTableAlreadyExist().subscribe((data:any)=>{
  //     if(data){
  //         this.IsExist=data;
  //     }else{
  //         this.IsExist=false;
  //     }
  //   });
  // }
}
