import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClientService } from '../clientservice/client.service';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { formatDate /*, DatePipe*/ } from '@angular/common';
import { Role } from '../role';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    currentDate = new Date();
    clientMap = new Map();

    constructor(private http: HttpClient,
                private clientService: ClientService ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.clientMap.set( 'admin', [ Role.Admin ] );
        this.clientMap.set( 'user1', [ Role.Editor, Role.Browser ] );
        this.clientMap.set( 'user2', [ Role.Editor ] );
        this.clientMap.set( 'user3', [ Role.Browser ] );
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        let pwd = password;
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    this.clientService.insertClient(
                        { name: username,
                          password: pwd,
                          lastLogin: formatDate(this.currentDate, 'MM-dd-yyyy hh:mm:ss', 'en-US'),
                          roles: this.clientMap.get(username).toString()
                        }).subscribe();
                }
                user.password = pwd;
                return user;
            }));
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
