import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponeData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({ providedIn: 'root' })

export class AuthService {

    APIKey = 'AIzaSyBTZVNKX7LVfqYT7w_lsLCXjw6ewPPsgY0';
    private tokenExpirationTimer: any;
    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router:Router) { }

    signup(email: string, password: string) {
        return this.http.post<AuthResponeData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            tap((user) => {
                this.handeAuthentication(
                    user.email,
                    user.localId,
                    user.idToken,
                    +user.expiresIn)
            })
        );
    }

    signin(email: string, password: string) {
        return this.http.post<AuthResponeData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            tap((user) => {
                this.handeAuthentication(
                    user.email,
                    user.localId,
                    user.idToken,
                    +user.expiresIn)
            }
            ),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        const errorMessage = 'An unknown error occured!';
        return throwError(errorMessage);
    }

    private handeAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
        this.autoLogOut(expiresIn * 1000);
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/sign']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }

        this.tokenExpirationTimer = null;
    }

    autoLogOut(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration)
    }

    autoLogIn() {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));

        if (!userData) {
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if (loadedUser.token) {
            this.user.next(loadedUser);
        }
        const expirationDate = new Date((userData._tokenExpirationDate)).getTime() - new Date().getTime();
        this.autoLogOut(expirationDate);
    }
}
