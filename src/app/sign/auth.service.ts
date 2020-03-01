import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthService {

    APIKey = 'AIzaSyBTZVNKX7LVfqYT7w_lsLCXjw6ewPPsgY0';

    constructor(private http: HttpClient) { }

    signup(email: string, password: string) {
        return this.http.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );
    }

    signin(email: string, password: string) {
        return this.http.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            tap((obj) => {
                console.log(obj);
            }
            ),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        const errorMessage = 'An unknown error occured!';
        return throwError(errorMessage);
    }
}
