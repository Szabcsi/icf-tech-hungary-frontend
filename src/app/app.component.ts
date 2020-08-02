import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';
import { MultilevelNodes } from 'ng-material-multilevel-menu';
import { menu as CONSTANT } from './constants';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { ClientService } from './clientservice/client.service';
import { IClient } from './client';


// tslint:disable-next-line:component-selector
@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls: ['app.component.css'] })
export class AppComponent implements OnInit, OnDestroy {
    currentUser: User;
    menu: MultilevelNodes[] = CONSTANT.sidebarDemoLinks;
    config = CONSTANT.sidebarConfigurations;
    displayList = false;
    dummyClient: IClient[] = [];
    previousLoginDate = '';
    errorMessage = '';
    callOnlyOnce = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
        private clientService: ClientService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        localStorage.setItem('loginAttempt', '3');
    }

    get isUserLoggedIn() {
        let result = false;
        if (this.currentUser) {
            result = true;
            if (!this.callOnlyOnce) {
                this.callOnlyOnce = true;
                this.setPreviousLoginDate();
                console.log(JSON.stringify(this.currentUser));
            }
        } else {
            result = false;
        }
        return result;
    }

    setPreviousLoginDate() {
        if ( this.currentUser ) {
                this.clientService.getClientByNameAndPassword(
                    this.currentUser.username, this.currentUser.password).subscribe(data => {
                    this.previousLoginDate = data.lastLogin;
                }
                , error => {
                    this.errorMessage = error;
                    console.log(this.errorMessage);
                });
        }
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    ngOnDestroy(): void {
        sessionStorage.clear();
        localStorage.clear();
    }

}
