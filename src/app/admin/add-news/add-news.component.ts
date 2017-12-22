import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { News } from "./news";
import { LocalStorageService } from 'angular-2-local-storage';
import { NewsService } from './../../service/news-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  
  private data;
  form: FormGroup;
  private news:any
  private IsExist:any;

  constructor(public mystorage:LocalStorageService,
    public newsService:NewsService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
     id=this.route.snapshot.params;
     model=  new News("","","","","","");
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getNewsById(myid);
    }
  }
   addNews(Newsinfo){
    if(Newsinfo.newsId){
      this.newsService.updateNews(Newsinfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/news-list']);
          });
    }else{
              this.newsService.addNews(Newsinfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/news-list']);
              });
    }
  }
   getNewsById(id){
    this.newsService.getNewsById(id).subscribe((data:any)=>{
      this.data=data;
      this.model=this.data;
      });
  }
  backList(){
    this.router.navigate(['/admin/news-list']);
  }
  //  newsAlreadyExist(){
  //   this.newsService.newsAlreadyExist().subscribe((data:any)=>{
  //     if(data){
  //         this.IsExist=data;
  //     }else{
  //         this.IsExist=false;
  //     }
  //   });
  // }
}

