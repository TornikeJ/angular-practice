import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserInfo } from './user-info.model';

@Injectable({ providedIn: 'root' })

export class DataStorageService {
    constructor(private http: HttpClient,
        private authService: AuthService) { }

    storeUser(user: UserInfo) {
        const token = this.authService.user.subscribe(
            user => {
                return user.token
            }
        )
        this.http.put(`https://first-project-efdd7.firebaseio.com/recipes.json?auth=<${token}>`, user).subscribe(
            (response) => {
                console.log(response);
            });
    }

    fetchUser() {
        return this.http.get<UserInfo[]>('https://first-project-efdd7.firebaseio.com/users.json')
            .pipe(
                tap((users) => {
                    console.log(users)
                    // this.recipesService.setRecipes(recipes);
                })
            );
    }
}