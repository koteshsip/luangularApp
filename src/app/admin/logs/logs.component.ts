import { Component, OnInit } from '@angular/core';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { MyServiceService } from './../../my-service.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
private data;
  constructor(public mystorage:LocalStorageService,public myservice:MyServiceService) {}

  ngOnInit() {
    this.myservice.getalllogs().subscribe((data:any)=>{
      this.data=data; 
      console.log(this.data);     
});;
    AdminLTE.init();
  }

}
