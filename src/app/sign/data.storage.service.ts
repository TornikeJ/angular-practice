import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, tap, exhaustMap, take } from 'rxjs/operators';
import { UserInput } from './shared/user-input.model';
import { storeUser } from './shared/user-store.model';
import { AuthService } from './auth.service';


@Injectable({ providedIn: 'root' })

export class DataStorageService {
    constructor(private http: HttpClient,
        private authService: AuthService) { }

    storeUser(userData: storeUser, id, token) {

        this.http.post(`https://first-project-efdd7.firebaseio.com/users.json?auth=${token}`, {
            [id]: userData
        }).subscribe(
            (response) => {
                console.log(response);
            }
        );
    }


    fetchUser(user) {
        this.http.get<storeUser[]>(`https://first-project-efdd7.firebaseio.com/users.json?auth=${user.token}`).pipe(
            map((users) => {
                return Object.keys(users).forEach((key) => {
                    const loggedUser = users[key][user.id];

                    if (!!loggedUser) {
                        console.log(loggedUser);
                        return loggedUser;
                    }
                })
            })
        ).subscribe((users) => console.log(users));
    }
}