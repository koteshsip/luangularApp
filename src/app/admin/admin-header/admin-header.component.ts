import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public mystorage:LocalStorageService,public router:Router) { }

  ngOnInit() {
  }
  logOut(){
    localStorage.removeItem("currentUser");
    let mytoken=localStorage.getItem('currentUser');
    if(mytoken==null){
       this.router.navigate(['/login']);
      }
  }

}
