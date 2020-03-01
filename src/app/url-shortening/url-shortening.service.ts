import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class UrlShorteningService {

    url = 'https://rel.ink/api/links/';



    constructor(private httpClinet: HttpClient) { }



    createShortenedLink(link: string) {
        return this.httpClinet.post<
            {
                'hashid': string,
                'url': string,
                'created_at': string
            }
        >(this.url, {
            "url": link
        }).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!';

        if (!errorRes.error) {
            return throwError(errorMessage);
        }

        switch (errorRes.message) {
            case 'Http failure response for https://rel.ink/api/links/: 400 OK':
                errorMessage = 'Enter a valid URL';
                break;
            default:
                errorMessage = 'An unknown error occured!'
        }

        return throwError(errorMessage);
    }

}