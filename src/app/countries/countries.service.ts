import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CountriesService {
    constructor(private htppClient: HttpClient) { }

    getAllCountries() {
        return this.htppClient.get('https://restcountries.eu/rest/v2/all');
    }

}