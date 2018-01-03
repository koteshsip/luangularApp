import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Book }    from './book';
import { LocalStorageService } from 'angular-2-local-storage';
import { BookService } from './../../service/book-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  private data;
  form: FormGroup;
  private IsExist:any;
    constructor(public mystorage:LocalStorageService,
    public bookService:BookService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
  ngOnInit() {
    if(this.id['id']){
      let myid=Base64.decode(this.id['id']);
      this.getBookById(myid);
    }
  }
  model = new Book('','','','','','','','');
  bookAlreadyExist(value){
    if(value){
        this.bookService.bookAlreadyExist(value).subscribe((data:any)=>{
          if(data){
          this.IsExist=data;
          }else{
            this.IsExist=false;
          }
        });
    }
}
addBook(bookinfo){
  if(bookinfo.bookId){
  this.bookService.updateBook(bookinfo).subscribe((data:any)=>{
        this.mystorage.set("message","Record Updated Successfully");
        this.router.navigate(['/admin/book-list']);
      });
}else{
          this.bookService.addBook(bookinfo).subscribe((data:any)=>{
          this.mystorage.set("message","Record add Successfully");
          this.router.navigate(['/admin/book-list']);
          });
}
}
getBookById(myid){
  this.bookService.getBookById(myid).subscribe((data:any)=>{
          this.data=data;
          this.model=this.data;
          });
}
backList(){
  this.router.navigate(['/admin/book-list']);
}

}