import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    private message;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
        if(localStorage.getItem('message')){
            this.message=localStorage.getItem('message')
            localStorage.removeItem('message');
        }
        let loginstatus=localStorage.getItem('currentUser');
        if(loginstatus!=null){
            this.router.navigate(['admin/dashboard1']);
        }
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['admin/dashboard1']);
                } else {
                    this.message="Invalide credential please try again";
                    this.loading = false;
                }
            });
    }
}