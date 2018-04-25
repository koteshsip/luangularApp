import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
mdata:any;
mydata:any;
  constructor(public mystorage:LocalStorageService,public router:Router) { }

  ngOnInit() {
    this.getHeaderName();
  }
getHeaderName(){
this.mdata=localStorage.getItem('currentUser');
this.mydata=JSON.parse(this.mdata).data;
}
  logOut(){
    localStorage.removeItem("currentUser");
    let mytoken=localStorage.getItem('currentUser');
    if(mytoken==null){
       this.router.navigate(['/login']);
      }
  }
  sidebartoggle(){
    // const leftbar=document.getElementsByClassName('main-sidebar');//style.height = '10px';
    // alert('hi'+leftbar);
    const cnElems = document.getElementsByClassName("main-sidebar");
    for (let i = 0; i < cnElems.length; i++) {
      const e = cnElems[i];
        if (e instanceof HTMLElement) {
            e.style.width= "530px";
        }
    }
  }
  // $('.sidebar-toggle').click({
  //   //alert(document.getElementByClassName('main-sidebar').style.width);
  //   //$(.panel-body)
  //   alert();
  // });

}
