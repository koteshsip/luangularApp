import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
//import {OrderrByPipe} from './../../order-by-pipe/orderby.pipe';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { MyServiceService } from './../../my-service.service';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  providers: [MyServiceService]
})
export class LogsComponent implements OnInit {
  data = [];
  totalItem: Number = 0;
  page: any;
  loading: boolean;
  constructor(public mystorage: LocalStorageService, public myservice: MyServiceService) { }
  ngOnInit() {
    this.page = 1;
    this.getLogData(this.page, '');
    AdminLTE.init();
  }
  key: string = 'ActionType'; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  };

  public getLogData(event, filter) {
    this.loading = true;
    this.myservice.getalllogs(event, filter).subscribe((data: any) => {
      this.loading = false;
      if (data.error) {
        alert('Server Error');
      } else {
        this.data = data;
        console.log("data===="+data);
        this.totalItem = data[0]['RecordTotal'];
      }
    },
      error => {
        alert('Server error');
      }
    );
    return event;
  }

}
