import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@app/_services';
import { ClientService } from '../clientservice/client.service';
import { Role } from '../role';
import { LoginRequest } from './login.request.model';
declare var grecaptcha: any;

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    currentDate = new Date();
    captchaError = false;
    loginResponse: string;
    invalidLogin = false;
    response = '';


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private clientService: ClientService,
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboard';
    }


    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        const logingAttempt = localStorage.getItem('loginAttempt');
        // tslint:disable-next-line:radix
        // tslint:disable-next-line:no-unused-expression
        const logNum = +logingAttempt - 1;
        localStorage.setItem('loginAttempt', '' + logNum);
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        // Recaptcha start
        if (this.isMisspelledLoginAttempt()) {
            /*const response = grecaptcha.getResponse();
            if (response.length === 0) {
                    this.captchaError = true;
            } */
            const login = new LoginRequest();
            login.clientName = this.f.username.value;
            login.password = this.f.password.value;
            login.recaptchaResponse = '' || this.response;
            this.clientService.login(login).subscribe(data => {
            if (data.status === 200) {
                this.loading = true;
                this.authenticationService.login(this.f.username.value, this.f.password.value)
                    .pipe(first()).subscribe(
                        subData => {
                            this.router.navigate([this.returnUrl]);
                        },
                        error => {
                            this.error = error;
                            this.loading = false;
                        });
            } else {
                this.invalidLogin = true;
                this.loginResponse = data.message;
            }
            grecaptcha.reset();
            });
            } else {
                this.loading = true;
                this.authenticationService.login(this.f.username.value, this.f.password.value)
                    .pipe(first())
                    .subscribe(
                    data => {
                        this.router.navigate([this.returnUrl]);
                    },
                    error => {
                        this.error = error;
                        this.loading = false;
                    });
            }

    }

    isMisspelledLoginAttempt() {
        let result = false;
        const loginAttempt = localStorage.getItem('loginAttempt');
        if (loginAttempt === '3' || loginAttempt === '2' || loginAttempt === '1') {
            result = false;
        } else {
            result = true;
        }
        return result;
    }

    resolved(captchaResponse: string, res) {
        this.response = `${captchaResponse}`;
        console.log(`Resolved response token: ${captchaResponse}`);
    }
}
