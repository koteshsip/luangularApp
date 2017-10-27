import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
addUser(){
  this.router.navigate(['/admin/addUser']);
}
}
