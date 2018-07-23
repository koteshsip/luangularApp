import { Component,OnInit,ElementRef } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { MyUser }            from './formData.model';
import { StudentDataService }     from './formData.service';
import { UserServices }     from './../../service/user-service';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
    user: MyUser;
    form: any;
    teacherdata:any;
    private IsExist:any;
    baseEncode:any;
    classIds:any;
    constructor(private formDataService: StudentDataService,private elem: 
        ElementRef,private myuser : UserServices,private router:Router,private route: ActivatedRoute) {
    this.baseEncode=Base64.encode;
    }
id=this.route.snapshot.params;
Gender = ["Male","Female"];
ngOnInit() {      
        this.user = this.formDataService.getUser();
        //this.user['gender']=this.Gender[0];
        this.getAllClassSection();
        this.getAllUserSelect();
        if(this.id['id']){
            let myid=Base64.decode(this.id['id']);
        }else{
            this.formDataService.resetFormData();
        }
    }
   save(form: any) {
    if (!form.valid) 
        return;
    this.formDataService.setUser(this.user);
 }
 emailAlreadyExist(event){
    let email=Base64.encode(event);
    this.myuser.userAlreadyExist(email).subscribe((data:any)=>{
        if(data){
          this.IsExist=data;
          }else{
            this.IsExist=false;
          }
    });
}

getAllClassSection(){
    this.myuser.getAllClassSection().subscribe((data:any)=>{
        this.myuser["classId"]=data;
        this.classIds=data;
    })
}
getAllUserSelect(){
    this.myuser.getAllUserSelect().subscribe((data:any)=>{
      this.teacherdata=data;
  });
}

}
