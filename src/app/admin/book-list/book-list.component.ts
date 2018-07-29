import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { BookService } from './../../service/book-service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  page:any;
  constructor(private dialogService:DialogService,
    public router: Router,public mystorage:LocalStorageService,
    public bookService:BookService) { 
    this.baseEncode=Base64.encode;
  }

  ngOnInit() {
    this.page=1;
   this.getAllTblClasss(this.page,""); 
  }
addBook(){
  this.router.navigate(['/admin/add-book']);
}

getAllTblClasss(event,filter){
this.message=this.mystorage.get("message");
          this.mystorage.remove("message");
		this.bookService.getAllBook(event,filter).subscribe((data:any)=>{
				if(data.error) { 
					alert('Server Error');
				} else {
                    this.totalItem = data['Count'];
                    this.data=data['BookData'];                   
                }
			},
			error =>{
				alert('Server error');
			}
		);
		return event;
}
deleteTblClass(id){
let myid=Base64.decode(id);
    this.showConfirm(myid);
}
  showConfirm(id) {
            let disposable = this.dialogService.addDialog(MessageComponent, {
                title:'Delete Confirm', 
                message:'Are you sure you want to delete this record'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        this.bookService.deleteBook(id).subscribe((data:any)=>{
                            this.getAllTblClasss(1,'');
                            this.message="Record deleted Successfully";
                        });
                    }else {
                       // alert('declined');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            setTimeout(()=>{
                disposable.unsubscribe();
            },10000);
        }
}