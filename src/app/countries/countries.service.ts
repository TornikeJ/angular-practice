import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class CountriesService {
    constructor(private htppClient: HttpClient) { }

    getAllCountries() {
        return this.htppClient.get('https://restcountries.eu/rest/v2/all');
    }

    getCountry(name: string) {
        return this.htppClient.get(`https://restcountries.eu/rest/v2/name/${name}`);
    }

}