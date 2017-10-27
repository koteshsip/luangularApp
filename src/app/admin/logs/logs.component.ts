import { Component, OnInit } from '@angular/core';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { MyServiceService } from './../../my-service.service';
// import { Ng2TableModule } from 'ng2-table/ng2-table';
import { Pipe } from '@angular/core';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  providers: [MyServiceService]
})
export class LogsComponent implements OnInit {
data = [];
//users = [];
totalItem:Number = 0;
  constructor(public mystorage:LocalStorageService,public myservice:MyServiceService) {}
  ngOnInit() {
    this.getLogData(1);
    AdminLTE.init();
  }
  // public getLogData(event){
  //   this.myservice.getalllogs(event).subscribe((data:any)=>{
  //     this.data=data;//.json();
  //     this.totalItem = 48; 
  //     console.log(this.data);     
  //     });
  // }

	public getLogData(event){
		this.myservice.getalllogs(event).subscribe((data:any)=>{
				if(data.error) { 
					alert('Server Error');
				} else {
          this.data=data;
          this.totalItem = 48;
				}
			},
			error =>{
				alert('Server error');
			}
		);
		return event;
	}

}
