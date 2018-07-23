import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { } from 'jquery';
import * as moment from 'moment';
import {} from 'wheelnav/js/dist/wheelnav.js'
import { LocalStorageService } from 'angular-2-local-storage';
import { MyServiceService } from './../../my-service.service';

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-dashboard1',
  templateUrl: './admin-dashboard1.component.html',
  styleUrls: ['./admin-dashboard1.component.css']
})
export class AdminDashboard1Component implements OnInit {
  
  knob: JQuery;
  calendar: JQuery;
  totalItem:any;
  //public Twheel: wheelnav;
  //twheel = require('../../../../node_modules/wheelnav/js/dist/wheelnav.min.js');
	menuContainer: HTMLElement
  constructor(public router: Router,public mystorage:LocalStorageService,public myservice:MyServiceService) { 
  }
  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
    // Make the dashboard widgets sortable Using jquery UI

    
    

   

    
//this.getcount();
//this.getLogcount();

  }
logtotalItem:any;
getcount(){
        this.myservice.getnotificationcount().subscribe((data:any)=>{
          if(data!=null){
            if(data.error) { 
              alert('Server Error');
            } else {
                this.totalItem = data      
            }
          }else{
            this.totalItem = 0;
          }
			  },
          error =>{
            alert('Server error');
          }
		  );
    }
    getLogcount(){
        this.myservice.getlogcount().subscribe((data:any)=>{
        if(data!=null){
          if(data.error) { 
					  alert('Server Error');
				  } else {
                    this.logtotalItem = data;
          }
        }else{
          this.logtotalItem = 0;
        }
			  },
          error =>{
            alert('Server error');
          }
		  );
    }
    
}
