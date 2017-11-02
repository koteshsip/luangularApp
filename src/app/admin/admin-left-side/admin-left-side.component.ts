import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {
mdata:any;
mydata:any;
  constructor() { }

  ngOnInit() {
    this.getHeaderName();
  }
getHeaderName(){
this.mdata=localStorage.getItem('currentUser');
this.mydata=JSON.parse(this.mdata).data;
}
}
