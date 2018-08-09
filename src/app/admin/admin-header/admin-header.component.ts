import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { } from 'jquery';
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
    jQuery('#leftSideBar').css("height","100vh !important");
    jQuery('#themeDefault').click(function(){
      document.getElementById('mybody').setAttribute("background" , "assets/img/dash-board-background.jpg");
      document.getElementById('mybody').style.backgroundColor = "lightblue";
      document.getElementById("leftSideBar").style.backgroundColor = "transparent";
      jQuery('.main-header').css("background-color","transparent");
      jQuery('.custom-table').css("color","#000000");
      jQuery('.custom-table').css("border","1px solid #f4f4f4");
      jQuery('.custom-panel').css("color", "#000000");
      jQuery('.lu-form').css("color", "#000000");
    });
  
    jQuery('#themeBlue').click(function(){
      document.getElementById('mybody').setAttribute("background" , "assets/img/dark-blue.jpg");
      document.getElementById('mybody').style.backgroundColor = "#8ab4bd85";
      document.getElementById("leftSideBar").style.backgroundColor = "#d0cfcf";
      jQuery('.main-header').css("background-color","#29aed6");
      jQuery('.custom-panel').css("color", "rgb(208, 207, 207)");
    });
  
    jQuery('#themeGreen').click(function(){
      document.getElementById('mybody').setAttribute("background" , "assets/img/dark-green.jpg");
      document.getElementById('mybody').style.backgroundColor = "#7fe68733";
      document.getElementById("leftSideBar").style.backgroundColor = "#a2d6b7";
      jQuery('.main-header').css("background-color","#238e00");
      jQuery('.custom-table').css("color","#ffffff");
      jQuery('.custom-panel').css("color", "#a2d6b7");
    });
  
    jQuery('#themeRed').click(function(){
      document.getElementById('mybody').setAttribute("background" , "assets/img/dark-red.jpg");
      document.getElementById('mybody').style.backgroundColor = "#fff0e5d9";
      document.getElementById("leftSideBar").style.backgroundColor = "#efcccdc2";
      jQuery('.main-header').css("background-color","#ff451be3");
      jQuery('.custom-table').css("color","#ffffff");
      jQuery('.custom-panel').css("color", "#efcccdc2");
    });
  
    jQuery('#themeOrange').click(function(){
      document.getElementById('mybody').setAttribute("background" , "assets/img/dark-pink.jpg");
      document.getElementById('mybody').style.backgroundColor = "#eae1b3";
      document.getElementById("leftSideBar").style.backgroundColor = "#ffe000fc";
      jQuery('.main-header').css("background-color","#444");
      jQuery('.custom-table').css("color","#ffffff");
      jQuery('.custom-panel').css("color", "#ffe000fc");
    });
  
    jQuery('#themeBrown').click(function(){
      document.getElementById('mybody').setAttribute("background" , "assets/img/dark-brown.jpg");
      document.getElementById('mybody').style.backgroundColor = "#fff";
      document.getElementById("leftSideBar").style.backgroundColor = "#f3ef75";
      jQuery('.main-header').css("background-color","#f3dd75");
      jQuery('.custom-table').css("color","#ffffff");
      jQuery('.custom-panel').css("color", "#f3ef75");
    });

    jQuery('#leftSideBar').mouseenter(function(){
      if(jQuery('#leftSideBar').css('width')!='227px'){
        jQuery('.sidebar-toggle').trigger('click');
        //jQuery('label').hide();
      }
    });
    
    jQuery('a').click(function(){
      jQuery('a').css("background-color","transparent");
      
      jQuery(this).css("background-color","#ffffff");
    });
  }
getHeaderName(){
this.mdata=localStorage.getItem('currentUser');
this.mydata=JSON.parse(this.mdata);
//console.log("this mdata="+this.mydata['data'].UserFirstName +'    '+this.mydata['employeeMasterDetailsDto'].UserMiddleName+'  '+this.mydata['employeeMasterDetailsDto'].UserLastName);
//console.log("mydata==="+this.mdata);
this.mydata=this.mydata['data'].employeeMasterDetailsDto;
//console.log(this.mydata);
}
  logOut(){
    localStorage.removeItem("currentUser");
    let mytoken=localStorage.getItem('currentUser');
    if(mytoken==null){
       this.router.navigate(['/login']);
      }
  }
  sidebartoggle(){

  }
  // $('.sidebar-toggle').click({
  //   //alert(document.getElementByClassName('main-sidebar').style.width);
  //   //$(.panel-body)
  //   alert();
  // });

}
