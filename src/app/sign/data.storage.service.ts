import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { storeUser } from './shared/user-store.model';


@Injectable({ providedIn: 'root' })

export class DataStorageService {
    constructor(private http: HttpClient) { }

    storeUser(userData: storeUser, id, token) {

        this.http.post(`https://first-project-efdd7.firebaseio.com/users.json?auth=${token}`, {
            [id]: userData
        }).subscribe();
    }



    fetchUser(user) {
        return this.http.get<storeUser[]>(`https://first-project-efdd7.firebaseio.com/users.json?auth=${user.token}`).pipe(
            map((users) => {
                const key = Object.keys(users).filter(
                    (key) => {
                        return !!users[key][user.id];
                    })

                return { [key[0]]: users[key[0]] };

            })
        );
    }

    updateUser(userData: storeUser, dbId, id, token) {
        this.http.put<storeUser[]>(`https://first-project-efdd7.firebaseio.com/users/${dbId}.json?auth=${token}`, {
            [id]: userData
        }).subscribe();
    }
}