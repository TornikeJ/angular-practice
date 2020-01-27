import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

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
        });
    }

}