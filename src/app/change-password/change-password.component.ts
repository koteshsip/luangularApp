import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
model: any = {};
//  repassword:any;
//  password:any;
  constructor() { }

  ngOnInit() {
    this.model.repassword="";
    this.model.password="";
  }

}
