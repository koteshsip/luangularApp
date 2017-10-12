import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { MyServiceService } from './../../my-service.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  private data;
  constructor(public router: Router,public mystorage:LocalStorageService,public myservice:MyServiceService) {}
  ngOnInit() {
  this.myservice.getallnotifications().subscribe((data:any)=>{
      this.data=data;     
  });
    AdminLTE.init();
  }

  addNotification(){
    this.router.navigate(['/admin/addNotificatin']);
  }
}