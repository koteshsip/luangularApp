import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
declare var AdminLTE: any;
import { LocalStorageService } from 'angular-2-local-storage';
import { NotesService } from './../../service/notes-service';
import { DialogService } from "ng2-bootstrap-modal";
import { DatepickerOptions } from 'ng2-datepicker';
import { Base64 } from 'js-base64';
@Component({
  selector: 'app-notes-category-list',
  templateUrl: './notes-category-list.component.html',
  styleUrls: ['./notes-category-list.component.css']
})
export class NotesCategoryListComponent implements OnInit {

  private message;
  private data  = [];
  private baseEncode:any;
  public totalItem:any;
  page:any;
  constructor(private dialogService:DialogService,public router: Router,public mystorage:LocalStorageService,public notesService:NotesService) { 
    this.baseEncode=Base64.encode;
  }
  addUser(){
    this.router.navigate(['/admin/add-topic']);
  }
  ngOnInit() {
    this.page=1;
    this.getAllNotes(this.page,"");
  }
  getAllNotes(event,filter){
    this.message=this.mystorage.get("message");
              this.mystorage.remove("message");
        this.notesService.getAllNotes(event,filter).subscribe((data:any)=>{
            if(data.error) { 
              alert('Server Error');
            } else {
                      this.data = data;
                      this.totalItem = data[0]['RecordTotal'];
                    }
          },
          error =>{
            alert('Server error');
          }
        );
        return event;
    }
    deleteUser(id){
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
                            // this.userService.deleteUser(id).subscribe((data:any)=>{
                            //     this.getAllTopic(1,'');
                            //     this.message="Record deleted Successfully";
                            // });
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