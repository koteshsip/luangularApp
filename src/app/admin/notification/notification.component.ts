import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { FormGroup, FormArray, FormBuilder,
          Validators,ReactiveFormsModule  }   from '@angular/forms';
import { Notification }    from './notification';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(public _FB: FormBuilder) { }

  ngOnInit() {

  }
model = new Notification('18', 'wq','dsfd' , 'sdfds',new Date);
addNotification(data){
console.log(data);
}

}
