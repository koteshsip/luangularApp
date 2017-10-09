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
    this.mystorage.clearAll("token");
    let mytoken=this.mystorage.get("token");
    if(mytoken==null){
       this.router.navigate(['/login']);
      }
  }

}
