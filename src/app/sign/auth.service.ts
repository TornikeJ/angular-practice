import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, map, delay } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { UserAuthenticate } from './shared/user-authenticate.model';
import { Router } from '@angular/router';

export interface AuthResponeData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

export interface SensitiveData {

    "localId": string,
    "email": string,
    "emailVerified": boolean,
    "displayName": string,
    "providerUserInfo": [
        {
            "providerId": string,
            "displayName": string,
            "photoUrl": string,
            "federatedId": string,
            "email": string,
            "rawId": string,
            "screenName": string
        }
    ],
    "photoUrl": string,
    "passwordHash": string,
    "passwordUpdatedAt": number,
    "validSince": string,
    "disabled": boolean,
    "lastLoginAt": string,
    "createdAt": string,
    "customAuth": boolean
}

@Injectable({ providedIn: 'root' })

export class AuthService {

    APIKey = 'AIzaSyBTZVNKX7LVfqYT7w_lsLCXjw6ewPPsgY0';
    private tokenExpirationTimer: any;
    user = new BehaviorSubject<UserAuthenticate>(null);

    constructor(private http: HttpClient, private router: Router) { }

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
            }),
            catchError(this.handleError)
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


    getSensitiveData(token): Observable<SensitiveData> {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${this.APIKey}`, {
            idToken: token
        }).pipe(map((payload) => {
            return payload['users'][0]
        }))
    }

    emailVerification(token) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${this.APIKey}`,
            {
                requestType: "VERIFY_EMAIL",
                idToken: token
            }).pipe(catchError(this.handleError))

    }

    changeEmail(token, email) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${this.APIKey}`,
            {
                idToken: token,
                email,
                returnSecureToken: true
            }).pipe(catchError(this.handleError));
    }

    private handleError(response: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!';


        if (!response.error || !response.error.error) {
            return throwError(errorMessage);
        }


        switch (response.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Invalid password entered';
                break;
            case 'MISSING_PASSWORD':
                errorMessage = 'Missing password';
                break;
            case 'INVALID_EMAIL':
                errorMessage = 'The email address is badly formatted';
                break;
            case 'INVALID_ID_TOKEN':
                errorMessage = "The user's credential is no longer valid. The user must sign in again.";
                break;
            case 'USER_NOT_FOUND':
                errorMessage = "There is no user record corresponding to this identifier. The user may have been deleted.";
                break;
            case 'TOKEN_EXPIRED':
                errorMessage = "The user's credential is no longer valid. The user must sign in again.";
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = "Too many attempts, try later.";
                break;
            case 'USER_DISABLED':
                errorMessage = 'The user account has been disabled by an administrator.';
                break;

        }

        return throwError(errorMessage);
    }

    private handeAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new UserAuthenticate(email, userId, token, expirationDate);
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

        const loadedUser = new UserAuthenticate(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if (loadedUser.token) {
            this.user.next(loadedUser);
        }
        const expirationDate = new Date((userData._tokenExpirationDate)).getTime() - new Date().getTime();
        this.autoLogOut(expirationDate);
    }
}
