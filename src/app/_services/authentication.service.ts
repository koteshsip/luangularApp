import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {AppSettings} from '../appSettings'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    //public mysetting:AppSettings['API_ENDPOINT'];
    constructor(private http: Http) {
        // this.mysetting=appSettings.API_ENDPOINT;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(AppSettings.API_ENDPOINT+'Login', { emailId: username, currentPassword: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().employeeMasterDetailsDto.Token; 
                //console.log("token==="+response.json().item.Token);
                if (token) {
                    // set token property
                    this.token = token;
                    //console.log("Token"+token);
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    //localStorage.setItem('currentUser', JSON.stringify({data:response.json()}));
                    localStorage.setItem('currentUser', JSON.stringify({ email: username, token: token ,data:response.json()}));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
            
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}