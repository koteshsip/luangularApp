import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { Drawing }    from './drawing';
import { LocalStorageService } from 'angular-2-local-storage';
import { DrawingService } from './../../service/Drawing-service';
import * as moment from 'moment/moment';
import { Base64 } from 'js-base64';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule,PatternValidator,FormControl }   from '@angular/forms';

@Component({
  selector: 'app-add-drawing',
  templateUrl: './add-drawing.component.html',
  styleUrls: ['./add-drawing.component.css']
})
export class AddDrawingComponent implements OnInit {
  private data;
  form: FormGroup;
  private IsExist:any;
    constructor(public mystorage:LocalStorageService,
    public drawingService:DrawingService
    ,public router: Router,private route: ActivatedRoute,
     public _FB: FormBuilder) { }
  id=this.route.snapshot.params;
    ngOnInit() {
      if(this.id['id']){
        let myid=Base64.decode(this.id['id']);
        this.getDrawingById(myid);
      }
    }
  model = new Drawing('','','','','','');
    drawingAlreadyExist(value){
      if(value){
          this.drawingService.drawingAlreadyExist(value).subscribe((data:any)=>{
            if(data){
            this.IsExist=data;
            }else{
              this.IsExist=false;
            }
          });
      }
  }
    addDrawing(drawinginfo){
      if(drawinginfo.drawingId){
      this.drawingService.updateDrawing(drawinginfo).subscribe((data:any)=>{
            this.mystorage.set("message","Record Updated Successfully");
            this.router.navigate(['/admin/drawing-list']);
          });
    }else{
              this.drawingService.addDrawing(drawinginfo).subscribe((data:any)=>{
              this.mystorage.set("message","Record add Successfully");
              this.router.navigate(['/admin/drawing-list']);
              });
    }
    }
    getDrawingById(myid){
      this.drawingService.getDrawingById(myid).subscribe((data:any)=>{
              this.data=data;
              this.model=this.data;
              });
    }
    backList(){
      this.router.navigate(['/admin/drawing-list']);
    }
  

}
