import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class CountriesService {

    switchMode = new BehaviorSubject({});

    constructor(private htppClient: HttpClient) { }

    getAllCountries() {
        return this.htppClient.get('https://restcountries.eu/rest/v2/all');
    }

    getCountriesByRegion(region: string) {
        return this.htppClient.get(`https://restcountries.eu/rest/v2/region/${region}`);
    }

    getCountry(name: string) {
        return this.htppClient.get(`https://restcountries.eu/rest/v2/name/${name}`);
    }

    getCountryByCode(code: string) {
        return this.htppClient.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
    }

}